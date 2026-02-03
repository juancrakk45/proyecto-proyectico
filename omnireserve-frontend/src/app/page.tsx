import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Categories from "@/components/Categories"
import FeaturedBusinesses from "@/components/FeaturedBusinesses"
import HowItWorks from "@/components/HowItWorks"
import BusinessCTA from "@/components/BusinessCTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedBusinesses />
      <HowItWorks />
      <BusinessCTA />
      <Footer />
    </>
  )
}
