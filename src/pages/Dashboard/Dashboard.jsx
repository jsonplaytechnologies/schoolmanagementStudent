import { Calendar, BookOpen, FileText, Clock, Bell, CreditCard, TrendingUp, Users, AlertTriangle, CheckCircle, Download } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { Link } from 'react-router-dom'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  welcomeHeader: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    padding: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  welcomeContent: {
    flex: 1
  },
  welcomeTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '0.5rem'
  },
  welcomeSubtitle: {
    color: '#4b5563'
  },
  dateInfo: {
    textAlign: 'right',
    color: '#6b7280',
    fontSize: '0.875rem'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem'
  },
  statsCard: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    padding: '1.5rem'
  },
  statsCardContent: {
    display: 'flex',
    alignItems: 'center'
  },
  statsIcon: {
    padding: '0.75rem',
    borderRadius: '0.5rem',
    marginRight: '1rem'
  },
  statsText: {
    flex: 1
  },
  statsTitle: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#4b5563'
  },
  statsValue: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#111827'
  },
  statsSubtitle: {
    fontSize: '0.875rem',
    color: '#6b7280'
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
    marginBottom: '1rem',
    justifyContent: 'space-between'
  },
  cardTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#111827',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  classItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.75rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem'
  },
  classTime: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#2563eb',
    marginRight: '0.75rem',
    minWidth: '60px'
  },
  classDetails: {
    flex: 1
  },
  classSubject: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#111827'
  },
  classInfo: {
    fontSize: '0.75rem',
    color: '#6b7280'
  },
  examItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.75rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem'
  },
  examDetails: {
    flex: 1
  },
  examSubject: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#111827'
  },
  examType: {
    fontSize: '0.75rem',
    color: '#6b7280'
  },
  examDate: {
    fontSize: '0.875rem',
    color: '#4b5563'
  },
  examActions: {
    display: 'flex',
    gap: '0.5rem'
  },
  actionButton: {
    padding: '0.25rem 0.5rem',
    fontSize: '0.75rem',
    borderRadius: '0.25rem',
    border: '1px solid #d1d5db',
    backgroundColor: 'white',
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#374151'
  },
  submitButton: {
    backgroundColor: '#3b82f6',
    color: 'white',
    border: '1px solid #3b82f6'
  },
  messageItem: {
    padding: '0.75rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem'
  },
  messageSubject: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#111827'
  },
  messageInfo: {
    fontSize: '0.75rem',
    color: '#6b7280',
    marginTop: '0.25rem'
  },
  viewAllButton: {
    marginTop: '1rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#2563eb'
  },
  paymentAlert: {
    padding: '1rem',
    backgroundColor: '#fef3c7',
    border: '1px solid #fbbf24',
    borderRadius: '0.5rem'
  },
  paymentTitle: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#92400e',
    marginBottom: '0.25rem'
  },
  paymentAmount: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#d97706',
    marginBottom: '0.5rem'
  },
  paymentDue: {
    fontSize: '0.75rem',
    color: '#d97706'
  },
  paymentButton: {
    marginTop: '1rem',
    width: '100%',
    backgroundColor: '#dc2626',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  tutoringAlert: {
    padding: '1rem',
    backgroundColor: '#eef2ff',
    border: '1px solid #818cf8',
    borderRadius: '0.5rem'
  },
  tutoringSubject: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#3730a3',
    marginBottom: '0.25rem'
  },
  tutoringTime: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#4f46e5',
    marginBottom: '0.25rem'
  },
  tutoringDetails: {
    fontSize: '0.75rem',
    color: '#4f46e5'
  },
  attentionItem: {
    padding: '0.75rem',
    backgroundColor: '#fefce8',
    border: '1px solid #facc15',
    borderRadius: '0.5rem'
  },
  attentionSubject: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#a16207'
  },
  attentionDetails: {
    fontSize: '0.75rem',
    color: '#ca8a04',
    marginTop: '0.25rem'
  },
  announcementItem: {
    padding: '0.75rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem'
  },
  announcementTitle: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#111827'
  },
  announcementDate: {
    fontSize: '0.75rem',
    color: '#6b7280',
    marginTop: '0.25rem'
  }
}

