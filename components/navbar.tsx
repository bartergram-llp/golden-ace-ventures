"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 8L24 24M8 24L24 8" stroke="#c3932f" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-xl font-semibold text-[#c3932f]">Golden Ace Ventures</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="#" className="text-gray-600 hover:text-[#c3932f] transition-colors">
              Home
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[#c3932f] transition-colors">
              About
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[#c3932f] transition-colors">
              Blog
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[#c3932f] transition-colors">
              Pages
            </Link>
            <Button className="bg-[#c3932f] hover:bg-[#b38429] text-white rounded-full px-6 transition-all duration-300 transform hover:scale-105">
              Pitch your startup →
            </Button>
          </div>

          <div className="md:hidden">
            <button className="relative w-10 h-10 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="absolute w-6 transform left-1/2 -translate-x-1/2">
                <span
                  className={`absolute h-0.5 w-6 bg-gray-800 transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                  }`}
                />
                <span
                  className={`absolute h-0.5 bg-gray-800 transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "w-0 opacity-0" : "w-6 opacity-100"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-gray-800 transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4 pb-6">
            <Link href="#" className="text-gray-600 hover:text-[#c3932f] transition-colors">
              Home
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[#c3932f] transition-colors">
              About
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[#c3932f] transition-colors">
              Blog
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[#c3932f] transition-colors">
              Pages
            </Link>
            <Button className="bg-[#c3932f] hover:bg-[#b38429] text-white rounded-full transition-all duration-300 transform hover:scale-105">
              Pitch your startup →
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

