import React from "react";

export default function LogoSlider({
  companies,
  animationDuration = 110, // seconds
  containerHeightMobile = 100,
  containerHeightDesktop = 120,
  logoHeightMobile = 24, // px (h-6)
  logoHeightDesktop = 40, // px (h-10)
  logoMarginMobile = 16, // px (mx-4)
  logoMarginDesktop = 40, // px (mx-10)
}) {
  return (
    <div
      className="w-full overflow-hidden bg-[#00042A] py-4 sm:py-6"
      style={{ height: `${containerHeightMobile}px`, maxHeight: `${containerHeightDesktop}px` }}
    >
      <div
        className="flex animate-scroll whitespace-nowrap items-center px-2 sm:px-10"
        style={{
          animationDuration: `${animationDuration}s`,
        }}
      >
        {[...companies, ...companies].map((company, idx) => (
          <a
            key={idx}
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginLeft: idx === 0 ? 0 : undefined,
              marginRight: undefined,
              margin: idx === 0 ? 0 : undefined,
            }}
            className="inline-block"
          >
            <img
              src={company.logo}
              alt={company.name}
              loading="lazy"
              className="object-contain opacity-70 brightness-125 contrast-125 grayscale hover:opacity-100 transition"
              style={{
                height: window.innerWidth < 640 ? `${logoHeightMobile}px` : `${logoHeightDesktop}px`,
                marginLeft: window.innerWidth < 640 ? `${logoMarginMobile}px` : `${logoMarginDesktop}px`,
                marginRight: window.innerWidth < 640 ? `${logoMarginMobile}px` : `${logoMarginDesktop}px`,
              }}
            />
          </a>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation-name: scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-duration: ${animationDuration}s;
          width: max-content;
        }
      `}</style>
    </div>
  );
}
