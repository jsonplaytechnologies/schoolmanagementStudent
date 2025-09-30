import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { Users, TrendingUp, FileText, Calendar, MessageSquare, ChevronRight } from 'lucide-react'

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
  section: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    marginBottom: '1.5rem'
  },
  classCard: {
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    marginBottom: '1rem',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  classCardHover: {
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    borderColor: '#3b82f6'
  },
  classHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1rem'
  },
  className: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#111827'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1rem',
    marginBottom: '1rem'
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  },
  statLabel: {
    fontSize: '0.75rem',
    color: '#6b7280',
    textTransform: 'uppercase',
    fontWeight: '500'
  },
  statValue: {
    fontSize: '1.25rem',
    fontWeight: '600',
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
  backButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#3b82f6',
    fontSize: '0.875rem',
    fontWeight: '500',
    cursor: 'pointer',
    marginBottom: '1rem',
    border: 'none',
    backgroundColor: 'transparent',
    padding: '0.5rem'
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
  }
}

export default function ProfessorClasses() {
  const { t, language } = useLanguage()
  const [selectedClass, setSelectedClass] = useState(null)

  const classes = [
    {
      id: 1,
      name: '3ème A',
      students: 32,
      average: '13,2 / 20',
      attendance: '91 %',
      homeworkPending: 18,
      examsUpcoming: 1,
      unreadMessages: 2
    },
    {
      id: 2,
      name: '3ème B',
      students: 35,
      average: '12,5 / 20',
      attendance: '87 %',
      homeworkPending: 20,
      examsUpcoming: 2,
      unreadMessages: 1
    }
  ]

  const studentsList = [
    { name: 'Christelle ESSONO', attendance: '90 %', homeworkAvg: '14,0 / 20', examAvg: '13,5 / 20', messages: 1 },
    { name: 'Paul MOUKETOU', attendance: '88 %', homeworkAvg: '12,5 / 20', examAvg: '12,0 / 20', messages: 0 },
    { name: 'Marie NGUEMA', attendance: '95 %', homeworkAvg: '15,0 / 20', examAvg: '14,8 / 20', messages: 0 },
    { name: 'Jean OBIANG', attendance: '82 %', homeworkAvg: '11,0 / 20', examAvg: '10,5 / 20', messages: 1 }
  ]

  if (selectedClass) {
    return (
      <div style={styles.container}>
        <button style={styles.backButton} onClick={() => setSelectedClass(null)}>
          ← {language === 'fr' ? 'Retour aux classes' : 'Back to classes'}
        </button>

        <div style={styles.header}>
          <h1 style={styles.title}>
            {language === 'fr' ? 'Classe —' : 'Class —'} {selectedClass.name}
          </h1>
        </div>

        {/* Class Overview */}
        <div style={styles.section}>
          <div style={styles.statsGrid}>
            <div style={styles.statItem}>
              <span style={styles.statLabel}>{language === 'fr' ? 'Effectif' : 'Students'}</span>
              <span style={styles.statValue}>{selectedClass.students}</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statLabel}>{language === 'fr' ? 'Moyenne Classe' : 'Class Average'}</span>
              <span style={styles.statValue}>{selectedClass.average}</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statLabel}>{language === 'fr' ? 'Présence' : 'Attendance'}</span>
              <span style={styles.statValue}>{selectedClass.attendance}</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statLabel}>{language === 'fr' ? 'Devoirs à corriger' : 'Pending Homework'}</span>
              <span style={styles.statValue}>{selectedClass.homeworkPending}</span>
            </div>
          </div>
        </div>

        {/* Students List */}
        <div style={styles.section}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
            {language === 'fr' ? 'Liste des élèves' : 'Students List'}
          </h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>{language === 'fr' ? 'Élève' : 'Student'}</th>
                <th style={styles.th}>{language === 'fr' ? 'Présence' : 'Attendance'}</th>
                <th style={styles.th}>{language === 'fr' ? 'Moy. Devoirs' : 'Homework Avg'}</th>
                <th style={styles.th}>{language === 'fr' ? 'Moy. Examens' : 'Exam Avg'}</th>
                <th style={styles.th}>{language === 'fr' ? 'Messages' : 'Messages'}</th>
                <th style={styles.th}>{language === 'fr' ? 'Actions' : 'Actions'}</th>
              </tr>
            </thead>
            <tbody>
              {studentsList.map((student, index) => (
                <tr key={index}>
                  <td style={styles.td}>{student.name}</td>
                  <td style={styles.td}>{student.attendance}</td>
                  <td style={styles.td}>{student.homeworkAvg}</td>
                  <td style={styles.td}>{student.examAvg}</td>
                  <td style={styles.td}>
                    {student.messages > 0 && (
                      <span style={{ ...styles.badge, ...styles.badgeWarning }}>
                        {student.messages}
                      </span>
                    )}
                  </td>
                  <td style={styles.td}>
                    <button style={{ ...styles.button, ...styles.secondaryButton }}>
                      {language === 'fr' ? 'Profil' : 'Profile'}
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

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>
          {language === 'fr' ? 'Mes Classes' : 'My Classes'}
        </h1>
      </div>

      <div style={styles.section}>
        {classes.map((classItem) => (
          <div
            key={classItem.id}
            style={styles.classCard}
            onClick={() => setSelectedClass(classItem)}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.classCardHover)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, { boxShadow: 'none', borderColor: '#e5e7eb' })}
          >
            <div style={styles.classHeader}>
              <div>
                <h3 style={styles.className}>{classItem.name}</h3>
                <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                  {classItem.students} {language === 'fr' ? 'élèves' : 'students'}
                </p>
              </div>
              <ChevronRight style={{ width: '1.5rem', height: '1.5rem', color: '#9ca3af' }} />
            </div>

            <div style={styles.statsGrid}>
              <div style={styles.statItem}>
                <span style={styles.statLabel}>{language === 'fr' ? 'Moyenne' : 'Average'}</span>
                <span style={styles.statValue}>{classItem.average}</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statLabel}>{language === 'fr' ? 'Présence' : 'Attendance'}</span>
                <span style={styles.statValue}>{classItem.attendance}</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statLabel}>{language === 'fr' ? 'À corriger' : 'To Grade'}</span>
                <span style={styles.statValue}>{classItem.homeworkPending}</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statLabel}>{language === 'fr' ? 'Examens' : 'Exams'}</span>
                <span style={styles.statValue}>{classItem.examsUpcoming}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              <button
                style={{ ...styles.button, ...styles.primaryButton }}
                onClick={(e) => { e.stopPropagation(); setSelectedClass(classItem); }}
              >
                {language === 'fr' ? 'Voir détails' : 'View Details'}
              </button>
              <button
                style={{ ...styles.button, ...styles.secondaryButton }}
                onClick={(e) => { e.stopPropagation(); }}
              >
                <MessageSquare style={{ width: '1rem', height: '1rem' }} />
                {classItem.unreadMessages > 0 && (
                  <span style={{ ...styles.badge, ...styles.badgeWarning }}>{classItem.unreadMessages}</span>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
