// Sample data for the UI demo. The complete project uses live APIs + database.
export const departments = [
  { name: 'Computer Science', students: 820, faculty: 46, attendance: 88 },
  { name: 'Mechanical', students: 540, faculty: 34, attendance: 82 },
  { name: 'Electronics', students: 610, faculty: 38, attendance: 85 },
  { name: 'Commerce', students: 760, faculty: 29, attendance: 79 },
  { name: 'Management (MBA)', students: 300, faculty: 22, attendance: 91 },
]

export const admissions = [
  { label: '2021', admitted: 640 }, { label: '2022', admitted: 712 }, { label: '2023', admitted: 798 },
  { label: '2024', admitted: 865 }, { label: '2025', admitted: 932 }, { label: '2026', admitted: 1018 },
]

export const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
export const slots = ['9:00', '10:00', '11:15', '12:15', '2:00', '3:00']

const S = (code, name, room, faculty, color) => ({ code, name, room, faculty, color })
const DS = S('CS301', 'Data Structures', 'LH-204', 'Prof. R. Menon', 'violet')
const DB = S('CS302', 'DBMS', 'LH-112', 'Dr. S. Kulkarni', 'sky')
const OS = S('CS303', 'Operating Systems', 'LH-204', 'Prof. A. Das', 'emerald')
const CN = S('CS304', 'Computer Networks', 'LH-310', 'Dr. P. Bhatt', 'amber')
const MA = S('MA301', 'Discrete Maths', 'LH-101', 'Dr. K. Rao', 'rose')
const LAB = S('CS3L1', 'DBMS Lab', 'Lab-3', 'Dr. S. Kulkarni', 'slate')

// timetable[day][slot]
export const timetable = {
  Mon: [DS, DB, MA, OS, LAB, LAB],
  Tue: [OS, CN, DS, null, MA, DB],
  Wed: [DB, DS, CN, MA, null, OS],
  Thu: [CN, MA, OS, DS, LAB, LAB],
  Fri: [MA, OS, DB, CN, DS, null],
  Sat: [DS, CN, null, null, null, null],
}

export const results = [
  { id: 1, enr: 'CS23-014', name: 'Aditi Kulkarni', sgpa: 9.42, ds: 'A+', db: 'A+', os: 'A', cn: 'A+', result: 'Pass' },
  { id: 2, enr: 'CS23-022', name: 'Rohan Deshmukh', sgpa: 8.76, ds: 'A', db: 'A', os: 'A', cn: 'B+', result: 'Pass' },
  { id: 3, enr: 'CS23-031', name: 'Simran Kaur', sgpa: 9.08, ds: 'A+', db: 'A', os: 'A+', cn: 'A', result: 'Pass' },
  { id: 4, enr: 'CS23-045', name: 'Farhan Qureshi', sgpa: 6.12, ds: 'C', db: 'B', os: 'F', cn: 'B', result: 'ATKT' },
  { id: 5, enr: 'CS23-052', name: 'Ananya Pillai', sgpa: 8.34, ds: 'B+', db: 'A', os: 'A', cn: 'B+', result: 'Pass' },
  { id: 6, enr: 'CS23-067', name: 'Yash Agarwal', sgpa: 7.58, ds: 'B', db: 'B+', os: 'B+', cn: 'A', result: 'Pass' },
]

export const gradeDist = [
  { label: 'A+', students: 42 }, { label: 'A', students: 68 }, { label: 'B+', students: 51 },
  { label: 'B', students: 29 }, { label: 'C', students: 12 }, { label: 'F', students: 6 },
]
