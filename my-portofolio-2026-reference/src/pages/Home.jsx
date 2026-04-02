import { Helmet } from "react-helmet-async"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { HeroSection } from "../components/home/hero-section"
import { SkillsMarquee } from "../components/home/skills-marquee"
import { AboutSection } from "../components/home/about-section"
import { ProjectsSection } from "../components/home/projects-section"
import { ExpertiseSection } from "../components/home/expertise-section"
import { TestimonialsSection } from "../components/home/testimonials-section"
import { CTASection } from "../components/cta-section"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Farihane Zannou — Creative Developer & Digital Designer</title>
        <meta name="description" content="Discover my Full Stack Developer portfolio. Expertise in React, Node.js and modern design." />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <SkillsMarquee />
        <AboutSection />
        <ProjectsSection />
        <ExpertiseSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
