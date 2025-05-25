import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Clock,
  Shield,
  Code,
  Server,
  Database,
  Globe,
  Smartphone,
  CheckCircle,
  Users,
  Award,
  BookOpen,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedCard, { AnimatedCardHeader, AnimatedCardContent, AnimatedCardFooter } from "@/components/animated_card"
import { ScrollAnimation } from "@/components/scroll-animation"

export const metadata: Metadata = {
  title: "Courses | TechSpire Solutions",
  description: "Expert-led tech courses in cybersecurity, web development, app development, and more.",
}

interface CourseCardProps {
  title: string
  description: string
  icon: React.ReactNode
  duration: string
  level: string
  price: string
  link: string
  popular?: boolean
  image?: string
  slug: string
}

function CourseCard({ title, description, icon, duration, level, price, popular, image, slug }: CourseCardProps) {
  return (
    <AnimatedCard className="h-full group relative card-hover-effect" glowColor="rgba(139, 92, 246, 0.15)">
      {popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-3 py-1 text-xs font-semibold rounded-bl-lg rounded-tr-md z-10">
          Popular
        </div>
      )}

      {image && (
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
          <div className="absolute bottom-0 left-0 w-full p-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-slate-900/80 backdrop-blur-sm rounded-full">{icon}</div>
              <h3 className="text-lg font-bold text-white">{title}</h3>
            </div>
          </div>
        </div>
      )}

      <AnimatedCardHeader className={image ? "pt-4" : ""}>
        {!image && (
          <>
            <div className="mb-2 p-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full w-12 h-12 flex items-center justify-center">
              {icon}
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </>
        )}
      </AnimatedCardHeader>
      <AnimatedCardContent>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-purple-400" />
            <span className="text-gray-300 text-sm">{duration}</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-2 text-cyan-400" />
            <span className="text-gray-300 text-sm">{level}</span>
          </div>
        </div>
        <div className="text-2xl font-bold text-white mb-4">{price}</div>
      </AnimatedCardContent>
      <AnimatedCardFooter>
        <Button
          asChild
          className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 group-hover:shadow-lg transition-all button-hover-effect"
        >
          <Link href={`/courses/${slug}`}>
            Enroll Now{" "}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </AnimatedCardFooter>
    </AnimatedCard>
  )
}

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-slate-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Students learning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 to-slate-900/90"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                  Expert-Led Courses
                </span>{" "}
                for Tech Professionals
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Enhance your skills with our comprehensive tech courses taught by industry experts
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 button-hover-effect"
            >
              <Link href="#courses">
                Browse Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="w-full py-12 md:py-24 bg-slate-900 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="space-y-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 mb-2">
                <Shield className="h-4 w-4 mr-2" /> Cybersecurity Courses
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Cybersecurity Courses</h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Learn to protect systems and networks from digital attacks
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ScrollAnimation type="fade-up" delay={100}>
                <CourseCard
                  title="Ethical Hacking Full Course"
                  description="Comprehensive ethical hacking training covering penetration testing methodologies with hands-on exercises."
                  icon={<Shield className="h-6 w-6 text-purple-400" />}
                  duration="8 Weeks"
                  level="Beginner to Advanced"
                  price="₹14,999"
                  link="/courses/ethical-hacking-full-course"
                  slug="ethical-hacking-full-course"
                  popular={true}
                  image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                />
              </ScrollAnimation>
              <ScrollAnimation type="fade-up" delay={200}>
                <CourseCard
                  title="Advanced Penetration Testing"
                  description="Master advanced penetration testing techniques and tools for comprehensive security assessments."
                  icon={<Shield className="h-6 w-6 text-cyan-400" />}
                  duration="10 Weeks"
                  level="Advanced"
                  price="₹79,999"
                  link="/courses/advanced-penetration-testing"
                  slug="advanced-penetration-testing"
                  image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                />
              </ScrollAnimation>
              <ScrollAnimation type="fade-up" delay={300}>
                <CourseCard
                  title="Security Analysis & Incident Response"
                  description="Learn to detect, analyze, and respond to security incidents and vulnerabilities in enterprise environments."
                  icon={<Shield className="h-6 w-6 text-purple-400" />}
                  duration="12 Weeks"
                  level="Intermediate"
                  price="₹69,999"
                  link="/courses/security-analysis"
                  slug="security-analysis"
                  image="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                />
              </ScrollAnimation>
            </div>
          </div>

          <div className="mt-16 space-y-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm text-cyan-300 mb-2">
                <Code className="h-4 w-4 mr-2" /> Web Development
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Web Development Courses</h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Master modern web technologies and frameworks
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ScrollAnimation type="fade-up" delay={100}>
                <CourseCard
                  title="Full Stack Web Development"
                  description="Comprehensive course covering both frontend and backend development with modern JavaScript frameworks."
                  icon={<Code className="h-6 w-6 text-cyan-400" />}
                  duration="16 Weeks"
                  level="Intermediate"
                  price="₹89,999"
                  link="/courses/full-stack-development"
                  slug="full-stack-development"
                  popular={true}
                  image="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                />
              </ScrollAnimation>
              <ScrollAnimation type="fade-up" delay={200}>
                <CourseCard
                  title="React & Next.js Masterclass"
                  description="Deep dive into React and Next.js for building modern, SEO-friendly web applications."
                  icon={<Code className="h-6 w-6 text-purple-400" />}
                  duration="10 Weeks"
                  level="Intermediate"
                  price="₹59,999"
                  link="/courses/react-nextjs"
                  slug="react-nextjs"
                  image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                />
              </ScrollAnimation>
              <ScrollAnimation type="fade-up" delay={300}>
                <CourseCard
                  title="API Development with Node.js"
                  description="Learn to build robust, scalable APIs using Node.js, Express, and MongoDB."
                  icon={<Server className="h-6 w-6 text-cyan-400" />}
                  duration="8 Weeks"
                  level="Intermediate"
                  price="₹49,999"
                  link="/courses/api-development"
                  slug="api-development"
                  image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                />
              </ScrollAnimation>
            </div>
          </div>

          <div className="mt-16 space-y-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 mb-2">
                <Smartphone className="h-4 w-4 mr-2" /> Mobile & Advanced
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Mobile & Advanced Courses</h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Specialized training for app development and advanced technologies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ScrollAnimation type="fade-up" delay={100}>
                <CourseCard
                  title="Cross-Platform App Development"
                  description="Build iOS and Android apps with a single codebase using React Native and Expo."
                  icon={<Smartphone className="h-6 w-6 text-purple-400" />}
                  duration="12 Weeks"
                  level="Intermediate"
                  price="₹69,999"
                  link="/courses/cross-platform-apps"
                  slug="cross-platform-apps"
                  image="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                />
              </ScrollAnimation>
              <ScrollAnimation type="fade-up" delay={200}>
                <CourseCard
                  title="Cloud Architecture & DevOps"
                  description="Learn cloud deployment, CI/CD pipelines, and infrastructure as code with AWS and Azure."
                  icon={<Globe className="h-6 w-6 text-cyan-400" />}
                  duration="14 Weeks"
                  level="Advanced"
                  price="₹89,999"
                  link="/courses/cloud-devops"
                  slug="cloud-devops"
                  popular={true}
                  image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                />
              </ScrollAnimation>
              <ScrollAnimation type="fade-up" delay={300}>
                <CourseCard
                  title="Database Design & Management"
                  description="Master SQL and NoSQL database design, optimization, and management for scalable applications."
                  icon={<Database className="h-6 w-6 text-purple-400" />}
                  duration="8 Weeks"
                  level="Intermediate"
                  price="₹49,999"
                  link="/courses/database-design"
                  slug="database-design"
                  image="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="w-full py-12 md:py-24 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Students in classroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-800/90"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollAnimation type="fade-right">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm text-cyan-300 mb-2">
                  <Award className="h-4 w-4 mr-2" /> Our Advantage
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Why Choose Our Courses?</h2>
                <p className="text-gray-300 md:text-xl">
                  Our courses are designed to provide practical skills that you can immediately apply in real-world
                  scenarios.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 p-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-0.5">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Expert Instructors</h3>
                      <p className="text-gray-300">Learn from professionals with real-world industry experience</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 p-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-0.5">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Hands-on Projects</h3>
                      <p className="text-gray-300">
                        Build a portfolio with real-world projects and practical exercises
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 p-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-0.5">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Small Class Sizes</h3>
                      <p className="text-gray-300">Personalized attention with limited seats per batch</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 p-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-0.5">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Job Placement Assistance</h3>
                      <p className="text-gray-300">
                        Resume review, interview preparation, and networking opportunities
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
            <ScrollAnimation type="fade-left">
              <div className="rounded-lg overflow-hidden border border-slate-700 shadow-xl shadow-purple-500/10 relative">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Students learning in a classroom"
                  className="aspect-video object-cover w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex -space-x-4">
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                        alt="Student"
                        className="w-10 h-10 rounded-full border-2 border-slate-900"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                        alt="Student"
                        className="w-10 h-10 rounded-full border-2 border-slate-900"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                        alt="Student"
                        className="w-10 h-10 rounded-full border-2 border-slate-900"
                      />
                    </div>
                    <div className="text-white text-sm">Join 500+ students who have transformed their careers</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Instructor Profiles */}
      <section className="w-full py-12 md:py-24 bg-slate-900 border-t border-slate-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 mb-2">
              <Users className="h-4 w-4 mr-2" /> Meet Our Faculty
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Expert Instructors</h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Learn from industry professionals with years of real-world experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollAnimation type="fade-up" delay={100}>
              <AnimatedCard className="h-full card-hover-effect">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Instructor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <AnimatedCardContent className="text-center">
                  <h3 className="text-xl font-bold text-white">Raj Verma</h3>
                  <p className="text-cyan-400 font-medium">Cybersecurity Expert</p>
                  <p className="text-gray-400 mt-2">
                    10+ years of experience in ethical hacking and security consulting
                  </p>
                  <div className="flex justify-center space-x-3 mt-4">
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
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <AnimatedCard className="h-full card-hover-effect">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Instructor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <AnimatedCardContent className="text-center">
                  <h3 className="text-xl font-bold text-white">Anshika Sharma</h3>
                  <p className="text-purple-400 font-medium">Full Stack Developer</p>
                  <p className="text-gray-400 mt-2">Expert in React, Node.js, and modern web development practices</p>
                  <div className="flex justify-center space-x-3 mt-4">
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
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <AnimatedCard className="h-full card-hover-effect">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Instructor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <AnimatedCardContent className="text-center">
                  <h3 className="text-xl font-bold text-white">Suditya Kumar</h3>
                  <p className="text-cyan-400 font-medium">Cloud & DevOps Specialist</p>
                  <p className="text-gray-400 mt-2">Specialized in AWS, Azure, and modern DevOps practices</p>
                  <div className="flex justify-center space-x-3 mt-4">
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
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={400}>
              <AnimatedCard className="h-full card-hover-effect">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Instructor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <AnimatedCardContent className="text-center">
                  <h3 className="text-xl font-bold text-white">Ayush Patel</h3>
                  <p className="text-purple-400 font-medium">Mobile App Developer</p>
                  <p className="text-gray-400 mt-2">Specialized in React Native and cross-platform app development</p>
                  <div className="flex justify-center space-x-3 mt-4">
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
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-slate-900 border-t border-slate-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm text-cyan-300 mb-2">
              <span className="mr-1">❓</span> Common Questions
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Find answers to common questions about our courses
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
            <ScrollAnimation type="fade-up" delay={100}>
              <AnimatedCard>
                <AnimatedCardContent>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Do I need prior experience for beginner courses?
                  </h3>
                  <p className="text-gray-300">
                    No, our beginner courses are designed for those with little to no experience. We'll teach you
                    everything you need to know from the ground up.
                  </p>
                </AnimatedCardContent>
              </AnimatedCard>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={150}>
              <AnimatedCard>
                <AnimatedCardContent>
                  <h3 className="text-xl font-bold text-white mb-2">What is the course format?</h3>
                  <p className="text-gray-300">
                    Our courses combine live online sessions, pre-recorded videos, hands-on exercises, and one-on-one
                    mentoring. You'll also have access to our community for peer support.
                  </p>
                </AnimatedCardContent>
              </AnimatedCard>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <AnimatedCard>
                <AnimatedCardContent>
                  <h3 className="text-xl font-bold text-white mb-2">Are there any payment plans available?</h3>
                  <p className="text-gray-300">
                    Yes, we offer flexible payment plans for all our courses. You can pay in installments with no
                    additional interest. Contact our admissions team for details.
                  </p>
                </AnimatedCardContent>
              </AnimatedCard>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={250}>
              <AnimatedCard>
                <AnimatedCardContent>
                  <h3 className="text-xl font-bold text-white mb-2">Do you offer certification?</h3>
                  <p className="text-gray-300">
                    Yes, upon successful completion of the course and projects, you'll receive a TechSpire Solutions
                    certificate that you can add to your resume and LinkedIn profile.
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
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Tech background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-cyan-900/80"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Advance Your Skills?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl text-gray-200">
                Enroll now in one of our expert-led courses and take your career to the next level.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 button-hover-effect"
              >
                <Link href="#courses">
                  Browse Courses <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                <Link href="/contact">Request Information</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
