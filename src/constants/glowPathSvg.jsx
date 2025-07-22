export const glowPathSvg = (
  <svg viewBox="0 0 300 100" width="300" height="100">
    <defs>
      {/* Gradient for the stroke */}
      <linearGradient id="glow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00ffff" />
        <stop offset="50%" stopColor="#ff00ff" />
        <stop offset="100%" stopColor="#00ffff" />
      </linearGradient>

      {/* Blur filter to create glow effect */}
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <path
    d="M0 0
       C 4 10, 1 11, 7 22
       S 18 13, 23 7
       C 44 26, 36 32, 48 44
       Q 59 56, 57 68
       T 85 69
       C 133 28, 139 68,145 74
        C163 98, 139 98,135 98
        C60 88, 39 88, 45 68,
        C60 32, 137 45, 216 34,
        
       "
    //   d="M10,50 C60,10 240,90 290,50"
      fill="none"
      stroke="url(#glow-gradient)"
      stroke-width="3"
      stroke-linecap="round"
      stroke-dasharray="10 999"
      stroke-dashoffset="0"
      filter="url(#glow)"
    >
      <animate
        attributeName="stroke-dashoffset"
        from="0"
        to="-1024"
        dur="13s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);
