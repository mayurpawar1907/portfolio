import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Users,
  CheckCircle,
  TrendingUp,
  Target,
  Globe,
  Heart,
  MessageSquare,
  Share2,
  BarChart,
  Instagram,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { GravitationalText } from "@/components/gravitational-text"
import { ScrollAnimation } from "@/components/scroll-animation"
import AnimatedCard, { AnimatedCardHeader, AnimatedCardContent, AnimatedCardFooter } from "@/components/animated_card"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Social Engagement Services | TechSpire Solutions",
  description:
    "Boost your social media presence and engagement with our comprehensive social engagement strategies and services.",
  keywords:
    "social engagement, social media marketing, community management, content creation, influencer marketing, social media strategy",
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
            {price !== "Custom" && <span className="ml-1 text-xl font-medium text-gray-400">/month</span>}
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

export default function SocialEngagementPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <section className="w-full py-16 md:py-28 lg:py-32 bg-gradient-to-r from-slate-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Social media background"
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
                  <Users className="h-4 w-4 mr-2" /> Social Media Experts
                </div>
                <GravitationalText
                  text="Social Engagement Services"
                  textClassName="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
                  intensity={0.1}
                  glowEffect={true}
                />
                <p className="text-xl text-gray-300 leading-relaxed">
                  Boost your social media presence, increase engagement, and build a loyal community with our
                  comprehensive social media strategies
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
                    <Heart className="h-5 w-5 text-purple-400" />
                    <span className="text-gray-300">Increased Engagement</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
                    <TrendingUp className="h-5 w-5 text-cyan-400" />
                    <span className="text-gray-300">Growth Strategy</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
                    <Target className="h-5 w-5 text-purple-400" />
                    <span className="text-gray-300">Targeted Audience</span>
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
                    <Link href="/contact">Request Strategy</Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-left" delay={200}>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative rounded-lg overflow-hidden border border-slate-700 shadow-xl shadow-purple-500/10">
                  <img
                    src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Social media engagement"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-slate-800/80 backdrop-blur-sm rounded-full">
                        <Users className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-300">Building</div>
                        <div className="text-white font-bold">Your Social Community</div>
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
                <Globe className="h-4 w-4 mr-2" /> Our Social Solutions
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Comprehensive{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Social Media
                </span>{" "}
                Services
              </h2>
              <p className="mt-4 text-gray-300 md:text-lg max-w-3xl mx-auto">
                We offer a full spectrum of social media services to help your brand grow, engage, and convert on all
                major platforms
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ScrollAnimation type="fade-up" delay={100}>
              <ServiceFeature
                icon={<Instagram className="h-8 w-8 text-purple-400" />}
                title="Social Media Management"
                description="Complete management of your social media accounts with regular posting, community engagement, and growth strategies."
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <ServiceFeature
                icon={<MessageSquare className="h-8 w-8 text-cyan-400" />}
                title="Community Building"
                description="Strategic approaches to build, nurture, and grow your online community across all social platforms."
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <ServiceFeature
                icon={<Heart className="h-8 w-8 text-purple-400" />}
                title="Engagement Campaigns"
                description="Creative campaigns designed to boost engagement, increase followers, and drive meaningful interactions."
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={400}>
              <ServiceFeature
                icon={<Target className="h-8 w-8 text-cyan-400" />}
                title="Influencer Collaborations"
                description="Strategic partnerships with relevant influencers to expand your reach and build credibility with new audiences."
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={500}>
              <ServiceFeature
                icon={<Share2 className="h-8 w-8 text-purple-400" />}
                title="Content Creation"
                description="High-quality, platform-optimized content creation including graphics, videos, and engaging copy."
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={600}>
              <ServiceFeature
                icon={<BarChart className="h-8 w-8 text-cyan-400" />}
                title="Analytics & Reporting"
                description="Comprehensive analytics and reporting to track performance, measure ROI, and continuously optimize your strategy."
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Process Section with Image */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Social media process"
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
                    Social Engagement
                  </span>{" "}
                  Process
                </h2>
                <p className="text-gray-300 md:text-lg mb-8 leading-relaxed">
                  We follow a data-driven approach to create and implement social media strategies that deliver
                  measurable results.
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
                          Audience Analysis
                        </h3>
                        <p className="text-gray-300">
                          We analyze your target audience, competitors, and industry trends to develop a tailored social
                          strategy.
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
                          Content Strategy
                        </h3>
                        <p className="text-gray-300">
                          We create a comprehensive content plan with platform-specific strategies to maximize
                          engagement.
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
                          Implementation & Engagement
                        </h3>
                        <p className="text-gray-300">
                          We execute the strategy, create and publish content, and actively engage with your community.
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
                          Analysis & Optimization
                        </h3>
                        <p className="text-gray-300">
                          We continuously monitor performance, analyze results, and refine our approach to maximize ROI.
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
                    src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Social media team"
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
                        <div className="text-white font-bold">200+ Brands in India</div>
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
                Choose the social engagement package that best fits your business goals and budget
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-3">
            <ScrollAnimation type="fade-up" delay={100}>
              <PricingTier
                title="Starter Package"
                price="₹19,999"
                description="Essential social media management for small businesses and startups."
                features={[
                  "Management of 2 social platforms",
                  "12 posts per month",
                  "Basic community management",
                  "Monthly performance report",
                  "Basic content creation",
                  "Email support",
                ]}
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <PricingTier
                title="Growth Package"
                price="₹39,999"
                description="Comprehensive social strategy for growing businesses."
                features={[
                  "Management of 4 social platforms",
                  "20 posts per month",
                  "Advanced community management",
                  "Content calendar planning",
                  "Custom graphics and videos",
                  "Influencer outreach (5 per month)",
                  "Bi-weekly performance reports",
                  "Email and phone support",
                ]}
                popular={true}
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <PricingTier
                title="Premium Package"
                price="₹79,999"
                description="Advanced social engagement for established brands."
                features={[
                  "Management of all major platforms",
                  "Daily content posting",
                  "24/7 community management",
                  "Advanced content strategy",
                  "Premium content creation",
                  "Influencer campaign management",
                  "Paid social media advertising",
                  "Weekly performance reports",
                  "Dedicated social media manager",
                  "Priority support",
                ]}
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="w-full py-16 md:py-24 bg-slate-800 border-t border-slate-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Analytics dashboard"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-800/90"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <ScrollAnimation type="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 mb-2">
                <TrendingUp className="h-4 w-4 mr-2" /> Success Stories
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Real Results for Real Businesses
              </h2>
              <p className="mt-4 text-gray-300 md:text-lg max-w-3xl mx-auto">
                See how our social engagement services have helped businesses like yours achieve significant growth
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-3">
            <ScrollAnimation type="fade-up" delay={100}>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6">
                <div className="flex items-center justify-center mb-4">
                  <Award className="h-12 w-12 text-purple-400" />
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">+245%</div>
                  <p className="text-gray-300">
                    Increase in social media engagement for a fashion brand within 3 months
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6">
                <div className="flex items-center justify-center mb-4">
                  <TrendingUp className="h-12 w-12 text-cyan-400" />
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">+180%</div>
                  <p className="text-gray-300">Growth in followers across platforms for a tech startup</p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6">
                <div className="flex items-center justify-center mb-4">
                  <BarChart className="h-12 w-12 text-purple-400" />
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">+320%</div>
                  <p className="text-gray-300">
                    Increase in website traffic from social media for an e-commerce business
                  </p>
                </div>
              </div>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                What Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Clients Say
                </span>
              </h2>
              <p className="mt-4 text-gray-300 md:text-lg max-w-3xl mx-auto">
                Hear from businesses that have transformed their social media presence with our engagement services
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ScrollAnimation type="fade-up" delay={100}>
              <AnimatedCard>
                <AnimatedCardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500/30">
                      <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                        alt="Client"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Priya Sharma</p>
                      <p className="text-sm text-gray-400">Marketing Director, FashionHub India</p>
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
                    "TechSpire's social media team transformed our online presence. Our engagement rates have tripled,
                    and we've seen a significant increase in website traffic and sales from social channels. Their
                    strategic approach and creative content have made all the difference."
                  </p>
                </AnimatedCardContent>
              </AnimatedCard>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <AnimatedCard>
                <AnimatedCardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-500/30">
                      <img
                        src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                        alt="Client"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Rahul Verma</p>
                      <p className="text-sm text-gray-400">Founder, TechStart India</p>
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
                    "As a tech startup, we needed to build our brand presence quickly. TechSpire's team helped us grow
                    our social following from scratch to over 50,000 followers in just 6 months. Their community
                    management and engagement strategies have helped us build a loyal audience that converts."
                  </p>
                </AnimatedCardContent>
              </AnimatedCard>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <AnimatedCard>
                <AnimatedCardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500/30">
                      <img
                        src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                        alt="Client"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Vikram Singh</p>
                      <p className="text-sm text-gray-400">CEO, FoodDelivery Now</p>
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
                    "The influencer collaborations TechSpire arranged for our food delivery app launch were
                    game-changing. We reached over 2 million potential customers and saw 50,000+ app downloads in the
                    first week. Their social strategy continues to drive our growth month after month."
                  </p>
                </AnimatedCardContent>
              </AnimatedCard>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Social media"
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
              <Users className="h-4 w-4 mr-2" /> Grow Your Social Presence
            </div>
            <ScrollAnimation type="fade-up">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    Transform
                  </span>{" "}
                  Your Social Media?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl text-gray-200 leading-relaxed">
                  Contact us today for a free social media audit and take the first step toward building an engaged
                  community around your brand.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                >
                  <Link href="/payment?service=Social%20Engagement%20-%20Starter&amount=19999">
                    Get Started Now{" "}
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
