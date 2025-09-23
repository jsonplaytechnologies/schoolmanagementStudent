import { GraduationCap, TrendingUp, Calendar, FileText, Download, ArrowLeft, Eye, Filter, BarChart3, Award, AlertTriangle, CheckCircle } from 'lucide-react'
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
  controls: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  filterSection: {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center'
  },
  select: {
    padding: '0.5rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    backgroundColor: 'white',
    fontSize: '0.875rem',
    color: '#374151'
  },
  searchInput: {
    padding: '0.5rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    backgroundColor: 'white',
    fontSize: '0.875rem',
    minWidth: '200px'
  },
  statsSection: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  },
  statItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.875rem',
    color: '#6b7280'
  },
  statValue: {
    fontWeight: '600',
    color: '#111827'
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
  titleCell: {
    fontWeight: '600'
  },
  subjectCell: {
    fontWeight: '500'
  },
  gradeCell: {
    fontWeight: '600',
    fontSize: '1rem'
  },
  statusCompleted: {
    color: '#059669',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem'
  },
  statusScheduled: {
    color: '#3b82f6',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem'
  },
  statusSubmitted: {
    color: '#d97706',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem'
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
  detailView: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
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
  examInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  infoLabel: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#6b7280'
  },
  infoValue: {
    fontSize: '0.875rem',
    color: '#111827'
  },
  gradeDisplay: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#059669',
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#f0fdf4',
    borderRadius: '0.5rem',
    border: '2px solid #22c55e'
  },
  instructions: {
    fontSize: '0.875rem',
    color: '#374151',
    lineHeight: '1.5',
    backgroundColor: '#f9fafb',
    padding: '1rem',
    borderRadius: '0.5rem',
    border: '1px solid #e5e7eb'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem'
  },
  statCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    backgroundColor: '#f9fafb'
  },
  statCardValue: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#111827'
  },
  statCardLabel: {
    fontSize: '0.75rem',
    color: '#6b7280',
    marginTop: '0.25rem'
  },
  subjectStatsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem'
  },
  subjectCard: {
    padding: '1rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    backgroundColor: '#f9fafb'
  },
  subjectName: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '0.5rem'
  },
  subjectStats: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.75rem',
    color: '#6b7280'
  },
  subjectGrade: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#059669'
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
    gap: '0.5rem'
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

