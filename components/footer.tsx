import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, MoveRight, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Top Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium max-w-2xl">
            We invest in the companies of the future today
          </h2>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex items-center gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => (
                <Link key={index} href={social.href} className="text-gray-600 hover:text-[#c3932f] transition-colors">
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.icon.name}</span>
                </Link>
              ))}
            </div>
            <Button className="bg-[#c3932f] hover:bg-[#b38429] text-white rounded-full px-6 transition-all duration-300">
              Pitch your startup <MoveRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <hr className="my-16 border-gray-200" />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Main Pages */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900">Main pages</h3>
            <ul className="space-y-3">
              {["Home", "About", "Portfolio", "Blog", "Contact", "Investors"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-[#c3932f] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900">Resources</h3>
            <ul className="space-y-3">
              {["Start here", "Style guide", "Licenses", "Changelog", "404 page"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-[#c3932f] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="space-y-3">
              {["Privacy policy", "Terms of service", "Cookie policy"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-[#c3932f] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900">Contact us</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="mailto:contact@goldenace.com"
                  className="flex items-center text-gray-600 hover:text-[#c3932f] transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  contact@goldenace.com
                </Link>
              </li>
              <li>
                <Link
                  href="tel:(414)793-0681"
                  className="flex items-center text-gray-600 hover:text-[#c3932f] transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  (414) 793 - 0681
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-200">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8L24 24M8 24L24 8" stroke="#c3932f" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-[#c3932f]">Golden Ace Ventures</span>
          </Link>

          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Golden Ace Ventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

