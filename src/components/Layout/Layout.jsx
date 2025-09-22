import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Home,
  User,
  Calendar,
  BookOpen,
  FileText,
  GraduationCap,
  Clock,
  CreditCard,
  MessageSquare,
  Users,
  Bell,
  Lightbulb,
  Menu,
  X
} from 'lucide-react'

const navigation = [
  { name: 'Tableau de bord', href: '/', icon: Home },
  { name: 'Mon Profil', href: '/profile', icon: User },
  { name: 'Emploi du temps', href: '/timetable', icon: Calendar },
  { name: 'Cours', href: '/courses', icon: BookOpen },
  { name: 'Devoirs', href: '/homework', icon: FileText },
  { name: 'Examens & Notes', href: '/exams', icon: GraduationCap },
  { name: 'Présences', href: '/attendance', icon: Clock },
  { name: 'Paiements', href: '/payments', icon: CreditCard },
  { name: 'Messages', href: '/messaging', icon: MessageSquare },
  { name: 'Soutien scolaire', href: '/tutoring', icon: Users },
  { name: 'Annonces', href: '/announcements', icon: Bell },
  { name: 'Améliorations', href: '/suggestions', icon: Lightbulb },
]

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f9fafb'
  },
  mobileOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 50,
    display: 'none'
  },
  mobileOverlayVisible: {
    display: 'block'
  },
  overlayBackground: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(75, 85, 99, 0.75)'
  },
  mobileSidebar: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    width: '16rem',
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  sidebarHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '4rem',
    padding: '0 1rem',
    borderBottom: '1px solid #e5e7eb'
  },
  sidebarTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#111827'
  },
  closeButton: {
    padding: '0.5rem',
    borderRadius: '0.375rem',
    color: '#9ca3af',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer'
  },
  navigation: {
    flex: 1,
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  },
  desktopSidebar: {
    display: 'none',
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    width: '16rem',
    flexDirection: 'column'
  },
  desktopSidebarVisible: {
    display: 'flex'
  },
  sidebarContent: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minHeight: 0,
    backgroundColor: 'white',
    borderRight: '1px solid #e5e7eb'
  },
  desktopNav: {
    flex: 1,
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
    overflowY: 'auto'
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 0.75rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    borderRadius: '0.375rem',
    textDecoration: 'none',
    transition: 'all 0.2s'
  },
  navLinkActive: {
    backgroundColor: '#dbeafe',
    color: '#1d4ed8'
  },
  navLinkInactive: {
    color: '#4b5563'
  },
  navIcon: {
    marginRight: '0.75rem',
    height: '1.25rem',
    width: '1.25rem'
  },
  mainContent: {
    paddingLeft: 0
  },
  mainContentDesktop: {
    paddingLeft: '16rem'
  },
  topBar: {
    position: 'sticky',
    top: 0,
    zIndex: 40,
    display: 'flex',
    height: '4rem',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottom: '1px solid #e5e7eb',
    padding: '0 1rem'
  },
  menuButton: {
    padding: '0.5rem',
    borderRadius: '0.375rem',
    color: '#9ca3af',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    display: 'block'
  },
  menuButtonHidden: {
    display: 'none'
  },
  topBarContent: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between'
  },
  greeting: {
    display: 'flex',
    alignItems: 'center'
  },
  greetingText: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#111827',
    marginLeft: '1rem'
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  classInfo: {
    fontSize: '0.875rem',
    color: '#6b7280'
  },
  avatar: {
    height: '2rem',
    width: '2rem',
    borderRadius: '50%',
    backgroundColor: '#0ea5e9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarText: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: 'white'
  },
  pageContent: {
    flex: 1,
    padding: '1rem'
  }
}

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024)

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div style={styles.container}>
      {/* Mobile sidebar overlay */}
      <div style={{
        ...styles.mobileOverlay,
        ...(sidebarOpen && !isDesktop ? styles.mobileOverlayVisible : {})
      }}>
        <div style={styles.overlayBackground} onClick={() => setSidebarOpen(false)} />
        <div style={styles.mobileSidebar}>
          <div style={styles.sidebarHeader}>
            <h1 style={styles.sidebarTitle}>École SaaS</h1>
            <button
              onClick={() => setSidebarOpen(false)}
              style={styles.closeButton}
            >
              <X style={{ height: '1.5rem', width: '1.5rem' }} />
            </button>
          </div>
          <nav style={styles.navigation}>
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setSidebarOpen(false)}
                  style={{
                    ...styles.navLink,
                    ...(isActive ? styles.navLinkActive : styles.navLinkInactive)
                  }}
                >
                  <Icon style={styles.navIcon} />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div style={{
        ...styles.desktopSidebar,
        ...(isDesktop ? styles.desktopSidebarVisible : {})
      }}>
        <div style={styles.sidebarContent}>
          <div style={styles.sidebarHeader}>
            <h1 style={styles.sidebarTitle}>École SaaS</h1>
          </div>
          <nav style={styles.desktopNav}>
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  style={{
                    ...styles.navLink,
                    ...(isActive ? styles.navLinkActive : styles.navLinkInactive)
                  }}
                >
                  <Icon style={styles.navIcon} />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div style={isDesktop ? styles.mainContentDesktop : styles.mainContent}>
        {/* Top navigation */}
        <div style={styles.topBar}>
          <button
            onClick={() => setSidebarOpen(true)}
            style={{
              ...styles.menuButton,
              ...(isDesktop ? styles.menuButtonHidden : {})
            }}
          >
            <Menu style={{ height: '1.5rem', width: '1.5rem' }} />
          </button>

          <div style={styles.topBarContent}>
            <div style={styles.greeting}>
              <h2 style={{
                ...styles.greetingText,
                marginLeft: isDesktop ? 0 : '1rem'
              }}>
                Bonjour, Christelle MVE ESSONO
              </h2>
            </div>
            <div style={styles.userInfo}>
              <span style={styles.classInfo}>3ème B</span>
              <div style={styles.avatar}>
                <span style={styles.avatarText}>CM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main style={styles.pageContent}>
          {children}
        </main>
      </div>
    </div>
  )
}