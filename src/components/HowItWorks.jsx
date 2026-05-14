import { UserPlus, Map, Truck, ReceiptText } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: UserPlus,
    color: 'bg-green-500',
    title: 'Register Your Household',
    desc: 'Sign up with your address and zone. Limbius instantly creates your billing profile and assigns you to the nearest collection route.',
  },
  {
    step: '02',
    icon: Map,
    color: 'bg-blue-500',
    title: 'Get Added to a Route',
    desc: "Our system maps your location and schedules regular weekly or bi-weekly pickups. You'll receive your first collection date by SMS.",
  },
  {
    step: '03',
    icon: Truck,
    color: 'bg-violet-500',
    title: 'We Collect Your Waste',
    desc: 'A Limbius truck arrives on schedule. You get a real-time notification when the truck is 30 minutes away — and a confirmation once collected.',
  },
  {
    step: '04',
    icon: ReceiptText,
    color: 'bg-amber-500',
    title: 'Receive & Pay Your Bill',
    desc: 'An itemised invoice arrives at the end of the month. Pay by card, USSD, or bank transfer — all from your phone in under 60 seconds.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-white/10 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Up and running in four simple steps
          </h2>
          <p className="text-slate-400 text-lg">
            Whether you're a household, estate manager, or Local Government Authority — getting started with Limbius takes minutes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ step, icon: Icon, color, title, desc }, i) => (
            <div key={step} className="relative flex flex-col">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(50%+2rem)] right-[-50%] h-0.5 bg-white/10 z-0" />
              )}
              <div className="relative z-10 bg-slate-800 border border-white/10 rounded-2xl p-7 flex flex-col h-full hover:border-white/20 transition-colors">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-4xl font-black text-white/10 mb-2 leading-none">{step}</span>
                <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
