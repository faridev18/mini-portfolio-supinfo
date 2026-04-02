import { useState, useEffect } from "react"
import { Link } from "react-router"
import { Helmet } from "react-helmet-async"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { SectionBadge } from "../components/section-badge"
import { CTASection } from "../components/cta-section"
import { projectsAPI } from "@/lib/api"
import { Skeleton } from "@/components/ui/skeleton"

function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
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
          <h3 className="font-medium mb-1 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground">{project.category}</p>
        </div>
        <span className="text-sm text-muted-foreground">{project.annee}</span>
      </div>
    </Link>
  )
}

export default function Project() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All" },
    { id: "development", label: "Development" },
    { id: "webgl", label: "WebGL & 3D" },
    { id: "design", label: "Design" },
  ]

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)
        const response = await projectsAPI.getAll()
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

  // Filtrer les projets selon le filtre actif
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true
    
    const category = project.category?.toLowerCase() || ""
    
    switch (activeFilter) {
      case "development":
        return category.includes("development") || category.includes("développement")
      case "webgl":
        return category.includes("webgl") || category.includes("3d")
      case "design":
        return category.includes("design")
      default:
        return true
    }
  })

  // Composant pour la grille de projets (skeleton ou contenu)
  const ProjectsGrid = () => {
    if (loading) {
      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
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
        <div className="text-center py-20">
          <p className="text-muted-foreground">{error}</p>
        </div>
      )
    }

    if (filteredProjects.length === 0) {
      return (
        <div className="text-center py-20">
          <p className="text-muted-foreground">Aucun projet trouvé pour ce filtre.</p>
        </div>
      )
    }

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>Projects | Portfolio & Work</title>
        <meta name="description" content="Explore my web development projects, mobile applications and creative experiments." />
      </Helmet>
      <Header />
      <main>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            {/* Header - Toujours visible */}
            <div className="mb-12">
              <SectionBadge>Portfolio</SectionBadge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-title font-medium mt-4 mb-4">
                My Work
              </h1>
              <p className="text-muted-foreground max-w-xl">
                A collection of projects I've worked on, from web development 
                to mobile apps and creative experiments.
              </p>
            </div>

            {/* Filtres - Toujours visibles */}
            <div className="flex flex-wrap gap-3 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${
                    activeFilter === filter.id
                      ? "bg-foreground text-background"
                      : "border border-border hover:border-foreground"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Grille de projets - Skeleton pendant le chargement */}
            <ProjectsGrid />
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
