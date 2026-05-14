import { Truck, ReceiptText, Map, Bell, ShieldCheck, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Truck,
    color: 'bg-green-100 text-green-700',
    title: 'Fleet Coordination',
    desc: 'Dispatch and monitor your entire fleet of collection trucks across every route in real time. Assign zones, track pickups, and optimise fuel usage automatically.',
  },
  {
    icon: ReceiptText,
    color: 'bg-blue-100 text-blue-700',
    title: 'Automated Billing',
    desc: 'Generate and send monthly invoices to every registered household automatically. Residents receive itemised bills via SMS, email, or the Limbius app.',
  },
  {
    icon: Map,
    color: 'bg-violet-100 text-violet-700',
    title: 'Route Optimisation',
    desc: 'AI-powered routing calculates the most efficient collection paths per zone, reducing trip time and operational costs for Local Government Authorities.',
  },
  {
    icon: Bell,
    color: 'bg-amber-100 text-amber-700',
    title: 'Pickup Notifications',
    desc: 'Households get automated reminders 24 hours before scheduled pickup. Missed collections are flagged and rescheduled without manual intervention.',
  },
  {
    icon: ShieldCheck,
    color: 'bg-red-100 text-red-700',
    title: 'Compliance & Reporting',
    desc: 'Built-in regulatory reporting tools help LGAs meet NESREA and state environmental standards. Export audit-ready reports in one click.',
  },
  {
    icon: BarChart3,
    color: 'bg-teal-100 text-teal-700',
    title: 'Revenue Insights',
    desc: 'Track collection rates, outstanding payments, and revenue trends by zone, ward, or LGA — with monthly summaries delivered straight to decision-makers.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 border border-green-100">
            Platform Features
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Everything you need to run<br />a modern waste service
          </h2>
          <p className="text-slate-500 text-lg">
            From truck dispatch to resident billing — Limbius handles the entire waste management lifecycle on one platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, color, title, desc }) => (
            <div key={title}
              className="group p-7 rounded-2xl border border-slate-100 hover:border-green-200 hover:shadow-lg hover:shadow-green-50 transition-all duration-300 bg-white">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${color} transition-transform group-hover:scale-110 duration-300`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
