import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { Bell, Calendar, Pin, AlertCircle, CheckCircle } from 'lucide-react'

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
  announcementCard: {
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    marginBottom: '1rem',
    transition: 'all 0.2s'
  },
  pinnedCard: {
    borderColor: '#3b82f6',
    backgroundColor: '#f0f9ff'
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
    marginBottom: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  cardMeta: {
    display: 'flex',
    gap: '1rem',
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '1rem'
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem'
  },
  cardContent: {
    fontSize: '0.875rem',
    color: '#374151',
    lineHeight: '1.5'
  },
  badge: {
    display: 'inline-block',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: '500'
  },
  badgeInfo: {
    backgroundColor: '#dbeafe',
    color: '#1e40af'
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

export default function Announcements() {
  const { t, language } = useLanguage()
  const [activeTab, setActiveTab] = useState('all')

  const announcements = {
    all: [
      {
        id: 1,
        title: language === 'fr' ? 'Réunion Parents-Professeurs' : 'Parent-Teacher Meeting',
        content: language === 'fr'
          ? 'La réunion parents-professeurs du 1er trimestre aura lieu le 20 septembre 2025 de 15h00 à 18h00. Merci de confirmer votre présence auprès du secrétariat.'
          : 'The first term parent-teacher meeting will take place on September 20, 2025 from 3:00 PM to 6:00 PM. Please confirm your attendance with the office.',
        author: language === 'fr' ? 'Administration' : 'Administration',
        date: '15/09/2025',
        category: language === 'fr' ? 'Événement' : 'Event',
        priority: 'high',
        isPinned: true
      },
      {
        id: 2,
        title: language === 'fr' ? 'Vacances de Noël 2025' : 'Christmas Holidays 2025',
        content: language === 'fr'
          ? 'Les vacances de Noël débuteront le 21 décembre 2025 et se termineront le 5 janvier 2026. La reprise des cours est prévue le lundi 6 janvier 2026.'
          : 'Christmas holidays will begin on December 21, 2025 and end on January 5, 2026. Classes will resume on Monday, January 6, 2026.',
        author: language === 'fr' ? 'Direction' : 'Direction',
        date: '10/09/2025',
        category: language === 'fr' ? 'Information' : 'Information',
        priority: 'normal',
        isPinned: false
      },
      {
        id: 3,
        title: language === 'fr' ? 'Examens de fin de trimestre' : 'End of Term Exams',
        content: language === 'fr'
          ? 'Les examens de fin du 1er trimestre auront lieu du 15 au 19 décembre 2025. Le planning détaillé sera communiqué prochainement.'
          : 'First term final exams will take place from December 15 to 19, 2025. The detailed schedule will be communicated soon.',
        author: language === 'fr' ? 'Direction Pédagogique' : 'Academic Direction',
        date: '08/09/2025',
        category: language === 'fr' ? 'Examens' : 'Exams',
        priority: 'high',
        isPinned: false
      },
      {
        id: 4,
        title: language === 'fr' ? 'Journée Portes Ouvertes' : 'Open House Day',
        content: language === 'fr'
          ? 'Notre établissement organise une journée portes ouvertes le samedi 25 septembre 2025. Venez découvrir nos installations et rencontrer nos équipes.'
          : 'Our school is organizing an open house day on Saturday, September 25, 2025. Come discover our facilities and meet our teams.',
        author: language === 'fr' ? 'Administration' : 'Administration',
        date: '05/09/2025',
        category: language === 'fr' ? 'Événement' : 'Event',
        priority: 'normal',
        isPinned: false
      }
    ],
    events: [
      {
        id: 1,
        title: language === 'fr' ? 'Réunion Parents-Professeurs' : 'Parent-Teacher Meeting',
        content: language === 'fr'
          ? 'La réunion parents-professeurs du 1er trimestre aura lieu le 20 septembre 2025 de 15h00 à 18h00.'
          : 'The first term parent-teacher meeting will take place on September 20, 2025 from 3:00 PM to 6:00 PM.',
        author: language === 'fr' ? 'Administration' : 'Administration',
        date: '15/09/2025',
        category: language === 'fr' ? 'Événement' : 'Event',
        priority: 'high',
        isPinned: true
      }
    ],
    academic: [
      {
        id: 3,
        title: language === 'fr' ? 'Examens de fin de trimestre' : 'End of Term Exams',
        content: language === 'fr'
          ? 'Les examens de fin du 1er trimestre auront lieu du 15 au 19 décembre 2025.'
          : 'First term final exams will take place from December 15 to 19, 2025.',
        author: language === 'fr' ? 'Direction Pédagogique' : 'Academic Direction',
        date: '08/09/2025',
        category: language === 'fr' ? 'Examens' : 'Exams',
        priority: 'high',
        isPinned: false
      }
    ]
  }

  const getPriorityBadge = (priority) => {
    if (priority === 'high') {
      return <span style={{ ...styles.badge, ...styles.badgeDanger }}>{language === 'fr' ? 'Important' : 'Important'}</span>
    } else if (priority === 'normal') {
      return <span style={{ ...styles.badge, ...styles.badgeInfo }}>{language === 'fr' ? 'Info' : 'Info'}</span>
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>
          {language === 'fr' ? 'Annonces' : 'Announcements'}
        </h1>
        <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
          {language === 'fr' ? 'Informations et actualités de l\'établissement' : 'School information and news'}
        </p>
      </div>

      <div style={styles.tabs}>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 'all' ? styles.tabActive : {})
          }}
          onClick={() => setActiveTab('all')}
        >
          {language === 'fr' ? 'Toutes' : 'All'} ({announcements.all.length})
        </button>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 'events' ? styles.tabActive : {})
          }}
          onClick={() => setActiveTab('events')}
        >
          {language === 'fr' ? 'Événements' : 'Events'} ({announcements.events.length})
        </button>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 'academic' ? styles.tabActive : {})
          }}
          onClick={() => setActiveTab('academic')}
        >
          {language === 'fr' ? 'Académique' : 'Academic'} ({announcements.academic.length})
        </button>
      </div>

      <div style={styles.section}>
        {announcements[activeTab].map((announcement) => (
          <div
            key={announcement.id}
            style={{
              ...styles.announcementCard,
              ...(announcement.isPinned ? styles.pinnedCard : {})
            }}
          >
            <div style={styles.cardHeader}>
              <div style={{ flex: 1 }}>
                <h3 style={styles.cardTitle}>
                  {announcement.isPinned && (
                    <Pin style={{ width: '1rem', height: '1rem', color: '#3b82f6' }} />
                  )}
                  {announcement.title}
                </h3>
                <div style={styles.cardMeta}>
                  <span style={styles.metaItem}>
                    <Calendar style={{ width: '0.875rem', height: '0.875rem' }} />
                    {announcement.date}
                  </span>
                  <span>•</span>
                  <span>{announcement.author}</span>
                  <span>•</span>
                  <span>{announcement.category}</span>
                </div>
              </div>
              {getPriorityBadge(announcement.priority)}
            </div>
            <p style={styles.cardContent}>{announcement.content}</p>
          </div>
        ))}

        {announcements[activeTab].length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#9ca3af' }}>
            <Bell style={{ width: '3rem', height: '3rem', margin: '0 auto 1rem' }} />
            <p>{language === 'fr' ? 'Aucune annonce dans cette catégorie' : 'No announcements in this category'}</p>
          </div>
        )}
      </div>
    </div>
  )
}
