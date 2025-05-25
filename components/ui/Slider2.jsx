"use client"

import React, { useEffect } from "react";


const Slider2 = ({ items = [], speed = 20 }) => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .slider {
        overflow: hidden;
        width: 100%;
       
        color: #fff;
        padding: 1rem 0;
        white-space: nowrap;
        position: relative;
      }

      .slider-track {
        display: inline-flex;
        animation: scroll ${speed}s linear infinite;
      }

      .slide {
        display: inline-block;
        padding: 1rem 2rem;
        font-size: 1.5rem;
        white-space: nowrap;
      }

      @keyframes scroll {
        0% {
          transform: translateX(-50%);
        }
        100% {
          transform: translateX(0%);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [speed]);

  return (
    <div className="slider">
      <div className="slider-track">
        {[...items, ...items].map((item, index) => (
          <div className="slide" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider2;
