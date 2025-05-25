import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  Clock,
  Shield,
  Code,
  CheckCircle,
  Award,
  Calendar,
  Star,
  Play,
  Download,
  FileText,
  MessageSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedCard, { AnimatedCardHeader, AnimatedCardContent, AnimatedCardFooter } from "@/components/animated_card"
import { ScrollAnimation } from "@/components/scroll-animation"

// Define course data
const courses = [
  {
    slug: "ethical-hacking-fundamentals",
    title: "Ethical Hacking Fundamentals",
    description: "Learn the basics of ethical hacking and penetration testing methodologies with hands-on exercises.",
    icon: <Shield className="h-6 w-6 text-purple-400" />,
    duration: "8 Weeks",
    level: "Beginner",
    price: "₹49,999",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    instructor: {
      name: "Raj Verma",
      title: "Cybersecurity Expert",
      image:
        "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      bio: "10+ years of experience in ethical hacking and security consulting. Certified CEH, CISSP, and OSCP professional with a track record of securing enterprise systems.",
    },
    overview:
      "This comprehensive course introduces you to the world of ethical hacking and cybersecurity. You'll learn the methodologies, tools, and techniques used by security professionals to identify and address vulnerabilities in systems and networks. Through hands-on exercises and real-world scenarios, you'll develop the skills needed to begin a career in cybersecurity.",
    whatYouWillLearn: [
      "Understanding of cybersecurity fundamentals and ethical hacking methodologies",
      "Proficiency in reconnaissance techniques and information gathering",
      "Skills in vulnerability scanning and exploitation",
      "Knowledge of web application security testing",
      "Network security assessment techniques",
      "Social engineering awareness and countermeasures",
      "Basic cryptography and encryption concepts",
      "Report writing and documentation best practices",
    ],
    curriculum: [
      {
        week: 1,
        title: "Introduction to Ethical Hacking",
        topics: [
          "Cybersecurity fundamentals",
          "Legal and ethical considerations",
          "Setting up your hacking lab",
          "Linux basics for hackers",
        ],
      },
      {
        week: 2,
        title: "Reconnaissance and Information Gathering",
        topics: ["OSINT techniques", "Network scanning", "DNS enumeration", "Web reconnaissance"],
      },
      {
        week: 3,
        title: "Vulnerability Scanning",
        topics: [
          "Vulnerability assessment methodology",
          "Using Nessus and OpenVAS",
          "Interpreting scan results",
          "False positive identification",
        ],
      },
      {
        week: 4,
        title: "Web Application Security",
        topics: ["OWASP Top 10 vulnerabilities", "SQL injection", "XSS attacks", "CSRF vulnerabilities"],
      },
      {
        week: 5,
        title: "Network Security",
        topics: [
          "Network protocols and vulnerabilities",
          "Wireshark packet analysis",
          "Man-in-the-middle attacks",
          "Network defense strategies",
        ],
      },
      {
        week: 6,
        title: "System Hacking Techniques",
        topics: ["Password cracking", "Privilege escalation", "Maintaining access", "Covering tracks"],
      },
      {
        week: 7,
        title: "Social Engineering",
        topics: [
          "Social engineering techniques",
          "Phishing campaigns",
          "Physical security",
          "Social engineering countermeasures",
        ],
      },
      {
        week: 8,
        title: "Reporting and Career Paths",
        topics: [
          "Documentation and reporting",
          "Building a portfolio",
          "Certification paths",
          "Career opportunities in cybersecurity",
        ],
      },
    ],
    requirements: [
      "Basic understanding of computer networks",
      "Familiarity with operating systems (Windows, Linux)",
      "Basic knowledge of programming concepts",
      "Personal computer with minimum 8GB RAM and 100GB free disk space",
      "Willingness to learn and practice ethical hacking responsibly",
    ],
    testimonials: [
      {
        name: "Priya Sharma",
        role: "Security Analyst",
        company: "TechDefend Solutions",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        quote:
          "This course provided me with the foundation I needed to start my career in cybersecurity. The hands-on labs were particularly valuable.",
      },
      {
        name: "Vikram Patel",
        role: "Network Administrator",
        company: "Global Systems Inc.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
        quote:
          "The instructor's real-world experience made all the difference. I learned practical skills that I was able to apply immediately in my job.",
      },
    ],
    faqs: [
      {
        question: "Is this course suitable for complete beginners?",
        answer:
          "Yes, this course is designed for beginners with basic computer knowledge. We start with the fundamentals and gradually progress to more advanced topics.",
      },
      {
        question: "Will I receive a certificate upon completion?",
        answer:
          "Yes, you will receive a certificate of completion that you can add to your resume and LinkedIn profile.",
      },
      {
        question: "Are there any prerequisites for this course?",
        answer:
          "Basic knowledge of computer networks and operating systems is recommended. Some familiarity with command line interfaces will be helpful but not required.",
      },
      {
        question: "How much time should I dedicate to this course each week?",
        answer:
          "We recommend allocating 8-10 hours per week for lectures, hands-on labs, and assignments to get the most out of the course.",
      },
    ],
  },
  {
    slug: "advanced-penetration-testing",
    title: "Advanced Penetration Testing",
    description: "Master advanced penetration testing techniques and tools for comprehensive security assessments.",
    icon: <Shield className="h-6 w-6 text-cyan-400" />,
    duration: "10 Weeks",
    level: "Advanced",
    price: "₹79,999",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    // Additional details would be filled in similarly to the first course
  },
  {
    slug: "full-stack-development",
    title: "Full Stack Web Development",
    description:
      "Comprehensive course covering both frontend and backend development with modern JavaScript frameworks.",
    icon: <Code className="h-6 w-6 text-cyan-400" />,
    duration: "16 Weeks",
    level: "Intermediate",
    price: "₹89,999",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    // Additional details would be filled in similarly to the first course
  },
  // Add more courses as needed
]

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const course = courses.find((course) => course.slug === params.slug)

  if (!course) {
    return {
      title: "Course Not Found | TechSpire Solutions",
      description: "The requested course could not be found.",
    }
  }

  return {
    title: `${course.title} | TechSpire Solutions Courses`,
    description: course.description,
  }
}

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = courses.find((course) => course.slug === params.slug)

  if (!course) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 bg-gradient-to-r from-slate-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-slate-900/90"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <ScrollAnimation type="fade-right">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 backdrop-blur-sm">
                  <Clock className="h-4 w-4 mr-2" /> {course.duration} • {course.level}
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  {course.title}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">{course.description}</p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
                    {course.icon}
                    <span className="text-gray-300">Expert-Led Training</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
                    <Award className="h-5 w-5 text-cyan-400" />
                    <span className="text-gray-300">Certificate Included</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 button-hover-effect"
                  >
                    <Link
                      href={`/payment?service=${encodeURIComponent(course.title)}&amount=${course.price.replace(/[^\d]/g, "")}`}
                    >
                      Enroll Now for {course.price}
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white transition-all duration-300"
                  >
                    Download Syllabus
                  </Button>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-left" delay={200}>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-30"></div>
                <div className="relative rounded-lg overflow-hidden border border-slate-700 shadow-xl shadow-purple-500/10">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-full object-cover aspect-video"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-slate-800/80 backdrop-blur-sm rounded-full">{course.icon}</div>
                      <div>
                        <div className="text-sm text-gray-300">Course by</div>
                        <div className="text-white font-bold">{course.instructor?.name || "TechSpire Academy"}</div>
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

      {/* Course Overview */}
      <section className="w-full py-16 md:py-24 bg-slate-900 border-t border-slate-800 relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-12 lg:grid-cols-3 items-start">
            <div className="lg:col-span-2">
              <ScrollAnimation type="fade-up">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Course Overview</h2>
                    <p className="text-gray-300 leading-relaxed">{course.overview}</p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">What You Will Learn</h2>
                    <ul className="space-y-3">
                      {course.whatYouWillLearn?.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="mr-3 p-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full mt-1">
                            <CheckCircle className="h-4 w-4 text-cyan-400" />
                          </div>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Course Curriculum</h2>
                    <div className="space-y-4">
                      {course.curriculum?.map((week, index) => (
                        <AnimatedCard key={index} className="border-slate-700 bg-slate-800/50">
                          <AnimatedCardHeader>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                                  {week.week}
                                </div>
                                <h3 className="text-lg font-semibold text-white">{week.title}</h3>
                              </div>
                              <div className="text-sm text-gray-400">
                                <Calendar className="h-4 w-4 inline mr-1" /> Week {week.week}
                              </div>
                            </div>
                          </AnimatedCardHeader>
                          <AnimatedCardContent>
                            <ul className="space-y-2">
                              {week.topics.map((topic, topicIndex) => (
                                <li key={topicIndex} className="flex items-start">
                                  <div className="mr-3 p-1 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full mt-0.5">
                                    <Play className="h-3 w-3 text-purple-400" />
                                  </div>
                                  <span className="text-gray-300">{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </AnimatedCardContent>
                        </AnimatedCard>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Requirements</h2>
                    <ul className="space-y-3">
                      {course.requirements?.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="mr-3 p-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full mt-1">
                            <CheckCircle className="h-4 w-4 text-purple-400" />
                          </div>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <div>
              <ScrollAnimation type="fade-left">
                <div className="sticky top-24 space-y-8">
                  <AnimatedCard className="border-slate-700 bg-slate-800/50">
                    <AnimatedCardHeader>
                      <h3 className="text-xl font-bold text-white">Course Details</h3>
                    </AnimatedCardHeader>
                    <AnimatedCardContent>
                      <ul className="space-y-4">
                        <li className="flex justify-between">
                          <span className="text-gray-400">Duration:</span>
                          <span className="text-white font-medium">{course.duration}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-400">Level:</span>
                          <span className="text-white font-medium">{course.level}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-400">Lectures:</span>
                          <span className="text-white font-medium">
                            {course.curriculum?.reduce((acc, week) => acc + week.topics.length, 0) || "40+"}
                          </span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-400">Language:</span>
                          <span className="text-white font-medium">English</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-400">Certificate:</span>
                          <span className="text-white font-medium">Yes</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-400">Access:</span>
                          <span className="text-white font-medium">Lifetime</span>
                        </li>
                      </ul>
                    </AnimatedCardContent>
                    <AnimatedCardFooter>
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-md shadow-purple-500/20 transition-all duration-300 button-hover-effect">
                        <Link
                          href={`/payment?service=${encodeURIComponent(course.title)}&amount=${course.price.replace(/[^\d]/g, "")}`}
                        >
                          Enroll Now for {course.price}
                        </Link>
                      </Button>
                    </AnimatedCardFooter>
                  </AnimatedCard>

                  <AnimatedCard className="border-slate-700 bg-slate-800/50">
                    <AnimatedCardHeader>
                      <h3 className="text-xl font-bold text-white">Meet Your Instructor</h3>
                    </AnimatedCardHeader>
                    <AnimatedCardContent>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500/30">
                          <img
                            src={
                              course.instructor?.image ||
                              "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" ||
                              "/placeholder.svg" ||
                              "/placeholder.svg"
                            }
                            alt={course.instructor?.name || "Instructor"}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{course.instructor?.name || "Expert Instructor"}</h4>
                          <p className="text-sm text-purple-400">
                            {course.instructor?.title || "Industry Professional"}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm">
                        {course.instructor?.bio ||
                          "An experienced professional with extensive knowledge in the field, dedicated to helping students master practical skills through hands-on learning."}
                      </p>
                    </AnimatedCardContent>
                  </AnimatedCard>

                  <AnimatedCard className="border-slate-700 bg-slate-800/50">
                    <AnimatedCardHeader>
                      <h3 className="text-xl font-bold text-white">Resources Included</h3>
                    </AnimatedCardHeader>
                    <AnimatedCardContent>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <div className="mr-3 p-1.5 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full">
                            <Play className="h-4 w-4 text-purple-400" />
                          </div>
                          <span className="text-gray-300">40+ Video Lectures</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-3 p-1.5 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full">
                            <Download className="h-4 w-4 text-cyan-400" />
                          </div>
                          <span className="text-gray-300">Downloadable Resources</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-3 p-1.5 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full">
                            <FileText className="h-4 w-4 text-purple-400" />
                          </div>
                          <span className="text-gray-300">Practice Exercises</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-3 p-1.5 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full">
                            <MessageSquare className="h-4 w-4 text-cyan-400" />
                          </div>
                          <span className="text-gray-300">Community Support</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-3 p-1.5 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full">
                            <Award className="h-4 w-4 text-purple-400" />
                          </div>
                          <span className="text-gray-300">Completion Certificate</span>
                        </li>
                      </ul>
                    </AnimatedCardContent>
                  </AnimatedCard>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {course.testimonials && course.testimonials.length > 0 && (
        <section className="w-full py-16 md:py-24 bg-gradient-to-r from-slate-900 via-purple-900/20 to-slate-900 border-t border-slate-800 relative">
          <div className="container px-4 md:px-6 relative">
            <ScrollAnimation type="fade-up">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 mb-2">
                  <Star className="h-4 w-4 mr-2" /> Student Feedback
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                  What Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    Students Say
                  </span>
                </h2>
              </div>
            </ScrollAnimation>

            <div className="grid gap-8 md:grid-cols-2 mt-8">
              {course.testimonials.map((testimonial, index) => (
                <ScrollAnimation key={index} type="fade-up" delay={index * 100}>
                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <AnimatedCard className="relative h-full">
                      <AnimatedCardContent className="pt-6">
                        <div className="flex items-center mb-4">
                          <div className="mr-4 w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500/30 group-hover:border-purple-500/70 transition-colors duration-300">
                            <img
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-semibold text-white">{testimonial.name}</p>
                            <p className="text-sm text-gray-400">
                              {testimonial.role}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                        <div className="mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="inline-block text-yellow-400 mr-1 h-4 w-4" fill="currentColor" />
                          ))}
                        </div>
                        <p className="italic text-gray-300">{testimonial.quote}</p>
                      </AnimatedCardContent>
                    </AnimatedCard>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {course.faqs && course.faqs.length > 0 && (
        <section className="w-full py-16 md:py-24 bg-slate-900 border-t border-slate-800">
          <div className="container px-4 md:px-6">
            <ScrollAnimation type="fade-up">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm text-cyan-300 mb-2">
                  <span className="mr-1">❓</span> Common Questions
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                  Frequently Asked Questions
                </h2>
              </div>
            </ScrollAnimation>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
              {course.faqs.map((faq, index) => (
                <ScrollAnimation key={index} type="fade-up" delay={index * 50}>
                  <AnimatedCard>
                    <AnimatedCardContent>
                      <h3 className="text-xl font-bold text-white mb-2">{faq.question}</h3>
                      <p className="text-gray-300">{faq.answer}</p>
                    </AnimatedCardContent>
                  </AnimatedCard>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-cyan-900/80"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your Learning Journey?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl text-gray-200">
                Enroll now and take the first step towards mastering {course.title}.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 button-hover-effect"
              >
                <Link
                  href={`/payment?service=${encodeURIComponent(course.title)}&amount=${course.price.replace(/[^\d]/g, "")}`}
                >
                  Enroll Now for {course.price}
                </Link>
              </Button>
              <Button
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
