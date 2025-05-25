"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Reviews", href: "/reviews" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-gradient-to-r from-slate-900/95 via-purple-900/20 to-slate-900/95 backdrop-blur-md shadow-lg shadow-purple-500/5 border-b border-purple-500/10"
          : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Logo size="md" className="flex-shrink-0" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
                pathname === item.href
                  ? "text-white bg-gradient-to-r from-purple-500/20 to-cyan-500/20 shadow-sm shadow-purple-500/10"
                  : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-cyan-500/10",
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button
            asChild
            className="ml-2 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-md shadow-purple-500/20"
          >
            <Link href="/contact">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-cyan-500/10"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-50 bg-gradient-to-b from-slate-900/98 to-purple-900/90 backdrop-blur-md transition-all duration-300 transform",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b border-purple-500/20">
            <Logo size="sm" />
            <button
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-cyan-500/10"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col p-4 space-y-2 overflow-y-auto flex-grow">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-3 rounded-md text-base font-medium transition-all duration-200",
                  pathname === item.href
                    ? "text-white bg-gradient-to-r from-purple-500/20 to-cyan-500/20"
                    : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-cyan-500/10",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-purple-500/20">
            <Button
              asChild
              className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-md shadow-purple-500/20"
            >
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
