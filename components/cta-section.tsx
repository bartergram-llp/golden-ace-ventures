import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, MoveRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="relative overflow-hidden rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-i6eVEUkgIFzlSUGHxRorZq9hcPaBNR.png"
          alt="Abstract background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#c3932f]/10 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-white text-lg font-medium mb-4 block">06/</span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6">
            We invest in the companies of the future, today
          </h2>

          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet consectetur sollicitudin pulvinar ipsum ut senectus malesuada dui lorem ac.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button className="bg-white hover:bg-white/90 text-[#c3932f] rounded-full px-6 transition-all duration-300 transform hover:scale-105">
              Pitch your startup <MoveRight className="ml-2 h-4 w-4" />
            </Button>

            <div className="flex items-center gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => (
                <Link key={index} href={social.href} className="text-white/80 hover:text-white transition-colors">
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.icon.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

