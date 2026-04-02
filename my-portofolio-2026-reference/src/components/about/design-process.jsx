import { SectionBadge } from "../section-badge"
import { MessageSquare, PenTool, Palette, Code, CheckCircle } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding needs, goals and project vision through in-depth discussions.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Wireframe",
    description: "After defining the site details, it's easy to sketch ideas on paper.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Design",
    description: "The most fun part - adding flair to wireframes and bringing them to life.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Development",
    description: "Design can be final but it must be functional and practical. Development is key.",
    icon: Code,
  },
  {
    number: "05",
    title: "Quality Assurance",
    description: "Load time, SEO optimization, etc. influence the overall quality of the site.",
    icon: CheckCircle,
  },
]

export function DesignProcess() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <SectionBadge>My Process</SectionBadge>
          <h2 className="text-3xl md:text-4xl font-title font-medium  mt-4 mb-4">My Design Process</h2>
          <p className="text-muted-foreground max-w-xl">
            A structured approach to creating meaningful digital experiences that deliver results and exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-background border border-border rounded-lg p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <step.icon className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="font-medium mb-2">
                {step.number}. {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
