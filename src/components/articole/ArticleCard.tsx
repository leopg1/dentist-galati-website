import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import type { Article } from '../../lib/articles'
import { formatArticleDate } from '../../lib/articles'
import Reveal from '../Reveal'

type Props = {
  article: Article
  /** Varianta mare, pe două coloane — pentru articolul evidențiat din /articole. */
  featured?: boolean
  delay?: number
}

function Meta({ article }: { article: Article }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-plum-900/70">
      <span>{formatArticleDate(article.date)}</span>
      <span aria-hidden="true" className="text-plum-300">
        ·
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
        {article.readingMinutes} min de citit
      </span>
    </div>
  )
}

/** Cardul de articol din listă: imagine 16:10, categorie, titlu, excerpt, dată + timp de citire. */
export default function ArticleCard({ article, featured = false, delay = 0 }: Props) {
  if (featured) {
    return (
      <Reveal delay={delay}>
        <Link
          to={`/articole/${article.slug}`}
          className="group card-surface card-hover grid overflow-hidden lg:grid-cols-[1.15fr_1fr]"
        >
          <div className="aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-full">
            <img
              src={article.heroImage}
              alt={article.heroImageAlt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center card-pad-lg">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-coral-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-coral-700">
                {article.category}
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-teal-700">
                Recomandat
              </span>
            </div>
            <h3 className="h-display mt-5 text-3xl md:text-[34px]">{article.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-plum-900/70">{article.excerpt}</p>
            <div className="mt-6">
              <Meta article={article} />
            </div>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-coral-600">
              Citește articolul
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </div>
        </Link>
      </Reveal>
    )
  }

  return (
    <Reveal delay={delay} className="h-full">
      <Link
        to={`/articole/${article.slug}`}
        className="group card-surface card-hover flex h-full flex-col overflow-hidden"
      >
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={article.heroImage}
            alt={article.heroImageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col card-pad">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-coral-600">
            {article.category}
          </span>
          <h3 className="card-title mt-3 leading-snug">{article.title}</h3>
          <p className="mt-2.5 text-base leading-relaxed text-plum-900/70">{article.excerpt}</p>
          <div className="mt-auto pt-5">
            <Meta article={article} />
          </div>
        </div>
      </Link>
    </Reveal>
  )
}
