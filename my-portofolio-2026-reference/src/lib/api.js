const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api'

/**
 * Fonction utilitaire pour les appels API
 */
async function fetchAPI(endpoint, options = {}) {
  const url = `${API_URL}${endpoint}`
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...options.headers,
    },
    ...options,
  }

  try {
    const response = await fetch(url, config)
    const data = await response.json()

    if (!response.ok) {
      // Gérer les erreurs de validation Laravel (422)
      if (response.status === 422 && data.errors) {
        const error = new Error(data.message || 'Validation failed')
        error.errors = data.errors
        throw error
      }
      throw new Error(data.message || 'Une erreur est survenue')
    }

    return data
  } catch (error) {
    console.error(`API Error [${endpoint}]:`, error)
    throw error
  }
}

/**
 * API Projects
 */
export const projectsAPI = {
  /**
   * Récupère tous les projets publiés
   * @returns {Promise<{success: boolean, data: Array}>}
   */
  getAll: () => fetchAPI('/projects'),

  /**
   * Récupère les projets favoris publiés
   * @returns {Promise<{success: boolean, data: Array}>}
   */
  getFavorites: () => fetchAPI('/projects/favorites'),

  /**
   * Récupère un projet par son slug
   * @param {string} slug 
   * @returns {Promise<{success: boolean, data: Object}>}
   */
  getBySlug: (slug) => fetchAPI(`/projects/${slug}`),
}

/**
 * API Contact
 */
export const contactAPI = {
  /**
   * Envoie un message de contact
   * @param {Object} data - {name, email, subject, message}
   * @returns {Promise<{success: boolean, message: string}>}
   */
  send: (data) => fetchAPI('/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
}

export default {
  projects: projectsAPI,
  contact: contactAPI,
}
