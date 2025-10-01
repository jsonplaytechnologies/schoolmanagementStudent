import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { Lightbulb, Send, CheckCircle, Clock, XCircle, AlertCircle, Filter } from 'lucide-react'

const styles = {
  container: {
    maxWidth: '1400px',
    margin: '0 auto'
  },
  header: {
    marginBottom: '2rem'
  },
  title: {
    fontSize: '1.875rem',
    fontWeight: '700',
    color: '#111827'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '1.5rem',
    marginBottom: '1.5rem'
  },
  section: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
  },
  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  formGroup: {
    marginBottom: '1rem'
  },
  label: {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '0.5rem'
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    outline: 'none'
  },
  textarea: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    outline: 'none',
    minHeight: '120px',
    resize: 'vertical'
  },
  select: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    outline: 'none',
    backgroundColor: 'white'
  },
  button: {
    padding: '0.75rem 1.5rem',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  primaryButton: {
    backgroundColor: '#3b82f6',
    color: 'white',
    width: '100%',
    justifyContent: 'center'
  },
  card: {
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    padding: '1rem',
    marginBottom: '1rem',
    transition: 'all 0.2s'
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '0.75rem'
  },
  cardTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '0.25rem'
  },
  cardMeta: {
    fontSize: '0.75rem',
    color: '#6b7280',
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
    marginBottom: '0.75rem'
  },
  cardContent: {
    fontSize: '0.875rem',
    color: '#374151',
    lineHeight: '1.5',
    marginBottom: '0.75rem'
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.25rem',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: '500'
  },
  badgePending: {
    backgroundColor: '#fef3c7',
    color: '#92400e'
  },
  badgeReview: {
    backgroundColor: '#dbeafe',
    color: '#1e40af'
  },
  badgeApproved: {
    backgroundColor: '#d1fae5',
    color: '#065f46'
  },
  badgeImplemented: {
    backgroundColor: '#c7d2fe',
    color: '#3730a3'
  },
  badgeRejected: {
    backgroundColor: '#fee2e2',
    color: '#991b1b'
  },
  categoryBadge: {
    backgroundColor: '#f3f4f6',
    color: '#374151'
  },
  filterBar: {
    display: 'flex',
    gap: '0.75rem',
    marginBottom: '1rem',
    flexWrap: 'wrap'
  },
  filterButton: {
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    border: '1px solid #d1d5db',
    backgroundColor: 'white',
    color: '#374151',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  filterButtonActive: {
    backgroundColor: '#3b82f6',
    color: 'white',
    borderColor: '#3b82f6'
  }
}

