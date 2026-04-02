import { Github, Linkedin, Instagram, Twitter, Mail } from "lucide-react"
import profileImg from "../../assets/about/profile3.jpg"

const socialLinks = [
  { href: "https://www.linkedin.com/in/farihane-zannou-708475215/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/faridev18", icon: Github, label: "GitHub" },
  { href: "https://www.instagram.com/farihane.zannou/", icon: Instagram, label: "Instagram" },
  { href: "mailto:farihane@farihane.com", icon: Mail, label: "Email" },
  { href: "https://twitter.com/farihane_z", icon: Twitter, label: "Twitter" },
]

export function ContactInfo() {
  return (
    <div className="bg-secondary/50 rounded-lg p-8">
      <div className="flex items-center gap-2 mb-6">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="text-sm font-medium">Available for projects</span>
      </div>

      <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
        <img
          src={profileImg}
          alt="Farihane S. ZANNOU"
          className="object-cover w-full h-full"
        />
      </div>

      <p className="text-muted-foreground mb-8 leading-relaxed">
        My inbox is always open. Whether you have a project or just want to say hello, 
        I'd be happy to hear from you. Feel free to reach out and I'll get back to you promptly.
      </p>

      <div className="flex items-center gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label={link.label}
          >
            <link.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  )
}
