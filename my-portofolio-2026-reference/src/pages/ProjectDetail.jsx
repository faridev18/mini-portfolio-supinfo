import { useState, useEffect, useRef, useMemo } from "react"
import { useParams, Link } from "react-router"
import { Helmet } from "react-helmet-async"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { CTASection } from "../components/cta-section"
import { ArrowLeft, ArrowRight, ExternalLink, Loader2, Copy, Check } from "lucide-react"
import { projectsAPI } from "@/lib/api"
import { Skeleton } from "@/components/ui/skeleton"

// Composant pour afficher le contenu HTML avec boutons de copie sur les blocs de code
function WysiwygContent({ html }) {
  const contentRef = useRef(null)

  useEffect(() => {
    if (!contentRef.current) return

    // Trouver tous les blocs <pre> et ajouter le bouton de copie
    const preBlocks = contentRef.current.querySelectorAll('pre')
    
    preBlocks.forEach((pre) => {
      // Éviter d'ajouter plusieurs boutons
      if (pre.querySelector('.copy-btn')) return

      // Wrapper le pre dans un div pour le positionnement
      const wrapper = document.createElement('div')
      wrapper.className = 'relative group'
      pre.parentNode.insertBefore(wrapper, pre)
      wrapper.appendChild(pre)

      // Créer le bouton de copie
      const copyBtn = document.createElement('button')
      copyBtn.className = 'copy-btn absolute top-2 right-2 md:top-3 md:right-3 p-1.5 md:p-2 bg-background/90 hover:bg-background rounded-md md:rounded-lg text-muted-foreground hover:text-foreground transition-all cursor-pointer border border-border/50'
      copyBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`
      
      copyBtn.addEventListener('click', async () => {
        const code = pre.querySelector('code')?.textContent || pre.textContent
        await navigator.clipboard.writeText(code)
        
        // Changer l'icône temporairement
        copyBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
        copyBtn.classList.add('text-green-500')
        
        setTimeout(() => {
          copyBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`
          copyBtn.classList.remove('text-green-500')
        }, 2000)
      })

      wrapper.appendChild(copyBtn)
    })
  }, [html])

  return (
    <div 
      ref={contentRef}
      className="wysiwyg-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [contentReady, setContentReady] = useState(false)
  const [error, setError] = useState(null)
  const [nextProject, setNextProject] = useState(null)

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true)
        setContentReady(false)
        setProject(null)
        
        const response = await projectsAPI.getBySlug(slug)
        if (response.success) {
          setProject(response.data)
          // Délai court pour le parsing du contenu lourd
          setTimeout(() => setContentReady(true), 100)
        }

        // Récupérer tous les projets pour trouver le suivant (en parallèle)
        const allProjectsResponse = await projectsAPI.getAll()
        if (allProjectsResponse.success) {
          const projects = allProjectsResponse.data
          const currentIndex = projects.findIndex(p => p.slug === slug)
          if (currentIndex !== -1 && currentIndex < projects.length - 1) {
            setNextProject(projects[currentIndex + 1])
          } else if (projects.length > 0) {
            // Si c'est le dernier, revenir au premier
            setNextProject(projects[0])
          }
        }
      } catch (err) {
        setError("Impossible de charger le projet")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchProject()
  }, [slug])

  // Parser les données du projet si disponible
  const technologies = project ? (
    Array.isArray(project.technologie) 
      ? project.technologie 
      : (typeof project.technologie === 'string' 
          ? JSON.parse(project.technologie) 
          : [])
  ) : []

  const designScreens = project?.images 
    ? (Array.isArray(project.images) ? project.images : JSON.parse(project.images))
    : []

  const content = project?.contenu || null

  // Skeleton pour le chargement initial (aucune donnée)
  if (loading && !project) {
    return (
      <>
        <Header />
        <main>
          {/* Navigation Skeleton */}
          <section className="pt-20 md:pt-8">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <div className="flex items-center justify-between">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-5 w-16" />
              </div>
            </div>
          </section>

          {/* Title & Info Skeleton */}
          <section className="py-6 md:py-8">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6">
                <div className="flex-1">
                  <Skeleton className="h-10 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3 mb-6" />
                  <div className="flex flex-wrap gap-2">
                    <Skeleton className="h-7 w-20 rounded-full" />
                    <Skeleton className="h-7 w-24 rounded-full" />
                    <Skeleton className="h-7 w-16 rounded-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-3 md:gap-4 md:items-end">
                  <Skeleton className="h-12 w-36 rounded-full" />
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            </div>
          </section>

          {/* Content Skeleton */}
          <section className="py-6 md:py-8">
            <div className="max-w-5xl mx-auto px-4 md:px-6 space-y-4">
              <Skeleton className="h-6 w-1/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-40 w-full rounded-xl mt-6" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  if (error || (!loading && !project)) {
    return (
      <>
        <Header />
        <main>
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
              <div className="text-center py-20">
                <p className="text-destructive mb-4">{error || "Projet non trouvé"}</p>
                <Link to="/projects" className="text-accent hover:underline">
                  Retour aux projets
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Portfolio Project</title>
        <meta name="description" content={project.description || `Discover the ${project.title} project - ${project.category || 'Web Development'}`} />
      </Helmet>
      <Header />
      <main>
        {/* Navigation & Year */}
        <section className="pt-20 md:pt-8">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between">
              <Link 
                to="/projects" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
              <span className="text-sm text-muted-foreground">{project.annee}</span>
            </div>
          </div>
        </section>

        {/* Title & Info */}
        <section className="py-6 md:py-8">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6">
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium font-title mb-3 md:mb-4">{project.title}</h1>
                <p className="text-sm md:text-base text-muted-foreground max-w-2xl mb-4 md:mb-6">
                  {project.description}
                </p>
                
                {/* Technologies Tags */}
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2.5 py-1 text-xs md:text-sm bg-secondary rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 md:gap-4 md:items-end">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base bg-foreground text-background rounded-full hover:opacity-90 transition-opacity w-full md:w-auto text-center"
                  >
                    Check it out
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                
                <div className="text-sm space-y-2">
                  {project.role && (
                    <div className="flex gap-2">
                      <span className="text-muted-foreground">Roles:</span>
                      <span>{project.role}</span>
                    </div>
                  )}
                  {project.client && (
                    <div className="flex gap-2">
                      <span className="text-muted-foreground">Client:</span>
                      <span>{project.client}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contenu HTML */}
        {content && (
          <section className="py-6 md:py-8">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              {contentReady ? (
                <WysiwygContent html={content} />
              ) : (
                <div className="space-y-4">
                  <Skeleton className="h-6 w-1/3" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                  <Skeleton className="h-48 w-full rounded-xl mt-6" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              )}
            </div>
          </section>
        )}

        {/* Design Screens */}
        {designScreens.length > 0 && (
          <section className="py-6 md:py-8">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">Design Screens</h2>
              <div className="grid gap-4 md:gap-6">
                {contentReady ? (
                  designScreens.map((screen, index) => (
                    <div 
                      key={index}
                      className="relative rounded-2xl overflow-hidden bg-secondary"
                    >
                      <img
                        src={screen.url || screen}
                        alt={screen.alt || `Design screen ${index + 1}`}
                        className="w-full h-auto"
                      />
                    </div>
                  ))
                ) : (
                  <>
                    <Skeleton className="aspect-video w-full rounded-2xl" />
                    <Skeleton className="aspect-video w-full rounded-2xl" />
                  </>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Next Project */}
        {nextProject && (
          <section className="py-8 md:py-12">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <div className="flex justify-end">
                <Link 
                  to={`/projects/${nextProject.slug}`}
                  className="group flex items-center gap-3 text-right"
                >
                  <div>
                    <span className="text-sm text-muted-foreground block">Next</span>
                    <span className="font-medium group-hover:text-accent transition-colors">
                      {nextProject.title}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
              </div>
            </div>
          </section>
        )}

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
