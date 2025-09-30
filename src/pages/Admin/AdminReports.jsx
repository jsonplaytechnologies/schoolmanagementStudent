import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { BarChart3, TrendingUp, Users, DollarSign, Clock, FileText, Download } from 'lucide-react'

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
    color: '#111827'
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
  reportCard: {
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    marginBottom: '1rem',
    transition: 'all 0.2s',
    cursor: 'pointer'
  },
  reportTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '0.5rem'
  },
  reportDescription: {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '1rem'
  }
}

export default function AdminReports() {
  const { t, language } = useLanguage()

  const quickStats = [
    { icon: Users, label: language === 'fr' ? 'Taux de réussite' : 'Success Rate', value: '87%', color: '#10b981', bg: '#d1fae5' },
    { icon: TrendingUp, label: language === 'fr' ? 'Moyenne générale' : 'Overall Average', value: '13,2/20', color: '#3b82f6', bg: '#dbeafe' },
    { icon: Clock, label: language === 'fr' ? 'Taux présence' : 'Attendance Rate', value: '91%', color: '#8b5cf6', bg: '#ede9fe' },
    { icon: DollarSign, label: language === 'fr' ? 'Recouvrement' : 'Collection', value: '92%', color: '#f59e0b', bg: '#fef3c7' }
  ]

  const reports = [
    {
      id: 1,
      title: language === 'fr' ? 'Rapport Académique Trimestriel' : 'Quarterly Academic Report',
      description: language === 'fr' ? 'Notes, moyennes et classements par classe et par élève' : 'Grades, averages and rankings by class and student',
      icon: BarChart3,
      color: '#3b82f6'
    },
    {
      id: 2,
      title: language === 'fr' ? 'Rapport de Présences' : 'Attendance Report',
      description: language === 'fr' ? 'Taux de présence, absences et retards par classe' : 'Attendance rate, absences and delays by class',
      icon: Clock,
      color: '#8b5cf6'
    },
    {
      id: 3,
      title: language === 'fr' ? 'Rapport Financier' : 'Financial Report',
      description: language === 'fr' ? 'État des paiements, impayés et prévisions' : 'Payment status, outstanding and forecasts',
      icon: DollarSign,
      color: '#f59e0b'
    },
    {
      id: 4,
      title: language === 'fr' ? 'Rapport Effectifs' : 'Enrollment Report',
      description: language === 'fr' ? 'Statistiques d\'inscription et démographie' : 'Enrollment statistics and demographics',
      icon: Users,
      color: '#10b981'
    },
    {
      id: 5,
      title: language === 'fr' ? 'Rapport Professeurs' : 'Faculty Report',
      description: language === 'fr' ? 'Charge de travail et performance des enseignants' : 'Workload and teacher performance',
      icon: FileText,
      color: '#ef4444'
    }
  ]

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>
          {language === 'fr' ? 'Rapports & Statistiques' : 'Reports & Statistics'}
        </h1>
        <button style={{ ...styles.button, ...styles.secondaryButton }}>
          <Download style={{ width: '1rem', height: '1rem' }} />
          {language === 'fr' ? 'Exporter tout' : 'Export All'}
        </button>
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
              </div>
            </div>
          )
        })}
      </div>

      {/* Available Reports */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <FileText style={{ width: '1.25rem', height: '1.25rem' }} />
          {language === 'fr' ? 'Rapports disponibles' : 'Available Reports'}
        </h2>
        {reports.map((report) => {
          const Icon = report.icon
          return (
            <div
              key={report.id}
              style={styles.reportCard}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, { boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', borderColor: '#3b82f6' })}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, { boxShadow: 'none', borderColor: '#e5e7eb' })}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ ...styles.iconBox, backgroundColor: `${report.color}15` }}>
                  <Icon style={{ width: '1.5rem', height: '1.5rem', color: report.color }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={styles.reportTitle}>{report.title}</h3>
                  <p style={styles.reportDescription}>{report.description}</p>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button style={{ ...styles.button, ...styles.primaryButton }}>
                      {language === 'fr' ? 'Générer' : 'Generate'}
                    </button>
                    <button style={{ ...styles.button, ...styles.secondaryButton }}>
                      <Download style={{ width: '0.875rem', height: '0.875rem' }} />
                      {language === 'fr' ? 'Exporter PDF' : 'Export PDF'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
