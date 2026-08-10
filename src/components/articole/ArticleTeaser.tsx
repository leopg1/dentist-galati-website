import { Link } from 'react-router-dom'
import { BookOpen } from 'lucide-react'
import { getArticle } from '../../lib/articles'

type Props = {
  /** Slug din src/lib/articles.ts — titlul și timpul de citire se iau de acolo. */
  slug: string
  /** Textul dinaintea linkului, adaptat paginii de serviciu. */
  label?: string
}

/**
 * Trimitere discretă, pe un singur rând, către un articol de blog.
 * Se pune la finalul conținutului unei pagini de serviciu — un rând de text,
 * nu o casetă, ca să nu concureze cu secțiunile paginii.
 */
export default function ArticleTeaser({ slug, label = 'Mai multe pe această temă:' }: Props) {
  const article = getArticle(slug)
  if (!article) return null

  return (
    <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1 border-t border-plum-100 pt-6 text-base leading-relaxed text-plum-900/70">
      <BookOpen
        className="h-4 w-4 shrink-0 translate-y-0.5 text-coral-500"
        aria-hidden="true"
      />
      <span>{label}</span>
      <Link
        to={`/articole/${article.slug}`}
        className="font-semibold text-coral-700 underline decoration-coral-300 decoration-2 underline-offset-4 transition hover:text-coral-800 hover:decoration-coral-500"
      >
        {article.title}
      </Link>
      <span className="text-sm font-semibold text-plum-900/70">
        · {article.readingMinutes} min de citit
      </span>
    </p>
  )
}
