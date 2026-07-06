/* ============================================================================
   Kodland Python Tutor Training — CONTENT (English, source of truth)
   To create another language: copy this file to content-XX.js and translate
   every STRING VALUE below. Do NOT change keys, structure, HTML tags, CSS
   classes, or Python code — inside code blocks translate ONLY the # comments.
   Set code/htmlLang/title, set dst.formUrl:'' and translate dst.placeholderNote.
   ============================================================================ */
window.CONTENT = {
code: 'it',
htmlLang: 'it',
title: 'Formazione per Tutor di Python — Kodland',
ui: {
  logoSub: 'Formazione Python',
  changeRegion: '🌐 Regione',
  heroEyebrow: '🐍 Programma di formazione per tutor',
  heroTitle: 'Preparati a insegnare<br><span class="h-pill">Python</span><br>ai bambini',
  heroSub: "Completa ogni modulo e supera ogni quiz per portare a termine la tua preparazione come tutor. Ottieni almeno il 70% nel quiz di un modulo per sbloccare il successivo — non è possibile saltare avanti.",
  progLabel: 'moduli completati',
  modulesLabel: 'I tuoi moduli',
  allDone: '🏆 Tutto fatto!',
  completeWord: 'completato',
  backModules: '← Moduli',
  exitQuiz: '← Esci dal quiz',
  backDashboard: '← Pannello',
  moduleWord: 'Modulo',
  ofWord: 'di',
  objectiveWord: 'Obiettivo',
  badgePassed: '✓ Superato',
  badgeLocked: '🔒 Bloccato',
  badgeStart: 'Inizia →',
  badgeWatched: '✓ Guardato',
  badgeWatch: '▶ Guarda',
  tagCompleted: 'Completato',
  tagExampleLesson: 'Lezione di esempio',
  completeModuleWord: 'Completa il modulo',
  scoreWord: 'Punteggio',
  questionsWord: 'domande',
  takeQuiz: '📝 Fai il quiz →',
  retakeQuiz: '🔄 Ripeti il quiz',
  markComplete: 'Segna come completato',
  doneCompleted: '✓ Completato',
  moduleComplete: 'Modulo completato',
  questionWord: 'Domanda',
  correctPrefix: '✅ Corretto! ',
  notQuitePrefix: '❌ Non proprio. ',
  seeResults: 'Vedi i risultati →',
  nextBtn: 'Avanti →',
  modulePassed: 'Modulo superato!',
  keepReviewing: 'Continua a ripassare',
  scoreLine: 'Hai risposto correttamente a {s}/{t}.',
  passMsg: ' Modulo successivo sbloccato!',
  failMsg: ' Ti serve il 70% per superarlo. Ripassa e riprova!',
  reviewModuleWord: '📖 Ripassa il modulo',
  startModuleWord: 'Inizia il modulo',
  watchModuleWord: '▶ Guarda il modulo',
  viewCertificate: '🏆 Vedi il certificato',
  trainingComplete: 'Formazione completata!',
  completeSub: "Hai completato ogni modulo — congratulazioni! Sei pronto per il Digital Skill Test.",
  certLabel: 'Certificato di completamento',
  certTitle: 'Formazione per Tutor di Python',
  certLine: 'Kodland · Tutti i {n} moduli · Punteggio medio dei quiz: {avg}%',
  takeDST: '🎯 Fai il Digital Skill Test →',
  backDashboard2: '← Torna al pannello',
  dstCardStage: 'Fase finale',
  dstCardTitle: 'Digital Skill Test',
  dstCardDesc: 'La valutazione pratica finale, da svolgere dopo ogni modulo.',
  dstReady: 'Pronto',
  dstCardTag: 'Valutazione pratica',
  videoFallback: 'Il tuo browser non può riprodurre questo video.',
  videoDownload: 'Scaricalo',
  videoPhTitle: 'Registrazione in arrivo',
  videoPhBody: 'Il video della lezione modello apparirà qui.'
},
dst: {
  formUrl: '',
  placeholderNote: 'Il modulo di invio per la tua regione sarà aggiunto a breve.',
  html: `<div class="dst-body">
    <div class="dst-intro">
      <div class="dst-badge">🏆 Digital Skill Test · 2025</div>
      <div class="dst-h1">Test per Tutor di Python</div>
      <p class="dst-sub">In questo compito puoi dimostrare la tua conoscenza di Python e la tua capacità di assistere gli studenti nella scrittura dei progetti — oltre alla tua diligenza, onestà e disponibilità a seguire le linee guida stabilite. Il tuo compito è creare un gioco che soddisfi i requisiti indicati di seguito. Non hai bisogno di un progetto super sofisticato realizzato da terzi — ti serve un progetto adatto proprio a questo specifico compito!</p>
    </div>

    <div class="dst-stage-header">
      <span class="dst-stage-pill">Il compito</span>
      <span class="dst-stage-title">🎮 Crea un gioco</span>
    </div>

    <div class="dst-task">
      <div class="dst-task-num">1</div>
      <div class="dst-task-body"><p>La cartella del progetto deve includere un file <code>readme.txt</code> che elenchi le librerie utilizzate e le istruzioni su come eseguire il progetto.</p></div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">2</div>
      <div class="dst-task-body"><p>Il codice deve essere <strong>interamente originale e scritto in autonomia.</strong> (Gli elementi grafici non devono essere originali.)</p></div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">3</div>
      <div class="dst-task-body"><p>Possono essere utilizzati solo i seguenti moduli:</p>
        <ul>
          <li><strong>Pygame Zero</strong></li>
          <li><strong>math</strong></li>
          <li><strong>random</strong></li>
          <li>Altre librerie <strong>NON SONO CONSENTITE!</strong></li>
          <li>La libreria <strong>Pygame</strong> <strong>NON DEVE</strong> essere utilizzata.</li>
          <li><em>Eccezione:</em> puoi importare la classe <code>Rect</code> da Pygame.</li>
        </ul>
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">4</div>
      <div class="dst-task-body"><p>Puoi creare esclusivamente un gioco di uno dei seguenti tipi:</p>
        <ul>
          <li><strong>Roguelike</strong> (es. The Binding of Isaac, Hades, Slay the Spire)</li>
          <li><strong>Platform</strong> (es. Super Mario Bros., Sonic the Hedgehog)</li>
          <li><strong>Runner</strong> (es. Subway Surfers, Temple Run)</li>
        </ul>
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">5</div>
      <div class="dst-task-body"><p>Il gioco deve avere un <strong>menu principale con pulsanti cliccabili:</strong></p>
        <ul>
          <li>Avvia il gioco</li>
          <li>Attiva/disattiva musica e suoni</li>
          <li>Esci</li>
        </ul>
        <img class="dst-img" src="assets/dst/image1.png" alt="Example game screen with clickable menu buttons" loading="lazy">
        <img class="dst-img" src="assets/dst/image5.png" alt="Example main menu: Play, Sound On/Off, Exit" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">6</div>
      <div class="dst-task-body"><p>Il gioco deve avere almeno <strong>due nemici diversi</strong> che rappresentino un pericolo per l’eroe.</p>
        <img class="dst-img" src="assets/dst/image3.gif" alt="Roguelike map with several different enemies" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">7</div>
      <div class="dst-task-body"><p>I nemici devono <strong>muoversi all’interno delle proprie aree.</strong></p>
        <img class="dst-img" src="assets/dst/image4.gif" alt="Enemies moving, each confined to its own room" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">8</div>
      <div class="dst-task-body"><p>Il gioco deve avere una <strong>meccanica di conclusione logica e senza bug</strong> — sia per la vittoria che per la sconfitta.</p>
        <img class="dst-img" src="assets/dst/image7.gif" alt="Example gameplay leading to a win/lose outcome" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">9</div>
      <div class="dst-task-body"><p>Sia il personaggio del giocatore che i nemici devono avere <strong>animazioni sprite per il movimento</strong> (per esempio il movimento delle gambe mentre camminano).</p>
        <img class="dst-img" src="assets/dst/image10.gif" alt="Character running with animated leg movement" loading="lazy">
        <div class="dst-imgrow"><img class="dst-img pix" src="assets/dst/image11.gif" alt="Animated character moving through grass"></div>
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">10</div>
      <div class="dst-task-body"><p>Il gioco deve avere <strong>sia musica di sottofondo che effetti sonori</strong> (suoni quando il personaggio attacca o si scontra con un nemico, un suono di moneta quando si raccoglie una ricompensa, ecc.).</p><p style="margin-top:6px">Esempio di risorsa per i suoni: <a class="dst-inline-link" href="https://mixkit.co" target="_blank" rel="noopener noreferrer">mixkit.co</a></p></div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">11</div>
      <div class="dst-task-body"><p>Sia il personaggio del giocatore che i nemici devono avere <strong>animazioni in stato di riposo</strong> (per esempio: respirare, guardarsi intorno, muovere le pinne, scodinzolare, ecc.).</p><p style="margin-top:6px">Esempio di risorsa grafica: <a class="dst-inline-link" href="https://kenney.nl" target="_blank" rel="noopener noreferrer">Kenney.nl</a></p>
        <div class="dst-imgrow">
          <img class="dst-img pix" src="assets/dst/image9.gif" alt="Idle character animation">
          <img class="dst-img pix" src="assets/dst/image6.gif" alt="Idle character animation in grass">
          <img class="dst-img pix" src="assets/dst/image2.gif" alt="Idle scene with enemy">
        </div>
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">12</div>
      <div class="dst-task-body"><p>Devi scrivere <strong>le tue classi</strong> per implementare il movimento del personaggio e le animazioni sprite. <strong>(Programmazione a oggetti)</strong></p>
        <img class="dst-img" src="assets/dst/image8.png" alt="Example of a custom class implementing movement" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">13</div>
      <div class="dst-task-body"><p>Devi usare <strong>nomi in inglese chiari e significativi</strong> per variabili, classi e funzioni — segui le regole <strong>PEP 8</strong>.</p></div>
    </div>

    <div class="dst-stage-header">
      <span class="dst-stage-pill">Note</span>
      <span class="dst-stage-title">📌 Definizioni e indicazioni</span>
    </div>
    <div class="card">
      <ul style="padding-left:17px">
        <li style="margin-bottom:6px">Un gioco <strong>roguelike</strong> è un gioco con vista dall’alto in cui tutti gli oggetti e i personaggi sono posizionati sulla griglia del mondo di gioco. Il movimento tra le celle deve essere fluido e animato.</li>
        <li style="margin-bottom:6px">Un gioco <strong>punta-e-clicca</strong> offre una prospettiva dall’alto simile ai giochi roguelike, ma il movimento del personaggio non è limitato alla griglia.</li>
        <li style="margin-bottom:6px">Un <strong>platform</strong> è un gioco con vista laterale in cui il personaggio può saltare tra le piattaforme.</li>
        <li>L’<strong>animazione sprite</strong> consiste nell’usare una sequenza di immagini che cambiano in modo continuo e ciclico per animare un personaggio. Il semplice passaggio da un’immagine rivolta a sinistra a una rivolta a destra <strong>NON</strong> è animazione sprite. 🧐</li>
      </ul>
    </div>
    <div class="callout ct"><span class="ci">💡</span><span>Non ti serve un codice troppo complesso o lungo — di solito <strong>100–200 righe significative</strong> sono sufficienti per svolgere bene il compito.</span></div>
    <div class="callout cg"><span class="ci">✅</span><span>La complessità di questo progetto è solo circa il <strong>30% superiore</strong> a quella dei progetti finali dei nostri studenti. Se un tutor è in grado di guidare gli studenti nei loro progetti, questo livello è ampiamente alla sua portata — speriamo che tu lo completi con successo! 👍</span></div>

    <div class="dst-stage-header">
      <span class="dst-stage-pill">Importante</span>
      <span class="dst-stage-title">⚠️ Leggi con attenzione</span>
    </div>
    <div class="callout cw"><span class="ci">⚠️</span><span>Se violi più requisiti fondamentali contemporaneamente, potrebbe <strong>non esserci la possibilità di revisionare</strong> il progetto.</span></div>
    <div class="callout cw"><span class="ci">⚠️</span><span>Il progetto <strong>NON</strong> deve essere copiato del tutto o in parte da internet — farlo solleverà immediatamente dubbi sulla tua onestà e professionalità.</span></div>
    <div class="callout cw"><span class="ci">🚫</span><span>L’uso dell’<strong>IA è un motivo di rifiuto diretto.</strong></span></div>

    <div class="dst-stage-header">
      <span class="dst-stage-pill">Invio</span>
      <span class="dst-stage-title">📤 Come inviare</span>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">1</div>
      <div class="dst-task-body"><p>Carica il progetto completato su una piattaforma di archiviazione cloud (<strong>Google Drive o GitHub</strong>) e assicurati di <strong>fornire l’accesso</strong> alla cartella del progetto. Per favore, <strong>NON</strong> usare formati di file compressi!</p></div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">2</div>
      <div class="dst-task-body"><p>Completa lo skill test qui sotto e <strong>incolla il link del tuo progetto</strong> come risposta all’ultima domanda.</p></div>
    </div>
    <div class="dst-submit-card">
      <h3>🔗 Pronto per inviare?</h3>
      <p>Apri il modulo dello skill test, compilalo e incolla il link del tuo progetto come risposta finale.</p>
      <a class="dst-link-btn" id="dst-form-btn" href="#">Apri il modulo dello Skill Test →</a>
    </div>

    <p style="text-align:center;color:var(--text-muted);font-size:14px;margin-top:28px">In bocca al lupo! 🍀</p>
</div>`
},
modules: [
  {
    id:1, emoji:'🐍', color:'#AEDD2E',
    title:'Fondamenti di Python',
    desc:'print, variabili, input, tipi di dato e conversione di tipo — il primissimo programma di un bambino.',
    obj:'Costruisci una comprensione di livello didattico delle basi assolute: output, variabili, input, i tipi di dato fondamentali e le conversioni tra di essi. Alla fine dovresti essere in grado di spiegare ciascuno di essi in tre modi diversi e di prevedere gli errori esatti in cui incapperà un principiante.',
    sections:[
      {t:'🗺️ Dove si colloca nel corso', cards:[
        {type:'text', h:'Il primo contatto con il codice', b:'Questo è il modulo in cui un bambino esegue il suo primissimo programma. Nulla qui è difficile per te — la sfida è interamente didattica. L’arco del corso è pensato apposta: <strong>output</strong> (<code>print</code>) così vedono subito i risultati → <strong>variabili</strong> così il programma può ricordare le cose → <strong>input</strong> così può rispondere → <strong>tipi di dato</strong> così capiscono che tipo di valore stanno gestendo → <strong>conversione</strong> così l’input può essere usato nei calcoli. Ogni modulo successivo — cicli, liste, funzioni, persino i giochi — si basa su queste cinque idee.'},
        {type:'text', h:'Il tuo vero compito nella lezione 1', b:'Fai apparire sullo schermo del bambino un programma funzionante e personalizzato entro i primi minuti. Un successo precoce e visibile è ciò che fa venire voglia a un bambino di 9 anni di tornare. La teoria viene <em>dopo</em> la scarica di dopamina di vedere stampato il proprio nome, mai prima.'},
        {type:'tip', txt:'Regola di ritmo: una nuova idea, poi esegui subito qualcosa. I principianti non possono tenere in mente tre concetti astratti prima di vederne funzionare anche solo uno. Codice → esecuzione → reazione → prossima idea.'}
      ]},
      {t:'🖨️ print() — output', cards:[
        {type:'text', h:'Cosa insegnare', b:'<code>print()</code> mostra tutto ciò che si trova tra le parentesi. Il testo va tra virgolette; i numeri no. Puoi stampare più elementi contemporaneamente separandoli con le virgole, e Python aggiunge automaticamente uno spazio tra di essi.'},
        {type:'code', lbl:'print basics', code:`<span class="cf">print</span>(<span class="cs">"Hello, world!"</span>)
<span class="cf">print</span>(<span class="cn">2024</span>)
<span class="cf">print</span>(<span class="cs">"You are"</span>, <span class="cn">9</span>, <span class="cs">"years old"</span>)
<span class="cc"># Output: You are 9 years old</span>`},
        {type:'warn', txt:'L’errore numero 1 alle prime armi è dimenticare le virgolette: <code>print(Hello)</code> fa cercare a Python una <em>variabile</em> chiamata Hello e provoca un <code>NameError</code>. Insegna la regola ad alta voce: <strong>"il testo indossa sempre le virgolette."</strong>'}
      ]},
      {t:'📦 Variabili — memoria', cards:[
        {type:'text', h:'Cosa insegnare', b:'Una variabile memorizza un valore sotto un nome così da poterlo riutilizzare in seguito. Il nome va a sinistra di <code>=</code>, il valore a destra. Leggere la riga da destra a sinistra aiuta: "prendi il valore 9 e mettilo nella scatola chiamata age."'},
        {type:'code', lbl:'variables', code:`name = <span class="cs">"Mia"</span>
age = <span class="cn">9</span>
<span class="cf">print</span>(<span class="cs">"Hi"</span>, name)
age = age <span class="ck">+</span> <span class="cn">1</span>   <span class="cc"># la scatola può essere aggiornata</span>
<span class="cf">print</span>(<span class="cs">"Next year:"</span>, age)`},
        {type:'hi', h:'La metafora che funziona', b:'"Una variabile è una scatola etichettata che contiene una cosa sola. Metti dentro qualcosa di nuovo e la cosa vecchia sparisce." Questo spiega perfettamente la riassegnazione — i bambini colgono subito che <code>age = age + 1</code> svuota la scatola e la riempie di nuovo.'},
        {type:'warn', txt:'<code>=</code> non è "uguale" nel senso matematico — significa "metti la parte destra nella parte sinistra." Dire "uguale" ad alta voce crea vera confusione più avanti con <code>==</code>. Di’ invece "<strong>diventa</strong>" o "<strong>prende</strong>": "age diventa 10."'}
      ]},
      {t:'⌨️ input() — e perché tutto è una stringa', cards:[
        {type:'text', h:'L’idea più importante di tutto il modulo', b:'<code>input()</code> mette in pausa il programma, aspetta che l’utente digiti e restituisce ciò che ha digitato <strong>come stringa — sempre, anche se ha digitato delle cifre.</strong> Questo singolo fatto è la fonte di più bug per i principianti di qualsiasi altra cosa in tutto il corso, quindi merita del tempo vero.'},
        {type:'code', lbl:'the classic bug, then the fix', code:`age = <span class="cf">input</span>(<span class="cs">"How old are you? "</span>)
<span class="cf">print</span>(age <span class="ck">+</span> <span class="cn">1</span>)
<span class="cc"># TypeError: can only concatenate str ... not int</span>

<span class="cc"># Soluzione: converti il testo in un numero</span>
age = <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"How old are you? "</span>))
<span class="cf">print</span>(<span class="cs">"Next year you’ll be"</span>, age <span class="ck">+</span> <span class="cn">1</span>)`},
        {type:'good', txt:'Insegnalo come una storia: "input ti dà sempre parole, mai numeri. Se vuoi fare calcoli, devi prima trasformare le parole in un numero con <code>int()</code>." Mostra il crash di proposito, leggi l’errore insieme, poi correggilo. La sequenza bug-poi-soluzione è più memorabile di una regola data in anticipo.'}
      ]},
      {t:'🔢 Tipi di dato e conversione', cards:[
        {type:'text', h:'I tre tipi che i bambini incontrano per primi', b:'<strong>str</strong> (testo tra virgolette), <strong>int</strong> (numeri interi) e <strong>float</strong> (numeri decimali). <code>type(x)</code> rivela di quale tipo è un valore — tienilo aperto in una dimostrazione e controlla le cose in tempo reale. Le funzioni di conversione permettono di passare tra di essi: <code>int("5")</code> → 5, <code>str(5)</code> → "5", <code>float("3.2")</code> → 3.2.'},
        {type:'code', lbl:'type() and conversions', code:`<span class="cf">print</span>(<span class="cf">type</span>(<span class="cs">"hi"</span>))    <span class="cc"># &lt;class 'str'&gt;</span>
<span class="cf">print</span>(<span class="cf">type</span>(<span class="cn">7</span>))       <span class="cc"># &lt;class 'int'&gt;</span>
<span class="cf">print</span>(<span class="cf">type</span>(<span class="cn">3.5</span>))     <span class="cc"># &lt;class 'float'&gt;</span>

score = <span class="cf">int</span>(<span class="cs">"10"</span>)        <span class="cc"># "10" -&gt; 10</span>
label = <span class="cs">"Score: "</span> <span class="ck">+</span> <span class="cf">str</span>(score)  <span class="cc"># numero -&gt; testo da unire</span>`},
        {type:'twocol', left:{h:'Stringa + Numero = guai', items:['<code>"5" + 3</code> &rarr; <code>TypeError</code>','<code>"5" + "3"</code> &rarr; <code>"53"</code> (unito!)','<code>5 + 3</code> &rarr; <code>8</code> (vera matematica)']}, right:{h:'Come insegnare la differenza', items:['Esegui tutti e tre dal vivo — falli prevedere','"+ sul testo incolla; + sui numeri somma"','Usa <code>type()</code> per rivelare il perché']}}
      ]},
      {t:'🧒 Le idee sbagliate che incontrerai', cards:[
        {type:'twocol', left:{h:'Cosa sbagliano i principianti', items:['Dimenticare le virgolette attorno al testo','Trattare <code>input()</code> come un numero','Confondere <code>=</code> e <code>==</code>','Errori di battitura nei nomi delle variabili (<code>naem</code>)','Pensare che una variabile "si mostri" da sola senza <code>print</code>']}, right:{h:'Le tue mosse preventive', items:['"Il testo indossa le virgolette"','"input dà sempre parole"','"un = memorizza, due == chiedono"','Leggete insieme il <code>NameError</code>','"Memorizzare è silenzioso; solo print mostra"']}},
        {type:'warn', txt:'Quando appare un errore, resisti alla tentazione di correggerlo da solo. Leggi l’ultima riga del traceback <em>insieme</em> allo studente e lascia che trovi la causa. Sviluppare presto l’autonomia nel leggere gli errori è una delle cose a più alto rendimento che un tutor possa fare.'}
      ]},
      {t:'🎯 Mettere tutto insieme', cards:[
        {type:'hi', h:'Un primo progetto di cui sono fieri', b:'Un piccolo "Chi sono" o un calcolatore dell’età-nel-2050 usa ogni idea del modulo: input, conversione, una variabile, aritmetica e print. Lascia che lo personalizzino (il loro nome, il loro gioco preferito). Il senso di appartenenza trasforma un esercizio in qualcosa di cui fanno uno screenshot da mostrare a un genitore.'},
        {type:'code', lbl:'mini-project: age in 2050', code:`name = <span class="cf">input</span>(<span class="cs">"Your name? "</span>)
age = <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"Your age? "</span>))
future = age <span class="ck">+</span> (<span class="cn">2050</span> <span class="ck">-</span> <span class="cn">2024</span>)
<span class="cf">print</span>(name <span class="ck">+</span> <span class="cs">", in 2050 you’ll be "</span> <span class="ck">+</span> <span class="cf">str</span>(future))`},
        {type:'good', txt:'Nota che questo mini-progetto richiede <code>int()</code> in entrata e <code>str()</code> in uscita — una ragione perfetta e naturale per cui le conversioni esistono. Scegli esempi in cui il concetto è davvero necessario piuttosto che mostrato in modo isolato.'}
      ]}
    ],
    quiz:[
      {q:'Uno studente scrive age = input("Age: ") poi age + 1 e ottiene un TypeError. Qual è la soluzione più pulita e l’idea che c’è dietro?', opts:['Racchiudere l’input in int(): age = int(input(...)) — input restituisce sempre una stringa','Riavviare Python; l’interprete si è confuso','Rinominare la variabile per evitare un conflitto','Rimuovere il + 1 perché non si può sommare all’input'], c:0, fb:'input() restituisce sempre una stringa, quindi deve essere convertita con int() prima dell’aritmetica. Questa è l’idea centrale del modulo.'},
      {q:'Quale spiegazione di una "variabile" è la migliore per un bambino di 9 anni?', opts:['Una scatola etichettata che contiene un valore che puoi riutilizzare e sovrascrivere','Una funzione che restituisce dati memorizzati','Una parola chiave riservata di Python','Un ciclo che ricorda i numeri'], c:0, fb:'La metafora della "scatola etichettata" è concreta e spiega bene anche la riassegnazione.'},
      {q:'Perché è rischioso leggere il simbolo "=" ad alta voce come "uguale" per i principianti?', opts:['Incoraggia la confusione con ==, che in realtà significa "è uguale a"','"Uguale" è grammaticalmente scorretto','Python non usa il simbolo =','Rende la lezione più lunga'], c:0, fb:'Dire "prende" o "diventa" mantiene l’assegnazione (=) distinta dal confronto (==), evitando una confusione molto comune più avanti.'},
      {q:'Un bambino esegue il suo programma e "non appare nulla", anche se ha memorizzato un valore in una variabile. La causa più probabile?', opts:['Ha memorizzato il valore ma non ha mai chiamato print() per mostrarlo','Il nome della variabile è troppo lungo','Python stampa solo i numeri','Deve importare un modulo di visualizzazione'], c:0, fb:'Memorizzare un valore è silenzioso; solo print() mette qualcosa sullo schermo. "Memorizzare è silenzioso, solo print mostra."'},
      {q:'Cosa produce print("5" + "3") come output, e perché è una buona cosa da mostrare dal vivo?', opts:['"53" — il + unisce le stringhe, una sorpresa memorabile che motiva la consapevolezza dei tipi','8 — Python somma i numeri','Un errore — non si può usare + sulle stringhe','"5 3" — Python aggiunge uno spazio'], c:0, fb:'Entrambi gli operandi sono stringhe, quindi il + concatena in "53". La sorpresa resta più impressa del semplice enunciare la regola.'},
      {q:'Uno studente incappa in NameError: name ‘naem’ is not defined. La migliore risposta didattica è:', opts:['Leggere insieme la riga dell’errore e lasciare che individui l’errore di battitura','Correggerlo in silenzio per far proseguire la lezione','Dirgli che le variabili sono inaffidabili','Passare a un esempio diverso'], c:0, fb:'Insegnare agli studenti a leggere i traceback sviluppa autonomia nel debug — un obiettivo fondamentale a lungo termine.'}
    ]
  },
  {
    id:2, emoji:'🔀', color:'#F03D9E',
    title:'Controllo del flusso: condizioni e cicli',
    desc:'if / elif / else, operatori di confronto e logici, più i cicli while e for e l’annidamento.',
    obj:'Insegna ai programmi a prendere decisioni e a ripetere. Dovresti essere in grado di spiegare l’indentazione come sintassi, di scegliere for o while al volo, di seguire un ciclo a mano e di diagnosticare gli errori di ciclo infinito e di off-by-one prima che accadano.',
    sections:[
      {t:'🗺️ Dove si colloca nel corso', cards:[
        {type:'text', h:'I due motori di ogni programma', b:'Fino a ora i programmi scorrevano dritti, dall’alto in basso, una sola volta. Questo modulo aggiunge le due cose che fanno sì che il codice <em>faccia</em> davvero qualcosa di interessante: <strong>decisioni</strong> (<code>if/elif/else</code>) così il programma può ramificarsi, e <strong>ripetizione</strong> (<code>while</code>, <code>for</code>) così può svolgere un lavoro molte volte senza copia-e-incolla. Insieme producono i primi veri "algoritmi" — e alimentano ogni gioco più avanti nel corso.'},
        {type:'warn', txt:'In Python, l’indentazione <strong>è</strong> sintassi, non stile. Gli spazi sotto un <code>if</code> o un <code>for</code> sono ciò che dice a Python "questo sta dentro." Circa la metà di tutti i bug dei principianti in questo modulo è un due punti mancante o un’indentazione errata — metti in conto del tempo apposta.'}
      ]},
      {t:'🔁 Condizioni: if / elif / else', cards:[
        {type:'text', h:'Cosa insegnare', b:'<code>if</code> esegue un blocco solo quando la sua condizione è <code>True</code>. <code>elif</code> ("else if") viene controllato <em>solo</em> se tutte le condizioni sopra di esso erano False. <code>else</code> è il caso finale quando nulla corrisponde. Python li controlla dall’alto in basso e si ferma alla prima corrispondenza — l’ordine conta.'},
        {type:'code', lbl:'branching', code:`score = <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"Your score: "</span>))
<span class="ck">if</span> score <span class="ck">&gt;=</span> <span class="cn">90</span>:
    <span class="cf">print</span>(<span class="cs">"Excellent!"</span>)
<span class="ck">elif</span> score <span class="ck">&gt;=</span> <span class="cn">50</span>:
    <span class="cf">print</span>(<span class="cs">"You passed"</span>)
<span class="ck">else</span>:
    <span class="cf">print</span>(<span class="cs">"Try again"</span>)`},
        {type:'text', h:'Operatori di confronto e logici', b:'I confronti restituiscono True/False: <code>==</code> (uguale), <code>!=</code> (diverso), <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>. Combinali con <code>and</code> (devono essere veri entrambi) e <code>or</code> (almeno uno vero): <code>if age &gt;= 6 and age &lt;= 12:</code>.'},
        {type:'tip', txt:'Una trappola frequente: ordinare male i rami <code>elif</code>. Se controlli <code>score &gt;= 50</code> prima di <code>score &gt;= 90</code>, un 95 corrisponde per primo a "passed" e non raggiunge mai "Excellent." Insegna agli studenti a ordinare le condizioni dalla più specifica alla meno.'}
      ]},
      {t:'➰ cicli for e range()', cards:[
        {type:'text', h:'Cosa insegnare', b:'Un ciclo <code>for</code> ripete un numero noto di volte. <code>range(n)</code> produce i numeri <strong>da 0 fino a n escluso</strong> — quindi <code>range(5)</code> dà 0,1,2,3,4 (cinque numeri, a partire da zero). <code>range(1, 6)</code> dà 1–5, e <code>range(0, 10, 2)</code> conta a passi di 2.'},
        {type:'code', lbl:'for + range', code:`<span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">5</span>):
    <span class="cf">print</span>(<span class="cs">"Step"</span>, i)        <span class="cc"># 0,1,2,3,4</span>

<span class="ck">for</span> n <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">5</span>, <span class="cn">0</span>, <span class="ck">-</span><span class="cn">1</span>):
    <span class="cf">print</span>(<span class="cs">"Countdown:"</span>, n) <span class="cc"># 5,4,3,2,1</span>`},
        {type:'warn', txt:'La confusione dell’off-by-one è universale: gli studenti si aspettano che <code>range(5)</code> stampi 1–5. Mostralo una volta, lentamente, e scrivi i numeri prodotti alla lavagna: 0,1,2,3,4. "Parte da zero, si ferma <em>prima</em> del numero."'}
      ]},
      {t:'🔄 cicli while', cards:[
        {type:'text', h:'Cosa insegnare', b:'Un ciclo <code>while</code> ripete <em>finché</em> la sua condizione resta True — usalo quando non conosci il numero di ripetizioni in anticipo ("continua a chiedere finché la password è corretta"). Qualcosa all’interno del ciclo <strong>deve prima o poi rendere la condizione False</strong>, altrimenti gira all’infinito.'},
        {type:'code', lbl:'while + a stop condition', code:`lives = <span class="cn">3</span>
<span class="ck">while</span> lives <span class="ck">&gt;</span> <span class="cn">0</span>:
    <span class="cf">print</span>(<span class="cs">"Lives:"</span>, lives)
    lives <span class="ck">-=</span> <span class="cn">1</span>      <span class="cc"># questo è ciò che termina il ciclo</span>
<span class="cf">print</span>(<span class="cs">"Game over"</span>)`},
        {type:'warn', txt:'Il ciclo infinito è il bug tipico del <code>while</code>. Se dimentichi <code>lives -= 1</code>, il programma si blocca per sempre. Insegna agli studenti a chiedersi <strong>prima</strong> di scrivere il corpo: "quale riga qui dentro fa sì che questo ciclo prima o poi si fermi?"'}
      ]},
      {t:'🪆 Annidamento', cards:[
        {type:'text', h:'Cosa insegnare', b:'Condizioni e cicli possono stare uno dentro l’altro. Un ciclo con un <code>if</code> dentro ti permette di agire in modo diverso a ogni passaggio; un ciclo dentro un ciclo gestisce griglie e tabelle. Ogni livello di annidamento è un altro livello di indentazione — mantenere le indentazioni ordinate è ciò che rende leggibile il codice annidato.'},
        {type:'code', lbl:'a loop with a decision inside', code:`<span class="ck">for</span> n <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">1</span>, <span class="cn">6</span>):
    <span class="ck">if</span> n <span class="ck">%</span> <span class="cn">2</span> == <span class="cn">0</span>:
        <span class="cf">print</span>(n, <span class="cs">"is even"</span>)
    <span class="ck">else</span>:
        <span class="cf">print</span>(n, <span class="cs">"is odd"</span>)`}
      ]},
      {t:'🧒 Le idee sbagliate che incontrerai', cards:[
        {type:'twocol', left:{h:'Cosa sbagliano i principianti', items:['<code>=</code> invece di <code>==</code> in una condizione','Dimenticare i due punti <code>:</code>','Indentazione incoerente / mancante','<code>range(5)</code> "dovrebbe" essere 1–5','Cicli <code>while</code> infiniti','Mettere codice dopo il ciclo, ma indentato dentro di esso']}, right:{h:'Le tue mosse preventive', items:['"un = memorizza, due == chiedono"','Rendi i due punti un riflesso','Sempre 4 spazi; mostra il blocco visivamente','Scrivi i numeri: 0,1,2,3,4','"Cosa fa fermare questo ciclo?"','"Indentato dentro = dentro; allineato = dopo"']}},
        {type:'tip', txt:'Quando un ciclo si comporta male, seguilo a mano su una lavagna: scrivi i = 0, poi 1, poi 2, e cosa stampa ogni volta. "Srotolare" il ciclo elimina la magia ed è la migliore abitudine di debug che puoi mostrare.'}
      ]},
      {t:'🎯 Come insegnarlo', cards:[
        {type:'hi', h:'for vs while — dai loro una frase', b:'"Usa <strong>for</strong> quando sai quante volte (fai questo 10 volte). Usa <strong>while</strong> quando ripeti finché non succede qualcosa (continua finché non indovinano)." Questa singola regola risolve quasi ogni domanda "quale ciclo?".'},
        {type:'good', txt:'Un gioco di indovina-il-numero è il progetto conclusivo perfetto qui: un ciclo <code>while</code>, un <code>if/elif/else</code> per "troppo alto / troppo basso / corretto" e l’<code>input()</code> del modulo 1. Sembra un vero gioco ed esercita tutto in una volta.'}
      ]}
    ],
    quiz:[
      {q:'L’istruzione if di uno studente esegue sempre il primo ramo indipendentemente dall’input. Cosa controlli per primo e perché?', opts:['Se ha scritto = invece di == — = assegna, == confronta','Se Python va reinstallato','Se ha abbastanza rami elif','Se il file è stato salvato'], c:0, fb:'Un singolo = assegna un valore (sempre vero qui); == è il confronto. "Un = memorizza, due == chiedono."'},
      {q:'Qual è la migliore regola in una frase per scegliere tra for e while?', opts:['for quando conosci il numero di ripetizioni; while quando ripeti finché una condizione cambia','Preferisci sempre while; for è obsoleto','for è per i numeri, while è per il testo','Sono intercambiabili in ogni caso'], c:0, fb:'Numero noto → for. Ripeti-finché-succede-qualcosa → while.'},
      {q:'Il programma di un bambino si blocca e non finisce mai. Cosa gli insegni a cercare?', opts:['La riga dentro il ciclo while che dovrebbe prima o poi rendere la sua condizione False','Un’istruzione print mancante','Troppi commenti che lo rallentano','Un errore di battitura dentro una stringa'], c:0, fb:'Un programma bloccato di solito è un ciclo while infinito la cui variabile di controllo non cambia mai.'},
      {q:'Cosa produce range(5), e quale idea sbagliata devi prevenire?', opts:['0,1,2,3,4 — gli studenti si aspettano 1–5, quindi "parte da zero, si ferma prima del numero"','1,2,3,4,5 — conta in modo naturale','Solo il numero 5','Un numero casuale sotto il 5'], c:0, fb:'range(5) parte da zero e si ferma prima del 5. Scrivere i numeri previene l’errore di off-by-one.'},
      {q:'Perché l’ORDINE dei rami elif conta in if score >= 50 ... elif score >= 90?', opts:['Python si ferma alla prima condizione vera, quindi un 95 corrisponderebbe erroneamente prima a >= 50','I rami elif vengono eseguiti in ordine casuale','I rami successivi hanno la precedenza su quelli precedenti','L’ordine non conta mai nelle condizioni'], c:0, fb:'Le condizioni vengono controllate dall’alto in basso e si fermano alla prima corrispondenza — ordina dalla più specifica alla meno.'},
      {q:'Un blocco annidato "dopo" un ciclo viene eseguito per errore al suo interno. Qual è la causa di fondo e il punto didattico?', opts:['L’indentazione: le righe indentate sono dentro il ciclo; riallineandole vanno dopo di esso','I due punti erano posizionati male','range() è stato usato male','Al posto di while andava usato for'], c:0, fb:'L’indentazione definisce i blocchi in Python. "Indentato dentro = dentro; riallineato = dopo."'}
    ]
  },
  {
    id:3, emoji:'📦', color:'#2B8EF0',
    title:'Dati: liste, dizionari e random',
    desc:'Memorizzare molti valori: creazione di liste e metodi, indicizzazione, dizionari (chiave→valore) e il modulo random.',
    obj:'Porta gli studenti dalle singole variabili alle collezioni. Dovresti essere in grado di insegnare l’indicizzazione da zero senza confusione, di scegliere lista o dizionario in base al modello di accesso, di dimostrare i metodi principali delle liste e di usare random per dare vita ai programmi.',
    sections:[
      {t:'🗺️ Dove si colloca nel corso', cards:[
        {type:'text', h:'Da un valore a molti', b:'Una variabile contiene una cosa sola; i programmi reali hanno bisogno di collezioni. Questo modulo introduce le <strong>liste</strong> (ordinate, accessibili per posizione) e i <strong>dizionari</strong> (accessibili tramite una chiave/nome), più il modulo <strong>random</strong> per il caso. Queste strutture sono ovunque nei moduli sui giochi più avanti — liste di nemici, tabelle dei punteggi, inventari, mappe a caselle — quindi una solida comprensione qui ripaga più volte.'},
        {type:'tip', txt:'La decisione principale che stai insegnando: "trovo questo in base alla sua <em>posizione</em> o al suo <em>nome</em>?" Posizione → lista. Nome → dizionario. Imposta ogni esempio attorno a questa domanda.'}
      ]},
      {t:'📋 Liste e indicizzazione', cards:[
        {type:'text', h:'Cosa insegnare', b:'Una lista contiene molti valori in ordine, scritti tra parentesi quadre. Leggi un elemento tramite il suo <strong>indice</strong>, e gli indici partono da <strong>0</strong> — il primo elemento è <code>pets[0]</code>, il secondo è <code>pets[1]</code>. <code>len(pets)</code> dà il conteggio, quindi l’ultimo elemento è <code>pets[len(pets)-1]</code>.'},
        {type:'code', lbl:'lists & indexing', code:`pets = [<span class="cs">"cat"</span>, <span class="cs">"dog"</span>, <span class="cs">"fish"</span>]
<span class="cf">print</span>(pets[<span class="cn">0</span>])      <span class="cc"># cat (il PRIMO elemento)</span>
<span class="cf">print</span>(pets[<span class="cn">2</span>])      <span class="cc"># fish</span>
<span class="cf">print</span>(<span class="cf">len</span>(pets))   <span class="cc"># 3</span>

<span class="ck">for</span> pet <span class="ck">in</span> pets:    <span class="cc"># scorri ogni elemento</span>
    <span class="cf">print</span>(pet)`},
        {type:'warn', txt:'L’indicizzazione da zero è un vero ostacolo concettuale. Ripeti "<strong>il primo elemento è l’elemento zero</strong>", e mostra che <code>pets[3]</code> su una lista di 3 elementi provoca <code>IndexError: list index out of range</code> — perché gli indici validi sono 0, 1, 2.'}
      ]},
      {t:'🛠️ Metodi delle liste', cards:[
        {type:'text', h:'Cosa insegnare', b:'Le liste possono cambiare. I metodi principali: <code>append(x)</code> aggiunge in fondo, <code>insert(i, x)</code> aggiunge in una posizione, <code>remove(x)</code> elimina il primo valore corrispondente, <code>pop(i)</code> rimuove e restituisce l’elemento all’indice i, e <code>clear()</code> svuota la lista.'},
        {type:'code', lbl:'mutating a list', code:`pets = [<span class="cs">"cat"</span>, <span class="cs">"dog"</span>]
pets.<span class="cf">append</span>(<span class="cs">"fish"</span>)    <span class="cc"># ["cat","dog","fish"]</span>
pets.<span class="cf">insert</span>(<span class="cn">0</span>, <span class="cs">"bird"</span>) <span class="cc"># ["bird","cat","dog","fish"]</span>
pets.<span class="cf">remove</span>(<span class="cs">"dog"</span>)     <span class="cc"># ["bird","cat","fish"]</span>
last = pets.<span class="cf">pop</span>()        <span class="cc"># rimuove e restituisce "fish"</span>`},
        {type:'twocol', left:{h:'append vs insert vs remove', items:['<code>append</code>: aggiunge in fondo','<code>insert(i,x)</code>: aggiunge all’indice i','<code>remove(x)</code>: elimina per valore','<code>pop(i)</code>: elimina per indice, lo restituisce']}, right:{h:'Confusioni comuni', items:['<code>remove</code> prende un valore, non un indice','<code>pop</code> prende un indice, non un valore','<code>remove</code> elimina solo la PRIMA corrispondenza','<code>append</code> prende esattamente un argomento']}}
      ]},
      {t:'🗂️ Dizionari', cards:[
        {type:'text', h:'Cosa insegnare', b:'Un dizionario memorizza coppie <strong>chiave → valore</strong> tra parentesi graffe. Invece di una posizione numerica, cerchi le cose tramite una chiave significativa: <code>scores["Ann"]</code> significa "dammi il valore memorizzato sotto Ann." Puoi aggiungere o aggiornare con <code>scores["Leo"] = 12</code>.'},
        {type:'code', lbl:'dictionaries', code:`scores = {<span class="cs">"Ann"</span>: <span class="cn">15</span>, <span class="cs">"Leo"</span>: <span class="cn">9</span>}
<span class="cf">print</span>(scores[<span class="cs">"Ann"</span>])   <span class="cc"># 15 — cerca per chiave</span>
scores[<span class="cs">"Mia"</span>] = <span class="cn">20</span>      <span class="cc"># aggiunge una nuova coppia</span>
scores[<span class="cs">"Leo"</span>] = <span class="cn">11</span>      <span class="cc"># aggiorna quella esistente</span>`},
        {type:'warn', txt:'Gli studenti confondono la chiave con il valore, e la direzione conta: <code>scores["Ann"]</code> chiede "qual è il punteggio di Ann?", non chiede "Ann è 15?". Inoltre, cercare una chiave che non esiste provoca un <code>KeyError</code> — un errore utile e didattico.'}
      ]},
      {t:'🎲 Il modulo random', cards:[
        {type:'text', h:'Cosa insegnare', b:'Importare <code>random</code> sblocca il caso. <code>random.randint(1, 6)</code> dà un numero intero da 1 a 6 (entrambi gli estremi inclusi), e <code>random.choice(my_list)</code> sceglie un elemento a caso da una lista. Questa è la scintilla dietro dadi, quiz e comportamento dei nemici più avanti.'},
        {type:'code', lbl:'random', code:`<span class="ck">import</span> random

dice = random.<span class="cf">randint</span>(<span class="cn">1</span>, <span class="cn">6</span>)
<span class="cf">print</span>(<span class="cs">"You rolled"</span>, dice)

pets = [<span class="cs">"cat"</span>, <span class="cs">"dog"</span>, <span class="cs">"fish"</span>]
<span class="cf">print</span>(random.<span class="cf">choice</span>(pets))`},
        {type:'warn', txt:'Dimenticare <code>import random</code> dà <code>NameError: name ‘random’ is not defined</code>. Le importazioni vanno una sola volta, all’inizio del file. Nota che <code>randint</code> include entrambi gli estremi — a differenza di <code>range</code>, che esclude quello superiore.'}
      ]},
      {t:'🎯 Come insegnarlo', cards:[
        {type:'hi', h:'Due metafore che colpiscono', b:'Una lista è "uno <strong>scaffale numerato</strong> — slot 0, slot 1, slot 2." Un dizionario è "una <strong>rubrica</strong> — cerchi un nome e ottieni un numero." Queste corrispondono esattamente a indice-vs-chiave e risolvono all’istante la maggior parte delle domande "quale dei due?".'},
        {type:'good', txt:'Il gioco di indovina-il-numero riceve qui un perfezionamento perfetto: <code>random.randint</code> sceglie il numero segreto, una lista memorizza i tentativi passati. Combinare random + liste + i cicli del modulo 2 mostra agli studenti come i concetti si compongono in qualcosa di davvero divertente.'}
      ]}
    ],
    quiz:[
      {q:'Uno studente scrive pets[1] aspettandosi il primo animale ma ottiene il secondo. Cosa insegni, e quale errore dimostra il punto?', opts:['L’indicizzazione parte da 0, quindi pets[0] è il primo; pets[3] su una lista di 3 elementi provoca IndexError','Le liste sono inaffidabili e andrebbero evitate','Devono convertire la lista in un dizionario','Aggiungere 1 a ogni indice d’ora in poi'], c:0, fb:'Indicizzazione da zero: il primo elemento è l’indice 0, gli indici validi sono 0..len-1, e andare oltre provoca IndexError.'},
      {q:'Quando uno studente dovrebbe ricorrere a un dizionario invece che a una lista?', opts:['Quando accede ai valori tramite un nome/chiave significativo anziché per posizione','Ogni volta che l’ordine degli elementi conta di più','Ogni volta che ci sono più di dieci elementi','I dizionari sono sempre la scelta migliore'], c:0, fb:'Le liste si accedono per posizione; i dizionari associano chiavi a valori — ideali per ricerche nome→punteggio.'},
      {q:'Qual è la differenza tra list.remove() e list.pop()?', opts:['remove(valore) elimina per valore; pop(indice) elimina per posizione e restituisce l’elemento','Sono identici','remove prende un indice; pop prende un valore','pop svuota l’intera lista'], c:0, fb:'remove funziona per valore (prima corrispondenza); pop funziona per indice e restituisce l’elemento rimosso.'},
      {q:'Un gioco che usa random.randint dà errore con "random is not defined". Qual è la soluzione e la regola?', opts:['Aggiungere import random all’inizio — le importazioni avvengono una sola volta, prima dell’uso','Rinominare la variabile del dado','Usare una lista invece di random','Reinstallare Python'], c:0, fb:'Il modulo random deve essere importato (una volta, all’inizio) prima di usare qualsiasi sua funzione.'},
      {q:'Qual è la metafora concreta più efficace per un dizionario quando si insegna ai bambini?', opts:['Una rubrica: cerchi un nome, ottieni un numero','Uno scaffale numerato con slot 0,1,2','Un conto alla rovescia','Una singola scatola etichettata'], c:0, fb:'Il modello della rubrica cattura la ricerca chiave→valore; il modello dello scaffale numerato è per le liste.'},
      {q:'In cosa differisce random.randint(1, 6) da range(1, 6), e perché menzionarlo?', opts:['randint INCLUDE il 6; range si ferma PRIMA del 6 — gli studenti confondono i due limiti','Sono identici','randint esclude entrambi gli estremi','range include entrambi gli estremi'], c:0, fb:'randint(1,6) può restituire 6; range(1,6) produce 1–5. Evidenziare la differenza dei limiti previene i bug.'}
    ]
  },
  {
    id:4, emoji:'⚙️', color:'#7C5CFC',
    title:'Funzioni',
    desc:'def, parametri e argomenti, return vs print, e perché le funzioni tengono in ordine i programmi grandi.',
    obj:'Insegna agli studenti a impacchettare il codice in funzioni riutilizzabili. Dovresti essere in grado di rendere cristalline le distinzioni definire-vs-chiamare e print-vs-return, di spiegare i parametri con una metafora e di motivare le funzioni facendo prima provare agli studenti il fastidio della duplicazione.',
    sections:[
      {t:'🗺️ Dove si colloca nel corso', cards:[
        {type:'text', h:'Il primo assaggio di struttura', b:'Finora i programmi sono elenchi piatti di istruzioni. Le funzioni permettono agli studenti di <strong>dare un nome a un blocco di lavoro e riutilizzarlo</strong>. Questo è il ponte verso tutto ciò che segue: i disegni con Turtle chiamano funzioni, e PyGame Zero è costruito interamente su funzioni che scrivi tu (<code>draw</code>, <code>update</code>, <code>on_key_down</code>). Uno studente incerto sulle funzioni farà fatica nel momento in cui iniziano i giochi — quindi questo modulo è un vero e proprio filtro.'},
        {type:'tip', txt:'Le due idee che meritano vero spazio: <strong>definire vs chiamare</strong> (scrivere una funzione vs eseguirla) e <strong>print vs return</strong> (mostrare un valore vs restituirlo). Quasi ogni bug sulle funzioni che un principiante incontra è uno di questi due.'}
      ]},
      {t:'✏️ def — definire e chiamare', cards:[
        {type:'text', h:'Cosa insegnare', b:'<code>def name():</code> <em>definisce</em> una funzione — scrive la ricetta ma non esegue ancora nulla. Il codice viene eseguito solo quando la <strong>chiami</strong> scrivendo il suo nome con le parentesi: <code>greet()</code>. Puoi definire una volta e chiamare tutte le volte che vuoi.'},
        {type:'code', lbl:'define once, call many times', code:`<span class="ck">def</span> <span class="cf">greet</span>():
    <span class="cf">print</span>(<span class="cs">"Hello!"</span>)
    <span class="cf">print</span>(<span class="cs">"Welcome to the lesson."</span>)

<span class="cf">greet</span>()   <span class="cc"># ora viene eseguita</span>
<span class="cf">greet</span>()   <span class="cc"># e di nuovo</span>`},
        {type:'warn', txt:'Il classico bug "non è successo niente": lo studente definisce una funzione ma non la chiama mai. Insegna la frase "<strong>definire = scrivere la ricetta; chiamare = cucinarla</strong>." Una ricetta in un libro non cucina nessuna cena finché qualcuno non la segue.'}
      ]},
      {t:'📥 Parametri e argomenti', cards:[
        {type:'text', h:'Cosa insegnare', b:'I parametri permettono a una funzione di ricevere input così da comportarsi in modo diverso a ogni chiamata. Il nome nella definizione (<code>name</code>) è il <strong>parametro</strong>; il valore effettivo che passi (<code>"Mia"</code>) è l’<strong>argomento</strong>. Vengono abbinati da sinistra a destra, quindi il numero deve corrispondere.'},
        {type:'code', lbl:'passing information in', code:`<span class="ck">def</span> <span class="cf">greet</span>(name):
    <span class="cf">print</span>(<span class="cs">"Hello,"</span>, name)

<span class="cf">greet</span>(<span class="cs">"Mia"</span>)    <span class="cc"># Hello, Mia</span>
<span class="cf">greet</span>(<span class="cs">"Sam"</span>)    <span class="cc"># Hello, Sam</span>

<span class="ck">def</span> <span class="cf">add</span>(a, b):
    <span class="cf">print</span>(a <span class="ck">+</span> b)
<span class="cf">add</span>(<span class="cn">3</span>, <span class="cn">4</span>)        <span class="cc"># 7</span>`},
        {type:'warn', txt:'Passare il numero sbagliato di argomenti provoca <code>TypeError: greet() missing 1 required positional argument</code>. Leggetelo insieme — l’errore indica letteralmente cosa manca, il che è un ottimo esercizio di lettura degli errori.'}
      ]},
      {t:'↩️ return vs print — quella importante', cards:[
        {type:'text', h:'Cosa insegnare', b:'<code>print</code> <strong>mostra</strong> un valore sullo schermo per un umano. <code>return</code> <strong>restituisce un valore</strong> al programma così che il resto del codice possa usarlo. Una funzione che stampa ma non restituisce restituisce <code>None</code> — quindi non puoi fare calcoli con il suo risultato.'},
        {type:'code', lbl:'the difference made visible', code:`<span class="ck">def</span> <span class="cf">square_print</span>(n):
    <span class="cf">print</span>(n <span class="ck">*</span> n)        <span class="cc"># mostra soltanto</span>

<span class="ck">def</span> <span class="cf">square_return</span>(n):
    <span class="ck">return</span> n <span class="ck">*</span> n       <span class="cc"># restituisce il valore</span>

x = <span class="cf">square_print</span>(<span class="cn">5</span>)   <span class="cc"># stampa 25, ma x è None</span>
y = <span class="cf">square_return</span>(<span class="cn">5</span>)  <span class="cc"># y è 25, usabile nei calcoli</span>
<span class="cf">print</span>(y <span class="ck">+</span> <span class="cn">1</span>)         <span class="cc"># 26</span>`},
        {type:'hi', h:'Perché gli studenti devono sentirlo', b:'Mostra che <code>x = square_print(5)</code> lascia <code>x</code> come <code>None</code>, poi <code>x + 1</code> va in crash. Il crash è la lezione: "print parla a una persona; return parla al programma." Finché uno studente non sente questa differenza, le funzioni restano nebulose.'}
      ]},
      {t:'🍳 La metafora e la motivazione', cards:[
        {type:'hi', h:'La metafora della ricetta', b:'Una funzione è una <strong>ricetta</strong>. <code>def</code> scrive la ricetta; gli <strong>argomenti sono gli ingredienti</strong> che passi; <strong>chiamarla è cucinare</strong>; e <code>return</code> è il piatto finito che viene restituito. Print, invece, è solo urlare il risultato attraverso la cucina — nessuno può usarlo dopo.'},
        {type:'good', txt:'Motiva le funzioni infliggendo prima la duplicazione: fai scrivere allo studente lo stesso saluto di 4 righe tre volte, poi rifattorizzalo in un’unica <code>greet(name)</code>. Sentire la noia è ciò che fa scattare il "non ripetere te stesso" — non dargli la regola, lascia che se la guadagni.'},
        {type:'code', lbl:'before / after refactor', code:`<span class="cc"># prima: ripetuto 3 volte</span>
<span class="cf">print</span>(<span class="cs">"Hi Mia, ready to code?"</span>)
<span class="cf">print</span>(<span class="cs">"Hi Sam, ready to code?"</span>)

<span class="cc"># dopo: una funzione riutilizzabile</span>
<span class="ck">def</span> <span class="cf">welcome</span>(name):
    <span class="cf">print</span>(<span class="cs">"Hi"</span>, name <span class="ck">+</span> <span class="cs">", ready to code?"</span>)
<span class="cf">welcome</span>(<span class="cs">"Mia"</span>)
<span class="cf">welcome</span>(<span class="cs">"Sam"</span>)`}
      ]},
      {t:'🧒 Le idee sbagliate che incontrerai', cards:[
        {type:'twocol', left:{h:'Cosa sbagliano i principianti', items:['Definire una funzione ma non chiamarla mai','Confondere <code>print</code> con <code>return</code>','Numero sbagliato di argomenti','Aspettarsi un valore da una funzione che solo stampa','Indentare il corpo in modo incoerente']}, right:{h:'Le tue mosse preventive', items:['"Definire = ricetta; chiamare = cucinare"','Mostrali affiancati; crash su None','Leggete insieme il TypeError','"print parla alle persone, return al codice"','Tratta il corpo come qualsiasi blocco indentato']}}
      ]}
    ],
    quiz:[
      {q:'Uno studente definisce una funzione ma "non succede niente" quando esegue il file. Qual è la causa e la frase che insegni?', opts:['Non l’ha mai chiamata — "definire = scrivere la ricetta; chiamare = cucinarla"','Python va riavviato','Le funzioni devono sempre restituire un valore','def era scritto male'], c:0, fb:'Definire scrive solo la ricetta; la funzione deve essere chiamata per essere davvero eseguita.'},
      {q:'Qual è il modo più chiaro per distinguere print da return?', opts:['print mostra un valore a una persona; return restituisce un valore al programma','Fanno la stessa cosa','return è solo un print più veloce','print funziona solo fuori dalle funzioni'], c:0, fb:'return fornisce un valore utilizzabile al chiamante; print si limita a mostrare del testo sullo schermo.'},
      {q:'In def square(number): return number*number, cos’è esattamente "number"?', opts:['Un parametro — l’input che la funzione riceve quando viene chiamata','Una parola chiave predefinita di Python','Il valore che la funzione restituisce','Una variabile globale definita altrove'], c:0, fb:'number è il parametro; l’argomento è il valore effettivo passato, es. square(5).'},
      {q:'x = greet("Mia") dove greet solo stampa — qual è il valore di x, e perché vale la pena mostrarlo?', opts:['None — una funzione che solo stampa non restituisce nulla, quindi x+1 andrebbe in crash dimostrando che print ≠ return','"Mia"','Il testo che è stato stampato','Solleva subito un errore'], c:0, fb:'Una funzione senza return restituisce None. Il crash successivo è il modo più memorabile per insegnare print vs return.'},
      {q:'Qual è il modo più efficace per motivare PERCHÉ le funzioni sono utili?', opts:['Far ripetere agli studenti lo stesso codice più volte, poi rifattorizzarlo in un’unica funzione','Aprire con la definizione formale di funzione','Evitare esempi e spiegare la teoria','Usare solo le funzioni predefinite di Python'], c:0, fb:'Far provare agli studenti il fastidio della duplicazione fa scattare da sé il valore delle funzioni riutilizzabili.'},
      {q:'Una chiamata provoca "TypeError: greet() missing 1 required positional argument". Cosa significa e come lo usi didatticamente?', opts:['Il numero di argomenti non corrisponde ai parametri — leggete insieme l’errore come esercizio di debug','greet non è una vera funzione','Python ha esaurito la memoria','Il valore restituito è stato ignorato'], c:0, fb:'Gli argomenti devono corrispondere ai parametri; l’errore indica esattamente cosa manca, ideale per esercitarsi a leggere gli errori.'}
    ]
  },
  {
    id:5, emoji:'🐢', color:'#F59E0B',
    title:'Disegnare e introduzione a PyGame Zero',
    desc:'Il modulo Turtle, poi il salto nella grafica: Actor, la finestra, draw() e update(), e il game loop.',
    obj:'Guida il salto dai programmi testuali alla grafica. Dovresti essere in grado di spiegare il game loop (il modello del flipbook), perché il framework chiama le tue funzioni, la differenza tra draw() e update() e le insidie di asset e naming che silenziosamente bloccano gli sprite.',
    sections:[
      {t:'🗺️ Dove si colloca nel corso', cards:[
        {type:'text', h:'Il picco di motivazione', b:'Questo è il modulo in cui la programmazione diventa <em>visiva</em>, e per molti bambini è il momento in cui se ne innamorano. Gli studenti disegnano con <strong>Turtle</strong> (una gratificante ricompensa per funzioni e cicli), poi incontrano <strong>PyGame Zero</strong> — il framework di gioco dietro "Le avventure di Coddy". Tutto nei restanti moduli sui giochi si basa direttamente sui concetti introdotti qui.'},
        {type:'warn', txt:'Qui c’è un vero salto concettuale: da un programma che scorre dall’alto in basso <em>una volta</em>, a un <strong>game loop</strong> che ridisegna molte volte al secondo. Nomina questo cambiamento ad alta voce — gli studenti che non lo notano trovano i giochi sconcertanti.'}
      ]},
      {t:'🐢 Turtle — disegnare con il codice', cards:[
        {type:'text', h:'Cosa insegnare', b:'Turtle muove una "penna" sullo schermo: <code>forward(100)</code>, <code>right(90)</code>, <code>left(45)</code>. La magia è che disegnare una forma è solo un ciclo, e racchiudere quel ciclo in una funzione crea uno strumento riutilizzabile. È la dimostrazione più chiara possibile del perché i due moduli precedenti contavano.'},
        {type:'code', lbl:'a function that draws (loops + functions!)', code:`<span class="ck">import</span> turtle

<span class="ck">def</span> <span class="cf">draw_square</span>(side):
    <span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">4</span>):
        turtle.<span class="cf">forward</span>(side)
        turtle.<span class="cf">right</span>(<span class="cn">90</span>)

<span class="cf">draw_square</span>(<span class="cn">100</span>)
<span class="cf">draw_square</span>(<span class="cn">50</span>)   <span class="cc"># riutilizzo con una dimensione diversa</span>`},
        {type:'good', txt:'Turtle è l’"aha" perfetto: un quadrato è solo "avanti, gira, quattro volte." Lascia che gli studenti cambino l’angolo a 120 e il conteggio a 3 per ottenere un triangolo — scoprire da soli il legame tra l’angolo di rotazione e la forma è molto più forte che sentirselo dire.'}
      ]},
      {t:'🎮 PyGame Zero — la configurazione', cards:[
        {type:'text', h:'Cosa insegnare', b:'Un programma PyGame Zero inizia con <code>#pgzero</code> (oppure viene eseguito con <code>pgzrun</code>). Imposti la finestra con <code>WIDTH</code> e <code>HEIGHT</code>, poi crei gli sprite come <strong>Actor</strong>. Un <code>Actor("coddy")</code> carica automaticamente <code>images/coddy.png</code> — il nome è il nome del file, minuscolo, senza estensione. Posizionalo con <code>.pos</code>, <code>.x</code>, <code>.y</code>.'},
        {type:'code', lbl:'window + actor', code:`<span class="cc">#pgzero</span>
WIDTH = <span class="cn">600</span>
HEIGHT = <span class="cn">400</span>

coddy = <span class="cf">Actor</span>(<span class="cs">"coddy"</span>)   <span class="cc"># carica images/coddy.png</span>
coddy.pos = <span class="cn">300</span>, <span class="cn">200</span>      <span class="cc"># centro della finestra</span>`},
        {type:'warn', txt:'Il killer silenzioso: il nome del file dell’immagine deve corrispondere esattamente al nome dell’Actor — minuscolo, ortografia corretta, senza <code>.png</code> nel codice, e il file deve trovarsi in una cartella <code>images</code>. Una mancata corrispondenza fallisce senza indizi evidenti, quindi è la primissima cosa da controllare quando "lo sprite non appare".'}
      ]},
      {t:'🔁 draw(), update() e il game loop', cards:[
        {type:'text', h:'Cosa insegnare', b:'Scrivi due funzioni speciali e PyGame Zero <strong>le chiama per te, automaticamente, ~60 volte al secondo</strong>. <code>draw()</code> dipinge il fotogramma attuale; <code>update()</code> cambia le cose per il fotogramma successivo (posizioni, punteggi, logica). Lo studente non chiama mai queste funzioni — questa è la parte nuova e sorprendente.'},
        {type:'code', lbl:'the loop in action', code:`<span class="ck">def</span> <span class="cf">draw</span>():
    screen.<span class="cf">clear</span>()    <span class="cc"># cancella il fotogramma precedente</span>
    coddy.<span class="cf">draw</span>()      <span class="cc"># dipinge lo sprite</span>

<span class="ck">def</span> <span class="cf">update</span>():
    coddy.x <span class="ck">+=</span> <span class="cn">1</span>     <span class="cc"># un piccolo cambiamento a ogni fotogramma = movimento</span>`},
        {type:'hi', h:'Il modello del flipbook', b:'Un gioco è un flipbook. <code>update()</code> decide cosa cambia nella pagina successiva; <code>draw()</code> dipinge quella pagina; PyGame Zero sfoglia le pagine 60 volte al secondo. Ecco perché il movimento ha bisogno di un <em>piccolo</em> cambiamento a ogni fotogramma (<code>x += 1</code>) — non un grande salto. Spiega anche perché devi usare <code>screen.clear()</code>: senza cancellare la pagina, ogni fotogramma si sovrappone al precedente.'}
      ]},
      {t:'🧒 Le idee sbagliate che incontrerai', cards:[
        {type:'twocol', left:{h:'Cosa sbagliano i principianti', items:['Chiamare draw()/update() da soli','Il nome dell’immagine non corrisponde al file','Dimenticare <code>screen.clear()</code> → sbavature','Mettere la logica di gioco fuori da update()','Un grande salto invece di piccoli passi','Confondere draw (mostra) con update (cambia)']}, right:{h:'Le tue mosse preventive', items:['"È il framework a chiamarle, non tu"','Nomi: minuscoli, senza estensione, images/','Cancella la pagina a ogni fotogramma','La logica ripetuta sta in update()','"Piccolo cambiamento a ogni fotogramma = movimento fluido"','"draw = dipinge, update = pensa"']}},
        {type:'warn', txt:'"Il framework chiama le tue funzioni" è un’idea del tutto nuova (inversione del controllo). Non avere fretta. Contrastala esplicitamente con tutto ciò che c’era prima: "finora il tuo codice eseguiva le tue righe. Ora scrivi funzioni e il motore di gioco le esegue per te."'}
      ]},
      {t:'🎯 Come insegnarlo', cards:[
        {type:'good', txt:'Festeggia rumorosamente il primo sprite in movimento — è un traguardo autentico e un punto emotivo alto di tutto il corso. Poi lascia subito che modifichino la velocità (<code>x += 5</code>) e la direzione. È la sperimentazione, non la spiegazione, a consolidare il game loop.'},
        {type:'tip', txt:'Se uno studente è sopraffatto, riduci al più piccolo programma eseguibile: una finestra, un Actor, un <code>update()</code> vuoto. Aggiungi una riga alla volta. I giochi sembrano enormi; costruirli una riga che cambia un fotogramma alla volta li mantiene apprendibili.'}
      ]}
    ],
    quiz:[
      {q:'In PyGame Zero, chi chiama draw() e update(), e perché è importante dal punto di vista didattico?', opts:['Il framework le chiama ~60 volte al secondo automaticamente — una nuova idea di "inversione del controllo" da insegnare con calma','Lo studente le chiama manualmente a ogni fotogramma','Il sistema operativo le chiama una volta all’avvio','Vengono eseguite solo se inserite in un ciclo while'], c:0, fb:'PyGame Zero esegue le tue draw()/update() per te a ogni fotogramma — gli studenti NON devono chiamarle, ed è una cosa davvero nuova.'},
      {q:'Qual è il modo più chiaro per spiegare draw() vs update() a un bambino?', opts:['update() decide cosa cambia per il fotogramma successivo; draw() dipinge il fotogramma ("pensare vs dipingere")','Sono identiche','draw() viene eseguita una volta, update() non viene mai eseguita','update() gestisce solo il suono'], c:0, fb:'"update = pensa/cambia, draw = dipinge" corrisponde direttamente al game loop.'},
      {q:'Uno sprite non appare e non c’è alcun errore evidente. Cosa controlli per primo?', opts:['Che il nome del file dell’immagine corrisponda esattamente al nome dell’Actor (minuscolo, senza estensione, in images/)','La quantità di RAM disponibile','Se Python è a 32 o 64 bit','La luminosità del monitor'], c:0, fb:'Actor("coddy") ha bisogno di images/coddy.png con una corrispondenza esatta del nome — il fallimento silenzioso più comune.'},
      {q:'Perché coddy.x += 1 dentro update() crea un movimento fluido anziché un teletrasporto?', opts:['update() viene eseguita a ogni fotogramma, quindi un piccolo cambiamento si accumula ~60 volte al secondo in un movimento fluido','Si teletrasporta una volta e si ferma','Funziona solo dentro un ciclo while','Ridimensiona la finestra'], c:0, fb:'Il movimento è un piccolo cambiamento applicato a ogni fotogramma dal game loop — il modello del flipbook.'},
      {q:'Lo sprite di uno studente lascia una scia di sbavature sullo schermo. Cosa manca e perché?', opts:['screen.clear() all’inizio di draw() — senza cancellare, ogni fotogramma dipinge sopra il precedente','Un’istruzione import','Un secondo Actor','Un computer più veloce'], c:0, fb:'Ogni fotogramma deve cancellare il precedente; altrimenti le vecchie posizioni restano dipinte, creando una sbavatura.'},
      {q:'Perché disegnare un quadrato con Turtle è una lezione efficace proprio prima dei giochi?', opts:['Riutilizza funzioni + cicli insieme, dimostrando che i moduli precedenti ripagano, e introduce con delicatezza al "il codice crea immagini"','Insegna i dizionari','Introduce la gestione dei file','Dimostra la ricorsione'], c:0, fb:'draw_square è una funzione che racchiude un ciclo — una gratificante ricompensa e una dolce rampa d’accesso alla grafica.'}
    ]
  },
  {
    id:6, emoji:'🎮', color:'#10B981',
    title:'Sviluppo di giochi con PyGame Zero',
    desc:'Input da tastiera e mouse, animazione degli sprite, rilevamento delle collisioni e punteggio di gioco.',
    obj:'Insegna il cuore interattivo della creazione di giochi: rispondere a tastiera e mouse, animare gli sprite e rilevare le collisioni. Dovresti essere in grado di spiegare global in modo pulito, di distinguere collidepoint da colliderect e di modellare l’iterazione rapida come un’abitudine di tutoraggio.',
    sections:[
      {t:'🗺️ Dove si colloca nel corso', cards:[
        {type:'text', h:'Giochi che rispondono al giocatore', b:'Il modulo 5 ha messo uno sprite sullo schermo e lo ha mosso da solo. Ora il gioco <strong>reagisce al giocatore</strong>: movimento da tastiera, clic del mouse, animazione e — la cosa importante — collisioni che guidano punteggio, danni e raccolte. I progetti qui includono Le avventure di Coddy, un gioco in stile Minecraft, uno sparatutto spaziale e "Clicker Heroes."'},
        {type:'tip', txt:'Il rilevamento delle collisioni è il concetto che trasforma "un’immagine in movimento" in "un gioco." Metti in conto tempo extra — è concettualmente più ricco di quanto sembri e sblocca punteggio, combattimento e raccolta tutti in una volta.'}
      ]},
      {t:'⌨️ Input da tastiera', cards:[
        {type:'text', h:'Due stili da insegnare', b:'<strong>Continuo</strong>: dentro <code>update()</code>, controlla <code>keyboard.right</code>, <code>keyboard.left</code>, ecc. — vero mentre il tasto è premuto, perfetto per un movimento fluido. <strong>Singolo</strong>: il framework chiama <code>on_key_down(key)</code> una volta per pressione, ideale per saltare o sparare. Cambiare l’immagine dello sprite durante il movimento dà al giocatore un feedback direzionale.'},
        {type:'code', lbl:'continuous movement', code:`<span class="ck">def</span> <span class="cf">update</span>():
    <span class="ck">if</span> keyboard.right:
        coddy.x <span class="ck">+=</span> <span class="cn">5</span>
        coddy.image = <span class="cs">"coddy_right"</span>
    <span class="ck">elif</span> keyboard.left:
        coddy.x <span class="ck">-=</span> <span class="cn">5</span>
        coddy.image = <span class="cs">"coddy_left"</span>`},
        {type:'tip', txt:'Usa il controllo del tasto premuto in <code>update()</code> per il movimento e l’evento <code>on_key_down</code> per le azioni. Confonderli — es. tentare un movimento fluido in <code>on_key_down</code> — produce un movimento a scatti, un passo per pressione. Abbina lo strumento alla sensazione che vuoi.'}
      ]},
      {t:'🖱️ Input da mouse', cards:[
        {type:'text', h:'Cosa insegnare', b:'Il framework chiama <code>on_mouse_down(pos)</code> quando il giocatore clicca, passandoti la posizione del clic come <code>pos</code>. La domanda tipica è "ha cliccato su questo oggetto?" — a cui si risponde con <code>actor.collidepoint(pos)</code>. Questo alimenta i giochi clicker e le meccaniche "spara al nemico".'},
        {type:'code', lbl:'click to score', code:`score = <span class="cn">0</span>

<span class="ck">def</span> <span class="cf">on_mouse_down</span>(pos):
    <span class="ck">global</span> score
    <span class="ck">if</span> enemy.<span class="cf">collidepoint</span>(pos):
        score <span class="ck">+=</span> <span class="cn">1</span>
        <span class="cf">animate</span>(enemy, tween=<span class="cs">"bounce_end"</span>, duration=<span class="cn">0.3</span>)`}
      ]},
      {t:'🌍 La parola chiave global', cards:[
        {type:'text', h:'Cosa insegnare', b:'Una funzione può <em>leggere</em> una variabile definita al suo esterno, ma per <strong>modificarne</strong> una deve prima dichiarare <code>global score</code>. Senza di essa, Python crea invece una nuova variabile locale e il punteggio reale non viene mai aggiornato — un fallimento confuso e senza errori.'},
        {type:'warn', txt:'Mantieni la spiegazione adatta all’età: "una funzione può guardare le variabili esterne, ma per <strong>modificarne</strong> una deve prima dire <code>global</code>." Resisti a una lezione completa sullo scope — quella profondità qui non serve e sopraffà i principianti. Solo la regola e un esempio funzionante.'}
      ]},
      {t:'💥 Rilevamento delle collisioni', cards:[
        {type:'text', h:'Cosa insegnare', b:'Ogni sprite ha un rettangolo invisibile intorno a sé. <code>a.colliderect(b)</code> chiede "questi due rettangoli si sovrappongono?" (sprite vs sprite — colpi, raccolte). <code>a.collidepoint(pos)</code> chiede "questo punto è dentro questo rettangolo?" (un clic o un singolo punto). Quella sola distinzione copre quasi tutte le interazioni dei giochi 2D.'},
        {type:'code', lbl:'sprite-vs-sprite collision', code:`<span class="ck">def</span> <span class="cf">update</span>():
    <span class="ck">if</span> player.<span class="cf">colliderect</span>(coin):
        <span class="ck">global</span> score
        score <span class="ck">+=</span> <span class="cn">1</span>
        coin.x = random.<span class="cf">randint</span>(<span class="cn">0</span>, WIDTH)  <span class="cc"># ricomparsa</span>`},
        {type:'hi', h:'Il modello mentale', b:'"Ogni oggetto vive dentro una scatola invisibile. Una collisione è semplicemente <em>due scatole che si sovrappongono</em>." Una volta che gli studenti hanno in mente questa immagine, colpi, raccolta di monete e clic del mouse diventano tutti la stessa semplice domanda, posta solo con <code>colliderect</code> (scatola vs scatola) o <code>collidepoint</code> (punto nella scatola).'}
      ]},
      {t:'🧒 Le idee sbagliate che incontrerai', cards:[
        {type:'twocol', left:{h:'Cosa sbagliano i principianti', items:['Cambiare score in una funzione senza <code>global</code>','Confondere <code>collidepoint</code> e <code>colliderect</code>','Movimento troppo veloce o troppo lento','Dimenticare di cambiare l’immagine dello sprite','Tentare un movimento fluido in <code>on_key_down</code>']}, right:{h:'Le tue mosse preventive', items:['"Per cambiare una variabile esterna, di’ global"','"point = un clic, rect = oggetto vs oggetto"','Regolate insieme il passo += / -=','Cambio immagine = direzione visibile','Tasto premuto in update(); eventi per le azioni']}}
      ]},
      {t:'🎯 Come insegnarlo', cards:[
        {type:'good', txt:'Mostra senza sosta l’iterazione rapida: cambia un numero, esegui, osserva, aggiusta. Lo sviluppo di giochi premia il "proviamoci e basta" molto più del pianificare tutto in anticipo, e mostrare quell’atteggiamento dà agli studenti il permesso di sperimentare invece di temere gli errori.'},
        {type:'tip', txt:'Quando una collisione "non funziona", fai debug in modo visivo: stampa temporaneamente il punteggio sullo schermo o stampa nella console dentro l’<code>if</code>. Vedere se il ramo viene eseguito o no separa "la collisione non è rilevata" da "il punteggio non si aggiorna" — due soluzioni molto diverse.'}
      ]}
    ],
    quiz:[
      {q:'Uno studente aumenta score dentro on_mouse_down ma non cambia mai, senza errori. Qual è la soluzione e la regola?', opts:['Dichiarare global score dentro la funzione — senza di essa Python crea una nuova variabile locale','Racchiudere l’aggiornamento di score in un ciclo while','Rinominare score con un nome univoco','Memorizzare score dentro l’Actor'], c:0, fb:'Per modificare una variabile a livello di modulo dentro una funzione, Python richiede la dichiarazione global; altrimenti crea silenziosamente una locale.'},
      {q:'Quale metodo rileva un clic del mouse che cade su uno sprite specifico?', opts:['collidepoint(pos) — controlla se un singolo punto è dentro la scatola dello sprite','colliderect(other_sprite)','keyboard.click','on_draw()'], c:0, fb:'collidepoint controlla un punto (il clic); colliderect controlla se due rettangoli si sovrappongono.'},
      {q:'Qual è il modello mentale più semplice e accurato per il rilevamento delle collisioni?', opts:['Ogni oggetto ha una scatola invisibile; una collisione è due scatole che si sovrappongono','Python indovina se le cose sembrano toccarsi','Gli sprite si respingono magneticamente','Confronta i colori dei pixel di ogni sprite'], c:0, fb:'La collisione basata sui rettangoli è letteralmente "questi due rettangoli si sovrappongono?" — il modello della scatola invisibile è esatto.'},
      {q:'Perché cambiare coddy.image in una variante sinistra/destra quando il personaggio si muove?', opts:['Feedback visivo — lo sprite guarda nella direzione in cui viaggia','È obbligatorio o il gioco va in crash','Rende il codice più veloce','Riduce l’uso della memoria'], c:0, fb:'Cambiare l’immagine dello sprite dà al giocatore un chiaro feedback direzionale; è una scelta di rifinitura/sensazione, non un requisito.'},
      {q:'Quando usare keyboard.right dentro update() rispetto a on_key_down(key)?', opts:['Controllo del tasto premuto in update() per un movimento fluido; on_key_down per azioni singole come salto/fuoco','Usa sempre on_key_down; update() non può leggere la tastiera','Sono intercambiabili','keyboard.right funziona solo in draw()'], c:0, fb:'Movimento continuo = controllo del tasto premuto in update(); azioni discrete = l’evento on_key_down. Confonderli dà una sensazione sbagliata.'},
      {q:'Una collisione "non funziona." Qual è la mossa di debug più efficace da insegnare?', opts:['Stampare dentro l’if (o mostrare il punteggio sullo schermo) per vedere se il ramo viene eseguito','Riscrivere l’intero gioco','Aggiungere altri sprite','Aumentare la dimensione della finestra'], c:0, fb:'Un rapido print separa "collisione non rilevata" da "punteggio non aggiornato" — due problemi diversi con soluzioni diverse.'}
    ]
  },
  {
    id:7, emoji:'🏆', color:'#EF4444',
    title:'Progetto conclusivo: creare e pubblicare un gioco',
    desc:'Mappe a griglia, nemici con attributi, collidelist, bonus, livelli, stati di vittoria/sconfitta, menu e pubblicazione.',
    obj:'Preparati a guidare gli studenti nel loro progetto finale. Il cambiamento di competenza qui è dall’insegnare funzionalità al gestire una realizzazione più grande — dimensionare in modo realistico, organizzare lo stato del gioco, gestire molti oggetti e accompagnare gli studenti fino a un gioco finito, pubblicato e presentato.',
    sections:[
      {t:'🗺️ Dove si colloca nel corso', cards:[
        {type:'text', h:'Tutto si unisce', b:'I moduli finali costruiscono un RPG completo ("WeCode and Dragons") e un progetto di diploma. Qui non c’è quasi <strong>nessuna nuova sintassi</strong> — invece, ogni concetto dei moduli 1–6 riappare tutto insieme all’interno di un programma più grande. Il tuo ruolo cambia di conseguenza: meno "ecco una nuova funzionalità", più "manteniamo questo progetto organizzato e portabile a termine".'},
        {type:'tip', txt:'Reinquadra il tuo stesso compito per questo modulo. Ora sei tanto un mentore di progetto quanto un insegnante di programmazione: aiuti gli studenti a dimensionare in modo sensato, a restare organizzati, a fare debug su una base di codice più grande e — cosa cruciale — a finire e pubblicare davvero.'}
      ]},
      {t:'🗺️ Mappe a griglia (liste di liste)', cards:[
        {type:'text', h:'Cosa insegnare', b:'I livelli di gioco vengono memorizzati come una <strong>griglia 2D</strong> — una lista di liste, dove ogni numero codifica un tipo di casella (0 = pavimento, 1 = muro, 2 = ossa, ecc.). I cicli annidati percorrono le righe e le colonne per disegnare ogni casella a <code>column * cell_width</code>, <code>row * cell_height</code>. Questa è la ricompensa per i cicli annidati del modulo 2.'},
        {type:'code', lbl:'a tile map', code:`my_map = [[<span class="cn">0</span>, <span class="cn">1</span>, <span class="cn">1</span>, <span class="cn">0</span>],
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
      {t:'👾 Molti nemici con attributi', cards:[
        {type:'text', h:'Cosa insegnare', b:'I nemici vengono generati in un ciclo e memorizzati in una lista, ognuno con i propri attributi (salute, attacco) impostati come proprietà sull’Actor. Per confrontare il giocatore con <em>tutti</em> loro in una volta, <code>collidelist(enemies)</code> restituisce l’indice del primo colpito, oppure <code>-1</code> se nessuno — molto più pulito di un ciclo manuale di controlli <code>colliderect</code>.'},
        {type:'code', lbl:'generate + collide with a list', code:`enemies = []
<span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">5</span>):
    e = <span class="cf">Actor</span>(<span class="cs">"enemy"</span>)
    e.health = random.<span class="cf">randint</span>(<span class="cn">10</span>, <span class="cn">20</span>)
    e.attack = random.<span class="cf">randint</span>(<span class="cn">5</span>, <span class="cn">10</span>)
    enemies.<span class="cf">append</span>(e)

idx = char.<span class="cf">collidelist</span>(enemies)
<span class="ck">if</span> idx <span class="ck">!=</span> <span class="ck">-</span><span class="cn">1</span>:               <span class="cc"># -1 significa "nessun colpo"</span>
    char.health <span class="ck">-=</span> enemies[idx].attack`},
        {type:'warn', txt:'Un bug subdolo da tenere d’occhio: rimuovere elementi da una lista <em>mentre la si scorre</em> salta degli elementi. Se gli studenti eliminano i nemici sconfitti a metà ciclo, alcuni vengono saltati. Insegna lo schema sicuro — raccogli cosa rimuovere, o scorri su una copia.'}
      ]},
      {t:'🚦 Stato del gioco e menu', cards:[
        {type:'text', h:'Cosa insegnare', b:'Un’unica variabile <code>mode</code> ("menu" / "game" / "end") funge da segnale che dice sia a <code>draw()</code> che a <code>update()</code> cosa fare in quel momento. Instradare tutto attraverso un’unica variabile di stato è ciò che impedisce a un gioco più grande di trasformarsi in un groviglio — è l’idea organizzativa più importante del progetto conclusivo.'},
        {type:'code', lbl:'one state variable drives everything', code:`mode = <span class="cs">"menu"</span>

<span class="ck">def</span> <span class="cf">draw</span>():
    screen.<span class="cf">clear</span>()
    <span class="ck">if</span> mode == <span class="cs">"menu"</span>:
        screen.<span class="cf">draw</span>.<span class="cf">text</span>(<span class="cs">"Press SPACE to start"</span>, center=(<span class="cn">300</span>,<span class="cn">200</span>))
    <span class="ck">elif</span> mode == <span class="cs">"game"</span>:
        char.<span class="cf">draw</span>()
    <span class="ck">elif</span> mode == <span class="cs">"end"</span>:
        screen.<span class="cf">draw</span>.<span class="cf">text</span>(<span class="cs">"GAME OVER"</span>, center=(<span class="cn">300</span>,<span class="cn">200</span>))`},
        {type:'hi', h:'Vittoria/sconfitta è solo un cambio di stato', b:'Vittoria e sconfitta non sono meccanismi speciali — sono semplicemente impostare <code>mode = "end"</code> quando una condizione è soddisfatta (tutti i nemici eliminati, oppure <code>char.health &lt;= 0</code>). Inquadrarlo così evita che gli studenti sovraccarichino il progetto e si ricollega direttamente alle condizioni del modulo 2.'}
      ]},
      {t:'🧒 La vera sfida: dimensionare e finire', cards:[
        {type:'twocol', left:{h:'Dove sbagliano i progetti conclusivi', items:['Ambizione eccessiva — troppo grande da finire','Perdere traccia dello stato del gioco','Modificare una lista mentre la si scorre','Finire il tempo prima di pubblicare','Rifinire all’infinito, senza mai pubblicare']}, right:{h:'Le tue mosse di coaching', items:['"Finisci in piccolo, poi aggiungi altro"','Un’unica variabile <code>mode</code> guida il gioco','Scorri su una copia quando rimuovi','Riserva tempo per pubblicare e presentare','"Fatto e condiviso batte perfetto"']}},
        {type:'warn', txt:'Il rischio più grande nel progetto conclusivo è l’<strong>ambizione, non la sintassi</strong>. Un gioco completo, semplice e pubblicato batte ogni volta un’epopea incompiuta. Guida gli studenti a bloccare prima un ambito ridotto e ad aggiungere extra solo quando il ciclo principale funziona dall’inizio alla fine.'}
      ]},
      {t:'🎯 Pubblicare e presentare', cards:[
        {type:'good', txt:'La lezione di diploma riguarda l’orgoglio e la presentazione, non nuovo codice. Guida gli studenti a pubblicare il loro gioco sull’HUB di Kodland e a mostrarlo. Finire e condividere è di per sé una competenza — elogia il completamento tanto quanto il codice ingegnoso, perché pubblicare qualcosa di reale è ciò che gli studenti ricordano.'},
        {type:'tip', txt:'Aiuta ogni studente a preparare una demo di 1 minuto: cos’è il gioco, come si gioca e una cosa di cui è fiero. Presentare il proprio lavoro sviluppa fiducia e dà una conclusione pulita e motivante a tutto il corso.'}
      ]}
    ],
    quiz:[
      {q:'Qual è il singolo rischio più grande per uno studente nel progetto conclusivo, e come lo gestisci con il coaching?', opts:['Ambizione eccessiva — blocca prima un gioco piccolo e portabile a termine, poi aggiungi extra','Non conoscere abbastanza sintassi — fai più teoria','Digitare troppo lentamente — spingi sulla velocità','Usare troppi commenti'], c:0, fb:'La gestione dell’ambito è il fulcro del tutoraggio; un piccolo gioco finito batte un grande gioco incompiuto.'},
      {q:'Come viene solitamente gestito lo stato di un gioco (menu / in gioco / game over), e perché è importante?', opts:['Un’unica variabile mode che draw() e update() controllano — mantiene organizzato un gioco grande','Tre file di programma separati','Riavviando Python tra una schermata e l’altra','Con numeri casuali'], c:0, fb:'Un’unica variabile di stato instrada ciò che il gioco mostra e fa, evitando che un progetto grande diventi un groviglio.'},
      {q:'char.collidelist(enemies) restituisce -1. Cosa significa?', opts:['Il personaggio non sta collidendo con nessun nemico della lista','Si è verificato un errore','Ha colliso con il nemico all’indice 1','La lista dei nemici è vuota'], c:0, fb:'collidelist restituisce l’indice del primo sprite colpito, oppure -1 quando non c’è alcuna collisione.'},
      {q:'Come viene rappresentata una mappa a griglia 2D in questi progetti, e quale concetto precedente rafforza il disegnarla?', opts:['Una lista di liste (righe di numeri); disegnarla usa i cicli annidati','Una singola stringa lunga; usa lo slicing di stringhe','Un dizionario di colori; usa la ricerca per chiave','Una funzione; usa la ricorsione'], c:0, fb:'Una lista di liste modella righe e colonne, e i cicli annidati la percorrono — la ricompensa per i cicli annidati del modulo 2.'},
      {q:'Uno studente elimina i nemici sconfitti dalla lista mentre la scorre e alcuni nemici vengono saltati. Qual è la causa?', opts:['Rimuovere elementi a metà ciclo sposta gli indici rimanenti — scorri su una copia o raccogli-poi-rimuovi','collidelist è rotto','I nemici hanno bisogno di più salute','È stato usato append al posto di pop'], c:0, fb:'Modificare una lista durante l’iterazione salta elementi; gli schemi sicuri sono scorrere su una copia o rimandare la rimozione.'},
      {q:'Durante la lezione di diploma, su cosa dovrebbe insistere di più un tutor?', opts:['Aiutare gli studenti a finire, pubblicare sull’HUB e presentare il loro gioco','Infilare quante più funzionalità possibile','Riscrivere il gioco da zero per la qualità','Saltare la presentazione per risparmiare tempo'], c:0, fb:'Completamento, pubblicazione e presentazione sono i risultati fondamentali del diploma — elogia il pubblicare, non solo il codice ingegnoso.'}
    ]
  },
  {
    id:8, emoji:'🧑‍🏫', color:'#6366F1',
    title:'Come tenere una lezione eccellente',
    desc:'La struttura della lezione a specchio/circolare, perché funziona e come tenere ogni studente attivamente coinvolto.',
    obj:'Padroneggia la forma di una solida lezione Kodland: la struttura "a specchio" in otto fasi dal riscaldamento alla conclusione, le ragioni cognitive per cui funziona e le tecniche concrete per tenere i bambini coinvolti in ogni singola fase. Questo riguarda COME insegni, indipendentemente dall’argomento.',
    sections:[
      {t:'🗺️ Perché la struttura conta quanto il contenuto', cards:[
        {type:'text', h:'Una lezione eccellente ha una forma', b:'Puoi conoscere Python alla perfezione e tenere comunque una lezione debole se non ha struttura. I bambini imparano meglio dentro un <strong>ritmo prevedibile</strong> — si accomodano più in fretta, ricordano di più e restano motivati quando ogni lezione segue lo stesso arco familiare. Le lezioni Kodland usano una deliberata struttura in otto fasi con un design "a specchio": il modo in cui una lezione <em>finisce</em> rispecchia il modo in cui <em>inizia</em>.'},
        {type:'text', h:'Cosa allena questo modulo', b:'A differenza dei moduli di programmazione, questo riguarda la <strong>tua conduzione</strong>, non il materiale. Imparerai le otto fasi, perché ognuna esiste e — soprattutto — come tenere gli studenti attivamente partecipi anziché spettatori passivi. Queste abitudini si applicano a ogni lezione che terrai mai, a prescindere dall’argomento.'},
        {type:'tip', txt:'La coerenza è il punto. Una volta che gli studenti imparano il tuo ritmo, smettono di spendere energie a capire "cosa succede adesso?" e le spendono invece nell’apprendere. Usa la stessa struttura ogni volta finché non diventa una seconda natura — per te e per loro.'}
      ]},
      {t:'🌅 L’inizio: quattro fasi', cards:[
        {type:'text', h:'1 · Riscaldamento — attivare energia e concentrazione', b:'Apri con qualcosa di leggero che porti il cervello dello studente in "modalità lezione": una domanda veloce, una piccola sfida, uno sguardo a qualcosa di divertente. L’obiettivo è energia e attenzione, non valutazione. Segnala "stiamo iniziando ora" e attira nella sessione un bambino distratto.'},
        {type:'text', h:'2 · Ripasso della lezione precedente — richiamo e consolidamento', b:'Rivisita brevemente ciò che si è imparato la volta scorsa. Il recupero — far <em>richiamare</em> allo studente anziché rispiegargli le cose — è uno degli strumenti di memoria più potenti che esistano. Un "cosa ricordi sui cicli?" di due minuti fa più di quanto rispiegare potrebbe mai fare.'},
        {type:'text', h:'3 · Verifica dei compiti — rivedere insieme i compiti', b:'Rivedi i compiti <em>insieme</em> allo studente. È qui che cogli i fraintendimenti, elogi l’impegno e mostri che i compiti contano davvero. Saltarlo insegna ai bambini che i compiti sono facoltativi.'},
        {type:'text', h:'4 · Obiettivo della lezione — fissare obiettivi chiari', b:'Dichiara con chiarezza di cosa tratta la giornata: "oggi faremo muovere il nostro sprite quando premi i tasti freccia." Un obiettivo chiaro dà direzione alla lezione e dà allo studente qualcosa di concreto a cui puntare.'}
      ]},
      {t:'🏁 La fine: lo specchio', cards:[
        {type:'hi', h:'La fine rispecchia l’inizio, al contrario', b:'Le quattro fasi conclusive riecheggiano quelle iniziali in ordine inverso — la lezione finisce come è iniziata, dando agli studenti un piacevole senso di <strong>chiusura e ritmo</strong>. Questa forma "circolare" è ciò che fa sentire una lezione completa anziché semplicemente interrotta allo scadere del tempo.'},
        {type:'text', h:'1 · Riepilogo della lezione — basato su tutor + studente', b:'Riepiloga ciò che è stato trattato — ma non limitarti a dirglielo. Fai riassumere anche allo <em>studente</em> con parole sue. Il suo riassunto rivela cosa è davvero arrivato e funge da secondo momento di recupero.'},
        {type:'text', h:'2 · Assegnazione dei compiti — istruzioni chiare', b:'Assegna i compiti con istruzioni cristalline su cosa fare e come. Compiti vaghi sono compiti che non verranno fatti. Questo si abbina alla Verifica dei compiti che ha aperto la lezione.'},
        {type:'text', h:'3 · Anteprima della prossima lezione — creare curiosità', b:'Anticipa cosa arriva dopo: "la prossima volta faremo inseguire il giocatore dai nemici!" Un aggancio crea attesa e slancio in avanti tra una sessione e l’altra — si abbina all’Obiettivo della lezione dell’inizio.'},
        {type:'text', h:'4 · Conclusione — chiudere con energia', b:'Termina in bellezza: celebra ciò che lo studente ha costruito oggi, riconosci il suo impegno e salutalo facendolo sentire bene. Gli ultimi 30 secondi plasmano il modo in cui ricorderà l’intera lezione.'}
      ]},
      {t:'💡 Perché questa struttura funziona', cards:[
        {type:'twocol', left:{h:'🧠 Facilità cognitiva', items:['Un formato prevedibile riduce il carico mentale','Gli studenti sanno cosa aspettarsi','L’attenzione va all’apprendere, non a decifrare la forma della lezione']}, right:{h:'🔁 Potenziamento della memoria', items:['Il ripasso all’INIZIO consolida la volta scorsa','Il riepilogo alla FINE consolida la giornata','Due checkpoint di memoria → richiamo molto migliore']}},
        {type:'twocol', left:{h:'🎯 Scopo chiaro', items:['Dichiarare l’obiettivo in anticipo crea motivazione','Anticipare la prossima lezione crea slancio','Lo studente sa sempre perché è lì']}, right:{h:'✅ Ciclo di responsabilità', items:['Verifica dei compiti all’inizio...','...si abbina all’assegnazione dei compiti alla fine','Gli studenti sentono la continuità tra le lezioni']}},
        {type:'good', txt:'Nota l’abbinamento: riscaldamento ↔ conclusione, ripasso ↔ riepilogo, verifica compiti ↔ assegnazione compiti, obiettivo della lezione ↔ anteprima della prossima. Ogni fase iniziale ha una partner conclusiva. Quella simmetria è ciò che rende la struttura "circolare" e memorabile.'}
      ]},
      {t:'🙋 Tenere coinvolto ogni bambino', cards:[
        {type:'text', h:'La regola d’oro', b:'Una lezione in cui il tutor parla e lo studente ascolta è una lezione debole. Il tuo compito è far <strong>fare, dire e pensare</strong> allo studente il più possibile. Usa queste quattro tecniche di continuo, in ogni fase.'},
        {type:'twocol', left:{h:'❓ Domande aperte', items:['Chiedi "Cosa pensi succederà se…?"','Usa "Come risolveresti…?" per stimolare il ragionamento','Evita le domande sì/no — invita al vero pensiero']}, right:{h:'🖥️ Condivisione dello schermo', items:['Fai condividere lo schermo allo studente','Lascia che ti guidi attraverso il proprio lavoro','Ottima durante la verifica dei compiti e il riscaldamento — crea senso di appartenenza']}},
        {type:'twocol', left:{h:'📖 Lettura delle slide', items:['Invita gli studenti a leggere il testo delle slide ad alta voce','Chiedi loro di spiegarlo con parole proprie','Favorisce la comprensione e li tiene attivi']}, right:{h:'🌟 Lode e incoraggiamento', items:['Sii specifico: "Ottimo lavoro nello spiegare quel passaggio!"','Elogia l’impegno, non solo le risposte corrette','Usa l’energia per mantenere alto lo slancio']}},
        {type:'warn', txt:'Attento alla trappola della lezione passiva: sembra scorrevole perché non c’è attrito, ma lo studente non sta imparando granché. Se hai parlato per più di un minuto o due senza che lo studente faccia o dica qualcosa, ridagli la parola.'}
      ]},
      {t:'🎯 Metterlo in pratica', cards:[
        {type:'hi', h:'La struttura ti libera, non ti limita', b:'I nuovi tutor a volte temono che una struttura fissa renda le lezioni robotiche. È vero il contrario: una volta che le fasi diventano automatiche, smetti di preoccuparti del "cosa faccio adesso?" e hai tutta la tua attenzione libera per lo studente — le sue domande, i suoi errori, la sua energia. La struttura è l’impalcatura che ti permette di essere presente.'},
        {type:'tip', txt:'Tieni una lista mentale (o letterale) delle otto fasi per le tue prime lezioni. Dopo qualche settimana il ritmo diventa automatico. Nel prossimo modulo guarderai una lezione reale e vedrai in azione ognuna di queste fasi e tecniche.'}
      ]}
    ],
    quiz:[
      {q:'Perché la struttura della lezione Kodland è descritta come formato "a specchio" o "circolare"?', opts:['Le fasi conclusive riecheggiano al contrario quelle iniziali, così la lezione finisce come è iniziata','Il tutor e lo studente si scambiano i ruoli a metà','Le slide vengono mostrate due volte, avanti e poi indietro','Ogni lezione ripete esattamente la lezione precedente'], c:0, fb:'La fine rispecchia l’inizio al contrario (riscaldamento↔conclusione, ripasso↔riepilogo, ecc.), dando chiusura e ritmo.'},
      {q:'Un tutor salta il Ripasso della lezione precedente per risparmiare tempo. Qual è il costo principale, dal punto di vista didattico?', opts:['Perde un momento di recupero — far richiamare agli studenti l’apprendimento precedente è uno dei modi più potenti per consolidarlo','Nessuno, purché l’obiettivo sia dichiarato','I compiti non possono essere assegnati più tardi','La lezione andrà oltre l’orario'], c:0, fb:'Il ripasso forza il recupero, un potente strumento di memoria. È uno dei due checkpoint di consolidamento della struttura.'},
      {q:'Quale coppia di fasi forma il "ciclo di responsabilità" nell’arco di una lezione?', opts:['La verifica dei compiti all’inizio e l’assegnazione dei compiti alla fine','Riscaldamento e obiettivo della lezione','Lettura delle slide e lode','Riepilogo della lezione e conclusione'], c:0, fb:'Verificare i compiti all’inizio e assegnarli alla fine chiude il ciclo e crea continuità tra le lezioni.'},
      {q:'Uno studente risponde correttamente a una domanda sì/no ma sembra disimpegnato. Qual è la mossa migliore per porre le domande?', opts:['Porre una domanda aperta come "Come risolveresti questo?" o "Cosa pensi succeda se…?"','Porre più domande sì/no più velocemente','Rispondere tu stesso alla domanda per tenere il ritmo','Passare subito alla slide successiva'], c:0, fb:'Le domande aperte invitano al ragionamento e al pensiero attivo; le domande sì/no lasciano che gli studenti si adagino.'},
      {q:'Qual è la forma di lode più efficace secondo i principi di coinvolgimento?', opts:['Una lode specifica che riconosce l’impegno e il processo, es. "Ottimo lavoro nello spiegare quel passaggio!"','Un generico "bravo" dopo ogni risposta','Elogiare solo le risposte perfettamente corrette','Riservare tutte le lodi alla conclusione'], c:0, fb:'Una lode specifica legata all’impegno e al processo è più motivante e credibile di una generica o basata solo sui risultati.'},
      {q:'Un tutor tiene una lezione scorrevole ma ha parlato per la maggior parte del tempo mentre lo studente guardava. Perché è un segnale d’allarme?', opts:['Una lezione passiva sembra priva di attrito ma lo studente impara poco — dovrebbe fare, dire e pensare per tutto il tempo','Non è un problema se il materiale è stato trattato','Significa che la struttura è stata seguita correttamente','La scorrevolezza indica sempre una lezione eccellente'], c:0, fb:'Il coinvolgimento è l’obiettivo. Se il tutor parla a lungo senza azione dello studente, l’apprendimento cala — ridai la parola allo studente.'}
    ]
  },
  {
    id:9, emoji:'🎥', color:'#0EA5E9', lesson:true,
    title:'Esempio di una lezione eccellente',
    desc:'Guarda una lezione Kodland di Python modello dall’inizio alla fine, con trascrizione completa e note didattiche.',
    obj:'Vedi la struttura della lezione in otto fasi e le tecniche di coinvolgimento del modulo precedente messe in pratica da un tutor esperto: ritmo, domande, dimostrazione, feedback, incoraggiamento e gestione della classe — in un’unica vera lezione Kodland di Python registrata.',
    completeH:'Hai guardato la lezione modello?',
    completeBody:'Una volta che hai guardato la registrazione e letto le note di valutazione, segna questo modulo come completato per concludere la tua formazione e sbloccare il Digital Skill Test.',
    completeBtn:'✓ Segna come guardato',
    sections:[
      {t:'🎬 La registrazione', cards:[
        {type:'video', src:'https://www.youtube-nocookie.com/embed/eNZ6h1oycJI?rel=0', cap:'Una vera lezione Kodland di Python, registrata per intero. Attiva i sottotitoli (CC) per seguire la trascrizione sincronizzata.'},
        {type:'warn', txt:'La registrazione è una lezione reale e dura circa 1 ora e 48 minuti. Guardala per intero quando puoi dedicarle attenzione — è il miglior riferimento in assoluto per tutto ciò che questa formazione ha trattato.'}
      ]},
      {t:'🧭 Su questa lezione', cards:[
        {type:'text', h:'Cosa stai guardando', b:'Questa è una vera lezione Kodland di Python, non a copione, condotta da un tutor esperto con un piccolo gruppo di studenti. La classe lavora a un progetto che combina competenze precedenti — <strong>funzioni e dizionari/liste</strong> (basandosi su un progetto di lista di film e su un gestore di password) — il tipo di progetto di consolidamento che hai incontrato nei moduli Dati e Funzioni.'},
        {type:'hi', h:'Osserva la struttura che hai appena imparato', b:'Mentre guardi, individua le otto fasi del <strong>Modulo 8</strong> in azione: il saluto e il riscaldamento, il ponte con la lezione precedente, la verifica dei compiti e l’obiettivo chiaro all’inizio — poi, alla fine, il riepilogo, i compiti per la prossima volta e l’anteprima della lezione successiva. L’apertura e la chiusura si rispecchiano a vicenda, esattamente come descrive la struttura "circolare".'}
      ]},
      {t:'✅ Perché questa è una lezione eccellente — valutazione QA', cards:[
        {type:'text', h:'Valutata rispetto ai nostri criteri QA', b:'Ogni lezione Kodland può essere valutata rispetto a un insieme di criteri di qualità QA. Questa lezione <strong>li ha superati tutti</strong>. Di seguito le prove, raggruppate per le fasi della lezione del Modulo 8 — usale come una checklist di cosa significa "eccellente" nella pratica.'},
        {type:'qa', h:'🌅 Apertura della lezione', items:[
          {k:'Riscaldamento e saluto', v:'Il tutor ha salutato gli studenti e ha chiesto a Marvel come stava.'},
          {k:'Obiettivo della lezione', v:'Ha dichiarato l’obiettivo — lavorare a un progetto che combina le loro conoscenze precedenti.'},
          {k:'Ponte con la lezione precedente', v:'Ha chiesto se gli studenti avessero già costruito un gestore di password; Marvel ha ricordato un precedente progetto di lista di film.'},
          {k:'Revisione dei compiti', v:'Ha rivisto i compiti precedenti e li ha discussi con gli studenti.'}
        ]},
        {type:'qa', h:'🧑‍🏫 Istruzione e pratica', items:[
          {k:'Istruzioni suddivise chiaramente', v:'Ha dato le istruzioni a piccoli passi — es. spiegando la struttura del progetto e i singoli compiti.'},
          {k:'Dimostrazione prima del lavoro autonomo', v:'Ha mostrato come stampare gli elementi di un dizionario prima di lasciare che gli studenti lavorassero da soli.'},
          {k:'Presenza di una fase di pratica', v:'Gli studenti si sono impegnati in una chiara fase di pratica, lavorando ai loro progetti di codice.'}
        ]},
        {type:'qa', h:'🙋 Coinvolgimento e partecipazione', items:[
          {k:'Ampia partecipazione', v:'Ha coinvolto più studenti — Marvel, Gabriel e Shriyansh — anziché affidarsi a uno solo.'},
          {k:'Rivolgersi direttamente agli studenti', v:'Si è rivolto agli studenti per nome durante le interazioni di apprendimento.'},
          {k:'Partecipazione all’apprendimento di più studenti', v:'Marvel, Gabriel e Shriyansh hanno tutti preso parte alle interazioni di apprendimento.'},
          {k:'Interazione ripetuta con gli studenti', v:'Ha creato ripetute interazioni di apprendimento con studenti diversi per tutta la lezione.'},
          {k:'Feedback utile all’apprendimento', v:'Ha dato feedback sul codice degli studenti, aiutandoli a correggere i loro errori.'},
          {k:'Ragionamento degli studenti sollecitato', v:'Ha chiesto agli studenti di spiegare la loro comprensione di funzioni e liste, ottenendo risposte pertinenti.'}
        ]},
        {type:'qa', h:'😊 Clima di apprendimento positivo', items:[
          {k:'Poca confusione ripetuta', v:'Meno di tre dichiarazioni esplicite di confusione degli studenti in tutta la lezione.'},
          {k:'Nessun rifiuto o noia espliciti', v:'Nessun rifiuto, noia o insoddisfazione espliciti da parte degli studenti.'}
        ]},
        {type:'qa', h:'🏁 Chiusura della lezione (lo specchio)', items:[
          {k:'Riepilogo o revisione finale', v:'Ha riepilogato le competenze apprese durante il modulo e ha discusso i passi successivi.'},
          {k:'Compiti per la prossima lezione', v:'Ha assegnato i compiti — finire il progetto iniziato in classe.'},
          {k:'Continuità con la lezione successiva', v:'Ha detto agli studenti che la prossima lezione avrebbe trattato gli algoritmi lineari.'}
        ]},
        {type:'good', txt:'Nota la simmetria: la lezione si apre con un saluto, un ponte con la volta scorsa, una verifica dei compiti e un obiettivo chiaro — e si chiude con un riepilogo, i compiti per la prossima volta e un’anteprima di ciò che verrà. Quello specchio è esattamente la struttura del Modulo 8, ed è gran parte del perché questa lezione ottiene un punteggio così alto.'}
      ]}
    ]
  }
]
};
