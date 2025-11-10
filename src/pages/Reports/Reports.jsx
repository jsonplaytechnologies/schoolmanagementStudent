import { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { Link } from 'react-router-dom'
import {
  ArrowLeft, Download, Printer, TrendingUp, Clock,
  FileText, Award, DollarSign, Users, BarChart3, Calendar
} from 'lucide-react'

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
  controlsCard: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    padding: '1.5rem'
  },
  controlsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    marginBottom: '1.5rem'
  },
  filterGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  label: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#374151'
  },
  select: {
    padding: '0.625rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    backgroundColor: 'white',
    fontSize: '0.875rem',
    color: '#374151',
    cursor: 'pointer'
  },
  reportTypesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '0.75rem',
    marginBottom: '1rem'
  },
  reportTypeButton: {
    padding: '0.75rem 1rem',
    border: '2px solid #e5e7eb',
    borderRadius: '0.5rem',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#6b7280',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    transition: 'all 0.2s'
  },
  activeReportType: {
    backgroundColor: '#3b82f6',
    color: 'white',
    borderColor: '#3b82f6'
  },
  actions: {
    display: 'flex',
    gap: '0.75rem',
    justifyContent: 'flex-end'
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.625rem 1.25rem',
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
  reportTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    marginBottom: '2rem'
  },
  statCard: {
    padding: '1.25rem',
    borderRadius: '0.5rem',
    border: '1px solid #e5e7eb',
    backgroundColor: '#f9fafb'
  },
  statLabel: {
    fontSize: '0.75rem',
    fontWeight: '500',
    color: '#6b7280',
    marginBottom: '0.5rem',
    textTransform: 'uppercase'
  },
  statValue: {
    fontSize: '1.75rem',
    fontWeight: '700',
    color: '#111827'
  },
  statSubtext: {
    fontSize: '0.75rem',
    color: '#6b7280',
    marginTop: '0.25rem'
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
  badge: {
    display: 'inline-block',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: '500'
  },
  badgeGreen: {
    backgroundColor: '#d1fae5',
    color: '#065f46'
  },
  badgeYellow: {
    backgroundColor: '#fef3c7',
    color: '#92400e'
  },
  badgeRed: {
    backgroundColor: '#fee2e2',
    color: '#991b1b'
  },
  badgeBlue: {
    backgroundColor: '#dbeafe',
    color: '#1e40af'
  },
  chart: {
    padding: '1.5rem',
    backgroundColor: '#f9fafb',
    borderRadius: '0.5rem',
    border: '1px solid #e5e7eb'
  }
}

