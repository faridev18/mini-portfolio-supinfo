import { Helmet } from "react-helmet-async"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { AboutHero } from "../components/about/about-hero"
import { TechStack } from "../components/about/tech-stack"
import { ExperienceSection } from "../components/about/experience-section"
import { DesignProcess } from "../components/about/design-process"
import { AwardsSection } from "../components/about/awards-section"
import { CommunitySection } from "../components/about/community-section"
import { CTASection } from "../components/cta-section"

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | My Journey & Expertise</title>
        <meta name="description" content="Discover my journey, technical skills and work process as a Full Stack Developer." />
      </Helmet>
      <Header />
      <main>
        <AboutHero />
        <TechStack />
        <ExperienceSection />
        <DesignProcess />
        <AwardsSection />
        <CommunitySection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
