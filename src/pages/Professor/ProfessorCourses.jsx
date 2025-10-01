import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { BookOpen, Plus, Edit, Trash2, Upload, FileText, Video, Link as LinkIcon, FolderOpen } from 'lucide-react'

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
  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1rem'
  },
  card: {
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    transition: 'all 0.2s',
    cursor: 'pointer'
  },
  cardTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '0.75rem'
  },
  cardMeta: {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '1rem'
  },
  cardActions: {
    display: 'flex',
    gap: '0.5rem',
    marginTop: '1rem'
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
    backgroundColor: '#ef4444',
    color: 'white'
  },
  resourceList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  resourceItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    backgroundColor: '#f9fafb'
  },
  resourceInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    flex: 1
  },
  resourceIcon: {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '0.375rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dbeafe'
  },
  resourceDetails: {
    flex: 1
  },
  resourceTitle: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#111827',
    marginBottom: '0.25rem'
  },
  resourceMeta: {
    fontSize: '0.75rem',
    color: '#6b7280'
  },
  lessonCard: {
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    padding: '1rem',
    marginBottom: '1rem'
  },
  lessonHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
    marginBottom: '0.75rem'
  },
  lessonTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '0.25rem'
  },
  lessonDate: {
    fontSize: '0.75rem',
    color: '#6b7280'
  },
  lessonContent: {
    fontSize: '0.875rem',
    color: '#374151',
    lineHeight: '1.5',
    marginBottom: '0.75rem'
  },
  badge: {
    display: 'inline-block',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: '500',
    backgroundColor: '#dbeafe',
    color: '#1e40af'
  },
  emptyState: {
    textAlign: 'center',
    padding: '3rem',
    color: '#9ca3af'
  },
  uploadArea: {
    border: '2px dashed #d1d5db',
    borderRadius: '0.5rem',
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: '#f9fafb',
    cursor: 'pointer',
    transition: 'all 0.2s'
  }
}

