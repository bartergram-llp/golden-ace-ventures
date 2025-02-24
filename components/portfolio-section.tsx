import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const portfolioItems = [
  {
    title: "Company",
    category: "Streaming",
    year: "2025",
    icon: "□",
  },
  {
    title: "Startup",
    category: "Cloud Software",
    year: "2024",
    icon: "↗",
  },
  {
    title: "Organization",
    category: "Streaming",
    year: "2022",
    icon: "↻",
  },
  {
    title: "Enterprise",
    category: "Cloud Software",
    year: "2020",
    icon: "+",
  },
  {
    title: "Venture",
    category: "Streaming",
    year: "2019",
    icon: "◊",
  },
]

export default function PortfolioSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4">
          <span className="text-[#c3932f] text-lg font-medium">03/</span>
          <h2 className="text-4xl md:text-5xl font-medium">Our portfolio</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <Link
              href="#"
              key={index}
              className={`group relative bg-white p-8 rounded-2xl transition-all duration-300 hover:bg-[#c3932f]/5 hover:-translate-y-1 ${
                index >= 3 ? "md:col-span-1" : ""
              }`}
            >
              <div className="absolute top-4 right-4 text-gray-400 group-hover:text-[#c3932f] transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </div>

              <div className="space-y-6">
                <span className="text-4xl text-gray-300 group-hover:text-[#c3932f] transition-colors">{item.icon}</span>

                <div className="space-y-2">
                  <h3 className="text-xl font-medium group-hover:text-[#c3932f] transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-500">
                    {item.category} / {item.year}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="#" className="inline-flex items-center text-[#c3932f] hover:text-[#b38429] transition-colors">
            Browse investment portfolio
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

