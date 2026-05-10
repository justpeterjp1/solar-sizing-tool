import Logo from '../../assets/hero.png'
const Header = () => {
  return (
       <header className="bg-gray-50 border-b border-gray-200 shadow-sm ">
            <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <div className="size-full flex items-center justify-start bg-slate-50">
      <div className="flex items-center gap-3">
        {/* Sun icon with sage leaf accent */}
        <div className="relative">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Sun rays */}
            <g className="animate-spin" style={{ animationDuration: '20s', transformOrigin: 'center' }}>
              <circle cx="32" cy="32" r="24" fill="url(#sunGradient)" />
              <path d="M32 2 L32 8 M32 56 L32 62 M62 32 L56 32 M8 32 L2 32" stroke="#FCD34D" strokeWidth="3" strokeLinecap="round" />
              <path d="M52 12 L47.5 16.5 M16.5 47.5 L12 52 M52 52 L47.5 47.5 M16.5 16.5 L12 12" stroke="#FCD34D" strokeWidth="3" strokeLinecap="round" />
            </g>

            {/* Sage leaf accent */}
            <path d="M38 28 Q42 24 46 26 Q48 28 46 32 Q44 34 40 32 Z" fill="#DC2626" opacity="0.9" />
            <path d="M40 30 L44 28" stroke="#7F1D1D" strokeWidth="0.5" />

            {/* Gradients */}
            <defs>
              <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FEF08A" />
                <stop offset="50%" stopColor="#FCD34D" />
                <stop offset="100%" stopColor="#F59E0B" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* Logo text */}
        <div className="flex flex-col">
          <div className="flex items-baseline">
            <span className="text-5xl font-bold tracking-tight" style={{ color: '#F59E0B' }}>SUN</span>
            <span className="text-5xl font-bold tracking-tight" style={{ color: '#DC2626' }}>SAGE</span>
          </div>
          <p className="text-sm text-slate-600 tracking-wide">Solar Calculator</p>
        </div>
      </div>
    </div>
            <p className="text-stone-600  mt-1">Nobody understands your energy needs better than you do.</p>
            </div>   
        </header>
  )
}

export default Header