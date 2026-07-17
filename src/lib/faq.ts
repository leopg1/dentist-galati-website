/** Întrebări frecvente — folosite pe Oferte (integral) și Contact (subset). */

export type FaqItem = { q: string; a: string }

export const faqItems: FaqItem[] = [
  {
    q: 'Cât costă o consultație?',
    a: 'Sună-ne la 0742 038 270 pentru tariful actual al consultației — abonații MedLife beneficiază de consultație gratuită (condiții în clinică). La consultație primești evaluarea completă și planul de tratament, cu toate costurile explicate transparent, în scris.',
  },
  {
    q: 'Tratamentele dor?',
    a: 'Folosim anestezie locală modernă și tehnici minim invazive; confortul tău e prioritar la fiecare pas. Mulți dintre pacienții noștri ne spun în recenzii că aici au scăpat de frica de dentist.',
  },
  {
    q: 'Pot plăti în rate?',
    a: 'Da — prin partenerul nostru tbi bank poți achita tratamentele ample în rate. Aplici direct în clinică, iar răspunsul vine rapid.',
  },
  {
    q: 'Tratați și copii?',
    a: 'Da! Dr. Diana Șerban se ocupă cu blândețe de cei mici — de la vizite de acomodare la tratamente complete.',
  },
  {
    q: 'Fac radiografia în altă parte?',
    a: 'Nu e nevoie — avem radiologie digitală în clinică, iar radiografia se face pe loc, în timpul consultației.',
  },
  {
    q: 'Cât durează un implant dentar?',
    a: 'Inserarea durează de regulă sub o oră; integrarea în os ia 3–6 luni, apoi se montează coroana finală. Primești calendarul complet la consultație.',
  },
]

/** Subsetul afișat pe pagina de Contact, lângă formular. */
export const contactFaq = faqItems.slice(0, 4)
