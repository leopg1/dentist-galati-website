import { AlertCircle, Check, Microscope } from 'lucide-react'
import ServiceLayout from '../../components/ServiceLayout'
import Reveal from '../../components/Reveal'

const semne = [
  'Durere intensă sau pulsatilă',
  'Sensibilitate prelungită la cald sau rece',
  'Infecții și abcese',
  'Reluarea unor tratamente de canal vechi, incorecte',
  'Dinți cu anatomie complicată',
]

const beneficii = [
  'Precizie maximă la fiecare canal tratat',
  'Șanse mai mari de salvare a dintelui',
  'Tratamente minim invazive',
  'Adesea, totul într-o singură ședință',
]

export default function EndodontieMicroscop() {
  return (
    <ServiceLayout
      slug="endodontie-microscop"
      metaTitle="Endodonție la microscop Galați — DentaLine"
      metaDescription="Tratamente de canal la microscopul operator Zumax: salvăm dinți considerați pierduți, minim invaziv. Programează-te în Galați."
      eyebrow="Endodonție la microscop"
      title="Endodonție la microscop — salvăm dinți considerați pierduți"
      intro="Tratamentul de canal făcut corect poate salva un dinte pentru zeci de ani. La DentaLine, tratamentele endodontice se realizează la microscopul operator Zumax, cu mărire și iluminare care fac vizibile canale imposibil de văzut cu ochiul liber."
      heroImage="/media/services/microscop-zumax.jpg"
      heroImageAlt="Microscopul operator Zumax din clinica DentaLine, folosit pentru tratamentele de canal"
      badge="Microscop operator Zumax"
      highlights={[
        'Microscop operator Zumax, cu mărire și iluminare',
        'Șanse mai mari de salvare a dintelui',
        'Tratamente minim invazive',
        'Adesea într-o singură ședință',
      ]}
      ctaTitle="Nu te grăbi să scoți dintele — întreabă-ne întâi dacă îl putem salva"
    >
      {/* Când ai nevoie */}
      <Reveal>
        <section aria-labelledby="endo-semne">
          <h2 id="endo-semne" className="h-display text-3xl md:text-4xl">
            Semnele care cer un tratament de canal
          </h2>
          <ul className="mt-7 grid gap-4 sm:grid-cols-2">
            {semne.map((semn) => (
              <li
                key={semn}
                className="card-surface flex items-center gap-3.5 px-5 py-4 transition duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coral-50 text-coral-600">
                  <AlertCircle className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                <span className="text-[15px] font-semibold leading-snug text-plum-950">{semn}</span>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      {/* Beneficii + imagine microscop-lucru */}
      <Reveal>
        <section aria-labelledby="endo-beneficii" className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr]">
          <img
            src="/media/services/microscop-lucru.jpg"
            alt="Medic DentaLine efectuând un tratament de canal la microscopul operator"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lift"
          />
          <div>
            <h2 id="endo-beneficii" className="h-display text-3xl md:text-4xl">
              Ce câștigi când tratăm la microscop
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-plum-900/75">
              Mărirea și iluminarea microscopului operator ne lasă să vedem și să tratăm canale pe
              care ochiul liber pur și simplu nu le poate găsi. Asta se traduce direct în rezultate:
            </p>
            <ul className="mt-6 space-y-3.5">
              {beneficii.map((beneficiu) => (
                <li
                  key={beneficiu}
                  className="flex items-center gap-3 rounded-2xl bg-plum-50 px-5 py-3.5"
                >
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-[15px] font-semibold text-plum-950">{beneficiu}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Reveal>

      {/* Notă despre microscop */}
      <Reveal>
        <section
          aria-label="Despre microscopul operator"
          className="flex flex-col items-start gap-5 rounded-3xl bg-gradient-to-br from-plum-800 to-plum-950 p-7 text-white shadow-lift sm:flex-row sm:items-center md:p-9"
        >
          <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-teal-300">
            <Microscope className="h-7 w-7" aria-hidden="true" />
          </span>
          <p className="text-[15.5px] leading-relaxed text-white/85">
            <strong className="font-bold text-white">Microscopul operator Zumax</strong> face parte din
            dotarea clinicii — alături de radiologia digitală și scannerul intraoral 3D, ne ajută să
            punem un diagnostic precis și să tratăm minim invaziv, conservând cât mai mult din dintele
            natural.
          </p>
        </section>
      </Reveal>
    </ServiceLayout>
  )
}
