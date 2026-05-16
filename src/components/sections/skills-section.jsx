import { useState } from "react"
import { SectionBadge } from "../section-badge"
import { ChevronDown, Code, Palette, Layers, Smartphone, Globe } from "lucide-react"
import { cn } from "@/lib/utils"

const skills = [
  {
    icon: Smartphone,
    title: "Développement Mobile",
    description: "Création d'applications mobiles cross-platform performantes et fluides pour iOS et Android avec Flutter.",
    techs: ["Flutter", "Dart", "Firebase", "Supabase", "SQLite"],
  },
  {
    icon: Code,
    title: "Développement Backend",
    description: "Conception d'APIs et de services backend pour alimenter les applications mobiles Flutter.",
    techs: ["Node.js", "Express", "REST API", "Firebase Functions", "PostgreSQL"],
  },
  {
    icon: Palette,
    title: "UI/UX Mobile",
    description: "Conception d'interfaces mobiles élégantes, accessibles et centrées sur l'utilisateur.",
    techs: ["Figma", "Material Design 3", "Cupertino", "Flutter Animations", "Prototypage"],
  },
  {
    icon: Layers,
    title: "Architecture & État",
    description: "Structuration d'applications Flutter maintenables avec des patterns éprouvés.",
    techs: ["BLoC", "Riverpod", "GetX", "Provider", "Clean Architecture"],
  },
  {
    icon: Globe,
    title: "Intégration & Déploiement",
    description: "Publication et mise en production sur App Store et Google Play avec CI/CD.",
    techs: ["App Store", "Google Play", "GitHub Actions", "Fastlane", "Codemagic"],
  },
]

export function SkillsSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="competences" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <SectionBadge>Compétences</SectionBadge>
          <h2 className="text-3xl md:text-5xl font-title font-medium mt-4">Expertise mobile & tech</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Accordion */}
          <div className="space-y-4">
            {skills.map((item, index) => (
              <div
                key={item.title}
                className="border border-border rounded-lg overflow-hidden bg-background transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full cursor-pointer flex items-center justify-between p-4 text-left transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-muted-foreground" />
                    <span className="font-medium">{item.title}</span>
                  </div>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-muted-foreground transition-transform duration-300",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-4 pt-2">
                      <p className="text-sm text-muted-foreground pl-8 mb-3">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pl-8">
                        {item.techs.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs border border-border rounded-full bg-secondary/50 text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech cloud / Summary */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-title font-medium mb-6">
              Technologies que j{"'"}utilise
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Je construis des applications mobiles performantes et soignées pour iOS et Android en utilisant Flutter comme technologie principale.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Flutter", "Dart", "Firebase", "Supabase", "REST API",
                "GetX", "Riverpod", "BLoC", "Figma", "Git/GitHub",
                "App Store", "Google Play", "CI/CD", "SQLite", "Fastlane",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm border border-border rounded-full bg-background text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
