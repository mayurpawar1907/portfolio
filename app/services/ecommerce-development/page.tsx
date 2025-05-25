import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  ShoppingCart,
  CreditCard,
  Truck,
  CheckCircle,
  Star,
  Award,
  Globe,
  Zap,
  Lightbulb,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { GravitationalText } from "@/components/gravitational-text"
import AnimatedCard, { AnimatedCardContent, AnimatedCardHeader } from "@/components/animated_card"
import { ScrollAnimation } from "@/components/scroll-animation"

export const metadata: Metadata = {
  title: "eCommerce Development | TechSpire Solutions",
  description:
    "Shopify, WooCommerce, and custom eCommerce solutions with optimized checkout experiences and marketing integration.",
}

export default function EcommerceDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="eCommerce development"
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
                  <ShoppingCart className="h-4 w-4 mr-2" /> eCommerce Development
                </div>

                <div className="space-y-4">
                  <GravitationalText
                    text="Sell More"
                    textClassName="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
                    intensity={0.1}
                    glowEffect={true}
                  />
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                    Online Today
                  </h1>
                </div>

                <p className="text-xl text-gray-300 max-w-[600px] leading-relaxed">
                  Shopify, WooCommerce, and custom eCommerce solutions with optimized checkout experiences and marketing
                  integration that drive sales and growth.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 shadow-lg shadow-purple-700/25 transition-all duration-300"
                  >
                    <Link href="/contact">
                      Launch Your Store <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="bg-transparent text-white border-white/30 hover:bg-white/10"
                  >
                    <Link href="/portfolio">View Store Examples</Link>
                  </Button>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-3 py-2 rounded-full">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-gray-300 text-sm">100+ Stores Built</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-3 py-2 rounded-full">
                    <Award className="h-4 w-4 text-purple-400" />
                    <span className="text-gray-300 text-sm">Conversion Optimized</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-left" delay={200}>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-30"></div>
                <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/20 bg-slate-900/50 backdrop-blur-sm">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="eCommerce store mockup"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30">
                      <h3 className="text-white font-semibold mb-2">eCommerce Features</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-300">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                          Payments
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
                          Inventory
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                          Analytics
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
                Complete eCommerce{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Solution
                </span>
              </h2>
              <p className="text-gray-300 md:text-xl max-w-3xl mx-auto">
                Everything you need to launch and grow a successful online store
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation type="fade-up" delay={100}>
              <AnimatedCard className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
                <AnimatedCardHeader>
                  <div className="p-3 bg-gradient-to-r from-purple-500/20 to-purple-500/5 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <ShoppingCart className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Store Setup</h3>
                </AnimatedCardHeader>
                <AnimatedCardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Platform selection & setup
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Custom theme development
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Product catalog setup
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Inventory management
                    </li>
                  </ul>
                </AnimatedCardContent>
              </AnimatedCard>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <AnimatedCard className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
                <AnimatedCardHeader>
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-cyan-500/5 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <CreditCard className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Payment Integration</h3>
                </AnimatedCardHeader>
                <AnimatedCardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      Multiple payment gateways
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      Secure checkout process
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      SSL certificate setup
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      PCI compliance
                    </li>
                  </ul>
                </AnimatedCardContent>
              </AnimatedCard>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <AnimatedCard className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
                <AnimatedCardHeader>
                  <div className="p-3 bg-gradient-to-r from-purple-500/20 to-purple-500/5 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Truck className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Shipping & Logistics</h3>
                </AnimatedCardHeader>
                <AnimatedCardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Shipping calculator
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Order tracking system
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Automated notifications
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Return management
                    </li>
                  </ul>
                </AnimatedCardContent>
              </AnimatedCard>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Platform Options Section */}
      <section className="w-full py-20 md:py-28 bg-slate-800 border-b border-slate-700">
        <div className="container px-4 md:px-6">
          <ScrollAnimation type="fade-up">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 mb-4">
                <Globe className="h-4 w-4 mr-2" /> Platforms We Work With
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
                Choose Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Platform
                </span>
              </h2>
              <p className="text-gray-300 md:text-xl max-w-3xl mx-auto">
                We work with all major eCommerce platforms to find the perfect fit for your business
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation type="fade-up" delay={100}>
              <AnimatedCard className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 text-center">
                <AnimatedCardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-purple-500/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Shopify</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Perfect for small to medium businesses with built-in features and apps.
                  </p>
                  <div className="text-sm text-purple-400">Best for: Quick setup</div>
                </AnimatedCardContent>
              </AnimatedCard>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <AnimatedCard className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 text-center">
                <AnimatedCardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-cyan-500/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">WooCommerce</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    WordPress-based solution with maximum customization flexibility.
                  </p>
                  <div className="text-sm text-cyan-400">Best for: Customization</div>
                </AnimatedCardContent>
              </AnimatedCard>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <AnimatedCard className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 text-center">
                <AnimatedCardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-purple-500/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Magento</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Enterprise-level solution for large-scale eCommerce operations.
                  </p>
                  <div className="text-sm text-purple-400">Best for: Enterprise</div>
                </AnimatedCardContent>
              </AnimatedCard>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={400}>
              <AnimatedCard className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 text-center">
                <AnimatedCardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-cyan-500/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Custom</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Fully custom solution built from scratch for unique requirements.
                  </p>
                  <div className="text-sm text-cyan-400">Best for: Unique needs</div>
                </AnimatedCardContent>
              </AnimatedCard>
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
                eCommerce{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Packages
                </span>
              </h2>
              <p className="text-gray-300 md:text-xl max-w-3xl mx-auto">
                Choose the eCommerce solution that fits your business size and goals
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ScrollAnimation type="fade-up" delay={100}>
              <AnimatedCard className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 relative">
                <AnimatedCardHeader className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Starter Store</h3>
                  <div className="text-4xl font-bold text-white mb-4">
                    ₹79,999
                    <span className="text-lg text-gray-400 font-normal">/project</span>
                  </div>
                  <p className="text-gray-300">Perfect for small businesses starting online</p>
                </AnimatedCardHeader>
                <AnimatedCardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Shopify/WooCommerce setup
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Up to 50 products
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Payment gateway integration
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Mobile responsive design
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Basic SEO setup
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
                  <h3 className="text-2xl font-bold text-white mb-2">Professional Store</h3>
                  <div className="text-4xl font-bold text-white mb-4">
                    ₹149,999
                    <span className="text-lg text-gray-400 font-normal">/project</span>
                  </div>
                  <p className="text-gray-300">Complete eCommerce solution for growing businesses</p>
                </AnimatedCardHeader>
                <AnimatedCardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      Everything in Starter
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      Up to 500 products
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      Custom theme development
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      Advanced analytics setup
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      Email marketing integration
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      Inventory management
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
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise Store</h3>
                  <div className="text-4xl font-bold text-white mb-4">
                    ₹299,999
                    <span className="text-lg text-gray-400 font-normal">/project</span>
                  </div>
                  <p className="text-gray-300">Advanced eCommerce for large-scale operations</p>
                </AnimatedCardHeader>
                <AnimatedCardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Everything in Professional
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Unlimited products
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Multi-vendor marketplace
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Advanced integrations
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      Custom functionality
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
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="eCommerce background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-cyan-900/80"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <ScrollAnimation type="fade-up">
            <div className="flex flex-col items-center space-y-6 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Launch Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Online Store?
                </span>
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl text-gray-200 leading-relaxed">
                Let's build an eCommerce solution that drives sales and grows your business online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                >
                  <Link href="/contact">
                    Launch Your Store <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white transition-all duration-300"
                >
                  <Link href="/portfolio">View Store Examples</Link>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
