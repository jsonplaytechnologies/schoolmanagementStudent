import { CreditCard, Receipt, FileText, Clock, CheckCircle, AlertCircle, ArrowLeft, Calendar, Euro, Download, Eye, Search, Filter } from 'lucide-react'
import { useState } from 'react'
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
  viewToggle: {
    display: 'flex',
    backgroundColor: '#f3f4f6',
    borderRadius: '0.5rem',
    padding: '0.25rem'
  },
  viewButton: {
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#6b7280'
  },
  viewButtonActive: {
    backgroundColor: 'white',
    color: '#3b82f6',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem'
  },
  statCard: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    padding: '1.5rem'
  },
  statHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '0.75rem'
  },
  statTitle: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#6b7280'
  },
  statValue: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#111827'
  },
  statSubtext: {
    fontSize: '0.75rem',
    color: '#6b7280',
    marginTop: '0.25rem'
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
    justifyContent: 'space-between',
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
  invoiceList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  invoiceItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.75rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem'
  },
  invoiceInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    flex: 1
  },
  invoiceIcon: {
    padding: '0.5rem',
    borderRadius: '0.5rem'
  },
  invoiceDetails: {
    flex: 1
  },
  invoiceTitle: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#111827'
  },
  invoiceDate: {
    fontSize: '0.75rem',
    color: '#6b7280'
  },
  invoiceAmount: {
    fontSize: '0.875rem',
    fontWeight: '600',
    textAlign: 'right'
  },
  invoiceStatus: {
    fontSize: '0.75rem',
    fontWeight: '500',
    marginTop: '0.25rem'
  },
  paymentMethods: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  paymentMethod: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.75rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem'
  },
  methodIcon: {
    padding: '0.5rem',
    borderRadius: '0.5rem',
    backgroundColor: '#dbeafe'
  },
  methodDetails: {
    flex: 1
  },
  methodName: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#111827'
  },
  methodDescription: {
    fontSize: '0.75rem',
    color: '#6b7280'
  },
  historyList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  historyItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.75rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem'
  },
  historyDetails: {
    flex: 1
  },
  historyTitle: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#111827'
  },
  historyDate: {
    fontSize: '0.75rem',
    color: '#6b7280'
  },
  historyAmount: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#10b981'
  },
  actionButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    padding: '0.5rem 0.75rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    fontSize: '0.75rem',
    fontWeight: '500'
  },
  secondaryButton: {
    backgroundColor: '#6b7280'
  },
  backButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#6b7280',
    fontSize: '0.875rem',
    textDecoration: 'none'
  },
  filterBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem'
  },
  searchInput: {
    flex: 1,
    padding: '0.5rem 0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    fontSize: '0.875rem'
  },
  filterSelect: {
    padding: '0.5rem 0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    backgroundColor: 'white'
  },
  invoiceDetail: {
    backgroundColor: '#f9fafb',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    padding: '1rem',
    marginTop: '1rem'
  },
  detailGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem'
  },
  detailItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 0',
    borderBottom: '1px solid #e5e7eb'
  },
  detailLabel: {
    fontSize: '0.875rem',
    color: '#6b7280'
  },
  detailValue: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#111827'
  }
}

