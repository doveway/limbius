import { ArrowRight, MapPin, CheckCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-green-950 flex flex-col justify-center overflow-hidden pt-16">

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

      {/* Green glow */}
      <div className="absolute top-1/3 right-1/3 w-[600px] h-[600px] bg-green-500 rounded-full blur-[180px] opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* ── Left copy ── */}
        <div>
          <div className="inline-flex items-center gap-2 bg-green-500/15 border border-green-500/25 text-green-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Nigeria's Urban Waste Platform
          </div>

          <h1 className="text-5xl lg:text-[3.75rem] font-black text-white leading-[1.05] tracking-tight mb-6">
            Cleaner Cities.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              Smarter Billing.
            </span>
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-10">
            Limbius connects refuse collection trucks, local government authorities, and Nigerian households — synchronising every pickup, route, and payment into one transparent platform.
          </p>

          <ul className="space-y-3 mb-10">
            {[
              'Automated monthly billing for every household',
              'Real-time truck tracking across routes',
              'Instant payment via bank transfer, card or USSD',
            ].map(item => (
              <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-green-500/20 transition-all hover:-translate-y-0.5">
              Get Started Free <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border border-white/15 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/5 transition-all">
              Schedule a Demo
            </button>
          </div>

          <p className="mt-8 text-slate-500 text-sm flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-green-500" />
            Deployed across Lagos, Abuja, Port Harcourt & Enugu
          </p>
        </div>

        {/* ── Right — Truck Illustration ── */}
        <div className="flex flex-col gap-5">
          <div className="bg-slate-800/60 border border-white/10 rounded-3xl p-6 backdrop-blur-sm shadow-2xl">
            <TruckScene />
          </div>

          {/* Mini stat row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { n: '1,240+', l: 'Active Trucks' },
              { n: '312k', l: 'Households' },
              { n: '94%', l: 'Collection Rate' },
            ].map(({ n, l }) => (
              <div key={l} className="bg-white/5 border border-white/10 rounded-2xl py-4 px-3 text-center">
                <p className="text-2xl font-black text-white">{n}</p>
                <p className="text-xs text-slate-400 mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 72V28C240 68 480 4 720 32C960 60 1200 12 1440 44V72H0Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

function TruckScene() {
  return (
    <svg viewBox="0 0 460 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      {/* Sky gradient bg */}
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#134e4a" />
        </linearGradient>
      </defs>
      <rect width="460" height="240" rx="12" fill="url(#sky)" />

      {/* Stars */}
      {[[30,20],[80,15],[140,25],[200,12],[280,22],[360,18],[420,28],[50,45],[160,50],[320,42]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="1.2" fill="white" opacity="0.6" />
      ))}

      {/* Moon */}
      <circle cx="400" cy="35" r="18" fill="#fde68a" opacity="0.85" />
      <circle cx="410" cy="28" r="14" fill="#134e4a" opacity="0.9" />

      {/* Buildings bg */}
      {[
        { x:330, y:60, w:45, h:180 },
        { x:370, y:80, w:60, h:160 },
        { x:410, y:50, w:50, h:190 },
      ].map((b,i) => (
        <g key={i}>
          <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="3" fill="#1e293b" />
          {[0,1,2,3,4].map(r => [0,1].map(c => (
            <rect key={`${r}${c}`} x={b.x+6+c*18} y={b.y+10+r*28} width="10" height="14" rx="2"
              fill="#fef08a" opacity={((i+r+c) % 3 === 0) ? 0.7 : 0.15} />
          )))}
        </g>
      ))}

      {/* Road */}
      <rect x="0" y="195" width="460" height="45" rx="0" fill="#1e293b" />
      <rect x="0" y="200" width="460" height="3" fill="#334155" />
      {/* Lane dashes */}
      {[20,80,140,200,260,320,380].map(x => (
        <rect key={x} x={x} y="210" width="35" height="4" rx="2" fill="#f59e0b" opacity="0.5" />
      ))}

      {/* ═══ Main garbage truck ═══ */}
      {/* Compactor body */}
      <rect x="90" y="105" width="220" height="90" rx="8" fill="#16a34a" />
      {/* Top trim */}
      <rect x="90" y="105" width="220" height="14" rx="4" fill="#15803d" />
      {/* Hopper rear */}
      <rect x="278" y="113" width="28" height="70" rx="6" fill="#166534" />
      <rect x="283" y="118" width="18" height="58" rx="4" fill="#14532d" />
      {/* Ribbing lines on compactor */}
      {[130,165,200,235].map(x => (
        <line key={x} x1={x} y1="108" x2={x} y2="195" stroke="#166534" strokeWidth="1.5" />
      ))}
      {/* LIMBIUS text on body */}
      <rect x="130" y="130" width="100" height="26" rx="5" fill="#166534" />
      <text x="180" y="148" textAnchor="middle" fill="#86efac" fontFamily="system-ui" fontWeight="800" fontSize="12">LIMBIUS</text>
      {/* Waste symbol */}
      <text x="180" y="175" textAnchor="middle" fill="#4ade80" fontFamily="system-ui" fontSize="10" opacity="0.7">♻ WASTE MGMT</text>

      {/* Cab */}
      <rect x="40" y="130" width="84" height="65" rx="8" fill="#15803d" />
      {/* Cab roof */}
      <path d="M44 130 L68 104 L124 104 L124 130 Z" fill="#166534" />
      {/* Windshield */}
      <path d="M50 128 L72 108 L116 108 L116 128 Z" fill="#7dd3fc" opacity="0.7" />
      {/* Driver silhouette */}
      <circle cx="88" cy="118" r="7" fill="#0f4c2a" opacity="0.5" />
      {/* Side window */}
      <rect x="45" y="142" width="26" height="20" rx="4" fill="#7dd3fc" opacity="0.55" />
      {/* Door */}
      <line x1="90" y1="132" x2="90" y2="195" stroke="#14532d" strokeWidth="1.5" />
      <rect x="78" y="162" width="8" height="3" rx="1.5" fill="#4ade80" />
      {/* Headlight */}
      <rect x="34" y="150" width="10" height="10" rx="3" fill="#fde68a" />
      <ellipse cx="29" cy="155" rx="8" ry="5" fill="#fde68a" opacity="0.3" />
      {/* Bumper */}
      <rect x="30" y="178" width="58" height="6" rx="3" fill="#166534" />
      {/* Exhaust */}
      <rect x="122" y="90" width="7" height="22" rx="3" fill="#374151" />
      <circle cx="126" cy="82" r="6" fill="#64748b" opacity="0.35" />
      <circle cx="130" cy="72" r="8" fill="#64748b" opacity="0.2" />

      {/* Wheels */}
      {[82, 242, 282].map(cx => (
        <g key={cx}>
          <circle cx={cx} cy="200" r="19" fill="#1e293b" />
          <circle cx={cx} cy="200" r="13" fill="#334155" />
          <circle cx={cx} cy="200" r="6" fill="#64748b" />
          <circle cx={cx} cy="200" r="2.5" fill="#94a3b8" />
          {/* Tyre tread marks */}
          {[0,60,120,180,240,300].map(deg => {
            const rad = (deg * Math.PI) / 180
            return <line key={deg}
              x1={cx + Math.cos(rad) * 10} y1={200 + Math.sin(rad) * 10}
              x2={cx + Math.cos(rad) * 13} y2={200 + Math.sin(rad) * 13}
              stroke="#475569" strokeWidth="1.5" />
          })}
        </g>
      ))}

      {/* Bin being loaded */}
      <rect x="316" y="162" width="22" height="28" rx="3" fill="#374151" />
      <rect x="314" y="157" width="26" height="6" rx="2" fill="#475569" />
      <line x1="325" y1="157" x2="322" y2="145" stroke="#475569" strokeWidth="2" />

      {/* Flying rubbish particles */}
      {[[350,145,'#4ade80'],[360,132,'#86efac'],[340,125,'#22d3ee']].map(([x,y,c],i) => (
        <circle key={i} cx={x} cy={y} r="3" fill={c} opacity="0.6" />
      ))}
    </svg>
  )
}
