"use client";

export default function DashboardIllustration({
  className = "h-[250px] w-[350px]",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 440 320"
      className={className}
      role="img"
      aria-label="Business analytics dashboard"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <filter
          id="dashboardShadow"
          x="-20%"
          y="-20%"
          width="140%"
          height="150%"
        >
          <feDropShadow
            dx="0"
            dy="8"
            stdDeviation="8"
            floodColor="#0A2E57"
            floodOpacity="0.14"
          />
        </filter>

        <linearGradient
          id="dashboardHeader"
          x1="4"
          y1="4"
          x2="436"
          y2="32"
        >
          <stop stopColor="#0A2E57" />
          <stop offset="1" stopColor="#164F80" />
        </linearGradient>

        <linearGradient
          id="chartArea"
          x1="40"
          y1="170"
          x2="40"
          y2="280"
        >
          <stop stopColor="#1684E8" stopOpacity="0.22" />
          <stop offset="1" stopColor="#1684E8" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Main window */}
      <g filter="url(#dashboardShadow)">
        <rect
          x="4"
          y="4"
          width="432"
          height="312"
          rx="10"
          fill="#FFFFFF"
          stroke="#0A2E57"
          strokeWidth="1.5"
        />
      </g>

      {/* Top bar */}
      <path
        d="M14 4H426C431.523 4 436 8.477 436 14V32H4V14C4 8.477 8.477 4 14 4Z"
        fill="url(#dashboardHeader)"
      />

      <circle cx="18" cy="18" r="3.5" fill="#FFFFFF" opacity="0.45" />
      <circle cx="30" cy="18" r="3.5" fill="#FFFFFF" opacity="0.45" />
      <circle cx="42" cy="18" r="3.5" fill="#FFFFFF" opacity="0.45" />

      <text
        x="20"
        y="53"
        fill="#0A2E57"
        fontSize="13"
        fontWeight="700"
        fontFamily="Arial, sans-serif"
      >
        Business Dashboard
      </text>

      <text
        x="20"
        y="65"
        fill="#718096"
        fontSize="6"
        fontFamily="Arial, sans-serif"
      >
        Overview of your business performance
      </text>

      {/* Total users card */}
      <g>
        <rect
          x="20"
          y="76"
          width="128"
          height="55"
          rx="7"
          fill="#F5FAFD"
          stroke="#D9E8F3"
        />

        <text
          x="31"
          y="91"
          fill="#6C7B8F"
          fontSize="7"
          fontFamily="Arial, sans-serif"
        >
          Total Users
        </text>

        <text
          x="31"
          y="111"
          fill="#0A2E57"
          fontSize="15"
          fontWeight="700"
          fontFamily="Arial, sans-serif"
        >
          12,568
        </text>

        <text
          x="31"
          y="123"
          fill="#12B8B0"
          fontSize="6"
          fontWeight="700"
          fontFamily="Arial, sans-serif"
        >
          +12.5% this month
        </text>

        <circle cx="123" cy="103" r="13" fill="#DDF7F4" />

        <circle
          cx="123"
          cy="98"
          r="3"
          stroke="#12B8B0"
          strokeWidth="1.5"
        />

        <path
          d="M117 109C117 105.7 119.7 103 123 103C126.3 103 129 105.7 129 109"
          stroke="#12B8B0"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>

      {/* Revenue card */}
      <g>
        <rect
          x="156"
          y="76"
          width="128"
          height="55"
          rx="7"
          fill="#F5FAFD"
          stroke="#D9E8F3"
        />

        <text
          x="167"
          y="91"
          fill="#6C7B8F"
          fontSize="7"
          fontFamily="Arial, sans-serif"
        >
          Total Revenue
        </text>

        <text
          x="167"
          y="111"
          fill="#0A2E57"
          fontSize="13"
          fontWeight="700"
          fontFamily="Arial, sans-serif"
        >
          ₹ 28,45,000
        </text>

        <text
          x="167"
          y="123"
          fill="#12B8B0"
          fontSize="6"
          fontWeight="700"
          fontFamily="Arial, sans-serif"
        >
          +15.3% this month
        </text>

        <circle cx="260" cy="103" r="13" fill="#E7F1FF" />

        <text
          x="256"
          y="108"
          fill="#0A2E57"
          fontSize="14"
          fontWeight="700"
          fontFamily="Arial, sans-serif"
        >
          ₹
        </text>
      </g>

      {/* Sales card */}
      <g>
        <rect
          x="292"
          y="76"
          width="128"
          height="55"
          rx="7"
          fill="#F5FAFD"
          stroke="#D9E8F3"
        />

        <text
          x="303"
          y="91"
          fill="#6C7B8F"
          fontSize="7"
          fontFamily="Arial, sans-serif"
        >
          Sales Overview
        </text>

        <polyline
          points="303,119 315,111 327,115 339,102 351,106 363,94 375,98 387,85 399,89 411,78"
          fill="none"
          stroke="#1684E8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Growth chart */}
      <g>
        <rect
          x="20"
          y="144"
          width="260"
          height="156"
          rx="7"
          fill="#FFFFFF"
          stroke="#D9E8F3"
        />

        <text
          x="32"
          y="162"
          fill="#0A2E57"
          fontSize="8"
          fontWeight="700"
          fontFamily="Arial, sans-serif"
        >
          Monthly Growth
        </text>

        <text
          x="32"
          y="174"
          fill="#718096"
          fontSize="5"
          fontFamily="Arial, sans-serif"
        >
          January — December
        </text>

        {[195, 220, 245, 270].map((y) => (
          <line
            key={y}
            x1="32"
            y1={y}
            x2="268"
            y2={y}
            stroke="#0A2E57"
            strokeWidth="0.5"
            opacity="0.1"
          />
        ))}

        <path
          d="M40 270L68 250L96 257L124 228L152 238L180 204L208 215L236 182L264 194V286H40V270Z"
          fill="url(#chartArea)"
        />

        <polyline
          points="40,270 68,250 96,257 124,228 152,238 180,204 208,215 236,182 264,194"
          fill="none"
          stroke="#1684E8"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {[
          [40, 270],
          [68, 250],
          [96, 257],
          [124, 228],
          [152, 238],
          [180, 204],
          [208, 215],
          [236, 182],
          [264, 194],
        ].map(([cx, cy]) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="2.5"
            fill="#FFFFFF"
            stroke="#1684E8"
            strokeWidth="1.5"
          />
        ))}
      </g>

      {/* Sales distribution */}
      <g>
        <rect
          x="292"
          y="144"
          width="128"
          height="156"
          rx="7"
          fill="#FFFFFF"
          stroke="#D9E8F3"
        />

        <text
          x="304"
          y="162"
          fill="#0A2E57"
          fontSize="8"
          fontWeight="700"
          fontFamily="Arial, sans-serif"
        >
          Project Types
        </text>

        <g transform="translate(356 214) rotate(-90)">
          <circle
            cx="0"
            cy="0"
            r="28"
            fill="none"
            stroke="#E6EEF5"
            strokeWidth="10"
          />

          <circle
            cx="0"
            cy="0"
            r="28"
            fill="none"
            stroke="#12B8B0"
            strokeWidth="10"
            strokeDasharray="92 176"
            strokeLinecap="round"
          />

          <circle
            cx="0"
            cy="0"
            r="28"
            fill="none"
            stroke="#1684E8"
            strokeWidth="10"
            strokeDasharray="52 176"
            strokeDashoffset="-96"
            strokeLinecap="round"
          />
        </g>

        <text
          x="344"
          y="211"
          fill="#0A2E57"
          fontSize="11"
          fontWeight="700"
          fontFamily="Arial, sans-serif"
        >
          75%
        </text>

        <text
          x="344"
          y="222"
          fill="#6C7B8F"
          fontSize="5"
          fontFamily="Arial, sans-serif"
        >
          Completed
        </text>

        <circle cx="315" cy="267" r="3" fill="#1684E8" />

        <text
          x="323"
          y="270"
          fill="#526178"
          fontSize="6"
          fontFamily="Arial, sans-serif"
        >
          Web
        </text>

        <circle cx="356" cy="267" r="3" fill="#12B8B0" />

        <text
          x="364"
          y="270"
          fill="#526178"
          fontSize="6"
          fontFamily="Arial, sans-serif"
        >
          Mobile
        </text>

        <circle cx="315" cy="284" r="3" fill="#D8E4ED" />

        <text
          x="323"
          y="287"
          fill="#526178"
          fontSize="6"
          fontFamily="Arial, sans-serif"
        >
          Cloud
        </text>
      </g>
    </svg>
  );
}