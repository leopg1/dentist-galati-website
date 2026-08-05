import { Eye, MapPin, Ruler, Scan, ScanLine } from 'lucide-react'
import ServiceLayout from '../../components/ServiceLayout'
import Reveal from '../../components/Reveal'

const beneficii = [
  {
    icon: MapPin,
    title: 'Totul într-un singur loc',
    text: 'Radiografia se face pe loc, în timpul consultației, fără drumuri la alt centru de radiologie.',
  },
  {
    icon: Eye,
    title: 'Planuri de tratament vizuale',
    text: 'Îți arătăm imaginile pe ecran și îți explicăm exact ce vedem: înțelegi fiecare decizie.',
  },
  {
    icon: Ruler,
    title: 'Lucrări protetice mai precise',
    text: 'Amprenta digitală înseamnă coroane și punți care se potrivesc mai bine, din prima.',
  },
]

export default function RadiologieDigitala() {
  return (
    <ServiceLayout
      slug="radiologie-digitala"
      metaTitle="Radiologie digitală & Scanare 3D Galați — DentaLine"
      metaDescription="Radiografie digitală pe loc și amprentă digitală cu scaner intraoral 3D: diagnostic precis, fără drumuri în plus. DentaLine Clinic Galați."
      eyebrow="Diagnostic digital"
      title={
        <>
          Radiografie și amprentă 3D, <span className="text-coral-600">direct în clinică</span>
        </>
      }
      intro="Un tratament corect începe cu un diagnostic precis. În clinică dispunem de radiologie digitală (DigiRay), cu radiografii făcute pe loc și doze mici de radiații, și de scaner intraoral SHINING 3D, care înlocuiește amprenta clasică cu o scanare rapidă și confortabilă."
      heroImage="/media/services/scanare-3d.jpg"
      heroImageAlt="Scanare intraorală 3D cu scaner digital în clinica DentaLine"
      heroImageClassName="object-[center_15%]"
      badge="Scaner intraoral SHINING 3D"
      highlights={[
        'Radiografii digitale pe loc, cu doze mici de radiații',
        'Amprentă digitală 3D, fără pasta clasică',
        'Diagnostic precis, plan de tratament complet din prima vizită',
      ]}
      ctaTitle="Vino cu problema, pleci cu planul complet"
    >
      {/* Tehnologia */}
      <div>
        <Reveal>
          <h2 className="h-display text-3xl md:text-4xl">Două aparate, un diagnostic complet</h2>
        </Reveal>
        <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:gap-8">
          <Reveal>
            <div className="card-surface h-full card-pad transition hover:border-plum-200">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-600">
                <ScanLine className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 card-title">Radiologie digitală DigiRay</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-plum-900/70">
                Radiografii digitale realizate direct în cabinet, în câteva secunde, cu doze mici de radiații.
                Imaginea apare imediat pe ecran, iar medicul îți explică pe loc ce vede.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-surface h-full card-pad transition hover:border-plum-200">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-600">
                <Scan className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 card-title">Scaner intraoral SHINING 3D</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-plum-900/70">
                Fără pasta clasică de amprentă: scanerul creează modelul digital 3D al dinților în câteva
                minute, cu precizie milimetrică.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Imagine largă */}
      <Reveal>
        <figure>
          <img
            src="/media/services/scanare-3d-larg.jpg"
            alt="Medic DentaLine realizând o scanare intraorală 3D, cu modelul digital afișat pe ecran"
            className="aspect-[16/9] w-full rounded-3xl object-cover shadow-lift"
            loading="lazy"
          />
          <figcaption className="mt-3.5 text-center text-xs font-medium text-plum-900/55">
            Scanarea intraorală 3D — modelul digital al dinților apare pe ecran în timp real.
          </figcaption>
        </figure>
      </Reveal>

      {/* Beneficii */}
      <Reveal>
        <div className="rounded-3xl bg-plum-50 card-pad-lg">
          <h2 className="h-display text-3xl md:text-4xl">De ce contează diagnosticul digital</h2>
          <div className="mt-7 grid gap-6 sm:grid-cols-3 lg:gap-8">
            {beneficii.map((b) => (
              <div key={b.title} className="rounded-2xl bg-white p-5 shadow-soft">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-coral-100 text-coral-600">
                  <b.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3.5 card-title">{b.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-plum-900/70">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </ServiceLayout>
  )
}
