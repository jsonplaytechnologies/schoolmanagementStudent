import { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { Link } from 'react-router-dom'
import { ArrowLeft, Download, Printer, Calendar, TrendingUp, Clock, Award, FileText } from 'lucide-react'

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
  backButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#6b7280',
    fontSize: '0.875rem',
    textDecoration: 'none'
  },
  controls: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    padding: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem'
  },
  filterGroup: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  filterLabel: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
    marginRight: '0.5rem'
  },
  select: {
    padding: '0.5rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    backgroundColor: 'white',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
    cursor: 'pointer'
  },
  actionButtons: {
    display: 'flex',
    gap: '0.5rem'
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer'
  },
  primaryButton: {
    backgroundColor: '#3b82f6',
    color: 'white'
  },
  secondaryButton: {
    backgroundColor: '#10b981',
    color: 'white'
  },
  reportCard: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    padding: '2rem'
  },
  reportHeader: {
    textAlign: 'center',
    marginBottom: '2rem',
    paddingBottom: '1.5rem',
    borderBottom: '2px solid #e5e7eb'
  },
  schoolName: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '0.5rem'
  },
  reportTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#3b82f6',
    marginBottom: '1rem'
  },
  studentInfo: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    marginBottom: '2rem',
    padding: '1rem',
    backgroundColor: '#f9fafb',
    borderRadius: '0.5rem'
  },
  infoItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  },
  infoLabel: {
    fontSize: '0.75rem',
    fontWeight: '500',
    color: '#6b7280',
    textTransform: 'uppercase'
  },
  infoValue: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#111827'
  },
  section: {
    marginBottom: '2rem'
  },
  sectionTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    paddingBottom: '0.5rem',
    borderBottom: '1px solid #e5e7eb'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1rem',
    marginBottom: '1.5rem'
  },
  statBox: {
    padding: '1rem',
    borderRadius: '0.5rem',
    border: '1px solid #e5e7eb',
    textAlign: 'center'
  },
  statLabel: {
    fontSize: '0.75rem',
    fontWeight: '500',
    color: '#6b7280',
    marginBottom: '0.5rem'
  },
  statValue: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#111827'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '1rem'
  },
  th: {
    textAlign: 'left',
    padding: '0.75rem',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#374151',
    backgroundColor: '#f9fafb',
    borderBottom: '2px solid #e5e7eb'
  },
  td: {
    padding: '0.75rem',
    fontSize: '0.875rem',
    color: '#374151',
    borderBottom: '1px solid #f3f4f6'
  },
  tdCenter: {
    textAlign: 'center'
  },
  gradeGood: {
    color: '#059669',
    fontWeight: '600'
  },
  gradeAverage: {
    color: '#d97706',
    fontWeight: '600'
  },
  gradePoor: {
    color: '#dc2626',
    fontWeight: '600'
  },
  summary: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: '#f0f9ff',
    borderRadius: '0.5rem',
    border: '2px solid #3b82f6'
  },
  summaryItem: {
    textAlign: 'center'
  },
  summaryLabel: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#1e40af',
    marginBottom: '0.5rem'
  },
  summaryValue: {
    fontSize: '1.75rem',
    fontWeight: '700',
    color: '#1e3a8a'
  },
  footer: {
    marginTop: '2rem',
    paddingTop: '1rem',
    borderTop: '2px solid #e5e7eb',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.75rem',
    color: '#6b7280'
  },
  signature: {
    marginTop: '3rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2rem'
  },
  signatureBox: {
    textAlign: 'center'
  },
  signatureLine: {
    borderTop: '1px solid #374151',
    marginTop: '3rem',
    paddingTop: '0.5rem',
    fontSize: '0.875rem',
    color: '#6b7280'
  },
  // Print styles
  '@media print': {
    noPrint: {
      display: 'none'
    }
  }
}

