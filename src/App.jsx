import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LanguageProvider } from './contexts/LanguageContext'
import { RoleProvider } from './contexts/RoleContext'
import Layout from './components/Layout/Layout'

// Student Pages
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

// Professor Pages
import ProfessorDashboard from './pages/Professor/ProfessorDashboard'
import ProfessorClasses from './pages/Professor/ProfessorClasses'
import ProfessorHomework from './pages/Professor/ProfessorHomework'
import ProfessorExams from './pages/Professor/ProfessorExams'
import ProfessorAttendance from './pages/Professor/ProfessorAttendance'

// Admin Pages
import AdminDashboard from './pages/Admin/AdminDashboard'
import AdminSchoolYear from './pages/Admin/AdminSchoolYear'
import AdminClasses from './pages/Admin/AdminClasses'
import AdminStudents from './pages/Admin/AdminStudents'
import AdminProfessors from './pages/Admin/AdminProfessors'
import AdminReports from './pages/Admin/AdminReports'
import AdminSettings from './pages/Admin/AdminSettings'

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
        <RoleProvider>
          <Router>
            <Layout>
              <Routes>
                {/* Redirect root to student */}
                <Route path="/" element={<Navigate to="/student" replace />} />

                {/* Student Routes */}
                <Route path="/student" element={<Dashboard />} />
                <Route path="/student/profile" element={<Profile />} />
                <Route path="/student/timetable" element={<Timetable />} />
                <Route path="/student/courses" element={<Courses />} />
                <Route path="/student/homework" element={<Homework />} />
                <Route path="/student/exams" element={<Exams />} />
                <Route path="/student/attendance" element={<Attendance />} />
                <Route path="/student/payments" element={<Payments />} />
                <Route path="/student/messaging" element={<Messaging />} />
                <Route path="/student/tutoring" element={<Tutoring />} />
                <Route path="/student/announcements" element={<Announcements />} />
                <Route path="/student/suggestions" element={<Suggestions />} />

                {/* Professor Routes */}
                <Route path="/professor" element={<ProfessorDashboard />} />
                <Route path="/professor/classes" element={<ProfessorClasses />} />
                <Route path="/professor/courses" element={<Courses />} />
                <Route path="/professor/homework" element={<ProfessorHomework />} />
                <Route path="/professor/exams" element={<ProfessorExams />} />
                <Route path="/professor/attendance" element={<ProfessorAttendance />} />
                <Route path="/professor/messaging" element={<Messaging />} />
                <Route path="/professor/announcements" element={<Announcements />} />

                {/* Admin Routes */}
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/schoolyear" element={<AdminSchoolYear />} />
                <Route path="/admin/classes" element={<AdminClasses />} />
                <Route path="/admin/students" element={<AdminStudents />} />
                <Route path="/admin/professors" element={<AdminProfessors />} />
                <Route path="/admin/exams" element={<ProfessorExams />} />
                <Route path="/admin/attendance" element={<ProfessorAttendance />} />
                <Route path="/admin/payments" element={<Payments />} />
                <Route path="/admin/messaging" element={<Messaging />} />
                <Route path="/admin/reports" element={<AdminReports />} />
                <Route path="/admin/announcements" element={<Announcements />} />
                <Route path="/admin/settings" element={<AdminSettings />} />

                {/* Parent Routes - using student components as placeholders */}
                <Route path="/parent" element={<Dashboard />} />
                <Route path="/parent/profile" element={<Profile />} />
                <Route path="/parent/timetable" element={<Timetable />} />
                <Route path="/parent/courses" element={<Courses />} />
                <Route path="/parent/homework" element={<Homework />} />
                <Route path="/parent/exams" element={<Exams />} />
                <Route path="/parent/attendance" element={<Attendance />} />
                <Route path="/parent/payments" element={<Payments />} />
                <Route path="/parent/messaging" element={<Messaging />} />
                <Route path="/parent/announcements" element={<Announcements />} />
              </Routes>
            </Layout>
          </Router>
        </RoleProvider>
      </LanguageProvider>
    </QueryClientProvider>
  )
}

export default App
