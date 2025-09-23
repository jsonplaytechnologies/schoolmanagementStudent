import { BookOpen, TrendingUp, User, Clock, Download, ArrowLeft, Eye, FileText, Calendar, Trophy, AlertTriangle } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  header: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    padding: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerContent: {
    flex: 1
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '0.5rem'
  },
  subtitle: {
    color: '#6b7280',
    fontSize: '0.875rem'
  },
  overviewCard: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    padding: '1.5rem'
  },
  tableContainer: {
    overflowX: 'auto'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  tableHeader: {
    backgroundColor: '#f9fafb',
    borderBottom: '1px solid #e5e7eb'
  },
  th: {
    padding: '0.75rem',
    textAlign: 'left',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#374151'
  },
  td: {
    padding: '0.75rem',
    borderBottom: '1px solid #f3f4f6',
    fontSize: '0.875rem',
    color: '#111827'
  },
  subjectCell: {
    fontWeight: '600'
  },
  gradeCell: {
    fontWeight: '500'
  },
  statusSuccess: {
    color: '#059669',
    fontWeight: '500'
  },
  statusWarning: {
    color: '#d97706',
    fontWeight: '500'
  },
  statusDanger: {
    color: '#dc2626',
    fontWeight: '500'
  },
  actionButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.25rem',
    padding: '0.25rem 0.5rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    fontSize: '0.75rem',
    textDecoration: 'none',
    marginRight: '0.25rem'
  },
  secondaryButton: {
    backgroundColor: '#6b7280'
  },
  actions: {
    display: 'flex',
    gap: '0.5rem',
    marginTop: '1rem'
  },
  exportButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    fontSize: '0.875rem',
    textDecoration: 'none'
  },
  detailView: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    padding: '1.5rem'
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem'
  },
  cardTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#111827',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem'
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    backgroundColor: '#f9fafb'
  },
  statValue: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#111827'
  },
  statLabel: {
    fontSize: '0.75rem',
    color: '#6b7280',
    marginTop: '0.25rem'
  },
  upcomingEvents: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  eventItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.75rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem'
  },
  eventInfo: {
    flex: 1
  },
  eventTitle: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#111827'
  },
  eventDate: {
    fontSize: '0.75rem',
    color: '#6b7280'
  },
  contentList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  contentItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.375rem',
    backgroundColor: '#f9fafb'
  },
  contentText: {
    fontSize: '0.875rem',
    color: '#374151'
  },
  backButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#6b7280',
    fontSize: '0.875rem',
    textDecoration: 'none'
  },
  viewToggle: {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '1rem'
  },
  toggleButton: {
    padding: '0.5rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151'
  },
  activeToggle: {
    backgroundColor: '#3b82f6',
    color: 'white',
    border: '1px solid #3b82f6'
  }
}

