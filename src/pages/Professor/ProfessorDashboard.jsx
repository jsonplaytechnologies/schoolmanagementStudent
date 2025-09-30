import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { Calendar, FileText, AlertCircle, TrendingUp, Users, Clock } from 'lucide-react'

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
    color: '#111827',
    marginBottom: '0.5rem'
  },
  subtitle: {
    fontSize: '1rem',
    color: '#6b7280'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem'
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
  button: {
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  primaryButton: {
    backgroundColor: '#3b82f6',
    color: 'white'
  },
  secondaryButton: {
    backgroundColor: '#f3f4f6',
    color: '#374151'
  },
  badge: {
    display: 'inline-block',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: '500'
  },
  badgeDanger: {
    backgroundColor: '#fee2e2',
    color: '#991b1b'
  },
  badgeWarning: {
    backgroundColor: '#fef3c7',
    color: '#92400e'
  },
  alertItem: {
    padding: '0.75rem',
    borderRadius: '0.375rem',
    backgroundColor: '#fef3c7',
    marginBottom: '0.75rem',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem'
  },
  alertText: {
    fontSize: '0.875rem',
    color: '#92400e'
  },
  statCard: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  iconBox: {
    padding: '0.75rem',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  statContent: {
    flex: 1
  },
  statTitle: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#6b7280',
    marginBottom: '0.25rem'
  },
  statValue: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '0.25rem'
  },
  statSubtitle: {
    fontSize: '0.875rem',
    color: '#9ca3af'
  }
}

