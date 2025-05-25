"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  textClassName?: string
  animated?: boolean
  size?: "sm" | "md" | "lg"
}

export function Logo({ className, textClassName, animated = true, size = "md" }: LogoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const sizeMap = {
    sm: { canvas: 32, font: "text-lg" },
    md: { canvas: 48, font: "text-2xl" },
    lg: { canvas: 64, font: "text-3xl" },
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const canvasSize = sizeMap[size].canvas
    canvas.width = canvasSize
    canvas.height = canvasSize

    let animationFrame: number
    let rotation = 0

    const drawLogo = () => {
      ctx.clearRect(0, 0, canvasSize, canvasSize)

      // Set the center of the canvas
      const centerX = canvasSize / 2
      const centerY = canvasSize / 2

      // Create a radial gradient background
      const bgGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, canvasSize / 2)
      bgGradient.addColorStop(0, "rgba(139, 92, 246, 0.2)")
      bgGradient.addColorStop(1, "rgba(6, 182, 212, 0.2)")

      // Draw background circle
      ctx.beginPath()
      ctx.arc(centerX, centerY, canvasSize / 2 - 1, 0, Math.PI * 2)
      ctx.fillStyle = bgGradient
      ctx.fill()

      // Create outer ring gradient
      const outerGradient = ctx.createLinearGradient(0, 0, canvasSize, canvasSize)
      outerGradient.addColorStop(0, "rgba(168, 85, 247, 0.8)") // purple-500
      outerGradient.addColorStop(1, "rgba(6, 182, 212, 0.8)") // cyan-500

      // Draw outer ring
      ctx.beginPath()
      ctx.arc(centerX, centerY, canvasSize / 2 - 2, 0, Math.PI * 2)
      ctx.strokeStyle = outerGradient
      ctx.lineWidth = 2
      ctx.stroke()

      // Save the current state
      ctx.save()

      // Move to center and rotate
      ctx.translate(centerX, centerY)
      if (animated) {
        ctx.rotate(rotation)
      }

      // Draw the brand symbol (diamond pattern)
      const radius = canvasSize / 3

      // Create gradient for the brand lines
      const brandGradient = ctx.createLinearGradient(-radius, -radius, radius, radius)
      brandGradient.addColorStop(0, "rgba(168, 85, 247, 1)") // purple-500
      brandGradient.addColorStop(1, "rgba(6, 182, 212, 1)") // cyan-500

      ctx.strokeStyle = brandGradient
      ctx.lineWidth = 2

      // Draw diamond shape
      ctx.beginPath()
      ctx.moveTo(0, -radius)
      ctx.lineTo(radius * 0.7, 0)
      ctx.lineTo(0, radius)
      ctx.lineTo(-radius * 0.7, 0)
      ctx.closePath()
      ctx.stroke()

      // Draw inner diamond
      ctx.beginPath()
      ctx.moveTo(0, -radius * 0.5)
      ctx.lineTo(radius * 0.35, 0)
      ctx.lineTo(0, radius * 0.5)
      ctx.lineTo(-radius * 0.35, 0)
      ctx.closePath()
      ctx.stroke()

      // Draw center dot
      ctx.beginPath()
      ctx.arc(0, 0, canvasSize / 12, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(255, 255, 255, 0.9)"
      ctx.fill()

      // Restore the context
      ctx.restore()

      // Update rotation for animation
      if (animated) {
        rotation += 0.005
        animationFrame = requestAnimationFrame(drawLogo)
      }
    }

    drawLogo()

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [animated, size])

  return (
    <Link href="/" className={cn("flex items-center space-x-2", className)}>
      <canvas ref={canvasRef} className="rounded-full" width={sizeMap[size].canvas} height={sizeMap[size].canvas} />
      <span
        className={cn(
          "font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400",
          sizeMap[size].font,
          textClassName,
        )}
      >
        Grand Brand
      </span>
    </Link>
  )
}
