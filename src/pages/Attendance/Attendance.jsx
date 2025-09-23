import { Calendar, Clock, CheckCircle, XCircle, AlertCircle, User, Book, ArrowLeft, ArrowRight, TrendingUp, TrendingDown, Target, Download } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { Link } from 'react-router-dom'

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
  viewToggle: {
    display: 'flex',
    backgroundColor: '#f3f4f6',
    borderRadius: '0.5rem',
    padding: '0.25rem'
  },
  viewButton: {
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#6b7280'
  },
  viewButtonActive: {
    backgroundColor: 'white',
    color: '#3b82f6',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem'
  },
  statCard: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    padding: '1.5rem'
  },
  statHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '0.75rem'
  },
  statTitle: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#6b7280'
  },
  statValue: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#111827'
  },
  statTrend: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    fontSize: '0.75rem',
    fontWeight: '500'
  },
  mainGrid: {
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
    justifyContent: 'space-between',
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
  attendanceItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.75rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    marginBottom: '0.75rem'
  },
  subjectInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    flex: 1
  },
  subjectIcon: {
    padding: '0.5rem',
    borderRadius: '0.5rem',
    backgroundColor: '#dbeafe'
  },
  subjectDetails: {
    flex: 1
  },
  subjectName: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#111827'
  },
  subjectTeacher: {
    fontSize: '0.75rem',
    color: '#6b7280'
  },
  attendanceStats: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '0.25rem'
  },
  attendanceRate: {
    fontSize: '0.875rem',
    fontWeight: '600'
  },
  calendarGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '0.25rem'
  },
  calendarHeader: {
    padding: '0.5rem',
    fontSize: '0.75rem',
    fontWeight: '500',
    color: '#6b7280',
    textAlign: 'center'
  },
  calendarDay: {
    padding: '0.5rem',
    fontSize: '0.75rem',
    textAlign: 'center',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    minHeight: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  calendarDayPresent: {
    backgroundColor: '#dcfce7',
    color: '#166534'
  },
  calendarDayAbsent: {
    backgroundColor: '#fecaca',
    color: '#991b1b'
  },
  calendarDayTardy: {
    backgroundColor: '#fef3c7',
    color: '#92400e'
  },
  alertsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  alertItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.75rem',
    backgroundColor: '#fef2f2',
    border: '1px solid #fecaca',
    borderRadius: '0.5rem'
  },
  alertIcon: {
    padding: '0.5rem',
    borderRadius: '0.5rem',
    backgroundColor: '#dc2626'
  },
  alertContent: {
    flex: 1
  },
  alertTitle: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#111827'
  },
  alertDate: {
    fontSize: '0.75rem',
    color: '#6b7280'
  },
  recordsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  recordItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.75rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem'
  },
  recordInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  },
  recordStatus: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: '500'
  },
  monthNavigation: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'between',
    gap: '1rem'
  },
  navButton: {
    padding: '0.5rem',
    backgroundColor: '#f3f4f6',
    border: 'none',
    borderRadius: '0.375rem',
    cursor: 'pointer'
  },
  monthTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#111827',
    flex: 1,
    textAlign: 'center'
  },
  backButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#6b7280',
    fontSize: '0.875rem',
    textDecoration: 'none'
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
    fontWeight: '500'
  }
}

