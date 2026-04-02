import { Github, Linkedin, Instagram, Twitter, Mail } from "lucide-react"

const socialLinks = [
  { href: "https://www.linkedin.com/in/farihane-zannou-708475215/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/faridev18", icon: Github, label: "GitHub" },
  { href: "https://www.instagram.com/farihane.zannou/", icon: Instagram, label: "Instagram" },
  { href: "mailto:farihane@farihane.com", icon: Mail, label: "Email" },
  { href: "https://twitter.com/farihane_z", icon: Twitter, label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 md:px-6 py-6 md:py-8 flex flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-6">
        <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
          © 2026 Farihane S. ZANNOU. All rights reserved.
        </p>
        <div className="flex items-center gap-3 md:gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
      <div className="md:h-0 h-20">

      </div>
    </footer>
  )
}
