import { HeroSection } from "@/components/hero-section"
import { ChallengesSection } from "@/components/challenges-section"
import { ActivitiesSection } from "@/components/activities-section"
import { EventsSection } from "@/components/events-section"
import { JoinUsSection } from "@/components/join-us-section"
import { NewsSection } from "@/components/news-section"
import { ContributeSection } from "@/components/contribute-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { PartnersSection } from "@/components/partners-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <HeroSection />
      <ChallengesSection />
      <ActivitiesSection />
      <EventsSection />
      <JoinUsSection />
      <NewsSection />
      <PartnersSection />
      <ContributeSection />
      <Footer />
    </main>
  )
}
