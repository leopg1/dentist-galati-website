import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { usePageMeta } from '../lib/seo'
import { site } from '../lib/site'
import BeforeAfter from '../components/BeforeAfter'
import CTABand from '../components/CTABand'
import Reveal from '../components/Reveal'
import CaseCard from '../components/cazuri/CaseCard'
import CaseVideo from '../components/cazuri/CaseVideo'

export default function Cazuri() {
  usePageMeta(
    'Înainte și după — Cazuri DentaLine Clinic Galați',
    'Transformări reale: implanturi, coroane zirconiu, fațete. Vezi galeria de cazuri înainte/după din clinica DentaLine Galați.',
  )

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-plum-50">
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-plum-200/50 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-coral-200/40 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-site relative py-16 text-center md:py-24">
          <Reveal>
            <p className="eyebrow">Cazuri — Înainte / După</p>
            <h1 className="h-display mx-auto mt-4 max-w-3xl text-4xl md:text-[56px]">
              Rezultate reale, pacienți reali
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-plum-900/75">
              Fiecare zâmbet de mai jos are o poveste: dinți deteriorați, lipsă sau obosiți de vreme —
              transformați cu implanturi, coroane din zirconiu sau fațete ceramice. Toate cazurile sunt
              realizate în clinica noastră, cu acordul pacienților.
            </p>
            <p className="mx-auto mt-7 inline-flex items-center gap-2 rounded-full border border-plum-100 bg-white px-5 py-2.5 text-[13.5px] font-bold text-plum-900 shadow-soft">
              <span className="text-gold-500" aria-hidden="true">★</span>
              {site.rating}/5 din {site.reviewCount} de recenzii Google
            </p>
          </Reveal>
        </div>
      </section>

      {/* Cazurile 01–03 */}
      <section className="section-pad">
        <div className="container-site space-y-20 md:space-y-28">
          <CaseCard
            number="01"
            chip="Implantologie"
            title="Reabilitare totală pe implanturi"
            description="Mandibulă fără dinți, transformată într-o lucrare protetică fixă completă, ancorată pe implanturi — de la proteza mobilă la dinți ficși, într-un singur plan de tratament. Un singur medic te însoțește de la consultație până la lucrarea finală, pe flux complet digital."
            to="/servicii/implantologie"
            linkLabel="Despre implantologia dentară"
            media={
              <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr] sm:items-stretch sm:gap-5">
                <img
                  src="/media/cases/inainte-dupa-implant.jpg"
                  alt="Caz clinic înainte și după: reabilitare totală cu lucrare protetică fixă pe implanturi"
                  className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft sm:aspect-auto sm:h-full"
                  loading="lazy"
                />
                <CaseVideo
                  src="/media/videos/caz-implant.mp4"
                  poster="/media/videos/posters/caz-implant.jpg"
                  ariaLabel="Videoclip cu un caz înainte și după reabilitare totală pe implanturi"
                />
              </div>
            }
          />

          <CaseCard
            number="02"
            chip="Coroane zirconiu"
            title="Transformare cu coroane din zirconiu"
            description="O transformare frumoasă cu coroane de zirconiu stratificat cu ceramică — biocompatibil, extrem de rezistent și cu transluciditate apropiată de a dintelui natural. Lucrarea a fost realizată cu amprentă digitală 3D, în colaborare strânsă cu laboratorul de tehnică dentară partener."
            to="/servicii/coroane-zirconiu"
            linkLabel="Despre coroanele din zirconiu"
            reverse
            media={
              <img
                src="/media/cases/inainte-dupa-implant-2.jpg"
                alt="Colaj înainte și după: transformare cu coroane din zirconiu stratificat cu ceramică"
                className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift"
                loading="lazy"
              />
            }
          />

          <CaseCard
            number="03"
            chip="Estetică dentară"
            title="Estetică frontală: dinți albi, aliniați"
            description="Discromii și obturații vechi la dinții frontali, corectate milimetric: rezultatul — dinți albi, aliniați, cu aspect natural. Armonia dintre formă, culoare și proporții se construiește digital, pentru chipul fiecărui pacient."
            to="/servicii/estetica-dentara"
            linkLabel="Despre estetica dentară"
            media={
              <div>
                <BeforeAfter
                  beforeSrc="/media/cases/ba-inainte.jpg"
                  afterSrc="/media/cases/ba-dupa.jpg"
                  ratioClass="aspect-[7/4]"
                  alt="transformare estetică frontală: fațete și albire"
                  className="shadow-soft"
                />
                <p className="mt-2.5 text-[13px] text-plum-900/70">Trage de mâner ca să compari.</p>
              </div>
            }
          />
        </div>
      </section>

      {/* Cazul 04 — bandă închisă, smile makeover */}
      <section className="relative overflow-hidden bg-plum-950">
        <div
          className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-plum-600/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-coral-600/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-site section-pad relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="font-display text-6xl font-semibold leading-none text-white/20" aria-hidden="true">
              04
            </p>
            <p className="mt-5">
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-[12px] font-bold uppercase tracking-[0.14em] text-teal-300">
                Smile makeover
              </span>
            </p>
            <h2 className="h-display mt-3 text-3xl !text-white md:text-4xl">
              Smile makeover — colecția noastră de zâmbete
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-white/75">
              Fiecare zâmbet din colaj a trecut prin aceeași planificare digitală — și toate au
              început cu o consultație obișnuită.
            </p>
            <Link
              to="/servicii/estetica-dentara"
              className="mt-6 inline-flex items-center gap-2 text-[15px] font-bold text-teal-300 transition hover:gap-3 hover:text-white"
            >
              Vezi serviciul de estetică dentară
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <img
              src="/media/cases/colaj-zambete-bw.jpg"
              alt="Colaj alb-negru cu zâmbetele pacienților după transformări complete de tip smile makeover"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* Cazul 05 — proba fațetelor (video) */}
      <section className="section-pad">
        <div className="container-site">
          <CaseCard
            number="05"
            chip="Fațete ceramice"
            title="Momentul în care pacientul își vede noul zâmbet"
            description="Proba fațetelor ceramice este pasul în care forma și culoarea se validează împreună cu pacientul, înainte de finalizarea lucrării. Iar reacția din acest videoclip spune totul despre motivul pentru care facem această meserie."
            to="/servicii/estetica-dentara"
            linkLabel="Despre fațete și smile makeover"
            reverse
            media={
              <CaseVideo
                src="/media/videos/fatete-proba.mp4"
                poster="/media/videos/posters/fatete-proba.jpg"
                ariaLabel="Videoclip: proba fațetelor ceramice — momentul în care pacientul își vede noul zâmbet"
              />
            }
          />
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-16 md:pb-24">
        <div className="container-site">
          <Reveal>
            <div className="mx-auto flex max-w-3xl items-start gap-3.5 rounded-3xl border border-plum-100 bg-plum-50 px-6 py-5 sm:items-center">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal-500 sm:mt-0" aria-hidden="true" />
              <p className="text-[13.5px] leading-relaxed text-plum-900/70">
                Rezultatele variază de la pacient la pacient. Fotografiile prezintă cazuri tratate în clinica
                noastră, publicate cu acordul pacienților.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Fiecare caz de mai sus a început la fel: cu un telefon"
        text="Al tău poate începe azi. Programează o consultație și vezi ce e posibil."
      />
    </>
  )
}