export default function Dashboard() {
  const { t, language } = useLanguage()

  const currentDate = new Date().toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const todayClasses = [
    { time: '08:00', subject: language === 'fr' ? 'Mathématiques' : 'Mathematics', teacher: language === 'fr' ? 'M. OBIANG' : 'Mr. OBIANG', classroom: 'S205' },
    { time: '10:00', subject: language === 'fr' ? 'Français' : 'French', teacher: language === 'fr' ? 'Mme MOUKETOU' : 'Mrs. MOUKETOU', classroom: 'S103' },
    { time: '12:00', subject: language === 'fr' ? 'Physique' : 'Physics', teacher: language === 'fr' ? 'M. NGUEMA' : 'Mr. NGUEMA', classroom: 'S201' },
  ]

  const upcomingExams = [
    {
      subject: language === 'fr' ? 'Anglais' : 'English',
      date: '2025-09-10',
      type: language === 'fr' ? 'Devoir' : 'Assignment',
      status: 'pending'
    },
    {
      subject: language === 'fr' ? 'Chimie' : 'Chemistry',
      date: '2025-09-15',
      type: language === 'fr' ? 'TP' : 'Practical Work',
      status: 'pending'
    },
    {
      subject: language === 'fr' ? 'Mathématiques' : 'Mathematics',
      date: '2025-09-30',
      type: language === 'fr' ? 'Examen' : 'Exam',
      status: 'scheduled'
    },
  ]

  const recentMessages = [
    {
      from: language === 'fr' ? 'Administration' : 'Administration',
      subject: language === 'fr' ? 'Réunion parents-professeurs : 25/09' : 'Parent-teacher meeting: 25/09',
      date: '2025-09-21'
    },
    {
      from: language === 'fr' ? 'M. OBIANG' : 'Mr. OBIANG',
      subject: language === 'fr' ? 'Devoir de mathématiques' : 'Mathematics assignment',
      date: '2025-09-20'
    },
  ]

  const announcements = [
    {
      title: language === 'fr' ? 'Fête de la Science : 20/09' : 'Science Fair: 20/09',
      date: '2025-09-20'
    },
    {
      title: language === 'fr' ? 'Messe de l\'école : 28/09' : 'School Mass: 28/09',
      date: '2025-09-28'
    },
    {
      title: language === 'fr' ? 'Journée sportive : 30/09' : 'Sports Day: 30/09',
      date: '2025-09-30'
    }
  ]

  const statsData = [
    {
      title: t('trimesterAverage'),
      value: '13.8/20',
      subtitle: language === 'fr' ? 'Trimestre 1' : 'Term 1',
      icon: TrendingUp,
      color: '#10b981'
    },
    {
      title: t('classRank'),
      value: '7/35',
      subtitle: language === 'fr' ? 'Sur 35 élèves' : 'Out of 35 students',
      icon: Users,
      color: '#3b82f6'
    },
    {
      title: t('attendanceRate'),
      value: '90%',
      subtitle: language === 'fr' ? 'Ce trimestre' : 'This term',
      icon: Clock,
      color: '#059669'
    },
    {
      title: language === 'fr' ? 'Devoirs en cours' : 'Pending homework',
      value: '3',
      subtitle: language === 'fr' ? 'À rendre' : 'To submit',
      icon: FileText,
      color: '#f59e0b'
    },
  ]

  return (
    <div style={styles.container}>
      {/* Welcome Header */}
      <div style={styles.welcomeHeader}>
        <div style={styles.welcomeContent}>
          <h1 style={styles.welcomeTitle}>
            {t('welcomeMessage')}
          </h1>
          <p style={styles.welcomeSubtitle}>
            {t('class')}: 3ème B • {currentDate}
          </p>
        </div>
        <div style={styles.dateInfo}>
          📅 6 {language === 'fr' ? 'septembre' : 'September'} 2025
        </div>
      </div>

      {/* Academic Summary Stats */}
      <div style={styles.statsGrid}>
        {statsData.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} style={styles.statsCard}>
              <div style={styles.statsCardContent}>
                <div style={{
                  ...styles.statsIcon,
                  backgroundColor: `${stat.color}20`
                }}>
                  <Icon style={{ height: '1.5rem', width: '1.5rem', color: stat.color }} />
                </div>
                <div style={styles.statsText}>
                  <p style={styles.statsTitle}>{stat.title}</p>
                  <p style={styles.statsValue}>{stat.value}</p>
                  {stat.subtitle && (
                    <p style={styles.statsSubtitle}>{stat.subtitle}</p>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Main Content Grid */}
      <div style={styles.mainGrid}>
        {/* Today's Classes */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <Calendar style={{ height: '1.25rem', width: '1.25rem', color: '#3b82f6' }} />
              {t('todayClasses')}
            </h3>
          </div>
          <div style={styles.cardContent}>
            {todayClasses.map((class_, index) => (
              <div key={index} style={styles.classItem}>
                <div style={styles.classTime}>
                  {class_.time}
                </div>
                <div style={styles.classDetails}>
                  <div style={styles.classSubject}>{class_.subject}</div>
                  <div style={styles.classInfo}>
                    {class_.teacher} • {class_.classroom}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to="/timetable" style={styles.viewAllButton}>
            {language === 'fr' ? 'Voir la semaine complète →' : 'View full week →'}
          </Link>
        </div>

        {/* Upcoming Exams & Homework */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <BookOpen style={{ height: '1.25rem', width: '1.25rem', color: '#10b981' }} />
              {t('upcomingExams')}
            </h3>
          </div>
          <div style={styles.cardContent}>
            {upcomingExams.map((exam, index) => (
              <div key={index} style={styles.examItem}>
                <div style={styles.examDetails}>
                  <div style={styles.examSubject}>{exam.subject}</div>
                  <div style={styles.examType}>{exam.type}</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem' }}>
                  <div style={styles.examDate}>
                    {new Date(exam.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')}
                  </div>
                  <div style={styles.examActions}>
                    <button style={styles.actionButton}>
                      {language === 'fr' ? 'Télécharger' : 'Download'}
                    </button>
                    {exam.status === 'pending' && (
                      <button style={{...styles.actionButton, ...styles.submitButton}}>
                        {language === 'fr' ? 'Soumettre' : 'Submit'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to="/exams" style={styles.viewAllButton}>
            {language === 'fr' ? 'Voir tous les examens →' : 'View all exams →'}
          </Link>
        </div>

        {/* Attendance & Absences */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <Clock style={{ height: '1.25rem', width: '1.25rem', color: '#059669' }} />
              {language === 'fr' ? 'Présence & Absences' : 'Attendance & Absences'}
            </h3>
          </div>
          <div style={styles.cardContent}>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
              <span style={{fontSize: '0.875rem', color: '#374151'}}>
                {language === 'fr' ? 'Taux présence :' : 'Attendance rate:'}
              </span>
              <span style={{fontSize: '0.875rem', fontWeight: '600', color: '#059669'}}>90%</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
              <span style={{fontSize: '0.875rem', color: '#374151'}}>
                {language === 'fr' ? 'Absences :' : 'Absences:'}
              </span>
              <span style={{fontSize: '0.875rem', color: '#dc2626'}}>
                4 (2 {language === 'fr' ? 'justifiées, 2 non' : 'justified, 2 not'})
              </span>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <span style={{fontSize: '0.875rem', color: '#374151'}}>
                {language === 'fr' ? 'Retards :' : 'Delays:'}
              </span>
              <span style={{fontSize: '0.875rem', color: '#f59e0b'}}>2</span>
            </div>
          </div>
          <Link to="/attendance" style={styles.viewAllButton}>
            {language === 'fr' ? 'Voir les détails →' : 'View details →'}
          </Link>
        </div>

        {/* Messages & Announcements */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <Bell style={{ height: '1.25rem', width: '1.25rem', color: '#8b5cf6' }} />
              {t('recentMessages')}
            </h3>
          </div>
          <div style={styles.cardContent}>
            {recentMessages.map((message, index) => (
              <div key={index} style={styles.messageItem}>
                <div style={styles.messageSubject}>{message.subject}</div>
                <div style={styles.messageInfo}>
                  {language === 'fr' ? 'De:' : 'From:'} {message.from} • {new Date(message.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')}
                </div>
              </div>
            ))}
          </div>
          <Link to="/messaging" style={styles.viewAllButton}>
            {language === 'fr' ? 'Voir tous les messages →' : 'View all messages →'}
          </Link>
        </div>

        {/* Payments Status */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <CreditCard style={{ height: '1.25rem', width: '1.25rem', color: '#ef4444' }} />
              {t('payments')}
            </h3>
          </div>
          <div style={styles.paymentAlert}>
            <div style={styles.paymentTitle}>
              {t('pendingPayments')}
            </div>
            <div style={styles.paymentAmount}>20 000 FCFA</div>
            <div style={styles.paymentDue}>
              {language === 'fr' ? 'Échéance: 15 septembre 2025' : 'Due: September 15, 2025'}
            </div>
          </div>
          <Link to="/payments">
            <button style={styles.paymentButton}>
              {language === 'fr' ? 'Effectuer un paiement' : 'Make a payment'}
            </button>
          </Link>
        </div>

        {/* Next Tutoring Session */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <Users style={{ height: '1.25rem', width: '1.25rem', color: '#6366f1' }} />
              {t('nextTutoring')}
            </h3>
          </div>
          <div style={styles.tutoringAlert}>
            <div style={styles.tutoringSubject}>
              {language === 'fr' ? 'Anglais' : 'English'}
            </div>
            <div style={styles.tutoringTime}>
              14 {language === 'fr' ? 'sept' : 'Sept'}, 16h00-18h00
            </div>
            <div style={styles.tutoringDetails}>
              {language === 'fr' ? 'En attente confirmation' : 'Awaiting confirmation'}
            </div>
          </div>
          <Link to="/tutoring" style={styles.viewAllButton}>
            {language === 'fr' ? 'Gérer les séances →' : 'Manage sessions →'}
          </Link>
        </div>

        {/* Announcements */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <Bell style={{ height: '1.25rem', width: '1.25rem', color: '#f59e0b' }} />
              {t('announcements')}
            </h3>
          </div>
          <div style={styles.cardContent}>
            {announcements.map((announcement, index) => (
              <div key={index} style={styles.announcementItem}>
                <div style={styles.announcementTitle}>{announcement.title}</div>
                <div style={styles.announcementDate}>
                  {new Date(announcement.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')}
                </div>
              </div>
            ))}
          </div>
          <Link to="/announcements" style={styles.viewAllButton}>
            {language === 'fr' ? 'Voir toutes les annonces →' : 'View all announcements →'}
          </Link>
        </div>

        {/* Attention Points */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <AlertTriangle style={{ height: '1.25rem', width: '1.25rem', color: '#eab308' }} />
              {t('attentionPoints')}
            </h3>
          </div>
          <div style={styles.cardContent}>
            <div style={styles.attentionItem}>
              <div style={styles.attentionSubject}>
                {language === 'fr' ? 'Anglais' : 'English'}
              </div>
              <div style={styles.attentionDetails}>
                {language === 'fr' ? '10/20 (coeff.3)' : '10/20 (coeff.3)'}
              </div>
            </div>
            <div style={styles.attentionItem}>
              <div style={styles.attentionSubject}>
                {language === 'fr' ? 'Physique' : 'Physics'}
              </div>
              <div style={styles.attentionDetails}>
                {language === 'fr' ? '12/20 (coeff.5) - Revoir exercices Chap. 4' : '12/20 (coeff.5) - Review Chapter 4 exercises'}
              </div>
            </div>
          </div>
          <Link to="/courses" style={styles.viewAllButton}>
            {language === 'fr' ? 'Voir les recommandations →' : 'View recommendations →'}
          </Link>
        </div>
      </div>
    </div>
  )
}