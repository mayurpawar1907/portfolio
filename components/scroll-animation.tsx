"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out" | "flip" | "rotate"

interface ScrollAnimationProps {
  children: React.ReactNode
  type?: AnimationType
  delay?: number
  duration?: number
  className?: string
  threshold?: number
  once?: boolean
}

export function ScrollAnimation({
  children,
  type = "fade-up",
  delay = 0,
  duration = 500,
  className,
  threshold = 0.1,
  once = true,
}: ScrollAnimationProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: once,
  })

  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [inView, hasAnimated])

  const getAnimationStyles = () => {
    if (!inView && !hasAnimated) {
      switch (type) {
        case "fade-up":
          return "opacity-0 translate-y-10"
        case "fade-down":
          return "opacity-0 -translate-y-10"
        case "fade-left":
          return "opacity-0 translate-x-10"
        case "fade-right":
          return "opacity-0 -translate-x-10"
        case "zoom-in":
          return "opacity-0 scale-95"
        case "zoom-out":
          return "opacity-0 scale-105"
        case "flip":
          return "opacity-0 rotateY-90"
        case "rotate":
          return "opacity-0 rotate-180"
        default:
          return "opacity-0"
      }
    }
    return "opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0"
  }

  return (
    <div
      ref={ref}
      className={cn("transition-all", getAnimationStyles(), className)}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  )
}