export default function Reports() {
  const { t, language } = useLanguage()
  const [selectedPeriod, setSelectedPeriod] = useState('trimester1')
  const [selectedYear, setSelectedYear] = useState('2025-2026')

  const studentInfo = {
    name: 'Christelle MVE ESSONO',
    studentId: '2025-327',
    class: '3ème B',
    academicYear: '2025-2026'
  }

  // Grade data
  const grades = [
    {
      subject: language === 'fr' ? 'Mathématiques' : 'Mathematics',
      test1: 14.5,
      test2: 13.0,
      homework: 15.0,
      exam: 14.0,
      average: 14.1,
      coefficient: 4
    },
    {
      subject: language === 'fr' ? 'Français' : 'French',
      test1: 13.0,
      test2: 14.5,
      homework: 13.5,
      exam: 13.5,
      average: 13.6,
      coefficient: 4
    },
    {
      subject: language === 'fr' ? 'Physique' : 'Physics',
      test1: 13.0,
      test2: 12.5,
      homework: 14.0,
      exam: 13.0,
      average: 13.1,
      coefficient: 3
    },
    {
      subject: language === 'fr' ? 'Anglais' : 'English',
      test1: 15.0,
      test2: 14.0,
      homework: 15.5,
      exam: 15.0,
      average: 14.9,
      coefficient: 3
    },
    {
      subject: language === 'fr' ? 'Histoire-Géographie' : 'History-Geography',
      test1: 12.0,
      test2: 13.5,
      homework: 12.5,
      exam: 12.5,
      average: 12.6,
      coefficient: 2
    },
    {
      subject: language === 'fr' ? 'Biologie' : 'Biology',
      test1: 14.0,
      test2: 13.5,
      homework: 14.5,
      exam: 14.0,
      average: 14.0,
      coefficient: 2
    },
    {
      subject: language === 'fr' ? 'Education Civique' : 'Civic Education',
      test1: 15.0,
      test2: 14.5,
      homework: 15.0,
      exam: 15.0,
      average: 14.9,
      coefficient: 1
    },
    {
      subject: language === 'fr' ? 'EPS' : 'Physical Education',
      test1: 16.0,
      test2: 15.5,
      homework: 16.0,
      exam: 16.0,
      average: 15.9,
      coefficient: 1
    }
  ]

  // Attendance data
  const attendanceStats = {
    totalDays: 60,
    present: 57,
    absent: 2,
    late: 1,
    justified: 2,
    unjustified: 0
  }

  // Calculate overall average
  const calculateOverallAverage = () => {
    const totalPoints = grades.reduce((sum, grade) => sum + (grade.average * grade.coefficient), 0)
    const totalCoefficient = grades.reduce((sum, grade) => sum + grade.coefficient, 0)
    return (totalPoints / totalCoefficient).toFixed(2)
  }

  const getGradeStyle = (grade) => {
    if (grade >= 14) return styles.gradeGood
    if (grade >= 10) return styles.gradeAverage
    return styles.gradePoor
  }

  const handlePrint = () => {
    window.print()
  }

  const handleDownloadPDF = () => {
    // In a real application, you would use a library like jsPDF or html2pdf
    alert(language === 'fr' ? 'Fonction PDF à implémenter' : 'PDF function to be implemented')
  }

  const getPeriodLabel = (period) => {
    if (language === 'fr') {
      switch(period) {
        case 'trimester1': return '1er Trimestre'
        case 'trimester2': return '2ème Trimestre'
        case 'trimester3': return '3ème Trimestre'
        case 'year': return 'Année Complète'
        default: return period
      }
    } else {
      switch(period) {
        case 'trimester1': return '1st Trimester'
        case 'trimester2': return '2nd Trimester'
        case 'trimester3': return '3rd Trimester'
        case 'year': return 'Full Year'
        default: return period
      }
    }
  }

  return (
    <div style={styles.container}>
      {/* Header - No Print */}
      <div style={styles.header} className="no-print">
        <div style={styles.headerContent}>
          <h1 style={styles.title}>
            {language === 'fr' ? 'Bulletins de Notes' : 'Report Cards'}
          </h1>
          <p style={styles.subtitle}>
            {language === 'fr' ? 'Consultez et imprimez vos bulletins de notes' : 'View and print your report cards'}
          </p>
        </div>
        <Link to="/" style={styles.backButton}>
          <ArrowLeft style={{ height: '1rem', width: '1rem' }} />
          {language === 'fr' ? 'Retour' : 'Back'}
        </Link>
      </div>

      {/* Controls - No Print */}
      <div style={styles.controls} className="no-print">
        <div style={styles.filterGroup}>
          <div>
            <label style={styles.filterLabel}>
              {language === 'fr' ? 'Période:' : 'Period:'}
            </label>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              style={styles.select}
            >
              <option value="trimester1">{language === 'fr' ? '1er Trimestre' : '1st Trimester'}</option>
              <option value="trimester2">{language === 'fr' ? '2ème Trimestre' : '2nd Trimester'}</option>
              <option value="trimester3">{language === 'fr' ? '3ème Trimestre' : '3rd Trimester'}</option>
              <option value="year">{language === 'fr' ? 'Année Complète' : 'Full Year'}</option>
            </select>
          </div>
          <div>
            <label style={styles.filterLabel}>
              {language === 'fr' ? 'Année scolaire:' : 'School year:'}
            </label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              style={styles.select}
            >
              <option value="2025-2026">2025-2026</option>
              <option value="2024-2025">2024-2025</option>
              <option value="2023-2024">2023-2024</option>
            </select>
          </div>
        </div>

        <div style={styles.actionButtons}>
          <button
            onClick={handlePrint}
            style={{ ...styles.button, ...styles.primaryButton }}
          >
            <Printer style={{ height: '1rem', width: '1rem' }} />
            {language === 'fr' ? 'Imprimer' : 'Print'}
          </button>
          <button
            onClick={handleDownloadPDF}
            style={{ ...styles.button, ...styles.secondaryButton }}
          >
            <Download style={{ height: '1rem', width: '1rem' }} />
            {language === 'fr' ? 'Télécharger PDF' : 'Download PDF'}
          </button>
        </div>
      </div>

      {/* Report Card */}
      <div style={styles.reportCard} id="printable-report">
        {/* Report Header */}
        <div style={styles.reportHeader}>
          <div style={styles.schoolName}>
            {language === 'fr' ? 'Collège Jean-Baptiste OBIANG' : 'Jean-Baptiste OBIANG College'}
          </div>
          <div style={styles.reportTitle}>
            {language === 'fr' ? 'Bulletin de Notes' : 'Report Card'} - {getPeriodLabel(selectedPeriod)}
          </div>
          <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
            {language === 'fr' ? 'Année scolaire:' : 'School year:'} {selectedYear}
          </div>
        </div>

        {/* Student Information */}
        <div style={styles.studentInfo}>
          <div style={styles.infoItem}>
            <div style={styles.infoLabel}>{language === 'fr' ? 'Nom de l\'élève' : 'Student name'}</div>
            <div style={styles.infoValue}>{studentInfo.name}</div>
          </div>
          <div style={styles.infoItem}>
            <div style={styles.infoLabel}>{language === 'fr' ? 'Numéro d\'élève' : 'Student ID'}</div>
            <div style={styles.infoValue}>{studentInfo.studentId}</div>
          </div>
          <div style={styles.infoItem}>
            <div style={styles.infoLabel}>{language === 'fr' ? 'Classe' : 'Class'}</div>
            <div style={styles.infoValue}>{studentInfo.class}</div>
          </div>
          <div style={styles.infoItem}>
            <div style={styles.infoLabel}>{language === 'fr' ? 'Année scolaire' : 'Academic year'}</div>
            <div style={styles.infoValue}>{studentInfo.academicYear}</div>
          </div>
        </div>

        {/* Grades Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <TrendingUp style={{ height: '1.25rem', width: '1.25rem' }} />
            {language === 'fr' ? 'Résultats Académiques' : 'Academic Results'}
          </h2>

          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>{language === 'fr' ? 'Matière' : 'Subject'}</th>
                <th style={{ ...styles.th, ...styles.tdCenter }}>{language === 'fr' ? 'Contrôle 1' : 'Test 1'}</th>
                <th style={{ ...styles.th, ...styles.tdCenter }}>{language === 'fr' ? 'Contrôle 2' : 'Test 2'}</th>
                <th style={{ ...styles.th, ...styles.tdCenter }}>{language === 'fr' ? 'Devoirs' : 'Homework'}</th>
                <th style={{ ...styles.th, ...styles.tdCenter }}>{language === 'fr' ? 'Examen' : 'Exam'}</th>
                <th style={{ ...styles.th, ...styles.tdCenter }}>{language === 'fr' ? 'Moyenne' : 'Average'}</th>
                <th style={{ ...styles.th, ...styles.tdCenter }}>{language === 'fr' ? 'Coef.' : 'Coef.'}</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((grade, index) => (
                <tr key={index}>
                  <td style={styles.td}>{grade.subject}</td>
                  <td style={{ ...styles.td, ...styles.tdCenter }}>{grade.test1.toFixed(1)}</td>
                  <td style={{ ...styles.td, ...styles.tdCenter }}>{grade.test2.toFixed(1)}</td>
                  <td style={{ ...styles.td, ...styles.tdCenter }}>{grade.homework.toFixed(1)}</td>
                  <td style={{ ...styles.td, ...styles.tdCenter }}>{grade.exam.toFixed(1)}</td>
                  <td style={{ ...styles.td, ...styles.tdCenter, ...getGradeStyle(grade.average) }}>
                    {grade.average.toFixed(1)}
                  </td>
                  <td style={{ ...styles.td, ...styles.tdCenter }}>{grade.coefficient}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Grade Summary */}
          <div style={styles.summary}>
            <div style={styles.summaryItem}>
              <div style={styles.summaryLabel}>{language === 'fr' ? 'Moyenne Générale' : 'Overall Average'}</div>
              <div style={styles.summaryValue}>{calculateOverallAverage()} / 20</div>
            </div>
            <div style={styles.summaryItem}>
              <div style={styles.summaryLabel}>{language === 'fr' ? 'Rang' : 'Rank'}</div>
              <div style={styles.summaryValue}>5 / 35</div>
            </div>
            <div style={styles.summaryItem}>
              <div style={styles.summaryLabel}>{language === 'fr' ? 'Mention' : 'Honors'}</div>
              <div style={styles.summaryValue}>{language === 'fr' ? 'Bien' : 'Good'}</div>
            </div>
          </div>
        </div>

        {/* Attendance Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <Clock style={{ height: '1.25rem', width: '1.25rem' }} />
            {language === 'fr' ? 'Assiduité et Ponctualité' : 'Attendance and Punctuality'}
          </h2>

          <div style={styles.statsGrid}>
            <div style={styles.statBox}>
              <div style={styles.statLabel}>{language === 'fr' ? 'Total jours' : 'Total days'}</div>
              <div style={styles.statValue}>{attendanceStats.totalDays}</div>
            </div>
            <div style={styles.statBox}>
              <div style={styles.statLabel}>{language === 'fr' ? 'Présent' : 'Present'}</div>
              <div style={{ ...styles.statValue, color: '#059669' }}>{attendanceStats.present}</div>
            </div>
            <div style={styles.statBox}>
              <div style={styles.statLabel}>{language === 'fr' ? 'Absent' : 'Absent'}</div>
              <div style={{ ...styles.statValue, color: '#dc2626' }}>{attendanceStats.absent}</div>
            </div>
            <div style={styles.statBox}>
              <div style={styles.statLabel}>{language === 'fr' ? 'Retards' : 'Late'}</div>
              <div style={{ ...styles.statValue, color: '#d97706' }}>{attendanceStats.late}</div>
            </div>
            <div style={styles.statBox}>
              <div style={styles.statLabel}>{language === 'fr' ? 'Justifié' : 'Justified'}</div>
              <div style={styles.statValue}>{attendanceStats.justified}</div>
            </div>
            <div style={styles.statBox}>
              <div style={styles.statLabel}>{language === 'fr' ? 'Non justifié' : 'Unjustified'}</div>
              <div style={styles.statValue}>{attendanceStats.unjustified}</div>
            </div>
          </div>

          <div style={{ padding: '1rem', backgroundColor: '#f0fdf4', borderRadius: '0.5rem', border: '1px solid #22c55e' }}>
            <div style={{ fontSize: '0.875rem', color: '#166534', fontWeight: '500', marginBottom: '0.5rem' }}>
              {language === 'fr' ? 'Taux de présence:' : 'Attendance rate:'}
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#166534' }}>
              {((attendanceStats.present / attendanceStats.totalDays) * 100).toFixed(1)}%
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <FileText style={{ height: '1.25rem', width: '1.25rem' }} />
            {language === 'fr' ? 'Appréciations' : 'Comments'}
          </h2>

          <div style={{ padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                {language === 'fr' ? 'Professeur principal:' : 'Class teacher:'}
              </div>
              <div style={{ fontSize: '0.875rem', color: '#6b7280', fontStyle: 'italic' }}>
                {language === 'fr'
                  ? 'Élève sérieuse et appliquée. Continue tes efforts, particulièrement en Histoire-Géographie.'
                  : 'Serious and diligent student. Keep up the good work, especially in History-Geography.'}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                {language === 'fr' ? 'Directeur:' : 'Principal:'}
              </div>
              <div style={{ fontSize: '0.875rem', color: '#6b7280', fontStyle: 'italic' }}>
                {language === 'fr'
                  ? 'Bon trimestre. Félicitations pour tes résultats.'
                  : 'Good trimester. Congratulations on your results.'}
              </div>
            </div>
          </div>
        </div>

        {/* Signatures */}
        <div style={styles.signature}>
          <div style={styles.signatureBox}>
            <div style={styles.signatureLine}>
              {language === 'fr' ? 'Signature du Professeur Principal' : 'Class Teacher Signature'}
            </div>
          </div>
          <div style={styles.signatureBox}>
            <div style={styles.signatureLine}>
              {language === 'fr' ? 'Signature du Directeur' : 'Principal Signature'}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <div>
            {language === 'fr'
              ? `Document généré le ${new Date().toLocaleDateString('fr-FR')}`
              : `Document generated on ${new Date().toLocaleDateString('en-US')}`}
          </div>
          <div>
            {language === 'fr' ? 'Page 1/1' : 'Page 1/1'}
          </div>
        </div>
      </div>
    </div>
  )
}
