import { Award, FileBadge, Percent, TrendingUp } from 'lucide-react'
import { Badge, Card, DataTable, PageHeader, Person, StatCard } from '../components/ui'
import { BarsChart } from '../components/Charts'
import { useContact } from '../components/ContactModal'
import { gradeDist, results } from '../data'

const gradeTone = (g) => (g.startsWith('A') ? 'green' : g.startsWith('B') ? 'blue' : g === 'F' ? 'red' : 'amber')

export default function Results() {
  const { openContact } = useContact()
  return (
    <>
      <PageHeader title="Exams & results" subtitle="Semester 5 · Mid-semester examination"
        actions={<button onClick={() => openContact('Marksheet & Certificate Generation')} className="btn-primary"><FileBadge className="h-4 w-4" /> Generate marksheets</button>} />
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Pass percentage" value="96.8%" delta="1.9%" icon={Percent} tone="emerald" />
        <StatCard label="Class average SGPA" value="8.21" delta="0.14" icon={TrendingUp} />
        <StatCard label="Distinctions" value="42" icon={Award} tone="amber" />
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Card title="Grade distribution" subtitle="Data Structures (CS301)"><BarsChart data={gradeDist} series={[{ key: 'students', name: 'Students' }]} height={260} /></Card>
        <Card title="Result sheet · CSE 3-A" bodyClass="" className="xl:col-span-2">
          <DataTable
            rows={results}
            onRowClick={(r) => openContact(`${r.name} – detailed marksheet`)}
            columns={[
              { key: 'name', label: 'Student', render: (r) => <Person name={r.name} sub={r.enr} /> },
              ...['ds', 'db', 'os', 'cn'].map((k) => ({ key: k, label: k.toUpperCase(), render: (r) => <Badge tone={gradeTone(r[k])} dot={false}>{r[k]}</Badge> })),
              { key: 'sgpa', label: 'SGPA', render: (r) => <span className="font-bold text-slate-900">{r.sgpa.toFixed(2)}</span> },
              { key: 'result', label: 'Result', render: (r) => <Badge tone={r.result === 'Pass' ? 'green' : 'red'}>{r.result}</Badge> },
            ]}
          />
        </Card>
      </div>
    </>
  )
}
