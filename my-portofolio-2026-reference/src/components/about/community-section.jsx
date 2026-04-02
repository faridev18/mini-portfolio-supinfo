import { Link } from "react-router"
import { SectionBadge } from "../section-badge"
import { Users, Briefcase, BookOpen, MessageCircle, Code, Palette, Brush, Layers, Smartphone, Rocket } from "lucide-react"
import CountUp from "react-countup"

const services = [
  {
    icon: Code,
    title: "Web & App Development",
    description: "Custom web and mobile applications built with modern, scalable, and high-performance technologies.",
  },
  {
    icon: Palette,
    title: "UI/UX & Product Design",
    description: "User-centered design focused on intuitive, accessible, and conversion-driven digital experiences.",
  },
  {
    icon: Brush,
    title: "Branding & Visual Identity",
    description: "Strategic brand systems, logos, and visual identities that communicate your vision and values.",
  },
  {
    icon: Layers,
    title: "3D & Interactive Experiences",
    description: "Immersive 3D, WebGL, and motion-driven experiences that engage and elevate your digital presence.",
  },
]


const stats = [
  { value: 20, label: "Completed Projects" },
  { value: 15, label: "Happy Clients" },
  { value: 5, label: "Years of Experience" },
]

export function CommunitySection() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-lg p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <service.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <h3 className="font-medium mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div>
            <SectionBadge>My Work</SectionBadge>
            <h2 className="text-3xl md:text-4xl font-title font-medium mt-4 mb-4">
              Building Scalable & Meaningful Digital Solutions
            </h2>
            <p className="text-muted-foreground mb-8">
              I help brands and entrepreneurs build robust, high-performance web and mobile platforms
              focused on results. My goal: design digital products that engage, convert, and scale with your growth.
            </p>

            <div className="flex gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl font-title font-medium text-foreground">
                    <CountUp end={stat.value} duration={2.5} suffix="+" enableScrollSpy scrollSpyOnce />
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium border border-foreground rounded-full hover:bg-foreground hover:text-background transition-colors overflow-hidden relative group"
            >
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-[150%]">
                Get In Touch
              </span>
              <span className="absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-300 group-hover:translate-y-0">
                Get In Touch
              </span>
              <span className="opacity-0">Get In Touch</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