export default function Exams() {
  const { t, language } = useLanguage()
  const [currentView, setCurrentView] = useState('overview')
  const [selectedSubject, setSelectedSubject] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [selectedExam, setSelectedExam] = useState(null)

  const exams = [
    {
      id: 1,
      title: language === 'fr' ? 'Quiz Chap. 1 — Nombres réels' : 'Quiz Ch. 1 — Real Numbers',
      subject: language === 'fr' ? 'Mathématiques' : 'Mathematics',
      date: '2025-09-02',
      type: language === 'fr' ? 'Quiz' : 'Quiz',
      status: 'completed',
      grade: 14,
      maxGrade: 20,
      coefficient: 1,
      teacher: 'M. OBIANG',
      instructions: language === 'fr' ?
        'Quiz sur les nombres réels : opérations, propriétés et applications.' :
        'Quiz on real numbers: operations, properties and applications.'
    },
    {
      id: 2,
      title: language === 'fr' ? 'Examen Trimestriel (Chap. 1–3)' : 'Term Exam (Ch. 1–3)',
      subject: language === 'fr' ? 'Mathématiques' : 'Mathematics',
      date: '2025-09-30',
      type: language === 'fr' ? 'Examen' : 'Exam',
      status: 'scheduled',
      grade: null,
      maxGrade: 20,
      coefficient: 4,
      teacher: 'M. OBIANG'
    },
    {
      id: 3,
      title: language === 'fr' ? 'Rédaction — Chap. 2' : 'Essay — Chapter 2',
      subject: language === 'fr' ? 'Français' : 'French',
      date: '2025-09-18',
      type: language === 'fr' ? 'Devoir' : 'Assignment',
      status: 'completed',
      grade: 15,
      maxGrade: 20,
      coefficient: 2,
      teacher: 'Mme MOUKETOU'
    },
    {
      id: 4,
      title: language === 'fr' ? 'TP Chimie — Mélanges' : 'Chemistry Lab — Mixtures',
      subject: language === 'fr' ? 'Sciences' : 'Sciences',
      date: '2025-09-22',
      type: language === 'fr' ? 'Examen' : 'Exam',
      status: 'submitted',
      grade: null,
      maxGrade: 20,
      coefficient: 3,
      teacher: 'M. NGUEMA'
    }
  ]

  const filteredExams = exams.filter(exam => {
    const subjectMatch = selectedSubject === 'all' || exam.subject === selectedSubject
    const typeMatch = selectedType === 'all' || exam.type === selectedType
    return subjectMatch && typeMatch
  })

  const stats = {
    total: exams.length,
    completed: exams.filter(e => e.status === 'completed').length,
    scheduled: exams.filter(e => e.status === 'scheduled').length,
    submitted: exams.filter(e => e.status === 'submitted').length
  }

  const globalStats = {
    generalAverage: 13.0,
    classRank: '7/35',
    successRate: '85%',
    totalExams: 8
  }

  const subjectStats = [
    {
      subject: language === 'fr' ? 'Mathématiques' : 'Mathematics',
      examsPassed: 3,
      studentAverage: 13.8,
      classAverage: 13.2,
      bestGrade: 18
    },
    {
      subject: language === 'fr' ? 'Français' : 'French',
      examsPassed: 2,
      studentAverage: 14.0,
      classAverage: 13.5,
      bestGrade: 19
    },
    {
      subject: language === 'fr' ? 'Sciences' : 'Sciences',
      examsPassed: 2,
      studentAverage: 12.7,
      classAverage: 13.1,
      bestGrade: 17
    }
  ]

  const subjects = [...new Set(exams.map(e => e.subject))]
  const types = [...new Set(exams.map(e => e.type))]

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle style={{ height: '0.875rem', width: '0.875rem' }} />
      case 'scheduled':
        return <Calendar style={{ height: '0.875rem', width: '0.875rem' }} />
      case 'submitted':
        return <AlertTriangle style={{ height: '0.875rem', width: '0.875rem' }} />
      default:
        return null
    }
  }

  const getStatusStyle = (status) => {
    switch (status) {
      case 'completed': return styles.statusCompleted
      case 'scheduled': return styles.statusScheduled
      case 'submitted': return styles.statusSubmitted
      default: return {}
    }
  }

  const getStatusText = (status) => {
    if (language === 'fr') {
      switch (status) {
        case 'completed': return 'Corrigé'
        case 'scheduled': return 'Prévu'
        case 'submitted': return 'Soumis'
        default: return ''
      }
    } else {
      switch (status) {
        case 'completed': return 'Graded'
        case 'scheduled': return 'Scheduled'
        case 'submitted': return 'Submitted'
        default: return ''
      }
    }
  }

  const getGradeColor = (grade, maxGrade) => {
    const percentage = (grade / maxGrade) * 100
    if (percentage >= 75) return '#059669' // Green
    if (percentage >= 50) return '#d97706' // Orange
    return '#dc2626' // Red
  }

  const renderOverview = () => (
    <div style={styles.overviewCard}>
      <div style={styles.cardHeader}>
        <h3 style={styles.cardTitle}>
          <GraduationCap style={{ height: '1.25rem', width: '1.25rem', color: '#3b82f6' }} />
          {language === 'fr' ? 'Vue Globale des Examens' : 'Global Exams View'}
        </h3>
      </div>

      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead style={styles.tableHeader}>
            <tr>
              <th style={styles.th}>{language === 'fr' ? 'Titre / Chapitre' : 'Title / Chapter'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Matière' : 'Subject'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Date' : 'Date'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Type' : 'Type'}</th>
              <th style={styles.th}>{t('status')}</th>
              <th style={styles.th}>{language === 'fr' ? 'Note' : 'Grade'}</th>
              <th style={styles.th}>{t('actions')}</th>
            </tr>
          </thead>
          <tbody>
            {filteredExams.map((exam) => (
              <tr key={exam.id}>
                <td style={{...styles.td, ...styles.titleCell}}>{exam.title}</td>
                <td style={{...styles.td, ...styles.subjectCell}}>{exam.subject}</td>
                <td style={styles.td}>
                  {new Date(exam.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')}
                </td>
                <td style={styles.td}>{exam.type}</td>
                <td style={{...styles.td, ...getStatusStyle(exam.status)}}>
                  {getStatusIcon(exam.status)}
                  {getStatusText(exam.status)}
                </td>
                <td style={{...styles.td, ...styles.gradeCell}}>
                  {exam.grade ? (
                    <span style={{ color: getGradeColor(exam.grade, exam.maxGrade) }}>
                      {exam.grade}/{exam.maxGrade}
                    </span>
                  ) : '—'}
                </td>
                <td style={styles.td}>
                  <button
                    style={styles.actionButton}
                    onClick={() => {
                      setSelectedExam(exam)
                      setCurrentView('detail')
                    }}
                  >
                    <Eye style={{ height: '0.75rem', width: '0.75rem' }} />
                    {t('view')}
                  </button>
                  {exam.status === 'scheduled' && (
                    <button style={{...styles.actionButton, ...styles.secondaryButton}}>
                      <FileText style={{ height: '0.75rem', width: '0.75rem' }} />
                      {language === 'fr' ? 'Programme' : 'Program'}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  const renderStatistics = () => (
    <div style={styles.detailView}>
      {/* Global Statistics */}
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h3 style={styles.cardTitle}>
            <BarChart3 style={{ height: '1.25rem', width: '1.25rem', color: '#10b981' }} />
            {language === 'fr' ? 'Statistiques Globales' : 'Global Statistics'}
          </h3>
        </div>
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statCardValue}>{globalStats.generalAverage}/20</div>
            <div style={styles.statCardLabel}>{language === 'fr' ? 'Moyenne générale' : 'General average'}</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statCardValue}>{globalStats.classRank}</div>
            <div style={styles.statCardLabel}>{language === 'fr' ? 'Rang dans classe' : 'Class rank'}</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statCardValue}>{globalStats.successRate}</div>
            <div style={styles.statCardLabel}>{language === 'fr' ? 'Réussite' : 'Success rate'}</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statCardValue}>{globalStats.totalExams}</div>
            <div style={styles.statCardLabel}>{language === 'fr' ? 'Examens passés' : 'Exams taken'}</div>
          </div>
        </div>
      </div>

      {/* Subject Statistics */}
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h3 style={styles.cardTitle}>
            <Award style={{ height: '1.25rem', width: '1.25rem', color: '#f59e0b' }} />
            {language === 'fr' ? 'Récapitulatif par Matière' : 'Subject Summary'}
          </h3>
        </div>
        <div style={styles.subjectStatsGrid}>
          {subjectStats.map((subject, index) => (
            <div key={index} style={styles.subjectCard}>
              <div style={styles.subjectName}>{subject.subject}</div>
              <div style={styles.subjectGrade}>{subject.studentAverage}/20</div>
              <div style={styles.subjectStats}>
                <span>{language === 'fr' ? 'Examens :' : 'Exams:'} {subject.examsPassed}</span>
                <span>{language === 'fr' ? 'Moy. classe :' : 'Class avg:'} {subject.classAverage}</span>
              </div>
              <div style={styles.subjectStats}>
                <span>{language === 'fr' ? 'Meilleure note :' : 'Best grade:'} {subject.bestGrade}/20</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderDetail = () => {
    if (!selectedExam) return null

    return (
      <div style={styles.detailView}>
        {/* Exam Information */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <FileText style={{ height: '1.25rem', width: '1.25rem', color: '#3b82f6' }} />
              {language === 'fr' ? 'Informations de l\'Évaluation' : 'Assessment Information'}
            </h3>
          </div>
          <div style={styles.examInfo}>
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>{language === 'fr' ? 'Titre :' : 'Title:'}</span>
              <span style={styles.infoValue}>{selectedExam.title}</span>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>{language === 'fr' ? 'Matière :' : 'Subject:'}</span>
              <span style={styles.infoValue}>{selectedExam.subject}</span>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>{language === 'fr' ? 'Professeur :' : 'Teacher:'}</span>
              <span style={styles.infoValue}>{selectedExam.teacher}</span>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>{language === 'fr' ? 'Date :' : 'Date:'}</span>
              <span style={styles.infoValue}>
                {new Date(selectedExam.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')}
              </span>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>{language === 'fr' ? 'Type :' : 'Type:'}</span>
              <span style={styles.infoValue}>{selectedExam.type}</span>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>{language === 'fr' ? 'Coefficient :' : 'Coefficient:'}</span>
              <span style={styles.infoValue}>{selectedExam.coefficient}</span>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>{t('status')} :</span>
              <span style={{...styles.infoValue, ...getStatusStyle(selectedExam.status)}}>
                {getStatusIcon(selectedExam.status)}
                {getStatusText(selectedExam.status)}
              </span>
            </div>
          </div>
        </div>

        {/* Grade Display */}
        {selectedExam.grade && (
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h3 style={styles.cardTitle}>
                <Award style={{ height: '1.25rem', width: '1.25rem', color: '#059669' }} />
                {language === 'fr' ? 'Note Obtenue' : 'Grade Received'}
              </h3>
            </div>
            <div style={{
              ...styles.gradeDisplay,
              color: getGradeColor(selectedExam.grade, selectedExam.maxGrade)
            }}>
              {selectedExam.grade}/{selectedExam.maxGrade}
            </div>
            <div style={{ textAlign: 'center', marginTop: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
              {language === 'fr' ? 'Coefficient :' : 'Coefficient:'} {selectedExam.coefficient}
            </div>
          </div>
        )}

        {/* Instructions */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <FileText style={{ height: '1.25rem', width: '1.25rem', color: '#10b981' }} />
              {language === 'fr' ? 'Consignes' : 'Instructions'}
            </h3>
          </div>
          <div style={styles.instructions}>
            {selectedExam.instructions || (language === 'fr' ?
              'Aucune consigne détaillée disponible.' :
              'No detailed instructions available.')}
          </div>
        </div>

        {/* Actions */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <Download style={{ height: '1.25rem', width: '1.25rem', color: '#8b5cf6' }} />
              {t('actions')}
            </h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {selectedExam.status === 'scheduled' && (
              <button style={{...styles.actionButton, width: 'fit-content'}}>
                <FileText style={{ height: '1rem', width: '1rem' }} />
                {language === 'fr' ? 'Voir programme' : 'View program'}
              </button>
            )}
            {selectedExam.grade && (
              <button style={{...styles.actionButton, width: 'fit-content'}}>
                <Download style={{ height: '1rem', width: '1rem' }} />
                {language === 'fr' ? 'Télécharger correction' : 'Download correction'}
              </button>
            )}
            <button style={{...styles.actionButton, ...styles.secondaryButton, width: 'fit-content'}}>
              {language === 'fr' ? 'Contacter professeur' : 'Contact teacher'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.title}>
            {currentView === 'detail' && selectedExam ?
              `${t('exams')} — ${selectedExam.title}` :
              currentView === 'statistics' ?
                `${t('exams')} — ${language === 'fr' ? 'Statistiques' : 'Statistics'}` :
                t('exams')
            }
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
          onClick={() => setCurrentView('statistics')}
          style={{
            ...styles.toggleButton,
            ...(currentView === 'statistics' ? styles.activeToggle : {})
          }}
        >
          {language === 'fr' ? 'Statistiques' : 'Statistics'}
        </button>
        {currentView === 'detail' && (
          <button
            onClick={() => setCurrentView('overview')}
            style={styles.toggleButton}
          >
            {language === 'fr' ? '← Retour liste examens' : '← Back to exams list'}
          </button>
        )}
      </div>

      {/* Controls */}
      {currentView === 'overview' && (
        <div style={styles.controls}>
          <div style={styles.filterSection}>
            <Filter style={{ height: '1rem', width: '1rem', color: '#6b7280' }} />
            <select
              style={styles.select}
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              <option value="all">{language === 'fr' ? 'Toutes matières' : 'All subjects'}</option>
              {subjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
            <select
              style={styles.select}
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="all">{language === 'fr' ? 'Tous types' : 'All types'}</option>
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <input
              type="text"
              style={styles.searchInput}
              placeholder={language === 'fr' ? '🔍 Rechercher...' : '🔍 Search...'}
            />
          </div>

          <div style={styles.statsSection}>
            <div style={styles.statItem}>
              <span>{language === 'fr' ? 'Total :' : 'Total:'}</span>
              <span style={styles.statValue}>{stats.total}</span>
            </div>
            <div style={styles.statItem}>
              <span>{language === 'fr' ? 'Corrigés :' : 'Graded:'}</span>
              <span style={styles.statValue}>{stats.completed}</span>
            </div>
            <div style={styles.statItem}>
              <span>{language === 'fr' ? 'Prévus :' : 'Scheduled:'}</span>
              <span style={styles.statValue}>{stats.scheduled}</span>
            </div>
            <div style={styles.statItem}>
              <span>{language === 'fr' ? 'Soumis :' : 'Submitted:'}</span>
              <span style={styles.statValue}>{stats.submitted}</span>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      {currentView === 'overview' && renderOverview()}
      {currentView === 'statistics' && renderStatistics()}
      {currentView === 'detail' && renderDetail()}
    </div>
  )
}