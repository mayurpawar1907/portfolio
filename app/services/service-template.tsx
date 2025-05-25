import type React from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedCard, { AnimatedCardHeader, AnimatedCardContent, AnimatedCardFooter } from "@/components/animated_card"
import { cn } from "@/lib/utils"

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
  buttonLink = "/contact",
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
          <Link href={buttonLink}>
            {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </AnimatedCardFooter>
    </AnimatedCard>
  )
}

export { ServiceFeature, PricingTier }

export default function ServiceTemplate() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <section className="w-full py-16 md:py-28 lg:py-32 bg-gradient-to-r from-slate-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Service background"
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
              Premium Service
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Professional Service Template
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              A comprehensive template for creating beautiful and functional service pages with all the components you
              need.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-md shadow-purple-500/20"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-24 bg-slate-900 border-t border-slate-800 relative">
        <div className="container px-4 md:px-6 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Our Service Features</h2>
            <p className="mt-4 text-gray-300 md:text-lg max-w-3xl mx-auto">
              Showcase your service features with these professionally designed components
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceFeature
              icon={
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
                  className="h-8 w-8 text-purple-400"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              }
              title="Feature One"
              description="Describe your service feature with compelling text that highlights the benefits to your customers."
            />
            <ServiceFeature
              icon={
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
                  className="h-8 w-8 text-cyan-400"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v8" />
                  <path d="M8 12h8" />
                </svg>
              }
              title="Feature Two"
              description="Add another important feature of your service with a clear explanation of how it solves customer problems."
            />
            <ServiceFeature
              icon={
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
                  className="h-8 w-8 text-purple-400"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              }
              title="Feature Three"
              description="Highlight yet another key aspect of your service that sets you apart from competitors in the market."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-slate-900 via-purple-900/20 to-slate-900 border-t border-slate-800">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Pricing Options</h2>
            <p className="mt-4 text-gray-300 md:text-lg max-w-3xl mx-auto">
              Choose the pricing tier that best fits your business needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <PricingTier
              title="Basic Plan"
              price="₹19,999"
              description="Essential features for small businesses and startups."
              features={[
                "Feature one description",
                "Feature two description",
                "Feature three description",
                "Feature four description",
              ]}
            />
            <PricingTier
              title="Pro Plan"
              price="₹39,999"
              description="Advanced features for growing businesses."
              features={[
                "All Basic Plan features",
                "Additional feature one",
                "Additional feature two",
                "Additional feature three",
                "Additional feature four",
              ]}
              popular={true}
            />
            <PricingTier
              title="Enterprise"
              price="Custom"
              description="Custom solutions for large organizations."
              features={[
                "All Pro Plan features",
                "Enterprise feature one",
                "Enterprise feature two",
                "Enterprise feature three",
                "Enterprise feature four",
                "Enterprise feature five",
              ]}
              buttonText="Contact Us"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-cyan-900/80"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="mx-auto max-w-[700px] md:text-xl text-gray-200">
                Contact us today for a free consultation and take the first step toward success.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-md shadow-purple-500/20"
              >
                <Link href="/contact">Contact Us Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white"
              >
                <Link href="/services">Explore Other Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
