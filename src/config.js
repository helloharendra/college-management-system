import {
  Award, BookOpen, Building, CalendarDays, ClipboardCheck, FileBadge, GraduationCap, IndianRupee, LayoutDashboard, Library, Settings, UserCheck, Users,
} from 'lucide-react'

export const app = {
  name: 'CampusOne',
  tagline: 'College Management System',
  logo: GraduationCap,
  user: { name: 'Dr. Meera Iyer', role: 'Dean of Academics' },
  searchPlaceholder: 'Search student, enrolment no., course…',
}

// Items with `to` are implemented in this demo; others are locked (full version).
export const nav = [
  {
    title: 'Academics',
    items: [
      { label: 'Dashboard', to: '/', icon: LayoutDashboard },
      { label: 'Timetable', to: '/timetable', icon: CalendarDays },
      { label: 'Exams & Results', to: '/results', icon: Award },
    ],
  },
  {
    title: 'College',
    items: [
      { label: 'Admissions & Enrolment', icon: ClipboardCheck },
      { label: 'Departments & Courses', icon: Building },
      { label: 'Students', icon: Users },
      { label: 'Faculty & Staff', icon: UserCheck },
      { label: 'Attendance', icon: BookOpen },
    ],
  },
  {
    title: 'Administration',
    items: [
      { label: 'Fees & Scholarships', icon: IndianRupee },
      { label: 'Library', icon: Library },
      { label: 'Marksheets & Certificates', icon: FileBadge },
      { label: 'Settings', icon: Settings },
    ],
  },
]
