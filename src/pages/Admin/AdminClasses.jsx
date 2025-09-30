import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { Building, Plus, Edit, Users, GraduationCap, ChevronRight } from 'lucide-react'

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
  classCard: {
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    marginBottom: '1rem',
    cursor: 'pointer',
    transition: 'all 0.2s'
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
    color: '#111827',
    marginBottom: '0.25rem'
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
  },
  badgeDanger: {
    backgroundColor: '#fee2e2',
    color: '#991b1b'
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
  }
}

export default function AdminClasses() {
  const { t, language } = useLanguage()
  const [selectedClass, setSelectedClass] = useState(null)

  const classes = [
    {
      id: 1,
      name: '6ème A',
      level: '6ème',
      mainTeacher: 'Mme ESSONO',
      students: 32,
      capacity: 35,
      room: 'S101',
      subjects: 12,
      avgGrade: '13,5 / 20'
    },
    {
      id: 2,
      name: '5ème B',
      level: '5ème',
      mainTeacher: 'M. NGUEMA',
      students: 30,
      capacity: 35,
      room: 'S205',
      subjects: 12,
      avgGrade: '12,8 / 20'
    },
    {
      id: 3,
      name: '4ème A',
      level: '4ème',
      mainTeacher: 'Mme OKOME',
      students: 35,
      capacity: 35,
      room: 'S301',
      subjects: 13,
      avgGrade: '13,2 / 20'
    },
    {
      id: 4,
      name: '3ème A',
      level: '3ème',
      mainTeacher: 'M. OBIANG',
      students: 36,
      capacity: 35,
      room: 'S401',
      subjects: 14,
      avgGrade: '13,0 / 20'
    }
  ]

  const subjects = [
    { subject: language === 'fr' ? 'Mathématiques' : 'Mathematics', professor: 'M. OBIANG', hours: 5 },
    { subject: language === 'fr' ? 'Français' : 'French', professor: 'Mme ESSONO', hours: 4 },
    { subject: language === 'fr' ? 'Anglais' : 'English', professor: 'M. SMITH', hours: 3 },
    { subject: language === 'fr' ? 'Physique' : 'Physics', professor: 'Mme NGUEMA', hours: 3 },
    { subject: language === 'fr' ? 'Histoire-Géo' : 'History-Geography', professor: 'M. OKOME', hours: 3 }
  ]

  const students = [
    { name: 'Christelle ESSONO', studentId: '2025-327', average: '14,2 / 20', attendance: '95%' },
    { name: 'Paul MOUKETOU', studentId: '2025-328', average: '12,5 / 20', attendance: '92%' },
    { name: 'Marie NGUEMA', studentId: '2025-329', average: '15,0 / 20', attendance: '98%' },
    { name: 'Jean OBIANG', studentId: '2025-330', average: '11,0 / 20', attendance: '88%' }
  ]

  if (selectedClass) {
    return (
      <div style={styles.container}>
        <button style={styles.backButton} onClick={() => setSelectedClass(null)}>
          ← {language === 'fr' ? 'Retour aux classes' : 'Back to classes'}
        </button>

        <div style={styles.header}>
          <div>
            <h1 style={styles.title}>
              {language === 'fr' ? 'Classe' : 'Class'} — {selectedClass.name}
            </h1>
            <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
              {language === 'fr' ? 'Professeur principal' : 'Main Teacher'}: {selectedClass.mainTeacher} • {language === 'fr' ? 'Salle' : 'Room'}: {selectedClass.room}
            </p>
          </div>
          <button style={{ ...styles.button, ...styles.primaryButton }}>
            <Edit style={{ width: '1rem', height: '1rem' }} />
            {language === 'fr' ? 'Modifier' : 'Edit'}
          </button>
        </div>

        {/* Class Stats */}
        <div style={styles.section}>
          <div style={styles.statsGrid}>
            <div style={styles.statItem}>
              <span style={styles.statLabel}>{language === 'fr' ? 'Effectif' : 'Students'}</span>
              <span style={styles.statValue}>{selectedClass.students} / {selectedClass.capacity}</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statLabel}>{language === 'fr' ? 'Matières' : 'Subjects'}</span>
              <span style={styles.statValue}>{selectedClass.subjects}</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statLabel}>{language === 'fr' ? 'Moyenne' : 'Average'}</span>
              <span style={styles.statValue}>{selectedClass.avgGrade}</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statLabel}>{language === 'fr' ? 'Capacité' : 'Capacity'}</span>
              <span style={styles.statValue}>
                {Math.round((selectedClass.students / selectedClass.capacity) * 100)}%
              </span>
            </div>
          </div>
        </div>

        {/* Subjects */}
        <div style={styles.section}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
            {language === 'fr' ? 'Matières enseignées' : 'Subjects Taught'}
          </h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>{language === 'fr' ? 'Matière' : 'Subject'}</th>
                <th style={styles.th}>{language === 'fr' ? 'Professeur' : 'Professor'}</th>
                <th style={styles.th}>{language === 'fr' ? 'Heures/sem' : 'Hours/week'}</th>
                <th style={styles.th}>{language === 'fr' ? 'Actions' : 'Actions'}</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject, index) => (
                <tr key={index}>
                  <td style={styles.td}><strong>{subject.subject}</strong></td>
                  <td style={styles.td}>{subject.professor}</td>
                  <td style={styles.td}>{subject.hours}h</td>
                  <td style={styles.td}>
                    <button style={{ ...styles.button, ...styles.secondaryButton }}>
                      <Edit style={{ width: '0.875rem', height: '0.875rem' }} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Students */}
        <div style={styles.section}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
            {language === 'fr' ? 'Liste des élèves' : 'Students List'}
          </h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>{language === 'fr' ? 'Nom' : 'Name'}</th>
                <th style={styles.th}>{language === 'fr' ? 'N° Étudiant' : 'Student ID'}</th>
                <th style={styles.th}>{language === 'fr' ? 'Moyenne' : 'Average'}</th>
                <th style={styles.th}>{language === 'fr' ? 'Présence' : 'Attendance'}</th>
                <th style={styles.th}>{language === 'fr' ? 'Actions' : 'Actions'}</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td style={styles.td}>{student.name}</td>
                  <td style={styles.td}>{student.studentId}</td>
                  <td style={styles.td}>{student.average}</td>
                  <td style={styles.td}>{student.attendance}</td>
                  <td style={styles.td}>
                    <button style={{ ...styles.button, ...styles.secondaryButton }}>
                      {language === 'fr' ? 'Voir profil' : 'View Profile'}
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
          {language === 'fr' ? 'Gestion des Classes' : 'Classes Management'}
        </h1>
        <button style={{ ...styles.button, ...styles.primaryButton }}>
          <Plus style={{ width: '1rem', height: '1rem' }} />
          {language === 'fr' ? 'Nouvelle classe' : 'New Class'}
        </button>
      </div>

      <div style={styles.section}>
        {classes.map((classItem) => {
          const capacityPercentage = (classItem.students / classItem.capacity) * 100
          return (
            <div
              key={classItem.id}
              style={styles.classCard}
              onClick={() => setSelectedClass(classItem)}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, { boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', borderColor: '#3b82f6' })}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, { boxShadow: 'none', borderColor: '#e5e7eb' })}
            >
              <div style={styles.classHeader}>
                <div>
                  <h3 style={styles.className}>{classItem.name}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    <GraduationCap style={{ width: '0.875rem', height: '0.875rem', display: 'inline', marginRight: '0.25rem' }} />
                    {classItem.mainTeacher} • {language === 'fr' ? 'Salle' : 'Room'} {classItem.room}
                  </p>
                </div>
                <ChevronRight style={{ width: '1.5rem', height: '1.5rem', color: '#9ca3af' }} />
              </div>

              <div style={styles.statsGrid}>
                <div style={styles.statItem}>
                  <span style={styles.statLabel}>{language === 'fr' ? 'Élèves' : 'Students'}</span>
                  <span style={styles.statValue}>{classItem.students} / {classItem.capacity}</span>
                </div>
                <div style={styles.statItem}>
                  <span style={styles.statLabel}>{language === 'fr' ? 'Capacité' : 'Capacity'}</span>
                  <span style={{
                    ...styles.badge,
                    ...(capacityPercentage > 100 ? styles.badgeDanger :
                        capacityPercentage > 95 ? styles.badgeWarning :
                        styles.badgeSuccess)
                  }}>
                    {Math.round(capacityPercentage)}%
                  </span>
                </div>
                <div style={styles.statItem}>
                  <span style={styles.statLabel}>{language === 'fr' ? 'Matières' : 'Subjects'}</span>
                  <span style={styles.statValue}>{classItem.subjects}</span>
                </div>
                <div style={styles.statItem}>
                  <span style={styles.statLabel}>{language === 'fr' ? 'Moyenne' : 'Average'}</span>
                  <span style={styles.statValue}>{classItem.avgGrade}</span>
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
                  <Edit style={{ width: '1rem', height: '1rem' }} />
                  {language === 'fr' ? 'Modifier' : 'Edit'}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
