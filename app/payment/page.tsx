"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowRight, Copy, Check, Upload, CreditCard, Bitcoin, DollarSign, Shield, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScrollAnimation } from "@/components/scroll-animation"
import { PageTransition } from "@/components/page-transition"

export default function PaymentPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const serviceName = searchParams.get("service") || "Service"
  const amount = searchParams.get("amount") || "0"

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("upi")
  const [transactionId, setTransactionId] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [copied, setCopied] = useState<{ [key: string]: boolean }>({
    upi: false,
    bitcoin: false,
    usdt: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({})

  // Payment details
  const paymentDetails = {
    upi: "verma.71@superyes",
    bitcoin: "3HHn57oBNNEM2t2xRj7PyxmJ6RFka6ifYR",
    usdt: "TAmTHkR7C3CdUUyzPWcUChUp3GmobccVCG", // TRC20
  }

  useEffect(() => {
    // Clean up the preview URL when component unmounts
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl)
      }
    }
  }, [previewUrl])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]
      setFile(selectedFile)

      // Create a preview URL for the file
      const fileUrl = URL.createObjectURL(selectedFile)
      setPreviewUrl(fileUrl)
    }
  }

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied({ ...copied, [type]: true })

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopied({ ...copied, [type]: false })
      }, 2000)
    })
  }

  const validateForm = () => {
    const errors: { [key: string]: string } = {}

    if (!name.trim()) errors.name = "Name is required"
    if (!phone.trim()) errors.phone = "Phone number is required"
    if (phone.trim() && !/^[0-9]{10}$/.test(phone.replace(/\D/g, ""))) {
      errors.phone = "Please enter a valid 10-digit phone number"
    }
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "Please enter a valid email address"
    }
    if (!transactionId.trim() && !file) {
      errors.payment = "Please provide either a transaction ID or upload payment proof"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      // Construct WhatsApp message
      const message = `Hello, I've made a payment for ${serviceName} (₹${amount}).\n\nName: ${name}\nPhone: ${phone}${email ? `\nEmail: ${email}` : ""}\nPayment Method: ${paymentMethod.toUpperCase()}${transactionId ? `\nTransaction ID: ${transactionId}` : "\nPayment proof uploaded"}`

      // Redirect to WhatsApp
      const whatsappUrl = `https://wa.me/919219967205?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, "_blank")

      setIsSubmitting(false)

      // Optionally redirect back to services page after a delay
      setTimeout(() => {
        router.push("/services")
      }, 1000)
    }, 1500)
  }

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-r from-slate-950 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
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
            <ScrollAnimation type="fade-up">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 mb-2">
                  <CreditCard className="h-4 w-4 mr-2" /> Secure Payment
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Complete Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    Payment
                  </span>
                </h1>
                <p className="mt-4 text-gray-300 md:text-lg max-w-3xl mx-auto">
                  You're just one step away from accessing our premium {serviceName.toLowerCase()} services
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid gap-8 lg:grid-cols-2 items-start">
              <ScrollAnimation type="fade-right">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 md:p-8 shadow-lg">
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-white mb-2">Order Summary</h2>
                    <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                      <span className="text-gray-300">Service</span>
                      <span className="font-medium text-white">{serviceName}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                      <span className="text-gray-300">Amount</span>
                      <span className="font-medium text-white text-xl">₹{amount}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-white mb-4">Payment Options</h2>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                      <div className="flex items-center space-x-2 bg-slate-900/50 p-4 rounded-lg border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
                        <RadioGroupItem value="upi" id="upi" className="text-purple-500" />
                        <Label htmlFor="upi" className="flex-1 cursor-pointer">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                                <CreditCard className="h-4 w-4 text-purple-400" />
                              </div>
                              <span className="font-medium text-white">UPI</span>
                            </div>
                            <span className="text-sm text-gray-400">Instant</span>
                          </div>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2 bg-slate-900/50 p-4 rounded-lg border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
                        <RadioGroupItem value="bitcoin" id="bitcoin" className="text-purple-500" />
                        <Label htmlFor="bitcoin" className="flex-1 cursor-pointer">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                                <Bitcoin className="h-4 w-4 text-purple-400" />
                              </div>
                              <span className="font-medium text-white">Bitcoin</span>
                            </div>
                            <span className="text-sm text-gray-400">Crypto</span>
                          </div>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2 bg-slate-900/50 p-4 rounded-lg border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
                        <RadioGroupItem value="usdt" id="usdt" className="text-purple-500" />
                        <Label htmlFor="usdt" className="flex-1 cursor-pointer">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                                <DollarSign className="h-4 w-4 text-purple-400" />
                              </div>
                              <span className="font-medium text-white">USDT (TRC20)</span>
                            </div>
                            <span className="text-sm text-gray-400">Crypto</span>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Payment Details</h3>

                    {paymentMethod === "upi" && (
                      <div className="bg-slate-900/70 p-4 rounded-lg border border-slate-700/50">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300">UPI ID:</span>
                          <div className="flex items-center">
                            <span className="text-white font-medium mr-2">{paymentDetails.upi}</span>
                            <button
                              onClick={() => copyToClipboard(paymentDetails.upi, "upi")}
                              className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
                            >
                              {copied.upi ? (
                                <Check className="h-4 w-4 text-green-400" />
                              ) : (
                                <Copy className="h-4 w-4 text-gray-400" />
                              )}
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-center mt-4">
                          <div className="bg-white p-3 rounded-lg">
                            <div className="text-center text-black font-medium mb-2">Scan to Pay</div>
                            <div className="w-48 h-48 bg-gray-200 rounded-md flex items-center justify-center">
                              {/* This would be a QR code in production */}
                              <div className="text-xs text-gray-500 text-center p-2">
                                UPI QR Code
                                <br />
                                for {paymentDetails.upi}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === "bitcoin" && (
                      <div className="bg-slate-900/70 p-4 rounded-lg border border-slate-700/50">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300">Bitcoin Address:</span>
                          <div className="flex items-center">
                            <span className="text-white font-medium mr-2 text-xs md:text-sm truncate max-w-[150px] md:max-w-[200px]">
                              {paymentDetails.bitcoin}
                            </span>
                            <button
                              onClick={() => copyToClipboard(paymentDetails.bitcoin, "bitcoin")}
                              className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
                            >
                              {copied.bitcoin ? (
                                <Check className="h-4 w-4 text-green-400" />
                              ) : (
                                <Copy className="h-4 w-4 text-gray-400" />
                              )}
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-center mt-4">
                          <div className="bg-white p-3 rounded-lg">
                            <div className="text-center text-black font-medium mb-2">Scan to Pay</div>
                            <div className="w-48 h-48 bg-gray-200 rounded-md flex items-center justify-center">
                              {/* This would be a QR code in production */}
                              <div className="text-xs text-gray-500 text-center p-2">
                                Bitcoin QR Code
                                <br />
                                for {paymentDetails.bitcoin.substring(0, 10)}...
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === "usdt" && (
                      <div className="bg-slate-900/70 p-4 rounded-lg border border-slate-700/50">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300">USDT Address (TRC20):</span>
                          <div className="flex items-center">
                            <span className="text-white font-medium mr-2 text-xs md:text-sm truncate max-w-[150px] md:max-w-[200px]">
                              {paymentDetails.usdt}
                            </span>
                            <button
                              onClick={() => copyToClipboard(paymentDetails.usdt, "usdt")}
                              className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
                            >
                              {copied.usdt ? (
                                <Check className="h-4 w-4 text-green-400" />
                              ) : (
                                <Copy className="h-4 w-4 text-gray-400" />
                              )}
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-center mt-4">
                          <div className="bg-white p-3 rounded-lg">
                            <div className="text-center text-black font-medium mb-2">Scan to Pay</div>
                            <div className="w-48 h-48 bg-gray-200 rounded-md flex items-center justify-center">
                              {/* This would be a QR code in production */}
                              <div className="text-xs text-gray-500 text-center p-2">
                                USDT QR Code
                                <br />
                                for {paymentDetails.usdt.substring(0, 10)}...
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center p-4 bg-amber-900/20 border border-amber-500/30 rounded-lg mb-6">
                    <AlertCircle className="h-5 w-5 text-amber-400 mr-3 flex-shrink-0" />
                    <p className="text-sm text-amber-200">
                      After making the payment, please provide the transaction ID or upload a screenshot of the payment
                      confirmation below.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation type="fade-left">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 md:p-8 shadow-lg">
                  <h2 className="text-xl font-bold text-white mb-6">Your Information</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your full name"
                        className="bg-slate-900/70 border-slate-700 text-white placeholder:text-gray-500 focus:border-purple-500"
                      />
                      {formErrors.name && <p className="text-red-400 text-sm mt-1">{formErrors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number"
                        className="bg-slate-900/70 border-slate-700 text-white placeholder:text-gray-500 focus:border-purple-500"
                      />
                      {formErrors.phone && <p className="text-red-400 text-sm mt-1">{formErrors.phone}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email Address (Optional)
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="bg-slate-900/70 border-slate-700 text-white placeholder:text-gray-500 focus:border-purple-500"
                      />
                      {formErrors.email && <p className="text-red-400 text-sm mt-1">{formErrors.email}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="transactionId" className="text-white">
                        Transaction ID
                      </Label>
                      <Input
                        id="transactionId"
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                        placeholder="Enter your transaction ID"
                        className="bg-slate-900/70 border-slate-700 text-white placeholder:text-gray-500 focus:border-purple-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-white">Or Upload Payment Proof</Label>
                      <div className="border-2 border-dashed border-slate-700 rounded-lg p-4 text-center hover:border-purple-500/50 transition-colors">
                        <input
                          type="file"
                          id="payment-proof"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="hidden"
                        />

                        {previewUrl ? (
                          <div className="space-y-3">
                            <div className="relative w-full h-40 rounded-md overflow-hidden">
                              <img
                                src={previewUrl || "/placeholder.svg"}
                                alt="Payment proof"
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setFile(null)
                                setPreviewUrl(null)
                              }}
                              className="bg-transparent text-white border-white/30 hover:bg-white/10"
                            >
                              Remove
                            </Button>
                          </div>
                        ) : (
                          <label htmlFor="payment-proof" className="cursor-pointer block">
                            <div className="flex flex-col items-center justify-center py-4">
                              <Upload className="h-8 w-8 text-gray-400 mb-2" />
                              <p className="text-sm text-gray-400 mb-1">Click to upload payment screenshot</p>
                              <p className="text-xs text-gray-500">PNG, JPG or JPEG (max. 5MB)</p>
                            </div>
                          </label>
                        )}
                      </div>
                      {formErrors.payment && <p className="text-red-400 text-sm mt-1">{formErrors.payment}</p>}
                    </div>

                    <div className="flex items-center p-4 bg-slate-900/70 border border-slate-700/50 rounded-lg">
                      <Shield className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0" />
                      <p className="text-sm text-gray-300">
                        Your payment information is secure and will only be used to process your order.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Processing...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          Confirm Payment <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      )}
                    </Button>

                    <div className="text-center">
                      <Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">
                        Cancel and return to services
                      </Link>
                    </div>
                  </form>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
