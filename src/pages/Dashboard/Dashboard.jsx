import { Calendar, BookOpen, FileText, Clock, Bell, CreditCard, TrendingUp, Users } from 'lucide-react'

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
    padding: '1.5rem'
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
    marginBottom: '1rem'
  },
  cardTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#111827'
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
    minWidth: '50px'
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
  button: {
    marginTop: '1rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    textDecoration: 'none'
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
  }
}

export default function Dashboard() {
  const currentDate = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const todayClasses = [
    { time: '08:00', subject: 'Mathématiques', teacher: 'M. Dupont', classroom: 'Salle 101' },
    { time: '10:00', subject: 'Français', teacher: 'Mme Martin', classroom: 'Salle 205' },
    { time: '14:00', subject: 'Sciences Physiques', teacher: 'M. Bernard', classroom: 'Labo 1' },
    { time: '15:30', subject: 'Histoire-Géographie', teacher: 'Mme Dubois', classroom: 'Salle 302' },
  ]

  const upcomingExams = [
    { subject: 'Mathématiques', date: '2025-09-25', type: 'Contrôle' },
    { subject: 'Français', date: '2025-09-28', type: 'Dissertation' },
    { subject: 'Anglais', date: '2025-10-02', type: 'Oral' },
  ]

  const recentMessages = [
    { from: 'Administration', subject: 'Réunion parents-professeurs', date: '2025-09-21' },
    { from: 'M. Dupont', subject: 'Devoir de mathématiques', date: '2025-09-20' },
  ]

  const statsData = [
    { title: 'Moyenne générale', value: '14.2/20', subtitle: 'Trimestre 1', icon: TrendingUp, color: '#10b981' },
    { title: 'Rang de classe', value: '8/32', subtitle: 'Sur 32 élèves', icon: Users, color: '#3b82f6' },
    { title: 'Présences', value: '95%', subtitle: 'Ce trimestre', icon: Clock, color: '#059669' },
    { title: 'Devoirs en cours', value: '3', subtitle: 'À rendre', icon: FileText, color: '#f59e0b' },
  ]

  return (
    <div style={styles.container}>
      {/* Welcome Header */}
      <div style={styles.welcomeHeader}>
        <h1 style={styles.welcomeTitle}>
          Bienvenue, Christelle MVE ESSONO
        </h1>
        <p style={styles.welcomeSubtitle}>Classe: 3ème B • {currentDate}</p>
      </div>

      {/* Stats Grid */}
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
            <Calendar style={{ height: '1.25rem', width: '1.25rem', color: '#3b82f6', marginRight: '0.5rem' }} />
            <h3 style={styles.cardTitle}>Cours d'aujourd'hui</h3>
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
          <button style={{...styles.button, color: '#2563eb'}}>
            Voir l'emploi du temps complet →
          </button>
        </div>

        {/* Upcoming Exams */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <BookOpen style={{ height: '1.25rem', width: '1.25rem', color: '#10b981', marginRight: '0.5rem' }} />
            <h3 style={styles.cardTitle}>Examens à venir</h3>
          </div>
          <div style={styles.cardContent}>
            {upcomingExams.map((exam, index) => (
              <div key={index} style={styles.examItem}>
                <div style={styles.examDetails}>
                  <div style={styles.examSubject}>{exam.subject}</div>
                  <div style={styles.examType}>{exam.type}</div>
                </div>
                <div style={styles.examDate}>
                  {new Date(exam.date).toLocaleDateString('fr-FR')}
                </div>
              </div>
            ))}
          </div>
          <button style={{...styles.button, color: '#059669'}}>
            Voir tous les examens →
          </button>
        </div>

        {/* Messages & Announcements */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <Bell style={{ height: '1.25rem', width: '1.25rem', color: '#8b5cf6', marginRight: '0.5rem' }} />
            <h3 style={styles.cardTitle}>Messages récents</h3>
          </div>
          <div style={styles.cardContent}>
            {recentMessages.map((message, index) => (
              <div key={index} style={styles.messageItem}>
                <div style={styles.messageSubject}>{message.subject}</div>
                <div style={styles.messageInfo}>
                  De: {message.from} • {new Date(message.date).toLocaleDateString('fr-FR')}
                </div>
              </div>
            ))}
          </div>
          <button style={{...styles.button, color: '#7c3aed'}}>
            Voir tous les messages →
          </button>
        </div>

        {/* Payments Status */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <CreditCard style={{ height: '1.25rem', width: '1.25rem', color: '#ef4444', marginRight: '0.5rem' }} />
            <h3 style={styles.cardTitle}>Paiements</h3>
          </div>
          <div style={styles.paymentAlert}>
            <div style={styles.paymentTitle}>
              Frais en attente
            </div>
            <div style={styles.paymentAmount}>125 000 FCFA</div>
            <div style={styles.paymentDue}>
              Échéance: 30 septembre 2025
            </div>
          </div>
          <button style={styles.paymentButton}>
            Effectuer un paiement
          </button>
        </div>

        {/* Next Tutoring Session */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <Users style={{ height: '1.25rem', width: '1.25rem', color: '#6366f1', marginRight: '0.5rem' }} />
            <h3 style={styles.cardTitle}>Prochain soutien</h3>
          </div>
          <div style={styles.tutoringAlert}>
            <div style={styles.tutoringSubject}>
              Mathématiques
            </div>
            <div style={styles.tutoringTime}>
              Vendredi 25 sept, 16h00
            </div>
            <div style={styles.tutoringDetails}>
              Avec M. Dupont • Salle 101
            </div>
          </div>
          <button style={{...styles.button, color: '#4f46e5'}}>
            Gérer les séances →
          </button>
        </div>

        {/* Attention Points */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <TrendingUp style={{ height: '1.25rem', width: '1.25rem', color: '#eab308', marginRight: '0.5rem' }} />
            <h3 style={styles.cardTitle}>Points d'attention</h3>
          </div>
          <div style={styles.cardContent}>
            <div style={styles.attentionItem}>
              <div style={styles.attentionSubject}>Sciences Physiques</div>
              <div style={styles.attentionDetails}>
                Moyenne: 11.5/20 • Amélioration suggérée
              </div>
            </div>
            <div style={styles.attentionItem}>
              <div style={styles.attentionSubject}>Anglais</div>
              <div style={styles.attentionDetails}>
                Moyenne: 12.2/20 • Travail oral à renforcer
              </div>
            </div>
          </div>
          <button style={{...styles.button, color: '#ca8a04'}}>
            Voir les recommandations →
          </button>
        </div>
      </div>
    </div>
  )
}