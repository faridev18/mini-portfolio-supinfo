import { Link, useLocation } from "react-router"
import { cn } from "../lib/utils"
import { useState, useEffect } from "react"
import { Home, User, FolderOpen, Mail, Sun, Moon } from "lucide-react"
import { useTheme } from "@/lib/theme-context"

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: FolderOpen },
  { href: "/contact", label: "Contact", icon: Mail },
]

export function Header() {
  const location = useLocation()
  const pathname = location.pathname
  const [scrollProgress, setScrollProgress] = useState(0)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      // Transition progressive de 0 à 200px de scroll, puis bloqué
      const maxScroll = 200
      const progress = Math.min(window.scrollY / maxScroll, 1)
      setScrollProgress(progress)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Interpolation : 100% → 40% (de 100 à 40, donc réduction de 60%)
  const headerWidth = 100 - (scrollProgress * 60)

  return (
    <>
      {/* Dégradé fixe en arrière-plan */}
      <div 
        className="fixed top-0 left-0 right-0 h-32 pointer-events-none z-40 bg-gradient-to-b from-background via-background/50 to-transparent"
      />

      {/* Desktop Header */}
      <header className="hidden md:flex sticky top-0 z-50 justify-center py-3 px-4">
        <div
          className="bg-background/80 backdrop-blur-md border border-border max-w-7xl mx-auto rounded-full px-5 py-1.5 w-full"
          style={{
            width: `${headerWidth}%`,
            minWidth: '600px',
            boxShadow: scrollProgress > 0 ? `0 4px 20px rgba(0,0,0,${scrollProgress * 0.15})` : 'none',
            transition: 'box-shadow 0.3s ease'
          }}
        >
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold tracking-tight">
              FZ
            </Link>

            <nav className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "text-sm transition-colors flex items-center gap-1.5",
                    pathname === item.href
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {pathname === item.href && (
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  )}
                  <span className="inline-block overflow-hidden relative group">
                    <span className="block transition-transform duration-300 group-hover:-translate-y-[150%]">
                      {item.label}
                    </span>
                    <span className="absolute left-0 top-0 translate-y-[150%] transition-transform duration-300 group-hover:translate-y-0">
                      {item.label}
                    </span>
                  </span>
                </Link>
              ))}
            </nav>
            {/* Button light/Dark */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Top Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight">
          FZ
        </Link>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-muted/50 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-t border-border rounded-t-3xl px-4 py-3 safe-area-inset-bottom">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all",
                  isActive
                    ? "bg-accent/10 text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className={cn("w-5 h-5", isActive && "text-accent")} />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}
