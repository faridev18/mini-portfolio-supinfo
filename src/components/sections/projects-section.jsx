import { useState } from "react"
import { SectionBadge } from "../section-badge"
import { X, ArrowUpRight } from "lucide-react"
import { projects } from "../../data/projects"

function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-background border border-border rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-background border-b border-border">
          <div>
            <h2 className="font-title font-medium text-xl">{project.title}</h2>
            <p className="text-sm text-muted-foreground">{project.category} · {project.annee}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-secondary transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Image principale */}
          <div className="relative aspect-3/2 rounded-lg overflow-hidden bg-secondary">
            <img
              src={project.image_url}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">{project.description}</p>

          {/* Vidéo */}
          {project.video_url && (
            <div>
              <h3 className="font-medium mb-3">Démo vidéo</h3>
              <video
                src={project.video_url}
                controls
                className="w-full rounded-lg border border-border"
              />
            </div>
          )}

          {/* Captures d'écran */}
          {project.screenshots?.length > 0 && (
            <div>
              <h3 className="font-medium mb-3">Captures d{"'"}écran</h3>
              <div className="grid grid-cols-2 gap-3">
                {project.screenshots.map((src, i) => (
                  <div key={i} className="aspect-3/2 rounded-lg overflow-hidden bg-secondary">
                    <img
                      src={src}
                      alt={`${project.title} capture ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projets" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <SectionBadge>Mes Projets</SectionBadge>
          <h2 className="text-3xl md:text-5xl font-title font-medium mt-4 mb-4">Mes réalisations</h2>
          <p className="text-muted-foreground max-w-xl">
            Voici une sélection de projets démontrant mon expertise et les résultats obtenus.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelected(project)}
              className="group block text-left cursor-pointer"
            >
              <div className="relative aspect-3/2 rounded-lg overflow-hidden bg-secondary mb-4">
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
            </button>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}

