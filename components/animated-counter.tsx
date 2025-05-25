"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const counterRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animateCounter()
        }
      },
      { threshold: 0.1 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [end])

  const animateCounter = () => {
    const startTime = Date.now()
    const tick = () => {
      const elapsedTime = Date.now() - startTime
      const progress = Math.min(elapsedTime / duration, 1)
      const currentCount = Math.floor(progress * end)
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(tick)
      } else {
        setCount(end)
      }
    }

    tick()
  }

  return (
    <div ref={counterRef} className={cn("font-bold", className)}>
      {prefix}
      {count}
      {suffix}
    </div>
  )
}
