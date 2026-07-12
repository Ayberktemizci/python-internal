/* ============================================================================
   Kodland Python Tutor Training — CONTENT (English, source of truth)
   To create another language: copy this file to content-XX.js and translate
   every STRING VALUE below. Do NOT change keys, structure, HTML tags, CSS
   classes, or Python code — inside code blocks translate ONLY the # comments.
   Set code/htmlLang/title, set dst.formUrl:'' and translate dst.placeholderNote.
   ============================================================================ */
window.CONTENT = {
code: 'pt',
htmlLang: 'pt',
title: 'Treinamento de Tutores de Python — Kodland',
ui: {
  logoSub: 'Treinamento de Python',
  changeRegion: '🌐 Região',
  heroEyebrow: '🐍 Programa de Treinamento de Tutores',
  heroTitle: 'Prepare-se para ensinar<br><span class="h-pill">Python</span><br>para crianças',
  heroSub: "Percorra cada módulo e passe em todos os questionários para concluir sua preparação como tutor. Atinja 70%+ no questionário de um módulo para desbloquear o próximo — não dá para pular etapas.",
  progLabel: 'módulos concluídos',
  modulesLabel: 'Seus módulos',
  allDone: '🏆 Tudo concluído!',
  completeWord: 'concluído',
  backModules: '← Módulos',
  exitQuiz: '← Sair do Questionário',
  backDashboard: '← Painel',
  moduleWord: 'Módulo',
  ofWord: 'de',
  objectiveWord: 'Objetivo',
  badgePassed: '✓ Aprovado',
  badgeLocked: '🔒 Bloqueado',
  badgeStart: 'Começar →',
  badgeWatched: '✓ Assistido',
  badgeWatch: '▶ Assistir',
  tagCompleted: 'Concluído',
  tagExampleLesson: 'Aula de exemplo',
  completeModuleWord: 'Concluir módulo',
  scoreWord: 'Pontuação',
  questionsWord: 'perguntas',
  takeQuiz: '📝 Fazer o Questionário →',
  retakeQuiz: '🔄 Refazer Questionário',
  markComplete: 'Marcar como Concluído',
  doneCompleted: '✓ Concluído',
  moduleComplete: 'Módulo Concluído',
  questionWord: 'Pergunta',
  correctPrefix: '✅ Correto! ',
  notQuitePrefix: '❌ Não foi dessa vez. ',
  seeResults: 'Ver Resultados →',
  nextBtn: 'Próximo →',
  modulePassed: 'Módulo Aprovado!',
  keepReviewing: 'Continue Revisando',
  scoreLine: 'Você acertou {s}/{t}.',
  passMsg: ' Próximo módulo desbloqueado!',
  failMsg: ' Você precisa de 70% para passar. Revise e tente novamente!',
  reviewModuleWord: '📖 Revisar Módulo',
  startModuleWord: 'Começar Módulo',
  watchModuleWord: '▶ Assistir Módulo',
  viewCertificate: '🏆 Ver Certificado',
  trainingComplete: 'Treinamento Concluído!',
  completeSub: "Você percorreu todos os módulos — parabéns! Você está pronto para o Teste de Habilidade Digital.",
  certLabel: 'Certificado de Conclusão',
  certTitle: 'Treinamento de Tutores de Python',
  certLine: 'Kodland · Todos os {n} módulos · Pontuação média nos questionários: {avg}%',
  takeDST: '🎯 Fazer o Teste de Habilidade Digital →',
  backDashboard2: '← Voltar ao Painel',
  dstCardStage: 'Etapa Final',
  dstCardTitle: 'Teste de Habilidade Digital',
  dstCardDesc: 'A avaliação prática final, realizada após todos os módulos.',
  dstReady: 'Pronto',
  dstCardTag: 'Avaliação prática',
  videoFallback: 'Seu navegador não consegue reproduzir este vídeo.',
  videoDownload: 'Baixe o vídeo',
  videoPhTitle: 'Gravação em breve',
  videoPhBody: 'O vídeo da aula modelo aparecerá aqui.'
},
dst: {
  formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSejEdg97urNmThOIvDKTCd-WvPob4rqSMt0H-gB4BsLAraxMw/viewform?usp=header',
  placeholderNote: 'O formulário de envio para a sua região será adicionado em breve.',
  html: `<div class="dst-body">
    <div class="dst-intro">
      <div class="dst-badge">🏆 Teste de Habilidade Digital · 2025</div>
      <div class="dst-h1">Teste para Tutores de Python</div>
      <p class="dst-sub">Nesta tarefa, você pode demonstrar seu conhecimento de Python e sua capacidade de ajudar os alunos enquanto escrevem projetos — além da sua dedicação, honestidade e disposição para seguir as diretrizes estabelecidas. Sua tarefa é criar um jogo que atenda aos requisitos abaixo. Você não precisa de um projeto de terceiros super incrível — você precisa de um projeto que se encaixe bem nesta tarefa específica!</p>
    </div>

    <div class="dst-stage-header">
      <span class="dst-stage-pill">A Tarefa</span>
      <span class="dst-stage-title">🎮 Crie um jogo</span>
    </div>

    <div class="dst-task">
      <div class="dst-task-num">1</div>
      <div class="dst-task-body"><p>A pasta do projeto deve incluir um <code>readme.txt</code> listando as bibliotecas usadas e instruções sobre como executar o projeto.</p></div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">2</div>
      <div class="dst-task-body"><p>O código deve ser <strong>totalmente original e escrito de forma independente.</strong> (Os elementos visuais não precisam ser originais.)</p></div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">3</div>
      <div class="dst-task-body"><p>Somente os seguintes módulos podem ser usados:</p>
        <ul>
          <li><strong>Pygame Zero</strong></li>
          <li><strong>math</strong></li>
          <li><strong>random</strong></li>
          <li>Outras bibliotecas <strong>NÃO SÃO PERMITIDAS!</strong></li>
          <li>A biblioteca <strong>Pygame</strong> <strong>NÃO DEVE</strong> ser usada.</li>
          <li><em>Exceção:</em> você pode importar a classe <code>Rect</code> do Pygame.</li>
        </ul>
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">4</div>
      <div class="dst-task-body"><p>Você só pode criar um jogo de um dos seguintes tipos:</p>
        <ul>
          <li><strong>Roguelike</strong> (ex. The Binding of Isaac, Hades, Slay the Spire)</li>
          <li><strong>Plataforma</strong> (ex. Super Mario Bros., Sonic the Hedgehog)</li>
          <li><strong>Runner</strong> (ex. Subway Surfers, Temple Run)</li>
        </ul>
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">5</div>
      <div class="dst-task-body"><p>O jogo deve ter um <strong>menu principal com botões clicáveis:</strong></p>
        <ul>
          <li>Iniciar Jogo</li>
          <li>Ligar/Desligar Música e Sons</li>
          <li>Sair</li>
        </ul>
        <img class="dst-img" src="assets/dst/image1.png" alt="Example game screen with clickable menu buttons" loading="lazy">
        <img class="dst-img" src="assets/dst/image5.png" alt="Example main menu: Play, Sound On/Off, Exit" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">6</div>
      <div class="dst-task-body"><p>O jogo deve ter pelo menos <strong>dois inimigos diferentes</strong> que sejam perigosos para o herói.</p>
        <img class="dst-img" src="assets/dst/image3.gif" alt="Roguelike map with several different enemies" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">7</div>
      <div class="dst-task-body"><p>Os inimigos devem <strong>se mover dentro de suas próprias áreas.</strong></p>
        <img class="dst-img" src="assets/dst/image4.gif" alt="Enemies moving, each confined to its own room" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">8</div>
      <div class="dst-task-body"><p>O jogo deve ter uma <strong>mecânica lógica de encerramento sem bugs</strong> — tanto para vencer quanto para perder.</p>
        <img class="dst-img" src="assets/dst/image7.gif" alt="Example gameplay leading to a win/lose outcome" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">9</div>
      <div class="dst-task-body"><p>Tanto o personagem do jogador quanto os inimigos devem ter <strong>animações de sprite para o movimento</strong> (por exemplo, movimentos das pernas ao caminhar).</p>
        <img class="dst-img" src="assets/dst/image10.gif" alt="Character running with animated leg movement" loading="lazy">
        <div class="dst-imgrow"><img class="dst-img pix" src="assets/dst/image11.gif" alt="Animated character moving through grass"></div>
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">10</div>
      <div class="dst-task-body"><p>O jogo deve ter <strong>tanto música de fundo quanto sons do jogo</strong> (sons quando o personagem ataca ou colide com um inimigo, um som de moeda ao coletar uma recompensa, etc.).</p><p style="margin-top:6px">Exemplo de recurso de som: <a class="dst-inline-link" href="https://mixkit.co" target="_blank" rel="noopener noreferrer">mixkit.co</a></p></div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">11</div>
      <div class="dst-task-body"><p>Tanto o personagem do jogador quanto os inimigos devem ter <strong>animações de repouso (idle)</strong> (por exemplo: respirar, olhar ao redor, mover nadadeiras, abanar o rabo, etc.).</p><p style="margin-top:6px">Exemplo de recurso visual: <a class="dst-inline-link" href="https://kenney.nl" target="_blank" rel="noopener noreferrer">Kenney.nl</a></p>
        <div class="dst-imgrow">
          <img class="dst-img pix" src="assets/dst/image9.gif" alt="Idle character animation">
          <img class="dst-img pix" src="assets/dst/image6.gif" alt="Idle character animation in grass">
          <img class="dst-img pix" src="assets/dst/image2.gif" alt="Idle scene with enemy">
        </div>
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">12</div>
      <div class="dst-task-body"><p>Você deve escrever <strong>suas próprias classes</strong> para implementar o movimento do personagem e as animações de sprite. <strong>(Programação Orientada a Objetos)</strong></p>
        <img class="dst-img" src="assets/dst/image8.png" alt="Example of a custom class implementing movement" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">13</div>
      <div class="dst-task-body"><p>Você deve usar <strong>nomes claros e significativos em inglês</strong> para variáveis, classes e funções — siga as regras da <strong>PEP 8</strong>.</p></div>
    </div>

    <div class="dst-stage-header">
      <span class="dst-stage-pill">Notas</span>
      <span class="dst-stage-title">📌 Definições e orientações</span>
    </div>
    <div class="card">
      <ul style="padding-left:17px">
        <li style="margin-bottom:6px">Um jogo <strong>roguelike</strong> é um jogo com visão de cima, no qual todos os objetos e personagens são posicionados na grade do mundo do jogo. O movimento entre células deve ser suave e animado.</li>
        <li style="margin-bottom:6px">Um jogo de <strong>aventura point-and-click</strong> oferece uma perspectiva de cima semelhante à dos jogos roguelike, mas o movimento do personagem não é restrito à grade.</li>
        <li style="margin-bottom:6px">Um <strong>jogo de plataforma</strong> é um jogo com visão lateral no qual o personagem pode pular entre plataformas.</li>
        <li><strong>Animação de sprite</strong> significa usar uma sequência de imagens que mudam de forma contínua e cíclica para animar um personagem. Simplesmente alternar entre uma imagem virada para a esquerda e uma imagem virada para a direita <strong>NÃO</strong> é animação de sprite. 🧐</li>
      </ul>
    </div>
    <div class="callout ct"><span class="ci">💡</span><span>Você não precisa de um código excessivamente complexo ou longo — normalmente <strong>100 a 200 linhas significativas</strong> são suficientes para concluir bem a tarefa.</span></div>
    <div class="callout cg"><span class="ci">✅</span><span>A complexidade deste projeto é apenas cerca de <strong>30% maior</strong> do que a dos projetos finais dos nossos alunos. Se um tutor consegue orientar os alunos em seus projetos, este nível está totalmente ao alcance — esperamos que você o conclua com sucesso! 👍</span></div>

    <div class="dst-stage-header">
      <span class="dst-stage-pill">Importante</span>
      <span class="dst-stage-title">⚠️ Leia com atenção</span>
    </div>
    <div class="callout cw"><span class="ci">⚠️</span><span>Se você violar vários requisitos importantes de uma vez, pode <strong>não haver oportunidade de revisar</strong> o projeto.</span></div>
    <div class="callout cw"><span class="ci">⚠️</span><span>O projeto <strong>NÃO</strong> deve ser total ou parcialmente copiado da internet — fazer isso levantará imediatamente preocupações sobre sua honestidade e profissionalismo.</span></div>
    <div class="callout cw"><span class="ci">🚫</span><span>O uso de <strong>IA é um motivo direto de reprovação.</strong></span></div>

    <div class="dst-stage-header">
      <span class="dst-stage-pill">Envio</span>
      <span class="dst-stage-title">📤 Como enviar</span>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">1</div>
      <div class="dst-task-body"><p>Faça upload do projeto concluído para uma plataforma de armazenamento em nuvem (<strong>Google Drive ou GitHub</strong>) e certifique-se de <strong>fornecer acesso</strong> à pasta do projeto. Por favor, <strong>NÃO</strong> use formatos de arquivo compactados!</p></div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">2</div>
      <div class="dst-task-body"><p>Complete o teste de habilidade abaixo e <strong>cole o link do seu projeto</strong> como resposta da pergunta final.</p></div>
    </div>
    <div class="dst-submit-card">
      <h3>🔗 Pronto para enviar?</h3>
      <p>Abra o formulário do teste de habilidade, preencha-o e cole o link do seu projeto como resposta final.</p>
      <a class="dst-link-btn" id="dst-form-btn" href="#">Abrir o Formulário do Teste de Habilidade →</a>
    </div>

    <p style="text-align:center;color:var(--text-muted);font-size:14px;margin-top:28px">Boa sorte! 🍀</p>
</div>`
},
modules: [
  {
    id:1, emoji:'🐍', color:'#AEDD2E',
    title:'Fundamentos de Python',
    desc:'print, variáveis, input, tipos de dados e conversão de tipos — o primeiro programa de uma criança.',
    obj:'Construa uma compreensão de nível didático do básico absoluto: saída, variáveis, entrada, os tipos de dados centrais e as conversões entre eles. Ao final, você deve ser capaz de explicar cada um de três maneiras diferentes e prever exatamente os erros que um iniciante vai encontrar.',
    sections:[
      {t:'🗺️ Onde isso se encaixa no curso', cards:[
        {type:'text', h:'O primeiro contato com código', b:'Este é o módulo em que uma criança executa seu primeiro programa na vida. Nada aqui é difícil para você — o desafio é inteiramente pedagógico. A trajetória do curso é deliberada: <strong>saída</strong> (<code>print</code>) para que vejam resultados na hora → <strong>variáveis</strong> para que o programa possa lembrar coisas → <strong>entrada</strong> para que ele possa responder → <strong>tipos de dados</strong> para que entendam que tipo de valor estão guardando → <strong>conversão</strong> para que a entrada possa ser usada em contas. Todos os módulos seguintes — laços, listas, funções e até jogos — se apoiam nessas cinco ideias.'},
        {type:'text', h:'Seu verdadeiro papel na aula 1', b:'Coloque um programa funcional e personalizado na tela da criança nos primeiros minutos. O sucesso visível e imediato é o que faz uma criança de 9 anos querer voltar. A teoria vem <em>depois</em> da descarga de dopamina de ver o próprio nome impresso, nunca antes.'},
        {type:'tip', txt:'Regra de ritmo: uma ideia nova e, logo em seguida, execute algo. Iniciantes não conseguem segurar três conceitos abstratos na cabeça antes de ver algum deles funcionar. Código → executar → reagir → próxima ideia.'}
      ]},
      {t:'🖨️ print() — saída', cards:[
        {type:'text', h:'O que ensinar', b:'<code>print()</code> exibe o que estiver dentro dos parênteses. Texto precisa de aspas; números não. Você pode imprimir várias coisas de uma vez separando-as por vírgulas, e o Python adiciona um espaço entre elas automaticamente.'},
        {type:'code', lbl:'print basics', code:`<span class="cf">print</span>(<span class="cs">"Hello, world!"</span>)
<span class="cf">print</span>(<span class="cn">2024</span>)
<span class="cf">print</span>(<span class="cs">"You are"</span>, <span class="cn">9</span>, <span class="cs">"years old"</span>)
<span class="cc"># Saída: You are 9 years old</span>`},
        {type:'warn', txt:'O erro nº 1 de quem começa é esquecer as aspas: <code>print(Hello)</code> faz o Python procurar uma <em>variável</em> chamada Hello e lançar <code>NameError</code>. Ensine a regra em voz alta: <strong>"texto sempre usa aspas."</strong>'}
      ]},
      {t:'📦 Variáveis — memória', cards:[
        {type:'text', h:'O que ensinar', b:'Uma variável armazena um valor sob um nome para que você possa reutilizá-lo depois. O nome fica à esquerda do <code>=</code>, o valor à direita. Ler a linha da direita para a esquerda ajuda: "pegue o valor 9 e coloque na caixa chamada age".'},
        {type:'code', lbl:'variables', code:`name = <span class="cs">"Mia"</span>
age = <span class="cn">9</span>
<span class="cf">print</span>(<span class="cs">"Hi"</span>, name)
age = age <span class="ck">+</span> <span class="cn">1</span>   <span class="cc"># a caixa pode ser atualizada</span>
<span class="cf">print</span>(<span class="cs">"Next year:"</span>, age)`},
        {type:'hi', h:'A metáfora que funciona', b:'"Uma variável é uma caixa etiquetada que guarda uma coisa. Coloque algo novo dentro e o que estava lá some." Isso explica a reatribuição perfeitamente — as crianças entendem na hora que <code>age = age + 1</code> esvazia a caixa e a preenche de novo.'},
        {type:'warn', txt:'<code>=</code> não é "igual" no sentido matemático — significa "coloque o lado direito no lado esquerdo". Dizer "igual" em voz alta causa confusão de verdade mais tarde com <code>==</code>. Diga "<strong>recebe</strong>" ou "<strong>vira</strong>" em vez disso: "age vira 10".'}
      ]},
      {t:'⌨️ input() — e por que tudo é uma string', cards:[
        {type:'text', h:'A ideia mais importante do módulo', b:'<code>input()</code> pausa o programa, espera o usuário digitar e devolve o que foi digitado <strong>como uma string — sempre, mesmo que tenham digitado números.</strong> Esse único fato é a origem de mais bugs de iniciantes do que qualquer outra coisa no curso inteiro, então merece tempo de verdade.'},
        {type:'code', lbl:'the classic bug, then the fix', code:`age = <span class="cf">input</span>(<span class="cs">"How old are you? "</span>)
<span class="cf">print</span>(age <span class="ck">+</span> <span class="cn">1</span>)
<span class="cc"># TypeError: can only concatenate str ... not int</span>

<span class="cc"># Correção: converta o texto em número</span>
age = <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"How old are you? "</span>))
<span class="cf">print</span>(<span class="cs">"Next year you’ll be"</span>, age <span class="ck">+</span> <span class="cn">1</span>)`},
        {type:'good', txt:'Ensine como uma história: "input sempre dá palavras, nunca números. Se você quiser fazer contas, primeiro precisa transformar as palavras em número com <code>int()</code>." Provoque a falha de propósito, leiam o erro juntos e depois corrijam. A sequência bug-depois-correção é mais memorável do que uma regra dada de antemão.'}
      ]},
      {t:'🔢 Tipos de dados e conversão', cards:[
        {type:'text', h:'Os três tipos que as crianças conhecem primeiro', b:'<strong>str</strong> (texto entre aspas), <strong>int</strong> (números inteiros) e <strong>float</strong> (decimais). <code>type(x)</code> revela qual deles um valor é — mantenha aberto em uma demonstração e verifique coisas ao vivo. As funções de conversão transitam entre eles: <code>int("5")</code> → 5, <code>str(5)</code> → "5", <code>float("3.2")</code> → 3.2.'},
        {type:'code', lbl:'type() and conversions', code:`<span class="cf">print</span>(<span class="cf">type</span>(<span class="cs">"hi"</span>))    <span class="cc"># &lt;class 'str'&gt;</span>
<span class="cf">print</span>(<span class="cf">type</span>(<span class="cn">7</span>))       <span class="cc"># &lt;class 'int'&gt;</span>
<span class="cf">print</span>(<span class="cf">type</span>(<span class="cn">3.5</span>))     <span class="cc"># &lt;class 'float'&gt;</span>

score = <span class="cf">int</span>(<span class="cs">"10"</span>)        <span class="cc"># "10" -&gt; 10</span>
label = <span class="cs">"Score: "</span> <span class="ck">+</span> <span class="cf">str</span>(score)  <span class="cc"># número -&gt; texto para juntar</span>`},
        {type:'twocol', left:{h:'String + Número = problema', items:['<code>"5" + 3</code> &rarr; <code>TypeError</code>','<code>"5" + "3"</code> &rarr; <code>"53"</code> (juntou!)','<code>5 + 3</code> &rarr; <code>8</code> (conta de verdade)']}, right:{h:'Como ensinar a diferença', items:['Execute os três ao vivo — deixe-os prever','"+ em texto cola; + em números soma"','Use <code>type()</code> para revelar o porquê']}}
      ]},
      {t:'🧒 Os equívocos que você vai encontrar', cards:[
        {type:'twocol', left:{h:'O que os iniciantes erram', items:['Esquecer as aspas em volta do texto','Tratar <code>input()</code> como um número','Confundir <code>=</code> e <code>==</code>','Erros de digitação nos nomes das variáveis (<code>naem</code>)','Achar que uma variável "se mostra" sozinha sem <code>print</code>']}, right:{h:'Suas jogadas preventivas', items:['"Texto usa aspas"','"input sempre dá palavras"','"um = guarda, dois == pergunta"','Leiam o <code>NameError</code> juntos','"Guardar é silencioso; só print mostra"']}},
        {type:'warn', txt:'Quando um erro aparecer, resista a corrigi-lo você mesmo. Leia a última linha do traceback <em>com</em> o aluno e deixe que ele encontre a causa. Desenvolver a independência na leitura de erros cedo é uma das coisas de maior impacto que um tutor faz.'}
      ]},
      {t:'🎯 Juntando tudo', cards:[
        {type:'hi', h:'Um primeiro projeto do qual se orgulham', b:'Um pequeno "Sobre Mim" ou uma calculadora de idade em 2050 usa todas as ideias do módulo: entrada, conversão, uma variável, aritmética e print. Deixe-os personalizar (o nome deles, o jogo favorito). A sensação de propriedade transforma um exercício em algo que eles tiram print e mostram para um dos pais.'},
        {type:'code', lbl:'mini-project: age in 2050', code:`name = <span class="cf">input</span>(<span class="cs">"Your name? "</span>)
age = <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"Your age? "</span>))
future = age <span class="ck">+</span> (<span class="cn">2050</span> <span class="ck">-</span> <span class="cn">2024</span>)
<span class="cf">print</span>(name <span class="ck">+</span> <span class="cs">", in 2050 you’ll be "</span> <span class="ck">+</span> <span class="cf">str</span>(future))`},
        {type:'good', txt:'Repare que este miniprojeto precisa de <code>int()</code> na entrada e de <code>str()</code> na saída — um motivo perfeito e natural para as conversões existirem. Prefira exemplos em que o conceito seja realmente necessário, em vez de demonstrado de forma isolada.'}
      ]}
    ],
    quiz:[
      {q:'Um aluno escreve age = input("Age: ") e depois age + 1 e recebe um TypeError. Qual é a correção mais limpa e a ideia por trás dela?', opts:['Envolver o input com int(): age = int(input(...)) — input sempre retorna uma string','Reiniciar o Python; o interpretador se confundiu','Renomear a variável para evitar um conflito','Remover o + 1, já que não dá para somar ao input'], c:0, fb:'input() sempre retorna uma string, então precisa ser convertida com int() antes da aritmética. Esta é a ideia central do módulo.'},
      {q:'Qual explicação de "variável" é a melhor para uma criança de 9 anos?', opts:['Uma caixa etiquetada que guarda um valor que você pode reutilizar e sobrescrever','Uma função que retorna dados armazenados','Uma palavra reservada em Python','Um laço que lembra números'], c:0, fb:'A metáfora da "caixa etiquetada" é concreta e também explica a reatribuição de forma clara.'},
      {q:'Por que é arriscado ler o símbolo "=" em voz alta como "igual" para iniciantes?', opts:['Incentiva a confusão com ==, que na verdade significa "é igual a"','"Igual" é gramaticalmente incorreto','O Python não usa o símbolo =','Deixa a aula mais longa'], c:0, fb:'Dizer "recebe" ou "vira" mantém a atribuição (=) distinta da comparação (==), evitando uma confusão muito comum mais adiante.'},
      {q:'Uma criança executa o programa e "nada aparece", embora tenha armazenado um valor em uma variável. A causa mais provável?', opts:['Ela armazenou o valor mas nunca chamou print() para exibi-lo','O nome da variável é longo demais','O Python só imprime números','Ela precisa importar um módulo de exibição'], c:0, fb:'Armazenar um valor é silencioso; só o print() coloca algo na tela. "Guardar é silencioso, só print mostra."'},
      {q:'O que print("5" + "3") exibe, e por que é bom demonstrar isso ao vivo?', opts:['"53" — o + junta strings, uma surpresa memorável que motiva a atenção aos tipos','8 — o Python soma os números','Um erro — não dá para usar + em strings','"5 3" — o Python adiciona um espaço'], c:0, fb:'Ambos os operandos são strings, então o + concatena para "53". A surpresa fixa melhor do que simplesmente enunciar a regra.'},
      {q:'Um aluno se depara com NameError: name ‘naem’ is not defined. A melhor resposta pedagógica é:', opts:['Ler a linha do erro juntos e deixar que ele perceba o erro de digitação','Corrigir em silêncio para a aula seguir em frente','Dizer a ele que variáveis não são confiáveis','Mudar para um exemplo diferente'], c:0, fb:'Orientar os alunos a ler tracebacks desenvolve a independência na depuração — um objetivo central de longo prazo.'}
    ]
  },
  {
    id:2, emoji:'🔀', color:'#F03D9E',
    title:'Controle de Fluxo: Condições e Laços',
    desc:'if / elif / else, operadores de comparação e lógicos, além dos laços while e for e do aninhamento.',
    obj:'Ensine os programas a tomar decisões e a repetir. Você deve ser capaz de explicar a indentação como sintaxe, escolher for vs while na hora, seguir um laço à mão e diagnosticar os erros de laço infinito e de "um a mais/menos" antes que aconteçam.',
    sections:[
      {t:'🗺️ Onde isso se encaixa no curso', cards:[
        {type:'text', h:'Dois motores de todo programa', b:'Até agora os programas rodavam direto para baixo, de cima para baixo, uma vez. Este módulo adiciona as duas coisas que fazem o código de fato <em>fazer</em> algo interessante: <strong>decisões</strong> (<code>if/elif/else</code>) para que o programa possa se ramificar, e <strong>repetição</strong> (<code>while</code>, <code>for</code>) para que ele possa fazer um trabalho muitas vezes sem copiar e colar. Combinados, eles produzem os primeiros "algoritmos" de verdade — e são a base de todos os jogos mais adiante no curso.'},
        {type:'warn', txt:'Em Python, a indentação <strong>é</strong> sintaxe, não estilo. Os espaços debaixo de um <code>if</code> ou <code>for</code> são o que diz ao Python "isto pertence ao bloco". Cerca de metade de todos os bugs de iniciantes neste módulo é um dois-pontos faltando ou uma indentação errada — reserve tempo para isso explicitamente.'}
      ]},
      {t:'🔁 Condições: if / elif / else', cards:[
        {type:'text', h:'O que ensinar', b:'<code>if</code> executa um bloco apenas quando sua condição é <code>True</code>. <code>elif</code> ("else if") só é verificado <em>se</em> toda condição acima dele foi False. <code>else</code> é o pega-tudo quando nada coincidiu. O Python os verifica de cima para baixo e para na primeira coincidência — a ordem importa.'},
        {type:'code', lbl:'branching', code:`score = <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"Your score: "</span>))
<span class="ck">if</span> score <span class="ck">&gt;=</span> <span class="cn">90</span>:
    <span class="cf">print</span>(<span class="cs">"Excellent!"</span>)
<span class="ck">elif</span> score <span class="ck">&gt;=</span> <span class="cn">50</span>:
    <span class="cf">print</span>(<span class="cs">"You passed"</span>)
<span class="ck">else</span>:
    <span class="cf">print</span>(<span class="cs">"Try again"</span>)`},
        {type:'text', h:'Operadores de comparação e lógicos', b:'Comparações retornam True/False: <code>==</code> (igual), <code>!=</code> (diferente), <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>. Combine-os com <code>and</code> (ambos precisam ser verdadeiros) e <code>or</code> (pelo menos um verdadeiro): <code>if age &gt;= 6 and age &lt;= 12:</code>.'},
        {type:'tip', txt:'Uma armadilha favorita: ordenar os ramos <code>elif</code> errado. Se você verificar <code>score &gt;= 50</code> antes de <code>score &gt;= 90</code>, um 95 coincide com "passed" primeiro e nunca chega a "Excellent". Ensine os alunos a ordenar as condições do mais específico para o menos.'}
      ]},
      {t:'➰ laços for e range()', cards:[
        {type:'text', h:'O que ensinar', b:'Um laço <code>for</code> repete um número conhecido de vezes. <code>range(n)</code> produz os números <strong>de 0 até, mas sem incluir, n</strong> — então <code>range(5)</code> dá 0,1,2,3,4 (cinco números, começando do zero). <code>range(1, 6)</code> dá 1–5, e <code>range(0, 10, 2)</code> conta em passos de 2.'},
        {type:'code', lbl:'for + range', code:`<span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">5</span>):
    <span class="cf">print</span>(<span class="cs">"Step"</span>, i)        <span class="cc"># 0,1,2,3,4</span>

<span class="ck">for</span> n <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">5</span>, <span class="cn">0</span>, <span class="ck">-</span><span class="cn">1</span>):
    <span class="cf">print</span>(<span class="cs">"Countdown:"</span>, n) <span class="cc"># 5,4,3,2,1</span>`},
        {type:'warn', txt:'A confusão do "um a mais" é universal: os alunos esperam que <code>range(5)</code> imprima 1–5. Mostre uma vez, devagar, e escreva os números produzidos no quadro: 0,1,2,3,4. "Começa no zero, para <em>antes</em> do número."'}
      ]},
      {t:'🔄 laços while', cards:[
        {type:'text', h:'O que ensinar', b:'Um laço <code>while</code> repete <em>enquanto</em> sua condição continuar True — use-o quando você não souber a contagem de antemão ("continue perguntando até a senha estar certa"). Algo dentro do laço <strong>precisa em algum momento tornar a condição False</strong>, ou ele roda para sempre.'},
        {type:'code', lbl:'while + a stop condition', code:`lives = <span class="cn">3</span>
<span class="ck">while</span> lives <span class="ck">&gt;</span> <span class="cn">0</span>:
    <span class="cf">print</span>(<span class="cs">"Lives:"</span>, lives)
    lives <span class="ck">-=</span> <span class="cn">1</span>      <span class="cc"># é isto que encerra o laço</span>
<span class="cf">print</span>(<span class="cs">"Game over"</span>)`},
        {type:'warn', txt:'O laço infinito é o bug característico do <code>while</code>. Se você esquecer <code>lives -= 1</code>, o programa trava para sempre. Ensine os alunos a perguntar <strong>antes</strong> de escrever o corpo: "qual linha aqui dentro faz este laço eventualmente parar?"'}
      ]},
      {t:'🪆 Aninhamento', cards:[
        {type:'text', h:'O que ensinar', b:'Condições e laços podem ficar um dentro do outro. Um laço com um <code>if</code> dentro permite agir de forma diferente a cada passagem; um laço dentro de um laço lida com grades e tabelas. Cada nível de aninhamento é outro nível de indentação — manter os recuos organizados é o que mantém o código aninhado legível.'},
        {type:'code', lbl:'a loop with a decision inside', code:`<span class="ck">for</span> n <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">1</span>, <span class="cn">6</span>):
    <span class="ck">if</span> n <span class="ck">%</span> <span class="cn">2</span> == <span class="cn">0</span>:
        <span class="cf">print</span>(n, <span class="cs">"is even"</span>)
    <span class="ck">else</span>:
        <span class="cf">print</span>(n, <span class="cs">"is odd"</span>)`}
      ]},
      {t:'🧒 Os equívocos que você vai encontrar', cards:[
        {type:'twocol', left:{h:'O que os iniciantes erram', items:['<code>=</code> em vez de <code>==</code> numa condição','Esquecer o dois-pontos <code>:</code>','Indentação inconsistente / faltando','<code>range(5)</code> "deveria" ser 1–5','Laços <code>while</code> infinitos','Colocar código depois do laço, mas indentado para dentro dele']}, right:{h:'Suas jogadas preventivas', items:['"um = guarda, dois == pergunta"','Torne o dois-pontos um reflexo','Sempre 4 espaços; mostre o bloco visualmente','Escreva os números: 0,1,2,3,4','"O que faz este laço parar?"','"Indentar para dentro = dentro; alinhar de volta = depois"']}},
        {type:'tip', txt:'Quando um laço se comporta mal, siga-o à mão em um quadro branco: escreva i = 0, depois 1, depois 2, e o que imprime a cada vez. "Desenrolar" o laço tira a mágica e é o melhor hábito de depuração que você pode demonstrar.'}
      ]},
      {t:'🎯 Como ensinar', cards:[
        {type:'hi', h:'for vs while — dê a eles uma frase', b:'"Use <strong>for</strong> quando você sabe quantas vezes (faça isto 10 vezes). Use <strong>while</strong> quando você repete até algo acontecer (continue até acertarem)." Essa única regra resolve quase toda dúvida de "qual laço?".'},
        {type:'good', txt:'Um jogo de adivinhar número é o encerramento perfeito aqui: um laço <code>while</code>, um <code>if/elif/else</code> para "muito alto / muito baixo / correto" e o <code>input()</code> do módulo 1. Parece um jogo de verdade e exercita tudo de uma vez.'}
      ]}
    ],
    quiz:[
      {q:'O if de um aluno sempre executa o primeiro ramo, independentemente da entrada. O que você verifica primeiro e por quê?', opts:['Se ele escreveu = em vez de == — = atribui, == compara','Se o Python precisa ser reinstalado','Se ele tem ramos elif suficientes','Se o arquivo foi salvo'], c:0, fb:'Um único = atribui um valor (sempre verdadeiro aqui); == é a comparação. "Um = guarda, dois == pergunta."'},
      {q:'Qual é a melhor regra de uma frase para escolher entre for e while?', opts:['for quando você sabe o número de repetições; while quando você repete até uma condição mudar','Sempre prefira while; for é legado','for é para números, while é para texto','São intercambiáveis em todos os casos'], c:0, fb:'Contagem conhecida → for. Repetir-até-algo-acontecer → while.'},
      {q:'O programa de uma criança trava e nunca termina. O que você ensina a procurar?', opts:['A linha dentro do laço while que deveria em algum momento tornar sua condição False','Um print faltando','Comentários demais deixando o programa lento','Um erro de digitação dentro de uma string'], c:0, fb:'Um programa travado costuma ser um laço while infinito cuja variável de controle nunca muda.'},
      {q:'O que range(5) produz, e qual equívoco você precisa antecipar?', opts:['0,1,2,3,4 — os alunos esperam 1–5, então "começa no zero, para antes do número"','1,2,3,4,5 — conta naturalmente','Apenas o número 5','Um número aleatório abaixo de 5'], c:0, fb:'range(5) começa em zero e para antes do 5. Escrever os números evita o erro de "um a mais".'},
      {q:'Por que a ORDEM dos ramos elif importa em if score >= 50 ... elif score >= 90?', opts:['O Python para na primeira condição verdadeira, então um 95 coincidiria erroneamente com >= 50 primeiro','Os ramos elif rodam em ordem aleatória','Ramos posteriores substituem os anteriores','A ordem nunca importa em condicionais'], c:0, fb:'As condições são verificadas de cima para baixo e param na primeira coincidência — ordene do mais específico para o menos.'},
      {q:'Um bloco aninhado "depois" de um laço acidentalmente roda dentro dele. Qual é a causa raiz, e o ponto pedagógico?', opts:['Indentação: linhas indentadas ficam dentro do laço; alinhá-las de volta as coloca depois dele','O dois-pontos foi colocado errado','range() foi usado errado','while deveria ter sido for'], c:0, fb:'A indentação define blocos em Python. "Indentar para dentro = dentro; alinhar de volta = depois."'}
    ]
  },
  {
    id:3, emoji:'📦', color:'#2B8EF0',
    title:'Dados: Listas, Dicionários e Random',
    desc:'Armazenando muitos valores: criação e métodos de listas, indexação, dicionários (chave→valor) e o módulo random.',
    obj:'Leve os alunos de variáveis únicas para coleções. Você deve ser capaz de ensinar a indexação começando do zero sem confusão, escolher lista vs dicionário pelo padrão de acesso, demonstrar os métodos centrais de listas e usar o random para dar vida aos programas.',
    sections:[
      {t:'🗺️ Onde isso se encaixa no curso', cards:[
        {type:'text', h:'De um valor para muitos', b:'Uma variável guarda uma coisa; programas de verdade precisam de coleções. Este módulo apresenta <strong>listas</strong> (ordenadas, acessadas por posição) e <strong>dicionários</strong> (acessados por uma chave/nome), além do módulo <strong>random</strong> para o acaso. Essas estruturas estão em todo lugar nos módulos de jogos mais adiante — listas de inimigos, tabelas de pontuação, inventários, mapas de tiles — então uma base sólida aqui rende repetidamente.'},
        {type:'tip', txt:'A decisão principal que você está ensinando: "eu encontro isto pela <em>posição</em> ou pelo <em>nome</em>?" Posição → lista. Nome → dicionário. Enquadre todo exemplo em torno dessa pergunta.'}
      ]},
      {t:'📋 Listas e indexação', cards:[
        {type:'text', h:'O que ensinar', b:'Uma lista guarda muitos valores em ordem, escrita entre colchetes. Você lê um item pelo seu <strong>índice</strong>, e os índices começam em <strong>0</strong> — o primeiro item é <code>pets[0]</code>, o segundo é <code>pets[1]</code>. <code>len(pets)</code> dá a contagem, então o último item é <code>pets[len(pets)-1]</code>.'},
        {type:'code', lbl:'lists & indexing', code:`pets = [<span class="cs">"cat"</span>, <span class="cs">"dog"</span>, <span class="cs">"fish"</span>]
<span class="cf">print</span>(pets[<span class="cn">0</span>])      <span class="cc"># cat (o PRIMEIRO item)</span>
<span class="cf">print</span>(pets[<span class="cn">2</span>])      <span class="cc"># fish</span>
<span class="cf">print</span>(<span class="cf">len</span>(pets))   <span class="cc"># 3</span>

<span class="ck">for</span> pet <span class="ck">in</span> pets:    <span class="cc"># percorre cada item</span>
    <span class="cf">print</span>(pet)`},
        {type:'warn', txt:'A indexação a partir do zero é um obstáculo conceitual de verdade. Diga "<strong>o primeiro item é o item zero</strong>" repetidamente, e mostre que <code>pets[3]</code> em uma lista de 3 itens lança <code>IndexError: list index out of range</code> — porque os índices válidos são 0, 1, 2.'}
      ]},
      {t:'🛠️ Métodos de listas', cards:[
        {type:'text', h:'O que ensinar', b:'Listas podem mudar. Os métodos centrais: <code>append(x)</code> adiciona ao final, <code>insert(i, x)</code> adiciona em uma posição, <code>remove(x)</code> apaga o primeiro valor correspondente, <code>pop(i)</code> remove e retorna o item no índice i, e <code>clear()</code> esvazia a lista.'},
        {type:'code', lbl:'mutating a list', code:`pets = [<span class="cs">"cat"</span>, <span class="cs">"dog"</span>]
pets.<span class="cf">append</span>(<span class="cs">"fish"</span>)    <span class="cc"># ["cat","dog","fish"]</span>
pets.<span class="cf">insert</span>(<span class="cn">0</span>, <span class="cs">"bird"</span>) <span class="cc"># ["bird","cat","dog","fish"]</span>
pets.<span class="cf">remove</span>(<span class="cs">"dog"</span>)     <span class="cc"># ["bird","cat","fish"]</span>
last = pets.<span class="cf">pop</span>()        <span class="cc"># remove e retorna "fish"</span>`},
        {type:'twocol', left:{h:'append vs insert vs remove', items:['<code>append</code>: adiciona ao final','<code>insert(i,x)</code>: adiciona no índice i','<code>remove(x)</code>: apaga por valor','<code>pop(i)</code>: apaga por índice, retorna o item']}, right:{h:'Confusões comuns', items:['<code>remove</code> recebe um valor, não um índice','<code>pop</code> recebe um índice, não um valor','<code>remove</code> apaga só a PRIMEIRA correspondência','<code>append</code> recebe exatamente um argumento']}}
      ]},
      {t:'🗂️ Dicionários', cards:[
        {type:'text', h:'O que ensinar', b:'Um dicionário armazena pares <strong>chave → valor</strong> entre chaves ({}). Em vez de uma posição numérica, você busca as coisas por uma chave significativa: <code>scores["Ann"]</code> significa "me dê o valor armazenado sob Ann". Você pode adicionar ou atualizar com <code>scores["Leo"] = 12</code>.'},
        {type:'code', lbl:'dictionaries', code:`scores = {<span class="cs">"Ann"</span>: <span class="cn">15</span>, <span class="cs">"Leo"</span>: <span class="cn">9</span>}
<span class="cf">print</span>(scores[<span class="cs">"Ann"</span>])   <span class="cc"># 15 — busca pela chave</span>
scores[<span class="cs">"Mia"</span>] = <span class="cn">20</span>      <span class="cc"># adiciona um novo par</span>
scores[<span class="cs">"Leo"</span>] = <span class="cn">11</span>      <span class="cc"># atualiza um existente</span>`},
        {type:'warn', txt:'Os alunos confundem a chave com o valor, e a direção importa: <code>scores["Ann"]</code> pergunta "qual é a pontuação da Ann?", não está perguntando "a Ann é 15?". Além disso, buscar uma chave que não existe lança <code>KeyError</code> — um erro útil e didático.'}
      ]},
      {t:'🎲 O módulo random', cards:[
        {type:'text', h:'O que ensinar', b:'Importar <code>random</code> libera o acaso. <code>random.randint(1, 6)</code> dá um número inteiro de 1 a 6 (ambas as pontas incluídas), e <code>random.choice(my_list)</code> escolhe um item aleatório de uma lista. Esta é a faísca por trás dos dados, questionários e comportamento dos inimigos mais adiante.'},
        {type:'code', lbl:'random', code:`<span class="ck">import</span> random

dice = random.<span class="cf">randint</span>(<span class="cn">1</span>, <span class="cn">6</span>)
<span class="cf">print</span>(<span class="cs">"You rolled"</span>, dice)

pets = [<span class="cs">"cat"</span>, <span class="cs">"dog"</span>, <span class="cs">"fish"</span>]
<span class="cf">print</span>(random.<span class="cf">choice</span>(pets))`},
        {type:'warn', txt:'Esquecer <code>import random</code> dá <code>NameError: name ‘random’ is not defined</code>. As importações vão uma vez, bem no topo do arquivo. Note que <code>randint</code> inclui ambas as pontas — diferente de <code>range</code>, que exclui a superior.'}
      ]},
      {t:'🎯 Como ensinar', cards:[
        {type:'hi', h:'Duas metáforas que pegam', b:'Uma lista é "uma <strong>prateleira numerada</strong> — vaga 0, vaga 1, vaga 2". Um dicionário é "um <strong>app de contatos</strong> — você busca um nome e obtém um número". Elas mapeiam exatamente índice-vs-chave e resolvem na hora a maioria das dúvidas de "qual usar?".'},
        {type:'good', txt:'O jogo de adivinhar número ganha um upgrade perfeito aqui: <code>random.randint</code> escolhe o número secreto, e uma lista armazena os palpites anteriores. Combinar random + listas + os laços do módulo 2 mostra aos alunos como os conceitos se somam em algo genuinamente divertido.'}
      ]}
    ],
    quiz:[
      {q:'Um aluno escreve pets[1] esperando o primeiro pet, mas obtém o segundo. O que você ensina, e qual erro comprova o ponto?', opts:['A indexação começa em 0, então pets[0] é o primeiro; pets[3] numa lista de 3 itens lança IndexError','Listas não são confiáveis e devem ser evitadas','Ele precisa converter a lista em dicionário','Somar 1 a todo índice de agora em diante'], c:0, fb:'Indexação a partir do zero: o primeiro item é o índice 0, os índices válidos são 0..len-1, e passar disso lança IndexError.'},
      {q:'Quando um aluno deve recorrer a um dicionário em vez de uma lista?', opts:['Quando ele acessa valores por um nome/chave significativo em vez de por posição','Sempre que a ordem dos itens for o mais importante','Sempre que houver mais de dez itens','Dicionários são sempre a melhor escolha'], c:0, fb:'Listas são acessadas por posição; dicionários mapeiam chaves para valores — ideais para buscas nome→pontuação.'},
      {q:'Qual é a diferença entre list.remove() e list.pop()?', opts:['remove(valor) apaga por valor; pop(índice) apaga por posição e retorna o item','São idênticos','remove recebe um índice; pop recebe um valor','pop esvazia a lista inteira'], c:0, fb:'remove funciona por valor (primeira correspondência); pop funciona por índice e devolve o item removido.'},
      {q:'Um jogo usando random.randint dá erro com "random is not defined". Qual é a correção e a regra?', opts:['Adicionar import random no topo — as importações acontecem uma vez, antes do uso','Renomear a variável dos dados','Usar uma lista em vez de random','Reinstalar o Python'], c:0, fb:'O módulo random precisa ser importado (uma vez, no topo) antes de qualquer uma de suas funções ser usada.'},
      {q:'Qual é a metáfora concreta mais eficaz para um dicionário ao ensinar crianças?', opts:['Um app de contatos: busque um nome, receba de volta um número','Uma prateleira numerada com vagas 0,1,2','Um cronômetro de contagem regressiva','Uma única caixa etiquetada'], c:0, fb:'O modelo do app de contatos captura a busca chave→valor; o modelo da prateleira numerada é para listas.'},
      {q:'Como random.randint(1, 6) difere de range(1, 6), e por que mencionar isso?', opts:['randint INCLUI o 6; range para ANTES do 6 — os alunos confundem os dois limites','São idênticos','randint exclui ambas as pontas','range inclui ambas as pontas'], c:0, fb:'randint(1,6) pode retornar 6; range(1,6) gera 1–5. Destacar a diferença de limite evita bugs.'}
    ]
  },
  {
    id:4, emoji:'⚙️', color:'#7C5CFC',
    title:'Funções',
    desc:'def, parâmetros e argumentos, return vs print, e por que funções mantêm programas grandes sob controle.',
    obj:'Ensine os alunos a empacotar código em funções reutilizáveis. Você deve ser capaz de deixar as distinções definir-vs-chamar e print-vs-return cristalinas, explicar parâmetros com uma metáfora e motivar as funções deixando os alunos sentirem primeiro a dor da duplicação.',
    sections:[
      {t:'🗺️ Onde isso se encaixa no curso', cards:[
        {type:'text', h:'O primeiro gosto de estrutura', b:'Até agora os programas são listas planas de instruções. As funções permitem que os alunos <strong>deem um nome a um trecho de trabalho e o reutilizem</strong>. Esta é a ponte para tudo que vem a seguir: os desenhos com Turtle chamam funções, e o PyGame Zero é construído inteiramente sobre funções que você escreve (<code>draw</code>, <code>update</code>, <code>on_key_down</code>). Um aluno inseguro com funções vai ter dificuldade no momento em que os jogos começarem — então este módulo é um verdadeiro portão.'},
        {type:'tip', txt:'As duas ideias que precisam de tempo de verdade: <strong>definir vs chamar</strong> (escrever uma função vs executá-la) e <strong>print vs return</strong> (mostrar um valor vs devolvê-lo). Quase todo bug de função que um iniciante encontra é um desses dois.'}
      ]},
      {t:'✏️ def — definindo e chamando', cards:[
        {type:'text', h:'O que ensinar', b:'<code>def name():</code> <em>define</em> uma função — escreve a receita mas ainda não executa nada. O código só roda quando você a <strong>chama</strong> escrevendo seu nome com parênteses: <code>greet()</code>. Você pode definir uma vez e chamar quantas vezes quiser.'},
        {type:'code', lbl:'define once, call many times', code:`<span class="ck">def</span> <span class="cf">greet</span>():
    <span class="cf">print</span>(<span class="cs">"Hello!"</span>)
    <span class="cf">print</span>(<span class="cs">"Welcome to the lesson."</span>)

<span class="cf">greet</span>()   <span class="cc"># agora ela executa</span>
<span class="cf">greet</span>()   <span class="cc"># e de novo</span>`},
        {type:'warn', txt:'O clássico bug do "nada aconteceu": o aluno define uma função mas nunca a chama. Ensine a frase "<strong>definir = escrever a receita; chamar = cozinhar</strong>". Uma receita num livro não cozinha jantar nenhum até alguém segui-la.'}
      ]},
      {t:'📥 Parâmetros e argumentos', cards:[
        {type:'text', h:'O que ensinar', b:'Parâmetros permitem que uma função receba entrada para se comportar de forma diferente a cada chamada. O nome na definição (<code>name</code>) é o <strong>parâmetro</strong>; o valor real que você passa (<code>"Mia"</code>) é o <strong>argumento</strong>. Eles são correspondidos da esquerda para a direita, então a quantidade precisa bater.'},
        {type:'code', lbl:'passing information in', code:`<span class="ck">def</span> <span class="cf">greet</span>(name):
    <span class="cf">print</span>(<span class="cs">"Hello,"</span>, name)

<span class="cf">greet</span>(<span class="cs">"Mia"</span>)    <span class="cc"># Hello, Mia</span>
<span class="cf">greet</span>(<span class="cs">"Sam"</span>)    <span class="cc"># Hello, Sam</span>

<span class="ck">def</span> <span class="cf">add</span>(a, b):
    <span class="cf">print</span>(a <span class="ck">+</span> b)
<span class="cf">add</span>(<span class="cn">3</span>, <span class="cn">4</span>)        <span class="cc"># 7</span>`},
        {type:'warn', txt:'Passar o número errado de argumentos lança <code>TypeError: greet() missing 1 required positional argument</code>. Leiam juntos — o erro literalmente nomeia o que está faltando, o que é ótima prática de leitura de erros.'}
      ]},
      {t:'↩️ return vs print — o grande ponto', cards:[
        {type:'text', h:'O que ensinar', b:'<code>print</code> <strong>mostra</strong> um valor na tela para uma pessoa. <code>return</code> <strong>devolve um valor</strong> ao programa para que o resto do código possa usá-lo. Uma função que imprime mas não retorna devolve <code>None</code> — então você não consegue fazer contas com o resultado dela.'},
        {type:'code', lbl:'the difference made visible', code:`<span class="ck">def</span> <span class="cf">square_print</span>(n):
    <span class="cf">print</span>(n <span class="ck">*</span> n)        <span class="cc"># só exibe</span>

<span class="ck">def</span> <span class="cf">square_return</span>(n):
    <span class="ck">return</span> n <span class="ck">*</span> n       <span class="cc"># devolve o valor</span>

x = <span class="cf">square_print</span>(<span class="cn">5</span>)   <span class="cc"># imprime 25, mas x é None</span>
y = <span class="cf">square_return</span>(<span class="cn">5</span>)  <span class="cc"># y é 25, usável em contas</span>
<span class="cf">print</span>(y <span class="ck">+</span> <span class="cn">1</span>)         <span class="cc"># 26</span>`},
        {type:'hi', h:'Por que os alunos precisam sentir isso', b:'Mostre que <code>x = square_print(5)</code> deixa <code>x</code> como <code>None</code>, e então <code>x + 1</code> quebra. A quebra é a lição: "print fala com uma pessoa; return fala com o programa". Até um aluno sentir essa diferença, as funções ficam nebulosas.'}
      ]},
      {t:'🍳 A metáfora e a motivação', cards:[
        {type:'hi', h:'A metáfora da receita', b:'Uma função é uma <strong>receita</strong>. <code>def</code> escreve a receita; os <strong>argumentos são os ingredientes</strong> que você entrega; <strong>chamá-la é cozinhar</strong>; e <code>return</code> é o prato pronto entregue de volta. O print, por outro lado, é só gritar o resultado do outro lado da cozinha — ninguém pode usá-lo depois.'},
        {type:'good', txt:'Motive as funções infligindo a duplicação primeiro: peça ao aluno para escrever a mesma saudação de 4 linhas três vezes, e depois refatore em uma única <code>greet(name)</code>. Sentir o tédio é o que faz o "não se repita" fazer sentido — não entregue a regra, deixe que a conquistem.'},
        {type:'code', lbl:'before / after refactor', code:`<span class="cc"># antes: repetido 3 vezes</span>
<span class="cf">print</span>(<span class="cs">"Hi Mia, ready to code?"</span>)
<span class="cf">print</span>(<span class="cs">"Hi Sam, ready to code?"</span>)

<span class="cc"># depois: uma função reutilizável</span>
<span class="ck">def</span> <span class="cf">welcome</span>(name):
    <span class="cf">print</span>(<span class="cs">"Hi"</span>, name <span class="ck">+</span> <span class="cs">", ready to code?"</span>)
<span class="cf">welcome</span>(<span class="cs">"Mia"</span>)
<span class="cf">welcome</span>(<span class="cs">"Sam"</span>)`}
      ]},
      {t:'🧒 Os equívocos que você vai encontrar', cards:[
        {type:'twocol', left:{h:'O que os iniciantes erram', items:['Definir uma função mas nunca chamá-la','Confundir <code>print</code> com <code>return</code>','Número errado de argumentos','Esperar um valor de uma função que só imprime','Indentar o corpo de forma inconsistente']}, right:{h:'Suas jogadas preventivas', items:['"Definir = receita; chamar = cozinhar"','Mostre os dois lado a lado; quebre com None','Leiam o TypeError juntos','"print fala com pessoas, return com o código"','Trate o corpo como qualquer bloco indentado']}}
      ]}
    ],
    quiz:[
      {q:'Um aluno define uma função mas "nada acontece" quando executa o arquivo. Qual é a causa e a frase que você ensina?', opts:['Ele nunca a chamou — "definir = escrever a receita; chamar = cozinhar"','O Python precisa ser reiniciado','Funções precisam sempre retornar um valor','def foi escrito errado'], c:0, fb:'Definir apenas escreve a receita; a função precisa ser chamada para de fato executar.'},
      {q:'Qual é a maneira mais clara de distinguir print de return?', opts:['print mostra um valor para uma pessoa; return devolve um valor ao programa','Fazem a mesma coisa','return é só um print mais rápido','print só funciona fora de funções'], c:0, fb:'return dá um valor utilizável a quem chamou; print apenas exibe texto na tela.'},
      {q:'Em def square(number): return number*number, o que exatamente é "number"?', opts:['Um parâmetro — a entrada que a função recebe quando é chamada','Uma palavra reservada do Python','O valor que a função retorna','Uma variável global definida em outro lugar'], c:0, fb:'number é o parâmetro; o argumento é o valor real passado, ex. square(5).'},
      {q:'x = greet("Mia") onde greet só imprime — qual é o valor de x, e por que vale a pena mostrar isso?', opts:['None — uma função que só imprime não retorna nada, então x+1 quebraria e provaria que print ≠ return','"Mia"','O texto que foi impresso','Ela lança um erro imediatamente'], c:0, fb:'Uma função sem return devolve None. A quebra seguinte é a forma mais memorável de ensinar print vs return.'},
      {q:'Qual é a maneira mais eficaz de motivar POR QUE as funções são úteis?', opts:['Fazer os alunos repetirem o mesmo código várias vezes, e depois refatorá-lo em uma função','Começar com a definição formal de função','Evitar exemplos e explicar a teoria','Usar apenas as funções embutidas do Python'], c:0, fb:'Deixar os alunos sentirem a dor da duplicação faz o valor das funções reutilizáveis se encaixar sozinho.'},
      {q:'Uma chamada lança "TypeError: greet() missing 1 required positional argument". O que isso significa e como você usa isso pedagogicamente?', opts:['A quantidade de argumentos não bate com os parâmetros — leiam o erro juntos como prática de depuração','greet não é uma função de verdade','O Python ficou sem memória','O valor de retorno foi ignorado'], c:0, fb:'Argumentos precisam bater com os parâmetros; o erro nomeia exatamente o que falta, tornando-o ideal para prática de leitura de erros.'}
    ]
  },
  {
    id:5, emoji:'🐢', color:'#F59E0B',
    title:'Desenho e Introdução ao PyGame Zero',
    desc:'O módulo Turtle, e então o salto para os gráficos: Actors, a janela, draw() e update(), e o laço do jogo.',
    obj:'Guie o salto de programas de texto para o visual. Você deve ser capaz de explicar o laço do jogo (o modelo do flipbook), por que o framework chama suas funções, a diferença entre draw() e update(), e as armadilhas de arquivos/nomenclatura que quebram os sprites silenciosamente.',
    sections:[
      {t:'🗺️ Onde isso se encaixa no curso', cards:[
        {type:'text', h:'O pico de motivação', b:'Este é o módulo em que a programação se torna <em>visual</em>, e para muitas crianças é o momento em que elas se apaixonam por ela. Os alunos desenham com <strong>Turtle</strong> (uma recompensa satisfatória para funções e laços) e depois conhecem o <strong>PyGame Zero</strong> — o framework de jogos por trás das "Aventuras do Coddy". Tudo nos módulos de jogos restantes se constrói diretamente sobre os conceitos apresentados aqui.'},
        {type:'warn', txt:'Há um salto conceitual de verdade aqui: de um programa que roda de cima para baixo <em>uma vez</em>, para um <strong>laço de jogo</strong> que redesenha muitas vezes por segundo. Nomeie essa mudança em voz alta — os alunos que não a percebem acham os jogos incompreensíveis.'}
      ]},
      {t:'🐢 Turtle — desenhando com código', cards:[
        {type:'text', h:'O que ensinar', b:'O Turtle move uma "caneta" pela tela: <code>forward(100)</code>, <code>right(90)</code>, <code>left(45)</code>. A mágica é que desenhar uma forma é só um laço, e envolver esse laço em uma função cria uma ferramenta reutilizável. É a demonstração mais clara possível de por que os dois módulos anteriores importavam.'},
        {type:'code', lbl:'a function that draws (loops + functions!)', code:`<span class="ck">import</span> turtle

<span class="ck">def</span> <span class="cf">draw_square</span>(side):
    <span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">4</span>):
        turtle.<span class="cf">forward</span>(side)
        turtle.<span class="cf">right</span>(<span class="cn">90</span>)

<span class="cf">draw_square</span>(<span class="cn">100</span>)
<span class="cf">draw_square</span>(<span class="cn">50</span>)   <span class="cc"># reutiliza com um tamanho diferente</span>`},
        {type:'good', txt:'O Turtle é o "aha" perfeito: um quadrado é só "avança, vira, quatro vezes". Deixe os alunos mudarem o ângulo para 120 e a contagem para 3 para obter um triângulo — descobrir por conta própria a ligação entre o ângulo de giro e a forma é muito mais forte do que ouvir a explicação.'}
      ]},
      {t:'🎮 PyGame Zero — a configuração', cards:[
        {type:'text', h:'O que ensinar', b:'Um programa PyGame Zero começa com <code>#pgzero</code> (ou é executado com <code>pgzrun</code>). Você define a janela com <code>WIDTH</code> e <code>HEIGHT</code>, e então cria sprites como <strong>Actors</strong>. Um <code>Actor("coddy")</code> carrega automaticamente <code>images/coddy.png</code> — o nome é o do arquivo, em minúsculas, sem extensão. Posicione-o com <code>.pos</code>, <code>.x</code>, <code>.y</code>.'},
        {type:'code', lbl:'window + actor', code:`<span class="cc">#pgzero</span>
WIDTH = <span class="cn">600</span>
HEIGHT = <span class="cn">400</span>

coddy = <span class="cf">Actor</span>(<span class="cs">"coddy"</span>)   <span class="cc"># carrega images/coddy.png</span>
coddy.pos = <span class="cn">300</span>, <span class="cn">200</span>      <span class="cc"># centro da janela</span>`},
        {type:'warn', txt:'O assassino silencioso: o nome do arquivo de imagem precisa bater exatamente com o nome do Actor — minúsculas, grafia correta, sem <code>.png</code> no código, e o arquivo precisa ficar numa pasta <code>images</code>. Uma divergência falha sem pista óbvia, então esta é a primeiríssima coisa a verificar quando "o sprite não aparece".'}
      ]},
      {t:'🔁 draw(), update() e o laço do jogo', cards:[
        {type:'text', h:'O que ensinar', b:'Você escreve duas funções especiais e o PyGame Zero <strong>as chama para você, automaticamente, ~60 vezes por segundo</strong>. <code>draw()</code> pinta o quadro atual; <code>update()</code> muda as coisas para o próximo quadro (posições, pontuações, lógica). O aluno nunca chama essas funções — essa é a parte nova e surpreendente.'},
        {type:'code', lbl:'the loop in action', code:`<span class="ck">def</span> <span class="cf">draw</span>():
    screen.<span class="cf">clear</span>()    <span class="cc"># limpa o quadro anterior</span>
    coddy.<span class="cf">draw</span>()      <span class="cc"># pinta o sprite</span>

<span class="ck">def</span> <span class="cf">update</span>():
    coddy.x <span class="ck">+=</span> <span class="cn">1</span>     <span class="cc"># uma pequena mudança a cada quadro = movimento</span>`},
        {type:'hi', h:'O modelo do flipbook', b:'Um jogo é um flipbook. <code>update()</code> decide o que muda na próxima página; <code>draw()</code> pinta essa página; o PyGame Zero vira as páginas 60×/segundo. É por isso que o movimento precisa de uma mudança <em>pequena</em> a cada quadro (<code>x += 1</code>) — não um salto grande. Também explica por que você precisa de <code>screen.clear()</code>: sem limpar a página, cada quadro se borra sobre o anterior.'}
      ]},
      {t:'🧒 Os equívocos que você vai encontrar', cards:[
        {type:'twocol', left:{h:'O que os iniciantes erram', items:['Chamar draw()/update() eles mesmos','O nome da imagem não bate com o arquivo','Esquecer <code>screen.clear()</code> → borrões','Colocar a lógica do jogo fora de update()','Um salto grande em vez de passos pequenos','Confundir draw (mostrar) com update (mudar)']}, right:{h:'Suas jogadas preventivas', items:['"O framework as chama, não você"','Nomes: minúsculas, sem extensão, images/','Limpe a página a cada quadro','A lógica repetida vive em update()','"Mudança pequena a cada quadro = movimento suave"','"draw = pintar, update = pensar"']}},
        {type:'warn', txt:'"O framework chama suas funções" é uma ideia totalmente nova (inversão de controle). Não a apresse. Contraste-a explicitamente com tudo o que veio antes: "até agora, seu código executava suas linhas. Agora você escreve funções e o motor do jogo as executa por você."'}
      ]},
      {t:'🎯 Como ensinar', cards:[
        {type:'good', txt:'Comemore em alto e bom som o primeiro sprite em movimento — é um marco de verdade e um ponto alto emocional do curso inteiro. Depois, deixe-os imediatamente ajustar a velocidade (<code>x += 5</code>) e a direção. A experimentação, não a explicação, é o que fixa o laço do jogo.'},
        {type:'tip', txt:'Se um aluno estiver sobrecarregado, reduza ao menor programa executável: uma janela, um Actor, um <code>update()</code> vazio. Adicione uma linha por vez. Jogos parecem enormes; construí-los uma linha que muda o quadro por vez os mantém aprendíveis.'}
      ]}
    ],
    quiz:[
      {q:'No PyGame Zero, quem chama draw() e update(), e por que isso importa pedagogicamente?', opts:['O framework as chama ~60×/seg automaticamente — uma nova ideia de "inversão de controle" para ensinar devagar','O aluno as chama manualmente a cada quadro','O SO as chama uma vez na inicialização','Elas só rodam se colocadas em um laço while'], c:0, fb:'O PyGame Zero executa seus draw()/update() por você a cada quadro — os alunos NÃO devem chamá-las, e isso é genuinamente novo.'},
      {q:'Qual é a maneira mais clara de explicar draw() vs update() para uma criança?', opts:['update() decide o que muda no próximo quadro; draw() pinta o quadro ("pensar vs pintar")','São idênticos','draw() roda uma vez, update() nunca roda','update() só cuida do som'], c:0, fb:'"update = pensar/mudar, draw = pintar" mapeia diretamente no laço do jogo.'},
      {q:'Um sprite não aparece e não há erro óbvio. O que você verifica primeiro?', opts:['Se o nome do arquivo de imagem bate exatamente com o nome do Actor (minúsculas, sem extensão, em images/)','A quantidade de RAM disponível','Se o Python é 32 ou 64 bits','O brilho do monitor'], c:0, fb:'Actor("coddy") precisa de images/coddy.png com correspondência exata de nome — a falha silenciosa mais comum.'},
      {q:'Por que coddy.x += 1 dentro de update() cria movimento suave em vez de um teleporte?', opts:['update() roda a cada quadro, então uma pequena mudança se acumula ~60×/seg em movimento suave','Ela teleporta uma vez e para','Só funciona dentro de um laço while','Ela redimensiona a janela'], c:0, fb:'O movimento é uma pequena mudança aplicada a cada quadro pelo laço do jogo — o modelo do flipbook.'},
      {q:'O sprite de um aluno deixa um rastro borrado pela tela. O que está faltando e por quê?', opts:['screen.clear() no início de draw() — sem limpar, cada quadro pinta sobre o anterior','Um comando de importação','Um segundo Actor','Um computador mais rápido'], c:0, fb:'Cada quadro precisa limpar o anterior; caso contrário, as posições antigas permanecem pintadas, criando um borrão.'},
      {q:'Por que desenhar um quadrado com Turtle é uma lição forte logo antes dos jogos?', opts:['Reutiliza funções + laços juntos, provando que os módulos anteriores valeram a pena, e introduz suavemente "código faz imagens"','Ensina dicionários','Introduz manipulação de arquivos','Demonstra recursão'], c:0, fb:'draw_square é uma função envolvendo um laço — uma recompensa satisfatória e uma rampa suave para os gráficos.'}
    ]
  },
  {
    id:6, emoji:'🎮', color:'#10B981',
    title:'Desenvolvimento de Jogos com PyGame Zero',
    desc:'Entrada de teclado e mouse, animação de sprite, detecção de colisão e pontuação do jogo.',
    obj:'Ensine o núcleo interativo da criação de jogos: responder ao teclado e ao mouse, animar sprites e detectar colisões. Você deve ser capaz de explicar o global de forma limpa, distinguir collidepoint de colliderect e modelar a iteração rápida como um hábito de tutoria.',
    sections:[
      {t:'🗺️ Onde isso se encaixa no curso', cards:[
        {type:'text', h:'Jogos que respondem ao jogador', b:'O Módulo 5 colocou um sprite na tela e o moveu por conta própria. Agora o jogo <strong>reage ao jogador</strong>: movimento pelo teclado, cliques do mouse, animação e — o grande destaque — colisões que dirigem a pontuação, o dano e os itens. Os projetos aqui incluem Aventuras do Coddy, um jogo estilo Minecraft, um jogo de nave e "Clicker Heroes".'},
        {type:'tip', txt:'A detecção de colisão é o conceito que transforma "uma imagem em movimento" em "um jogo". Reserve tempo extra para ela — é conceitualmente mais rica do que parece e desbloqueia pontuação, combate e coleta tudo de uma vez.'}
      ]},
      {t:'⌨️ Entrada de teclado', cards:[
        {type:'text', h:'Dois estilos para ensinar', b:'<strong>Contínuo</strong>: dentro de <code>update()</code>, verifique <code>keyboard.right</code>, <code>keyboard.left</code>, etc. — verdadeiro enquanto a tecla estiver pressionada, perfeito para movimento suave. <strong>Disparo único</strong>: o framework chama <code>on_key_down(key)</code> uma vez por pressionamento, ideal para pular ou atirar. Trocar a imagem do sprite durante o movimento dá ao jogador um retorno direcional.'},
        {type:'code', lbl:'continuous movement', code:`<span class="ck">def</span> <span class="cf">update</span>():
    <span class="ck">if</span> keyboard.right:
        coddy.x <span class="ck">+=</span> <span class="cn">5</span>
        coddy.image = <span class="cs">"coddy_right"</span>
    <span class="ck">elif</span> keyboard.left:
        coddy.x <span class="ck">-=</span> <span class="cn">5</span>
        coddy.image = <span class="cs">"coddy_left"</span>`},
        {type:'tip', txt:'Use a verificação de tecla pressionada em <code>update()</code> para movimento e o evento <code>on_key_down</code> para ações. Trocá-los — por exemplo, tentar fazer movimento suave em <code>on_key_down</code> — produz um movimento travado, de um passo por pressionamento. Combine a ferramenta com a sensação que você quer.'}
      ]},
      {t:'🖱️ Entrada de mouse', cards:[
        {type:'text', h:'O que ensinar', b:'O framework chama <code>on_mouse_down(pos)</code> quando o jogador clica, entregando a você a localização do clique como <code>pos</code>. A pergunta usual é "eles clicaram neste objeto?" — respondida com <code>actor.collidepoint(pos)</code>. Isso alimenta jogos de clicker e mecânicas de "atire no inimigo".'},
        {type:'code', lbl:'click to score', code:`score = <span class="cn">0</span>

<span class="ck">def</span> <span class="cf">on_mouse_down</span>(pos):
    <span class="ck">global</span> score
    <span class="ck">if</span> enemy.<span class="cf">collidepoint</span>(pos):
        score <span class="ck">+=</span> <span class="cn">1</span>
        <span class="cf">animate</span>(enemy, tween=<span class="cs">"bounce_end"</span>, duration=<span class="cn">0.3</span>)`}
      ]},
      {t:'🌍 A palavra-chave global', cards:[
        {type:'text', h:'O que ensinar', b:'Uma função pode <em>ler</em> uma variável definida fora dela, mas para <strong>mudar</strong> uma ela precisa primeiro declarar <code>global score</code>. Sem isso, o Python cria uma nova variável local em vez disso, e a pontuação de verdade nunca é atualizada — uma falha confusa e sem erro.'},
        {type:'warn', txt:'Mantenha a explicação apropriada à idade: "uma função pode olhar variáveis de fora, mas para <strong>mudar</strong> uma ela tem que dizer <code>global</code> primeiro." Resista a uma palestra completa sobre escopo — essa profundidade não é necessária aqui e sobrecarrega iniciantes. Apenas a regra e um exemplo que funcione.'}
      ]},
      {t:'💥 Detecção de colisão', cards:[
        {type:'text', h:'O que ensinar', b:'Todo sprite tem um retângulo invisível ao seu redor. <code>a.colliderect(b)</code> pergunta "esses dois retângulos se sobrepõem?" (sprite vs sprite — acertos, itens). <code>a.collidepoint(pos)</code> pergunta "este ponto está dentro deste retângulo?" (um clique ou ponto único). Essa única distinção cobre quase todas as interações de jogos 2D.'},
        {type:'code', lbl:'sprite-vs-sprite collision', code:`<span class="ck">def</span> <span class="cf">update</span>():
    <span class="ck">if</span> player.<span class="cf">colliderect</span>(coin):
        <span class="ck">global</span> score
        score <span class="ck">+=</span> <span class="cn">1</span>
        coin.x = random.<span class="cf">randint</span>(<span class="cn">0</span>, WIDTH)  <span class="cc"># reaparece</span>`},
        {type:'hi', h:'O modelo mental', b:'"Todo objeto vive dentro de uma caixa invisível. Uma colisão é só <em>duas caixas se sobrepondo</em>." Uma vez que os alunos têm essa imagem, acertos, coleta de moedas e cliques do mouse se tornam a mesma pergunta simples, só que feita com <code>colliderect</code> (caixa vs caixa) ou <code>collidepoint</code> (ponto na caixa).'}
      ]},
      {t:'🧒 Os equívocos que você vai encontrar', cards:[
        {type:'twocol', left:{h:'O que os iniciantes erram', items:['Mudar score numa função sem <code>global</code>','<code>collidepoint</code> vs <code>colliderect</code> confundidos','Movimento rápido ou lento demais','Esquecer de trocar a imagem do sprite','Movimento suave tentado em <code>on_key_down</code>']}, right:{h:'Suas jogadas preventivas', items:['"Para mudar uma variável de fora, diga global"','"point = um clique, rect = objeto vs objeto"','Ajustem juntos o passo do += / -=','Trocar a imagem = direção visível para onde olha','Tecla pressionada em update(); eventos para ações']}}
      ]},
      {t:'🎯 Como ensinar', cards:[
        {type:'good', txt:'Modele a iteração rápida sem parar: mude um número, execute, observe, ajuste. O desenvolvimento de jogos recompensa o "vamos só tentar" muito mais do que planejar tudo de antemão, e mostrar essa atitude dá aos alunos permissão para experimentar em vez de temer os erros.'},
        {type:'tip', txt:'Quando uma colisão "não funciona", depure visualmente: temporariamente imprima a pontuação na tela ou imprima no console dentro do <code>if</code>. Ver se o ramo roda ou não separa "a colisão não é detectada" de "a pontuação não é atualizada" — duas correções muito diferentes.'}
      ]}
    ],
    quiz:[
      {q:'Um aluno aumenta score dentro de on_mouse_down mas ela nunca muda, sem erro. Qual é a correção e a regra?', opts:['Declarar global score dentro da função — sem isso o Python cria uma nova variável local','Envolver a atualização de score num laço while','Renomear score para algo único','Armazenar score dentro do Actor'], c:0, fb:'Para modificar uma variável de nível de módulo dentro de uma função, o Python exige a declaração global; senão ele cria uma local silenciosamente.'},
      {q:'Qual método detecta um clique de mouse pousando em um sprite específico?', opts:['collidepoint(pos) — verifica se um único ponto está dentro da caixa do sprite','colliderect(other_sprite)','keyboard.click','on_draw()'], c:0, fb:'collidepoint verifica um ponto (o clique); colliderect verifica se dois retângulos se sobrepõem.'},
      {q:'Qual é o modelo mental mais simples e preciso para a detecção de colisão?', opts:['Todo objeto tem uma caixa invisível; uma colisão é duas caixas se sobrepondo','O Python adivinha se as coisas parecem se tocar','Os sprites se repelem magneticamente','Ele compara as cores dos pixels de cada sprite'], c:0, fb:'A colisão baseada em retângulos é literalmente "esses dois retângulos se sobrepõem?" — o modelo da caixa invisível é exato.'},
      {q:'Por que trocar coddy.image para uma variante esquerda/direita quando o personagem se move?', opts:['Retorno visual — o sprite fica virado para a direção em que viaja','É obrigatório ou o jogo quebra','Faz o código rodar mais rápido','Reduz o uso de memória'], c:0, fb:'Mudar a imagem do sprite dá ao jogador um retorno direcional claro; é uma decisão de acabamento/sensação, não um requisito.'},
      {q:'Quando você deve usar keyboard.right dentro de update() versus on_key_down(key)?', opts:['Verificações de tecla pressionada em update() para movimento suave; on_key_down para ações de disparo único como pular/atirar','Sempre use on_key_down; update() não consegue ler o teclado','São intercambiáveis','keyboard.right só funciona em draw()'], c:0, fb:'Movimento contínuo = verificação de tecla pressionada em update(); ações discretas = o evento on_key_down. Trocá-los dá sensação errada.'},
      {q:'Uma colisão "não funciona". Qual é a jogada de depuração mais eficaz para ensinar?', opts:['Imprimir dentro do if (ou mostrar a pontuação na tela) para ver se o ramo roda','Reescrever o jogo inteiro','Adicionar mais sprites','Aumentar o tamanho da janela'], c:0, fb:'Um print rápido separa "colisão não detectada" de "pontuação não atualizada" — dois problemas diferentes com correções diferentes.'}
    ]
  },
  {
    id:7, emoji:'🏆', color:'#EF4444',
    title:'Projeto Final: Construindo e Publicando um Jogo',
    desc:'Mapas de grade, inimigos com atributos, collidelist, bônus, níveis, estados de vitória/derrota, menus e publicação.',
    obj:'Prepare-se para orientar os alunos em seu projeto final. A mudança de habilidade aqui é passar de ensinar recursos para gerenciar uma construção maior — definir um escopo realista, organizar o estado do jogo, lidar com muitos objetos e orientar os alunos até um jogo terminado, publicado e apresentado.',
    sections:[
      {t:'🗺️ Onde isso se encaixa no curso', cards:[
        {type:'text', h:'Tudo se junta', b:'Os módulos finais constroem um RPG completo ("WeCode and Dragons") e um projeto de formatura. Não há quase <strong>nenhuma sintaxe nova</strong> aqui — em vez disso, todo conceito dos módulos 1 a 6 reaparece de uma vez dentro de um único programa maior. Seu papel muda de acordo: menos "aqui está um recurso novo", mais "vamos manter este projeto organizado e finalizável".'},
        {type:'tip', txt:'Reformule seu próprio trabalho para este módulo. Agora você é tanto um mentor de projeto quanto um professor de programação: ajudando os alunos a definir um escopo sensato, se manterem organizados, depurar uma base de código maior e — crucialmente — de fato terminar e publicar.'}
      ]},
      {t:'🗺️ Mapas de grade (listas de listas)', cards:[
        {type:'text', h:'O que ensinar', b:'Os níveis do jogo são armazenados como uma <strong>grade 2D</strong> — uma lista de listas, onde cada número codifica um tipo de tile (0 = chão, 1 = parede, 2 = ossos, etc.). Laços aninhados percorrem as linhas e colunas para desenhar cada tile em <code>column * cell_width</code>, <code>row * cell_height</code>. Esta é a recompensa dos laços aninhados do módulo 2.'},
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
      {t:'👾 Muitos inimigos com atributos', cards:[
        {type:'text', h:'O que ensinar', b:'Os inimigos são gerados em um laço e armazenados em uma lista, cada um com seus próprios atributos (vida, ataque) definidos como propriedades no Actor. Para verificar o jogador contra <em>todos</em> eles de uma vez, <code>collidelist(enemies)</code> retorna o índice do primeiro que foi atingido, ou <code>-1</code> se nenhum — bem mais limpo do que um laço manual de verificações <code>colliderect</code>.'},
        {type:'code', lbl:'generate + collide with a list', code:`enemies = []
<span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">5</span>):
    e = <span class="cf">Actor</span>(<span class="cs">"enemy"</span>)
    e.health = random.<span class="cf">randint</span>(<span class="cn">10</span>, <span class="cn">20</span>)
    e.attack = random.<span class="cf">randint</span>(<span class="cn">5</span>, <span class="cn">10</span>)
    enemies.<span class="cf">append</span>(e)

idx = char.<span class="cf">collidelist</span>(enemies)
<span class="ck">if</span> idx <span class="ck">!=</span> <span class="ck">-</span><span class="cn">1</span>:               <span class="cc"># -1 significa "nenhum acerto"</span>
    char.health <span class="ck">-=</span> enemies[idx].attack`},
        {type:'warn', txt:'Um bug sutil para ficar de olho: remover itens de uma lista <em>enquanto se percorre ela</em> pula elementos. Se os alunos apagarem inimigos derrotados no meio do laço, alguns são pulados. Ensine o padrão seguro — colete o que remover, ou percorra uma cópia.'}
      ]},
      {t:'🚦 Estado do jogo e menus', cards:[
        {type:'text', h:'O que ensinar', b:'Uma única variável <code>mode</code> ("menu" / "game" / "end") funciona como uma placa de sinalização, dizendo tanto para <code>draw()</code> quanto para <code>update()</code> o que fazer agora. Rotear tudo por meio de uma única variável de estado é o que impede um jogo maior de desmoronar em código emaranhado — é a ideia organizacional mais importante do projeto final.'},
        {type:'code', lbl:'one state variable drives everything', code:`mode = <span class="cs">"menu"</span>

<span class="ck">def</span> <span class="cf">draw</span>():
    screen.<span class="cf">clear</span>()
    <span class="ck">if</span> mode == <span class="cs">"menu"</span>:
        screen.<span class="cf">draw</span>.<span class="cf">text</span>(<span class="cs">"Press SPACE to start"</span>, center=(<span class="cn">300</span>,<span class="cn">200</span>))
    <span class="ck">elif</span> mode == <span class="cs">"game"</span>:
        char.<span class="cf">draw</span>()
    <span class="ck">elif</span> mode == <span class="cs">"end"</span>:
        screen.<span class="cf">draw</span>.<span class="cf">text</span>(<span class="cs">"GAME OVER"</span>, center=(<span class="cn">300</span>,<span class="cn">200</span>))`},
        {type:'hi', h:'Vitória/derrota é só uma mudança de estado', b:'Vitória e derrota não são máquinas especiais — são simplesmente definir <code>mode = "end"</code> quando uma condição é atingida (todos os inimigos eliminados, ou <code>char.health &lt;= 0</code>). Enquadrar assim impede que os alunos superdimensionem o código e liga direto de volta às condições do módulo 2.'}
      ]},
      {t:'🧒 O verdadeiro desafio: escopo e finalização', cards:[
        {type:'twocol', left:{h:'Onde os projetos finais dão errado', items:['Escopo ambicioso demais — grande demais para terminar','Perder o controle do estado do jogo','Editar uma lista enquanto a percorre','Ficar sem tempo antes de publicar','Polir para sempre, nunca publicar']}, right:{h:'Suas jogadas de orientação', items:['"Termine pequeno, depois adicione mais"','Uma variável <code>mode</code> dirige o jogo','Percorra uma cópia ao remover','Reserve tempo para publicar + apresentar','"Pronto e compartilhado supera perfeito"']}},
        {type:'warn', txt:'O maior risco no projeto final é a <strong>ambição, não a sintaxe</strong>. Um jogo completo, simples e publicado supera uma epopeia inacabada toda vez. Oriente os alunos a fixar um escopo pequeno primeiro e só adicionar extras quando o laço principal funcionar de ponta a ponta.'}
      ]},
      {t:'🎯 Publicando e apresentando', cards:[
        {type:'good', txt:'A aula de formatura é sobre orgulho e apresentação, não código novo. Oriente os alunos a publicar o jogo no Kodland HUB e a demonstrá-lo. Terminar e compartilhar é uma habilidade em si — elogie a conclusão tão alto quanto o código inteligente, porque publicar algo real é o que os alunos lembram.'},
        {type:'tip', txt:'Ajude cada aluno a preparar uma demonstração de 1 minuto: o que é o jogo, como jogar e uma coisa da qual eles se orgulham. Apresentar o próprio trabalho constrói confiança e dá um encerramento limpo e motivador ao curso inteiro.'}
      ]}
    ],
    quiz:[
      {q:'Qual é o maior risco isolado para um aluno no projeto final, e como você o orienta?', opts:['Escopo ambicioso demais — fixe primeiro um jogo pequeno e finalizável, depois adicione extras','Não saber sintaxe suficiente — treine mais teoria','Digitar devagar demais — cobre velocidade','Usar comentários demais'], c:0, fb:'A gestão de escopo é o foco central da tutoria; um jogo pequeno terminado supera um jogo grande inacabado.'},
      {q:'Como o estado de um jogo (menu / jogando / game over) é geralmente gerenciado, e por que isso importa?', opts:['Uma única variável mode que draw() e update() verificam — ela mantém um jogo grande organizado','Três arquivos de programa separados','Reiniciando o Python entre as telas','Com números aleatórios'], c:0, fb:'Uma variável de estado roteia o que o jogo mostra e faz, impedindo que um projeto grande vire código emaranhado.'},
      {q:'char.collidelist(enemies) retorna -1. O que isso significa?', opts:['O personagem não está colidindo com nenhum inimigo da lista','Ocorreu um erro','Ele colidiu com o inimigo no índice 1','A lista enemies está vazia'], c:0, fb:'collidelist retorna o índice do primeiro sprite atingido, ou -1 quando não há colisão alguma.'},
      {q:'Como um mapa de grade 2D é representado nesses projetos, e qual conceito anterior o desenho dele reforça?', opts:['Uma lista de listas (linhas de números); desenhá-lo usa laços aninhados','Uma única string longa; usa fatiamento de string','Um dicionário de cores; usa buscas por chave','Uma função; usa recursão'], c:0, fb:'Uma lista de listas modela linhas e colunas, e laços aninhados a percorrem — a recompensa dos laços aninhados do módulo 2.'},
      {q:'Um aluno apaga inimigos derrotados da lista enquanto a percorre e alguns inimigos são pulados. Qual é a causa?', opts:['Remover itens no meio do laço desloca os índices restantes — percorra uma cópia ou colete-depois-remova','collidelist está quebrado','Os inimigos precisam de mais vida','append foi usado em vez de pop'], c:0, fb:'Mutar uma lista durante a iteração pula elementos; os padrões seguros são percorrer uma cópia ou adiar a remoção.'},
      {q:'Durante a aula de formatura, o que um tutor deve enfatizar mais?', opts:['Ajudar os alunos a terminar, publicar no HUB e apresentar o jogo','Enfiar o máximo de recursos possível','Reescrever o jogo do zero em busca de qualidade','Pular a apresentação para economizar tempo'], c:0, fb:'Conclusão, publicação e apresentação são os resultados centrais da formatura — elogie publicar, não apenas o código inteligente.'}
    ]
  },
  {
    id:8, emoji:'🧑‍🏫', color:'#6366F1',
    title:'Como Conduzir uma Ótima Aula',
    desc:'A estrutura de aula em espelho/circular, por que ela funciona, e como manter todo aluno ativamente envolvido.',
    obj:'Domine a forma de uma aula Kodland forte: a estrutura em "espelho" de oito fases, do aquecimento ao encerramento, as razões cognitivas pelas quais ela funciona, e técnicas concretas para manter as crianças engajadas em cada fase. Isto é sobre COMO você ensina, independentemente do tópico.',
    sections:[
      {t:'🗺️ Por que a estrutura importa tanto quanto o conteúdo', cards:[
        {type:'text', h:'Uma ótima aula tem uma forma', b:'Você pode saber Python perfeitamente e ainda assim conduzir uma aula fraca se ela não tiver estrutura. As crianças aprendem melhor dentro de um <strong>ritmo previsível</strong> — elas se acomodam mais rápido, retêm mais e permanecem motivadas quando toda aula segue o mesmo arco familiar. As aulas Kodland usam uma estrutura deliberada de oito fases com um design em "espelho": a forma como uma aula <em>termina</em> espelha a forma como ela <em>começa</em>.'},
        {type:'text', h:'O que este módulo treina', b:'Diferentemente dos módulos de programação, este é sobre a <strong>sua condução</strong>, não sobre o material. Você aprenderá as oito fases, por que cada uma existe e — o mais importante — como manter os alunos participando ativamente em vez de assistindo passivamente. Esses hábitos se aplicam a toda aula que você já ensinar, independentemente do tópico.'},
        {type:'tip', txt:'A consistência é o ponto central. Uma vez que os alunos aprendem o seu ritmo, eles param de gastar energia tentando descobrir "o que acontece agora?" e a gastam aprendendo. Conduza a mesma estrutura toda vez até que ela seja automática — para você e para eles.'}
      ]},
      {t:'🌅 O começo: quatro fases', cards:[
        {type:'text', h:'1 · Aquecimento — ativar energia e foco', b:'Abra com algo leve que coloque o cérebro do aluno no "modo aula": uma pergunta rápida, um pequeno desafio, uma olhada em algo divertido. O objetivo é energia e atenção, não avaliação. Isso sinaliza "estamos começando agora" e puxa uma criança distraída para dentro da sessão.'},
        {type:'text', h:'2 · Revisão da Aula Anterior — recordar e consolidar', b:'Revisite brevemente o que foi aprendido da última vez. A recuperação — fazer o aluno <em>recordar</em> em vez de ouvir de novo — é uma das ferramentas de memória mais fortes que existem. Um "o que você lembra sobre laços?" de dois minutos faz mais do que reexplicar jamais faria.'},
        {type:'text', h:'3 · Verificação de Tarefa — revisar a lição de casa juntos', b:'Percorra a lição de casa <em>com</em> o aluno. É aqui que você pega mal-entendidos, elogia o esforço e mostra que a lição de casa de fato importa. Pular isso ensina às crianças que a lição de casa é opcional.'},
        {type:'text', h:'4 · Objetivo da Aula — definir metas claras', b:'Diga com todas as letras do que se trata o dia de hoje: "hoje vamos fazer nosso sprite se mover quando você apertar as setas". Um objetivo claro dá direção à aula e dá ao aluno algo concreto para mirar.'}
      ]},
      {t:'🏁 O fim: o espelho', cards:[
        {type:'hi', h:'O fim espelha o começo, invertido', b:'As quatro fases finais ecoam as fases de abertura em ordem inversa — a aula termina do jeito que começou, dando aos alunos uma sensação satisfatória de <strong>fechamento e ritmo</strong>. Essa forma "circular" é o que faz uma aula parecer completa, em vez de apenas parar quando o tempo acaba.'},
        {type:'text', h:'1 · Resumo da Aula — feito pelo tutor + aluno', b:'Recapitule o que foi visto — mas não só conte para eles. Faça o <em>aluno</em> também resumir com as próprias palavras. O resumo dele revela o que de fato foi assimilado e serve como um segundo momento de recuperação.'},
        {type:'text', h:'2 · Atribuição de Tarefa — instruções claras', b:'Atribua a lição de casa com instruções cristalinas sobre o que fazer e como. Lição de casa vaga é lição de casa que não será feita. Isso faz par com a Verificação de Tarefa que abriu a aula.'},
        {type:'text', h:'3 · Prévia da Próxima Aula — despertar curiosidade', b:'Provoque o que vem a seguir: "da próxima vez, vamos fazer os inimigos te perseguirem!" Um gancho constrói antecipação e impulso adiante entre as sessões — faz par com o Objetivo da Aula do começo.'},
        {type:'text', h:'4 · Encerramento — feche com energia', b:'Termine no alto: celebre o que o aluno construiu hoje, reconheça o esforço dele e o mande embora se sentindo bem. Os últimos 30 segundos moldam como ele lembra a aula inteira.'}
      ]},
      {t:'💡 Por que essa estrutura funciona', cards:[
        {type:'twocol', left:{h:'🧠 Facilidade Cognitiva', items:['Um formato previsível reduz a carga mental','Os alunos sabem o que esperar','O foco vai para o aprendizado, não para decifrar a forma da aula']}, right:{h:'🔁 Reforço de Retenção', items:['A revisão no INÍCIO consolida a última vez','O resumo no FIM consolida o hoje','Dois pontos de checagem de memória → recall muito melhor']}},
        {type:'twocol', left:{h:'🎯 Propósito Claro', items:['Enunciar a meta de antemão constrói motivação','Prever a próxima aula cria impulso','O aluno sempre sabe por que está ali']}, right:{h:'✅ Ciclo de Responsabilidade', items:['Verificação de tarefa no início...','...faz par com a atribuição de tarefa no fim','Os alunos sentem a continuidade entre as aulas']}},
        {type:'good', txt:'Repare no emparelhamento: aquecimento ↔ encerramento, revisão ↔ resumo, verificação de tarefa ↔ atribuição de tarefa, objetivo da aula ↔ prévia da próxima aula. Cada fase de abertura tem uma parceira de fechamento. Essa simetria é o que torna a estrutura "circular" e memorável.'}
      ]},
      {t:'🙋 Mantendo cada criança envolvida', cards:[
        {type:'text', h:'A regra de ouro', b:'Uma aula em que o tutor fala e o aluno escuta é uma aula fraca. Seu trabalho é fazer o aluno <strong>fazer, dizer e pensar</strong> o máximo possível. Use estas quatro técnicas constantemente, em cada fase.'},
        {type:'twocol', left:{h:'❓ Perguntas Abertas', items:['Pergunte "O que você acha que vai acontecer se…?"','Use "Como você resolveria…?" para provocar raciocínio','Evite perguntas de sim/não — convide o pensamento real']}, right:{h:'🖥️ Compartilhamento de Tela', items:['Faça o aluno compartilhar a tela dele','Deixe-o guiá-lo pelo próprio trabalho','Ótimo na verificação de tarefa e no aquecimento — constrói senso de propriedade']}},
        {type:'twocol', left:{h:'📖 Leitura de Slides', items:['Convide os alunos a ler o texto dos slides em voz alta','Peça que expliquem com as próprias palavras','Impulsiona a compreensão e os mantém ativos']}, right:{h:'🌟 Elogio e Incentivo', items:['Seja específico: "Ótimo trabalho ao explicar esse passo!"','Elogie o esforço, não só as respostas certas','Use energia para manter o impulso o tempo todo']}},
        {type:'warn', txt:'Cuidado com a armadilha da aula passiva: ela parece tranquila porque não há atrito, mas o aluno não está aprendendo muito. Se você vem falando por mais de um minuto ou dois sem o aluno fazer ou dizer algo, devolva a vez para ele.'}
      ]},
      {t:'🎯 Colocando em prática', cards:[
        {type:'hi', h:'A estrutura te liberta, não te restringe', b:'Tutores novos às vezes temem que uma estrutura fixa deixe as aulas robóticas. O oposto é verdadeiro: uma vez que as fases são automáticas, você para de se preocupar com "e agora?" e tem toda a atenção livre para o aluno — as perguntas dele, os erros dele, a energia dele. A estrutura é o andaime que permite que você esteja presente.'},
        {type:'tip', txt:'Mantenha uma lista de verificação mental (ou literal) das oito fases nas suas primeiras aulas. Depois de algumas semanas o ritmo se torna automático. No próximo módulo, você vai assistir a uma aula real e ver cada uma dessas fases e técnicas em ação.'}
      ]}
    ],
    quiz:[
      {q:'Por que a estrutura de aula Kodland é descrita como um formato "espelho" ou "circular"?', opts:['As fases de fechamento ecoam as fases de abertura em ordem inversa, então a aula termina do jeito que começou','O tutor e o aluno trocam de papéis no meio','Os slides são mostrados duas vezes, para frente e depois para trás','Toda aula repete a aula anterior exatamente'], c:0, fb:'O fim espelha o começo invertido (aquecimento↔encerramento, revisão↔resumo, etc.), dando fechamento e ritmo.'},
      {q:'Um tutor pula a Revisão da Aula Anterior para economizar tempo. Qual é o principal custo, pedagogicamente?', opts:['Ele perde um momento de recuperação — fazer os alunos recordarem o aprendizado anterior é uma das formas mais fortes de consolidá-lo','Nenhum, desde que a meta seja enunciada','A lição de casa não pode ser atribuída depois','A aula vai passar do tempo'], c:0, fb:'A revisão força a recuperação, uma ferramenta de memória poderosa. É um dos dois pontos de consolidação da estrutura.'},
      {q:'Qual par de fases forma o "ciclo de responsabilidade" ao longo de uma aula?', opts:['Verificação de Tarefa no início e Atribuição de Tarefa no fim','Aquecimento e Objetivo da Aula','Leitura de Slides e Elogio','Resumo da Aula e Encerramento'], c:0, fb:'Verificar a lição de casa no início e atribuí-la no fim fecha o ciclo e constrói continuidade entre as aulas.'},
      {q:'Um aluno responde corretamente a uma pergunta de sim/não mas parece desengajado. Qual é a melhor jogada de perguntas?', opts:['Fazer uma pergunta aberta como "Como você resolveria isto?" ou "O que você acha que acontece se…?"','Fazer mais perguntas de sim/não mais rápido','Responder a pergunta você mesmo para manter o ritmo','Ir para o próximo slide imediatamente'], c:0, fb:'Perguntas abertas convidam ao raciocínio e ao pensamento ativo; perguntas de sim/não deixam os alunos relaxarem.'},
      {q:'Qual é a forma mais forte de elogio segundo os princípios de engajamento?', opts:['Elogio específico que reconhece o esforço e o processo, ex. "Ótimo trabalho ao explicar esse passo!"','Um "bom trabalho" genérico após cada resposta','Elogiar apenas respostas perfeitamente corretas','Guardar todo elogio para o encerramento'], c:0, fb:'O elogio específico ligado ao esforço e ao processo é mais motivador e crível do que o genérico ou o baseado só em resultados.'},
      {q:'Um tutor conduz uma aula tranquila mas falou a maior parte do tempo enquanto o aluno assistia. Por que isso é um sinal de alerta?', opts:['Uma aula passiva parece sem atrito mas o aluno aprende pouco — ele deveria estar fazendo, dizendo e pensando o tempo todo','Não é um problema se o material foi coberto','Significa que a estrutura foi seguida corretamente','Tranquilidade sempre indica uma ótima aula'], c:0, fb:'O engajamento é o objetivo. Se o tutor fala por longos trechos sem ação do aluno, o aprendizado cai — devolva a vez ao aluno.'}
    ]
  },
  {
    id:9, emoji:'🎥', color:'#0EA5E9', lesson:true,
    title:'Exemplo de uma Ótima Aula',
    desc:'Assista a uma aula modelo de Python da Kodland de ponta a ponta, com transcrição completa e notas de ensino.',
    obj:'Veja a estrutura de aula de oito fases e as técnicas de engajamento do módulo anterior colocadas em prática por um tutor experiente: ritmo, formulação de perguntas, demonstração, feedback, incentivo e fluxo de sala de aula — em uma única aula real de Python da Kodland gravada.',
    completeH:'Assistiu à aula modelo?',
    completeBody:'Depois de assistir à gravação e ler as notas de avaliação, marque este módulo como concluído para finalizar seu treinamento e desbloquear o Teste de Habilidade Digital.',
    completeBtn:'✓ Marcar como Assistido',
    sections:[
      {t:'🎬 A gravação', cards:[
        {type:'video', src:'https://www.youtube-nocookie.com/embed/eNZ6h1oycJI?rel=0', cap:'Uma aula real de Python da Kodland, gravada por completo. Ative as legendas (CC) para acompanhar a transcrição sincronizada.'},
        {type:'warn', txt:'A gravação é uma aula real e dura cerca de 1 hora e 48 minutos. Assista por completo quando puder dedicar sua atenção — é a melhor referência de tudo o que este treinamento cobriu.'}
      ]},
      {t:'🧭 Sobre esta aula', cards:[
        {type:'text', h:'O que você está assistindo', b:'Esta é uma aula genuína e não roteirizada de Python da Kodland, conduzida por um tutor experiente com um pequeno grupo de alunos. A turma trabalha em um projeto que combina habilidades anteriores — <strong>funções e dicionários/listas</strong> (construindo sobre um projeto de lista de filmes e um gerenciador de senhas) — o tipo de projeto de consolidação que você viu nos módulos de Dados e de Funções.'},
        {type:'hi', h:'Observe a estrutura que você acabou de aprender', b:'Enquanto assiste, identifique as oito fases do <strong>Módulo 8</strong> em ação: a saudação e o aquecimento, a ponte para a aula anterior, a verificação de tarefa e a meta clara no começo — e então, no fim, a recapitulação, a lição de casa para a próxima vez e a prévia da próxima aula. A abertura e o encerramento espelham um ao outro, exatamente como a estrutura "circular" descreve.'}
      ]},
      {t:'✅ Por que esta é uma ótima aula — avaliação de QA', cards:[
        {type:'text', h:'Avaliada com base nos nossos critérios de QA', b:'Toda aula Kodland pode ser avaliada com base em um conjunto de critérios de qualidade de QA. Esta aula <strong>passou em todos eles</strong>. Abaixo está a evidência, agrupada pelas fases da aula do Módulo 8 — use-a como uma lista de verificação do que "ótimo" parece na prática.'},
        {type:'qa', h:'🌅 Abrindo a aula', items:[
          {k:'Aquecimento e Saudação', v:'O tutor cumprimentou os alunos e perguntou ao Marvel como ele estava.'},
          {k:'Objetivo da Aula', v:'Enunciou a meta — trabalhar em um projeto que combina o conhecimento anterior deles.'},
          {k:'Ponte com a Aula Anterior', v:'Perguntou se os alunos já tinham construído um gerenciador de senhas antes; o Marvel lembrou de um projeto anterior de lista de filmes.'},
          {k:'Revisão da Tarefa de Casa', v:'Revisou a lição de casa anterior e a discutiu com os alunos.'}
        ]},
        {type:'qa', h:'🧑‍🏫 Instrução e prática', items:[
          {k:'Divisão Clara das Instruções', v:'Deu as instruções em pequenos passos — ex. explicando a estrutura do projeto e as tarefas individuais.'},
          {k:'Demonstração Antes do Trabalho Independente', v:'Demonstrou como imprimir elementos de um dicionário antes de deixar os alunos trabalharem por conta própria.'},
          {k:'Etapa de Prática Presente', v:'Os alunos se envolveram em uma etapa de prática clara, trabalhando em seus projetos de programação.'}
        ]},
        {type:'qa', h:'🙋 Engajamento e participação', items:[
          {k:'Participação Ampla', v:'Envolveu vários alunos — Marvel, Gabriel e Shriyansh — em vez de depender de um só.'},
          {k:'Chamar os Alunos Diretamente', v:'Chamou os alunos pelo nome durante as interações de aprendizado.'},
          {k:'Participação de Múltiplos Alunos no Aprendizado', v:'Marvel, Gabriel e Shriyansh todos participaram das interações de aprendizado.'},
          {k:'Interação Repetida com os Alunos', v:'Criou interações de aprendizado repetidas com diferentes alunos ao longo da aula.'},
          {k:'Feedback Instrucionalmente Útil', v:'Deu feedback sobre o código dos alunos, ajudando-os a corrigir seus erros.'},
          {k:'Raciocínio dos Alunos Estimulado', v:'Pediu aos alunos que explicassem seu entendimento de funções e listas, e obteve respostas relevantes.'}
        ]},
        {type:'qa', h:'😊 Clima de aprendizado positivo', items:[
          {k:'Baixa Confusão Repetida', v:'Menos de três manifestações explícitas de confusão dos alunos em toda a aula.'},
          {k:'Sem Recusa ou Tédio Explícitos', v:'Nenhuma recusa, tédio ou insatisfação explícita por parte dos alunos.'}
        ]},
        {type:'qa', h:'🏁 Encerrando a aula (o espelho)', items:[
          {k:'Recapitulação ou Revisão Final', v:'Recapitulou as habilidades aprendidas durante o módulo e discutiu os próximos passos.'},
          {k:'Lição de Casa para a Próxima Aula', v:'Atribuiu a lição de casa — terminar o projeto começado na aula.'},
          {k:'Continuidade com a Próxima Aula', v:'Disse aos alunos que a próxima aula cobriria algoritmos lineares.'}
        ]},
        {type:'good', txt:'Repare na simetria: a aula abre com uma saudação, uma ponte para a última vez, uma verificação de tarefa e uma meta clara — e fecha com uma recapitulação, lição de casa para a próxima vez e uma prévia do que vem a seguir. Esse espelho é exatamente a estrutura do Módulo 8, e é grande parte do motivo pelo qual esta aula pontua tão bem.'}
      ]}
    ]
  }
]
};
