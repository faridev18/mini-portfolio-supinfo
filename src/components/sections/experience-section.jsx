import { SectionBadge } from "../section-badge"
import { GraduationCap, Briefcase } from "lucide-react"

const education = [
  {
    title: "Master 2 Génie Logiciel",
    institution: "IFRI / UAC",
    period: "2024 — 2026",
    status: "En cours",
  },
  {
    title: "R3F Journey",
    institution: "Three.js Journey",
    period: "2024",
  },
  {
    title: "Licence Internet & Multimédia",
    institution: "IFRI / UAC",
    period: "2023",
  },
  {
    title: "Three.js Journey",
    institution: "Three.js Journey",
    period: "2023",
  },
  {
    title: "Formation Électronique",
    institution: "YoupiLab",
    period: "2022",
  },
  {
    title: "BAC C",
    institution: "Lycée Jean Piaget 1",
    period: "2020",
  },
]

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2021 — Présent",
  },
  {
    role: "CEO & Full Stack Developer",
    company: "Grow4All",
    period: "2024 — Présent",
  },
  {
    role: "Co-Lead",
    company: "GDSC UAC",
    period: "2023 — 2024",
  },
  {
    role: "Full Stack Developer",
    company: "Wensala GROUP",
    period: "Jan 2024",
  },
  {
    role: "Full Stack Developer",
    company: "NerdX Digital",
    period: "Avr — Juil 2023",
  },
  {
    role: "Mobile Developer",
    company: "Astra Horizon",
    period: "Juin 2022",
  },
]

export function ExperienceSection() {
  return (
    <section id="parcours" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <SectionBadge>Parcours</SectionBadge>
          <h2 className="text-3xl md:text-5xl font-title font-medium mt-4">
            Formations & Expériences
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formations */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-title font-medium">Formations</h3>
            </div>

            <div className="space-y-6">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-6 border-l-2 border-border last:border-0 last:pb-0"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-accent">{item.institution}</p>
                      {item.status && (
                        <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-accent/10 text-accent rounded">
                          {item.status}
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{item.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expériences */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-title font-medium">Expériences</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between gap-4 pb-6 border-b border-border last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium">{exp.role}</p>
                    <p className="text-sm text-accent">@{exp.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
