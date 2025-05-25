"use client"

import type React from "react"

import { useState } from "react"
import { Star, Calendar, ThumbsUp, MessageSquare, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollAnimation } from "@/components/scroll-animation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const reviews = [
  {
    id: 1,
    name: "Rajesh Sharma",
    company: "TechFlow Solutions",
    rating: 5,
    date: "2024-01-15",
    review:
      "Grand Brand transformed our entire digital presence. Their strategic approach to branding and flawless execution resulted in a 300% increase in brand recognition and customer engagement. The team's professionalism and attention to detail exceeded our expectations.",
    service: "Brand Strategy & Web Development",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    helpful: 24,
    verified: true,
  },
  {
    id: 2,
    name: "Priya Patel",
    company: "Wellness Hub India",
    rating: 5,
    date: "2024-01-10",
    review:
      "Working with Grand Brand was a game-changer for our business. Their team delivered a stunning e-commerce website that perfectly captures our brand essence and has significantly improved our conversion rates. The ongoing support has been exceptional.",
    service: "E-commerce Development",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    helpful: 18,
    verified: true,
  },
  {
    id: 3,
    name: "Vikram Singh",
    company: "Fashion Forward",
    rating: 5,
    date: "2024-01-05",
    review:
      "The Grand Brand team's expertise in fashion e-commerce development helped us launch our online store successfully. Their attention to detail and user experience focus resulted in exceptional sales growth. Highly recommended!",
    service: "Fashion E-commerce",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    helpful: 15,
    verified: true,
  },
  {
    id: 4,
    name: "Anita Desai",
    company: "Creative Studios",
    rating: 4,
    date: "2023-12-28",
    review:
      "Great experience working with Grand Brand. They delivered our project on time and within budget. The design quality is excellent and the website performance is outstanding. Minor communication delays initially, but overall very satisfied.",
    service: "Web Design & Development",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    helpful: 12,
    verified: true,
  },
  {
    id: 5,
    name: "Arjun Mehta",
    company: "StartupXYZ",
    rating: 5,
    date: "2023-12-20",
    review:
      "As a startup, we needed a partner who could understand our vision and budget constraints. Grand Brand delivered beyond our expectations with a modern, scalable website that grows with our business. Their post-launch support is fantastic.",
    service: "Startup Web Development",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    helpful: 20,
    verified: true,
  },
  {
    id: 6,
    name: "Kavya Reddy",
    company: "EduTech Pro",
    rating: 5,
    date: "2023-12-15",
    review:
      "The mobile app development service provided by Grand Brand was exceptional. They created a user-friendly learning platform that our students love. The app's performance and design quality are top-notch. Will definitely work with them again.",
    service: "Mobile App Development",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    helpful: 16,
    verified: true,
  },
]

export default function Reviews() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newReview, setNewReview] = useState({
    name: "",
    company: "",
    email: "",
    service: "",
    rating: 5,
    review: "",
  })

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
  const totalReviews = reviews.length

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the review to your backend
    console.log("New review submitted:", newReview)
    setIsDialogOpen(false)
    setNewReview({
      name: "",
      company: "",
      email: "",
      service: "",
      rating: 5,
      review: "",
    })
  }

  const renderStars = (rating: number, size = "h-4 w-4") => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className={`${size} ${star <= rating ? "text-yellow-400 fill-current" : "text-gray-400"}`} />
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Header */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <ScrollAnimation type="fade-up">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 mb-2">
                <Star className="h-4 w-4 mr-2" /> Client Reviews
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                What Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Clients Say
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Read authentic reviews from our satisfied clients and see why they choose Grand Brand for their digital
                needs
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 bg-slate-900/50">
        <div className="container px-4 md:px-6">
          <ScrollAnimation type="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">{averageRating.toFixed(1)}</div>
                <div className="flex justify-center">{renderStars(Math.round(averageRating), "h-5 w-5")}</div>
                <div className="text-gray-400">Average Rating</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">{totalReviews}</div>
                <div className="text-gray-400">Total Reviews</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">98%</div>
                <div className="text-gray-400">Satisfaction Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">500+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Add Review Button */}
      <section className="w-full py-8 bg-slate-900/30">
        <div className="container px-4 md:px-6">
          <ScrollAnimation type="fade-up">
            <div className="flex justify-center">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0">
                    <Plus className="h-4 w-4 mr-2" />
                    Write a Review
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                      Share Your Experience
                    </DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Help others by sharing your experience working with Grand Brand
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmitReview} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={newReview.name}
                          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                          className="bg-slate-700 border-slate-600 text-white"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={newReview.company}
                          onChange={(e) => setNewReview({ ...newReview, company: e.target.value })}
                          className="bg-slate-700 border-slate-600 text-white"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={newReview.email}
                          onChange={(e) => setNewReview({ ...newReview, email: e.target.value })}
                          className="bg-slate-700 border-slate-600 text-white"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Used</Label>
                        <Input
                          id="service"
                          value={newReview.service}
                          onChange={(e) => setNewReview({ ...newReview, service: e.target.value })}
                          className="bg-slate-700 border-slate-600 text-white"
                          placeholder="e.g., Web Development"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Rating</Label>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setNewReview({ ...newReview, rating: star })}
                            className="focus:outline-none"
                          >
                            <Star
                              className={`h-8 w-8 ${
                                star <= newReview.rating ? "text-yellow-400 fill-current" : "text-gray-400"
                              } hover:text-yellow-400 transition-colors`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="review">Your Review</Label>
                      <Textarea
                        id="review"
                        value={newReview.review}
                        onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                        className="bg-slate-700 border-slate-600 text-white min-h-[120px]"
                        placeholder="Share your experience working with Grand Brand..."
                        required
                      />
                    </div>
                    <div className="flex justify-end space-x-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setIsDialogOpen(false)}
                        className="border-slate-600 text-gray-300 hover:bg-slate-700"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600"
                      >
                        Submit Review
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="w-full py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <ScrollAnimation key={review.id} type="fade-up" delay={index * 100}>
                <Card className="group bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <img
                          src={review.avatar || "/placeholder.svg"}
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <div className="flex items-center space-x-2">
                            <CardTitle className="text-white text-lg">{review.name}</CardTitle>
                            {review.verified && (
                              <Badge variant="secondary" className="bg-green-500/20 text-green-300 text-xs">
                                Verified
                              </Badge>
                            )}
                          </div>
                          <CardDescription className="text-gray-400">{review.company}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {renderStars(review.rating)}
                        <span className="text-yellow-400 font-semibold">{review.rating}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Badge variant="outline" className="border-purple-500/30 text-purple-300">
                        {review.service}
                      </Badge>
                      <p className="text-gray-300 leading-relaxed">{review.review}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                        <div className="flex items-center text-sm text-gray-400">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(review.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            {review.helpful}
                          </button>
                          <button className="flex items-center text-sm text-gray-400 hover:text-purple-400 transition-colors">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          {/* Load More Button */}
          <ScrollAnimation type="fade-up" delay={600}>
            <div className="flex justify-center mt-12">
              <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0">
                Load More Reviews
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
