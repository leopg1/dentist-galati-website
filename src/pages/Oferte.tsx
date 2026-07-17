import { Check, CreditCard, HeartHandshake, Phone, ReceiptText } from 'lucide-react'
import { site } from '../lib/site'
import { faqItems } from '../lib/faq'
import { usePageMeta } from '../lib/seo'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CTABand from '../components/CTABand'
import FaqItem from '../components/contact/FaqItem'

const medlifeBenefits = [
  ['20% reducere', ' la tratamentele dentare'],
  ['Detartraj + AirFlow', ' gratuit'],
  ['Consultație gratuită', ''],
] as const

const heroChips = [
  { icon: HeartHandshake, label: 'Partener MedLife' },
  { icon: CreditCard, label: 'Plata în rate prin tbi bank' },
  { icon: ReceiptText, label: 'Plan de tratament transparent' },
] as const

export default function Oferte() {
  usePageMeta(
    'Oferte & Facilități — DentaLine Clinic Galați',
    'MedLife la DentaLine Galați: 20% reducere la tratamente, detartraj și AirFlow gratuit, consultație gratuită. Plata în rate prin tbi bank.',
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
          className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-coral-200/40 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-site relative py-14 text-center md:py-20">
          <Reveal>
            <p className="eyebrow">Oferte & facilități</p>
            <h1 className="h-display mt-3 text-4xl md:text-5xl">
              Tratamente accesibile, fără compromisuri
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-plum-900/70">
              Îngrijirea dentară de calitate trebuie să fie și accesibilă. De aceea am construit
              parteneriate care îți fac tratamentele mai ușor de planificat — și de plătit.
            </p>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {heroChips.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-plum-200 bg-white px-4 py-2 text-[13.5px] font-bold text-plum-800 shadow-soft"
                >
                  <Icon className="h-4 w-4 text-coral-600" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* MedLife + facilități */}
      <section className="section-pad">
        <div className="container-site">
          <Reveal>
            <div className="isolate relative overflow-hidden rounded-3xl bg-gradient-to-br from-plum-600 via-plum-700 to-plum-900 text-white shadow-lift">
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-coral-600/25 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative grid items-center gap-10 p-8 md:grid-cols-[1.15fr_1fr] md:p-14">
                <div>
                  <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.18em] text-teal-300">
                    <HeartHandshake className="h-4 w-4" aria-hidden="true" /> Beneficii exclusive
                  </p>
                  <h2 className="h-display mt-3 text-3xl !text-white md:text-4xl">
                    Parteneriat MedLife
                  </h2>
                  <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-white/80">
                    Ai abonament MedLife? La DentaLine, abonamentul tău se transformă în beneficii
                    concrete, la fiecare vizită:
                  </p>
                  <ul className="mt-6 space-y-3.5">
                    {medlifeBenefits.map(([strong, rest]) => (
                      <li key={strong} className="flex items-start gap-3 text-[15.5px] text-white/90">
                        <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-400/20 text-teal-300">
                          <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                        <span>
                          <strong className="font-bold text-white">{strong}</strong>
                          {rest}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 max-w-lg text-[13.5px] italic leading-relaxed text-white/60">
                    Prezintă cardul sau abonamentul MedLife la recepție. Detalii și condiții
                    complete — în clinică sau la telefon.
                  </p>
                  <a href={site.phoneHref} className="btn-primary mt-7">
                    <Phone className="h-4 w-4" aria-hidden="true" /> Întreabă-ne de oferte
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-full max-w-xs rounded-3xl border border-white/15 bg-white/10 p-8 text-center backdrop-blur">
                    <p className="font-display bg-gradient-to-r from-white to-coral-200 bg-clip-text text-7xl font-semibold leading-none text-transparent">
                      −20%
                    </p>
                    <p className="mt-3 text-[15px] font-semibold leading-snug text-white/85">
                      la tratamentele dentare pentru abonații MedLife
                    </p>
                    <div className="mt-6 h-px bg-white/15" aria-hidden="true" />
                    <p className="mt-5 text-[14px] leading-relaxed text-white/75">
                      + detartraj & AirFlow gratuit
                      <br />+ consultație gratuită
                    </p>
                    <p className="mt-4 text-[11.5px] font-bold uppercase tracking-[0.2em] text-teal-300">
                      Condiții în clinică
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Reveal delay={0.1}>
              <div className="card-surface h-full p-8 transition hover:-translate-y-1">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-coral-50 text-coral-600">
                  <CreditCard className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-5 font-display text-2xl font-semibold text-plum-950 md:text-3xl">
                  Plata în rate prin tbi bank
                </h2>
                <p className="mt-3 text-[15.5px] leading-relaxed text-plum-900/75">
                  Tratamentele ample — implanturi, reabilitări protetice, smile makeover — pot fi
                  achitate <strong className="font-bold text-plum-950">în rate</strong>, prin
                  partenerul nostru de finanțare tbi bank. Aplici direct în clinică, răspunsul vine
                  rapid.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="h-full rounded-3xl border border-teal-100 bg-teal-50 p-8 shadow-soft transition hover:-translate-y-1">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-teal-600 shadow-soft">
                  <ReceiptText className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-5 font-display text-2xl font-semibold text-plum-950 md:text-3xl">
                  Plan de tratament transparent
                </h2>
                <p className="mt-3 text-[15.5px] leading-relaxed text-plum-900/75">
                  Înainte de orice tratament primești planul complet, cu etape și costuri — fără
                  surprize pe parcurs. Știi de la început ce facem, de ce și cât costă.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-plum-50">
        <div className="container-site">
          <SectionHeading
            eyebrow="Întrebări frecvente"
            title="Ai întrebări? Avem răspunsuri"
            intro="Cele mai frecvente întrebări pe care le primim la telefon și la recepție — cu răspunsuri deschise, fără limbaj de lemn."
          />
          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {faqItems.map((item, i) => (
              <Reveal key={item.q} delay={Math.min(i * 0.05, 0.25)}>
                <FaqItem question={item.q}>{item.a}</FaqItem>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Un singur telefon desparte întrebarea de răspuns"
        text="Sună-ne sau lasă-ne un mesaj — afli exact ce opțiuni ai și cât costă."
      />
    </>
  )
}