export default function ProfessorCourses() {
  const { t, language } = useLanguage()
  const [selectedClass, setSelectedClass] = useState(null)
  const [activeTab, setActiveTab] = useState('lessons')

  const classes = [
    {
      id: 1,
      name: '3ème A',
      subject: language === 'fr' ? 'Mathématiques' : 'Mathematics',
      students: 35,
      nextClass: '15/09/2025 08:00'
    },
    {
      id: 2,
      name: '2nde C',
      subject: language === 'fr' ? 'Mathématiques' : 'Mathematics',
      students: 32,
      nextClass: '15/09/2025 10:00'
    }
  ]

  const lessons = [
    {
      id: 1,
      title: language === 'fr' ? 'Chapitre 1 : Équations du second degré' : 'Chapter 1: Quadratic Equations',
      date: '05/09/2025',
      duration: '2h',
      status: 'completed',
      content: language === 'fr'
        ? 'Introduction aux équations du second degré, résolution par factorisation et formule quadratique.'
        : 'Introduction to quadratic equations, solving by factorization and quadratic formula.',
      resources: 3
    },
    {
      id: 2,
      title: language === 'fr' ? 'Chapitre 2 : Fonctions polynomiales' : 'Chapter 2: Polynomial Functions',
      date: '12/09/2025',
      duration: '2h',
      status: 'upcoming',
      content: language === 'fr'
        ? 'Étude des fonctions polynomiales, domaines, images et représentations graphiques.'
        : 'Study of polynomial functions, domains, ranges and graphical representations.',
      resources: 2
    },
    {
      id: 3,
      title: language === 'fr' ? 'Chapitre 3 : Dérivées' : 'Chapter 3: Derivatives',
      date: '19/09/2025',
      duration: '2h',
      status: 'planned',
      content: language === 'fr'
        ? 'Introduction au calcul différentiel et applications des dérivées.'
        : 'Introduction to differential calculus and applications of derivatives.',
      resources: 0
    }
  ]

  const resources = [
    {
      id: 1,
      title: language === 'fr' ? 'Cours - Équations du second degré.pdf' : 'Lesson - Quadratic Equations.pdf',
      type: 'pdf',
      size: '2.3 MB',
      date: '05/09/2025',
      downloads: 28
    },
    {
      id: 2,
      title: language === 'fr' ? 'Exercices corrigés - Chapitre 1.pdf' : 'Solved Exercises - Chapter 1.pdf',
      type: 'pdf',
      size: '1.8 MB',
      date: '05/09/2025',
      downloads: 25
    },
    {
      id: 3,
      title: language === 'fr' ? 'Vidéo explicative - Résolution d\'équations' : 'Explanatory video - Solving equations',
      type: 'video',
      size: '45 MB',
      date: '05/09/2025',
      downloads: 30
    },
    {
      id: 4,
      title: language === 'fr' ? 'Lien - Calculatrice graphique en ligne' : 'Link - Online graphing calculator',
      type: 'link',
      url: 'https://www.desmos.com',
      date: '05/09/2025',
      clicks: 15
    }
  ]

  const getResourceIcon = (type) => {
    switch (type) {
      case 'pdf':
        return <FileText style={{ width: '1.25rem', height: '1.25rem', color: '#3b82f6' }} />
      case 'video':
        return <Video style={{ width: '1.25rem', height: '1.25rem', color: '#ef4444' }} />
      case 'link':
        return <LinkIcon style={{ width: '1.25rem', height: '1.25rem', color: '#10b981' }} />
      default:
        return <FileText style={{ width: '1.25rem', height: '1.25rem', color: '#6b7280' }} />
    }
  }

  const getStatusBadge = (status) => {
    const statusConfig = {
      completed: {
        bg: '#d1fae5',
        color: '#065f46',
        text: language === 'fr' ? 'Terminé' : 'Completed'
      },
      upcoming: {
        bg: '#dbeafe',
        color: '#1e40af',
        text: language === 'fr' ? 'À venir' : 'Upcoming'
      },
      planned: {
        bg: '#fef3c7',
        color: '#92400e',
        text: language === 'fr' ? 'Planifié' : 'Planned'
      }
    }

    const config = statusConfig[status]
    return (
      <span style={{ ...styles.badge, backgroundColor: config.bg, color: config.color }}>
        {config.text}
      </span>
    )
  }

  const renderClassSelection = () => (
    <div style={styles.section}>
      <h2 style={styles.sectionTitle}>
        <FolderOpen style={{ width: '1.25rem', height: '1.25rem' }} />
        {language === 'fr' ? 'Mes classes' : 'My Classes'}
      </h2>
      <div style={styles.grid}>
        {classes.map((cls) => (
          <div
            key={cls.id}
            style={styles.card}
            onClick={() => setSelectedClass(cls)}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              e.currentTarget.style.borderColor = '#3b82f6'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.borderColor = '#e5e7eb'
            }}
          >
            <h3 style={styles.cardTitle}>{cls.name}</h3>
            <p style={styles.cardMeta}>
              {cls.subject}<br />
              {cls.students} {language === 'fr' ? 'élèves' : 'students'}<br />
              {language === 'fr' ? 'Prochain cours :' : 'Next class:'} {cls.nextClass}
            </p>
            <button style={{ ...styles.button, ...styles.primaryButton }}>
              {language === 'fr' ? 'Gérer le cours' : 'Manage Course'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )

  const renderLessons = () => (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={styles.sectionTitle}>
          <BookOpen style={{ width: '1.25rem', height: '1.25rem' }} />
          {language === 'fr' ? 'Plan de cours' : 'Lesson Plan'}
        </h2>
        <button style={{ ...styles.button, ...styles.primaryButton }}>
          <Plus style={{ width: '1rem', height: '1rem' }} />
          {language === 'fr' ? 'Nouvelle leçon' : 'New Lesson'}
        </button>
      </div>

      {lessons.map((lesson) => (
        <div key={lesson.id} style={styles.lessonCard}>
          <div style={styles.lessonHeader}>
            <div style={{ flex: 1 }}>
              <h3 style={styles.lessonTitle}>{lesson.title}</h3>
              <div style={styles.lessonDate}>
                {lesson.date} • {lesson.duration} • {lesson.resources} {language === 'fr' ? 'ressources' : 'resources'}
              </div>
            </div>
            {getStatusBadge(lesson.status)}
          </div>
          <p style={styles.lessonContent}>{lesson.content}</p>
          <div style={styles.cardActions}>
            <button style={{ ...styles.button, ...styles.secondaryButton }}>
              <Edit style={{ width: '0.875rem', height: '0.875rem' }} />
              {language === 'fr' ? 'Modifier' : 'Edit'}
            </button>
            <button style={{ ...styles.button, ...styles.secondaryButton }}>
              <Upload style={{ width: '0.875rem', height: '0.875rem' }} />
              {language === 'fr' ? 'Ajouter ressource' : 'Add Resource'}
            </button>
            <button style={{ ...styles.button, ...styles.dangerButton }}>
              <Trash2 style={{ width: '0.875rem', height: '0.875rem' }} />
            </button>
          </div>
        </div>
      ))}
    </div>
  )

  const renderResources = () => (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={styles.sectionTitle}>
          <FileText style={{ width: '1.25rem', height: '1.25rem' }} />
          {language === 'fr' ? 'Ressources pédagogiques' : 'Teaching Resources'}
        </h2>
        <button style={{ ...styles.button, ...styles.primaryButton }}>
          <Upload style={{ width: '1rem', height: '1rem' }} />
          {language === 'fr' ? 'Ajouter ressource' : 'Upload Resource'}
        </button>
      </div>

      <div
        style={styles.uploadArea}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#3b82f6'
          e.currentTarget.style.backgroundColor = '#f0f9ff'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#d1d5db'
          e.currentTarget.style.backgroundColor = '#f9fafb'
        }}
      >
        <Upload style={{ width: '3rem', height: '3rem', margin: '0 auto 1rem', color: '#9ca3af' }} />
        <p style={{ color: '#6b7280', marginBottom: '0.5rem' }}>
          {language === 'fr'
            ? 'Cliquez pour télécharger ou glissez-déposez des fichiers ici'
            : 'Click to upload or drag and drop files here'}
        </p>
        <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
          PDF, DOCX, PPTX, MP4 (max. 50MB)
        </p>
      </div>

      <div style={styles.resourceList}>
        {resources.map((resource) => (
          <div key={resource.id} style={styles.resourceItem}>
            <div style={styles.resourceInfo}>
              <div style={styles.resourceIcon}>
                {getResourceIcon(resource.type)}
              </div>
              <div style={styles.resourceDetails}>
                <div style={styles.resourceTitle}>{resource.title}</div>
                <div style={styles.resourceMeta}>
                  {resource.type === 'link'
                    ? `${resource.clicks} ${language === 'fr' ? 'clics' : 'clicks'}`
                    : `${resource.size} • ${resource.downloads} ${language === 'fr' ? 'téléchargements' : 'downloads'}`
                  } • {resource.date}
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button style={{ ...styles.button, ...styles.secondaryButton, padding: '0.5rem' }}>
                <Edit style={{ width: '0.875rem', height: '0.875rem' }} />
              </button>
              <button style={{ ...styles.button, ...styles.dangerButton, padding: '0.5rem' }}>
                <Trash2 style={{ width: '0.875rem', height: '0.875rem' }} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  if (!selectedClass) {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <div>
            <h1 style={styles.title}>
              {language === 'fr' ? 'Gestion des cours' : 'Course Management'}
            </h1>
            <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
              {language === 'fr'
                ? 'Gérez le contenu pédagogique de vos classes'
                : 'Manage the educational content of your classes'}
            </p>
          </div>
        </div>
        {renderClassSelection()}
      </div>
    )
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>
            {selectedClass.name} - {selectedClass.subject}
          </h1>
          <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
            {selectedClass.students} {language === 'fr' ? 'élèves' : 'students'} • {language === 'fr' ? 'Prochain cours :' : 'Next class:'} {selectedClass.nextClass}
          </p>
        </div>
        <button
          style={{ ...styles.button, ...styles.secondaryButton }}
          onClick={() => setSelectedClass(null)}
        >
          {language === 'fr' ? 'Retour aux classes' : 'Back to Classes'}
        </button>
      </div>

      <div style={styles.tabs}>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 'lessons' ? styles.tabActive : {})
          }}
          onClick={() => setActiveTab('lessons')}
        >
          {language === 'fr' ? 'Plan de cours' : 'Lesson Plan'}
        </button>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 'resources' ? styles.tabActive : {})
          }}
          onClick={() => setActiveTab('resources')}
        >
          {language === 'fr' ? 'Ressources' : 'Resources'}
        </button>
      </div>

      <div style={styles.section}>
        {activeTab === 'lessons' && renderLessons()}
        {activeTab === 'resources' && renderResources()}
      </div>
    </div>
  )
}
