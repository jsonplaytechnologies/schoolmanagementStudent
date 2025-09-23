import { User, Mail, Phone, MapPin, Calendar, School, Download, Edit, Key, ArrowLeft } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { Link } from 'react-router-dom'

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
    color: '#111827',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  infoGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.75rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    backgroundColor: '#f9fafb'
  },
  infoLabel: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#4b5563',
    minWidth: '140px'
  },
  infoValue: {
    fontSize: '0.875rem',
    color: '#111827',
    flex: 1
  },
  contactGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.75rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem'
  },
  contactIcon: {
    padding: '0.5rem',
    borderRadius: '0.5rem',
    backgroundColor: '#dbeafe'
  },
  contactDetails: {
    flex: 1
  },
  contactLabel: {
    fontSize: '0.75rem',
    fontWeight: '500',
    color: '#6b7280',
    textTransform: 'uppercase'
  },
  contactValue: {
    fontSize: '0.875rem',
    color: '#111827',
    fontWeight: '500'
  },
  addressCard: {
    gridColumn: 'span 2'
  },
  addressContent: {
    padding: '1rem',
    backgroundColor: '#f3f4f6',
    borderRadius: '0.5rem',
    border: '1px solid #e5e7eb'
  },
  addressText: {
    fontSize: '0.875rem',
    color: '#374151',
    lineHeight: '1.5'
  },
  documentsGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  documentItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.75rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem'
  },
  documentInfo: {
    flex: 1
  },
  documentName: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#111827'
  },
  documentSize: {
    fontSize: '0.75rem',
    color: '#6b7280'
  },
  downloadButton: {
    padding: '0.5rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    fontSize: '0.75rem'
  },
  parentGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  parentItem: {
    padding: '1rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    backgroundColor: '#f9fafb'
  },
  parentName: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '0.5rem'
  },
  parentDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  },
  parentDetail: {
    fontSize: '0.75rem',
    color: '#6b7280'
  },
  actionsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem'
  },
  actionButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'background-color 0.2s'
  },
  secondaryButton: {
    backgroundColor: '#6b7280'
  },
  dangerButton: {
    backgroundColor: '#dc2626'
  },
  backButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#6b7280',
    fontSize: '0.875rem',
    textDecoration: 'none'
  }
}

