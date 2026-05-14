import { CheckCircle, Zap } from 'lucide-react'

const plans = [
  {
    name: 'Resident',
    price: '₦2,500',
    period: '/month',
    desc: 'For individual households and apartments.',
    color: 'border-slate-200',
    badge: null,
    cta: 'Get Started',
    ctaStyle: 'border border-green-600 text-green-600 hover:bg-green-50',
    features: [
      'Bi-weekly refuse collection',
      'SMS & email pickup notifications',
      'Monthly itemised invoice',
      'Card, USSD & bank transfer payment',
      'Complaint & request portal',
    ],
  },
  {
    name: 'Estate / Commercial',
    price: '₦18,000',
    period: '/month',
    desc: 'For residential estates, offices, and businesses.',
    color: 'border-green-500 ring-2 ring-green-500/20',
    badge: 'Most Popular',
    cta: 'Start Free Trial',
    ctaStyle: 'bg-green-600 text-white hover:bg-green-700 shadow-md',
    features: [
      'Weekly + on-demand collection',
      'Up to 5 designated pickup points',
      'Bulk & hazardous waste removal',
      'Fleet ETAs and pickup receipts',
      'Priority customer support',
      'Monthly usage reports',
    ],
  },
  {
    name: 'LGA / Government',
    price: 'Custom',
    period: '',
    desc: 'For Local Government Authorities managing entire wards.',
    color: 'border-slate-200',
    badge: null,
    cta: 'Contact Sales',
    ctaStyle: 'border border-slate-300 text-slate-700 hover:bg-slate-50',
    features: [
      'Full fleet management & dispatch',
      'Zone-wide billing automation',
      'NESREA compliance reporting',
      'Multi-ward route optimisation',
      'Dedicated account manager',
      'API integration support',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 border border-green-100">
            Pricing
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-500 text-lg">
            No hidden fees. No surprises. Pay only for what you need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map(({ name, price, period, desc, color, badge, cta, ctaStyle, features }) => (
            <div key={name} className={`relative bg-white rounded-3xl border ${color} p-8 flex flex-col`}>
              {badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1.5 bg-green-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow">
                    <Zap className="w-3 h-3" /> {badge}
                  </span>
                </div>
              )}

              <div className="mb-6 pt-2">
                <h3 className="text-lg font-bold text-slate-900 mb-1">{name}</h3>
                <p className="text-slate-400 text-sm">{desc}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-black text-slate-900">{price}</span>
                <span className="text-slate-400 text-sm font-medium">{period}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {features.map(f => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${ctaStyle}`}>
                {cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
