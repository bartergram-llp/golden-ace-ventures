import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import InfiniteScroll from "@/components/infinite-scroll"
import AboutSection from "@/components/about-section"
import PortfolioSection from "@/components/portfolio-section"
import ApproachSection from "@/components/approach-section"
import IndustriesSection from "@/components/industries-section"
import CTASection from "@/components/cta-section"
import PartnersSection from "@/components/partners-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <InfiniteScroll />
      <AboutSection />
      <PortfolioSection />
      <ApproachSection />
      <IndustriesSection />
      <CTASection />
      <PartnersSection />
      <Footer />
    </main>
  )
}

