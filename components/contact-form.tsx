"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { User, Mail, Phone, FileText, MessageSquare } from "lucide-react"

export default function ContactForm() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    })

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })

    setIsSubmitting(false)
  }

  return (
    <div className="p-6 bg-slate-800/80 backdrop-blur-sm rounded-xl">
      <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-200 flex items-center">
              <User className="h-4 w-4 mr-2 text-purple-400" />
              Full Name
            </label>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-purple-600/10 rounded-md blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleChange}
                className="relative bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/20 transition-all duration-300"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-200 flex items-center">
              <Mail className="h-4 w-4 mr-2 text-cyan-400" />
              Email
            </label>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600/30 to-cyan-600/10 rounded-md blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="relative bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-gray-200 flex items-center">
              <Phone className="h-4 w-4 mr-2 text-purple-400" />
              Phone Number
            </label>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-purple-600/10 rounded-md blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <Input
                id="phone"
                name="phone"
                placeholder="+91 9219967205"
                value={formData.phone}
                onChange={handleChange}
                className="relative bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/20 transition-all duration-300"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-gray-200 flex items-center">
              <FileText className="h-4 w-4 mr-2 text-cyan-400" />
              Subject
            </label>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600/30 to-cyan-600/10 rounded-md blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <Input
                id="subject"
                name="subject"
                placeholder="Project Inquiry"
                required
                value={formData.subject}
                onChange={handleChange}
                className="relative bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300"
              />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-gray-200 flex items-center">
            <MessageSquare className="h-4 w-4 mr-2 text-purple-400" />
            Message
          </label>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 rounded-md blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your project..."
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="relative bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/20 transition-all duration-300"
            />
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-md blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <Button
            type="submit"
            className="relative w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 shadow-lg shadow-purple-700/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-700/30"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </div>
            ) : (
              "Send Message"
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
