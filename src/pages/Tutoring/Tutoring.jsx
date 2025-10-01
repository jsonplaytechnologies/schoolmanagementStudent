import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { Users, Calendar, Clock, BookOpen, Plus, CheckCircle, XCircle } from 'lucide-react'

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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1rem'
  },
  card: {
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    transition: 'all 0.2s'
  },
  cardTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '0.75rem'
  },
  cardMeta: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '1rem'
  },
  metaItem: {
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
    backgroundColor: '#ef4444',
    color: 'white'
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
  badgeInfo: {
    backgroundColor: '#dbeafe',
    color: '#1e40af'
  }
}

export default function Tutoring() {
  const { t, language } = useLanguage()

  const upcomingSessions = [
    {
      id: 1,
      subject: language === 'fr' ? 'Mathématiques' : 'Mathematics',
      tutor: 'M. OBIANG Jean',
      date: '15/09/2025',
      time: '14:00-15:30',
      location: language === 'fr' ? 'Salle S205' : 'Room S205',
      status: 'confirmed'
    },
    {
      id: 2,
      subject: language === 'fr' ? 'Physique' : 'Physics',
      tutor: 'Mme NGUEMA Marie',
      date: '17/09/2025',
      time: '16:00-17:00',
      location: language === 'fr' ? 'Salle S301' : 'Room S301',
      status: 'pending'
    }
  ]

  const availableTutors = [
    {
      id: 1,
      name: 'M. OBIANG Jean',
      subject: language === 'fr' ? 'Mathématiques' : 'Mathematics',
      availability: language === 'fr' ? 'Lun, Mer, Ven 14h-17h' : 'Mon, Wed, Fri 2PM-5PM',
      rating: '4.8'
    },
    {
      id: 2,
      name: 'Mme NGUEMA Marie',
      subject: language === 'fr' ? 'Physique' : 'Physics',
      availability: language === 'fr' ? 'Mar, Jeu 15h-18h' : 'Tue, Thu 3PM-6PM',
      rating: '4.9'
    },
    {
      id: 3,
      name: 'M. ESSONO Paul',
      subject: language === 'fr' ? 'Anglais' : 'English',
      availability: language === 'fr' ? 'Lun, Mer 13h-16h' : 'Mon, Wed 1PM-4PM',
      rating: '4.7'
    }
  ]

  const pastSessions = [
    {
      id: 1,
      subject: language === 'fr' ? 'Mathématiques' : 'Mathematics',
      tutor: 'M. OBIANG Jean',
      date: '08/09/2025',
      duration: '1h30',
      attended: true
    },
    {
      id: 2,
      subject: language === 'fr' ? 'Français' : 'French',
      tutor: 'Mme OKOME Sophie',
      date: '05/09/2025',
      duration: '1h',
      attended: true
    }
  ]

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>
            {language === 'fr' ? 'Soutien Scolaire' : 'Tutoring'}
          </h1>
          <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
            {language === 'fr' ? 'Réservez vos séances de soutien scolaire' : 'Book your tutoring sessions'}
          </p>
        </div>
        <button style={{ ...styles.button, ...styles.primaryButton }}>
          <Plus style={{ width: '1rem', height: '1rem' }} />
          {language === 'fr' ? 'Nouvelle réservation' : 'New Booking'}
        </button>
      </div>

      {/* Upcoming Sessions */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <Calendar style={{ width: '1.25rem', height: '1.25rem' }} />
          {language === 'fr' ? 'Séances à venir' : 'Upcoming Sessions'}
        </h2>
        <div style={styles.grid}>
          {upcomingSessions.map((session) => (
            <div
              key={session.id}
              style={styles.card}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, { boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', borderColor: '#3b82f6' })}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, { boxShadow: 'none', borderColor: '#e5e7eb' })}
            >
              <h3 style={styles.cardTitle}>{session.subject}</h3>
              <div style={styles.cardMeta}>
                <span style={styles.metaItem}>
                  <Users style={{ width: '0.875rem', height: '0.875rem' }} />
                  {session.tutor}
                </span>
                <span style={styles.metaItem}>
                  <Calendar style={{ width: '0.875rem', height: '0.875rem' }} />
                  {session.date} • {session.time}
                </span>
                <span style={styles.metaItem}>
                  <BookOpen style={{ width: '0.875rem', height: '0.875rem' }} />
                  {session.location}
                </span>
                {session.status === 'confirmed' ? (
                  <span style={{ ...styles.badge, ...styles.badgeSuccess }}>
                    <CheckCircle style={{ width: '0.75rem', height: '0.75rem', display: 'inline', marginRight: '0.25rem' }} />
                    {language === 'fr' ? 'Confirmé' : 'Confirmed'}
                  </span>
                ) : (
                  <span style={{ ...styles.badge, ...styles.badgeWarning }}>
                    <Clock style={{ width: '0.75rem', height: '0.75rem', display: 'inline', marginRight: '0.25rem' }} />
                    {language === 'fr' ? 'En attente' : 'Pending'}
                  </span>
                )}
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button style={{ ...styles.button, ...styles.secondaryButton }}>
                  {language === 'fr' ? 'Détails' : 'Details'}
                </button>
                <button style={{ ...styles.button, ...styles.dangerButton }}>
                  {language === 'fr' ? 'Annuler' : 'Cancel'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Tutors */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <Users style={{ width: '1.25rem', height: '1.25rem' }} />
          {language === 'fr' ? 'Professeurs disponibles' : 'Available Tutors'}
        </h2>
        <div style={styles.grid}>
          {availableTutors.map((tutor) => (
            <div
              key={tutor.id}
              style={styles.card}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, { boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', borderColor: '#3b82f6' })}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, { boxShadow: 'none', borderColor: '#e5e7eb' })}
            >
              <h3 style={styles.cardTitle}>{tutor.name}</h3>
              <div style={styles.cardMeta}>
                <span style={styles.metaItem}>
                  <BookOpen style={{ width: '0.875rem', height: '0.875rem' }} />
                  {tutor.subject}
                </span>
                <span style={styles.metaItem}>
                  <Clock style={{ width: '0.875rem', height: '0.875rem' }} />
                  {tutor.availability}
                </span>
                <span style={{ ...styles.badge, ...styles.badgeInfo }}>
                  ⭐ {tutor.rating} / 5
                </span>
              </div>
              <button style={{ ...styles.button, ...styles.primaryButton, width: '100%' }}>
                {language === 'fr' ? 'Réserver' : 'Book Session'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Past Sessions */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <CheckCircle style={{ width: '1.25rem', height: '1.25rem' }} />
          {language === 'fr' ? 'Historique' : 'Past Sessions'}
        </h2>
        {pastSessions.map((session) => (
          <div key={session.id} style={{ ...styles.card, marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ ...styles.cardTitle, marginBottom: '0.25rem' }}>{session.subject}</h3>
                <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                  {session.tutor} • {session.date} • {session.duration}
                </p>
              </div>
              {session.attended ? (
                <span style={{ ...styles.badge, ...styles.badgeSuccess }}>
                  <CheckCircle style={{ width: '0.75rem', height: '0.75rem', display: 'inline', marginRight: '0.25rem' }} />
                  {language === 'fr' ? 'Présent' : 'Attended'}
                </span>
              ) : (
                <span style={{ ...styles.badge, ...styles.badgeDanger }}>
                  <XCircle style={{ width: '0.75rem', height: '0.75rem', display: 'inline', marginRight: '0.25rem' }} />
                  {language === 'fr' ? 'Absent' : 'Absent'}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
