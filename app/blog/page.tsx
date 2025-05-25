import Link from "next/link"
import { Calendar, Clock, User, ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ScrollAnimation } from "@/components/scroll-animation"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Design: Trends to Watch in 2024",
    excerpt:
      "Explore the latest web design trends that are shaping the digital landscape and how to implement them in your projects.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Web Design",
    tags: ["Design", "Trends", "UI/UX", "2024"],
    featured: true,
  },
  {
    id: 2,
    title: "Building Scalable E-commerce Platforms: A Complete Guide",
    excerpt:
      "Learn how to create robust e-commerce solutions that can handle high traffic and provide excellent user experience.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Mike Chen",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Development",
    tags: ["E-commerce", "Scalability", "Performance", "Backend"],
    featured: false,
  },
  {
    id: 3,
    title: "Brand Identity Design: Creating Memorable Visual Experiences",
    excerpt:
      "Discover the key principles of effective brand identity design and how to create cohesive visual systems.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Emma Davis",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Branding",
    tags: ["Branding", "Identity", "Visual Design", "Strategy"],
    featured: false,
  },
  {
    id: 4,
    title: "SEO Best Practices for Modern Websites",
    excerpt: "Master the latest SEO techniques to improve your website's visibility and drive organic traffic.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "David Wilson",
    date: "2023-12-28",
    readTime: "10 min read",
    category: "Marketing",
    tags: ["SEO", "Marketing", "Traffic", "Optimization"],
    featured: true,
  },
  {
    id: 5,
    title: "Mobile-First Design: Why It Matters More Than Ever",
    excerpt:
      "Understanding the importance of mobile-first approach in today's digital landscape and implementation strategies.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Lisa Rodriguez",
    date: "2023-12-20",
    readTime: "7 min read",
    category: "Mobile",
    tags: ["Mobile", "Responsive", "UX", "Performance"],
    featured: false,
  },
  {
    id: 6,
    title: "The Psychology of Color in Digital Design",
    excerpt:
      "Explore how color choices impact user behavior and learn to use color psychology effectively in your designs.",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Alex Thompson",
    date: "2023-12-15",
    readTime: "9 min read",
    category: "Design Psychology",
    tags: ["Psychology", "Color", "UX", "Conversion"],
    featured: false,
  },
]

const categories = ["All", "Web Design", "Development", "Branding", "Marketing", "Mobile", "Design Psychology"]

export default function Blog() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Header */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <ScrollAnimation type="fade-up">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm text-purple-300 mb-2">
                <span className="mr-1">✦</span> Insights & Knowledge
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Blog</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Stay updated with the latest trends, insights, and best practices in digital design and development
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="w-full py-12 bg-slate-900/50">
        <div className="container px-4 md:px-6">
          <ScrollAnimation type="fade-up">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-400"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    size="sm"
                    className="bg-slate-800/50 border-slate-700 text-gray-300 hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-white transition-all duration-300"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="w-full py-20">
        <div className="container px-4 md:px-6">
          <ScrollAnimation type="fade-up">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <ScrollAnimation key={post.id} type="fade-up" delay={index * 200}>
                <Card className="group bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-purple-600 text-white">Featured</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300 line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-400">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-slate-600 text-gray-300 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full text-purple-400 hover:text-white hover:bg-purple-500/20 group"
                    >
                      <Link href={`/blog/${post.id}`} className="flex items-center justify-center">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Posts */}
      <section className="w-full pb-20">
        <div className="container px-4 md:px-6">
          <ScrollAnimation type="fade-up">
            <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <ScrollAnimation key={post.id} type="fade-up" delay={index * 100}>
                <Card className="group bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300 line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 line-clamp-2">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-400">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full text-cyan-400 hover:text-white hover:bg-cyan-500/20 group"
                    >
                      <Link href={`/blog/${post.id}`} className="flex items-center justify-center">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          {/* Load More Button */}
          <ScrollAnimation type="fade-up" delay={600}>
            <div className="flex justify-center mt-12">
              <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0">
                Load More Articles
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
