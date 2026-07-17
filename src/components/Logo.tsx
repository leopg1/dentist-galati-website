import { Link } from 'react-router-dom'

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-2.5" aria-label="DentaLine Clinic — Acasă">
      <svg viewBox="0 0 64 64" className="h-10 w-10 shrink-0" aria-hidden="true">
        <defs>
          <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8A65BB" />
            <stop offset="1" stopColor="#E0457B" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" fill={light ? 'rgba(255,255,255,0.12)' : '#F7F4FB'} />
        <path
          fill="url(#logo-g)"
          d="M32 12c-4.6 0-6.2 2.4-10.4 2.4-3.4 0-8.1 1.8-8.1 9.3 0 8.4 4.4 15.9 6.7 22.9 1 3.1 2.4 5.4 4.5 5.4 4 0 2-11.6 7.3-11.6s3.3 11.6 7.3 11.6c2.1 0 3.5-2.3 4.5-5.4 2.3-7 6.7-14.5 6.7-22.9 0-7.5-4.7-9.3-8.1-9.3-4.2 0-5.8-2.4-10.4-2.4z"
        />
      </svg>
      <span className="leading-none">
        <span className={`block font-display text-[26px] font-semibold tracking-tight ${light ? 'text-white' : 'text-plum-950'}`}>
          Denta<span className="text-coral-600">Line</span>
        </span>
        <span
          className={`mt-0.5 block text-[10px] font-bold uppercase tracking-[0.32em] ${light ? 'text-white/70' : 'text-plum-500'}`}
        >
          Clinic · Galați
        </span>
      </span>
    </Link>
  )
}