export default function Courses() {
  const { t, language } = useLanguage()
  const [currentView, setCurrentView] = useState('overview')
  const [selectedSubject, setSelectedSubject] = useState(null)

  const courses = [
    {
      subject: language === 'fr' ? 'Mathématiques' : 'Mathematics',
      teacher: 'M. OBIANG',
      coefficient: 6,
      trimesterGrade: 13.8,
      yearGrade: 12.9,
      status: 'success'
    },
    {
      subject: language === 'fr' ? 'Français' : 'French',
      teacher: 'Mme MOUKETOU',
      coefficient: 5,
      trimesterGrade: 14.2,
      yearGrade: 13.5,
      status: 'success'
    },
    {
      subject: language === 'fr' ? 'Physique' : 'Physics',
      teacher: 'M. NGUEMA',
      coefficient: 5,
      trimesterGrade: 9.8,
      yearGrade: 10.5,
      status: 'danger'
    },
    {
      subject: language === 'fr' ? 'Chimie' : 'Chemistry',
      teacher: 'Mme ELLA',
      coefficient: 4,
      trimesterGrade: 12.0,
      yearGrade: 11.7,
      status: 'warning'
    },
    {
      subject: language === 'fr' ? 'Biologie' : 'Biology',
      teacher: 'M. ESSONO',
      coefficient: 3,
      trimesterGrade: 15.0,
      yearGrade: 14.5,
      status: 'success'
    },
    {
      subject: language === 'fr' ? 'Informatique' : 'Computer Science',
      teacher: 'M. BIKISA',
      coefficient: 2,
      trimesterGrade: 16.0,
      yearGrade: 15.8,
      status: 'success'
    }
  ]

  const mathsDetail = {
    subject: language === 'fr' ? 'Mathématiques' : 'Mathematics',
    teacher: 'M. OBIANG',
    coefficient: 6,
    room: 'S205',
    stats: {
      studentAverage: 13.8,
      classAverage: 12.9,
      ranking: '7/35',
      successRate: '88%'
    },
    upcomingEvents: [
      {
        title: language === 'fr' ? 'Interro Chapitre 4' : 'Chapter 4 Quiz',
        date: '12/09/2025'
      },
      {
        title: language === 'fr' ? 'Examen Trimestriel' : 'Term Exam',
        date: '20/11/2025'
      }
    ],
    content: [
      language === 'fr' ? 'Chapitre 1 : Révisions' : 'Chapter 1: Review',
      language === 'fr' ? 'Chapitre 2 : Équations' : 'Chapter 2: Equations',
      language === 'fr' ? 'Chapitre 3 : Applications' : 'Chapter 3: Applications',
      language === 'fr' ? 'Chapitre 4 : Inéquations (prévu)' : 'Chapter 4: Inequations (planned)'
    ]
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'success': return styles.statusSuccess
      case 'warning': return styles.statusWarning
      case 'danger': return styles.statusDanger
      default: return {}
    }
  }

  const getStatusText = (status) => {
    if (language === 'fr') {
      switch (status) {
        case 'success': return '✅ Réussi'
        case 'warning': return '⚠️ Attention'
        case 'danger': return '❌ Échec'
        default: return ''
      }
    } else {
      switch (status) {
        case 'success': return '✅ Pass'
        case 'warning': return '⚠️ Warning'
        case 'danger': return '❌ Fail'
        default: return ''
      }
    }
  }

  const renderOverview = () => (
    <div style={styles.overviewCard}>
      <div style={styles.cardHeader}>
        <h3 style={styles.cardTitle}>
          <BookOpen style={{ height: '1.25rem', width: '1.25rem', color: '#3b82f6' }} />
          {language === 'fr' ? 'Suivi Académique' : 'Academic Tracking'}
        </h3>
      </div>

      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead style={styles.tableHeader}>
            <tr>
              <th style={styles.th}>{language === 'fr' ? 'Matière' : 'Subject'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Professeur' : 'Teacher'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Coef' : 'Coeff'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Moy. Trimestre' : 'Term Avg'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Moy. Année' : 'Year Avg'}</th>
              <th style={styles.th}>{t('status')}</th>
              <th style={styles.th}>{t('actions')}</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td style={{...styles.td, ...styles.subjectCell}}>{course.subject}</td>
                <td style={styles.td}>{course.teacher}</td>
                <td style={styles.td}>{course.coefficient}</td>
                <td style={{...styles.td, ...styles.gradeCell}}>{course.trimesterGrade} / 20</td>
                <td style={{...styles.td, ...styles.gradeCell}}>{course.yearGrade} / 20</td>
                <td style={{...styles.td, ...getStatusColor(course.status)}}>{getStatusText(course.status)}</td>
                <td style={styles.td}>
                  <button
                    style={styles.actionButton}
                    onClick={() => {
                      setSelectedSubject(course.subject)
                      setCurrentView('detail')
                    }}
                  >
                    <Eye style={{ height: '0.75rem', width: '0.75rem' }} />
                    {language === 'fr' ? 'Détails' : 'Details'}
                  </button>
                  <button style={{...styles.actionButton, ...styles.secondaryButton}}>
                    <Clock style={{ height: '0.75rem', width: '0.75rem' }} />
                    {language === 'fr' ? 'Prés.' : 'Att.'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={styles.actions}>
        <button style={styles.exportButton}>
          <Download style={{ height: '1rem', width: '1rem' }} />
          {language === 'fr' ? 'Télécharger relevé PDF' : 'Download transcript PDF'}
        </button>
        <button style={styles.exportButton}>
          <FileText style={{ height: '1rem', width: '1rem' }} />
          {language === 'fr' ? 'Exporter CSV' : 'Export CSV'}
        </button>
      </div>
    </div>
  )

  const renderDetail = () => (
    <div style={styles.detailView}>
      {/* Course Statistics */}
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h3 style={styles.cardTitle}>
            <TrendingUp style={{ height: '1.25rem', width: '1.25rem', color: '#10b981' }} />
            {language === 'fr' ? 'Statistiques' : 'Statistics'}
          </h3>
        </div>
        <div style={styles.statsGrid}>
          <div style={styles.statItem}>
            <div style={styles.statValue}>{mathsDetail.stats.studentAverage}/20</div>
            <div style={styles.statLabel}>{language === 'fr' ? 'Moyenne élève' : 'Student average'}</div>
          </div>
          <div style={styles.statItem}>
            <div style={styles.statValue}>{mathsDetail.stats.classAverage}/20</div>
            <div style={styles.statLabel}>{language === 'fr' ? 'Moyenne classe' : 'Class average'}</div>
          </div>
          <div style={styles.statItem}>
            <div style={styles.statValue}>{mathsDetail.stats.ranking}</div>
            <div style={styles.statLabel}>{language === 'fr' ? 'Classement' : 'Ranking'}</div>
          </div>
          <div style={styles.statItem}>
            <div style={styles.statValue}>{mathsDetail.stats.successRate}</div>
            <div style={styles.statLabel}>{language === 'fr' ? 'Taux de réussite' : 'Success rate'}</div>
          </div>
        </div>
      </div>

      {/* Course Information */}
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h3 style={styles.cardTitle}>
            <User style={{ height: '1.25rem', width: '1.25rem', color: '#3b82f6' }} />
            {language === 'fr' ? 'Informations du cours' : 'Course Information'}
          </h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: '500', color: '#6b7280' }}>{language === 'fr' ? 'Professeur :' : 'Teacher:'}</span>
            <span>{mathsDetail.teacher}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: '500', color: '#6b7280' }}>{language === 'fr' ? 'Coefficient :' : 'Coefficient:'}</span>
            <span>{mathsDetail.coefficient}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: '500', color: '#6b7280' }}>{language === 'fr' ? 'Salle habituelle :' : 'Usual classroom:'}</span>
            <span>{mathsDetail.room}</span>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h3 style={styles.cardTitle}>
            <Calendar style={{ height: '1.25rem', width: '1.25rem', color: '#f59e0b' }} />
            {language === 'fr' ? 'Prochains événements' : 'Upcoming events'}
          </h3>
        </div>
        <div style={styles.upcomingEvents}>
          {mathsDetail.upcomingEvents.map((event, index) => (
            <div key={index} style={styles.eventItem}>
              <div style={styles.eventInfo}>
                <div style={styles.eventTitle}>{event.title}</div>
                <div style={styles.eventDate}>
                  {new Date(event.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')}
                </div>
              </div>
              <button style={styles.actionButton}>
                <Eye style={{ height: '0.75rem', width: '0.75rem' }} />
                {t('view')}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Course Content */}
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h3 style={styles.cardTitle}>
            <BookOpen style={{ height: '1.25rem', width: '1.25rem', color: '#8b5cf6' }} />
            {language === 'fr' ? 'Contenu du cours' : 'Course content'}
          </h3>
        </div>
        <div style={styles.contentList}>
          {mathsDetail.content.map((item, index) => (
            <div key={index} style={styles.contentItem}>
              <span style={styles.contentText}>{item}</span>
            </div>
          ))}
        </div>
        <div style={styles.actions}>
          <button style={styles.exportButton}>
            <FileText style={{ height: '1rem', width: '1rem' }} />
            {language === 'fr' ? 'Voir syllabus' : 'View syllabus'}
          </button>
          <button style={styles.exportButton}>
            <Eye style={{ height: '1rem', width: '1rem' }} />
            {language === 'fr' ? 'Voir toutes les séances' : 'View all sessions'}
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.title}>
            {currentView === 'detail' ? `${t('courses')} — ${selectedSubject}` : t('courses')}
          </h1>
          <p style={styles.subtitle}>
            {language === 'fr' ? 'Élève :' : 'Student:'} Christelle MVE ESSONO | {t('class')}: 3ème B | {language === 'fr' ? 'Année scolaire :' : 'School year:'} 2025–2026
          </p>
        </div>
        <Link to="/" style={styles.backButton}>
          <ArrowLeft style={{ height: '1rem', width: '1rem' }} />
          {language === 'fr' ? 'Retour tableau de bord' : 'Back to dashboard'}
        </Link>
      </div>

      {/* View Toggle */}
      <div style={styles.viewToggle}>
        <button
          onClick={() => setCurrentView('overview')}
          style={{
            ...styles.toggleButton,
            ...(currentView === 'overview' ? styles.activeToggle : {})
          }}
        >
          {language === 'fr' ? 'Vue globale' : 'Overview'}
        </button>
        <button
          onClick={() => {
            setCurrentView('detail')
            setSelectedSubject(language === 'fr' ? 'Mathématiques' : 'Mathematics')
          }}
          style={{
            ...styles.toggleButton,
            ...(currentView === 'detail' ? styles.activeToggle : {})
          }}
        >
          {language === 'fr' ? 'Détail matière' : 'Subject detail'}
        </button>
      </div>

      {/* Content */}
      {currentView === 'overview' && renderOverview()}
      {currentView === 'detail' && renderDetail()}
    </div>
  )
}