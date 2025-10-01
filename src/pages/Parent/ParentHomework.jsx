import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { FileText, Calendar, CheckCircle, Clock, AlertCircle } from 'lucide-react'

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
  tabs: {
    display: 'flex',
    gap: '1rem',
    borderBottom: '1px solid #e5e7eb',
    marginBottom: '1.5rem'
  },
  tab: {
    padding: '0.75rem 1rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    borderBottom: '2px solid transparent',
    color: '#6b7280',
    transition: 'all 0.2s'
  },
  tabActive: {
    color: '#3b82f6',
    borderBottomColor: '#3b82f6'
  },
  section: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    marginBottom: '1.5rem'
  },
  card: {
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    marginBottom: '1rem'
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1rem'
  },
  cardTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '0.25rem'
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
  badgeDanger: {
    backgroundColor: '#fee2e2',
    color: '#991b1b'
  }
}

export default function ParentHomework() {
  const { t, language } = useLanguage()
  const [activeTab, setActiveTab] = useState('pending')

  const homework = {
    pending: [
      {
        subject: language === 'fr' ? 'Mathématiques' : 'Mathematics',
        title: language === 'fr' ? 'Exercice Chap. 2' : 'Exercise Ch. 2',
        description: language === 'fr' ? 'Résoudre les exercices 1 à 15 page 45' : 'Solve exercises 1 to 15 page 45',
        assignedDate: '10/09/2025',
        dueDate: '15/09/2025',
        status: 'pending'
      },
      {
        subject: language === 'fr' ? 'Anglais' : 'English',
        title: language === 'fr' ? 'Rédaction' : 'Essay',
        description: language === 'fr' ? 'Écrire une rédaction sur "Mes vacances d\'été"' : 'Write an essay about "My summer vacation"',
        assignedDate: '11/09/2025',
        dueDate: '17/09/2025',
        status: 'pending'
      }
    ],
    completed: [
      {
        subject: language === 'fr' ? 'Physique' : 'Physics',
        title: language === 'fr' ? 'TP Mélanges' : 'Lab - Mixtures',
        description: language === 'fr' ? 'Compte-rendu du TP sur les mélanges' : 'Lab report on mixtures',
        assignedDate: '05/09/2025',
        dueDate: '10/09/2025',
        submittedDate: '09/09/2025',
        grade: '15 / 20',
        status: 'completed'
      }
    ]
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>
          {language === 'fr' ? 'Devoirs de l\'enfant' : 'Child\'s Homework'}
        </h1>
        <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
          Christelle MVE ESSONO • 3ème B
        </p>
      </div>

      <div style={styles.tabs}>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 'pending' ? styles.tabActive : {})
          }}
          onClick={() => setActiveTab('pending')}
        >
          {language === 'fr' ? 'En cours' : 'Pending'} ({homework.pending.length})
        </button>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 'completed' ? styles.tabActive : {})
          }}
          onClick={() => setActiveTab('completed')}
        >
          {language === 'fr' ? 'Terminés' : 'Completed'} ({homework.completed.length})
        </button>
      </div>

      <div style={styles.section}>
        {homework[activeTab].map((hw, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.cardHeader}>
              <div>
                <h3 style={styles.cardTitle}>{hw.subject} - {hw.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{hw.description}</p>
              </div>
              {hw.status === 'pending' ? (
                <span style={{ ...styles.badge, ...styles.badgeWarning }}>
                  <Clock style={{ width: '0.75rem', height: '0.75rem', display: 'inline', marginRight: '0.25rem' }} />
                  {language === 'fr' ? 'En cours' : 'Pending'}
                </span>
              ) : (
                <span style={{ ...styles.badge, ...styles.badgeSuccess }}>
                  <CheckCircle style={{ width: '0.75rem', height: '0.75rem', display: 'inline', marginRight: '0.25rem' }} />
                  {language === 'fr' ? 'Rendu' : 'Submitted'}
                </span>
              )}
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
              <span>
                <Calendar style={{ width: '0.875rem', height: '0.875rem', display: 'inline', marginRight: '0.25rem' }} />
                {language === 'fr' ? 'Donné le:' : 'Assigned:'} {hw.assignedDate}
              </span>
              <span>
                {language === 'fr' ? 'À rendre le:' : 'Due:'} {hw.dueDate}
              </span>
              {hw.submittedDate && (
                <span>
                  {language === 'fr' ? 'Rendu le:' : 'Submitted:'} {hw.submittedDate}
                </span>
              )}
              {hw.grade && (
                <span style={{ fontWeight: '600', color: '#111827' }}>
                  {language === 'fr' ? 'Note:' : 'Grade:'} {hw.grade}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
