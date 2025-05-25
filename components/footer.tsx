import Link from "next/link"
import { Logo } from "@/components/logo"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Instagram, Twitter, Linkedin, Send } from "lucide-react"

const socialLinks = {
  telegram: "https://t.me/grandbrand",
  instagram: "https://www.instagram.com/grandbrand/",
  twitter: "https://x.com/grandbrand",
  linkedin: "https://www.linkedin.com/company/grand-brand/",
}

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <ScrollAnimation type="fade-up" delay={100}>
            <div className="space-y-4">
              <Logo size="sm" />
              <p className="text-sm text-gray-500">
                Building powerful digital experiences that help modern brands grow since 2020.
              </p>
              <div className="flex space-x-4">
                <a
                  href={socialLinks.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-purple-400 transition-colors"
                  aria-label="Telegram Channel"
                >
                  <Send className="h-5 w-5" />
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-cyan-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-purple-400 transition-colors"
                  aria-label="Twitter (X)"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-cyan-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation type="fade-up" delay={200}>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/brand-strategy"
                    className="text-gray-500 hover:text-purple-400 transition-colors"
                  >
                    Brand Strategy & Identity
                  </Link>
                </li>
                <li>
                  <Link href="/services/website-design" className="text-gray-500 hover:text-cyan-400 transition-colors">
                    Website Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/web-development"
                    className="text-gray-500 hover:text-purple-400 transition-colors"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ecommerce-development"
                    className="text-gray-500 hover:text-cyan-400 transition-colors"
                  >
                    eCommerce Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/app-development"
                    className="text-gray-500 hover:text-purple-400 transition-colors"
                  >
                    Mobile & Web Apps
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/digital-marketing"
                    className="text-gray-500 hover:text-cyan-400 transition-colors"
                  >
                    Digital Marketing
                  </Link>
                </li>
              </ul>
            </div>
          </ScrollAnimation>

          <ScrollAnimation type="fade-up" delay={300}>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-500 hover:text-purple-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-gray-500 hover:text-cyan-400 transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-500 hover:text-purple-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/reviews" className="text-gray-500 hover:text-cyan-400 transition-colors">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-500 hover:text-purple-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </ScrollAnimation>

          <ScrollAnimation type="fade-up" delay={400}>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
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
                    className="text-purple-400 mr-2 mt-1"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-gray-500">123 Design Street, New Delhi, India 110001</span>
                </li>
                <li className="flex items-start">
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
                    className="text-cyan-400 mr-2 mt-1"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="text-gray-500">+91 9219967205</span>
                </li>
                <li className="flex items-start">
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
                    className="text-purple-400 mr-2 mt-1"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span className="text-gray-500">hello@grandbrand.com</span>
                </li>
              </ul>
            </div>
          </ScrollAnimation>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-gray-500">
          <ScrollAnimation type="fade-up" delay={500}>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>© {new Date().getFullYear()} Grand Brand. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy" className="hover:text-purple-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-purple-400 transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </footer>
  )
}
