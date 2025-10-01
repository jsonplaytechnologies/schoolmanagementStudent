import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { DollarSign, Download, CheckCircle, AlertCircle, Clock } from 'lucide-react'

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
    borderRadius: '0.375rem'
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
  badgeDanger: {
    backgroundColor: '#fee2e2',
    color: '#991b1b'
  },
  badgeWarning: {
    backgroundColor: '#fef3c7',
    color: '#92400e'
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
  }
}

export default function ParentPayments() {
  const { t, language } = useLanguage()

  const summary = {
    totalFees: '1 500 000',
    paid: '1 000 000',
    pending: '500 000',
    nextDue: '20/09/2025'
  }

  const payments = [
    {
      description: language === 'fr' ? '1er Trimestre - Frais de scolarité' : '1st Term - Tuition Fees',
      amount: '500 000',
      dueDate: '01/09/2025',
      paidDate: '28/08/2025',
      status: 'paid',
      method: language === 'fr' ? 'Virement bancaire' : 'Bank Transfer'
    },
    {
      description: language === 'fr' ? '1er Trimestre - Cantine' : '1st Term - Cafeteria',
      amount: '200 000',
      dueDate: '01/09/2025',
      paidDate: '28/08/2025',
      status: 'paid',
      method: 'Mobile Money'
    },
    {
      description: language === 'fr' ? '1er Trimestre - Fournitures' : '1st Term - Supplies',
      amount: '150 000',
      dueDate: '01/09/2025',
      paidDate: '05/09/2025',
      status: 'paid',
      method: language === 'fr' ? 'Espèces' : 'Cash'
    },
    {
      description: language === 'fr' ? '1er Trimestre - Activités' : '1st Term - Activities',
      amount: '150 000',
      dueDate: '15/09/2025',
      paidDate: '10/09/2025',
      status: 'paid',
      method: 'Mobile Money'
    },
    {
      description: language === 'fr' ? '2ème Trimestre - Frais de scolarité' : '2nd Term - Tuition Fees',
      amount: '500 000',
      dueDate: '20/09/2025',
      paidDate: null,
      status: 'pending',
      method: null
    }
  ]

  const getStatusBadge = (status) => {
    if (status === 'paid') {
      return (
        <span style={{ ...styles.badge, ...styles.badgeSuccess }}>
          <CheckCircle style={{ width: '0.75rem', height: '0.75rem', display: 'inline', marginRight: '0.25rem' }} />
          {language === 'fr' ? 'Payé' : 'Paid'}
        </span>
      )
    } else if (status === 'pending') {
      return (
        <span style={{ ...styles.badge, ...styles.badgeWarning }}>
          <Clock style={{ width: '0.75rem', height: '0.75rem', display: 'inline', marginRight: '0.25rem' }} />
          {language === 'fr' ? 'En attente' : 'Pending'}
        </span>
      )
    } else if (status === 'overdue') {
      return (
        <span style={{ ...styles.badge, ...styles.badgeDanger }}>
          <AlertCircle style={{ width: '0.75rem', height: '0.75rem', display: 'inline', marginRight: '0.25rem' }} />
          {language === 'fr' ? 'En retard' : 'Overdue'}
        </span>
      )
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>
            {language === 'fr' ? 'Paiements' : 'Payments'}
          </h1>
          <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
            Christelle MVE ESSONO • 3ème B
          </p>
        </div>
        <button style={{ ...styles.button, ...styles.primaryButton }}>
          {language === 'fr' ? 'Payer maintenant' : 'Pay Now'}
        </button>
      </div>

      {/* Payment Summary */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <DollarSign style={{ width: '1.25rem', height: '1.25rem' }} />
          {language === 'fr' ? 'Résumé des paiements' : 'Payment Summary'}
        </h2>
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statLabel}>{language === 'fr' ? 'Frais totaux' : 'Total Fees'}</div>
            <div style={styles.statValue}>{summary.totalFees} FCFA</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statLabel}>{language === 'fr' ? 'Payé' : 'Paid'}</div>
            <div style={{ ...styles.statValue, color: '#10b981' }}>{summary.paid} FCFA</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statLabel}>{language === 'fr' ? 'Restant' : 'Remaining'}</div>
            <div style={{ ...styles.statValue, color: '#f59e0b' }}>{summary.pending} FCFA</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statLabel}>{language === 'fr' ? 'Prochain paiement' : 'Next Payment'}</div>
            <div style={styles.statValue}>{summary.nextDue}</div>
          </div>
        </div>
      </div>

      {/* Payment History */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          {language === 'fr' ? 'Historique des paiements' : 'Payment History'}
        </h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>{language === 'fr' ? 'Description' : 'Description'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Montant' : 'Amount'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Date limite' : 'Due Date'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Date paiement' : 'Payment Date'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Méthode' : 'Method'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Statut' : 'Status'}</th>
              <th style={styles.th}>{language === 'fr' ? 'Reçu' : 'Receipt'}</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={index}>
                <td style={styles.td}>{payment.description}</td>
                <td style={styles.td}><strong>{payment.amount} FCFA</strong></td>
                <td style={styles.td}>{payment.dueDate}</td>
                <td style={styles.td}>{payment.paidDate || '—'}</td>
                <td style={styles.td}>{payment.method || '—'}</td>
                <td style={styles.td}>{getStatusBadge(payment.status)}</td>
                <td style={styles.td}>
                  {payment.status === 'paid' && (
                    <button style={{ ...styles.button, ...styles.secondaryButton }}>
                      <Download style={{ width: '0.875rem', height: '0.875rem' }} />
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
