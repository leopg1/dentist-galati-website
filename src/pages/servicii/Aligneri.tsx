import { CalendarCheck, EyeOff, UtensilsCrossed } from 'lucide-react'
import ServiceLayout from '../../components/ServiceLayout'
import VideoLoop from '../../components/VideoLoop'
import Reveal from '../../components/Reveal'

const pasi = [
  {
    title: 'Scanare 3D a dinților',
    text: 'Fără pastă de amprentă: scannerul intraoral creează modelul digital exact al dinților tăi.',
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
    text: 'La final, menținem noua poziție a dinților — ca zâmbetul tău drept să rămână așa.',
  },
]

const avantaje = [
  {
    icon: EyeOff,
    title: 'Estetic',
    text: 'Gutierele sunt aproape invizibile — nimeni nu le observă în conversații sau fotografii.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Igienă ușoară',
    text: 'Le scoți la masă și la periaj — fără restricții alimentare și fără zone greu de curățat.',
  },
  {
    icon: CalendarCheck,
    title: 'Mai puține urgențe',
    text: 'Fără bracket-uri dezlipite sau sârme rupte — mai puține vizite neprevăzute decât la aparatul clasic.',
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
      intro="Gutierele transparente (alignerii) îndreaptă dinții fără bracket-uri metalice: sunt detașabile, aproape invizibile și confortabile — soluția preferată de adulți și adolescenți."
      heroImage="/media/services/tratament-lila.jpg"
      heroImageAlt="Tratament ortodontic modern în cabinetul DentaLine din Galați"
      badge="Plan 3D cu rezultatul vizibil de la început"
      highlights={[
        'Aproape invizibili — nimeni nu îi observă',
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
        <ol className="mt-9">
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
                <h3 className="pt-1.5 font-display text-xl font-semibold text-plum-950">{p.title}</h3>
                <p className="mt-1.5 text-[14.5px] leading-relaxed text-plum-900/70">{p.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>

      {/* Avantaje */}
      <Reveal>
        <div className="rounded-3xl bg-plum-50 p-7 md:p-9">
          <h2 className="h-display text-3xl md:text-4xl">Avantajele față de aparatul clasic</h2>
          <div className="mt-7 grid gap-5 sm:grid-cols-3">
            {avantaje.map((a) => (
              <div key={a.title} className="rounded-2xl bg-white p-5 shadow-soft transition hover:-translate-y-1">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-teal-600">
                  <a.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3.5 font-display text-lg font-semibold text-plum-950">{a.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-plum-900/70">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Video aligneri */}
      <div className="grid items-center gap-8 md:grid-cols-[1fr_minmax(0,300px)]">
        <Reveal>
          <h2 className="h-display text-3xl md:text-4xl">Vezi alignerii în acțiune</h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-plum-900/75">
            Subțiri, transparenți și croiți milimetric pe dinții tăi. În clinică îți arătăm planul digital 3D și
            simularea rezultatului final — știi exact ce urmează, înainte să începi tratamentul.
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
    </ServiceLayout>
  )
}
