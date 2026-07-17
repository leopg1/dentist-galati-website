import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import ServiceLayout from '../../components/ServiceLayout'
import VideoLoop from '../../components/VideoLoop'
import Reveal from '../../components/Reveal'

const serviciiIncluse = [
  'Fațete ceramice',
  'Coroane integral ceramice',
  'Albire profesională cu lampă',
  'Remodelare estetică',
  'Închiderea spațiilor (diasteme)',
  'Corectarea discromiilor și a uzurii',
]

const pasi = [
  {
    title: 'Analiză facială și dentară',
    text: 'Studiem forma, culoarea și proporțiile zâmbetului tău, în raport cu trăsăturile feței.',
  },
  {
    title: 'Simulare și plan de tratament',
    text: 'Construim digital viitorul zâmbet și îți explicăm fiecare etapă, transparent.',
  },
  {
    title: 'Proba („mock-up”)',
    text: 'Îți vezi noul zâmbet direct în oglindă, înainte de orice lucrare definitivă.',
  },
  {
    title: 'Finalizare în ceramică',
    text: 'Lucrarea finală, executată cu materiale ceramice premium, cu rezultat natural.',
  },
]

export default function EsteticaDentara() {
  return (
    <ServiceLayout
      slug="estetica-dentara"
      metaTitle="Fațete dentare & Smile Makeover Galați — DentaLine"
      metaDescription="Fațete ceramice, albire profesională și transformări complete ale zâmbetului, planificate digital. Vezi cazuri reale înainte/după."
      eyebrow="Estetică dentară & Smile makeover"
      title="Estetică dentară: zâmbetul pe care ți-l dorești, natural"
      intro="„Smile makeover” înseamnă mai mult decât dinți albi: înseamnă armonie între formă, culoare și proporții — construită milimetric pentru chipul tău. La DentaLine, transformările estetice sunt planificate digital și executate cu materiale ceramice premium."
      heroImage="/media/cases/colaj-zambete-bw.jpg"
      heroImageAlt="Colaj alb-negru cu zâmbete transformate prin estetică dentară la DentaLine"
      badge="Zâmbet planificat digital, dinainte să începem"
      highlights={[
        'Fațete ceramice și coroane integral ceramice',
        'Transformări planificate digital, cu probă „mock-up”',
        'Albire profesională cu lampă',
        'Rezultate naturale, în armonie cu chipul tău',
      ]}
      ctaTitle="Vino la o consultație de estetică dentară"
    >
      {/* Servicii incluse */}
      <Reveal>
        <section aria-labelledby="estetica-servicii">
          <h2 id="estetica-servicii" className="h-display text-3xl md:text-4xl">
            Tot ce înseamnă un zâmbet armonios
          </h2>
          <ul className="mt-7 grid gap-4 sm:grid-cols-2">
            {serviciiIncluse.map((serviciu) => (
              <li
                key={serviciu}
                className="card-surface flex items-center gap-3.5 px-5 py-4 transition duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coral-50 text-coral-600">
                  <Sparkles className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                <span className="text-[15.5px] font-semibold text-plum-950">{serviciu}</span>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      {/* Cum lucrăm */}
      <Reveal>
        <section aria-labelledby="estetica-proces" className="rounded-3xl bg-plum-50 p-7 md:p-10">
          <h2 id="estetica-proces" className="h-display text-3xl md:text-4xl">
            Patru pași până la zâmbetul final
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {pasi.map((pas, i) => (
              <div key={pas.title} className="rounded-3xl bg-white p-6 shadow-soft">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-plum-100 font-display text-lg font-semibold text-plum-700">
                  {i + 1}
                </span>
                <h3 className="mt-3 font-display text-[21px] font-semibold text-plum-950">{pas.title}</h3>
                <p className="mt-1.5 text-[14.5px] leading-relaxed text-plum-900/70">{pas.text}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Proba fațetelor — video + link cazuri */}
      <Reveal>
        <section
          aria-labelledby="estetica-proba"
          className="grid items-center gap-8 overflow-hidden rounded-3xl bg-plum-950 p-7 text-white shadow-lift md:grid-cols-[minmax(0,280px)_1fr] md:p-10"
        >
          <div className="mx-auto w-full max-w-[280px]">
            <VideoLoop
              src="/media/videos/fatete-proba.mp4"
              poster="/media/cases/colaj-zambete-bw.jpg"
              ariaLabel="Videoclip: proba fațetelor ceramice pe zâmbetul pacientului"
              className="aspect-[9/16] max-h-[560px] w-full rounded-3xl bg-plum-900 shadow-lift"
            />
          </div>
          <div>
            <h2 id="estetica-proba" className="h-display text-3xl !text-white md:text-4xl">
              Proba fațetelor: clipa în care îți vezi noul zâmbet
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-white/80">
              Înainte de finalizarea în ceramică, probăm fațetele direct pe dinții tăi — ca să vezi și să
              simți rezultatul înainte să spui „da”. Rezultatele reale ale pacienților noștri te așteaptă
              în galeria de cazuri.
            </p>
            <Link to="/cazuri" className="btn-primary mt-7">
              Vezi cazurile înainte/după <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <p className="mt-4 text-[13px] text-white/55">
              Cazuri tratate în clinica noastră, publicate cu acordul pacienților.
            </p>
          </div>
        </section>
      </Reveal>
    </ServiceLayout>
  )
}
