import React from "react"
import { useState } from "react"
import { contactAPI } from "@/lib/api"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)
  const [fieldErrors, setFieldErrors] = useState({})
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Effacer l'erreur du champ quand l'utilisateur tape
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({ ...prev, [name]: null }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    setFieldErrors({})
    
    try {
      const response = await contactAPI.send(formData)
      if (response.success) {
        setSubmitted(true)
        setFormData({ nom: "", email: "", sujet: "", message: "" })
      }
    } catch (err) {
      // Gérer les erreurs de validation Laravel
      if (err.errors) {
        setFieldErrors(err.errors)
        setError("Please fix the errors below.")
      } else {
        setError(err.message || "An error occurred. Please try again.")
      }
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl text-accent">&#10003;</span>
        </div>
        <h3 className="text-xl font-medium mb-2">Message sent!</h3>
        <p className="text-muted-foreground">
          Thank you for your message. I will get back to you as soon as possible.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-md">
          <p className="text-sm text-red-500">{error}</p>
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="nom" className="block text-sm font-medium">
          Full Name
        </label>
        <input
          id="nom"
          name="nom"
          type="text"
          placeholder="Your name"
          required
          value={formData.nom}
          onChange={handleChange}
          className={`w-full px-4 py-2.5 bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors ${fieldErrors.nom ? 'border-red-500' : 'border-border'}`}
        />
        {fieldErrors.nom && (
          <p className="text-xs text-red-500">{fieldErrors.nom[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com"
          required
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2.5 bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors ${fieldErrors.email ? 'border-red-500' : 'border-border'}`}
        />
        {fieldErrors.email && (
          <p className="text-xs text-red-500">{fieldErrors.email[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="sujet" className="block text-sm font-medium">
          Subject
        </label>
        <input
          id="sujet"
          name="sujet"
          type="text"
          placeholder="Subject of your message"
          required
          value={formData.sujet}
          onChange={handleChange}
          className={`w-full px-4 py-2.5 bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors ${fieldErrors.sujet ? 'border-red-500' : 'border-border'}`}
        />
        {fieldErrors.sujet && (
          <p className="text-xs text-red-500">{fieldErrors.sujet[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell me about your project..."
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-2.5 bg-background border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors ${fieldErrors.message ? 'border-red-500' : 'border-border'}`}
        />
        {fieldErrors.message && (
          <p className="text-xs text-red-500">{fieldErrors.message[0]}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium border border-foreground rounded-full hover:bg-foreground hover:text-background transition-colors overflow-hidden relative group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-[150%]">
          {isSubmitting ? "Sending..." : "Send Message"}
        </span>
        <span className="absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-300 group-hover:translate-y-0">
          {isSubmitting ? "Sending..." : "Send Message"}
        </span>
        <span className="opacity-0">{isSubmitting ? "Sending..." : "Send Message"}</span>
      </button>
    </form>
  )
}
