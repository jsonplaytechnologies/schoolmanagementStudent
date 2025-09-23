import { Calendar, Clock, MapPin, User, Download, ArrowLeft, ArrowRight, Filter, FileText } from 'lucide-react'
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
  viewTabs: {
    display: 'flex',
    gap: '0.5rem'
  },
  tab: {
    padding: '0.5rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151'
  },
  activeTab: {
    backgroundColor: '#3b82f6',
    color: 'white',
    border: '1px solid #3b82f6'
  },
  weekNavigation: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  navButton: {
    padding: '0.5rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    backgroundColor: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center'
  },
  weekText: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#111827'
  },
  actions: {
    display: 'flex',
    gap: '0.5rem'
  },
  actionButton: {
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
  timetableCard: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    padding: '1.5rem'
  },
  weeklyGrid: {
    display: 'grid',
    gridTemplateColumns: '80px repeat(5, 1fr)',
    gap: '1px',
    backgroundColor: '#e5e7eb',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    overflow: 'hidden'
  },
  timeSlot: {
    padding: '1rem',
    backgroundColor: '#f9fafb',
    fontSize: '0.75rem',
    fontWeight: '500',
    color: '#6b7280',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dayHeader: {
    padding: '1rem',
    backgroundColor: '#f3f4f6',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center'
  },
  classCell: {
    padding: '0.75rem',
    backgroundColor: 'white',
    minHeight: '80px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  classInfo: {
    fontSize: '0.75rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '0.25rem'
  },
  classDetails: {
    fontSize: '0.625rem',
    color: '#6b7280'
  },
  emptyCell: {
    backgroundColor: '#f9fafb'
  },
  mathClass: {
    backgroundColor: '#dbeafe',
    borderLeft: '4px solid #3b82f6'
  },
  frenchClass: {
    backgroundColor: '#dcfce7',
    borderLeft: '4px solid #10b981'
  },
  physicsClass: {
    backgroundColor: '#fef3c7',
    borderLeft: '4px solid #f59e0b'
  },
  historyClass: {
    backgroundColor: '#fce7f3',
    borderLeft: '4px solid #ec4899'
  },
  biologyClass: {
    backgroundColor: '#f0fdf4',
    borderLeft: '4px solid #22c55e'
  },
  englishClass: {
    backgroundColor: '#fdf2f8',
    borderLeft: '4px solid #a855f7'
  },
  civicsClass: {
    backgroundColor: '#fff7ed',
    borderLeft: '4px solid #ea580c'
  },
  itClass: {
    backgroundColor: '#f0f9ff',
    borderLeft: '4px solid #0ea5e9'
  },
  dailyView: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  dayTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '1rem'
  },
  classItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    backgroundColor: '#f9fafb'
  },
  timeColumn: {
    minWidth: '100px',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#3b82f6'
  },
  subjectColumn: {
    flex: 1,
    marginLeft: '1rem'
  },
  subjectName: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '0.25rem'
  },
  teacherRoom: {
    fontSize: '0.75rem',
    color: '#6b7280'
  },
  remarksColumn: {
    minWidth: '200px',
    fontSize: '0.75rem',
    color: '#6b7280',
    marginLeft: '1rem'
  },
  monthlyCalendar: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '1px',
    backgroundColor: '#e5e7eb',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    overflow: 'hidden'
  },
  monthHeader: {
    padding: '1rem',
    backgroundColor: '#f3f4f6',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center'
  },
  dayCell: {
    minHeight: '100px',
    padding: '0.5rem',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column'
  },
  dayNumber: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#111827',
    marginBottom: '0.25rem'
  },
  dayEvents: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.125rem'
  },
  dayEvent: {
    fontSize: '0.625rem',
    padding: '0.125rem 0.25rem',
    borderRadius: '0.125rem',
    backgroundColor: '#dbeafe',
    color: '#1e40af'
  },
  legend: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    marginTop: '1rem',
    padding: '1rem',
    backgroundColor: '#f9fafb',
    borderRadius: '0.5rem'
  },
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  legendColor: {
    width: '1rem',
    height: '1rem',
    borderRadius: '0.25rem'
  },
  legendText: {
    fontSize: '0.75rem',
    color: '#6b7280'
  },
  backButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#6b7280',
    fontSize: '0.875rem',
    textDecoration: 'none'
  }
}

const timeSlots = ['08:00', '09:15', '10:30', '11:45', '13:00', '14:15', '15:30']

