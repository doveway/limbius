import { CreditCard, Smartphone, Building2, CheckCircle, ArrowRight } from 'lucide-react'

const payMethods = [
  { icon: CreditCard, label: 'Debit / Credit Card', sub: 'Visa, Mastercard, Verve' },
  { icon: Smartphone, label: 'USSD', sub: '*737# *919# *966#' },
  { icon: Building2, label: 'Bank Transfer', sub: 'Any Nigerian bank' },
]

export default function BillingSection() {
  return (
    <section id="billing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — invoice card illustration */}
          <div className="order-2 lg:order-1 relative">

            {/* Sample invoice card */}
            <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden max-w-sm mx-auto lg:mx-0">

              {/* Card header */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-500 px-7 py-6 text-white">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs font-semibold uppercase tracking-widest opacity-80">Monthly Invoice</p>
                  <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">May 2026</span>
                </div>
                <p className="text-3xl font-black mt-2">₦4,500.00</p>
                <p className="text-xs opacity-70 mt-1">14 Adeola Odeku, Victoria Island, Lagos</p>
              </div>

              {/* Breakdown */}
              <div className="px-7 py-5 space-y-3">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Charges Breakdown</p>
                {[
                  ['Weekly collection service (4×)', '₦3,000'],
                  ['Bulk waste supplement', '₦800'],
                  ['Recycling program fee', '₦400'],
                  ['LGA environmental levy', '₦300'],
                ].map(([label, amount]) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">{label}</span>
                    <span className="text-sm font-semibold text-slate-800">{amount}</span>
                  </div>
                ))}
                <div className="border-t border-dashed border-slate-200 pt-3 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-800">Total Due</span>
                  <span className="text-sm font-black text-green-600">₦4,500.00</span>
                </div>
              </div>

              {/* Payment status */}
              <div className="mx-7 mb-5">
                <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-green-700">Payment Received</p>
                    <p className="text-xs text-green-600">Confirmed 2 May 2026 · Card ••••3847</p>
                  </div>
                </div>
              </div>

              {/* Invoice ID + ref */}
              <div className="bg-slate-50 px-7 py-4 flex items-center justify-between border-t border-slate-100">
                <span className="text-xs text-slate-400 font-mono">INV-2026-05-0081</span>
                <button className="text-xs font-semibold text-green-600 hover:underline">Download PDF</button>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 lg:right-4 bg-slate-900 text-white rounded-2xl shadow-xl px-5 py-3 text-center">
              <p className="text-2xl font-black text-green-400">₦2.1B</p>
              <p className="text-xs font-semibold opacity-70 mt-0.5">billed in 2025</p>
            </div>
          </div>

          {/* Right — copy */}
          <div className="order-1 lg:order-2">
            <span className="inline-block bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-green-100">
              Billing & Payments
            </span>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight mb-5">
              Transparent bills. Multiple payment options. Zero hassle.
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Every household on Limbius receives a clear, itemised invoice each month. Residents can see exactly what they're paying for — and pay instantly through any channel they prefer.
            </p>

            {/* Payment methods */}
            <div className="space-y-3 mb-8">
              {payMethods.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-green-200 transition-colors">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">{label}</p>
                    <p className="text-xs text-slate-400">{sub}</p>
                  </div>
                  <CheckCircle className="w-4 h-4 text-green-500 ml-auto flex-shrink-0" />
                </div>
              ))}
            </div>

            <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-sm transition-all hover:shadow-md">
              See Billing Features <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
