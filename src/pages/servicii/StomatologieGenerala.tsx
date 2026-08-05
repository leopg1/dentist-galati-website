import { AlarmClock, CircleMinus, ClipboardList, HeartPulse, Phone, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import ServiceLayout from '../../components/ServiceLayout'
import Reveal from '../../components/Reveal'
import { site } from '../../lib/site'

const servicii = [
  {
    icon: ClipboardList,
    title: 'Consultații și planuri de tratament',
    text: 'Evaluare completă și un plan clar, cu etape și costuri explicate transparent.',
  },
  {
    icon: Sparkles,
    title: 'Obturații fizionomice',
    text: 'Plombe estetice din materiale moderne, în aceeași culoare cu dintele.',
  },
  {
    icon: ShieldCheck,
    title: 'Tratamentul cariilor',
    text: 'Oprim caria din stadii incipiente, înainte să ajungă la nerv.',
  },
  {
    icon: CircleMinus,
    title: 'Extracții',
    text: 'Când un dinte nu mai poate fi salvat, extracția se face blând, sub anestezie locală.',
  },
  {
    icon: HeartPulse,
    title: 'Afecțiuni gingivale',
    text: 'Tratăm gingiile inflamate sau sângerânde. Sănătatea dinților începe de la gingii.',
  },
  {
    icon: AlarmClock,
    title: 'Urgențe stomatologice',
    text: 'Durere acută? Îți dăm prioritate la programare.',
  },
]

export default function StomatologieGenerala() {
  return (
    <ServiceLayout
      slug="stomatologie-generala"
      metaTitle="Stomatologie generală Galați — DentaLine Clinic"
      metaDescription="Carii, plombe, extracții și urgențe dureroase: tratament corect, materiale moderne și explicații clare, la DentaLine Clinic Galați. ☎ 0742 038 270"
      eyebrow="Stomatologie generală"
      title={
        <>
          Stomatologie generală — <span className="text-coral-600">medicul tău de familie pentru dinți</span>
        </>
      }
      intro="Partea de stomatologie pe care o faci toată viața: carii, plombe, extracții, dureri apărute peste noapte. Aici se rezolvă corect, cu materiale moderne și explicații clare."
      heroImage="/media/clinic/tratament-vertical.jpg"
      heroImageAlt="Medic stomatolog tratând un pacient în cabinetul modern DentaLine"
      badge="Urgențe tratate cu prioritate"
      highlights={[
        'Tratament corect, materiale moderne',
        'Explicații clare, la fiecare pas',
        'Prindem problemele în stadii incipiente',
      ]}
      ctaTitle="Programează un consult general"
    >
      {/* Servicii */}
      <div>
        <Reveal>
          <h2 className="h-display text-3xl md:text-4xl">Tot ce are nevoie zâmbetul tău, zi de zi</h2>
        </Reveal>
        <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {servicii.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="card-surface h-full card-pad transition hover:border-plum-200">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-plum-100 text-plum-600">
                  <s.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 card-title">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-plum-900/70">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Grijă pentru toate vârstele */}
      <div className="grid items-center gap-8 md:grid-cols-2">
        <Reveal>
          <img
            src="/media/clinic/grija-varstnici.jpg"
            alt="Medic DentaLine având grijă cu blândețe de un pacient vârstnic"
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lift"
            loading="lazy"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="h-display text-3xl md:text-4xl">Un medic care îți explică totul</h2>
          <p className="mt-4 text-base leading-relaxed text-plum-900/75">
            La DentaLine nu pleci cu întrebări fără răspuns: îți arătăm ce am găsit, îți explicăm opțiunile și
            construim împreună planul de tratament, pentru copii, părinți și bunici deopotrivă.
          </p>
          <p className="mt-3.5 text-base leading-relaxed text-plum-900/75">
            Iar pentru că prevenția e mereu mai simplă decât tratamentul, îți recomandăm controale regulate:
            problemele prinse devreme se rezolvă mai repede și mai ieftin.
          </p>
        </Reveal>
      </div>

      {/* Urgențe */}
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-coral-50 via-white to-plum-50 p-8 ring-1 ring-coral-100 md:p-10">
          <div className="relative">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-coral-100 text-coral-600">
              <AlarmClock className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="h-display mt-5 text-3xl md:text-4xl">Ai o urgență stomatologică?</h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-plum-900/75">
              Sună-ne direct: facem tot posibilul să te primim în aceeași zi.
            </p>
            <div className="mt-6 flex flex-wrap gap-3.5">
              <a href={site.phoneHref} className="btn-primary">
                <Phone className="h-4 w-4" aria-hidden="true" /> {site.phone}
              </a>
              <Link to="/contact" className="btn-secondary">
                Vezi programul și adresa
              </Link>
            </div>
            <p className="mt-4 text-xs text-plum-900/60">{site.schedule}</p>
          </div>
        </div>
      </Reveal>
    </ServiceLayout>
  )
}
