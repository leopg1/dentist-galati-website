import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import ServiceLayout from '../../components/ServiceLayout'
import VideoLoop from '../../components/VideoLoop'
import Reveal from '../../components/Reveal'

const probleme = [
  {
    title: 'Un singur dinte lipsă',
    text: 'Înlocuim dintele cu un implant, fără a șlefui dinții vecini sănătoși.',
  },
  {
    title: 'Mai mulți dinți lipsă',
    text: 'Refacem zonele întinse cu punți stabile, sprijinite pe implanturi.',
  },
  {
    title: 'Reabilitare totală',
    text: 'Arcade complete fixe pe implanturi, pentru pacienții care și-au pierdut toți dinții.',
  },
  {
    title: 'Coroane pe implant',
    text: 'Coroane din zirconiu înșurubate pe implant — fără ciment, ușor de întreținut.',
  },
]

const pasi = [
  {
    title: 'Consultație și plan digital',
    text: 'Examinare, radiografie digitală în cabinet și scanare 3D; îți arătăm exact situația și opțiunile.',
  },
  {
    title: 'Inserarea implantului',
    text: 'Procedură precisă, minim invazivă, sub anestezie locală; majoritatea pacienților o descriu ca mai ușoară decât o extracție.',
  },
  {
    title: 'Vindecarea și integrarea',
    text: 'Implantul se integrează în os (de regulă 3–6 luni), timp în care poți purta o lucrare provizorie.',
  },
  {
    title: 'Lucrarea finală',
    text: 'Coroana definitivă din zirconiu sau ceramică, realizată pe baza amprentei digitale, cu aspect natural.',
  },
]

const faq = [
  {
    q: 'Doare inserarea unui implant?',
    a: 'Procedura se face cu anestezie locală; disconfortul post-operator este de obicei mic și trece cu analgezice uzuale.',
  },
  {
    q: 'Cât durează intervenția?',
    a: 'Inserarea propriu-zisă durează adesea sub o oră per implant. Integrarea în os durează, de regulă, 3–6 luni — primești calendarul complet la consultație.',
  },
  {
    q: 'Cât rezistă un implant dentar?',
    a: 'Cu igienă corectă și controale regulate, implantul poate rezista zeci de ani.',
  },
]

export default function Implantologie() {
  return (
    <ServiceLayout
      slug="implantologie"
      metaTitle="Implant dentar Galați — DentaLine Clinic"
      metaDescription="Implant dentar în Galați cu medic cu peste un deceniu de experiență în implantologie. Flux digital, coroane zirconiu pe implant. ☎ 0742 038 270"
      eyebrow="Implantologie dentară"
      title="Implant dentar în Galați — recâștigă-ți zâmbetul complet"
      intro="Un dinte lipsă nu înseamnă doar un gol în zâmbet: în timp, afectează mestecarea, dinții vecini și osul. Implantul dentar este cea mai apropiată soluție de dintele natural — iar la DentaLine, implantologia este specialitatea casei, practicată de Dr. Camelia Vasiliu de peste un deceniu."
      heroImage="/media/cases/inainte-dupa-implant.jpg"
      heroImageAlt="Caz clinic înainte și după: reabilitare protetică fixă pe implanturi realizată la DentaLine"
      badge="Peste un deceniu de implantologie"
      highlights={[
        'Specialitatea casei — peste un deceniu de implantologie',
        'Flux complet digital: scanare 3D și radiografie în cabinet',
        'Soluții fixe pentru un dinte lipsă sau pentru arcada întreagă',
        'Același medic te însoțește la fiecare etapă, până la coroana finală',
      ]}
      ctaTitle="Programează o consultație de implantologie"
    >
      {/* Ce rezolvăm */}
      <Reveal>
        <section aria-labelledby="implant-rezolvam">
          <h2 id="implant-rezolvam" className="h-display text-3xl md:text-4xl">
            Soluții pentru orice dinte lipsă
          </h2>
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            {probleme.map((p, i) => (
              <div
                key={p.title}
                className="card-surface p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="font-display text-3xl font-semibold text-plum-300" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-display text-[22px] font-semibold text-plum-950">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-plum-900/70">{p.text}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Procesul în 4 pași */}
      <Reveal>
        <section aria-labelledby="implant-proces" className="rounded-3xl bg-plum-50 p-7 md:p-10">
          <h2 id="implant-proces" className="h-display text-3xl md:text-4xl">
            Drumul tău, pas cu pas
          </h2>
          <ol className="mt-8 space-y-0">
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
                  <h3 className="font-display text-[22px] font-semibold text-plum-950">{pas.title}</h3>
                  <p className="mt-1.5 max-w-xl text-[15px] leading-relaxed text-plum-900/70">{pas.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </Reveal>

      {/* De ce la DentaLine */}
      <Reveal>
        <section
          aria-labelledby="implant-dece"
          className="rounded-3xl bg-gradient-to-br from-plum-800 to-plum-950 p-7 text-white shadow-lift md:p-10"
        >
          <h2 id="implant-dece" className="h-display text-3xl !text-white md:text-4xl">
            Implantologie cu flux complet digital
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-white/80">
            Scanner intraoral 3D și radiologie digitală direct în cabinet, un singur medic care se
            ocupă de cazul tău la fiecare etapă, până la coroana finală — iar cazurile noastre
            „înainte/după” vorbesc de la sine.
          </p>
          <Link
            to="/cazuri"
            className="mt-7 inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 text-[15px] font-bold text-white transition hover:border-white hover:bg-white/10"
          >
            Vezi cazurile înainte/după <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </section>
      </Reveal>

      {/* Caz real — video */}
      <Reveal>
        <section aria-labelledby="implant-caz" className="grid items-center gap-8 md:grid-cols-[minmax(0,300px)_1fr]">
          <div className="mx-auto w-full max-w-[300px]">
            <VideoLoop
              src="/media/videos/caz-implant.mp4"
              poster="/media/cases/inainte-dupa-implant.jpg"
              ariaLabel="Videoclip: caz de reabilitare totală pe implanturi, înainte și după"
              className="aspect-[9/16] max-h-[560px] w-full rounded-3xl bg-plum-950 shadow-lift"
            />
          </div>
          <div>
            <h2 id="implant-caz" className="h-display text-3xl md:text-4xl">
              Reabilitare totală pe implanturi
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-plum-900/75">
              Pacientul a venit cu o proteză mobilă și a plecat cu dinți ficși: o mandibulă fără
              dinți, reabilitată cu o lucrare protetică fixă completă pe implanturi, într-un singur
              plan de tratament. Urmărește transformarea în videoclipul alăturat.
            </p>
            <p className="mt-4 text-[13px] leading-relaxed text-plum-900/70">
              Caz tratat în clinica noastră, publicat cu acordul pacientului. Rezultatele diferă în
              funcție de fiecare caz.
            </p>
          </div>
        </section>
      </Reveal>

      {/* FAQ */}
      <Reveal>
        <section aria-labelledby="implant-faq">
          <h2 id="implant-faq" className="h-display text-3xl md:text-4xl">
            Întrebările pe care ni le pui cel mai des
          </h2>
          <div className="mt-7 space-y-4">
            {faq.map((item) => (
              <details key={item.q} className="group card-surface px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-bold text-plum-950 [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-plum-50 text-coral-600 transition group-open:rotate-180">
                    <ChevronDown className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-plum-900/70">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </Reveal>
    </ServiceLayout>
  )
}
