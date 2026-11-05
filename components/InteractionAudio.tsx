'use client';

import { useEffect } from 'react';
import { useApp } from '../context/ThemeLanguageContext';
import { playFeedback } from '../utils/audioSynth';

export const InteractionAudio = () => {
  const { style, activeStyle, soundEnabled } = useApp();

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const visualStyle = style ?? activeStyle;
      if (!visualStyle || !soundEnabled) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const control = target.closest('button, a, [role="button"]');
      if (!control || control.hasAttribute('data-sound-off')) return;

      playFeedback(visualStyle, 'click');
    };

    document.addEventListener('pointerdown', handlePointerDown, true);
    return () => document.removeEventListener('pointerdown', handlePointerDown, true);
  }, [style, activeStyle, soundEnabled]);

  return null;
};
