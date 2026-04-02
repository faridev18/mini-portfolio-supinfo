import { useState, useEffect } from "react"
import { Link } from "react-router"
import { SectionBadge } from "../section-badge"
import { projectsAPI } from "@/lib/api"
import { Skeleton } from "@/components/ui/skeleton"

export function ProjectsSection() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)
        const response = await projectsAPI.getFavorites()
        if (response.success) {
          setProjects(response.data)
        }
      } catch (err) {
        setError("Impossible de charger les projets")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  // Composant pour la grille de projets
  const ProjectsGrid = () => {
    if (loading) {
      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="block">
              <Skeleton className="aspect-[4/3] rounded-lg mb-4" />
              <div className="flex items-end justify-between">
                <div>
                  <Skeleton className="h-5 w-32 mb-2" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="h-4 w-12" />
              </div>
            </div>
          ))}
        </div>
      )
    }

    if (error) {
      return (
        <div className="text-center py-12">
          <p className="text-muted-foreground">{error}</p>
        </div>
      )
    }

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.slug}`}
            className="group block"
          >
            <div className="relative aspect-[3/2] rounded-lg overflow-hidden bg-secondary mb-4">
              <img
                src={project.image_url || "/placeholder.svg"}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
            </div>
            <div className="flex items-end justify-between">
              <div>
                <h3 className="font-medium mb-1 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">{project.category}</p>
              </div>
              <span className="text-sm text-muted-foreground">{project.annee}</span>
            </div>
          </Link>
        ))}
      </div>
    )
  }

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        {/* Header - Toujours visible */}
        <div className="mb-12">
          <SectionBadge>My Projects</SectionBadge>
          <h2 className="text-3xl md:text-5xl font-title font-medium mt-4 mb-4">Selected Projects</h2>
          <p className="text-muted-foreground max-w-xl">
            Here is a selection of projects demonstrating my expertise and the results achieved.
          </p>
        </div>

        {/* Grille de projets - Skeleton pendant le chargement */}
        <ProjectsGrid />

        <div className="flex justify-center mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium border border-foreground rounded-full hover:bg-foreground hover:text-background transition-colors overflow-hidden relative group"
          >
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-[150%]">
              See all projects
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-300 group-hover:translate-y-0">
              See all projects
            </span>
            <span className="opacity-0">See all projects</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
