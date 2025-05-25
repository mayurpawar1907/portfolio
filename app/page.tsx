import Link from "next/link"
import {
  ArrowRight,
  Palette,
  Code,
  Smartphone,
  Search,
  ChevronRight,
  Star,
  Zap,
  Award,
  Users,
  Globe,
  Brush,
  ShoppingCart,
  Play,
  Sparkles,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import { ScrollAnimation } from "@/components/scroll-animation"
import { GravitationalText } from "@/components/gravitational-text"
import AnimatedCard, { AnimatedCardContent } from "@/components/animated_card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-900 text-white relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated gradient orbs */}
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDuration: "8s" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDuration: "10s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full filter blur-2xl animate-pulse"
            style={{ animationDuration: "12s" }}
          ></div>

          {/* Geometric patterns */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-purple-500/5 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-cyan-500/5 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-purple-500/5 rounded-full"></div>

          {/* Floating particles */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-20 animate-pulse"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 3}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <ScrollAnimation type="fade-right">
              <div className="space-y-8">
                {/* Enhanced badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 backdrop-blur-sm">
                  <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
                  <span className="font-medium">Premium Digital Solutions</span>
                  <div className="ml-2 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                </div>

                {/* Enhanced heading */}
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                    <GravitationalText
                      text="Build Powerful"
                      textClassName="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"
                      intensity={0.15}
                      glowEffect={true}
                    />
                    <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-white">
                      Digital Experiences
                    </span>
                    <span className="block mt-2 text-2xl md:text-3xl lg:text-4xl font-normal text-gray-300">
                      That Help Modern Brands{" "}
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold">
                        Grow
                      </span>
                    </span>
                  </h1>
                </div>

                {/* Enhanced description */}
                <p className="text-xl md:text-2xl text-gray-300 max-w-[600px] leading-relaxed">
                  We combine strategic thinking, creative excellence, and technical innovation to deliver digital
                  solutions that drive real business growth.
                </p>

                {/* Enhanced CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 shadow-lg shadow-purple-700/25 transition-all duration-300 hover:shadow-xl hover:shadow-purple-700/35 text-lg px-8 py-6 group"
                  >
                    <Link href="/services" className="flex items-center">
                      <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      Explore Our Work
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="bg-transparent text-white border-white/30 hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-6 group"
                  >
                    <a
                      href="https://wa.me/919219967205?text=I'm%20interested%20in%20your%20services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Zap className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      Free Consultation
                    </a>
                  </Button>
                </div>

                {/* Enhanced trust indicators */}
                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center space-x-3 bg-slate-800/50 backdrop-blur-sm px-4 py-3 rounded-full border border-slate-700/50 group hover:border-purple-500/30 transition-all duration-300">
                    <Award className="h-6 w-6 text-purple-400 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300 font-medium">Award-winning designs</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-slate-800/50 backdrop-blur-sm px-4 py-3 rounded-full border border-slate-700/50 group hover:border-cyan-500/30 transition-all duration-300">
                    <Users className="h-6 w-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300 font-medium">500+ happy clients</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-slate-800/50 backdrop-blur-sm px-4 py-3 rounded-full border border-slate-700/50 group hover:border-purple-500/30 transition-all duration-300">
                    <Star className="h-6 w-6 text-yellow-400 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300 font-medium">98% satisfaction rate</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-left" delay={200}>
              <div className="relative">
                {/* Enhanced glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl blur-lg opacity-40 animate-pulse"></div>

                {/* Main content container with coding workspace */}
                <div className="relative h-[450px] md:h-[550px] rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/20 backdrop-blur-sm bg-slate-900/50">
                  {/* Professional coding workspace image */}
                  <img
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Professional coding workspace"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20"></div>

                  {/* Code overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>

                  {/* Floating code elements */}
                  <div className="absolute top-6 left-6 bg-slate-900/80 backdrop-blur-sm rounded-lg p-3 border border-purple-500/30">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-xs text-green-400 font-mono">
                      <div>{'<div className="hero">'}</div>
                      <div className="ml-2 text-cyan-400">{"<h1>Grand Brand</h1>"}</div>
                      <div>{"</div>"}</div>
                    </div>
                  </div>

                  <div className="absolute top-6 right-6 bg-slate-900/80 backdrop-blur-sm rounded-lg p-3 border border-cyan-500/30">
                    <div className="text-xs text-purple-400 font-mono">
                      <div>{"const brand = {"}</div>
                      <div className="ml-2 text-cyan-400">{'name: "Grand Brand",'}</div>
                      <div className="ml-2 text-green-400">{'status: "Building..."'}</div>
                      <div>{"}"}</div>
                    </div>
                  </div>

                  {/* Bottom overlay with professional stats */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent h-40 flex items-end justify-center pb-8">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-6 mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">500+</div>
                          <div className="text-xs text-gray-400">Projects</div>
                        </div>
                        <div className="w-px h-8 bg-gray-600"></div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">98%</div>
                          <div className="text-xs text-gray-400">Success Rate</div>
                        </div>
                        <div className="w-px h-8 bg-gray-600"></div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">24/7</div>
                          <div className="text-xs text-gray-400">Support</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <div
                          className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"
                          style={{ animationDelay: "0.5s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                          style={{ animationDelay: "1s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced decorative elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
                <div
                  className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>

                {/* Floating tech icons */}
                <div
                  className="absolute top-10 right-10 w-8 h-8 bg-purple-400/20 rounded-lg flex items-center justify-center animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                >
                  <Code className="h-4 w-4 text-purple-400" />
                </div>
                <div
                  className="absolute bottom-20 left-10 w-8 h-8 bg-cyan-400/20 rounded-lg flex items-center justify-center animate-bounce"
                  style={{ animationDelay: "1.5s" }}
                >
                  <Globe className="h-4 w-4 text-cyan-400" />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <div className="text-xs text-purple-400 mb-2 font-medium">Scroll to explore</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-purple-400"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-b from-slate-950 to-slate-900 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
        <div className="container px-4 md:px-6 relative">
          <ScrollAnimation type="fade-up">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm text-cyan-300 mb-2">
                <Shield className="h-4 w-4 mr-2" /> Why Choose Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Built for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Excellence
                </span>
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                We deliver world-class digital solutions with cutting-edge technology and innovative design
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <ScrollAnimation type="fade-up" delay={100}>
              <AnimatedCard className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 group">
                <AnimatedCardContent className="flex flex-col items-center text-center space-y-4 p-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500/20 to-purple-500/5 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Growth Focused</h3>
                  <p className="text-gray-300 text-sm">
                    Every solution is designed to drive measurable business growth and ROI.
                  </p>
                </AnimatedCardContent>
              </AnimatedCard>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <AnimatedCard className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 group">
                <AnimatedCardContent className="flex flex-col items-center text-center space-y-4 p-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-cyan-500/5 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Enterprise Security</h3>
                  <p className="text-gray-300 text-sm">
                    Bank-level security protocols to protect your data and customers.
                  </p>
                </AnimatedCardContent>
              </AnimatedCard>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <AnimatedCard className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 group">
                <AnimatedCardContent className="flex flex-col items-center text-center space-y-4 p-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500/20 to-purple-500/5 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Lightning Fast</h3>
                  <p className="text-gray-300 text-sm">
                    Optimized for speed with 99.9% uptime guarantee and global CDN.
                  </p>
                </AnimatedCardContent>
              </AnimatedCard>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={400}>
              <AnimatedCard className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 group">
                <AnimatedCardContent className="flex flex-col items-center text-center space-y-4 p-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-cyan-500/5 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Expert Team</h3>
                  <p className="text-gray-300 text-sm">
                    Certified professionals with 10+ years of industry experience.
                  </p>
                </AnimatedCardContent>
              </AnimatedCard>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-b from-slate-900 to-slate-800 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
        <div className="container px-4 md:px-6 relative">
          <ScrollAnimation type="fade-up">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm text-cyan-300 mb-2">
                <span className="mr-1">✦</span> Our Expertise
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Premium Services{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  For Your Brand
                </span>
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Comprehensive digital solutions tailored to help your brand stand out and succeed
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <ScrollAnimation type="fade-up" delay={100}>
              <ServiceCard
                icon={<Palette className="h-10 w-10 text-purple-400" />}
                title="Brand Strategy & Identity"
                description="Complete brand development from naming to visual identity systems."
                link="/services/brand-strategy"
                price="Starting at ₹49,999"
                image="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={150}>
              <ServiceCard
                icon={<Brush className="h-10 w-10 text-cyan-400" />}
                title="Custom Website Design"
                description="UX research, wireframing, and conversion-focused design solutions."
                link="/services/website-design"
                price="Starting at ₹39,999"
                image="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <ServiceCard
                icon={<Code className="h-10 w-10 text-purple-400" />}
                title="Web Development"
                description="Front-end, back-end development with CMS and API integration."
                link="/services/web-development"
                price="Starting at ₹59,999"
                image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={250}>
              <ServiceCard
                icon={<ShoppingCart className="h-10 w-10 text-cyan-400" />}
                title="eCommerce Development"
                description="Shopify, WooCommerce, and custom eCommerce solutions."
                link="/services/ecommerce-development"
                price="Starting at ₹79,999"
                image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <ServiceCard
                icon={<Smartphone className="h-10 w-10 text-purple-400" />}
                title="Mobile & Web Apps"
                description="Native, cross-platform apps and SaaS platform development."
                link="/services/app-development"
                price="Starting at ₹99,999"
                image="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={350}>
              <ServiceCard
                icon={<Search className="h-10 w-10 text-cyan-400" />}
                title="Digital Marketing"
                description="SEO, PPC, content marketing, and social media strategies."
                link="/services/digital-marketing"
                price="Starting at ₹29,999"
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              />
            </ScrollAnimation>
          </div>

          <div className="flex justify-center mt-16">
            <Button
              asChild
              className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-md shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
            >
              <Link href="/services" className="flex items-center">
                View All Services <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section with enhanced design */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-r from-slate-900 via-purple-900/20 to-slate-900 text-white border-y border-purple-500/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
          <img
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Brand background"
            className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay"
          />
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
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
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <ScrollAnimation type="fade-up">
            <div className="flex flex-col items-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 mb-2">
                <Star className="h-4 w-4 mr-2" /> Our Impact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                Our Success Story
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Delivering excellence and innovation in digital branding and development
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <ScrollAnimation type="fade-up" delay={100}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-purple-600/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex flex-col items-center space-y-4 p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/10">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Palette className="h-10 w-10 text-purple-400" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                    500<span className="text-purple-400">+</span>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base">Brands Created</p>
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600/30 to-cyan-600/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex flex-col items-center space-y-4 p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-10 w-10 text-cyan-400" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                    300<span className="text-cyan-400">+</span>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base">Websites Built</p>
                  <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-purple-600/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex flex-col items-center space-y-4 p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/10">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-10 w-10 text-purple-400" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                    98<span className="text-purple-400">%</span>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base">Client Satisfaction</p>
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={400}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600/30 to-cyan-600/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex flex-col items-center space-y-4 p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-10 w-10 text-cyan-400" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                    25<span className="text-cyan-400">+</span>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base">Team Members</p>
                  <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-br from-slate-900 via-purple-950/10 to-slate-900">
        <div className="container px-4 md:px-6">
          <ScrollAnimation type="fade-up">
            <div className="flex flex-col items-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm text-cyan-300 mb-2">
                <Globe className="h-4 w-4 mr-2" /> Get In Touch
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Ready to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Transform
                </span>{" "}
                Your Brand?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Let's discuss your project and create something extraordinary together.
              </p>
            </div>
          </ScrollAnimation>

          <div className="flex justify-center">
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 shadow-lg shadow-purple-700/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-700/30"
            >
              <Link href="/contact">
                Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
