import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { FileText, Calendar, Users, Download, Plus, Edit, Trash2 } from 'lucide-react'

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
  examCard: {
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    marginBottom: '1rem'
  },
  examHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1rem'
  },
  examTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '0.25rem'
  },
  examMeta: {
    display: 'flex',
    gap: '1rem',
    fontSize: '0.875rem',
    color: '#6b7280'
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
  dangerButton: {
    backgroundColor: '#fee2e2',
    color: '#991b1b'
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
  badgeInfo: {
    backgroundColor: '#dbeafe',
    color: '#1e40af'
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
  input: {
    width: '4rem',
    padding: '0.5rem',
    borderRadius: '0.375rem',
    border: '1px solid #d1d5db',
    fontSize: '0.875rem'
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
    marginBottom: '1rem'
  },
  statItem: {
    backgroundColor: '#f9fafb',
    padding: '1rem',
    borderRadius: '0.375rem'
  },
  statLabel: {
    fontSize: '0.75rem',
    color: '#6b7280',
    marginBottom: '0.25rem'
  },
  statValue: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#111827'
  }
}

export default function ProfessorExams() {
  const { t, language } = useLanguage()
  const [activeTab, setActiveTab] = useState('upcoming')
  const [selectedExam, setSelectedExam] = useState(null)

  const exams = {
    upcoming: [
      {
        id: 1,
        title: language === 'fr' ? 'Contrôle Chap. 2' : 'Test Ch. 2',
        class: '3ème A',
        subject: language === 'fr' ? 'Mathématiques' : 'Mathematics',
        date: '15/09/2025',
        duration: '2h',
        coefficient: 2,
        status: 'upcoming',
        students: 32
      },
      {
        id: 2,
        title: language === 'fr' ? 'Examen Trimestre 1' : 'Trimester 1 Exam',
        class: '3ème B',
        subject: language === 'fr' ? 'Physique' : 'Physics',
        date: '20/09/2025',
        duration: '3h',
        coefficient: 3,
        status: 'upcoming',
        students: 35
      }
    ],
    toGrade: [
      {
        id: 3,
        title: language === 'fr' ? 'Contrôle Chap. 1' : 'Test Ch. 1',
        class: '3ème A',
        subject: language === 'fr' ? 'Mathématiques' : 'Mathematics',
        date: '08/09/2025',
        duration: '2h',
        coefficient: 2,
        status: 'toGrade',
        students: 32,
        graded: 15
      }
    ],
    completed: [
      {
        id: 4,
        title: language === 'fr' ? 'QCM Introduction' : 'MCQ Introduction',
        class: '3ème A',
        subject: language === 'fr' ? 'Mathématiques' : 'Mathematics',
        date: '05/09/2025',
        duration: '1h',
        coefficient: 1,
        status: 'completed',
        students: 32,
        average: '14,2 / 20'
      }
    ]
  }

  const studentGrades = [
    { name: 'Christelle ESSONO', studentId: '2025-327', grade: '', comment: '' },
    { name: 'Paul MOUKETOU', studentId: '2025-328', grade: '', comment: '' },
    { name: 'Marie NGUEMA', studentId: '2025-329', grade: '', comment: '' },
    { name: 'Jean OBIANG', studentId: '2025-330', grade: '', comment: '' }
  ]

  if (selectedExam) {
    const isGrading = selectedExam.status === 'toGrade'
    const isCompleted = selectedExam.status === 'completed'

    return (
      <div style={styles.container}>
        <button style={styles.backButton} onClick={() => setSelectedExam(null)}>
          ← {language === 'fr' ? 'Retour aux examens' : 'Back to exams'}
        </button>

        <div style={styles.header}>
          <div>
            <h1 style={styles.title}>{selectedExam.title}</h1>
            <p style={{ color: '#6b7280' }}>
              {selectedExam.subject} • {selectedExam.class} • {selectedExam.date}
            </p>
          </div>
          {isCompleted && (
            <button style={{ ...styles.button, ...styles.secondaryButton }}>
              <Download style={{ width: '1rem', height: '1rem' }} />
              {language === 'fr' ? 'Exporter' : 'Export'}
            </button>
          )}
        </div>

        {isCompleted && (
          <div style={styles.section}>
            <div style={styles.statsGrid}>
              <div style={styles.statItem}>
                <div style={styles.statLabel}>{language === 'fr' ? 'Moyenne' : 'Average'}</div>
                <div style={styles.statValue}>{selectedExam.average}</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statLabel}>{language === 'fr' ? 'Note min' : 'Min Grade'}</div>
                <div style={styles.statValue}>8,5 / 20</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statLabel}>{language === 'fr' ? 'Note max' : 'Max Grade'}</div>
                <div style={styles.statValue}>18,0 / 20</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statLabel}>{language === 'fr' ? 'Réussite' : 'Pass Rate'}</div>
                <div style={styles.statValue}>78 %</div>
              </div>
            </div>
          </div>
        )}

        <div style={styles.section}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.125rem', fontWeight: '600' }}>
              {language === 'fr' ? 'Saisie des notes' : 'Grade Entry'}
            </h2>
            {isGrading && (
              <button style={{ ...styles.button, ...styles.primaryButton }}>
                {language === 'fr' ? 'Enregistrer tout' : 'Save All'}
              </button>
            )}
          </div>

          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>{language === 'fr' ? 'Élève' : 'Student'}</th>
                <th style={styles.th}>{language === 'fr' ? 'N° Étudiant' : 'Student ID'}</th>
                <th style={styles.th}>{language === 'fr' ? 'Note (/20)' : 'Grade (/20)'}</th>
                <th style={styles.th}>{language === 'fr' ? 'Appréciation' : 'Comment'}</th>
                {isGrading && <th style={styles.th}>{language === 'fr' ? 'Actions' : 'Actions'}</th>}
              </tr>
            </thead>
            <tbody>
              {studentGrades.map((student, index) => (
                <tr key={index}>
                  <td style={styles.td}>{student.name}</td>
                  <td style={styles.td}>{student.studentId}</td>
                  <td style={styles.td}>
                    {isGrading ? (
                      <input
                        type="number"
                        style={styles.input}
                        placeholder="0-20"
                        min="0"
                        max="20"
                        step="0.5"
                      />
                    ) : (
                      <span style={{ fontWeight: '600' }}>
                        {(Math.random() * 10 + 8).toFixed(1)} / 20
                      </span>
                    )}
                  </td>
                  <td style={styles.td}>
                    {isGrading ? (
                      <input
                        type="text"
                        style={{ ...styles.input, width: '100%' }}
                        placeholder={language === 'fr' ? 'Appréciation...' : 'Comment...'}
                      />
                    ) : (
                      <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                        {language === 'fr' ? 'Bon travail' : 'Good work'}
                      </span>
                    )}
                  </td>
                  {isGrading && (
                    <td style={styles.td}>
                      <button style={{ ...styles.button, ...styles.secondaryButton }}>
                        {language === 'fr' ? 'Enregistrer' : 'Save'}
                      </button>
                    </td>
                  )}
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
          {language === 'fr' ? 'Examens & Notes' : 'Exams & Grades'}
        </h1>
        <button style={{ ...styles.button, ...styles.primaryButton }}>
          <Plus style={{ width: '1rem', height: '1rem' }} />
          {language === 'fr' ? 'Nouveau contrôle' : 'New Exam'}
        </button>
      </div>

      <div style={styles.tabs}>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 'upcoming' ? styles.tabActive : {})
          }}
          onClick={() => setActiveTab('upcoming')}
        >
          {language === 'fr' ? 'À venir' : 'Upcoming'} ({exams.upcoming.length})
        </button>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 'toGrade' ? styles.tabActive : {})
          }}
          onClick={() => setActiveTab('toGrade')}
        >
          {language === 'fr' ? 'À noter' : 'To Grade'} ({exams.toGrade.length})
        </button>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 'completed' ? styles.tabActive : {})
          }}
          onClick={() => setActiveTab('completed')}
        >
          {language === 'fr' ? 'Terminés' : 'Completed'} ({exams.completed.length})
        </button>
      </div>

      <div style={styles.section}>
        {exams[activeTab].map((exam) => (
          <div key={exam.id} style={styles.examCard}>
            <div style={styles.examHeader}>
              <div>
                <h3 style={styles.examTitle}>{exam.title}</h3>
                <div style={styles.examMeta}>
                  <span>{exam.class}</span>
                  <span>•</span>
                  <span>{exam.subject}</span>
                  <span>•</span>
                  <span>
                    <Calendar style={{ width: '0.875rem', height: '0.875rem', display: 'inline', marginRight: '0.25rem' }} />
                    {exam.date}
                  </span>
                  <span>•</span>
                  <span>{exam.duration}</span>
                  <span>•</span>
                  <span>{language === 'fr' ? 'Coeff.' : 'Coef.'} {exam.coefficient}</span>
                </div>
              </div>
              <div>
                {exam.status === 'upcoming' && (
                  <span style={{ ...styles.badge, ...styles.badgeInfo }}>
                    {language === 'fr' ? 'Programmé' : 'Scheduled'}
                  </span>
                )}
                {exam.status === 'toGrade' && (
                  <span style={{ ...styles.badge, ...styles.badgeWarning }}>
                    {language === 'fr' ? 'À noter' : 'To Grade'}
                  </span>
                )}
                {exam.status === 'completed' && (
                  <span style={{ ...styles.badge, ...styles.badgeSuccess }}>
                    {language === 'fr' ? 'Terminé' : 'Completed'}
                  </span>
                )}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                  {language === 'fr' ? 'Effectif:' : 'Students:'} <strong>{exam.students}</strong>
                </p>
                {exam.graded !== undefined && (
                  <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    {language === 'fr' ? 'Notés:' : 'Graded:'} <strong>{exam.graded} / {exam.students}</strong>
                  </p>
                )}
                {exam.average && (
                  <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    {language === 'fr' ? 'Moyenne:' : 'Average:'} <strong>{exam.average}</strong>
                  </p>
                )}
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {exam.status === 'upcoming' && (
                  <>
                    <button style={{ ...styles.button, ...styles.secondaryButton }}>
                      <Edit style={{ width: '1rem', height: '1rem' }} />
                      {language === 'fr' ? 'Modifier' : 'Edit'}
                    </button>
                    <button style={{ ...styles.button, ...styles.dangerButton }}>
                      <Trash2 style={{ width: '1rem', height: '1rem' }} />
                    </button>
                  </>
                )}
                {(exam.status === 'toGrade' || exam.status === 'completed') && (
                  <button
                    style={{ ...styles.button, ...styles.primaryButton }}
                    onClick={() => setSelectedExam(exam)}
                  >
                    {exam.status === 'toGrade'
                      ? (language === 'fr' ? 'Saisir notes' : 'Enter Grades')
                      : (language === 'fr' ? 'Voir résultats' : 'View Results')}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}

        {exams[activeTab].length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#9ca3af' }}>
            <FileText style={{ width: '3rem', height: '3rem', margin: '0 auto 1rem' }} />
            <p>{language === 'fr' ? 'Aucun examen dans cette catégorie' : 'No exams in this category'}</p>
          </div>
        )}
      </div>
    </div>
  )
}
