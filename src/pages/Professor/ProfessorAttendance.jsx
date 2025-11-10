import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { Calendar, Users, CheckCircle, XCircle, Clock, AlertCircle, Download } from 'lucide-react'

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
  tabs: {
    display: 'flex',
    gap: '1rem',
    borderBottom: '1px solid #e5e7eb',
    marginBottom: '1.5rem'
  },
  tab: {
    padding: '0.75rem 1rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    borderBottom: '2px solid transparent',
    color: '#6b7280',
    transition: 'all 0.2s'
  },
  tabActive: {
    color: '#3b82f6',
    borderBottomColor: '#3b82f6'
  },
  classCard: {
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    marginBottom: '1rem',
    cursor: 'pointer',
    transition: 'all 0.2s'
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
  successButton: {
    backgroundColor: '#10b981',
    color: 'white'
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
  statusButton: {
    padding: '0.375rem 0.75rem',
    borderRadius: '0.375rem',
    fontSize: '0.75rem',
    fontWeight: '500',
    border: '1px solid',
    cursor: 'pointer',
    minWidth: '5rem',
    textAlign: 'center'
  },
  statusPresent: {
    backgroundColor: '#d1fae5',
    borderColor: '#10b981',
    color: '#065f46'
  },
  statusAbsent: {
    backgroundColor: '#fee2e2',
    borderColor: '#ef4444',
    color: '#991b1b'
  },
  statusLate: {
    backgroundColor: '#fef3c7',
    borderColor: '#f59e0b',
    color: '#92400e'
  },
  statusNeutral: {
    backgroundColor: '#f3f4f6',
    borderColor: '#d1d5db',
    color: '#6b7280'
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
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1rem',
    marginBottom: '1.5rem'
  },
  statCard: {
    backgroundColor: '#f9fafb',
    padding: '1rem',
    borderRadius: '0.375rem',
    textAlign: 'center'
  },
  statValue: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '0.25rem'
  },
  statLabel: {
    fontSize: '0.875rem',
    color: '#6b7280'
  },
  filterBar: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1.5rem',
    alignItems: 'center'
  },
  select: {
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    border: '1px solid #d1d5db',
    fontSize: '0.875rem',
    backgroundColor: 'white',
    cursor: 'pointer'
  },
  input: {
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    border: '1px solid #d1d5db',
    fontSize: '0.875rem'
  }
}

