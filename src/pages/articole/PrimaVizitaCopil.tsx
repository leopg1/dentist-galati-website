import { Link } from 'react-router-dom'
import ArticleLayout from '../../components/articole/ArticleLayout'
import {
  ArticleFaq,
  ArticleImage,
  Callout,
  KeyTakeaways,
  PullQuote,
} from '../../components/articole/blocks'

export default function PrimaVizitaCopil() {
  return (
    <ArticleLayout slug="prima-vizita-la-dentist-a-copilului">
      <KeyTakeaways
        items={[
          'Prima vizită se face în jurul primei aniversări sau în primele șase luni de la apariția primului dinte — nu la cinci ani, când deja doare.',
          'Copiii nu se nasc cu frică de dentist. O împrumută, aproape întotdeauna, de la adultul care îi ține de mână.',
          '„Nu te doare deloc” este cea mai riscantă propoziție din sala de așteptare, iar „dacă ești cuminte, îți iau ceva” vine imediat după.',
          'Prima ședință e o vizită de acomodare: numărăm dinții, ne jucăm cu scaunul, nu se face nimic invaziv.',
          'Programează dimineața. Un copil obosit după grădiniță e, practic, alt copil.',
        ]}
      />

      <p>
        Mama intră prima în cabinet, îl ține strâns de mână și îmi spune, peste capul lui: „Vezi că e
        foarte speriat, dar i-am zis că nu doare deloc”. Băiatul, care până în secunda aceea se uita
        la pești, se oprește. Se uită la ea. Apoi la mine. Și abia acum se sperie — pentru că tocmai
        a aflat că există pe-aici ceva care ar putea să doară.
      </p>

      <p>Nu e vina ei. E cea mai iubitoare propoziție cu putință și face exact opusul.</p>

      <p>
        Prima vizită la dentist a copilului se câștigă sau se pierde acasă, cu două-trei zile
        înainte. Partea din cabinet e, de regulă, cea ușoară — eu am oglinda, scaunul care urcă și
        tot timpul din lume. Voi aveți drumul până aici, și pe drumul acela se spun lucruri.
      </p>

      <h2>Când e, de fapt, prima vizită la dentist a copilului</h2>

      <p>
        Mai devreme decât se așteaptă aproape toată lumea. Recomandarea larg acceptată în
        stomatologia pediatrică este în jurul primei aniversări, sau în primele șase luni de la
        apariția primului dinte. Nu la trei ani. Și în niciun caz la cinci, „când o să înțeleagă el
        mai bine”.
      </p>

      <p>
        Motivul are mai puțină legătură cu dinții decât ai crede. La un an rareori avem ceva de
        tratat, și exact asta e ideea: intră într-un cabinet unde nu i se întâmplă nimic neplăcut. Se
        uită în jur, stă în brațele tale, îi numărăm dinții în treizeci de secunde și pleacă. Data
        viitoare, locul e deja cunoscut.
      </p>

      <p>
        Compară cu varianta cealaltă. Un copil adus prima dată la șase ani, pentru că îl doare, își
        construiește definiția cuvântului „dentist” pornind de la o anestezie. Se recuperează și de
        acolo, dar de ce am alege drumul greu?
      </p>

      <p>
        La noi, în <Link to="/servicii/stomatologie-copii">stomatologia pentru copii</Link>, multe
        consultații se termină fără să atingem vreun dinte. Sunt, sincer, printre cele mai utile
        programări din agendă.
      </p>

      <h2>Copilul nu se teme de dentist. Citește frica de pe fața ta</h2>

      <p>
        Un copil de trei ani nu are cum să se teamă de o freză pe care nu a văzut-o niciodată. Ce are
        în schimb e un radar pentru starea adultului de lângă el: strânsoarea mâinii, vocea cu
        jumătate de ton mai sus, faptul că ai adus vorba despre asta de patru ori de aseară.
      </p>

      <p>
        Copiii mici nu au încă o părere despre stomatologie. Și-o fabrică pe loc, din tine. Dacă tu
        intri ca la un control de rutină, e un control de rutină. Dacă intri pregătită de bătălie, e
        o bătălie — chiar fără să fi spus vreun cuvânt.
      </p>

      <PullQuote author="Dr. Diana Șerban">
        Cel mai bun lucru pe care îl poate face un părinte anxios la prima vizită e să vorbească mai
        puțin decât are impulsul.
      </PullQuote>

      <p>
        De aici și paradoxul: părinții care se pregătesc cel mai mult, cu explicații lungi seara la
        culcare, transformă un non-eveniment într-un Eveniment. Iar la patru ani evenimentele sunt
        lucruri mari. Lucrurile mari pot fi și înfricoșătoare.
      </p>

      <h2>Frazele care strică totul — și ce se spune în loc</h2>

      <p>
        Le-am auzit pe toate, în sala noastră de așteptare de pe Bd. Brăilei, spuse cu cea mai bună
        intenție din lume. Și fiecare se întoarce împotriva părintelui, din alt motiv.
      </p>

      <h3>„Nu te doare deloc”</h3>

      <p>
        Problema e cuvântul, nu intenția. Copilul nu se gândise la durere; tu tocmai i-ai pus-o în
        cap. Iar dacă simte la un moment dat o apăsare sau gustul ciudat al pastei de periaj,
        concluzia lui nu e „a fost altfel decât credeam”. E „m-a mințit”. Și data viitoare nu mai
        crede nimic.
      </p>

      <p>
        Spune în loc: „O să-ți numere doamna doctor dinții cu o oglindă mică. O să simți că îți
        atinge dințișorii. Dacă vrei să ne oprim, ridici mâna și ne oprim.” Nimic din ce e acolo nu e
        minciună, iar ultima propoziție îi dă ceva ce copiii nu prea au: un buton de stop.
      </p>

      <h3>„Dacă ești cuminte, îți iau ceva”</h3>

      <p>
        Mita anunțată dinainte îi spune exact ce nu voiai. Nimeni nu e plătit ca să facă un lucru
        plăcut, așa că, dacă i se promite ceva, deduce pe loc că urmează ceva de îndurat.
      </p>

      <p>
        Mai bine faci înghețata parte din program, nu premiu condiționat: „După ce terminăm la
        doctoriță, mergem în parc.” Nu „dacă ești cuminte”. Pur și simplu, după.
      </p>

      <h3>„Vezi că dacă nu te speli pe dinți, îți scoate doamna doctor dinții”</h3>

      <p>
        Asta e cea care îmi complică mie ziua cel mai tare. Ai transformat medicul în pedeapsă, iar
        acum copilul trebuie să stea douăzeci de minute în scaunul pedepsei, cu gura deschisă.
      </p>

      <p>
        Periajul se vinde mult mai bine prin comparație: dinții spălați sunt dinți puternici, ca ai
        personajului lui preferat. Iar predica lasă-mă pe mine să o țin. La mine sună a informație, nu
        a amenințare.
      </p>

      <h3>„Hai că am fost și eu și am rezistat”</h3>

      <p>
        Cuvântul „am rezistat” face toată paguba. Rezistăm la lucruri grele. Copilul înțelege că
        urmează o încercare pe care adulții abia o duc — deci el, care e mic, sigur nu o s-o ducă.
      </p>

      <p>
        Dacă tu însuți te temi de stomatolog, nu aduce deloc vorba despre experiența ta. Iar dacă
        există în familie un adult relaxat pe tema asta, el să vină la prima ședință. Nu e o trădare.
        E strategie bună.
      </p>

      <Callout title="Regula celor trei propoziții" tone="teal">
        <p>
          Acasă, înainte de prima vizită, spune maximum trei propoziții despre ea: unde mergem, ce se
          întâmplă acolo, ce facem după. Fără reluări seara la culcare. Cu cât subiectul e mai banal,
          cu atât e mai ușor.
        </p>
      </Callout>

      <h2>Cum arată prima ședință la noi: practic, nu se întâmplă nimic</h2>

      <p>
        Le spun părinților dinainte: prima programare a unui copil mic e o vizită de acomodare. Un
        sfert de oră, și arată cam așa.
      </p>

      <ol>
        <li>
          Facem cunoștință în picioare, nu în scaun. Îl întreb ce desene se poartă acum la grădiniță.
        </li>
        <li>Scaunul devine lift. Urcă, coboară, se lasă pe spate. De obicei cer să repetăm.</li>
        <li>
          Îi arăt instrumentele înainte să le folosesc: oglinda, aspiratorul care „bea apă”, jetul de
          aer. Le simte întâi pe mână.
        </li>
        <li>
          Numărăm dinții cu voce tare. Tehnic, e un examen clinic complet — pentru el e un joc de
          numărat.
        </li>
        <li>Dacă mai are răbdare, facem un periaj scurt. Dacă nu, ne oprim și e în regulă.</li>
      </ol>

      <p>
        Nu se face nimic invaziv și nimic nu vine pe nepusă masă. Dacă descopăr o carie, i-o arăt
        părintelui și stabilim o programare separată. Nu profit de faptul că e deja în scaun.
      </p>

      <ArticleImage
        src="/media/services/copii-dr-serban.jpg"
        alt="Dr. Diana Șerban lucrând cu un copil în cabinetul DentaLine din Galați"
        caption="La prima vizită, cea mai importantă unealtă din cabinet e conversația."
      />

      <h2>Dacă vine deja speriat, de la o experiență anterioară</h2>

      <p>
        Se întâmplă des, mai ales la copiii care au ajuns prima dată la un cabinet cu durere acută.
        Aici nu există scurtături și nu îți promit că rezolvăm într-o ședință.
      </p>

      <p>
        Ce facem, în schimb, e să coborâm miza. Prima programare poate să însemne doar că intră, se
        uită, pleacă. A doua, că se așază în scaun. A treia, că îl las să numere el dinții mei cu
        oglinda. Pare pierdere de timp, dar copilul care ajunge singur la concluzia că locul ăsta e
        sigur nu mai are nevoie să fie convins niciodată.
      </p>

      <p>
        Uneori merge mai bine dacă părintele așteaptă afară. Un copil care are pentru cine să facă
        spectacolul îl face; rămas singur cu mine, negociază mult mai repede. Ajută și dacă îi arăți
        dinainte, pe telefon, <Link to="/echipa">la cine mergeți</Link> — o față deja văzută o dată
        taie jumătate din tensiunea de la ușă.
      </p>

      <Callout title="Nu-i cere scuze dinainte" tone="coral">
        <p>
          Dacă îi spui „îmi pare rău că trebuie să facem asta”, îi confirmi că i se întâmplă ceva
          rău. Mergem la dentist cum mergem la frizer: e ceva ce se face, nu ceva ce se suportă.
        </p>
      </Callout>

      <h2>„Oricum cad” — de ce dinții de lapte contează mai mult decât crezi</h2>

      <p>
        E obiecția pe care o aud cel mai des, de obicei cu un umăr ridicat. Merită un răspuns serios,
        pentru că logica ei nu e absurdă. Doar incompletă.
      </p>

      <p>
        Ultimii dinți de lapte cad pe la unsprezece-doisprezece ani. Un molar de lapte cariat la
        patru ani mai are, deci, șapte-opt ani de muncă în față. E mult timp de mestecat cu un dinte
        bolnav.
      </p>

      <p>
        Apoi, dinții de lapte țin locul celor definitivi. Dacă unul se pierde prea devreme, vecinii
        se înclină în spațiul liber, iar dintele permanent găsește locul ocupat. Multe tratamente cu{' '}
        <Link to="/servicii/aligneri">aligneri</Link> pe care le fac la adolescenți încep, de fapt,
        cu un molar de lapte pierdut la cinci ani.
      </p>

      <p>
        Iar caria dintr-un dinte de lapte doare exact la fel, în timp ce infecția ajunsă la rădăcină
        stă chiar deasupra mugurelui dintelui permanent. Nu e un dinte de unică folosință. E un dinte
        cu termen.
      </p>

      <p>
        Vestea bună e că la copii prevenția chiar funcționează. O{' '}
        <Link to="/servicii/igienizare">igienizare profesională</Link> la șase luni ține majoritatea
        problemelor la stadiul în care se rezolvă într-o singură ședință scurtă, fără dramă.
      </p>

      <h2>Ora la care programezi contează mai mult decât ți se pare</h2>

      <p>
        E sfatul pe care părinții îl aplică cel mai rar și care schimbă cel mai mult lucrurile.
        Programează dimineața.
      </p>

      <p>
        Copilul adus la cinci și jumătate, direct de la grădiniță, după o zi întreagă de stimuli,
        flămând și cu bateria pe roșu, nu e același copil cu cel de la ora nouă. La ora nouă e curios
        și vrea să se joace cu scaunul. La cinci și jumătate plânge dacă îi cade o șosetă.
      </p>

      <p>
        Suntem deschiși luni-vineri, între 8:00 și 20:00, așa că orele de dimineață există — cere-le
        explicit <Link to="/contact">când ne suni ca să te programezi</Link>, chiar dacă înseamnă o
        oră pierdută de la grădiniță. Merită schimbul. Și evită ziua în care mai aveți programate încă
        trei lucruri: graba adultului se simte din hol.
      </p>

      <p>
        Iar familiile care vin din județ au nevoie de un supliment: după o oră în mașină, zece minute
        de alergat prin recepție sunt foarte bine investite.
      </p>

      <p>
        Iar dacă a mers bine, o să auzi în drum spre mașină întrebarea care mă bucură cel mai mult:
        „Mami, când mai venim?”. Se întâmplă mai des decât ai crede. Și niciodată din întâmplare.
      </p>

      <ArticleFaq
        items={[
          {
            q: 'La ce vârstă e prima vizită la dentist a copilului?',
            a: 'Recomandarea general acceptată este în jurul vârstei de un an, sau în primele șase luni de la apariția primului dinte. La această vârstă vizita e una de acomodare și de verificare, nu de tratament, iar copilul asociază cabinetul cu un loc în care nu i se întâmplă nimic neplăcut.',
          },
          {
            q: 'Ce nu trebuie să-i spun copilului înainte de prima vizită la dentist?',
            a: 'Evită „nu te doare deloc”, „dacă ești cuminte îți iau ceva”, „dacă nu te speli pe dinți îți scoate doamna doctor dinții” și „am fost și eu și am rezistat”. Toate introduc ideea de durere sau de pedeapsă. Spune în schimb, simplu, unde mergeți, că doamna doctor îi va număra dinții și ce faceți după.',
          },
          {
            q: 'Cât durează prima ședință și ce se face în ea?',
            a: 'De obicei un sfert de oră. Facem cunoștință, îi arătăm scaunul și instrumentele, îi numărăm dinții și, dacă are răbdare, facem un periaj scurt. Nu se face nimic invaziv la prima vizită. Dacă găsim o carie, o programăm separat.',
          },
          {
            q: 'Pot să stau lângă copil în cabinet?',
            a: 'Da, la prima vizită părintele stă de obicei alături, iar copiii foarte mici pot sta chiar în brațe. La copiii deja speriați de o experiență anterioară propunem uneori ca părintele să aștepte afară, pentru că mulți copii cooperează mai ușor fără public — dar niciodată fără acordul părintelui.',
          },
          {
            q: 'Merită tratați dinții de lapte dacă tot cad?',
            a: 'Da. Ultimii dinți de lapte cad pe la 11-12 ani, deci un dinte cariat la 4 ani mai are mulți ani de folosit. În plus, dinții de lapte păstrează spațiul pentru cei definitivi, iar o infecție de la rădăcina lor ajunge în vecinătatea mugurelui dintelui permanent. Caria doare, de altfel, exact la fel.',
          },
        ]}
      />
    </ArticleLayout>
  )
}
