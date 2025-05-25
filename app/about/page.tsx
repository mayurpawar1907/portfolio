import type { Metadata } from "next"
import Link from "next/link"
import { Users, Award, Clock, Globe, ArrowRight, CheckCircle, Briefcase, Heart, Star, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GravitationalText } from "@/components/gravitational-text"
import AnimatedCard, { AnimatedCardContent } from "@/components/animated_card"
import { ScrollAnimation } from "@/components/scroll-animation"

export const metadata: Metadata = {
  title: "About Us | Grand Brand",
  description:
    "Learn about Grand Brand, our mission, and our team of experts in branding, web development, and digital marketing.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <section className="w-full py-16 md:py-28 lg:py-32 bg-gradient-to-r from-slate-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Team collaboration"
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
          <div className="flex flex-col items-center space-y-6 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 backdrop-blur-sm">
              <Star className="h-4 w-4 mr-2" /> Building Brands Since 2020
            </div>
            <GravitationalText
              text="About Grand Brand"
              textClassName="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
              intensity={0.1}
              glowEffect={true}
            />
            <p className="text-xl text-gray-300 md:text-2xl max-w-3xl mx-auto leading-relaxed">
              We build powerful digital experiences that help modern brands grow through strategic thinking and flawless
              execution
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
                <Shield className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">Trusted by 500+ brands</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
                <Award className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">Award-winning designs</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
                <Zap className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">Strategic innovation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
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

      {/* Our Story */}
      <section className="w-full py-16 md:py-24 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <ScrollAnimation type="fade-right">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 mb-2">
                  <span className="mr-1">✦</span> Our Journey
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    Story
                  </span>
                </h2>
                <p className="text-gray-300 md:text-lg leading-relaxed">
                  At Grand Brand, we build powerful digital experiences that help modern brands grow. Founded by Kushal
                  Arora, a creative leader with a passion for branding and innovation, Grand Brand is where strategy
                  meets execution.
                </p>
                <p className="text-gray-300 md:text-lg leading-relaxed">
                  Our journey began with a simple belief: every brand has a unique story worth telling. Through
                  strategic thinking, creative excellence, and technical innovation, we've helped hundreds of businesses
                  transform their digital presence and achieve remarkable growth.
                </p>
                <div className="pt-4 space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 p-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-0.5">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-gray-300">Delivered 500+ successful brand transformations</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 p-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-0.5">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-gray-300">Built 300+ high-performing websites and applications</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 p-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-0.5">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-gray-300">Expanded from 3 to 25+ creative professionals</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation type="fade-left">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg blur opacity-30"></div>
                <div className="relative rounded-lg overflow-hidden border border-slate-700 shadow-xl shadow-purple-500/10">
                  <img
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Our company journey"
                    className="aspect-video object-cover w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                      <div
                        className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </div>
                    <p className="text-white text-sm mt-2">Founded in New Delhi, 2020</p>
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

      {/* Our Mission */}
      <section className="w-full py-16 md:py-24 bg-slate-800 border-b border-slate-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Creative workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-800/90"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm text-cyan-300 mb-2">
                <span className="mr-1">★</span> Our Purpose
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Mission
                </span>
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl leading-relaxed">
                To help modern brands grow through powerful digital experiences that combine strategic thinking with
                creative excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <ScrollAnimation type="fade-up" delay={100}>
                <AnimatedCard className="h-full bg-slate-700/50 backdrop-blur-sm border-slate-600/50 hover:border-purple-500/30 transition-all duration-300">
                  <AnimatedCardContent className="flex flex-col items-center text-center space-y-4 p-6">
                    <div className="p-3 bg-gradient-to-r from-purple-500/20 to-purple-500/5 rounded-full">
                      <Users className="h-8 w-8 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Brand-Focused</h3>
                    <p className="text-gray-300">
                      We understand that every brand is unique and deserves a tailored approach to digital success.
                    </p>
                    <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-2"></div>
                  </AnimatedCardContent>
                </AnimatedCard>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={200}>
                <AnimatedCard className="h-full bg-slate-700/50 backdrop-blur-sm border-slate-600/50 hover:border-cyan-500/30 transition-all duration-300">
                  <AnimatedCardContent className="flex flex-col items-center text-center space-y-4 p-6">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-cyan-500/5 rounded-full">
                      <Award className="h-8 w-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Creative Excellence</h3>
                    <p className="text-gray-300">
                      We strive for creative excellence in every project, ensuring designs that captivate and convert.
                    </p>
                    <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-2"></div>
                  </AnimatedCardContent>
                </AnimatedCard>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={300}>
                <AnimatedCard className="h-full bg-slate-700/50 backdrop-blur-sm border-slate-600/50 hover:border-purple-500/30 transition-all duration-300">
                  <AnimatedCardContent className="flex flex-col items-center text-center space-y-4 p-6">
                    <div className="p-3 bg-gradient-to-r from-purple-500/20 to-purple-500/5 rounded-full">
                      <Clock className="h-8 w-8 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Strategic Innovation</h3>
                    <p className="text-gray-300">
                      We combine strategic thinking with innovative solutions to create lasting digital impact.
                    </p>
                    <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-2"></div>
                  </AnimatedCardContent>
                </AnimatedCard>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={400}>
                <AnimatedCard className="h-full bg-slate-700/50 backdrop-blur-sm border-slate-600/50 hover:border-cyan-500/30 transition-all duration-300">
                  <AnimatedCardContent className="flex flex-col items-center text-center space-y-4 p-6">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-cyan-500/5 rounded-full">
                      <Heart className="h-8 w-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Growth Impact</h3>
                    <p className="text-gray-300">
                      We aim to create solutions that drive measurable growth and long-term success for our clients.
                    </p>
                    <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-2"></div>
                  </AnimatedCardContent>
                </AnimatedCard>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="w-full py-16 md:py-24 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.15),transparent_50%)]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 mb-2">
                <span className="mr-1">👥</span> Meet Our Leaders
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Leadership Team
                </span>
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Meet the visionaries behind Grand Brand's success
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <ScrollAnimation type="fade-up" delay={100}>
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <AnimatedCard className="h-full bg-slate-800/90 backdrop-blur-sm border-slate-700/50 relative">
                    <AnimatedCardContent className="flex flex-col items-center text-center space-y-4 p-6">
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-purple-500/30 mb-2 group-hover:scale-105 transition-transform duration-300">
                        <img
                          src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                          alt="Kushal Arora portrait"
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <h3 className="text-xl font-bold text-white">Kushal Arora</h3>
                      <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-medium">
                        Founder & Creative Director
                      </p>
                      <p className="text-gray-300 text-sm">
                        Creative leader with a passion for branding and innovation, driving strategic vision.
                      </p>
                      <div className="flex space-x-3 pt-2">
                        <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                        </a>
                      </div>
                    </AnimatedCardContent>
                  </AnimatedCard>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={200}>
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <AnimatedCard className="h-full bg-slate-800/90 backdrop-blur-sm border-slate-700/50 relative">
                    <AnimatedCardContent className="flex flex-col items-center text-center space-y-4 p-6">
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-cyan-500/30 mb-2 group-hover:scale-105 transition-transform duration-300">
                        <img
                          src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                          alt="Shashank Verma portrait"
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <h3 className="text-xl font-bold text-white">Shashank Verma</h3>
                      <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-medium">
                        Co-Founder & CTO
                      </p>
                      <p className="text-gray-300 text-sm">
                        Technology leader driving product development and ensuring we stay ahead of the curve.
                      </p>
                      <div className="flex space-x-3 pt-2">
                        <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                        </a>
                      </div>
                    </AnimatedCardContent>
                  </AnimatedCard>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-up" delay={300}>
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <AnimatedCard className="h-full bg-slate-800/90 backdrop-blur-sm border-slate-700/50 relative">
                    <AnimatedCardContent className="flex flex-col items-center text-center space-y-4 p-6">
                      <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-purple-500/30 mb-2 group-hover:scale-105 transition-transform duration-300">
                        <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                          alt="Vinay Verma portrait"
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <h3 className="text-xl font-bold text-white">Vinay Verma</h3>
                      <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-medium">
                        Team Leader
                      </p>
                      <p className="text-gray-300 text-sm">
                        Coordinates across departments, ensuring every project meets the highest standards of quality.
                      </p>
                      <div className="flex space-x-3 pt-2">
                        <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                        </a>
                      </div>
                    </AnimatedCardContent>
                  </AnimatedCard>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-slate-900 via-purple-900/20 to-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Creative background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-900/90"></div>
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
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm text-cyan-300 mb-2">
              <Briefcase className="h-4 w-4 mr-2" /> Our Impact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Numbers
              </span>{" "}
              Speak
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl mt-4">
              Our achievements in numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ScrollAnimation type="fade-up" delay={100}>
              <div className="flex flex-col items-center space-y-4 p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 group">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="h-10 w-10 text-purple-400" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                  500<span className="text-purple-400">+</span>
                </div>
                <p className="text-gray-300 text-center">Brands Created</p>
                <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <div className="flex flex-col items-center space-y-4 p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5 group">
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-cyan-400" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                  25<span className="text-cyan-400">+</span>
                </div>
                <p className="text-gray-300 text-center">Team Members</p>
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <div className="flex flex-col items-center space-y-4 p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 group">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-10 w-10 text-purple-400" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                  20<span className="text-purple-400">+</span>
                </div>
                <p className="text-gray-300 text-center">Industry Awards</p>
                <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={400}>
              <div className="flex flex-col items-center space-y-4 p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5 group">
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-10 w-10 text-cyan-400" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                  15<span className="text-cyan-400">+</span>
                </div>
                <p className="text-gray-300 text-center">Countries Served</p>
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Collaboration"
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
              <span className="mr-1">🚀</span> Ready to Transform Your Brand?
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Work With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Grand Brand
              </span>
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl text-gray-200 leading-relaxed">
              Ready to bring your brand vision to life? Let's collaborate on your next project and create something
              extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
              >
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
