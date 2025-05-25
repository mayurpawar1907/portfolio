import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Smartphone,
  CheckCircle,
  Code,
  Zap,
  Globe,
  Layers,
  Users,
  Cpu,
  GitBranch,
  Server,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { GravitationalText } from "@/components/gravitational-text"
import { ScrollAnimation } from "@/components/scroll-animation"
import AnimatedCard, { AnimatedCardHeader, AnimatedCardContent, AnimatedCardFooter } from "@/components/animated_card"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "App Development Services | TechSpire Solutions",
  description:
    "Professional mobile app development services for iOS and Android platforms. Create powerful, user-friendly applications for your business.",
  keywords: "app development, mobile app, iOS app, Android app, React Native, Flutter, mobile development, app design",
}

interface PricingTierProps {
  title: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  buttonText?: string
  buttonLink?: string
}

function PricingTier({
  title,
  price,
  description,
  features,
  popular = false,
  buttonText = "Get Started",
  buttonLink = "/payment",
}: PricingTierProps) {
  return (
    <div className="relative group">
      <div
        className={cn(
          "absolute -inset-0.5 rounded-xl blur opacity-30 transition-all duration-300 group-hover:opacity-100",
          popular ? "bg-gradient-to-r from-purple-600 to-cyan-600" : "bg-gradient-to-r from-slate-600 to-slate-500",
        )}
      ></div>
      <AnimatedCard
        className={cn("h-full relative", popular ? "border-purple-500/50 shadow-lg shadow-purple-500/20" : "")}
      >
        {popular && (
          <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-3 py-1 text-xs font-semibold rounded-bl-lg rounded-tr-md z-10">
            Most Popular
          </div>
        )}
        <AnimatedCardHeader>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <div className="mt-4 flex items-baseline">
            <span className="text-4xl font-extrabold text-white">{price}</span>
            {price !== "Custom" && <span className="ml-1 text-xl font-medium text-gray-400">/project</span>}
          </div>
          <p className="mt-2 text-gray-400">{description}</p>
        </AnimatedCardHeader>
        <AnimatedCardContent className="pt-0">
          <ul className="mt-6 space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex">
                <div className="flex-shrink-0 mr-2 p-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full">
                  <CheckCircle className="h-4 w-4 text-cyan-400" />
                </div>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </AnimatedCardContent>
        <AnimatedCardFooter>
          <Button
            asChild
            className={cn(
              "w-full",
              popular
                ? "bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-md shadow-purple-500/20"
                : "bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white",
            )}
          >
            <Link
              href={`${buttonLink}?service=${encodeURIComponent(title)}&amount=${price.replace(/[^\d]/g, "")}`}
              className="flex items-center justify-center"
            >
              {buttonText} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </AnimatedCardFooter>
      </AnimatedCard>
    </div>
  )
}

