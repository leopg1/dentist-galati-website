import { useEffect } from 'react'
import { site } from './site'

/**
 * Domeniul canonic vine dintr-un singur loc: site.url.
 * NU rescrieți valoarea aici — modificați `url` în src/lib/site.ts.
 */
const BASE_URL = site.url

/** og:image implicit — identic cu cel din index.html. Folosit când pagina nu dă unul propriu. */
const DEFAULT_OG_IMAGE = '/media/team/echipa-completa.jpg'

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

/** Setează title + description + canonical + Open Graph per pagină (SPA). */
export function usePageMeta(
  title: string,
  description?: string,
  ogImage?: string,
  /** `article` pentru paginile de blog; implicit `website`. */
  ogType: 'website' | 'article' = 'website',
) {
  useEffect(() => {
    document.title = title
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:type', ogType)
    if (description) {
      setMeta('name', 'description', description)
      setMeta('property', 'og:description', description)
    }
    const url = BASE_URL + window.location.pathname
    setMeta('property', 'og:url', url)
    // Mereu setat: altfel imaginea articolului precedent rămâne lipită de pagina următoare.
    setMeta('property', 'og:image', BASE_URL + (ogImage ?? DEFAULT_OG_IMAGE))

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
  }, [title, description, ogImage, ogType])
}

/**
 * Injectează un bloc JSON-LD cu id-ul dat și îl curăță la demontarea paginii,
 * ca datele structurate să nu se „lipească” de următoarea rută (SPA).
 * `id` trebuie să fie unic per tip de bloc (ex. „ld-articol", „ld-breadcrumb").
 */
export function useJsonLd(id: string, data: unknown) {
  const json = data ? JSON.stringify(data) : ''
  useEffect(() => {
    if (!json) return
    let el = document.getElementById(id) as HTMLScriptElement | null
    if (!el) {
      el = document.createElement('script')
      el.type = 'application/ld+json'
      el.id = id
      document.head.appendChild(el)
    }
    el.textContent = json
    return () => {
      document.getElementById(id)?.remove()
    }
  }, [id, json])
}

/** URL absolut pe domeniul canonic, pentru JSON-LD și meta-uri. */
export function absoluteUrl(path: string) {
  return BASE_URL + path
}

/**
 * Publisher-ul folosit în JSON-LD (BlogPosting.publisher, Blog.publisher).
 * Definit o singură dată, ca /articole și paginile de articol să nu se desincronizeze.
 * `Dentist` este subtip de `Organization`, deci e valid ca publisher.
 * ⚠️ `logo` trimite deocamdată către favicon.svg — la primirea logo-ului raster
 * (PNG, minimum 112×112), înlocuiți calea aici.
 */
export const publisherLd = {
  '@type': 'Dentist',
  name: site.name,
  legalName: site.legalName,
  url: BASE_URL + '/',
  telephone: site.phoneHref.replace('tel:', ''),
  email: site.email,
  logo: { '@type': 'ImageObject', url: BASE_URL + '/favicon.svg' },
  image: BASE_URL + '/media/clinic/cabinet-larg.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Strada Arad Nr. 6, Bloc PS13B, Parter, Ap. 40',
    addressLocality: 'Galați',
    postalCode: '800323',
    addressCountry: 'RO',
  },
} as const