export default function Timetable() {
  const { t, language } = useLanguage()
  const [currentView, setCurrentView] = useState('weekly')
  const [currentWeek, setCurrentWeek] = useState('08 → 12 sept 2025')

  const weeklySchedule = {
    'Lundi': {
      '08:00': { subject: language === 'fr' ? 'Mathématiques' : 'Mathematics', teacher: 'M. OBIANG', room: 'S205', type: 'mathClass' },
      '09:15': { subject: language === 'fr' ? 'Français' : 'French', teacher: 'Mme MOUKETOU', room: 'S103', type: 'frenchClass' },
      '11:45': { subject: language === 'fr' ? 'Biologie' : 'Biology', teacher: 'M. ESSONO', room: 'S305', type: 'biologyClass' }
    },
    'Mardi': {
      '08:00': { subject: language === 'fr' ? 'Physique' : 'Physics', teacher: 'M. NGUEMA', room: 'S201', type: 'physicsClass' },
      '10:30': { subject: language === 'fr' ? 'Histoire' : 'History', teacher: 'Mme ELLA', room: 'S210', type: 'historyClass' },
      '11:45': { subject: language === 'fr' ? 'Anglais' : 'English', teacher: 'M. MOUNGOUNGA', room: 'S207', type: 'englishClass' }
    },
    'Mercredi': {
      '08:00': { subject: language === 'fr' ? 'Géographie' : 'Geography', teacher: 'M. MOUNGUENGUI', room: 'S105', type: 'historyClass' },
      '09:15': { subject: language === 'fr' ? 'Education Civique' : 'Civic Education', teacher: 'Mme ESSAME', room: 'S110', type: 'civicsClass' }
    },
    'Jeudi': {
      '08:00': { subject: language === 'fr' ? 'Mathématiques' : 'Mathematics', teacher: 'M. OBIANG', room: 'S205', type: 'mathClass' },
      '11:45': { subject: language === 'fr' ? 'Physique' : 'Physics', teacher: 'M. NGUEMA', room: 'S201', type: 'physicsClass' }
    },
    'Vendredi': {
      '08:00': { subject: language === 'fr' ? 'Français' : 'French', teacher: 'Mme MOUKETOU', room: 'S103', type: 'frenchClass' },
      '09:15': { subject: language === 'fr' ? 'Informatique' : 'Computer Science', teacher: 'M. BIKISA', room: 'S310', type: 'itClass' }
    }
  }

  const dailySchedule = [
    {
      time: '08:00–10:00',
      subject: language === 'fr' ? 'Physique' : 'Physics',
      teacher: 'M. NGUEMA',
      room: 'S201',
      remarks: language === 'fr' ? 'Révisions Chap. 2, apporter calculatrice' : 'Chapter 2 review, bring calculator'
    },
    {
      time: '10:15–11:15',
      subject: language === 'fr' ? 'Histoire' : 'History',
      teacher: 'Mme ELLA',
      room: 'S210',
      remarks: language === 'fr' ? 'Lire pages 45–52 du manuel' : 'Read pages 45–52 of the textbook'
    },
    {
      time: '11:30–13:30',
      subject: language === 'fr' ? 'Anglais' : 'English',
      teacher: 'M. MOUNGOUNGA',
      room: 'S207',
      remarks: language === 'fr' ? 'Devoir de vocabulaire à rendre' : 'Vocabulary assignment due'
    }
  ]

  const days = language === 'fr'
    ? ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi']
    : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

  const dayNames = language === 'fr'
    ? ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
    : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  const monthlyCalendar = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    events: i === 8 ? [language === 'fr' ? 'Cours Phys.' : 'Physics'] :
           i === 24 ? [language === 'fr' ? 'Réunion Parents' : 'Parent Meeting'] : []
  }))

  const legendItems = [
    { color: '#3b82f6', label: language === 'fr' ? 'Mathématiques' : 'Mathematics' },
    { color: '#10b981', label: language === 'fr' ? 'Français' : 'French' },
    { color: '#f59e0b', label: language === 'fr' ? 'Physique' : 'Physics' },
    { color: '#ec4899', label: language === 'fr' ? 'Histoire-Géo' : 'History-Geography' },
    { color: '#22c55e', label: language === 'fr' ? 'Biologie' : 'Biology' },
    { color: '#a855f7', label: language === 'fr' ? 'Anglais' : 'English' }
  ]

  const renderWeeklyView = () => (
    <div style={styles.weeklyGrid}>
      <div style={styles.timeSlot}></div>
      {days.map(day => (
        <div key={day} style={styles.dayHeader}>{day}</div>
      ))}

      {timeSlots.map(time => (
        <div key={time}>
          <div style={styles.timeSlot}>{time}</div>
          {days.map(day => {
            const dayKey = language === 'fr' ? day :
              day === 'Monday' ? 'Lundi' :
              day === 'Tuesday' ? 'Mardi' :
              day === 'Wednesday' ? 'Mercredi' :
              day === 'Thursday' ? 'Jeudi' : 'Vendredi'

            const classData = weeklySchedule[dayKey]?.[time]

            return (
              <div
                key={`${day}-${time}`}
                style={{
                  ...styles.classCell,
                  ...(classData ? styles[classData.type] : styles.emptyCell)
                }}
              >
                {classData && (
                  <>
                    <div style={styles.classInfo}>{classData.subject}</div>
                    <div style={styles.classDetails}>
                      {classData.teacher} • {classData.room}
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )

  const renderDailyView = () => (
    <div style={styles.dailyView}>
      <h3 style={styles.dayTitle}>
        {language === 'fr' ? 'Mardi 09/09/2025' : 'Tuesday 09/09/2025'}
      </h3>
      {dailySchedule.map((item, index) => (
        <div key={index} style={styles.classItem}>
          <div style={styles.timeColumn}>{item.time}</div>
          <div style={styles.subjectColumn}>
            <div style={styles.subjectName}>{item.subject}</div>
            <div style={styles.teacherRoom}>{item.teacher} • {item.room}</div>
          </div>
          <div style={styles.remarksColumn}>{item.remarks}</div>
        </div>
      ))}
    </div>
  )

  const renderMonthlyView = () => (
    <>
      <div style={styles.monthlyCalendar}>
        {dayNames.map(day => (
          <div key={day} style={styles.monthHeader}>{day}</div>
        ))}
        {monthlyCalendar.map((day, index) => (
          <div key={index} style={styles.dayCell}>
            <div style={styles.dayNumber}>{day.day}</div>
            <div style={styles.dayEvents}>
              {day.events.map((event, eventIndex) => (
                <div key={eventIndex} style={styles.dayEvent}>{event}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={styles.legend}>
        <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#111827', marginRight: '1rem' }}>
          {language === 'fr' ? 'Légende :' : 'Legend:'}
        </span>
        <div style={styles.legendItem}>
          <span>📌 {language === 'fr' ? 'Cours spécial' : 'Special class'}</span>
        </div>
        <div style={styles.legendItem}>
          <span>📢 {language === 'fr' ? 'Événement' : 'Event'}</span>
        </div>
      </div>
    </>
  )

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.title}>
            {t('timetable')}
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

      {/* Controls */}
      <div style={styles.controls}>
        <div style={styles.viewTabs}>
          {[
            { key: 'weekly', label: language === 'fr' ? 'Vue hebdomadaire' : 'Weekly view' },
            { key: 'daily', label: language === 'fr' ? 'Vue quotidienne' : 'Daily view' },
            { key: 'monthly', label: language === 'fr' ? 'Vue calendrier' : 'Calendar view' }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setCurrentView(tab.key)}
              style={{
                ...styles.tab,
                ...(currentView === tab.key ? styles.activeTab : {})
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {currentView === 'weekly' && (
          <div style={styles.weekNavigation}>
            <button style={styles.navButton}>
              <ArrowLeft style={{ height: '1rem', width: '1rem' }} />
            </button>
            <span style={styles.weekText}>{currentWeek}</span>
            <button style={styles.navButton}>
              <ArrowRight style={{ height: '1rem', width: '1rem' }} />
            </button>
          </div>
        )}

        <div style={styles.actions}>
          <button style={styles.actionButton}>
            <Download style={{ height: '1rem', width: '1rem' }} />
            {language === 'fr' ? 'Télécharger PDF' : 'Download PDF'}
          </button>
          <button style={styles.actionButton}>
            <FileText style={{ height: '1rem', width: '1rem' }} />
            {language === 'fr' ? 'Exporter CSV' : 'Export CSV'}
          </button>
        </div>
      </div>

      {/* Timetable Content */}
      <div style={styles.timetableCard}>
        {currentView === 'weekly' && renderWeeklyView()}
        {currentView === 'daily' && renderDailyView()}
        {currentView === 'monthly' && renderMonthlyView()}

        {currentView === 'weekly' && (
          <div style={styles.legend}>
            <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#111827', marginRight: '1rem' }}>
              {language === 'fr' ? 'Légende :' : 'Legend:'}
            </span>
            {legendItems.map((item, index) => (
              <div key={index} style={styles.legendItem}>
                <div style={{
                  ...styles.legendColor,
                  backgroundColor: item.color
                }}></div>
                <span style={styles.legendText}>{item.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}