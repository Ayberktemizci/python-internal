/* ============================================================================
   Kodland Python Tutor Training — CONTENT (English, source of truth)
   To create another language: copy this file to content-XX.js and translate
   every STRING VALUE below. Do NOT change keys, structure, HTML tags, CSS
   classes, or Python code — inside code blocks translate ONLY the # comments.
   Set code/htmlLang/title, set dst.formUrl:'' and translate dst.placeholderNote.
   ============================================================================ */
window.CONTENT = {
code: 'es',
htmlLang: 'es',
title: 'Capacitación para Tutores de Python — Kodland',
ui: {
  logoSub: 'Capacitación de Python',
  changeRegion: '🌐 Región',
  heroEyebrow: '🐍 Programa de Capacitación para Tutores',
  heroTitle: 'Prepárate para enseñar<br><span class="h-pill">Python</span><br>a niños',
  heroSub: "Completa cada módulo y aprueba cada cuestionario para terminar tu preparación como tutor. Obtén 70% o más en el cuestionario de un módulo para desbloquear el siguiente: no se puede saltar adelante.",
  progLabel: 'módulos completados',
  modulesLabel: 'Tus módulos',
  allDone: '🏆 ¡Todo listo!',
  completeWord: 'completado',
  backModules: '← Módulos',
  exitQuiz: '← Salir del cuestionario',
  backDashboard: '← Panel',
  moduleWord: 'Módulo',
  ofWord: 'de',
  objectiveWord: 'Objetivo',
  badgePassed: '✓ Aprobado',
  badgeLocked: '🔒 Bloqueado',
  badgeStart: 'Comenzar →',
  badgeWatched: '✓ Visto',
  badgeWatch: '▶ Ver',
  tagCompleted: 'Completado',
  tagExampleLesson: 'Lección de ejemplo',
  completeModuleWord: 'Completar módulo',
  scoreWord: 'Puntaje',
  questionsWord: 'preguntas',
  takeQuiz: '📝 Hacer el cuestionario →',
  retakeQuiz: '🔄 Repetir cuestionario',
  markComplete: 'Marcar como completado',
  doneCompleted: '✓ Completado',
  moduleComplete: 'Módulo completado',
  questionWord: 'Pregunta',
  correctPrefix: '✅ ¡Correcto! ',
  notQuitePrefix: '❌ No exactamente. ',
  seeResults: 'Ver resultados →',
  nextBtn: 'Siguiente →',
  modulePassed: '¡Módulo aprobado!',
  keepReviewing: 'Sigue repasando',
  scoreLine: 'Acertaste {s}/{t}.',
  passMsg: ' ¡Siguiente módulo desbloqueado!',
  failMsg: ' Necesitas 70% para aprobar. ¡Repasa e inténtalo de nuevo!',
  reviewModuleWord: '📖 Repasar módulo',
  startModuleWord: 'Comenzar módulo',
  watchModuleWord: '▶ Ver módulo',
  viewCertificate: '🏆 Ver certificado',
  trainingComplete: '¡Capacitación completada!',
  completeSub: "Has completado todos los módulos: ¡felicitaciones! Estás listo para la Prueba de Habilidades Digitales.",
  certLabel: 'Certificado de finalización',
  certTitle: 'Capacitación para Tutores de Python',
  certLine: 'Kodland · Los {n} módulos · Puntaje promedio del cuestionario: {avg}%',
  takeDST: '🎯 Hacer la Prueba de Habilidades Digitales →',
  backDashboard2: '← Volver al panel',
  dstCardStage: 'Etapa final',
  dstCardTitle: 'Prueba de Habilidades Digitales',
  dstCardDesc: 'La evaluación práctica final, que se realiza después de cada módulo.',
  dstReady: 'Listo',
  dstCardTag: 'Evaluación práctica',
  videoFallback: 'Tu navegador no puede reproducir este video.',
  videoDownload: 'Descárgalo',
  videoPhTitle: 'Grabación próximamente',
  videoPhBody: 'El video de la lección modelo aparecerá aquí.'
},
dst: {
  formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeMZnfF-m7goWQNh7_b2k_aLO-aQ_SY63ljZTXvu7v793RYfw/viewform',
  placeholderNote: 'El formulario de envío para tu región se agregará próximamente.',
  html: `<div class="dst-body">
    <div class="dst-intro">
      <div class="dst-badge">🏆 Prueba de Habilidades Digitales · 2025</div>
      <div class="dst-h1">Prueba para Tutores de Python</div>
      <p class="dst-sub">En esta tarea, puedes demostrar tus conocimientos de Python y tu capacidad para ayudar a los estudiantes mientras escriben proyectos, así como tu dedicación, honestidad y disposición para seguir las pautas establecidas. Tu tarea es crear un juego que cumpla con los requisitos que se indican a continuación. No necesitas un proyecto de terceros súper genial: ¡necesitas un proyecto que se ajuste bien a esta tarea específica!</p>
    </div>

    <div class="dst-stage-header">
      <span class="dst-stage-pill">La tarea</span>
      <span class="dst-stage-title">🎮 Crea un juego</span>
    </div>

    <div class="dst-task">
      <div class="dst-task-num">1</div>
      <div class="dst-task-body"><p>La carpeta del proyecto debe incluir un <code>readme.txt</code> que enumere las bibliotecas utilizadas e instrucciones sobre cómo ejecutar el proyecto.</p></div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">2</div>
      <div class="dst-task-body"><p>El código debe ser <strong>completamente original y escrito de forma independiente.</strong> (Los elementos visuales no necesitan ser originales.)</p></div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">3</div>
      <div class="dst-task-body"><p>Solo pueden usarse los siguientes módulos:</p>
        <ul>
          <li><strong>Pygame Zero</strong></li>
          <li><strong>math</strong></li>
          <li><strong>random</strong></li>
          <li>Otras bibliotecas <strong>NO ESTÁN PERMITIDAS</strong></li>
          <li>La biblioteca <strong>Pygame</strong> <strong>NO DEBE</strong> usarse.</li>
          <li><em>Excepción:</em> puedes importar la clase <code>Rect</code> de Pygame.</li>
        </ul>
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">4</div>
      <div class="dst-task-body"><p>Solo puedes crear un juego de uno de los siguientes tipos:</p>
        <ul>
          <li><strong>Roguelike</strong> (por ejemplo, The Binding of Isaac, Hades, Slay the Spire)</li>
          <li><strong>Plataformas</strong> (por ejemplo, Super Mario Bros., Sonic the Hedgehog)</li>
          <li><strong>Runner</strong> (por ejemplo, Subway Surfers, Temple Run)</li>
        </ul>
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">5</div>
      <div class="dst-task-body"><p>El juego debe tener un <strong>menú principal con botones en los que se pueda hacer clic:</strong></p>
        <ul>
          <li>Iniciar juego</li>
          <li>Activar/desactivar música y sonidos</li>
          <li>Salir</li>
        </ul>
        <img class="dst-img" src="assets/dst/image1.png" alt="Ejemplo de pantalla de juego con botones de menú en los que se puede hacer clic" loading="lazy">
        <img class="dst-img" src="assets/dst/image5.png" alt="Ejemplo de menú principal: Jugar, Activar/Desactivar sonido, Salir" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">6</div>
      <div class="dst-task-body"><p>El juego debe tener al menos <strong>dos enemigos diferentes</strong> que sean peligrosos para el héroe.</p>
        <img class="dst-img" src="assets/dst/image3.gif" alt="Mapa roguelike con varios enemigos diferentes" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">7</div>
      <div class="dst-task-body"><p>Los enemigos deben <strong>moverse dentro de sus propias áreas.</strong></p>
        <img class="dst-img" src="assets/dst/image4.gif" alt="Enemigos que se mueven, cada uno confinado a su propia sala" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">8</div>
      <div class="dst-task-body"><p>El juego debe tener una <strong>mecánica lógica de fin de juego sin errores</strong>, tanto para ganar como para perder.</p>
        <img class="dst-img" src="assets/dst/image7.gif" alt="Ejemplo de juego que conduce a un resultado de victoria/derrota" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">9</div>
      <div class="dst-task-body"><p>Tanto el personaje del jugador como los enemigos deben tener <strong>animaciones de sprites para moverse</strong> (por ejemplo, el movimiento de las piernas al caminar).</p>
        <img class="dst-img" src="assets/dst/image10.gif" alt="Personaje corriendo con movimiento animado de piernas" loading="lazy">
        <div class="dst-imgrow"><img class="dst-img pix" src="assets/dst/image11.gif" alt="Personaje animado moviéndose por el pasto"></div>
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">10</div>
      <div class="dst-task-body"><p>El juego debe tener <strong>tanto música de fondo como sonidos del juego</strong> (sonidos cuando el personaje ataca o choca con un enemigo, un sonido de moneda al recoger una recompensa, etc.).</p><p style="margin-top:6px">Ejemplo de recurso de sonido: <a class="dst-inline-link" href="https://mixkit.co" target="_blank" rel="noopener noreferrer">mixkit.co</a></p></div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">11</div>
      <div class="dst-task-body"><p>Tanto el personaje del jugador como los enemigos deben tener <strong>animaciones en reposo</strong> (por ejemplo: respirar, mirar alrededor, mover aletas, mover la cola, etc.).</p><p style="margin-top:6px">Ejemplo de recurso visual: <a class="dst-inline-link" href="https://kenney.nl" target="_blank" rel="noopener noreferrer">Kenney.nl</a></p>
        <div class="dst-imgrow">
          <img class="dst-img pix" src="assets/dst/image9.gif" alt="Animación de personaje en reposo">
          <img class="dst-img pix" src="assets/dst/image6.gif" alt="Animación de personaje en reposo en el pasto">
          <img class="dst-img pix" src="assets/dst/image2.gif" alt="Escena en reposo con enemigo">
        </div>
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">12</div>
      <div class="dst-task-body"><p>Debes escribir <strong>tus propias clases</strong> para implementar el movimiento del personaje y las animaciones de sprites. <strong>(Programación Orientada a Objetos)</strong></p>
        <img class="dst-img" src="assets/dst/image8.png" alt="Ejemplo de una clase personalizada que implementa el movimiento" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">13</div>
      <div class="dst-task-body"><p>Debes usar <strong>nombres claros y significativos en inglés</strong> para variables, clases y funciones, siguiendo las reglas de <strong>PEP 8</strong>.</p></div>
    </div>

    <div class="dst-stage-header">
      <span class="dst-stage-pill">Notas</span>
      <span class="dst-stage-title">📌 Definiciones y orientación</span>
    </div>
    <div class="card">
      <ul style="padding-left:17px">
        <li style="margin-bottom:6px">Un juego <strong>roguelike</strong> es un juego con vista superior en el que todos los objetos y personajes se colocan en la cuadrícula del mundo del juego. El movimiento entre celdas debe ser fluido y animado.</li>
        <li style="margin-bottom:6px">Un juego de <strong>aventura de apuntar y hacer clic</strong> ofrece una perspectiva superior similar a la de los juegos roguelike, pero el movimiento del personaje no está restringido a la cuadrícula.</li>
        <li style="margin-bottom:6px">Un juego de <strong>plataformas</strong> es un juego con vista lateral en el que el personaje puede saltar entre plataformas.</li>
        <li><strong>La animación de sprites</strong> significa usar una secuencia de imágenes que cambian de forma continua y cíclica para animar a un personaje. Simplemente alternar entre una imagen que mira a la izquierda y una que mira a la derecha <strong>NO</strong> es animación de sprites. 🧐</li>
      </ul>
    </div>
    <div class="callout ct"><span class="ci">💡</span><span>No necesitas un código demasiado complejo o largo: por lo general, <strong>100 a 200 líneas significativas</strong> son suficientes para completar bien la tarea.</span></div>
    <div class="callout cg"><span class="ci">✅</span><span>La complejidad de este proyecto es solo alrededor de un <strong>30% mayor</strong> que la de los proyectos finales de nuestros estudiantes. Si un tutor puede guiar a los estudiantes a través de sus proyectos, este nivel es totalmente alcanzable: ¡esperamos que lo completes con éxito! 👍</span></div>

    <div class="dst-stage-header">
      <span class="dst-stage-pill">Importante</span>
      <span class="dst-stage-title">⚠️ Por favor, lee con atención</span>
    </div>
    <div class="callout cw"><span class="ci">⚠️</span><span>Si infringes varios requisitos clave a la vez, es posible que <strong>no haya oportunidad de corregir</strong> el proyecto.</span></div>
    <div class="callout cw"><span class="ci">⚠️</span><span>El proyecto <strong>NO</strong> debe copiarse total ni parcialmente de internet: hacerlo generará inmediatamente dudas sobre tu honestidad y profesionalismo.</span></div>
    <div class="callout cw"><span class="ci">🚫</span><span>El uso de <strong>IA es un motivo directo de rechazo.</strong></span></div>

    <div class="dst-stage-header">
      <span class="dst-stage-pill">Envío</span>
      <span class="dst-stage-title">📤 Cómo enviar</span>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">1</div>
      <div class="dst-task-body"><p>Sube el proyecto completo a una plataforma de almacenamiento en la nube (<strong>Google Drive o GitHub</strong>) y asegúrate de <strong>dar acceso</strong> a la carpeta del proyecto. ¡Por favor, <strong>NO</strong> uses formatos de archivo comprimidos!</p></div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">2</div>
      <div class="dst-task-body"><p>Completa la prueba de habilidades a continuación y <strong>pega el enlace de tu proyecto</strong> como respuesta a la última pregunta.</p></div>
    </div>
    <div class="dst-submit-card">
      <h3>🔗 ¿Listo para enviar?</h3>
      <p>Abre el formulario de la prueba de habilidades, complétalo y pega el enlace de tu proyecto como respuesta final.</p>
      <a class="dst-link-btn" id="dst-form-btn" href="#">Abrir el formulario de la prueba de habilidades →</a>
    </div>

    <p style="text-align:center;color:var(--text-muted);font-size:14px;margin-top:28px">¡Buena suerte! 🍀</p>
</div>`
},
modules: [
  {
    id:1, emoji:'🐍', color:'#AEDD2E',
    title:'Fundamentos de Python',
    desc:'print, variables, input, tipos de datos y conversión de tipos: el primer programa de un niño.',
    obj:'Construir una comprensión de nivel docente de lo más básico: salida, variables, entrada, los tipos de datos principales y las conversiones entre ellos. Al final deberías poder explicar cada uno de tres maneras diferentes y predecir los errores exactos que enfrentará un principiante.',
    sections:[
      {t:'🗺️ Dónde encaja esto en el curso', cards:[
        {type:'text', h:'El primer contacto con el código', b:'Este es el módulo en el que un niño ejecuta su primer programa. Nada aquí es difícil para ti: el desafío es totalmente pedagógico. El arco del curso es deliberado: <strong>salida</strong> (<code>print</code>) para que vean resultados al instante → <strong>variables</strong> para que el programa pueda recordar cosas → <strong>entrada</strong> para que pueda responder → <strong>tipos de datos</strong> para que entiendan qué tipo de valor están manejando → <strong>conversión</strong> para que la entrada pueda usarse en operaciones matemáticas. Cada módulo posterior (bucles, listas, funciones, incluso juegos) se apoya en estas cinco ideas.'},
        {type:'text', h:'Tu verdadero trabajo en la lección 1', b:'Lograr que un programa funcional y personalizado aparezca en la pantalla del niño dentro de los primeros minutos. El éxito temprano y visible es lo que hace que un niño de 9 años quiera volver. La teoría viene <em>después</em> del subidón de dopamina de ver su propio nombre impreso, nunca antes.'},
        {type:'tip', txt:'Regla de ritmo: una idea nueva y luego ejecuta algo de inmediato. Los principiantes no pueden retener tres conceptos abstractos en la cabeza antes de ver que alguno funcione. Codificar → ejecutar → reaccionar → siguiente idea.'}
      ]},
      {t:'🖨️ print() — salida', cards:[
        {type:'text', h:'Qué enseñar', b:'<code>print()</code> muestra lo que esté dentro de los paréntesis. El texto necesita comillas; los números no. Puedes imprimir varias cosas a la vez separándolas con comas, y Python agrega un espacio entre ellas automáticamente.'},
        {type:'code', lbl:'conceptos básicos de print', code:`<span class="cf">print</span>(<span class="cs">"Hello, world!"</span>)
<span class="cf">print</span>(<span class="cn">2024</span>)
<span class="cf">print</span>(<span class="cs">"You are"</span>, <span class="cn">9</span>, <span class="cs">"years old"</span>)
<span class="cc"># Salida: You are 9 years old</span>`},
        {type:'warn', txt:'El primer error más común es olvidar las comillas: <code>print(Hello)</code> hace que Python busque una <em>variable</em> llamada Hello y lance un <code>NameError</code>. Enseña la regla en voz alta: <strong>"el texto siempre lleva comillas".</strong>'}
      ]},
      {t:'📦 Variables — memoria', cards:[
        {type:'text', h:'Qué enseñar', b:'Una variable almacena un valor bajo un nombre para que puedas reutilizarlo más tarde. El nombre va a la izquierda de <code>=</code> y el valor a la derecha. Leer la línea de derecha a izquierda ayuda: "toma el valor 9 y ponlo en la caja llamada age".'},
        {type:'code', lbl:'variables', code:`name = <span class="cs">"Mia"</span>
age = <span class="cn">9</span>
<span class="cf">print</span>(<span class="cs">"Hi"</span>, name)
age = age <span class="ck">+</span> <span class="cn">1</span>   <span class="cc"># la caja se puede actualizar</span>
<span class="cf">print</span>(<span class="cs">"Next year:"</span>, age)`},
        {type:'hi', h:'La metáfora que funciona', b:'"Una variable es una caja etiquetada que guarda una sola cosa. Si pones algo nuevo, lo anterior desaparece". Esto explica la reasignación a la perfección: los niños comprenden de inmediato que <code>age = age + 1</code> vacía la caja y la vuelve a llenar.'},
        {type:'warn', txt:'<code>=</code> no significa "igual" en el sentido matemático: significa "poner el lado derecho en el lado izquierdo". Decir "igual" en voz alta causa confusión real más adelante con <code>==</code>. Di "<strong>recibe</strong>" o "<strong>se convierte en</strong>" en su lugar: "age se convierte en 10".'}
      ]},
      {t:'⌨️ input() — y por qué todo es una cadena de texto', cards:[
        {type:'text', h:'La idea más importante del módulo', b:'<code>input()</code> pausa el programa, espera a que el usuario escriba y devuelve lo que escribió <strong>como una cadena de texto: siempre, incluso si escribió dígitos.</strong> Este único hecho es la fuente de más errores de principiantes que ninguna otra cosa en todo el curso, así que merece tiempo real.'},
        {type:'code', lbl:'el error clásico, y luego la solución', code:`age = <span class="cf">input</span>(<span class="cs">"How old are you? "</span>)
<span class="cf">print</span>(age <span class="ck">+</span> <span class="cn">1</span>)
<span class="cc"># TypeError: can only concatenate str ... not int</span>

<span class="cc"># Solución: convierte el texto en un número</span>
age = <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"How old are you? "</span>))
<span class="cf">print</span>(<span class="cs">"Next year you’ll be"</span>, age <span class="ck">+</span> <span class="cn">1</span>)`},
        {type:'good', txt:'Enséñalo como una historia: "input siempre te da palabras, nunca números. Si quieres hacer matemáticas, primero debes convertir las palabras en un número con <code>int()</code>". Muestra el error a propósito, lean el mensaje juntos y luego corríjanlo. La secuencia error-luego-solución es más memorable que una regla dada de antemano.'}
      ]},
      {t:'🔢 Tipos de datos y conversión', cards:[
        {type:'text', h:'Los tres tipos que los niños conocen primero', b:'<strong>str</strong> (texto entre comillas), <strong>int</strong> (números enteros) y <strong>float</strong> (decimales). <code>type(x)</code> revela cuál es un valor: mantenlo abierto en una demostración y verifica las cosas en vivo. Las funciones de conversión permiten pasar de uno a otro: <code>int("5")</code> → 5, <code>str(5)</code> → "5", <code>float("3.2")</code> → 3.2.'},
        {type:'code', lbl:'type() y conversiones', code:`<span class="cf">print</span>(<span class="cf">type</span>(<span class="cs">"hi"</span>))    <span class="cc"># &lt;class 'str'&gt;</span>
<span class="cf">print</span>(<span class="cf">type</span>(<span class="cn">7</span>))       <span class="cc"># &lt;class 'int'&gt;</span>
<span class="cf">print</span>(<span class="cf">type</span>(<span class="cn">3.5</span>))     <span class="cc"># &lt;class 'float'&gt;</span>

score = <span class="cf">int</span>(<span class="cs">"10"</span>)        <span class="cc"># "10" -&gt; 10</span>
label = <span class="cs">"Score: "</span> <span class="ck">+</span> <span class="cf">str</span>(score)  <span class="cc"># número -&gt; texto para unir</span>`},
        {type:'twocol', left:{h:'Cadena + Número = problemas', items:['<code>"5" + 3</code> &rarr; <code>TypeError</code>','<code>"5" + "3"</code> &rarr; <code>"53"</code> (¡se unen!)','<code>5 + 3</code> &rarr; <code>8</code> (matemática real)']}, right:{h:'Cómo enseñar la diferencia', items:['Ejecuta las tres en vivo: deja que predigan','"+ en texto pega; + en números suma"','Usa <code>type()</code> para revelar el porqué']}}
      ]},
      {t:'🧒 Los conceptos erróneos que encontrarás', cards:[
        {type:'twocol', left:{h:'Lo que los principiantes hacen mal', items:['Olvidar las comillas alrededor del texto','Tratar a <code>input()</code> como un número','Confundir <code>=</code> y <code>==</code>','Errores de tipeo en los nombres de variables (<code>naem</code>)','Pensar que una variable "se muestra" sola sin <code>print</code>']}, right:{h:'Tus movimientos preventivos', items:['"El texto lleva comillas"','"input siempre da palabras"','"un = guarda, dos == pregunta"','Lean juntos el <code>NameError</code>','"Guardar es silencioso; solo print muestra"']}},
        {type:'warn', txt:'Cuando aparezca un error, resiste la tentación de corregirlo tú mismo. Lee la última línea del traceback <em>con</em> el estudiante y deja que encuentre la causa. Desarrollar temprano la independencia para leer errores es una de las cosas de mayor impacto que hace un tutor.'}
      ]},
      {t:'🎯 Poniéndolo todo junto', cards:[
        {type:'hi', h:'Un primer proyecto del que estarán orgullosos', b:'Un pequeño "Sobre mí" o una calculadora de edad en 2050 usa cada idea del módulo: input, conversión, una variable, aritmética y print. Deja que lo personalicen (su nombre, su juego favorito). La apropiación convierte un ejercicio en algo que capturan en pantalla y le muestran a un padre.'},
        {type:'code', lbl:'miniproyecto: edad en 2050', code:`name = <span class="cf">input</span>(<span class="cs">"Your name? "</span>)
age = <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"Your age? "</span>))
future = age <span class="ck">+</span> (<span class="cn">2050</span> <span class="ck">-</span> <span class="cn">2024</span>)
<span class="cf">print</span>(name <span class="ck">+</span> <span class="cs">", in 2050 you’ll be "</span> <span class="ck">+</span> <span class="cf">str</span>(future))`},
        {type:'good', txt:'Observa que este miniproyecto necesita <code>int()</code> a la entrada y <code>str()</code> a la salida: una razón perfecta y natural para que existan las conversiones. Recurre a ejemplos donde el concepto sea genuinamente necesario en lugar de demostrarlo de forma aislada.'}
      ]}
    ],
    quiz:[
      {q:'Un estudiante escribe age = input("Age: ") luego age + 1 y obtiene un TypeError. ¿Cuál es la solución más limpia y la idea detrás de ella?', opts:['Envolver el input en int(): age = int(input(...)) — input siempre devuelve una cadena de texto','Reiniciar Python; el intérprete se confundió','Renombrar la variable para evitar un conflicto','Eliminar el + 1 ya que no se puede sumar a input'], c:0, fb:'input() siempre devuelve una cadena de texto, por lo que debe convertirse con int() antes de la aritmética. Esta es la idea central del módulo.'},
      {q:'¿Cuál explicación de una "variable" es la mejor para un niño de 9 años?', opts:['Una caja etiquetada que guarda un valor que puedes reutilizar y sobrescribir','Una función que devuelve datos almacenados','Una palabra reservada en Python','Un bucle que recuerda números'], c:0, fb:'La metáfora de la "caja etiquetada" es concreta y también explica la reasignación con claridad.'},
      {q:'¿Por qué es arriesgado leer el símbolo "=" en voz alta como "igual" para los principiantes?', opts:['Fomenta la confusión con ==, que en realidad significa "es igual a"','"Igual" es gramaticalmente incorrecto','Python no usa el símbolo =','Hace que la lección sea más larga'], c:0, fb:'Decir "recibe" o "se convierte en" mantiene la asignación (=) distinta de la comparación (==), evitando una confusión muy común más adelante.'},
      {q:'Un niño ejecuta su programa y "no aparece nada", aunque almacenó un valor en una variable. ¿Cuál es la causa más probable?', opts:['Almacenó el valor pero nunca llamó a print() para mostrarlo','El nombre de la variable es demasiado largo','Python solo imprime números','Necesita importar un módulo de visualización'], c:0, fb:'Almacenar un valor es silencioso; solo print() pone algo en pantalla. "Guardar es silencioso, solo print muestra".'},
      {q:'¿Qué imprime print("5" + "3") y por qué es bueno demostrarlo en vivo?', opts:['"53" — + une cadenas, una sorpresa memorable que motiva la conciencia sobre los tipos','8 — Python suma los números','Un error: no se puede usar + en cadenas','"5 3" — Python agrega un espacio'], c:0, fb:'Ambos operandos son cadenas, por lo que + las concatena en "53". La sorpresa se queda mejor que simplemente enunciar la regla.'},
      {q:'Un estudiante recibe NameError: name ‘naem’ is not defined. La mejor respuesta pedagógica es:', opts:['Leer juntos la línea del error y dejar que detecte el error de tipeo','Corregirlo en silencio para que la lección avance','Decirle que las variables no son confiables','Cambiar a otro ejemplo'], c:0, fb:'Entrenar a los estudiantes para leer los tracebacks desarrolla la independencia en la depuración, un objetivo central a largo plazo.'}
    ]
  },
  {
    id:2, emoji:'🔀', color:'#F03D9E',
    title:'Flujo de control: condiciones y bucles',
    desc:'if / elif / else, operadores de comparación y lógicos, además de bucles while y for y su anidamiento.',
    obj:'Enseñar a los programas a tomar decisiones y a repetir. Deberías poder explicar la indentación como sintaxis, elegir for o while sobre la marcha, seguir un bucle a mano y diagnosticar los errores de bucle infinito y de desfase por uno antes de que ocurran.',
    sections:[
      {t:'🗺️ Dónde encaja esto en el curso', cards:[
        {type:'text', h:'Dos motores de todo programa', b:'Hasta ahora los programas se ejecutaban de arriba hacia abajo, una sola vez. Este módulo agrega las dos cosas que hacen que el código realmente <em>haga</em> algo interesante: <strong>decisiones</strong> (<code>if/elif/else</code>) para que el programa pueda ramificarse, y <strong>repetición</strong> (<code>while</code>, <code>for</code>) para que pueda hacer trabajo muchas veces sin copiar y pegar. Combinados, producen los primeros "algoritmos" reales, y son la base de todos los juegos posteriores del curso.'},
        {type:'warn', txt:'En Python, la indentación <strong>es</strong> sintaxis, no un estilo. Los espacios debajo de un <code>if</code> o un <code>for</code> son los que le dicen a Python "esto pertenece adentro". Aproximadamente la mitad de todos los errores de principiantes en este módulo son un dos puntos faltante o una indentación incorrecta: reserva tiempo para ello explícitamente.'}
      ]},
      {t:'🔁 Condiciones: if / elif / else', cards:[
        {type:'text', h:'Qué enseñar', b:'<code>if</code> ejecuta un bloque solo cuando su condición es <code>True</code>. <code>elif</code> ("else if") se comprueba <em>solo</em> si todas las condiciones anteriores fueron False. <code>else</code> es el caso general cuando nada coincidió. Python las comprueba de arriba hacia abajo y se detiene en la primera coincidencia: el orden importa.'},
        {type:'code', lbl:'ramificación', code:`score = <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"Your score: "</span>))
<span class="ck">if</span> score <span class="ck">&gt;=</span> <span class="cn">90</span>:
    <span class="cf">print</span>(<span class="cs">"Excellent!"</span>)
<span class="ck">elif</span> score <span class="ck">&gt;=</span> <span class="cn">50</span>:
    <span class="cf">print</span>(<span class="cs">"You passed"</span>)
<span class="ck">else</span>:
    <span class="cf">print</span>(<span class="cs">"Try again"</span>)`},
        {type:'text', h:'Operadores de comparación y lógicos', b:'Las comparaciones devuelven True/False: <code>==</code> (igual), <code>!=</code> (distinto), <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>. Combínalas con <code>and</code> (ambas deben ser verdaderas) y <code>or</code> (al menos una verdadera): <code>if age &gt;= 6 and age &lt;= 12:</code>.'},
        {type:'tip', txt:'Una trampa habitual: ordenar mal las ramas <code>elif</code>. Si compruebas <code>score &gt;= 50</code> antes que <code>score &gt;= 90</code>, un 95 coincide primero con "passed" y nunca llega a "Excellent". Enseña a los estudiantes a ordenar las condiciones de la más específica a la menos específica.'}
      ]},
      {t:'➰ bucles for y range()', cards:[
        {type:'text', h:'Qué enseñar', b:'Un bucle <code>for</code> se repite un número conocido de veces. <code>range(n)</code> produce los números <strong>del 0 hasta n, sin incluir n</strong>, así que <code>range(5)</code> da 0,1,2,3,4 (cinco números, empezando en cero). <code>range(1, 6)</code> da del 1 al 5, y <code>range(0, 10, 2)</code> cuenta en pasos de 2.'},
        {type:'code', lbl:'for + range', code:`<span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">5</span>):
    <span class="cf">print</span>(<span class="cs">"Step"</span>, i)        <span class="cc"># 0,1,2,3,4</span>

<span class="ck">for</span> n <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">5</span>, <span class="cn">0</span>, <span class="ck">-</span><span class="cn">1</span>):
    <span class="cf">print</span>(<span class="cs">"Countdown:"</span>, n) <span class="cc"># 5,4,3,2,1</span>`},
        {type:'warn', txt:'La confusión del desfase por uno es universal: los estudiantes esperan que <code>range(5)</code> imprima del 1 al 5. Muéstralo una vez, despacio, y escribe los números producidos en el pizarrón: 0,1,2,3,4. "Empieza en cero, se detiene <em>antes</em> del número".'}
      ]},
      {t:'🔄 bucles while', cards:[
        {type:'text', h:'Qué enseñar', b:'Un bucle <code>while</code> se repite <em>mientras</em> su condición siga siendo True; úsalo cuando no sepas la cantidad de antemano ("seguir preguntando hasta que la contraseña sea correcta"). Algo dentro del bucle <strong>debe eventualmente hacer que la condición sea False</strong>, o se ejecutará para siempre.'},
        {type:'code', lbl:'while + una condición de parada', code:`lives = <span class="cn">3</span>
<span class="ck">while</span> lives <span class="ck">&gt;</span> <span class="cn">0</span>:
    <span class="cf">print</span>(<span class="cs">"Lives:"</span>, lives)
    lives <span class="ck">-=</span> <span class="cn">1</span>      <span class="cc"># esto es lo que termina el bucle</span>
<span class="cf">print</span>(<span class="cs">"Game over"</span>)`},
        {type:'warn', txt:'El bucle infinito es el error característico de <code>while</code>. Si olvidas <code>lives -= 1</code>, el programa se congela para siempre. Enseña a los estudiantes a preguntarse <strong>antes</strong> de escribir el cuerpo: "¿qué línea de aquí hace que este bucle finalmente se detenga?"'}
      ]},
      {t:'🪆 Anidamiento', cards:[
        {type:'text', h:'Qué enseñar', b:'Las condiciones y los bucles pueden estar unos dentro de otros. Un bucle con un <code>if</code> adentro te permite actuar de forma diferente en cada pasada; un bucle dentro de otro bucle maneja cuadrículas y tablas. Cada nivel de anidamiento es otro nivel de indentación: mantener los sangrados ordenados es lo que mantiene legible el código anidado.'},
        {type:'code', lbl:'un bucle con una decisión adentro', code:`<span class="ck">for</span> n <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">1</span>, <span class="cn">6</span>):
    <span class="ck">if</span> n <span class="ck">%</span> <span class="cn">2</span> == <span class="cn">0</span>:
        <span class="cf">print</span>(n, <span class="cs">"is even"</span>)
    <span class="ck">else</span>:
        <span class="cf">print</span>(n, <span class="cs">"is odd"</span>)`}
      ]},
      {t:'🧒 Los conceptos erróneos que encontrarás', cards:[
        {type:'twocol', left:{h:'Lo que los principiantes hacen mal', items:['<code>=</code> en lugar de <code>==</code> en una condición','Olvidar los dos puntos <code>:</code>','Indentación inconsistente o faltante','<code>range(5)</code> "debería" ser del 1 al 5','Bucles <code>while</code> infinitos','Poner código después del bucle, pero indentado dentro de él']}, right:{h:'Tus movimientos preventivos', items:['"un = guarda, dos == pregunta"','Haz que los dos puntos sean un reflejo','Siempre 4 espacios; muestra el bloque visualmente','Escribe los números: 0,1,2,3,4','"¿Qué hace que este bucle se detenga?"','"Indentado = adentro; alineado = después"']}},
        {type:'tip', txt:'Cuando un bucle se comporta mal, síguelo a mano en un pizarrón: escribe i = 0, luego 1, luego 2, y qué se imprime cada vez. "Desenrollar" el bucle elimina la magia y es el mejor hábito de depuración que puedes modelar.'}
      ]},
      {t:'🎯 Cómo enseñarlo', cards:[
        {type:'hi', h:'for vs while — dales una sola frase', b:'"Usa <strong>for</strong> cuando sabes cuántas veces (haz esto 10 veces). Usa <strong>while</strong> cuando repites hasta que algo suceda (sigue hasta que adivinen bien)". Esa única regla resuelve casi toda pregunta de "¿qué bucle?".'},
        {type:'good', txt:'Un juego de adivinar números es el broche de oro perfecto aquí: un bucle <code>while</code>, un <code>if/elif/else</code> para "demasiado alto / demasiado bajo / correcto" e <code>input()</code> del módulo 1. Se siente como un juego real y ejercita todo a la vez.'}
      ]}
    ],
    quiz:[
      {q:'La instrucción if de un estudiante siempre ejecuta la primera rama sin importar la entrada. ¿Qué compruebas primero y por qué?', opts:['Si escribió = en lugar de == — = asigna, == compara','Si Python necesita reinstalarse','Si tiene suficientes ramas elif','Si el archivo se guardó'], c:0, fb:'Un solo = asigna un valor (siempre verdadero aquí); == es la comparación. "Un = guarda, dos == pregunta".'},
      {q:'¿Cuál es la mejor regla de una sola frase para elegir entre for y while?', opts:['for cuando conoces el número de repeticiones; while cuando repites hasta que una condición cambia','Prefiere siempre while; for es obsoleto','for es para números, while es para texto','Son intercambiables en todos los casos'], c:0, fb:'Cantidad conocida → for. Repetir-hasta-que-algo-suceda → while.'},
      {q:'El programa de un niño se congela y nunca termina. ¿Qué le enseñas a buscar?', opts:['La línea dentro del bucle while que debería eventualmente hacer que su condición sea False','Una instrucción print faltante','Demasiados comentarios que lo ralentizan','Un error de tipeo dentro de una cadena'], c:0, fb:'Un programa congelado suele ser un bucle while infinito cuya variable de control nunca cambia.'},
      {q:'¿Qué produce range(5) y qué concepto erróneo debes anticipar?', opts:['0,1,2,3,4 — los estudiantes esperan del 1 al 5, así que "empieza en cero, se detiene antes del número"','1,2,3,4,5 — cuenta de forma natural','Solo el número 5','Un número aleatorio menor que 5'], c:0, fb:'range(5) empieza en cero y se detiene antes del 5. Escribir los números evita el error de desfase por uno.'},
      {q:'¿Por qué importa el ORDEN de las ramas elif en if score >= 50 ... elif score >= 90?', opts:['Python se detiene en la primera condición verdadera, así que un 95 coincidiría erróneamente primero con >= 50','Las ramas elif se ejecutan en orden aleatorio','Las ramas posteriores anulan las anteriores','El orden nunca importa en los condicionales'], c:0, fb:'Las condiciones se comprueban de arriba hacia abajo y se detienen en la primera coincidencia: ordena de la más específica a la menos específica.'},
      {q:'Un bloque anidado "después" de un bucle se ejecuta accidentalmente dentro de él. ¿Cuál es la causa subyacente y el punto de enseñanza?', opts:['Indentación: las líneas indentadas están dentro del bucle; alinearlas de nuevo las pone después de él','Los dos puntos se colocaron mal','range() se usó mal','while debería haber sido for'], c:0, fb:'La indentación define bloques en Python. "Indentado = adentro; alineado de nuevo = después".'}
    ]
  },
  {
    id:3, emoji:'📦', color:'#2B8EF0',
    title:'Datos: listas, diccionarios y random',
    desc:'Almacenar muchos valores: creación de listas y métodos, indexación, diccionarios (clave→valor) y el módulo random.',
    obj:'Llevar a los estudiantes de variables individuales a colecciones. Deberías poder enseñar la indexación basada en cero sin confusión, elegir lista o diccionario según el patrón de acceso, demostrar los métodos principales de listas y usar random para dar vida a los programas.',
    sections:[
      {t:'🗺️ Dónde encaja esto en el curso', cards:[
        {type:'text', h:'De un valor a muchos', b:'Una variable guarda una sola cosa; los programas reales necesitan colecciones. Este módulo presenta las <strong>listas</strong> (ordenadas, a las que se accede por posición) y los <strong>diccionarios</strong> (a los que se accede por una clave/nombre), además del módulo <strong>random</strong> para el azar. Estas estructuras están por todas partes en los módulos de juegos posteriores (listas de enemigos, tablas de puntajes, inventarios, mapas de tiles), por lo que dominarlas bien aquí rinde frutos repetidamente.'},
        {type:'tip', txt:'La decisión principal que estás enseñando: "¿encuentro esto por su <em>posición</em> o por su <em>nombre</em>?". Posición → lista. Nombre → diccionario. Enmarca cada ejemplo en torno a esa pregunta.'}
      ]},
      {t:'📋 Listas e indexación', cards:[
        {type:'text', h:'Qué enseñar', b:'Una lista guarda muchos valores en orden, escritos entre corchetes. Lees un elemento por su <strong>índice</strong>, y los índices empiezan en <strong>0</strong>: el primer elemento es <code>pets[0]</code>, el segundo es <code>pets[1]</code>. <code>len(pets)</code> da la cantidad, así que el último elemento es <code>pets[len(pets)-1]</code>.'},
        {type:'code', lbl:'listas e indexación', code:`pets = [<span class="cs">"cat"</span>, <span class="cs">"dog"</span>, <span class="cs">"fish"</span>]
<span class="cf">print</span>(pets[<span class="cn">0</span>])      <span class="cc"># cat (el PRIMER elemento)</span>
<span class="cf">print</span>(pets[<span class="cn">2</span>])      <span class="cc"># fish</span>
<span class="cf">print</span>(<span class="cf">len</span>(pets))   <span class="cc"># 3</span>

<span class="ck">for</span> pet <span class="ck">in</span> pets:    <span class="cc"># recorre cada elemento</span>
    <span class="cf">print</span>(pet)`},
        {type:'warn', txt:'La indexación basada en cero es un obstáculo conceptual genuino. Di "<strong>el primer elemento es el elemento cero</strong>" repetidamente, y muestra que <code>pets[3]</code> en una lista de 3 elementos lanza <code>IndexError: list index out of range</code>, porque los índices válidos son 0, 1, 2.'}
      ]},
      {t:'🛠️ Métodos de listas', cards:[
        {type:'text', h:'Qué enseñar', b:'Las listas pueden cambiar. Los métodos principales: <code>append(x)</code> agrega al final, <code>insert(i, x)</code> agrega en una posición, <code>remove(x)</code> elimina el primer valor que coincida, <code>pop(i)</code> elimina y devuelve el elemento en el índice i, y <code>clear()</code> vacía la lista.'},
        {type:'code', lbl:'modificar una lista', code:`pets = [<span class="cs">"cat"</span>, <span class="cs">"dog"</span>]
pets.<span class="cf">append</span>(<span class="cs">"fish"</span>)    <span class="cc"># ["cat","dog","fish"]</span>
pets.<span class="cf">insert</span>(<span class="cn">0</span>, <span class="cs">"bird"</span>) <span class="cc"># ["bird","cat","dog","fish"]</span>
pets.<span class="cf">remove</span>(<span class="cs">"dog"</span>)     <span class="cc"># ["bird","cat","fish"]</span>
last = pets.<span class="cf">pop</span>()        <span class="cc"># elimina y devuelve "fish"</span>`},
        {type:'twocol', left:{h:'append vs insert vs remove', items:['<code>append</code>: agrega al final','<code>insert(i,x)</code>: agrega en el índice i','<code>remove(x)</code>: elimina por valor','<code>pop(i)</code>: elimina por índice, lo devuelve']}, right:{h:'Confusiones comunes', items:['<code>remove</code> toma un valor, no un índice','<code>pop</code> toma un índice, no un valor','<code>remove</code> elimina solo la PRIMERA coincidencia','<code>append</code> toma exactamente un argumento']}}
      ]},
      {t:'🗂️ Diccionarios', cards:[
        {type:'text', h:'Qué enseñar', b:'Un diccionario almacena pares <strong>clave → valor</strong> entre llaves. En lugar de una posición numérica, buscas cosas por una clave significativa: <code>scores["Ann"]</code> significa "dame el valor almacenado bajo Ann". Puedes agregar o actualizar con <code>scores["Leo"] = 12</code>.'},
        {type:'code', lbl:'diccionarios', code:`scores = {<span class="cs">"Ann"</span>: <span class="cn">15</span>, <span class="cs">"Leo"</span>: <span class="cn">9</span>}
<span class="cf">print</span>(scores[<span class="cs">"Ann"</span>])   <span class="cc"># 15 — busca por clave</span>
scores[<span class="cs">"Mia"</span>] = <span class="cn">20</span>      <span class="cc"># agrega un par nuevo</span>
scores[<span class="cs">"Leo"</span>] = <span class="cn">11</span>      <span class="cc"># actualiza uno existente</span>`},
        {type:'warn', txt:'Los estudiantes confunden la clave con el valor, y la dirección importa: <code>scores["Ann"]</code> pregunta "¿cuál es el puntaje de Ann?", no está preguntando "¿Ann es 15?". Además, buscar una clave que no existe lanza <code>KeyError</code>: un error útil y didáctico.'}
      ]},
      {t:'🎲 El módulo random', cards:[
        {type:'text', h:'Qué enseñar', b:'Importar <code>random</code> desbloquea el azar. <code>random.randint(1, 6)</code> da un número entero del 1 al 6 (ambos extremos incluidos), y <code>random.choice(my_list)</code> elige un elemento aleatorio de una lista. Esta es la chispa detrás de los dados, los cuestionarios y el comportamiento de los enemigos más adelante.'},
        {type:'code', lbl:'random', code:`<span class="ck">import</span> random

dice = random.<span class="cf">randint</span>(<span class="cn">1</span>, <span class="cn">6</span>)
<span class="cf">print</span>(<span class="cs">"You rolled"</span>, dice)

pets = [<span class="cs">"cat"</span>, <span class="cs">"dog"</span>, <span class="cs">"fish"</span>]
<span class="cf">print</span>(random.<span class="cf">choice</span>(pets))`},
        {type:'warn', txt:'Olvidar <code>import random</code> da <code>NameError: name ‘random’ is not defined</code>. Las importaciones van una vez, al principio del archivo. Ten en cuenta que <code>randint</code> incluye ambos extremos, a diferencia de <code>range</code>, que excluye el límite superior.'}
      ]},
      {t:'🎯 Cómo enseñarlo', cards:[
        {type:'hi', h:'Dos metáforas que funcionan', b:'Una lista es "un <strong>estante numerado</strong>: espacio 0, espacio 1, espacio 2". Un diccionario es "una <strong>app de contactos</strong>: buscas un nombre y obtienes un número". Estas se corresponden exactamente con índice-vs-clave y resuelven al instante la mayoría de las preguntas de "¿cuál uso?".'},
        {type:'good', txt:'El juego de adivinar números recibe una mejora perfecta aquí: <code>random.randint</code> elige el número secreto y una lista almacena las conjeturas anteriores. Combinar random + listas + los bucles del módulo 2 muestra a los estudiantes cómo los conceptos se suman en algo realmente divertido.'}
      ]}
    ],
    quiz:[
      {q:'Un estudiante escribe pets[1] esperando la primera mascota pero obtiene la segunda. ¿Qué enseñas y qué error lo demuestra?', opts:['La indexación empieza en 0, así que pets[0] es la primera; pets[3] en una lista de 3 elementos lanza IndexError','Las listas no son confiables y deben evitarse','Deben convertir la lista en un diccionario','Sumar 1 a cada índice de ahora en adelante'], c:0, fb:'Indexación basada en cero: el primer elemento es el índice 0, los índices válidos son 0..len-1, y pasarse lanza IndexError.'},
      {q:'¿Cuándo debería un estudiante recurrir a un diccionario en lugar de una lista?', opts:['Cuando accede a los valores por un nombre/clave significativo en lugar de por posición','Cuando el orden de los elementos importa más','Cuando hay más de diez elementos','Los diccionarios son siempre la mejor opción'], c:0, fb:'A las listas se accede por posición; los diccionarios asocian claves con valores, ideal para búsquedas nombre→puntaje.'},
      {q:'¿Cuál es la diferencia entre list.remove() y list.pop()?', opts:['remove(valor) elimina por valor; pop(índice) elimina por posición y devuelve el elemento','Son idénticos','remove toma un índice; pop toma un valor','pop vacía toda la lista'], c:0, fb:'remove trabaja por valor (primera coincidencia); pop trabaja por índice y devuelve el elemento eliminado.'},
      {q:'Un juego que usa random.randint da error con "random is not defined". ¿Cuál es la solución y la regla?', opts:['Agregar import random al principio: las importaciones ocurren una vez, antes de usarse','Renombrar la variable dice','Usar una lista en lugar de random','Reinstalar Python'], c:0, fb:'El módulo random debe importarse (una vez, al principio) antes de usar cualquiera de sus funciones.'},
      {q:'¿Cuál es la metáfora concreta más efectiva para un diccionario al enseñar a niños?', opts:['Una app de contactos: buscas un nombre y obtienes un número','Un estante numerado con espacios 0,1,2','Un temporizador de cuenta regresiva','Una sola caja etiquetada'], c:0, fb:'El modelo de la app de contactos captura la búsqueda clave→valor; el modelo del estante numerado es para las listas.'},
      {q:'¿En qué se diferencia random.randint(1, 6) de range(1, 6) y por qué mencionarlo?', opts:['randint INCLUYE el 6; range se detiene ANTES del 6 — los estudiantes confunden los dos límites','Son idénticos','randint excluye ambos extremos','range incluye ambos extremos'], c:0, fb:'randint(1,6) puede devolver 6; range(1,6) produce del 1 al 5. Destacar la diferencia de límites evita errores.'}
    ]
  },
  {
    id:4, emoji:'⚙️', color:'#7C5CFC',
    title:'Funciones',
    desc:'def, parámetros y argumentos, return vs print, y por qué las funciones mantienen ordenados los programas grandes.',
    obj:'Enseñar a los estudiantes a empaquetar código en funciones reutilizables. Deberías poder dejar cristalinas las distinciones definir-vs-llamar y print-vs-return, explicar los parámetros con una metáfora, y motivar las funciones dejando que los estudiantes sientan primero el dolor de la duplicación.',
    sections:[
      {t:'🗺️ Dónde encaja esto en el curso', cards:[
        {type:'text', h:'El primer sabor de la estructura', b:'Hasta ahora los programas son listas planas de instrucciones. Las funciones permiten a los estudiantes <strong>nombrar un fragmento de trabajo y reutilizarlo</strong>. Este es el puente hacia todo lo que sigue: los dibujos de Turtle llaman funciones, y PyGame Zero está construido enteramente sobre funciones que tú escribes (<code>draw</code>, <code>update</code>, <code>on_key_down</code>). Un estudiante inseguro con las funciones tendrá dificultades en cuanto empiecen los juegos, así que este módulo es un auténtico filtro.'},
        {type:'tip', txt:'Las dos ideas que necesitan tiempo real: <strong>definir vs llamar</strong> (escribir una función vs ejecutarla) y <strong>print vs return</strong> (mostrar un valor vs devolverlo). Casi todo error de funciones que enfrenta un principiante es uno de estos dos.'}
      ]},
      {t:'✏️ def — definir y llamar', cards:[
        {type:'text', h:'Qué enseñar', b:'<code>def name():</code> <em>define</em> una función: escribe la receta pero no ejecuta nada todavía. El código solo se ejecuta cuando la <strong>llamas</strong> escribiendo su nombre con paréntesis: <code>greet()</code>. Puedes definir una vez y llamar tantas veces como quieras.'},
        {type:'code', lbl:'define una vez, llama muchas veces', code:`<span class="ck">def</span> <span class="cf">greet</span>():
    <span class="cf">print</span>(<span class="cs">"Hello!"</span>)
    <span class="cf">print</span>(<span class="cs">"Welcome to the lesson."</span>)

<span class="cf">greet</span>()   <span class="cc"># ahora se ejecuta</span>
<span class="cf">greet</span>()   <span class="cc"># y de nuevo</span>`},
        {type:'warn', txt:'El clásico error de "no pasó nada": el estudiante define una función pero nunca la llama. Enseña la frase "<strong>definir = escribir la receta; llamar = cocinarla</strong>". Una receta en un libro no cocina ninguna cena hasta que alguien la sigue.'}
      ]},
      {t:'📥 Parámetros y argumentos', cards:[
        {type:'text', h:'Qué enseñar', b:'Los parámetros permiten que una función reciba entrada para comportarse de forma diferente en cada llamada. El nombre en la definición (<code>name</code>) es el <strong>parámetro</strong>; el valor real que pasas (<code>"Mia"</code>) es el <strong>argumento</strong>. Se emparejan de izquierda a derecha, así que la cantidad debe coincidir.'},
        {type:'code', lbl:'pasar información hacia adentro', code:`<span class="ck">def</span> <span class="cf">greet</span>(name):
    <span class="cf">print</span>(<span class="cs">"Hello,"</span>, name)

<span class="cf">greet</span>(<span class="cs">"Mia"</span>)    <span class="cc"># Hello, Mia</span>
<span class="cf">greet</span>(<span class="cs">"Sam"</span>)    <span class="cc"># Hello, Sam</span>

<span class="ck">def</span> <span class="cf">add</span>(a, b):
    <span class="cf">print</span>(a <span class="ck">+</span> b)
<span class="cf">add</span>(<span class="cn">3</span>, <span class="cn">4</span>)        <span class="cc"># 7</span>`},
        {type:'warn', txt:'Pasar la cantidad incorrecta de argumentos lanza <code>TypeError: greet() missing 1 required positional argument</code>. Léanlo juntos: el error literalmente nombra lo que falta, lo cual es una excelente práctica de lectura de errores.'}
      ]},
      {t:'↩️ return vs print — la clave', cards:[
        {type:'text', h:'Qué enseñar', b:'<code>print</code> <strong>muestra</strong> un valor en pantalla para una persona. <code>return</code> <strong>devuelve un valor</strong> al programa para que el resto del código pueda usarlo. Una función que imprime pero no devuelve entrega <code>None</code>, así que no puedes hacer matemáticas con su resultado.'},
        {type:'code', lbl:'la diferencia hecha visible', code:`<span class="ck">def</span> <span class="cf">square_print</span>(n):
    <span class="cf">print</span>(n <span class="ck">*</span> n)        <span class="cc"># solo muestra</span>

<span class="ck">def</span> <span class="cf">square_return</span>(n):
    <span class="ck">return</span> n <span class="ck">*</span> n       <span class="cc"># devuelve el valor</span>

x = <span class="cf">square_print</span>(<span class="cn">5</span>)   <span class="cc"># imprime 25, pero x es None</span>
y = <span class="cf">square_return</span>(<span class="cn">5</span>)  <span class="cc"># y es 25, usable en matemáticas</span>
<span class="cf">print</span>(y <span class="ck">+</span> <span class="cn">1</span>)         <span class="cc"># 26</span>`},
        {type:'hi', h:'Por qué los estudiantes deben sentir esto', b:'Muestra que <code>x = square_print(5)</code> deja <code>x</code> como <code>None</code>, y luego <code>x + 1</code> se rompe. El error es la lección: "print le habla a una persona; return le habla al programa". Hasta que un estudiante siente esta diferencia, las funciones siguen siendo difusas.'}
      ]},
      {t:'🍳 La metáfora y la motivación', cards:[
        {type:'hi', h:'La metáfora de la receta', b:'Una función es una <strong>receta</strong>. <code>def</code> escribe la receta; los <strong>argumentos son los ingredientes</strong> que entregas; <strong>llamarla es cocinar</strong>; y <code>return</code> es el plato terminado que se devuelve. Print, en cambio, es solo gritar el resultado a través de la cocina: nadie puede usarlo después.'},
        {type:'good', txt:'Motiva las funciones infligiendo primero la duplicación: haz que el estudiante escriba el mismo saludo de 4 líneas tres veces, y luego refactorízalo en una sola <code>greet(name)</code>. Sentir el tedio es lo que hace que "no te repitas" haga clic; no les des la regla, deja que se la ganen.'},
        {type:'code', lbl:'antes / después de refactorizar', code:`<span class="cc"># antes: repetido 3 veces</span>
<span class="cf">print</span>(<span class="cs">"Hi Mia, ready to code?"</span>)
<span class="cf">print</span>(<span class="cs">"Hi Sam, ready to code?"</span>)

<span class="cc"># después: una función reutilizable</span>
<span class="ck">def</span> <span class="cf">welcome</span>(name):
    <span class="cf">print</span>(<span class="cs">"Hi"</span>, name <span class="ck">+</span> <span class="cs">", ready to code?"</span>)
<span class="cf">welcome</span>(<span class="cs">"Mia"</span>)
<span class="cf">welcome</span>(<span class="cs">"Sam"</span>)`}
      ]},
      {t:'🧒 Los conceptos erróneos que encontrarás', cards:[
        {type:'twocol', left:{h:'Lo que los principiantes hacen mal', items:['Definir una función pero nunca llamarla','Confundir <code>print</code> con <code>return</code>','Cantidad incorrecta de argumentos','Esperar un valor de una función que solo imprime','Indentar el cuerpo de forma inconsistente']}, right:{h:'Tus movimientos preventivos', items:['"Definir = receta; llamar = cocinar"','Muéstralas lado a lado; falla con None','Lean juntos el TypeError','"print habla a personas, return al código"','Trata el cuerpo como cualquier bloque indentado']}}
      ]}
    ],
    quiz:[
      {q:'Un estudiante define una función pero "no pasa nada" cuando ejecuta el archivo. ¿Cuál es la causa y la frase que enseñas?', opts:['Nunca la llamó — "definir = escribir la receta; llamar = cocinarla"','Python debe reiniciarse','Las funciones siempre deben devolver un valor','def estaba mal escrito'], c:0, fb:'Definir solo escribe la receta; la función debe llamarse para ejecutarse realmente.'},
      {q:'¿Cuál es la forma más clara de distinguir print de return?', opts:['print muestra un valor a una persona; return devuelve un valor al programa','Hacen lo mismo','return es solo un print más rápido','print solo funciona fuera de las funciones'], c:0, fb:'return entrega un valor usable a quien llama; print simplemente muestra texto en pantalla.'},
      {q:'En def square(number): return number*number, ¿qué es exactamente "number"?', opts:['Un parámetro — la entrada que la función recibe al ser llamada','Una palabra clave incorporada de Python','El valor que la función devuelve','Una variable global definida en otro lugar'], c:0, fb:'number es el parámetro; el argumento es el valor real que se pasa, por ejemplo square(5).'},
      {q:'x = greet("Mia") donde greet solo imprime. ¿Cuál es el valor de x y por qué vale la pena mostrarlo?', opts:['None — una función que solo imprime no devuelve nada, así que x+1 se rompería y probaría que print ≠ return','"Mia"','El texto que se imprimió','Lanza un error de inmediato'], c:0, fb:'Una función sin return devuelve None. El error posterior es la forma más memorable de enseñar print vs return.'},
      {q:'¿Cuál es la forma más efectiva de motivar POR QUÉ las funciones son útiles?', opts:['Hacer que los estudiantes repitan el mismo código varias veces y luego refactorizarlo en una sola función','Comenzar con la definición formal de una función','Evitar ejemplos y explicar la teoría','Usar únicamente las funciones incorporadas de Python'], c:0, fb:'Dejar que los estudiantes sientan el dolor de la duplicación hace que el valor de las funciones reutilizables haga clic por sí solo.'},
      {q:'Una llamada lanza "TypeError: greet() missing 1 required positional argument". ¿Qué significa y cómo lo usas pedagógicamente?', opts:['La cantidad de argumentos no coincide con los parámetros — lean juntos el error como práctica de depuración','greet no es una función real','Python se quedó sin memoria','El valor de retorno fue ignorado'], c:0, fb:'Los argumentos deben coincidir con los parámetros; el error nombra exactamente lo que falta, ideal para practicar la lectura de errores.'}
    ]
  },
  {
    id:5, emoji:'🐢', color:'#F59E0B',
    title:'Dibujo e introducción a PyGame Zero',
    desc:'El módulo Turtle, y luego el salto a los gráficos: Actors, la ventana, draw() y update(), y el bucle del juego.',
    obj:'Guiar el salto de los programas de texto a los visuales. Deberías poder explicar el bucle del juego (el modelo del folioscopio), por qué el framework llama a tus funciones, la diferencia entre draw() y update(), y las trampas de recursos/nombres que rompen sprites silenciosamente.',
    sections:[
      {t:'🗺️ Dónde encaja esto en el curso', cards:[
        {type:'text', h:'El pico de motivación', b:'Este es el módulo en el que la programación se vuelve <em>visual</em>, y para muchos niños es el momento en que se enamoran de ella. Los estudiantes dibujan con <strong>Turtle</strong> (una recompensa satisfactoria por las funciones y los bucles) y luego conocen <strong>PyGame Zero</strong>, el framework de juegos detrás de "Las aventuras de Coddy". Todo en los módulos de juegos restantes se construye directamente sobre los conceptos que se presentan aquí.'},
        {type:'warn', txt:'Aquí hay un verdadero salto conceptual: de un programa que se ejecuta de arriba hacia abajo <em>una vez</em>, a un <strong>bucle de juego</strong> que se redibuja muchas veces por segundo. Nombra ese cambio en voz alta: los estudiantes que no lo notan encuentran los juegos desconcertantes.'}
      ]},
      {t:'🐢 Turtle — dibujar con código', cards:[
        {type:'text', h:'Qué enseñar', b:'Turtle mueve un "lápiz" por la pantalla: <code>forward(100)</code>, <code>right(90)</code>, <code>left(45)</code>. Lo mágico es que dibujar una figura es solo un bucle, y envolver ese bucle en una función crea una herramienta reutilizable. Es la demostración más clara posible de por qué importaron los dos módulos anteriores.'},
        {type:'code', lbl:'una función que dibuja (¡bucles + funciones!)', code:`<span class="ck">import</span> turtle

<span class="ck">def</span> <span class="cf">draw_square</span>(side):
    <span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">4</span>):
        turtle.<span class="cf">forward</span>(side)
        turtle.<span class="cf">right</span>(<span class="cn">90</span>)

<span class="cf">draw_square</span>(<span class="cn">100</span>)
<span class="cf">draw_square</span>(<span class="cn">50</span>)   <span class="cc"># reutiliza con un tamaño distinto</span>`},
        {type:'good', txt:'Turtle es el "ajá" perfecto: un cuadrado es solo "adelante, girar, cuatro veces". Deja que los estudiantes cambien el ángulo a 120 y la cantidad a 3 para obtener un triángulo: descubrir por sí mismos la relación entre el ángulo de giro y la figura es mucho más potente que que se lo digan.'}
      ]},
      {t:'🎮 PyGame Zero — la configuración', cards:[
        {type:'text', h:'Qué enseñar', b:'Un programa de PyGame Zero comienza con <code>#pgzero</code> (o se ejecuta con <code>pgzrun</code>). Estableces la ventana con <code>WIDTH</code> y <code>HEIGHT</code>, y luego creas sprites como <strong>Actors</strong>. Un <code>Actor("coddy")</code> carga automáticamente <code>images/coddy.png</code>: el nombre es el del archivo, en minúsculas, sin extensión. Posiciónalo con <code>.pos</code>, <code>.x</code>, <code>.y</code>.'},
        {type:'code', lbl:'ventana + actor', code:`<span class="cc">#pgzero</span>
WIDTH = <span class="cn">600</span>
HEIGHT = <span class="cn">400</span>

coddy = <span class="cf">Actor</span>(<span class="cs">"coddy"</span>)   <span class="cc"># carga images/coddy.png</span>
coddy.pos = <span class="cn">300</span>, <span class="cn">200</span>      <span class="cc"># centro de la ventana</span>`},
        {type:'warn', txt:'El asesino silencioso: el nombre del archivo de imagen debe coincidir exactamente con el nombre del Actor: en minúsculas, bien escrito, sin <code>.png</code> en el código, y el archivo debe estar en una carpeta <code>images</code>. Una discrepancia falla sin ninguna pista obvia, así que esto es lo primero que hay que verificar cuando "el sprite no aparece".'}
      ]},
      {t:'🔁 draw(), update() y el bucle del juego', cards:[
        {type:'text', h:'Qué enseñar', b:'Escribes dos funciones especiales y PyGame Zero <strong>las llama por ti, automáticamente, unas 60 veces por segundo</strong>. <code>draw()</code> pinta el fotograma actual; <code>update()</code> cambia cosas para el próximo fotograma (posiciones, puntajes, lógica). El estudiante nunca llama a estas: esa es la parte nueva y sorprendente.'},
        {type:'code', lbl:'el bucle en acción', code:`<span class="ck">def</span> <span class="cf">draw</span>():
    screen.<span class="cf">clear</span>()    <span class="cc"># borra el fotograma anterior</span>
    coddy.<span class="cf">draw</span>()      <span class="cc"># pinta el sprite</span>

<span class="ck">def</span> <span class="cf">update</span>():
    coddy.x <span class="ck">+=</span> <span class="cn">1</span>     <span class="cc"># un pequeño cambio cada fotograma = movimiento</span>`},
        {type:'hi', h:'El modelo del folioscopio', b:'Un juego es un folioscopio. <code>update()</code> decide qué cambia en la página siguiente; <code>draw()</code> pinta esa página; PyGame Zero pasa las páginas 60 veces por segundo. Por eso el movimiento necesita un <em>pequeño</em> cambio en cada fotograma (<code>x += 1</code>), no un gran salto. También explica por qué debes usar <code>screen.clear()</code>: sin borrar la página, cada fotograma se emborrona sobre el anterior.'}
      ]},
      {t:'🧒 Los conceptos erróneos que encontrarás', cards:[
        {type:'twocol', left:{h:'Lo que los principiantes hacen mal', items:['Llamar a draw()/update() ellos mismos','El nombre de la imagen no coincide con el archivo','Olvidar <code>screen.clear()</code> → emborronamiento','Poner la lógica del juego fuera de update()','Un gran salto en lugar de pasos pequeños','Confundir draw (mostrar) con update (cambiar)']}, right:{h:'Tus movimientos preventivos', items:['"El framework las llama, no tú"','Nombres: minúsculas, sin extensión, images/','Borra la página en cada fotograma','La lógica que se repite va en update()','"Cambio pequeño cada fotograma = movimiento suave"','"draw = pintar, update = pensar"']}},
        {type:'warn', txt:'"El framework llama a tus funciones" es una idea completamente nueva (inversión de control). No la apures. Contrástala explícitamente con todo lo anterior: "hasta ahora, tu código ejecutaba tus líneas. Ahora escribes funciones y el motor del juego las ejecuta por ti".'}
      ]},
      {t:'🎯 Cómo enseñarlo', cards:[
        {type:'good', txt:'Celebra el primer sprite en movimiento a lo grande: es un hito genuino y un punto álgido emocional de todo el curso. Luego deja de inmediato que ajusten la velocidad (<code>x += 5</code>) y la dirección. La experimentación, no la explicación, es lo que cementa el bucle del juego.'},
        {type:'tip', txt:'Si un estudiante se siente abrumado, redúcelo al programa ejecutable más pequeño: una ventana, un Actor, un <code>update()</code> vacío. Agrega una línea a la vez. Los juegos parecen enormes; construirlos línea a línea que cambia el fotograma los mantiene aprendibles.'}
      ]}
    ],
    quiz:[
      {q:'En PyGame Zero, ¿quién llama a draw() y update() y por qué importa pedagógicamente?', opts:['El framework las llama unas 60 veces por segundo automáticamente — una nueva idea de "inversión de control" que hay que enseñar despacio','El estudiante las llama manualmente en cada fotograma','El SO las llama una vez al iniciar','Solo se ejecutan si se colocan en un bucle while'], c:0, fb:'PyGame Zero ejecuta tus draw()/update() por ti en cada fotograma; los estudiantes NO deben llamarlas, y esto es genuinamente nuevo.'},
      {q:'¿Cuál es la forma más clara de explicarle draw() vs update() a un niño?', opts:['update() decide qué cambia para el próximo fotograma; draw() pinta el fotograma ("pensar vs pintar")','Son idénticas','draw() se ejecuta una vez, update() nunca se ejecuta','update() solo maneja el sonido'], c:0, fb:'"update = pensar/cambiar, draw = pintar" se corresponde directamente con el bucle del juego.'},
      {q:'Un sprite no aparece y no hay error obvio. ¿Qué compruebas primero?', opts:['Que el nombre del archivo de imagen coincida exactamente con el nombre del Actor (minúsculas, sin extensión, en images/)','La cantidad de RAM disponible','Si Python es de 32 o 64 bits','El brillo del monitor'], c:0, fb:'Actor("coddy") necesita images/coddy.png con un nombre que coincida exactamente: el fallo silencioso más común.'},
      {q:'¿Por qué coddy.x += 1 dentro de update() crea un movimiento suave en lugar de un teletransporte?', opts:['update() se ejecuta en cada fotograma, así que un pequeño cambio se acumula unas 60 veces por segundo en un movimiento suave','Se teletransporta una vez y se detiene','Solo funciona dentro de un bucle while','Cambia el tamaño de la ventana'], c:0, fb:'El movimiento es un pequeño cambio aplicado en cada fotograma por el bucle del juego: el modelo del folioscopio.'},
      {q:'El sprite de un estudiante deja un rastro emborronado por la pantalla. ¿Qué falta y por qué?', opts:['screen.clear() al inicio de draw() — sin borrar, cada fotograma pinta sobre el anterior','Una instrucción de importación','Un segundo Actor','Una computadora más rápida'], c:0, fb:'Cada fotograma debe borrar el anterior; de lo contrario las posiciones viejas quedan pintadas, creando un emborronamiento.'},
      {q:'¿Por qué dibujar un cuadrado con Turtle es una lección sólida justo antes de los juegos?', opts:['Reutiliza funciones + bucles juntos, demostrando que los módulos anteriores rinden frutos, y facilita la transición a "el código hace imágenes"','Enseña diccionarios','Introduce el manejo de archivos','Demuestra la recursión'], c:0, fb:'draw_square es una función que envuelve un bucle: una recompensa satisfactoria y una suave rampa de entrada a los gráficos.'}
    ]
  },
  {
    id:6, emoji:'🎮', color:'#10B981',
    title:'Desarrollo de juegos con PyGame Zero',
    desc:'Entrada de teclado y ratón, animación de sprites, detección de colisiones y puntuación en el juego.',
    obj:'Enseñar el núcleo interactivo de la creación de juegos: responder al teclado y al ratón, animar sprites y detectar colisiones. Deberías poder explicar global con claridad, distinguir collidepoint de colliderect y modelar la iteración rápida como un hábito de tutoría.',
    sections:[
      {t:'🗺️ Dónde encaja esto en el curso', cards:[
        {type:'text', h:'Juegos que responden al jugador', b:'El módulo 5 puso un sprite en pantalla y lo movió por sí solo. Ahora el juego <strong>reacciona al jugador</strong>: movimiento con el teclado, clics del ratón, animación y, lo más importante, colisiones que impulsan la puntuación, el daño y los objetos recogidos. Los proyectos aquí incluyen Las aventuras de Coddy, un juego estilo Minecraft, un juego de disparos espaciales y "Clicker Heroes".'},
        {type:'tip', txt:'La detección de colisiones es el concepto que convierte "una imagen en movimiento" en "un juego". Reserva tiempo extra para ello: es conceptualmente más rico de lo que parece y desbloquea la puntuación, el combate y la recolección todo a la vez.'}
      ]},
      {t:'⌨️ Entrada de teclado', cards:[
        {type:'text', h:'Dos estilos para enseñar', b:'<strong>Continuo</strong>: dentro de <code>update()</code>, comprueba <code>keyboard.right</code>, <code>keyboard.left</code>, etc. — verdadero mientras se mantiene la tecla pulsada, perfecto para un movimiento suave. <strong>Único</strong>: el framework llama a <code>on_key_down(key)</code> una vez por pulsación, ideal para saltar o disparar. Cambiar la imagen del sprite mientras se mueve le da al jugador retroalimentación de dirección.'},
        {type:'code', lbl:'movimiento continuo', code:`<span class="ck">def</span> <span class="cf">update</span>():
    <span class="ck">if</span> keyboard.right:
        coddy.x <span class="ck">+=</span> <span class="cn">5</span>
        coddy.image = <span class="cs">"coddy_right"</span>
    <span class="ck">elif</span> keyboard.left:
        coddy.x <span class="ck">-=</span> <span class="cn">5</span>
        coddy.image = <span class="cs">"coddy_left"</span>`},
        {type:'tip', txt:'Usa la comprobación de tecla pulsada en <code>update()</code> para el movimiento y el evento <code>on_key_down</code> para las acciones. Confundirlos —por ejemplo, intentar un movimiento suave en <code>on_key_down</code>— produce un movimiento entrecortado, de un paso por pulsación. Ajusta la herramienta a la sensación que quieres.'}
      ]},
      {t:'🖱️ Entrada de ratón', cards:[
        {type:'text', h:'Qué enseñar', b:'El framework llama a <code>on_mouse_down(pos)</code> cuando el jugador hace clic, entregándote la ubicación del clic como <code>pos</code>. La pregunta habitual es "¿hicieron clic en este objeto?", que se responde con <code>actor.collidepoint(pos)</code>. Esto impulsa los juegos de clics y las mecánicas de "dispara al enemigo".'},
        {type:'code', lbl:'clic para puntuar', code:`score = <span class="cn">0</span>

<span class="ck">def</span> <span class="cf">on_mouse_down</span>(pos):
    <span class="ck">global</span> score
    <span class="ck">if</span> enemy.<span class="cf">collidepoint</span>(pos):
        score <span class="ck">+=</span> <span class="cn">1</span>
        <span class="cf">animate</span>(enemy, tween=<span class="cs">"bounce_end"</span>, duration=<span class="cn">0.3</span>)`}
      ]},
      {t:'🌍 La palabra clave global', cards:[
        {type:'text', h:'Qué enseñar', b:'Una función puede <em>leer</em> una variable definida fuera de ella, pero para <strong>cambiar</strong> una debe primero declarar <code>global score</code>. Sin ello, Python crea una nueva variable local en su lugar y el puntaje real nunca se actualiza: un fallo confuso y sin errores.'},
        {type:'warn', txt:'Mantén la explicación apropiada para la edad: "una función puede mirar variables de afuera, pero para <strong>cambiar</strong> una tiene que decir <code>global</code> primero". Resiste una clase completa sobre el ámbito (scope): esa profundidad no es necesaria aquí y abruma a los principiantes. Solo la regla y un ejemplo que funcione.'}
      ]},
      {t:'💥 Detección de colisiones', cards:[
        {type:'text', h:'Qué enseñar', b:'Cada sprite tiene un rectángulo invisible a su alrededor. <code>a.colliderect(b)</code> pregunta "¿se superponen estos dos rectángulos?" (sprite vs sprite: golpes, objetos recogidos). <code>a.collidepoint(pos)</code> pregunta "¿está este punto dentro de este rectángulo?" (un clic o un solo punto). Esa única distinción cubre casi todas las interacciones de los juegos 2D.'},
        {type:'code', lbl:'colisión sprite-vs-sprite', code:`<span class="ck">def</span> <span class="cf">update</span>():
    <span class="ck">if</span> player.<span class="cf">colliderect</span>(coin):
        <span class="ck">global</span> score
        score <span class="ck">+=</span> <span class="cn">1</span>
        coin.x = random.<span class="cf">randint</span>(<span class="cn">0</span>, WIDTH)  <span class="cc"># reaparecer</span>`},
        {type:'hi', h:'El modelo mental', b:'"Cada objeto vive dentro de una caja invisible. Una colisión es simplemente <em>dos cajas que se superponen</em>". Una vez que los estudiantes tienen esa imagen, los golpes, la recolección de monedas y los clics del ratón se vuelven todos la misma pregunta simple, solo formulada con <code>colliderect</code> (caja vs caja) o <code>collidepoint</code> (punto en caja).'}
      ]},
      {t:'🧒 Los conceptos erróneos que encontrarás', cards:[
        {type:'twocol', left:{h:'Lo que los principiantes hacen mal', items:['Cambiar el puntaje en una función sin <code>global</code>','Confundir <code>collidepoint</code> con <code>colliderect</code>','Movimiento demasiado rápido o demasiado lento','Olvidar cambiar la imagen del sprite','Intentar movimiento suave en <code>on_key_down</code>']}, right:{h:'Tus movimientos preventivos', items:['"Para cambiar una variable de afuera, di global"','"point = un clic, rect = objeto vs objeto"','Ajusten juntos el paso += / -=','Cambio de imagen = dirección visible','Tecla pulsada en update(); eventos para acciones']}}
      ]},
      {t:'🎯 Cómo enseñarlo', cards:[
        {type:'good', txt:'Modela la iteración rápida sin descanso: cambia un número, ejecuta, observa, ajusta. El desarrollo de juegos recompensa el "probémoslo" mucho más que planificarlo todo de antemano, y mostrar esa actitud les da a los estudiantes permiso para experimentar en lugar de temer a los errores.'},
        {type:'tip', txt:'Cuando una colisión "no funciona", depura visualmente: imprime temporalmente el puntaje en pantalla o imprime en la consola dentro del <code>if</code>. Ver si la rama se ejecuta siquiera separa "la colisión no se detecta" de "el puntaje no se actualiza": dos soluciones muy diferentes.'}
      ]}
    ],
    quiz:[
      {q:'Un estudiante aumenta el puntaje dentro de on_mouse_down pero nunca cambia, sin error. ¿Cuál es la solución y la regla?', opts:['Declarar global score dentro de la función — sin ello Python crea una nueva variable local','Envolver la actualización del puntaje en un bucle while','Renombrar score a algo único','Almacenar el puntaje dentro del Actor'], c:0, fb:'Para modificar una variable de nivel de módulo dentro de una función, Python requiere la declaración global; de lo contrario crea silenciosamente una local.'},
      {q:'¿Qué método detecta un clic del ratón que cae sobre un sprite específico?', opts:['collidepoint(pos) — comprueba si un solo punto está dentro de la caja del sprite','colliderect(other_sprite)','keyboard.click','on_draw()'], c:0, fb:'collidepoint comprueba un punto (el clic); colliderect comprueba si dos rectángulos se superponen.'},
      {q:'¿Cuál es el modelo mental preciso más simple para la detección de colisiones?', opts:['Cada objeto tiene una caja invisible; una colisión es dos cajas que se superponen','Python adivina si las cosas parecen tocarse','Los sprites se repelen magnéticamente','Compara los colores de los píxeles de cada sprite'], c:0, fb:'La colisión basada en rectángulos es literalmente "¿se superponen estos dos rectángulos?": el modelo de la caja invisible es exacto.'},
      {q:'¿Por qué cambiar coddy.image a una variante izquierda/derecha cuando el personaje se mueve?', opts:['Retroalimentación visual — el sprite mira hacia la dirección en la que viaja','Es obligatorio o el juego se rompe','Hace que el código se ejecute más rápido','Reduce el uso de memoria'], c:0, fb:'Cambiar la imagen del sprite da al jugador una clara retroalimentación de dirección; es una decisión de pulido/sensación, no un requisito.'},
      {q:'¿Cuándo deberías usar keyboard.right dentro de update() en lugar de on_key_down(key)?', opts:['Comprobación de tecla pulsada en update() para movimiento suave; on_key_down para acciones únicas como saltar/disparar','Usa siempre on_key_down; update() no puede leer el teclado','Son intercambiables','keyboard.right solo funciona en draw()'], c:0, fb:'Movimiento continuo = comprobación de tecla pulsada en update(); acciones discretas = el evento on_key_down. Confundirlos se siente mal.'},
      {q:'Una colisión "no funciona". ¿Cuál es el movimiento de depuración más efectivo para enseñar?', opts:['Imprimir dentro del if (o mostrar el puntaje en pantalla) para ver si la rama se ejecuta siquiera','Reescribir todo el juego','Agregar más sprites','Aumentar el tamaño de la ventana'], c:0, fb:'Un print rápido separa "colisión no detectada" de "puntaje no actualizado": dos problemas diferentes con soluciones diferentes.'}
    ]
  },
  {
    id:7, emoji:'🏆', color:'#EF4444',
    title:'Proyecto final: crear y publicar un juego',
    desc:'Mapas de cuadrícula, enemigos con atributos, collidelist, bonificaciones, niveles, estados de victoria/derrota, menús y publicación.',
    obj:'Prepararte para guiar a los estudiantes a través de su proyecto final. El cambio de habilidad aquí pasa de enseñar funcionalidades a gestionar una construcción más grande: dimensionar de forma realista, organizar el estado del juego, manejar muchos objetos y acompañar a los estudiantes hasta un juego terminado, publicado y presentado.',
    sections:[
      {t:'🗺️ Dónde encaja esto en el curso', cards:[
        {type:'text', h:'Todo se une', b:'Los módulos finales construyen un RPG completo ("WeCode and Dragons") y un proyecto de graduación. Aquí casi <strong>no hay sintaxis nueva</strong>: en cambio, cada concepto de los módulos 1 a 6 reaparece todo a la vez dentro de un programa más grande. Tu rol cambia en consecuencia: menos "aquí tienes una nueva funcionalidad", más "mantengamos este proyecto organizado y terminable".'},
        {type:'tip', txt:'Replantea tu propio trabajo para este módulo. Ahora eres tanto un mentor de proyecto como un profesor de programación: ayudas a los estudiantes a dimensionar con sensatez, a mantenerse organizados, a depurar un código más grande y —crucialmente— a terminar y publicar de verdad.'}
      ]},
      {t:'🗺️ Mapas de cuadrícula (listas de listas)', cards:[
        {type:'text', h:'Qué enseñar', b:'Los niveles del juego se almacenan como una <strong>cuadrícula 2D</strong>: una lista de listas, donde cada número codifica un tipo de tile (0 = suelo, 1 = pared, 2 = huesos, etc.). Los bucles anidados recorren las filas y columnas para dibujar cada tile en <code>column * cell_width</code>, <code>row * cell_height</code>. Esta es la recompensa por los bucles anidados del módulo 2.'},
        {type:'code', lbl:'un mapa de tiles', code:`my_map = [[<span class="cn">0</span>, <span class="cn">1</span>, <span class="cn">1</span>, <span class="cn">0</span>],
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
      {t:'👾 Muchos enemigos con atributos', cards:[
        {type:'text', h:'Qué enseñar', b:'Los enemigos se generan en un bucle y se almacenan en una lista, cada uno con sus propios atributos (salud, ataque) establecidos como propiedades del Actor. Para comprobar al jugador contra <em>todos</em> a la vez, <code>collidelist(enemies)</code> devuelve el índice del primero golpeado, o <code>-1</code> si ninguno: mucho más limpio que un bucle manual de comprobaciones <code>colliderect</code>.'},
        {type:'code', lbl:'generar + colisionar con una lista', code:`enemies = []
<span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">5</span>):
    e = <span class="cf">Actor</span>(<span class="cs">"enemy"</span>)
    e.health = random.<span class="cf">randint</span>(<span class="cn">10</span>, <span class="cn">20</span>)
    e.attack = random.<span class="cf">randint</span>(<span class="cn">5</span>, <span class="cn">10</span>)
    enemies.<span class="cf">append</span>(e)

idx = char.<span class="cf">collidelist</span>(enemies)
<span class="ck">if</span> idx <span class="ck">!=</span> <span class="ck">-</span><span class="cn">1</span>:               <span class="cc"># -1 significa "sin golpe"</span>
    char.health <span class="ck">-=</span> enemies[idx].attack`},
        {type:'warn', txt:'Un error sutil a vigilar: eliminar elementos de una lista <em>mientras se recorre</em> hace que se salten elementos. Si los estudiantes borran enemigos derrotados a mitad del bucle, algunos se saltan. Enseña el patrón seguro: reunir lo que se va a eliminar, o recorrer una copia.'}
      ]},
      {t:'🚦 Estado del juego y menús', cards:[
        {type:'text', h:'Qué enseñar', b:'Una única variable <code>mode</code> ("menu" / "game" / "end") actúa como un letrero que les dice tanto a <code>draw()</code> como a <code>update()</code> qué hacer en este momento. Enrutar todo a través de una sola variable de estado es lo que evita que un juego más grande se derrumbe en código espagueti: es la idea organizativa más importante del proyecto final.'},
        {type:'code', lbl:'una variable de estado lo impulsa todo', code:`mode = <span class="cs">"menu"</span>

<span class="ck">def</span> <span class="cf">draw</span>():
    screen.<span class="cf">clear</span>()
    <span class="ck">if</span> mode == <span class="cs">"menu"</span>:
        screen.<span class="cf">draw</span>.<span class="cf">text</span>(<span class="cs">"Press SPACE to start"</span>, center=(<span class="cn">300</span>,<span class="cn">200</span>))
    <span class="ck">elif</span> mode == <span class="cs">"game"</span>:
        char.<span class="cf">draw</span>()
    <span class="ck">elif</span> mode == <span class="cs">"end"</span>:
        screen.<span class="cf">draw</span>.<span class="cf">text</span>(<span class="cs">"GAME OVER"</span>, center=(<span class="cn">300</span>,<span class="cn">200</span>))`},
        {type:'hi', h:'Ganar/perder es solo un cambio de estado', b:'La victoria y la derrota no son maquinaria especial: son simplemente establecer <code>mode = "end"</code> cuando se cumple una condición (todos los enemigos eliminados, o <code>char.health &lt;= 0</code>). Plantearlo así evita que los estudiantes sobrediseñen y lo conecta directamente con las condiciones del módulo 2.'}
      ]},
      {t:'🧒 El verdadero desafío: alcance y finalización', cards:[
        {type:'twocol', left:{h:'Dónde salen mal los proyectos finales', items:['Alcance demasiado ambicioso — demasiado grande para terminar','Perder el rastro del estado del juego','Editar una lista mientras se recorre','Quedarse sin tiempo antes de publicar','Pulir para siempre, nunca publicar']}, right:{h:'Tus movimientos de acompañamiento', items:['"Termina algo pequeño, luego agrega más"','Una variable <code>mode</code> impulsa el juego','Recorre una copia al eliminar','Reserva tiempo para publicar + presentar','"Terminado y compartido supera a perfecto"']}},
        {type:'warn', txt:'El mayor riesgo en el proyecto final es la <strong>ambición, no la sintaxis</strong>. Un juego completo, simple y publicado supera a una epopeya inconclusa cada vez. Acompaña a los estudiantes para que fijen primero un alcance pequeño y solo agreguen extras una vez que el bucle central funcione de principio a fin.'}
      ]},
      {t:'🎯 Publicar y presentar', cards:[
        {type:'good', txt:'La lección de graduación trata sobre el orgullo y la presentación, no sobre código nuevo. Acompaña a los estudiantes para que publiquen su juego en el HUB de Kodland y lo muestren. Terminar y compartir es en sí una habilidad: elogia la finalización tan fuerte como el código ingenioso, porque publicar algo real es lo que los estudiantes recuerdan.'},
        {type:'tip', txt:'Ayuda a cada estudiante a preparar una demostración de 1 minuto: qué es el juego, cómo se juega y una cosa de la que están orgullosos. Presentar su propio trabajo desarrolla la confianza y le da un final limpio y motivador a todo el curso.'}
      ]}
    ],
    quiz:[
      {q:'¿Cuál es el mayor riesgo para un estudiante en el proyecto final y cómo lo acompañas?', opts:['Alcance demasiado ambicioso — fija primero un juego pequeño y terminable, luego agrega extras','No saber suficiente sintaxis — practica más teoría','Escribir demasiado lento — presiona por velocidad','Usar demasiados comentarios'], c:0, fb:'La gestión del alcance es el foco clave de la tutoría; un juego pequeño terminado supera a uno grande inconcluso.'},
      {q:'¿Cómo se gestiona habitualmente el estado de un juego (menú / jugando / fin del juego) y por qué importa?', opts:['Una única variable mode que draw() y update() comprueban — mantiene organizado un juego grande','Tres archivos de programa separados','Reiniciando Python entre pantallas','Con números aleatorios'], c:0, fb:'Una variable de estado enruta lo que el juego muestra y hace, evitando que un proyecto grande se convierta en código espagueti.'},
      {q:'char.collidelist(enemies) devuelve -1. ¿Qué significa eso?', opts:['El personaje no está colisionando con ningún enemigo de la lista','Ocurrió un error','Colisionó con el enemigo en el índice 1','La lista de enemigos está vacía'], c:0, fb:'collidelist devuelve el índice del primer sprite golpeado, o -1 cuando no hay colisión alguna.'},
      {q:'¿Cómo se representa un mapa de cuadrícula 2D en estos proyectos y qué concepto anterior refuerza dibujarlo?', opts:['Una lista de listas (filas de números); dibujarlo usa bucles anidados','Una sola cadena larga; usa segmentación de cadenas','Un diccionario de colores; usa búsquedas por clave','Una función; usa recursión'], c:0, fb:'Una lista de listas modela filas y columnas, y los bucles anidados la recorren: la recompensa por los bucles anidados del módulo 2.'},
      {q:'Un estudiante elimina enemigos derrotados de la lista mientras la recorre y algunos enemigos se saltan. ¿Cuál es la causa?', opts:['Eliminar elementos a mitad del bucle desplaza los índices restantes — recorre una copia o reúne-y-luego-elimina','collidelist está roto','Los enemigos necesitan más salud','Se usó append en lugar de pop'], c:0, fb:'Modificar una lista durante la iteración salta elementos; los patrones seguros son recorrer una copia o diferir la eliminación.'},
      {q:'Durante la lección de graduación, ¿qué debe enfatizar más un tutor?', opts:['Ayudar a los estudiantes a terminar, publicar en el HUB y presentar su juego','Meter tantas funcionalidades como sea posible','Reescribir el juego desde cero por calidad','Saltarse la presentación para ahorrar tiempo'], c:0, fb:'La finalización, la publicación y la presentación son los resultados centrales de la graduación: elogia el publicar, no solo el código ingenioso.'}
    ]
  },
  {
    id:8, emoji:'🧑‍🏫', color:'#6366F1',
    title:'Cómo dar una gran lección',
    desc:'La estructura de lección en espejo/circular, por qué funciona y cómo mantener a cada estudiante activamente involucrado.',
    obj:'Dominar la forma de una lección sólida de Kodland: la estructura "espejo" de ocho fases, desde el calentamiento hasta el cierre, las razones cognitivas por las que funciona y técnicas concretas para mantener a los niños comprometidos en cada fase. Esto trata sobre CÓMO enseñas, independientemente del tema.',
    sections:[
      {t:'🗺️ Por qué la estructura importa tanto como el contenido', cards:[
        {type:'text', h:'Una gran lección tiene una forma', b:'Puedes saber Python a la perfección y aun así dar una lección débil si no tiene estructura. Los niños aprenden mejor dentro de un <strong>ritmo predecible</strong>: se asientan más rápido, retienen más y se mantienen motivados cuando cada lección sigue el mismo arco familiar. Las lecciones de Kodland usan una estructura deliberada de ocho fases con un diseño en "espejo": la forma en que una lección <em>termina</em> refleja la forma en que <em>comienza</em>.'},
        {type:'text', h:'Qué entrena este módulo', b:'A diferencia de los módulos de programación, este trata sobre <strong>tu manera de impartir</strong>, no sobre el material. Aprenderás las ocho fases, por qué existe cada una y —lo más importante— cómo mantener a los estudiantes participando activamente en lugar de mirando pasivamente. Estos hábitos se aplican a cada lección que impartas, sin importar el tema.'},
        {type:'tip', txt:'La consistencia es la clave. Una vez que los estudiantes aprenden tu ritmo, dejan de gastar energía en averiguar "¿qué pasa ahora?" y la gastan en aprender. Ejecuta la misma estructura cada vez hasta que sea algo natural, tanto para ti como para ellos.'}
      ]},
      {t:'🌅 El comienzo: cuatro fases', cards:[
        {type:'text', h:'1 · Calentamiento — activar energía y concentración', b:'Abre con algo ligero que ponga el cerebro del estudiante en "modo lección": una pregunta rápida, un pequeño desafío, mirar algo divertido. El objetivo es energía y atención, no evaluación. Señala "estamos empezando ahora" y atrae a la sesión a un niño distraído.'},
        {type:'text', h:'2 · Repaso de la lección anterior — recordar y consolidar', b:'Revisa brevemente lo que se aprendió la última vez. La recuperación —hacer que el estudiante <em>recuerde</em> en lugar de volver a escuchar— es una de las herramientas de memoria más potentes que existen. Un "¿qué recuerdas sobre los bucles?" de dos minutos logra más que volver a explicar.'},
        {type:'text', h:'3 · Revisión de tarea — revisar la tarea juntos', b:'Repasa la tarea <em>con</em> el estudiante. Aquí es donde detectas malentendidos, elogias el esfuerzo y muestras que la tarea realmente importa. Saltártela les enseña a los niños que la tarea es opcional.'},
        {type:'text', h:'4 · Objetivo de la lección — establecer metas claras', b:'Di con claridad de qué se trata hoy: "hoy haremos que nuestro sprite se mueva cuando presiones las teclas de flecha". Una meta clara le da dirección a la lección y le da al estudiante algo concreto a lo cual apuntar.'}
      ]},
      {t:'🏁 El final: el espejo', cards:[
        {type:'hi', h:'El final refleja el comienzo, en orden inverso', b:'Las cuatro fases de cierre hacen eco de las de apertura en orden inverso: la lección termina como comenzó, dando a los estudiantes una satisfactoria sensación de <strong>cierre y ritmo</strong>. Esta forma "circular" es lo que hace que una lección se sienta completa en lugar de simplemente detenerse cuando se acaba el tiempo.'},
        {type:'text', h:'1 · Resumen de la lección — basado en el tutor + el estudiante', b:'Recapitula lo que se cubrió, pero no solo se lo digas. Haz que el <em>estudiante</em> también resuma con sus propias palabras. Su resumen revela lo que realmente quedó y sirve como un segundo momento de recuperación.'},
        {type:'text', h:'2 · Asignación de tarea — instrucciones claras', b:'Asigna la tarea con instrucciones clarísimas sobre qué hacer y cómo. Una tarea vaga es una tarea que no se hará. Esto se empareja con la Revisión de tarea que abrió la lección.'},
        {type:'text', h:'3 · Adelanto de la próxima lección — despertar la curiosidad', b:'Adelanta lo que viene: "¡la próxima vez haremos que los enemigos te persigan!". Un gancho genera anticipación e impulso hacia adelante entre sesiones: se empareja con el Objetivo de la lección del inicio.'},
        {type:'text', h:'4 · Cierre — terminar con energía', b:'Termina en alto: celebra lo que el estudiante construyó hoy, reconoce su esfuerzo y despídelo sintiéndose bien. Los últimos 30 segundos moldean cómo recuerda toda la lección.'}
      ]},
      {t:'💡 Por qué funciona esta estructura', cards:[
        {type:'twocol', left:{h:'🧠 Facilidad cognitiva', items:['Un formato predecible reduce la carga mental','Los estudiantes saben qué esperar','La concentración va al aprendizaje, no a descifrar la forma de la lección']}, right:{h:'🔁 Impulso a la retención', items:['El repaso al INICIO consolida la vez anterior','El resumen al FINAL consolida lo de hoy','Dos puntos de control de memoria → mucho mejor recuerdo']}},
        {type:'twocol', left:{h:'🎯 Propósito claro', items:['Enunciar la meta por adelantado genera motivación','Adelantar la próxima lección crea impulso','El estudiante siempre sabe por qué está aquí']}, right:{h:'✅ Ciclo de responsabilidad', items:['La revisión de tarea al inicio...','...se empareja con la asignación de tarea al final','Los estudiantes sienten la continuidad entre lecciones']}},
        {type:'good', txt:'Observa el emparejamiento: calentamiento ↔ cierre, repaso ↔ resumen, revisión de tarea ↔ asignación de tarea, objetivo de la lección ↔ adelanto de la próxima lección. Cada fase de apertura tiene una pareja de cierre. Esa simetría es lo que hace que la estructura sea "circular" y memorable.'}
      ]},
      {t:'🙋 Mantener a cada niño involucrado', cards:[
        {type:'text', h:'La regla de oro', b:'Una lección en la que el tutor habla y el estudiante escucha es una lección débil. Tu trabajo es hacer que el estudiante <strong>haga, diga y piense</strong> tanto como sea posible. Usa estas cuatro técnicas constantemente, en cada fase.'},
        {type:'twocol', left:{h:'❓ Preguntas abiertas', items:['Pregunta "¿Qué crees que pasará si…?"','Usa "¿Cómo resolverías…?" para provocar razonamiento','Evita preguntas de sí/no — invita al pensamiento real']}, right:{h:'🖥️ Compartir pantalla', items:['Haz que el estudiante comparta su pantalla','Deja que te explique paso a paso su propio trabajo','Excelente durante la revisión de tarea y el calentamiento — genera apropiación']}},
        {type:'twocol', left:{h:'📖 Lectura de diapositivas', items:['Invita a los estudiantes a leer el texto de las diapositivas en voz alta','Pídeles que lo expliquen con sus propias palabras','Mejora la comprensión y los mantiene activos']}, right:{h:'🌟 Elogio y aliento', items:['Sé específico: "¡Gran trabajo explicando ese paso!"','Elogia el esfuerzo, no solo las respuestas correctas','Usa la energía para mantener el impulso en todo momento']}},
        {type:'warn', txt:'Cuidado con la trampa de la lección pasiva: se siente fluida porque no hay fricción, pero el estudiante no aprende mucho. Si has estado hablando más de un minuto o dos sin que el estudiante haga o diga algo, devuélveselo.'}
      ]},
      {t:'🎯 Llevándolo a la práctica', cards:[
        {type:'hi', h:'La estructura te libera, no te restringe', b:'A veces los tutores nuevos temen que una estructura fija haga las lecciones robóticas. Lo contrario es cierto: una vez que las fases son automáticas, dejas de preocuparte por "¿qué sigue?" y tienes toda tu atención libre para el estudiante: sus preguntas, sus errores, su energía. La estructura es el andamio que te permite estar presente.'},
        {type:'tip', txt:'Ten una lista de verificación mental (o literal) de las ocho fases para tus primeras lecciones. Después de unas semanas el ritmo se vuelve automático. En el próximo módulo, verás una lección real y observarás cada una de estas fases y técnicas en acción.'}
      ]}
    ],
    quiz:[
      {q:'¿Por qué la estructura de lección de Kodland se describe como un formato "espejo" o "circular"?', opts:['Las fases de cierre hacen eco de las de apertura en orden inverso, así que la lección termina como comenzó','El tutor y el estudiante intercambian roles a la mitad','Las diapositivas se muestran dos veces, hacia adelante y luego hacia atrás','Cada lección repite exactamente la lección anterior'], c:0, fb:'El final refleja el comienzo en orden inverso (calentamiento↔cierre, repaso↔resumen, etc.), dando cierre y ritmo.'},
      {q:'Un tutor se salta el Repaso de la lección anterior para ahorrar tiempo. ¿Cuál es el principal costo, pedagógicamente?', opts:['Pierde un momento de recuperación — hacer que los estudiantes recuerden el aprendizaje previo es una de las formas más potentes de consolidarlo','Nada, siempre que se enuncie la meta','La tarea no se puede asignar después','La lección se pasará de tiempo'], c:0, fb:'El repaso fuerza la recuperación, una potente herramienta de memoria. Es uno de los dos puntos de control de consolidación de la estructura.'},
      {q:'¿Qué par de fases forma el "ciclo de responsabilidad" a lo largo de una lección?', opts:['La Revisión de tarea al inicio y la Asignación de tarea al final','Calentamiento y Objetivo de la lección','Lectura de diapositivas y Elogio','Resumen de la lección y Cierre'], c:0, fb:'Revisar la tarea al inicio y asignarla al final cierra el ciclo y genera continuidad entre lecciones.'},
      {q:'Un estudiante responde correctamente una pregunta de sí/no pero parece desconectado. ¿Cuál es la mejor jugada de preguntas?', opts:['Hacer una pregunta abierta como "¿Cómo resolverías esto?" o "¿Qué crees que pasa si…?"','Hacer más preguntas de sí/no más rápido','Responder tú mismo la pregunta para mantener el ritmo','Pasar de inmediato a la siguiente diapositiva'], c:0, fb:'Las preguntas abiertas invitan al razonamiento y al pensamiento activo; las de sí/no dejan que los estudiantes se relajen.'},
      {q:'¿Cuál es la forma más fuerte de elogio según los principios de participación?', opts:['Elogio específico que reconoce el esfuerzo y el proceso, por ejemplo "¡Gran trabajo explicando ese paso!"','Un genérico "buen trabajo" después de cada respuesta','Elogiar solo las respuestas perfectamente correctas','Guardar todo el elogio para el cierre'], c:0, fb:'El elogio específico ligado al esfuerzo y al proceso es más motivador y creíble que el genérico o el basado solo en resultados.'},
      {q:'Un tutor da una lección fluida pero habló la mayor parte del tiempo mientras el estudiante miraba. ¿Por qué es una señal de alerta?', opts:['Una lección pasiva se siente sin fricción pero el estudiante aprende poco — debería estar haciendo, diciendo y pensando todo el tiempo','No es un problema si se cubrió el material','Significa que se siguió correctamente la estructura','La fluidez siempre indica una gran lección'], c:0, fb:'La participación es la meta. Si el tutor habla durante largos tramos sin acción del estudiante, el aprendizaje baja: devuélveselo al estudiante.'}
    ]
  },
  {
    id:9, emoji:'🎥', color:'#0EA5E9', lesson:true,
    title:'Ejemplo de una gran lección',
    desc:'Mira una lección modelo de Python de Kodland de principio a fin, con una transcripción completa y notas de enseñanza.',
    obj:'Ver la estructura de lección de ocho fases y las técnicas de participación del módulo anterior puestas en práctica por un tutor experimentado: ritmo, preguntas, modelado, retroalimentación, aliento y flujo del aula, en una única lección real y grabada de Python de Kodland.',
    completeH:'¿Viste la lección modelo?',
    completeBody:'Una vez que hayas visto la grabación y leído las notas de evaluación, marca este módulo como completado para terminar tu capacitación y desbloquear la Prueba de Habilidades Digitales.',
    completeBtn:'✓ Marcar como visto',
    sections:[
      {t:'🎬 La grabación', cards:[
        {type:'video', src:'https://www.youtube-nocookie.com/embed/eNZ6h1oycJI?rel=0', cap:'Una lección real de Python de Kodland, grabada completa. Activa los subtítulos (CC) para seguir la transcripción sincronizada.'},
        {type:'warn', txt:'La grabación es una lección real y dura alrededor de 1 hora y 48 minutos. Míralo completo cuando puedas prestarle atención: es la mejor referencia individual de todo lo que ha cubierto esta capacitación.'}
      ]},
      {t:'🧭 Acerca de esta lección', cards:[
        {type:'text', h:'Qué estás viendo', b:'Esta es una lección genuina y sin guion de Python de Kodland dirigida por un tutor experimentado con un pequeño grupo de estudiantes. La clase trabaja en un proyecto que combina habilidades anteriores —<strong>funciones y diccionarios/listas</strong> (basándose en un proyecto de lista de películas y un gestor de contraseñas)— el tipo de proyecto de consolidación que conociste en los módulos de Datos y Funciones.'},
        {type:'hi', h:'Fíjate en la estructura que acabas de aprender', b:'Mientras miras, detecta las ocho fases del <strong>Módulo 8</strong> en acción: el saludo y el calentamiento, el puente con la lección anterior, la revisión de la tarea y la meta clara al inicio; luego, al final, la recapitulación, la tarea para la próxima vez y el adelanto de la próxima lección. La apertura y el cierre se reflejan mutuamente, exactamente como describe la estructura "circular".'}
      ]},
      {t:'✅ Por qué esta es una gran lección — evaluación de control de calidad', cards:[
        {type:'text', h:'Evaluada según nuestros criterios de control de calidad', b:'Cada lección de Kodland puede evaluarse según un conjunto de criterios de calidad de control de calidad. Esta lección <strong>los aprobó todos</strong>. A continuación está la evidencia, agrupada por las fases de la lección del Módulo 8: úsala como una lista de verificación de cómo se ve "grande" en la práctica.'},
        {type:'qa', h:'🌅 Apertura de la lección', items:[
          {k:'Calentamiento y saludo', v:'El tutor saludó a los estudiantes y le preguntó a Marvel cómo estaba.'},
          {k:'Objetivo de la lección', v:'Enunció la meta: trabajar en un proyecto que combina sus conocimientos previos.'},
          {k:'Puente con la lección anterior', v:'Preguntó si los estudiantes habían construido antes un gestor de contraseñas; Marvel recordó un proyecto anterior de lista de películas.'},
          {k:'Revisión de la tarea del hogar', v:'Revisó la tarea anterior y la discutió con los estudiantes.'}
        ]},
        {type:'qa', h:'🧑‍🏫 Instrucción y práctica', items:[
          {k:'Fragmentación clara de las instrucciones', v:'Dio instrucciones en pequeños pasos, por ejemplo explicando la estructura del proyecto y las tareas individuales.'},
          {k:'Modelado antes del trabajo independiente', v:'Demostró cómo imprimir elementos de un diccionario antes de dejar que los estudiantes trabajaran por su cuenta.'},
          {k:'Etapa de práctica presente', v:'Los estudiantes participaron en una etapa de práctica clara, trabajando en sus proyectos de programación.'}
        ]},
        {type:'qa', h:'🙋 Participación e involucramiento', items:[
          {k:'Participación amplia', v:'Involucró a varios estudiantes —Marvel, Gabriel y Shriyansh— en lugar de depender de uno solo.'},
          {k:'Dirigirse directamente a los estudiantes', v:'Se dirigió a los estudiantes por su nombre durante las interacciones de aprendizaje.'},
          {k:'Participación de aprendizaje de varios estudiantes', v:'Marvel, Gabriel y Shriyansh participaron todos en las interacciones de aprendizaje.'},
          {k:'Interacción repetida con los estudiantes', v:'Creó interacciones de aprendizaje repetidas con diferentes estudiantes a lo largo de la lección.'},
          {k:'Retroalimentación útil para la instrucción', v:'Dio retroalimentación sobre el código de los estudiantes, ayudándolos a corregir sus errores.'},
          {k:'Razonamiento del estudiante provocado', v:'Pidió a los estudiantes que explicaran su comprensión de las funciones y las listas, y obtuvo respuestas relevantes.'}
        ]},
        {type:'qa', h:'😊 Clima de aprendizaje positivo', items:[
          {k:'Poca confusión repetida', v:'Menos de tres expresiones explícitas de confusión del estudiante en toda la lección.'},
          {k:'Sin rechazo ni aburrimiento explícitos', v:'Sin rechazo, aburrimiento ni insatisfacción explícitos por parte de los estudiantes.'}
        ]},
        {type:'qa', h:'🏁 Cierre de la lección (el espejo)', items:[
          {k:'Recapitulación o repaso de cierre', v:'Recapituló las habilidades aprendidas durante el módulo y discutió los próximos pasos.'},
          {k:'Tarea para la próxima clase', v:'Asignó tarea: terminar el proyecto iniciado en clase.'},
          {k:'Continuidad con la próxima lección', v:'Les dijo a los estudiantes que la próxima lección cubriría los algoritmos lineales.'}
        ]},
        {type:'good', txt:'Observa la simetría: la lección abre con un saludo, un puente con la vez anterior, una revisión de tarea y una meta clara, y cierra con una recapitulación, la tarea para la próxima vez y un adelanto de lo que sigue. Ese espejo es exactamente la estructura del Módulo 8, y es en gran parte por lo que esta lección obtiene un puntaje tan alto.'}
      ]}
    ]
  }
]
};
