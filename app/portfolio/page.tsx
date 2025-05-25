import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Github, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollAnimation } from "@/components/scroll-animation"
import LogoCarousel from "@/components/ui/LogoCarousel"
import AnimatedCard from "@/components/animated_card"

const cardData = [
  {
    title: 'Card 1',
    image: 'https://www.digitalsilk.com/wp-content/uploads/2025/01/remax-left-with-background-new.jpg',
  },
  {
    title: 'Card 2',
    image: 'https://www.digitalsilk.com/wp-content/uploads/2025/01/remax-left-with-background-new.jpg',
  },
  {
    title: 'Card 3',
    image: 'https://www.digitalsilk.com/wp-content/uploads/2024/09/BO.png',
  },
  {
    title: 'Card 4',
    image: 'https://www.digitalsilk.com/wp-content/uploads/2024/09/NW.png',
  },
  {
    title: 'Card 5',
    image: 'https://www.digitalsilk.com/wp-content/uploads/2024/09/Rollink.png',
  },
  {
    title: 'Card 6',
    image: 'https://www.digitalsilk.com/wp-content/uploads/2024/09/Rollink.png',
  },
];

const partnerLogos = [
  { src: "https://www.digitalsilk.com/wp-content/uploads/2024/05/g2_logo-1.png", alt: "Facebook" },
  { src: "https://www.digitalsilk.com/wp-content/uploads/2024/05/BRU_Logo-1.png", alt: "Disney" },
  { src: "https://www.digitalsilk.com/wp-content/uploads/2024/05/MicrosoftTeams-image-2.png", alt: "Airbnb" },
  { src: "https://www.digitalsilk.com/wp-content/uploads/2024/05/enchant_logo-1.png", alt: "Apple" },
  { src: "https://www.digitalsilk.com/wp-content/uploads/2024/05/Sony-1.png", alt: "Spark" },
  { src: "https://www.digitalsilk.com/wp-content/uploads/2024/05/MicrosoftTeams-image-2.png", alt: "Samsung" },
  { src: "https://www.digitalsilk.com/wp-content/uploads/2024/05/xerox_logo-1.png", alt: "Quora" },
  { src: "https://www.digitalsilk.com/wp-content/uploads/2024/05/grenco_logo-1.png", alt: "Sass" },
  { src: "https://www.digitalsilk.com/wp-content/uploads/2024/05/BRU_Logo-1.png", alt: "Apple" },
  { src:"https://www.digitalsilk.com/wp-content/uploads/2024/05/PG_logo-1.png", alt: "Spark" },
  { src: "https://www.digitalsilk.com/wp-content/uploads/2024/05/mcds_logo-1.png", alt: "Samsung" },
  { src: "https://www.digitalsilk.com/wp-content/uploads/2024/05/nyc_logo-1.png", alt: "Quora" },
];

const categories = [
  "All",
  "Branding & Web Design",
  "E-commerce Development",
  "Fashion & Lifestyle",
  "FinTech",
  "Education Technology",
  "Non-Profit",
];

export default function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <section className="w-full py-20 md:py-28 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
        <div className="container px-4 md:px-6 relative z-10">
          <ScrollAnimation type="fade-up">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 mb-2">
                <span className="mr-1">✦</span> Our Work
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Portfolio</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Explore our latest projects and see how we've helped brands transform their digital presence
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="w-full">
        <section className="bg-[#00042A] h-[100px] mb-10 justify-center md:items-center pt-5">
          <div className="container px-4 md:px-6">
            <div className="overflow-hidden">
              <div className="flex animate-scroll-left whitespace-nowrap">
                <LogoCarousel logos={partnerLogos} duration={60} />
              </div>
            </div>
          </div>
        </section>

        <div className="container px-4 md:px-6">
          <ScrollAnimation type="fade-up">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className="bg-slate-800/50 border-slate-700 text-gray-300 hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-white transition-all duration-300"
                >
                  {category}
                </Button>
              ))}
            </div>
          </ScrollAnimation>

          <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
            <AnimatedCard
              title="Stylish Image Cards"
              cards={cardData}
              columns="grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-2"
              height="h-[450px]"
            />
          </div>

          <ScrollAnimation type="fade-up" delay={600}>
            <div className="flex justify-center mt-12">
              <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0">
                Load More Projects
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="w-full py-20 md:py-28 bg-gradient-to-r from-slate-900 via-purple-900/20 to-slate-900">
        <div className="container px-4 md:px-6">
          <ScrollAnimation type="fade-up">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Ready to Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Your Project?</span>
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-400 md:text-lg">
                Contact us today to discuss your requirements and get a free quote.
              </p>
              <Button asChild className="bg-purple-600 hover:bg-purple-700 border-0 text-white px-8 py-4">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}