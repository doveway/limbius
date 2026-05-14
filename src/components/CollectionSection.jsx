export default function CollectionSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div>
            <span className="inline-block bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-green-100">
              Refuse Collection
            </span>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight mb-5">
              From streets to facilities — every ton tracked
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Limbius deploys and manages fleets of collection trucks across Nigerian cities. Each vehicle is geo-tracked, schedule-driven, and linked directly to the households it serves — so nothing gets missed and every pickup is recorded.
            </p>
            <ul className="space-y-4">
              {[
                ['Scheduled weekly & bi-weekly collection runs', 'green'],
                ['GPS tracking for every truck in the fleet', 'blue'],
                ['Hazardous and bulk-waste removal requests', 'violet'],
                ['Community recycling and sorting programs', 'amber'],
              ].map(([text, c]) => (
                <li key={text} className="flex items-start gap-3">
                  <span className={`mt-1 w-2 h-2 rounded-full bg-${c}-500 flex-shrink-0`} />
                  <span className="text-slate-600 text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — truck illustration in a styled card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-green-950 rounded-3xl p-8 shadow-2xl overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-green-500 rounded-full opacity-10" />
              <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-emerald-400 rounded-full opacity-10" />

              <DayTruckSVG />

              {/* Status pill */}
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs font-bold text-white">3 trucks active — Zone B, Ikeja</span>
                </div>
                <span className="text-xs text-slate-400 font-medium">Live</span>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-white border border-slate-200 rounded-2xl shadow-xl px-5 py-3">
              <p className="text-2xl font-black text-slate-900">94%</p>
              <p className="text-xs text-slate-500 font-medium">Pickup completion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DayTruckSVG() {
  return (
    <svg viewBox="0 0 420 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#374151" />
          <stop offset="100%" stopColor="#1f2937" />
        </linearGradient>
        <linearGradient id="daysky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bfdbfe" />
          <stop offset="100%" stopColor="#93c5fd" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="420" height="155" fill="url(#daysky)" />
      {/* Sun */}
      <circle cx="370" cy="38" r="22" fill="#fde68a" opacity="0.9" />
      {/* Clouds */}
      <ellipse cx="80" cy="40" rx="35" ry="14" fill="white" opacity="0.85" />
      <ellipse cx="60" cy="42" rx="22" ry="12" fill="white" opacity="0.9" />
      <ellipse cx="105" cy="43" rx="20" ry="10" fill="white" opacity="0.8" />
      <ellipse cx="220" cy="28" rx="30" ry="12" fill="white" opacity="0.7" />
      <ellipse cx="200" cy="30" rx="20" ry="10" fill="white" opacity="0.75" />

      {/* Trees */}
      {[340, 370, 395].map((x, i) => (
        <g key={i}>
          <rect x={x+3} y={100} width="4" height="30" fill="#78350f" />
          <ellipse cx={x+5} cy={95} rx={12 - i*2} ry={20 - i*2} fill="#15803d" opacity="0.9" />
        </g>
      ))}

      {/* Road */}
      <rect x="0" y="155" width="420" height="55" fill="url(#road)" />
      <rect x="0" y="160" width="420" height="3" fill="#4b5563" />
      {/* Dashes */}
      {[10,70,130,190,250,310,370].map(x => (
        <rect key={x} x={x} y="173" width="40" height="5" rx="2.5" fill="#f59e0b" opacity="0.55" />
      ))}

      {/* ═══ Garbage Truck ═══ */}
      {/* Main compactor */}
      <rect x="78" y="98" width="210" height="57" rx="7" fill="#16a34a" />
      <rect x="78" y="98" width="210" height="12" rx="4" fill="#15803d" />
      {/* Rear hopper */}
      <rect x="262" y="104" width="24" height="46" rx="5" fill="#166534" />
      <rect x="267" y="108" width="14" height="38" rx="3" fill="#14532d" />
      {/* Ribs */}
      {[115,148,181,214].map(x => (
        <line key={x} x1={x} y1="100" x2={x} y2="155" stroke="#166534" strokeWidth="1.2" />
      ))}
      {/* Logo on truck */}
      <rect x="120" y="116" width="90" height="22" rx="4" fill="#166534" />
      <text x="165" y="131" textAnchor="middle" fill="#86efac" fontFamily="system-ui" fontWeight="800" fontSize="11">LIMBIUS</text>
      {/* Recycling icon */}
      <text x="165" y="147" textAnchor="middle" fill="#4ade80" fontFamily="system-ui" fontSize="8" opacity="0.8">♻ RECYCLE</text>

      {/* Cab */}
      <rect x="34" y="116" width="76" height="39" rx="7" fill="#15803d" />
      {/* Cab roof */}
      <path d="M38 116 L60 94 L110 94 L110 116 Z" fill="#16a34a" />
      {/* Windshield */}
      <path d="M44 114 L64 98 L104 98 L104 114 Z" fill="#bfdbfe" opacity="0.7" />
      {/* Side window */}
      <rect x="38" y="126" width="22" height="16" rx="3" fill="#bfdbfe" opacity="0.6" />
      {/* Door handle */}
      <rect x="68" y="134" width="7" height="3" rx="1.5" fill="#4ade80" />
      {/* Headlight */}
      <rect x="26" y="134" width="10" height="9" rx="3" fill="#fde68a" />
      <ellipse cx="21" cy="138" rx="7" ry="4" fill="#fde68a" opacity="0.4" />

      {/* Exhaust pipe */}
      <rect x="108" y="80" width="6" height="18" rx="2.5" fill="#374151" />
      <circle cx="111" cy="74" r="5" fill="#9ca3af" opacity="0.3" />
      <circle cx="114" cy="66" r="7" fill="#9ca3af" opacity="0.18" />

      {/* Wheels */}
      {[72, 216, 253].map(cx => (
        <g key={cx}>
          <circle cx={cx} cy="162" r="17" fill="#1f2937" />
          <circle cx={cx} cy="162" r="11" fill="#374151" />
          <circle cx={cx} cy="162" r="5" fill="#6b7280" />
          <circle cx={cx} cy="162" r="2" fill="#9ca3af" />
        </g>
      ))}

      {/* Rubbish bags by road */}
      <ellipse cx="310" cy="152" rx="14" ry="10" fill="#166534" opacity="0.9" />
      <ellipse cx="328" cy="154" rx="11" ry="8" fill="#15803d" opacity="0.8" />
      <ellipse cx="295" cy="154" rx="10" ry="7" fill="#14532d" opacity="0.85" />

      {/* Shadow under truck */}
      <ellipse cx="160" cy="180" rx="110" ry="6" fill="black" opacity="0.15" />
    </svg>
  )
}
