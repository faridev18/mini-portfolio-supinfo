import { SectionBadge } from "../section-badge"
import { Mail } from "lucide-react"

const GithubIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
)

const LinkedinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
)

const InstagramIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
)

const TwitterIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
)

const socialLinks = [
  { href: "https://www.linkedin.com/in/prince-degboe/", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://github.com/prince-degboe", icon: GithubIcon, label: "GitHub" },
  { href: "https://www.instagram.com/prince.degboe/", icon: InstagramIcon, label: "Instagram" },
  { href: "mailto:prince.degboe@email.com", icon: Mail, label: "Email" },
  { href: "https://twitter.com/prince_degboe", icon: TwitterIcon, label: "Twitter" },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <SectionBadge>Contact</SectionBadge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-title font-medium mt-4 mb-8">
              Démarrons un projet ensemble
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Vous avez un projet d{"'"}application mobile en tête ? Je suis disponible pour en discuter.
              Envoyez-moi un email et je vous répondrai rapidement.
            </p>
            <a
              href="mailto:prince.degboe@email.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-medium border border-foreground rounded-full hover:bg-foreground hover:text-background transition-colors overflow-hidden relative group"
            >
              <span className="absolute inset-0 flex items-center justify-center gap-2 transition-transform duration-300 group-hover:-translate-y-[150%]">
                <Mail className="w-4 h-4" /> M{"'"}envoyer un email
              </span>
              <span className="absolute inset-0 flex items-center justify-center gap-2 translate-y-[150%] transition-transform duration-300 group-hover:translate-y-0">
                <Mail className="w-4 h-4" /> M{"'"}envoyer un email
              </span>
              <span className="opacity-0 flex items-center gap-2"><Mail className="w-4 h-4" /> M{"'"}envoyer un email</span>
            </a>
          </div>

          {/* Right - Contact Info */}
          <div className="lg:pt-16">
            <div className="bg-secondary/50 rounded-lg p-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium">Disponible pour des projets</span>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ma boîte de réception est toujours ouverte. Que vous ayez un projet mobile ou que vous souhaitiez simplement dire bonjour, n{"'"}hésitez pas à me contacter.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:prince.degboe@email.com" className="font-medium hover:text-accent transition-colors">
                    prince.degboe@email.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Localisation</p>
                  <p className="font-medium">Cotonou, Bénin</p>
                </div>
              </div>

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
          </div>
        </div>
      </div>
    </section>
  )
}
