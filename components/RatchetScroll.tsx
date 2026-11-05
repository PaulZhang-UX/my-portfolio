'use client';

import { useEffect } from 'react';
import { useApp } from '../context/ThemeLanguageContext';
import { duckBackgroundMusic } from '../utils/audioSynth';

export const ratchetConfig = {
  stepThreshold: 100,
  stepDistance: 72,
  animationDuration: 130,
  inputLockDuration: 70,
  fastWheelThreshold: 70,
  maxStepsPerInput: 4,
  overshootDistance: 3,
  overshootDuration: 45,
  audioVolume: 0.52,
  audioPlaybackRateMin: 0.97,
  audioPlaybackRateMax: 1.03,
  minimumTickInterval: 42,
  noiseFloor: 0.35,
  debug: false,
} as const;

interface RatchetScrollProps {
  enabled: boolean;
}

const INTERACTIVE_SELECTOR = [
  'input',
  'textarea',
  'select',
  '[contenteditable="true"]',
  '[data-native-scroll]',
].join(',');

const KEYBOARD_INTERACTIVE_SELECTOR = [
  'input',
  'textarea',
  'select',
  'button',
  'a',
  '[role="button"]',
  '[contenteditable="true"]',
].join(',');

function normalizeWheelDelta(event: WheelEvent, pageHeight: number) {
  if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) return event.deltaY * 16;
  if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) return event.deltaY * pageHeight;
  return event.deltaY;
}

function canScrollInDirection(element: HTMLElement, direction: number) {
  const maximum = element.scrollHeight - element.clientHeight;
  if (maximum <= 1) return false;
  return direction > 0 ? element.scrollTop < maximum - 1 : element.scrollTop > 1;
}

function shouldKeepNativeScroll(target: EventTarget | null, root: HTMLElement, direction: number) {
  if (!(target instanceof Element)) return false;
  if (target.closest(INTERACTIVE_SELECTOR)) return true;

  let node: HTMLElement | null = target instanceof HTMLElement ? target : target.parentElement;
  while (node && node !== root) {
    const style = window.getComputedStyle(node);
    const isScrollable = /(auto|scroll)/.test(style.overflowY);
    if (isScrollable && canScrollInDirection(node, direction)) return true;
    node = node.parentElement;
  }

  const selection = window.getSelection();
  return Boolean(selection && !selection.isCollapsed);
}

function isEditableTarget(target: EventTarget | null) {
  return target instanceof Element && Boolean(target.closest(KEYBOARD_INTERACTIVE_SELECTOR));
}

function createRatchetTickPlayer(volume: number) {
  let context: AudioContext | null = null;
  let lastTickAt = 0;
  let disposed = false;

  const play = () => {
    if (disposed || document.hidden) return;
    const nowMilliseconds = performance.now();
    if (nowMilliseconds - lastTickAt < ratchetConfig.minimumTickInterval) return;
    lastTickAt = nowMilliseconds;

    try {
      context ??= new AudioContext();
      if (context.state === 'suspended') void context.resume();

      const now = context.currentTime;
      const playbackRate =
        ratchetConfig.audioPlaybackRateMin +
        Math.random() * (ratchetConfig.audioPlaybackRateMax - ratchetConfig.audioPlaybackRateMin);

      // Short filtered-noise transient: the crisp metal contact of the pawl.
      const noiseDuration = 0.018;
      const noiseBuffer = context.createBuffer(
        1,
        Math.ceil(context.sampleRate * noiseDuration),
        context.sampleRate,
      );
      const noiseData = noiseBuffer.getChannelData(0);
      for (let index = 0; index < noiseData.length; index += 1) {
        const decay = 1 - index / noiseData.length;
        noiseData[index] = (Math.random() * 2 - 1) * decay;
      }

      const noise = context.createBufferSource();
      const noiseFilter = context.createBiquadFilter();
      const noiseGain = context.createGain();
      noise.buffer = noiseBuffer;
      noise.playbackRate.setValueAtTime(playbackRate, now);
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(2700 * playbackRate, now);
      noiseFilter.Q.setValueAtTime(1.4, now);
      noiseGain.gain.setValueAtTime(volume * 0.72, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + noiseDuration);
      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(context.destination);

      // A tiny hard tonal edge makes the transient read as “click”, not hiss.
      const click = context.createOscillator();
      const clickGain = context.createGain();
      click.type = 'square';
      click.frequency.setValueAtTime(1450 * playbackRate, now);
      click.frequency.exponentialRampToValueAtTime(920 * playbackRate, now + 0.012);
      clickGain.gain.setValueAtTime(volume * 0.24, now);
      clickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.014);
      click.connect(clickGain);
      clickGain.connect(context.destination);

      noise.start(now);
      noise.stop(now + noiseDuration);
      click.start(now);
      click.stop(now + 0.015);
    } catch {
      // Audio is optional: scrolling must continue if Web Audio is unavailable.
    }
  };

  const dispose = () => {
    disposed = true;
    if (context && context.state !== 'closed') void context.close();
    context = null;
  };

  return { play, dispose };
}

