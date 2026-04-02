import { useState, useEffect } from "react"
import { SectionBadge } from "../section-badge"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

const testimonials = [
  {
    name: "SOHOU Céphas",
    role: "Graphic designer",
    content:
      "Extremely skilled with great attention to detail. Farihane transformed our ideas into an impressive digital reality.",
  },
  {
    name: "AFFO Nourath",
    role: "Web developer",
    content:
      "Exceptional developer and graphic designer, very responsive. He quickly understands needs and always delivers beyond expectations.",
  },
  {
    name: "Lauretta ZINSOU",
    role: "Collaborator",
    content:
      "Professional, friendly and attentive to clients. Farihane did remarkable work on our project.",
  },
  {
    name: "Appolinaire GBETCHIN",
    role: "Collaborator",
    content:
      "Understood my needs and created a perfect website. I highly recommend his services for any web project.",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      rotateY: direction < 0 ? 15 : -15,
    }),
  }

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20">
          {/* Left side - Title */}
          <div className="lg:w-1/3 ">
            <SectionBadge>Testimonials</SectionBadge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-title font-medium mt-4 mb-4">
              What others say
            </h2>
            <p className="text-muted-foreground mb-8">
              I've worked with amazing people over the years, here's what they have to say about me.
            </p>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="group h-12 w-12 inline-flex items-center justify-center border-2 border-border rounded-full hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="group h-12 w-12 inline-flex items-center justify-center border-2 border-border rounded-full hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Progress dots */}
            <div className="flex items-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className="group relative"
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  <span
                    className={`block h-2 rounded-full transition-all duration-500 ${
                      index === currentIndex
                        ? "w-8 bg-accent"
                        : "w-2 bg-border hover:bg-muted-foreground"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right side - Testimonial Card */}
          <div className="lg:w-2/3 overflow-hidden">
            <div className="relative min-h-[380px] md:min-h-[320px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 },
                    rotateY: { duration: 0.4 },
                  }}
                  className="absolute inset-0"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="h-full bg-secondary/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/50 hover:border-accent/30 transition-colors duration-300 group overflow-hidden relative">
                    {/* Quote icon */}
                    <Quote className="w-10 h-10 text-accent/20 mb-4 group-hover:text-accent/40 transition-colors duration-300 shrink-0" />

                    {/* Content */}
                    <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-6 font-light line-clamp-4">
                      "{testimonials[currentIndex].content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="relative shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center text-accent font-semibold text-base">
                          {testimonials[currentIndex].name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .slice(0, 2)}
                        </div>
                        <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                          <span className="text-background text-xs">✓</span>
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">
                          {testimonials[currentIndex].name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Counter */}
            <div className="mt-6 flex justify-end">
              <span className="text-sm text-muted-foreground font-title">
                <span className="text-accent font-semibold text-lg">{String(currentIndex + 1).padStart(2, "0")}</span>
                <span className="mx-2">/</span>
                <span>{String(testimonials.length).padStart(2, "0")}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
