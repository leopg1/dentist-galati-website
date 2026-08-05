import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ServiceLayout from '../../components/ServiceLayout'
import VideoLoop from '../../components/VideoLoop'
import Reveal from '../../components/Reveal'
import MedicServiciu from '../../components/servicii/MedicServiciu'
import FaqItem from '../../components/contact/FaqItem'

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
    text: 'Coroane din zirconiu înșurubate pe implant, fără ciment și ușor de întreținut.',
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
    a: 'Inserarea propriu-zisă durează adesea sub o oră per implant. Integrarea în os durează, de regulă, 3–6 luni; primești calendarul complet la consultație.',
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
      title={
        <>
          Implant dentar în Galați — <span className="text-coral-600">recâștigă-ți zâmbetul complet</span>
        </>
      }
      intro="Un dinte lipsă nu înseamnă doar un gol în zâmbet: în timp, afectează mestecarea, dinții vecini și osul. Implantul dentar este cea mai apropiată soluție de dintele natural — iar la DentaLine, implantologia este specialitatea casei, practicată de Dr. Camelia Vasiliu de peste un deceniu."
      heroImage="/media/cases/inainte-dupa-implant.jpg"
      heroImageAlt="Caz clinic înainte și după: reabilitare protetică fixă pe implanturi realizată la DentaLine"
      badge="Dr. Camelia Vasiliu · implantologie"
      highlights={[
        'Specialitatea casei: peste un deceniu de implantologie',
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
          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {probleme.map((p, i) => (
              <div key={p.title} className="card-surface card-pad transition hover:border-plum-200">
                <span className="font-display text-3xl font-semibold text-plum-300" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 card-title">{p.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-plum-900/70">{p.text}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Procesul în 4 pași */}
      <Reveal>
        <section aria-labelledby="implant-proces" className="rounded-3xl bg-plum-50 card-pad-lg">
          <h2 id="implant-proces" className="h-display text-3xl md:text-4xl">
            Drumul tău, pas cu pas
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

      {/* Caz real + flux digital — bandă luminoasă integrată */}
      <Reveal>
        <section
          aria-labelledby="implant-caz"
          className="grid items-center gap-8 overflow-hidden rounded-3xl bg-gradient-to-br from-plum-50 via-white to-teal-50/60 card-pad-lg shadow-soft ring-1 ring-plum-100 md:grid-cols-[minmax(0,280px)_1fr]"
        >
          <div className="mx-auto w-full max-w-[280px]">
            <VideoLoop
              src="/media/videos/caz-implant.mp4"
              poster="/media/videos/posters/caz-implant.jpg"
              ariaLabel="Videoclip: caz de reabilitare totală pe implanturi, înainte și după"
              className="aspect-[9/16] max-h-[560px] w-full rounded-3xl bg-plum-950 shadow-lift"
            />
          </div>
          <div>
            <p className="eyebrow !text-teal-600">Caz real din clinică</p>
            <h2 id="implant-caz" className="h-display mt-3 text-3xl md:text-4xl">
              Reabilitare totală pe implanturi
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-plum-900/75">
              Pacientul a venit cu o proteză mobilă și a plecat cu dinți ficși: o mandibulă fără
              dinți, reabilitată cu o lucrare protetică fixă completă pe implanturi, într-un singur
              plan de tratament. De la scanarea 3D la radiografiile de control, fiecare etapă s-a
              făcut în cabinet, pe flux complet digital.
            </p>
            <Link to="/cazuri" className="btn-secondary mt-7">
              Vezi cazurile înainte/după <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-plum-900/60">
              Caz tratat în clinica noastră, publicat cu acordul pacientului. Rezultatele diferă în
              funcție de fiecare caz.
            </p>
          </div>
        </section>
      </Reveal>

      {/* Medicul care se ocupă de implantologie */}
      <Reveal>
        <MedicServiciu
          name="Dr. Camelia Vasiliu"
          role="Medic stomatolog · Implantologie și chirurgie dentară"
          photo="/media/team/dr-camelia-vasiliu.jpg"
          photoAlt="Dr. Camelia Vasiliu, medic stomatolog și fondator DentaLine Clinic Galați"
          quote="Recomand cu mare încredere serviciile clinicii! Dr. Vasiliu Camelia și Dr. Sacara Mariana sunt minunate și foarte bune în ce fac."
          quoteAuthor="Vasilica I., recenzie Google"
        >
          <p>
            Implantologia este domeniul în care Dr. Camelia Vasiliu lucrează de peste un deceniu: de
            la implanturi pentru un singur dinte până la reabilitări complete pe arcadă. Fiecare caz
            pornește de la un plan digital, construit pe radiografia și scanarea 3D făcute în
            cabinet, pe care ți-l explică pe înțeles înainte de orice intervenție.
          </p>
          <p>
            La fel de important: aceeași doamnă doctor te însoțește la fiecare etapă, de la prima
            consultație până la coroana finală.
          </p>
        </MedicServiciu>
      </Reveal>

      {/* FAQ */}
      <Reveal>
        <section aria-labelledby="implant-faq">
          <h2 id="implant-faq" className="h-display text-3xl md:text-4xl">
            Întrebările pe care ni le pui cel mai des
          </h2>
          <div className="mt-7 space-y-4">
            {faq.map((item) => (
              <FaqItem key={item.q} question={item.q}>
                {item.a}
              </FaqItem>
            ))}
          </div>
        </section>
      </Reveal>
    </ServiceLayout>
  )
}
