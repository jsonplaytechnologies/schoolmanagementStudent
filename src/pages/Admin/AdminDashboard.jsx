import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { Users, GraduationCap, Building, DollarSign, TrendingUp, AlertCircle, Calendar, Clock } from 'lucide-react'

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
  alertText: {
    fontSize: '0.875rem',
    color: '#92400e'
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

export default function AdminDashboard() {
  const { t, language } = useLanguage()

  const quickStats = [
    { icon: Users, label: language === 'fr' ? 'Élèves' : 'Students', value: '847', subtitle: language === 'fr' ? '+12 ce mois' : '+12 this month', color: '#3b82f6', bg: '#dbeafe' },
    { icon: GraduationCap, label: language === 'fr' ? 'Professeurs' : 'Professors', value: '52', subtitle: language === 'fr' ? '3 en formation' : '3 in training', color: '#8b5cf6', bg: '#ede9fe' },
    { icon: Building, label: language === 'fr' ? 'Classes' : 'Classes', value: '28', subtitle: language === 'fr' ? '847 places' : '847 seats', color: '#10b981', bg: '#d1fae5' },
    { icon: DollarSign, label: language === 'fr' ? 'Paiements' : 'Payments', value: '92 %', subtitle: language === 'fr' ? 'Taux collecte' : 'Collection rate', color: '#f59e0b', bg: '#fef3c7' }
  ]

  const recentActivity = [
    { type: 'student', action: language === 'fr' ? 'Nouveau élève inscrit' : 'New student enrolled', name: 'Marie OKOME', time: language === 'fr' ? 'Il y a 2h' : '2h ago' },
    { type: 'payment', action: language === 'fr' ? 'Paiement reçu' : 'Payment received', name: 'Jean NGUEMA - 3ème A', time: language === 'fr' ? 'Il y a 3h' : '3h ago' },
    { type: 'professor', action: language === 'fr' ? 'Professeur absent' : 'Professor absent', name: 'M. OBIANG - Maths', time: language === 'fr' ? 'Il y a 5h' : '5h ago' }
  ]

  const alerts = [
    { text: language === 'fr' ? '15 paiements en retard pour ce mois' : '15 overdue payments this month', type: 'warning' },
    { text: language === 'fr' ? '3 professeurs sans remplacement cette semaine' : '3 professors without replacement this week', type: 'danger' },
    { text: language === 'fr' ? '2 classes ont dépassé la capacité maximale' : '2 classes exceeded maximum capacity', type: 'warning' }
  ]

  const classesOverview = [
    { level: '6ème', classes: 4, students: 128, avgSize: 32, capacity: '96%' },
    { level: '5ème', classes: 4, students: 125, avgSize: 31, capacity: '93%' },
    { level: '4ème', classes: 4, students: 132, avgSize: 33, capacity: '99%' },
    { level: '3ème', classes: 4, students: 135, avgSize: 34, capacity: '101%' }
  ]

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>
          {language === 'fr' ? 'Tableau de bord Administrateur' : 'Administrator Dashboard'}
        </h1>
        <p style={styles.subtitle}>
          {language === 'fr' ? 'Vue d\'ensemble - Collège Privé Excellence' : 'Overview - Excellence Private College'}
        </p>
      </div>

      {/* Quick Stats */}
      <div style={styles.grid}>
        {quickStats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} style={styles.statCard}>
              <div style={{ ...styles.iconBox, backgroundColor: stat.bg }}>
                <Icon style={{ width: '1.5rem', height: '1.5rem', color: stat.color }} />
              </div>
              <div style={styles.statContent}>
                <div style={styles.statTitle}>{stat.label}</div>
                <div style={styles.statValue}>{stat.value}</div>
                <div style={styles.statSubtitle}>{stat.subtitle}</div>
              </div>
            </div>
          )
        })}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
        {/* Recent Activity */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <Clock style={{ width: '1.25rem', height: '1.25rem' }} />
            {language === 'fr' ? 'Activité récente' : 'Recent Activity'}
          </h2>
          {recentActivity.map((activity, index) => (
            <div key={index} style={{ padding: '0.75rem', borderBottom: index < recentActivity.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#111827', marginBottom: '0.25rem' }}>
                {activity.action}
              </p>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>{activity.name}</p>
              <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{activity.time}</p>
            </div>
          ))}
        </div>

        {/* Alerts */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <AlertCircle style={{ width: '1.25rem', height: '1.25rem' }} />
            {language === 'fr' ? 'Alertes & Actions requises' : 'Alerts & Required Actions'}
          </h2>
          {alerts.map((alert, index) => (
            <div key={index} style={styles.alertItem}>
              <AlertCircle style={{ width: '1.25rem', height: '1.25rem', color: '#92400e', flexShrink: 0 }} />
              <span style={styles.alertText}>{alert.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Classes Overview */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <Building style={{ width: '1.25rem', height: '1.25rem' }} />
          {language === 'fr' ? 'Vue d\'ensemble des classes' : 'Classes Overview'}
        </h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>{language === 'fr' ? 'Niveau' : 'Level'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Nombre Classes' : 'Number of Classes'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Élèves' : 'Students'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Taille Moy.' : 'Avg Size'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Capacité' : 'Capacity'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Actions' : 'Actions'}</th>
            </tr>
          </thead>
          <tbody>
            {classesOverview.map((level, index) => (
              <tr key={index}>
                <td style={styles.td}><strong>{level.level}</strong></td>
                <td style={styles.td}>{level.classes}</td>
                <td style={styles.td}>{level.students}</td>
                <td style={styles.td}>{level.avgSize}</td>
                <td style={styles.td}>
                  <span style={{
                    ...styles.badge,
                    ...(parseInt(level.capacity) > 100 ? styles.badgeDanger :
                        parseInt(level.capacity) > 95 ? styles.badgeWarning :
                        styles.badgeSuccess)
                  }}>
                    {level.capacity}
                  </span>
                </td>
                <td style={styles.td}>
                  <button style={{ ...styles.button, ...styles.secondaryButton }}>
                    {language === 'fr' ? 'Détails' : 'Details'}
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
