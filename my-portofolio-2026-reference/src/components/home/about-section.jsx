import ScrollReveal from "../ScrollReveal"
import { SectionBadge } from "../section-badge"

export function AboutSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-8">
          <SectionBadge>À propos de moi</SectionBadge>
        </div>
        {/* <p className="text-xl md:text-2xl lg:text-3xl text-center max-w-4xl mx-auto leading-relaxed">
          Je suis <span className="text-foreground font-medium">Farihane S. ZANNOU</span>, avec plus de{" "}
          <span className="text-foreground font-medium">4 ans d{"'"}expérience</span> en design et développement,
          avec un focus sur la production d{"'"}expériences digitales de haute qualité et impactantes.
          J{"'"}ai travaillé avec certains des{" "}
          <span className="text-muted-foreground">leaders les plus innovants de l{"'"}industrie</span>{" "}
          pour les aider à construire leurs produits de premier plan.
        </p> */}

        <ScrollReveal
          baseOpacity={0.1}
          enableBlur={false}
          baseRotation={0}
          blurStrength={0}
          scrollContainerRef={window}
          textClassName="text-xl md:text-2xl lg:text-3xl text-center m mx-auto leading-relaxed"
        >
I am Farihane S. ZANNOU, with over 5 years of experience in design and development, focusing on producing high-quality and impactful digital experiences. I have worked with some of the most innovative leaders in the industry to help them build their top-tier products.        </ScrollReveal>
      </div>
    </section>
  )
}
