import { Suspense, lazy } from 'react'
import type { ComponentType, LazyExoticComponent } from 'react'
import { useParams } from 'react-router-dom'

const NotFound = lazy(() => import('../NotFound'))

/**
 * Slug → pagina de articol. Slug-urile trebuie să corespundă exact
 * celor din src/lib/articles.ts (și din public/sitemap.xml).
 */
const pages: Record<string, LazyExoticComponent<ComponentType>> = {
  'frica-de-dentist': lazy(() => import('./FricaDeDentist')),
  'durere-de-dinte-ce-faci': lazy(() => import('./DurereDeDinte')),
  'implant-dentar-pas-cu-pas': lazy(() => import('./ImplantDentarPasCuPas')),
  'prima-vizita-la-dentist-a-copilului': lazy(() => import('./PrimaVizitaCopil')),
  'gingii-care-sangereaza': lazy(() => import('./GingiiCareSangereaza')),
  'aligneri-sau-aparat-dentar-fix': lazy(() => import('./AligneriSauAparatFix')),
}

/** Ruta /articole/:slug — alege pagina potrivită sau afișează 404. */
export default function ArticleRoute() {
  const { slug } = useParams<{ slug: string }>()
  const Page = slug ? pages[slug] : undefined

  return (
    <Suspense fallback={<div className="section-pad container-site" aria-busy="true" />}>
      {Page ? <Page /> : <NotFound />}
    </Suspense>
  )
}
