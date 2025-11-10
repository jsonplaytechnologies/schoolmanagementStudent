import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
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
  X,
  Globe,
  ChevronDown,
  Settings,
  BarChart3,
  DollarSign,
  Building
} from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { useRole, ROLES, ROLE_LABELS } from '../../contexts/RoleContext'

// Student Navigation
const getStudentNavigation = (t) => [
  { name: t('dashboard'), key: 'dashboard', href: '/student', icon: Home },
  { name: t('profile'), key: 'profile', href: '/student/profile', icon: User },
  { name: t('timetable'), key: 'timetable', href: '/student/timetable', icon: Calendar },
  { name: t('courses'), key: 'courses', href: '/student/courses', icon: BookOpen },
  { name: t('homework'), key: 'homework', href: '/student/homework', icon: FileText },
  { name: t('exams'), key: 'exams', href: '/student/exams', icon: GraduationCap },
  { name: t('attendance'), key: 'attendance', href: '/student/attendance', icon: Clock },
  { name: t('payments'), key: 'payments', href: '/student/payments', icon: CreditCard },
  { name: t('messaging'), key: 'messaging', href: '/student/messaging', icon: MessageSquare },
  { name: t('tutoring'), key: 'tutoring', href: '/student/tutoring', icon: Users },
  { name: t('announcements'), key: 'announcements', href: '/student/announcements', icon: Bell },
  { name: t('suggestions'), key: 'suggestions', href: '/student/suggestions', icon: Lightbulb },
  { name: t('reports'), key: 'reports', href: '/student/reports', icon: BarChart3 },
]

// Professor Navigation
const getProfessorNavigation = (t) => [
  { name: t('dashboard'), key: 'dashboard', href: '/professor', icon: Home },
  { name: t('myClasses'), key: 'classes', href: '/professor/classes', icon: Users },
  { name: t('courses'), key: 'courses', href: '/professor/courses', icon: BookOpen },
  { name: t('homework'), key: 'homework', href: '/professor/homework', icon: FileText },
  { name: t('exams'), key: 'exams', href: '/professor/exams', icon: GraduationCap },
  { name: t('attendance'), key: 'attendance', href: '/professor/attendance', icon: Clock },
  { name: t('messaging'), key: 'messaging', href: '/professor/messaging', icon: MessageSquare },
  { name: t('announcements'), key: 'announcements', href: '/professor/announcements', icon: Bell },
]

// Admin Navigation
const getAdminNavigation = (t) => [
  { name: t('dashboard'), key: 'dashboard', href: '/admin', icon: Home },
  { name: t('schoolYear'), key: 'schoolyear', href: '/admin/schoolyear', icon: Calendar },
  { name: t('classes'), key: 'classes', href: '/admin/classes', icon: Building },
  { name: t('students'), key: 'students', href: '/admin/students', icon: Users },
  { name: t('professors'), key: 'professors', href: '/admin/professors', icon: GraduationCap },
  { name: t('exams'), key: 'exams', href: '/admin/exams', icon: FileText },
  { name: t('attendance'), key: 'attendance', href: '/admin/attendance', icon: Clock },
  { name: t('payments'), key: 'payments', href: '/admin/payments', icon: DollarSign },
  { name: t('messaging'), key: 'messaging', href: '/admin/messaging', icon: MessageSquare },
  { name: t('reports'), key: 'reports', href: '/admin/reports', icon: BarChart3 },
  { name: t('announcements'), key: 'announcements', href: '/admin/announcements', icon: Bell },
  { name: t('settings'), key: 'settings', href: '/admin/settings', icon: Settings },
]

// Parent Navigation
const getParentNavigation = (t) => [
  { name: t('dashboard'), key: 'dashboard', href: '/parent', icon: Home },
  { name: t('childProfile'), key: 'profile', href: '/parent/profile', icon: User },
  { name: t('timetable'), key: 'timetable', href: '/parent/timetable', icon: Calendar },
  { name: t('courses'), key: 'courses', href: '/parent/courses', icon: BookOpen },
  { name: t('homework'), key: 'homework', href: '/parent/homework', icon: FileText },
  { name: t('exams'), key: 'exams', href: '/parent/exams', icon: GraduationCap },
  { name: t('attendance'), key: 'attendance', href: '/parent/attendance', icon: Clock },
  { name: t('payments'), key: 'payments', href: '/parent/payments', icon: CreditCard },
  { name: t('messaging'), key: 'messaging', href: '/parent/messaging', icon: MessageSquare },
  { name: t('announcements'), key: 'announcements', href: '/parent/announcements', icon: Bell },
  { name: t('reports'), key: 'reports', href: '/parent/reports', icon: BarChart3 },
]