export default function Suggestions() {
  const { t, language } = useLanguage()
  const [filter, setFilter] = useState('all')
  const [formData, setFormData] = useState({
    title: '',
    category: 'platform',
    priority: 'normal',
    description: ''
  })

  const categories = language === 'fr'
    ? ['Plateforme', 'Enseignement', 'Installations', 'Activités', 'Cantine', 'Autre']
    : ['Platform', 'Teaching', 'Facilities', 'Activities', 'Cafeteria', 'Other']

  const suggestions = [
    {
      id: 1,
      title: language === 'fr' ? 'Améliorer l\'interface mobile' : 'Improve mobile interface',
      category: language === 'fr' ? 'Plateforme' : 'Platform',
      description: language === 'fr'
        ? 'Il serait bien d\'avoir une application mobile dédiée pour consulter les notes et les devoirs plus facilement.'
        : 'It would be great to have a dedicated mobile app to check grades and homework more easily.',
      date: '10/09/2025',
      status: 'review',
      priority: 'normal'
    },
    {
      id: 2,
      title: language === 'fr' ? 'Plus de séances de soutien en mathématiques' : 'More math tutoring sessions',
      category: language === 'fr' ? 'Enseignement' : 'Teaching',
      description: language === 'fr'
        ? 'Nous avons besoin de plus de créneaux de soutien scolaire en mathématiques, surtout avant les examens.'
        : 'We need more math tutoring slots, especially before exams.',
      date: '05/09/2025',
      status: 'approved',
      priority: 'high'
    },
    {
      id: 3,
      title: language === 'fr' ? 'Améliorer le menu de la cantine' : 'Improve cafeteria menu',
      category: language === 'fr' ? 'Cantine' : 'Cafeteria',
      description: language === 'fr'
        ? 'Il serait bien d\'avoir plus de variété dans les menus et des options végétariennes.'
        : 'It would be nice to have more variety in the menu and vegetarian options.',
      date: '01/09/2025',
      status: 'implemented',
      priority: 'normal'
    },
    {
      id: 4,
      title: language === 'fr' ? 'Espace de travail en groupe' : 'Group work space',
      category: language === 'fr' ? 'Installations' : 'Facilities',
      description: language === 'fr'
        ? 'Créer un espace dédié au travail en groupe avec tables et tableaux blancs.'
        : 'Create a dedicated space for group work with tables and whiteboards.',
      date: '28/08/2025',
      status: 'pending',
      priority: 'low'
    }
  ]

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: {
        style: styles.badgePending,
        icon: Clock,
        text: language === 'fr' ? 'En attente' : 'Pending'
      },
      review: {
        style: styles.badgeReview,
        icon: AlertCircle,
        text: language === 'fr' ? 'En révision' : 'Under Review'
      },
      approved: {
        style: styles.badgeApproved,
        icon: CheckCircle,
        text: language === 'fr' ? 'Approuvé' : 'Approved'
      },
      implemented: {
        style: styles.badgeImplemented,
        icon: CheckCircle,
        text: language === 'fr' ? 'Implémenté' : 'Implemented'
      },
      rejected: {
        style: styles.badgeRejected,
        icon: XCircle,
        text: language === 'fr' ? 'Rejeté' : 'Rejected'
      }
    }

    const config = statusConfig[status]
    const Icon = config.icon

    return (
      <span style={{ ...styles.badge, ...config.style }}>
        <Icon style={{ width: '0.75rem', height: '0.75rem' }} />
        {config.text}
      </span>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Suggestion submitted:', formData)
    setFormData({ title: '', category: 'platform', priority: 'normal', description: '' })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const filteredSuggestions = filter === 'all'
    ? suggestions
    : suggestions.filter(s => s.status === filter)

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>
          {language === 'fr' ? 'Améliorations & Suggestions' : 'Improvements & Suggestions'}
        </h1>
        <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
          {language === 'fr'
            ? 'Proposez vos idées pour améliorer votre expérience scolaire'
            : 'Share your ideas to improve your school experience'}
        </p>
      </div>

      <div style={styles.grid}>
        {/* Submit New Suggestion */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <Lightbulb style={{ width: '1.25rem', height: '1.25rem' }} />
            {language === 'fr' ? 'Nouvelle suggestion' : 'New Suggestion'}
          </h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>
                {language === 'fr' ? 'Titre' : 'Title'}
              </label>
              <input
                type="text"
                name="title"
                style={styles.input}
                placeholder={language === 'fr' ? 'Titre de votre suggestion...' : 'Title of your suggestion...'}
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>
                {language === 'fr' ? 'Catégorie' : 'Category'}
              </label>
              <select
                name="category"
                style={styles.select}
                value={formData.category}
                onChange={handleInputChange}
              >
                <option value="platform">{language === 'fr' ? 'Plateforme' : 'Platform'}</option>
                <option value="teaching">{language === 'fr' ? 'Enseignement' : 'Teaching'}</option>
                <option value="facilities">{language === 'fr' ? 'Installations' : 'Facilities'}</option>
                <option value="activities">{language === 'fr' ? 'Activités' : 'Activities'}</option>
                <option value="cafeteria">{language === 'fr' ? 'Cantine' : 'Cafeteria'}</option>
                <option value="other">{language === 'fr' ? 'Autre' : 'Other'}</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>
                {language === 'fr' ? 'Priorité' : 'Priority'}
              </label>
              <select
                name="priority"
                style={styles.select}
                value={formData.priority}
                onChange={handleInputChange}
              >
                <option value="low">{language === 'fr' ? 'Basse' : 'Low'}</option>
                <option value="normal">{language === 'fr' ? 'Normale' : 'Normal'}</option>
                <option value="high">{language === 'fr' ? 'Haute' : 'High'}</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>
                {language === 'fr' ? 'Description' : 'Description'}
              </label>
              <textarea
                name="description"
                style={styles.textarea}
                placeholder={language === 'fr'
                  ? 'Décrivez votre suggestion en détail...'
                  : 'Describe your suggestion in detail...'}
                value={formData.description}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit" style={{ ...styles.button, ...styles.primaryButton }}>
              <Send style={{ width: '1rem', height: '1rem' }} />
              {language === 'fr' ? 'Envoyer la suggestion' : 'Submit Suggestion'}
            </button>
          </form>
        </div>

        {/* My Suggestions */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            {language === 'fr' ? 'Mes suggestions' : 'My Suggestions'}
          </h2>

          <div style={styles.filterBar}>
            <button
              style={{
                ...styles.filterButton,
                ...(filter === 'all' ? styles.filterButtonActive : {})
              }}
              onClick={() => setFilter('all')}
            >
              {language === 'fr' ? 'Toutes' : 'All'} ({suggestions.length})
            </button>
            <button
              style={{
                ...styles.filterButton,
                ...(filter === 'pending' ? styles.filterButtonActive : {})
              }}
              onClick={() => setFilter('pending')}
            >
              {language === 'fr' ? 'En attente' : 'Pending'}
            </button>
            <button
              style={{
                ...styles.filterButton,
                ...(filter === 'review' ? styles.filterButtonActive : {})
              }}
              onClick={() => setFilter('review')}
            >
              {language === 'fr' ? 'En révision' : 'In Review'}
            </button>
            <button
              style={{
                ...styles.filterButton,
                ...(filter === 'implemented' ? styles.filterButtonActive : {})
              }}
              onClick={() => setFilter('implemented')}
            >
              {language === 'fr' ? 'Implémenté' : 'Implemented'}
            </button>
          </div>

          <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
            {filteredSuggestions.map((suggestion) => (
              <div key={suggestion.id} style={styles.card}>
                <div style={styles.cardHeader}>
                  <div style={{ flex: 1 }}>
                    <h3 style={styles.cardTitle}>{suggestion.title}</h3>
                    <div style={styles.cardMeta}>
                      <span style={{ ...styles.badge, ...styles.categoryBadge }}>
                        {suggestion.category}
                      </span>
                      <span>•</span>
                      <span>{suggestion.date}</span>
                    </div>
                  </div>
                  {getStatusBadge(suggestion.status)}
                </div>
                <p style={styles.cardContent}>{suggestion.description}</p>
              </div>
            ))}

            {filteredSuggestions.length === 0 && (
              <div style={{ textAlign: 'center', padding: '3rem', color: '#9ca3af' }}>
                <Lightbulb style={{ width: '3rem', height: '3rem', margin: '0 auto 1rem' }} />
                <p>{language === 'fr' ? 'Aucune suggestion dans cette catégorie' : 'No suggestions in this category'}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
