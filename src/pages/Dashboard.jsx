import { Building, GraduationCap, IndianRupee, UserCheck } from 'lucide-react'
import { Card, DataTable, Hero, HeroStat, Progress, StatCard } from '../components/ui'
import { BarsChart } from '../components/Charts'
import { admissions, departments } from '../data'

export default function Dashboard() {
  return (
    <>
      <Hero
        eyebrow="Odd semester · 2026–27"
        title="Welcome back, Dr. Iyer 🎓"
        subtitle="3,030 students across 5 departments. Mid-semester exams are 64% evaluated."
        side={<div className="grid grid-cols-2 gap-3"><HeroStat label="NAAC grade" value="A+" /><HeroStat label="Placement" value="87%" /></div>}
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Enrolled students" value="3,030" delta="9.2%" icon={GraduationCap} />
        <StatCard label="Faculty members" value="169" delta="7" icon={UserCheck} tone="sky" />
        <StatCard label="Departments" value="5" icon={Building} tone="amber" hint="18 programmes" />
        <StatCard label="Fee collected" value="₹6.84 Cr" delta="11.4%" icon={IndianRupee} tone="emerald" />
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-5">
        <Card title="Admissions by year" className="xl:col-span-2"><BarsChart data={admissions} series={[{ key: 'admitted', name: 'Admitted' }]} /></Card>
        <Card title="Departments" bodyClass="" className="xl:col-span-3">
          <DataTable
            rows={departments}
            columns={[
              { key: 'name', label: 'Department', render: (d) => <span className="font-semibold text-slate-800">{d.name}</span> },
              { key: 'students', label: 'Students' },
              { key: 'faculty', label: 'Faculty' },
              { key: 'ratio', label: 'Ratio', render: (d) => `1:${Math.round(d.students / d.faculty)}` },
              { key: 'attendance', label: 'Attendance', render: (d) => <div className="w-32"><p className="mb-1 text-xs font-semibold">{d.attendance}%</p><Progress value={d.attendance} tone={d.attendance < 80 ? 'amber' : 'brand'} /></div> },
            ]}
          />
        </Card>
      </div>
    </>
  )
}
