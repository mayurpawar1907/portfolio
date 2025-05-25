import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Palette, Code, Smartphone, Search, Video, Brush, ShoppingCart, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GravitationalText } from "@/components/gravitational-text"
import AnimatedCard, { AnimatedCardHeader, AnimatedCardContent, AnimatedCardFooter } from "@/components/animated_card"
import { ScrollAnimation } from "@/components/scroll-animation"

export const metadata: Metadata = {
  title: "Services | TechSpire Solutions",
  description:
    "Explore our comprehensive range of digital services including brand strategy, web development, digital marketing, and more.",
}

interface ServiceSectionProps {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  imageAlt: string
  reversed?: boolean
  link: string
}

function ServiceSection({ id, icon, title, description, features, imageAlt, reversed, link }: ServiceSectionProps) {
  return (
    <section id={id} className="w-full py-12 md:py-24 bg-slate-900 border-b border-slate-800 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className={`grid gap-6 lg:grid-cols-2 lg:gap-12 items-center ${reversed ? "lg:flex-row-reverse" : ""}`}>
          <div className={`space-y-4 ${reversed ? "order-2 lg:order-1" : ""}`}>
            <div className="inline-block p-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg">{icon}</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">{title}</h2>
            <p className="text-gray-300 md:text-xl">{description}</p>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <div className="mr-2 h-4 w-4 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
                  <span className="text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4 mt-6">
              <Button
                asChild
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
              >
                <Link href={link}>
                  Get Started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          <div
            className={`rounded-lg overflow-hidden border border-slate-700 shadow-xl shadow-purple-500/10 transform transition-transform duration-500 hover:scale-[1.02] ${
              reversed ? "order-1 lg:order-2" : ""
            }`}
          >
            <Link href={link}>
              <img
                src={getServiceImage(id) || "/placeholder.svg"}
                alt={imageAlt}
                className="aspect-video object-cover w-full transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function getServiceImage(serviceId: string) {
  const images = {
    "brand-strategy":
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "website-design":
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "web-development":
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "ecommerce-development":
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "app-development":
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "digital-marketing":
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "ui-ux-design":
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "video-production":
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  }

  return images[serviceId] || "/placeholder.svg?height=600&width=800"
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-28 bg-gradient-to-r from-slate-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Digital services background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-slate-900/90"></div>
        </div>

        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-30 animate-pulse"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 8 + 2}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}

        <div className="container px-4 md:px-6 relative z-10">
          <ScrollAnimation type="fade-up">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 backdrop-blur-sm mb-4">
                <span className="animate-pulse mr-2">●</span> Premium Digital Services
              </div>
              <div className="space-y-2">
                <GravitationalText
                  text="Our Services"
                  textClassName="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
                  intensity={0.1}
                  glowEffect={true}
                />
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl mt-4">
                  Comprehensive digital solutions to help your brand grow and succeed in the modern marketplace
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-6 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                >
                  <a href="#service-grid">
                    Explore Services{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white transition-all duration-300"
                >
                  <a
                    href="https://wa.me/919219967205?text=I'm%20interested%20in%20your%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact Us
                  </a>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Grid Preview */}
      <section
        id="service-grid"
        className="w-full py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-800 scroll-mt-16"
      >
        <div className="container px-4 md:px-6">
          <ScrollAnimation type="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm text-cyan-300 mb-2">
                <span className="mr-1">✦</span> Our Expertise
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Comprehensive{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Digital Solutions
                </span>
              </h2>
              <p className="mt-4 text-gray-300 md:text-lg max-w-3xl mx-auto">
                Discover our wide range of professional services designed to help your brand thrive in the digital world
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollAnimation type="fade-up" delay={100}>
              <AnimatedCard className="h-full transition-transform duration-300 hover:translate-y-[-8px]">
                <AnimatedCardHeader>
                  <div className="p-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Palette className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Brand Strategy & Identity</h3>
                </AnimatedCardHeader>
                <AnimatedCardContent>
                  <p className="text-gray-400">
                    Complete brand development from naming and messaging to visual identity systems.
                  </p>
                </AnimatedCardContent>
                <AnimatedCardFooter>
                  <Button
                    asChild
                    variant="ghost"
                    className="p-0 h-auto text-cyan-400 hover:text-cyan-300 hover:bg-transparent group"
                  >
                    <Link href="/services/brand-strategy" className="flex items-center">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </AnimatedCardFooter>
              </AnimatedCard>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={150}>
              <AnimatedCard className="h-full transition-transform duration-300 hover:translate-y-[-8px]">
                <AnimatedCardHeader>
                  <div className="p-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Brush className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Custom Website Design</h3>
                </AnimatedCardHeader>
                <AnimatedCardContent>
                  <p className="text-gray-400">UX research, wireframing, and conversion-focused design solutions.</p>
                </AnimatedCardContent>
                <AnimatedCardFooter>
                  <Button
                    asChild
                    variant="ghost"
                    className="p-0 h-auto text-cyan-400 hover:text-cyan-300 hover:bg-transparent group"
                  >
                    <Link href="/services/website-design" className="flex items-center">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </AnimatedCardFooter>
              </AnimatedCard>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <AnimatedCard className="h-full transition-transform duration-300 hover:translate-y-[-8px]">
                <AnimatedCardHeader>
                  <div className="p-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Web Development</h3>
                </AnimatedCardHeader>
                <AnimatedCardContent>
                  <p className="text-gray-400">Front-end and back-end development with CMS and API integration.</p>
                </AnimatedCardContent>
                <AnimatedCardFooter>
                  <Button
                    asChild
                    variant="ghost"
                    className="p-0 h-auto text-cyan-400 hover:text-cyan-300 hover:bg-transparent group"
                  >
                    <Link href="/services/web-development" className="flex items-center">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </AnimatedCardFooter>
              </AnimatedCard>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={250}>
              <AnimatedCard className="h-full transition-transform duration-300 hover:translate-y-[-8px]">
                <AnimatedCardHeader>
                  <div className="p-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <ShoppingCart className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">eCommerce Development</h3>
                </AnimatedCardHeader>
                <AnimatedCardContent>
                  <p className="text-gray-400">Shopify, WooCommerce, and custom eCommerce solutions.</p>
                </AnimatedCardContent>
                <AnimatedCardFooter>
                  <Button
                    asChild
                    variant="ghost"
                    className="p-0 h-auto text-cyan-400 hover:text-cyan-300 hover:bg-transparent group"
                  >
                    <Link href="/services/ecommerce-development" className="flex items-center">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </AnimatedCardFooter>
              </AnimatedCard>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <AnimatedCard className="h-full transition-transform duration-300 hover:translate-y-[-8px]">
                <AnimatedCardHeader>
                  <div className="p-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Smartphone className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Mobile & Web Apps</h3>
                </AnimatedCardHeader>
                <AnimatedCardContent>
                  <p className="text-gray-400">Native, cross-platform apps and SaaS platform development.</p>
                </AnimatedCardContent>
                <AnimatedCardFooter>
                  <Button
                    asChild
                    variant="ghost"
                    className="p-0 h-auto text-cyan-400 hover:text-cyan-300 hover:bg-transparent group"
                  >
                    <Link href="/services/app-development" className="flex items-center">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </AnimatedCardFooter>
              </AnimatedCard>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={350}>
              <AnimatedCard className="h-full transition-transform duration-300 hover:translate-y-[-8px]">
                <AnimatedCardHeader>
                  <div className="p-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Search className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Digital Marketing</h3>
                </AnimatedCardHeader>
                <AnimatedCardContent>
                  <p className="text-gray-400">SEO, PPC, content marketing, and social media strategies.</p>
                </AnimatedCardContent>
                <AnimatedCardFooter>
                  <Button
                    asChild
                    variant="ghost"
                    className="p-0 h-auto text-cyan-400 hover:text-cyan-300 hover:bg-transparent group"
                  >
                    <Link href="/services/digital-marketing" className="flex items-center">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </AnimatedCardFooter>
              </AnimatedCard>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={400}>
              <AnimatedCard className="h-full transition-transform duration-300 hover:translate-y-[-8px]">
                <AnimatedCardHeader>
                  <div className="p-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">UI/UX Design</h3>
                </AnimatedCardHeader>
                <AnimatedCardContent>
                  <p className="text-gray-400">User research, prototyping, and interface design solutions.</p>
                </AnimatedCardContent>
                <AnimatedCardFooter>
                  <Button
                    asChild
                    variant="ghost"
                    className="p-0 h-auto text-cyan-400 hover:text-cyan-300 hover:bg-transparent group"
                  >
                    <Link href="/services/ui-ux-design" className="flex items-center">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </AnimatedCardFooter>
              </AnimatedCard>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={450}>
              <AnimatedCard className="h-full transition-transform duration-300 hover:translate-y-[-8px]">
                <AnimatedCardHeader>
                  <div className="p-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Video className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Video Production</h3>
                </AnimatedCardHeader>
                <AnimatedCardContent>
                  <p className="text-gray-400">Explainer videos, motion graphics, and brand story content.</p>
                </AnimatedCardContent>
                <AnimatedCardFooter>
                  <Button
                    asChild
                    variant="ghost"
                    className="p-0 h-auto text-cyan-400 hover:text-cyan-300 hover:bg-transparent group"
                  >
                    <Link href="/services/video-production" className="flex items-center">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </AnimatedCardFooter>
              </AnimatedCard>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Brand Strategy & Identity */}
      <ServiceSection
        id="brand-strategy"
        icon={<Palette className="h-10 w-10 text-purple-400" />}
        title="Brand Strategy & Identity"
        description="Complete brand development from naming and messaging to visual identity systems that resonate with your audience."
        features={[
          "Brand naming and messaging strategy",
          "Logo design and visual identity",
          "Brand guidelines and positioning",
          "Corporate identity systems",
        ]}
        imageAlt="Brand strategy visualization"
        link="/services/brand-strategy"
      />

      {/* Custom Website Design */}
      <ServiceSection
        id="website-design"
        icon={<Brush className="h-10 w-10 text-cyan-400" />}
        title="Custom Website Design"
        description="UX research, wireframing, and conversion-focused design solutions that deliver exceptional user experiences."
        features={[
          "UX research and wireframing",
          "UI design and prototyping",
          "Responsive and interactive design",
          "Conversion-focused layouts",
        ]}
        imageAlt="Website design process"
        reversed={true}
        link="/services/website-design"
      />

      {/* Web Development */}
      <ServiceSection
        id="web-development"
        icon={<Code className="h-10 w-10 text-purple-400" />}
        title="Web Development"
        description="Front-end and back-end development with CMS integration and performance optimization for modern web experiences."
        features={[
          "Front-end and back-end development",
          "CMS development (WordPress, Drupal, etc.)",
          "API integration and development",
          "Performance optimization",
        ]}
        imageAlt="Web development"
        link="/services/web-development"
      />

      {/* eCommerce Development */}
      <ServiceSection
        id="ecommerce-development"
        icon={<ShoppingCart className="h-10 w-10 text-cyan-400" />}
        title="eCommerce Development"
        description="Shopify, WooCommerce, and custom eCommerce solutions with optimized checkout experiences and marketing integration."
        features={[
          "Shopify, WooCommerce, Magento development",
          "Custom eCommerce platform development",
          "Payment gateway integration",
          "Inventory management systems",
        ]}
        imageAlt="eCommerce development"
        reversed={true}
        link="/services/ecommerce-development"
      />

      {/* Mobile & Web Apps */}
      <ServiceSection
        id="app-development"
        icon={<Smartphone className="h-10 w-10 text-purple-400" />}
        title="Mobile & Web Apps"
        description="Native, cross-platform apps and SaaS platform development with modern frameworks and cloud integration."
        features={[
          "iOS and Android native development",
          "Cross-platform development (React Native, Flutter)",
          "Progressive Web Apps (PWA)",
          "SaaS platform development",
        ]}
        imageAlt="Mobile app development"
        link="/services/app-development"
      />

      {/* Digital Marketing */}
      <ServiceSection
        id="digital-marketing"
        icon={<Search className="h-10 w-10 text-cyan-400" />}
        title="Digital Marketing"
        description="SEO, PPC, content marketing, and social media strategies to grow your online presence and drive conversions."
        features={[
          "Search Engine Optimization (SEO)",
          "Pay-Per-Click (PPC) advertising",
          "Content marketing and strategy",
          "Social media marketing",
        ]}
        imageAlt="Digital marketing"
        reversed={true}
        link="/services/digital-marketing"
      />

      {/* UI/UX Design */}
      <ServiceSection
        id="ui-ux-design"
        icon={<Globe className="h-10 w-10 text-purple-400" />}
        title="UI/UX Design"
        description="User research, prototyping, and interface design solutions that create intuitive and engaging user experiences."
        features={[
          "User experience research and testing",
          "Wireframing and prototyping",
          "Interface design and visual systems",
          "Usability testing and optimization",
        ]}
        imageAlt="UI/UX design"
        link="/services/ui-ux-design"
      />

      {/* Video Production */}
      <ServiceSection
        id="video-production"
        icon={<Video className="h-10 w-10 text-cyan-400" />}
        title="Video Production"
        description="Explainer videos, motion graphics, and brand story content that engages your audience and communicates your message effectively."
        features={[
          "Explainer and promotional videos",
          "Motion graphics and animation",
          "Brand story and testimonial videos",
          "Video editing and post-production",
        ]}
        imageAlt="Video production"
        reversed={true}
        link="/services/video-production"
      />

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-purple-600 to-cyan-600">
        <div className="container px-4 md:px-6">
          <ScrollAnimation type="fade-up">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="mx-auto max-w-[600px] text-purple-100 md:text-xl">
                Let's discuss your project and create something amazing together. Get in touch with our team today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/contact">
                    Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white transition-all duration-300"
                >
                  <a
                    href="https://wa.me/919219967205?text=I'm%20interested%20in%20your%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
