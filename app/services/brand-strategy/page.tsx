import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Palette, Target, CheckCircle, Star, Award, Lightbulb, Eye, MessageSquare, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GravitationalText } from "@/components/gravitational-text"
import AnimatedCard, { AnimatedCardContent, AnimatedCardHeader } from "@/components/animated_card"
import { ScrollAnimation } from "@/components/scroll-animation"

export const metadata: Metadata = {
  title: "Brand Strategy & Identity | TechSpire Solutions",
  description:
    "Complete brand development from naming and messaging to visual identity systems that resonate with your audience.",
}

export default function BrandStrategyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Brand strategy visualization"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-slate-900/90"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-20 animate-pulse"
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
              <div className="space-y-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 backdrop-blur-sm">
                  <Palette className="h-4 w-4 mr-2" /> Brand Strategy & Identity
                </div>

                <div className="space-y-4">
                  <GravitationalText
                    text="Build a Brand"
                    textClassName="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
                    intensity={0.1}
                    glowEffect={true}
                  />
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                    That Resonates
                  </h1>
                </div>

                <p className="text-xl text-gray-300 max-w-[600px] leading-relaxed">
                  Complete brand development from naming and messaging to visual identity systems that create lasting
                  connections with your audience.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 shadow-lg shadow-purple-700/25 transition-all duration-300"
                  >
                    <Link href="/contact">
                      Start Your Brand Journey <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="bg-transparent text-white border-white/30 hover:bg-white/10"
                  >
                    <Link href="/portfolio">View Our Work</Link>
                  </Button>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-3 py-2 rounded-full">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-gray-300 text-sm">500+ Brands Created</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-3 py-2 rounded-full">
                    <Award className="h-4 w-4 text-purple-400" />
                    <span className="text-gray-300 text-sm">Award-Winning Design</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-left" delay={200}>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-30"></div>
                <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/20 bg-slate-900/50 backdrop-blur-sm">
                  <img
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Brand strategy process"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30">
                      <h3 className="text-white font-semibold mb-2">Brand Strategy Process</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-300">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                          Research
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
                          Strategy
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                          Design
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="w-full py-20 md:py-28 bg-slate-900 border-b border-slate-800">
        <div className="container px-4 md:px-6">
          <ScrollAnimation type="fade-up">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm text-cyan-300 mb-4">
                <CheckCircle className="h-4 w-4 mr-2" /> What's Included
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
                Complete Brand{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Development
                </span>
              </h2>
              <p className="text-gray-300 md:text-xl max-w-3xl mx-auto">
                Everything you need to build a strong, memorable brand that stands out in the marketplace
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation type="fade-up" delay={100}>
              <AnimatedCard className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
                <AnimatedCardHeader>
                  <div className="p-3 bg-gradient-to-r from-purple-500/20 to-purple-500/5 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Brand Strategy</h3>
                </AnimatedCardHeader>
                <AnimatedCardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Market research & competitor analysis
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Target audience identification
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Brand positioning & messaging
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Value proposition development
                    </li>
                  </ul>
                </AnimatedCardContent>
              </AnimatedCard>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <AnimatedCard className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
                <AnimatedCardHeader>
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-cyan-500/5 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Visual Identity</h3>
                </AnimatedCardHeader>
                <AnimatedCardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      Logo design & variations
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      Color palette & typography
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      Brand guidelines document
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      Business card & stationery design
                    </li>
                  </ul>
                </AnimatedCardContent>
              </AnimatedCard>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <AnimatedCard className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
                <AnimatedCardHeader>
                  <div className="p-3 bg-gradient-to-r from-purple-500/20 to-purple-500/5 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Brand Voice</h3>
                </AnimatedCardHeader>
                <AnimatedCardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Tone of voice guidelines
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Content strategy framework
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Messaging templates
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Communication guidelines
                    </li>
                  </ul>
                </AnimatedCardContent>
              </AnimatedCard>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-20 md:py-28 bg-slate-800 border-b border-slate-700">
        <div className="container px-4 md:px-6">
          <ScrollAnimation type="fade-up">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 mb-4">
                <Lightbulb className="h-4 w-4 mr-2" /> Our Process
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
                How We{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Create Brands
                </span>
              </h2>
              <p className="text-gray-300 md:text-xl max-w-3xl mx-auto">
                Our proven 4-step process ensures your brand is strategically positioned and visually compelling
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation type="fade-up" delay={100}>
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-purple-500 to-transparent hidden lg:block"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Discovery</h3>
                <p className="text-gray-300">
                  Deep dive into your business, market, and goals to understand your unique position.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-cyan-500 to-transparent hidden lg:block"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Strategy</h3>
                <p className="text-gray-300">
                  Develop positioning, messaging, and brand architecture that resonates with your audience.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-purple-500 to-transparent hidden lg:block"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Design</h3>
                <p className="text-gray-300">
                  Create visual identity elements that bring your brand strategy to life beautifully.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={400}>
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Launch</h3>
                <p className="text-gray-300">
                  Implement your new brand across all touchpoints with comprehensive guidelines.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-20 md:py-28 bg-slate-900 border-b border-slate-800">
        <div className="container px-4 md:px-6">
          <ScrollAnimation type="fade-up">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm text-cyan-300 mb-4">
                <Zap className="h-4 w-4 mr-2" /> Pricing
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
                Investment in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Your Brand
                </span>
              </h2>
              <p className="text-gray-300 md:text-xl max-w-3xl mx-auto">
                Choose the package that best fits your brand development needs
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ScrollAnimation type="fade-up" delay={100}>
              <AnimatedCard className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 relative">
                <AnimatedCardHeader className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                  <div className="text-4xl font-bold text-white mb-4">
                    ₹49,999
                    <span className="text-lg text-gray-400 font-normal">/project</span>
                  </div>
                  <p className="text-gray-300">Perfect for small businesses and startups</p>
                </AnimatedCardHeader>
                <AnimatedCardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Logo design + 2 variations
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Basic brand guidelines
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Color palette & typography
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Business card design
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />2 rounds of revisions
                    </li>
                  </ul>
                  <Button
                    asChild
                    className="w-full mt-6 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-0"
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </AnimatedCardContent>
              </AnimatedCard>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <AnimatedCard className="h-full bg-slate-800/50 backdrop-blur-sm border-cyan-500/50 hover:border-cyan-500/70 transition-all duration-300 relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
                <AnimatedCardHeader className="text-center pt-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                  <div className="text-4xl font-bold text-white mb-4">
                    ₹99,999
                    <span className="text-lg text-gray-400 font-normal">/project</span>
                  </div>
                  <p className="text-gray-300">Complete brand identity for growing businesses</p>
                </AnimatedCardHeader>
                <AnimatedCardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      Everything in Starter
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      Brand strategy & positioning
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      Comprehensive brand guidelines
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      Stationery design suite
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      Social media templates
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      Unlimited revisions
                    </li>
                  </ul>
                  <Button
                    asChild
                    className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white border-0"
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </AnimatedCardContent>
              </AnimatedCard>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <AnimatedCard className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 relative">
                <AnimatedCardHeader className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-white mb-4">
                    ₹199,999
                    <span className="text-lg text-gray-400 font-normal">/project</span>
                  </div>
                  <p className="text-gray-300">Complete brand ecosystem for large organizations</p>
                </AnimatedCardHeader>
                <AnimatedCardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Everything in Professional
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Market research & analysis
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Brand architecture
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Marketing collateral design
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Brand implementation support
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />6 months support
                    </li>
                  </ul>
                  <Button
                    asChild
                    className="w-full mt-6 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-0"
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </AnimatedCardContent>
              </AnimatedCard>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Brand strategy background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-cyan-900/80"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <ScrollAnimation type="fade-up">
            <div className="flex flex-col items-center space-y-6 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Build Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Brand?
                </span>
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl text-gray-200 leading-relaxed">
                Let's create a brand identity that resonates with your audience and drives business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                >
                  <Link href="/contact">
                    Start Your Brand Journey <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white transition-all duration-300"
                >
                  <Link href="/portfolio">View Our Portfolio</Link>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
