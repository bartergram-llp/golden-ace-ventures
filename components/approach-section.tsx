"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, MoveRight } from "lucide-react"

const approaches = [
  {
    id: "01",
    title: "Discovery",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi vitae diam dolor id in massa commodo vivamus in. Magna convallis non auctor aliquet pellentesque. Vitae massa eu proin laoreet purus sed. Sodales.",
  },
  {
    id: "02",
    title: "Recovery",
    description:
      "Magna convallis non auctor aliquet pellentesque. Vitae massa eu proin laoreet purus sed. Lorem ipsum dolor sit amet consectetur. Mi vitae diam dolor id in massa commodo vivamus in.",
  },
  {
    id: "03",
    title: "Growth",
    description:
      "Vitae massa eu proin laoreet purus sed. Sodales. Lorem ipsum dolor sit amet consectetur. Mi vitae diam dolor id in massa commodo vivamus in. Magna convallis non auctor aliquet pellentesque.",
  },
]

export default function ApproachSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % approaches.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + approaches.length) % approaches.length)
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 space-y-4 sm:space-y-0">
          <div className="space-y-4">
            <span className="text-[#c3932f] text-lg font-medium">04/</span>
            <h2 className="text-4xl md:text-5xl font-medium">Our approach</h2>
          </div>

          <div className="flex gap-4">
            <Button className="bg-[#c3932f] hover:bg-[#b38429] text-white rounded-full px-6 transition-all duration-300">
              Pitch your startup <MoveRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-6 border-gray-200 hover:border-[#c3932f] hover:text-[#c3932f]"
            >
              Learn more
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-i6eVEUkgIFzlSUGHxRorZq9hcPaBNR.png"
              alt="Abstract representation"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-6xl md:text-7xl font-medium text-gray-900">{approaches[currentIndex].id}</span>
              <h3 className="text-2xl md:text-3xl font-medium">{approaches[currentIndex].title}</h3>
              <p className="text-gray-600 leading-relaxed">{approaches[currentIndex].description}</p>
            </div>

            {/* Navigation */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full hover:border-[#c3932f] hover:text-[#c3932f]"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full hover:border-[#c3932f] hover:text-[#c3932f]"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

