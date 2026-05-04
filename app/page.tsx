import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { OurChoiceSection } from "@/components/our-choice-section"
import { RankingsSection } from "@/components/rankings-section"
import { AboutUsSection } from "@/components/about-us-section"
import { RatingSystemSection } from "@/components/rating-system-section"
import { TopSitesPortugalSection } from "@/components/top-sites-portugal-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { TopCasinoPopup } from "@/components/top-casino-popup"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-[60px] md:pt-[72px]">
        <HeroSection />
       
        <div id="rankings">
          <RankingsSection />
        </div>
        <div id="about">
          <AboutUsSection />
        </div>
        <RatingSystemSection />
        <TopSitesPortugalSection />
        <div id="faq">
          <FAQSection />
        </div>
         <OurChoiceSection />
        <Footer />
      </div>

      <CookieBanner />
      <TopCasinoPopup />
    </div>
  )
}
