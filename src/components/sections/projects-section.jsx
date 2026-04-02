import { useState, useEffect } from "react"
import { SectionBadge } from "../section-badge"
import { ArrowUpRight } from "lucide-react"

export function ProjectsSection() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://api.farihane.com/api/projects/favorites")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProjects(data.data)
        }
      })
      .catch(() => setError("Impossible de charger les projets"))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="projets" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <SectionBadge>Mes Projets</SectionBadge>
          <h2 className="text-3xl md:text-5xl font-title font-medium mt-4 mb-4">Projets sélectionnés</h2>
          <p className="text-muted-foreground max-w-xl">
            Voici une sélection de projets démontrant mon expertise et les résultats obtenus.
          </p>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="border border-border rounded-lg overflow-hidden bg-background animate-pulse">
                <div className="aspect-[3/2] bg-secondary" />
                <div className="p-4 space-y-2">
                  <div className="h-5 w-32 bg-secondary rounded" />
                  <div className="h-4 w-24 bg-secondary rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">{error}</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-[3/2] rounded-lg overflow-hidden bg-secondary mb-4">
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="font-medium mb-1 group-hover:text-accent transition-colors flex items-center gap-1">
                      {project.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.category}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{project.annee}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
