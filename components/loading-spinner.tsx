"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function LoadingSpinner({ className }: { className?: string }) {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360)
    }, 10)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={cn("relative w-12 h-12", className)}>
      <div
        className="absolute w-full h-full rounded-md border-4 border-purple-400 border-opacity-50"
        style={{
          transform: `rotateX(${rotation}deg) rotateY(${rotation / 2}deg)`,
          transition: "transform 0.05s linear",
        }}
      />
      <div
        className="absolute w-full h-full rounded-md border-4 border-cyan-400 border-opacity-50"
        style={{
          transform: `rotateX(${-rotation}deg) rotateY(${-rotation / 2}deg)`,
          transition: "transform 0.05s linear",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
      </div>
    </div>
  )
}
