import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { articleCategories, articles } from '../lib/articles'
import { absoluteUrl, publisherLd, useJsonLd, usePageMeta } from '../lib/seo'
import { site } from '../lib/site'
import ArticleCard from '../components/articole/ArticleCard'
import CTABand from '../components/CTABand'
import Reveal from '../components/Reveal'

const ALL = 'Toate'

export default function Articole() {
  const [category, setCategory] = useState(ALL)

  usePageMeta(
    'Articole și sfaturi de la medicii DentaLine — Galați',
    'Articole scrise de medicii DentaLine Galați: frica de dentist, durerea de dinte, implantul dentar, alignerii, gingiile sănătoase și prima vizită a copilului.',
  )

  useJsonLd('ld-blog', {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Articole DentaLine Clinic',
    description:
      'Explicații clare despre tratamente stomatologice, scrise de medicii clinicii DentaLine din Galați.',
    url: absoluteUrl('/articole'),
    inLanguage: 'ro-RO',
    publisher: publisherLd,
    blogPost: articles.map((a) => ({
      '@type': 'BlogPosting',
      headline: a.title,
      description: a.metaDescription,
      image: [absoluteUrl(a.heroImage)],
      datePublished: a.date,
      dateModified: a.date,
      url: absoluteUrl(`/articole/${a.slug}`),
      mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(`/articole/${a.slug}`) },
    })),
  })

  useJsonLd('ld-blog-breadcrumb', {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Acasă', item: absoluteUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'Articole', item: absoluteUrl('/articole') },
    ],
  })

  const featured = articles.find((a) => a.featured)
  const showFeatured = category === ALL && featured
  const listed = articles.filter(
    (a) => (category === ALL ? a.slug !== featured?.slug : a.category === category),
  )

  return (
    <>
      {/* Hero index articole */}
      <section className="bg-plum-50">
        <div className="container-site hero-pad text-center">
          <Reveal initialVisible>
            <p className="eyebrow justify-center">Articole & sfaturi</p>
            <h1 className="h-display mx-auto mt-4 max-w-3xl text-4xl md:text-[52px]">
              Ce ne întreabă pacienții, explicat pe îndelete
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-plum-900/75">
              Întrebările care revin în cabinet — despre frică, durere, implanturi, aligneri sau
              prima vizită a copilului — merită mai mult de două minute între tratamente. Aici le
              răspundem pe larg, fără termeni de dicționar, chiar medicii care se ocupă de ele.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a href={site.phoneHref} className="btn-primary">
                <Phone className="h-4 w-4" aria-hidden="true" /> Programează-te: {site.phone}
              </a>
              <Link to="/contact#formular" className="btn-secondary">
                Cere o programare online
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          {/* Articolul evidențiat */}
          {showFeatured && featured && (
            <div className="mb-12 md:mb-16">
              <h2 className="sr-only">Articolul recomandat</h2>
              <ArticleCard article={featured} featured />
            </div>
          )}

          {/* Filtre pe categorii */}
          <Reveal>
            <div className="flex flex-wrap items-center gap-2.5" role="group" aria-label="Filtrează articolele după categorie">
              {[ALL, ...articleCategories].map((c) => {
                const active = c === category
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCategory(c)}
                    aria-pressed={active}
                    className={`rounded-full border-2 px-5 py-2.5 text-sm font-bold transition active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral-600 ${
                      active
                        ? 'border-coral-600 bg-coral-600 text-white shadow-lift'
                        : 'border-plum-200 bg-white text-plum-800 hover:border-plum-400 hover:bg-plum-50'
                    }`}
                  >
                    {c}
                  </button>
                )
              })}
            </div>
          </Reveal>

          {/* Grila de articole */}
          <h2 className="sr-only">Toate articolele</h2>
          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {listed.map((a, i) => (
              <ArticleCard key={a.slug} article={a} delay={(i % 3) * 0.08} />
            ))}
          </div>

          {listed.length === 0 && (
            <p className="mt-9 text-base text-plum-900/70">
              Încă nu avem articole în această categorie. Revino curând.
            </p>
          )}

          {/* Nota medicală */}
          <Reveal className="mt-16">
            <div className="rounded-3xl bg-white card-pad-lg shadow-soft ring-1 ring-plum-100">
              <p className="eyebrow !text-teal-700">De reținut</p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-plum-900/75">
                Articolele de aici sunt informative și scrise de medicii clinicii, dar nu înlocuiesc
                o consultație. Fiecare gură e diferită: ca să știi exact ce ai de făcut, ai nevoie
                de o examinare și, de multe ori, de o radiografie. Sună-ne la{' '}
                <a
                  href={site.phoneHref}
                  className="font-semibold text-coral-700 underline decoration-coral-300 decoration-2 underline-offset-4 transition hover:text-coral-800"
                >
                  {site.phone}
                </a>{' '}
                și îți spunem dacă e cazul să vii repede sau poți aștepta liniștit.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  )
}
