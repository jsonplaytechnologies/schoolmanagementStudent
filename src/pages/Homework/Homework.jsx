import { FileText, Clock, User, Calendar, Download, ArrowLeft, Eye, Upload, Send, Filter, Search, CheckCircle, AlertCircle, XCircle } from 'lucide-react'
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
  filterSection: {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center'
  },
  select: {
    padding: '0.5rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    backgroundColor: 'white',
    fontSize: '0.875rem',
    color: '#374151'
  },
  searchInput: {
    padding: '0.5rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    backgroundColor: 'white',
    fontSize: '0.875rem',
    minWidth: '200px'
  },
  statsSection: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  },
  statItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.875rem',
    color: '#6b7280'
  },
  statValue: {
    fontWeight: '600',
    color: '#111827'
  },
  homeworkCard: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    padding: '1.5rem'
  },
  tableContainer: {
    overflowX: 'auto'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  tableHeader: {
    backgroundColor: '#f9fafb',
    borderBottom: '1px solid #e5e7eb'
  },
  th: {
    padding: '0.75rem',
    textAlign: 'left',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#374151'
  },
  td: {
    padding: '0.75rem',
    borderBottom: '1px solid #f3f4f6',
    fontSize: '0.875rem',
    color: '#111827'
  },
  titleCell: {
    fontWeight: '600'
  },
  subjectCell: {
    fontWeight: '500'
  },
  statusPending: {
    color: '#d97706',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem'
  },
  statusSubmitted: {
    color: '#059669',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem'
  },
  statusGraded: {
    color: '#3b82f6',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem'
  },
  actionButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.25rem',
    padding: '0.25rem 0.5rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    fontSize: '0.75rem',
    textDecoration: 'none',
    marginRight: '0.25rem'
  },
  submitButton: {
    backgroundColor: '#059669'
  },
  detailView: {
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
    color: '#111827',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  assignmentInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  infoLabel: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#6b7280'
  },
  infoValue: {
    fontSize: '0.875rem',
    color: '#111827'
  },
  instructions: {
    fontSize: '0.875rem',
    color: '#374151',
    lineHeight: '1.5',
    backgroundColor: '#f9fafb',
    padding: '1rem',
    borderRadius: '0.5rem',
    border: '1px solid #e5e7eb'
  },
  attachmentsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  attachmentItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.5rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.375rem',
    backgroundColor: '#f9fafb'
  },
  attachmentInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  attachmentName: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#111827'
  },
  attachmentSize: {
    fontSize: '0.75rem',
    color: '#6b7280'
  },
  downloadButton: {
    padding: '0.25rem 0.5rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    fontSize: '0.75rem'
  },
  submissionForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  textarea: {
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    minHeight: '100px',
    resize: 'vertical'
  },
  fileInput: {
    padding: '0.5rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    backgroundColor: 'white',
    fontSize: '0.875rem'
  },
  submitActions: {
    display: 'flex',
    gap: '0.5rem'
  },
  primaryButton: {
    padding: '0.75rem 1rem',
    backgroundColor: '#059669',
    color: 'white',
    border: 'none',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontWeight: '500'
  },
  secondaryButton: {
    padding: '0.75rem 1rem',
    backgroundColor: '#6b7280',
    color: 'white',
    border: 'none',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontWeight: '500'
  },
  backButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#6b7280',
    fontSize: '0.875rem',
    textDecoration: 'none'
  },
  viewToggle: {
    display: 'flex',
    gap: '0.5rem'
  },
  toggleButton: {
    padding: '0.5rem 1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151'
  },
  activeToggle: {
    backgroundColor: '#3b82f6',
    color: 'white',
    border: '1px solid #3b82f6'
  }
}

