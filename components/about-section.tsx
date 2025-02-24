import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <span className="text-[#c3932f] text-lg font-medium">02/</span>

            <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] leading-[1.1] font-medium tracking-tight text-gray-900">
              About our investment firm
            </h2>

            <Button className="bg-[#c3932f] hover:bg-[#b38429] text-white rounded-full px-6 py-6 text-base transition-all duration-300 transform hover:scale-105">
              Pitch your startup →
            </Button>

            <div className="space-y-6 text-gray-600">
              <p>
                Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis dis mi sit. In a nunc id lectus
                facilisi justo eu egestas amet tellus felis leo vestibulum ut neque mus. Tempus arcu metus.
              </p>
              <p>
                Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis dis mi sit. In a nunc id lectus
                facilisi justo eu.
              </p>
            </div>
          </div>

          {/* Right Content with Image and Stats */}
          <div className="space-y-12">
            {/* Center Image */}
            <div className="flex justify-center">
              <div className="relative w-full aspect-square max-w-[400px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-i6eVEUkgIFzlSUGHxRorZq9hcPaBNR.png"
                  alt="Abstract sphere"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              <StatItem label="Companies" value="200" />
              <StatItem label="Team members" value="50" />
              <StatItem label="Capital investment" value="5B" />
              <StatItem label="Years of experience" value="15" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <p className="flex items-center justify-center text-4xl font-medium mb-2">
        <span className="text-[#c3932f] mr-1">+</span>
        <span>{value}</span>
      </p>
      <h3 className="text-gray-600 text-sm">{label}</h3>
    </div>
  )
}

