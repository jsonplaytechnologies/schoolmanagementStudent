import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { Calendar, Plus, Edit, Trash2, Check } from 'lucide-react'

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
  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
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
  successButton: {
    backgroundColor: '#10b981',
    color: 'white'
  },
  dangerButton: {
    backgroundColor: '#fee2e2',
    color: '#991b1b'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem'
  },
  card: {
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    padding: '1.5rem'
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
  },
  badgeWarning: {
    backgroundColor: '#fef3c7',
    color: '#92400e'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  th: {
    textAlign: 'left',
    padding: '0.75rem',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#6b7280',
    borderBottom: '1px solid #e5e7eb'
  },
  td: {
    padding: '0.75rem',
    fontSize: '0.875rem',
    color: '#374151',
    borderBottom: '1px solid #f3f4f6'
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '0.375rem',
    border: '1px solid #d1d5db',
    fontSize: '0.875rem',
    marginBottom: '1rem'
  },
  label: {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '0.5rem'
  }
}

export default function AdminSchoolYear() {
  const { t, language } = useLanguage()
  const [activeTab, setActiveTab] = useState('overview')

  const currentYear = {
    year: '2025-2026',
    startDate: '01/09/2025',
    endDate: '30/06/2026',
    status: 'active'
  }

  const terms = [
    {
      id: 1,
      name: language === 'fr' ? 'Trimestre 1' : 'Term 1',
      startDate: '01/09/2025',
      endDate: '20/12/2025',
      status: 'active',
      weeks: 16
    },
    {
      id: 2,
      name: language === 'fr' ? 'Trimestre 2' : 'Term 2',
      startDate: '05/01/2026',
      endDate: '28/03/2026',
      status: 'upcoming',
      weeks: 12
    },
    {
      id: 3,
      name: language === 'fr' ? 'Trimestre 3' : 'Term 3',
      startDate: '07/04/2026',
      endDate: '30/06/2026',
      status: 'upcoming',
      weeks: 12
    }
  ]

  const holidays = [
    { name: language === 'fr' ? 'Vacances de Noël' : 'Christmas Holidays', startDate: '21/12/2025', endDate: '04/01/2026', duration: 15 },
    { name: language === 'fr' ? 'Vacances de Pâques' : 'Easter Holidays', startDate: '29/03/2026', endDate: '06/04/2026', duration: 9 },
    { name: language === 'fr' ? 'Fête Nationale' : 'National Day', startDate: '17/08/2026', endDate: '17/08/2026', duration: 1 }
  ]

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>
            {language === 'fr' ? 'Année Scolaire' : 'School Year'}
          </h1>
          <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
            {language === 'fr' ? 'Gestion de l\'année académique' : 'Academic year management'}
          </p>
        </div>
        <button style={{ ...styles.button, ...styles.primaryButton }}>
          <Plus style={{ width: '1rem', height: '1rem' }} />
          {language === 'fr' ? 'Nouvelle année' : 'New Year'}
        </button>
      </div>

      {/* Current Year Overview */}
      <div style={styles.section}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 style={styles.sectionTitle}>
            <Calendar style={{ width: '1.25rem', height: '1.25rem' }} />
            {language === 'fr' ? 'Année en cours' : 'Current Year'}
          </h2>
          <span style={{ ...styles.badge, ...styles.badgeSuccess }}>
            <Check style={{ width: '0.75rem', height: '0.75rem', display: 'inline', marginRight: '0.25rem' }} />
            {language === 'fr' ? 'Active' : 'Active'}
          </span>
        </div>
        <div style={styles.grid}>
          <div>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>
              {language === 'fr' ? 'Année' : 'Year'}
            </p>
            <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827' }}>{currentYear.year}</p>
          </div>
          <div>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>
              {language === 'fr' ? 'Date de début' : 'Start Date'}
            </p>
            <p style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827' }}>{currentYear.startDate}</p>
          </div>
          <div>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>
              {language === 'fr' ? 'Date de fin' : 'End Date'}
            </p>
            <p style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827' }}>{currentYear.endDate}</p>
          </div>
        </div>
      </div>

      {/* Terms */}
      <div style={styles.section}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 style={styles.sectionTitle}>
            {language === 'fr' ? 'Trimestres' : 'Terms'}
          </h2>
          <button style={{ ...styles.button, ...styles.secondaryButton }}>
            <Plus style={{ width: '1rem', height: '1rem' }} />
            {language === 'fr' ? 'Ajouter trimestre' : 'Add Term'}
          </button>
        </div>
        <div style={styles.grid}>
          {terms.map((term) => (
            <div key={term.id} style={styles.card}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827' }}>{term.name}</h3>
                <span style={{
                  ...styles.badge,
                  ...(term.status === 'active' ? styles.badgeSuccess : styles.badgeWarning)
                }}>
                  {term.status === 'active'
                    ? (language === 'fr' ? 'En cours' : 'Active')
                    : (language === 'fr' ? 'À venir' : 'Upcoming')}
                </span>
              </div>
              <div style={{ marginBottom: '0.75rem' }}>
                <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                  {language === 'fr' ? 'Dates' : 'Dates'}: {term.startDate} - {term.endDate}
                </p>
                <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                  {language === 'fr' ? 'Durée' : 'Duration'}: {term.weeks} {language === 'fr' ? 'semaines' : 'weeks'}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button style={{ ...styles.button, ...styles.secondaryButton }}>
                  <Edit style={{ width: '0.875rem', height: '0.875rem' }} />
                  {language === 'fr' ? 'Modifier' : 'Edit'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Holidays */}
      <div style={styles.section}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 style={styles.sectionTitle}>
            {language === 'fr' ? 'Vacances & Jours fériés' : 'Holidays & Days Off'}
          </h2>
          <button style={{ ...styles.button, ...styles.primaryButton }}>
            <Plus style={{ width: '1rem', height: '1rem' }} />
            {language === 'fr' ? 'Ajouter' : 'Add'}
          </button>
        </div>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>{language === 'fr' ? 'Nom' : 'Name'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Date début' : 'Start Date'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Date fin' : 'End Date'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Durée' : 'Duration'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Actions' : 'Actions'}</th>
            </tr>
          </thead>
          <tbody>
            {holidays.map((holiday, index) => (
              <tr key={index}>
                <td style={styles.td}><strong>{holiday.name}</strong></td>
                <td style={styles.td}>{holiday.startDate}</td>
                <td style={styles.td}>{holiday.endDate}</td>
                <td style={styles.td}>
                  {holiday.duration} {holiday.duration === 1
                    ? (language === 'fr' ? 'jour' : 'day')
                    : (language === 'fr' ? 'jours' : 'days')}
                </td>
                <td style={styles.td}>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button style={{ ...styles.button, ...styles.secondaryButton }}>
                      <Edit style={{ width: '0.875rem', height: '0.875rem' }} />
                    </button>
                    <button style={{ ...styles.button, ...styles.dangerButton }}>
                      <Trash2 style={{ width: '0.875rem', height: '0.875rem' }} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
