'use client';

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  } catch (e) {
    return null;
  }
}

/**
 * 背景音乐动态闪避 (Audio Ducking)
 * 在音效播放时降低全局 <audio> 标签音量，并在结束后平滑渐变恢复
 */
function duckMusic(duration: number) {
  if (typeof document === 'undefined') return;
  const audio = document.querySelector('audio');
  if (!audio) return;

  audio.volume = 0.12; // 更彻底地避让

  setTimeout(() => {
    let vol = 0.12;
    const fadeTimer = setInterval(() => {
      vol += 0.15;
      if (vol >= 1.0) {
        audio.volume = 1.0;
        clearInterval(fadeTimer);
      } else {
        audio.volume = Math.min(1.0, vol);
      }
    }, 45);
  }, duration * 1000);
}

/**
 * 辅助方法：生成短时间的高通/带通白噪声
 */
function playNoise(ctx: AudioContext, now: number, duration: number, volume: number, filterFreq: number) {
  const bufferSize = ctx.sampleRate * duration;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noiseNode = ctx.createBufferSource();
  noiseNode.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(filterFreq, now);
  filter.Q.setValueAtTime(5, now);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(volume * 2.2, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  noiseNode.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  noiseNode.start(now);
  noiseNode.stop(now + duration);
}

/**
 * 风格主按钮与状态切换交互点击音效反馈 (Geek 改名为 Hermes)
 */
export function playFeedback(style: 'magazine' | 'hermes' | 'bladerunner', type: 'click' | 'switch') {
  const ctx = getAudioContext();
  if (!ctx) return;
  
  if (ctx.state === 'suspended') {
    ctx.resume();
  }

  const now = ctx.currentTime;

  if (style === 'bladerunner') {
    if (type === 'click') {
      duckMusic(0.08);
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(15, now + 0.08);

      gain.gain.setValueAtTime(0.65, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } else {
      duckMusic(0.6);
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();

      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(65.41, now);

      osc2.type = 'sawtooth';
      osc2.frequency.setValueAtTime(65.90, now);

      filter.type = 'lowpass';
      filter.Q.setValueAtTime(7, now);
      filter.frequency.setValueAtTime(140, now);
      filter.frequency.exponentialRampToValueAtTime(800, now + 0.28);
      filter.frequency.exponentialRampToValueAtTime(80, now + 0.55);

      gain.gain.setValueAtTime(0.85, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.6);
      osc2.stop(now + 0.6);
    }
  } else if (style === 'hermes') {
    if (type === 'click') {
      duckMusic(0.06);
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.06);

      gain.gain.setValueAtTime(0.55, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.06);
    } else {
      duckMusic(0.28);
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(960, now + 0.28);

      gain.gain.setValueAtTime(0.40, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.28);
    }
  } else {
    if (type === 'click') {
      duckMusic(0.12);
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(700, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.12);

      gain.gain.setValueAtTime(0.55, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.12);
    } else {
      duckMusic(0.35);
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(523.25, now);
      
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(659.25, now);

      gain.gain.setValueAtTime(0.38, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.35);
      osc2.stop(now + 0.35);
    }
  }
}

/**
 * 鼠标点击非交互元素（空白背景）时的物理空击音效
 */
export function playEmptyClick(style: 'magazine' | 'hermes' | 'bladerunner') {
  const ctx = getAudioContext();
  if (!ctx) return;
  
  if (ctx.state === 'suspended') {
    ctx.resume();
  }

  const now = ctx.currentTime;

  if (style === 'bladerunner') {
    duckMusic(0.06);
    playNoise(ctx, now, 0.05, 0.65, 450);
  } else if (style === 'hermes') {
    duckMusic(0.02);
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1400, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.025);

    gain.gain.setValueAtTime(0.55, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.025);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.025);
  } else {
    duckMusic(0.08);
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.exponentialRampToValueAtTime(50, now + 0.08);

    gain.gain.setValueAtTime(0.70, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.08);
  }
}

/**
 * 页面上下翻屏（Scroll Snap 吸附触发）时的环境过渡音效
 */
export function playPageTransition(style: 'magazine' | 'hermes' | 'bladerunner') {
  const ctx = getAudioContext();
  if (!ctx) return;

  if (ctx.state === 'suspended') {
    ctx.resume();
  }

  const now = ctx.currentTime;

  if (style === 'bladerunner') {
    duckMusic(0.38);
    playNoise(ctx, now, 0.42, 0.58, 300);
  } else if (style === 'hermes') {
    duckMusic(0.08);
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.setValueAtTime(680, now + 0.04);

    gain.gain.setValueAtTime(0.48, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.08);
  } else {
    duckMusic(0.28);
    const bufferSize = ctx.sampleRate * 0.28;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noiseNode = ctx.createBufferSource();
    noiseNode.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(260, now);
    filter.frequency.exponentialRampToValueAtTime(70, now + 0.28);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.52, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);

    noiseNode.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noiseNode.start(now);
    noiseNode.stop(now + 0.28);
  }
}

/**
 * 简历下载进度中的“步进Beep”音效
 */
export function playDownloadProgress(style: 'magazine' | 'hermes' | 'bladerunner') {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  // 不同风格下定制 Beep 频率
  const freq = style === 'hermes' ? 950 : (style === 'bladerunner' ? 620 : 800);
  osc.frequency.setValueAtTime(freq, now);

  gain.gain.setValueAtTime(0.015, now); // 极小声防烦躁
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.015);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.015);
}

/**
 * 简历下载完成后的“大三和弦成功铃音”音效
 */
export function playDownloadComplete(style: 'magazine' | 'hermes' | 'bladerunner') {
  const ctx = getAudioContext();
  if (!ctx) return;

  duckMusic(0.4);
  const now = ctx.currentTime;

  // 播放 C5 -> E5 -> G5 琶音和弦
  const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
  
  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = style === 'hermes' ? 'triangle' : 'sine';
    osc.frequency.setValueAtTime(freq, now + idx * 0.07);

    // 成功音效宏亮且带长尾迹
    gain.gain.setValueAtTime(0.12, now + idx * 0.07);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.07 + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now + idx * 0.07);
    osc.stop(now + idx * 0.07 + 0.35);
  });
}