export const RatchetScroll = ({ enabled }: RatchetScrollProps) => {
  const { soundEnabled } = useApp();

  useEffect(() => {
    if (!enabled) return;

    const root = document.querySelector<HTMLElement>('[data-ratchet-scroll]');
    if (!root) return;

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!finePointer.matches || reducedMotion.matches) return;

    const tick = createRatchetTickPlayer(ratchetConfig.audioVolume);
    let accumulatedDelta = 0;
    let currentPosition = root.scrollTop;
    let targetPosition = root.scrollTop;
    let currentVelocity = 0;
    let isAnimating = false;
    let animationFrame = 0;
    let animationStartedAt = 0;
    let animationStartPosition = root.scrollTop;
    let animationDirection = 1;
    let lastFrameAt = performance.now();
    let internalScroll = false;
    let inputUnlockTimer = 0;

    const maximumPosition = () => Math.max(0, root.scrollHeight - root.clientHeight);
    const clamp = (position: number) => Math.min(maximumPosition(), Math.max(0, position));

    const debug = (values: Record<string, number | boolean>) => {
      if (ratchetConfig.debug && process.env.NODE_ENV === 'development') {
        console.debug('[ratchet-scroll]', values);
      }
    };

    const animate = (now: number) => {
      const duration = Math.max(
        ratchetConfig.animationDuration,
        ratchetConfig.animationDuration *
          Math.min(2.2, Math.abs(targetPosition - animationStartPosition) / ratchetConfig.stepDistance),
      );
      const elapsed = now - animationStartedAt;
      const progress = Math.min(1, elapsed / duration);
      const settleStartsAt = Math.max(0.72, 1 - ratchetConfig.overshootDuration / duration);
      let nextPosition: number;

      if (progress < settleStartsAt) {
        const moveProgress = progress / settleStartsAt;
        const eased = 1 - Math.pow(1 - moveProgress, 3);
        const overshootTarget = clamp(
          targetPosition + animationDirection * ratchetConfig.overshootDistance,
        );
        nextPosition =
          animationStartPosition + (overshootTarget - animationStartPosition) * eased;
      } else {
        const settleProgress = (progress - settleStartsAt) / (1 - settleStartsAt);
        const eased = 1 - Math.pow(1 - settleProgress, 2);
        const overshootStart = clamp(
          targetPosition + animationDirection * ratchetConfig.overshootDistance,
        );
        nextPosition = overshootStart + (targetPosition - overshootStart) * eased;
      }

      const frameDuration = Math.max(1, now - lastFrameAt);
      currentVelocity = (nextPosition - currentPosition) / frameDuration;
      currentPosition = nextPosition;
      lastFrameAt = now;
      internalScroll = true;
      root.scrollTop = nextPosition;
      internalScroll = false;

      if (progress < 1 && Math.abs(currentPosition - targetPosition) > 0.1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        currentPosition = targetPosition;
        currentVelocity = 0;
        internalScroll = true;
        root.scrollTop = targetPosition;
        internalScroll = false;
        isAnimating = false;
      }
    };

    const startAnimation = (direction: number) => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      animationStartPosition = root.scrollTop;
      currentPosition = animationStartPosition;
      animationDirection = direction;
      animationStartedAt = performance.now();
      lastFrameAt = animationStartedAt;
      isAnimating = true;
      animationFrame = requestAnimationFrame(animate);
    };

    const moveBySteps = (direction: number, steps: number, playSound = true) => {
      const previousTarget = targetPosition;
      targetPosition = clamp(targetPosition + direction * steps * ratchetConfig.stepDistance);
      if (targetPosition === previousTarget) {
        accumulatedDelta = 0;
        return;
      }

      const crossedSteps = Math.max(
        1,
        Math.round(Math.abs(targetPosition - previousTarget) / ratchetConfig.stepDistance),
      );
      if (playSound && soundEnabled) {
        for (let index = 0; index < crossedSteps; index += 1) {
          window.setTimeout(() => {
            duckBackgroundMusic(0.11);
            tick.play();
          }, index * ratchetConfig.minimumTickInterval);
        }
      }
      startAnimation(direction);
    };

    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.metaKey || document.hidden) return;

      const normalizedDelta = normalizeWheelDelta(event, root.clientHeight);
      if (Math.abs(normalizedDelta) < ratchetConfig.noiseFloor) return;
      const direction = Math.sign(normalizedDelta);
      if (shouldKeepNativeScroll(event.target, root, direction)) return;

      event.preventDefault();
      accumulatedDelta += normalizedDelta;
      accumulatedDelta = Math.max(
        -ratchetConfig.stepThreshold * ratchetConfig.maxStepsPerInput * 2,
        Math.min(
          ratchetConfig.stepThreshold * ratchetConfig.maxStepsPerInput * 2,
          accumulatedDelta,
        ),
      );

      const availableSteps = Math.floor(
        Math.abs(accumulatedDelta) / ratchetConfig.stepThreshold,
      );
      if (availableSteps === 0) return;

      const isFastWheel = Math.abs(normalizedDelta) >= ratchetConfig.fastWheelThreshold;
      const maximumSteps = isFastWheel ? ratchetConfig.maxStepsPerInput : 1;
      const triggeredSteps = Math.min(availableSteps, maximumSteps);
      accumulatedDelta -= direction * triggeredSteps * ratchetConfig.stepThreshold;

      window.clearTimeout(inputUnlockTimer);
      inputUnlockTimer = window.setTimeout(() => {
        accumulatedDelta = Math.abs(accumulatedDelta) < ratchetConfig.stepThreshold
          ? 0
          : accumulatedDelta;
      }, ratchetConfig.inputLockDuration);

      moveBySteps(direction, triggeredSteps);
      debug({
        deltaY: event.deltaY,
        normalizedDelta,
        accumulatedDelta,
        currentPosition,
        targetPosition,
        currentVelocity,
        triggeredSteps,
        isMomentum: Math.abs(normalizedDelta) < ratchetConfig.fastWheelThreshold,
        isAnimating,
      });
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey) return;
      if (isEditableTarget(event.target)) return;

      let direction = 0;
      let steps = 1;
      if (event.key === 'ArrowDown') direction = 1;
      else if (event.key === 'ArrowUp') direction = -1;
      else if (event.key === 'PageDown' || (event.key === ' ' && !event.shiftKey)) {
        direction = 1;
        steps = Math.max(1, Math.round(root.clientHeight * 0.82 / ratchetConfig.stepDistance));
      } else if (event.key === 'PageUp' || (event.key === ' ' && event.shiftKey)) {
        direction = -1;
        steps = Math.max(1, Math.round(root.clientHeight * 0.82 / ratchetConfig.stepDistance));
      } else if (event.key === 'Home' || event.key === 'End') {
        event.preventDefault();
        const previousTarget = targetPosition;
        targetPosition = event.key === 'Home' ? 0 : maximumPosition();
        if (targetPosition !== previousTarget) {
          startAnimation(Math.sign(targetPosition - previousTarget));
          if (soundEnabled) {
            duckBackgroundMusic(0.11);
            tick.play();
          }
        }
        return;
      } else {
        return;
      }

      event.preventDefault();
      moveBySteps(direction, steps, true);
    };

    const handleExternalScroll = () => {
      if (internalScroll || isAnimating) return;
      currentPosition = root.scrollTop;
      targetPosition = root.scrollTop;
      accumulatedDelta = 0;
    };

    const handleBlur = () => {
      accumulatedDelta = 0;
    };

    root.addEventListener('wheel', handleWheel, { passive: false });
    root.addEventListener('scroll', handleExternalScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('blur', handleBlur);

    return () => {
      root.removeEventListener('wheel', handleWheel);
      root.removeEventListener('scroll', handleExternalScroll);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('blur', handleBlur);
      window.clearTimeout(inputUnlockTimer);
      if (animationFrame) cancelAnimationFrame(animationFrame);
      tick.dispose();
    };
  }, [enabled, soundEnabled]);

  return null;
};
