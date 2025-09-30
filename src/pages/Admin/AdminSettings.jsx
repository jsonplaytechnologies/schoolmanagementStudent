import React, { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { Settings, Building, Bell, Users, DollarSign, Save } from 'lucide-react'

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
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '1rem'
  },
  formGroup: {
    marginBottom: '1.5rem'
  },
  label: {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '0.5rem'
  },
  input: {
    width: '100%',
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
    minHeight: '6rem',
    resize: 'vertical'
  },
  select: {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '0.375rem',
    border: '1px solid #d1d5db',
    fontSize: '0.875rem',
    backgroundColor: 'white',
    cursor: 'pointer'
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
  checkbox: {
    width: '1rem',
    height: '1rem',
    cursor: 'pointer'
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.75rem',
    cursor: 'pointer'
  }
}

export default function AdminSettings() {
  const { t, language } = useLanguage()
  const [activeTab, setActiveTab] = useState('general')

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>
          {language === 'fr' ? 'Paramètres Système' : 'System Settings'}
        </h1>
        <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
          {language === 'fr' ? 'Configuration et préférences de l\'établissement' : 'School configuration and preferences'}
        </p>
      </div>

      <div style={styles.tabs}>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 'general' ? styles.tabActive : {})
          }}
          onClick={() => setActiveTab('general')}
        >
          {language === 'fr' ? 'Général' : 'General'}
        </button>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 'academic' ? styles.tabActive : {})
          }}
          onClick={() => setActiveTab('academic')}
        >
          {language === 'fr' ? 'Académique' : 'Academic'}
        </button>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 'notifications' ? styles.tabActive : {})
          }}
          onClick={() => setActiveTab('notifications')}
        >
          {language === 'fr' ? 'Notifications' : 'Notifications'}
        </button>
        <button
          style={{
            ...styles.tab,
            ...(activeTab === 'payment' ? styles.tabActive : {})
          }}
          onClick={() => setActiveTab('payment')}
        >
          {language === 'fr' ? 'Paiements' : 'Payments'}
        </button>
      </div>

      {activeTab === 'general' && (
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            {language === 'fr' ? 'Informations de l\'établissement' : 'School Information'}
          </h2>
          <div style={styles.formGroup}>
            <label style={styles.label}>{language === 'fr' ? 'Nom de l\'établissement' : 'School Name'}</label>
            <input type="text" style={styles.input} defaultValue="Collège Privé Excellence" />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>{language === 'fr' ? 'Adresse' : 'Address'}</label>
            <input type="text" style={styles.input} defaultValue="123 Avenue de la République, Libreville" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            <div style={styles.formGroup}>
              <label style={styles.label}>{language === 'fr' ? 'Téléphone' : 'Phone'}</label>
              <input type="tel" style={styles.input} defaultValue="+241 01 23 45 67" />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input type="email" style={styles.input} defaultValue="contact@excellence.ga" />
            </div>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>{language === 'fr' ? 'Description' : 'Description'}</label>
            <textarea style={styles.textarea} defaultValue={language === 'fr' ? 'Établissement d\'excellence offrant un enseignement de qualité depuis 1985.' : 'Excellence institution offering quality education since 1985.'} />
          </div>
          <button style={{ ...styles.button, ...styles.primaryButton }}>
            <Save style={{ width: '1rem', height: '1rem' }} />
            {language === 'fr' ? 'Enregistrer' : 'Save'}
          </button>
        </div>
      )}

      {activeTab === 'academic' && (
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            {language === 'fr' ? 'Paramètres académiques' : 'Academic Settings'}
          </h2>
          <div style={styles.formGroup}>
            <label style={styles.label}>{language === 'fr' ? 'Nombre de trimestres' : 'Number of Terms'}</label>
            <select style={styles.select}>
              <option>3</option>
              <option>2</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>{language === 'fr' ? 'Note minimale de passage' : 'Minimum Passing Grade'}</label>
            <input type="number" style={styles.input} defaultValue="10" />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>{language === 'fr' ? 'Échelle de notation' : 'Grading Scale'}</label>
            <select style={styles.select}>
              <option>0-20</option>
              <option>0-100</option>
              <option>A-F</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.checkboxLabel}>
              <input type="checkbox" style={styles.checkbox} defaultChecked />
              <span style={{ fontSize: '0.875rem', color: '#374151' }}>
                {language === 'fr' ? 'Autoriser les demi-points' : 'Allow half points'}
              </span>
            </label>
            <label style={styles.checkboxLabel}>
              <input type="checkbox" style={styles.checkbox} defaultChecked />
              <span style={{ fontSize: '0.875rem', color: '#374151' }}>
                {language === 'fr' ? 'Afficher les classements' : 'Show rankings'}
              </span>
            </label>
          </div>
          <button style={{ ...styles.button, ...styles.primaryButton }}>
            <Save style={{ width: '1rem', height: '1rem' }} />
            {language === 'fr' ? 'Enregistrer' : 'Save'}
          </button>
        </div>
      )}

      {activeTab === 'notifications' && (
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            {language === 'fr' ? 'Préférences de notifications' : 'Notification Preferences'}
          </h2>
          <div style={styles.formGroup}>
            <label style={styles.checkboxLabel}>
              <input type="checkbox" style={styles.checkbox} defaultChecked />
              <span style={{ fontSize: '0.875rem', color: '#374151' }}>
                {language === 'fr' ? 'Notifier les parents des absences' : 'Notify parents of absences'}
              </span>
            </label>
            <label style={styles.checkboxLabel}>
              <input type="checkbox" style={styles.checkbox} defaultChecked />
              <span style={{ fontSize: '0.875rem', color: '#374151' }}>
                {language === 'fr' ? 'Notifier les parents des notes' : 'Notify parents of grades'}
              </span>
            </label>
            <label style={styles.checkboxLabel}>
              <input type="checkbox" style={styles.checkbox} defaultChecked />
              <span style={{ fontSize: '0.875rem', color: '#374151' }}>
                {language === 'fr' ? 'Notifier les parents des paiements en retard' : 'Notify parents of late payments'}
              </span>
            </label>
            <label style={styles.checkboxLabel}>
              <input type="checkbox" style={styles.checkbox} />
              <span style={{ fontSize: '0.875rem', color: '#374151' }}>
                {language === 'fr' ? 'Envoyer des rappels de devoirs' : 'Send homework reminders'}
              </span>
            </label>
          </div>
          <button style={{ ...styles.button, ...styles.primaryButton }}>
            <Save style={{ width: '1rem', height: '1rem' }} />
            {language === 'fr' ? 'Enregistrer' : 'Save'}
          </button>
        </div>
      )}

      {activeTab === 'payment' && (
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            {language === 'fr' ? 'Configuration des paiements' : 'Payment Configuration'}
          </h2>
          <div style={styles.formGroup}>
            <label style={styles.label}>{language === 'fr' ? 'Frais de scolarité annuels' : 'Annual Tuition Fee'}</label>
            <input type="number" style={styles.input} defaultValue="1500000" placeholder="FCFA" />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>{language === 'fr' ? 'Nombre de versements' : 'Number of Installments'}</label>
            <select style={styles.select}>
              <option>3</option>
              <option>2</option>
              <option>1</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>{language === 'fr' ? 'Pénalité de retard (%)' : 'Late Payment Penalty (%)'}</label>
            <input type="number" style={styles.input} defaultValue="5" />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.checkboxLabel}>
              <input type="checkbox" style={styles.checkbox} defaultChecked />
              <span style={{ fontSize: '0.875rem', color: '#374151' }}>
                {language === 'fr' ? 'Autoriser les paiements en ligne' : 'Allow online payments'}
              </span>
            </label>
            <label style={styles.checkboxLabel}>
              <input type="checkbox" style={styles.checkbox} defaultChecked />
              <span style={{ fontSize: '0.875rem', color: '#374151' }}>
                {language === 'fr' ? 'Accepter les paiements par mobile money' : 'Accept mobile money payments'}
              </span>
            </label>
          </div>
          <button style={{ ...styles.button, ...styles.primaryButton }}>
            <Save style={{ width: '1rem', height: '1rem' }} />
            {language === 'fr' ? 'Enregistrer' : 'Save'}
          </button>
        </div>
      )}
    </div>
  )
}
