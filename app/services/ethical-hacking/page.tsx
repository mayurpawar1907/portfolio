import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Shield,
  CheckCircle,
  AlertTriangle,
  Lock,
  FileText,
  Users,
  Eye,
  Smartphone,
  Mail,
  MessageSquare,
  Ban,
  Instagram,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { GravitationalText } from "@/components/gravitational-text"
import { ScrollAnimation } from "@/components/scroll-animation"
import AnimatedCard, { AnimatedCardHeader, AnimatedCardContent, AnimatedCardFooter } from "@/components/animated_card"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Ethical Hacking Services | TechSpire Solutions",
  description:
    "Professional ethical hacking and cybersecurity services to protect your digital assets from cyber threats.",
  keywords:
    "ethical hacking, penetration testing, security assessment, vulnerability scanning, cybersecurity, account recovery, social media recovery, email recovery, WhatsApp recovery",
}

interface PricingTierProps {
  title: string
  price: string
  priceUSD: string
  description: string
  features: string[]
  popular?: boolean
  buttonText?: string
  buttonLink?: string
  icon?: React.ReactNode
}

function PricingTier({
  title,
  price,
  priceUSD,
  description,
  features,
  popular = false,
  buttonText = "Get Started",
  buttonLink = "/payment",
  icon,
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
          <div className="flex items-center mb-4">
            <div className="p-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg mr-4">
              {icon || <Shield className="h-6 w-6 text-purple-400" />}
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
          <div className="mt-4 flex items-baseline">
            <span className="text-3xl font-extrabold text-white">{price}</span>
            <span className="ml-2 text-sm font-medium text-gray-400">({priceUSD})</span>
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

interface TestimonialProps {
  name: string
  role: string
  company: string
  testimonial: string
  image: string
  country: string
}

function Testimonial({ name, role, company, testimonial, image, country }: TestimonialProps) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
      <AnimatedCard className="relative">
        <AnimatedCardContent className="pt-6">
          <div className="flex items-center mb-4">
            <div className="mr-4 w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500/30 group-hover:border-purple-500/70 transition-colors duration-300">
              <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-semibold text-white">{name}</p>
              <p className="text-sm text-gray-400">
                {role}, {company}
              </p>
              <p className="text-xs text-purple-400">{country}</p>
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
          <p className="italic text-gray-300">"{testimonial}"</p>
        </AnimatedCardContent>
      </AnimatedCard>
    </div>
  )
}

