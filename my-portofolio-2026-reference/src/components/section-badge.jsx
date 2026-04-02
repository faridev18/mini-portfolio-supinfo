import React from "react"
import { Sparkles } from "lucide-react"
import { cn } from "../lib/utils"
import ShinyText from "./ShinyText"

export function SectionBadge({ children, className }) {
  return (
    <div className={cn("flex items-center gap-2 text-accent text-sm font-medium uppercase tracking-wider", className)}>
     
      <span>

        <ShinyText
          text={`✨` + children}
          speed={2}
          delay={0}
          color="#11ad32"
          shineColor="#ffffff"
          spread={120}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
        />

        

      </span>
    </div>
  )
}