export default function Payments() {
  const { language, t } = useLanguage()
  const [currentView, setCurrentView] = useState('overview')
  const [selectedInvoice, setSelectedInvoice] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const invoices = [
    {
      id: 'INV-2025-001',
      title: language === 'fr' ? 'Frais de scolarité T2' : 'Term 2 School fees',
      amount: 485000,
      currency: 'FCFA',
      dueDate: '28 ' + (language === 'fr' ? 'février' : 'February') + ' 2025',
      status: 'pending',
      description: language === 'fr' ? 'Frais de scolarité pour le 2ème trimestre 2025' : 'School fees for 2nd term 2025',
      items: [
        { name: language === 'fr' ? 'Frais d\'enseignement' : 'Tuition fees', amount: 400000 },
        { name: language === 'fr' ? 'Frais d\'activités' : 'Activity fees', amount: 65000 },
        { name: language === 'fr' ? 'Frais d\'examen' : 'Exam fees', amount: 20000 }
      ]
    },
    {
      id: 'INV-2025-002',
      title: language === 'fr' ? 'Fournitures scolaires' : 'School supplies',
      amount: 125000,
      currency: 'FCFA',
      dueDate: '15 ' + (language === 'fr' ? 'février' : 'February') + ' 2025',
      status: 'overdue',
      description: language === 'fr' ? 'Achat de fournitures scolaires' : 'Purchase of school supplies',
      items: [
        { name: language === 'fr' ? 'Manuels scolaires' : 'Textbooks', amount: 85000 },
        { name: language === 'fr' ? 'Matériel de laboratoire' : 'Laboratory materials', amount: 40000 }
      ]
    },
    {
      id: 'INV-2024-089',
      title: language === 'fr' ? 'Frais de scolarité T1' : 'Term 1 School fees',
      amount: 485000,
      currency: 'FCFA',
      dueDate: '30 ' + (language === 'fr' ? 'novembre' : 'November') + ' 2024',
      status: 'paid',
      description: language === 'fr' ? 'Frais de scolarité pour le 1er trimestre 2024-2025' : 'School fees for 1st term 2024-2025',
      paidDate: '28 ' + (language === 'fr' ? 'novembre' : 'November') + ' 2024',
      items: [
        { name: language === 'fr' ? 'Frais d\'enseignement' : 'Tuition fees', amount: 400000 },
        { name: language === 'fr' ? 'Frais d\'activités' : 'Activity fees', amount: 65000 },
        { name: language === 'fr' ? 'Frais d\'examen' : 'Exam fees', amount: 20000 }
      ]
    }
  ]

  const paymentHistory = [
    {
      id: 'PAY-2024-001',
      description: language === 'fr' ? 'Frais de scolarité T1' : 'Term 1 School fees',
      amount: 485000,
      currency: 'FCFA',
      date: '28 ' + (language === 'fr' ? 'novembre' : 'November') + ' 2024',
      method: language === 'fr' ? 'Virement bancaire' : 'Bank transfer',
      reference: 'BGD-240001234'
    },
    {
      id: 'PAY-2024-002',
      description: language === 'fr' ? 'Frais d\'inscription' : 'Registration fees',
      amount: 150000,
      currency: 'FCFA',
      date: '15 ' + (language === 'fr' ? 'septembre' : 'September') + ' 2024',
      method: language === 'fr' ? 'Espèces' : 'Cash',
      reference: 'CASH-240002'
    },
    {
      id: 'PAY-2024-003',
      description: language === 'fr' ? 'Uniforme scolaire' : 'School uniform',
      amount: 85000,
      currency: 'FCFA',
      date: '10 ' + (language === 'fr' ? 'septembre' : 'September') + ' 2024',
      method: 'Mobile Money',
      reference: 'MM-240003456'
    }
  ]

  const paymentMethods = [
    {
      name: language === 'fr' ? 'Virement bancaire' : 'Bank transfer',
      description: language === 'fr' ? 'Compte : BGD - 12345678901' : 'Account: BGD - 12345678901',
      icon: <CreditCard style={{ height: '1rem', width: '1rem', color: '#3b82f6' }} />,
      available: true
    },
    {
      name: 'Mobile Money',
      description: language === 'fr' ? 'Airtel Money, Moov Money' : 'Airtel Money, Moov Money',
      icon: <CreditCard style={{ height: '1rem', width: '1rem', color: '#10b981' }} />,
      available: true
    },
    {
      name: language === 'fr' ? 'Paiement en espèces' : 'Cash payment',
      description: language === 'fr' ? 'À l\'administration' : 'At administration office',
      icon: <Euro style={{ height: '1rem', width: '1rem', color: '#f59e0b' }} />,
      available: true
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid':
        return '#10b981'
      case 'pending':
        return '#f59e0b'
      case 'overdue':
        return '#ef4444'
      default:
        return '#6b7280'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'paid':
        return language === 'fr' ? 'Payé' : 'Paid'
      case 'pending':
        return language === 'fr' ? 'En attente' : 'Pending'
      case 'overdue':
        return language === 'fr' ? 'En retard' : 'Overdue'
      default:
        return ''
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'paid':
        return <CheckCircle style={{ height: '1rem', width: '1rem', color: '#10b981' }} />
      case 'pending':
        return <Clock style={{ height: '1rem', width: '1rem', color: '#f59e0b' }} />
      case 'overdue':
        return <AlertCircle style={{ height: '1rem', width: '1rem', color: '#ef4444' }} />
      default:
        return null
    }
  }

  const formatAmount = (amount, currency) => {
    return `${amount.toLocaleString()} ${currency}`
  }

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || invoice.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const totalPaid = paymentHistory.reduce((sum, payment) => sum + payment.amount, 0)
  const totalPending = invoices.filter(inv => inv.status === 'pending').reduce((sum, inv) => sum + inv.amount, 0)
  const totalOverdue = invoices.filter(inv => inv.status === 'overdue').reduce((sum, inv) => sum + inv.amount, 0)

  const renderOverview = () => (
    <>
      {/* Statistics Cards */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={styles.statHeader}>
            <span style={styles.statTitle}>
              {language === 'fr' ? 'Solde en attente' : 'Pending balance'}
            </span>
            <Clock style={{ height: '1.25rem', width: '1.25rem', color: '#f59e0b' }} />
          </div>
          <div style={{ ...styles.statValue, color: '#f59e0b' }}>
            {formatAmount(totalPending, 'FCFA')}
          </div>
          <div style={styles.statSubtext}>
            {invoices.filter(inv => inv.status === 'pending').length} {language === 'fr' ? 'facture(s)' : 'invoice(s)'}
          </div>
        </div>

        <div style={styles.statCard}>
          <div style={styles.statHeader}>
            <span style={styles.statTitle}>
              {language === 'fr' ? 'Montant en retard' : 'Overdue amount'}
            </span>
            <AlertCircle style={{ height: '1.25rem', width: '1.25rem', color: '#ef4444' }} />
          </div>
          <div style={{ ...styles.statValue, color: '#ef4444' }}>
            {formatAmount(totalOverdue, 'FCFA')}
          </div>
          <div style={styles.statSubtext}>
            {invoices.filter(inv => inv.status === 'overdue').length} {language === 'fr' ? 'facture(s)' : 'invoice(s)'}
          </div>
        </div>

        <div style={styles.statCard}>
          <div style={styles.statHeader}>
            <span style={styles.statTitle}>
              {language === 'fr' ? 'Total payé cette année' : 'Total paid this year'}
            </span>
            <CheckCircle style={{ height: '1.25rem', width: '1.25rem', color: '#10b981' }} />
          </div>
          <div style={{ ...styles.statValue, color: '#10b981' }}>
            {formatAmount(totalPaid, 'FCFA')}
          </div>
          <div style={styles.statSubtext}>
            {paymentHistory.length} {language === 'fr' ? 'paiement(s)' : 'payment(s)'}
          </div>
        </div>

        <div style={styles.statCard}>
          <div style={styles.statHeader}>
            <span style={styles.statTitle}>
              {language === 'fr' ? 'Prochaine échéance' : 'Next due date'}
            </span>
            <Calendar style={{ height: '1.25rem', width: '1.25rem', color: '#6366f1' }} />
          </div>
          <div style={{ ...styles.statValue, fontSize: '1.25rem', color: '#6366f1' }}>
            15 {language === 'fr' ? 'Fév' : 'Feb'}
          </div>
          <div style={styles.statSubtext}>
            {language === 'fr' ? 'Fournitures scolaires' : 'School supplies'}
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div style={styles.mainGrid}>
        {/* Outstanding Invoices */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <Receipt style={{ height: '1.25rem', width: '1.25rem', color: '#ef4444' }} />
              {language === 'fr' ? 'Factures en Attente' : 'Outstanding Invoices'}
            </h3>
          </div>
          <div style={styles.invoiceList}>
            {invoices.filter(invoice => invoice.status !== 'paid').map((invoice, index) => (
              <div key={index} style={styles.invoiceItem}>
                <div style={styles.invoiceInfo}>
                  <div style={{ ...styles.invoiceIcon, backgroundColor: getStatusColor(invoice.status) + '20' }}>
                    {getStatusIcon(invoice.status)}
                  </div>
                  <div style={styles.invoiceDetails}>
                    <div style={styles.invoiceTitle}>{invoice.title}</div>
                    <div style={styles.invoiceDate}>
                      {language === 'fr' ? 'Échéance :' : 'Due:'} {invoice.dueDate}
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ ...styles.invoiceAmount, color: getStatusColor(invoice.status) }}>
                    {formatAmount(invoice.amount, invoice.currency)}
                  </div>
                  <div style={{ ...styles.invoiceStatus, color: getStatusColor(invoice.status) }}>
                    {getStatusText(invoice.status)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <CreditCard style={{ height: '1.25rem', width: '1.25rem', color: '#3b82f6' }} />
              {language === 'fr' ? 'Moyens de Paiement' : 'Payment Methods'}
            </h3>
          </div>
          <div style={styles.paymentMethods}>
            {paymentMethods.map((method, index) => (
              <div key={index} style={styles.paymentMethod}>
                <div style={styles.methodIcon}>
                  {method.icon}
                </div>
                <div style={styles.methodDetails}>
                  <div style={styles.methodName}>{method.name}</div>
                  <div style={styles.methodDescription}>{method.description}</div>
                </div>
                {method.available && (
                  <CheckCircle style={{ height: '1rem', width: '1rem', color: '#10b981' }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Recent Payment History */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>
              <FileText style={{ height: '1.25rem', width: '1.25rem', color: '#10b981' }} />
              {language === 'fr' ? 'Historique Récent' : 'Recent History'}
            </h3>
          </div>
          <div style={styles.historyList}>
            {paymentHistory.slice(0, 3).map((payment, index) => (
              <div key={index} style={styles.historyItem}>
                <div style={styles.historyDetails}>
                  <div style={styles.historyTitle}>{payment.description}</div>
                  <div style={styles.historyDate}>{payment.date} - {payment.method}</div>
                </div>
                <div style={styles.historyAmount}>
                  +{formatAmount(payment.amount, payment.currency)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )

  const renderInvoices = () => (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <h3 style={styles.cardTitle}>
          <Receipt style={{ height: '1.25rem', width: '1.25rem', color: '#3b82f6' }} />
          {language === 'fr' ? 'Toutes les Factures' : 'All Invoices'}
        </h3>
      </div>

      {/* Filter Bar */}
      <div style={styles.filterBar}>
        <div style={{ position: 'relative', flex: 1 }}>
          <Search style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', height: '1rem', width: '1rem', color: '#6b7280' }} />
          <input
            type="text"
            placeholder={language === 'fr' ? 'Rechercher une facture...' : 'Search invoices...'}
            style={{ ...styles.searchInput, paddingLeft: '2.5rem' }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          style={styles.filterSelect}
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">{language === 'fr' ? 'Tous les statuts' : 'All statuses'}</option>
          <option value="pending">{language === 'fr' ? 'En attente' : 'Pending'}</option>
          <option value="overdue">{language === 'fr' ? 'En retard' : 'Overdue'}</option>
          <option value="paid">{language === 'fr' ? 'Payé' : 'Paid'}</option>
        </select>
      </div>

      <div style={styles.invoiceList}>
        {filteredInvoices.map((invoice, index) => (
          <div key={index} style={styles.invoiceItem}>
            <div style={styles.invoiceInfo}>
              <div style={{ ...styles.invoiceIcon, backgroundColor: getStatusColor(invoice.status) + '20' }}>
                {getStatusIcon(invoice.status)}
              </div>
              <div style={styles.invoiceDetails}>
                <div style={styles.invoiceTitle}>{invoice.title}</div>
                <div style={styles.invoiceDate}>
                  {invoice.id} • {language === 'fr' ? 'Échéance :' : 'Due:'} {invoice.dueDate}
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div>
                <div style={{ ...styles.invoiceAmount, color: getStatusColor(invoice.status) }}>
                  {formatAmount(invoice.amount, invoice.currency)}
                </div>
                <div style={{ ...styles.invoiceStatus, color: getStatusColor(invoice.status) }}>
                  {getStatusText(invoice.status)}
                </div>
              </div>
              <button
                style={styles.actionButton}
                onClick={() => setSelectedInvoice(invoice)}
              >
                <Eye style={{ height: '0.75rem', width: '0.75rem' }} />
                {language === 'fr' ? 'Voir' : 'View'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Invoice Detail Modal */}
      {selectedInvoice && (
        <div style={styles.invoiceDetail}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827' }}>
              {selectedInvoice.title}
            </h4>
            <button
              style={{ ...styles.actionButton, ...styles.secondaryButton }}
              onClick={() => setSelectedInvoice(null)}
            >
              ✕
            </button>
          </div>

          <div style={styles.detailGrid}>
            <div style={styles.detailItem}>
              <span style={styles.detailLabel}>{language === 'fr' ? 'Numéro de facture' : 'Invoice number'}:</span>
              <span style={styles.detailValue}>{selectedInvoice.id}</span>
            </div>
            <div style={styles.detailItem}>
              <span style={styles.detailLabel}>{language === 'fr' ? 'Date d\'échéance' : 'Due date'}:</span>
              <span style={styles.detailValue}>{selectedInvoice.dueDate}</span>
            </div>
            <div style={styles.detailItem}>
              <span style={styles.detailLabel}>{language === 'fr' ? 'Montant total' : 'Total amount'}:</span>
              <span style={styles.detailValue}>{formatAmount(selectedInvoice.amount, selectedInvoice.currency)}</span>
            </div>
            <div style={styles.detailItem}>
              <span style={styles.detailLabel}>{language === 'fr' ? 'Statut' : 'Status'}:</span>
              <span style={{ ...styles.detailValue, color: getStatusColor(selectedInvoice.status) }}>
                {getStatusText(selectedInvoice.status)}
              </span>
            </div>
          </div>

          <div style={{ marginTop: '1rem' }}>
            <h5 style={{ fontSize: '1rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>
              {language === 'fr' ? 'Détail des frais' : 'Fee breakdown'}:
            </h5>
            {selectedInvoice.items.map((item, index) => (
              <div key={index} style={styles.detailItem}>
                <span style={styles.detailLabel}>{item.name}:</span>
                <span style={styles.detailValue}>{formatAmount(item.amount, 'FCFA')}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
            <button style={styles.actionButton}>
              <Download style={{ height: '0.75rem', width: '0.75rem' }} />
              {language === 'fr' ? 'Télécharger PDF' : 'Download PDF'}
            </button>
            {selectedInvoice.status !== 'paid' && (
              <button style={styles.actionButton}>
                <CreditCard style={{ height: '0.75rem', width: '0.75rem' }} />
                {language === 'fr' ? 'Payer maintenant' : 'Pay now'}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )

  const renderHistory = () => (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <h3 style={styles.cardTitle}>
          <FileText style={{ height: '1.25rem', width: '1.25rem', color: '#10b981' }} />
          {language === 'fr' ? 'Historique des Paiements' : 'Payment History'}
        </h3>
      </div>
      <div style={styles.historyList}>
        {paymentHistory.map((payment, index) => (
          <div key={index} style={styles.historyItem}>
            <div style={styles.historyDetails}>
              <div style={styles.historyTitle}>{payment.description}</div>
              <div style={styles.historyDate}>
                {payment.date} • {payment.method} • {language === 'fr' ? 'Réf:' : 'Ref:'} {payment.reference}
              </div>
            </div>
            <div style={styles.historyAmount}>
              {formatAmount(payment.amount, payment.currency)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.title}>
            {language === 'fr' ? 'Paiements et Frais' : 'Payments & Fees'}
          </h1>
          <p style={styles.subtitle}>
            {language === 'fr' ? 'Élève :' : 'Student:'} Christelle MVE ESSONO | {t('class')}: 3ème B | {language === 'fr' ? 'Année scolaire :' : 'School year:'} 2025–2026
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={styles.viewToggle}>
            <button
              style={{
                ...styles.viewButton,
                ...(currentView === 'overview' ? styles.viewButtonActive : {})
              }}
              onClick={() => setCurrentView('overview')}
            >
              {language === 'fr' ? 'Vue d\'ensemble' : 'Overview'}
            </button>
            <button
              style={{
                ...styles.viewButton,
                ...(currentView === 'invoices' ? styles.viewButtonActive : {})
              }}
              onClick={() => setCurrentView('invoices')}
            >
              {language === 'fr' ? 'Factures' : 'Invoices'}
            </button>
            <button
              style={{
                ...styles.viewButton,
                ...(currentView === 'history' ? styles.viewButtonActive : {})
              }}
              onClick={() => setCurrentView('history')}
            >
              {language === 'fr' ? 'Historique' : 'History'}
            </button>
          </div>
          <Link to="/" style={styles.backButton}>
            <ArrowLeft style={{ height: '1rem', width: '1rem' }} />
            {language === 'fr' ? 'Retour tableau de bord' : 'Back to dashboard'}
          </Link>
        </div>
      </div>

      {/* Content based on current view */}
      {currentView === 'overview' && renderOverview()}
      {currentView === 'invoices' && renderInvoices()}
      {currentView === 'history' && renderHistory()}
    </div>
  )
}