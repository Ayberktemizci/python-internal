/* ============================================================================
   Kodland Python Tutor Training — CONTENT (English, source of truth)
   To create another language: copy this file to content-XX.js and translate
   every STRING VALUE below. Do NOT change keys, structure, HTML tags, CSS
   classes, or Python code — inside code blocks translate ONLY the # comments.
   Set code/htmlLang/title, set dst.formUrl:'' and translate dst.placeholderNote.
   ============================================================================ */
window.CONTENT = {
code: 'en',
htmlLang: 'en',
title: 'Python Tutor Training — Kodland',
ui: {
  logoSub: 'Python Training',
  changeRegion: '🌐 Region',
  heroEyebrow: '🐍 Tutor Training Program',
  heroTitle: 'Prepare to teach<br><span class="h-pill">Python</span><br>to kids',
  heroSub: "Work through every module and pass each quiz to complete your tutor preparation. Score 70%+ on a module quiz to unlock the next one — there's no skipping ahead.",
  progLabel: 'modules done',
  modulesLabel: 'Your modules',
  allDone: '🏆 All done!',
  completeWord: 'complete',
  backModules: '← Modules',
  exitQuiz: '← Exit Quiz',
  backDashboard: '← Dashboard',
  moduleWord: 'Module',
  ofWord: 'of',
  objectiveWord: 'Objective',
  badgePassed: '✓ Passed',
  badgeLocked: '🔒 Locked',
  badgeStart: 'Start →',
  badgeWatched: '✓ Watched',
  badgeWatch: '▶ Watch',
  tagCompleted: 'Completed',
  tagExampleLesson: 'Example lesson',
  completeModuleWord: 'Complete module',
  scoreWord: 'Score',
  questionsWord: 'questions',
  takeQuiz: '📝 Take the Quiz →',
  retakeQuiz: '🔄 Retake Quiz',
  markComplete: 'Mark Complete',
  doneCompleted: '✓ Completed',
  moduleComplete: 'Module Complete',
  questionWord: 'Question',
  correctPrefix: '✅ Correct! ',
  notQuitePrefix: '❌ Not quite. ',
  seeResults: 'See Results →',
  nextBtn: 'Next →',
  modulePassed: 'Module Passed!',
  keepReviewing: 'Keep Reviewing',
  scoreLine: 'You got {s}/{t} correct.',
  passMsg: ' Next module unlocked!',
  failMsg: ' You need 70% to pass. Review and try again!',
  reviewModuleWord: '📖 Review Module',
  startModuleWord: 'Start Module',
  watchModuleWord: '▶ Watch Module',
  viewCertificate: '🏆 View Certificate',
  trainingComplete: 'Training Complete!',
  completeSub: "You've worked through every module — congratulations! You're ready for the Digital Skill Test.",
  certLabel: 'Certificate of Completion',
  certTitle: 'Python Tutor Training',
  certLine: 'Kodland · All {n} modules · Average quiz score: {avg}%',
  takeDST: '🎯 Take the Digital Skill Test →',
  backDashboard2: '← Back to Dashboard',
  dstCardStage: 'Final Stage',
  dstCardTitle: 'Digital Skill Test',
  dstCardDesc: 'The final practical assessment, completed after every module.',
  dstReady: 'Ready',
  dstCardTag: 'Practical assessment',
  videoFallback: 'Your browser can’t play this video.',
  videoDownload: 'Download it',
  videoPhTitle: 'Recording coming soon',
  videoPhBody: 'The model lesson video will appear here.'
},
dst: {
  formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe5PHHfupTugMd-rkb8JTLZ5O-0l88MMGtg5ZjU5SF4pmQ7cw/viewform',
  placeholderNote: '',
  html: `<div class="dst-body">
    <div class="dst-intro">
      <div class="dst-badge">🏆 Digital Skill Test · 2025</div>
      <div class="dst-h1">Test for Python Tutors</div>
      <p class="dst-sub">In this task, you can demonstrate your Python knowledge and your ability to assist students while writing projects — as well as your diligence, honesty, and willingness to follow the established guidelines. Your task is to create a game that meets the requirements below. You don’t need a super cool third-party project — you need a project that is a good fit for this specific task!</p>
    </div>

    <div class="dst-stage-header">
      <span class="dst-stage-pill">The Task</span>
      <span class="dst-stage-title">🎮 Build a game</span>
    </div>

    <div class="dst-task">
      <div class="dst-task-num">1</div>
      <div class="dst-task-body"><p>The project folder must include a <code>readme.txt</code> listing the used libraries and instructions on how to run the project.</p></div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">2</div>
      <div class="dst-task-body"><p>The code must be <strong>entirely original and written independently.</strong> (The visuals do not need to be original.)</p></div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">3</div>
      <div class="dst-task-body"><p>Only the following modules may be used:</p>
        <ul>
          <li><strong>Pygame Zero</strong></li>
          <li><strong>math</strong></li>
          <li><strong>random</strong></li>
          <li>Other libraries are <strong>NOT ALLOWED!</strong></li>
          <li>The <strong>Pygame</strong> library <strong>MUST NOT</strong> be used.</li>
          <li><em>Exception:</em> you may import the <code>Rect</code> class from Pygame.</li>
        </ul>
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">4</div>
      <div class="dst-task-body"><p>You may only create a game of one of the following types:</p>
        <ul>
          <li><strong>Roguelike</strong> (e.g. The Binding of Isaac, Hades, Slay the Spire)</li>
          <li><strong>Platformer</strong> (e.g. Super Mario Bros., Sonic the Hedgehog)</li>
          <li><strong>Runner</strong> (e.g. Subway Surfers, Temple Run)</li>
        </ul>
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">5</div>
      <div class="dst-task-body"><p>The game must have a <strong>main menu with clickable buttons:</strong></p>
        <ul>
          <li>Start Game</li>
          <li>Turn Music and Sounds On/Off</li>
          <li>Exit</li>
        </ul>
        <img class="dst-img" src="assets/dst/image1.png" alt="Example game screen with clickable menu buttons" loading="lazy">
        <img class="dst-img" src="assets/dst/image5.png" alt="Example main menu: Play, Sound On/Off, Exit" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">6</div>
      <div class="dst-task-body"><p>The game must have at least <strong>two different enemies</strong> that are dangerous to the hero.</p>
        <img class="dst-img" src="assets/dst/image3.gif" alt="Roguelike map with several different enemies" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">7</div>
      <div class="dst-task-body"><p>The enemies must <strong>move within their own areas.</strong></p>
        <img class="dst-img" src="assets/dst/image4.gif" alt="Enemies moving, each confined to its own room" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">8</div>
      <div class="dst-task-body"><p>The game must have a <strong>logical game-ending mechanic without bugs</strong> — for both winning and losing.</p>
        <img class="dst-img" src="assets/dst/image7.gif" alt="Example gameplay leading to a win/lose outcome" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">9</div>
      <div class="dst-task-body"><p>Both the player character and the enemies must have <strong>sprite animations for moving</strong> (for example, leg movements while walking).</p>
        <img class="dst-img" src="assets/dst/image10.gif" alt="Character running with animated leg movement" loading="lazy">
        <div class="dst-imgrow"><img class="dst-img pix" src="assets/dst/image11.gif" alt="Animated character moving through grass"></div>
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">10</div>
      <div class="dst-task-body"><p>The game must have <strong>both background music and game sounds</strong> (sounds when the character attacks or collides with an enemy, a coin sound when collecting a reward, etc.).</p><p style="margin-top:6px">Example sound resource: <a class="dst-inline-link" href="https://mixkit.co" target="_blank" rel="noopener noreferrer">mixkit.co</a></p></div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">11</div>
      <div class="dst-task-body"><p>Both the player character and the enemies must have <strong>idle animations</strong> (for example: breathing, looking around, moving fins, wagging tails, etc.).</p><p style="margin-top:6px">Example visual resource: <a class="dst-inline-link" href="https://kenney.nl" target="_blank" rel="noopener noreferrer">Kenney.nl</a></p>
        <div class="dst-imgrow">
          <img class="dst-img pix" src="assets/dst/image9.gif" alt="Idle character animation">
          <img class="dst-img pix" src="assets/dst/image6.gif" alt="Idle character animation in grass">
          <img class="dst-img pix" src="assets/dst/image2.gif" alt="Idle scene with enemy">
        </div>
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">12</div>
      <div class="dst-task-body"><p>You must write <strong>your own classes</strong> to implement character movement and sprite animations. <strong>(Object-Oriented Programming)</strong></p>
        <img class="dst-img" src="assets/dst/image8.png" alt="Example of a custom class implementing movement" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">13</div>
      <div class="dst-task-body"><p>You must use <strong>clear, meaningful English names</strong> for variables, classes and functions — follow <strong>PEP 8</strong> rules.</p></div>
    </div>

    <div class="dst-stage-header">
      <span class="dst-stage-pill">Notes</span>
      <span class="dst-stage-title">📌 Definitions & guidance</span>
    </div>
    <div class="card">
      <ul style="padding-left:17px">
        <li style="margin-bottom:6px">A <strong>roguelike</strong> game is a top-down game where all objects and characters are placed on the grid of the game world. Movement between cells must be smooth and animated.</li>
        <li style="margin-bottom:6px">A <strong>point-and-click adventure</strong> game offers a top-down perspective similar to roguelike games, but the character’s movement is not restricted to the grid.</li>
        <li style="margin-bottom:6px">A <strong>platformer</strong> is a side-view game where the character can jump across platforms.</li>
        <li><strong>Sprite animation</strong> means using a sequence of continuously and cyclically changing images to animate a character. Simply switching between a left-facing image and a right-facing image is <strong>NOT</strong> sprite animation. 🧐</li>
      </ul>
    </div>
    <div class="callout ct"><span class="ci">💡</span><span>You don’t need overly complex or long code — typically <strong>100–200 meaningful lines</strong> are enough to complete the task well.</span></div>
    <div class="callout cg"><span class="ci">✅</span><span>The complexity of this project is only about <strong>30% higher</strong> than the final projects of our students. If a tutor can guide students through their projects, this level is well within reach — we hope you complete it successfully! 👍</span></div>

    <div class="dst-stage-header">
      <span class="dst-stage-pill">Important</span>
      <span class="dst-stage-title">⚠️ Please read carefully</span>
    </div>
    <div class="callout cw"><span class="ci">⚠️</span><span>If you violate several key requirements at once, there may be <strong>no opportunity to revise</strong> the project.</span></div>
    <div class="callout cw"><span class="ci">⚠️</span><span>The project must <strong>NOT</strong> be fully or partially copied from the internet — doing so will immediately raise concerns about your honesty and professionalism.</span></div>
    <div class="callout cw"><span class="ci">🚫</span><span>The use of <strong>AI is a direct rejection reason.</strong></span></div>

    <div class="dst-stage-header">
      <span class="dst-stage-pill">Submission</span>
      <span class="dst-stage-title">📤 How to submit</span>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">1</div>
      <div class="dst-task-body"><p>Upload the completed project to a cloud storage platform (<strong>Google Drive or GitHub</strong>) and make sure to <strong>provide access</strong> to the project folder. Please do <strong>NOT</strong> use compressed file formats!</p></div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">2</div>
      <div class="dst-task-body"><p>Complete the skill test below and <strong>paste your project link</strong> as the answer to the final question.</p></div>
    </div>
    <div class="dst-submit-card">
      <h3>🔗 Ready to submit?</h3>
      <p>Open the skill test form, complete it, and paste your project link as the final answer.</p>
      <a class="dst-link-btn" id="dst-form-btn" href="#">Open the Skill Test Form →</a>
    </div>

    <p style="text-align:center;color:var(--text-muted);font-size:14px;margin-top:28px">Good luck! 🍀</p>
</div>`
},
modules: [
  {
    id:1, emoji:'🐍', color:'#AEDD2E',
    title:'Python Foundations',
    desc:'print, variables, input, data types and type conversion — a child’s very first program.',
    obj:'Build a teaching-grade understanding of the absolute basics: output, variables, input, the core data types, and the conversions between them. By the end you should be able to explain each one three different ways and predict the exact errors a beginner will hit.',
    sections:[
      {t:'🗺️ Where this sits in the course', cards:[
        {type:'text', h:'The first contact with code', b:'This is the module where a child runs their first program ever. Nothing here is hard for you — the challenge is entirely pedagogical. The course arc is deliberate: <strong>output</strong> (<code>print</code>) so they see results instantly → <strong>variables</strong> so the program can remember things → <strong>input</strong> so it can talk back → <strong>data types</strong> so they understand what kind of value they’re holding → <strong>conversion</strong> so input can be used in maths. Every later module — loops, lists, functions, even games — stands on these five ideas.'},
        {type:'text', h:'Your real job in lesson 1', b:'Get a working, personalised program on the child’s screen within the first few minutes. Early, visible success is what makes a 9-year-old want to come back. Theory comes <em>after</em> the dopamine hit of seeing their own name printed, never before it.'},
        {type:'tip', txt:'Pace rule: one new idea, then immediately run something. Beginners cannot hold three abstract concepts in their head before seeing any of them work. Code → run → react → next idea.'}
      ]},
      {t:'🖨️ print() — output', cards:[
        {type:'text', h:'What to teach', b:'<code>print()</code> displays whatever is inside the brackets. Text needs quotes; numbers don’t. You can print several things at once by separating them with commas, and Python adds a space between them automatically.'},
        {type:'code', lbl:'print basics', code:`<span class="cf">print</span>(<span class="cs">"Hello, world!"</span>)
<span class="cf">print</span>(<span class="cn">2024</span>)
<span class="cf">print</span>(<span class="cs">"You are"</span>, <span class="cn">9</span>, <span class="cs">"years old"</span>)
<span class="cc"># Output: You are 9 years old</span>`},
        {type:'warn', txt:'The #1 first-ever error is forgetting the quotes: <code>print(Hello)</code> makes Python look for a <em>variable</em> called Hello and throw <code>NameError</code>. Teach the rule out loud: <strong>"text always wears quotes."</strong>'}
      ]},
      {t:'📦 Variables — memory', cards:[
        {type:'text', h:'What to teach', b:'A variable stores one value under a name so you can reuse it later. The name goes on the left of <code>=</code>, the value on the right. Reading the line right-to-left helps: "take the value 9, and put it in the box called age."'},
        {type:'code', lbl:'variables', code:`name = <span class="cs">"Mia"</span>
age = <span class="cn">9</span>
<span class="cf">print</span>(<span class="cs">"Hi"</span>, name)
age = age <span class="ck">+</span> <span class="cn">1</span>   <span class="cc"># the box can be updated</span>
<span class="cf">print</span>(<span class="cs">"Next year:"</span>, age)`},
        {type:'hi', h:'The metaphor that works', b:'"A variable is a labelled box that holds one thing. Put something new in and the old thing is gone." This explains reassignment perfectly — kids immediately grasp that <code>age = age + 1</code> empties the box and refills it.'},
        {type:'warn', txt:'<code>=</code> is not "equals" in the maths sense — it means "put the right side into the left side." Saying "equals" out loud causes real confusion later with <code>==</code>. Say "<strong>gets</strong>" or "<strong>becomes</strong>" instead: "age becomes 10."'}
      ]},
      {t:'⌨️ input() — and why everything is a string', cards:[
        {type:'text', h:'The single most important idea in the module', b:'<code>input()</code> pauses the program, waits for the user to type, and hands back what they typed <strong>as a string — always, even if they typed digits.</strong> This one fact is the source of more beginner bugs than anything else in the whole course, so it deserves real time.'},
        {type:'code', lbl:'the classic bug, then the fix', code:`age = <span class="cf">input</span>(<span class="cs">"How old are you? "</span>)
<span class="cf">print</span>(age <span class="ck">+</span> <span class="cn">1</span>)
<span class="cc"># TypeError: can only concatenate str ... not int</span>

<span class="cc"># Fix: convert the text into a number</span>
age = <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"How old are you? "</span>))
<span class="cf">print</span>(<span class="cs">"Next year you’ll be"</span>, age <span class="ck">+</span> <span class="cn">1</span>)`},
        {type:'good', txt:'Teach it as a story: "input always gives you words, never numbers. If you want to do maths, you must first turn the words into a number with <code>int()</code>." Show the crash on purpose, read the error together, then fix it. The bug-then-fix sequence is more memorable than a rule given upfront.'}
      ]},
      {t:'🔢 Data types & conversion', cards:[
        {type:'text', h:'The three types kids meet first', b:'<strong>str</strong> (text in quotes), <strong>int</strong> (whole numbers), and <strong>float</strong> (decimals). <code>type(x)</code> reveals which one a value is — keep it open in a demo and check things live. Conversion functions move between them: <code>int("5")</code> → 5, <code>str(5)</code> → "5", <code>float("3.2")</code> → 3.2.'},
        {type:'code', lbl:'type() and conversions', code:`<span class="cf">print</span>(<span class="cf">type</span>(<span class="cs">"hi"</span>))    <span class="cc"># &lt;class 'str'&gt;</span>
<span class="cf">print</span>(<span class="cf">type</span>(<span class="cn">7</span>))       <span class="cc"># &lt;class 'int'&gt;</span>
<span class="cf">print</span>(<span class="cf">type</span>(<span class="cn">3.5</span>))     <span class="cc"># &lt;class 'float'&gt;</span>

score = <span class="cf">int</span>(<span class="cs">"10"</span>)        <span class="cc"># "10" -&gt; 10</span>
label = <span class="cs">"Score: "</span> <span class="ck">+</span> <span class="cf">str</span>(score)  <span class="cc"># number -&gt; text to join</span>`},
        {type:'twocol', left:{h:'String + Number = trouble', items:['<code>"5" + 3</code> &rarr; <code>TypeError</code>','<code>"5" + "3"</code> &rarr; <code>"53"</code> (joined!)','<code>5 + 3</code> &rarr; <code>8</code> (real maths)']}, right:{h:'How to teach the difference', items:['Run all three live — let them predict','"+ on text glues; + on numbers adds"','Use <code>type()</code> to reveal why']}}
      ]},
      {t:'🧒 The misconceptions you will meet', cards:[
        {type:'twocol', left:{h:'What beginners get wrong', items:['Forgetting quotes around text','Treating <code>input()</code> as a number','Mixing <code>=</code> and <code>==</code>','Typos in variable names (<code>naem</code>)','Thinking a variable "shows" itself without <code>print</code>']}, right:{h:'Your pre-emptive moves', items:['"Text wears quotes"','"input always gives words"','"one = stores, two == asks"','Read the <code>NameError</code> together','"Storing is silent; only print shows"']}},
        {type:'warn', txt:'When an error appears, resist fixing it yourself. Read the last line of the traceback <em>with</em> the student and let them find the cause. Building error-reading independence early is one of the highest-leverage things a tutor does.'}
      ]},
      {t:'🎯 Putting it together', cards:[
        {type:'hi', h:'A first project they’re proud of', b:'A tiny "About Me" or age-in-2050 calculator uses every idea in the module: input, conversion, a variable, arithmetic and print. Let them personalise it (their name, their favourite game). Ownership turns a drill into something they screenshot and show a parent.'},
        {type:'code', lbl:'mini-project: age in 2050', code:`name = <span class="cf">input</span>(<span class="cs">"Your name? "</span>)
age = <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"Your age? "</span>))
future = age <span class="ck">+</span> (<span class="cn">2050</span> <span class="ck">-</span> <span class="cn">2024</span>)
<span class="cf">print</span>(name <span class="ck">+</span> <span class="cs">", in 2050 you’ll be "</span> <span class="ck">+</span> <span class="cf">str</span>(future))`},
        {type:'good', txt:'Notice this mini-project needs <code>int()</code> on the way in and <code>str()</code> on the way out — a perfect, natural reason for conversions to exist. Reach for examples where the concept is genuinely needed rather than demonstrated in isolation.'}
      ]}
    ],
    quiz:[
      {q:'A student writes age = input("Age: ") then age + 1 and gets a TypeError. What is the cleanest fix and the idea behind it?', opts:['Wrap the input in int(): age = int(input(...)) — input always returns a string','Restart Python; the interpreter got confused','Rename the variable to avoid a clash','Remove the + 1 since you can’t add to input'], c:0, fb:'input() always returns a string, so it must be converted with int() before arithmetic. This is the module’s central idea.'},
      {q:'Which explanation of a "variable" is best for a 9-year-old?', opts:['A labelled box that holds one value you can reuse and overwrite','A function that returns stored data','A reserved keyword in Python','A loop that remembers numbers'], c:0, fb:'The "labelled box" metaphor is concrete and also explains reassignment cleanly.'},
      {q:'Why is it risky to read the "=" symbol aloud as "equals" to beginners?', opts:['It encourages confusion with ==, which actually means "is equal to"','"Equals" is grammatically incorrect','Python doesn’t use the = symbol','It makes the lesson longer'], c:0, fb:'Saying "gets" or "becomes" keeps assignment (=) distinct from comparison (==), preventing a very common later mix-up.'},
      {q:'A child runs their program and "nothing shows up", although they stored a value in a variable. The most likely cause?', opts:['They stored the value but never called print() to display it','The variable name is too long','Python only prints numbers','They need to import a display module'], c:0, fb:'Storing a value is silent; only print() puts something on screen. "Storing is silent, only print shows."'},
      {q:'What does print("5" + "3") output, and why is it a good thing to demonstrate live?', opts:['"53" — + joins strings, a memorable surprise that motivates type awareness','8 — Python adds the numbers','An error — you can’t use + on strings','"5 3" — Python adds a space'], c:0, fb:'Both operands are strings, so + concatenates to "53". The surprise sticks better than simply stating the rule.'},
      {q:'A student hits NameError: name ‘naem’ is not defined. The best teaching response is to:', opts:['Read the error line together and let them spot the typo','Silently correct it so the lesson keeps moving','Tell them variables are unreliable','Switch to a different example'], c:0, fb:'Coaching students to read tracebacks builds debugging independence — a core long-term goal.'}
    ]
  },
  {
    id:2, emoji:'🔀', color:'#F03D9E',
    title:'Control Flow: Conditions & Loops',
    desc:'if / elif / else, comparison and logical operators, plus while and for loops and nesting.',
    obj:'Teach programs to make decisions and to repeat. You should be able to explain indentation as syntax, choose for vs while on the spot, trace a loop by hand, and diagnose the infinite-loop and off-by-one errors before they happen.',
    sections:[
      {t:'🗺️ Where this sits in the course', cards:[
        {type:'text', h:'Two engines of every program', b:'Up to now programs ran straight down, top to bottom, once. This module adds the two things that make code actually <em>do</em> something interesting: <strong>decisions</strong> (<code>if/elif/else</code>) so the program can branch, and <strong>repetition</strong> (<code>while</code>, <code>for</code>) so it can do work many times without copy-paste. Combined, they produce the first real "algorithms" — and they power every game later in the course.'},
        {type:'warn', txt:'In Python, indentation <strong>is</strong> syntax, not styling. The spaces under an <code>if</code> or <code>for</code> are what tell Python "this belongs inside." Roughly half of all beginner bugs in this module are a missing colon or wrong indentation — budget time for it explicitly.'}
      ]},
      {t:'🔁 Conditions: if / elif / else', cards:[
        {type:'text', h:'What to teach', b:'<code>if</code> runs a block only when its condition is <code>True</code>. <code>elif</code> ("else if") is checked <em>only</em> if every condition above it was False. <code>else</code> is the catch-all when nothing matched. Python checks them top to bottom and stops at the first match — order matters.'},
        {type:'code', lbl:'branching', code:`score = <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"Your score: "</span>))
<span class="ck">if</span> score <span class="ck">&gt;=</span> <span class="cn">90</span>:
    <span class="cf">print</span>(<span class="cs">"Excellent!"</span>)
<span class="ck">elif</span> score <span class="ck">&gt;=</span> <span class="cn">50</span>:
    <span class="cf">print</span>(<span class="cs">"You passed"</span>)
<span class="ck">else</span>:
    <span class="cf">print</span>(<span class="cs">"Try again"</span>)`},
        {type:'text', h:'Comparison & logical operators', b:'Comparisons return True/False: <code>==</code> (equal), <code>!=</code> (not equal), <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>. Combine them with <code>and</code> (both must be true) and <code>or</code> (at least one true): <code>if age &gt;= 6 and age &lt;= 12:</code>.'},
        {type:'tip', txt:'A favourite trap: ordering <code>elif</code> branches wrong. If you check <code>score &gt;= 50</code> before <code>score &gt;= 90</code>, a 95 matches "passed" first and never reaches "Excellent." Teach students to order conditions from most-specific to least.'}
      ]},
      {t:'➰ for loops & range()', cards:[
        {type:'text', h:'What to teach', b:'A <code>for</code> loop repeats a known number of times. <code>range(n)</code> produces the numbers <strong>0 up to but not including n</strong> — so <code>range(5)</code> gives 0,1,2,3,4 (five numbers, starting at zero). <code>range(1, 6)</code> gives 1–5, and <code>range(0, 10, 2)</code> counts in steps of 2.'},
        {type:'code', lbl:'for + range', code:`<span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">5</span>):
    <span class="cf">print</span>(<span class="cs">"Step"</span>, i)        <span class="cc"># 0,1,2,3,4</span>

<span class="ck">for</span> n <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">5</span>, <span class="cn">0</span>, <span class="ck">-</span><span class="cn">1</span>):
    <span class="cf">print</span>(<span class="cs">"Countdown:"</span>, n) <span class="cc"># 5,4,3,2,1</span>`},
        {type:'warn', txt:'The off-by-one confusion is universal: students expect <code>range(5)</code> to print 1–5. Show it once, slowly, and write the produced numbers on the board: 0,1,2,3,4. "Starts at zero, stops <em>before</em> the number."'}
      ]},
      {t:'🔄 while loops', cards:[
        {type:'text', h:'What to teach', b:'A <code>while</code> loop repeats <em>as long as</em> its condition stays True — use it when you don’t know the count in advance ("keep asking until the password is right"). Something inside the loop <strong>must eventually make the condition False</strong>, or it runs forever.'},
        {type:'code', lbl:'while + a stop condition', code:`lives = <span class="cn">3</span>
<span class="ck">while</span> lives <span class="ck">&gt;</span> <span class="cn">0</span>:
    <span class="cf">print</span>(<span class="cs">"Lives:"</span>, lives)
    lives <span class="ck">-=</span> <span class="cn">1</span>      <span class="cc"># this is what ends the loop</span>
<span class="cf">print</span>(<span class="cs">"Game over"</span>)`},
        {type:'warn', txt:'The infinite loop is the signature <code>while</code> bug. If you forget <code>lives -= 1</code>, the program freezes forever. Teach students to ask <strong>before</strong> writing the body: "what line in here makes this loop eventually stop?"'}
      ]},
      {t:'🪆 Nesting', cards:[
        {type:'text', h:'What to teach', b:'Conditions and loops can live inside each other. A loop with an <code>if</code> inside lets you act differently on each pass; a loop inside a loop handles grids and tables. Each level of nesting is another level of indentation — keeping the indents tidy is what keeps nested code readable.'},
        {type:'code', lbl:'a loop with a decision inside', code:`<span class="ck">for</span> n <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">1</span>, <span class="cn">6</span>):
    <span class="ck">if</span> n <span class="ck">%</span> <span class="cn">2</span> == <span class="cn">0</span>:
        <span class="cf">print</span>(n, <span class="cs">"is even"</span>)
    <span class="ck">else</span>:
        <span class="cf">print</span>(n, <span class="cs">"is odd"</span>)`}
      ]},
      {t:'🧒 The misconceptions you will meet', cards:[
        {type:'twocol', left:{h:'What beginners get wrong', items:['<code>=</code> instead of <code>==</code> in a condition','Forgetting the colon <code>:</code>','Inconsistent / missing indentation','<code>range(5)</code> "should" be 1–5','Infinite <code>while</code> loops','Putting code after the loop, but indented into it']}, right:{h:'Your pre-emptive moves', items:['"one = stores, two == asks"','Make the colon a reflex','Always 4 spaces; show the block visually','Write the numbers out: 0,1,2,3,4','"What makes this loop stop?"','"Indent in = inside; line up = after"']}},
        {type:'tip', txt:'When a loop misbehaves, trace it by hand on a whiteboard: write i = 0, then 1, then 2, and what prints each time. "Unrolling" the loop removes the magic and is the single best debugging habit you can model.'}
      ]},
      {t:'🎯 How to teach it', cards:[
        {type:'hi', h:'for vs while — give them one sentence', b:'"Use <strong>for</strong> when you know how many times (do this 10 times). Use <strong>while</strong> when you repeat until something happens (keep going until they guess right)." That single rule resolves nearly every "which loop?" question.'},
        {type:'good', txt:'A number-guessing game is the perfect capstone here: a <code>while</code> loop, an <code>if/elif/else</code> for "too high / too low / correct", and <code>input()</code> from module 1. It feels like a real game and exercises everything at once.'}
      ]}
    ],
    quiz:[
      {q:'A student’s if-statement always runs the first branch regardless of input. What do you check first, and why?', opts:['Whether they wrote = instead of == — = assigns, == compares','Whether Python needs reinstalling','Whether they have enough elif branches','Whether the file was saved'], c:0, fb:'A single = assigns a value (always truthy here); == is the comparison. "One = stores, two == asks."'},
      {q:'What is the best one-sentence rule for choosing between for and while?', opts:['for when you know the number of repetitions; while when you repeat until a condition changes','Always prefer while; for is legacy','for is for numbers, while is for text','They are interchangeable in every case'], c:0, fb:'Known count → for. Repeat-until-something-happens → while.'},
      {q:'A child’s program freezes and never finishes. What do you teach them to look for?', opts:['The line inside the while loop that should eventually make its condition False','A missing print statement','Too many comments slowing it down','A typo inside a string'], c:0, fb:'A frozen program is usually an infinite while loop whose controlling variable never changes.'},
      {q:'What does range(5) produce, and what misconception must you pre-empt?', opts:['0,1,2,3,4 — students expect 1–5, so it "starts at zero, stops before the number"','1,2,3,4,5 — it counts naturally','Just the number 5','A random number below 5'], c:0, fb:'range(5) is zero-based and stops before 5. Writing the numbers out prevents the off-by-one error.'},
      {q:'Why does the ORDER of elif branches matter in if score >= 50 ... elif score >= 90?', opts:['Python stops at the first true condition, so a 95 would wrongly match >= 50 first','elif branches run in random order','Later branches override earlier ones','Order never matters in conditionals'], c:0, fb:'Conditions are checked top-to-bottom and stop at the first match — order from most specific to least.'},
      {q:'A nested block "after" a loop accidentally runs inside it. What is the underlying cause, and the teaching point?', opts:['Indentation: indented lines are inside the loop; lining them back up puts them after it','The colon was placed wrong','range() was misused','while should have been for'], c:0, fb:'Indentation defines blocks in Python. "Indent in = inside; line back up = after."'}
    ]
  },
  {
    id:3, emoji:'📦', color:'#2B8EF0',
    title:'Data: Lists, Dictionaries & Random',
    desc:'Storing many values: list creation and methods, indexing, dictionaries (key→value), and the random module.',
    obj:'Move students from single variables to collections. You should be able to teach zero-based indexing without confusion, choose list vs dictionary by the access pattern, demonstrate the core list methods, and use random to bring programs to life.',
    sections:[
      {t:'🗺️ Where this sits in the course', cards:[
        {type:'text', h:'From one value to many', b:'A variable holds one thing; real programs need collections. This module introduces <strong>lists</strong> (ordered, accessed by position) and <strong>dictionaries</strong> (accessed by a key/name), plus the <strong>random</strong> module for chance. These structures are everywhere in the game modules later — enemy lists, score tables, inventories, tile maps — so a solid grasp here pays off repeatedly.'},
        {type:'tip', txt:'The headline decision you’re teaching: "do I find this by its <em>position</em> or by its <em>name</em>?" Position → list. Name → dictionary. Frame every example around that question.'}
      ]},
      {t:'📋 Lists & indexing', cards:[
        {type:'text', h:'What to teach', b:'A list holds many values in order, written in square brackets. You read an item by its <strong>index</strong>, and indexes start at <strong>0</strong> — the first item is <code>pets[0]</code>, the second is <code>pets[1]</code>. <code>len(pets)</code> gives the count, so the last item is <code>pets[len(pets)-1]</code>.'},
        {type:'code', lbl:'lists & indexing', code:`pets = [<span class="cs">"cat"</span>, <span class="cs">"dog"</span>, <span class="cs">"fish"</span>]
<span class="cf">print</span>(pets[<span class="cn">0</span>])      <span class="cc"># cat (the FIRST item)</span>
<span class="cf">print</span>(pets[<span class="cn">2</span>])      <span class="cc"># fish</span>
<span class="cf">print</span>(<span class="cf">len</span>(pets))   <span class="cc"># 3</span>

<span class="ck">for</span> pet <span class="ck">in</span> pets:    <span class="cc"># loop over every item</span>
    <span class="cf">print</span>(pet)`},
        {type:'warn', txt:'Zero-based indexing is a genuine conceptual hurdle. Say "<strong>the first item is item zero</strong>" repeatedly, and show that <code>pets[3]</code> on a 3-item list throws <code>IndexError: list index out of range</code> — because valid indexes are 0, 1, 2.'}
      ]},
      {t:'🛠️ List methods', cards:[
        {type:'text', h:'What to teach', b:'Lists can change. The core methods: <code>append(x)</code> adds to the end, <code>insert(i, x)</code> adds at a position, <code>remove(x)</code> deletes the first matching value, <code>pop(i)</code> removes and returns the item at index i, and <code>clear()</code> empties the list.'},
        {type:'code', lbl:'mutating a list', code:`pets = [<span class="cs">"cat"</span>, <span class="cs">"dog"</span>]
pets.<span class="cf">append</span>(<span class="cs">"fish"</span>)    <span class="cc"># ["cat","dog","fish"]</span>
pets.<span class="cf">insert</span>(<span class="cn">0</span>, <span class="cs">"bird"</span>) <span class="cc"># ["bird","cat","dog","fish"]</span>
pets.<span class="cf">remove</span>(<span class="cs">"dog"</span>)     <span class="cc"># ["bird","cat","fish"]</span>
last = pets.<span class="cf">pop</span>()        <span class="cc"># removes & returns "fish"</span>`},
        {type:'twocol', left:{h:'append vs insert vs remove', items:['<code>append</code>: add to the end','<code>insert(i,x)</code>: add at index i','<code>remove(x)</code>: delete by value','<code>pop(i)</code>: delete by index, returns it']}, right:{h:'Common confusions', items:['<code>remove</code> takes a value, not an index','<code>pop</code> takes an index, not a value','<code>remove</code> deletes only the FIRST match','<code>append</code> takes exactly one argument']}}
      ]},
      {t:'🗂️ Dictionaries', cards:[
        {type:'text', h:'What to teach', b:'A dictionary stores <strong>key → value</strong> pairs in curly braces. Instead of a numeric position, you look things up by a meaningful key: <code>scores["Ann"]</code> means "give me the value stored under Ann." You can add or update with <code>scores["Leo"] = 12</code>.'},
        {type:'code', lbl:'dictionaries', code:`scores = {<span class="cs">"Ann"</span>: <span class="cn">15</span>, <span class="cs">"Leo"</span>: <span class="cn">9</span>}
<span class="cf">print</span>(scores[<span class="cs">"Ann"</span>])   <span class="cc"># 15 — look up by key</span>
scores[<span class="cs">"Mia"</span>] = <span class="cn">20</span>      <span class="cc"># add a new pair</span>
scores[<span class="cs">"Leo"</span>] = <span class="cn">11</span>      <span class="cc"># update existing</span>`},
        {type:'warn', txt:'Students confuse the key with the value, and direction matters: <code>scores["Ann"]</code> asks "what is Ann’s score?", it is not asking "is Ann 15?". Also, looking up a key that doesn’t exist throws <code>KeyError</code> — a useful, teachable error.'}
      ]},
      {t:'🎲 The random module', cards:[
        {type:'text', h:'What to teach', b:'Importing <code>random</code> unlocks chance. <code>random.randint(1, 6)</code> gives a whole number from 1 to 6 (both ends included), and <code>random.choice(my_list)</code> picks a random item from a list. This is the spark behind dice, quizzes, and enemy behaviour later.'},
        {type:'code', lbl:'random', code:`<span class="ck">import</span> random

dice = random.<span class="cf">randint</span>(<span class="cn">1</span>, <span class="cn">6</span>)
<span class="cf">print</span>(<span class="cs">"You rolled"</span>, dice)

pets = [<span class="cs">"cat"</span>, <span class="cs">"dog"</span>, <span class="cs">"fish"</span>]
<span class="cf">print</span>(random.<span class="cf">choice</span>(pets))`},
        {type:'warn', txt:'Forgetting <code>import random</code> gives <code>NameError: name ‘random’ is not defined</code>. Imports go once, at the very top of the file. Note <code>randint</code> includes both ends — unlike <code>range</code>, which excludes the top.'}
      ]},
      {t:'🎯 How to teach it', cards:[
        {type:'hi', h:'Two metaphors that land', b:'A list is "a <strong>numbered shelf</strong> — slot 0, slot 1, slot 2." A dictionary is "a <strong>contacts app</strong> — you look up a name and get a number." These map exactly onto index-vs-key and resolve most "which one?" questions instantly.'},
        {type:'good', txt:'The number-guessing game gets a perfect upgrade here: <code>random.randint</code> picks the secret number, a list stores past guesses. Combining random + lists + the loops from module 2 shows students how concepts compound into something genuinely fun.'}
      ]}
    ],
    quiz:[
      {q:'A student writes pets[1] expecting the first pet but gets the second. What do you teach, and what error proves the point?', opts:['Indexing starts at 0, so pets[0] is first; pets[3] on a 3-item list throws IndexError','Lists are unreliable and should be avoided','They must convert the list to a dictionary','Add 1 to every index from now on'], c:0, fb:'Zero-based indexing: first item is index 0, valid indexes are 0..len-1, and going past throws IndexError.'},
      {q:'When should a student reach for a dictionary instead of a list?', opts:['When they access values by a meaningful name/key rather than by position','Whenever the order of items matters most','Whenever there are more than ten items','Dictionaries are always the better choice'], c:0, fb:'Lists are accessed by position; dictionaries map keys to values — ideal for name→score lookups.'},
      {q:'What is the difference between list.remove() and list.pop()?', opts:['remove(value) deletes by value; pop(index) deletes by position and returns the item','They are identical','remove takes an index; pop takes a value','pop empties the whole list'], c:0, fb:'remove works by value (first match); pop works by index and hands the removed item back.'},
      {q:'A game using random.randint errors with "random is not defined". What is the fix and the rule?', opts:['Add import random at the top — imports happen once, before use','Rename the dice variable','Use a list instead of random','Reinstall Python'], c:0, fb:'The random module must be imported (once, at the top) before any of its functions are used.'},
      {q:'Which is the most effective concrete metaphor for a dictionary when teaching kids?', opts:['A contacts app: look up a name, get back a number','A numbered shelf with slots 0,1,2','A countdown timer','A single labelled box'], c:0, fb:'The contacts-app model captures key→value lookup; the numbered-shelf model is for lists.'},
      {q:'How does random.randint(1, 6) differ from range(1, 6), and why mention it?', opts:['randint INCLUDES 6; range stops BEFORE 6 — students conflate the two boundaries','They are identical','randint excludes both ends','range includes both ends'], c:0, fb:'randint(1,6) can return 6; range(1,6) yields 1–5. Highlighting the boundary difference prevents bugs.'}
    ]
  },
  {
    id:4, emoji:'⚙️', color:'#7C5CFC',
    title:'Functions',
    desc:'def, parameters and arguments, return vs print, and why functions keep big programs sane.',
    obj:'Teach students to package code into reusable functions. You should be able to make the define-vs-call and print-vs-return distinctions crystal clear, explain parameters with a metaphor, and motivate functions by letting students feel the pain of duplication first.',
    sections:[
      {t:'🗺️ Where this sits in the course', cards:[
        {type:'text', h:'The first taste of structure', b:'So far programs are flat lists of instructions. Functions let students <strong>name a chunk of work and reuse it</strong>. This is the bridge into everything that follows: Turtle drawings call functions, and PyGame Zero is built entirely on functions you write (<code>draw</code>, <code>update</code>, <code>on_key_down</code>). A student who is shaky on functions will struggle the moment games begin — so this module is a genuine gatekeeper.'},
        {type:'tip', txt:'The two ideas that need real airtime: <strong>define vs call</strong> (writing a function vs running it) and <strong>print vs return</strong> (showing a value vs handing it back). Almost every function bug a beginner hits is one of these two.'}
      ]},
      {t:'✏️ def — defining & calling', cards:[
        {type:'text', h:'What to teach', b:'<code>def name():</code> <em>defines</em> a function — it writes the recipe down but runs nothing yet. The code only runs when you <strong>call</strong> it by writing its name with brackets: <code>greet()</code>. You can define once and call as many times as you like.'},
        {type:'code', lbl:'define once, call many times', code:`<span class="ck">def</span> <span class="cf">greet</span>():
    <span class="cf">print</span>(<span class="cs">"Hello!"</span>)
    <span class="cf">print</span>(<span class="cs">"Welcome to the lesson."</span>)

<span class="cf">greet</span>()   <span class="cc"># now it runs</span>
<span class="cf">greet</span>()   <span class="cc"># and again</span>`},
        {type:'warn', txt:'The classic "nothing happened" bug: the student defines a function but never calls it. Teach the phrase "<strong>define = write the recipe; call = cook it</strong>." A recipe in a book cooks no dinner until someone follows it.'}
      ]},
      {t:'📥 Parameters & arguments', cards:[
        {type:'text', h:'What to teach', b:'Parameters let a function take input so it can behave differently each call. The name in the definition (<code>name</code>) is the <strong>parameter</strong>; the actual value you pass (<code>"Mia"</code>) is the <strong>argument</strong>. They are matched left to right, so the count must line up.'},
        {type:'code', lbl:'passing information in', code:`<span class="ck">def</span> <span class="cf">greet</span>(name):
    <span class="cf">print</span>(<span class="cs">"Hello,"</span>, name)

<span class="cf">greet</span>(<span class="cs">"Mia"</span>)    <span class="cc"># Hello, Mia</span>
<span class="cf">greet</span>(<span class="cs">"Sam"</span>)    <span class="cc"># Hello, Sam</span>

<span class="ck">def</span> <span class="cf">add</span>(a, b):
    <span class="cf">print</span>(a <span class="ck">+</span> b)
<span class="cf">add</span>(<span class="cn">3</span>, <span class="cn">4</span>)        <span class="cc"># 7</span>`},
        {type:'warn', txt:'Passing the wrong number of arguments throws <code>TypeError: greet() missing 1 required positional argument</code>. Read it together — the error literally names what’s missing, which is great error-reading practice.'}
      ]},
      {t:'↩️ return vs print — the big one', cards:[
        {type:'text', h:'What to teach', b:'<code>print</code> <strong>shows</strong> a value on screen for a human. <code>return</code> <strong>hands a value back</strong> to the program so the rest of the code can use it. A function that prints but doesn’t return gives back <code>None</code> — so you can’t do maths with its result.'},
        {type:'code', lbl:'the difference made visible', code:`<span class="ck">def</span> <span class="cf">square_print</span>(n):
    <span class="cf">print</span>(n <span class="ck">*</span> n)        <span class="cc"># only displays</span>

<span class="ck">def</span> <span class="cf">square_return</span>(n):
    <span class="ck">return</span> n <span class="ck">*</span> n       <span class="cc"># hands the value back</span>

x = <span class="cf">square_print</span>(<span class="cn">5</span>)   <span class="cc"># prints 25, but x is None</span>
y = <span class="cf">square_return</span>(<span class="cn">5</span>)  <span class="cc"># y is 25, usable in maths</span>
<span class="cf">print</span>(y <span class="ck">+</span> <span class="cn">1</span>)         <span class="cc"># 26</span>`},
        {type:'hi', h:'Why students must feel this', b:'Show that <code>x = square_print(5)</code> leaves <code>x</code> as <code>None</code>, then <code>x + 1</code> crashes. The crash is the lesson: "print talks to a person; return talks to the program." Until a student feels this difference, functions stay fuzzy.'}
      ]},
      {t:'🍳 The metaphor & motivation', cards:[
        {type:'hi', h:'The recipe metaphor', b:'A function is a <strong>recipe</strong>. <code>def</code> writes the recipe; the <strong>arguments are the ingredients</strong> you hand over; <strong>calling it is cooking</strong>; and <code>return</code> is the finished dish handed back. Print, by contrast, is just shouting the result across the kitchen — nobody can use it afterwards.'},
        {type:'good', txt:'Motivate functions by inflicting duplication first: have the student write the same 4-line greeting three times, then refactor it into one <code>greet(name)</code>. Feeling the tedium is what makes "don’t repeat yourself" click — don’t hand them the rule, let them earn it.'},
        {type:'code', lbl:'before / after refactor', code:`<span class="cc"># before: repeated 3 times</span>
<span class="cf">print</span>(<span class="cs">"Hi Mia, ready to code?"</span>)
<span class="cf">print</span>(<span class="cs">"Hi Sam, ready to code?"</span>)

<span class="cc"># after: one reusable function</span>
<span class="ck">def</span> <span class="cf">welcome</span>(name):
    <span class="cf">print</span>(<span class="cs">"Hi"</span>, name <span class="ck">+</span> <span class="cs">", ready to code?"</span>)
<span class="cf">welcome</span>(<span class="cs">"Mia"</span>)
<span class="cf">welcome</span>(<span class="cs">"Sam"</span>)`}
      ]},
      {t:'🧒 The misconceptions you will meet', cards:[
        {type:'twocol', left:{h:'What beginners get wrong', items:['Defining a function but never calling it','Confusing <code>print</code> with <code>return</code>','Wrong number of arguments','Expecting a value from a print-only function','Indenting the body inconsistently']}, right:{h:'Your pre-emptive moves', items:['"Define = recipe; call = cook"','Show both side by side; crash on None','Read the TypeError together','"print talks to people, return to code"','Treat the body like any indented block']}}
      ]}
    ],
    quiz:[
      {q:'A student defines a function but "nothing happens" when they run the file. What is the cause and the phrase you teach?', opts:['They never called it — "define = write the recipe; call = cook it"','Python must be restarted','Functions must always return a value','def was misspelled'], c:0, fb:'Defining only writes the recipe; the function must be called to actually run.'},
      {q:'What is the clearest way to distinguish print from return?', opts:['print shows a value to a person; return hands a value back to the program','They do the same thing','return is just a faster print','print only works outside functions'], c:0, fb:'return gives a usable value to the caller; print merely displays text on screen.'},
      {q:'In def square(number): return number*number, what exactly is "number"?', opts:['A parameter — the input the function receives when called','A built-in Python keyword','The value the function returns','A global variable defined elsewhere'], c:0, fb:'number is the parameter; the argument is the actual value passed, e.g. square(5).'},
      {q:'x = greet("Mia") where greet only prints — what is the value of x, and why is this worth showing?', opts:['None — a print-only function returns nothing, so x+1 would crash and prove print ≠ return','"Mia"','The text that was printed','It raises an error immediately'], c:0, fb:'A function with no return gives back None. The follow-up crash is the most memorable way to teach print vs return.'},
      {q:'What is the most effective way to motivate WHY functions are useful?', opts:['Make students repeat the same code several times, then refactor it into one function','Open with the formal definition of a function','Avoid examples and explain the theory','Only ever use Python’s built-in functions'], c:0, fb:'Letting students feel the pain of duplication makes the value of reusable functions click on its own.'},
      {q:'A call throws "TypeError: greet() missing 1 required positional argument". What does it mean and how do you use it pedagogically?', opts:['The argument count doesn’t match the parameters — read the error together as debugging practice','greet is not a real function','Python ran out of memory','The return value was ignored'], c:0, fb:'Arguments must match parameters; the error names exactly what’s missing, making it ideal for error-reading practice.'}
    ]
  },
  {
    id:5, emoji:'🐢', color:'#F59E0B',
    title:'Drawing & Intro to PyGame Zero',
    desc:'The Turtle module, then the leap into graphics: Actors, the window, draw() and update(), and the game loop.',
    obj:'Guide the jump from text programs to visuals. You should be able to explain the game loop (the flipbook model), why the framework calls your functions, the difference between draw() and update(), and the asset/naming pitfalls that silently break sprites.',
    sections:[
      {t:'🗺️ Where this sits in the course', cards:[
        {type:'text', h:'The motivation spike', b:'This is the module where coding becomes <em>visual</em>, and for many kids it’s the moment they fall in love with it. Students draw with <strong>Turtle</strong> (a satisfying payoff for functions and loops), then meet <strong>PyGame Zero</strong> — the game framework behind "Coddy’s Adventures". Everything in the remaining game modules builds directly on the concepts introduced here.'},
        {type:'warn', txt:'There is a real conceptual leap here: from a program that runs top-to-bottom <em>once</em>, to a <strong>game loop</strong> that redraws many times per second. Name that shift out loud — students who don’t notice it find games baffling.'}
      ]},
      {t:'🐢 Turtle — drawing with code', cards:[
        {type:'text', h:'What to teach', b:'Turtle moves a "pen" around the screen: <code>forward(100)</code>, <code>right(90)</code>, <code>left(45)</code>. The magic is that drawing a shape is just a loop, and wrapping that loop in a function makes a reusable tool. It’s the clearest possible demonstration of why the previous two modules mattered.'},
        {type:'code', lbl:'a function that draws (loops + functions!)', code:`<span class="ck">import</span> turtle

<span class="ck">def</span> <span class="cf">draw_square</span>(side):
    <span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">4</span>):
        turtle.<span class="cf">forward</span>(side)
        turtle.<span class="cf">right</span>(<span class="cn">90</span>)

<span class="cf">draw_square</span>(<span class="cn">100</span>)
<span class="cf">draw_square</span>(<span class="cn">50</span>)   <span class="cc"># reuse with a different size</span>`},
        {type:'good', txt:'Turtle is the perfect "aha": a square is just "forward, turn, four times." Let students change the angle to 120 and the count to 3 to get a triangle — discovering the link between the turn angle and the shape themselves is far stronger than being told.'}
      ]},
      {t:'🎮 PyGame Zero — the setup', cards:[
        {type:'text', h:'What to teach', b:'A PyGame Zero program starts with <code>#pgzero</code> (or is run with <code>pgzrun</code>). You set the window with <code>WIDTH</code> and <code>HEIGHT</code>, then create sprites as <strong>Actors</strong>. An <code>Actor("coddy")</code> automatically loads <code>images/coddy.png</code> — the name is the filename, lowercase, no extension. Position it with <code>.pos</code>, <code>.x</code>, <code>.y</code>.'},
        {type:'code', lbl:'window + actor', code:`<span class="cc">#pgzero</span>
WIDTH = <span class="cn">600</span>
HEIGHT = <span class="cn">400</span>

coddy = <span class="cf">Actor</span>(<span class="cs">"coddy"</span>)   <span class="cc"># loads images/coddy.png</span>
coddy.pos = <span class="cn">300</span>, <span class="cn">200</span>      <span class="cc"># centre of the window</span>`},
        {type:'warn', txt:'The silent killer: the image filename must match the Actor name exactly — lowercase, correct spelling, no <code>.png</code> in the code, and the file must live in an <code>images</code> folder. A mismatch fails with no obvious clue, so this is the very first thing to check when "the sprite won’t appear."'}
      ]},
      {t:'🔁 draw(), update() & the game loop', cards:[
        {type:'text', h:'What to teach', b:'You write two special functions and PyGame Zero <strong>calls them for you, automatically, ~60 times a second</strong>. <code>draw()</code> paints the current frame; <code>update()</code> changes things for the next frame (positions, scores, logic). The student never calls these — that’s the new and surprising part.'},
        {type:'code', lbl:'the loop in action', code:`<span class="ck">def</span> <span class="cf">draw</span>():
    screen.<span class="cf">clear</span>()    <span class="cc"># wipe the previous frame</span>
    coddy.<span class="cf">draw</span>()      <span class="cc"># paint the sprite</span>

<span class="ck">def</span> <span class="cf">update</span>():
    coddy.x <span class="ck">+=</span> <span class="cn">1</span>     <span class="cc"># a little change every frame = motion</span>`},
        {type:'hi', h:'The flipbook model', b:'A game is a flipbook. <code>update()</code> decides what changes on the next page; <code>draw()</code> paints that page; PyGame Zero flips pages 60×/second. This is why motion needs a <em>small</em> change each frame (<code>x += 1</code>) — not one big jump. It also explains why you must <code>screen.clear()</code>: without wiping the page, every frame smears on top of the last.'}
      ]},
      {t:'🧒 The misconceptions you will meet', cards:[
        {type:'twocol', left:{h:'What beginners get wrong', items:['Calling draw()/update() themselves','Image name doesn’t match the file','Forgetting <code>screen.clear()</code> → smears','Putting game logic outside update()','One big jump instead of small steps','Confusing draw (show) with update (change)']}, right:{h:'Your pre-emptive moves', items:['"The framework calls them, not you"','Names: lowercase, no extension, images/','Clear the page every frame','Repeating logic lives in update()','"Tiny change each frame = smooth motion"','"draw = paint, update = think"']}},
        {type:'warn', txt:'"The framework calls your functions" is a brand-new idea (inversion of control). Don’t rush it. Contrast it explicitly with everything before: "until now, your code ran your lines. Now you write functions and the game engine runs them for you."'}
      ]},
      {t:'🎯 How to teach it', cards:[
        {type:'good', txt:'Celebrate the first moving sprite loudly — it is a genuine milestone and an emotional high point of the whole course. Then immediately let them tweak the speed (<code>x += 5</code>) and direction. Experimentation, not explanation, is what cements the game loop.'},
        {type:'tip', txt:'If a student is overwhelmed, strip it back to the smallest runnable program: a window, one Actor, an empty <code>update()</code>. Add one line at a time. Games feel huge; building them one frame-changing line at a time keeps it learnable.'}
      ]}
    ],
    quiz:[
      {q:'In PyGame Zero, who calls draw() and update(), and why does it matter pedagogically?', opts:['The framework calls them ~60×/sec automatically — a new "inversion of control" idea to teach slowly','The student calls them manually each frame','The OS calls them once at startup','They only run if placed in a while loop'], c:0, fb:'PyGame Zero runs your draw()/update() for you every frame — students must NOT call them, and this is genuinely new.'},
      {q:'What is the clearest way to explain draw() vs update() to a child?', opts:['update() decides what changes for the next frame; draw() paints the frame ("think vs paint")','They are identical','draw() runs once, update() never runs','update() only handles sound'], c:0, fb:'"update = think/change, draw = paint" maps directly onto the game loop.'},
      {q:'A sprite won’t appear and there is no obvious error. What do you check first?', opts:['The image filename matches the Actor name exactly (lowercase, no extension, in images/)','The amount of RAM available','Whether Python is 32- or 64-bit','The monitor brightness'], c:0, fb:'Actor("coddy") needs images/coddy.png with an exact name match — the most common silent failure.'},
      {q:'Why does coddy.x += 1 inside update() create smooth motion rather than a teleport?', opts:['update() runs every frame, so a small change accumulates ~60×/sec into smooth movement','It teleports once and stops','It only works inside a while loop','It resizes the window'], c:0, fb:'Motion is a tiny change applied every frame by the game loop — the flipbook model.'},
      {q:'A student’s sprite leaves a smear trail across the screen. What is missing and why?', opts:['screen.clear() at the start of draw() — without wiping, each frame paints over the last','An import statement','A second Actor','A faster computer'], c:0, fb:'Each frame must clear the previous one; otherwise old positions remain painted, creating a smear.'},
      {q:'Why is drawing a square with Turtle a strong lesson right before games?', opts:['It reuses functions + loops together, proving the earlier modules pay off, and eases into "code makes pictures"','It teaches dictionaries','It introduces file handling','It demonstrates recursion'], c:0, fb:'draw_square is a function wrapping a loop — a satisfying payoff and a gentle on-ramp to graphics.'}
    ]
  },
  {
    id:6, emoji:'🎮', color:'#10B981',
    title:'Game Development with PyGame Zero',
    desc:'Keyboard and mouse input, sprite animation, collision detection, and game scoring.',
    obj:'Teach the interactive core of game-making: responding to keyboard and mouse, animating sprites, and detecting collisions. You should be able to explain global cleanly, distinguish collidepoint from colliderect, and model fast iteration as a tutoring habit.',
    sections:[
      {t:'🗺️ Where this sits in the course', cards:[
        {type:'text', h:'Games that respond to the player', b:'Module 5 put a sprite on screen and moved it on its own. Now the game <strong>reacts to the player</strong>: keyboard movement, mouse clicks, animation, and — the big one — collisions that drive scoring, damage and pickups. Projects here include Coddy’s Adventures, a Minecraft-style game, a space shooter and "Clicker Heroes."'},
        {type:'tip', txt:'Collision detection is the concept that turns "a moving picture" into "a game." Budget extra time for it — it’s conceptually richer than it looks and it unlocks scoring, combat and collecting all at once.'}
      ]},
      {t:'⌨️ Keyboard input', cards:[
        {type:'text', h:'Two styles to teach', b:'<strong>Continuous</strong>: inside <code>update()</code>, check <code>keyboard.right</code>, <code>keyboard.left</code>, etc. — true while the key is held, perfect for smooth movement. <strong>One-shot</strong>: the framework calls <code>on_key_down(key)</code> once per press, ideal for jumping or firing. Swapping the sprite’s image while moving gives the player directional feedback.'},
        {type:'code', lbl:'continuous movement', code:`<span class="ck">def</span> <span class="cf">update</span>():
    <span class="ck">if</span> keyboard.right:
        coddy.x <span class="ck">+=</span> <span class="cn">5</span>
        coddy.image = <span class="cs">"coddy_right"</span>
    <span class="ck">elif</span> keyboard.left:
        coddy.x <span class="ck">-=</span> <span class="cn">5</span>
        coddy.image = <span class="cs">"coddy_left"</span>`},
        {type:'tip', txt:'Use the held-key check in <code>update()</code> for movement and the <code>on_key_down</code> event for actions. Mixing them up — e.g. trying to do smooth movement in <code>on_key_down</code> — produces janky, one-step-per-press motion. Match the tool to the feel you want.'}
      ]},
      {t:'🖱️ Mouse input', cards:[
        {type:'text', h:'What to teach', b:'The framework calls <code>on_mouse_down(pos)</code> when the player clicks, handing you the click location as <code>pos</code>. The usual question is "did they click on this object?" — answered with <code>actor.collidepoint(pos)</code>. This powers clicker games and "shoot the enemy" mechanics.'},
        {type:'code', lbl:'click to score', code:`score = <span class="cn">0</span>

<span class="ck">def</span> <span class="cf">on_mouse_down</span>(pos):
    <span class="ck">global</span> score
    <span class="ck">if</span> enemy.<span class="cf">collidepoint</span>(pos):
        score <span class="ck">+=</span> <span class="cn">1</span>
        <span class="cf">animate</span>(enemy, tween=<span class="cs">"bounce_end"</span>, duration=<span class="cn">0.3</span>)`}
      ]},
      {t:'🌍 The global keyword', cards:[
        {type:'text', h:'What to teach', b:'A function can <em>read</em> a variable defined outside it, but to <strong>change</strong> one it must first declare <code>global score</code>. Without it, Python creates a new local variable instead and the real score never updates — a confusing, error-free failure.'},
        {type:'warn', txt:'Keep the explanation age-appropriate: "a function can look at outside variables, but to <strong>change</strong> one it has to say <code>global</code> first." Resist a full lecture on scope — that depth isn’t needed here and overwhelms beginners. Just the rule and a working example.'}
      ]},
      {t:'💥 Collision detection', cards:[
        {type:'text', h:'What to teach', b:'Every sprite has an invisible rectangle around it. <code>a.colliderect(b)</code> asks "do these two rectangles overlap?" (sprite vs sprite — hits, pickups). <code>a.collidepoint(pos)</code> asks "is this point inside this rectangle?" (a click or single point). That one distinction covers almost all 2D game interactions.'},
        {type:'code', lbl:'sprite-vs-sprite collision', code:`<span class="ck">def</span> <span class="cf">update</span>():
    <span class="ck">if</span> player.<span class="cf">colliderect</span>(coin):
        <span class="ck">global</span> score
        score <span class="ck">+=</span> <span class="cn">1</span>
        coin.x = random.<span class="cf">randint</span>(<span class="cn">0</span>, WIDTH)  <span class="cc"># respawn</span>`},
        {type:'hi', h:'The mental model', b:'"Every object lives inside an invisible box. A collision is just <em>two boxes overlapping</em>." Once students hold that picture, hits, coin pickups and mouse clicks all become the same simple question, just asked with <code>colliderect</code> (box vs box) or <code>collidepoint</code> (point in box).'}
      ]},
      {t:'🧒 The misconceptions you will meet', cards:[
        {type:'twocol', left:{h:'What beginners get wrong', items:['Changing score in a function without <code>global</code>','<code>collidepoint</code> vs <code>colliderect</code> mixed up','Movement too fast or too slow','Forgetting to swap the sprite image','Smooth movement attempted in <code>on_key_down</code>']}, right:{h:'Your pre-emptive moves', items:['"To change an outside variable, say global"','"point = a click, rect = object vs object"','Tune the += / -= step together','Image swap = visible facing direction','Held-key in update(); events for actions']}}
      ]},
      {t:'🎯 How to teach it', cards:[
        {type:'good', txt:'Model fast iteration relentlessly: change one number, run, watch, adjust. Game dev rewards "let’s just try it" far more than planning everything up front, and showing that attitude gives students permission to experiment instead of fearing mistakes.'},
        {type:'tip', txt:'When a collision "doesn’t work," debug visually: temporarily print the score on screen or print to the console inside the <code>if</code>. Seeing whether the branch runs at all separates "the collision isn’t detected" from "the score isn’t updating" — two very different fixes.'}
      ]}
    ],
    quiz:[
      {q:'A student increases score inside on_mouse_down but it never changes, with no error. What is the fix and the rule?', opts:['Declare global score inside the function — without it Python makes a new local variable','Wrap the score update in a while loop','Rename score to something unique','Store score inside the Actor'], c:0, fb:'To modify a module-level variable inside a function, Python requires the global declaration; otherwise it silently creates a local.'},
      {q:'Which method detects a mouse click landing on a specific sprite?', opts:['collidepoint(pos) — checks if a single point is inside the sprite’s box','colliderect(other_sprite)','keyboard.click','on_draw()'], c:0, fb:'collidepoint checks a point (the click); colliderect checks whether two rectangles overlap.'},
      {q:'What is the simplest accurate mental model for collision detection?', opts:['Every object has an invisible box; a collision is two boxes overlapping','Python guesses whether things look like they touch','Sprites magnetically repel each other','It compares the pixel colours of each sprite'], c:0, fb:'Rect-based collision is literally "do these two rectangles overlap?" — the invisible-box model is exact.'},
      {q:'Why swap coddy.image to a left/right variant when the character moves?', opts:['Visual feedback — the sprite faces the direction it travels','It is required or the game crashes','It makes the code run faster','It reduces memory usage'], c:0, fb:'Changing the sprite image gives the player clear directional feedback; it is a polish/feel decision, not a requirement.'},
      {q:'When should you use keyboard.right inside update() versus on_key_down(key)?', opts:['Held-key checks in update() for smooth movement; on_key_down for one-shot actions like jump/fire','Always use on_key_down; update() can’t read the keyboard','They are interchangeable','keyboard.right only works in draw()'], c:0, fb:'Continuous movement = held-key check in update(); discrete actions = the on_key_down event. Mixing them feels wrong.'},
      {q:'A collision "doesn’t work." What is the most effective debugging move to teach?', opts:['Print inside the if (or show the score on screen) to see whether the branch runs at all','Rewrite the whole game','Add more sprites','Increase the window size'], c:0, fb:'A quick print separates "collision not detected" from "score not updating" — two different problems with different fixes.'}
    ]
  },
  {
    id:7, emoji:'🏆', color:'#EF4444',
    title:'Capstone: Building & Publishing a Game',
    desc:'Grid maps, enemies with attributes, collidelist, bonuses, levels, win/lose states, menus and publishing.',
    obj:'Prepare to guide students through their final project. The skill shift here is from teaching features to managing a bigger build — scoping realistically, organising game state, handling many objects, and coaching students all the way to a finished, published, presented game.',
    sections:[
      {t:'🗺️ Where this sits in the course', cards:[
        {type:'text', h:'Everything comes together', b:'The final modules build a full RPG ("WeCode and Dragons") and a graduation project. There is almost <strong>no new syntax</strong> here — instead, every concept from modules 1–6 reappears at once inside one larger program. Your role shifts accordingly: less "here’s a new feature," more "let’s keep this project organised and finishable."'},
        {type:'tip', txt:'Reframe your own job for this module. You are now a project mentor as much as a coding teacher: helping students scope sensibly, stay organised, debug a bigger codebase, and — crucially — actually finish and ship.'}
      ]},
      {t:'🗺️ Grid maps (lists of lists)', cards:[
        {type:'text', h:'What to teach', b:'Game levels are stored as a <strong>2D grid</strong> — a list of lists, where each number codes a tile type (0 = floor, 1 = wall, 2 = bones, etc.). Nested loops walk the rows and columns to draw each tile at <code>column * cell_width</code>, <code>row * cell_height</code>. This is the payoff for nested loops from module 2.'},
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
      {t:'👾 Many enemies with attributes', cards:[
        {type:'text', h:'What to teach', b:'Enemies are generated in a loop and stored in a list, each with its own attributes (health, attack) set as properties on the Actor. To check the player against <em>all</em> of them at once, <code>collidelist(enemies)</code> returns the index of the first one hit, or <code>-1</code> if none — far cleaner than a manual loop of <code>colliderect</code> checks.'},
        {type:'code', lbl:'generate + collide with a list', code:`enemies = []
<span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">5</span>):
    e = <span class="cf">Actor</span>(<span class="cs">"enemy"</span>)
    e.health = random.<span class="cf">randint</span>(<span class="cn">10</span>, <span class="cn">20</span>)
    e.attack = random.<span class="cf">randint</span>(<span class="cn">5</span>, <span class="cn">10</span>)
    enemies.<span class="cf">append</span>(e)

idx = char.<span class="cf">collidelist</span>(enemies)
<span class="ck">if</span> idx <span class="ck">!=</span> <span class="ck">-</span><span class="cn">1</span>:               <span class="cc"># -1 means "no hit"</span>
    char.health <span class="ck">-=</span> enemies[idx].attack`},
        {type:'warn', txt:'A subtle bug to watch for: removing items from a list <em>while looping over it</em> skips elements. If students delete defeated enemies mid-loop, some get skipped. Teach the safe pattern — collect what to remove, or loop over a copy.'}
      ]},
      {t:'🚦 Game state & menus', cards:[
        {type:'text', h:'What to teach', b:'A single <code>mode</code> variable ("menu" / "game" / "end") acts as a signpost telling both <code>draw()</code> and <code>update()</code> what to do right now. Routing everything through one state variable is what keeps a bigger game from collapsing into spaghetti — it’s the most important organisational idea in the capstone.'},
        {type:'code', lbl:'one state variable drives everything', code:`mode = <span class="cs">"menu"</span>

<span class="ck">def</span> <span class="cf">draw</span>():
    screen.<span class="cf">clear</span>()
    <span class="ck">if</span> mode == <span class="cs">"menu"</span>:
        screen.<span class="cf">draw</span>.<span class="cf">text</span>(<span class="cs">"Press SPACE to start"</span>, center=(<span class="cn">300</span>,<span class="cn">200</span>))
    <span class="ck">elif</span> mode == <span class="cs">"game"</span>:
        char.<span class="cf">draw</span>()
    <span class="ck">elif</span> mode == <span class="cs">"end"</span>:
        screen.<span class="cf">draw</span>.<span class="cf">text</span>(<span class="cs">"GAME OVER"</span>, center=(<span class="cn">300</span>,<span class="cn">200</span>))`},
        {type:'hi', h:'Win/lose is just a state change', b:'Victory and defeat aren’t special machinery — they’re simply setting <code>mode = "end"</code> when a condition is met (all enemies cleared, or <code>char.health &lt;= 0</code>). Framing it this way keeps students from over-engineering and ties straight back to the conditions from module 2.'}
      ]},
      {t:'🧒 The real challenge: scope & finishing', cards:[
        {type:'twocol', left:{h:'Where capstones go wrong', items:['Over-ambitious scope — too big to finish','Losing track of game state','Editing a list while looping it','Running out of time before publishing','Polishing forever, never shipping']}, right:{h:'Your coaching moves', items:['"Finish small, then add more"','One <code>mode</code> variable drives the game','Loop over a copy when removing','Reserve time to publish + present','"Done and shared beats perfect"']}},
        {type:'warn', txt:'The biggest risk in the capstone is <strong>ambition, not syntax</strong>. A complete, simple, published game beats an unfinished epic every time. Coach students to lock a small scope first and only add extras once the core loop works end to end.'}
      ]},
      {t:'🎯 Publishing & presenting', cards:[
        {type:'good', txt:'The graduation lesson is about pride and presentation, not new code. Coach students to publish their game to the Kodland HUB and demo it. Finishing and sharing is itself a skill — praise completion as loudly as clever code, because shipping something real is what students remember.'},
        {type:'tip', txt:'Help each student prepare a 1-minute demo: what the game is, how to play, and one thing they’re proud of. Presenting their own work builds confidence and gives a clean, motivating end to the whole course.'}
      ]}
    ],
    quiz:[
      {q:'What is the single biggest risk for a student in the capstone, and how do you coach it?', opts:['Over-ambitious scope — lock a small, finishable game first, then add extras','Not knowing enough syntax — drill more theory','Typing too slowly — push for speed','Using too many comments'], c:0, fb:'Scope management is the key tutoring focus; a finished small game beats an unfinished big one.'},
      {q:'How is a game’s state (menu / playing / game over) usually managed, and why does it matter?', opts:['A single mode variable that draw() and update() check — it keeps a big game organised','Three separate program files','By restarting Python between screens','With random numbers'], c:0, fb:'One state variable routes what the game shows and does, preventing a large project from turning into spaghetti.'},
      {q:'char.collidelist(enemies) returns -1. What does that mean?', opts:['The character is not colliding with any enemy in the list','An error occurred','It collided with the enemy at index 1','The enemies list is empty'], c:0, fb:'collidelist returns the index of the first sprite hit, or -1 when there is no collision at all.'},
      {q:'How is a 2D grid map represented in these projects, and which earlier concept does drawing it reinforce?', opts:['A list of lists (rows of numbers); drawing it uses nested loops','A single long string; it uses string slicing','A dictionary of colours; it uses key lookups','A function; it uses recursion'], c:0, fb:'A list of lists models rows and columns, and nested loops walk it — the payoff for nested loops from module 2.'},
      {q:'A student deletes defeated enemies from the list while looping over it and some enemies get skipped. What is the cause?', opts:['Removing items mid-loop shifts the remaining indexes — loop over a copy or collect-then-remove','collidelist is broken','The enemies need more health','append was used instead of pop'], c:0, fb:'Mutating a list during iteration skips elements; the safe patterns are looping over a copy or deferring removal.'},
      {q:'During the graduation lesson, what should a tutor emphasise most?', opts:['Helping students finish, publish to the HUB, and present their game','Cramming in as many features as possible','Rewriting the game from scratch for quality','Skipping the presentation to save time'], c:0, fb:'Completion, publishing and presenting are the core graduation outcomes — praise shipping, not just clever code.'}
    ]
  },
  {
    id:8, emoji:'🧑‍🏫', color:'#6366F1',
    title:'How to Run a Great Lesson',
    desc:'The mirror/circular lesson structure, why it works, and how to keep every student actively involved.',
    obj:'Master the shape of a strong Kodland lesson: the eight-phase "mirror" structure from warm-up to wrap-up, the cognitive reasons it works, and concrete techniques for keeping kids engaged in every single phase. This is about HOW you teach, independent of the topic.',
    sections:[
      {t:'🗺️ Why structure matters as much as content', cards:[
        {type:'text', h:'A great lesson has a shape', b:'You can know Python perfectly and still run a weak lesson if it has no structure. Kids learn best inside a <strong>predictable rhythm</strong> — they settle faster, retain more, and stay motivated when every lesson follows the same familiar arc. Kodland lessons use a deliberate eight-phase structure with a "mirror" design: the way a lesson <em>ends</em> mirrors the way it <em>begins</em>.'},
        {type:'text', h:'What this module trains', b:'Unlike the coding modules, this one is about <strong>your delivery</strong>, not the material. You will learn the eight phases, why each exists, and — most importantly — how to keep students actively participating rather than passively watching. These habits apply to every lesson you will ever teach, regardless of topic.'},
        {type:'tip', txt:'Consistency is the point. Once students learn your rhythm, they stop spending energy figuring out "what happens now?" and spend it on learning instead. Run the same structure every time until it is second nature — for you and for them.'}
      ]},
      {t:'🌅 The beginning: four phases', cards:[
        {type:'text', h:'1 · Warm-Up — activate energy & focus', b:'Open with something light that switches the student’s brain into "lesson mode": a quick question, a tiny challenge, a look at something fun. The goal is energy and attention, not assessment. It signals "we’re starting now" and pulls a distracted kid into the session.'},
        {type:'text', h:'2 · Previous Lesson Revision — recall & consolidate', b:'Briefly revisit what was learned last time. Retrieval — making the student <em>recall</em> rather than re-hearing — is one of the strongest memory tools there is. A two-minute "what do you remember about loops?" does more than re-explaining ever could.'},
        {type:'text', h:'3 · HW Check — review homework together', b:'Go through the homework <em>with</em> the student. This is where you catch misunderstandings, praise effort, and show that homework actually matters. Skipping it teaches kids that homework is optional.'},
        {type:'text', h:'4 · Lesson Goal — set clear objectives', b:'State plainly what today is about: "today we’ll make our sprite move when you press the arrow keys." A clear goal gives the lesson direction and gives the student something concrete to aim for.'}
      ]},
      {t:'🏁 The end: the mirror', cards:[
        {type:'hi', h:'The end mirrors the beginning, reversed', b:'The closing four phases echo the opening ones in reverse — the lesson ends the way it began, giving students a satisfying sense of <strong>closure and rhythm</strong>. This "circular" shape is what makes a lesson feel complete rather than just stopping when time runs out.'},
        {type:'text', h:'1 · Lesson Summary — tutor + student based', b:'Recap what was covered — but don’t just tell them. Have the <em>student</em> summarise in their own words too. Their summary reveals what actually landed and doubles as a second retrieval moment.'},
        {type:'text', h:'2 · HW Assignment — clear instructions', b:'Assign homework with crystal-clear instructions on what to do and how. Vague homework is homework that won’t get done. This pairs with the HW Check that opened the lesson.'},
        {type:'text', h:'3 · Next Lesson Preview — build curiosity', b:'Tease what’s coming next: "next time, we’ll make the enemies chase you!" A hook builds anticipation and forward momentum across sessions — it pairs with the Lesson Goal from the start.'},
        {type:'text', h:'4 · Wrap-Up — close with energy', b:'End on a high: celebrate what the student built today, acknowledge their effort, and send them off feeling good. The last 30 seconds shape how they remember the whole lesson.'}
      ]},
      {t:'💡 Why this structure works', cards:[
        {type:'twocol', left:{h:'🧠 Cognitive Ease', items:['A predictable format lowers mental load','Students know what to expect','Focus goes to learning, not decoding the lesson shape']}, right:{h:'🔁 Retention Boost', items:['Revision at the START consolidates last time','Summary at the END consolidates today','Two memory checkpoints → far better recall']}},
        {type:'twocol', left:{h:'🎯 Clear Purpose', items:['Stating the goal upfront builds motivation','Previewing next lesson creates momentum','The student always knows why they’re here']}, right:{h:'✅ Accountability Loop', items:['HW check at the start...','...pairs with HW assignment at the end','Students feel the continuity between lessons']}},
        {type:'good', txt:'Notice the pairing: warm-up ↔ wrap-up, revision ↔ summary, HW check ↔ HW assignment, lesson goal ↔ next-lesson preview. Each opening phase has a closing partner. That symmetry is what makes the structure "circular" and memorable.'}
      ]},
      {t:'🙋 Keeping every kid involved', cards:[
        {type:'text', h:'The golden rule', b:'A lesson where the tutor talks and the student listens is a weak lesson. Your job is to make the student <strong>do, say, and think</strong> as much as possible. Use these four techniques constantly, in every phase.'},
        {type:'twocol', left:{h:'❓ Open Questions', items:['Ask "What do you think will happen if…?"','Use "How would you solve…?" to prompt reasoning','Avoid yes/no questions — invite real thinking']}, right:{h:'🖥️ Screen Sharing', items:['Have the student share their screen','Let them walk you through their own work','Great during HW check & warm-up — builds ownership']}},
        {type:'twocol', left:{h:'📖 Slide Reading', items:['Invite students to read slide text aloud','Ask them to explain it in their own words','Boosts comprehension and keeps them active']}, right:{h:'🌟 Praise & Encouragement', items:['Be specific: "Great job explaining that step!"','Praise effort, not just correct answers','Use energy to keep momentum up throughout']}},
        {type:'warn', txt:'Beware the passive lesson trap: it feels smooth because there’s no friction, but the student isn’t learning much. If you’ve been talking for more than a minute or two without the student doing or saying something, hand it back to them.'}
      ]},
      {t:'🎯 Putting it into practice', cards:[
        {type:'hi', h:'Structure frees you, it doesn’t restrict you', b:'New tutors sometimes fear a fixed structure will make lessons robotic. The opposite is true: once the phases are automatic, you stop worrying about "what next?" and have all your attention free for the student — their questions, their mistakes, their energy. The structure is the scaffold that lets you be present.'},
        {type:'tip', txt:'Keep a mental (or literal) checklist of the eight phases for your first lessons. After a few weeks the rhythm becomes automatic. In the next module, you’ll watch a real lesson and see every one of these phases and techniques in action.'}
      ]}
    ],
    quiz:[
      {q:'Why is the Kodland lesson structure described as a "mirror" or "circular" format?', opts:['The closing phases echo the opening phases in reverse, so the lesson ends the way it began','The tutor and student swap roles halfway through','The slides are shown twice, forward then backward','Every lesson repeats the previous lesson exactly'], c:0, fb:'The end mirrors the beginning reversed (warm-up↔wrap-up, revision↔summary, etc.), giving closure and rhythm.'},
      {q:'A tutor skips the Previous Lesson Revision to save time. What is the main cost, pedagogically?', opts:['They lose a retrieval moment — making students recall prior learning is one of the strongest ways to consolidate it','Nothing, as long as the goal is stated','The homework can’t be assigned later','The lesson will run over time'], c:0, fb:'Revision forces retrieval, a powerful memory tool. It is one of the structure’s two consolidation checkpoints.'},
      {q:'Which pair of phases forms the "accountability loop" across a lesson?', opts:['HW Check at the start and HW Assignment at the end','Warm-Up and Lesson Goal','Slide Reading and Praise','Lesson Summary and Wrap-Up'], c:0, fb:'Checking homework at the start and assigning it at the end closes the loop and builds continuity between lessons.'},
      {q:'A student answers a yes/no question correctly but seems disengaged. What is the better questioning move?', opts:['Ask an open question like "How would you solve this?" or "What do you think happens if…?"','Ask more yes/no questions faster','Answer the question yourself to keep pace','Move on to the next slide immediately'], c:0, fb:'Open questions invite reasoning and active thinking; yes/no questions let students coast.'},
      {q:'What is the strongest form of praise according to the engagement principles?', opts:['Specific praise that acknowledges effort and process, e.g. "Great job explaining that step!"','A generic "good job" after every answer','Praising only perfectly correct answers','Saving all praise for the wrap-up'], c:0, fb:'Specific praise tied to effort and process is more motivating and credible than generic or results-only praise.'},
      {q:'A tutor delivers a smooth lesson but did most of the talking while the student watched. Why is this a warning sign?', opts:['A passive lesson feels frictionless but the student learns little — they should be doing, saying and thinking throughout','It isn’t a problem if the material was covered','It means the structure was followed correctly','Smoothness always indicates a great lesson'], c:0, fb:'Engagement is the goal. If the tutor talks for long stretches without student action, learning drops — hand it back to the student.'}
    ]
  },
  {
    id:9, emoji:'🎥', color:'#0EA5E9', lesson:true,
    title:'Example of a Great Lesson',
    desc:'Watch a model Kodland Python lesson end to end, with a full transcript and teaching notes.',
    obj:'See the eight-phase lesson structure and engagement techniques from the previous module put into practice by an experienced tutor: pacing, questioning, modeling, feedback, encouragement and classroom flow — in a single real recorded Kodland Python lesson.',
    completeH:'Watched the model lesson?',
    completeBody:'Once you have watched the recording and read through the evaluation notes, mark this module complete to finish your training and unlock the Digital Skill Test.',
    completeBtn:'✓ Mark as Watched',
    sections:[
      {t:'🎬 The recording', cards:[
        {type:'video', src:'https://www.youtube-nocookie.com/embed/eNZ6h1oycJI?rel=0', cap:'A real Kodland Python lesson, recorded in full. Turn on captions (CC) to follow the synced transcript.'},
        {type:'warn', txt:'The recording is a real lesson and runs about 1 hour 48 minutes. Watch it in full when you can give it your attention — it is the single best reference for everything this training has covered.'}
      ]},
      {t:'🧭 About this lesson', cards:[
        {type:'text', h:'What you’re watching', b:'This is a genuine, unscripted Kodland Python lesson led by an experienced tutor with a small group of students. The class works on a project that combines earlier skills — <strong>functions and dictionaries/lists</strong> (building on a movie-list project and a password manager) — the kind of consolidation project you met in the Data and Functions modules.'},
        {type:'hi', h:'Watch for the structure you just learned', b:'As you watch, spot the eight phases from <strong>Module 8</strong> in action: the greeting and warm-up, the bridge to the previous lesson, the homework check, and the clear goal at the start — then, at the end, the recap, the homework for next time, and the preview of the next lesson. The opening and closing mirror each other, exactly as the "circular" structure describes.'}
      ]},
      {t:'✅ Why this is a great lesson — QA evaluation', cards:[
        {type:'text', h:'Assessed against our QA criteria', b:'Every Kodland lesson can be evaluated against a set of QA quality criteria. This lesson <strong>passed all of them</strong>. Below is the evidence, grouped by the lesson phases from Module 8 — use it as a checklist of what "great" looks like in practice.'},
        {type:'qa', h:'🌅 Opening the lesson', items:[
          {k:'Warm-Up & Greeting', v:'The tutor greeted the students and asked Marvel how they were.'},
          {k:'Lesson Objective', v:'Stated the goal — working on a project that combines their previous knowledge.'},
          {k:'Previous Lesson Bridge', v:'Asked whether students had built a password manager before; Marvel recalled an earlier movie-list project.'},
          {k:'Home Task Review', v:'Reviewed the previous homework and discussed it with the students.'}
        ]},
        {type:'qa', h:'🧑‍🏫 Instruction & practice', items:[
          {k:'Clear Instruction Chunking', v:'Gave instructions in small steps — e.g. explaining the project structure and the individual tasks.'},
          {k:'Modeling Before Independent Work', v:'Demonstrated how to print dictionary elements before letting students work on their own.'},
          {k:'Practice Stage Present', v:'Students engaged in a clear practice stage, working on their coding projects.'}
        ]},
        {type:'qa', h:'🙋 Engagement & participation', items:[
          {k:'Broad Participation', v:'Involved multiple students — Marvel, Gabriel and Shriyansh — rather than relying on one.'},
          {k:'Direct Student Addressing', v:'Addressed students by name during learning interactions.'},
          {k:'Multiple-Student Learning Participation', v:'Marvel, Gabriel and Shriyansh all took part in learning interactions.'},
          {k:'Repeated Student Interaction', v:'Created repeated learning interactions with different students throughout.'},
          {k:'Instructionally Useful Feedback', v:'Gave feedback on students’ code, helping them correct their errors.'},
          {k:'Student Reasoning Elicited', v:'Asked students to explain their understanding of functions and lists, and got relevant responses.'}
        ]},
        {type:'qa', h:'😊 Positive learning climate', items:[
          {k:'Low Repeated Confusion', v:'Fewer than three explicit statements of student confusion across the whole lesson.'},
          {k:'No Explicit Refusal or Boredom', v:'No explicit refusal, boredom or dissatisfaction from students.'}
        ]},
        {type:'qa', h:'🏁 Closing the lesson (the mirror)', items:[
          {k:'Closing Recap or Review', v:'Recapped the skills learned during the module and discussed the next steps.'},
          {k:'Homework for Next Class', v:'Assigned homework — finish the project started in class.'},
          {k:'Next Lesson Continuity', v:'Told students the next lesson would cover linear algorithms.'}
        ]},
        {type:'good', txt:'Notice the symmetry: the lesson opens with a greeting, a bridge to last time, a homework check and a clear goal — and closes with a recap, homework for next time and a preview of what’s next. That mirror is exactly the structure from Module 8, and it is a large part of why this lesson scores so well.'}
      ]}
    ]
  }
]
};
