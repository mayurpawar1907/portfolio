"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ImageLoaderProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export function ImageLoader({ src, alt, width, height, className, priority = false }: ImageLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Reset loading state when src changes
    setIsLoaded(false)
  }, [src])

  return (
    <div className={`relative overflow-hidden ${className || ""}`}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width || 1200}
        height={height || 800}
        className={`transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setIsLoaded(true)}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center">
          <svg
            className="w-10 h-10 text-slate-600 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      )}
    </div>
  )
}