const getNavigation = (role, t) => {
  switch (role) {
    case ROLES.PROFESSOR:
      return getProfessorNavigation(t)
    case ROLES.ADMIN:
      return getAdminNavigation(t)
    case ROLES.PARENT:
      return getParentNavigation(t)
    case ROLES.STUDENT:
    default:
      return getStudentNavigation(t)
  }
}

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
  },
  languageToggle: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    borderRadius: '0.375rem',
    transition: 'background-color 0.2s'
  },
  languageToggleHover: {
    backgroundColor: '#f3f4f6'
  },
  languageText: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#4b5563'
  },
  roleSelector: {
    position: 'relative',
    display: 'inline-block'
  },
  roleButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 0.75rem',
    border: '1px solid #d1d5db',
    backgroundColor: 'white',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
    transition: 'all 0.2s'
  },
  roleButtonHover: {
    backgroundColor: '#f9fafb',
    borderColor: '#9ca3af'
  },
  roleDropdown: {
    position: 'absolute',
    right: 0,
    marginTop: '0.5rem',
    width: '12rem',
    backgroundColor: 'white',
    borderRadius: '0.375rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e5e7eb',
    zIndex: 50,
    display: 'none'
  },
  roleDropdownVisible: {
    display: 'block'
  },
  roleOption: {
    display: 'block',
    width: '100%',
    padding: '0.75rem 1rem',
    textAlign: 'left',
    fontSize: '0.875rem',
    color: '#374151',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  roleOptionHover: {
    backgroundColor: '#f3f4f6'
  },
  roleOptionActive: {
    backgroundColor: '#dbeafe',
    color: '#1d4ed8',
    fontWeight: '600'
  }
}

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024)
  const { language, toggleLanguage, t } = useLanguage()
  const { role, switchRole } = useRole()

  const navigation = getNavigation(role, t)

  const handleRoleChange = (newRole) => {
    switchRole(newRole)
    setRoleDropdownOpen(false)
    // Navigate to the new role's dashboard
    const roleRoutes = {
      student: '/student',
      professor: '/professor',
      admin: '/admin',
      parent: '/parent'
    }
    navigate(roleRoutes[newRole])
  }

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Handle click outside for role dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (roleDropdownOpen && !event.target.closest('[data-role-selector]')) {
        setRoleDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [roleDropdownOpen])

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
                {t('welcomeMessage')}
              </h2>
            </div>
            <div style={styles.userInfo}>
              {/* Role Selector */}
              <div style={styles.roleSelector} data-role-selector>
                <button
                  onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                  style={styles.roleButton}
                  onMouseEnter={(e) => Object.assign(e.target.style, styles.roleButtonHover)}
                  onMouseLeave={(e) => Object.assign(e.target.style, { backgroundColor: 'white', borderColor: '#d1d5db' })}
                >
                  <span>{ROLE_LABELS[role][language]}</span>
                  <ChevronDown style={{ height: '1rem', width: '1rem' }} />
                </button>
                <div style={{
                  ...styles.roleDropdown,
                  ...(roleDropdownOpen ? styles.roleDropdownVisible : {})
                }}>
                  {Object.values(ROLES).map((roleOption) => (
                    <button
                      key={roleOption}
                      onClick={() => handleRoleChange(roleOption)}
                      style={{
                        ...styles.roleOption,
                        ...(role === roleOption ? styles.roleOptionActive : {})
                      }}
                      onMouseEnter={(e) => {
                        if (role !== roleOption) {
                          Object.assign(e.target.style, styles.roleOptionHover)
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (role !== roleOption) {
                          e.target.style.backgroundColor = 'transparent'
                        }
                      }}
                    >
                      {ROLE_LABELS[roleOption][language]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                style={styles.languageToggle}
                title={language === 'fr' ? 'Switch to English' : 'Passer au français'}
              >
                <Globe style={{ height: '1rem', width: '1rem', color: '#4b5563' }} />
                <span style={styles.languageText}>
                  {language === 'fr' ? 'FR' : 'EN'}
                </span>
              </button>

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