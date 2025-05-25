"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

export function EnhancedLoading({ className }: { className?: string }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const requestRef = useRef<number>()
  const previousTimeRef = useRef<number>()

  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      // Smooth rotation with sine wave for more organic movement
      setRotation((prev) => ({
        x: prev.x + Math.sin(time * 0.0003) * 0.05 + 0.05,
        y: prev.y + Math.sin(time * 0.0002) * 0.05 + 0.08,
        z: prev.z + Math.sin(time * 0.0001) * 0.02,
      }))
    }
    previousTimeRef.current = time
    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current as number)
  }, [])

  return (
    <div className={cn("relative w-40 h-40 perspective-1000 mx-auto", className)} ref={containerRef}>
      {/* Background glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl animate-pulse"></div>

      {/* Rotating 3D elements */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform: `rotateX(${rotation.x * 20}deg) rotateY(${rotation.y * 20}deg) rotateZ(${rotation.z * 5}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Outer ring */}
        <div
          className="absolute w-40 h-40 rounded-full border-4 border-purple-500/30 animate-spin"
          style={{ animationDuration: "15s" }}
        ></div>

        {/* Middle ring */}
        <div
          className="absolute w-32 h-32 rounded-full border-4 border-cyan-500/30 animate-spin"
          style={{ animationDuration: "10s", animationDirection: "reverse" }}
        ></div>

        {/* Inner ring */}
        <div
          className="absolute w-24 h-24 rounded-full border-4 border-purple-500/30 animate-spin"
          style={{ animationDuration: "5s" }}
        ></div>

        {/* Floating spheres */}
        {[...Array(12)].map((_, i) => {
          const angle = (i / 12) * Math.PI * 2
          const radius = 16
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius
          const delay = i * 0.2

          return (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/50"
              style={{
                transform: `translateX(${x}px) translateY(${y}px) translateZ(${Math.sin(angle * 2) * 10}px)`,
                animation: `pulse 2s infinite ${delay}s, float 3s ease-in-out infinite ${delay}s`,
              }}
            ></div>
          )
        })}

        {/* Central element */}
        <div
          className="relative w-16 h-16 transform-style-preserve-3d animate-spin"
          style={{ animationDuration: "8s" }}
        >
          {/* Cube faces */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-purple-800/80 transform translateZ(8px) rounded-lg shadow-lg shadow-purple-500/30"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/80 to-cyan-800/80 transform -translateZ(8px) rounded-lg shadow-lg shadow-cyan-500/30"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-cyan-600/80 transform rotateY(90deg) translateZ(8px) rounded-lg shadow-lg shadow-purple-500/30"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/80 to-purple-600/80 transform rotateY(-90deg) translateZ(8px) rounded-lg shadow-lg shadow-cyan-500/30"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-cyan-600/80 transform rotateX(90deg) translateZ(8px) rounded-lg shadow-lg shadow-purple-500/30"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/80 to-purple-600/80 transform rotateX(-90deg) translateZ(8px) rounded-lg shadow-lg shadow-cyan-500/30"></div>

          {/* Logo in the center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white font-bold text-xs z-10">TS</div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => {
        const size = Math.random() * 2 + 1
        const x = Math.random() * 100
        const y = Math.random() * 100
        const duration = Math.random() * 10 + 10
        const delay = Math.random() * 5

        return (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-70 animate-pulse"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${x}%`,
              top: `${y}%`,
              boxShadow: `0 0 ${size * 2}px ${size}px rgba(255,255,255,0.3)`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          ></div>
        )
      })}

      {/* Pulsing core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-white animate-ping opacity-75"></div>
        <div className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-pulse"></div>
      </div>
    </div>
  )
}
