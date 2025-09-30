import React, { createContext, useState, useContext } from 'react'

const RoleContext = createContext()

export const ROLES = {
  STUDENT: 'student',
  PROFESSOR: 'professor',
  ADMIN: 'admin',
  PARENT: 'parent'
}

export const ROLE_LABELS = {
  [ROLES.STUDENT]: {
    fr: 'Étudiant',
    en: 'Student'
  },
  [ROLES.PROFESSOR]: {
    fr: 'Professeur',
    en: 'Professor'
  },
  [ROLES.ADMIN]: {
    fr: 'Administrateur',
    en: 'Administrator'
  },
  [ROLES.PARENT]: {
    fr: 'Parent',
    en: 'Parent'
  }
}

export function RoleProvider({ children }) {
  const [role, setRole] = useState(ROLES.STUDENT)

  const switchRole = (newRole) => {
    if (Object.values(ROLES).includes(newRole)) {
      setRole(newRole)
    }
  }

  return (
    <RoleContext.Provider value={{ role, switchRole }}>
      {children}
    </RoleContext.Provider>
  )
}

export function useRole() {
  const context = useContext(RoleContext)
  if (context === undefined) {
    throw new Error('useRole must be used within a RoleProvider')
  }
  return context
}