export default function ProfessorDashboard() {
  const { t, language } = useLanguage()

  const todaySchedule = [
    { time: '08h00–09h00', subject: language === 'fr' ? 'Mathématiques' : 'Mathematics', class: '3ème A', room: 'S205' },
    { time: '10h00–11h15', subject: language === 'fr' ? 'Physique' : 'Physics', class: '3ème B', room: 'S201' }
  ]

  const homeworkToCorrect = [
    { subject: language === 'fr' ? 'Maths' : 'Math', class: '3ème A', count: 18, title: language === 'fr' ? 'Exercice Chap. 2' : 'Exercise Ch. 2' },
    { subject: language === 'fr' ? 'Physique' : 'Physics', class: '3ème B', count: 20, title: language === 'fr' ? 'TP Mélanges' : 'Lab - Mixtures' }
  ]

  const alerts = [
    { text: language === 'fr' ? '5 absences non justifiées (3ème A)' : '5 unjustified absences (3ème A)', type: 'warning' },
    { text: language === 'fr' ? '2 messages urgents parents' : '2 urgent parent messages', type: 'danger' }
  ]

  const classStats = [
    { class: '3ème A', students: 32, average: '13,2 / 20', attendance: '91 %' },
    { class: '3ème B', students: 35, average: '12,5 / 20', attendance: '87 %' }
  ]

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>
          {language === 'fr' ? 'Tableau de bord Professeur' : 'Professor Dashboard'}
        </h1>
        <p style={styles.subtitle}>
          {language === 'fr' ? 'M. OBIANG | Matières : Mathématiques, Physique | Classes : 3ème A, 3ème B' : 'Mr. OBIANG | Subjects: Mathematics, Physics | Classes: 3ème A, 3ème B'}
        </p>
      </div>

      {/* Stats Cards */}
      <div style={styles.grid}>
        <div style={styles.statCard}>
          <div style={{ ...styles.iconBox, backgroundColor: '#dbeafe' }}>
            <Users style={{ width: '1.5rem', height: '1.5rem', color: '#3b82f6' }} />
          </div>
          <div style={styles.statContent}>
            <div style={styles.statTitle}>{language === 'fr' ? 'Mes Classes' : 'My Classes'}</div>
            <div style={styles.statValue}>2</div>
            <div style={styles.statSubtitle}>{language === 'fr' ? 'Classes actives' : 'Active classes'}</div>
          </div>
        </div>

        <div style={styles.statCard}>
          <div style={{ ...styles.iconBox, backgroundColor: '#fef3c7' }}>
            <FileText style={{ width: '1.5rem', height: '1.5rem', color: '#f59e0b' }} />
          </div>
          <div style={styles.statContent}>
            <div style={styles.statTitle}>{language === 'fr' ? 'À Corriger' : 'To Grade'}</div>
            <div style={styles.statValue}>38</div>
            <div style={styles.statSubtitle}>{language === 'fr' ? 'Copies en attente' : 'Pending papers'}</div>
          </div>
        </div>

        <div style={styles.statCard}>
          <div style={{ ...styles.iconBox, backgroundColor: '#d1fae5' }}>
            <TrendingUp style={{ width: '1.5rem', height: '1.5rem', color: '#10b981' }} />
          </div>
          <div style={styles.statContent}>
            <div style={styles.statTitle}>{language === 'fr' ? 'Moyenne Générale' : 'Average Grade'}</div>
            <div style={styles.statValue}>12,8 / 20</div>
            <div style={styles.statSubtitle}>{language === 'fr' ? 'Toutes classes' : 'All classes'}</div>
          </div>
        </div>

        <div style={styles.statCard}>
          <div style={{ ...styles.iconBox, backgroundColor: '#ede9fe' }}>
            <Clock style={{ width: '1.5rem', height: '1.5rem', color: '#8b5cf6' }} />
          </div>
          <div style={styles.statContent}>
            <div style={styles.statTitle}>{language === 'fr' ? 'Présence Moyenne' : 'Average Attendance'}</div>
            <div style={styles.statValue}>89 %</div>
            <div style={styles.statSubtitle}>{language === 'fr' ? 'Ce mois' : 'This month'}</div>
          </div>
        </div>
      </div>

      {/* Today's Schedule */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <Calendar style={{ width: '1.25rem', height: '1.25rem' }} />
          {language === 'fr' ? "Cours d'aujourd'hui" : "Today's Classes"}
        </h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>{language === 'fr' ? 'Heure' : 'Time'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Matière' : 'Subject'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Classe' : 'Class'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Salle' : 'Room'}</th>
            </tr>
          </thead>
          <tbody>
            {todaySchedule.map((item, index) => (
              <tr key={index}>
                <td style={styles.td}>{item.time}</td>
                <td style={styles.td}>{item.subject}</td>
                <td style={styles.td}>{item.class}</td>
                <td style={styles.td}>{item.room}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
        {/* Homework to Correct */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <FileText style={{ width: '1.25rem', height: '1.25rem' }} />
            {language === 'fr' ? 'À Corriger' : 'To Grade'}
          </h2>
          {homeworkToCorrect.map((item, index) => (
            <div key={index} style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '0.375rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: '600', color: '#111827' }}>{item.subject}, {item.class}</span>
                <span style={{ ...styles.badge, ...styles.badgeWarning }}>{item.count} {language === 'fr' ? 'copies' : 'papers'}</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>{item.title}</p>
              <button style={{ ...styles.button, ...styles.primaryButton }}>
                {language === 'fr' ? 'Corriger' : 'Grade Now'}
              </button>
            </div>
          ))}
        </div>

        {/* Alerts */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <AlertCircle style={{ width: '1.25rem', height: '1.25rem' }} />
            {language === 'fr' ? 'Alertes' : 'Alerts'}
          </h2>
          {alerts.map((alert, index) => (
            <div key={index} style={styles.alertItem}>
              <AlertCircle style={{ width: '1.25rem', height: '1.25rem', color: '#92400e', flexShrink: 0 }} />
              <span style={styles.alertText}>{alert.text}</span>
            </div>
          ))}
          <button style={{ ...styles.button, ...styles.secondaryButton, marginTop: '0.5rem', width: '100%' }}>
            {language === 'fr' ? 'Voir tout' : 'View All'}
          </button>
        </div>
      </div>

      {/* Class Statistics */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <TrendingUp style={{ width: '1.25rem', height: '1.25rem' }} />
          {language === 'fr' ? 'Statistiques Rapides' : 'Quick Statistics'}
        </h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>{language === 'fr' ? 'Classe' : 'Class'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Effectif' : 'Students'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Moyenne Classe' : 'Class Average'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Taux Présence' : 'Attendance Rate'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Actions' : 'Actions'}</th>
            </tr>
          </thead>
          <tbody>
            {classStats.map((stat, index) => (
              <tr key={index}>
                <td style={styles.td}>{stat.class}</td>
                <td style={styles.td}>{stat.students}</td>
                <td style={styles.td}>{stat.average}</td>
                <td style={styles.td}>{stat.attendance}</td>
                <td style={styles.td}>
                  <button style={{ ...styles.button, ...styles.secondaryButton }}>
                    {language === 'fr' ? 'Voir détails' : 'View Details'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
