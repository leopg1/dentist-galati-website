import { Link } from 'react-router-dom'
import ArticleLayout from '../../components/articole/ArticleLayout'
import {
  ArticleFaq,
  ArticleImage,
  Callout,
  KeyTakeaways,
  PullQuote,
} from '../../components/articole/blocks'

export default function AligneriSauAparatFix() {
  return (
    <ArticleLayout slug="aligneri-sau-aparat-dentar-fix">
      <KeyTakeaways
        items={[
          'Alignerii nu sunt o versiune „mai bună” de aparat dentar. Sunt altceva, cu alte puncte tari și cu limite reale.',
          'Rotațiile mari, mișcările pe verticală și cazurile care cer și chirurgie rămân, de obicei, teritoriul aparatului fix.',
          'Gutierele se poartă în jur de 22 de ore pe zi. Dacă le scoți, nu se întâmplă nimic — la propriu: tratamentul stă pe loc.',
          'Cu aligneri mănânci orice, dar te speli pe dinți după fiecare masă. Cu aparat fix, periajul devine o mică meserie.',
          'După orice tratament ortodontic urmează contenția. Fără ea, dinții se întorc de unde au plecat.',
        ]}
      />

      <p>
        O gutieră transparentă cântărește câteva grame și încape în palmă. Un aparat fix, o dată
        lipit, stă acolo un an și jumătate, indiferent ce părere ai despre el marți dimineața, când
        te grăbești. De aici pornește, de fapt, toată discuția. Nu de la cum arată.
      </p>

      <p>
        Mă numesc Diana Șerban și lucrez cu aligneri și la copii, și la adulți. Aproape fiecare adult
        care se așază pe scaunul meu deschide subiectul la fel — „Se poate cu alignerii, nu? Nu vreau
        sârme.” — și de cele mai multe ori răspunsul chiar e da. Doar că nu întotdeauna, iar ce
        urmează nu e o pledoarie pentru gutiere. E lista de criterii pe care o folosesc când trebuie
        să spun cuiva că aparatul fix i-ar face treaba mai bine.
      </p>

      <h2>Amândouă mută dinții. Diferența e în felul în care o fac</h2>

      <p>
        Aparatul fix înseamnă bracket-uri lipite pe dinți și un arc care apasă continuu, în aceeași
        direcție, indiferent dacă tu ești de acord în ziua aceea sau nu. Lucrează și când dormi, și
        când ai uitat complet de el. Nu ai ce negocia cu un aparat lipit.
      </p>

      <p>
        Alignerii sunt o serie de gutiere transparente, făcute pe forma dinților tăi, fiecare cu o
        formă puțin diferită de a precedentei. Le porți, ele împing câteva zecimi de milimetru, apoi
        treci la setul următor. Uneori lipim pe dinți niște atașamente mici, din compozit, de culoarea
        dintelui — sunt punctele de sprijin fără de care anumite mișcări nu se pot face. Forța e la
        fel de reală ca la aparatul fix. Diferența e că, aici, tu ești cel care o pornește în fiecare
        dimineață.
      </p>

      <h2>Aligneri sau aparat dentar fix: complexitatea cazului răspunde prima</h2>

      <p>
        Înainte de preferințe, de estetică și de program, se uită cineva la ce trebuie mișcat. Unele
        mișcări sunt grele pentru gutiere prin însăși natura lor.
      </p>

      <ul>
        <li>
          <strong>Rotațiile mari</strong>, mai ales pe dinți rotunzi ca premolarii și caninii. O
          gutieră prinde greu un dinte care trebuie răsucit mult — nu are de ce să apuce.
        </li>
        <li>
          <strong>Mișcările pe verticală</strong> — un dinte care trebuie tras în jos sau împins în
          os. Sunt mișcările la care aparatul fix rămâne, de regulă, mai eficient.
        </li>
        <li>
          <strong>Spațiile mari de închis</strong>, de exemplu după extracții făcute în scop
          ortodontic.
        </li>
        <li>
          <strong>Cazurile scheletale</strong>, în care problema nu e la dinți, ci la raportul dintre
          maxilare, și în care planul include și chirurgie. Acolo discuția nici nu începe de la
          gutiere.
        </li>
      </ul>

      <p>
        În schimb, alignerii se descurcă foarte bine pe înghesuirile ușoare și moderate, pe spațierile
        dintre dinți, pe recidivele de după un tratament ortodontic de acum zece ani și pe
        alinierile pregătitoare — atunci când urmează oricum{' '}
        <Link to="/servicii/estetica-dentara">fațete sau o reconstrucție estetică</Link> și vrem să
        intrăm cu dinții deja aliniați, ca să șlefuim cât mai puțin.
      </p>

      <h3>Vârsta contează, dar nu cea din buletin</h3>

      <p>
        La copii și adolescenți intervine un factor în plus: creșterea. Există momente în care
        maxilarele pot fi ghidate, și ele nu se repetă. Un aparat pus la timp poate scurta mult
        povestea de mai târziu, iar decizia ține de etapa de dezvoltare, nu de vârsta rotundă.
      </p>

      <p>
        Cât despre adolescenți și gutiere: se poate, o facem des. Dar aici alegerea nu e între două
        tehnologii, ci între două tipuri de copil. Unul își pune gutiera înapoi după pauza de prânz.
        Altul o lasă în tavă la cantină și o găsim, două săptămâni mai târziu, în ghiozdan.
      </p>

      <h2>Cele 22 de ore pe zi, partea despre care nu se face reclamă</h2>

      <p>
        Alignerii trebuie purtați în jur de 22 de ore din 24. Îi scoți la masă, la cafea, la periaj —
        și îi pui imediat la loc. Sună ușor pe hârtie.
      </p>

      <p>
        Partea perfidă e alta: dacă nu îi porți, nu se întâmplă nimic. Nu te doare nimic și nu te
        ceartă nimeni. Pur și simplu, dinții stau pe loc — iar peste trei luni ajungi la control și
        setul care trebuia să fie al zecelea e încă al patrulea.
      </p>

      <PullQuote author="Dr. Diana Șerban">
        Alignerii funcționează exact atât cât îi porți. E unul dintre puținele tratamente în care
        jumătate din rezultat stă, la propriu, în buzunarul tău.
      </PullQuote>

      <Callout title="Un test cinstit, înainte să alegi" tone="coral">
        <p>
          Gândește-te la săptămâna trecută și numără de câte ori ai pus ceva în gură. Cafeaua de la
          zece se pune la socoteală, și biscuiții de la ședință la fel. Gutierele ies din gură la
          orice, în afară de apă plată. Dacă numărul te sperie, aparatul fix s-ar putea să fie
          varianta mai realistă pentru tine — și nu e o înfrângere, e o alegere bună.
        </p>
      </Callout>

      <h2>Cum decurge, concret, un tratament cu aligneri</h2>

      <p>
        Mulți își imaginează că se comandă niște gutiere de undeva și gata. Etapele reale sunt astea:
      </p>

      <ol>
        <li>
          Consultația și radiografia. La noi, radiologia digitală e în clinică, așa că imaginile se
          fac pe loc și le discutăm în aceeași ședință.
        </li>
        <li>
          Scanarea intraorală 3D. O cameră mică plimbată prin gură, câteva minute, fără pastă de
          amprentă și fără senzația aceea de sufocare pe care o știe oricine a făcut amprente
          clasice.
        </li>
        <li>
          Planul digital. Aici se vede simularea: cum stau dinții acum și cum ar urma să arate la
          final, mișcare cu mișcare. Vezi rezultatul înainte să începi — și, dacă ceva nu îți place,
          se discută atunci, nu peste un an.
        </li>
        <li>
          Seturile de gutiere, purtate în ordine și schimbate la intervalele pe care ți le stabilesc
          eu, în funcție de cum răspund dinții tăi.
        </li>
        <li>
          Controalele, la câteva săptămâni. Verificăm dacă mișcările s-au întâmplat cu adevărat, nu
          doar pe ecran.
        </li>
      </ol>

      <ArticleImage
        src="/media/services/scanare-3d.jpg"
        alt="Scanare intraorală 3D pentru planificarea unui tratament cu aligneri, la DentaLine Galați"
        caption="Scanarea intraorală durează câteva minute și înlocuiește amprenta clasică. Din ea iese planul digital pe care îl vezi înainte să începi."
      />

      <p>
        Pentru pacienții care vin din județ, de la zeci de kilometri de Galați, ritmul mai rar al
        controalelor chiar contează. E un criteriu practic, nu unul medical, dar cântărește când îți
        faci socoteala cu concediile și cu drumurile.
      </p>

      <h2>Igienă, mese, aspect: cum arată o zi obișnuită cu fiecare</h2>

      <p>
        Cu gutiere mănânci absolut orice, pentru că le scoți. În schimb, regula devine periaj după
        fiecare masă, altfel închizi zahărul și resturile sub un capac de plastic, lipit de smalț,
        ore în șir. E cel mai bun mod de a ieși din ortodonție cu dinții drepți și cu trei carii noi.
        Îți trebuie o periuță în geantă. Chiar îți trebuie.
      </p>

      <p>
        Cu aparat fix, meniul se restrânge — nuci, covrigi tari, caramele, mere mușcate direct — iar
        periajul în jurul bracket-urilor cere periuțe interdentare și răbdare. Nu e imposibil, e doar
        o muncă zilnică în plus. În ambele situații, o{' '}
        <Link to="/servicii/igienizare">igienizare profesională</Link> la interval regulat, în timpul
        tratamentului, nu e un moft.
      </p>

      <p>
        La capitolul aspect, gutierele câștigă detașat: de la un metru, nu le vede nimeni. De aproape
        se observă atașamentele, iar în primele zile după fiecare set nou vorbitul e ușor ciudat.
        Trece.
      </p>

      <p>
        Și pentru că aici nu te minte nimeni frumos: <strong>doare puțin în ambele variante</strong>.
        La aparatul fix, câteva zile după fiecare ajustare, plus bracket-uri care freacă obrazul până
        se obișnuiește mucoasa. La aligneri, o presiune surdă în prima zi sau două după fiecare set
        nou — mai blândă, dar prezentă.
      </p>

      <h2>Contenția: capitolul pe care îl sare toată lumea</h2>

      <p>
        Dinții au memorie. Fibrele din jurul rădăcinii trag înapoi luni bune după ce mișcarea s-a
        terminat, iar dinții continuă să migreze ușor toată viața, chiar și la oameni care nu au
        purtat niciodată aparat.
      </p>

      <p>
        De aceea, după orice tratament ortodontic — fix sau cu gutiere — urmează contenția: un fir
        subțire lipit pe fața interioară a dinților din față, o gutieră transparentă purtată noaptea,
        sau amândouă. Nu e o etapă opțională și nu e o etapă scurtă. Vorbim de ani, iar noaptea, de
        multe ori, pe termen nedefinit.
      </p>

      <p>
        Cele mai multe cazuri de „mi s-au strâmbat la loc” pe care le văd în cabinet nu sunt eșecuri
        de tratament. Sunt oameni care au avut un rezultat frumos la șaisprezece ani și au renunțat
        la contenție după câteva luni. Firul lipit cere și el atenție: adună tartru, așa că vine la
        pachet cu igienizările periodice.
      </p>

      <h2>Deci, aligneri sau aparat dentar fix?</h2>

      <p>
        Depinde. Știu că nu e răspunsul pe care îl cauți, dar e singurul onest într-un text scris
        pentru toată lumea. Un articol nu îți poate vedea rotația caninului, nici raportul dintre
        maxilare, nici ce se întâmplă cu molarii de minte.
      </p>

      <p>
        Ce pot să îți spun e cum arată o decizie luată bine: o consultație în care ne uităm la dinți,
        facem radiografia și scanarea, iar apoi îți spun deschis dacă al tău e un caz pentru{' '}
        <Link to="/servicii/aligneri">tratamentul cu aligneri</Link>, dacă e unul pentru aparat fix,
        sau dacă merg amândouă — caz în care punem alături durata și disciplina pe care o cere
        fiecare, și alegi tu.
      </p>

      <p>
        Suntem pe Bd. Brăilei, la „Ultimul Leu”, iar dacă vrei să știi dinainte cine te tratează,{' '}
        <Link to="/echipa">medicii clinicii sunt aici, cu specializările lor</Link>. Poți{' '}
        <Link to="/contact#formular">cere o programare online</Link> sau ne poți suna. Vino cu
        întrebările, inclusiv cu cele care ți se par prostești. Le-am auzit pe toate și încă nu am râs
        de niciuna.
      </p>

      <ArticleFaq
        items={[
          {
            q: 'Cât durează un tratament cu aligneri?',
            a: 'Depinde de cât de mult trebuie mișcați dinții. Corecțiile mici se pot termina în câteva luni, iar cazurile mai complicate trec de un an. Estimarea reală se face la planificarea digitală, după scanare, pentru că abia atunci se știe câte seturi de gutiere sunt necesare și în ce ritm se schimbă.',
          },
          {
            q: 'Dor alignerii?',
            a: 'De obicei simți o presiune surdă în prima zi sau două după fiecare set nou, semn că gutiera lucrează. Nu e o durere ascuțită și trece de la sine. Comparativ cu ajustările de la aparatul fix, majoritatea pacienților spun că e mai blând, dar nu e complet nesimțit.',
          },
          {
            q: 'Aligneri sau aparat dentar fix pentru adolescenți?',
            a: 'Ambele funcționează la adolescenți. Decid două lucruri: complexitatea cazului și cât de disciplinat e copilul. Gutierele cer purtare în jur de 22 de ore pe zi și grijă să nu fie pierdute; dacă asta pare nerealist pentru copilul tău, aparatul fix e de obicei varianta mai previzibilă, pentru că lucrează fără să depindă de el.',
          },
          {
            q: 'Ce se întâmplă dacă pierd o gutieră?',
            a: 'Sună la cabinet cât mai repede și nu trece la setul următor de capul tău. În general, până primești indicații, te întorci la gutiera anterioară, ca dinții să nu se miște înapoi. Săritul peste seturi nu grăbește tratamentul, ci îl încurcă.',
          },
          {
            q: 'Pot face aligneri dacă am deja coroane sau implanturi?',
            a: 'De cele mai multe ori, da, dar planul se face cu atenție. Un implant este fixat în os și nu se mișcă, așa că restul dinților se mută în jurul lui. Pe coroane, atașamentele se lipesc mai greu decât pe smalț natural. Toate astea se văd la consultație și la scanare, înainte să înceapă ceva.',
          },
          {
            q: 'Cât timp trebuie să port contenția după tratament?',
            a: 'Mai mult decât se așteaptă majoritatea. Firul lipit pe fața interioară a dinților din față poate rămâne ani buni, iar gutiera de noapte se poartă, în multe situații, pe termen nedefinit. Este partea care păstrează rezultatul obținut, indiferent dacă tratamentul a fost cu aparat fix sau cu aligneri.',
          },
        ]}
      />
    </ArticleLayout>
  )
}
