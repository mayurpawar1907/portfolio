import type { Metadata } from "next"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { GravitationalText } from "@/components/gravitational-text"
import AnimatedCard, { AnimatedCardContent } from "@/components/animated_card"

export const metadata: Metadata = {
  title: "Contact Us | Grand Brand",
  description: "Get in touch with our team for inquiries about our services, partnerships, or to request a quote.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-slate-950 to-slate-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <GravitationalText
                text="Contact Us"
                textClassName="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
              />
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Have a question or ready to start your project? Get in touch with our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="w-full py-12 md:py-24 bg-slate-900 border-b border-slate-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6 text-white">Get In Touch</h2>
                <p className="text-gray-300 md:text-lg mb-8">
                  We'd love to hear from you. Fill out the form or contact us directly using the information below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Our Location</h3>
                    <p className="text-gray-300">123 Design Street, New Delhi, India 110001</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full">
                    <Phone className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Phone</h3>
                    <p className="text-gray-300">+91 9219967205</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full">
                    <Mail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Email</h3>
                    <p className="text-gray-300">hello@grandbrand.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full">
                    <Clock className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Business Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-300">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="font-bold text-xl mb-4 text-white">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="p-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full hover:from-purple-500/20 hover:to-cyan-500/20 transition-colors"
                  >
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
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full hover:from-purple-500/20 hover:to-cyan-500/20 transition-colors"
                  >
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
                      className="text-cyan-400"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full hover:from-purple-500/20 hover:to-cyan-500/20 transition-colors"
                  >
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
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full hover:from-purple-500/20 hover:to-cyan-500/20 transition-colors"
                  >
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
                      className="text-cyan-400"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 bg-slate-800 border-b border-slate-700">
        <div className="container px-4 md:px-6">
          <div className="rounded-lg overflow-hidden h-[400px] w-full border border-slate-700 shadow-xl shadow-purple-500/10">
            {/* Placeholder for map - in a real implementation, you would use Google Maps or another mapping service */}
            <div className="w-full h-full bg-slate-900/50 flex items-center justify-center">
              <p className="text-gray-300">Interactive Map Would Be Displayed Here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-lg">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <AnimatedCard>
                <AnimatedCardContent className="p-6">
                  <h3 className="text-xl font-bold text-white">What is your typical project timeline?</h3>
                  <p className="text-gray-300">
                    Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a
                    complex application could take several months. We'll provide a detailed timeline during our initial
                    consultation.
                  </p>
                </AnimatedCardContent>
              </AnimatedCard>

              <AnimatedCard>
                <AnimatedCardContent className="p-6">
                  <h3 className="text-xl font-bold text-white">Do you offer maintenance services?</h3>
                  <p className="text-gray-300">
                    Yes, we offer ongoing maintenance and support packages for all our services. These can be tailored
                    to your specific needs and budget.
                  </p>
                </AnimatedCardContent>
              </AnimatedCard>

              <AnimatedCard>
                <AnimatedCardContent className="p-6">
                  <h3 className="text-xl font-bold text-white">What technologies do you work with?</h3>
                  <p className="text-gray-300">
                    We work with a wide range of technologies including React, Next.js, Node.js, Python, Flutter, React
                    Native, and many more. Our team stays up-to-date with the latest advancements in the tech industry.
                  </p>
                </AnimatedCardContent>
              </AnimatedCard>
            </div>

            <div className="space-y-4">
              <AnimatedCard>
                <AnimatedCardContent className="p-6">
                  <h3 className="text-xl font-bold text-white">How much do your services cost?</h3>
                  <p className="text-gray-300">
                    Our pricing is project-based and depends on the scope, complexity, and timeline. We provide detailed
                    quotes after understanding your requirements during the initial consultation.
                  </p>
                </AnimatedCardContent>
              </AnimatedCard>

              <AnimatedCard>
                <AnimatedCardContent className="p-6">
                  <h3 className="text-xl font-bold text-white">Do you work with clients internationally?</h3>
                  <p className="text-gray-300">
                    Yes, we work with clients globally. Our team is experienced in remote collaboration and we use
                    various tools to ensure smooth communication regardless of time zones.
                  </p>
                </AnimatedCardContent>
              </AnimatedCard>

              <AnimatedCard>
                <AnimatedCardContent className="p-6">
                  <h3 className="text-xl font-bold text-white">How do I get started with your services?</h3>
                  <p className="text-gray-300">
                    Simply fill out the contact form on this page or reach out to us via phone or email. We'll schedule
                    an initial consultation to discuss your needs and how we can help.
                  </p>
                </AnimatedCardContent>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
