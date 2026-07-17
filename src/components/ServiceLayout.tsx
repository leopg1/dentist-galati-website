import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Check, ChevronRight, Phone } from 'lucide-react'
import { services, site } from '../lib/site'
import { usePageMeta } from '../lib/seo'
import CTABand from './CTABand'
import Reveal from './Reveal'

type Props = {
  slug: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  title: ReactNode
  intro: string
  heroImage: string
  heroImageAlt: string
  /** Conținutul principal al paginii (secțiuni libere). */
  children: ReactNode
  /** Beneficii scurte afișate sub intro, în hero. */
  highlights?: string[]
  ctaTitle?: string
  /** Text specific serviciului pentru cardul plutitor de sub imaginea hero; fără badge se afișează ratingul. */
  badge?: string
}

/**
 * Layout comun pentru paginile de servicii: hero + conținut + sidebar + CTA.
 * Paginile de serviciu NU trebuie să re-implementeze structura — doar children.
 */
export default function ServiceLayout({
  slug,
  metaTitle,
  metaDescription,
  eyebrow,
  title,
  intro,
  heroImage,
  heroImageAlt,
  children,
  highlights,
  ctaTitle,
  badge,
}: Props) {
  usePageMeta(metaTitle, metaDescription)

  return (
    <>
      {/* Hero serviciu */}
      <section className="relative overflow-hidden bg-plum-50">
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-plum-200/50 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-site relative grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <nav className="flex items-center gap-1.5 text-[13px] font-semibold text-plum-900/60" aria-label="Breadcrumb">
              <Link to="/" className="transition hover:text-coral-700">Acasă</Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <Link to="/servicii" className="transition hover:text-coral-700">Servicii</Link>
            </nav>
            <p className="eyebrow mt-6">{eyebrow}</p>
            <h1 className="h-display mt-3 text-4xl md:text-[52px]">{title}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-plum-900/75">{intro}</p>
            {highlights && (
              <ul className="mt-6 space-y-2.5">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-[15px] font-medium text-plum-900/85">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-8 flex flex-wrap gap-3.5">
              <a href={site.phoneHref} className="btn-primary">
                <Phone className="h-4 w-4" aria-hidden="true" /> Programează-te: {site.phone}
              </a>
              <Link to={`/contact?serviciu=${slug}#formular`} className="btn-secondary">
                Cere o programare online
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="relative">
            <img
              src={heroImage}
              alt={heroImageAlt}
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift"
              loading="eager"
            />
            <div className="card-surface absolute -bottom-5 left-5 hidden items-center gap-3 px-5 py-3.5 sm:flex">
              {badge ? (
                <p className="text-[13.5px] font-bold text-plum-900">{badge}</p>
              ) : (
                <>
                  <span className="text-gold-500 text-lg" aria-hidden="true">★</span>
                  <p className="text-[13.5px] font-bold text-plum-900">
                    {site.rating}/5 · {site.reviewCount} de recenzii Google
                  </p>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Conținut + sidebar */}
      <section className="section-pad">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_340px]">
          <div className="min-w-0 space-y-14">{children}</div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="card-surface p-6">
              <h2 className="font-display text-2xl font-semibold text-plum-950">Alte servicii</h2>
              <ul className="mt-4 space-y-1">
                {services
                  .filter((s) => s.slug !== slug)
                  .slice(0, 6)
                  .map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={`/servicii/${s.slug}`}
                        className="flex items-center justify-between rounded-xl px-3 py-2.5 text-[14.5px] font-semibold text-plum-900/80 transition hover:bg-plum-50 hover:text-coral-700"
                      >
                        {s.menuTitle}
                        <ChevronRight className="h-4 w-4 text-plum-300" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-plum-600 to-plum-800 p-6 text-white shadow-lift">
              <h2 className="font-display text-2xl font-semibold">Ai o întrebare?</h2>
              <p className="mt-2 text-[14.5px] leading-relaxed text-white/80">
                Sună-ne și îți răspundem pe loc — sau scrie-ne și te contactăm noi.
              </p>
              <a href={site.phoneHref} className="btn-primary mt-5 w-full">
                <Phone className="h-4 w-4" aria-hidden="true" /> {site.phone}
              </a>
              <p className="mt-3 text-center text-[13px] text-white/60">{site.schedule}</p>
            </div>
          </aside>
        </div>
      </section>

      <CTABand title={ctaTitle} />
    </>
  )
}
