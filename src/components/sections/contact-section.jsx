import { useState } from "react"
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
  { href: "https://www.linkedin.com/in/farihane-zannou-708475215/", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://github.com/faridev18", icon: GithubIcon, label: "GitHub" },
  { href: "https://www.instagram.com/farihane.zannou/", icon: InstagramIcon, label: "Instagram" },
  { href: "mailto:farihane@farihane.com", icon: Mail, label: "Email" },
  { href: "https://twitter.com/farihane_z", icon: TwitterIcon, label: "Twitter" },
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ nom: "", email: "", sujet: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Form */}
          <div>
            <SectionBadge>Contact</SectionBadge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-title font-medium mt-4 mb-8">
              Démarrons un projet ensemble
            </h2>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-accent">&#10003;</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Message envoyé !</h3>
                <p className="text-muted-foreground">
                  Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm text-accent hover:underline cursor-pointer"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="nom" className="block text-sm font-medium">
                    Nom complet
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    placeholder="Votre nom"
                    required
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="sujet" className="block text-sm font-medium">
                    Sujet
                  </label>
                  <input
                    id="sujet"
                    name="sujet"
                    type="text"
                    placeholder="Sujet de votre message"
                    required
                    value={formData.sujet}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Parlez-moi de votre projet..."
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium border border-foreground rounded-full hover:bg-foreground hover:text-background transition-colors overflow-hidden relative group cursor-pointer"
                >
                  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-[150%]">
                    Envoyer le message
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-300 group-hover:translate-y-0">
                    Envoyer le message
                  </span>
                  <span className="opacity-0">Envoyer le message</span>
                </button>
              </form>
            )}
          </div>

          {/* Right - Contact Info */}
          <div className="lg:pt-16">
            <div className="bg-secondary/50 rounded-lg p-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium">Disponible pour des projets</span>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ma boîte de réception est toujours ouverte. Que vous ayez un projet ou que vous souhaitiez simplement dire bonjour, n{"'"}hésitez pas à me contacter. Je vous répondrai rapidement.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:farihane@farihane.com" className="font-medium hover:text-accent transition-colors">
                    farihane@farihane.com
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
