'use client';

import React from 'react';

export const LogoEffect = () => {
  return (
    <div className="w-full flex items-center justify-center pointer-events-auto">
      <style dangerouslySetInnerHTML={{ __html: `
        .brand-logo {
          --matrix-white: var(--matrix-logo-main, #e8ffe9);
          --matrix-green: var(--matrix-ink-color, #22c55e);
          --matrix-glow: var(--matrix-logo-glow, #59ff75);
          display: block;
          width: 100%;
          max-width: 900px;
          color: inherit;
          text-decoration: none;
        }

        .brand-logo svg {
          display: block;
          width: 100%;
          height: auto;
          overflow: visible;
        }

        .wordmark {
          animation: 
            signal-flicker 5s infinite,
            constant-glitch 7s infinite;
        }

        .main-letter {
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: 174px;
          font-weight: 300;
          fill: var(--matrix-white);
          stroke: var(--matrix-green);
          stroke-width: 0.35px;
          paint-order: stroke fill;
          letter-spacing: -2px;
        }

        .micro-label {
          font-family: "Rajdhani", sans-serif;
          font-size: 18px;
          font-weight: 400;
          letter-spacing: 11px;
          fill: var(--matrix-green);
        }

        .signal-line {
          fill: none;
          stroke: var(--matrix-green);
          stroke-width: 1.5;
          stroke-linecap: square;
          opacity: 0.94;
        }

        .signal-line--thin {
          stroke-width: 0.8;
          opacity: 0.75;
        }

        .signal-node {
          fill: var(--matrix-white);
        }

        /* Subtle glitch on hover */
        .brand-logo:hover .wordmark {
          animation:
            hover-glitch 400ms steps(2, end) infinite,
            signal-flicker 2s infinite;
        }

        @keyframes signal-flicker {
          0%, 88%, 94%, 100% { opacity: 1; }
          90% { opacity: 0.7; }
          96% { opacity: 0.9; }
        }

        @keyframes constant-glitch {
          0%, 95%, 100% { transform: translate(0); }
          96% { transform: translate(3px, -2px) skewX(2deg); }
          97% { transform: translate(-3px, 2px) skewX(-2deg); }
          98% { transform: translate(2px, 0); }
        }

        /* Reduced jitter distance drastically */
        @keyframes hover-glitch {
          0%, 100% { transform: translate(0); }
          25% { transform: translate(1px, -1px); }
          50% { transform: translate(-1px, 1px); }
          75% { transform: translate(1px, 0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .wordmark,
          .brand-logo:hover .wordmark {
            animation: none;
          }
        }
      `}} />

      <a className="brand-logo" href="#" aria-label="ZhangYong Logo" onClick={(e) => e.preventDefault()}>
        <svg viewBox="0 0 1180 250" role="img" aria-labelledby="logo-title logo-description">
          <title id="logo-title">ZhangYong</title>
          <desc id="logo-description">Matrix inspired custom ZhangYong wordmark</desc>

          <defs>
            <filter id="matrix-glow-filter" x="-30%" y="-50%" width="160%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1.1" result="small-blur" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="large-blur" />
              <feColorMatrix
                in="large-blur"
                type="matrix"
                values="
                  0 0 0 0 0.20
                  0 0 0 0 1.00
                  0 0 0 0 0.35
                  0 0 0 0.30 0
                "
                result="green-glow"
              />
              <feMerge>
                <feMergeNode in="green-glow" />
                <feMergeNode in="small-blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <mask id="signal-cuts">
              <rect width="1180" height="250" fill="white" />
              <rect x="55" y="105" width="1070" height="2.4" fill="black" />
              <rect x="390" y="154" width="180" height="2" fill="black" />
              <rect x="760" y="126" width="120" height="1.8" fill="black" />
            </mask>
          </defs>

          <g className="wordmark" filter="url(#matrix-glow-filter)">
            <text className="micro-label" x="590" y="36" textAnchor="middle">DESIGNER</text>

            <path className="signal-line signal-line--thin" d="M425 43 H525" />
            <path className="signal-line signal-line--thin" d="M655 43 H755" />

            <g mask="url(#signal-cuts)">
              <text className="main-letter" x="34" y="190" textLength="120" lengthAdjust="spacingAndGlyphs">Z</text>
              <text className="main-letter" x="145" y="190" textLength="125" lengthAdjust="spacingAndGlyphs">H</text>
              <text className="main-letter" x="260" y="190" textLength="125" lengthAdjust="spacingAndGlyphs">A</text>
              <text className="main-letter" x="375" y="190" textLength="125" lengthAdjust="spacingAndGlyphs">N</text>
              <text className="main-letter" x="490" y="190" textLength="130" lengthAdjust="spacingAndGlyphs">G</text>
              <text className="main-letter" x="610" y="190" textLength="118" lengthAdjust="spacingAndGlyphs">Y</text>
              <text className="main-letter" x="718" y="190" textLength="130" lengthAdjust="spacingAndGlyphs">O</text>
              <text className="main-letter" x="838" y="190" textLength="125" lengthAdjust="spacingAndGlyphs">N</text>
              <text className="main-letter" x="953" y="190" textLength="132" lengthAdjust="spacingAndGlyphs">G</text>
            </g>

            <path className="signal-line" d="M74 96 H198" />
            <path className="signal-line" d="M205 116 H330" />
            <path className="signal-line" d="M316 97 H465" />
            <path className="signal-line" d="M472 119 H613" />
            <path className="signal-line" d="M620 97 H765" />
            <path className="signal-line" d="M771 119 H920" />
            <path className="signal-line" d="M928 98 H1090" />

            <circle className="signal-node" cx="198" cy="96" r="2.7" />
            <circle className="signal-node" cx="613" cy="119" r="2.7" />
            <circle className="signal-node" cx="920" cy="119" r="2.7" />

            <path className="signal-line signal-line--thin" d="M40 215 H315" />
            <path className="signal-line signal-line--thin" d="M860 215 H1120" />
          </g>
        </svg>
      </a>
    </div>
  );
};
