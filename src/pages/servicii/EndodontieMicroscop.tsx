import { AlertCircle, Check, Microscope, Phone } from 'lucide-react'
import ServiceLayout from '../../components/ServiceLayout'
import Reveal from '../../components/Reveal'
import MedicServiciu from '../../components/servicii/MedicServiciu'
import { site } from '../../lib/site'

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

/** Tipurile de cazuri pe care le preluăm prin trimitere de la alți medici stomatologi. */
const cazuriTrimise = [
  'Retratamente endodontice — tratamente de canal vechi sau eșuate',
  'Canale calcificate sau cu anatomie dificilă',
  'Instrumente fracturate pe canal',
  'Leziuni periapicale persistente',
  'Dinți la care diagnosticul cere mărire și iluminare',
  'Cazuri în care pacientul a fost îndrumat spre extracție',
]

export default function EndodontieMicroscop() {
  return (
    <ServiceLayout
      slug="endodontie-microscop"
      metaTitle="Endodonție la microscop Galați — DentaLine"
      metaDescription="Tratamente de canal la microscopul operator Zumax: salvăm dinți considerați pierduți, minim invaziv. Programează-te în Galați."
      eyebrow="Endodonție la microscop"
      title="Endodonție la microscop — salvăm dinți considerați pierduți"
      intro="Un tratament de canal făcut corect poate ține un dinte pe loc zeci de ani. La DentaLine, endodonția este specialitatea Dr. Mariana Sacara: lucrează la microscopul operator Zumax, cu mărire și iluminare care scot la iveală canale imposibil de văzut cu ochiul liber."
      heroImage="/media/services/endodontie-tratament-microscop.jpg"
      heroImageAlt="Tratament de canal la microscopul operator Zumax, cu izolare cu digă, în clinica DentaLine din Galați"
      badge="Dr. Mariana Sacara · endodonție la microscop"
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
                className="card-surface flex items-center gap-3.5 px-5 py-4 transition hover:border-plum-200"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coral-50 text-coral-600">
                  <AlertCircle className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                <span className="text-base font-semibold leading-snug text-plum-950">{semn}</span>
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
            <p className="mt-4 text-base leading-relaxed text-plum-900/75">
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
                  <span className="text-base font-semibold text-plum-950">{beneficiu}</span>
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
          <p className="text-base leading-relaxed text-white/85">
            <strong className="font-bold text-white">Microscopul operator Zumax</strong> face parte din
            dotarea clinicii — alături de radiologia digitală și scannerul intraoral 3D, ne ajută să
            punem un diagnostic precis și să tratăm minim invaziv, conservând cât mai mult din dintele
            natural.
          </p>
        </section>
      </Reveal>

      {/* Medicul care se ocupă de endodonție */}
      <Reveal>
        <MedicServiciu
          name="Dr. Mariana Sacara"
          role="Medic stomatolog · Endodonție la microscop"
          photo="/media/team/dr-mariana-sacara.jpg"
          photoAlt="Dr. Mariana Sacara, medic stomatolog la DentaLine Clinic Galați"
          quote="Recomand dr. Mariana Săcara pentru orice tratament! E foarte bine pregătită!"
          quoteAuthor="Ionica C., recenzie Google"
        >
          <p>
            La DentaLine, tratamentele de canal se fac de către Dr. Mariana Sacara, cu microscopul
            operator la fiecare etapă — de la găsirea canalelor până la obturarea lor. În endodonție
            asta contează cel mai mult: un canal nevăzut înseamnă, mai devreme sau mai târziu, un dinte
            pierdut.
          </p>
        </MedicServiciu>
      </Reveal>

      {/* Trimiteri de la medici stomatologi */}
      <Reveal>
        <section
          aria-labelledby="endo-trimiteri"
          className="rounded-3xl bg-gradient-to-br from-teal-50 via-white to-plum-50 p-7 ring-1 ring-teal-100 md:p-9"
        >
          <p className="eyebrow !text-teal-600">Pentru medici stomatologi</p>
          <h2 id="endo-trimiteri" className="h-display mt-3 text-3xl md:text-4xl">
            Trimiteți-ne cazurile endodontice dificile
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-plum-900/75">
            Colaborăm cu medici stomatologi din Galați și din județ care preferă să rezolve cazurile
            endodontice complexe într-un cabinet dotat cu microscop operator. Dr. Mariana Sacara preia
            tratamentul de canal, iar pacientul se întoarce la dumneavoastră pentru restul planului de
            tratament.
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {cazuriTrimise.map((caz) => (
              <li key={caz} className="flex items-start gap-3 rounded-2xl bg-white px-5 py-3.5 shadow-hair">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold leading-snug text-plum-950">{caz}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a href={site.phoneHref} className="btn-primary">
              <Phone className="h-4 w-4" aria-hidden="true" /> {site.phone}
            </a>
            <p className="text-sm font-semibold text-plum-900/70">
              Sunați-ne și vă punem direct în legătură cu medicul.
            </p>
          </div>
        </section>
      </Reveal>
    </ServiceLayout>
  )
}
