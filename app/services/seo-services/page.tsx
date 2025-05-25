import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Search,
  BarChart,
  Globe,
  FileText,
  Zap,
  Target,
  Award,
  TrendingUp,
  CheckCircle,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { GravitationalText } from "@/components/gravitational-text"
import { ScrollAnimation } from "@/components/scroll-animation"
import AnimatedCard, { AnimatedCardHeader, AnimatedCardContent, AnimatedCardFooter } from "@/components/animated_card"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "SEO Services | TechSpire Solutions",
  description:
    "Boost your online visibility and drive organic traffic with our comprehensive SEO strategies and services.",
  keywords:
    "SEO services, search engine optimization, keyword research, on-page SEO, off-page SEO, technical SEO, local SEO",
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
              <CheckCircle className="h-5 w-5 text-cyan-400 shrink-0 mr-2" />
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
            className="flex items-center"
          >
            {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </AnimatedCardFooter>
    </AnimatedCard>
  )
}

interface ServiceFeatureProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ServiceFeature({ icon, title, description }: ServiceFeatureProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-start">
      <div className="p-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg">{icon}</div>
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  )
}

export default function SEOServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="SEO analytics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 to-slate-900/90"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollAnimation type="fade-right">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 mb-2">
                  <Search className="h-4 w-4 mr-2" /> Digital Visibility Experts
                </div>
                <GravitationalText
                  text="SEO Services"
                  textClassName="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
                />
                <p className="text-gray-300 md:text-xl">
                  Boost your online visibility and drive organic traffic with our comprehensive SEO strategies
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-md shadow-purple-500/20"
                  >
                    <Link href="#pricing">
                      View Pricing <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="bg-transparent text-white border-white hover:bg-white/10"
                  >
                    <Link href="/contact">Free SEO Audit</Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-left" delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg blur-xl opacity-30"></div>
                <img
                  src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="SEO analytics dashboard"
                  className="relative rounded-lg border border-slate-700 shadow-xl shadow-purple-500/10 w-full"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="w-full py-12 md:py-24 bg-slate-900 border-t border-b border-slate-800 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
        <div className="container px-4 md:px-6 relative">
          <ScrollAnimation type="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm text-cyan-300 mb-2">
                <Globe className="h-4 w-4 mr-2" /> Our SEO Solutions
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Comprehensive SEO Solutions
              </h2>
              <p className="mt-4 text-gray-300 md:text-lg max-w-3xl mx-auto">
                Our data-driven SEO services help businesses improve their search engine rankings and attract more
                qualified leads.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ScrollAnimation type="fade-up" delay={100}>
              <ServiceFeature
                icon={<FileText className="h-8 w-8 text-purple-400" />}
                title="Keyword Research & Strategy"
                description="Comprehensive research to identify high-value keywords that your target audience is searching for."
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <ServiceFeature
                icon={<Globe className="h-8 w-8 text-cyan-400" />}
                title="On-Page SEO Optimization"
                description="Optimization of your website's content, structure, and HTML elements to improve search engine rankings."
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <ServiceFeature
                icon={<Link className="h-8 w-8 text-purple-400" />}
                title="Off-Page SEO & Link Building"
                description="Strategic acquisition of high-quality backlinks to boost your website's authority and credibility."
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={400}>
              <ServiceFeature
                icon={<Zap className="h-8 w-8 text-cyan-400" />}
                title="Technical SEO Audits"
                description="Identification and resolution of technical issues that may be preventing search engines from properly indexing your site."
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={500}>
              <ServiceFeature
                icon={<Target className="h-8 w-8 text-purple-400" />}
                title="Local SEO"
                description="Optimization strategies to help your business appear in local search results and Google Maps."
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={600}>
              <ServiceFeature
                icon={<BarChart className="h-8 w-8 text-cyan-400" />}
                title="SEO Analytics & Reporting"
                description="Regular performance reports with actionable insights to continuously improve your SEO strategy."
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Process Section with Image */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="SEO process"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-900/90"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <ScrollAnimation type="fade-right">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 mb-2">
                  <CheckCircle className="h-4 w-4 mr-2" /> Our Methodology
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white mb-6">Our SEO Process</h2>
                <p className="text-gray-300 md:text-lg mb-8">
                  We follow a proven methodology to deliver sustainable SEO results for your business.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Discovery & Audit</h3>
                      <p className="text-gray-300">
                        We analyze your website, competitors, and industry to identify opportunities for improvement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Strategy Development</h3>
                      <p className="text-gray-300">
                        We create a customized SEO strategy based on your business goals and target audience.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Implementation</h3>
                      <p className="text-gray-300">
                        We execute on-page, off-page, and technical SEO optimizations to improve your search visibility.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Monitoring & Refinement</h3>
                      <p className="text-gray-300">
                        We continuously track performance and refine our approach to maximize your ROI.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-left">
              <div className="relative rounded-lg overflow-hidden border border-slate-700 shadow-xl shadow-purple-500/10">
                <img
                  src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="SEO process"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-slate-800/80 backdrop-blur-sm rounded-full">
                      <Search className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-300">Trusted by</div>
                      <div className="text-white font-bold">300+ Businesses in India</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-12 md:py-24 bg-slate-900 border-t border-slate-800">
        <div className="container px-4 md:px-6">
          <ScrollAnimation type="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm text-cyan-300 mb-2">
                <span className="mr-1">₹</span> Our Packages
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">SEO Packages</h2>
              <p className="mt-4 text-gray-300 md:text-lg max-w-3xl mx-auto">
                Choose the SEO package that best fits your business goals and budget.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-3">
            <ScrollAnimation type="fade-up" delay={100}>
              <PricingTier
                title="Starter SEO"
                price="₹19,999"
                description="Essential SEO services for small businesses and startups."
                features={[
                  "Keyword research (10 keywords)",
                  "On-page SEO for 5 pages",
                  "Basic technical SEO audit",
                  "Google My Business optimization",
                  "Monthly performance report",
                  "Email support",
                ]}
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <PricingTier
                title="Growth SEO"
                price="₹39,999"
                description="Comprehensive SEO strategy for growing businesses."
                features={[
                  "Keyword research (25 keywords)",
                  "On-page SEO for 15 pages",
                  "Advanced technical SEO audit",
                  "Content optimization",
                  "Link building (5 quality backlinks)",
                  "Local SEO optimization",
                  "Bi-weekly performance reports",
                  "Email and phone support",
                ]}
                popular={true}
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <PricingTier
                title="Enterprise SEO"
                price="₹79,999"
                description="Advanced SEO solutions for established businesses with complex needs."
                features={[
                  "Comprehensive keyword research",
                  "On-page SEO for unlimited pages",
                  "In-depth technical SEO audit",
                  "Content strategy and creation",
                  "Aggressive link building campaign",
                  "Local SEO for multiple locations",
                  "Competitor analysis",
                  "Weekly performance reports",
                  "Dedicated SEO manager",
                  "Priority support",
                ]}
                buttonText="Contact Us"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="w-full py-12 md:py-24 bg-slate-800 border-t border-slate-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
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
                See how our SEO services have helped businesses like yours achieve significant growth.
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
                  <div className="text-4xl font-bold text-white mb-2">+187%</div>
                  <p className="text-gray-300">Increase in organic traffic for an e-commerce client within 6 months</p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6">
                <div className="flex items-center justify-center mb-4">
                  <TrendingUp className="h-12 w-12 text-cyan-400" />
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">Top 3</div>
                  <p className="text-gray-300">Rankings for 80% of target keywords for a B2B software company</p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-6">
                <div className="flex items-center justify-center mb-4">
                  <BarChart className="h-12 w-12 text-purple-400" />
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">+143%</div>
                  <p className="text-gray-300">Increase in lead generation for a local service business</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonials with Images */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-slate-900 via-purple-900/20 to-slate-900 border-t border-slate-800 relative overflow-hidden">
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">What Our Clients Say</h2>
              <p className="mt-4 text-gray-300 md:text-lg max-w-3xl mx-auto">
                Hear from businesses that have transformed their online presence with our SEO services.
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
                      <p className="font-semibold text-white">Ananya Mehta</p>
                      <p className="text-sm text-gray-400">Marketing Director, Indus Retail Solutions</p>
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
                    "TechSpire's SEO team transformed our online presence. Within just 3 months, our organic traffic
                    increased by 156% and we started ranking for keywords we never thought possible. Their strategic
                    approach and transparent reporting made all the difference."
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
                      <p className="font-semibold text-white">Rahul Sharma</p>
                      <p className="text-sm text-gray-400">Owner, Delhi Home Services</p>
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
                    "As a small local business, we were struggling to compete with larger companies online. TechSpire's
                    local SEO services helped us dominate the local search results, and now we're getting more qualified
                    leads than ever before. Their team is knowledgeable and responsive."
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
                      <p className="font-semibold text-white">Priya Patel</p>
                      <p className="text-sm text-gray-400">E-commerce Manager, FashionBazaar</p>
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
                    "We've worked with several SEO agencies in the past, but none have delivered results like TechSpire.
                    Their technical expertise and content strategy have helped us outrank our competitors for high-value
                    keywords. Our e-commerce sales have increased by 78% since we started working with them."
                  </p>
                </AnimatedCardContent>
              </AnimatedCard>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Team working"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-cyan-900/80"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <ScrollAnimation type="fade-up">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Boost Your Online Visibility?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl text-gray-200">
                  Contact us today for a free SEO audit and discover how we can help your business grow.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-md shadow-purple-500/20"
                >
                  <Link href="/contact">
                    Get Free SEO Audit <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-white border-white hover:bg-white/10"
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
