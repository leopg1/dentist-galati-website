import { Check, Gem, Layers, ScanLine } from 'lucide-react'
import ServiceLayout from '../../components/ServiceLayout'
import Reveal from '../../components/Reveal'

const oferim = [
  'Coroane și punți din zirconiu',
  'Coroane integral ceramice',
  'Lucrări protetice fixe pe implanturi',
  'Reabilitări orale complete',
  'Proteze moderne',
]

const atuuri = [
  {
    icon: Gem,
    title: 'Biocompatibil',
    text: 'Zirconiul este un material biocompatibil, bine tolerat de organism.',
  },
  {
    icon: Layers,
    title: 'Extrem de rezistent',
    text: 'Suportă forțele masticației ani la rând — „standardul de aur” al proteticii moderne.',
  },
  {
    icon: ScanLine,
    title: 'Transluciditate naturală',
    text: 'Stratificat cu ceramică, imită jocul de lumină al dintelui natural — nimeni nu observă diferența.',
  },
]

export default function CoroaneZirconiu() {
  return (
    <ServiceLayout
      slug="coroane-zirconiu"
      metaTitle="Coroane zirconiu Galați — DentaLine Clinic"
      metaDescription="Coroane din zirconiu stratificat cu ceramică, pe dinți naturali sau implanturi. Amprentă digitală 3D, fără pastă de amprentă."
      eyebrow="Coroane din zirconiu & Protetică"
      title="Coroane din zirconiu — rezistență și estetică fără compromis"
      intro="Zirconiul este „standardul de aur” al proteticii moderne: biocompatibil, extrem de rezistent și cu transluciditate apropiată de a dintelui natural. La DentaLine realizăm coroane din zirconiu stratificat cu ceramică, pe dinți naturali sau pe implanturi."
      heroImage="/media/cases/inainte-dupa-implant-2.jpg"
      heroImageAlt="Caz clinic înainte și după: lucrare protetică din zirconiu realizată la DentaLine"
      badge="Amprentă digitală, fără pasta clasică"
      highlights={[
        'Zirconiu stratificat cu ceramică, cu aspect natural',
        'Pe dinți naturali sau pe implanturi',
        'Amprentă digitală 3D — fără pasta clasică de amprentă',
        'Colaborare strânsă cu laboratorul de tehnică dentară partener',
      ]}
      ctaTitle="Află ce soluție protetică ți se potrivește"
    >
      {/* De ce zirconiu */}
      <Reveal>
        <section aria-labelledby="zirconiu-atuuri">
          <h2 id="zirconiu-atuuri" className="h-display text-3xl md:text-4xl">
            Trei motive pentru care îl recomandăm
          </h2>
          <div className="mt-7 grid gap-5 sm:grid-cols-3">
            {atuuri.map((atu) => (
              <div
                key={atu.title}
                className="card-surface p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-plum-50 text-plum-600">
                  <atu.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-[21px] font-semibold text-plum-950">{atu.title}</h3>
                <p className="mt-1.5 text-[14.5px] leading-relaxed text-plum-900/70">{atu.text}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Ce oferim */}
      <Reveal>
        <section aria-labelledby="zirconiu-oferim" className="rounded-3xl bg-plum-50 p-7 md:p-10">
          <h2 id="zirconiu-oferim" className="h-display text-3xl md:text-4xl">
            Soluții protetice pentru fiecare situație
          </h2>
          <ul className="mt-7 grid gap-3.5 sm:grid-cols-2">
            {oferim.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-soft"
              >
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-[15.5px] font-semibold text-plum-950">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      {/* Diferențiatorul digital */}
      <Reveal>
        <section aria-labelledby="zirconiu-digital" className="grid items-center gap-8 lg:grid-cols-2">
          <img
            src="/media/services/scanare-3d-larg.jpg"
            alt="Scanare intraorală 3D în clinica DentaLine — amprentă digitală fără pastă de amprentă"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift"
          />
          <div>
            <h2 id="zirconiu-digital" className="h-display text-3xl md:text-4xl">
              Amprentă digitală, nu pastă de amprentă
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-plum-900/75">
              Scannerul intraoral 3D înlocuiește pasta clasică de amprentă — fără senzația neplăcută, cu o
              scanare rapidă și confortabilă. Datele ajung digital la laboratorul de tehnică dentară
              partener, cu care lucrăm strâns la fiecare caz.
            </p>
            <ul className="mt-5 space-y-2.5">
              {['Precizie mai mare', 'Adaptare mai bună a lucrării', 'Mai puține ședințe'].map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-[15px] font-medium text-plum-900/85">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coral-50 text-coral-600">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Reveal>
    </ServiceLayout>
  )
}
