import AnimatedCounter from "@/components/animated-counter"
import { Trophy, Users, GraduationCap, Briefcase } from "lucide-react"

export default function StatsSection() {
  return (
    <section className="w-full py-12 bg-gradient-to-r from-slate-900 via-purple-900/20 to-slate-900 text-white border-y border-purple-500/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Our Success Story
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
            Delivering excellence and innovation in everything we do
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div className="flex flex-col items-center space-y-2">
            <Briefcase className="h-10 w-10 text-purple-400 mb-2" />
            <AnimatedCounter end={300} suffix="+" className="text-4xl md:text-5xl text-white" />
            <p className="text-gray-300 text-sm md:text-base">Projects Delivered</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <GraduationCap className="h-10 w-10 text-cyan-400 mb-2" />
            <AnimatedCounter end={200} suffix="+" className="text-4xl md:text-5xl text-white" />
            <p className="text-gray-300 text-sm md:text-base">Students Trained</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <Trophy className="h-10 w-10 text-purple-400 mb-2" />
            <AnimatedCounter end={98} suffix="%" className="text-4xl md:text-5xl text-white" />
            <p className="text-gray-300 text-sm md:text-base">Success Ratio</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <Users className="h-10 w-10 text-cyan-400 mb-2" />
            <AnimatedCounter end={50} suffix="+" className="text-4xl md:text-5xl text-white" />
            <p className="text-gray-300 text-sm md:text-base">Expert Team Members</p>
          </div>
        </div>
      </div>
    </section>
  )
}
