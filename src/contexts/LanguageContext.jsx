import React, { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

const translations = {
  fr: {
    // Navigation
    dashboard: 'Tableau de bord',
    profile: 'Mon Profil',
    timetable: 'Emploi du temps',
    courses: 'Cours',
    homework: 'Devoirs',
    exams: 'Examens & Notes',
    attendance: 'Présences',
    payments: 'Paiements',
    messaging: 'Messages',
    tutoring: 'Soutien scolaire',
    announcements: 'Annonces',
    suggestions: 'Améliorations',

    // Common
    welcome: 'Bienvenue',
    class: 'Classe',
    teacher: 'Professeur',
    subject: 'Matière',
    date: 'Date',
    time: 'Heure',
    status: 'Statut',
    actions: 'Actions',
    view: 'Voir',
    download: 'Télécharger',
    submit: 'Soumettre',
    cancel: 'Annuler',
    save: 'Enregistrer',
    edit: 'Modifier',
    delete: 'Supprimer',
    back: 'Retour',
    next: 'Suivant',
    previous: 'Précédent',
    search: 'Rechercher',
    filter: 'Filtrer',

    // Dashboard
    welcomeMessage: 'Bienvenue, Christelle MVE ESSONO',
    todayClasses: "Cours d'aujourd'hui",
    upcomingExams: 'Examens à venir',
    recentMessages: 'Messages récents',
    academicSummary: 'Résumé académique',
    attendanceRate: 'Taux de présence',
    pendingPayments: 'Paiements en attente',
    nextTutoring: 'Prochain tutorat',
    attentionPoints: "Points d'attention",

    // Stats
    trimesterAverage: 'Moyenne trimestre',
    yearAverage: 'Moyenne annuelle',
    classRank: 'Classement',
    generalAverage: 'Moyenne générale',
    absences: 'Absences',
    delays: 'Retards',

    // Time
    monday: 'Lundi',
    tuesday: 'Mardi',
    wednesday: 'Mercredi',
    thursday: 'Jeudi',
    friday: 'Vendredi',
    saturday: 'Samedi',
    sunday: 'Dimanche',

    // Months
    january: 'Janvier',
    february: 'Février',
    march: 'Mars',
    april: 'Avril',
    may: 'Mai',
    june: 'Juin',
    july: 'Juillet',
    august: 'Août',
    september: 'Septembre',
    october: 'Octobre',
    november: 'Novembre',
    december: 'Décembre'
  },

  en: {
    // Navigation
    dashboard: 'Dashboard',
    profile: 'My Profile',
    timetable: 'Timetable',
    courses: 'Courses',
    homework: 'Homework',
    exams: 'Exams & Grades',
    attendance: 'Attendance',
    payments: 'Payments',
    messaging: 'Messages',
    tutoring: 'Tutoring',
    announcements: 'Announcements',
    suggestions: 'Suggestions',

    // Common
    welcome: 'Welcome',
    class: 'Class',
    teacher: 'Teacher',
    subject: 'Subject',
    date: 'Date',
    time: 'Time',
    status: 'Status',
    actions: 'Actions',
    view: 'View',
    download: 'Download',
    submit: 'Submit',
    cancel: 'Cancel',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    search: 'Search',
    filter: 'Filter',

    // Dashboard
    welcomeMessage: 'Welcome, Christelle MVE ESSONO',
    todayClasses: "Today's Classes",
    upcomingExams: 'Upcoming Exams',
    recentMessages: 'Recent Messages',
    academicSummary: 'Academic Summary',
    attendanceRate: 'Attendance Rate',
    pendingPayments: 'Pending Payments',
    nextTutoring: 'Next Tutoring',
    attentionPoints: 'Attention Points',

    // Stats
    trimesterAverage: 'Trimester Average',
    yearAverage: 'Year Average',
    classRank: 'Class Rank',
    generalAverage: 'General Average',
    absences: 'Absences',
    delays: 'Delays',

    // Time
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',

    // Months
    january: 'January',
    february: 'February',
    march: 'March',
    april: 'April',
    may: 'May',
    june: 'June',
    july: 'July',
    august: 'August',
    september: 'September',
    october: 'October',
    november: 'November',
    december: 'December'
  }
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'fr'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr')
  }

  const t = (key) => {
    return translations[language][key] || key
  }

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}