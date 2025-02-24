import { Button } from "@/components/ui/button"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 w-full pt-16 pb-20 lg:pt-32 lg:pb-48 px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 max-w-full md:max-w-[90%] lg:max-w-[55%]">
            <span className="text-[#c3932f] text-lg font-medium opacity-0 animate-fade-in">01/</span>

            <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] font-medium tracking-tight text-gray-900 animate-slide-up">
              We invest in the companies of the future, today
            </h1>

            <p className="mt-3 text-base sm:text-lg text-gray-500 max-w-xl animate-slide-up-delay">
              Lorem ipsum dolor sit amet consectetur sollicitudin pulvinar ipsum ut senectus malesuada dui lorem ac id
              vel nunc sapien magna.
            </p>

            <div className="flex flex-wrap gap-4 animate-slide-up-delay-2">
              <Button className="bg-[#c3932f] hover:bg-[#b38429] text-white rounded-full px-6 py-6 text-base transition-all duration-300 transform hover:scale-105">
                Pitch your startup →
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6 py-6 text-base border-gray-200 transition-all duration-300 hover:border-[#c3932f] hover:text-[#c3932f]"
              >
                Investment portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full hidden md:block">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uV1YTmr26ACSkKwX1Lz3JSwNFB7AN8.png"
          alt="Abstract blue waves"
          fill
          className="object-cover transform scale-110 animate-scale-in"
          priority
        />
      </div>
    </div>
  )
}

export default Hero