export default function Attendance() {
  const { language, t } = useLanguage()
  const [currentView, setCurrentView] = useState('overview')
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const attendanceData = [
    {
      subject: language === 'fr' ? 'Français' : 'French',
      teacher: 'Mme NTOUTOUME',
      present: 18,
      absent: 2,
      tardy: 1,
      total: 21,
      rate: 85.7,
      color: '#3b82f6'
    },
    {
      subject: language === 'fr' ? 'Mathématiques' : 'Mathematics',
      teacher: 'M. OBAME',
      present: 19,
      absent: 1,
      tardy: 1,
      total: 21,
      rate: 90.5,
      color: '#10b981'
    },
    {
      subject: language === 'fr' ? 'Histoire-Géographie' : 'History-Geography',
      teacher: 'Mme MINKO',
      present: 20,
      absent: 1,
      tardy: 0,
      total: 21,
      rate: 95.2,
      color: '#f59e0b'
    },
    {
      subject: language === 'fr' ? 'Sciences Physiques' : 'Physical Sciences',
      teacher: 'M. NDONG',
      present: 17,
      absent: 3,
      tardy: 1,
      total: 21,
      rate: 81.0,
      color: '#8b5cf6'
    },
    {
      subject: language === 'fr' ? 'Anglais' : 'English',
      teacher: 'Mrs. JOHNSON',
      present: 19,
      absent: 2,
      tardy: 0,
      total: 21,
      rate: 90.5,
      color: '#ef4444'
    }
  ]

  const alerts = [
    {
      type: 'absence',
      subject: language === 'fr' ? 'Sciences Physiques' : 'Physical Sciences',
      date: '15 ' + (language === 'fr' ? 'janvier' : 'January') + ' 2025',
      reason: language === 'fr' ? 'Absence non justifiée' : 'Unexcused absence'
    },
    {
      type: 'tardiness',
      subject: language === 'fr' ? 'Mathématiques' : 'Mathematics',
      date: '12 ' + (language === 'fr' ? 'janvier' : 'January') + ' 2025',
      reason: language === 'fr' ? 'Retard de 15 minutes' : '15 minutes late'
    },
    {
      type: 'absence',
      subject: language === 'fr' ? 'Français' : 'French',
      date: '08 ' + (language === 'fr' ? 'janvier' : 'January') + ' 2025',
      reason: language === 'fr' ? 'Certificat médical fourni' : 'Medical certificate provided'
    }
  ]

  const recentRecords = [
    {
      date: '20 ' + (language === 'fr' ? 'janvier' : 'January') + ' 2025',
      subject: language === 'fr' ? 'Français' : 'French',
      status: 'present',
      time: '08:00'
    },
    {
      date: '20 ' + (language === 'fr' ? 'janvier' : 'January') + ' 2025',
      subject: language === 'fr' ? 'Mathématiques' : 'Mathematics',
      status: 'present',
      time: '09:00'
    },
    {
      date: '19 ' + (language === 'fr' ? 'janvier' : 'January') + ' 2025',
      subject: language === 'fr' ? 'Histoire-Géographie' : 'History-Geography',
      status: 'present',
      time: '10:00'
    },
    {
      date: '19 ' + (language === 'fr' ? 'janvier' : 'January') + ' 2025',
      subject: language === 'fr' ? 'Sciences Physiques' : 'Physical Sciences',
      status: 'absent',
      time: '14:00'
    },
    {
      date: '18 ' + (language === 'fr' ? 'janvier' : 'January') + ' 2025',
      subject: language === 'fr' ? 'Anglais' : 'English',
      status: 'tardy',
      time: '11:15'
    }
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case 'present':
        return <CheckCircle style={{ height: '1rem', width: '1rem', color: '#10b981' }} />
      case 'absent':
        return <XCircle style={{ height: '1rem', width: '1rem', color: '#ef4444' }} />
      case 'tardy':
        return <Clock style={{ height: '1rem', width: '1rem', color: '#f59e0b' }} />
      default:
        return null
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'present':
        return language === 'fr' ? 'Présent(e)' : 'Present'
      case 'absent':
        return language === 'fr' ? 'Absent(e)' : 'Absent'
      case 'tardy':
        return language === 'fr' ? 'En retard' : 'Tardy'
      default:
        return ''
    }
  }

  const getAttendanceRateColor = (rate) => {
    if (rate >= 95) return '#10b981'
    if (rate >= 85) return '#f59e0b'
    return '#ef4444'
  }

  const generateCalendarDays = () => {
    const days = []
    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate()

    // Sample attendance data for calendar visualization
    const attendanceCalendar = {
      1: 'present', 2: 'present', 3: 'present', 4: 'present', 5: 'present',
      8: 'present', 9: 'tardy', 10: 'present', 11: 'present', 12: 'present',
      15: 'absent', 16: 'present', 17: 'present', 18: 'present', 19: 'present',
      22: 'present', 23: 'present', 24: 'present', 25: 'present', 26: 'present'
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const status = attendanceCalendar[day]
      let dayStyle = { ...styles.calendarDay }

      if (status === 'present') {
        dayStyle = { ...dayStyle, ...styles.calendarDayPresent }
      } else if (status === 'absent') {
        dayStyle = { ...dayStyle, ...styles.calendarDayAbsent }
      } else if (status === 'tardy') {
        dayStyle = { ...dayStyle, ...styles.calendarDayTardy }
      }

      days.push(
        <div key={day} style={dayStyle}>
          {day}
        </div>
      )
    }

    return days
  }

  const totalPresent = attendanceData.reduce((sum, item) => sum + item.present, 0)
  const totalAbsent = attendanceData.reduce((sum, item) => sum + item.absent, 0)
  const totalTardy = attendanceData.reduce((sum, item) => sum + item.tardy, 0)
  const totalSessions = attendanceData.reduce((sum, item) => sum + item.total, 0)
  const globalRate = ((totalPresent / totalSessions) * 100).toFixed(1)

  const renderOverview = () => (
    <>
      {/* Statistics Cards */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={styles.statHeader}>
            <span style={styles.statTitle}>
              {language === 'fr' ? 'Taux de présence global' : 'Overall attendance rate'}
            </span>
            <TrendingUp style={{ height: '1.25rem', width: '1.25rem', color: globalRate >= 85 ? '#10b981' : '#f59e0b' }} />
          </div>
          <div style={{ ...styles.statValue, color: getAttendanceRateColor(globalRate) }}>
            {globalRate}%
          </div>
          <div style={{ ...styles.statTrend, color: '#10b981' }}>
            <TrendingUp style={{ height: '0.875rem', width: '0.875rem' }} />
            +2.3% {language === 'fr' ? 'ce mois' : 'this month'}
          </div>
        </div>

        <div style={styles.statCard}>
          <div style={styles.statHeader}>
            <span style={styles.statTitle}>
              {language === 'fr' ? 'Sessions présentes' : 'Present sessions'}
            </span>
            <CheckCircle style={{ height: '1.25rem', width: '1.25rem', color: '#10b981' }} />
          </div>
          <div style={{ ...styles.statValue, color: '#10b981' }}>
            {totalPresent}
          </div>
          <div style={styles.statTrend}>
            <span style={{ color: '#6b7280' }}>
              {language === 'fr' ? 'sur' : 'out of'} {totalSessions} {language === 'fr' ? 'sessions' : 'sessions'}
            </span>
          </div>
        </div>

        <div style={styles.statCard}>
          <div style={styles.statHeader}>
            <span style={styles.statTitle}>
              {language === 'fr' ? 'Absences' : 'Absences'}
            </span>
            <XCircle style={{ height: '1.25rem', width: '1.25rem', color: '#ef4444' }} />
          </div>
          <div style={{ ...styles.statValue, color: '#ef4444' }}>
            {totalAbsent}
          </div>
          <div style={{ ...styles.statTrend, color: totalAbsent <= 3 ? '#10b981' : '#ef4444' }}>
            {totalAbsent <= 3 ? (
              <>
                <TrendingDown style={{ height: '0.875rem', width: '0.875rem' }} />
                {language === 'fr' ? 'Bon niveau' : 'Good level'}
              </>
            ) : (
              <>
                <TrendingUp style={{ height: '0.875rem', width: '0.875rem' }} />
                {language === 'fr' ? 'À surveiller' : 'To monitor'}
              </>
            )}
          </div>
        </div>

        <div style={styles.statCard}>
          <div style={styles.statHeader}>
            <span style={styles.statTitle}>
              {language === 'fr' ? 'Retards' : 'Tardiness'}
            </span>
            <Clock style={{ height: '1.25rem', width: '1.25rem', color: '#f59e0b' }} />
          </div>
          <div style={{ ...styles.statValue, color: '#f59e0b' }}>
            {totalTardy}
          </div>
          <div style={styles.statTrend}>
            <span style={{ color: '#6b7280' }}>
              {language === 'fr' ? 'ce mois' : 'this month'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div style={styles.mainGrid}>
        {/* Subject-wise Attendance */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <Book style={{ height: '1.25rem', width: '1.25rem', color: '#3b82f6' }} />
              {language === 'fr' ? 'Présence par Matière' : 'Attendance by Subject'}
            </h3>
          </div>
          <div>
            {attendanceData.map((item, index) => (
              <div key={index} style={styles.attendanceItem}>
                <div style={styles.subjectInfo}>
                  <div style={{ ...styles.subjectIcon, backgroundColor: item.color + '20' }}>
                    <Book style={{ height: '1rem', width: '1rem', color: item.color }} />
                  </div>
                  <div style={styles.subjectDetails}>
                    <div style={styles.subjectName}>{item.subject}</div>
                    <div style={styles.subjectTeacher}>{item.teacher}</div>
                  </div>
                </div>
                <div style={styles.attendanceStats}>
                  <div style={{ ...styles.attendanceRate, color: getAttendanceRateColor(item.rate) }}>
                    {item.rate}%
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                    {item.present}/{item.total} {language === 'fr' ? 'présent(e)' : 'present'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Alerts */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <AlertCircle style={{ height: '1.25rem', width: '1.25rem', color: '#ef4444' }} />
              {language === 'fr' ? 'Alertes Récentes' : 'Recent Alerts'}
            </h3>
          </div>
          <div style={styles.alertsList}>
            {alerts.map((alert, index) => (
              <div key={index} style={styles.alertItem}>
                <div style={styles.alertIcon}>
                  {alert.type === 'absence' ? (
                    <XCircle style={{ height: '1rem', width: '1rem', color: 'white' }} />
                  ) : (
                    <Clock style={{ height: '1rem', width: '1rem', color: 'white' }} />
                  )}
                </div>
                <div style={styles.alertContent}>
                  <div style={styles.alertTitle}>
                    {alert.subject} - {alert.date}
                  </div>
                  <div style={styles.alertDate}>{alert.reason}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Records */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <User style={{ height: '1.25rem', width: '1.25rem', color: '#10b981' }} />
              {language === 'fr' ? 'Enregistrements Récents' : 'Recent Records'}
            </h3>
          </div>
          <div style={styles.recordsList}>
            {recentRecords.map((record, index) => (
              <div key={index} style={styles.recordItem}>
                <div style={styles.recordInfo}>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: '500', color: '#111827' }}>
                      {record.subject}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                      {record.date} - {record.time}
                    </div>
                  </div>
                </div>
                <div style={styles.recordStatus}>
                  {getStatusIcon(record.status)}
                  {getStatusText(record.status)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )

  const renderCalendar = () => (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <h3 style={styles.cardTitle}>
          <Calendar style={{ height: '1.25rem', width: '1.25rem', color: '#3b82f6' }} />
          {language === 'fr' ? 'Calendrier de Présence' : 'Attendance Calendar'}
        </h3>
        <div style={styles.monthNavigation}>
          <button style={styles.navButton}>
            <ArrowLeft style={{ height: '1rem', width: '1rem' }} />
          </button>
          <span style={styles.monthTitle}>
            {language === 'fr' ? 'Janvier 2025' : 'January 2025'}
          </span>
          <button style={styles.navButton}>
            <ArrowRight style={{ height: '1rem', width: '1rem' }} />
          </button>
        </div>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <div style={styles.calendarGrid}>
          {(language === 'fr' ? ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'] : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']).map(day => (
            <div key={day} style={styles.calendarHeader}>{day}</div>
          ))}
          {generateCalendarDays()}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <div style={{ width: '0.75rem', height: '0.75rem', backgroundColor: '#dcfce7', borderRadius: '0.125rem' }}></div>
            <span>{language === 'fr' ? 'Présent' : 'Present'}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <div style={{ width: '0.75rem', height: '0.75rem', backgroundColor: '#fecaca', borderRadius: '0.125rem' }}></div>
            <span>{language === 'fr' ? 'Absent' : 'Absent'}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <div style={{ width: '0.75rem', height: '0.75rem', backgroundColor: '#fef3c7', borderRadius: '0.125rem' }}></div>
            <span>{language === 'fr' ? 'Retard' : 'Tardy'}</span>
          </div>
        </div>
        <button style={styles.exportButton}>
          <Download style={{ height: '0.875rem', width: '0.875rem' }} />
          {language === 'fr' ? 'Exporter' : 'Export'}
        </button>
      </div>
    </div>
  )

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.title}>
            {language === 'fr' ? 'Présence et Assiduité' : 'Attendance & Punctuality'}
          </h1>
          <p style={styles.subtitle}>
            {language === 'fr' ? 'Élève :' : 'Student:'} Christelle MVE ESSONO | {t('class')}: 3ème B | {language === 'fr' ? 'Année scolaire :' : 'School year:'} 2025–2026
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={styles.viewToggle}>
            <button
              style={{
                ...styles.viewButton,
                ...(currentView === 'overview' ? styles.viewButtonActive : {})
              }}
              onClick={() => setCurrentView('overview')}
            >
              {language === 'fr' ? 'Vue d\'ensemble' : 'Overview'}
            </button>
            <button
              style={{
                ...styles.viewButton,
                ...(currentView === 'calendar' ? styles.viewButtonActive : {})
              }}
              onClick={() => setCurrentView('calendar')}
            >
              {language === 'fr' ? 'Calendrier' : 'Calendar'}
            </button>
          </div>
          <Link to="/" style={styles.backButton}>
            <ArrowLeft style={{ height: '1rem', width: '1rem' }} />
            {language === 'fr' ? 'Retour tableau de bord' : 'Back to dashboard'}
          </Link>
        </div>
      </div>

      {/* Content based on current view */}
      {currentView === 'overview' && renderOverview()}
      {currentView === 'calendar' && renderCalendar()}
    </div>
  )
}