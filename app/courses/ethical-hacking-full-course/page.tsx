import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, Shield, Calendar, Users, BookOpen, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import TestimonialCard from "@/components/testimonial-card"

export const metadata = {
  title: "Ethical Hacking Full Course | Grand Brand",
  description:
    "Comprehensive ethical hacking training covering penetration testing methodologies with hands-on exercises.",
}

export default function EthicalHackingFullCoursePage() {
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
                  <span className="animate-pulse mr-2">●</span> Cybersecurity Course
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    Ethical Hacking
                  </span>{" "}
                  Full Course
                </h1>
                <p className="text-xl text-gray-300 max-w-[600px] leading-relaxed">
                  Master the art of ethical hacking with our comprehensive course covering penetration testing
                  methodologies and hands-on exercises.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center space-x-3 bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border border-slate-700/50">
                    <Clock className="h-5 w-5 text-purple-400" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-300">Duration</h3>
                      <p className="text-white font-semibold">8 Weeks</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border border-slate-700/50">
                    <BookOpen className="h-5 w-5 text-cyan-400" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-300">Level</h3>
                      <p className="text-white font-semibold">Beginner to Advanced</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border border-slate-700/50">
                    <Calendar className="h-5 w-5 text-purple-400" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-300">Next Batch</h3>
                      <p className="text-white font-semibold">April 15, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-slate-800/50 backdrop-blur-sm p-3 rounded-lg border border-slate-700/50">
                    <Users className="h-5 w-5 text-cyan-400" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-300">Class Size</h3>
                      <p className="text-white font-semibold">Limited to 20 Students</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-5 pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 w-full sm:w-auto shadow-lg shadow-purple-700/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-700/30 text-base"
                  >
                    <Link href="#enroll" className="flex items-center">
                      Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="bg-transparent text-white border-white/20 hover:bg-white/10 w-full sm:w-auto backdrop-blur-sm text-base"
                  >
                    <Link href="#curriculum">View Curriculum</Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-left" delay={200}>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-30"></div>
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/10 backdrop-blur-sm bg-slate-900/50">
                  <img
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Ethical Hacking Course"
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-900/30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4 px-6">
                      <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full shadow-lg shadow-purple-500/30">
                        <Shield className="h-10 w-10 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-white">Special Offer</h2>
                      <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                        ₹14,999
                      </div>
                      <p className="text-gray-300">Limited time offer - 50% off regular price</p>
                      <div className="flex justify-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-300">4.9/5 from 250+ students</p>
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

      {/* Course Overview */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-b from-slate-950 to-slate-900 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
        <div className="container px-4 md:px-6 relative">
          <ScrollAnimation type="fade-up">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm text-cyan-300 mb-2">
                <span className="mr-1">✦</span> Course Overview
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                What You'll{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Learn
                </span>
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Our comprehensive ethical hacking course covers everything you need to become a skilled security
                professional
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
                    Penetration Testing Fundamentals
                  </h3>
                  <p className="text-gray-400 mb-4 flex-grow">
                    Learn the core concepts and methodologies of penetration testing and ethical hacking.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Reconnaissance techniques</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Vulnerability scanning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Exploitation frameworks</span>
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
                    <Shield className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    Web Application Security
                  </h3>
                  <p className="text-gray-400 mb-4 flex-grow">
                    Master the techniques to identify and exploit vulnerabilities in web applications.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">OWASP Top 10 vulnerabilities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">SQL injection techniques</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Cross-site scripting (XSS)</span>
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
                    <Shield className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    Network Security
                  </h3>
                  <p className="text-gray-400 mb-4 flex-grow">
                    Learn to identify and exploit vulnerabilities in network infrastructure.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Network scanning techniques</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Wireless network security</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Firewall bypass techniques</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
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
                <Users className="h-4 w-4 mr-2" /> Student Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                What Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Students Say
                </span>
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Hear from our graduates about their experience with our ethical hacking course
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <ScrollAnimation type="fade-up" delay={100}>
              <TestimonialCard
                quote="This course completely transformed my career. I went from knowing almost nothing about cybersecurity to landing a job as a security analyst within 3 months of completing the course."
                author="Rahul Sharma"
                company="Security Analyst, TechDefend"
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <TestimonialCard
                quote="The hands-on approach of this course is what sets it apart. The instructors are incredibly knowledgeable and the lab exercises gave me practical experience that I use daily in my job."
                author="Priya Patel"
                company="Cybersecurity Consultant, SecureNet"
                image="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              />
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={300}>
              <TestimonialCard
                quote="Grand Brand's ethical hacking course exceeded my expectations. The curriculum is comprehensive and the support from instructors is outstanding. Highly recommended!"
                author="Amit Kumar"
                company="Penetration Tester, CyberGuard"
                image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section id="enroll" className="w-full py-20 md:py-28 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.1),transparent_40%)]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <ScrollAnimation type="fade-up">
            <div className="flex flex-col items-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm text-cyan-300 mb-2">
                <Star className="h-4 w-4 mr-2" /> Limited Time Offer
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Enroll Now and{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Save 50%
                </span>
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Start your journey to becoming an ethical hacking expert today
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            <ScrollAnimation type="fade-up" delay={100}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-purple-600/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex flex-col p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/10 h-full">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                      What's Included
                    </h3>
                  </div>
                  <ul className="space-y-3 mb-6 flex-grow">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">8 weeks of comprehensive training</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">24 live online sessions (3 per week)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Hands-on lab exercises</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Course materials and resources</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Access to private community forum</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Certificate of completion</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">3 months post-course support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-up" delay={200}>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex flex-col p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/20 h-full">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                      Pricing
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400 line-through">₹29,999</span>
                      <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                        50% OFF
                      </span>
                    </div>
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mt-2">
                      ₹14,999
                    </div>
                    <p className="text-gray-400 mt-2">Limited time offer - Next batch starts April 15, 2025</p>
                  </div>
                  <div className="space-y-4 mt-4">
                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-md shadow-purple-500/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/30"
                    >
                      <Link
                        href="/contact?course=ethical-hacking-full-course"
                        className="flex items-center justify-center"
                      >
                        Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full bg-transparent text-white border-white/20 hover:bg-white/10"
                    >
                      <Link href="/contact">Request More Information</Link>
                    </Button>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-gray-400 text-sm">Secure payment options available</p>
                    <div className="flex justify-center space-x-2 mt-2">
                      <div className="w-8 h-5 bg-gray-700 rounded"></div>
                      <div className="w-8 h-5 bg-gray-700 rounded"></div>
                      <div className="w-8 h-5 bg-gray-700 rounded"></div>
                      <div className="w-8 h-5 bg-gray-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  )
}
