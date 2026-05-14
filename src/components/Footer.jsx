import { Truck } from 'lucide-react'
import AppBadges from './AppBadges'

const links = {
  Platform: ['Features', 'How It Works', 'Pricing', 'Integrations'],
  Company: ['About Us', 'Careers', 'Press', 'Blog'],
  Support: ['Help Centre', 'Contact Us', 'Status Page', 'Privacy Policy'],
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand column — full width on mobile */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-green-600 rounded-xl flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <div className="leading-none">
                <span className="text-base font-extrabold text-white tracking-tight">Limbius</span>
                <p className="text-[9px] font-semibold text-green-500 uppercase tracking-[0.15em]">Waste Management</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-500 mb-5">
              Synchronising refuse collection and billing for Nigerian households and local governments.
            </p>
            <div className="flex gap-3 mb-6">
              {['𝕏', 'in', 'f', '▶'].map(s => (
                <a key={s} href="#" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center text-xs text-slate-400 hover:bg-green-600 hover:text-white transition-colors">
                  {s}
                </a>
              ))}
            </div>
            <p className="text-xs font-bold text-white uppercase tracking-widest mb-3">Download the App</p>
            <AppBadges className="!justify-start" />
          </div>

          {/* Link columns — all 3 in one row on mobile */}
          <div className="md:contents grid grid-cols-3 gap-4 md:gap-0">
            {Object.entries(links).map(([section, items]) => (
              <div key={section}>
                <p className="text-xs font-bold text-white uppercase tracking-widest mb-5">{section}</p>
                <ul className="space-y-3">
                  {items.map(item => (
                    <li key={item}>
                      <a href="#" className="text-sm text-slate-500 hover:text-green-400 transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © 2026 Limbius Technologies Ltd. All rights reserved. RC 1234567
          </p>
          <div className="flex gap-5">
            {['Terms', 'Privacy', 'Cookies'].map(l => (
              <a key={l} href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