export default function ProfessorAttendance() {
  const { t, language } = useLanguage()
  const [activeTab, setActiveTab] = useState('today')
  const [selectedClass, setSelectedClass] = useState(null)
  const [attendanceData, setAttendanceData] = useState({})

  const classes = [
    {
      id: 1,
      name: '3ème A',
      subject: language === 'fr' ? 'Mathématiques' : 'Mathematics',
      time: '08:00–09:00',
      students: 32,
      present: 28,
      absent: 2,
      late: 2
    },
    {
      id: 2,
      name: '3ème B',
      subject: language === 'fr' ? 'Physique' : 'Physics',
      time: '10:00–11:15',
      students: 35,
      present: 32,
      absent: 1,
      late: 2
    }
  ]

  const students = [
    { id: 1, name: 'Christelle ESSONO', studentId: '2025-327', status: null },
    { id: 2, name: 'Paul MOUKETOU', studentId: '2025-328', status: null },
    { id: 3, name: 'Marie NGUEMA', studentId: '2025-329', status: null },
    { id: 4, name: 'Jean OBIANG', studentId: '2025-330', status: null },
    { id: 5, name: 'Sophie MBINA', studentId: '2025-331', status: null }
  ]

  const handleStatusChange = (studentId, status) => {
    setAttendanceData({
      ...attendanceData,
      [studentId]: status
    })
  }

  const getStatusStyle = (status) => {
    switch (status) {
      case 'present':
        return styles.statusPresent
      case 'absent':
        return styles.statusAbsent
      case 'late':
        return styles.statusLate
      default:
        return styles.statusNeutral
    }
  }

  const getStatusLabel = (status) => {
    if (!status) return language === 'fr' ? '—' : '—'
    switch (status) {
      case 'present':
        return language === 'fr' ? 'Présent' : 'Present'
      case 'absent':
        return language === 'fr' ? 'Absent' : 'Absent'
      case 'late':
        return language === 'fr' ? 'Retard' : 'Late'
      default:
        return '—'
    }
  }

  if (selectedClass) {
    return (
      <div style={styles.container}>
        <button style={styles.backButton} onClick={() => setSelectedClass(null)}>
          ← {language === 'fr' ? 'Retour' : 'Back'}
        </button>

        <div style={styles.header}>
          <div>
            <h1 style={styles.title}>
              {language === 'fr' ? 'Feuille de présence' : 'Attendance Sheet'}
            </h1>
            <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
              {selectedClass.name} • {selectedClass.subject} • {selectedClass.time}
            </p>
          </div>
          <button style={{ ...styles.button, ...styles.successButton }}>
            <CheckCircle style={{ width: '1rem', height: '1rem' }} />
            {language === 'fr' ? 'Valider et envoyer' : 'Submit Attendance'}
          </button>
        </div>

        <div style={styles.section}>
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <div style={styles.statValue}>{selectedClass.students}</div>
              <div style={styles.statLabel}>{language === 'fr' ? 'Effectif' : 'Total'}</div>
            </div>
            <div style={styles.statCard}>
              <div style={{ ...styles.statValue, color: '#10b981' }}>{selectedClass.present}</div>
              <div style={styles.statLabel}>{language === 'fr' ? 'Présents' : 'Present'}</div>
            </div>
            <div style={styles.statCard}>
              <div style={{ ...styles.statValue, color: '#ef4444' }}>{selectedClass.absent}</div>
              <div style={styles.statLabel}>{language === 'fr' ? 'Absents' : 'Absent'}</div>
            </div>
            <div style={styles.statCard}>
              <div style={{ ...styles.statValue, color: '#f59e0b' }}>{selectedClass.late}</div>
              <div style={styles.statLabel}>{language === 'fr' ? 'Retards' : 'Late'}</div>
            </div>
          </div>

          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>{language === 'fr' ? 'Élève' : 'Student'}</th>
                <th style={styles.th}>{language === 'fr' ? 'N° Étudiant' : 'Student ID'}</th>
                <th style={styles.th}>{language === 'fr' ? 'Statut' : 'Status'}</th>
                <th style={styles.th}>{language === 'fr' ? 'Actions rapides' : 'Quick Actions'}</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => {
                const status = attendanceData[student.id]
                return (
                  <tr key={student.id}>
                    <td style={styles.td}>{student.name}</td>
                    <td style={styles.td}>{student.studentId}</td>
                    <td style={styles.td}>
                      <span style={{ ...styles.statusButton, ...getStatusStyle(status) }}>
                        {getStatusLabel(status)}
                      </span>
                    </td>
                    <td style={styles.td}>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button
                          style={{
                            ...styles.statusButton,
                            ...styles.statusPresent,
                            opacity: status === 'present' ? 1 : 0.5
                          }}
                          onClick={() => handleStatusChange(student.id, 'present')}
                        >
                          <CheckCircle style={{ width: '0.875rem', height: '0.875rem', display: 'inline' }} />
                        </button>
                        <button
                          style={{
                            ...styles.statusButton,
                            ...styles.statusAbsent,
                            opacity: status === 'absent' ? 1 : 0.5
                          }}
                          onClick={() => handleStatusChange(student.id, 'absent')}
                        >
                          <XCircle style={{ width: '0.875rem', height: '0.875rem', display: 'inline' }} />
                        </button>
                        <button
                          style={{
                            ...styles.statusButton,
                            ...styles.statusLate,
                            opacity: status === 'late' ? 1 : 0.5
                          }}
                          onClick={() => handleStatusChange(student.id, 'late')}
                        >
                          <Clock style={{ width: '0.875rem', height: '0.875rem', display: 'inline' }} />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
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
          {language === 'fr' ? 'Présences' : 'Attendance'}
        </h1>
        <button style={{ ...styles.button, ...styles.secondaryButton }}>
          <Download style={{ width: '1rem', height: '1rem' }} />
          {language === 'fr' ? 'Exporter rapport' : 'Export Report'}
        </button>
      </div>

      <div style={styles.tabs}>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 'today' ? styles.tabActive : {})
          }}
          onClick={() => setActiveTab('today')}
        >
          {language === 'fr' ? "Aujourd'hui" : 'Today'}
        </button>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 'history' ? styles.tabActive : {})
          }}
          onClick={() => setActiveTab('history')}
        >
          {language === 'fr' ? 'Historique' : 'History'}
        </button>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 'reports' ? styles.tabActive : {})
          }}
          onClick={() => setActiveTab('reports')}
        >
          {language === 'fr' ? 'Rapports' : 'Reports'}
        </button>
      </div>

      {activeTab === 'today' && (
        <div style={styles.section}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
            {language === 'fr' ? "Cours d'aujourd'hui" : "Today's Classes"}
          </h2>
          {classes.map((classItem) => (
            <div
              key={classItem.id}
              style={styles.classCard}
              onClick={() => setSelectedClass(classItem)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                    {classItem.name} — {classItem.subject}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    <Calendar style={{ width: '0.875rem', height: '0.875rem', display: 'inline', marginRight: '0.25rem' }} />
                    {classItem.time}
                  </p>
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem', fontSize: '0.875rem' }}>
                    <span style={{ color: '#10b981' }}>
                      ✓ {classItem.present} {language === 'fr' ? 'présents' : 'present'}
                    </span>
                    <span style={{ color: '#ef4444' }}>
                      ✗ {classItem.absent} {language === 'fr' ? 'absents' : 'absent'}
                    </span>
                    <span style={{ color: '#f59e0b' }}>
                      ⏱ {classItem.late} {language === 'fr' ? 'retards' : 'late'}
                    </span>
                  </div>
                </div>
                <button
                  style={{ ...styles.button, ...styles.primaryButton }}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedClass(classItem)
                  }}
                >
                  {language === 'fr' ? 'Faire appel' : 'Take Attendance'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'history' && (
        <div style={styles.section}>
          <div style={styles.filterBar}>
            <select style={styles.select}>
              <option>{language === 'fr' ? 'Toutes les classes' : 'All classes'}</option>
              <option>3ème A</option>
              <option>3ème B</option>
            </select>
            <input
              type="date"
              style={styles.input}
              defaultValue="2025-09-10"
            />
            <button style={{ ...styles.button, ...styles.secondaryButton }}>
              {language === 'fr' ? 'Filtrer' : 'Filter'}
            </button>
          </div>
          <p style={{ textAlign: 'center', padding: '3rem', color: '#9ca3af' }}>
            {language === 'fr' ? 'Sélectionnez une date et une classe' : 'Select a date and class'}
          </p>
        </div>
      )}

      {activeTab === 'reports' && (
        <div style={styles.section}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
            {language === 'fr' ? 'Taux de présence par classe' : 'Attendance Rate by Class'}
          </h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>{language === 'fr' ? 'Classe' : 'Class'}</th>
                <th style={styles.th}>{language === 'fr' ? 'Effectif' : 'Total Students'}</th>
                <th style={styles.th}>{language === 'fr' ? 'Présences' : 'Present'}</th>
                <th style={styles.th}>{language === 'fr' ? 'Absences' : 'Absent'}</th>
                <th style={styles.th}>{language === 'fr' ? 'Retards' : 'Late'}</th>
                <th style={styles.th}>{language === 'fr' ? 'Taux' : 'Rate'}</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((classItem) => (
                <tr key={classItem.id}>
                  <td style={styles.td}>{classItem.name}</td>
                  <td style={styles.td}>{classItem.students}</td>
                  <td style={styles.td}>{classItem.present}</td>
                  <td style={styles.td}>{classItem.absent}</td>
                  <td style={styles.td}>{classItem.late}</td>
                  <td style={styles.td}>
                    <strong>{Math.round((classItem.present / classItem.students) * 100)} %</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
