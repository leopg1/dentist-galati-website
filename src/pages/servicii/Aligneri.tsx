import { CalendarCheck, EyeOff, UtensilsCrossed } from 'lucide-react'
import ServiceLayout from '../../components/ServiceLayout'
import ArticleTeaser from '../../components/articole/ArticleTeaser'
import VideoLoop from '../../components/VideoLoop'
import Reveal from '../../components/Reveal'
import MedicServiciu from '../../components/servicii/MedicServiciu'

const pasi = [
  {
    title: 'Scanare 3D a dinților',
    text: 'Fără pastă de amprentă: scanerul intraoral creează modelul digital exact al dinților tăi.',
  },
  {
    title: 'Plan digital cu rezultatul final',
    text: 'Vezi pe ecran, încă de la început, cum vor arăta dinții tăi la finalul tratamentului.',
  },
  {
    title: 'Seria de gutiere transparente',
    text: 'Porți fiecare set de aligneri câteva săptămâni, iar dinții se mută treptat, controlat.',
  },
  {
    title: 'Retenția rezultatului',
    text: 'La final, menținem noua poziție a dinților, ca zâmbetul tău drept să rămână așa.',
  },
]

const avantaje = [
  {
    icon: EyeOff,
    title: 'Estetic',
    text: 'Gutierele transparente se văd greu în conversații sau în fotografii.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Igienă ușoară',
    text: 'Le scoți la masă și la periaj: fără restricții alimentare și fără zone greu de curățat.',
  },
  {
    icon: CalendarCheck,
    title: 'Mai puține urgențe',
    text: 'Fără bracket-uri dezlipite sau sârme rupte, deci mai puține vizite neprevăzute decât la aparatul clasic.',
  },
]

export default function Aligneri() {
  return (
    <ServiceLayout
      slug="aligneri"
      metaTitle="Aparat dentar invizibil Galați — Aligneri DentaLine"
      metaDescription="Îndreaptă-ți dinții cu aligneri transparenți, fără bracket-uri. Plan digital 3D cu rezultatul vizibil de la început. Galați."
      eyebrow="Ortodonție modernă"
      title={
        <>
          Aparat dentar invizibil — <span className="text-coral-600">îndreaptă-ți dinții discret</span>
        </>
      }
      intro="Gutierele transparente (alignerii) îndreaptă dinții fără bracket-uri metalice: sunt detașabile, discrete și confortabile, alese tot mai des de adulți și adolescenți. La DentaLine, tratamentele cu aligneri sunt coordonate de Dr. Diana Șerban, atât pentru adulți, cât și pentru copii."
      heroImage="/media/services/medic-serban-la-lucru.jpg"
      heroImageAlt="Dr. Diana Șerban în timpul unui tratament, în clinica DentaLine din Galați"
      heroImageClassName="object-[center_35%]"
      badge="Coordonat de Dr. Diana Șerban"
      highlights={[
        'Greu de observat chiar de aproape',
        'Detașabili: îi scoți la masă și la periaj',
        'Plan digital 3D cu rezultatul vizibil de la început',
      ]}
      ctaTitle="Vino la o evaluare ortodontică"
    >
      {/* Cum funcționează — pași */}
      <div>
        <Reveal>
          <h2 className="h-display text-3xl md:text-4xl">Patru pași până la un zâmbet drept</h2>
        </Reveal>
        <ol className="mt-7">
          {pasi.map((p, i) => (
            <li key={p.title} className="relative pb-9 pl-16 last:pb-0">
              {i < pasi.length - 1 && (
                <span
                  className="absolute left-[22px] top-12 h-[calc(100%-3rem)] w-px bg-plum-200"
                  aria-hidden="true"
                />
              )}
              <Reveal delay={i * 0.08}>
                <span className="absolute left-0 top-0 inline-flex h-11 w-11 items-center justify-center rounded-full bg-plum-100 font-display text-xl font-semibold text-plum-700">
                  {i + 1}
                </span>
                <h3 className="pt-1.5 card-title">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-plum-900/70">{p.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>

      {/* Avantaje */}
      <Reveal>
        <div className="rounded-3xl bg-plum-50 card-pad-lg">
          <h2 className="h-display text-3xl md:text-4xl">Avantajele față de aparatul clasic</h2>
          <div className="mt-7 grid gap-6 sm:grid-cols-3 lg:gap-8">
            {avantaje.map((a) => (
              <div key={a.title} className="rounded-2xl bg-white p-5 shadow-soft">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-100 text-teal-600">
                  <a.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3.5 card-title">{a.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-plum-900/70">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Video aligneri */}
      <div className="grid items-center gap-8 md:grid-cols-[1.1fr_minmax(0,340px)]">
        <Reveal>
          <h2 className="h-display text-3xl md:text-4xl">Vezi alignerii în acțiune</h2>
          <p className="mt-4 text-base leading-relaxed text-plum-900/75">
            Subțiri, transparenți și croiți milimetric pe dinții tăi. În clinică îți arătăm planul digital 3D și
            simularea rezultatului final: știi exact ce urmează, înainte să începi tratamentul.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <VideoLoop
            src="/media/videos/aligneri.mp4"
            poster="/media/videos/posters/aligneri.jpg"
            ariaLabel="Videoclip: alignerii transparenți, prezentare din cabinet"
            className="mx-auto aspect-[9/16] max-h-[560px] w-full rounded-3xl shadow-lift"
          />
        </Reveal>
      </div>

      {/* Medicul care se ocupă de aligneri */}
      <Reveal>
        <MedicServiciu
          name="Dr. Diana Șerban"
          role="Medic stomatolog · Aligneri copii și adulți"
          photo="/media/team/dr-diana-serban.jpg"
          photoAlt="Dr. Diana Șerban, medic stomatolog la DentaLine Clinic Galați"
          quote="Am avut onoarea de a fi pacientul dnei dr. Diana Șerban, fiind plăcut impresionat de profesionalismul, grija și empatia față de actul medical și pacient."
          quoteAuthor="Daniel C., recenzie Google"
        >
          <p>
            Tratamentele cu aligneri sunt coordonate de Dr. Diana Șerban, atât pentru adulți, cât și
            pentru copii și adolescenți. Totul pornește de la o scanare intraorală 3D, fără pastă de
            amprentă, pe baza căreia construim planul digital și vezi rezultatul final încă de la prima
            ședință.
          </p>
          <p>
            Tot ea urmărește fiecare etapă a tratamentului, ca gutierele să lucreze exact cum au fost
            planificate.
          </p>
        </MedicServiciu>
      </Reveal>

      {/* Trimitere către articolul legat de acest serviciu */}
      <Reveal>
        <ArticleTeaser slug="aligneri-sau-aparat-dentar-fix" label="Comparația cu aparatul dentar fix:" />
      </Reveal>
    </ServiceLayout>
  )
}
