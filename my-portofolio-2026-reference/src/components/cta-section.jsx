import { Link } from "react-router"
import SplitText from "./SplitText"

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-accent border border-accent/30 rounded-full">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Available for projects
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-title font-medium mb-8">
          <SplitText
            text="Start your"
            className="text-3xl md:text-4xl lg:text-5xl font-title font-medium"
            delay={50}
            duration={1.5}
            ease="bounce.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <br />
          <SplitText
            text="next digital chapter."
            className="text-3xl md:text-4xl lg:text-5xl font-title font-medium"
            delay={50}
            duration={1.5}
            ease="bounce.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={() => console.log('All letters have animated!')}
            showCallback
          />
        </h2>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium border border-foreground rounded-full hover:bg-foreground hover:text-background transition-colors overflow-hidden relative group"
        >
          <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-[150%]">
            Contact me
          </span>
          <span className="absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-300 group-hover:translate-y-0">
            Contact me
          </span>
          <span className="opacity-0">Contact me</span>
        </Link>
      </div>
    </section>
  )
}
