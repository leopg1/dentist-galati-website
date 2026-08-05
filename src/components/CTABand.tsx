import { MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { site } from '../lib/site'
import RatingBadge from './RatingBadge'
import Reveal from './Reveal'

type Props = {
  title?: string
  text?: string
}

/** Banda finală de conversie — folosită pe toate paginile, înaintea footerului. */
export default function CTABand({
  title = 'Fă primul pas spre zâmbetul pe care ți-l dorești',
  text = 'Programează o consultație. Îți explicăm opțiunile și pleci cu planul de tratament în mână.',
}: Props) {
  return (
    <section className="relative overflow-hidden bg-plum-950">
      {/* Watermark: conturul dintelui din logo, ca semnătură de brand */}
      <svg
        viewBox="0 0 64 64"
        className="pointer-events-none absolute -bottom-24 -right-16 h-[420px] w-[420px] text-white/[0.04] md:h-[540px] md:w-[540px]"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M32 12c-4.6 0-6.2 2.4-10.4 2.4-3.4 0-8.1 1.8-8.1 9.3 0 8.4 4.4 15.9 6.7 22.9 1 3.1 2.4 5.4 4.5 5.4 4 0 2-11.6 7.3-11.6s3.3 11.6 7.3 11.6c2.1 0 3.5-2.3 4.5-5.4 2.3-7 6.7-14.5 6.7-22.9 0-7.5-4.7-9.3-8.1-9.3-4.2 0-5.8-2.4-10.4-2.4z"
        />
      </svg>
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-plum-600/25 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-site section-pad relative text-center">
        <Reveal>
          <h2 className="h-display mx-auto max-w-3xl text-4xl !text-white md:text-5xl [text-wrap:balance]">{title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{text}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a href={site.phoneHref} className="btn-primary">
              <Phone className="h-4 w-4" aria-hidden="true" /> {site.phone}
            </a>
            <Link to="/contact#formular" className="btn-ghost-light">
              Cere o programare online
            </Link>
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-white/65">
            <RatingBadge light variant="star" />
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
              <MapPin className="h-4 w-4 shrink-0 text-teal-300" aria-hidden="true" />
              {site.addressShort}
            </span>
            <span className="whitespace-nowrap">{site.schedule}</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
