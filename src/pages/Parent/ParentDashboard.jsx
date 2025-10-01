import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { User, TrendingUp, Clock, AlertCircle, Calendar, FileText, DollarSign, MessageSquare } from 'lucide-react'

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
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem'
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
  },
  alertItem: {
    padding: '1rem',
    borderRadius: '0.375rem',
    backgroundColor: '#fef3c7',
    marginBottom: '0.75rem',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem'
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
  }
}

export default function ParentDashboard() {
  const { t, language } = useLanguage()

  const childInfo = {
    name: 'Christelle MVE ESSONO',
    class: '3ème B',
    studentId: '2025-327'
  }

  const todaySchedule = [
    { time: '08h00–09h00', subject: language === 'fr' ? 'Mathématiques' : 'Mathematics', room: 'S205', professor: 'M. OBIANG' },
    { time: '10h00–11h15', subject: language === 'fr' ? 'Français' : 'French', room: 'S301', professor: 'Mme ESSONO' }
  ]

  const upcomingHomework = [
    { subject: language === 'fr' ? 'Maths' : 'Math', title: language === 'fr' ? 'Exercice Chap. 2' : 'Exercise Ch. 2', dueDate: '15/09/2025', status: 'pending' },
    { subject: language === 'fr' ? 'Anglais' : 'English', title: language === 'fr' ? 'Rédaction' : 'Essay', dueDate: '17/09/2025', status: 'pending' }
  ]

  const recentGrades = [
    { subject: language === 'fr' ? 'Mathématiques' : 'Mathematics', grade: '14,5 / 20', date: '08/09/2025', type: language === 'fr' ? 'Contrôle' : 'Test' },
    { subject: language === 'fr' ? 'Physique' : 'Physics', grade: '13,0 / 20', date: '06/09/2025', type: language === 'fr' ? 'TP' : 'Lab' }
  ]

  const alerts = [
    { text: language === 'fr' ? '1 absence non justifiée le 05/09/2025' : '1 unjustified absence on 05/09/2025', type: 'warning' },
    { text: language === 'fr' ? 'Paiement du 2ème trimestre dû le 20/09/2025' : '2nd term payment due on 20/09/2025', type: 'warning' }
  ]

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>
          {language === 'fr' ? 'Tableau de bord Parent' : 'Parent Dashboard'}
        </h1>
        <p style={styles.subtitle}>
          {language === 'fr' ? 'Suivi de' : 'Monitoring'} {childInfo.name} • {childInfo.class} • {language === 'fr' ? 'N°' : 'ID'} {childInfo.studentId}
        </p>
      </div>

      {/* Stats Cards */}
      <div style={styles.grid}>
        <div style={styles.statCard}>
          <div style={{ ...styles.iconBox, backgroundColor: '#dbeafe' }}>
            <TrendingUp style={{ width: '1.5rem', height: '1.5rem', color: '#3b82f6' }} />
          </div>
          <div style={styles.statContent}>
            <div style={styles.statTitle}>{language === 'fr' ? 'Moyenne Générale' : 'Overall Average'}</div>
            <div style={styles.statValue}>13,8 / 20</div>
            <div style={styles.statSubtitle}>{language === 'fr' ? 'Trimestre 1' : 'Term 1'}</div>
          </div>
        </div>

        <div style={styles.statCard}>
          <div style={{ ...styles.iconBox, backgroundColor: '#d1fae5' }}>
            <Clock style={{ width: '1.5rem', height: '1.5rem', color: '#10b981' }} />
          </div>
          <div style={styles.statContent}>
            <div style={styles.statTitle}>{language === 'fr' ? 'Taux de Présence' : 'Attendance Rate'}</div>
            <div style={styles.statValue}>95 %</div>
            <div style={styles.statSubtitle}>{language === 'fr' ? 'Ce mois' : 'This month'}</div>
          </div>
        </div>

        <div style={styles.statCard}>
          <div style={{ ...styles.iconBox, backgroundColor: '#fef3c7' }}>
            <FileText style={{ width: '1.5rem', height: '1.5rem', color: '#f59e0b' }} />
          </div>
          <div style={styles.statContent}>
            <div style={styles.statTitle}>{language === 'fr' ? 'Devoirs en cours' : 'Pending Homework'}</div>
            <div style={styles.statValue}>2</div>
            <div style={styles.statSubtitle}>{language === 'fr' ? 'À rendre' : 'To submit'}</div>
          </div>
        </div>

        <div style={styles.statCard}>
          <div style={{ ...styles.iconBox, backgroundColor: '#ede9fe' }}>
            <DollarSign style={{ width: '1.5rem', height: '1.5rem', color: '#8b5cf6' }} />
          </div>
          <div style={styles.statContent}>
            <div style={styles.statTitle}>{language === 'fr' ? 'Paiements' : 'Payments'}</div>
            <div style={styles.statValue}>{language === 'fr' ? 'À jour' : 'Up to date'}</div>
            <div style={styles.statSubtitle}>{language === 'fr' ? 'Prochain: 20/09' : 'Next: 20/09'}</div>
          </div>
        </div>
      </div>

      {/* Alerts */}
      {alerts.length > 0 && (
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <AlertCircle style={{ width: '1.25rem', height: '1.25rem' }} />
            {language === 'fr' ? 'Points d\'attention' : 'Attention Points'}
          </h2>
          {alerts.map((alert, index) => (
            <div key={index} style={styles.alertItem}>
              <AlertCircle style={{ width: '1.25rem', height: '1.25rem', color: '#92400e', flexShrink: 0 }} />
              <span style={{ fontSize: '0.875rem', color: '#92400e' }}>{alert.text}</span>
            </div>
          ))}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
        {/* Today's Schedule */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <Calendar style={{ width: '1.25rem', height: '1.25rem' }} />
            {language === 'fr' ? 'Emploi du temps d\'aujourd\'hui' : 'Today\'s Schedule'}
          </h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>{language === 'fr' ? 'Heure' : 'Time'}</th>
                <th style={styles.th}>{language === 'fr' ? 'Matière' : 'Subject'}</th>
                <th style={styles.th}>{language === 'fr' ? 'Professeur' : 'Professor'}</th>
              </tr>
            </thead>
            <tbody>
              {todaySchedule.map((item, index) => (
                <tr key={index}>
                  <td style={styles.td}>{item.time}</td>
                  <td style={styles.td}>{item.subject}</td>
                  <td style={styles.td}>{item.professor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Upcoming Homework */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <FileText style={{ width: '1.25rem', height: '1.25rem' }} />
            {language === 'fr' ? 'Devoirs à venir' : 'Upcoming Homework'}
          </h2>
          {upcomingHomework.map((hw, index) => (
            <div key={index} style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '0.375rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: '600', color: '#111827' }}>{hw.subject}</span>
                <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>{language === 'fr' ? 'À rendre:' : 'Due:'} {hw.dueDate}</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{hw.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Grades */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <TrendingUp style={{ width: '1.25rem', height: '1.25rem' }} />
          {language === 'fr' ? 'Notes récentes' : 'Recent Grades'}
        </h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>{language === 'fr' ? 'Matière' : 'Subject'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Type' : 'Type'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Note' : 'Grade'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Date' : 'Date'}</th>
            </tr>
          </thead>
          <tbody>
            {recentGrades.map((grade, index) => (
              <tr key={index}>
                <td style={styles.td}>{grade.subject}</td>
                <td style={styles.td}>{grade.type}</td>
                <td style={styles.td}><strong>{grade.grade}</strong></td>
                <td style={styles.td}>{grade.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