export default function Homework() {
  const { t, language } = useLanguage()
  const [currentView, setCurrentView] = useState('global')
  const [selectedSubject, setSelectedSubject] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedHomework, setSelectedHomework] = useState(null)

  const homework = [
    {
      id: 1,
      title: language === 'fr' ? 'Rédaction — Chap. 2' : 'Essay — Chapter 2',
      subject: language === 'fr' ? 'Français' : 'French',
      dueDate: '2025-09-18',
      status: 'pending',
      teacher: 'Mme MOUKETOU',
      instructions: language === 'fr' ?
        'Rédigez une dissertation de 300 mots sur le thème "L\'amitié" en utilisant les techniques narratives étudiées en classe.' :
        'Write a 300-word essay on the theme "Friendship" using the narrative techniques studied in class.'
    },
    {
      id: 2,
      title: language === 'fr' ? 'Exercice Nombres réels' : 'Real Numbers Exercise',
      subject: language === 'fr' ? 'Mathématiques' : 'Mathematics',
      dueDate: '2025-09-20',
      status: 'pending',
      teacher: 'M. OBIANG',
      instructions: language === 'fr' ?
        'Résolvez les exercices 1 à 15 de la page 45 du manuel. Montrez tous vos calculs.' :
        'Solve exercises 1 to 15 on page 45 of the textbook. Show all your calculations.'
    },
    {
      id: 3,
      title: language === 'fr' ? 'TP : Mélanges chimiques' : 'Lab: Chemical Mixtures',
      subject: language === 'fr' ? 'Sciences' : 'Science',
      dueDate: '2025-09-22',
      status: 'submitted',
      teacher: 'M. NGUEMA',
      grade: null
    },
    {
      id: 4,
      title: language === 'fr' ? 'Résumé chapitre Révolution' : 'Revolution Chapter Summary',
      subject: language === 'fr' ? 'Histoire-Géo' : 'History-Geography',
      dueDate: '2025-09-25',
      status: 'graded',
      teacher: 'Mme ELLA',
      grade: 15
    }
  ]

  const filteredHomework = homework.filter(hw => {
    const subjectMatch = selectedSubject === 'all' || hw.subject === selectedSubject
    const statusMatch = selectedStatus === 'all' || hw.status === selectedStatus
    return subjectMatch && statusMatch
  })

  const stats = {
    total: homework.length,
    pending: homework.filter(hw => hw.status === 'pending').length,
    submitted: homework.filter(hw => hw.status === 'submitted').length,
    graded: homework.filter(hw => hw.status === 'graded').length
  }

  const subjects = [...new Set(homework.map(hw => hw.subject))]

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <AlertCircle style={{ height: '0.875rem', width: '0.875rem' }} />
      case 'submitted':
        return <CheckCircle style={{ height: '0.875rem', width: '0.875rem' }} />
      case 'graded':
        return <CheckCircle style={{ height: '0.875rem', width: '0.875rem' }} />
      default:
        return null
    }
  }

  const getStatusStyle = (status) => {
    switch (status) {
      case 'pending': return styles.statusPending
      case 'submitted': return styles.statusSubmitted
      case 'graded': return styles.statusGraded
      default: return {}
    }
  }

  const getStatusText = (status) => {
    if (language === 'fr') {
      switch (status) {
        case 'pending': return 'À faire'
        case 'submitted': return 'Soumis'
        case 'graded': return 'Corrigé'
        default: return ''
      }
    } else {
      switch (status) {
        case 'pending': return 'To do'
        case 'submitted': return 'Submitted'
        case 'graded': return 'Graded'
        default: return ''
      }
    }
  }

  const renderGlobalView = () => (
    <div style={styles.homeworkCard}>
      <div style={styles.cardHeader}>
        <h3 style={styles.cardTitle}>
          <FileText style={{ height: '1.25rem', width: '1.25rem', color: '#3b82f6' }} />
          {language === 'fr' ? 'Vue Globale des Devoirs' : 'Global Homework View'}
        </h3>
      </div>

      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead style={styles.tableHeader}>
            <tr>
              <th style={styles.th}>{language === 'fr' ? 'Titre / Sujet' : 'Title / Subject'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Matière' : 'Subject'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Échéance' : 'Due Date'}</th>
              <th style={styles.th}>{t('status')}</th>
              <th style={styles.th}>{language === 'fr' ? 'Note' : 'Grade'}</th>
              <th style={styles.th}>{t('actions')}</th>
            </tr>
          </thead>
          <tbody>
            {filteredHomework.map((hw) => (
              <tr key={hw.id}>
                <td style={{...styles.td, ...styles.titleCell}}>{hw.title}</td>
                <td style={{...styles.td, ...styles.subjectCell}}>{hw.subject}</td>
                <td style={styles.td}>
                  {new Date(hw.dueDate).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')}
                </td>
                <td style={{...styles.td, ...getStatusStyle(hw.status)}}>
                  {getStatusIcon(hw.status)}
                  {getStatusText(hw.status)}
                </td>
                <td style={styles.td}>
                  {hw.grade ? `${hw.grade}/20` : '—'}
                </td>
                <td style={styles.td}>
                  <button
                    style={styles.actionButton}
                    onClick={() => {
                      setSelectedHomework(hw)
                      setCurrentView('detail')
                    }}
                  >
                    <Eye style={{ height: '0.75rem', width: '0.75rem' }} />
                    {t('view')}
                  </button>
                  {hw.status === 'pending' && (
                    <button
                      style={{...styles.actionButton, ...styles.submitButton}}
                      onClick={() => {
                        setSelectedHomework(hw)
                        setCurrentView('submit')
                      }}
                    >
                      <Send style={{ height: '0.75rem', width: '0.75rem' }} />
                      {language === 'fr' ? 'Soumettre' : 'Submit'}
                    </button>
                  )}
                  {hw.status === 'graded' && (
                    <button style={styles.actionButton}>
                      <Download style={{ height: '0.75rem', width: '0.75rem' }} />
                      {language === 'fr' ? 'Correction' : 'Correction'}
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

  const renderDetailView = () => {
    if (!selectedHomework) return null

    return (
      <div style={styles.detailView}>
        {/* Assignment Information */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <FileText style={{ height: '1.25rem', width: '1.25rem', color: '#3b82f6' }} />
              {language === 'fr' ? 'Informations du Devoir' : 'Assignment Information'}
            </h3>
          </div>
          <div style={styles.assignmentInfo}>
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>{language === 'fr' ? 'Titre :' : 'Title:'}</span>
              <span style={styles.infoValue}>{selectedHomework.title}</span>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>{language === 'fr' ? 'Matière :' : 'Subject:'}</span>
              <span style={styles.infoValue}>{selectedHomework.subject}</span>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>{language === 'fr' ? 'Professeur :' : 'Teacher:'}</span>
              <span style={styles.infoValue}>{selectedHomework.teacher}</span>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>{language === 'fr' ? 'Échéance :' : 'Due Date:'}</span>
              <span style={styles.infoValue}>
                {new Date(selectedHomework.dueDate).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')}
              </span>
            </div>
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>{t('status')} :</span>
              <span style={{...styles.infoValue, ...getStatusStyle(selectedHomework.status)}}>
                {getStatusIcon(selectedHomework.status)}
                {getStatusText(selectedHomework.status)}
              </span>
            </div>
            {selectedHomework.grade && (
              <div style={styles.infoRow}>
                <span style={styles.infoLabel}>{language === 'fr' ? 'Note :' : 'Grade:'}</span>
                <span style={styles.infoValue}>{selectedHomework.grade}/20</span>
              </div>
            )}
          </div>
        </div>

        {/* Instructions */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <FileText style={{ height: '1.25rem', width: '1.25rem', color: '#10b981' }} />
              {language === 'fr' ? 'Consignes' : 'Instructions'}
            </h3>
          </div>
          <div style={styles.instructions}>
            {selectedHomework.instructions || (language === 'fr' ? 'Aucune consigne détaillée fournie.' : 'No detailed instructions provided.')}
          </div>
        </div>

        {/* Attachments */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <Download style={{ height: '1.25rem', width: '1.25rem', color: '#f59e0b' }} />
              {language === 'fr' ? 'Pièces jointes' : 'Attachments'}
            </h3>
          </div>
          <div style={styles.attachmentsList}>
            <div style={styles.attachmentItem}>
              <div style={styles.attachmentInfo}>
                <div>
                  <div style={styles.attachmentName}>
                    {language === 'fr' ? 'Enoncé_Exercice.pdf' : 'Exercise_Statement.pdf'}
                  </div>
                  <div style={styles.attachmentSize}>240 Ko</div>
                </div>
              </div>
              <button style={styles.downloadButton}>
                <Download style={{ height: '0.75rem', width: '0.75rem' }} />
              </button>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <Send style={{ height: '1.25rem', width: '1.25rem', color: '#8b5cf6' }} />
              {t('actions')}
            </h3>
          </div>
          <div style={styles.submitActions}>
            {selectedHomework.status === 'pending' && (
              <button
                style={styles.primaryButton}
                onClick={() => setCurrentView('submit')}
              >
                <Send style={{ height: '1rem', width: '1rem' }} />
                {language === 'fr' ? 'Soumettre devoir' : 'Submit assignment'}
              </button>
            )}
            <button style={styles.secondaryButton}>
              {language === 'fr' ? 'Poser une question au professeur' : 'Ask teacher a question'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  const renderSubmitView = () => {
    if (!selectedHomework) return null

    return (
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h3 style={styles.cardTitle}>
            <Send style={{ height: '1.25rem', width: '1.25rem', color: '#059669' }} />
            {language === 'fr' ? 'Soumission du Devoir' : 'Assignment Submission'}
          </h3>
        </div>

        <div style={styles.assignmentInfo}>
          <div style={styles.infoRow}>
            <span style={styles.infoLabel}>{language === 'fr' ? 'Devoir :' : 'Assignment:'}</span>
            <span style={styles.infoValue}>{selectedHomework.title}</span>
          </div>
          <div style={styles.infoRow}>
            <span style={styles.infoLabel}>{language === 'fr' ? 'Matière :' : 'Subject:'}</span>
            <span style={styles.infoValue}>{selectedHomework.subject}</span>
          </div>
          <div style={styles.infoRow}>
            <span style={styles.infoLabel}>{language === 'fr' ? 'Échéance :' : 'Due Date:'}</span>
            <span style={styles.infoValue}>
              {new Date(selectedHomework.dueDate).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')}
            </span>
          </div>
        </div>

        <div style={styles.submissionForm}>
          <div>
            <label style={styles.infoLabel}>
              {language === 'fr' ? 'Commentaire élève :' : 'Student comment:'}
            </label>
            <textarea
              style={styles.textarea}
              placeholder={language === 'fr' ? 'Ajoutez un commentaire optionnel...' : 'Add an optional comment...'}
            />
          </div>

          <div>
            <label style={styles.infoLabel}>
              {language === 'fr' ? 'Joindre un fichier :' : 'Attach a file:'}
            </label>
            <input
              type="file"
              style={styles.fileInput}
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            />
            <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>
              {language === 'fr' ? 'PDF, DOCX, JPG — max 5 Mo' : 'PDF, DOCX, JPG — max 5 MB'}
            </div>
          </div>

          <div style={styles.submitActions}>
            <button style={styles.primaryButton}>
              <Send style={{ height: '1rem', width: '1rem' }} />
              {language === 'fr' ? 'Envoyer' : 'Submit'}
            </button>
            <button style={styles.secondaryButton}>
              {language === 'fr' ? 'Sauvegarder brouillon' : 'Save draft'}
            </button>
            <button
              style={styles.secondaryButton}
              onClick={() => setCurrentView('detail')}
            >
              {language === 'fr' ? 'Annuler' : 'Cancel'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.title}>
            {currentView === 'detail' && selectedHomework ?
              `${t('homework')} — ${selectedHomework.title}` :
              currentView === 'submit' && selectedHomework ?
                `${language === 'fr' ? 'Soumission' : 'Submission'} — ${selectedHomework.title}` :
                t('homework')
            }
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
      {currentView === 'global' && (
        <>
          <div style={styles.controls}>
            <div style={styles.filterSection}>
              <Filter style={{ height: '1rem', width: '1rem', color: '#6b7280' }} />
              <select
                style={styles.select}
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
              >
                <option value="all">{language === 'fr' ? 'Toutes matières' : 'All subjects'}</option>
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
              <select
                style={styles.select}
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="all">{language === 'fr' ? 'Tous statuts' : 'All statuses'}</option>
                <option value="pending">{language === 'fr' ? 'À faire' : 'To do'}</option>
                <option value="submitted">{language === 'fr' ? 'Soumis' : 'Submitted'}</option>
                <option value="graded">{language === 'fr' ? 'Corrigé' : 'Graded'}</option>
              </select>
              <input
                type="text"
                style={styles.searchInput}
                placeholder={language === 'fr' ? '🔍 Rechercher...' : '🔍 Search...'}
              />
            </div>

            <div style={styles.statsSection}>
              <div style={styles.statItem}>
                <span>{language === 'fr' ? 'Total :' : 'Total:'}</span>
                <span style={styles.statValue}>{stats.total}</span>
              </div>
              <div style={styles.statItem}>
                <span>{language === 'fr' ? 'À faire :' : 'To do:'}</span>
                <span style={styles.statValue}>{stats.pending}</span>
              </div>
              <div style={styles.statItem}>
                <span>{language === 'fr' ? 'Soumis :' : 'Submitted:'}</span>
                <span style={styles.statValue}>{stats.submitted}</span>
              </div>
              <div style={styles.statItem}>
                <span>{language === 'fr' ? 'Corrigés :' : 'Graded:'}</span>
                <span style={styles.statValue}>{stats.graded}</span>
              </div>
            </div>
          </div>
        </>
      )}

      {/* View Navigation */}
      {(currentView === 'detail' || currentView === 'submit') && (
        <div style={styles.viewToggle}>
          <button
            onClick={() => setCurrentView('global')}
            style={styles.toggleButton}
          >
            {language === 'fr' ? '← Retour liste devoirs' : '← Back to homework list'}
          </button>
          {currentView === 'detail' && selectedHomework?.status === 'pending' && (
            <button
              onClick={() => setCurrentView('submit')}
              style={{...styles.toggleButton, ...styles.activeToggle}}
            >
              {language === 'fr' ? 'Soumettre devoir' : 'Submit assignment'}
            </button>
          )}
        </div>
      )}

      {/* Content */}
      {currentView === 'global' && renderGlobalView()}
      {currentView === 'detail' && renderDetailView()}
      {currentView === 'submit' && renderSubmitView()}
    </div>
  )
}