export default function EthicalHackingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <section className="w-full py-16 md:py-28 lg:py-32 bg-gradient-to-r from-slate-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Cybersecurity background"
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
                  <Shield className="h-4 w-4 mr-2" /> Professional Security Services
                </div>
                <GravitationalText
                  text="Ethical Hacking Services"
                  textClassName="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
                  intensity={0.1}
                  glowEffect={true}
                />
                <p className="text-xl text-gray-300 leading-relaxed">
                  Comprehensive security solutions to protect your digital assets and recover compromised accounts with
                  guaranteed results
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
                    <Lock className="h-5 w-5 text-purple-400" />
                    <span className="text-gray-300">Certified Experts</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
                    <Shield className="h-5 w-5 text-cyan-400" />
                    <span className="text-gray-300">100% Confidential</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
                    <Eye className="h-5 w-5 text-purple-400" />
                    <span className="text-gray-300">Legal & Ethical</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                  >
                    <a href="#services">
                      View Services{" "}
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
                      href="https://wa.me/919219967205?text=I'm%20interested%20in%20your%20Ethical%20Hacking%20Services"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contact Expert
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-left" delay={200}>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative rounded-lg overflow-hidden border border-slate-700 shadow-xl shadow-purple-500/10">
                  <img
                    src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Ethical hacking visualization"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-slate-800/80 backdrop-blur-sm rounded-full">
                        <Shield className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-300">Protecting</div>
                        <div className="text-white font-bold">Your Digital Assets</div>
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

      {/* Legal Disclaimer */}
      <section className="w-full py-8 bg-gradient-to-r from-red-900/20 to-orange-900/20 border-t border-b border-red-800/30 relative">
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-slate-800/70 backdrop-blur-sm rounded-lg border border-red-500/30">
            <div className="p-3 bg-red-500/10 rounded-full">
              <AlertTriangle className="h-6 w-6 text-red-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Legal Disclaimer</h3>
              <p className="text-gray-300 text-sm">
                All our ethical hacking services are provided strictly for legal purposes only. We require proof of
                ownership or proper authorization before undertaking any recovery or security testing. Our services
                comply with all applicable laws and regulations. We do not support or engage in any illegal activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section
        id="services"
        className="w-full py-16 md:py-24 bg-slate-900 border-b border-slate-800 relative scroll-mt-20"
      >
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
        <div className="container px-4 md:px-6 relative">
          <ScrollAnimation type="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm text-cyan-300 mb-2">
                <Lock className="h-4 w-4 mr-2" /> Our Security Solutions
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Specialized{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Recovery & Security
                </span>{" "}
                Services
              </h2>
              <p className="mt-4 text-gray-300 md:text-lg max-w-3xl mx-auto">
                Our ethical hacking experts provide professional account recovery and security solutions with guaranteed
                results
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ScrollAnimation type="fade-up" delay={100}>
              <ServiceFeature
                icon={<Instagram className="h-8 w-8 text-purple-400" />}
                title="Social Media Recovery"
                description="Professional recovery services for compromised or hacked Instagram, Facebook, Twitter, and other social media accounts."
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <ServiceFeature
                icon={<Mail className="h-8 w-8 text-cyan-400" />}
                title="Gmail & Email Recovery"
                description="Specialized recovery solutions for hacked Gmail, Yahoo, Outlook and other email accounts with advanced security implementation."
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <ServiceFeature
                icon={<MessageSquare className="h-8 w-8 text-purple-400" />}
                title="WhatsApp Recovery & Security"
                description="Professional WhatsApp account recovery and enhanced security implementation to prevent future unauthorized access."
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={400}>
              <ServiceFeature
                icon={<Smartphone className="h-8 w-8 text-cyan-400" />}
                title="iOS & Device Security Testing"
                description="Comprehensive security assessment for iOS devices, Android phones, and other smart devices to identify vulnerabilities."
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={500}>
              <ServiceFeature
                icon={<Ban className="h-8 w-8 text-purple-400" />}
                title="Account Banning & Unbanning"
                description="Professional assistance with account banning and unbanning issues across various platforms and services."
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={600}>
              <ServiceFeature
                icon={<Shield className="h-8 w-8 text-cyan-400" />}
                title="Custom Security Solutions"
                description="Tailored security solutions for businesses and individuals with specific requirements and concerns."
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Process Section with Image */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Cybersecurity process"
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
                    Recovery & Security
                  </span>{" "}
                  Process
                </h2>
                <p className="text-gray-300 md:text-lg mb-8 leading-relaxed">
                  We follow a structured methodology to ensure successful account recovery and enhanced security
                  implementation.
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
                          Initial Consultation
                        </h3>
                        <p className="text-gray-300">
                          We discuss your specific situation, verify ownership, and determine the best approach for
                          recovery or security enhancement.
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
                          Technical Assessment
                        </h3>
                        <p className="text-gray-300">
                          Our experts analyze the situation, identify vulnerabilities, and develop a customized recovery
                          or security plan.
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
                          Implementation
                        </h3>
                        <p className="text-gray-300">
                          We execute the recovery process or security enhancements using advanced ethical hacking
                          techniques and tools.
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
                          Security Hardening
                        </h3>
                        <p className="text-gray-300">
                          After successful recovery, we implement enhanced security measures to prevent future
                          unauthorized access.
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
                    src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Ethical hacking process"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-slate-800/80 backdrop-blur-sm rounded-full">
                        <Shield className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-300">Trusted by</div>
                        <div className="text-white font-bold">500+ Clients Worldwide</div>
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
      <section
        id="pricing"
        className="w-full py-16 md:py-24 bg-slate-900 border-t border-slate-800 relative scroll-mt-20"
      >
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
                Choose the security service that best fits your needs with our clear, upfront pricing
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ScrollAnimation type="fade-up" delay={100}>
              <PricingTier
                title="Social Media Recovery"
                price="₹4,999"
                priceUSD="$60"
                description="Professional recovery for hacked social media accounts."
                features={[
                  "Instagram account recovery",
                  "Facebook account recovery",
                  "Twitter account recovery",
                  "TikTok account recovery",
                  "Security enhancement after recovery",
                  "30-day support",
                ]}
                icon={<Instagram className="h-6 w-6 text-purple-400" />}
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <PricingTier
                title="Gmail & Email Recovery"
                price="₹7,999"
                priceUSD="$95"
                description="Specialized recovery for compromised email accounts."
                features={[
                  "Gmail account recovery",
                  "Yahoo account recovery",
                  "Outlook account recovery",
                  "Corporate email recovery",
                  "Two-factor authentication setup",
                  "60-day support",
                ]}
                icon={<Mail className="h-6 w-6 text-cyan-400" />}
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <PricingTier
                title="WhatsApp Recovery"
                price="₹9,999"
                priceUSD="$120"
                description="Professional WhatsApp account recovery and security."
                features={[
                  "WhatsApp account recovery",
                  "Chat history preservation",
                  "Enhanced security implementation",
                  "Multi-device security setup",
                  "Verification bypass assistance",
                  "90-day support",
                ]}
                popular={true}
                icon={<MessageSquare className="h-6 w-6 text-purple-400" />}
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={400}>
              <PricingTier
                title="iOS & Device Security"
                price="₹14,999"
                priceUSD="$180"
                description="Comprehensive security testing for mobile devices."
                features={[
                  "iOS device security testing",
                  "Android device security testing",
                  "Vulnerability assessment",
                  "Security hardening implementation",
                  "Privacy protection setup",
                  "90-day support",
                ]}
                icon={<Smartphone className="h-6 w-6 text-cyan-400" />}
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={500}>
              <PricingTier
                title="Account Ban Assistance"
                price="₹5,999"
                priceUSD="$72"
                description="Professional assistance with account banning issues."
                features={[
                  "Account unbanning assistance",
                  "Appeal process guidance",
                  "Policy violation assessment",
                  "Account recovery after ban",
                  "Future prevention strategies",
                  "60-day support",
                ]}
                icon={<Ban className="h-6 w-6 text-purple-400" />}
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={600}>
              <PricingTier
                title="Custom Security Solution"
                price="Custom"
                priceUSD="Contact Us"
                description="Tailored security solutions for specific requirements."
                features={[
                  "Customized security assessment",
                  "Specialized recovery services",
                  "Business account security",
                  "Multi-platform protection",
                  "Ongoing security monitoring",
                  "Priority support",
                ]}
                buttonText="Get Quote"
                icon={<Shield className="h-6 w-6 text-cyan-400" />}
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
                Hear from clients who have successfully recovered their accounts and enhanced their security
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ScrollAnimation type="fade-up" delay={100}>
              <Testimonial
                name="Rajesh Sharma"
                role="Business Owner"
                company="Digital Solutions India"
                testimonial="After my business Instagram account was hacked, I was desperate to recover it. TechSpire's team recovered my account within 24 hours and implemented enhanced security measures. Their service was professional and efficient."
                image="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                country="India"
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <Testimonial
                name="Priya Patel"
                role="Digital Marketer"
                company="CreativeEdge Marketing"
                testimonial="I lost access to my Gmail account which contained years of important business communications. TechSpire not only recovered my account but also helped set up advanced security protocols. Their expertise is unmatched!"
                image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                country="India"
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <Testimonial
                name="Michael Chen"
                role="Tech Entrepreneur"
                company="InnovateTech Solutions"
                testimonial="When my WhatsApp business account was compromised, I thought I'd lost all my client communications. TechSpire's team recovered everything within 48 hours. Their service is worth every penny for the peace of mind it provides."
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                country="United States"
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={400}>
              <Testimonial
                name="Aisha Khan"
                role="Content Creator"
                company="DigitalInfluence"
                testimonial="After my TikTok account with over 500K followers was hacked, I was devastated. TechSpire recovered my account and implemented security measures that have prevented any further issues. Highly recommended!"
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                country="India"
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={500}>
              <Testimonial
                name="David Williams"
                role="Security Consultant"
                company="SecureNet Global"
                testimonial="As a security professional, I was impressed by TechSpire's methodical approach to device security testing. They identified vulnerabilities in our systems that our internal team had missed. Their expertise is truly world-class."
                image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                country="United Kingdom"
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={600}>
              <Testimonial
                name="Vikram Singh"
                role="E-commerce Owner"
                company="ShopIndia Online"
                testimonial="My business Facebook page was banned without explanation, threatening my entire business. TechSpire helped navigate the appeal process and got my page restored within a week. Their knowledge of platform policies is exceptional."
                image="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                country="India"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 md:py-24 bg-slate-900 border-t border-slate-800 relative">
        <div className="container px-4 md:px-6 relative">
          <ScrollAnimation type="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm text-cyan-300 mb-2">
                <FileText className="h-4 w-4 mr-2" /> Common Questions
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Frequently Asked{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Questions
                </span>
              </h2>
              <p className="mt-4 text-gray-300 md:text-lg max-w-3xl mx-auto">
                Find answers to common questions about our ethical hacking and recovery services
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <AnimatedCard>
                <AnimatedCardContent className="p-6">
                  <h3 className="text-xl font-bold text-white">Are your services legal?</h3>
                  <p className="text-gray-300">
                    Yes, all our services are 100% legal and ethical. We only provide recovery and security services for
                    accounts and devices that you legitimately own or have proper authorization to access. We require
                    proof of ownership before undertaking any work.
                  </p>
                </AnimatedCardContent>
              </AnimatedCard>

              <AnimatedCard>
                <AnimatedCardContent className="p-6">
                  <h3 className="text-xl font-bold text-white">How long does account recovery typically take?</h3>
                  <p className="text-gray-300">
                    Recovery time varies depending on the type of account and the specific situation. Simple recoveries
                    may take 24-48 hours, while more complex cases might take 3-7 days. We provide estimated timeframes
                    during our initial consultation.
                  </p>
                </AnimatedCardContent>
              </AnimatedCard>

              <AnimatedCard>
                <AnimatedCardContent className="p-6">
                  <h3 className="text-xl font-bold text-white">Do you guarantee results?</h3>
                  <p className="text-gray-300">
                    We have a high success rate for account recovery and security services. While we cannot guarantee
                    100% success in every case due to platform policies and technical limitations, we offer a partial
                    refund if we are unable to recover your account.
                  </p>
                </AnimatedCardContent>
              </AnimatedCard>
            </div>

            <div className="space-y-4">
              <AnimatedCard>
                <AnimatedCardContent className="p-6">
                  <h3 className="text-xl font-bold text-white">How do I get started?</h3>
                  <p className="text-gray-300">
                    Simply contact us via WhatsApp at +91 9219967205 or fill out our contact form. We'll schedule an
                    initial consultation to discuss your specific situation, verify ownership, and determine the best
                    approach for recovery or security enhancement.
                  </p>
                </AnimatedCardContent>
              </AnimatedCard>

              <AnimatedCard>
                <AnimatedCardContent className="p-6">
                  <h3 className="text-xl font-bold text-white">What information do you need from me?</h3>
                  <p className="text-gray-300">
                    We require proof of account ownership such as previous login information, account creation details,
                    associated email addresses, and any other relevant information that can help establish your
                    legitimate ownership of the account.
                  </p>
                </AnimatedCardContent>
              </AnimatedCard>

              <AnimatedCard>
                <AnimatedCardContent className="p-6">
                  <h3 className="text-xl font-bold text-white">Is my information kept confidential?</h3>
                  <p className="text-gray-300">
                    Absolutely. We maintain strict confidentiality for all client information and details. We use secure
                    communication channels and never share your information with third parties. Your privacy and
                    security are our top priorities.
                  </p>
                </AnimatedCardContent>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Cybersecurity"
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
              <Shield className="h-4 w-4 mr-2" /> Protect Your Digital Identity
            </div>
            <ScrollAnimation type="fade-up">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    Secure
                  </span>{" "}
                  Your Digital Life?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl text-gray-200 leading-relaxed">
                  Contact our ethical hacking experts today for a free consultation and take the first step toward
                  recovering your accounts and enhancing your digital security.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                >
                  <a
                    href="https://wa.me/919219967205?text=I'm%20interested%20in%20your%20Ethical%20Hacking%20Services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Contact Expert Now{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
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
