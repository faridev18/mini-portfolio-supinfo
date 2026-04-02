import { cn } from "../lib/utils"

export function SectionBadge({ children, className }) {
  return (
    <div className={cn("flex items-center gap-2 text-accent text-sm font-medium uppercase tracking-wider", className)}>
      <span>{children}</span>
    </div>
  )
}
