# School Management SaaS - Student Panel

A modern, responsive web application for students to manage their academic life, built with React, Vite, and Tailwind CSS.

## Features

This student panel includes the following modules:

- **Dashboard**: Overview of academic progress, today's classes, upcoming exams, and important notifications
- **Profile**: Personal information and documents management
- **Timetable**: Weekly and monthly class schedules with export functionality
- **Courses**: Detailed view of subjects, performance statistics, and course content
- **Homework**: Centralized homework management with submission capabilities
- **Exams & Results**: Comprehensive evaluation tracking and academic performance
- **Attendance**: Attendance monitoring with detailed analytics
- **Payments**: School fee management and payment tracking
- **Messaging**: Communication platform with teachers and administration
- **Tutoring**: Tutoring session scheduling and management
- **Announcements**: School-wide news and events
- **Suggestions**: Platform improvement feedback system

## Student Persona

The interface is designed for students like "Christelle MVE ESSONO" in "3ème B", providing an intuitive and personalized academic management experience.

## Tech Stack

- **React 19.1.1** - Modern JavaScript library for building user interfaces
- **Vite 7.1.7** - Fast build tool and development server
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **React Router DOM 7.9** - Client-side routing
- **React Query (TanStack)** - Server state management
- **Lucide React** - Beautiful icon library
- **Axios** - HTTP client for API requests
- **Date-fns** - Date utility library

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+ (current: 20.14.0 - upgrade recommended)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout/         # Layout components
│   ├── Cards/          # Card components
│   ├── Forms/          # Form components
│   └── UI/             # Base UI components
├── pages/              # Page components
│   ├── Dashboard/      # Dashboard module
│   ├── Profile/        # Profile module
│   ├── Timetable/      # Timetable module
│   ├── Courses/        # Courses module
│   ├── Homework/       # Homework module
│   ├── Exams/          # Exams module
│   ├── Attendance/     # Attendance module
│   ├── Payments/       # Payments module
│   ├── Messaging/      # Messaging module
│   ├── Tutoring/       # Tutoring module
│   ├── Announcements/ # Announcements module
│   └── Suggestions/    # Suggestions module
├── hooks/              # Custom React hooks
├── services/           # API services
├── utils/              # Utility functions
├── context/            # React context providers
└── assets/             # Static assets
```

## Design Principles

- **Simplicity and Clarity**: Uncluttered interface with clear information hierarchy
- **Role-Based Personalization**: Tailored dashboard showing only relevant information
- **Responsive Design**: Fully accessible on desktop, tablet, and mobile devices
- **Card-Based Layout**: Information presented in digestible chunks
- **French/English Support**: Culturally adapted for African and Gabonese users

## Development Notes

- The application uses the latest Vite configuration with React 19
- Tailwind CSS is configured with custom color palette for school branding
- All components are functional components using React hooks
- The project follows modern React best practices and patterns

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.
