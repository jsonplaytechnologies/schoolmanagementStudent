import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { FileText, Calendar, Users, CheckCircle, Clock, Download } from 'lucide-react'

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
  section: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    marginBottom: '1.5rem'
  },
  homeworkCard: {
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    marginBottom: '1rem'
  },
  homeworkHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1rem'
  },
  homeworkTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '0.25rem'
  },
  homeworkMeta: {
    display: 'flex',
    gap: '1rem',
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '1rem'
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem'
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
  textarea: {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '0.375rem',
    border: '1px solid #d1d5db',
    fontSize: '0.875rem',
    resize: 'vertical',
    minHeight: '4rem'
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

export default function ProfessorHomework() {
  const { t, language } = useLanguage()
  const [activeTab, setActiveTab] = useState('toCorrect')
  const [selectedHomework, setSelectedHomework] = useState(null)

  const homeworkList = {
    toCorrect: [
      {
        id: 1,
        title: language === 'fr' ? 'Exercice Chap. 2' : 'Exercise Ch. 2',
        class: '3ème A',
        subject: language === 'fr' ? 'Mathématiques' : 'Mathematics',
        deadline: '10/09/2025',
        submitted: 28,
        total: 32,
        status: 'pending'
      },
      {
        id: 2,
        title: language === 'fr' ? 'TP Mélanges' : 'Lab - Mixtures',
        class: '3ème B',
        subject: language === 'fr' ? 'Physique' : 'Physics',
        deadline: '12/09/2025',
        submitted: 30,
        total: 35,
        status: 'pending'
      }
    ],
    corrected: [
      {
        id: 3,
        title: language === 'fr' ? 'Exercice Chap. 1' : 'Exercise Ch. 1',
        class: '3ème A',
        subject: language === 'fr' ? 'Mathématiques' : 'Mathematics',
        deadline: '05/09/2025',
        submitted: 32,
        total: 32,
        status: 'corrected',
        avgGrade: '13,5 / 20'
      }
    ]
  }

  const submissions = [
    { student: 'Christelle ESSONO', studentId: '2025-327', submitted: true, grade: '', comment: '' },
    { student: 'Paul MOUKETOU', studentId: '2025-328', submitted: true, grade: '', comment: '' },
    { student: 'Marie NGUEMA', studentId: '2025-329', submitted: true, grade: '', comment: '' },
    { student: 'Jean OBIANG', studentId: '2025-330', submitted: false, grade: '', comment: '' }
  ]

  if (selectedHomework) {
    return (
      <div style={styles.container}>
        <button style={styles.backButton} onClick={() => setSelectedHomework(null)}>
          ← {language === 'fr' ? 'Retour aux devoirs' : 'Back to homework'}
        </button>

        <div style={styles.header}>
          <h1 style={styles.title}>
            {language === 'fr' ? 'Correction —' : 'Grading —'} {selectedHomework.title}
          </h1>
          <p style={{ color: '#6b7280' }}>
            {selectedHomework.subject} • {selectedHomework.class}
          </p>
        </div>

        <div style={styles.section}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <div>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>
                {language === 'fr' ? 'Copies rendues' : 'Submitted'}
              </p>
              <p style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                {selectedHomework.submitted} / {selectedHomework.total}
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button style={{ ...styles.button, ...styles.secondaryButton }}>
                <Download style={{ width: '1rem', height: '1rem' }} />
                {language === 'fr' ? 'Télécharger CSV modèle' : 'Download CSV Template'}
              </button>
              <button style={{ ...styles.button, ...styles.primaryButton }}>
                {language === 'fr' ? 'Enregistrer tout' : 'Save All'}
              </button>
            </div>
          </div>

          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>{language === 'fr' ? 'Élève' : 'Student'}</th>
                <th style={styles.th}>{language === 'fr' ? 'N° Étudiant' : 'Student ID'}</th>
                <th style={styles.th}>{language === 'fr' ? 'Note (/20)' : 'Grade (/20)'}</th>
                <th style={styles.th}>{language === 'fr' ? 'Appréciation' : 'Comment'}</th>
                <th style={styles.th}>{language === 'fr' ? 'Actions' : 'Actions'}</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((sub, index) => (
                <tr key={index}>
                  <td style={styles.td}>{sub.student}</td>
                  <td style={styles.td}>{sub.studentId}</td>
                  <td style={styles.td}>
                    {sub.submitted ? (
                      <input
                        type="number"
                        style={styles.input}
                        placeholder="0-20"
                        min="0"
                        max="20"
                        step="0.5"
                      />
                    ) : (
                      <span style={{ color: '#ef4444' }}>
                        {language === 'fr' ? 'Non rendu' : 'Not submitted'}
                      </span>
                    )}
                  </td>
                  <td style={styles.td}>
                    {sub.submitted && (
                      <input
                        type="text"
                        style={{ ...styles.input, width: '100%' }}
                        placeholder={language === 'fr' ? 'Appréciation...' : 'Comment...'}
                      />
                    )}
                  </td>
                  <td style={styles.td}>
                    {sub.submitted && (
                      <button style={{ ...styles.button, ...styles.secondaryButton }}>
                        {language === 'fr' ? 'Enregistrer' : 'Save'}
                      </button>
                    )}
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
          {language === 'fr' ? 'Devoirs' : 'Homework'}
        </h1>
      </div>

      <div style={styles.tabs}>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 'toCorrect' ? styles.tabActive : {})
          }}
          onClick={() => setActiveTab('toCorrect')}
        >
          {language === 'fr' ? 'À corriger' : 'To Grade'} ({homeworkList.toCorrect.length})
        </button>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 'corrected' ? styles.tabActive : {})
          }}
          onClick={() => setActiveTab('corrected')}
        >
          {language === 'fr' ? 'Corrigés' : 'Graded'} ({homeworkList.corrected.length})
        </button>
      </div>

      <div style={styles.section}>
        {homeworkList[activeTab].map((homework) => (
          <div key={homework.id} style={styles.homeworkCard}>
            <div style={styles.homeworkHeader}>
              <div>
                <h3 style={styles.homeworkTitle}>{homework.title}</h3>
                <div style={styles.homeworkMeta}>
                  <span style={styles.metaItem}>
                    <Users style={{ width: '1rem', height: '1rem' }} />
                    {homework.class}
                  </span>
                  <span style={styles.metaItem}>
                    <FileText style={{ width: '1rem', height: '1rem' }} />
                    {homework.subject}
                  </span>
                  <span style={styles.metaItem}>
                    <Calendar style={{ width: '1rem', height: '1rem' }} />
                    {homework.deadline}
                  </span>
                </div>
              </div>
              {homework.status === 'pending' ? (
                <span style={{ ...styles.badge, ...styles.badgeWarning }}>
                  <Clock style={{ width: '0.75rem', height: '0.75rem', display: 'inline', marginRight: '0.25rem' }} />
                  {language === 'fr' ? 'En attente' : 'Pending'}
                </span>
              ) : (
                <span style={{ ...styles.badge, ...styles.badgeSuccess }}>
                  <CheckCircle style={{ width: '0.75rem', height: '0.75rem', display: 'inline', marginRight: '0.25rem' }} />
                  {language === 'fr' ? 'Corrigé' : 'Graded'}
                </span>
              )}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                  {language === 'fr' ? 'Copies rendues:' : 'Submitted:'} <strong>{homework.submitted} / {homework.total}</strong>
                </p>
                {homework.avgGrade && (
                  <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    {language === 'fr' ? 'Moyenne:' : 'Average:'} <strong>{homework.avgGrade}</strong>
                  </p>
                )}
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {homework.status === 'corrected' && (
                  <button style={{ ...styles.button, ...styles.secondaryButton }}>
                    {language === 'fr' ? 'Exporter notes' : 'Export Grades'}
                  </button>
                )}
                <button
                  style={{ ...styles.button, ...styles.primaryButton }}
                  onClick={() => setSelectedHomework(homework)}
                >
                  {homework.status === 'pending'
                    ? (language === 'fr' ? 'Corriger' : 'Grade')
                    : (language === 'fr' ? 'Voir' : 'View')}
                </button>
              </div>
            </div>
          </div>
        ))}

        {homeworkList[activeTab].length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#9ca3af' }}>
            <FileText style={{ width: '3rem', height: '3rem', margin: '0 auto 1rem' }} />
            <p>{language === 'fr' ? 'Aucun devoir dans cette catégorie' : 'No homework in this category'}</p>
          </div>
        )}
      </div>
    </div>
  )
}
