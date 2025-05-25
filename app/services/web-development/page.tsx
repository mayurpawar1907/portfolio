import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Code, CheckCircle, Zap, Layout, Server, Globe, Users, Smartphone, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GravitationalText } from "@/components/gravitational-text"
import { ScrollAnimation } from "@/components/scroll-animation"
import AnimatedCard, { AnimatedCardHeader, AnimatedCardContent, AnimatedCardFooter } from "@/components/animated_card"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Web Development Services | TechSpire Solutions",
  description:
    "Professional web development services to create modern, responsive, and high-performing websites for your business.",
  keywords: "web development, responsive design, frontend development, backend development, website creation, web apps",
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

export default function WebDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <section className="w-full py-16 md:py-28 lg:py-32 bg-gradient-to-r from-slate-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Web development"
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
                  <Code className="h-4 w-4 mr-2" /> Expert Web Development
                </div>
                <GravitationalText
                  text="Web Development Services"
                  textClassName="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
                  intensity={0.1}
                  glowEffect={true}
                />
                <p className="text-xl text-gray-300 leading-relaxed">
                  Modern, responsive websites built with the latest technologies to enhance your online presence
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
                    <Layout className="h-5 w-5 text-purple-400" />
                    <span className="text-gray-300">Responsive Design</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
                    <Zap className="h-5 w-5 text-cyan-400" />
                    <span className="text-gray-300">High Performance</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
                    <Server className="h-5 w-5 text-purple-400" />
                    <span className="text-gray-300">Scalable Solutions</span>
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
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Web development process"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-slate-800/80 backdrop-blur-sm rounded-full">
                        <Code className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-300">Building</div>
                        <div className="text-white font-bold">Your Digital Presence</div>
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
                <Globe className="h-4 w-4 mr-2" /> Our Web Solutions
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Comprehensive{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Web Development
                </span>{" "}
                Services
              </h2>
              <p className="mt-4 text-gray-300 md:text-lg max-w-3xl mx-auto">
                We build modern, responsive, and high-performing websites that help businesses establish a strong online
                presence.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ScrollAnimation type="fade-up" delay={100}>
              <ServiceFeature
                icon={<Layout className="h-8 w-8 text-purple-400" />}
                title="Responsive Web Design"
                description="Custom websites that look and function perfectly on all devices, from desktops to smartphones."
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <ServiceFeature
                icon={<Code className="h-8 w-8 text-cyan-400" />}
                title="Frontend Development"
                description="Modern, interactive user interfaces built with the latest technologies like React, Next.js, and more."
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <ServiceFeature
                icon={<Server className="h-8 w-8 text-purple-400" />}
                title="Backend Development"
                description="Robust server-side solutions that power your web applications with Node.js, Python, and other technologies."
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={400}>
              <ServiceFeature
                icon={<Database className="h-8 w-8 text-cyan-400" />}
                title="Database Integration"
                description="Seamless integration with SQL and NoSQL databases to store and manage your application data efficiently."
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={500}>
              <ServiceFeature
                icon={<Smartphone className="h-8 w-8 text-purple-400" />}
                title="Progressive Web Apps"
                description="Web applications that offer native app-like experiences with offline capabilities and fast loading times."
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={600}>
              <ServiceFeature
                icon={<Zap className="h-8 w-8 text-cyan-400" />}
                title="Performance Optimization"
                description="Speed optimization techniques to ensure your website loads quickly and provides an excellent user experience."
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Process Section with Image */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Web development process"
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
                    Development
                  </span>{" "}
                  Process
                </h2>
                <p className="text-gray-300 md:text-lg mb-8 leading-relaxed">
                  We follow a structured methodology to ensure your web project is delivered on time, within budget, and
                  exceeds expectations.
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
                          We understand your business goals, target audience, and project requirements to create a
                          detailed roadmap.
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
                          Design & Prototyping
                        </h3>
                        <p className="text-gray-300">
                          We create wireframes and interactive prototypes to visualize the user interface and
                          experience.
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
                          Our developers build your website with clean, efficient code and thoroughly test it across
                          devices.
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
                          Launch & Support
                        </h3>
                        <p className="text-gray-300">
                          We deploy your website and provide ongoing maintenance and support to ensure optimal
                          performance.
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
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Web development team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-slate-800/80 backdrop-blur-sm rounded-full">
                        <Users className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-300">Trusted by</div>
                        <div className="text-white font-bold">300+ Businesses in India</div>
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
                Choose the web development package that best fits your business needs and budget
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-3">
            <ScrollAnimation type="fade-up" delay={100}>
              <PricingTier
                title="Basic Website"
                price="₹49,999"
                description="Perfect for small businesses and startups looking to establish an online presence."
                features={[
                  "Responsive design",
                  "Up to 5 pages",
                  "Contact form",
                  "Basic SEO setup",
                  "Social media integration",
                  "3 months of support",
                ]}
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <PricingTier
                title="Business Website"
                price="₹99,999"
                description="Comprehensive solution for growing businesses with more advanced needs."
                features={[
                  "Everything in Basic package",
                  "Up to 10 pages",
                  "Content Management System",
                  "Blog integration",
                  "Advanced SEO setup",
                  "Performance optimization",
                  "E-commerce functionality (basic)",
                  "6 months of support",
                ]}
                popular={true}
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <PricingTier
                title="Enterprise Solution"
                price="Custom"
                description="Tailored web solutions for large organizations with complex requirements."
                features={[
                  "Everything in Business package",
                  "Unlimited pages",
                  "Custom functionality",
                  "Advanced E-commerce features",
                  "Third-party integrations",
                  "Database development",
                  "User authentication",
                  "Advanced analytics",
                  "12 months of support",
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
                Hear from businesses that have transformed their online presence with our web development services.
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
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                          alt="Client"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Vikram Malhotra</p>
                        <p className="text-sm text-gray-400">CEO, InnoTech Solutions</p>
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
                      "TechSpire delivered a website that exceeded our expectations. Their team was professional,
                      responsive, and truly understood our business needs. The new site has significantly increased our
                      leads and improved our brand image."
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
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                          alt="Client"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Priya Desai</p>
                        <p className="text-sm text-gray-400">Marketing Director, StyleHub</p>
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
                      "Our e-commerce website built by TechSpire has transformed our business. The user experience is
                      seamless, and the backend management system is intuitive. Our online sales have increased by 200%
                      since launch!"
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
                          src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                          alt="Client"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Arjun Singh</p>
                        <p className="text-sm text-gray-400">Founder, EduTech India</p>
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
                      "TechSpire's team built a complex learning management system for our educational platform. Their
                      technical expertise and attention to detail were impressive. The platform is fast, secure, and our
                      students love it!"
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
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Team working"
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
              <Code className="h-4 w-4 mr-2" /> Start Your Web Project Today
            </div>
            <ScrollAnimation type="fade-up">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    Transform
                  </span>{" "}
                  Your Online Presence?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl text-gray-200 leading-relaxed">
                  Contact us today for a free consultation and take the first step toward a website that drives results
                  for your business.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                >
                  <Link href="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
