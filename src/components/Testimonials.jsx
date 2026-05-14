import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Adaeze Obi',
    role: 'Estate Manager, Lekki Phase 1',
    avatar: 'AO',
    color: 'bg-green-600',
    quote: 'Before Limbius, we had trucks showing up unpredictably and residents constantly complaining about missed pickups. Now everything is scheduled, tracked, and billed cleanly. The estate practically runs itself.',
  },
  {
    name: 'Engr. Seun Adeyemi',
    role: 'Director of Sanitation, Lagos Island LGA',
    avatar: 'SA',
    color: 'bg-blue-600',
    quote: 'We deployed Limbius across three wards last year and our billing compliance jumped from 52% to 89% in four months. The zone reporting alone has transformed how we plan fleet deployment.',
  },
  {
    name: 'Chiamaka Eze',
    role: 'Resident, GRA Enugu',
    avatar: 'CE',
    color: 'bg-violet-600',
    quote: 'I pay my waste bill the same way I pay for electricity — on my phone in under a minute. I get a notification when the truck is close and a receipt after. It actually works.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 border border-green-100">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Trusted by communities<br />across Nigeria
          </h2>
          <p className="text-slate-500 text-lg">
            From Abuja to Port Harcourt — households, estate managers, and local governments rely on Limbius every day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, avatar, color, quote }) => (
            <div key={name} className="bg-slate-50 rounded-3xl border border-slate-100 p-8 flex flex-col">
              <Quote className="w-8 h-8 text-green-300 mb-5 flex-shrink-0" />
              <p className="text-slate-700 text-sm leading-relaxed flex-1 mb-8">"{quote}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 ${color}`}>
                  {avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{name}</p>
                  <p className="text-xs text-slate-400">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-16 bg-slate-900 rounded-3xl py-10 px-8">
          <p className="text-center text-slate-400 text-sm font-semibold uppercase tracking-widest mb-8">
            Operational Across Nigeria
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Lagos', zones: '14 LGAs' },
              { label: 'Abuja FCT', zones: '6 area councils' },
              { label: 'Port Harcourt', zones: '4 LGAs' },
              { label: 'Enugu', zones: '3 LGAs' },
            ].map(({ label, zones }) => (
              <div key={label}>
                <p className="text-lg font-black text-white">{label}</p>
                <p className="text-xs text-slate-400 mt-1">{zones}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
