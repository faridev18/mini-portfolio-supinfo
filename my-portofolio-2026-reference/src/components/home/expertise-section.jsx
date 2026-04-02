import { useState, useEffect, useRef, memo } from "react"
import { SectionBadge } from "../section-badge"
import { ChevronDown, Code, Palette, Layers, Brush, Image } from "lucide-react"
import { cn } from "../../lib/utils"
import developmentImg from "../../assets/expertise/development.jpg"
import designImg from "../../assets/expertise/design.jpg"
import threeDImg from "../../assets/expertise/3d.jpg"
import brandingImg from "../../assets/expertise/branding.jpg"
import graphicImg from "../../assets/expertise/graphic.jpg"
import FallingText from "../FallingText"

// Composant mémorisé pour éviter les re-renders
const MemoizedFallingText = memo(function MemoizedFallingText() {
  return (
    <FallingText
      text={`I build powerful, scalable, and visually engaging digital experiences using React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3, Node.js, Express.js, PHP, Laravel, Python, Tailwind CSS, React Native, Three.js, Electron.js, Git/GitHub, WordPress, and Figma to design, develop, and deliver modern web, mobile, and 3D interactive solutions.`}
      highlightWords={[
        "React.js",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Laravel",
        "Three.js",
        "React Native",
        "Figma",
        "Git/GitHub",
        "3D",
        "web",
        "mobile",
      ]}
      trigger="hover"
      backgroundColor="transparent"
      wireframes={false}
      gravity={0.56}
      fontSize="20px"
      mouseConstraintStiffness={0.9}
    />
  )
})

const expertises = [
  {
    icon: Code,
    title: "Development",
    description: "Full stack web and mobile development using React, Next.js, Laravel, and more.",
    image: developmentImg,
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful, user-centered interfaces with Figma and Adobe Suite.",
    image: designImg,
  },
  {
    icon: Layers,
    title: "3D & WebGL",
    description: "Interactive 3D experiences using Three.js and React Three Fiber.",
    image: threeDImg,
  },
  {
    icon: Brush, // or Image / PenTool depending on your icon set
    title: "Branding",
    description: "Building strong, consistent brand identities that communicate vision and values.",
    image: brandingImg,
  },
  {
    icon: Image, // or PenTool / LayoutGrid
    title: "Graphic Design",
    description: "Designing impactful visual assets for digital and print using modern design tools.",
    image: graphicImg,
  },
]


const techStack = [
  "React.js",
  "Next.js",
  "Laravel",
  "Tailwind CSS",
  "Three.js",
  "TypeScript",
  "Figma",
  "Node.js",
]

const AUTOPLAY_DURATION = 5000 // 5 secondes par accordéon

export function ExpertiseSection() {
  const [openIndex, setOpenIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)
  const progressIntervalRef = useRef(null)
  const pauseTimeoutRef = useRef(null)

  useEffect(() => {
    if (isPaused) {
      clearTimeout(intervalRef.current)
      clearInterval(progressIntervalRef.current)
      return
    }

    // Progression de la barre
    const startTime = Date.now()
    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min((elapsed / AUTOPLAY_DURATION) * 100, 100)
      setProgress(newProgress)
    }, 50)

    // Changement d'accordéon
    intervalRef.current = setTimeout(() => {
      setProgress(0)
      setOpenIndex((prev) => (prev + 1) % expertises.length)
    }, AUTOPLAY_DURATION)

    return () => {
      clearTimeout(intervalRef.current)
      clearInterval(progressIntervalRef.current)
    }
  }, [openIndex, isPaused])

  const handleClick = (index) => {
    // Clear previous pause timeout
    clearTimeout(pauseTimeoutRef.current)
    
    setIsPaused(true)
    setProgress(0)
    setOpenIndex(openIndex === index ? -1 : index)
    
    // Reprendre l'autoplay après 10 secondes d'inactivité
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false)
    }, 10000)
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearTimeout(pauseTimeoutRef.current)
    }
  }, [])

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <SectionBadge>Specialties</SectionBadge>
          <h2 className="text-3xl md:text-5xl font-title font-medium mt-4">Areas of Expertise</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            {expertises.map((item, index) => (
              <div
                key={item.title}
                className="border border-border rounded-lg overflow-hidden bg-background transition-all duration-300"
              >
                <button
                  onClick={() => handleClick(index)}
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
                
                {/* Timeline / Progress bar */}
                <div className="h-0.5 bg-border">
                  <div
                    className={cn(
                      "h-full bg-accent transition-all duration-50 ease-linear",
                      openIndex !== index && "opacity-0"
                    )}
                    style={{ width: openIndex === index ? `${progress}%` : "0%" }}
                  />
                </div>

                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-4 pt-2">
                      <p className="text-sm text-muted-foreground pl-8">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src={expertises[openIndex >= 0 ? openIndex : 0].image}
              alt="Expertise"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              key={openIndex}
            />
          </div>
        </div>

        {/* <div className="flex flex-wrap gap-3 mt-12 justify-center">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 text-sm border border-border rounded-full bg-background text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            >
              {tech}
            </span>
          ))}
        </div> */}

        <div className="h-70 hidden md:block border-b mt-16 p-4 rounded-lg bg-secondary/20">
          <MemoizedFallingText />
        </div>
      </div>
    </section>
  )
}