export default function Profile() {
  const { t, language } = useLanguage()

  const documents = [
    {
      name: language === 'fr' ? 'Carte étudiant.pdf' : 'Student card.pdf',
      size: '245 Ko'
    },
    {
      name: language === 'fr' ? 'Certificat médical.pdf' : 'Medical certificate.pdf',
      size: '187 Ko'
    },
    {
      name: language === 'fr' ? 'Acte de naissance.pdf' : 'Birth certificate.pdf',
      size: '421 Ko'
    }
  ]

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.title}>
            {language === 'fr' ? 'Profil Étudiant' : 'Student Profile'}
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

      {/* Main Content Grid */}
      <div style={styles.mainGrid}>
        {/* Personal Information */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <User style={{ height: '1.25rem', width: '1.25rem', color: '#3b82f6' }} />
              {language === 'fr' ? 'Informations Personnelles' : 'Personal Information'}
            </h3>
          </div>
          <div style={styles.infoGrid}>
            <div style={styles.infoItem}>
              <span style={styles.infoLabel}>
                {language === 'fr' ? 'Nom complet :' : 'Full name:'}
              </span>
              <span style={styles.infoValue}>Christelle MVE ESSONO</span>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.infoLabel}>
                {language === 'fr' ? 'Date de naissance :' : 'Date of birth:'}
              </span>
              <span style={styles.infoValue}>22 {language === 'fr' ? 'avril' : 'April'} 2010</span>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.infoLabel}>
                {language === 'fr' ? 'Sexe :' : 'Gender:'}
              </span>
              <span style={styles.infoValue}>
                {language === 'fr' ? 'Féminin' : 'Female'}
              </span>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.infoLabel}>
                {language === 'fr' ? 'Numéro étudiant :' : 'Student number:'}
              </span>
              <span style={styles.infoValue}>2025-327</span>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.infoLabel}>
                {t('class')} :
              </span>
              <span style={styles.infoValue}>3ème B</span>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.infoLabel}>
                {language === 'fr' ? 'Année scolaire :' : 'School year:'}
              </span>
              <span style={styles.infoValue}>2025–2026</span>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <Phone style={{ height: '1.25rem', width: '1.25rem', color: '#10b981' }} />
              {language === 'fr' ? 'Contacts' : 'Contact Information'}
            </h3>
          </div>
          <div style={styles.contactGrid}>
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>
                <Mail style={{ height: '1rem', width: '1rem', color: '#3b82f6' }} />
              </div>
              <div style={styles.contactDetails}>
                <div style={styles.contactLabel}>Email</div>
                <div style={styles.contactValue}>christelle.essono@ecole.ga</div>
              </div>
            </div>
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>
                <Phone style={{ height: '1rem', width: '1rem', color: '#3b82f6' }} />
              </div>
              <div style={styles.contactDetails}>
                <div style={styles.contactLabel}>
                  {language === 'fr' ? 'Téléphone' : 'Phone'}
                </div>
                <div style={styles.contactValue}>+241 06 12 34 56</div>
              </div>
            </div>
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>
                <Phone style={{ height: '1rem', width: '1rem', color: '#dc2626' }} />
              </div>
              <div style={styles.contactDetails}>
                <div style={styles.contactLabel}>
                  {language === 'fr' ? 'Contact d\'urgence' : 'Emergency contact'}
                </div>
                <div style={styles.contactValue}>Paul OBIANG ({language === 'fr' ? 'Père' : 'Father'})</div>
                <div style={styles.contactValue}>+241 07 65 43 21</div>
              </div>
            </div>
          </div>
        </div>

        {/* Address */}
        <div style={{...styles.card, ...styles.addressCard}}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <MapPin style={{ height: '1.25rem', width: '1.25rem', color: '#f59e0b' }} />
              {language === 'fr' ? 'Adresse' : 'Address'}
            </h3>
          </div>
          <div style={styles.addressContent}>
            <p style={styles.addressText}>
              Nzeng-Ayong, Libreville
              <br />
              Gabon
            </p>
          </div>
        </div>

        {/* Parents/Guardians Information */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <User style={{ height: '1.25rem', width: '1.25rem', color: '#8b5cf6' }} />
              {language === 'fr' ? 'Informations Parents / Tuteurs' : 'Parents / Guardians Information'}
            </h3>
          </div>
          <div style={styles.parentGrid}>
            <div style={styles.parentItem}>
              <div style={styles.parentName}>Paul OBIANG ({language === 'fr' ? 'Père' : 'Father'})</div>
              <div style={styles.parentDetails}>
                <div style={styles.parentDetail}>
                  {language === 'fr' ? 'Téléphone :' : 'Phone:'} +241 07 65 43 21
                </div>
                <div style={styles.parentDetail}>
                  Email : paul.obiang@exemple.ga
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Associated Documents */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <Download style={{ height: '1.25rem', width: '1.25rem', color: '#059669' }} />
              {language === 'fr' ? 'Documents Associés' : 'Associated Documents'}
            </h3>
          </div>
          <div style={styles.documentsGrid}>
            {documents.map((doc, index) => (
              <div key={index} style={styles.documentItem}>
                <div style={styles.documentInfo}>
                  <div style={styles.documentName}>{doc.name}</div>
                  <div style={styles.documentSize}>{doc.size}</div>
                </div>
                <button style={styles.downloadButton}>
                  <Download style={{ height: '0.875rem', width: '0.875rem' }} />
                  {language === 'fr' ? 'Télécharger' : 'Download'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Available Actions */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <Edit style={{ height: '1.25rem', width: '1.25rem', color: '#6366f1' }} />
              {language === 'fr' ? 'Actions Disponibles' : 'Available Actions'}
            </h3>
          </div>
          <div style={styles.actionsGrid}>
            <button style={styles.actionButton}>
              <Edit style={{ height: '1rem', width: '1rem' }} />
              {language === 'fr' ? 'Modifier profil' : 'Edit profile'}
            </button>
            <button style={{...styles.actionButton, ...styles.secondaryButton}}>
              <Key style={{ height: '1rem', width: '1rem' }} />
              {language === 'fr' ? 'Changer mot de passe' : 'Change password'}
            </button>
            <button style={{...styles.actionButton, ...styles.dangerButton}}>
              <Download style={{ height: '1rem', width: '1rem' }} />
              {language === 'fr' ? 'Télécharger fiche élève PDF' : 'Download student file PDF'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}