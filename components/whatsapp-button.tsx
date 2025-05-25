"use client"

import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"

interface WhatsAppButtonProps {
  phoneNumber: string
}

export function WhatsAppButton({ phoneNumber }: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=I'm%20interested%20in%20your%20services`}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 transform hover:scale-110 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
