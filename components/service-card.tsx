import type React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedCard, { AnimatedCardHeader, AnimatedCardContent, AnimatedCardFooter } from "@/components/animated_card"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
  price?: string
  image?: string
}

export default function ServiceCard({ icon, title, description, link, price, image }: ServiceCardProps) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <AnimatedCard
        className="h-full transition-all duration-300 hover:shadow-xl border-slate-700 bg-slate-800/50 hover:bg-slate-800/80 backdrop-blur-sm overflow-hidden group relative"
        glowColor="rgba(139, 92, 246, 0.15)"
      >
        {image && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-full p-4">
              <div className="inline-flex items-center px-2 py-1 rounded-full bg-slate-900/70 backdrop-blur-sm text-xs text-purple-300 border border-purple-500/20">
                {price}
              </div>
            </div>
          </div>
        )}

        <AnimatedCardHeader className="pb-2">
          <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-3 rounded-full inline-flex">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
            {title}
          </h3>
        </AnimatedCardHeader>
        <AnimatedCardContent className="flex-grow">
          <p className="text-gray-400 mb-4">{description}</p>
          {price && !image && (
            <div className="mt-2 mb-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300">
                {price}
              </div>
            </div>
          )}
        </AnimatedCardContent>
        <AnimatedCardFooter>
          <Button
            asChild
            className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-md shadow-purple-500/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/30"
          >
            <Link href={link} className="flex items-center justify-center">
              Get Started{" "}
              <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </AnimatedCardFooter>
      </AnimatedCard>
    </div>
  )
}
