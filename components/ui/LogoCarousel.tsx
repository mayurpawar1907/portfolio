"use client";

import { useEffect, useRef } from "react";

export type Logo = {
  src: string;
  alt: string;
};

type LogoCarouselProps = {
  logos: Logo[];
  duration?: number; // animation duration in seconds, optional
};

export default function LogoCarousel({ logos, duration = 20 }: LogoCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const list = container.querySelector("ul");
    if (list) {
      const clone = list.cloneNode(true) as HTMLUListElement;
      clone.setAttribute("aria-hidden", "true");
      container.appendChild(clone);
    }
  }, []);

  return (
    <div
      className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      style={{ paddingLeft: 0, paddingRight: 0 }}
    >
      <div
        ref={containerRef}
        className="flex"
        style={{
          animation: `infinite-scroll ${duration}s linear infinite`,
        }}
      >
        <ul className="flex items-center [&_li]:mx-8 [&_img]:max-w-none">
          {logos.map((logo, idx) => (
            <li key={idx}>
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-[50px] w-[70px] opacity-70 grayscale hover:grayscale-0 transition duration-300 "
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
