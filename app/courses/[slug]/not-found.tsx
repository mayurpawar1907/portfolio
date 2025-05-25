import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CourseNotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex items-center justify-center py-20 md:py-32 bg-gradient-to-r from-slate-950 to-slate-900 text-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 mb-4">
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
                className="h-8 w-8 text-purple-400"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">Course Not Found</h1>
            <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
              The course you're looking for doesn't exist or has been moved to a different location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0"
              >
                <Link href="/courses">Browse All Courses</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white/30 hover:bg-white/10"
              >
                <Link href="/">Return Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
