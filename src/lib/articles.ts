/**
 * Registrul articolelor DentaLine (blog / secțiunea „Articole").
 * SURSA DE ADEVĂR pentru metadate: titluri, meta SEO, autori, imagini, categorii.
 *
 * Corpul fiecărui articol trăiește în src/pages/articole/<Fișier>.tsx și se randează
 * prin <ArticleLayout slug="…">. Layout-ul citește TOT de aici, după slug —
 * nu duplicați metadate în paginile de articol.
 */

export type Article = {
  slug: string
  /** H1-ul articolului. */
  title: string
  /** <title> pentru SEO — sub 60 de caractere. */
  metaTitle: string
  /** meta description — 140–158 de caractere, cu cuvântul-cheie și un motiv de click. */
  metaDescription: string
  /** 1–2 fraze pentru cardul din listă și pentru lead-ul de sub H1. */
  excerpt: string
  category: string
  /** ISO, YYYY-MM-DD. */
  date: string
  readingMinutes: number
  heroImage: string
  heroImageAlt: string
  /** slug din `doctors` (src/lib/site.ts). */
  authorSlug: string
  /** sluguri din `services` (src/lib/site.ts). */
  relatedServices: string[]
  featured?: boolean
}

const all: Article[] = [
  {
    slug: 'frica-de-dentist',
    title: 'Frica de dentist: de unde vine și cum se stinge',
    metaTitle: 'Frica de dentist: de unde vine și cum trece | DentaLine',
    metaDescription:
      'Frica de dentist are cauze reale și soluții concrete. Un medic stomatolog din Galați explică de unde vine, ce o întreține și cum o poți depăși calm.',
    excerpt:
      'Nu ești slab de înger și nu ești singurul. Frica de dentist se învață — de obicei într-o singură ședință prost trăită — și, exact la fel, se poate dezvăța.',
    category: 'Ghid pacient',
    date: '2026-07-15',
    readingMinutes: 9,
    heroImage: '/media/clinic/salon-turcoaz.jpg',
    heroImageAlt:
      'Salon de tratament luminos, cu scaune turcoaz, în clinica DentaLine din Galați',
    authorSlug: 'dr-camelia-vasiliu',
    relatedServices: ['stomatologie-generala', 'igienizare'],
    featured: true,
  },
  {
    slug: 'durere-de-dinte-ce-faci',
    title: 'Te doare un dinte? Ce poți face până ajungi la cabinet',
    metaTitle: 'Durere de dinte: ce faci până la cabinet | DentaLine',
    metaDescription:
      'Te doare un dinte și nu ajungi imediat la cabinet? Ce te ajută cu adevărat acasă, ce să nu pui niciodată pe dinte și când durerea devine o urgență.',
    excerpt:
      'Durerea de dinte apare mereu la ore imposibile. Iată ce te poate ajuta până la consultație, ce trebuie evitat cu orice preț și semnele care cer o vizită urgentă.',
    category: 'Urgențe',
    date: '2026-07-22',
    readingMinutes: 10,
    heroImage: '/media/clinic/tratament-vertical.jpg',
    heroImageAlt:
      'Medic stomatolog tratând un pacient cu durere de dinte, în cabinetul DentaLine Galați',
    authorSlug: 'dr-mariana-sacara',
    relatedServices: ['endodontie-microscop', 'stomatologie-generala'],
  },
  {
    slug: 'implant-dentar-pas-cu-pas',
    title: 'Implantul dentar, pas cu pas: la ce să te aștepți cu adevărat',
    metaTitle: 'Implantul dentar, pas cu pas | DentaLine Galați',
    metaDescription:
      'Cum decurge un implant dentar, etapă cu etapă: consultația, radiografia, inserarea, vindecarea și coroana finală. Cât durează și cât doare, pe bune.',
    excerpt:
      'De la prima radiografie până la coroana finală: etapele reale ale unui implant dentar, cu termenele lor și cu adevărul despre durere.',
    category: 'Tratamente',
    date: '2026-07-29',
    readingMinutes: 9,
    heroImage: '/media/services/scanare-3d-larg.jpg',
    heroImageAlt:
      'Scanare intraorală 3D pentru planificarea unui implant dentar, la DentaLine Galați',
    authorSlug: 'dr-camelia-vasiliu',
    relatedServices: ['implantologie', 'coroane-zirconiu', 'radiologie-digitala'],
  },
  {
    slug: 'prima-vizita-la-dentist-a-copilului',
    title: 'Prima vizită la dentist a copilului: când, cum și ce NU trebuie să spui',
    metaTitle: 'Prima vizită la dentist a copilului | DentaLine',
    metaDescription:
      'Când duci copilul prima dată la dentist, cum îl pregătești acasă și ce cuvinte să nu spui niciodată. Sfaturi de la medicul care lucrează cu cei mici.',
    excerpt:
      'Vârsta potrivită, pregătirea de acasă și cele câteva cuvinte care, spuse cu cele mai bune intenții, îi transmit copilului exact frica pe care vrei să o eviți.',
    category: 'Copii',
    date: '2026-08-03',
    readingMinutes: 10,
    heroImage: '/media/services/copii-consult-serban.jpg',
    heroImageAlt:
      'Dr. Diana Șerban consultând cu blândețe un copil la prima vizită, în clinica DentaLine',
    authorSlug: 'dr-diana-serban',
    relatedServices: ['stomatologie-copii', 'igienizare'],
  },
  {
    slug: 'gingii-care-sangereaza',
    title: 'Îți sângerează gingiile când te speli pe dinți? Nu e normal',
    metaTitle: 'Îți sângerează gingiile? Nu e normal | DentaLine',
    metaDescription:
      'Gingiile care sângerează la periaj sunt primul semn de gingivită. Ce înseamnă, cât de repede se rezolvă și când problema a trecut deja de gingie.',
    excerpt:
      'Sângerarea la periaj nu e „normală” și nu trece de la sine. E primul semnal al gingivitei — etapa în care totul se rezolvă simplu, dacă nu o ignori.',
    category: 'Prevenție',
    date: '2026-08-06',
    readingMinutes: 9,
    heroImage: '/media/services/igienizare-colaj.jpg',
    heroImageAlt:
      'Ședință de igienizare profesională pentru gingii sănătoase, în clinica DentaLine',
    authorSlug: 'dr-liliana-barbu',
    relatedServices: ['igienizare', 'stomatologie-generala'],
  },
  {
    slug: 'aligneri-sau-aparat-dentar-fix',
    title: 'Aligneri sau aparat dentar fix? Cum alegi, pe bune',
    metaTitle: 'Aligneri sau aparat dentar fix? Cum alegi | DentaLine',
    metaDescription:
      'Aligneri sau aparat dentar fix? Ce mișcări poate face fiecare, disciplina celor 22 de ore pe zi, igiena, confortul și contenția de după. Comparație cinstită.',
    excerpt:
      'Amândouă îndreaptă dinții, dar diferă prin disciplină, confort, vizibilitate și tipul de caz. Comparația onestă care te ajută să alegi.',
    category: 'Tratamente',
    date: '2026-08-10',
    readingMinutes: 9,
    heroImage: '/media/services/medic-serban-la-lucru.jpg',
    heroImageAlt:
      'Dr. Diana Șerban, medicul care se ocupă de tratamentele cu aligneri la DentaLine, lucrând în cabinet',
    authorSlug: 'dr-diana-serban',
    relatedServices: ['aligneri', 'estetica-dentara'],
  },
]

