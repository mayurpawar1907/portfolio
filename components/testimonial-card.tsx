import AnimatedCard, { AnimatedCardContent } from "@/components/animated_card"

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
  image?: string
}

export default function TestimonialCard({ quote, author, company, image }: TestimonialCardProps) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <AnimatedCard
        className="h-full border-slate-700 bg-slate-800/50 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group relative"
        glowColor="rgba(6, 182, 212, 0.15)"
      >
        <AnimatedCardContent className="pt-6">
          <div className="mb-4 flex justify-center">
            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
          </div>
          <div className="relative mb-6">
            <svg
              className="absolute top-0 left-0 transform -translate-x-6 -translate-y-4 h-16 w-16 text-purple-500/10 group-hover:text-purple-500/20 transition-colors duration-300"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.68967 8.45999C7.16615 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9163 8.45999C14.3927 8.93999 14.6242 9.55333 14.6242 10.3Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <p className="italic text-gray-300 relative z-10 group-hover:text-gray-200 transition-colors duration-300">
            {quote}
          </p>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center">
              {image && (
                <div className="mr-3 w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500/30 group-hover:border-purple-500/50 transition-colors duration-300">
                  <img src={image || "/placeholder.svg"} alt={author} className="w-full h-full object-cover" />
                </div>
              )}
              <div>
                <p className="font-semibold text-white">{author}</p>
                <p className="text-sm text-gray-400">{company}</p>
              </div>
            </div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-yellow-400 mx-0.5"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
          </div>
        </AnimatedCardContent>
      </AnimatedCard>
    </div>
  )
}
