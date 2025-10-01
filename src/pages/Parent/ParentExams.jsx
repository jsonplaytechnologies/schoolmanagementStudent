import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { FileText, TrendingUp, Calendar } from 'lucide-react'

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
    color: '#111827'
  },
  section: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    marginBottom: '1.5rem'
  },
  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
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
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '0.25rem'
  },
  statLabel: {
    fontSize: '0.875rem',
    color: '#6b7280'
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
  badgeInfo: {
    backgroundColor: '#dbeafe',
    color: '#1e40af'
  }
}

export default function ParentExams() {
  const { t, language } = useLanguage()

  const stats = {
    average: '13,8 / 20',
    classAverage: '12,5 / 20',
    rank: '8 / 32',
    examsCompleted: 5
  }

  const upcomingExams = [
    { subject: language === 'fr' ? 'Mathématiques' : 'Mathematics', type: language === 'fr' ? 'Contrôle' : 'Test', date: '15/09/2025', coefficient: 2 },
    { subject: language === 'fr' ? 'Physique' : 'Physics', type: language === 'fr' ? 'Examen' : 'Exam', date: '20/09/2025', coefficient: 3 }
  ]

  const recentGrades = [
    { subject: language === 'fr' ? 'Mathématiques' : 'Mathematics', type: language === 'fr' ? 'Contrôle' : 'Test', grade: '14,5 / 20', classAverage: '12,8 / 20', date: '08/09/2025', coefficient: 2 },
    { subject: language === 'fr' ? 'Français' : 'French', type: language === 'fr' ? 'Rédaction' : 'Essay', grade: '15,0 / 20', classAverage: '13,2 / 20', date: '06/09/2025', coefficient: 2 },
    { subject: language === 'fr' ? 'Physique' : 'Physics', type: 'TP', grade: '13,0 / 20', classAverage: '11,5 / 20', date: '05/09/2025', coefficient: 1 },
    { subject: language === 'fr' ? 'Anglais' : 'English', type: language === 'fr' ? 'Oral' : 'Oral', grade: '12,5 / 20', classAverage: '12,0 / 20', date: '03/09/2025', coefficient: 1 }
  ]

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>
          {language === 'fr' ? 'Examens & Notes' : 'Exams & Grades'}
        </h1>
        <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
          Christelle MVE ESSONO • 3ème B
        </p>
      </div>

      {/* Performance Summary */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <TrendingUp style={{ width: '1.25rem', height: '1.25rem' }} />
          {language === 'fr' ? 'Résumé des performances' : 'Performance Summary'}
        </h2>
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statValue}>{stats.average}</div>
            <div style={styles.statLabel}>{language === 'fr' ? 'Moyenne de l\'élève' : 'Student Average'}</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statValue}>{stats.classAverage}</div>
            <div style={styles.statLabel}>{language === 'fr' ? 'Moyenne de la classe' : 'Class Average'}</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statValue}>{stats.rank}</div>
            <div style={styles.statLabel}>{language === 'fr' ? 'Classement' : 'Rank'}</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statValue}>{stats.examsCompleted}</div>
            <div style={styles.statLabel}>{language === 'fr' ? 'Examens passés' : 'Exams Taken'}</div>
          </div>
        </div>
      </div>

      {/* Upcoming Exams */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <Calendar style={{ width: '1.25rem', height: '1.25rem' }} />
          {language === 'fr' ? 'Examens à venir' : 'Upcoming Exams'}
        </h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>{language === 'fr' ? 'Matière' : 'Subject'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Type' : 'Type'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Date' : 'Date'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Coefficient' : 'Coefficient'}</th>
            </tr>
          </thead>
          <tbody>
            {upcomingExams.map((exam, index) => (
              <tr key={index}>
                <td style={styles.td}><strong>{exam.subject}</strong></td>
                <td style={styles.td}>{exam.type}</td>
                <td style={styles.td}>{exam.date}</td>
                <td style={styles.td}>{exam.coefficient}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recent Grades */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <FileText style={{ width: '1.25rem', height: '1.25rem' }} />
          {language === 'fr' ? 'Notes récentes' : 'Recent Grades'}
        </h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>{language === 'fr' ? 'Matière' : 'Subject'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Type' : 'Type'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Note' : 'Grade'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Moy. Classe' : 'Class Avg'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Coeff.' : 'Coef.'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Date' : 'Date'}</th>
            </tr>
          </thead>
          <tbody>
            {recentGrades.map((grade, index) => (
              <tr key={index}>
                <td style={styles.td}><strong>{grade.subject}</strong></td>
                <td style={styles.td}>{grade.type}</td>
                <td style={styles.td}>
                  <span style={{ fontWeight: '600', color: parseFloat(grade.grade) >= 10 ? '#10b981' : '#ef4444' }}>
                    {grade.grade}
                  </span>
                </td>
                <td style={styles.td}>{grade.classAverage}</td>
                <td style={styles.td}>{grade.coefficient}</td>
                <td style={styles.td}>{grade.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
