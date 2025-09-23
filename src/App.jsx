import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LanguageProvider } from './contexts/LanguageContext'
import Layout from './components/Layout/Layout'
import Dashboard from './pages/Dashboard/Dashboard'
import Profile from './pages/Profile/Profile'
import Timetable from './pages/Timetable/Timetable'
import Courses from './pages/Courses/Courses'
import Homework from './pages/Homework/Homework'
import Exams from './pages/Exams/Exams'
import Attendance from './pages/Attendance/Attendance'
import Payments from './pages/Payments/Payments'
import Messaging from './pages/Messaging/Messaging'
import Tutoring from './pages/Tutoring/Tutoring'
import Announcements from './pages/Announcements/Announcements'
import Suggestions from './pages/Suggestions/Suggestions'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/timetable" element={<Timetable />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/homework" element={<Homework />} />
              <Route path="/exams" element={<Exams />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/messaging" element={<Messaging />} />
              <Route path="/tutoring" element={<Tutoring />} />
              <Route path="/announcements" element={<Announcements />} />
              <Route path="/suggestions" element={<Suggestions />} />
            </Routes>
          </Layout>
        </Router>
      </LanguageProvider>
    </QueryClientProvider>
  )
}

export default App
