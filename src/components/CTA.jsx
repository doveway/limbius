import { ArrowRight, Mail } from 'lucide-react'
import AppBadges from './AppBadges'

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-green-700 to-emerald-600 relative overflow-hidden">
      {/* Decoration circles */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-white rounded-full opacity-5 pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white rounded-full opacity-5 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-5 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-5">
          Ready to transform waste<br />management in your city?
        </h2>
        <p className="text-green-100 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Join over 120 LGAs and 312,000 households already using Limbius. Start your free trial today — no credit card required.
        </p>

        {/* Email signup */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
          <div className="flex-1 relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="email"
              placeholder="Enter your work email"
              className="w-full bg-white border border-white/20 text-slate-800 placeholder:text-slate-400 text-sm font-medium pl-10 pr-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/40"
            />
          </div>
          <button className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3.5 rounded-xl transition-all hover:shadow-xl whitespace-nowrap">
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-green-200 text-xs mb-10">
          Free for 30 days · No credit card needed · Cancel anytime
        </p>

        {/* Divider */}
        <div className="flex items-center gap-4 max-w-xs mx-auto mb-8">
          <div className="flex-1 h-px bg-white/20" />
          <span className="text-white/50 text-xs font-semibold uppercase tracking-widest">or get the app</span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        <AppBadges />
      </div>
    </section>
  )
}
