import { useState } from "react"
import { SectionBadge } from "../section-badge"

const education = [
  { title: "Master 2 Software Engineering", date: "2024 — 2026", organization: "IFRI / UAC", status: "In Progress" },
  { title: "R3F Journey", date: "2024", organization: "Three.js Journey" },
  { title: "Bachelor's Degree Internet & Multimedia", date: "2023", organization: "IFRI / UAC" },
  { title: "Three.js Journey", date: "2023", organization: "Three.js Journey" },
  { title: "Electronics Training", date: "2022", organization: "YoupiLab" },
  { title: "BAC C (High School Diploma)", date: "2020", organization: "Jean Piaget 1 School" },
]

export function AwardsSection() {
  const [showAll, setShowAll] = useState(false)
  const displayedEducation = showAll ? education : education.slice(0, 4)

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <SectionBadge>Education</SectionBadge>
            <h2 className="text-3xl md:text-5xl font-title font-medium  mt-4">
              Education & Growth 
            </h2>
          </div>

          <div className="space-y-6">
            {displayedEducation.map((item, index) => (
              <div
                key={index}
                className="flex items-start justify-between gap-4 pb-6 border-b border-border last:border-0"
              >
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.organization}</p>
                  {item.status && (
                    <span className="inline-block mt-2 px-2 py-1 text-xs bg-accent/10 text-accent rounded">
                      {item.status}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground whitespace-nowrap">{item.date}</p>
              </div>
            ))}

            {education.length > 4 && (
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
