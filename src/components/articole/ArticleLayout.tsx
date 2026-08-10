import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { CalendarDays, ChevronRight, Clock, Phone } from 'lucide-react'
import { getArticle, formatArticleDate, relatedArticles } from '../../lib/articles'
import { absoluteUrl, publisherLd, useJsonLd, usePageMeta } from '../../lib/seo'
import { doctors, services, site } from '../../lib/site'
import CTABand from '../CTABand'
import Reveal from '../Reveal'
import ArticleCard from './ArticleCard'

type Props = {
  /** Slug-ul din src/lib/articles.ts — de acolo vin TOATE metadatele. */
  slug: string
  /** Corpul articolului: <h2>, <p>, <ul>, plus blocurile din blocks.tsx. */
  children: ReactNode
}

/**
 * Layout comun pentru paginile de articol.
 * Pagina de articol nu conține metadate proprii — doar <ArticleLayout slug="…">{corp}</ArticleLayout>.
 */
export default function ArticleLayout({ slug, children }: Props) {
  const article = getArticle(slug)
  const author = doctors.find((d) => d.slug === article?.authorSlug)
  const related = relatedArticles(slug, 3)
  const linkedServices = services.filter((s) => article?.relatedServices.includes(s.slug))

  usePageMeta(
    article?.metaTitle ?? 'Articole — DentaLine Clinic',
    article?.metaDescription,
    article?.heroImage,
    'article',
  )

  useJsonLd(
    'ld-articol',
    article && {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.metaDescription,
      image: [absoluteUrl(article.heroImage)],
      datePublished: article.date,
      dateModified: article.date,
      inLanguage: 'ro-RO',
      articleSection: article.category,
      author: author
        ? { '@type': 'Person', name: author.name, jobTitle: 'Medic stomatolog', url: absoluteUrl('/echipa') }
        : { '@type': 'Organization', name: site.name },
      publisher: publisherLd,
      mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(`/articole/${article.slug}`) },
    },
  )

  useJsonLd(
    'ld-articol-breadcrumb',
    article && {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Acasă', item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Articole', item: absoluteUrl('/articole') },
        {
          '@type': 'ListItem',
          position: 3,
          name: article.title,
          item: absoluteUrl(`/articole/${article.slug}`),
        },
      ],
    },
  )

  if (!article) return null

  return (
    <>
      {/* Hero articol */}
      <section className="bg-plum-50">
        <div className="container-site pb-28 pt-16 md:pb-36 md:pt-24">
          <Reveal initialVisible className="max-w-3xl">
            <nav
              className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-plum-900/70"
              aria-label="Breadcrumb"
            >
              <Link to="/" className="transition hover:text-coral-700">
                Acasă
              </Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <Link to="/articole" className="transition hover:text-coral-700">
                Articole
              </Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span aria-current="page" className="line-clamp-1 text-plum-900/70">
                {article.title}
              </span>
            </nav>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2.5">
              <span className="rounded-full bg-coral-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-coral-700">
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-plum-900/70">
                <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-plum-900/70">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {article.readingMinutes} min de citit
              </span>
            </div>

            <h1 className="h-display mt-5 text-4xl md:text-[52px] [text-wrap:balance]">
              {article.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-plum-900/75">{article.excerpt}</p>
          </Reveal>
        </div>
      </section>

      {/* Imaginea hero, suprapusă peste finalul hero-ului */}
      <div className="container-site relative -mt-20 md:-mt-28">
        <Reveal initialVisible>
          <img
            src={article.heroImage}
            alt={article.heroImageAlt}
            className="aspect-[16/9] w-full rounded-3xl object-cover shadow-lift"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </Reveal>
      </div>

      {/* Corp + sidebar */}
      <section className="pb-16 pt-12 md:pb-24 md:pt-16">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_340px]">
          <div className="min-w-0">
            {/* Autorul */}
            {author && (
              <Link
                to="/echipa"
                className="group card-surface flex items-center gap-4 p-4 transition hover:border-plum-200 sm:gap-5 sm:p-5"
              >
                <img
                  src={author.photo}
                  alt={`${author.name}, medic stomatolog la DentaLine Clinic Galați`}
                  loading="lazy"
                  className="h-16 w-16 shrink-0 rounded-2xl object-cover object-top sm:h-20 sm:w-20"
                />
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-coral-600">
                    Scris de
                  </p>
                  <p className="card-title mt-1 group-hover:text-coral-700">{author.name}</p>
                  <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-plum-900/75">
                    {author.bio}
                  </p>
                </div>
              </Link>
            )}

            {/* Corpul articolului — tipografia vine din clasa CSS „article-prose" */}
            <div className="article-prose mt-10">{children}</div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            {related.length > 0 && (
              <Reveal>
                <div className="card-surface card-pad">
                  <h2 className="card-title">Alte articole</h2>
                  <ul className="mt-4 space-y-1">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          to={`/articole/${r.slug}`}
                          className="block rounded-xl px-3 py-2.5 transition hover:bg-plum-50"
                        >
                          <span className="block text-sm font-bold leading-snug text-plum-900/85 hover:text-coral-700">
                            {r.title}
                          </span>
                          <span className="mt-1 block text-xs font-semibold text-plum-900/70">
                            {r.category} · {r.readingMinutes} min
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}

            {linkedServices.length > 0 && (
              <Reveal delay={0.08}>
                <div className="card-surface card-pad">
                  <h2 className="card-title">Servicii legate</h2>
                  <ul className="mt-4 space-y-1">
                    {linkedServices.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/servicii/${s.slug}`}
                          className="flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold text-plum-900/80 transition hover:bg-plum-50 hover:text-coral-700"
                        >
                          {s.menuTitle}
                          <ChevronRight className="h-4 w-4 shrink-0 text-plum-300" aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}

            <Reveal delay={0.16}>
              <div className="card-pad rounded-3xl bg-gradient-to-br from-plum-50 via-white to-teal-50/60 shadow-soft ring-1 ring-plum-100">
                <h2 className="card-title">Ai o întrebare?</h2>
                <p className="mt-2 text-sm leading-relaxed text-plum-900/75">
                  Un articol nu înlocuiește o consultație. Sună-ne și îți răspundem pe loc.
                </p>
                <a href={site.phoneHref} className="btn-primary mt-5 w-full">
                  <Phone className="h-4 w-4" aria-hidden="true" /> {site.phone}
                </a>
                <Link to="/contact#formular" className="btn-secondary mt-3 w-full">
                  Cere o programare
                </Link>
                <p className="mt-3 text-center text-xs text-plum-900/70">{site.schedule}</p>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Citește și */}
      {related.length > 0 && (
        <section className="border-t border-plum-100 bg-plum-50/40 section-pad">
          <div className="container-site">
            <Reveal>
              <p className="eyebrow">Mai departe</p>
              <h2 className="h-display mt-4 text-3xl md:text-4xl">Citește și</h2>
            </Reveal>
            <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {related.map((r, i) => (
                <ArticleCard key={r.slug} article={r} delay={i * 0.08} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand />
    </>
  )
}
