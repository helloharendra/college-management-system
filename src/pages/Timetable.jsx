import { useState } from 'react'
import { Coffee, MapPin, Printer } from 'lucide-react'
import { PageHeader, Segmented } from '../components/ui'
import { useContact } from '../components/ContactModal'
import { days, slots, timetable } from '../data'

const colors = {
  violet: 'bg-violet-50 text-violet-800 ring-violet-200',
  sky: 'bg-sky-50 text-sky-800 ring-sky-200',
  emerald: 'bg-emerald-50 text-emerald-800 ring-emerald-200',
  amber: 'bg-amber-50 text-amber-800 ring-amber-200',
  rose: 'bg-rose-50 text-rose-800 ring-rose-200',
  slate: 'bg-slate-100 text-slate-700 ring-slate-200',
}

export default function Timetable() {
  const { openContact } = useContact()
  const [sec, setSec] = useState('CSE 3-A')
  return (
    <>
      <PageHeader title="Weekly timetable" subtitle="B.Tech Computer Science · Semester 5"
        actions={<><Segmented options={['CSE 3-A', 'CSE 3-B', 'CSE 3-C']} value={sec} onChange={setSec} /><button onClick={() => openContact('Timetable Generator & PDF Export')} className="btn-ghost"><Printer className="h-4 w-4" /> Print</button></>} />
      <div className="card scrollbar-thin overflow-x-auto p-4 animate-fade-up">
        <div className="grid min-w-[900px] grid-cols-[80px_repeat(6,1fr)] gap-2">
          <div />
          {slots.map((s) => <div key={s} className="pb-2 text-center text-xs font-semibold text-slate-400">{s}</div>)}
          {days.map((d) => (
            <div key={d} className="contents">
              <div className="grid place-items-center rounded-xl bg-slate-900 text-sm font-bold text-white">{d}</div>
              {timetable[d].map((c, i) =>
                c ? (
                  <button key={i} onClick={() => openContact(`${c.name} – class details`)} className={`rounded-xl p-3 text-left ring-1 ring-inset transition hover:-translate-y-0.5 hover:shadow-md ${colors[c.color]}`}>
                    <p className="text-[11px] font-bold opacity-70">{c.code}</p>
                    <p className="text-sm font-semibold leading-tight">{c.name}</p>
                    <p className="mt-2 flex items-center gap-1 text-[11px] opacity-70"><MapPin className="h-3 w-3" />{c.room} · {c.faculty.split(' ').slice(-1)}</p>
                  </button>
                ) : (
                  <div key={i} className="grid place-items-center rounded-xl border-2 border-dashed border-slate-200 text-slate-300"><Coffee className="h-4 w-4" /></div>
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
