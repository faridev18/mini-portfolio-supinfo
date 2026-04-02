import { Link } from "react-router"
import { ArrowUpRight, Hand } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <p className=" mb-4 flex items-center gap-2">
            <Hand className="w-5 h-5 text-accent animate-wave" />
            Hey! It's me, Farihane.

          </p>
          <h1 className="text-4xl md:text-5xl font-title lg:text-6xl font-medium leading-tight mb-8">
            
            Designing <span className="text-accent">meaningful experiences </span> that inspire and engage.
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-12">
          <div className="flex items-center gap-6 flex-wrap">
            {[
              { href: "https://www.linkedin.com/in/farihane-zannou-708475215/", label: "LINKEDIN" },
              { href: "https://github.com/faridev18", label: "GITHUB" },
              { href: "https://www.instagram.com/farihane.zannou/", label: "INSTAGRAM" },
              { href: "mailto:farihane@farihane.com", label: "EMAIL" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium  hover:text-foreground transition-colors flex items-center gap-1 group"
              >
                {link.label}
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>

          <div className="flex flex-col md:items-end gap-4">
            <p className="text-sm  max-w-sm md:text-right">
              I collaborate with brands worldwide to deliver refined, accessible, and high-impact digital experiences that inspire trust, spark emotion, and create real value.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium border border-foreground rounded-full hover:bg-foreground hover:text-background transition-colors overflow-hidden relative group"
            >
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-[150%]">
                More about me
              </span>
              <span className="absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-300 group-hover:translate-y-0">
                More about me
              </span>
              <span className="opacity-0">More about me</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
