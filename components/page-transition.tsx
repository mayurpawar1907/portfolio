"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { EnhancedLoading } from "@/components/enhanced-loading"
import { GravitationalText } from "@/components/gravitational-text"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)
  const [content, setContent] = useState(children)
  const [loadingText, setLoadingText] = useState("Loading")

  // Update content when pathname changes
  useEffect(() => {
    setIsLoading(true)

    // Change loading text based on path
    const path = pathname.split("/")[1] || "home"
    setLoadingText(`Loading ${path}`)

    const timer = setTimeout(() => {
      setContent(children)
      setIsLoading(false)
    }, 1500) // slightly longer transition for better effect

    return () => clearTimeout(timer)
  }, [pathname, children])

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-r from-slate-900/95 via-purple-900/30 to-slate-900/95 backdrop-blur-md transition-all duration-500">
          <div className="flex flex-col items-center space-y-12">
            <EnhancedLoading className="w-48 h-48" />
            <GravitationalText
              text={loadingText}
              textClassName="text-3xl font-light"
              animateOnScroll={false}
              intensity={0.1}
            />
          </div>
        </div>
      )}
      <div className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>{content}</div>
    </>
  )
}
