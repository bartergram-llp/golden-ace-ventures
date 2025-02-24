import { Smartphone, Monitor, Settings, MoveRight } from "lucide-react"
import Link from "next/link"

const industries = [
  {
    icon: Smartphone,
    title: "Mobile apps",
    description:
      "Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis dis mi sit. In a nunc id lectus facilisi justo eu egestas amet tellus felis leo.",
  },
  {
    icon: Monitor,
    title: "Hardware companies",
    description:
      "Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis dis mi sit. In a nunc id lectus facilisi justo eu egestas amet tellus felis leo.",
  },
  {
    icon: Settings,
    title: "Software companies",
    description:
      "Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis dis mi sit. In a nunc id lectus facilisi justo eu egestas amet tellus felis leo.",
  },
]

export default function IndustriesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-4 text-center">
          <span className="text-[#c3932f] text-lg font-medium">05/</span>
          <h2 className="text-4xl md:text-5xl font-medium">Industries we invest in</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {industries.map((industry, index) => (
            <div key={index} className="space-y-6">
              <industry.icon className="w-8 h-8 text-gray-400" strokeWidth={1.5} />

              <div className="space-y-4">
                <h3 className="text-xl font-medium">{industry.title}</h3>
                <p className="text-gray-600 leading-relaxed">{industry.description}</p>
              </div>

              <Link
                href="#"
                className="inline-flex items-center text-gray-900 hover:text-[#c3932f] transition-colors group"
              >
                Learn more
                <MoveRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

