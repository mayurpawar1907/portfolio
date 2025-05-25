import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  Video,
  Film,
  Scissors,
  Clock,
  Award,
  Star,
  Users,
  Play,
  Zap,
  Layers,
  PenTool,
  Sliders,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import ContactForm from "@/components/contact-form"
import TestimonialCard from "@/components/testimonial-card"

export const metadata = {
  title: "Professional Video Editing Services | TechSpire Solutions",
  description:
    "Transform your raw footage into compelling visual stories with our professional video editing services. From color grading to motion graphics, we deliver high-quality video content.",
}

function PricingTier({
  title,
  price,
  description,
  features,
  popular = false,
  buttonText = "Get Started",
  buttonLink = "/payment",
}: {
  title: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  buttonText?: string
  buttonLink?: string
}) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-purple-600/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative flex flex-col p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/10 h-full">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
            {title}
          </h3>
          <div className="text-3xl font-bold text-white mb-2">{price}</div>
          <p className="text-gray-400">{description}</p>
        </div>
        <ul className="space-y-3 mb-6 flex-grow">
          {features.map((item, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-3 p-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full mt-1">
                <CheckCircle className="h-4 w-4 text-purple-400" />
              </div>
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
        <Button
          asChild
          className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-md shadow-purple-500/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/30"
        >
          <Link
            href={`${buttonLink}?service=${encodeURIComponent(title)}&amount=${price.replace(/[^\d]/g, "")}`}
            className="flex items-center justify-center"
          >
            {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default function VideoEditingPage() {
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
                  <span className="animate-pulse mr-2">●</span> Professional Video Services
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    Professional Video Editing
                  </span>{" "}
                  Services
                </h1>
                <p className="text-xl text-gray-300 max-w-[600px] leading-relaxed">
                  Transform your raw footage into compelling visual stories with our expert video editing services. From
                  color grading to motion graphics, we deliver high-quality video content.
                </p>

                <div className="flex flex-wrap gap-5 pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 w-full sm:w-auto shadow-lg shadow-purple-700/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-700/30 text-base"
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
                    <Clock className="h-5 w-5 text-purple-400" />
                    <span className="text-gray-300">Quick turnaround time</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
                    <Award className="h-5 w-5 text-cyan-400" />
                    <span className="text-gray-300">Award-winning editors</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-left" delay={200}>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-30"></div>
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/10 backdrop-blur-sm bg-slate-900/50">
                  <img
                    src="https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Video editing workspace"
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-900/30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/30 cursor-pointer transform transition-transform hover:scale-110">
                      <Play className="h-8 w-8 text-white fill-current" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 to-transparent h-32 flex items-end justify-center pb-6">
                    <div className="text-sm text-gray-400 px-4 py-2 rounded-full border border-gray-800 backdrop-blur-md bg-slate-900/50">
                      Watch our video editing showcase
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
                <span className="mr-1">✦</span> Our Video Editing Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Comprehensive{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Video Editing
                </span>{" "}
                Solutions
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                From basic cuts to advanced visual effects, we offer a full range of video editing services to meet your
                needs
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <ScrollAnimation type="fade-up" delay={100}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-purple-600/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex flex-col h-full p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/10">
                  <div className="p-3 mb-4 bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                    <Scissors className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    Basic Video Editing
                  </h3>
                  <p className="text-gray-400 mb-4 flex-grow">
                    Professional cutting, trimming, and arrangement of footage to create a cohesive narrative flow.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Footage organization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Basic cuts and transitions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Audio synchronization</span>
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
                    <Sliders className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    Color Grading & Correction
                  </h3>
                  <p className="text-gray-400 mb-4 flex-grow">
                    Enhance the visual appeal of your footage with professional color grading and correction techniques.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Color correction</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Cinematic color grading</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Consistent visual style</span>
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
                    <Layers className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    Motion Graphics & VFX
                  </h3>
                  <p className="text-gray-400 mb-4 flex-grow">
                    Add dynamic visual elements and special effects to elevate your video content.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Custom motion graphics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Visual effects integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Animated text and titles</span>
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
                    <Film className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    Video Restoration
                  </h3>
                  <p className="text-gray-400 mb-4 flex-grow">
                    Restore and enhance old or damaged footage to bring new life to your valuable video content.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Noise reduction</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Stabilization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Resolution enhancement</span>
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
                    <PenTool className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    Content Creation
                  </h3>
                  <p className="text-gray-400 mb-4 flex-grow">
                    Full-service content creation from concept to final delivery for various platforms and purposes.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Social media content</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Marketing videos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Corporate presentations</span>
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
                    <Video className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    Audio Enhancement
                  </h3>
                  <p className="text-gray-400 mb-4 flex-grow">
                    Professional audio editing and enhancement to ensure your video sounds as good as it looks.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Noise removal</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Voice enhancement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Music and sound effects</span>
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
                <Zap className="h-4 w-4 mr-2" /> Our Process
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                How We Work
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Our streamlined process ensures high-quality results and a smooth experience from start to finish
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
                    Consultation
                  </h3>
                  <p className="text-gray-300 text-center">
                    We discuss your project requirements, goals, and vision to understand exactly what you need.
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
                    Planning
                  </h3>
                  <p className="text-gray-300 text-center">
                    We create a detailed plan including timeline, style guide, and technical specifications.
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
                    Editing
                  </h3>
                  <p className="text-gray-300 text-center">
                    Our expert editors work on your footage, applying the agreed-upon style and techniques.
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
                    Delivery
                  </h3>
                  <p className="text-gray-300 text-center">
                    We deliver the final product in your preferred format with revisions if needed.
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
                Choose the plan that best fits your project needs and budget
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <ScrollAnimation type="fade-up" delay={100}>
              <PricingTier
                title="Basic Package"
                price="₹14,999"
                description="Perfect for simple projects and short videos"
                features={[
                  "Up to 5 minutes of edited content",
                  "Basic cuts and transitions",
                  "Simple color correction",
                  "Basic audio enhancement",
                  "1 round of revisions",
                ]}
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <PricingTier
                title="Professional Package"
                price="₹29,999"
                description="Ideal for professional content and marketing videos"
                features={[
                  "Up to 15 minutes of edited content",
                  "Advanced cuts and transitions",
                  "Professional color grading",
                  "Complete audio enhancement",
                  "Basic motion graphics",
                  "3 rounds of revisions",
                ]}
                popular={true}
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <PricingTier
                title="Premium Package"
                price="₹49,999"
                description="For high-end productions and complex projects"
                features={[
                  "Up to 30 minutes of edited content",
                  "Premium cuts and transitions",
                  "Advanced color grading",
                  "Professional audio mixing",
                  "Advanced motion graphics & VFX",
                  "Unlimited revisions",
                  "Dedicated project manager",
                ]}
              />
            </ScrollAnimation>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">
              Need a custom solution? Contact us for a personalized quote tailored to your specific requirements.
            </p>
            <Button
              asChild
              variant="outline"
              className="bg-transparent text-white border-white/20 hover:bg-white/10 backdrop-blur-sm"
            >
              <Link href="/contact?service=Video%20Editing%20-%20Custom">Get Custom Quote</Link>
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
                Hear from our satisfied clients about their experience with our video editing services
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <ScrollAnimation type="fade-up" delay={100}>
              <TestimonialCard
                quote="The team transformed our raw footage into a stunning promotional video. Their attention to detail and creative approach exceeded our expectations!"
                author="Ananya Patel"
                company="Horizon Marketing"
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <TestimonialCard
                quote="Their color grading skills are exceptional. They transformed our wedding video into a cinematic masterpiece that we'll cherish forever."
                author="Rahul Sharma"
                company="Personal Client"
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <TestimonialCard
                quote="The motion graphics they created for our product launch video were innovative and eye-catching. Our social media engagement increased by 200% after posting!"
                author="Priya Mehta"
                company="TechStart Innovations"
                image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
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
                  <Video className="h-4 w-4 mr-2" /> Get Started Today
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    Transform
                  </span>{" "}
                  Your Video Content?
                </h2>
                <p className="text-gray-300 md:text-xl leading-relaxed">
                  Contact us today for a free consultation and take the first step toward professional video content
                  that stands out.
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
