import { Link } from 'react-router-dom'
import ArticleLayout from '../../components/articole/ArticleLayout'
import { ArticleFaq, ArticleImage, Callout, KeyTakeaways, PullQuote } from '../../components/articole/blocks'

export default function GingiiCareSangereaza() {
  return (
    <ArticleLayout slug="gingii-care-sangereaza">
      <p>
        Scuipi în chiuvetă dimineața și apa e roz. Nu de fiecare dată, dar destul de des cât să fi
        început să te uiți. Și, pentru că pare logic, ai tras o concluzie: mă spăl prea apăsat. Așa că
        te speli mai blând, ocolești zona care sângerează, iar după câteva zile chiar pare că s-a
        liniștit.
      </p>

      <p>Nu s-a liniștit. Doar ai încetat să mai deranjezi locul unde se întâmplă problema.</p>

      <KeyTakeaways
        items={[
          'Gingia sănătoasă nu sângerează la periaj, oricât de conștiincios te-ai spăla.',
          'Sângerarea înseamnă inflamație, iar inflamația are aproape întotdeauna o cauză bacteriană: placa rămasă la marginea gingiei.',
          'Gingivita se rezolvă complet. Parodontita, care urmează după ea, înseamnă os pierdut — și osul nu se întoarce de la sine.',
          'Periuța curăță deasupra gingiei. Tartrul de dedesubt se scoate doar la cabinet, cu instrumente.',
          'Dacă sângerarea ține de peste două săptămâni, nu mai aștepta să treacă singură.',
        ]}
      />

      <h2>„Sângerează, deci mă spăl prea tare” — de ce e fix invers</h2>

      <p>
        Raționamentul are logica lui: mă doare, deci ating mai puțin. La o zgârietură pe genunchi ar
        fi chiar sfatul corect.
      </p>

      <p>La gingie, nu. Pentru că nu periuța a rănit-o.</p>

      <p>
        A rănit-o o peliculă de bacterii așezată exact în șanțul dintre dinte și gingie, pe care
        corpul tău o combate în singurul fel în care știe: trimite sânge acolo. Vasele se dilată,
        țesutul se umflă și ajunge atât de fragil încât cedează la cea mai mică atingere. Periuța e
        martorul, nu vinovatul.
      </p>

      <p>
        Așa că, atunci când te speli mai blând, lași bacteriile în pace. Ele se calcifiază liniștite
        și, în câteva săptămâni, ai tartru acolo unde aveai placă. Sângerarea scade, într-adevăr.
        Inflamația de dedesubt, nu.
      </p>

      <p>
        Testul cere puțin curaj: periază normal, cu tehnică bună, exact zona care sângerează, în
        fiecare zi, o săptămână. La o inflamație incipientă, sângerarea se domolește de obicei vizibil
        până spre final. Dacă nu se domolește deloc, cel mai probabil sub gingie e deja depunere pe
        care nicio periuță din lume nu o poate ridica — iar de acolo încolo ai nevoie de o
        consultație, nu de încă o săptămână de așteptat.
      </p>

      <h2>De unde vin, de fapt, gingiile care sângerează</h2>

      <p>Lanțul e scurt și aproape mereu același.</p>

      <ol>
        <li>
          <strong>Placa bacteriană.</strong> Se formează în ore, nu în zile. E moale, lipicioasă,
          incoloră — de aceea nu o vezi. Se adună fix acolo unde periuța trece în viteză: fața
          interioară a incisivilor de jos, spatele molarilor, spațiile dintre dinți.
        </li>
        <li>
          <strong>Tartrul.</strong> Placa rămasă pe loc se mineralizează din sărurile din salivă și se
          întărește. Devine aspră și poroasă, adică suprafața perfectă pentru și mai multă placă. De
          aici înainte, periuța a pierdut lupta.
        </li>
        <li>
          <strong>Gingivita.</strong> Gingia se înroșește, se umflă la margine și sângerează. Doare
          rar, motiv pentru care e ignorată cu atâta ușurință. Vestea bună: la etapa asta nu s-a
          pierdut nimic definitiv.
        </li>
        <li>
          <strong>Parodontita.</strong> Inflamația coboară dincolo de gingie, la ligamentul care ține
          dintele și la osul din jurul lui. Se formează pungi, tartrul se așază adânc, osul se retrage.
          Aici s-a schimbat regula jocului.
        </li>
      </ol>

      <p>
        Între treapta a treia și a patra e toată diferența. Gingivita se vindecă și gingia revine la
        normal. Osul pierdut în parodontită nu crește la loc pentru că te speli mai bine de acum
        încolo — se poate opri evoluția, se poate stabiliza, dar ce s-a dus s-a dus.
      </p>

      <PullQuote author="Dr. Liliana Barbu">
        Nimeni nu vine la cabinet pentru că îi sângerează gingiile. Vin pentru altceva și îmi spun, în
        treacăt, „a, și uneori sângerez când mă spăl”. Acel „în treacăt” costă, uneori, un dinte.
      </PullQuote>

      <h2>Ce ajută acasă la gingii care sângerează (și ce nu ajută deloc)</h2>

      <p>
        Ajută periajul de două ori pe zi, câte două minute, cu peri moi și mișcări scurte, înclinate
        spre gingie. Nu freca orizontal, ca la pantofi.
      </p>

      <p>
        Mai mult decât crezi ajută curățarea între dinți — ață sau periuțe interdentare, seara, în
        fiecare seară. O bună parte din suprafața unui dinte stă față în față cu vecinul lui, iar acolo
        periuța obișnuită pur și simplu nu are pe unde intra. Dacă ți-e mai la îndemână un duș bucal,
        folosește dușul bucal. Contează să faci ceva acolo, nu care variantă e teoretic superioară.
      </p>

      <p>
        Ce nu ajută: apa de gură ținută pe post de înlocuitor. Maschează mirosul și lasă senzația de
        curat, dar nu rupe mecanic biofilmul. Nici periajul agresiv cu peri duri nu ajută — irită o
        gingie deja inflamată și, în ani, sapă smalțul de la colet. Iar clătitul cu bicarbonat ținut
        zile la rând și rețetele care circulă pe grupurile de Facebook nu scot un firicel de tartru.
        Doar amână.
      </p>

      <Callout title="Unde se oprește, exact, ce poți face acasă" tone="coral">
        <p>
          Periuța curăță până la aproximativ un milimetru sub marginea gingiei. Tartrul se depune și mai
          jos, iar în pungile parodontale poate ajunge la câțiva milimetri adâncime. E depunere dură,
          lipită de rădăcină. Nu există periaj, gel, pastă sau apă de gură care să o desprindă. Se ridică
          mecanic, la cabinet — asta e tot.
        </p>
      </Callout>

      <h2>Cum arată o ședință de igienizare și de ce la șase luni</h2>

      <p>
        Durează în jur de patruzeci-cincizeci de minute și are trei părți. Întâi{' '}
        <Link to="/servicii/igienizare">detartrajul cu ultrasunete</Link>: un vârf care vibrează foarte
        rapid și desprinde tartrul de pe dinte și de sub marginea gingiei, cu apă care spală continuu.
        Apoi AirFlow — un jet fin de pulbere și apă care ridică petele de cafea, de ceai și de tutun din
        colțurile în care instrumentul nu are cum să intre.
      </p>

      <p>
        La final, periajul profesional. Lasă suprafața netedă, iar pe smalț neted placa se prinde mai
        greu — practic, câștigi timp până data viitoare.
      </p>

      <ArticleImage
        src="/media/services/detartraj-macro.jpg"
        alt="Detartraj profesional cu ultrasunete, prim-plan, în cabinetul DentaLine din Galați"
        caption="Detartrajul cu ultrasunete desprinde depunerile inclusiv de sub marginea gingiei — zona în care periuța nu ajunge."
      />

      <p>
        Șase luni nu e o cifră scoasă din pălărie. Cam atât îi trebuie plăcii rămase în zonele greu
        accesibile să se mineralizeze și să reformeze depuneri care contează. La fumători și la pacienții
        cu tendință de tartru, uneori recomandăm la patru luni. Îți spunem la control, în funcție de ce
        vedem, nu după o regulă fixă.
      </p>

      <p>
        Și partea despre care mă întreabă toată lumea, pe bună dreptate: da, primul detartraj după mulți
        ani poate fi sensibil. Gingia inflamată reacționează la orice, iar coletele descoperite pot da
        fiori la apă rece câteva zile.
      </p>

      <p>
        Nu ai de ce să strângi din dinți, la propriu. Lucrăm în etape, cu pauze, și, dacă e cazul, cu
        anestezie de contact sau injectabilă. La ședința următoare, când gingia e deja sănătoasă, de
        obicei se simte mult mai puțin — diferența dintre prima și a doua vizită îi surprinde pe mulți
        pacienți.
      </p>

      <Callout title="Dacă ai abonament MedLife" tone="teal">
        <p>
          DentaLine este clinică parteneră MedLife, iar de pacienții cu abonament mă ocup eu. Ce anume
          acoperă abonamentul tău îți confirmăm la telefon, înainte de programare — merită întrebat, mai
          ales dacă amâni de ani buni o ședință pe care s-ar putea să o ai deja inclusă.
        </p>
      </Callout>

      <h2>Sarcina, fumatul și diabetul schimbă calculul</h2>

      <p>
        În sarcină, modificările hormonale fac gingia mult mai reactivă la aceeași cantitate de placă.
        Multe viitoare mămici ajung la noi speriate de cât sângerează, deși se spală la fel ca înainte.
        Igienizarea se poate face în sarcină, iar trimestrul al doilea e de obicei fereastra cea mai
        confortabilă. <Link to="/contact">Spune-ne când suni ca să te programezi</Link>, ca să adaptăm
        din start tot ce urmează.
      </p>

      <p>
        Fumatul face invers și e o capcană: nicotina strânge vasele de sânge, așa că gingia sângerează
        mai puțin chiar dacă boala avansează dedesubt. Un fumător poate ajunge la parodontită fără să fi
        văzut vreodată roz în chiuvetă. Dacă fumezi, controlul la șase luni nu e o recomandare de manual,
        e singurul mod de a prinde din timp ce nu ți se arată.
      </p>

      <p>
        La diabet, relația merge în ambele sensuri: glicemia dezechilibrată agravează boala gingivală, iar
        inflamația cronică din gură face glicemia mai greu de ținut sub control. Nu e o vinovăție, e o
        informație utilă — spune-i medicului tău, contează la planul de tratament.
      </p>

      <h2>Semnele care înseamnă „nu mai amâna”</h2>

      <p>
        Sângerarea ocazională e semnal de pornire. Următoarele înseamnă că lucrurile au avansat dincolo de
        gingie, iar aici chiar nu mai e util să aștepți:
      </p>

      <ul>
        <li>dinții par mai lungi decât îți aminteai, iar la colet apare o porțiune mai gălbuie și sensibilă;</li>
        <li>respirație neplăcută care revine la câteva ore după periaj, indiferent ce faci;</li>
        <li>gust metalic sau o secreție cu aspect purulent la marginea gingiei;</li>
        <li>un dinte care se mișcă, oricât de puțin, sau care „nu mai stă la fel” când muști;</li>
        <li>spații noi între dinți, apărute la vârsta adultă, fără să fi făcut ortodonție.</li>
      </ul>

      <p>
        Un dinte care se mișcă nu e o problemă de estetică și nu e o etapă normală a îmbătrânirii. Este,
        de obicei, os pierdut. Prins devreme, un asemenea caz se poate stabiliza ani buni; prins târziu,
        deschide și discuția despre ce punem în loc, dacă îl pierdem — și atunci intru și eu în vorbă cu{' '}
        <Link to="/echipa">colegele mele din echipă</Link>.
      </p>

      <p>
        Aici, pe Bd. Brăilei, la Ultimul Leu, o primă evaluare a gingiilor înseamnă o consultație de{' '}
        <Link to="/servicii/stomatologie-generala">stomatologie generală</Link>, cu radiografia făcută pe
        loc dacă e nevoie să vedem nivelul osului. De acolo știm dacă vorbim despre o igienizare și o
        corectură de tehnică sau despre un plan mai serios.
      </p>

      <p>
        O gingie sănătoasă stă lipită de dinte ca o manșetă și, orice ai face cu periuța, nu lasă urme
        roșii în chiuvetă. Dacă a ta face altceva, îți spune ceva. Merită ascultată cât timp răspunsul e
        încă o ședință de patruzeci de minute.
      </p>

      <ArticleFaq
        items={[
          {
            q: 'Este normal să îmi sângereze gingiile când mă spăl pe dinți?',
            a: 'Nu. O gingie sănătoasă nu sângerează la periaj, indiferent cât de conștiincios te speli. Sângerarea înseamnă inflamație, cel mai des gingivită produsă de placa bacteriană rămasă la marginea gingiei. Este un semnal, nu o etapă obișnuită.',
          },
          {
            q: 'Dacă mă spăl mai blând, o să treacă sângerarea?',
            a: 'Sângerarea scade, dar cauza rămâne și avansează. Periajul mai blând lasă placa pe loc, iar aceasta se calcifiază în tartru. Corect este să periezi normal zona, de două ori pe zi, cu peri moi, și să adaugi curățarea între dinți. Dacă în șapte-zece zile nu se ameliorează, ai nevoie de o igienizare profesională.',
          },
          {
            q: 'Cât durează până se vindecă gingiile după detartraj?',
            a: 'În majoritatea cazurilor de gingivită, gingia se liniștește vizibil în una-două săptămâni de la igienizare, dacă periajul de acasă este corect. Dacă sângerarea persistă și după acest interval, este necesară o reevaluare, pentru că problema poate fi deja parodontală.',
          },
          {
            q: 'Doare detartrajul dacă nu am mai făcut de mulți ani?',
            a: 'Poate fi sensibil, mai ales acolo unde gingia este inflamată sau coletele sunt descoperite. Lucrăm în etape, cu pauze, și, la nevoie, cu anestezie. Sensibilitatea la rece poate persista câteva zile după ședință, apoi dispare de obicei. Ședințele următoare sunt semnificativ mai confortabile.',
          },
          {
            q: 'Pot face detartraj în sarcină?',
            a: 'Da, igienizarea profesională se poate face în sarcină și este chiar recomandată, pentru că modificările hormonale accentuează inflamația gingivală. Trimestrul al doilea este de obicei perioada cea mai confortabilă. Anunță medicul de la prima programare, ca să adapteze ședința.',
          },
          {
            q: 'Ce se întâmplă dacă am abonament MedLife?',
            a: 'DentaLine este clinică parteneră MedLife, iar de pacienții cu abonament se ocupă Dr. Liliana Barbu. Ce servicii sunt acoperite depinde de tipul abonamentului, așa că sună-ne la 0742 038 270 înainte de programare și îți confirmăm exact ce intră în al tău.',
          },
        ]}
      />
    </ArticleLayout>
  )
}
