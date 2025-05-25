"use client";

import React, { useRef, useEffect } from "react";

const logos = [
  {
    src: "https://tailwindui.com/plus/img/logos/158x48/transistor-logo-white.svg",
    alt: "Transistor",
  },
  {
    src: "https://tailwindui.com/plus/img/logos/158x48/reform-logo-white.svg",
    alt: "Reform",
  },
  {
    src: "https://tailwindui.com/plus/img/logos/158x48/tuple-logo-white.svg",
    alt: "Tuple",
  },
  {
    src: "https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-white.svg",
    alt: "SavvyCal",
  },
  {
    src: "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-white.svg",
    alt: "Statamic",
  },
  {
    src: "https://tailwindui.com/plus/img/logos/158x48/laravel-logo-white.svg",
    alt: "Laravel",
  },
];

const Service_slider = ({ logosList = logos, speed = 1 }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrameId;

    const step = speed; // pixels per frame

    const animate = () => {
      slider.scrollLeft += step;

      // Reset scroll to create infinite effect
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [speed]);

  return (
    <>
      <style>{`
        .slider-container {
          width: 100%;
          overflow: hidden;
          background: black;
          padding: 1rem 0;
          white-space: nowrap;
        }
        .slider-content {
          display: inline-flex;
          align-items: center;
          user-select: none;
        }
        .slider-content img {
          height: 64px;
          margin: 0 16px;
          filter: brightness(0) invert(1);
        }
      `}</style>

      <div className="slider-container" ref={sliderRef}>
        <div className="slider-content">
          {[...logosList, ...logosList].map((logo, i) => (
            <img key={i} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Service_slider;
