"use client";

export default function LaptopIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`relative h-[330px] w-[460px] ${className}`}>
      {/* Plant */}
      <div className="absolute -left-[66px] bottom-[10px]">
        <svg
          width="72"
          height="122"
          viewBox="0 0 72 122"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M20 91H54L50 119H25L20 91Z"
            fill="#B8D3E3"
            stroke="#7DA5BD"
            strokeWidth="1.5"
          />

          <path
            d="M37 92C36 68 23 58 13 42C26 47 35 58 38 74C41 54 53 43 64 33C60 55 48 67 42 91"
            fill="#45B9B2"
          />

          <path
            d="M37 91C38 66 48 52 58 40C49 49 42 58 39 70C36 51 28 40 18 30C29 44 33 62 37 91Z"
            fill="#7ED0CB"
          />
        </svg>
      </div>

      {/* Laptop screen */}
      <div className="absolute left-0 top-0 h-[285px] w-[460px] overflow-hidden rounded-[18px] border-[4px] border-[#0a2954] bg-white shadow-[0_24px_40px_rgba(10,46,87,0.22)]">
        {/* Camera */}
        <div className="absolute left-1/2 top-[6px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#1c587f]" />

        <div className="h-full px-5 pb-4 pt-5">
          {/* Navigation */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="flex h-5 w-5 items-center justify-center rounded border border-[#0aa7a5] text-[9px] font-black text-[#0a3a68]">
                M
              </div>

              <div className="text-[9px] font-bold text-[#0A2E57]">
                MONTRIX
                <span className="text-[#0aa7a5]">TECH</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <span
                  key={item}
                  className="text-[5px] font-medium text-[#496177]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Website content */}
          <div className="mt-7 flex h-[208px] gap-4">
            {/* Left content */}
            <div className="w-[47%] pt-2">
              <p className="text-[18px] font-bold leading-[1.08] tracking-[-0.03em] text-[#082e5b]">
                Innovative Solutions
                <br />
                For Your Business
              </p>

              <p className="mt-3 max-w-[140px] text-[7px] leading-[1.45] text-[#687b8e]">
                We build modern websites, mobile applications and custom
                software that help businesses grow.
              </p>

              <div className="mt-4 flex items-center gap-2">
                <div className="rounded-md bg-[#08aaa7] px-4 py-2 text-[7px] font-semibold text-white shadow">
                  Get Started
                </div>

                <span className="text-[6px] font-semibold text-[#0A2E57]">
                  View Services
                </span>
              </div>

              <div className="mt-4 flex gap-3">
                <div>
                  <p className="text-[8px] font-bold text-[#082e5b]">50+</p>
                  <p className="text-[5px] text-[#758699]">Projects</p>
                </div>

                <div>
                  <p className="text-[8px] font-bold text-[#082e5b]">30+</p>
                  <p className="text-[5px] text-[#758699]">Clients</p>
                </div>

                <div>
                  <p className="text-[8px] font-bold text-[#082e5b]">24/7</p>
                  <p className="text-[5px] text-[#758699]">Support</p>
                </div>
              </div>
            </div>

            {/* Right building illustration */}
            <div className="relative flex-1 overflow-hidden rounded-tl-[35px] bg-gradient-to-br from-[#e7f5fb] to-[#d4edf7]">
              <div className="absolute left-4 top-5 h-7 w-16 rounded-full bg-white/80" />

              <div className="absolute right-3 top-4 rounded-md bg-white/80 px-2 py-1">
                <span className="text-[5px] font-semibold text-[#08aaa7]">
                  Digital Growth
                </span>
              </div>

              <svg
                className="absolute bottom-0 left-1/2 -translate-x-1/2"
                width="170"
                height="145"
                viewBox="0 0 170 145"
                fill="none"
              >
                <rect
                  x="17"
                  y="72"
                  width="48"
                  height="73"
                  fill="#2C6E9B"
                />

                <rect
                  x="69"
                  y="38"
                  width="78"
                  height="107"
                  fill="#0A2E57"
                />

                <path
                  d="M69 38L108 8L147 38H69Z"
                  fill="#489CC4"
                />

                {Array.from({ length: 5 }).map((_, row) =>
                  Array.from({ length: 4 }).map((__, column) => (
                    <rect
                      key={`${row}-${column}`}
                      x={79 + column * 16}
                      y={51 + row * 17}
                      width="9"
                      height="10"
                      rx="1"
                      fill="#12B8B0"
                      opacity="0.9"
                    />
                  )),
                )}
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Laptop base */}
      <div className="absolute left-[-24px] top-[281px] h-[24px] w-[508px] rounded-b-[24px] bg-gradient-to-b from-[#dae4ec] to-[#91a7b9] shadow-[0_12px_18px_rgba(10,46,87,0.2)]" />

      <div className="absolute left-[150px] top-[282px] h-[8px] w-[160px] rounded-b-lg bg-[#8199a8]" />

      <div className="absolute left-[18px] top-[304px] h-[4px] w-[420px] rounded-full bg-[#53778f]/20 blur-sm" />
    </div>
  );
}