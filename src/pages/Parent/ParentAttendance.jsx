import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { Clock, Calendar, CheckCircle, XCircle, AlertCircle, TrendingUp } from 'lucide-react'

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
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1rem',
    marginBottom: '1.5rem'
  },
  statCard: {
    backgroundColor: '#f9fafb',
    padding: '1rem',
    borderRadius: '0.375rem',
    textAlign: 'center'
  },
  statValue: {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '0.25rem'
  },
  statLabel: {
    fontSize: '0.875rem',
    color: '#6b7280'
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
  badgeDanger: {
    backgroundColor: '#fee2e2',
    color: '#991b1b'
  },
  badgeWarning: {
    backgroundColor: '#fef3c7',
    color: '#92400e'
  }
}

export default function ParentAttendance() {
  const { t, language } = useLanguage()

  const stats = {
    rate: '95%',
    present: 38,
    absent: 2,
    late: 0
  }

  const recentAttendance = [
    { date: '10/09/2025', status: 'present', course: language === 'fr' ? 'Mathématiques' : 'Mathematics', time: '08h00' },
    { date: '10/09/2025', status: 'present', course: language === 'fr' ? 'Français' : 'French', time: '10h00' },
    { date: '09/09/2025', status: 'present', course: language === 'fr' ? 'Physique' : 'Physics', time: '08h00' },
    { date: '09/09/2025', status: 'late', course: language === 'fr' ? 'Anglais' : 'English', time: '14h00' },
    { date: '08/09/2025', status: 'present', course: language === 'fr' ? 'Histoire-Géo' : 'History-Geography', time: '10h00' },
    { date: '05/09/2025', status: 'absent', course: language === 'fr' ? 'Mathématiques' : 'Mathematics', time: '08h00', justified: false }
  ]

  const getStatusBadge = (status, justified) => {
    if (status === 'present') {
      return (
        <span style={{ ...styles.badge, ...styles.badgeSuccess }}>
          <CheckCircle style={{ width: '0.75rem', height: '0.75rem', display: 'inline', marginRight: '0.25rem' }} />
          {language === 'fr' ? 'Présent' : 'Present'}
        </span>
      )
    } else if (status === 'absent') {
      return (
        <span style={{ ...styles.badge, ...styles.badgeDanger }}>
          <XCircle style={{ width: '0.75rem', height: '0.75rem', display: 'inline', marginRight: '0.25rem' }} />
          {language === 'fr' ? 'Absent' : 'Absent'}
          {justified === false && ` (${language === 'fr' ? 'Non justifié' : 'Unjustified'})`}
        </span>
      )
    } else if (status === 'late') {
      return (
        <span style={{ ...styles.badge, ...styles.badgeWarning }}>
          <AlertCircle style={{ width: '0.75rem', height: '0.75rem', display: 'inline', marginRight: '0.25rem' }} />
          {language === 'fr' ? 'Retard' : 'Late'}
        </span>
      )
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>
          {language === 'fr' ? 'Présences' : 'Attendance'}
        </h1>
        <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
          Christelle MVE ESSONO • 3ème B
        </p>
      </div>

      {/* Statistics */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <TrendingUp style={{ width: '1.25rem', height: '1.25rem' }} />
          {language === 'fr' ? 'Statistiques du mois' : 'Monthly Statistics'}
        </h2>
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={{ ...styles.statValue, color: '#3b82f6' }}>{stats.rate}</div>
            <div style={styles.statLabel}>{language === 'fr' ? 'Taux de présence' : 'Attendance Rate'}</div>
          </div>
          <div style={styles.statCard}>
            <div style={{ ...styles.statValue, color: '#10b981' }}>{stats.present}</div>
            <div style={styles.statLabel}>{language === 'fr' ? 'Présences' : 'Present'}</div>
          </div>
          <div style={styles.statCard}>
            <div style={{ ...styles.statValue, color: '#ef4444' }}>{stats.absent}</div>
            <div style={styles.statLabel}>{language === 'fr' ? 'Absences' : 'Absent'}</div>
          </div>
          <div style={styles.statCard}>
            <div style={{ ...styles.statValue, color: '#f59e0b' }}>{stats.late}</div>
            <div style={styles.statLabel}>{language === 'fr' ? 'Retards' : 'Late'}</div>
          </div>
        </div>
      </div>

      {/* Recent Attendance */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <Calendar style={{ width: '1.25rem', height: '1.25rem' }} />
          {language === 'fr' ? 'Historique récent' : 'Recent History'}
        </h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>{language === 'fr' ? 'Date' : 'Date'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Heure' : 'Time'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Cours' : 'Course'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Statut' : 'Status'}</th>
            </tr>
          </thead>
          <tbody>
            {recentAttendance.map((record, index) => (
              <tr key={index}>
                <td style={styles.td}>{record.date}</td>
                <td style={styles.td}>{record.time}</td>
                <td style={styles.td}>{record.course}</td>
                <td style={styles.td}>{getStatusBadge(record.status, record.justified)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
