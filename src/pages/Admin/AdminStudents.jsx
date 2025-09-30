import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { Users, Plus, Search, Filter, Download, Edit } from 'lucide-react'

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
  toolbar: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1.5rem',
    flexWrap: 'wrap'
  },
  searchBox: {
    flex: 1,
    minWidth: '250px',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    backgroundColor: 'white'
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: '0.875rem'
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
  pagination: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '1rem',
    padding: '1rem 0'
  }
}

export default function AdminStudents() {
  const { t, language } = useLanguage()
  const [searchTerm, setSearchTerm] = useState('')

  const students = [
    { id: 1, name: 'Christelle MVE ESSONO', studentId: '2025-327', class: '3ème A', gender: language === 'fr' ? 'F' : 'F', age: 14, parent: 'M. ESSONO', phone: '+241 06 12 34 56', status: 'active' },
    { id: 2, name: 'Paul MOUKETOU', studentId: '2025-328', class: '3ème B', gender: language === 'fr' ? 'M' : 'M', age: 15, parent: 'Mme MOUKETOU', phone: '+241 06 23 45 67', status: 'active' },
    { id: 3, name: 'Marie NGUEMA', studentId: '2025-329', class: '4ème A', gender: language === 'fr' ? 'F' : 'F', age: 13, parent: 'M. NGUEMA', phone: '+241 06 34 56 78', status: 'active' },
    { id: 4, name: 'Jean OBIANG', studentId: '2025-330', class: '5ème B', gender: language === 'fr' ? 'M' : 'M', age: 12, parent: 'Mme OBIANG', phone: '+241 06 45 67 89', status: 'active' },
    { id: 5, name: 'Sophie MBINA', studentId: '2025-331', class: '6ème A', gender: language === 'fr' ? 'F' : 'F', age: 11, parent: 'M. MBINA', phone: '+241 06 56 78 90', status: 'warning' }
  ]

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>
            {language === 'fr' ? 'Gestion des Élèves' : 'Students Management'}
          </h1>
          <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
            {students.length} {language === 'fr' ? 'élèves enregistrés' : 'registered students'}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button style={{ ...styles.button, ...styles.secondaryButton }}>
            <Download style={{ width: '1rem', height: '1rem' }} />
            {language === 'fr' ? 'Exporter' : 'Export'}
          </button>
          <button style={{ ...styles.button, ...styles.primaryButton }}>
            <Plus style={{ width: '1rem', height: '1rem' }} />
            {language === 'fr' ? 'Nouvel élève' : 'New Student'}
          </button>
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.toolbar}>
          <div style={styles.searchBox}>
            <Search style={{ width: '1rem', height: '1rem', color: '#9ca3af' }} />
            <input
              type="text"
              style={styles.input}
              placeholder={language === 'fr' ? 'Rechercher un élève...' : 'Search student...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button style={{ ...styles.button, ...styles.secondaryButton }}>
            <Filter style={{ width: '1rem', height: '1rem' }} />
            {language === 'fr' ? 'Filtres' : 'Filters'}
          </button>
        </div>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>{language === 'fr' ? 'N° Étudiant' : 'Student ID'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Nom complet' : 'Full Name'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Classe' : 'Class'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Âge' : 'Age'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Parent/Tuteur' : 'Parent/Guardian'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Contact' : 'Contact'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Statut' : 'Status'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Actions' : 'Actions'}</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td style={styles.td}><strong>{student.studentId}</strong></td>
                <td style={styles.td}>{student.name}</td>
                <td style={styles.td}>{student.class}</td>
                <td style={styles.td}>{student.age} {language === 'fr' ? 'ans' : 'yrs'}</td>
                <td style={styles.td}>{student.parent}</td>
                <td style={styles.td}>{student.phone}</td>
                <td style={styles.td}>
                  <span style={{
                    ...styles.badge,
                    ...(student.status === 'active' ? styles.badgeSuccess : styles.badgeWarning)
                  }}>
                    {student.status === 'active'
                      ? (language === 'fr' ? 'Actif' : 'Active')
                      : (language === 'fr' ? 'Attention' : 'Warning')}
                  </span>
                </td>
                <td style={styles.td}>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button style={{ ...styles.button, ...styles.secondaryButton }}>
                      {language === 'fr' ? 'Voir' : 'View'}
                    </button>
                    <button style={{ ...styles.button, ...styles.secondaryButton }}>
                      <Edit style={{ width: '0.875rem', height: '0.875rem' }} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={styles.pagination}>
          <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
            {language === 'fr' ? 'Affichage de' : 'Showing'} 1-5 {language === 'fr' ? 'sur' : 'of'} {students.length}
          </p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button style={{ ...styles.button, ...styles.secondaryButton }}>
              {language === 'fr' ? 'Précédent' : 'Previous'}
            </button>
            <button style={{ ...styles.button, ...styles.secondaryButton }}>
              {language === 'fr' ? 'Suivant' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
