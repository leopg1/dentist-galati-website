import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { CheckCircle2, Loader2, Send, Star } from 'lucide-react'
import { services, site } from '../../lib/site'

const fieldClass =
  'w-full rounded-2xl border border-plum-200 bg-white px-4 py-3 text-[15px] text-plum-950 outline-none transition placeholder:text-plum-900/35 focus:border-plum-400 focus:ring-2 focus:ring-plum-200'

const labelClass = 'mb-1.5 block text-[13.5px] font-bold text-plum-900'

/**
 * Formular „Cere o programare" — DEMO: nu trimite date nicăieri;
 * la submit afișează mesajul de succes definit în conținut.
 * Preia serviciul din query (?serviciu=slug) când vii dintr-o pagină de serviciu.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [searchParams] = useSearchParams()
  const preselected = searchParams.get('serviciu') ?? ''

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    window.setTimeout(() => setStatus('sent'), 700)
  }

  return (
    <div id="formular" className="card-surface scroll-mt-28 p-6 md:p-9">
      <h2 className="h-display text-3xl md:text-4xl">Cere o programare</h2>
      <p className="mt-2.5 text-[15px] leading-relaxed text-plum-900/70">
        Completează formularul și te sunăm de regulă în aceeași zi lucrătoare (L–V, 8:00–20:00).
        Câmpurile marcate cu * sunt obligatorii.
      </p>

      {status === 'sent' ? (
        <div
          role="status"
          aria-live="polite"
          className="mt-7 rounded-3xl border border-teal-200 bg-teal-50 p-7 text-center md:p-9"
        >
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-teal-600">
            <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
          </span>
          <p className="mt-4 font-display text-2xl font-semibold text-teal-900">
            Cererea ta a fost trimisă
          </p>
          <p className="mx-auto mt-2.5 max-w-md text-[15px] leading-relaxed text-teal-800">
            Mulțumim! Te sunăm de regulă în aceeași zi lucrătoare pentru confirmarea programării.
            Pentru urgențe, sună-ne direct la{' '}
            <a href={site.phoneHref} className="font-bold underline underline-offset-2">
              {site.phone}
            </a>
            .
          </p>
        </div>
      ) : (
        <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="nume" className={labelClass}>
                Nume și prenume *
              </label>
              <input
                id="nume"
                name="nume"
                type="text"
                required
                autoComplete="name"
                placeholder="ex. Maria Popescu"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="telefon" className={labelClass}>
                Telefon *
              </label>
              <input
                id="telefon"
                name="telefon"
                type="tel"
                required
                autoComplete="tel"
                pattern="(\+4)?0[0-9 ]{9,12}"
                title="Număr de telefon românesc, ex. 0742 038 270"
                placeholder="ex. 07xx xxx xxx"
                className={fieldClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="ex. maria@email.com"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="serviciu" className={labelClass}>
              Serviciul dorit
            </label>
            <select id="serviciu" name="serviciu" defaultValue={preselected} className={fieldClass}>
              <option value="">Nu știu încă — vreau o consultație</option>
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="mesaj" className={labelClass}>
              Mesajul tău <span className="font-semibold text-plum-900/70">(opțional)</span>
            </label>
            <textarea
              id="mesaj"
              name="mesaj"
              rows={4}
              placeholder="Spune-ne pe scurt cu ce te putem ajuta…"
              className={`${fieldClass} resize-y`}
            />
          </div>

          <label htmlFor="gdpr" className="flex cursor-pointer items-start gap-3 rounded-2xl bg-plum-50 px-4 py-3.5">
            <input
              id="gdpr"
              name="gdpr"
              type="checkbox"
              required
              className="mt-0.5 h-4 w-4 shrink-0 accent-coral-500"
            />
            <span className="text-[13.5px] leading-relaxed text-plum-900/80">
              Am citit și sunt de acord cu{' '}
              <Link
                to="/confidentialitate"
                className="font-bold text-coral-600 underline underline-offset-2 transition hover:text-coral-700"
              >
                Politica de confidențialitate
              </Link>{' '}
              (GDPR). *
            </span>
          </label>

          <div className="flex flex-wrap items-center gap-4">
            <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:opacity-70 sm:w-auto">
              {status === 'sending' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Se trimite…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" aria-hidden="true" /> Trimite cererea
                </>
              )}
            </button>
            <span className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-plum-900/70">
              <Star className="h-4 w-4 fill-gold-400 text-gold-400" aria-hidden="true" />
              {site.rating}/5 din {site.reviewCount} de recenzii Google
            </span>
          </div>

          <p className="text-[13px] leading-relaxed text-plum-900/70">
            Datele tale sunt folosite exclusiv pentru gestionarea programării. Nu trimitem spam.
          </p>
        </form>
      )}
    </div>
  )
}
