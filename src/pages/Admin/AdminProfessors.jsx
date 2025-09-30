import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { GraduationCap, Plus, Search, Filter, Download, Edit, Mail, Phone } from 'lucide-react'

const styles = {
  container: {
    maxWidth: '1400px',
    margin: '0 auto'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem'
  },
  title: {
    fontSize: '1.875rem',
    fontWeight: '700',
    color: '#111827'
  },
  section: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    marginBottom: '1.5rem'
  },
  toolbar: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1.5rem',
    flexWrap: 'wrap'
  },
  searchBox: {
    flex: 1,
    minWidth: '250px',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    backgroundColor: 'white'
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: '0.875rem'
  },
  button: {
    padding: '0.5rem 1rem',
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
    color: 'white'
  },
  secondaryButton: {
    backgroundColor: '#f3f4f6',
    color: '#374151'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '1.5rem'
  },
  card: {
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    transition: 'all 0.2s'
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem'
  },
  avatar: {
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    backgroundColor: '#3b82f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: '1.25rem'
  },
  profName: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '0.25rem'
  },
  profSubjects: {
    fontSize: '0.875rem',
    color: '#6b7280'
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '0.5rem'
  },
  badge: {
    display: 'inline-block',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: '500'
  },
  badgeSuccess: {
    backgroundColor: '#d1fae5',
    color: '#065f46'
  }
}

export default function AdminProfessors() {
  const { t, language } = useLanguage()
  const [searchTerm, setSearchTerm] = useState('')

  const professors = [
    {
      id: 1,
      name: 'M. OBIANG Jean',
      subjects: [language === 'fr' ? 'Mathématiques' : 'Mathematics', language === 'fr' ? 'Physique' : 'Physics'],
      classes: ['3ème A', '3ème B'],
      email: 'j.obiang@school.ga',
      phone: '+241 06 11 22 33',
      hoursPerWeek: 22,
      status: 'active'
    },
    {
      id: 2,
      name: 'Mme ESSONO Marie',
      subjects: [language === 'fr' ? 'Français' : 'French', language === 'fr' ? 'Littérature' : 'Literature'],
      classes: ['4ème A', '5ème B', '6ème A'],
      email: 'm.essono@school.ga',
      phone: '+241 06 22 33 44',
      hoursPerWeek: 20,
      status: 'active'
    },
    {
      id: 3,
      name: 'M. NGUEMA Paul',
      subjects: [language === 'fr' ? 'Anglais' : 'English'],
      classes: ['3ème A', '4ème A', '5ème A'],
      email: 'p.nguema@school.ga',
      phone: '+241 06 33 44 55',
      hoursPerWeek: 18,
      status: 'active'
    },
    {
      id: 4,
      name: 'Mme OKOME Sophie',
      subjects: [language === 'fr' ? 'Histoire-Géo' : 'History-Geography', language === 'fr' ? 'Éducation Civique' : 'Civic Education'],
      classes: ['3ème A', '3ème B', '4ème A'],
      email: 's.okome@school.ga',
      phone: '+241 06 44 55 66',
      hoursPerWeek: 20,
      status: 'active'
    }
  ]

  const getInitials = (name) => {
    const parts = name.split(' ')
    return parts.map(p => p[0]).join('').substring(0, 2)
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>
            {language === 'fr' ? 'Gestion des Professeurs' : 'Professors Management'}
          </h1>
          <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
            {professors.length} {language === 'fr' ? 'professeurs actifs' : 'active professors'}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button style={{ ...styles.button, ...styles.secondaryButton }}>
            <Download style={{ width: '1rem', height: '1rem' }} />
            {language === 'fr' ? 'Exporter' : 'Export'}
          </button>
          <button style={{ ...styles.button, ...styles.primaryButton }}>
            <Plus style={{ width: '1rem', height: '1rem' }} />
            {language === 'fr' ? 'Nouveau professeur' : 'New Professor'}
          </button>
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.toolbar}>
          <div style={styles.searchBox}>
            <Search style={{ width: '1rem', height: '1rem', color: '#9ca3af' }} />
            <input
              type="text"
              style={styles.input}
              placeholder={language === 'fr' ? 'Rechercher un professeur...' : 'Search professor...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button style={{ ...styles.button, ...styles.secondaryButton }}>
            <Filter style={{ width: '1rem', height: '1rem' }} />
            {language === 'fr' ? 'Filtres' : 'Filters'}
          </button>
        </div>

        <div style={styles.grid}>
          {professors.map((prof) => (
            <div
              key={prof.id}
              style={styles.card}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, { boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', borderColor: '#3b82f6' })}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, { boxShadow: 'none', borderColor: '#e5e7eb' })}
            >
              <div style={styles.cardHeader}>
                <div style={styles.avatar}>{getInitials(prof.name)}</div>
                <div style={{ flex: 1 }}>
                  <h3 style={styles.profName}>{prof.name}</h3>
                  <p style={styles.profSubjects}>{prof.subjects.join(', ')}</p>
                </div>
                <span style={{ ...styles.badge, ...styles.badgeSuccess }}>
                  {language === 'fr' ? 'Actif' : 'Active'}
                </span>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div style={styles.infoItem}>
                  <Mail style={{ width: '1rem', height: '1rem' }} />
                  {prof.email}
                </div>
                <div style={styles.infoItem}>
                  <Phone style={{ width: '1rem', height: '1rem' }} />
                  {prof.phone}
                </div>
                <div style={styles.infoItem}>
                  <GraduationCap style={{ width: '1rem', height: '1rem' }} />
                  {prof.classes.join(', ')}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid #f3f4f6' }}>
                <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                  {prof.hoursPerWeek}h/{language === 'fr' ? 'semaine' : 'week'}
                </span>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button style={{ ...styles.button, ...styles.secondaryButton }}>
                    {language === 'fr' ? 'Voir' : 'View'}
                  </button>
                  <button style={{ ...styles.button, ...styles.secondaryButton }}>
                    <Edit style={{ width: '0.875rem', height: '0.875rem' }} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
