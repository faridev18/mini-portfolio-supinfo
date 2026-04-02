import { SectionBadge } from "../section-badge"

export function AboutSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary">
            <img
              src="/src/assets/profile3.jpg"
              alt="Farihane S. ZANNOU"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-accent/10 mix-blend-multiply" />
          </div>

          {/* Texte */}
          <div>
            <SectionBadge>À propos de moi</SectionBadge>
            <h2 className="text-3xl md:text-4xl font-title font-medium mt-4 mb-6">
              Passionné par le <span className="text-accent">digital</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Je suis <span className="text-foreground font-medium">Farihane S. ZANNOU</span>, avec plus de
              5 ans d{"'"}expérience en design et développement, avec un focus sur la production
              d{"'"}expériences digitales de haute qualité et impactantes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              J{"'"}ai travaillé avec certains des leaders les plus innovants de l{"'"}industrie
              pour les aider à construire leurs produits de premier plan. Mon approche combine
              créativité, rigueur technique et sens du détail.
            </p>
            <div className="flex flex-wrap gap-6">
              <div>
                <p className="text-3xl font-title font-semibold text-accent">5+</p>
                <p className="text-sm text-muted-foreground">Années d{"'"}expérience</p>
              </div>
              <div>
                <p className="text-3xl font-title font-semibold text-accent">50+</p>
                <p className="text-sm text-muted-foreground">Projets réalisés</p>
              </div>
              <div>
                <p className="text-3xl font-title font-semibold text-accent">30+</p>
                <p className="text-sm text-muted-foreground">Clients satisfaits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
