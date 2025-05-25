import type React from "react"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  Terminal,
  Shield,
  Code,
  Award,
  Star,
  Users,
  Zap,
  Database,
  Lock,
  Server,
  FileCode,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import ContactForm from "@/components/contact-form"
import TestimonialCard from "@/components/testimonial-card"
import {
  Card as AnimatedCard,
  CardContent as AnimatedCardContent,
  CardFooter as AnimatedCardFooter,
  CardHeader as AnimatedCardHeader,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

export const metadata = {
  title: "Ethical Hacking Software Development | TechSpire Solutions",
  description:
    "Custom ethical hacking tools and security software development services to enhance your cybersecurity posture and protect your digital assets.",
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

export default function HackingSoftwarePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-900 text-white relative overflow-hidden">
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
              <div className="space-y-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 backdrop-blur-sm">
                  <span className="animate-pulse mr-2">●</span> Ethical Hacking Solutions
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    Ethical Hacking
                  </span>{" "}
                  Software Development
                </h1>
                <p className="text-xl text-gray-300 max-w-[600px] leading-relaxed">
                  Custom security tools and software development to enhance your cybersecurity posture and protect your
                  digital assets.
                </p>

                <div className="flex flex-wrap gap-5 pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 w-full sm:w-auto shadow-lg shadow-purple-700/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-700/30 text-base button-hover-effect"
                  >
                    <Link href="#pricing" className="flex items-center">
                      View Pricing <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="bg-transparent text-white border-white/20 hover:bg-white/10 w-full sm:w-auto backdrop-blur-sm text-base"
                  >
                    <Link href="#contact">Get Free Consultation</Link>
                  </Button>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
                    <Shield className="h-5 w-5 text-purple-400" />
                    <span className="text-gray-300">Ethical & Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
                    <Award className="h-5 w-5 text-cyan-400" />
                    <span className="text-gray-300">Expert Security Team</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-left" delay={200}>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-30"></div>
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/10 backdrop-blur-sm bg-slate-900/50">
                  <img
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Cybersecurity code"
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-900/30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-48 h-48 border-2 border-dashed border-purple-500/30 rounded-full animate-spin-slow"></div>
                        <div className="w-36 h-36 border-2 border-dashed border-cyan-500/30 rounded-full animate-spin-slow-reverse"></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-2 rounded-lg shadow-lg shadow-purple-500/30">
                          <Terminal className="h-12 w-12 text-white" />
                        </div>
                      </div>
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-purple-500/20 backdrop-blur-sm p-2 rounded-lg border border-purple-500/30">
                          <Lock className="h-6 w-6 text-purple-400" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                        <div className="bg-cyan-500/20 backdrop-blur-sm p-2 rounded-lg border border-cyan-500/30">
                          <Shield className="h-6 w-6 text-cyan-400" />
                        </div>
                      </div>
                      <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-purple-500/20 backdrop-blur-sm p-2 rounded-lg border border-purple-500/30">
                          <Code className="h-6 w-6 text-purple-400" />
                        </div>
                      </div>
                      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                        <div className="bg-cyan-500/20 backdrop-blur-sm p-2 rounded-lg border border-cyan-500/30">
                          <Server className="h-6 w-6 text-cyan-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 to-transparent h-32 flex items-end justify-center pb-6">
                    <div className="text-sm text-gray-400 px-4 py-2 rounded-full border border-gray-800 backdrop-blur-md bg-slate-900/50">
                      Secure, Ethical, Professional
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

      {/* Services Overview */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-b from-slate-950 to-slate-900 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
        <div className="container px-4 md:px-6 relative">
          <ScrollAnimation type="fade-up">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm text-cyan-300 mb-2">
                <span className="mr-1">✦</span> Our Software Solutions
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Comprehensive{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Security Software
                </span>{" "}
                Development
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Custom-built ethical hacking tools and security software to strengthen your cybersecurity infrastructure
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <ScrollAnimation type="fade-up" delay={100}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-purple-600/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex flex-col h-full p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/10">
                  <div className="p-3 mb-4 bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    Vulnerability Scanners
                  </h3>
                  <p className="text-gray-400 mb-4 flex-grow">
                    Custom vulnerability assessment tools designed to identify security weaknesses in your systems.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Network vulnerability scanning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Web application assessment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Customized reporting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600/30 to-cyan-600/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex flex-col h-full p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                  <div className="p-3 mb-4 bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                    <Lock className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    Penetration Testing Tools
                  </h3>
                  <p className="text-gray-400 mb-4 flex-grow">
                    Specialized tools for ethical penetration testing to simulate real-world attacks on your systems.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Network penetration testing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Social engineering simulation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Exploitation frameworks</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-purple-600/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex flex-col h-full p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/10">
                  <div className="p-3 mb-4 bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                    <Database className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    Security Information Management
                  </h3>
                  <p className="text-gray-400 mb-4 flex-grow">
                    Custom SIEM solutions to monitor, detect, and respond to security threats in real-time.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Log collection and analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Threat detection algorithms</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Incident response automation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={400}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600/30 to-cyan-600/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex flex-col h-full p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                  <div className="p-3 mb-4 bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                    <FileCode className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    Code Security Analysis
                  </h3>
                  <p className="text-gray-400 mb-4 flex-grow">
                    Tools for analyzing source code to identify security vulnerabilities and coding issues.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Static code analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Dynamic application testing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Secure coding recommendations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={500}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-purple-600/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex flex-col h-full p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/10">
                  <div className="p-3 mb-4 bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                    <Server className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    Network Security Monitoring
                  </h3>
                  <p className="text-gray-400 mb-4 flex-grow">
                    Advanced tools for monitoring network traffic and detecting suspicious activities in real-time.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Traffic analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Intrusion detection</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Anomaly detection</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={600}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600/30 to-cyan-600/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex flex-col h-full p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                  <div className="p-3 mb-4 bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                    <Terminal className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    Custom Security Solutions
                  </h3>
                  <p className="text-gray-400 mb-4 flex-grow">
                    Bespoke security software tailored to your specific industry requirements and security challenges.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Industry-specific solutions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Integration with existing systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Ongoing support and updates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-r from-slate-900 via-purple-900/20 to-slate-900 text-white border-y border-purple-500/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <ScrollAnimation type="fade-up">
            <div className="flex flex-col items-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 mb-2">
                <Zap className="h-4 w-4 mr-2" /> Our Development Process
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                How We Build Secure Software
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Our comprehensive development methodology ensures secure, efficient, and effective security solutions
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <ScrollAnimation type="fade-up" delay={100}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-purple-600/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex flex-col items-center space-y-4 p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/10 h-full">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-purple-500/20 rounded-full blur-md"></div>
                    <div className="relative w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-600 rounded-full text-white text-2xl font-bold">
                      1
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300 text-center">
                    Requirements Analysis
                  </h3>
                  <p className="text-gray-300 text-center">
                    We thoroughly analyze your security needs, infrastructure, and specific challenges to define clear
                    objectives.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600/30 to-cyan-600/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex flex-col items-center space-y-4 p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/10 h-full">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-md"></div>
                    <div className="relative w-16 h-16 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full text-white text-2xl font-bold">
                      2
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300 text-center">
                    Design & Architecture
                  </h3>
                  <p className="text-gray-300 text-center">
                    We create a secure architecture and detailed design that addresses your specific security
                    requirements.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-purple-600/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex flex-col items-center space-y-4 p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/10 h-full">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-purple-500/20 rounded-full blur-md"></div>
                    <div className="relative w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-600 rounded-full text-white text-2xl font-bold">
                      3
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300 text-center">
                    Development & Testing
                  </h3>
                  <p className="text-gray-300 text-center">
                    Our expert developers build your solution using secure coding practices and rigorous testing
                    methodologies.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={400}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600/30 to-cyan-600/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex flex-col items-center space-y-4 p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/10 h-full">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-md"></div>
                    <div className="relative w-16 h-16 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full text-white text-2xl font-bold">
                      4
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300 text-center">
                    Deployment & Support
                  </h3>
                  <p className="text-gray-300 text-center">
                    We deploy your solution, provide comprehensive training, and offer ongoing support and updates.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-20 md:py-28 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.1),transparent_40%)]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <ScrollAnimation type="fade-up">
            <div className="flex flex-col items-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm text-cyan-300 mb-2">
                <Star className="h-4 w-4 mr-2" /> Pricing Plans
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Transparent{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Pricing
                </span>{" "}
                Options
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Choose the plan that best fits your security needs and budget
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <ScrollAnimation type="fade-up" delay={100}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-purple-600/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex flex-col p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/10 h-full">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                      Basic Package
                    </h3>
                    <div className="text-3xl font-bold text-white mb-2">₹39,999</div>
                    <p className="text-gray-400">Entry-level security tools for small businesses</p>
                  </div>
                  <ul className="space-y-3 mb-6 flex-grow">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Basic vulnerability scanner</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Simple network monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Standard reporting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">3 months of support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Basic documentation</span>
                    </li>
                  </ul>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-md shadow-purple-500/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/30 button-hover-effect"
                  >
                    <Link
                      href="/contact?service=Hacking%20Software%20-%20Basic"
                      className="flex items-center justify-center"
                    >
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex flex-col p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/20 h-full">
                  <div className="absolute -top-5 left-0 right-0 flex justify-center">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                  <div className="mb-4 pt-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                      Professional Package
                    </h3>
                    <div className="text-3xl font-bold text-white mb-2">₹79,999</div>
                    <p className="text-gray-400">Comprehensive security solutions for medium businesses</p>
                  </div>
                  <ul className="space-y-3 mb-6 flex-grow">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Advanced vulnerability scanner</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Penetration testing tools</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Network security monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Detailed reporting dashboard</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">6 months of support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Comprehensive documentation</span>
                    </li>
                  </ul>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-md shadow-purple-500/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/30 button-hover-effect"
                  >
                    <Link
                      href="/contact?service=Hacking%20Software%20-%20Professional"
                      className="flex items-center justify-center"
                    >
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600/30 to-cyan-600/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex flex-col p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/10 h-full">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                      Enterprise Package
                    </h3>
                    <div className="text-3xl font-bold text-white mb-2">₹149,999</div>
                    <p className="text-gray-400">Advanced security suite for large enterprises</p>
                  </div>
                  <ul className="space-y-3 mb-6 flex-grow">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Enterprise-grade security suite</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Custom SIEM solution</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Advanced penetration testing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Code security analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Real-time threat monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">12 months of premium support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Dedicated security consultant</span>
                    </li>
                  </ul>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-md shadow-purple-500/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/30 button-hover-effect"
                  >
                    <Link
                      href="/contact?service=Hacking%20Software%20-%20Enterprise"
                      className="flex items-center justify-center"
                    >
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">
              Need a custom security solution? Contact us for a personalized quote tailored to your specific security
              requirements.
            </p>
            <Button
              asChild
              variant="outline"
              className="bg-transparent text-white border-white/20 hover:bg-white/10 backdrop-blur-sm"
            >
              <Link href="/contact?service=Hacking%20Software%20-%20Custom">Get Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-b from-slate-900 to-slate-950 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(6,182,212,0.1),transparent_40%)]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <ScrollAnimation type="fade-up">
            <div className="flex flex-col items-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 mb-2">
                <Users className="h-4 w-4 mr-2" /> Client Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                What Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Clients Say
                </span>
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Hear from our satisfied clients about their experience with our security software solutions
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <ScrollAnimation type="fade-up" delay={100}>
              <TestimonialCard
                quote="The custom vulnerability scanner they developed has significantly improved our security posture. We've identified and fixed issues we didn't even know existed."
                author="Rajiv Mehta"
                company="SecureBank Financial"
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <TestimonialCard
                quote="Their SIEM solution has transformed how we monitor our network. The real-time alerts and intuitive dashboard have made our security team much more effective."
                author="Neha Singh"
                company="TechCorp India"
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <TestimonialCard
                quote="The code security analysis tool they built has become an essential part of our development process. It's caught critical vulnerabilities before they made it to production."
                author="Vikram Patel"
                company="InnovateApps"
                image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="w-full py-20 md:py-28 bg-gradient-to-br from-slate-900 via-purple-950/10 to-slate-900 relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.15),transparent_50%)]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <ScrollAnimation type="fade-right">
              <div className="space-y-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm text-cyan-300 mb-2">
                  <Terminal className="h-4 w-4 mr-2" /> Get Started Today
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    Secure
                  </span>{" "}
                  Your Digital Assets?
                </h2>
                <p className="text-gray-300 md:text-xl leading-relaxed">
                  Contact us today for a free consultation and take the first step toward comprehensive cybersecurity
                  protection.
                </p>
                <div className="space-y-6 mt-6">
                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-purple-600/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative flex items-center p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 group-hover:border-purple-500/30 transition-all duration-300">
                      <div className="flex-shrink-0 mr-4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform duration-300">
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
                          className="text-white"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                          Phone
                        </h3>
                        <p className="text-gray-300">+91 88535 94063</p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600/30 to-cyan-600/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative flex items-center p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 group-hover:border-cyan-500/30 transition-all duration-300">
                      <div className="flex-shrink-0 mr-4 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
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
                          className="text-white"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                          Email
                        </h3>
                        <p className="text-gray-300">info@techspire.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-purple-600/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative flex items-center p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 group-hover:border-purple-500/30 transition-all duration-300">
                      <div className="flex-shrink-0 mr-4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform duration-300">
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
                          className="text-white"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                          Location
                        </h3>
                        <p className="text-gray-300">123 Tech Street, New Delhi, India 110001</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-left" delay={200}>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur opacity-30"></div>
                <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-xl shadow-purple-500/10 bg-slate-800/50 backdrop-blur-sm p-1">
                  <ContactForm />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-xl"></div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  )
}
