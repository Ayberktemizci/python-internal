/* ============================================================================
   Kodland Python Tutor Training — CONTENT (English, source of truth)
   To create another language: copy this file to content-XX.js and translate
   every STRING VALUE below. Do NOT change keys, structure, HTML tags, CSS
   classes, or Python code — inside code blocks translate ONLY the # comments.
   Set code/htmlLang/title, set dst.formUrl:'' and translate dst.placeholderNote.
   ============================================================================ */
window.CONTENT = {
code: 'pl',
htmlLang: 'pl',
title: 'Szkolenie dla nauczycieli Pythona — Kodland',
ui: {
  logoSub: 'Szkolenie z Pythona',
  changeRegion: '🌐 Region',
  heroEyebrow: '🐍 Program szkoleniowy dla nauczycieli',
  heroTitle: 'Przygotuj się do nauczania<br><span class="h-pill">Pythona</span><br>dzieci',
  heroSub: "Przejdź przez każdy moduł i zdaj każdy quiz, aby ukończyć przygotowanie na nauczyciela. Zdobądź 70%+ w quizie modułu, aby odblokować kolejny — nie da się przeskoczyć naprzód.",
  progLabel: 'ukończone moduły',
  modulesLabel: 'Twoje moduły',
  allDone: '🏆 Wszystko gotowe!',
  completeWord: 'ukończono',
  backModules: '← Moduły',
  exitQuiz: '← Wyjdź z quizu',
  backDashboard: '← Panel',
  moduleWord: 'Moduł',
  ofWord: 'z',
  objectiveWord: 'Cel',
  badgePassed: '✓ Zaliczono',
  badgeLocked: '🔒 Zablokowane',
  badgeStart: 'Zacznij →',
  badgeWatched: '✓ Obejrzano',
  badgeWatch: '▶ Obejrzyj',
  tagCompleted: 'Ukończono',
  tagExampleLesson: 'Przykładowa lekcja',
  completeModuleWord: 'Ukończ moduł',
  scoreWord: 'Wynik',
  questionsWord: 'pytania',
  takeQuiz: '📝 Rozwiąż quiz →',
  retakeQuiz: '🔄 Powtórz quiz',
  markComplete: 'Oznacz jako ukończone',
  doneCompleted: '✓ Ukończono',
  moduleComplete: 'Moduł ukończony',
  questionWord: 'Pytanie',
  correctPrefix: '✅ Poprawnie! ',
  notQuitePrefix: '❌ Nie do końca. ',
  seeResults: 'Zobacz wyniki →',
  nextBtn: 'Dalej →',
  modulePassed: 'Moduł zaliczony!',
  keepReviewing: 'Kontynuuj powtarzanie',
  scoreLine: 'Masz {s}/{t} poprawnych.',
  passMsg: ' Kolejny moduł odblokowany!',
  failMsg: ' Potrzebujesz 70%, aby zaliczyć. Powtórz i spróbuj ponownie!',
  reviewModuleWord: '📖 Powtórz moduł',
  startModuleWord: 'Rozpocznij moduł',
  watchModuleWord: '▶ Obejrzyj moduł',
  viewCertificate: '🏆 Zobacz certyfikat',
  trainingComplete: 'Szkolenie ukończone!',
  completeSub: "Przeszedłeś przez każdy moduł — gratulacje! Jesteś gotowy do testu umiejętności cyfrowych.",
  certLabel: 'Certyfikat ukończenia',
  certTitle: 'Szkolenie dla nauczycieli Pythona',
  certLine: 'Kodland · Wszystkie {n} moduły · Średni wynik quizów: {avg}%',
  takeDST: '🎯 Rozwiąż test umiejętności cyfrowych →',
  backDashboard2: '← Powrót do panelu',
  dstCardStage: 'Etap końcowy',
  dstCardTitle: 'Test umiejętności cyfrowych',
  dstCardDesc: 'Końcowa ocena praktyczna, wykonywana po ukończeniu każdego modułu.',
  dstReady: 'Gotowe',
  dstCardTag: 'Ocena praktyczna',
  videoFallback: 'Twoja przeglądarka nie może odtworzyć tego wideo.',
  videoDownload: 'Pobierz je',
  videoPhTitle: 'Nagranie wkrótce',
  videoPhBody: 'Tutaj pojawi się wideo z wzorcową lekcją.'
},
dst: {
  formUrl: 'https://forms.gle/SHRUa5HxpnhYHsE99',
  placeholderNote: 'Formularz zgłoszeniowy dla Twojego regionu zostanie wkrótce dodany.',
  html: `<div class="dst-body">
    <div class="dst-intro">
      <div class="dst-badge">🏆 Test umiejętności cyfrowych · 2025</div>
      <div class="dst-h1">Test dla nauczycieli Pythona</div>
      <p class="dst-sub">W tym zadaniu możesz wykazać się znajomością Pythona oraz umiejętnością pomagania uczniom przy pisaniu projektów — a także swoją sumiennością, uczciwością i gotowością do przestrzegania ustalonych wytycznych. Twoim zadaniem jest stworzenie gry, która spełnia poniższe wymagania. Nie potrzebujesz super wypasionego projektu od kogoś innego — potrzebujesz projektu, który dobrze pasuje do tego konkretnego zadania!</p>
    </div>

    <div class="dst-stage-header">
      <span class="dst-stage-pill">Zadanie</span>
      <span class="dst-stage-title">🎮 Zbuduj grę</span>
    </div>

    <div class="dst-task">
      <div class="dst-task-num">1</div>
      <div class="dst-task-body"><p>Folder projektu musi zawierać plik <code>readme.txt</code> z listą użytych bibliotek oraz instrukcją uruchomienia projektu.</p></div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">2</div>
      <div class="dst-task-body"><p>Kod musi być <strong>w całości oryginalny i napisany samodzielnie.</strong> (Grafika nie musi być oryginalna.)</p></div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">3</div>
      <div class="dst-task-body"><p>Można używać wyłącznie następujących modułów:</p>
        <ul>
          <li><strong>Pygame Zero</strong></li>
          <li><strong>math</strong></li>
          <li><strong>random</strong></li>
          <li>Inne biblioteki są <strong>ZABRONIONE!</strong></li>
          <li>Biblioteki <strong>Pygame</strong> <strong>NIE WOLNO</strong> używać.</li>
          <li><em>Wyjątek:</em> możesz zaimportować klasę <code>Rect</code> z Pygame.</li>
        </ul>
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">4</div>
      <div class="dst-task-body"><p>Możesz stworzyć wyłącznie grę jednego z następujących typów:</p>
        <ul>
          <li><strong>Roguelike</strong> (np. The Binding of Isaac, Hades, Slay the Spire)</li>
          <li><strong>Platformówka</strong> (np. Super Mario Bros., Sonic the Hedgehog)</li>
          <li><strong>Runner</strong> (np. Subway Surfers, Temple Run)</li>
        </ul>
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">5</div>
      <div class="dst-task-body"><p>Gra musi mieć <strong>menu główne z klikalnymi przyciskami:</strong></p>
        <ul>
          <li>Rozpocznij grę</li>
          <li>Włącz/Wyłącz muzykę i dźwięki</li>
          <li>Wyjście</li>
        </ul>
        <img class="dst-img" src="assets/dst/image1.png" alt="Przykładowy ekran gry z klikalnymi przyciskami menu" loading="lazy">
        <img class="dst-img" src="assets/dst/image5.png" alt="Przykładowe menu główne: Graj, Dźwięk Wł./Wył., Wyjście" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">6</div>
      <div class="dst-task-body"><p>Gra musi mieć co najmniej <strong>dwóch różnych przeciwników</strong>, którzy są groźni dla bohatera.</p>
        <img class="dst-img" src="assets/dst/image3.gif" alt="Mapa roguelike z kilkoma różnymi przeciwnikami" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">7</div>
      <div class="dst-task-body"><p>Przeciwnicy muszą <strong>poruszać się w obrębie własnych obszarów.</strong></p>
        <img class="dst-img" src="assets/dst/image4.gif" alt="Przeciwnicy poruszający się, każdy zamknięty w swoim pomieszczeniu" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">8</div>
      <div class="dst-task-body"><p>Gra musi mieć <strong>logiczny mechanizm zakończenia gry bez błędów</strong> — zarówno dla wygranej, jak i przegranej.</p>
        <img class="dst-img" src="assets/dst/image7.gif" alt="Przykładowa rozgrywka prowadząca do wygranej/przegranej" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">9</div>
      <div class="dst-task-body"><p>Zarówno postać gracza, jak i przeciwnicy muszą mieć <strong>animacje sprite'ów podczas ruchu</strong> (na przykład ruchy nóg podczas chodzenia).</p>
        <img class="dst-img" src="assets/dst/image10.gif" alt="Postać biegnąca z animowanym ruchem nóg" loading="lazy">
        <div class="dst-imgrow"><img class="dst-img pix" src="assets/dst/image11.gif" alt="Animowana postać poruszająca się przez trawę"></div>
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">10</div>
      <div class="dst-task-body"><p>Gra musi mieć <strong>zarówno muzykę w tle, jak i dźwięki gry</strong> (dźwięki, gdy postać atakuje lub zderza się z przeciwnikiem, dźwięk monety przy zbieraniu nagrody itp.).</p><p style="margin-top:6px">Przykładowe źródło dźwięków: <a class="dst-inline-link" href="https://mixkit.co" target="_blank" rel="noopener noreferrer">mixkit.co</a></p></div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">11</div>
      <div class="dst-task-body"><p>Zarówno postać gracza, jak i przeciwnicy muszą mieć <strong>animacje w stanie spoczynku</strong> (na przykład: oddychanie, rozglądanie się, ruszanie płetwami, machanie ogonem itp.).</p><p style="margin-top:6px">Przykładowe źródło grafiki: <a class="dst-inline-link" href="https://kenney.nl" target="_blank" rel="noopener noreferrer">Kenney.nl</a></p>
        <div class="dst-imgrow">
          <img class="dst-img pix" src="assets/dst/image9.gif" alt="Animacja postaci w stanie spoczynku">
          <img class="dst-img pix" src="assets/dst/image6.gif" alt="Animacja postaci w stanie spoczynku na trawie">
          <img class="dst-img pix" src="assets/dst/image2.gif" alt="Scena w stanie spoczynku z przeciwnikiem">
        </div>
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">12</div>
      <div class="dst-task-body"><p>Musisz napisać <strong>własne klasy</strong>, aby zaimplementować ruch postaci i animacje sprite'ów. <strong>(Programowanie obiektowe)</strong></p>
        <img class="dst-img" src="assets/dst/image8.png" alt="Przykład własnej klasy implementującej ruch" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">13</div>
      <div class="dst-task-body"><p>Musisz używać <strong>jasnych, znaczących angielskich nazw</strong> zmiennych, klas i funkcji — przestrzegaj zasad <strong>PEP 8</strong>.</p></div>
    </div>

    <div class="dst-stage-header">
      <span class="dst-stage-pill">Uwagi</span>
      <span class="dst-stage-title">📌 Definicje i wskazówki</span>
    </div>
    <div class="card">
      <ul style="padding-left:17px">
        <li style="margin-bottom:6px">Gra <strong>roguelike</strong> to gra z widokiem z góry, w której wszystkie obiekty i postacie umieszczone są na siatce świata gry. Ruch między komórkami musi być płynny i animowany.</li>
        <li style="margin-bottom:6px">Gra typu <strong>point-and-click adventure</strong> oferuje widok z góry podobny do gier roguelike, ale ruch postaci nie jest ograniczony do siatki.</li>
        <li style="margin-bottom:6px"><strong>Platformówka</strong> to gra z widokiem z boku, w której postać może przeskakiwać między platformami.</li>
        <li><strong>Animacja sprite'ów</strong> oznacza użycie sekwencji nieustannie i cyklicznie zmieniających się obrazów do animowania postaci. Zwykłe przełączanie między obrazem zwróconym w lewo a obrazem zwróconym w prawo <strong>NIE</strong> jest animacją sprite'ów. 🧐</li>
      </ul>
    </div>
    <div class="callout ct"><span class="ci">💡</span><span>Nie potrzebujesz zbyt złożonego ani długiego kodu — zazwyczaj <strong>100–200 sensownych linii</strong> wystarcza, aby dobrze wykonać zadanie.</span></div>
    <div class="callout cg"><span class="ci">✅</span><span>Złożoność tego projektu jest tylko o około <strong>30% wyższa</strong> niż projekty końcowe naszych uczniów. Jeśli nauczyciel potrafi poprowadzić uczniów przez ich projekty, ten poziom jest w pełni osiągalny — mamy nadzieję, że ukończysz go pomyślnie! 👍</span></div>

    <div class="dst-stage-header">
      <span class="dst-stage-pill">Ważne</span>
      <span class="dst-stage-title">⚠️ Prosimy o uważne przeczytanie</span>
    </div>
    <div class="callout cw"><span class="ci">⚠️</span><span>Jeśli naruszysz jednocześnie kilka kluczowych wymagań, może <strong>nie być możliwości poprawienia</strong> projektu.</span></div>
    <div class="callout cw"><span class="ci">⚠️</span><span>Projekt <strong>NIE</strong> może być w całości ani częściowo skopiowany z internetu — takie działanie natychmiast wzbudzi wątpliwości co do Twojej uczciwości i profesjonalizmu.</span></div>
    <div class="callout cw"><span class="ci">🚫</span><span>Użycie <strong>SI jest bezpośrednim powodem odrzucenia.</strong></span></div>

    <div class="dst-stage-header">
      <span class="dst-stage-pill">Zgłoszenie</span>
      <span class="dst-stage-title">📤 Jak zgłosić</span>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">1</div>
      <div class="dst-task-body"><p>Prześlij ukończony projekt do usługi przechowywania w chmurze (<strong>Google Drive lub GitHub</strong>) i pamiętaj, aby <strong>udostępnić dostęp</strong> do folderu projektu. Prosimy <strong>NIE</strong> używać skompresowanych formatów plików!</p></div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">2</div>
      <div class="dst-task-body"><p>Wypełnij poniższy test umiejętności i <strong>wklej link do swojego projektu</strong> jako odpowiedź na ostatnie pytanie.</p></div>
    </div>
    <div class="dst-submit-card">
      <h3>🔗 Gotowy do zgłoszenia?</h3>
      <p>Otwórz formularz testu umiejętności, wypełnij go i wklej link do swojego projektu jako ostatnią odpowiedź.</p>
      <a class="dst-link-btn" id="dst-form-btn" href="#">Otwórz formularz testu umiejętności →</a>
    </div>

    <p style="text-align:center;color:var(--text-muted);font-size:14px;margin-top:28px">Powodzenia! 🍀</p>
</div>`
},
modules: [
  {
    id:1, emoji:'🐍', color:'#AEDD2E',
    title:'Podstawy Pythona',
    desc:'print, zmienne, input, typy danych i konwersja typów — pierwszy program dziecka.',
    obj:'Zbuduj wiedzę na poziomie nauczycielskim o absolutnych podstawach: wyjście, zmienne, wejście, główne typy danych oraz konwersje między nimi. Na koniec powinieneś umieć wyjaśnić każde z nich na trzy różne sposoby i przewidzieć dokładne błędy, na które natrafi początkujący.',
    sections:[
      {t:'🗺️ Gdzie to się mieści w kursie', cards:[
        {type:'text', h:'Pierwszy kontakt z kodem', b:'To moduł, w którym dziecko uruchamia swój pierwszy program w życiu. Nic tutaj nie jest trudne dla Ciebie — wyzwanie jest wyłącznie pedagogiczne. Łuk kursu jest przemyślany: <strong>wyjście</strong> (<code>print</code>), aby od razu zobaczyć wyniki → <strong>zmienne</strong>, aby program mógł coś pamiętać → <strong>wejście</strong>, aby mógł odpowiadać → <strong>typy danych</strong>, aby zrozumieli, jaki rodzaj wartości przechowują → <strong>konwersja</strong>, aby wejście można było wykorzystać w matematyce. Każdy późniejszy moduł — pętle, listy, funkcje, a nawet gry — opiera się na tych pięciu pomysłach.'},
        {type:'text', h:'Twoje prawdziwe zadanie na lekcji 1', b:'Wyświetl działający, spersonalizowany program na ekranie dziecka w ciągu pierwszych kilku minut. Wczesny, widoczny sukces sprawia, że 9-latek chce wracać. Teoria przychodzi <em>po</em> zastrzyku dopaminy z zobaczenia własnego imienia na ekranie, nigdy przed nim.'},
        {type:'tip', txt:'Zasada tempa: jedna nowa idea, a potem od razu coś uruchom. Początkujący nie potrafią utrzymać trzech abstrakcyjnych pojęć w głowie, zanim zobaczą, że którekolwiek z nich działa. Kod → uruchom → zareaguj → następna idea.'}
      ]},
      {t:'🖨️ print() — wyjście', cards:[
        {type:'text', h:'Czego uczyć', b:'<code>print()</code> wyświetla to, co znajduje się w nawiasach. Tekst potrzebuje cudzysłowów; liczby nie. Możesz wypisać kilka rzeczy naraz, oddzielając je przecinkami, a Python automatycznie dodaje między nimi spację.'},
        {type:'code', lbl:'podstawy print', code:`<span class="cf">print</span>(<span class="cs">"Hello, world!"</span>)
<span class="cf">print</span>(<span class="cn">2024</span>)
<span class="cf">print</span>(<span class="cs">"You are"</span>, <span class="cn">9</span>, <span class="cs">"years old"</span>)
<span class="cc"># Wynik: You are 9 years old</span>`},
        {type:'warn', txt:'Błędem numer 1 przy pierwszym kontakcie jest zapominanie o cudzysłowach: <code>print(Hello)</code> sprawia, że Python szuka <em>zmiennej</em> o nazwie Hello i zgłasza <code>NameError</code>. Ucz zasady na głos: <strong>"tekst zawsze nosi cudzysłowy."</strong>'}
      ]},
      {t:'📦 Zmienne — pamięć', cards:[
        {type:'text', h:'Czego uczyć', b:'Zmienna przechowuje jedną wartość pod nazwą, dzięki czemu można ją później ponownie wykorzystać. Nazwa jest po lewej stronie znaku <code>=</code>, wartość po prawej. Czytanie linii od prawej do lewej pomaga: "weź wartość 9 i włóż ją do pudełka o nazwie age."'},
        {type:'code', lbl:'zmienne', code:`name = <span class="cs">"Mia"</span>
age = <span class="cn">9</span>
<span class="cf">print</span>(<span class="cs">"Hi"</span>, name)
age = age <span class="ck">+</span> <span class="cn">1</span>   <span class="cc"># pudełko można zaktualizować</span>
<span class="cf">print</span>(<span class="cs">"Next year:"</span>, age)`},
        {type:'hi', h:'Metafora, która działa', b:'"Zmienna to opisane pudełko, które trzyma jedną rzecz. Włóż coś nowego, a stara rzecz znika." To doskonale wyjaśnia ponowne przypisanie — dzieci natychmiast pojmują, że <code>age = age + 1</code> opróżnia pudełko i napełnia je ponownie.'},
        {type:'warn', txt:'<code>=</code> nie oznacza "równa się" w sensie matematycznym — oznacza "włóż prawą stronę do lewej strony." Mówienie "równa się" na głos powoduje później realne pomieszanie z <code>==</code>. Mów zamiast tego "<strong>staje się</strong>" lub "<strong>otrzymuje</strong>": "age staje się 10."'}
      ]},
      {t:'⌨️ input() — i dlaczego wszystko jest łańcuchem znaków', cards:[
        {type:'text', h:'Najważniejsza idea w module', b:'<code>input()</code> wstrzymuje program, czeka, aż użytkownik coś wpisze, i zwraca to, co wpisano, <strong>jako łańcuch znaków — zawsze, nawet jeśli wpisano cyfry.</strong> Ten jeden fakt jest źródłem większej liczby błędów początkujących niż cokolwiek innego w całym kursie, więc zasługuje na naprawdę dużo czasu.'},
        {type:'code', lbl:'klasyczny błąd, a potem poprawka', code:`age = <span class="cf">input</span>(<span class="cs">"How old are you? "</span>)
<span class="cf">print</span>(age <span class="ck">+</span> <span class="cn">1</span>)
<span class="cc"># TypeError: can only concatenate str ... not int</span>

<span class="cc"># Poprawka: zamień tekst na liczbę</span>
age = <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"How old are you? "</span>))
<span class="cf">print</span>(<span class="cs">"Next year you’ll be"</span>, age <span class="ck">+</span> <span class="cn">1</span>)`},
        {type:'good', txt:'Ucz tego jako historii: "input zawsze daje ci słowa, nigdy liczby. Jeśli chcesz robić matematykę, musisz najpierw zamienić słowa na liczbę za pomocą <code>int()</code>." Pokaż awarię celowo, przeczytajcie błąd razem, a potem go napraw. Sekwencja błąd-a-potem-poprawka jest łatwiejsza do zapamiętania niż zasada podana z góry.'}
      ]},
      {t:'🔢 Typy danych i konwersja', cards:[
        {type:'text', h:'Trzy typy, które dzieci poznają najpierw', b:'<strong>str</strong> (tekst w cudzysłowach), <strong>int</strong> (liczby całkowite) i <strong>float</strong> (liczby dziesiętne). <code>type(x)</code> ujawnia, którym z nich jest wartość — trzymaj to otwarte w prezentacji i sprawdzaj rzeczy na żywo. Funkcje konwersji przenoszą między nimi: <code>int("5")</code> → 5, <code>str(5)</code> → "5", <code>float("3.2")</code> → 3.2.'},
        {type:'code', lbl:'type() i konwersje', code:`<span class="cf">print</span>(<span class="cf">type</span>(<span class="cs">"hi"</span>))    <span class="cc"># &lt;class 'str'&gt;</span>
<span class="cf">print</span>(<span class="cf">type</span>(<span class="cn">7</span>))       <span class="cc"># &lt;class 'int'&gt;</span>
<span class="cf">print</span>(<span class="cf">type</span>(<span class="cn">3.5</span>))     <span class="cc"># &lt;class 'float'&gt;</span>

score = <span class="cf">int</span>(<span class="cs">"10"</span>)        <span class="cc"># "10" -&gt; 10</span>
label = <span class="cs">"Score: "</span> <span class="ck">+</span> <span class="cf">str</span>(score)  <span class="cc"># liczba -&gt; tekst do połączenia</span>`},
        {type:'twocol', left:{h:'Łańcuch + liczba = kłopoty', items:['<code>"5" + 3</code> &rarr; <code>TypeError</code>','<code>"5" + "3"</code> &rarr; <code>"53"</code> (połączone!)','<code>5 + 3</code> &rarr; <code>8</code> (prawdziwa matematyka)']}, right:{h:'Jak nauczać różnicy', items:['Uruchom wszystkie trzy na żywo — pozwól im zgadywać','"+ na tekście skleja; + na liczbach dodaje"','Użyj <code>type()</code>, aby ujawnić dlaczego']}}
      ]},
      {t:'🧒 Nieporozumienia, które napotkasz', cards:[
        {type:'twocol', left:{h:'Co początkujący robią źle', items:['Zapominanie cudzysłowów wokół tekstu','Traktowanie <code>input()</code> jako liczby','Mylenie <code>=</code> i <code>==</code>','Literówki w nazwach zmiennych (<code>naem</code>)','Myślenie, że zmienna "pokazuje się" sama bez <code>print</code>']}, right:{h:'Twoje wyprzedzające ruchy', items:['"Tekst nosi cudzysłowy"','"input zawsze daje słowa"','"jedno = zapisuje, dwa == pyta"','Przeczytajcie <code>NameError</code> razem','"Przechowywanie jest ciche; tylko print pokazuje"']}},
        {type:'warn', txt:'Gdy pojawi się błąd, powstrzymaj się od naprawiania go samodzielnie. Przeczytaj ostatnią linię śledzenia <em>razem</em> z uczniem i pozwól mu znaleźć przyczynę. Wczesne budowanie samodzielności w czytaniu błędów to jedna z najbardziej wartościowych rzeczy, jakie robi nauczyciel.'}
      ]},
      {t:'🎯 Łączenie tego w całość', cards:[
        {type:'hi', h:'Pierwszy projekt, z którego są dumni', b:'Malutki kalkulator "O mnie" lub "wiek w 2050" wykorzystuje każdą ideę z modułu: wejście, konwersję, zmienną, arytmetykę i print. Pozwól im go spersonalizować (ich imię, ich ulubiona gra). Poczucie własności zamienia ćwiczenie w coś, co zrzucą na ekran i pokażą rodzicowi.'},
        {type:'code', lbl:'miniprojekt: wiek w 2050', code:`name = <span class="cf">input</span>(<span class="cs">"Your name? "</span>)
age = <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"Your age? "</span>))
future = age <span class="ck">+</span> (<span class="cn">2050</span> <span class="ck">-</span> <span class="cn">2024</span>)
<span class="cf">print</span>(name <span class="ck">+</span> <span class="cs">", in 2050 you’ll be "</span> <span class="ck">+</span> <span class="cf">str</span>(future))`},
        {type:'good', txt:'Zauważ, że ten miniprojekt potrzebuje <code>int()</code> na wejściu i <code>str()</code> na wyjściu — idealny, naturalny powód, dla którego konwersje istnieją. Sięgaj po przykłady, w których dane pojęcie jest naprawdę potrzebne, a nie demonstrowane w izolacji.'}
      ]}
    ],
    quiz:[
      {q:'Uczeń pisze age = input("Age: "), następnie age + 1 i otrzymuje TypeError. Jaka jest najczystsza poprawka i idea za nią stojąca?', opts:['Owinąć input w int(): age = int(input(...)) — input zawsze zwraca łańcuch znaków','Zrestartować Pythona; interpreter się pogubił','Zmienić nazwę zmiennej, aby uniknąć kolizji','Usunąć + 1, bo nie można dodawać do input'], c:0, fb:'input() zawsze zwraca łańcuch znaków, więc musi zostać przekonwertowany za pomocą int() przed arytmetyką. To jest centralna idea modułu.'},
      {q:'Które wyjaśnienie "zmiennej" jest najlepsze dla 9-latka?', opts:['Opisane pudełko, które trzyma jedną wartość, którą można ponownie wykorzystać i nadpisać','Funkcja, która zwraca przechowywane dane','Zarezerwowane słowo kluczowe w Pythonie','Pętla, która pamięta liczby'], c:0, fb:'Metafora "opisanego pudełka" jest konkretna i dodatkowo klarownie wyjaśnia ponowne przypisanie.'},
      {q:'Dlaczego ryzykowne jest czytanie symbolu "=" na głos jako "równa się" dla początkujących?', opts:['Zachęca do pomylenia z ==, które faktycznie oznacza "jest równe"','"Równa się" jest gramatycznie niepoprawne','Python nie używa symbolu =','Wydłuża to lekcję'], c:0, fb:'Mówienie "otrzymuje" lub "staje się" utrzymuje przypisanie (=) odrębnym od porównania (==), zapobiegając bardzo powszechnemu późniejszemu pomieszaniu.'},
      {q:'Dziecko uruchamia swój program i "nic się nie pokazuje", chociaż zapisało wartość w zmiennej. Najbardziej prawdopodobna przyczyna?', opts:['Zapisało wartość, ale nigdy nie wywołało print(), aby ją wyświetlić','Nazwa zmiennej jest za długa','Python wypisuje tylko liczby','Muszą zaimportować moduł wyświetlania'], c:0, fb:'Zapisanie wartości jest ciche; tylko print() umieszcza coś na ekranie. "Przechowywanie jest ciche, tylko print pokazuje."'},
      {q:'Co wypisuje print("5" + "3") i dlaczego dobrze jest to zademonstrować na żywo?', opts:['"53" — + łączy łańcuchy znaków, zapadająca w pamięć niespodzianka, która motywuje do świadomości typów','8 — Python dodaje liczby','Błąd — nie można używać + na łańcuchach znaków','"5 3" — Python dodaje spację'], c:0, fb:'Oba argumenty są łańcuchami znaków, więc + łączy je w "53". Niespodzianka zapada w pamięć lepiej niż zwykłe podanie zasady.'},
      {q:'Uczeń napotyka NameError: name ‘naem’ is not defined. Najlepszą reakcją dydaktyczną jest:', opts:['Przeczytać linię błędu razem i pozwolić mu wypatrzyć literówkę','Po cichu ją poprawić, aby lekcja szła dalej','Powiedzieć mu, że zmienne są zawodne','Przełączyć się na inny przykład'], c:0, fb:'Uczenie uczniów czytania śledzenia buduje samodzielność w debugowaniu — kluczowy cel długoterminowy.'}
    ]
  },
  {
    id:2, emoji:'🔀', color:'#F03D9E',
    title:'Sterowanie przepływem: warunki i pętle',
    desc:'if / elif / else, operatory porównania i logiczne, a także pętle while i for oraz zagnieżdżanie.',
    obj:'Naucz programy podejmowania decyzji i powtarzania. Powinieneś umieć wyjaśnić wcięcia jako składnię, wybierać for vs while na poczekaniu, prześledzić pętlę ręcznie i diagnozować błędy nieskończonej pętli oraz przesunięcia o jeden, zanim się pojawią.',
    sections:[
      {t:'🗺️ Gdzie to się mieści w kursie', cards:[
        {type:'text', h:'Dwa silniki każdego programu', b:'Do tej pory programy biegły prosto w dół, od góry do dołu, jeden raz. Ten moduł dodaje dwie rzeczy, które sprawiają, że kod faktycznie <em>robi</em> coś interesującego: <strong>decyzje</strong> (<code>if/elif/else</code>), aby program mógł się rozgałęziać, oraz <strong>powtarzanie</strong> (<code>while</code>, <code>for</code>), aby mógł wykonać pracę wiele razy bez kopiuj-wklej. Połączone, tworzą pierwsze prawdziwe "algorytmy" — i napędzają każdą grę w dalszej części kursu.'},
        {type:'warn', txt:'W Pythonie wcięcia <strong>są</strong> składnią, a nie stylistyką. Spacje pod <code>if</code> lub <code>for</code> to właśnie to, co mówi Pythonowi "to należy do środka." Mniej więcej połowa wszystkich błędów początkujących w tym module to brakujący dwukropek lub złe wcięcie — przeznacz na to czas jawnie.'}
      ]},
      {t:'🔁 Warunki: if / elif / else', cards:[
        {type:'text', h:'Czego uczyć', b:'<code>if</code> uruchamia blok tylko wtedy, gdy jego warunek jest <code>True</code>. <code>elif</code> ("else if") jest sprawdzany <em>tylko</em> wtedy, gdy każdy warunek nad nim był False. <code>else</code> to opcja awaryjna, gdy nic nie pasowało. Python sprawdza je od góry do dołu i zatrzymuje się przy pierwszym dopasowaniu — kolejność ma znaczenie.'},
        {type:'code', lbl:'rozgałęzianie', code:`score = <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"Your score: "</span>))
<span class="ck">if</span> score <span class="ck">&gt;=</span> <span class="cn">90</span>:
    <span class="cf">print</span>(<span class="cs">"Excellent!"</span>)
<span class="ck">elif</span> score <span class="ck">&gt;=</span> <span class="cn">50</span>:
    <span class="cf">print</span>(<span class="cs">"You passed"</span>)
<span class="ck">else</span>:
    <span class="cf">print</span>(<span class="cs">"Try again"</span>)`},
        {type:'text', h:'Operatory porównania i logiczne', b:'Porównania zwracają True/False: <code>==</code> (równe), <code>!=</code> (nierówne), <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>. Łącz je za pomocą <code>and</code> (oba muszą być prawdziwe) i <code>or</code> (co najmniej jeden prawdziwy): <code>if age &gt;= 6 and age &lt;= 12:</code>.'},
        {type:'tip', txt:'Ulubiona pułapka: złe uporządkowanie gałęzi <code>elif</code>. Jeśli sprawdzisz <code>score &gt;= 50</code> przed <code>score &gt;= 90</code>, 95 pasuje najpierw do "passed" i nigdy nie dociera do "Excellent". Ucz uczniów porządkowania warunków od najbardziej szczegółowego do najmniej.'}
      ]},
      {t:'➰ pętle for i range()', cards:[
        {type:'text', h:'Czego uczyć', b:'Pętla <code>for</code> powtarza znaną liczbę razy. <code>range(n)</code> tworzy liczby <strong>od 0 do, ale nie włącznie z n</strong> — więc <code>range(5)</code> daje 0,1,2,3,4 (pięć liczb, zaczynając od zera). <code>range(1, 6)</code> daje 1–5, a <code>range(0, 10, 2)</code> liczy krokami po 2.'},
        {type:'code', lbl:'for + range', code:`<span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">5</span>):
    <span class="cf">print</span>(<span class="cs">"Step"</span>, i)        <span class="cc"># 0,1,2,3,4</span>

<span class="ck">for</span> n <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">5</span>, <span class="cn">0</span>, <span class="ck">-</span><span class="cn">1</span>):
    <span class="cf">print</span>(<span class="cs">"Countdown:"</span>, n) <span class="cc"># 5,4,3,2,1</span>`},
        {type:'warn', txt:'Pomyłka o jeden jest powszechna: uczniowie oczekują, że <code>range(5)</code> wypisze 1–5. Pokaż to raz, powoli, i wypisz utworzone liczby na tablicy: 0,1,2,3,4. "Zaczyna się od zera, zatrzymuje się <em>przed</em> liczbą."'}
      ]},
      {t:'🔄 pętle while', cards:[
        {type:'text', h:'Czego uczyć', b:'Pętla <code>while</code> powtarza się <em>tak długo, jak</em> jej warunek pozostaje True — używaj jej, gdy nie znasz liczby z góry ("pytaj, aż hasło będzie poprawne"). Coś wewnątrz pętli <strong>musi w końcu sprawić, że warunek stanie się False</strong>, w przeciwnym razie będzie działać w nieskończoność.'},
        {type:'code', lbl:'while + warunek zatrzymania', code:`lives = <span class="cn">3</span>
<span class="ck">while</span> lives <span class="ck">&gt;</span> <span class="cn">0</span>:
    <span class="cf">print</span>(<span class="cs">"Lives:"</span>, lives)
    lives <span class="ck">-=</span> <span class="cn">1</span>      <span class="cc"># to jest to, co kończy pętlę</span>
<span class="cf">print</span>(<span class="cs">"Game over"</span>)`},
        {type:'warn', txt:'Nieskończona pętla to charakterystyczny błąd <code>while</code>. Jeśli zapomnisz <code>lives -= 1</code>, program zawiesza się na zawsze. Ucz uczniów, aby pytali <strong>przed</strong> napisaniem ciała: "która linia tutaj sprawia, że ta pętla w końcu się zatrzyma?"'}
      ]},
      {t:'🪆 Zagnieżdżanie', cards:[
        {type:'text', h:'Czego uczyć', b:'Warunki i pętle mogą znajdować się wewnątrz siebie nawzajem. Pętla z <code>if</code> w środku pozwala działać inaczej w każdym przebiegu; pętla wewnątrz pętli obsługuje siatki i tabele. Każdy poziom zagnieżdżenia to kolejny poziom wcięcia — utrzymywanie schludnych wcięć jest tym, co zachowuje czytelność zagnieżdżonego kodu.'},
        {type:'code', lbl:'pętla z decyzją w środku', code:`<span class="ck">for</span> n <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">1</span>, <span class="cn">6</span>):
    <span class="ck">if</span> n <span class="ck">%</span> <span class="cn">2</span> == <span class="cn">0</span>:
        <span class="cf">print</span>(n, <span class="cs">"is even"</span>)
    <span class="ck">else</span>:
        <span class="cf">print</span>(n, <span class="cs">"is odd"</span>)`}
      ]},
      {t:'🧒 Nieporozumienia, które napotkasz', cards:[
        {type:'twocol', left:{h:'Co początkujący robią źle', items:['<code>=</code> zamiast <code>==</code> w warunku','Zapominanie dwukropka <code>:</code>','Niespójne / brakujące wcięcie','<code>range(5)</code> "powinno" być 1–5','Nieskończone pętle <code>while</code>','Umieszczanie kodu po pętli, ale wciętego do niej']}, right:{h:'Twoje wyprzedzające ruchy', items:['"jedno = zapisuje, dwa == pyta"','Uczyń dwukropek odruchem','Zawsze 4 spacje; pokaż blok wizualnie','Wypisz liczby: 0,1,2,3,4','"Co sprawia, że ta pętla się zatrzymuje?"','"Wcięcie = w środku; wyrównanie = po"']}},
        {type:'tip', txt:'Gdy pętla źle się zachowuje, prześledź ją ręcznie na tablicy: napisz i = 0, potem 1, potem 2 i co wypisuje się za każdym razem. "Rozwinięcie" pętli usuwa magię i jest najlepszym nawykiem debugowania, jaki możesz modelować.'}
      ]},
      {t:'🎯 Jak tego nauczać', cards:[
        {type:'hi', h:'for vs while — daj im jedno zdanie', b:'"Użyj <strong>for</strong>, gdy wiesz, ile razy (zrób to 10 razy). Użyj <strong>while</strong>, gdy powtarzasz, aż coś się stanie (kontynuuj, aż zgadną poprawnie)." Ta jedna zasada rozstrzyga niemal każde pytanie "która pętla?".'},
        {type:'good', txt:'Gra w zgadywanie liczby to idealne ukoronowanie tutaj: pętla <code>while</code>, <code>if/elif/else</code> dla "za wysoko / za nisko / poprawnie" i <code>input()</code> z modułu 1. To wygląda jak prawdziwa gra i ćwiczy wszystko naraz.'}
      ]}
    ],
    quiz:[
      {q:'Instrukcja if ucznia zawsze uruchamia pierwszą gałąź niezależnie od wejścia. Co sprawdzasz najpierw i dlaczego?', opts:['Czy napisał = zamiast == — = przypisuje, == porównuje','Czy Python wymaga ponownej instalacji','Czy ma wystarczająco dużo gałęzi elif','Czy plik został zapisany'], c:0, fb:'Pojedyncze = przypisuje wartość (zawsze prawdziwą tutaj); == to porównanie. "Jedno = zapisuje, dwa == pyta."'},
      {q:'Jaka jest najlepsza jednozdaniowa zasada wyboru między for a while?', opts:['for, gdy znasz liczbę powtórzeń; while, gdy powtarzasz, aż warunek się zmieni','Zawsze preferuj while; for to przeżytek','for jest do liczb, while do tekstu','Są wymienne w każdym przypadku'], c:0, fb:'Znana liczba → for. Powtarzaj-aż-coś-się-stanie → while.'},
      {q:'Program dziecka zawiesza się i nigdy się nie kończy. Czego uczysz je szukać?', opts:['Linii wewnątrz pętli while, która powinna w końcu sprawić, że jej warunek stanie się False','Brakującej instrukcji print','Zbyt wielu komentarzy spowalniających go','Literówki wewnątrz łańcucha znaków'], c:0, fb:'Zawieszony program to zazwyczaj nieskończona pętla while, której zmienna sterująca nigdy się nie zmienia.'},
      {q:'Co tworzy range(5) i jakiemu nieporozumieniu musisz zapobiec?', opts:['0,1,2,3,4 — uczniowie oczekują 1–5, więc "zaczyna się od zera, zatrzymuje przed liczbą"','1,2,3,4,5 — liczy naturalnie','Tylko liczbę 5','Losową liczbę poniżej 5'], c:0, fb:'range(5) jest liczony od zera i zatrzymuje się przed 5. Wypisanie liczb zapobiega błędowi przesunięcia o jeden.'},
      {q:'Dlaczego KOLEJNOŚĆ gałęzi elif ma znaczenie w if score >= 50 ... elif score >= 90?', opts:['Python zatrzymuje się przy pierwszym prawdziwym warunku, więc 95 błędnie pasowałoby najpierw do >= 50','Gałęzie elif uruchamiają się w losowej kolejności','Późniejsze gałęzie nadpisują wcześniejsze','Kolejność nigdy nie ma znaczenia w warunkach'], c:0, fb:'Warunki są sprawdzane od góry do dołu i zatrzymują się przy pierwszym dopasowaniu — porządkuj od najbardziej szczegółowego do najmniej.'},
      {q:'Zagnieżdżony blok "po" pętli przypadkowo uruchamia się w jej środku. Jaka jest podstawowa przyczyna i punkt dydaktyczny?', opts:['Wcięcie: wcięte linie są wewnątrz pętli; wyrównanie ich z powrotem umieszcza je po niej','Dwukropek został źle umieszczony','range() został źle użyty','while powinno być for'], c:0, fb:'Wcięcia definiują bloki w Pythonie. "Wcięcie = w środku; wyrównanie z powrotem = po."'}
    ]
  },
  {
    id:3, emoji:'📦', color:'#2B8EF0',
    title:'Dane: listy, słowniki i random',
    desc:'Przechowywanie wielu wartości: tworzenie list i metody, indeksowanie, słowniki (klucz→wartość) i moduł random.',
    obj:'Przeprowadź uczniów od pojedynczych zmiennych do kolekcji. Powinieneś umieć uczyć indeksowania od zera bez zamieszania, wybierać listę vs słownik na podstawie wzorca dostępu, demonstrować główne metody list i używać random, aby ożywić programy.',
    sections:[
      {t:'🗺️ Gdzie to się mieści w kursie', cards:[
        {type:'text', h:'Od jednej wartości do wielu', b:'Zmienna trzyma jedną rzecz; prawdziwe programy potrzebują kolekcji. Ten moduł wprowadza <strong>listy</strong> (uporządkowane, dostępne po pozycji) i <strong>słowniki</strong> (dostępne po kluczu/nazwie), a także moduł <strong>random</strong> dla losowości. Te struktury są wszędzie w późniejszych modułach o grach — listy przeciwników, tabele wyników, ekwipunki, mapy kafelków — więc solidne opanowanie tego opłaca się wielokrotnie.'},
        {type:'tip', txt:'Nagłówkowa decyzja, której uczysz: "czy znajduję to po jego <em>pozycji</em>, czy po jego <em>nazwie</em>?" Pozycja → lista. Nazwa → słownik. Ustaw każdy przykład wokół tego pytania.'}
      ]},
      {t:'📋 Listy i indeksowanie', cards:[
        {type:'text', h:'Czego uczyć', b:'Lista trzyma wiele wartości w kolejności, zapisanych w nawiasach kwadratowych. Odczytujesz element po jego <strong>indeksie</strong>, a indeksy zaczynają się od <strong>0</strong> — pierwszy element to <code>pets[0]</code>, drugi to <code>pets[1]</code>. <code>len(pets)</code> podaje liczbę, więc ostatni element to <code>pets[len(pets)-1]</code>.'},
        {type:'code', lbl:'listy i indeksowanie', code:`pets = [<span class="cs">"cat"</span>, <span class="cs">"dog"</span>, <span class="cs">"fish"</span>]
<span class="cf">print</span>(pets[<span class="cn">0</span>])      <span class="cc"># cat (PIERWSZY element)</span>
<span class="cf">print</span>(pets[<span class="cn">2</span>])      <span class="cc"># fish</span>
<span class="cf">print</span>(<span class="cf">len</span>(pets))   <span class="cc"># 3</span>

<span class="ck">for</span> pet <span class="ck">in</span> pets:    <span class="cc"># pętla po każdym elemencie</span>
    <span class="cf">print</span>(pet)`},
        {type:'warn', txt:'Indeksowanie od zera to prawdziwa przeszkoda pojęciowa. Mów "<strong>pierwszy element to element zerowy</strong>" wielokrotnie i pokaż, że <code>pets[3]</code> na 3-elementowej liście zgłasza <code>IndexError: list index out of range</code> — ponieważ prawidłowe indeksy to 0, 1, 2.'}
      ]},
      {t:'🛠️ Metody list', cards:[
        {type:'text', h:'Czego uczyć', b:'Listy mogą się zmieniać. Główne metody: <code>append(x)</code> dodaje na koniec, <code>insert(i, x)</code> dodaje na pozycji, <code>remove(x)</code> usuwa pierwszą pasującą wartość, <code>pop(i)</code> usuwa i zwraca element o indeksie i, a <code>clear()</code> opróżnia listę.'},
        {type:'code', lbl:'modyfikowanie listy', code:`pets = [<span class="cs">"cat"</span>, <span class="cs">"dog"</span>]
pets.<span class="cf">append</span>(<span class="cs">"fish"</span>)    <span class="cc"># ["cat","dog","fish"]</span>
pets.<span class="cf">insert</span>(<span class="cn">0</span>, <span class="cs">"bird"</span>) <span class="cc"># ["bird","cat","dog","fish"]</span>
pets.<span class="cf">remove</span>(<span class="cs">"dog"</span>)     <span class="cc"># ["bird","cat","fish"]</span>
last = pets.<span class="cf">pop</span>()        <span class="cc"># usuwa i zwraca "fish"</span>`},
        {type:'twocol', left:{h:'append vs insert vs remove', items:['<code>append</code>: dodaj na koniec','<code>insert(i,x)</code>: dodaj na indeksie i','<code>remove(x)</code>: usuń po wartości','<code>pop(i)</code>: usuń po indeksie, zwraca go']}, right:{h:'Częste pomyłki', items:['<code>remove</code> przyjmuje wartość, nie indeks','<code>pop</code> przyjmuje indeks, nie wartość','<code>remove</code> usuwa tylko PIERWSZE dopasowanie','<code>append</code> przyjmuje dokładnie jeden argument']}}
      ]},
      {t:'🗂️ Słowniki', cards:[
        {type:'text', h:'Czego uczyć', b:'Słownik przechowuje pary <strong>klucz → wartość</strong> w nawiasach klamrowych. Zamiast pozycji liczbowej szukasz rzeczy po znaczącym kluczu: <code>scores["Ann"]</code> oznacza "daj mi wartość przechowywaną pod Ann." Możesz dodawać lub aktualizować za pomocą <code>scores["Leo"] = 12</code>.'},
        {type:'code', lbl:'słowniki', code:`scores = {<span class="cs">"Ann"</span>: <span class="cn">15</span>, <span class="cs">"Leo"</span>: <span class="cn">9</span>}
<span class="cf">print</span>(scores[<span class="cs">"Ann"</span>])   <span class="cc"># 15 — wyszukaj po kluczu</span>
scores[<span class="cs">"Mia"</span>] = <span class="cn">20</span>      <span class="cc"># dodaj nową parę</span>
scores[<span class="cs">"Leo"</span>] = <span class="cn">11</span>      <span class="cc"># zaktualizuj istniejącą</span>`},
        {type:'warn', txt:'Uczniowie mylą klucz z wartością, a kierunek ma znaczenie: <code>scores["Ann"]</code> pyta "jaki jest wynik Ann?", nie pyta "czy Ann to 15?". Ponadto wyszukiwanie klucza, który nie istnieje, zgłasza <code>KeyError</code> — użyteczny, dydaktyczny błąd.'}
      ]},
      {t:'🎲 Moduł random', cards:[
        {type:'text', h:'Czego uczyć', b:'Zaimportowanie <code>random</code> odblokowuje losowość. <code>random.randint(1, 6)</code> daje liczbę całkowitą od 1 do 6 (oba końce włącznie), a <code>random.choice(my_list)</code> wybiera losowy element z listy. To jest iskra stojąca za kostkami, quizami i zachowaniem przeciwników później.'},
        {type:'code', lbl:'random', code:`<span class="ck">import</span> random

dice = random.<span class="cf">randint</span>(<span class="cn">1</span>, <span class="cn">6</span>)
<span class="cf">print</span>(<span class="cs">"You rolled"</span>, dice)

pets = [<span class="cs">"cat"</span>, <span class="cs">"dog"</span>, <span class="cs">"fish"</span>]
<span class="cf">print</span>(random.<span class="cf">choice</span>(pets))`},
        {type:'warn', txt:'Zapomnienie <code>import random</code> daje <code>NameError: name ‘random’ is not defined</code>. Importy idą raz, na samej górze pliku. Zauważ, że <code>randint</code> obejmuje oba końce — w przeciwieństwie do <code>range</code>, które wyklucza górny.'}
      ]},
      {t:'🎯 Jak tego nauczać', cards:[
        {type:'hi', h:'Dwie metafory, które trafiają', b:'Lista to "<strong>numerowana półka</strong> — miejsce 0, miejsce 1, miejsce 2." Słownik to "<strong>aplikacja kontaktów</strong> — wyszukujesz imię i dostajesz numer." Te mapują się dokładnie na indeks-vs-klucz i natychmiast rozstrzygają większość pytań "który z nich?".'},
        {type:'good', txt:'Gra w zgadywanie liczby dostaje tutaj idealne ulepszenie: <code>random.randint</code> wybiera tajną liczbę, lista przechowuje poprzednie zgadywania. Połączenie random + listy + pętle z modułu 2 pokazuje uczniom, jak pojęcia składają się w coś naprawdę zabawnego.'}
      ]}
    ],
    quiz:[
      {q:'Uczeń pisze pets[1], oczekując pierwszego zwierzaka, ale dostaje drugiego. Czego uczysz i jaki błąd dowodzi tego punktu?', opts:['Indeksowanie zaczyna się od 0, więc pets[0] jest pierwszy; pets[3] na 3-elementowej liście zgłasza IndexError','Listy są zawodne i należy ich unikać','Muszą przekonwertować listę na słownik','Dodawać 1 do każdego indeksu od teraz'], c:0, fb:'Indeksowanie od zera: pierwszy element to indeks 0, prawidłowe indeksy to 0..len-1, a wyjście poza zgłasza IndexError.'},
      {q:'Kiedy uczeń powinien sięgnąć po słownik zamiast listy?', opts:['Gdy uzyskuje dostęp do wartości po znaczącej nazwie/kluczu, a nie po pozycji','Ilekroć kolejność elementów ma największe znaczenie','Ilekroć jest więcej niż dziesięć elementów','Słowniki są zawsze lepszym wyborem'], c:0, fb:'Listy są dostępne po pozycji; słowniki mapują klucze na wartości — idealne do wyszukiwania imię→wynik.'},
      {q:'Jaka jest różnica między list.remove() a list.pop()?', opts:['remove(value) usuwa po wartości; pop(index) usuwa po pozycji i zwraca element','Są identyczne','remove przyjmuje indeks; pop przyjmuje wartość','pop opróżnia całą listę'], c:0, fb:'remove działa po wartości (pierwsze dopasowanie); pop działa po indeksie i zwraca usunięty element.'},
      {q:'Gra używająca random.randint zgłasza błąd "random is not defined". Jaka jest poprawka i zasada?', opts:['Dodać import random na górze — importy dzieją się raz, przed użyciem','Zmienić nazwę zmiennej dice','Użyć listy zamiast random','Ponownie zainstalować Pythona'], c:0, fb:'Moduł random musi zostać zaimportowany (raz, na górze) przed użyciem którejkolwiek z jego funkcji.'},
      {q:'Która jest najskuteczniejszą konkretną metaforą słownika przy nauczaniu dzieci?', opts:['Aplikacja kontaktów: wyszukaj imię, dostań numer','Numerowana półka z miejscami 0,1,2','Minutnik odliczający','Pojedyncze opisane pudełko'], c:0, fb:'Model aplikacji kontaktów oddaje wyszukiwanie klucz→wartość; model numerowanej półki jest dla list.'},
      {q:'Czym różni się random.randint(1, 6) od range(1, 6) i dlaczego o tym wspomnieć?', opts:['randint OBEJMUJE 6; range zatrzymuje się PRZED 6 — uczniowie mylą te dwie granice','Są identyczne','randint wyklucza oba końce','range obejmuje oba końce'], c:0, fb:'randint(1,6) może zwrócić 6; range(1,6) daje 1–5. Podkreślenie różnicy w granicach zapobiega błędom.'}
    ]
  },
  {
    id:4, emoji:'⚙️', color:'#7C5CFC',
    title:'Funkcje',
    desc:'def, parametry i argumenty, return vs print oraz dlaczego funkcje utrzymują duże programy w ryzach.',
    obj:'Naucz uczniów pakowania kodu w funkcje wielokrotnego użytku. Powinieneś umieć uczynić rozróżnienia definiowanie-vs-wywołanie oraz print-vs-return krystalicznie jasnymi, wyjaśnić parametry za pomocą metafory i umotywować funkcje, pozwalając uczniom najpierw poczuć ból powielania.',
    sections:[
      {t:'🗺️ Gdzie to się mieści w kursie', cards:[
        {type:'text', h:'Pierwszy smak struktury', b:'Jak dotąd programy są płaskimi listami instrukcji. Funkcje pozwalają uczniom <strong>nazwać kawałek pracy i wykorzystać go ponownie</strong>. To jest most do wszystkiego, co następuje: rysunki Turtle wywołują funkcje, a PyGame Zero jest w całości zbudowany na funkcjach, które piszesz (<code>draw</code>, <code>update</code>, <code>on_key_down</code>). Uczeń, który jest chwiejny w funkcjach, będzie miał trudności w momencie, gdy zaczną się gry — więc ten moduł jest prawdziwym strażnikiem.'},
        {type:'tip', txt:'Dwie idee, które potrzebują naprawdę dużo czasu antenowego: <strong>definiowanie vs wywołanie</strong> (napisanie funkcji vs jej uruchomienie) oraz <strong>print vs return</strong> (pokazanie wartości vs oddanie jej). Niemal każdy błąd funkcji, na który natrafia początkujący, to jeden z tych dwóch.'}
      ]},
      {t:'✏️ def — definiowanie i wywoływanie', cards:[
        {type:'text', h:'Czego uczyć', b:'<code>def name():</code> <em>definiuje</em> funkcję — zapisuje przepis, ale niczego jeszcze nie uruchamia. Kod uruchamia się dopiero, gdy go <strong>wywołasz</strong>, wpisując jego nazwę z nawiasami: <code>greet()</code>. Możesz zdefiniować raz i wywołać tyle razy, ile chcesz.'},
        {type:'code', lbl:'zdefiniuj raz, wywołaj wiele razy', code:`<span class="ck">def</span> <span class="cf">greet</span>():
    <span class="cf">print</span>(<span class="cs">"Hello!"</span>)
    <span class="cf">print</span>(<span class="cs">"Welcome to the lesson."</span>)

<span class="cf">greet</span>()   <span class="cc"># teraz się uruchamia</span>
<span class="cf">greet</span>()   <span class="cc"># i jeszcze raz</span>`},
        {type:'warn', txt:'Klasyczny błąd "nic się nie stało": uczeń definiuje funkcję, ale nigdy jej nie wywołuje. Ucz zwrotu "<strong>definiowanie = zapisanie przepisu; wywołanie = gotowanie</strong>." Przepis w książce nie ugotuje obiadu, dopóki ktoś go nie wykona.'}
      ]},
      {t:'📥 Parametry i argumenty', cards:[
        {type:'text', h:'Czego uczyć', b:'Parametry pozwalają funkcji przyjmować dane wejściowe, aby zachowywała się inaczej przy każdym wywołaniu. Nazwa w definicji (<code>name</code>) to <strong>parametr</strong>; rzeczywista wartość, którą przekazujesz (<code>"Mia"</code>), to <strong>argument</strong>. Są dopasowywane od lewej do prawej, więc liczba musi się zgadzać.'},
        {type:'code', lbl:'przekazywanie informacji do środka', code:`<span class="ck">def</span> <span class="cf">greet</span>(name):
    <span class="cf">print</span>(<span class="cs">"Hello,"</span>, name)

<span class="cf">greet</span>(<span class="cs">"Mia"</span>)    <span class="cc"># Hello, Mia</span>
<span class="cf">greet</span>(<span class="cs">"Sam"</span>)    <span class="cc"># Hello, Sam</span>

<span class="ck">def</span> <span class="cf">add</span>(a, b):
    <span class="cf">print</span>(a <span class="ck">+</span> b)
<span class="cf">add</span>(<span class="cn">3</span>, <span class="cn">4</span>)        <span class="cc"># 7</span>`},
        {type:'warn', txt:'Przekazanie złej liczby argumentów zgłasza <code>TypeError: greet() missing 1 required positional argument</code>. Przeczytajcie to razem — błąd dosłownie nazywa to, czego brakuje, co jest świetnym ćwiczeniem w czytaniu błędów.'}
      ]},
      {t:'↩️ return vs print — ta najważniejsza', cards:[
        {type:'text', h:'Czego uczyć', b:'<code>print</code> <strong>pokazuje</strong> wartość na ekranie dla człowieka. <code>return</code> <strong>oddaje wartość z powrotem</strong> do programu, aby reszta kodu mogła jej użyć. Funkcja, która wypisuje, ale nie zwraca, oddaje <code>None</code> — więc nie możesz robić matematyki z jej wynikiem.'},
        {type:'code', lbl:'różnica uwidoczniona', code:`<span class="ck">def</span> <span class="cf">square_print</span>(n):
    <span class="cf">print</span>(n <span class="ck">*</span> n)        <span class="cc"># tylko wyświetla</span>

<span class="ck">def</span> <span class="cf">square_return</span>(n):
    <span class="ck">return</span> n <span class="ck">*</span> n       <span class="cc"># oddaje wartość z powrotem</span>

x = <span class="cf">square_print</span>(<span class="cn">5</span>)   <span class="cc"># wypisuje 25, ale x to None</span>
y = <span class="cf">square_return</span>(<span class="cn">5</span>)  <span class="cc"># y to 25, użyteczne w matematyce</span>
<span class="cf">print</span>(y <span class="ck">+</span> <span class="cn">1</span>)         <span class="cc"># 26</span>`},
        {type:'hi', h:'Dlaczego uczniowie muszą to poczuć', b:'Pokaż, że <code>x = square_print(5)</code> pozostawia <code>x</code> jako <code>None</code>, a potem <code>x + 1</code> się wysypuje. Awaria jest lekcją: "print rozmawia z osobą; return rozmawia z programem." Dopóki uczeń nie poczuje tej różnicy, funkcje pozostają mgliste.'}
      ]},
      {t:'🍳 Metafora i motywacja', cards:[
        {type:'hi', h:'Metafora przepisu', b:'Funkcja to <strong>przepis</strong>. <code>def</code> zapisuje przepis; <strong>argumenty to składniki</strong>, które podajesz; <strong>wywołanie to gotowanie</strong>; a <code>return</code> to gotowe danie oddane z powrotem. Print natomiast to tylko wykrzyczenie wyniku przez kuchnię — nikt nie może go potem użyć.'},
        {type:'good', txt:'Umotywuj funkcje, najpierw zadając powielanie: niech uczeń napisze to samo 4-liniowe powitanie trzy razy, a potem przekształci je w jedno <code>greet(name)</code>. Poczucie znużenia jest tym, co sprawia, że "nie powtarzaj się" zaskakuje — nie podawaj im zasady, pozwól im na nią zapracować.'},
        {type:'code', lbl:'przed / po refaktoryzacji', code:`<span class="cc"># przed: powtórzone 3 razy</span>
<span class="cf">print</span>(<span class="cs">"Hi Mia, ready to code?"</span>)
<span class="cf">print</span>(<span class="cs">"Hi Sam, ready to code?"</span>)

<span class="cc"># po: jedna funkcja wielokrotnego użytku</span>
<span class="ck">def</span> <span class="cf">welcome</span>(name):
    <span class="cf">print</span>(<span class="cs">"Hi"</span>, name <span class="ck">+</span> <span class="cs">", ready to code?"</span>)
<span class="cf">welcome</span>(<span class="cs">"Mia"</span>)
<span class="cf">welcome</span>(<span class="cs">"Sam"</span>)`}
      ]},
      {t:'🧒 Nieporozumienia, które napotkasz', cards:[
        {type:'twocol', left:{h:'Co początkujący robią źle', items:['Definiowanie funkcji, ale nigdy jej niewywoływanie','Mylenie <code>print</code> z <code>return</code>','Zła liczba argumentów','Oczekiwanie wartości od funkcji tylko wypisującej','Niespójne wcinanie ciała']}, right:{h:'Twoje wyprzedzające ruchy', items:['"Definiowanie = przepis; wywołanie = gotowanie"','Pokaż oba obok siebie; awaria na None','Przeczytajcie TypeError razem','"print rozmawia z ludźmi, return z kodem"','Traktuj ciało jak każdy wcięty blok']}}
      ]}
    ],
    quiz:[
      {q:'Uczeń definiuje funkcję, ale "nic się nie dzieje", gdy uruchamia plik. Jaka jest przyczyna i zwrot, którego uczysz?', opts:['Nigdy jej nie wywołał — "definiowanie = zapisanie przepisu; wywołanie = gotowanie"','Python musi zostać zrestartowany','Funkcje muszą zawsze zwracać wartość','def zostało błędnie zapisane'], c:0, fb:'Definiowanie tylko zapisuje przepis; funkcja musi zostać wywołana, aby faktycznie się uruchomić.'},
      {q:'Jaki jest najjaśniejszy sposób odróżnienia print od return?', opts:['print pokazuje wartość osobie; return oddaje wartość z powrotem do programu','Robią to samo','return to po prostu szybszy print','print działa tylko poza funkcjami'], c:0, fb:'return daje użyteczną wartość wywołującemu; print jedynie wyświetla tekst na ekranie.'},
      {q:'W def square(number): return number*number, czym dokładnie jest "number"?', opts:['Parametr — wejście, które funkcja otrzymuje przy wywołaniu','Wbudowane słowo kluczowe Pythona','Wartość, którą funkcja zwraca','Zmienna globalna zdefiniowana gdzie indziej'], c:0, fb:'number to parametr; argument to rzeczywista przekazana wartość, np. square(5).'},
      {q:'x = greet("Mia"), gdzie greet tylko wypisuje — jaka jest wartość x i dlaczego warto to pokazać?', opts:['None — funkcja tylko wypisująca nie zwraca nic, więc x+1 by się wysypało i dowiodło, że print ≠ return','"Mia"','Tekst, który został wypisany','Zgłasza błąd natychmiast'], c:0, fb:'Funkcja bez return oddaje None. Następująca awaria to najbardziej zapadający w pamięć sposób nauczania print vs return.'},
      {q:'Jaki jest najskuteczniejszy sposób umotywowania, DLACZEGO funkcje są użyteczne?', opts:['Sprawić, aby uczniowie powtórzyli ten sam kod kilka razy, a potem przekształcili go w jedną funkcję','Zacząć od formalnej definicji funkcji','Unikać przykładów i wyjaśnić teorię','Używać wyłącznie wbudowanych funkcji Pythona'], c:0, fb:'Pozwolenie uczniom poczuć ból powielania sprawia, że wartość funkcji wielokrotnego użytku zaskakuje sama.'},
      {q:'Wywołanie zgłasza "TypeError: greet() missing 1 required positional argument". Co to oznacza i jak używasz tego dydaktycznie?', opts:['Liczba argumentów nie pasuje do parametrów — przeczytajcie błąd razem jako ćwiczenie w debugowaniu','greet nie jest prawdziwą funkcją','Pythonowi zabrakło pamięci','Wartość zwracana została zignorowana'], c:0, fb:'Argumenty muszą pasować do parametrów; błąd nazywa dokładnie to, czego brakuje, co czyni go idealnym do ćwiczenia w czytaniu błędów.'}
    ]
  },
  {
    id:5, emoji:'🐢', color:'#F59E0B',
    title:'Rysowanie i wprowadzenie do PyGame Zero',
    desc:'Moduł Turtle, a potem skok w grafikę: Aktorzy, okno, draw() i update() oraz pętla gry.',
    obj:'Poprowadź skok od programów tekstowych do wizualnych. Powinieneś umieć wyjaśnić pętlę gry (model flipbooka), dlaczego framework wywołuje twoje funkcje, różnicę między draw() a update() oraz pułapki związane z zasobami/nazewnictwem, które po cichu psują sprite\'y.',
    sections:[
      {t:'🗺️ Gdzie to się mieści w kursie', cards:[
        {type:'text', h:'Skok motywacji', b:'To jest moduł, w którym programowanie staje się <em>wizualne</em>, i dla wielu dzieci jest to moment, w którym się w nim zakochują. Uczniowie rysują za pomocą <strong>Turtle</strong> (satysfakcjonująca nagroda za funkcje i pętle), a potem poznają <strong>PyGame Zero</strong> — framework gry stojący za "Coddy\'s Adventures". Wszystko w pozostałych modułach o grach opiera się bezpośrednio na pojęciach wprowadzonych tutaj.'},
        {type:'warn', txt:'Jest tu prawdziwy skok pojęciowy: od programu, który uruchamia się od góry do dołu <em>raz</em>, do <strong>pętli gry</strong>, która przerysowuje wiele razy na sekundę. Nazwij tę zmianę na głos — uczniowie, którzy jej nie zauważą, uznają gry za zdumiewające.'}
      ]},
      {t:'🐢 Turtle — rysowanie kodem', cards:[
        {type:'text', h:'Czego uczyć', b:'Turtle porusza "piórem" po ekranie: <code>forward(100)</code>, <code>right(90)</code>, <code>left(45)</code>. Magia polega na tym, że narysowanie kształtu to po prostu pętla, a owinięcie tej pętli w funkcję tworzy narzędzie wielokrotnego użytku. To najjaśniejsza możliwa demonstracja, dlaczego dwa poprzednie moduły miały znaczenie.'},
        {type:'code', lbl:'funkcja, która rysuje (pętle + funkcje!)', code:`<span class="ck">import</span> turtle

<span class="ck">def</span> <span class="cf">draw_square</span>(side):
    <span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">4</span>):
        turtle.<span class="cf">forward</span>(side)
        turtle.<span class="cf">right</span>(<span class="cn">90</span>)

<span class="cf">draw_square</span>(<span class="cn">100</span>)
<span class="cf">draw_square</span>(<span class="cn">50</span>)   <span class="cc"># wykorzystaj ponownie z innym rozmiarem</span>`},
        {type:'good', txt:'Turtle to idealne "aha": kwadrat to po prostu "naprzód, obrót, cztery razy." Pozwól uczniom zmienić kąt na 120 i liczbę na 3, aby uzyskać trójkąt — samodzielne odkrycie związku między kątem obrotu a kształtem jest znacznie silniejsze niż powiedzenie im tego.'}
      ]},
      {t:'🎮 PyGame Zero — konfiguracja', cards:[
        {type:'text', h:'Czego uczyć', b:'Program PyGame Zero zaczyna się od <code>#pgzero</code> (lub jest uruchamiany za pomocą <code>pgzrun</code>). Ustawiasz okno za pomocą <code>WIDTH</code> i <code>HEIGHT</code>, a potem tworzysz sprite\'y jako <strong>Aktorów</strong>. <code>Actor("coddy")</code> automatycznie ładuje <code>images/coddy.png</code> — nazwa to nazwa pliku, małymi literami, bez rozszerzenia. Ustaw jego pozycję za pomocą <code>.pos</code>, <code>.x</code>, <code>.y</code>.'},
        {type:'code', lbl:'okno + aktor', code:`<span class="cc">#pgzero</span>
WIDTH = <span class="cn">600</span>
HEIGHT = <span class="cn">400</span>

coddy = <span class="cf">Actor</span>(<span class="cs">"coddy"</span>)   <span class="cc"># ładuje images/coddy.png</span>
coddy.pos = <span class="cn">300</span>, <span class="cn">200</span>      <span class="cc"># środek okna</span>`},
        {type:'warn', txt:'Cichy zabójca: nazwa pliku obrazu musi dokładnie pasować do nazwy Aktora — małymi literami, poprawna pisownia, bez <code>.png</code> w kodzie, a plik musi znajdować się w folderze <code>images</code>. Niedopasowanie zawodzi bez oczywistej wskazówki, więc jest to pierwsza rzecz do sprawdzenia, gdy "sprite się nie pojawia."'}
      ]},
      {t:'🔁 draw(), update() i pętla gry', cards:[
        {type:'text', h:'Czego uczyć', b:'Piszesz dwie specjalne funkcje, a PyGame Zero <strong>wywołuje je za ciebie, automatycznie, ~60 razy na sekundę</strong>. <code>draw()</code> maluje bieżącą klatkę; <code>update()</code> zmienia rzeczy na następną klatkę (pozycje, wyniki, logikę). Uczeń nigdy nie wywołuje ich sam — to jest nowa i zaskakująca część.'},
        {type:'code', lbl:'pętla w działaniu', code:`<span class="ck">def</span> <span class="cf">draw</span>():
    screen.<span class="cf">clear</span>()    <span class="cc"># wymaż poprzednią klatkę</span>
    coddy.<span class="cf">draw</span>()      <span class="cc"># namaluj sprite'a</span>

<span class="ck">def</span> <span class="cf">update</span>():
    coddy.x <span class="ck">+=</span> <span class="cn">1</span>     <span class="cc"># mała zmiana co klatkę = ruch</span>`},
        {type:'hi', h:'Model flipbooka', b:'Gra to flipbook. <code>update()</code> decyduje, co zmienia się na następnej stronie; <code>draw()</code> maluje tę stronę; PyGame Zero przewraca strony 60×/sekundę. Dlatego ruch potrzebuje <em>małej</em> zmiany co klatkę (<code>x += 1</code>) — nie jednego wielkiego skoku. Wyjaśnia to również, dlaczego musisz robić <code>screen.clear()</code>: bez wymazania strony każda klatka rozmazuje się na poprzedniej.'}
      ]},
      {t:'🧒 Nieporozumienia, które napotkasz', cards:[
        {type:'twocol', left:{h:'Co początkujący robią źle', items:['Samodzielne wywoływanie draw()/update()','Nazwa obrazu nie pasuje do pliku','Zapominanie <code>screen.clear()</code> → rozmazania','Umieszczanie logiki gry poza update()','Jeden wielki skok zamiast małych kroków','Mylenie draw (pokaż) z update (zmień)']}, right:{h:'Twoje wyprzedzające ruchy', items:['"Framework je wywołuje, nie ty"','Nazwy: małe litery, bez rozszerzenia, images/','Wyczyść stronę co klatkę','Powtarzająca się logika żyje w update()','"Malutka zmiana co klatkę = płynny ruch"','"draw = maluj, update = myśl"']}},
        {type:'warn', txt:'"Framework wywołuje twoje funkcje" to zupełnie nowa idea (odwrócenie sterowania). Nie spiesz się z nią. Skontrastuj ją jawnie ze wszystkim wcześniejszym: "do tej pory twój kod uruchamiał twoje linie. Teraz piszesz funkcje, a silnik gry uruchamia je za ciebie."'}
      ]},
      {t:'🎯 Jak tego nauczać', cards:[
        {type:'good', txt:'Świętuj głośno pierwszego poruszającego się sprite\'a — to prawdziwy kamień milowy i emocjonalny punkt kulminacyjny całego kursu. Potem od razu pozwól im poprawić prędkość (<code>x += 5</code>) i kierunek. Eksperymentowanie, a nie wyjaśnianie, jest tym, co cementuje pętlę gry.'},
        {type:'tip', txt:'Jeśli uczeń jest przytłoczony, ogranicz to do najmniejszego działającego programu: okno, jeden Aktor, pusty <code>update()</code>. Dodawaj jedną linię naraz. Gry wydają się ogromne; budowanie ich linia po linii zmieniająca klatkę utrzymuje je w zasięgu nauki.'}
      ]}
    ],
    quiz:[
      {q:'W PyGame Zero, kto wywołuje draw() i update() i dlaczego ma to znaczenie dydaktyczne?', opts:['Framework wywołuje je ~60×/s automatycznie — nowa idea "odwrócenia sterowania" do nauczania powoli','Uczeń wywołuje je ręcznie co klatkę','System operacyjny wywołuje je raz przy starcie','Uruchamiają się tylko, gdy umieszczone w pętli while'], c:0, fb:'PyGame Zero uruchamia twoje draw()/update() za ciebie co klatkę — uczniowie NIE mogą ich wywoływać, i to jest naprawdę nowe.'},
      {q:'Jaki jest najjaśniejszy sposób wyjaśnienia draw() vs update() dziecku?', opts:['update() decyduje, co zmienia się na następną klatkę; draw() maluje klatkę ("myśl vs maluj")','Są identyczne','draw() uruchamia się raz, update() nigdy się nie uruchamia','update() obsługuje tylko dźwięk'], c:0, fb:'"update = myśl/zmień, draw = maluj" mapuje się bezpośrednio na pętlę gry.'},
      {q:'Sprite się nie pojawia i nie ma oczywistego błędu. Co sprawdzasz najpierw?', opts:['Nazwa pliku obrazu dokładnie pasuje do nazwy Aktora (małe litery, bez rozszerzenia, w images/)','Ilość dostępnej pamięci RAM','Czy Python jest 32- czy 64-bitowy','Jasność monitora'], c:0, fb:'Actor("coddy") potrzebuje images/coddy.png z dokładnym dopasowaniem nazwy — najczęstsza cicha awaria.'},
      {q:'Dlaczego coddy.x += 1 wewnątrz update() tworzy płynny ruch, a nie teleportację?', opts:['update() uruchamia się co klatkę, więc mała zmiana kumuluje się ~60×/s w płynny ruch','Teleportuje raz i się zatrzymuje','Działa tylko wewnątrz pętli while','Zmienia rozmiar okna'], c:0, fb:'Ruch to malutka zmiana stosowana co klatkę przez pętlę gry — model flipbooka.'},
      {q:'Sprite ucznia zostawia rozmazany ślad po ekranie. Czego brakuje i dlaczego?', opts:['screen.clear() na początku draw() — bez wymazania każda klatka maluje na poprzedniej','Instrukcji import','Drugiego Aktora','Szybszego komputera'], c:0, fb:'Każda klatka musi wyczyścić poprzednią; w przeciwnym razie stare pozycje pozostają namalowane, tworząc rozmazanie.'},
      {q:'Dlaczego narysowanie kwadratu za pomocą Turtle to mocna lekcja tuż przed grami?', opts:['Wykorzystuje ponownie funkcje + pętle razem, dowodząc, że wcześniejsze moduły się opłacają, i łagodzi przejście do "kod tworzy obrazy"','Uczy słowników','Wprowadza obsługę plików','Demonstruje rekurencję'], c:0, fb:'draw_square to funkcja owijająca pętlę — satysfakcjonująca nagroda i łagodny wjazd do grafiki.'}
    ]
  },
  {
    id:6, emoji:'🎮', color:'#10B981',
    title:'Tworzenie gier z PyGame Zero',
    desc:'Wejście z klawiatury i myszy, animacja sprite\'ów, wykrywanie kolizji i punktacja gry.',
    obj:'Naucz interaktywnego rdzenia tworzenia gier: reagowania na klawiaturę i mysz, animowania sprite\'ów i wykrywania kolizji. Powinieneś umieć wyjaśnić global czysto, odróżnić collidepoint od colliderect i modelować szybkie iterowanie jako nawyk nauczycielski.',
    sections:[
      {t:'🗺️ Gdzie to się mieści w kursie', cards:[
        {type:'text', h:'Gry, które reagują na gracza', b:'Moduł 5 umieścił sprite\'a na ekranie i poruszał nim samodzielnie. Teraz gra <strong>reaguje na gracza</strong>: ruch klawiaturą, kliknięcia myszy, animacja i — ta najważniejsza — kolizje, które napędzają punktację, obrażenia i podnoszenie przedmiotów. Projekty tutaj obejmują Coddy\'s Adventures, grę w stylu Minecrafta, strzelankę kosmiczną i "Clicker Heroes."'},
        {type:'tip', txt:'Wykrywanie kolizji to pojęcie, które zamienia "poruszający się obraz" w "grę." Przeznacz na nie dodatkowy czas — jest pojęciowo bogatsze, niż wygląda, i odblokowuje punktację, walkę i zbieranie naraz.'}
      ]},
      {t:'⌨️ Wejście z klawiatury', cards:[
        {type:'text', h:'Dwa style do nauczania', b:'<strong>Ciągły</strong>: wewnątrz <code>update()</code> sprawdzaj <code>keyboard.right</code>, <code>keyboard.left</code> itd. — prawdziwe, gdy klawisz jest przytrzymany, idealne do płynnego ruchu. <strong>Jednorazowy</strong>: framework wywołuje <code>on_key_down(key)</code> raz na naciśnięcie, idealne do skakania lub strzelania. Podmiana obrazu sprite\'a podczas ruchu daje graczowi informację zwrotną o kierunku.'},
        {type:'code', lbl:'ruch ciągły', code:`<span class="ck">def</span> <span class="cf">update</span>():
    <span class="ck">if</span> keyboard.right:
        coddy.x <span class="ck">+=</span> <span class="cn">5</span>
        coddy.image = <span class="cs">"coddy_right"</span>
    <span class="ck">elif</span> keyboard.left:
        coddy.x <span class="ck">-=</span> <span class="cn">5</span>
        coddy.image = <span class="cs">"coddy_left"</span>`},
        {type:'tip', txt:'Użyj sprawdzania przytrzymanego klawisza w <code>update()</code> do ruchu i zdarzenia <code>on_key_down</code> do akcji. Pomylenie ich — np. próba płynnego ruchu w <code>on_key_down</code> — daje szarpany ruch, jeden krok na naciśnięcie. Dopasuj narzędzie do odczucia, którego chcesz.'}
      ]},
      {t:'🖱️ Wejście z myszy', cards:[
        {type:'text', h:'Czego uczyć', b:'Framework wywołuje <code>on_mouse_down(pos)</code>, gdy gracz kliknie, podając ci miejsce kliknięcia jako <code>pos</code>. Zwykłe pytanie to "czy kliknęli na ten obiekt?" — odpowiadane za pomocą <code>actor.collidepoint(pos)</code>. To napędza gry klikery i mechaniki "zestrzel przeciwnika".'},
        {type:'code', lbl:'kliknij, aby zdobyć punkty', code:`score = <span class="cn">0</span>

<span class="ck">def</span> <span class="cf">on_mouse_down</span>(pos):
    <span class="ck">global</span> score
    <span class="ck">if</span> enemy.<span class="cf">collidepoint</span>(pos):
        score <span class="ck">+=</span> <span class="cn">1</span>
        <span class="cf">animate</span>(enemy, tween=<span class="cs">"bounce_end"</span>, duration=<span class="cn">0.3</span>)`}
      ]},
      {t:'🌍 Słowo kluczowe global', cards:[
        {type:'text', h:'Czego uczyć', b:'Funkcja może <em>odczytać</em> zmienną zdefiniowaną poza nią, ale aby ją <strong>zmienić</strong>, musi najpierw zadeklarować <code>global score</code>. Bez tego Python tworzy nową zmienną lokalną, a prawdziwy wynik nigdy się nie aktualizuje — myląca awaria bez błędu.'},
        {type:'warn', txt:'Utrzymaj wyjaśnienie odpowiednie do wieku: "funkcja może spojrzeć na zmienne zewnętrzne, ale aby <strong>zmienić</strong> jedną, musi najpierw powiedzieć <code>global</code>." Powstrzymaj się od pełnego wykładu o zasięgu — ta głębia nie jest tutaj potrzebna i przytłacza początkujących. Tylko zasada i działający przykład.'}
      ]},
      {t:'💥 Wykrywanie kolizji', cards:[
        {type:'text', h:'Czego uczyć', b:'Każdy sprite ma wokół siebie niewidzialny prostokąt. <code>a.colliderect(b)</code> pyta "czy te dwa prostokąty się nakładają?" (sprite vs sprite — trafienia, podnoszenie przedmiotów). <code>a.collidepoint(pos)</code> pyta "czy ten punkt jest wewnątrz tego prostokąta?" (kliknięcie lub pojedynczy punkt). To jedno rozróżnienie obejmuje niemal wszystkie interakcje w grach 2D.'},
        {type:'code', lbl:'kolizja sprite-vs-sprite', code:`<span class="ck">def</span> <span class="cf">update</span>():
    <span class="ck">if</span> player.<span class="cf">colliderect</span>(coin):
        <span class="ck">global</span> score
        score <span class="ck">+=</span> <span class="cn">1</span>
        coin.x = random.<span class="cf">randint</span>(<span class="cn">0</span>, WIDTH)  <span class="cc"># odrodzenie</span>`},
        {type:'hi', h:'Model myślowy', b:'"Każdy obiekt żyje wewnątrz niewidzialnego pudełka. Kolizja to po prostu <em>dwa nakładające się pudełka</em>." Gdy uczniowie utrzymają ten obraz, trafienia, zbieranie monet i kliknięcia myszą stają się tym samym prostym pytaniem, tylko zadanym za pomocą <code>colliderect</code> (pudełko vs pudełko) lub <code>collidepoint</code> (punkt w pudełku).'}
      ]},
      {t:'🧒 Nieporozumienia, które napotkasz', cards:[
        {type:'twocol', left:{h:'Co początkujący robią źle', items:['Zmiana score w funkcji bez <code>global</code>','Pomylenie <code>collidepoint</code> vs <code>colliderect</code>','Ruch zbyt szybki lub zbyt wolny','Zapominanie podmiany obrazu sprite\'a','Próba płynnego ruchu w <code>on_key_down</code>']}, right:{h:'Twoje wyprzedzające ruchy', items:['"Aby zmienić zmienną zewnętrzną, powiedz global"','"point = kliknięcie, rect = obiekt vs obiekt"','Dostrójcie krok += / -= razem','Podmiana obrazu = widoczny kierunek zwrócenia','Przytrzymany klawisz w update(); zdarzenia do akcji']}}
      ]},
      {t:'🎯 Jak tego nauczać', cards:[
        {type:'good', txt:'Modeluj bezustannie szybkie iterowanie: zmień jedną liczbę, uruchom, obserwuj, dostosuj. Tworzenie gier nagradza "po prostu spróbujmy" znacznie bardziej niż planowanie wszystkiego z góry, a pokazanie tej postawy daje uczniom przyzwolenie na eksperymentowanie zamiast obawiania się błędów.'},
        {type:'tip', txt:'Gdy kolizja "nie działa", debuguj wizualnie: tymczasowo wypisz wynik na ekranie lub wypisz do konsoli wewnątrz <code>if</code>. Sprawdzenie, czy gałąź w ogóle się uruchamia, oddziela "kolizja nie jest wykrywana" od "wynik się nie aktualizuje" — dwie bardzo różne naprawy.'}
      ]}
    ],
    quiz:[
      {q:'Uczeń zwiększa score wewnątrz on_mouse_down, ale nigdy się nie zmienia, bez błędu. Jaka jest poprawka i zasada?', opts:['Zadeklarować global score wewnątrz funkcji — bez tego Python tworzy nową zmienną lokalną','Owinąć aktualizację score w pętlę while','Zmienić nazwę score na unikalną','Przechowywać score wewnątrz Aktora'], c:0, fb:'Aby zmodyfikować zmienną na poziomie modułu wewnątrz funkcji, Python wymaga deklaracji global; w przeciwnym razie po cichu tworzy lokalną.'},
      {q:'Która metoda wykrywa kliknięcie myszą lądujące na konkretnym sprite\'ie?', opts:['collidepoint(pos) — sprawdza, czy pojedynczy punkt jest wewnątrz pudełka sprite\'a','colliderect(other_sprite)','keyboard.click','on_draw()'], c:0, fb:'collidepoint sprawdza punkt (kliknięcie); colliderect sprawdza, czy dwa prostokąty się nakładają.'},
      {q:'Jaki jest najprostszy trafny model myślowy wykrywania kolizji?', opts:['Każdy obiekt ma niewidzialne pudełko; kolizja to dwa nakładające się pudełka','Python zgaduje, czy rzeczy wyglądają na dotykające się','Sprite\'y magnetycznie się odpychają','Porównuje kolory pikseli każdego sprite\'a'], c:0, fb:'Kolizja oparta na prostokątach to dosłownie "czy te dwa prostokąty się nakładają?" — model niewidzialnego pudełka jest dokładny.'},
      {q:'Dlaczego podmieniać coddy.image na wariant lewy/prawy, gdy postać się porusza?', opts:['Informacja wizualna — sprite jest zwrócony w kierunku, w którym się przemieszcza','Jest to wymagane, inaczej gra się wysypie','Sprawia, że kod działa szybciej','Zmniejsza zużycie pamięci'], c:0, fb:'Zmiana obrazu sprite\'a daje graczowi jasną informację o kierunku; to decyzja o dopracowaniu/odczuciu, a nie wymóg.'},
      {q:'Kiedy używać keyboard.right wewnątrz update() a kiedy on_key_down(key)?', opts:['Sprawdzanie przytrzymanego klawisza w update() do płynnego ruchu; on_key_down do akcji jednorazowych jak skok/strzał','Zawsze używaj on_key_down; update() nie może odczytać klawiatury','Są wymienne','keyboard.right działa tylko w draw()'], c:0, fb:'Ruch ciągły = sprawdzanie przytrzymanego klawisza w update(); akcje dyskretne = zdarzenie on_key_down. Pomylenie ich daje złe odczucie.'},
      {q:'Kolizja "nie działa." Jaki jest najskuteczniejszy ruch debugujący do nauczenia?', opts:['Wypisać wewnątrz if (lub pokazać wynik na ekranie), aby zobaczyć, czy gałąź w ogóle się uruchamia','Przepisać całą grę','Dodać więcej sprite\'ów','Zwiększyć rozmiar okna'], c:0, fb:'Szybki print oddziela "kolizja niewykryta" od "wynik się nie aktualizuje" — dwa różne problemy z różnymi naprawami.'}
    ]
  },
  {
    id:7, emoji:'🏆', color:'#EF4444',
    title:'Projekt końcowy: budowanie i publikowanie gry',
    desc:'Mapy siatkowe, przeciwnicy z atrybutami, collidelist, bonusy, poziomy, stany wygranej/przegranej, menu i publikowanie.',
    obj:'Przygotuj się do poprowadzenia uczniów przez ich projekt końcowy. Zmiana umiejętności tutaj to przejście od nauczania funkcji do zarządzania większym projektem — realistycznego określania zakresu, organizowania stanu gry, obsługi wielu obiektów i prowadzenia uczniów aż do ukończonej, opublikowanej, zaprezentowanej gry.',
    sections:[
      {t:'🗺️ Gdzie to się mieści w kursie', cards:[
        {type:'text', h:'Wszystko się łączy', b:'Ostatnie moduły budują pełne RPG ("WeCode and Dragons") i projekt dyplomowy. Nie ma tu prawie <strong>żadnej nowej składni</strong> — zamiast tego każde pojęcie z modułów 1–6 pojawia się naraz wewnątrz jednego większego programu. Twoja rola odpowiednio się zmienia: mniej "oto nowa funkcja", więcej "utrzymajmy ten projekt zorganizowany i możliwy do ukończenia."'},
        {type:'tip', txt:'Przeformułuj swoją własną pracę na ten moduł. Jesteś teraz mentorem projektu w takim samym stopniu jak nauczycielem programowania: pomagając uczniom rozsądnie określić zakres, pozostać zorganizowanym, debugować większą bazę kodu i — co kluczowe — faktycznie ukończyć i wypuścić grę.'}
      ]},
      {t:'🗺️ Mapy siatkowe (listy list)', cards:[
        {type:'text', h:'Czego uczyć', b:'Poziomy gry są przechowywane jako <strong>siatka 2D</strong> — lista list, gdzie każda liczba koduje typ kafelka (0 = podłoga, 1 = ściana, 2 = kości itd.). Zagnieżdżone pętle przechodzą przez wiersze i kolumny, aby narysować każdy kafelek w <code>column * cell_width</code>, <code>row * cell_height</code>. To jest nagroda za zagnieżdżone pętle z modułu 2.'},
        {type:'code', lbl:'mapa kafelków', code:`my_map = [[<span class="cn">0</span>, <span class="cn">1</span>, <span class="cn">1</span>, <span class="cn">0</span>],
          [<span class="cn">1</span>, <span class="cn">2</span>, <span class="cn">3</span>, <span class="cn">1</span>],
          [<span class="cn">0</span>, <span class="cn">1</span>, <span class="cn">1</span>, <span class="cn">0</span>]]

<span class="ck">def</span> <span class="cf">draw_map</span>():
    <span class="ck">for</span> row <span class="ck">in</span> <span class="cf">range</span>(<span class="cf">len</span>(my_map)):
        <span class="ck">for</span> col <span class="ck">in</span> <span class="cf">range</span>(<span class="cf">len</span>(my_map[<span class="cn">0</span>])):
            <span class="ck">if</span> my_map[row][col] == <span class="cn">1</span>:
                wall.left = col <span class="ck">*</span> wall.width
                wall.top = row <span class="ck">*</span> wall.height
                wall.<span class="cf">draw</span>()`}
      ]},
      {t:'👾 Wielu przeciwników z atrybutami', cards:[
        {type:'text', h:'Czego uczyć', b:'Przeciwnicy są generowani w pętli i przechowywani w liście, każdy z własnymi atrybutami (zdrowie, atak) ustawionymi jako właściwości Aktora. Aby sprawdzić gracza względem <em>wszystkich</em> z nich naraz, <code>collidelist(enemies)</code> zwraca indeks pierwszego trafionego lub <code>-1</code>, jeśli żaden — znacznie czyściej niż ręczna pętla sprawdzeń <code>colliderect</code>.'},
        {type:'code', lbl:'generowanie + kolizja z listą', code:`enemies = []
<span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">5</span>):
    e = <span class="cf">Actor</span>(<span class="cs">"enemy"</span>)
    e.health = random.<span class="cf">randint</span>(<span class="cn">10</span>, <span class="cn">20</span>)
    e.attack = random.<span class="cf">randint</span>(<span class="cn">5</span>, <span class="cn">10</span>)
    enemies.<span class="cf">append</span>(e)

idx = char.<span class="cf">collidelist</span>(enemies)
<span class="ck">if</span> idx <span class="ck">!=</span> <span class="ck">-</span><span class="cn">1</span>:               <span class="cc"># -1 oznacza "brak trafienia"</span>
    char.health <span class="ck">-=</span> enemies[idx].attack`},
        {type:'warn', txt:'Subtelny błąd do wypatrzenia: usuwanie elementów z listy <em>podczas przechodzenia po niej pętlą</em> pomija elementy. Jeśli uczniowie usuwają pokonanych przeciwników w trakcie pętli, niektórzy zostają pominięci. Ucz bezpiecznego wzorca — zbierz to, co usunąć, lub przechodź po kopii.'}
      ]},
      {t:'🚦 Stan gry i menu', cards:[
        {type:'text', h:'Czego uczyć', b:'Pojedyncza zmienna <code>mode</code> ("menu" / "game" / "end") działa jak drogowskaz mówiący zarówno <code>draw()</code>, jak i <code>update()</code>, co robić w danym momencie. Kierowanie wszystkiego przez jedną zmienną stanu jest tym, co powstrzymuje większą grę przed rozpadnięciem się w spaghetti — to najważniejsza idea organizacyjna w projekcie końcowym.'},
        {type:'code', lbl:'jedna zmienna stanu napędza wszystko', code:`mode = <span class="cs">"menu"</span>

<span class="ck">def</span> <span class="cf">draw</span>():
    screen.<span class="cf">clear</span>()
    <span class="ck">if</span> mode == <span class="cs">"menu"</span>:
        screen.<span class="cf">draw</span>.<span class="cf">text</span>(<span class="cs">"Press SPACE to start"</span>, center=(<span class="cn">300</span>,<span class="cn">200</span>))
    <span class="ck">elif</span> mode == <span class="cs">"game"</span>:
        char.<span class="cf">draw</span>()
    <span class="ck">elif</span> mode == <span class="cs">"end"</span>:
        screen.<span class="cf">draw</span>.<span class="cf">text</span>(<span class="cs">"GAME OVER"</span>, center=(<span class="cn">300</span>,<span class="cn">200</span>))`},
        {type:'hi', h:'Wygrana/przegrana to po prostu zmiana stanu', b:'Zwycięstwo i porażka to nie żadna specjalna maszyneria — to po prostu ustawienie <code>mode = "end"</code>, gdy warunek jest spełniony (wszyscy przeciwnicy pokonani lub <code>char.health &lt;= 0</code>). Ujęcie tego w ten sposób powstrzymuje uczniów przed przekombinowaniem i wiąże się bezpośrednio z warunkami z modułu 2.'}
      ]},
      {t:'🧒 Prawdziwe wyzwanie: zakres i ukończenie', cards:[
        {type:'twocol', left:{h:'Gdzie projekty końcowe idą źle', items:['Zbyt ambitny zakres — za duży, aby ukończyć','Utrata kontroli nad stanem gry','Edytowanie listy podczas przechodzenia po niej pętlą','Wyczerpanie czasu przed publikacją','Wieczne dopracowywanie, nigdy niewypuszczanie']}, right:{h:'Twoje ruchy coachingowe', items:['"Ukończ mały, potem dodawaj więcej"','Jedna zmienna <code>mode</code> napędza grę','Przechodź po kopii przy usuwaniu','Zarezerwuj czas na publikację + prezentację','"Ukończone i udostępnione bije doskonałe"']}},
        {type:'warn', txt:'Największym ryzykiem w projekcie końcowym jest <strong>ambicja, a nie składnia</strong>. Ukończona, prosta, opublikowana gra bije nieukończony epos za każdym razem. Ucz uczniów, aby najpierw zablokowali mały zakres i dodawali dodatki dopiero, gdy główna pętla działa od początku do końca.'}
      ]},
      {t:'🎯 Publikowanie i prezentowanie', cards:[
        {type:'good', txt:'Lekcja dyplomowa dotyczy dumy i prezentacji, a nie nowego kodu. Ucz uczniów, aby opublikowali swoją grę w Kodland HUB i ją zaprezentowali. Ukończenie i udostępnienie to samo w sobie umiejętność — chwal ukończenie równie głośno jak sprytny kod, bo wypuszczenie czegoś prawdziwego to to, co uczniowie zapamiętują.'},
        {type:'tip', txt:'Pomóż każdemu uczniowi przygotować 1-minutową prezentację: czym jest gra, jak w nią grać i jedna rzecz, z której jest dumny. Zaprezentowanie własnej pracy buduje pewność siebie i daje czyste, motywujące zakończenie całego kursu.'}
      ]}
    ],
    quiz:[
      {q:'Jakie jest jedno największe ryzyko dla ucznia w projekcie końcowym i jak nad nim pracujesz?', opts:['Zbyt ambitny zakres — najpierw zablokuj małą, możliwą do ukończenia grę, potem dodawaj dodatki','Nieznajomość wystarczającej składni — ćwicz więcej teorii','Zbyt wolne pisanie — naciskaj na szybkość','Używanie zbyt wielu komentarzy'], c:0, fb:'Zarządzanie zakresem to kluczowy fokus nauczycielski; ukończona mała gra bije nieukończoną dużą.'},
      {q:'Jak zazwyczaj zarządza się stanem gry (menu / gra / koniec gry) i dlaczego ma to znaczenie?', opts:['Pojedyncza zmienna mode, którą sprawdzają draw() i update() — utrzymuje dużą grę zorganizowaną','Trzy oddzielne pliki programu','Poprzez restartowanie Pythona między ekranami','Za pomocą liczb losowych'], c:0, fb:'Jedna zmienna stanu kieruje tym, co gra pokazuje i robi, zapobiegając zamianie dużego projektu w spaghetti.'},
      {q:'char.collidelist(enemies) zwraca -1. Co to oznacza?', opts:['Postać nie koliduje z żadnym przeciwnikiem na liście','Wystąpił błąd','Zderzyła się z przeciwnikiem o indeksie 1','Lista enemies jest pusta'], c:0, fb:'collidelist zwraca indeks pierwszego trafionego sprite\'a lub -1, gdy nie ma żadnej kolizji.'},
      {q:'Jak reprezentowana jest mapa siatkowa 2D w tych projektach i które wcześniejsze pojęcie wzmacnia jej rysowanie?', opts:['Lista list (wiersze liczb); rysowanie jej używa zagnieżdżonych pętli','Pojedynczy długi łańcuch znaków; używa wycinania łańcuchów','Słownik kolorów; używa wyszukiwania po kluczach','Funkcja; używa rekurencji'], c:0, fb:'Lista list modeluje wiersze i kolumny, a zagnieżdżone pętle po niej przechodzą — nagroda za zagnieżdżone pętle z modułu 2.'},
      {q:'Uczeń usuwa pokonanych przeciwników z listy podczas przechodzenia po niej pętlą i niektórzy przeciwnicy zostają pominięci. Jaka jest przyczyna?', opts:['Usuwanie elementów w trakcie pętli przesuwa pozostałe indeksy — przechodź po kopii lub zbierz-a-potem-usuń','collidelist jest zepsuty','Przeciwnicy potrzebują więcej zdrowia','Użyto append zamiast pop'], c:0, fb:'Modyfikowanie listy podczas iteracji pomija elementy; bezpieczne wzorce to przechodzenie po kopii lub odroczenie usuwania.'},
      {q:'Podczas lekcji dyplomowej co nauczyciel powinien podkreślać najbardziej?', opts:['Pomaganie uczniom ukończyć, opublikować w HUB i zaprezentować swoją grę','Wciśnięcie jak największej liczby funkcji','Przepisanie gry od zera dla jakości','Pominięcie prezentacji, aby zaoszczędzić czas'], c:0, fb:'Ukończenie, publikowanie i prezentowanie to główne rezultaty dyplomowe — chwal wypuszczenie, a nie tylko sprytny kod.'}
    ]
  },
  {
    id:8, emoji:'🧑‍🏫', color:'#6366F1',
    title:'Jak poprowadzić świetną lekcję',
    desc:'Lustrzana/cykliczna struktura lekcji, dlaczego działa i jak utrzymać każdego ucznia aktywnie zaangażowanego.',
    obj:'Opanuj kształt mocnej lekcji Kodland: ośmiofazową strukturę "lustra" od rozgrzewki do podsumowania, poznawcze powody, dla których działa, oraz konkretne techniki utrzymywania zaangażowania dzieci w każdej fazie. To dotyczy TEGO, JAK uczysz, niezależnie od tematu.',
    sections:[
      {t:'🗺️ Dlaczego struktura ma takie samo znaczenie jak treść', cards:[
        {type:'text', h:'Świetna lekcja ma kształt', b:'Możesz znać Pythona doskonale i wciąż prowadzić słabą lekcję, jeśli nie ma struktury. Dzieci uczą się najlepiej wewnątrz <strong>przewidywalnego rytmu</strong> — szybciej się wyciszają, więcej zapamiętują i pozostają zmotywowane, gdy każda lekcja podąża tym samym znajomym łukiem. Lekcje Kodland używają celowej ośmiofazowej struktury z konstrukcją "lustra": sposób, w jaki lekcja się <em>kończy</em>, odzwierciedla sposób, w jaki się <em>zaczyna</em>.'},
        {type:'text', h:'Czego uczy ten moduł', b:'W przeciwieństwie do modułów programistycznych, ten dotyczy <strong>twojego prowadzenia</strong>, a nie materiału. Poznasz osiem faz, dlaczego każda istnieje i — co najważniejsze — jak utrzymać uczniów aktywnie uczestniczących, a nie biernie obserwujących. Te nawyki stosują się do każdej lekcji, jaką kiedykolwiek poprowadzisz, niezależnie od tematu.'},
        {type:'tip', txt:'Konsekwencja jest sednem. Gdy uczniowie poznają twój rytm, przestają wydawać energię na ustalanie "co teraz?" i wydają ją na naukę. Prowadź tę samą strukturę za każdym razem, aż stanie się drugą naturą — dla ciebie i dla nich.'}
      ]},
      {t:'🌅 Początek: cztery fazy', cards:[
        {type:'text', h:'1 · Rozgrzewka — aktywuj energię i skupienie', b:'Otwórz czymś lekkim, co przełącza mózg ucznia w "tryb lekcji": szybkie pytanie, malutkie wyzwanie, spojrzenie na coś zabawnego. Celem jest energia i uwaga, a nie ocena. Sygnalizuje "zaczynamy teraz" i wciąga rozproszone dziecko do sesji.'},
        {type:'text', h:'2 · Powtórka poprzedniej lekcji — przypomnienie i utrwalenie', b:'Krótko wróć do tego, czego nauczono się ostatnim razem. Przypominanie — sprawianie, aby uczeń <em>sobie przypomniał</em>, a nie ponownie usłyszał — to jedno z najsilniejszych narzędzi pamięci, jakie istnieją. Dwuminutowe "co pamiętasz o pętlach?" robi więcej niż ponowne wyjaśnianie kiedykolwiek by mogło.'},
        {type:'text', h:'3 · Sprawdzenie pracy domowej — przejrzyj zadanie razem', b:'Przejdź przez pracę domową <em>razem</em> z uczniem. To tutaj wychwytujesz nieporozumienia, chwalisz wysiłek i pokazujesz, że praca domowa naprawdę ma znaczenie. Pominięcie tego uczy dzieci, że praca domowa jest opcjonalna.'},
        {type:'text', h:'4 · Cel lekcji — ustaw jasne cele', b:'Powiedz wprost, o czym jest dzisiaj: "dzisiaj sprawimy, że nasz sprite będzie się poruszał, gdy naciśniesz klawisze strzałek." Jasny cel nadaje lekcji kierunek i daje uczniowi coś konkretnego, do czego może dążyć.'}
      ]},
      {t:'🏁 Koniec: lustro', cards:[
        {type:'hi', h:'Koniec odzwierciedla początek, odwrócony', b:'Cztery zamykające fazy odbijają fazy otwierające w odwrotnej kolejności — lekcja kończy się tak, jak się zaczęła, dając uczniom satysfakcjonujące poczucie <strong>domknięcia i rytmu</strong>. Ten "cykliczny" kształt jest tym, co sprawia, że lekcja wydaje się kompletna, a nie po prostu zatrzymuje się, gdy skończy się czas.'},
        {type:'text', h:'1 · Podsumowanie lekcji — oparte na nauczycielu + uczniu', b:'Podsumuj, co zostało omówione — ale nie tylko im mów. Niech <em>uczeń</em> też podsumuje własnymi słowami. Jego podsumowanie ujawnia, co faktycznie dotarło, i pełni podwójną rolę jako drugi moment przypominania.'},
        {type:'text', h:'2 · Zadanie domowe — jasne instrukcje', b:'Zadaj pracę domową z krystalicznie jasnymi instrukcjami, co zrobić i jak. Niejasna praca domowa to praca domowa, która nie zostanie zrobiona. Łączy się to ze Sprawdzeniem pracy domowej, które otworzyło lekcję.'},
        {type:'text', h:'3 · Zapowiedź następnej lekcji — buduj ciekawość', b:'Zapowiedz, co nadchodzi: "następnym razem sprawimy, że przeciwnicy będą cię ścigać!" Zaczepka buduje wyczekiwanie i pęd do przodu między sesjami — łączy się z Celem lekcji z początku.'},
        {type:'text', h:'4 · Podsumowanie — zakończ z energią', b:'Zakończ na wysokim tonie: świętuj to, co uczeń dzisiaj zbudował, doceń jego wysiłek i odeślij go z dobrym samopoczuciem. Ostatnie 30 sekund kształtuje to, jak zapamięta całą lekcję.'}
      ]},
      {t:'💡 Dlaczego ta struktura działa', cards:[
        {type:'twocol', left:{h:'🧠 Łatwość poznawcza', items:['Przewidywalny format obniża obciążenie umysłowe','Uczniowie wiedzą, czego się spodziewać','Skupienie idzie na naukę, a nie na rozszyfrowanie kształtu lekcji']}, right:{h:'🔁 Wzmocnienie zapamiętywania', items:['Powtórka na POCZĄTKU utrwala ostatni raz','Podsumowanie na KOŃCU utrwala dzisiaj','Dwa punkty kontrolne pamięci → znacznie lepsze przypominanie']}},
        {type:'twocol', left:{h:'🎯 Jasny cel', items:['Podanie celu z góry buduje motywację','Zapowiedź następnej lekcji tworzy pęd','Uczeń zawsze wie, po co tu jest']}, right:{h:'✅ Pętla odpowiedzialności', items:['Sprawdzenie pracy domowej na początku...','...łączy się z zadaniem domowym na końcu','Uczniowie czują ciągłość między lekcjami']}},
        {type:'good', txt:'Zauważ parowanie: rozgrzewka ↔ podsumowanie, powtórka ↔ streszczenie, sprawdzenie pracy domowej ↔ zadanie domowe, cel lekcji ↔ zapowiedź następnej lekcji. Każda faza otwierająca ma partnera zamykającego. Ta symetria jest tym, co czyni strukturę "cykliczną" i zapadającą w pamięć.'}
      ]},
      {t:'🙋 Utrzymywanie każdego dziecka zaangażowanego', cards:[
        {type:'text', h:'Złota zasada', b:'Lekcja, na której nauczyciel mówi, a uczeń słucha, to słaba lekcja. Twoim zadaniem jest sprawić, aby uczeń <strong>robił, mówił i myślał</strong> jak najwięcej. Używaj tych czterech technik bezustannie, w każdej fazie.'},
        {type:'twocol', left:{h:'❓ Pytania otwarte', items:['Pytaj "Jak myślisz, co się stanie, jeśli…?"','Używaj "Jak byś rozwiązał…?", aby pobudzić rozumowanie','Unikaj pytań tak/nie — zapraszaj do prawdziwego myślenia']}, right:{h:'🖥️ Udostępnianie ekranu', items:['Niech uczeń udostępni swój ekran','Pozwól mu przeprowadzić cię przez jego własną pracę','Świetne podczas sprawdzania pracy domowej i rozgrzewki — buduje poczucie własności']}},
        {type:'twocol', left:{h:'📖 Czytanie slajdów', items:['Zapraszaj uczniów do czytania tekstu slajdów na głos','Poproś, aby wyjaśnili go własnymi słowami','Wzmacnia zrozumienie i utrzymuje ich aktywnymi']}, right:{h:'🌟 Pochwała i zachęta', items:['Bądź konkretny: "Świetna robota z wyjaśnieniem tego kroku!"','Chwal wysiłek, nie tylko poprawne odpowiedzi','Używaj energii, aby utrzymać pęd przez cały czas']}},
        {type:'warn', txt:'Uważaj na pułapkę biernej lekcji: wydaje się płynna, bo nie ma tarcia, ale uczeń niewiele się uczy. Jeśli mówisz od ponad minuty lub dwóch bez tego, aby uczeń coś zrobił lub powiedział, oddaj to jemu.'}
      ]},
      {t:'🎯 Wprowadzanie w praktykę', cards:[
        {type:'hi', h:'Struktura cię uwalnia, nie ogranicza', b:'Nowi nauczyciele czasem obawiają się, że stała struktura uczyni lekcje robotycznymi. Jest odwrotnie: gdy fazy staną się automatyczne, przestajesz martwić się "co dalej?" i masz całą uwagę wolną dla ucznia — jego pytań, jego błędów, jego energii. Struktura to rusztowanie, które pozwala ci być obecnym.'},
        {type:'tip', txt:'Trzymaj mentalną (lub dosłowną) listę kontrolną ośmiu faz na pierwsze lekcje. Po kilku tygodniach rytm staje się automatyczny. W następnym module obejrzysz prawdziwą lekcję i zobaczysz każdą z tych faz i technik w akcji.'}
      ]}
    ],
    quiz:[
      {q:'Dlaczego struktura lekcji Kodland jest opisywana jako format "lustra" lub "cykliczny"?', opts:['Fazy zamykające odbijają fazy otwierające w odwrotnej kolejności, więc lekcja kończy się tak, jak się zaczęła','Nauczyciel i uczeń zamieniają się rolami w połowie','Slajdy są pokazywane dwa razy, do przodu i do tyłu','Każda lekcja powtarza poprzednią lekcję dokładnie'], c:0, fb:'Koniec odzwierciedla początek odwrócony (rozgrzewka↔podsumowanie, powtórka↔streszczenie itd.), dając domknięcie i rytm.'},
      {q:'Nauczyciel pomija Powtórkę poprzedniej lekcji, aby zaoszczędzić czas. Jaki jest główny koszt, dydaktycznie?', opts:['Traci moment przypominania — sprawianie, aby uczniowie przypomnieli sobie wcześniejszą naukę, to jeden z najsilniejszych sposobów jej utrwalenia','Nic, o ile cel jest podany','Praca domowa nie może być zadana później','Lekcja przekroczy czas'], c:0, fb:'Powtórka wymusza przypominanie, potężne narzędzie pamięci. To jeden z dwóch punktów kontrolnych utrwalania w strukturze.'},
      {q:'Która para faz tworzy "pętlę odpowiedzialności" w całej lekcji?', opts:['Sprawdzenie pracy domowej na początku i Zadanie domowe na końcu','Rozgrzewka i Cel lekcji','Czytanie slajdów i Pochwała','Podsumowanie lekcji i Zakończenie'], c:0, fb:'Sprawdzenie pracy domowej na początku i zadanie jej na końcu zamyka pętlę i buduje ciągłość między lekcjami.'},
      {q:'Uczeń odpowiada poprawnie na pytanie tak/nie, ale wydaje się niezaangażowany. Jaki jest lepszy ruch w pytaniu?', opts:['Zadać pytanie otwarte jak "Jak byś to rozwiązał?" lub "Jak myślisz, co się stanie, jeśli…?"','Zadawać więcej pytań tak/nie szybciej','Odpowiedzieć na pytanie samemu, aby utrzymać tempo','Przejść od razu do następnego slajdu'], c:0, fb:'Pytania otwarte zapraszają do rozumowania i aktywnego myślenia; pytania tak/nie pozwalają uczniom się prześlizgnąć.'},
      {q:'Jaka jest najsilniejsza forma pochwały według zasad zaangażowania?', opts:['Konkretna pochwała doceniająca wysiłek i proces, np. "Świetna robota z wyjaśnieniem tego kroku!"','Ogólne "dobra robota" po każdej odpowiedzi','Chwalenie tylko idealnie poprawnych odpowiedzi','Zachowanie całej pochwały na zakończenie'], c:0, fb:'Konkretna pochwała powiązana z wysiłkiem i procesem jest bardziej motywująca i wiarygodna niż ogólna lub tylko oparta na wynikach.'},
      {q:'Nauczyciel prowadzi płynną lekcję, ale mówił przez większość czasu, podczas gdy uczeń obserwował. Dlaczego to jest sygnał ostrzegawczy?', opts:['Bierna lekcja wydaje się bezproblemowa, ale uczeń niewiele się uczy — powinien robić, mówić i myśleć przez cały czas','To nie problem, jeśli materiał został omówiony','Oznacza to, że struktura była przestrzegana poprawnie','Płynność zawsze wskazuje na świetną lekcję'], c:0, fb:'Zaangażowanie jest celem. Jeśli nauczyciel mówi przez długie odcinki bez działania ucznia, nauka spada — oddaj to uczniowi.'}
    ]
  },
  {
    id:9, emoji:'🎥', color:'#0EA5E9', lesson:true,
    title:'Przykład świetnej lekcji',
    desc:'Obejrzyj wzorcową lekcję Pythona Kodland od początku do końca, z pełną transkrypcją i notatkami dydaktycznymi.',
    obj:'Zobacz ośmiofazową strukturę lekcji i techniki zaangażowania z poprzedniego modułu wprowadzone w praktykę przez doświadczonego nauczyciela: tempo, zadawanie pytań, modelowanie, informacja zwrotna, zachęta i przebieg lekcji — w jednej prawdziwej nagranej lekcji Pythona Kodland.',
    completeH:'Obejrzałeś wzorcową lekcję?',
    completeBody:'Gdy obejrzysz nagranie i przeczytasz notatki oceniające, oznacz ten moduł jako ukończony, aby zakończyć szkolenie i odblokować test umiejętności cyfrowych.',
    completeBtn:'✓ Oznacz jako obejrzane',
    sections:[
      {t:'🎬 Nagranie', cards:[
        {type:'video', src:'https://www.youtube-nocookie.com/embed/eNZ6h1oycJI?rel=0', cap:'Prawdziwa lekcja Pythona Kodland, nagrana w całości. Włącz napisy (CC), aby śledzić zsynchronizowaną transkrypcję.'},
        {type:'warn', txt:'Nagranie jest prawdziwą lekcją i trwa około 1 godziny 48 minut. Obejrzyj je w całości, gdy możesz poświęcić mu uwagę — to najlepsze odniesienie do wszystkiego, co obejmowało to szkolenie.'}
      ]},
      {t:'🧭 O tej lekcji', cards:[
        {type:'text', h:'Co oglądasz', b:'To prawdziwa, niescenariuszowa lekcja Pythona Kodland prowadzona przez doświadczonego nauczyciela z małą grupą uczniów. Klasa pracuje nad projektem, który łączy wcześniejsze umiejętności — <strong>funkcje i słowniki/listy</strong> (bazując na projekcie listy filmów i menedżerze haseł) — rodzaj projektu utrwalającego, który poznałeś w modułach Dane i Funkcje.'},
        {type:'hi', h:'Wypatruj struktury, której właśnie się nauczyłeś', b:'Oglądając, wypatruj ośmiu faz z <strong>modułu 8</strong> w akcji: powitanie i rozgrzewkę, most do poprzedniej lekcji, sprawdzenie pracy domowej i jasny cel na początku — a potem, na końcu, streszczenie, pracę domową na następny raz i zapowiedź następnej lekcji. Otwarcie i zamknięcie odzwierciedlają się nawzajem, dokładnie tak, jak opisuje "cykliczna" struktura.'}
      ]},
      {t:'✅ Dlaczego to jest świetna lekcja — ocena QA', cards:[
        {type:'text', h:'Oceniona względem naszych kryteriów QA', b:'Każda lekcja Kodland może być oceniona względem zestawu kryteriów jakości QA. Ta lekcja <strong>zaliczyła je wszystkie</strong>. Poniżej znajdują się dowody, pogrupowane według faz lekcji z modułu 8 — użyj tego jako listy kontrolnej, jak wygląda "świetna" w praktyce.'},
        {type:'qa', h:'🌅 Otwarcie lekcji', items:[
          {k:'Rozgrzewka i powitanie', v:'Nauczyciel przywitał uczniów i zapytał Marvela, jak się czuje.'},
          {k:'Cel lekcji', v:'Podał cel — praca nad projektem, który łączy ich wcześniejszą wiedzę.'},
          {k:'Most do poprzedniej lekcji', v:'Zapytał, czy uczniowie budowali wcześniej menedżera haseł; Marvel przypomniał sobie wcześniejszy projekt listy filmów.'},
          {k:'Przegląd zadania domowego', v:'Przejrzał poprzednią pracę domową i omówił ją z uczniami.'}
        ]},
        {type:'qa', h:'🧑‍🏫 Instrukcja i ćwiczenie', items:[
          {k:'Jasne dzielenie instrukcji na części', v:'Podał instrukcje w małych krokach — np. wyjaśniając strukturę projektu i poszczególne zadania.'},
          {k:'Modelowanie przed samodzielną pracą', v:'Zademonstrował, jak wypisać elementy słownika, zanim pozwolił uczniom pracować samodzielnie.'},
          {k:'Obecny etap ćwiczenia', v:'Uczniowie zaangażowali się w wyraźny etap ćwiczenia, pracując nad swoimi projektami programistycznymi.'}
        ]},
        {type:'qa', h:'🙋 Zaangażowanie i uczestnictwo', items:[
          {k:'Szerokie uczestnictwo', v:'Zaangażował wielu uczniów — Marvela, Gabriela i Shriyansha — zamiast polegać na jednym.'},
          {k:'Bezpośrednie zwracanie się do uczniów', v:'Zwracał się do uczniów po imieniu podczas interakcji uczących.'},
          {k:'Uczestnictwo wielu uczniów w nauce', v:'Marvel, Gabriel i Shriyansh — wszyscy wzięli udział w interakcjach uczących.'},
          {k:'Powtarzająca się interakcja z uczniami', v:'Tworzył powtarzające się interakcje uczące z różnymi uczniami przez cały czas.'},
          {k:'Dydaktycznie użyteczna informacja zwrotna', v:'Dawał informację zwrotną na temat kodu uczniów, pomagając im poprawić błędy.'},
          {k:'Wywołane rozumowanie uczniów', v:'Poprosił uczniów, aby wyjaśnili swoje rozumienie funkcji i list, i uzyskał odpowiednie odpowiedzi.'}
        ]},
        {type:'qa', h:'😊 Pozytywny klimat uczenia się', items:[
          {k:'Niskie powtarzające się zamieszanie', v:'Mniej niż trzy wyraźne stwierdzenia zamieszania uczniów w całej lekcji.'},
          {k:'Brak wyraźnej odmowy lub znudzenia', v:'Brak wyraźnej odmowy, znudzenia lub niezadowolenia ze strony uczniów.'}
        ]},
        {type:'qa', h:'🏁 Zamknięcie lekcji (lustro)', items:[
          {k:'Streszczenie lub przegląd na zakończenie', v:'Streścił umiejętności zdobyte podczas modułu i omówił następne kroki.'},
          {k:'Praca domowa na następne zajęcia', v:'Zadał pracę domową — dokończyć projekt rozpoczęty na zajęciach.'},
          {k:'Ciągłość następnej lekcji', v:'Powiedział uczniom, że następna lekcja obejmie algorytmy liniowe.'}
        ]},
        {type:'good', txt:'Zauważ symetrię: lekcja otwiera się powitaniem, mostem do ostatniego razu, sprawdzeniem pracy domowej i jasnym celem — a zamyka się streszczeniem, pracą domową na następny raz i zapowiedzią tego, co dalej. To lustro to dokładnie struktura z modułu 8 i jest to duża część powodu, dla którego ta lekcja tak dobrze wypada.'}
      ]}
    ]
  }
]
};
