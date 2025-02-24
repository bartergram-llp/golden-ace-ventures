import { Button } from "@/components/ui/button"
import { ArrowUpRight, MoveRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const partners = [
  {
    name: "John Carter",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Sophie Moore",
    role: "Managing Partner",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Matt Cannon",
    role: "Managing Partner",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Andy Smith",
    role: "Managing Partner",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function PartnersSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <span className="text-[#c3932f] text-lg font-medium">07/</span>
            <h2 className="text-4xl md:text-5xl font-medium">Our partners</h2>
          </div>
          <p className="text-gray-600 leading-relaxed self-end">
            Lorem ipsum dolor sit amet consectetur. Mi vitae diam dolor id in massa commodo vivamus in. Magna convallis
            non auctor aliquet pellentesque. Vitae massa eu proin laoreet purus sed. Sodales.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partners.map((partner, index) => (
            <Link
              href="#"
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="absolute top-4 right-4 text-gray-400 group-hover:text-[#c3932f] transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </div>

              <div className="space-y-4">
                <div className="relative w-24 h-24 mx-auto bg-gray-100 rounded-full overflow-hidden">
                  <Image src={partner.image || "/placeholder.svg"} alt={partner.name} fill className="object-cover" />
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-medium group-hover:text-[#c3932f] transition-colors">{partner.name}</h3>
                  <p className="text-gray-500 text-sm">{partner.role}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-[#c3932f] hover:bg-[#b38429] text-white rounded-full px-6 transition-all duration-300">
            Pitch your startup <MoveRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="rounded-full px-6 border-gray-200 hover:border-[#c3932f] hover:text-[#c3932f]"
          >
            Browse all team members
          </Button>
        </div>
      </div>
    </section>
  )
}

