import React from "react"
import { cn } from "../lib/utils"

export function Marquee({ children, className, speed = "normal", reverse = false }) {
  const speedClass = {
    slow: "animate-[marquee_60s_linear_infinite]",
    normal: "animate-[marquee_40s_linear_infinite]",
    fast: "animate-[marquee_20s_linear_infinite]",
  }

  return (
    <div className={cn("overflow-hidden relative", className)}>
      <div
        className={cn(
          "flex gap-8 whitespace-nowrap",
          speedClass[speed],
          reverse && "[animation-direction:reverse]"
        )}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
