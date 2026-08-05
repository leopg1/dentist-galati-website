import { Link } from 'react-router-dom'
import { Check, CreditCard, HeartHandshake, Phone, ReceiptText } from 'lucide-react'
import { site } from '../lib/site'
import { faqItems } from '../lib/faq'
import { usePageMeta } from '../lib/seo'
import Reveal from '../components/Reveal'
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
        <div className="container-site relative hero-pad text-center">
          <Reveal>
            <p className="eyebrow">Oferte & facilități</p>
            <h1 className="h-display mt-3 text-4xl md:text-[52px]">
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
                  className="inline-flex items-center gap-2 rounded-full border border-plum-200 bg-white px-4 py-2 text-xs font-bold text-plum-800 shadow-soft"
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
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-plum-50 via-white to-teal-50/60 shadow-soft ring-1 ring-plum-100">
              <div className="relative grid items-center gap-10 px-7 py-12 md:grid-cols-[1.15fr_1fr] md:px-12 md:py-16 lg:px-16">
                <div>
                  <p className="eyebrow !text-teal-600">
                    <HeartHandshake className="h-4 w-4" aria-hidden="true" /> Beneficii exclusive
                  </p>
                  <h2 className="h-display mt-3 text-3xl md:text-4xl">
                    Parteneriat MedLife
                  </h2>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-plum-900/70">
                    Ai abonament MedLife? La DentaLine, abonamentul tău se transformă în beneficii
                    concrete, la fiecare vizită:
                  </p>
                  <ul className="mt-6 space-y-3.5">
                    {medlifeBenefits.map(([strong, rest]) => (
                      <li key={strong} className="flex items-start gap-3 text-base text-plum-900/80">
                        <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                          <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                        <span>
                          <strong className="font-bold text-plum-950">{strong}</strong>
                          {rest}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 max-w-lg text-xs italic leading-relaxed text-plum-900/60">
                    Prezintă cardul sau abonamentul MedLife la recepție. Detalii și condiții
                    complete, în clinică sau la telefon.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-4">
                    <a href={site.phoneHref} className="btn-primary">
                      <Phone className="h-4 w-4" aria-hidden="true" /> Întreabă-ne de oferte
                    </a>
                    <Link to="/contact#formular" className="btn-secondary">
                      Cere o programare online
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-full max-w-xs rounded-3xl border border-plum-100 bg-white card-pad text-center shadow-hair">
                    <p className="font-display text-7xl font-semibold leading-none text-plum-950">
                      −20%
                    </p>
                    <p className="mt-3 text-base font-semibold leading-snug text-plum-900/75">
                      la tratamentele dentare, pentru abonații MedLife
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-6 lg:gap-8 md:grid-cols-2">
            <Reveal delay={0.1}>
              <div className="card-surface h-full card-pad-lg transition hover:border-plum-200">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-coral-50 text-coral-600">
                  <CreditCard className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="card-title mt-5">
                  Plata în rate prin tbi bank
                </h2>
                <p className="mt-3 text-base leading-relaxed text-plum-900/75">
                  Un implant sau o reabilitare completă nu trebuie plătite dintr-o dată. Prin
                  partenerul nostru de finanțare tbi bank poți împărți costul{' '}
                  <strong className="font-bold text-plum-950">în rate lunare</strong>: depui
                  cererea direct în clinică și primești răspunsul rapid.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="card-surface h-full card-pad-lg transition hover:border-plum-200">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                  <ReceiptText className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="card-title mt-5">
                  Plan de tratament transparent
                </h2>
                <p className="mt-3 text-base leading-relaxed text-plum-900/75">
                  Înainte de orice tratament primești planul complet, cu etape și costuri, fără
                  surprize pe parcurs. Știi de la început ce facem, de ce și cât costă.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ — același layout ca pe Contact: heading centrat, max-w-3xl */}
      <section className="section-pad bg-plum-50">
        <div className="container-site max-w-3xl">
          <Reveal>
            <h2 className="h-display text-center text-3xl md:text-4xl">
              Ai întrebări? Avem răspunsuri
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-plum-900/70">
              Cele mai frecvente întrebări pe care le primim la telefon și la recepție, cu
              răspunsuri deschise, fără limbaj de lemn.
            </p>
          </Reveal>
          <div className="mt-8 space-y-4">
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
