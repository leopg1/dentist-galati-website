import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, Check, Quote } from 'lucide-react'
import { useJsonLd } from '../../lib/seo'

/**
 * Blocurile de conținut folosite în corpul articolelor.
 *
 * Toate se scriu direct în interiorul <ArticleLayout>, printre <h2>, <p>, <ul>.
 * Fiecare bloc își poartă propriile stiluri: tipografia din clasa „article-prose"
 * se aplică DOAR copiilor direcți, deci nu intră peste ele.
 */

/* ───────────────────────── Pe scurt ───────────────────────── */

type KeyTakeawaysProps = {
  items: string[]
}

/** Caseta „Pe scurt" de la începutul articolului — 3–5 idei, formulate scurt. */
export function KeyTakeaways({ items }: KeyTakeawaysProps) {
  return (
    <aside
      className="mt-8 rounded-3xl bg-gradient-to-br from-plum-50 via-white to-teal-50/60 p-6 shadow-soft ring-1 ring-plum-100 md:p-8"
      aria-label="Pe scurt"
    >
      <p className="eyebrow !text-teal-700">Pe scurt</p>
      <ul className="mt-5 space-y-3.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-plum-900/85">
            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600">
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

/* ───────────────────────── Callout ───────────────────────── */

type CalloutTone = 'teal' | 'coral' | 'plum'

type CalloutProps = {
  title?: string
  tone?: CalloutTone
  children: ReactNode
}

const CALLOUT_TONES: Record<CalloutTone, { box: string; bar: string; title: string }> = {
  teal: { box: 'bg-teal-50/70 ring-teal-100', bar: 'bg-teal-400', title: 'text-teal-800' },
  coral: { box: 'bg-coral-50/70 ring-coral-100', bar: 'bg-coral-400', title: 'text-coral-800' },
  plum: { box: 'bg-plum-50 ring-plum-100', bar: 'bg-plum-400', title: 'text-plum-900' },
}

/** Casetă de atenționare / sfat, cu bară colorată în stânga. */
export function Callout({ title, tone = 'teal', children }: CalloutProps) {
  const t = CALLOUT_TONES[tone]
  return (
    <div className={`relative mt-8 overflow-hidden rounded-2xl p-6 pl-7 ring-1 md:p-7 md:pl-8 ${t.box}`}>
      <span className={`absolute inset-y-0 left-0 w-1.5 ${t.bar}`} aria-hidden="true" />
      {title && <p className={`font-sans text-base font-bold ${t.title}`}>{title}</p>}
      <div
        className={`space-y-3 text-base leading-relaxed text-plum-900/85 ${title ? 'mt-2.5' : ''} [&_a]:font-semibold [&_a]:text-coral-700 [&_a]:underline [&_a]:underline-offset-4 [&_strong]:font-semibold [&_strong]:text-plum-950`}
      >
        {children}
      </div>
    </div>
  )
}

/* ───────────────────────── Pull quote ───────────────────────── */

type PullQuoteProps = {
  author?: string
  children: ReactNode
}

/** Citat evidențiat, în serif — pentru o frază-cheie a medicului sau a unui pacient. */
export function PullQuote({ author, children }: PullQuoteProps) {
  return (
    <figure className="mt-10 border-l-2 border-coral-300 py-1 pl-6 md:pl-8">
      <Quote className="h-5 w-5 text-coral-300" aria-hidden="true" />
      <blockquote className="quote-serif mt-2 !text-[22px] md:!text-[26px]">{children}</blockquote>
      {author && (
        <figcaption className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-plum-900/70">
          — {author}
        </figcaption>
      )}
    </figure>
  )
}

/* ───────────────────────── Imagine ───────────────────────── */

type ArticleImageProps = {
  src: string
  alt: string
  caption?: string
}

/** Imagine din corpul articolului, cu legendă opțională. */
export function ArticleImage({ src, alt, caption }: ArticleImageProps) {
  return (
    <figure className="mt-10">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="aspect-[16/10] w-full rounded-3xl object-cover shadow-soft"
      />
      {caption && (
        <figcaption className="mt-3 text-sm leading-relaxed text-plum-900/70">{caption}</figcaption>
      )}
    </figure>
  )
}

/* ───────────────────────── Întrebări frecvente ───────────────────────── */

type ArticleFaqProps = {
  items: { q: string; a: string }[]
}

/** Acordeon de întrebări frecvente + JSON-LD FAQPage (eligibil pentru rich results). */
export function ArticleFaq({ items }: ArticleFaqProps) {
  useJsonLd('ld-articol-faq', {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  })

  return (
    <section className="mt-14" aria-label="Întrebări frecvente">
      <h2 className="h-display text-3xl md:text-4xl">Întrebări frecvente</h2>
      <div className="mt-7 space-y-3">
        {items.map((item) => (
          <details key={item.q} className="group card-surface overflow-hidden transition hover:border-plum-200">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden">
              <span className="text-base font-bold leading-snug text-plum-950">{item.q}</span>
              <span
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-plum-50 text-plum-600 transition duration-300 group-open:rotate-180 group-open:bg-coral-50 group-open:text-coral-600"
                aria-hidden="true"
              >
                <ChevronDown className="h-4 w-4" />
              </span>
            </summary>
            <div className="border-t border-plum-100 px-6 pb-6 pt-4 text-base leading-relaxed text-plum-900/75">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}

/* ───────────────────────── Link către un serviciu ───────────────────────── */

type ServiceLinkProps = {
  to: string
  label: string
}

/** Trimitere discretă către o pagină de serviciu, în corpul articolului. */
export function ServiceLink({ to, label }: ServiceLinkProps) {
  return (
    <Link
      to={to}
      className="group mt-8 flex items-center justify-between gap-4 rounded-2xl border border-plum-100 bg-white px-5 py-4 shadow-hair transition hover:border-plum-200 hover:shadow-soft"
    >
      <span className="text-base font-bold text-plum-950 group-hover:text-coral-700">{label}</span>
      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-coral-50 text-coral-600 transition group-hover:bg-coral-600 group-hover:text-white">
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </Link>
  )
}
