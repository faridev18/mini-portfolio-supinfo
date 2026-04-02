import { useState } from "react"
import { SectionBadge } from "../section-badge"
import freelanceLogo from "../../assets/experience/freelance.png"
import wensalaLogo from "../../assets/experience/wensala.png"
import nerdxLogo from "../../assets/experience/nerdx.png"
import astraLogo from "../../assets/experience/astra.png"
import grow4allLogo from "../../assets/experience/grow4all.png"
import gdscLogo from "../../assets/experience/gdsc.png"

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2021 — Present",
    description: "Full stack web application development, graphic design and branding.",
    logo: freelanceLogo,
  },
  {
    role: "CEO & Full Stack Developer",
    company: "Grow4All",
    period: "2024 — Present",
    description: "Leading development and strategy for innovative digital solutions.",
    logo: grow4allLogo,
  },
  {
    role: "Co-Lead",
    company: "GDSC UAC",
    period: "2023 — 2024",
    description: "Co-leading Google Developer Student Club at UAC Abomey-Calavi.",
    logo: gdscLogo,
  },
  {
    role: "Full Stack Developer",
    company: "Wensala GROUP",
    period: "Jan 2024",
    description: "Development of web platforms for various clients.",
    logo: wensalaLogo,
  },
  {
    role: "Full Stack Developer",
    company: "NerdX Digital",
    period: "Apr — Jul 2023",
    description: "Development of ReactJS and WebGL applications, Laravel API creation.",
    logo: nerdxLogo,
  },
  {
    role: "Mobile Developer",
    company: "Astra Horizon",
    period: "Jun 2022",
    description: "Creation of management mobile application with Ionic Angular Firebase.",
    logo: astraLogo,
  },
]

export function ExperienceSection() {
  const [showAll, setShowAll] = useState(false)
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 5)

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <SectionBadge>Journey</SectionBadge>
            <h2 className="text-3xl md:text-5xl font-title font-medium  mt-4 mb-4">Experience</h2>
            <p className="text-muted-foreground">
              I've worked with some of the most innovative leaders in the industry to help them build their flagship products.
            </p>
          </div>

          <div className="space-y-6">
            {displayedExperiences.map((exp, index) => (
              <div
                key={index}
                className="flex items-start justify-between gap-4 pb-6 border-b border-border last:border-0"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{exp.role}</p>
                    <p className="text-sm text-muted-foreground">@{exp.company}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</p>
              </div>
            ))}

            {experiences.length > 5 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
