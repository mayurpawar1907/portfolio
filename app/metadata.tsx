import type { Metadata } from "next"

export const defaultMetadata: Metadata = {
  title: {
    default: "TechSpire Solutions | Professional Tech Services",
    template: "%s | TechSpire Solutions",
  },
  description:
    "Professional tech services including web development, app creation, API solutions, cybersecurity, SEO, and digital marketing.",
  keywords: [
    "tech services",
    "web development",
    "app development",
    "cybersecurity",
    "ethical hacking",
    "SEO",
    "digital marketing",
    "video editing",
    "social media",
    "IT solutions",
    "tech courses",
    "India tech company",
  ],
  authors: [{ name: "TechSpire Solutions" }],
  creator: "TechSpire Solutions",
  publisher: "TechSpire Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://techspire.com",
    title: "TechSpire Solutions | Professional Tech Services",
    description:
      "Professional tech services including web development, app creation, API solutions, cybersecurity, SEO, and digital marketing.",
    siteName: "TechSpire Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechSpire Solutions | Professional Tech Services",
    description:
      "Professional tech services including web development, app creation, API solutions, cybersecurity, SEO, and digital marketing.",
    creator: "@techspire",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}
