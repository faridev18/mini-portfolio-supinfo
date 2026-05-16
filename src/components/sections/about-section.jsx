import { SectionBadge } from "../section-badge"
import profile from "../../assets/profile3.jpg"

export function AboutSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary">
            <img
              src={profile}
              alt="Prince DEGBOE"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-accent/10 mix-blend-multiply" />
          </div>

          {/* Texte */}
          <div>
            <SectionBadge>À propos de moi</SectionBadge>
            <h2 className="text-3xl md:text-4xl font-title font-medium mt-4 mb-6">
              Passionné par le <span className="text-accent">mobile</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Je suis <span className="text-foreground font-medium">Prince DEGBOE</span>, développeur mobile
              spécialisé dans la création d{"'"}applications iOS et Android avec Flutter,
              avec un focus sur la performance et l{"'"}expérience utilisateur.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              J{"'"}ai conçu et livré des applications mobiles pour des clients variés, en combinant
              rigueur technique, design soigné et une attention particulière aux bonnes pratiques
              du développement cross-platform.
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
