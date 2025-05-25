import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "TechSpire Solutions | Premium Digital Services",
    template: "%s | TechSpire Solutions",
  },
  description:
    "Premium digital solutions including brand strategy, web development, eCommerce, mobile apps, and digital marketing. Transform your business with our expert team.",
  keywords: [
    "web development",
    "brand strategy",
    "eCommerce development",
    "mobile apps",
    "digital marketing",
    "UI/UX design",
    "TechSpire Solutions",
  ],
  authors: [{ name: "TechSpire Solutions" }],
  creator: "TechSpire Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techspire-solutions.com",
    title: "TechSpire Solutions | Premium Digital Services",
    description:
      "Premium digital solutions including brand strategy, web development, eCommerce, mobile apps, and digital marketing.",
    siteName: "TechSpire Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechSpire Solutions | Premium Digital Services",
    description:
      "Premium digital solutions including brand strategy, web development, eCommerce, mobile apps, and digital marketing.",
    creator: "@techspire",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-900">
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  )
}
