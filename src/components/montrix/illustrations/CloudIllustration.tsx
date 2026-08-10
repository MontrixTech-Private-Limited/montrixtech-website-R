"use client";

export default function CloudIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-[260px] h-[220px] ${className}`}>
      {/* Cloud with lock */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0">
        <svg width="150" height="90" viewBox="0 0 150 90" fill="none">
          <path
            d="M40 70C22 70 10 58 10 43C10 28 22 17 37 17C43 6 54 0 67 0C84 0 98 10 103 24C107 22 112 21 116 21C132 21 145 33 145 48C145 63 132 70 116 70H40Z"
            fill="#FFFFFF"
            stroke="#0A2E57"
            strokeWidth="2"
          />
        </svg>
        <div className="absolute left-1/2 -translate-x-1/2 top-[18px] w-9 h-9 rounded-full bg-[#12B8B0] flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L4 6V11C4 17 8 21 12 22C16 21 20 17 20 11V6L12 2Z" fill="white" />
            <path d="M9.2 12L11.2 14L15.2 10" stroke="#12B8B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Dashed connectors */}
      <svg className="absolute left-0 top-[70px]" width="260" height="30">
        <line x1="60" y1="0" x2="60" y2="28" stroke="#0A2E57" strokeDasharray="4 4" strokeWidth="1.5" />
        <line x1="130" y1="0" x2="130" y2="28" stroke="#0A2E57" strokeDasharray="4 4" strokeWidth="1.5" />
        <line x1="200" y1="0" x2="200" y2="28" stroke="#0A2E57" strokeDasharray="4 4" strokeWidth="1.5" />
      </svg>

      {/* Servers */}
      <div className="absolute left-[15px] top-[100px] flex gap-2">
        {[0,1].map((col) => (
          <div key={col} className="w-16 rounded-md bg-[#0A2E57] p-1.5">
            {[0,1,2].map((row) => (
              <div key={row} className="mb-1.5 h-7 rounded bg-[#123C6A] flex items-center px-1.5 gap-1 last:mb-0">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#12B8B0]" />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Database */}
      <div className="absolute right-[10px] top-[95px]">
        <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
          <ellipse cx="30" cy="14" rx="22" ry="8" fill="#DCEEFF" stroke="#0A2E57" strokeWidth="1.5" />
          <rect x="8" y="14" width="44" height="44" fill="#DCEEFF" stroke="#0A2E57" strokeWidth="1.5" />
          <ellipse cx="30" cy="58" rx="22" ry="8" fill="#DCEEFF" stroke="#0A2E57" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
}