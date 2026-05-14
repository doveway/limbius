import { useState } from 'react'
import { Truck, Menu, X } from 'lucide-react'

const links = ['Features', 'How It Works', 'Billing', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-16">

        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-green-600 rounded-xl flex items-center justify-center">
            <Truck className="w-5 h-5 text-white" />
          </div>
          <div className="leading-none">
            <span className="text-lg font-extrabold text-slate-900 tracking-tight">Limbius</span>
            <p className="text-[9px] font-semibold text-green-600 uppercase tracking-[0.15em]">Waste Management</p>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-slate-600 hover:text-green-600 transition-colors">
              {l}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm font-semibold text-slate-700 px-4 py-2 rounded-lg hover:text-green-700 transition-colors">
            Sign In
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm transition-all hover:shadow-md">
            Get Started Free
          </button>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg text-slate-500">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-5 pb-5">
          <div className="pt-4 space-y-1">
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-slate-700 py-2.5 px-3 rounded-lg hover:bg-slate-50">
                {l}
              </a>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <button className="w-full border border-slate-200 text-slate-700 text-sm font-semibold py-2.5 rounded-xl">Sign In</button>
            <button className="w-full bg-green-600 text-white text-sm font-semibold py-2.5 rounded-xl">Get Started Free</button>
          </div>
        </div>
      )}
    </nav>
  )
}
