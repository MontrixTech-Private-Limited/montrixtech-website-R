"use client";

export default function PhoneIllustration({
  className = "h-[470px] w-[230px]",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 220 460"
      className={className}
      role="img"
      aria-label="Mobile dashboard app"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax meet"
    >
      <defs>
        <filter id="phoneShadow" x="-30%" y="-15%" width="160%" height="135%">
          <feDropShadow
            dx="0"
            dy="12"
            stdDeviation="10"
            floodColor="#0A2E57"
            floodOpacity="0.24"
          />
        </filter>
      </defs>

      {/* Phone body */}
      <g filter="url(#phoneShadow)">
        <rect x="4" y="4" width="212" height="452" rx="38" fill="#0A2E57" />
        {/* side buttons */}
        <rect x="0" y="120" width="4" height="26" rx="2" fill="#0A2E57" />
        <rect x="0" y="156" width="4" height="26" rx="2" fill="#0A2E57" />
        <rect x="216" y="140" width="4" height="46" rx="2" fill="#0A2E57" />
      </g>

      {/* Screen */}
      <rect x="14" y="14" width="192" height="432" rx="28" fill="#FFFFFF" />

      {/* Notch */}
      <rect x="78" y="14" width="64" height="20" rx="10" fill="#0A2E57" />
      <rect x="94" y="21" width="22" height="4" rx="2" fill="#123C6A" />
      <circle cx="126" cy="23" r="2.6" fill="#123C6A" />

      {/* Header: logo */}
      <rect
        x="24"
        y="45"
        width="20"
        height="20"
        rx="5"
        fill="#FFFFFF"
        stroke="#0AA7A5"
        strokeWidth="1.6"
      />
      <text
        x="34"
        y="59"
        textAnchor="middle"
        fill="#0A2E57"
        fontSize="11"
        fontWeight="800"
        fontFamily="Arial, sans-serif"
      >
        M
      </text>

      <text
        x="52"
        y="59"
        fill="#0A2E57"
        fontSize="9.5"
        fontWeight="800"
        fontFamily="Arial, sans-serif"
      >
        MONTRIX
        <tspan fill="#0AA7A5">TECH</tspan>
      </text>

      <circle cx="184" cy="53" r="9" fill="#F0F6FB" />
      <path
        d="M184 48.5c-2 0-3.4 1.6-3.4 3.6v1.8l-1 2h8.8l-1-2v-1.8c0-2-1.4-3.6-3.4-3.6Z"
        fill="#0A2E57"
      />

      {/* Dashboard title */}
      <text
        x="24"
        y="92"
        fill="#0A2E57"
        fontSize="15"
        fontWeight="800"
        fontFamily="Arial, sans-serif"
      >
        Dashboard
      </text>
      <circle cx="186" cy="87" r="9" fill="#F0F6FB" />
      <circle cx="186" cy="87" r="3.2" fill="none" stroke="#0A2E57" strokeWidth="1.4" />

      {/* 2x2 icon card grid */}
      {/* Card 1: document */}
      <g>
        <rect x="22" y="108" width="80" height="76" rx="10" fill="#F7FBFD" stroke="#E7EFF5" />
        <rect x="42" y="122" width="40" height="30" rx="6" fill="#DFF5F3" />
        <path
          d="M52 130h20M52 137h20M52 144h12"
          stroke="#0AA7A5"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect x="40" y="162" width="44" height="4" rx="2" fill="#D7E1EA" />
      </g>

      {/* Card 2: avatar */}
      <g>
        <rect x="108" y="108" width="80" height="76" rx="10" fill="#F7FBFD" stroke="#E7EFF5" />
        <circle cx="148" cy="136" r="15" fill="#DCEEFF" />
        <circle cx="148" cy="131" r="5.5" fill="#1E6FC7" />
        <path d="M138 146c1.5-5 6-8 10-8s8.5 3 10 8" fill="#F0A25C" />
        <rect x="126" y="162" width="44" height="4" rx="2" fill="#D7E1EA" />
      </g>

      {/* Card 3: teal bar chart */}
      <g>
        <rect x="22" y="192" width="80" height="76" rx="10" fill="#F7FBFD" stroke="#E7EFF5" />
        <g transform="translate(42 250)">
          <rect x="0" y="-14" width="7" height="14" rx="1.5" fill="#8FDCD6" />
          <rect x="10" y="-22" width="7" height="22" rx="1.5" fill="#3FBCB4" />
          <rect x="20" y="-10" width="7" height="10" rx="1.5" fill="#8FDCD6" />
          <rect x="30" y="-28" width="7" height="28" rx="1.5" fill="#0AA7A5" />
        </g>
        <rect x="40" y="162" width="44" height="4" rx="2" fill="#D7E1EA" />
      </g>

      {/* Card 4: blue bar chart */}
      <g>
        <rect x="108" y="192" width="80" height="76" rx="10" fill="#F7FBFD" stroke="#E7EFF5" />
        <g transform="translate(128 250)">
          <rect x="0" y="-10" width="7" height="10" rx="1.5" fill="#A9CDEE" />
          <rect x="10" y="-24" width="7" height="24" rx="1.5" fill="#3E7FC9" />
          <rect x="20" y="-16" width="7" height="16" rx="1.5" fill="#A9CDEE" />
          <rect x="30" y="-30" width="7" height="30" rx="1.5" fill="#0A2E57" />
        </g>
        <rect x="126" y="162" width="44" height="4" rx="2" fill="#D7E1EA" />
      </g>

      {/* Mini growth chart */}
      <g>
        <rect x="22" y="278" width="166" height="70" rx="10" fill="#F7FBFD" stroke="#E7EFF5" />
        <rect x="34" y="288" width="34" height="4" rx="2" fill="#D7E1EA" />
        <path
          d="M34 332l14-9 12 5 14-16 12 7 14-13 12 6 14-11"
          fill="none"
          stroke="#1684E8"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Donut + legend */}
      <g>
        <rect x="22" y="356" width="166" height="34" rx="10" fill="#F7FBFD" stroke="#E7EFF5" />
        <g transform="translate(44 373)">
          <circle r="13" fill="none" stroke="#E6EEF5" strokeWidth="6" />
          <circle
            r="13"
            fill="none"
            stroke="#0AA7A5"
            strokeWidth="6"
            strokeDasharray="61 82"
            strokeLinecap="round"
            transform="rotate(-90)"
          />
        </g>
        <circle cx="76" cy="368" r="3" fill="#1684E8" />
        <rect x="83" y="366" width="26" height="3.5" rx="1.5" fill="#D7E1EA" />
        <circle cx="76" cy="379" r="3" fill="#0AA7A5" />
        <rect x="83" y="377" width="34" height="3.5" rx="1.5" fill="#D7E1EA" />
      </g>

      {/* Bottom nav */}
      <path
        d="M14 400h192v18c0 15.46-12.54 28-28 28H42c-15.46 0-28-12.54-28-28v-18Z"
        fill="#0A2E57"
      />

      {/* Home (active) */}
      <circle cx="60" cy="424" r="14" fill="#0AA7A5" />
      <path d="M60 417l8 7v9h-5v-6h-6v6h-5v-9l8-7Z" fill="#FFFFFF" />

      {/* Explore */}
      <circle cx="110" cy="424" r="11" fill="none" stroke="#7592B0" strokeWidth="1.6" />
      <circle cx="110" cy="424" r="3" fill="#7592B0" />

      {/* Profile */}
      <circle cx="160" cy="420" r="6" fill="none" stroke="#7592B0" strokeWidth="1.6" />
      <path
        d="M151 434c1.6-5.4 5-8 9-8s7.4 2.6 9 8"
        fill="none"
        stroke="#7592B0"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