export default function Reports() {
  const { t, language } = useLanguage()
  const [reportType, setReportType] = useState('academic')
  const [period, setPeriod] = useState('trimester1')
  const [year, setYear] = useState('2025-2026')
  const [subject, setSubject] = useState('all')

  const reportTypes = [
    { id: 'academic', icon: TrendingUp, label: language === 'fr' ? 'Académique' : 'Academic' },
    { id: 'attendance', icon: Clock, label: language === 'fr' ? 'Assiduité' : 'Attendance' },
    { id: 'progress', icon: BarChart3, label: language === 'fr' ? 'Progrès' : 'Progress' },
    { id: 'homework', icon: FileText, label: language === 'fr' ? 'Devoirs' : 'Homework' },
    { id: 'exams', icon: Award, label: language === 'fr' ? 'Examens' : 'Exams' },
    { id: 'financial', icon: DollarSign, label: language === 'fr' ? 'Financier' : 'Financial' },
    { id: 'activities', icon: Users, label: language === 'fr' ? 'Activités' : 'Activities' },
    { id: 'comprehensive', icon: Calendar, label: language === 'fr' ? 'Complet' : 'Comprehensive' }
  ]

  const subjects = [
    { id: 'all', label: language === 'fr' ? 'Toutes les matières' : 'All subjects' },
    { id: 'math', label: language === 'fr' ? 'Mathématiques' : 'Mathematics' },
    { id: 'french', label: language === 'fr' ? 'Français' : 'French' },
    { id: 'physics', label: language === 'fr' ? 'Physique' : 'Physics' },
    { id: 'english', label: language === 'fr' ? 'Anglais' : 'English' },
    { id: 'history', label: language === 'fr' ? 'Histoire-Géo' : 'History-Geography' }
  ]

  const handlePrint = () => {
    window.print()
  }

  const renderAcademicReport = () => (
    <div>
      <div style={styles.reportTitle}>
        <TrendingUp size={24} />
        {language === 'fr' ? 'Rapport Académique' : 'Academic Report'}
      </div>

      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'Moyenne Générale' : 'Overall Average'}</div>
          <div style={styles.statValue}>14.2/20</div>
          <div style={styles.statSubtext}>{language === 'fr' ? 'Rang: 5/35' : 'Rank: 5/35'}</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'Meilleure Matière' : 'Best Subject'}</div>
          <div style={styles.statValue}>15.9</div>
          <div style={styles.statSubtext}>{language === 'fr' ? 'EPS' : 'Physical Ed.'}</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'À Améliorer' : 'Needs Improvement'}</div>
          <div style={styles.statValue}>12.6</div>
          <div style={styles.statSubtext}>{language === 'fr' ? 'Histoire-Géo' : 'History-Geo'}</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'Mention' : 'Honors'}</div>
          <div style={styles.statValue}>{language === 'fr' ? 'Bien' : 'Good'}</div>
          <div style={styles.statSubtext}>≥ 14/20</div>
        </div>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>{language === 'fr' ? 'Matière' : 'Subject'}</th>
            <th style={styles.th}>{language === 'fr' ? 'Moyenne' : 'Average'}</th>
            <th style={styles.th}>{language === 'fr' ? 'Coef.' : 'Coef.'}</th>
            <th style={styles.th}>{language === 'fr' ? 'Tendance' : 'Trend'}</th>
          </tr>
        </thead>
        <tbody>
          {[
            { subject: language === 'fr' ? 'Mathématiques' : 'Mathematics', avg: 14.1, coef: 4, trend: 'up' },
            { subject: language === 'fr' ? 'Français' : 'French', avg: 13.6, coef: 4, trend: 'stable' },
            { subject: language === 'fr' ? 'Physique' : 'Physics', avg: 13.1, coef: 3, trend: 'up' },
            { subject: language === 'fr' ? 'Anglais' : 'English', avg: 14.9, coef: 3, trend: 'up' },
            { subject: language === 'fr' ? 'Histoire-Géo' : 'History-Geography', avg: 12.6, coef: 2, trend: 'down' }
          ].map((item, idx) => (
            <tr key={idx}>
              <td style={styles.td}>{item.subject}</td>
              <td style={styles.td}><strong>{item.avg}/20</strong></td>
              <td style={styles.td}>{item.coef}</td>
              <td style={styles.td}>
                <span style={{
                  ...styles.badge,
                  ...(item.trend === 'up' ? styles.badgeGreen : item.trend === 'down' ? styles.badgeRed : styles.badgeYellow)
                }}>
                  {item.trend === 'up' ? '↑' : item.trend === 'down' ? '↓' : '→'}
                  {item.trend === 'up' ? (language === 'fr' ? ' En hausse' : ' Improving') :
                   item.trend === 'down' ? (language === 'fr' ? ' En baisse' : ' Declining') :
                   (language === 'fr' ? ' Stable' : ' Stable')}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  const renderAttendanceReport = () => (
    <div>
      <div style={styles.reportTitle}>
        <Clock size={24} />
        {language === 'fr' ? 'Rapport d\'Assiduité' : 'Attendance Report'}
      </div>

      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'Taux de Présence' : 'Attendance Rate'}</div>
          <div style={{...styles.statValue, color: '#059669'}}>95.0%</div>
          <div style={styles.statSubtext}>57/60 {language === 'fr' ? 'jours' : 'days'}</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'Absences' : 'Absences'}</div>
          <div style={{...styles.statValue, color: '#dc2626'}}>2</div>
          <div style={styles.statSubtext}>{language === 'fr' ? 'Toutes justifiées' : 'All justified'}</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'Retards' : 'Late Arrivals'}</div>
          <div style={{...styles.statValue, color: '#d97706'}}>1</div>
          <div style={styles.statSubtext}>{language === 'fr' ? '< 10 minutes' : '< 10 minutes'}</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'Comparaison Classe' : 'Class Comparison'}</div>
          <div style={{...styles.statValue, color: '#059669'}}>+3.2%</div>
          <div style={styles.statSubtext}>{language === 'fr' ? 'Au-dessus moyenne' : 'Above average'}</div>
        </div>
      </div>

      <div style={styles.chart}>
        <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '1rem' }}>
          {language === 'fr' ? 'Historique mensuel' : 'Monthly History'}
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-end', height: '150px' }}>
          {['Sept', 'Oct', 'Nov', 'Dec'].map((month, idx) => {
            const heights = [90, 95, 93, 97]
            return (
              <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: '600', color: '#3b82f6' }}>{heights[idx]}%</div>
                <div style={{
                  width: '100%',
                  backgroundColor: '#3b82f6',
                  height: `${heights[idx]}%`,
                  borderRadius: '0.25rem 0.25rem 0 0'
                }} />
                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{month}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )

  const renderProgressReport = () => (
    <div>
      <div style={styles.reportTitle}>
        <BarChart3 size={24} />
        {language === 'fr' ? 'Rapport de Progrès' : 'Progress Report'}
      </div>

      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'Évolution Générale' : 'Overall Progress'}</div>
          <div style={{...styles.statValue, color: '#059669'}}>+1.3</div>
          <div style={styles.statSubtext}>{language === 'fr' ? 'vs trimestre précédent' : 'vs previous term'}</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'Matières Améliorées' : 'Improved Subjects'}</div>
          <div style={styles.statValue}>5/8</div>
          <div style={styles.statSubtext}>62.5%</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'Plus Forte Hausse' : 'Best Improvement'}</div>
          <div style={styles.statValue}>+2.1</div>
          <div style={styles.statSubtext}>{language === 'fr' ? 'Physique' : 'Physics'}</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'Objectif Suivant' : 'Next Goal'}</div>
          <div style={styles.statValue}>15.0</div>
          <div style={styles.statSubtext}>{language === 'fr' ? 'Mention Bien' : 'Good Honors'}</div>
        </div>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>{language === 'fr' ? 'Matière' : 'Subject'}</th>
            <th style={styles.th}>T1</th>
            <th style={styles.th}>T2</th>
            <th style={styles.th}>T3</th>
            <th style={styles.th}>{language === 'fr' ? 'Évolution' : 'Change'}</th>
          </tr>
        </thead>
        <tbody>
          {[
            { subject: language === 'fr' ? 'Mathématiques' : 'Mathematics', t1: 13.2, t2: 13.8, t3: 14.1, change: '+0.9' },
            { subject: language === 'fr' ? 'Français' : 'French', t1: 13.5, t2: 13.7, t3: 13.6, change: '+0.1' },
            { subject: language === 'fr' ? 'Physique' : 'Physics', t1: 11.0, t2: 12.1, t3: 13.1, change: '+2.1' }
          ].map((item, idx) => (
            <tr key={idx}>
              <td style={styles.td}>{item.subject}</td>
              <td style={styles.td}>{item.t1}</td>
              <td style={styles.td}>{item.t2}</td>
              <td style={styles.td}><strong>{item.t3}</strong></td>
              <td style={styles.td}>
                <span style={{...styles.badge, ...styles.badgeGreen}}>{item.change}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  const renderHomeworkReport = () => (
    <div>
      <div style={styles.reportTitle}>
        <FileText size={24} />
        {language === 'fr' ? 'Rapport des Devoirs' : 'Homework Report'}
      </div>

      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'Taux de Soumission' : 'Submission Rate'}</div>
          <div style={{...styles.statValue, color: '#059669'}}>92%</div>
          <div style={styles.statSubtext}>23/25 {language === 'fr' ? 'devoirs' : 'assignments'}</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'Moyenne Devoirs' : 'Homework Average'}</div>
          <div style={styles.statValue}>14.5/20</div>
          <div style={styles.statSubtext}>{language === 'fr' ? 'Excellent' : 'Excellent'}</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'À Temps' : 'On Time'}</div>
          <div style={{...styles.statValue, color: '#059669'}}>21/23</div>
          <div style={styles.statSubtext}>91%</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'Devoirs Manquants' : 'Missing'}</div>
          <div style={{...styles.statValue, color: '#dc2626'}}>2</div>
          <div style={styles.statSubtext}>{language === 'fr' ? 'À rattraper' : 'To complete'}</div>
        </div>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>{language === 'fr' ? 'Matière' : 'Subject'}</th>
            <th style={styles.th}>{language === 'fr' ? 'Rendus' : 'Submitted'}</th>
            <th style={styles.th}>{language === 'fr' ? 'Moyenne' : 'Average'}</th>
            <th style={styles.th}>{language === 'fr' ? 'Statut' : 'Status'}</th>
          </tr>
        </thead>
        <tbody>
          {[
            { subject: language === 'fr' ? 'Mathématiques' : 'Mathematics', submitted: '5/5', avg: 15.0, status: 'excellent' },
            { subject: language === 'fr' ? 'Français' : 'French', submitted: '4/5', avg: 13.5, status: 'good' },
            { subject: language === 'fr' ? 'Physique' : 'Physics', submitted: '5/5', avg: 14.0, status: 'excellent' }
          ].map((item, idx) => (
            <tr key={idx}>
              <td style={styles.td}>{item.subject}</td>
              <td style={styles.td}>{item.submitted}</td>
              <td style={styles.td}><strong>{item.avg}/20</strong></td>
              <td style={styles.td}>
                <span style={{
                  ...styles.badge,
                  ...(item.status === 'excellent' ? styles.badgeGreen : styles.badgeYellow)
                }}>
                  {item.status === 'excellent' ?
                    (language === 'fr' ? 'Excellent' : 'Excellent') :
                    (language === 'fr' ? 'Bon' : 'Good')}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  const renderExamsReport = () => (
    <div>
      <div style={styles.reportTitle}>
        <Award size={24} />
        {language === 'fr' ? 'Rapport des Examens' : 'Exams Report'}
      </div>

      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'Moyenne Examens' : 'Exam Average'}</div>
          <div style={styles.statValue}>13.9/20</div>
          <div style={styles.statSubtext}>8 {language === 'fr' ? 'examens' : 'exams'}</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'Meilleur Résultat' : 'Best Result'}</div>
          <div style={{...styles.statValue, color: '#059669'}}>16.0/20</div>
          <div style={styles.statSubtext}>{language === 'fr' ? 'Anglais' : 'English'}</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'Taux de Réussite' : 'Pass Rate'}</div>
          <div style={{...styles.statValue, color: '#059669'}}>100%</div>
          <div style={styles.statSubtext}>8/8 {language === 'fr' ? 'réussis' : 'passed'}</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'vs Contrôles' : 'vs Tests'}</div>
          <div style={{...styles.statValue, color: '#d97706'}}>-0.3</div>
          <div style={styles.statSubtext}>{language === 'fr' ? 'Légèrement inférieur' : 'Slightly lower'}</div>
        </div>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>{language === 'fr' ? 'Matière' : 'Subject'}</th>
            <th style={styles.th}>{language === 'fr' ? 'Note Examen' : 'Exam Grade'}</th>
            <th style={styles.th}>{language === 'fr' ? 'Moy. Classe' : 'Class Avg'}</th>
            <th style={styles.th}>{language === 'fr' ? 'Performance' : 'Performance'}</th>
          </tr>
        </thead>
        <tbody>
          {[
            { subject: language === 'fr' ? 'Mathématiques' : 'Mathematics', grade: 14.0, classAvg: 12.5, perf: 'above' },
            { subject: language === 'fr' ? 'Français' : 'French', grade: 13.5, classAvg: 13.2, perf: 'average' },
            { subject: language === 'fr' ? 'Anglais' : 'English', grade: 16.0, classAvg: 13.8, perf: 'above' }
          ].map((item, idx) => (
            <tr key={idx}>
              <td style={styles.td}>{item.subject}</td>
              <td style={styles.td}><strong>{item.grade}/20</strong></td>
              <td style={styles.td}>{item.classAvg}/20</td>
              <td style={styles.td}>
                <span style={{
                  ...styles.badge,
                  ...(item.perf === 'above' ? styles.badgeGreen : styles.badgeYellow)
                }}>
                  {item.perf === 'above' ?
                    (language === 'fr' ? 'Au-dessus' : 'Above') :
                    (language === 'fr' ? 'Moyen' : 'Average')}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  const renderFinancialReport = () => (
    <div>
      <div style={styles.reportTitle}>
        <DollarSign size={24} />
        {language === 'fr' ? 'Rapport Financier' : 'Financial Report'}
      </div>

      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'Frais Annuels' : 'Annual Fees'}</div>
          <div style={styles.statValue}>1,200€</div>
          <div style={styles.statSubtext}>{language === 'fr' ? 'Total' : 'Total'}</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'Payé' : 'Paid'}</div>
          <div style={{...styles.statValue, color: '#059669'}}>800€</div>
          <div style={styles.statSubtext}>66.7%</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'Restant' : 'Remaining'}</div>
          <div style={{...styles.statValue, color: '#d97706'}}>400€</div>
          <div style={styles.statSubtext}>33.3%</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'Prochain Paiement' : 'Next Payment'}</div>
          <div style={styles.statValue}>20/09</div>
          <div style={styles.statSubtext}>400€</div>
        </div>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>{language === 'fr' ? 'Description' : 'Description'}</th>
            <th style={styles.th}>{language === 'fr' ? 'Montant' : 'Amount'}</th>
            <th style={styles.th}>{language === 'fr' ? 'Date' : 'Date'}</th>
            <th style={styles.th}>{language === 'fr' ? 'Statut' : 'Status'}</th>
          </tr>
        </thead>
        <tbody>
          {[
            { desc: language === 'fr' ? '1er Trimestre' : '1st Trimester', amount: '400€', date: '05/09/2025', status: 'paid' },
            { desc: language === 'fr' ? '2ème Trimestre' : '2nd Trimester', amount: '400€', date: '20/09/2025', status: 'pending' },
            { desc: language === 'fr' ? 'Cantine (Sept)' : 'Cafeteria (Sept)', amount: '120€', date: '15/09/2025', status: 'paid' }
          ].map((item, idx) => (
            <tr key={idx}>
              <td style={styles.td}>{item.desc}</td>
              <td style={styles.td}><strong>{item.amount}</strong></td>
              <td style={styles.td}>{item.date}</td>
              <td style={styles.td}>
                <span style={{
                  ...styles.badge,
                  ...(item.status === 'paid' ? styles.badgeGreen : styles.badgeYellow)
                }}>
                  {item.status === 'paid' ?
                    (language === 'fr' ? 'Payé' : 'Paid') :
                    (language === 'fr' ? 'En attente' : 'Pending')}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  const renderActivitiesReport = () => (
    <div>
      <div style={styles.reportTitle}>
        <Users size={24} />
        {language === 'fr' ? 'Rapport d\'Activités Extra-scolaires' : 'Extra-curricular Activities Report'}
      </div>

      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'Activités Inscrites' : 'Enrolled Activities'}</div>
          <div style={styles.statValue}>3</div>
          <div style={styles.statSubtext}>{language === 'fr' ? 'Clubs & Sports' : 'Clubs & Sports'}</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'Participation' : 'Participation'}</div>
          <div style={{...styles.statValue, color: '#059669'}}>88%</div>
          <div style={styles.statSubtext}>{language === 'fr' ? 'Régulière' : 'Regular'}</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'Récompenses' : 'Awards'}</div>
          <div style={styles.statValue}>2</div>
          <div style={styles.statSubtext}>{language === 'fr' ? 'Ce trimestre' : 'This term'}</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'Heures Service' : 'Service Hours'}</div>
          <div style={styles.statValue}>12h</div>
          <div style={styles.statSubtext}>{language === 'fr' ? 'Communauté' : 'Community'}</div>
        </div>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>{language === 'fr' ? 'Activité' : 'Activity'}</th>
            <th style={styles.th}>{language === 'fr' ? 'Type' : 'Type'}</th>
            <th style={styles.th}>{language === 'fr' ? 'Participation' : 'Attendance'}</th>
            <th style={styles.th}>{language === 'fr' ? 'Performance' : 'Performance'}</th>
          </tr>
        </thead>
        <tbody>
          {[
            { activity: language === 'fr' ? 'Club de Débat' : 'Debate Club', type: 'Club', attendance: '90%', perf: 'excellent' },
            { activity: language === 'fr' ? 'Basketball' : 'Basketball', type: 'Sport', attendance: '85%', perf: 'good' },
            { activity: language === 'fr' ? 'Théâtre' : 'Theater', type: 'Arts', attendance: '92%', perf: 'excellent' }
          ].map((item, idx) => (
            <tr key={idx}>
              <td style={styles.td}>{item.activity}</td>
              <td style={styles.td}>{item.type}</td>
              <td style={styles.td}>{item.attendance}</td>
              <td style={styles.td}>
                <span style={{
                  ...styles.badge,
                  ...(item.perf === 'excellent' ? styles.badgeGreen : styles.badgeYellow)
                }}>
                  {item.perf === 'excellent' ?
                    (language === 'fr' ? 'Excellent' : 'Excellent') :
                    (language === 'fr' ? 'Bon' : 'Good')}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  const renderComprehensiveReport = () => (
    <div>
      <div style={styles.reportTitle}>
        <Calendar size={24} />
        {language === 'fr' ? 'Rapport Complet de l\'Année' : 'Comprehensive Year Report'}
      </div>

      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'Moyenne Annuelle' : 'Year Average'}</div>
          <div style={styles.statValue}>13.8/20</div>
          <div style={styles.statSubtext}>{language === 'fr' ? 'Toutes matières' : 'All subjects'}</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'Assiduité Annuelle' : 'Year Attendance'}</div>
          <div style={{...styles.statValue, color: '#059669'}}>94%</div>
          <div style={styles.statSubtext}>169/180 {language === 'fr' ? 'jours' : 'days'}</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'Rang Général' : 'Overall Rank'}</div>
          <div style={styles.statValue}>6/35</div>
          <div style={styles.statSubtext}>Top 20%</div>
        </div>
        <div style={styles.statCard}>
          <div style={styles.statLabel}>{language === 'fr' ? 'Décision' : 'Decision'}</div>
          <div style={{...styles.statValue, color: '#059669', fontSize: '1.25rem'}}>
            {language === 'fr' ? 'Admis' : 'Passed'}
          </div>
          <div style={styles.statSubtext}>{language === 'fr' ? 'Classe supérieure' : 'Next grade'}</div>
        </div>
      </div>

      <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#f0f9ff', border: '2px solid #3b82f6', borderRadius: '0.5rem' }}>
        <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1e40af', marginBottom: '1rem' }}>
          {language === 'fr' ? 'Résumé par Trimestre' : 'Summary by Trimester'}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          {[
            { term: language === 'fr' ? 'Trimestre 1' : 'Trimester 1', avg: 13.2, rank: 7 },
            { term: language === 'fr' ? 'Trimestre 2' : 'Trimester 2', avg: 13.8, rank: 6 },
            { term: language === 'fr' ? 'Trimestre 3' : 'Trimester 3', avg: 14.2, rank: 5 }
          ].map((item, idx) => (
            <div key={idx} style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'white', borderRadius: '0.375rem' }}>
              <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>{item.term}</div>
              <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e3a8a' }}>{item.avg}/20</div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>
                {language === 'fr' ? 'Rang:' : 'Rank:'} {item.rank}/35
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem' }}>
        <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.75rem' }}>
          {language === 'fr' ? 'Commentaires du Directeur:' : 'Principal\'s Comments:'}
        </div>
        <div style={{ fontSize: '0.875rem', color: '#6b7280', fontStyle: 'italic', lineHeight: '1.6' }}>
          {language === 'fr'
            ? 'Excellente année scolaire. L\'élève a montré une progression constante et une attitude positive. Recommandé pour la classe supérieure avec félicitations.'
            : 'Excellent academic year. Student showed consistent improvement and positive attitude. Recommended for next grade with commendations.'}
        </div>
      </div>
    </div>
  )

  const renderReport = () => {
    switch (reportType) {
      case 'academic': return renderAcademicReport()
      case 'attendance': return renderAttendanceReport()
      case 'progress': return renderProgressReport()
      case 'homework': return renderHomeworkReport()
      case 'exams': return renderExamsReport()
      case 'financial': return renderFinancialReport()
      case 'activities': return renderActivitiesReport()
      case 'comprehensive': return renderComprehensiveReport()
      default: return renderAcademicReport()
    }
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header} className="no-print">
        <div style={styles.headerContent}>
          <h1 style={styles.title}>
            {language === 'fr' ? 'Rapports' : 'Reports'}
          </h1>
          <p style={styles.subtitle}>
            {language === 'fr'
              ? 'Consultez vos rapports académiques, de présence et de progrès'
              : 'View your academic, attendance and progress reports'}
          </p>
        </div>
        <Link to="/" style={styles.backButton}>
          <ArrowLeft style={{ height: '1rem', width: '1rem' }} />
          {language === 'fr' ? 'Retour' : 'Back'}
        </Link>
      </div>

      {/* Controls */}
      <div style={styles.controlsCard} className="no-print">
        {/* Report Type Selector */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ ...styles.label, marginBottom: '0.75rem' }}>
            {language === 'fr' ? 'Type de Rapport' : 'Report Type'}
          </div>
          <div style={styles.reportTypesGrid}>
            {reportTypes.map((type) => {
              const Icon = type.icon
              return (
                <button
                  key={type.id}
                  onClick={() => setReportType(type.id)}
                  style={{
                    ...styles.reportTypeButton,
                    ...(reportType === type.id ? styles.activeReportType : {})
                  }}
                >
                  <Icon size={16} />
                  {type.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Filters */}
        <div style={styles.controlsGrid}>
          <div style={styles.filterGroup}>
            <label style={styles.label}>
              {language === 'fr' ? 'Période' : 'Period'}
            </label>
            <select value={period} onChange={(e) => setPeriod(e.target.value)} style={styles.select}>
              <option value="trimester1">{language === 'fr' ? '1er Trimestre' : '1st Trimester'}</option>
              <option value="trimester2">{language === 'fr' ? '2ème Trimestre' : '2nd Trimester'}</option>
              <option value="trimester3">{language === 'fr' ? '3ème Trimestre' : '3rd Trimester'}</option>
              <option value="year">{language === 'fr' ? 'Année Complète' : 'Full Year'}</option>
            </select>
          </div>

          <div style={styles.filterGroup}>
            <label style={styles.label}>
              {language === 'fr' ? 'Année Scolaire' : 'School Year'}
            </label>
            <select value={year} onChange={(e) => setYear(e.target.value)} style={styles.select}>
              <option value="2025-2026">2025-2026</option>
              <option value="2024-2025">2024-2025</option>
              <option value="2023-2024">2023-2024</option>
            </select>
          </div>

          {(reportType === 'academic' || reportType === 'progress' || reportType === 'exams') && (
            <div style={styles.filterGroup}>
              <label style={styles.label}>
                {language === 'fr' ? 'Matière' : 'Subject'}
              </label>
              <select value={subject} onChange={(e) => setSubject(e.target.value)} style={styles.select}>
                {subjects.map(subj => (
                  <option key={subj.id} value={subj.id}>{subj.label}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Actions */}
        <div style={styles.actions}>
          <button onClick={handlePrint} style={{...styles.button, ...styles.primaryButton}}>
            <Printer size={16} />
            {language === 'fr' ? 'Imprimer' : 'Print'}
          </button>
          <button style={{...styles.button, ...styles.secondaryButton}}>
            <Download size={16} />
            {language === 'fr' ? 'Télécharger PDF' : 'Download PDF'}
          </button>
        </div>
      </div>

      {/* Report Content */}
      <div style={styles.reportCard} id="printable-report">
        {renderReport()}
      </div>
    </div>
  )
}
