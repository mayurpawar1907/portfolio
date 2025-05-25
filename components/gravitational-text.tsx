"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

interface GravitationalTextProps {
  text: string
  className?: string
  textClassName?: string
  intensity?: number
  children?: React.ReactNode
  animateOnScroll?: boolean
  animateOnHover?: boolean
  colorful?: boolean
  glowEffect?: boolean
}

export function GravitationalText({
  text,
  className,
  textClassName,
  intensity = 0.08,
  children,
  animateOnScroll = true,
  animateOnHover = true,
  colorful = true,
  glowEffect = true,
}: GravitationalTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [letters, setLetters] = useState<string[]>([])
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })
  const [hasAnimated, setHasAnimated] = useState(false)
  const [time, setTime] = useState(0)

  useEffect(() => {
    setLetters(text.split(""))
  }, [text])

  useEffect(() => {
    if (inView && animateOnScroll && !hasAnimated) {
      setHasAnimated(true)
    } else if (!inView && !isHovered) {
      setHasAnimated(false)
    }
  }, [inView, animateOnScroll, isHovered, hasAnimated])

  // Animation timer for continuous subtle movement
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !animateOnHover) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    setPosition({ x, y })
  }

  return (
    <div
      ref={(node) => {
        // Assign to both refs
        if (containerRef) {
          // @ts-ignore - this is a valid operation
          containerRef.current = node
        }
        if (ref) {
          ref(node)
        }
      }}
      className={cn("relative overflow-hidden", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative inline-block">
        <span className="sr-only">{text}</span>
        <span
          aria-hidden="true"
          className={cn(
            "inline-block transition-all duration-300",
            colorful ? "bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400" : "",
            textClassName,
          )}
        >
          {letters.map((letter, index) => {
            // Calculate distance from mouse position to letter
            const letterPosition = index / letters.length
            const distX = letterPosition - position.x
            const distY = 0.5 - position.y
            const distance = Math.sqrt(distX * distX + distY * distY)

            // Calculate movement based on distance (closer = more movement)
            const moveX = isHovered && animateOnHover ? (distX * intensity) / (distance || 0.1) : 0
            const moveY = isHovered && animateOnHover ? (distY * intensity) / (distance || 0.1) : 0

            // Add continuous subtle floating movement
            const floatX = Math.sin(time * 0.05 + index * 0.3) * 0.004
            const floatY = Math.cos(time * 0.05 + index * 0.2) * 0.004

            // Scroll animation
            const scrollY =
              inView && animateOnScroll && !hasAnimated
                ? Math.cos(index * 0.3) * 30 // Initial position (scattered)
                : 0 // Final position

            const scrollOpacity = inView && animateOnScroll && !hasAnimated ? 0 : 1

            // Color variation for each letter if colorful
            const hue1 = 280 + (index / letters.length) * 20 // Purple range
            const hue2 = 180 + (index / letters.length) * 20 // Cyan range
            const letterColor = colorful
              ? `linear-gradient(135deg, hsl(${hue1}, 83%, 66%), hsl(${hue2}, 83%, 66%))`
              : undefined

            // Glow effect when hovered
            const glow =
              isHovered && glowEffect
                ? `0 0 5px rgba(139, 92, 246, ${0.3 + (1 - distance) * 0.4}), 0 0 10px rgba(6, 182, 212, ${0.2 + (1 - distance) * 0.3})`
                : "0 0 5px rgba(139, 92, 246, 0.1)"

            return (
              <span
                key={index}
                className="inline-block transition-all"
                style={{
                  transform: `translate(${moveX + floatX}rem, ${moveY + floatY + scrollY}rem)`,
                  opacity: hasAnimated ? 1 : scrollOpacity,
                  transitionDuration: `${0.5 + index * 0.03}s`,
                  transitionProperty: "transform, opacity, text-shadow",
                  transitionTimingFunction: "cubic-bezier(0.2, 0.8, 0.2, 1)",
                  display: letter === " " ? "inline-block" : undefined,
                  width: letter === " " ? "0.25em" : undefined,
                  backgroundImage: letterColor,
                  WebkitBackgroundClip: colorful ? "text" : undefined,
                  WebkitTextFillColor: colorful ? "transparent" : undefined,
                  textShadow: colorful ? glow : undefined,
                  scale: isHovered && glowEffect ? 1 + (1 - distance) * 0.1 : 1,
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            )
          })}
        </span>
      </div>
      {children}
    </div>
  )
}