/** Toate articolele, ordonate descrescător după dată (cel mai nou primul). */
export const articles: Article[] = [...all].sort((a, b) => b.date.localeCompare(a.date))

/** Categoriile existente, în ordinea primei apariții — pentru filtrele din /articole. */
export const articleCategories: string[] = [...new Set(articles.map((a) => a.category))]

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

/**
 * Articolele conexe: întâi aceeași categorie, apoi cele care ating aceleași servicii,
 * la egalitate cele mai recente.
 */
export function relatedArticles(slug: string, n = 3): Article[] {
  const current = getArticle(slug)
  const rest = articles.filter((a) => a.slug !== slug)
  if (!current) return rest.slice(0, n)

  const score = (a: Article) =>
    (a.category === current.category ? 3 : 0) +
    a.relatedServices.filter((s) => current.relatedServices.includes(s)).length

  return [...rest]
    .sort((a, b) => score(b) - score(a) || b.date.localeCompare(a.date))
    .slice(0, n)
}

const MONTHS = [
  'ianuarie',
  'februarie',
  'martie',
  'aprilie',
  'mai',
  'iunie',
  'iulie',
  'august',
  'septembrie',
  'octombrie',
  'noiembrie',
  'decembrie',
]

/** „2026-07-15" → „15 iulie 2026". Parsare manuală, ca fusul orar să nu mute ziua. */
export function formatArticleDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  if (!y || !m || !d) return iso
  return `${d} ${MONTHS[m - 1]} ${y}`
}
