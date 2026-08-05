import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import ServiceLayout from '../../components/ServiceLayout'
import VideoLoop from '../../components/VideoLoop'
import Reveal from '../../components/Reveal'
import MedicServiciu from '../../components/servicii/MedicServiciu'
import FaqItem from '../../components/contact/FaqItem'

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
      title={
        <>
          Estetică dentară — <span className="text-coral-600">zâmbetul pe care ți-l dorești, natural</span>
        </>
      }
      intro="„Smile makeover” înseamnă mai mult decât dinți albi: înseamnă armonie între formă, culoare și proporții — construită milimetric pentru chipul tău. La DentaLine, fațetele și transformările estetice sunt în grija Dr. Diana Șerban: planificate digital și executate cu materiale ceramice premium."
      heroImage="/media/cases/colaj-zambete-bw.jpg"
      heroImageAlt="Colaj alb-negru cu zâmbete transformate prin estetică dentară la DentaLine"
      badge="Dr. Diana Șerban · estetică dentară"
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
                className="card-surface flex items-center gap-3.5 px-5 py-4 transition hover:border-plum-200"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-coral-50 text-coral-600">
                  <Sparkles className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                <span className="text-base font-semibold text-plum-950">{serviciu}</span>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      {/* Cum lucrăm */}
      <Reveal>
        <section aria-labelledby="estetica-proces" className="rounded-3xl bg-plum-50 card-pad-lg">
          <h2 id="estetica-proces" className="h-display text-3xl md:text-4xl">
            Patru pași până la zâmbetul final
          </h2>
          <ol className="mt-7 space-y-0">
            {pasi.map((pas, i) => (
              <li key={pas.title} className="relative flex gap-5 pb-8 last:pb-0">
                {i < pasi.length - 1 && (
                  <span
                    className="absolute left-[22px] top-12 h-[calc(100%-3rem)] w-px bg-plum-200"
                    aria-hidden="true"
                  />
                )}
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-coral-600 font-display text-xl font-semibold text-white shadow-soft">
                  {i + 1}
                </span>
                <div className="pt-1.5">
                  <h3 className="card-title">{pas.title}</h3>
                  <p className="mt-1.5 max-w-xl text-base leading-relaxed text-plum-900/70">{pas.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </Reveal>

      {/* Proba fațetelor — video + link cazuri */}
      <Reveal>
        <section
          aria-labelledby="estetica-proba"
          className="grid items-center gap-8 overflow-hidden rounded-3xl bg-gradient-to-br from-plum-50 via-white to-teal-50/60 card-pad-lg shadow-soft ring-1 ring-plum-100 md:grid-cols-[minmax(0,280px)_1fr]"
        >
          <div className="mx-auto w-full max-w-[280px]">
            <VideoLoop
              src="/media/videos/fatete-proba.mp4"
              poster="/media/videos/posters/fatete-proba.jpg"
              ariaLabel="Videoclip: proba fațetelor ceramice pe zâmbetul pacientului"
              className="aspect-[9/16] max-h-[560px] w-full rounded-3xl bg-plum-900 shadow-lift"
            />
          </div>
          <div>
            <h2 id="estetica-proba" className="h-display text-3xl md:text-4xl">
              Proba fațetelor: clipa în care îți vezi noul zâmbet
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-plum-900/75">
              Înainte de finalizarea în ceramică, probăm fațetele direct pe dinții tăi, ca să vezi și să
              simți rezultatul înainte să spui „da”. Rezultatele reale ale pacienților noștri te așteaptă
              în galeria de cazuri.
            </p>
            <Link to="/cazuri" className="btn-primary mt-7">
              Vezi cazurile înainte/după <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <p className="mt-4 text-xs text-plum-900/60">
              Cazuri tratate în clinica noastră, publicate cu acordul pacienților.
            </p>
          </div>
        </section>
      </Reveal>

      {/* Medicul care se ocupă de fațete */}
      <Reveal>
        <MedicServiciu
          name="Dr. Diana Șerban"
          role="Medic stomatolog · Fațete și estetică dentară"
          photo="/media/team/dr-diana-serban.jpg"
          photoAlt="Dr. Diana Șerban, medic stomatolog la DentaLine Clinic Galați"
          quote="Profesionalism și empatie! Totul la superlativ! O echipă care face minuni!…"
          quoteAuthor="Florica I., recenzie Google"
        >
          <p>
            Dr. Diana Șerban se ocupă de fațetele dentare și de tratamentele de estetică dentară, de la
            planificarea digitală a zâmbetului până la proba și lipirea fațetelor ceramice.
          </p>
          <p>
            Scanarea intraorală 3D îi permite să îți arate forma și proporțiile noului zâmbet înainte să
            atingem dinții: vezi rezultatul, apoi decizi.
          </p>
        </MedicServiciu>
      </Reveal>

      {/* FAQ */}
      <Reveal>
        <section aria-labelledby="estetica-faq">
          <h2 id="estetica-faq" className="h-display text-3xl md:text-4xl">
            Întrebările pe care ni le pui cel mai des
          </h2>
          <div className="mt-7 space-y-4">
            <FaqItem question="Doare aplicarea fațetelor ceramice?">
              De regulă, nu: pregătirea dinților este minimă și se face sub anestezie locală, iar proba
              și lipirea fațetelor sunt nedureroase. O sensibilitate ușoară în primele zile este
              normală și trece de la sine.
            </FaqItem>
            <FaqItem question="Cât durează un smile makeover?">
              Depinde de complexitatea cazului: o albire profesională se face într-o singură vizită,
              iar fațetele ceramice au nevoie, de regulă, de câteva ședințe, între care laboratorul
              execută lucrarea finală. Primești calendarul exact la consultație.
            </FaqItem>
            <FaqItem question="Cât rezistă fațetele ceramice?">
              Cu igienă corectă și controale regulate, fațetele ceramice rezistă, de regulă, mulți
              ani. La consultație îți spunem și cum le protejezi: de exemplu, dacă scrâșnești din
              dinți noaptea, îți recomandăm o gutieră de protecție.
            </FaqItem>
          </div>
        </section>
      </Reveal>
    </ServiceLayout>
  )
}