interface ServiceFeatureProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ServiceFeature({ icon, title, description }: ServiceFeatureProps) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
      <div className="relative flex flex-col md:flex-row gap-4 items-start p-6 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 group-hover:border-purple-500/30 transition-all duration-300">
        <div className="p-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
            {title}
          </h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function AppDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <section className="w-full py-16 md:py-28 lg:py-32 bg-gradient-to-r from-slate-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="App development background"
            className="w-full h-full object-cover"
            style={{ transform: "scale(1.1)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-slate-900/90"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDuration: "8s" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDuration: "10s" }}
          ></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <ScrollAnimation type="fade-right">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 backdrop-blur-sm">
                  <Smartphone className="h-4 w-4 mr-2" /> Mobile Solutions
                </div>
                <GravitationalText
                  text="App Development Services"
                  textClassName="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
                  intensity={0.1}
                  glowEffect={true}
                />
                <p className="text-xl text-gray-300 leading-relaxed">
                  Create powerful, user-friendly mobile applications that engage your audience and drive business growth
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
                    <Code className="h-5 w-5 text-purple-400" />
                    <span className="text-gray-300">iOS & Android</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
                    <Zap className="h-5 w-5 text-cyan-400" />
                    <span className="text-gray-300">Fast Development</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
                    <Globe className="h-5 w-5 text-purple-400" />
                    <span className="text-gray-300">Global Reach</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                  >
                    <Link href="#pricing">
                      View Pricing{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white transition-all duration-300"
                  >
                    <Link href="/contact">Request Consultation</Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-left" delay={200}>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative rounded-lg overflow-hidden border border-slate-700 shadow-xl shadow-purple-500/10">
                  <img
                    src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Mobile app development"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-slate-800/80 backdrop-blur-sm rounded-full">
                        <Smartphone className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-300">Transforming</div>
                        <div className="text-white font-bold">Ideas into Apps</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-xl"></div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="w-full py-16 md:py-24 bg-slate-900 border-t border-b border-slate-800 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
        <div className="container px-4 md:px-6 relative">
          <ScrollAnimation type="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm text-cyan-300 mb-2">
                <Layers className="h-4 w-4 mr-2" /> Our App Development Solutions
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Comprehensive{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Mobile App
                </span>{" "}
                Solutions
              </h2>
              <p className="mt-4 text-gray-300 md:text-lg max-w-3xl mx-auto">
                We develop custom mobile applications that help businesses connect with their customers and streamline
                operations.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ScrollAnimation type="fade-up" delay={100}>
              <ServiceFeature
                icon={<Smartphone className="h-8 w-8 text-purple-400" />}
                title="Native App Development"
                description="High-performance iOS and Android applications built with Swift, Kotlin, and Java for optimal user experience."
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <ServiceFeature
                icon={<Code className="h-8 w-8 text-cyan-400" />}
                title="Cross-Platform Development"
                description="Cost-effective solutions using React Native and Flutter to build apps that work seamlessly across multiple platforms."
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <ServiceFeature
                icon={<Layers className="h-8 w-8 text-purple-400" />}
                title="UI/UX Design"
                description="Intuitive and engaging user interfaces that provide exceptional user experiences and drive app engagement."
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={400}>
              <ServiceFeature
                icon={<Server className="h-8 w-8 text-cyan-400" />}
                title="Backend Development"
                description="Robust server-side solutions that power your mobile applications with reliable data storage and processing."
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={500}>
              <ServiceFeature
                icon={<GitBranch className="h-8 w-8 text-purple-400" />}
                title="App Maintenance & Updates"
                description="Ongoing support and regular updates to ensure your app remains secure, stable, and compatible with the latest OS versions."
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={600}>
              <ServiceFeature
                icon={<Cpu className="h-8 w-8 text-cyan-400" />}
                title="IoT & Wearable Apps"
                description="Specialized applications that connect with IoT devices and wearable technology for enhanced functionality."
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Process Section with Image */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="App development process"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-900/90"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

          {/* Animated particles */}
          {[...Array(15)].map((_, i) => (
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
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <ScrollAnimation type="fade-right">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 mb-2">
                  <CheckCircle className="h-4 w-4 mr-2" /> Our Methodology
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
                  Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    App Development
                  </span>{" "}
                  Process
                </h2>
                <p className="text-gray-300 md:text-lg mb-8 leading-relaxed">
                  We follow a structured approach to ensure your mobile application is developed efficiently and meets
                  your business objectives.
                </p>

                <div className="space-y-6">
                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative flex items-start p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 group-hover:border-purple-500/30 transition-all duration-300">
                      <div className="flex-shrink-0 mr-4 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                        1
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                          Discovery & Planning
                        </h3>
                        <p className="text-gray-300">
                          We analyze your requirements, target audience, and business goals to create a comprehensive
                          app development strategy.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative flex items-start p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 group-hover:border-purple-500/30 transition-all duration-300">
                      <div className="flex-shrink-0 mr-4 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                          UI/UX Design
                        </h3>
                        <p className="text-gray-300">
                          Our designers create intuitive, engaging interfaces that provide exceptional user experiences
                          and align with your brand.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative flex items-start p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 group-hover:border-purple-500/30 transition-all duration-300">
                      <div className="flex-shrink-0 mr-4 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                        3
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                          Development & Testing
                        </h3>
                        <p className="text-gray-300">
                          Our developers build your app using the latest technologies, with rigorous testing at each
                          stage to ensure quality.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative flex items-start p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 group-hover:border-purple-500/30 transition-all duration-300">
                      <div className="flex-shrink-0 mr-4 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                        4
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                          Deployment & Support
                        </h3>
                        <p className="text-gray-300">
                          We handle the app store submission process and provide ongoing maintenance and updates to
                          ensure your app's success.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-left">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-30"></div>
                <div className="relative rounded-lg overflow-hidden border border-slate-700 shadow-xl shadow-purple-500/10">
                  <img
                    src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="App development process"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-slate-800/80 backdrop-blur-sm rounded-full">
                        <Code className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-300">Trusted by</div>
                        <div className="text-white font-bold">200+ Businesses in India</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-xl"></div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-16 md:py-24 bg-slate-900 border-t border-slate-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.15),transparent_50%)]"></div>
        <div className="container px-4 md:px-6 relative">
          <ScrollAnimation type="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm text-cyan-300 mb-2">
                <span className="mr-1">₹</span> Our Packages
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Transparent{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Pricing
                </span>
              </h2>
              <p className="mt-4 text-gray-300 md:text-lg max-w-3xl mx-auto">
                Choose the app development package that best fits your business needs and budget
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-3">
            <ScrollAnimation type="fade-up" delay={100}>
              <PricingTier
                title="Basic App"
                price="₹79,999"
                description="Essential app development for startups and small businesses."
                features={[
                  "Single platform (iOS or Android)",
                  "Up to 5 core features",
                  "Basic UI/UX design",
                  "Backend integration",
                  "App store submission",
                  "30-day support",
                ]}
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <PricingTier
                title="Professional App"
                price="₹1,49,999"
                description="Comprehensive app solution for growing businesses."
                features={[
                  "Cross-platform (iOS & Android)",
                  "Up to 10 advanced features",
                  "Premium UI/UX design",
                  "Custom backend development",
                  "API integrations",
                  "Performance optimization",
                  "60-day support",
                ]}
                popular={true}
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <PricingTier
                title="Enterprise App"
                price="Custom"
                description="Tailored app solutions for large enterprises with complex requirements."
                features={[
                  "Cross-platform with web app",
                  "Unlimited custom features",
                  "Advanced UI/UX with animations",
                  "Scalable cloud infrastructure",
                  "Third-party integrations",
                  "Analytics and reporting",
                  "Security auditing",
                  "90-day support with SLA",
                ]}
                buttonText="Contact Us"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonials with Images */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-slate-900 via-purple-900/20 to-slate-900 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Tech background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-900/90"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <ScrollAnimation type="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 mb-2">
                <Users className="h-4 w-4 mr-2" /> Client Feedback
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                What Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Clients Say
                </span>
              </h2>
              <p className="mt-4 text-gray-300 md:text-lg max-w-3xl mx-auto">
                Hear from businesses that have transformed their digital presence with our app development services
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ScrollAnimation type="fade-up" delay={100}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <AnimatedCard className="relative">
                  <AnimatedCardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="mr-4 w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500/30 group-hover:border-purple-500/70 transition-colors duration-300">
                        <img
                          src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                          alt="Client"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Vikram Malhotra</p>
                        <p className="text-sm text-gray-400">CEO, FoodExpress</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="inline-block text-yellow-400 mr-1"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <p className="italic text-gray-300">
                      "TechSpire developed our food delivery app from concept to launch in just 3 months. The app has
                      been downloaded over 50,000 times and has significantly increased our customer base. Their team
                      was professional, responsive, and delivered exactly what we needed."
                    </p>
                  </AnimatedCardContent>
                </AnimatedCard>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <AnimatedCard className="relative">
                  <AnimatedCardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="mr-4 w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-500/30 group-hover:border-cyan-500/70 transition-colors duration-300">
                        <img
                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                          alt="Client"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Priya Sharma</p>
                        <p className="text-sm text-gray-400">Founder, YogaLife</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="inline-block text-yellow-400 mr-1"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <p className="italic text-gray-300">
                      "Our yoga and meditation app needed to be both beautiful and functional. TechSpire delivered on
                      both fronts, creating an app that our users love. The in-app subscription feature they implemented
                      has become our primary revenue stream."
                    </p>
                  </AnimatedCardContent>
                </AnimatedCard>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <AnimatedCard className="relative">
                  <AnimatedCardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <div className="mr-4 w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500/30 group-hover:border-purple-500/70 transition-colors duration-300">
                        <img
                          src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                          alt="Client"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Rajesh Kumar</p>
                        <p className="text-sm text-gray-400">CTO, FinTech Solutions</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="inline-block text-yellow-400 mr-1"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <p className="italic text-gray-300">
                      "Security was our top priority for our banking app. TechSpire not only delivered a secure
                      application but also helped us pass all regulatory compliance checks. Their expertise in fintech
                      app development is unmatched in the industry."
                    </p>
                  </AnimatedCardContent>
                </AnimatedCard>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Mobile app development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-cyan-900/80"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDuration: "8s" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDuration: "10s" }}
          ></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-6 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/20 bg-white/10 text-sm text-white backdrop-blur-sm">
              <Smartphone className="h-4 w-4 mr-2" /> Transform Your Business Today
            </div>
            <ScrollAnimation type="fade-up">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    Build
                  </span>{" "}
                  Your Mobile App?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl text-gray-200 leading-relaxed">
                  Contact us today for a free consultation and take the first step toward creating a powerful mobile
                  application for your business.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                >
                  <Link href="/contact">
                    Schedule Consultation{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white transition-all duration-300"
                >
                  <Link href="/services">Explore Other Services</Link>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  )
}
