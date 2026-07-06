/* ============================================================================
   Kodland Python Tutor Training — CONTENT (English, source of truth)
   To create another language: copy this file to content-XX.js and translate
   every STRING VALUE below. Do NOT change keys, structure, HTML tags, CSS
   classes, or Python code — inside code blocks translate ONLY the # comments.
   Set code/htmlLang/title, set dst.formUrl:'' and translate dst.placeholderNote.
   ============================================================================ */
window.CONTENT = {
code: 'tr',
htmlLang: 'tr',
title: 'Python Eğitmen Eğitimi — Kodland',
ui: {
  logoSub: 'Python Eğitimi',
  changeRegion: '🌐 Bölge',
  heroEyebrow: '🐍 Eğitmen Eğitim Programı',
  heroTitle: 'Çocuklara <span class="h-pill">Python</span><br>öğretmeye hazırlanın',
  heroSub: "Eğitmen hazırlığınızı tamamlamak için her modülü tamamlayın ve her sınavı geçin. Bir sonraki modülün kilidini açmak için modül sınavından %70 ve üzeri puan alın — atlamak yok.",
  progLabel: 'modül tamamlandı',
  modulesLabel: 'Modülleriniz',
  allDone: '🏆 Hepsi tamam!',
  completeWord: 'tamamlandı',
  backModules: '← Modüller',
  exitQuiz: '← Sınavdan Çık',
  backDashboard: '← Panel',
  moduleWord: 'Modül',
  ofWord: '/',
  objectiveWord: 'Amaç',
  badgePassed: '✓ Geçildi',
  badgeLocked: '🔒 Kilitli',
  badgeStart: 'Başla →',
  badgeWatched: '✓ İzlendi',
  badgeWatch: '▶ İzle',
  tagCompleted: 'Tamamlandı',
  tagExampleLesson: 'Örnek ders',
  completeModuleWord: 'Modülü tamamla',
  scoreWord: 'Puan',
  questionsWord: 'soru',
  takeQuiz: '📝 Sınava Gir →',
  retakeQuiz: '🔄 Sınavı Tekrarla',
  markComplete: 'Tamamlandı Olarak İşaretle',
  doneCompleted: '✓ Tamamlandı',
  moduleComplete: 'Modül Tamamlandı',
  questionWord: 'Soru',
  correctPrefix: '✅ Doğru! ',
  notQuitePrefix: '❌ Tam değil. ',
  seeResults: 'Sonuçları Gör →',
  nextBtn: 'İleri →',
  modulePassed: 'Modül Geçildi!',
  keepReviewing: 'Gözden Geçirmeye Devam Et',
  scoreLine: '{t} sorudan {s} tanesini doğru yaptınız.',
  passMsg: ' Bir sonraki modülün kilidi açıldı!',
  failMsg: ' Geçmek için %70 gerekiyor. Gözden geçirin ve tekrar deneyin!',
  reviewModuleWord: '📖 Modülü Gözden Geçir',
  startModuleWord: 'Modüle Başla',
  watchModuleWord: '▶ Modülü İzle',
  viewCertificate: '🏆 Sertifikayı Görüntüle',
  trainingComplete: 'Eğitim Tamamlandı!',
  completeSub: "Her modülü baştan sona tamamladınız — tebrikler! Dijital Beceri Testi için hazırsınız.",
  certLabel: 'Tamamlama Sertifikası',
  certTitle: 'Python Eğitmen Eğitimi',
  certLine: 'Kodland · Toplam {n} modül · Ortalama sınav puanı: %{avg}',
  takeDST: '🎯 Dijital Beceri Testine Gir →',
  backDashboard2: '← Panele Dön',
  dstCardStage: 'Son Aşama',
  dstCardTitle: 'Dijital Beceri Testi',
  dstCardDesc: 'Tüm modüllerden sonra tamamlanan son uygulamalı değerlendirme.',
  dstReady: 'Hazır',
  dstCardTag: 'Uygulamalı değerlendirme',
  videoFallback: 'Tarayıcınız bu videoyu oynatamıyor.',
  videoDownload: 'İndir',
  videoPhTitle: 'Kayıt yakında geliyor',
  videoPhBody: 'Örnek ders videosu burada görünecek.'
},
dst: {
  formUrl: '',
  placeholderNote: 'Bölgeniz için gönderim formu yakında eklenecek.',
  html: `<div class="dst-body">
    <div class="dst-intro">
      <div class="dst-badge">🏆 Dijital Beceri Testi · 2025</div>
      <div class="dst-h1">Python Eğitmenleri için Test</div>
      <p class="dst-sub">Bu görevde Python bilginizi ve öğrencilere projeler yazarken yardımcı olma yeteneğinizi — ayrıca titizliğinizi, dürüstlüğünüzü ve belirlenen yönergelere uyma isteğinizi — gösterebilirsiniz. Göreviniz, aşağıdaki gereksinimleri karşılayan bir oyun oluşturmaktır. Süper havalı üçüncü taraf bir projeye ihtiyacınız yok — bu belirli göreve iyi uyan bir projeye ihtiyacınız var!</p>
    </div>

    <div class="dst-stage-header">
      <span class="dst-stage-pill">Görev</span>
      <span class="dst-stage-title">🎮 Bir oyun oluşturun</span>
    </div>

    <div class="dst-task">
      <div class="dst-task-num">1</div>
      <div class="dst-task-body"><p>Proje klasörü, kullanılan kütüphaneleri listeleyen ve projenin nasıl çalıştırılacağına dair talimatlar içeren bir <code>readme.txt</code> dosyası içermelidir.</p></div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">2</div>
      <div class="dst-task-body"><p>Kod <strong>tamamen özgün ve bağımsız olarak yazılmış</strong> olmalıdır. (Görseller özgün olmak zorunda değildir.)</p></div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">3</div>
      <div class="dst-task-body"><p>Yalnızca aşağıdaki modüller kullanılabilir:</p>
        <ul>
          <li><strong>Pygame Zero</strong></li>
          <li><strong>math</strong></li>
          <li><strong>random</strong></li>
          <li>Diğer kütüphanelere <strong>İZİN YOK!</strong></li>
          <li><strong>Pygame</strong> kütüphanesi <strong>KULLANILMAMALIDIR.</strong></li>
          <li><em>İstisna:</em> Pygame'den <code>Rect</code> sınıfını içe aktarabilirsiniz.</li>
        </ul>
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">4</div>
      <div class="dst-task-body"><p>Yalnızca aşağıdaki türlerden birinde bir oyun oluşturabilirsiniz:</p>
        <ul>
          <li><strong>Roguelike</strong> (ör. The Binding of Isaac, Hades, Slay the Spire)</li>
          <li><strong>Platform oyunu</strong> (ör. Super Mario Bros., Sonic the Hedgehog)</li>
          <li><strong>Koşu oyunu</strong> (ör. Subway Surfers, Temple Run)</li>
        </ul>
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">5</div>
      <div class="dst-task-body"><p>Oyunda <strong>tıklanabilir düğmeleri olan bir ana menü</strong> bulunmalıdır:</p>
        <ul>
          <li>Oyunu Başlat</li>
          <li>Müziği ve Sesleri Aç/Kapat</li>
          <li>Çıkış</li>
        </ul>
        <img class="dst-img" src="assets/dst/image1.png" alt="Example game screen with clickable menu buttons" loading="lazy">
        <img class="dst-img" src="assets/dst/image5.png" alt="Example main menu: Play, Sound On/Off, Exit" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">6</div>
      <div class="dst-task-body"><p>Oyunda kahraman için tehlikeli olan en az <strong>iki farklı düşman</strong> bulunmalıdır.</p>
        <img class="dst-img" src="assets/dst/image3.gif" alt="Roguelike map with several different enemies" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">7</div>
      <div class="dst-task-body"><p>Düşmanlar <strong>kendi alanları içinde hareket etmelidir.</strong></p>
        <img class="dst-img" src="assets/dst/image4.gif" alt="Enemies moving, each confined to its own room" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">8</div>
      <div class="dst-task-body"><p>Oyunda hem kazanma hem de kaybetme için <strong>hatasız, mantıksal bir oyun bitirme mekaniği</strong> bulunmalıdır.</p>
        <img class="dst-img" src="assets/dst/image7.gif" alt="Example gameplay leading to a win/lose outcome" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">9</div>
      <div class="dst-task-body"><p>Hem oyuncu karakteri hem de düşmanlar <strong>hareket için sprite animasyonlarına</strong> sahip olmalıdır (örneğin yürürken bacak hareketleri).</p>
        <img class="dst-img" src="assets/dst/image10.gif" alt="Character running with animated leg movement" loading="lazy">
        <div class="dst-imgrow"><img class="dst-img pix" src="assets/dst/image11.gif" alt="Animated character moving through grass"></div>
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">10</div>
      <div class="dst-task-body"><p>Oyunda <strong>hem arka plan müziği hem de oyun sesleri</strong> bulunmalıdır (karakter saldırdığında veya bir düşmanla çarpıştığında ses, bir ödül toplandığında bozuk para sesi vb.).</p><p style="margin-top:6px">Örnek ses kaynağı: <a class="dst-inline-link" href="https://mixkit.co" target="_blank" rel="noopener noreferrer">mixkit.co</a></p></div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">11</div>
      <div class="dst-task-body"><p>Hem oyuncu karakteri hem de düşmanlar <strong>bekleme animasyonlarına</strong> sahip olmalıdır (örneğin: nefes alma, etrafa bakma, yüzgeç oynatma, kuyruk sallama vb.).</p><p style="margin-top:6px">Örnek görsel kaynağı: <a class="dst-inline-link" href="https://kenney.nl" target="_blank" rel="noopener noreferrer">Kenney.nl</a></p>
        <div class="dst-imgrow">
          <img class="dst-img pix" src="assets/dst/image9.gif" alt="Idle character animation">
          <img class="dst-img pix" src="assets/dst/image6.gif" alt="Idle character animation in grass">
          <img class="dst-img pix" src="assets/dst/image2.gif" alt="Idle scene with enemy">
        </div>
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">12</div>
      <div class="dst-task-body"><p>Karakter hareketini ve sprite animasyonlarını uygulamak için <strong>kendi sınıflarınızı</strong> yazmalısınız. <strong>(Nesne Yönelimli Programlama)</strong></p>
        <img class="dst-img" src="assets/dst/image8.png" alt="Example of a custom class implementing movement" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">13</div>
      <div class="dst-task-body"><p>Değişkenler, sınıflar ve fonksiyonlar için <strong>açık, anlamlı İngilizce adlar</strong> kullanmalısınız — <strong>PEP 8</strong> kurallarına uyun.</p></div>
    </div>

    <div class="dst-stage-header">
      <span class="dst-stage-pill">Notlar</span>
      <span class="dst-stage-title">📌 Tanımlar ve yönlendirme</span>
    </div>
    <div class="card">
      <ul style="padding-left:17px">
        <li style="margin-bottom:6px">Bir <strong>roguelike</strong> oyunu, tüm nesnelerin ve karakterlerin oyun dünyasının ızgarasına yerleştirildiği, yukarıdan bakışlı bir oyundur. Hücreler arasındaki hareket akıcı ve animasyonlu olmalıdır.</li>
        <li style="margin-bottom:6px">Bir <strong>işaretle-ve-tıkla macera</strong> oyunu, roguelike oyunlarına benzer yukarıdan bakışlı bir perspektif sunar, ancak karakterin hareketi ızgarayla sınırlı değildir.</li>
        <li style="margin-bottom:6px">Bir <strong>platform oyunu</strong>, karakterin platformlar arasında zıplayabildiği, yandan bakışlı bir oyundur.</li>
        <li><strong>Sprite animasyonu</strong>, bir karakteri canlandırmak için sürekli ve döngüsel olarak değişen bir görüntü dizisi kullanmak anlamına gelir. Sola bakan bir görüntü ile sağa bakan bir görüntü arasında geçiş yapmak sprite animasyonu <strong>DEĞİLDİR</strong>. 🧐</li>
      </ul>
    </div>
    <div class="callout ct"><span class="ci">💡</span><span>Aşırı karmaşık veya uzun bir koda ihtiyacınız yok — görevi iyi bir şekilde tamamlamak için genellikle <strong>100–200 anlamlı satır</strong> yeterlidir.</span></div>
    <div class="callout cg"><span class="ci">✅</span><span>Bu projenin karmaşıklığı, öğrencilerimizin bitirme projelerinden yalnızca yaklaşık <strong>%30 daha yüksektir</strong>. Bir eğitmen öğrencilere projelerinde rehberlik edebiliyorsa, bu seviye kolayca ulaşılabilir — başarıyla tamamlamanızı umuyoruz! 👍</span></div>

    <div class="dst-stage-header">
      <span class="dst-stage-pill">Önemli</span>
      <span class="dst-stage-title">⚠️ Lütfen dikkatlice okuyun</span>
    </div>
    <div class="callout cw"><span class="ci">⚠️</span><span>Birkaç önemli gereksinimi aynı anda ihlal ederseniz, projeyi <strong>revize etme fırsatı olmayabilir</strong>.</span></div>
    <div class="callout cw"><span class="ci">⚠️</span><span>Proje internetten tamamen veya kısmen kopyalanmış <strong>OLMAMALIDIR</strong> — bunu yapmak, dürüstlüğünüz ve profesyonelliğiniz hakkında derhal endişe yaratacaktır.</span></div>
    <div class="callout cw"><span class="ci">🚫</span><span><strong>Yapay zekâ kullanımı doğrudan bir ret nedenidir.</strong></span></div>

    <div class="dst-stage-header">
      <span class="dst-stage-pill">Gönderim</span>
      <span class="dst-stage-title">📤 Nasıl gönderilir</span>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">1</div>
      <div class="dst-task-body"><p>Tamamlanmış projeyi bir bulut depolama platformuna (<strong>Google Drive veya GitHub</strong>) yükleyin ve proje klasörüne <strong>erişim sağladığınızdan</strong> emin olun. Lütfen sıkıştırılmış dosya biçimleri <strong>KULLANMAYIN</strong>!</p></div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">2</div>
      <div class="dst-task-body"><p>Aşağıdaki beceri testini tamamlayın ve <strong>proje bağlantınızı</strong> son sorunun yanıtı olarak yapıştırın.</p></div>
    </div>
    <div class="dst-submit-card">
      <h3>🔗 Göndermeye hazır mısınız?</h3>
      <p>Beceri testi formunu açın, tamamlayın ve proje bağlantınızı son yanıt olarak yapıştırın.</p>
      <a class="dst-link-btn" id="dst-form-btn" href="#">Beceri Testi Formunu Aç →</a>
    </div>

    <p style="text-align:center;color:var(--text-muted);font-size:14px;margin-top:28px">Başarılar! 🍀</p>
</div>`
},
modules: [
  {
    id:1, emoji:'🐍', color:'#AEDD2E',
    title:'Python Temelleri',
    desc:'print, değişkenler, input, veri türleri ve tür dönüşümü — bir çocuğun ilk programı.',
    obj:'Mutlak temeller hakkında öğretim düzeyinde bir anlayış oluşturun: çıktı, değişkenler, girdi, temel veri türleri ve aralarındaki dönüşümler. Sonunda her birini üç farklı şekilde açıklayabilmeli ve bir başlangıç seviyesindekinin karşılaşacağı hataları tam olarak tahmin edebilmelisiniz.',
    sections:[
      {t:'🗺️ Bunun kurstaki yeri', cards:[
        {type:'text', h:'Kodla ilk temas', b:'Bu, bir çocuğun hayatında ilk programını çalıştırdığı modüldür. Buradaki hiçbir şey sizin için zor değil — zorluk tamamen pedagojiktir. Kurs akışı bilinçlidir: <strong>çıktı</strong> (<code>print</code>) ile sonuçları anında görsünler → <strong>değişkenler</strong> ile program bir şeyleri hatırlayabilsin → <strong>girdi</strong> ile karşılık verebilsin → <strong>veri türleri</strong> ile tuttukları değerin ne tür olduğunu anlasınlar → <strong>dönüşüm</strong> ile girdi matematikte kullanılabilsin. Sonraki her modül — döngüler, listeler, fonksiyonlar, hatta oyunlar — bu beş fikrin üzerinde durur.'},
        {type:'text', h:'1. derste gerçek göreviniz', b:'İlk birkaç dakika içinde çocuğun ekranında çalışan, kişiselleştirilmiş bir program oluşturun. Erken ve görünür başarı, 9 yaşındaki bir çocuğun geri gelmek istemesini sağlayan şeydir. Teori, kendi adının yazdırıldığını görmenin dopamin patlamasından <em>sonra</em> gelir, asla önce değil.'},
        {type:'tip', txt:'Tempo kuralı: bir yeni fikir, ardından hemen bir şey çalıştırın. Başlangıç seviyesindekiler, herhangi birinin çalıştığını görmeden önce üç soyut kavramı kafalarında tutamazlar. Kod → çalıştır → tepki ver → sonraki fikir.'}
      ]},
      {t:'🖨️ print() — çıktı', cards:[
        {type:'text', h:'Ne öğretmeli', b:'<code>print()</code> parantezlerin içindeki her şeyi görüntüler. Metin tırnak işareti gerektirir; sayılar gerektirmez. Birden fazla şeyi virgülle ayırarak aynı anda yazdırabilirsiniz ve Python aralarına otomatik olarak bir boşluk ekler.'},
        {type:'code', lbl:'print basics', code:`<span class="cf">print</span>(<span class="cs">"Hello, world!"</span>)
<span class="cf">print</span>(<span class="cn">2024</span>)
<span class="cf">print</span>(<span class="cs">"You are"</span>, <span class="cn">9</span>, <span class="cs">"years old"</span>)
<span class="cc"># Çıktı: You are 9 years old</span>`},
        {type:'warn', txt:'İlk yapılan 1 numaralı hata tırnak işaretlerini unutmaktır: <code>print(Hello)</code>, Python’ın Hello adında bir <em>değişken</em> aramasına ve <code>NameError</code> vermesine neden olur. Kuralı yüksek sesle öğretin: <strong>"metin her zaman tırnak giyer."</strong>'}
      ]},
      {t:'📦 Değişkenler — bellek', cards:[
        {type:'text', h:'Ne öğretmeli', b:'Bir değişken, daha sonra yeniden kullanabilmeniz için bir değeri bir ad altında saklar. Ad <code>=</code>’in soluna, değer ise sağına gider. Satırı sağdan sola okumak yardımcı olur: "9 değerini al ve onu age adlı kutuya koy."'},
        {type:'code', lbl:'variables', code:`name = <span class="cs">"Mia"</span>
age = <span class="cn">9</span>
<span class="cf">print</span>(<span class="cs">"Hi"</span>, name)
age = age <span class="ck">+</span> <span class="cn">1</span>   <span class="cc"># kutu güncellenebilir</span>
<span class="cf">print</span>(<span class="cs">"Next year:"</span>, age)`},
        {type:'hi', h:'İşe yarayan benzetme', b:'"Bir değişken, tek bir şey tutan etiketli bir kutudur. İçine yeni bir şey koyun ve eski şey gitmiş olur." Bu, yeniden atamayı mükemmel şekilde açıklar — çocuklar <code>age = age + 1</code>’in kutuyu boşaltıp yeniden doldurduğunu hemen kavrar.'},
        {type:'warn', txt:'<code>=</code>, matematiksel anlamda "eşittir" değildir — "sağ tarafı sol tarafa koy" anlamına gelir. Yüksek sesle "eşittir" demek, daha sonra <code>==</code> ile gerçek karışıklığa neden olur. Bunun yerine "<strong>olur</strong>" veya "<strong>olsun</strong>" deyin: "age 10 olur."'}
      ]},
      {t:'⌨️ input() — ve neden her şey bir dizedir', cards:[
        {type:'text', h:'Modüldeki en önemli tek fikir', b:'<code>input()</code> programı duraklatır, kullanıcının yazmasını bekler ve yazdıklarını <strong>bir dize olarak — her zaman, rakam yazsalar bile — geri verir.</strong> Bu tek gerçek, tüm kurstaki başka her şeyden daha fazla başlangıç hatasının kaynağıdır, bu yüzden gerçek zamanı hak eder.'},
        {type:'code', lbl:'the classic bug, then the fix', code:`age = <span class="cf">input</span>(<span class="cs">"How old are you? "</span>)
<span class="cf">print</span>(age <span class="ck">+</span> <span class="cn">1</span>)
<span class="cc"># TypeError: can only concatenate str ... not int</span>

<span class="cc"># Çözüm: metni bir sayıya dönüştür</span>
age = <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"How old are you? "</span>))
<span class="cf">print</span>(<span class="cs">"Next year you’ll be"</span>, age <span class="ck">+</span> <span class="cn">1</span>)`},
        {type:'good', txt:'Bunu bir hikâye olarak öğretin: "input her zaman size kelimeler verir, asla sayı vermez. Matematik yapmak istiyorsanız, önce kelimeleri <code>int()</code> ile bir sayıya dönüştürmelisiniz." Çöküşü bilerek gösterin, hatayı birlikte okuyun, ardından düzeltin. Önce-hata-sonra-düzeltme dizisi, önceden verilen bir kuraldan daha akılda kalıcıdır.'}
      ]},
      {t:'🔢 Veri türleri ve dönüşüm', cards:[
        {type:'text', h:'Çocukların önce tanıştığı üç tür', b:'<strong>str</strong> (tırnak içindeki metin), <strong>int</strong> (tam sayılar) ve <strong>float</strong> (ondalıklar). <code>type(x)</code> bir değerin hangisi olduğunu ortaya çıkarır — bir gösterimde açık tutun ve canlı olarak kontrol edin. Dönüşüm fonksiyonları aralarında geçiş yapar: <code>int("5")</code> → 5, <code>str(5)</code> → "5", <code>float("3.2")</code> → 3.2.'},
        {type:'code', lbl:'type() and conversions', code:`<span class="cf">print</span>(<span class="cf">type</span>(<span class="cs">"hi"</span>))    <span class="cc"># &lt;class 'str'&gt;</span>
<span class="cf">print</span>(<span class="cf">type</span>(<span class="cn">7</span>))       <span class="cc"># &lt;class 'int'&gt;</span>
<span class="cf">print</span>(<span class="cf">type</span>(<span class="cn">3.5</span>))     <span class="cc"># &lt;class 'float'&gt;</span>

score = <span class="cf">int</span>(<span class="cs">"10"</span>)        <span class="cc"># "10" -&gt; 10</span>
label = <span class="cs">"Score: "</span> <span class="ck">+</span> <span class="cf">str</span>(score)  <span class="cc"># sayı -&gt; birleştirmek için metin</span>`},
        {type:'twocol', left:{h:'Dize + Sayı = sorun', items:['<code>"5" + 3</code> &rarr; <code>TypeError</code>','<code>"5" + "3"</code> &rarr; <code>"53"</code> (birleştirildi!)','<code>5 + 3</code> &rarr; <code>8</code> (gerçek matematik)']}, right:{h:'Farkı nasıl öğretmeli', items:['Üçünü de canlı çalıştırın — tahmin etmelerine izin verin','"metinde + yapıştırır; sayılarda + toplar"','Nedenini ortaya çıkarmak için <code>type()</code> kullanın']}}
      ]},
      {t:'🧒 Karşılaşacağınız yanlış anlamalar', cards:[
        {type:'twocol', left:{h:'Başlangıç seviyesindekilerin yanlış yaptıkları', items:['Metnin etrafına tırnak koymayı unutmak','<code>input()</code>’u bir sayı gibi ele almak','<code>=</code> ve <code>==</code>’yi karıştırmak','Değişken adlarında yazım hataları (<code>naem</code>)','Bir değişkenin <code>print</code> olmadan kendini "gösterdiğini" sanmak']}, right:{h:'Önleyici hamleleriniz', items:['"Metin tırnak giyer"','"input her zaman kelime verir"','"tek = saklar, çift == sorar"','<code>NameError</code>’ı birlikte okuyun','"Saklamak sessizdir; yalnızca print gösterir"']}},
        {type:'warn', txt:'Bir hata belirdiğinde, onu kendiniz düzeltmeye direnin. Geri izlemenin son satırını öğrenciyle <em>birlikte</em> okuyun ve nedeni onların bulmasına izin verin. Hata okuma bağımsızlığını erkenden inşa etmek, bir eğitmenin yaptığı en yüksek kaldıraçlı şeylerden biridir.'}
      ]},
      {t:'🎯 Hepsini bir araya getirme', cards:[
        {type:'hi', h:'Gurur duyacakları ilk proje', b:'Küçük bir "Hakkımda" veya 2050’de-yaş hesaplayıcısı, modüldeki her fikri kullanır: girdi, dönüşüm, bir değişken, aritmetik ve print. Kişiselleştirmelerine izin verin (adları, en sevdikleri oyun). Sahiplenme, bir alıştırmayı ekran görüntüsü alıp bir ebeveyne gösterdikleri bir şeye dönüştürür.'},
        {type:'code', lbl:'mini-project: age in 2050', code:`name = <span class="cf">input</span>(<span class="cs">"Your name? "</span>)
age = <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"Your age? "</span>))
future = age <span class="ck">+</span> (<span class="cn">2050</span> <span class="ck">-</span> <span class="cn">2024</span>)
<span class="cf">print</span>(name <span class="ck">+</span> <span class="cs">", in 2050 you’ll be "</span> <span class="ck">+</span> <span class="cf">str</span>(future))`},
        {type:'good', txt:'Bu mini projenin girişte <code>int()</code>’e ve çıkışta <code>str()</code>’e ihtiyaç duyduğuna dikkat edin — dönüşümlerin var olması için mükemmel, doğal bir neden. Kavramın yalıtılmış olarak gösterildiği değil, gerçekten gerekli olduğu örneklere yönelin.'}
      ]}
    ],
    quiz:[
      {q:'Bir öğrenci age = input("Age: ") ardından age + 1 yazıyor ve bir TypeError alıyor. En temiz çözüm ve arkasındaki fikir nedir?', opts:['Girdiyi int() ile sarın: age = int(input(...)) — input her zaman bir dize döndürür','Python’ı yeniden başlatın; yorumlayıcı kafası karıştı','Bir çakışmayı önlemek için değişkeni yeniden adlandırın','input’a ekleme yapamayacağınız için + 1’i kaldırın'], c:0, fb:'input() her zaman bir dize döndürür, bu yüzden aritmetikten önce int() ile dönüştürülmelidir. Bu, modülün merkezi fikridir.'},
      {q:'Bir "değişken" için 9 yaşındaki bir çocuğa yönelik en iyi açıklama hangisidir?', opts:['Yeniden kullanabileceğiniz ve üzerine yazabileceğiniz tek bir değer tutan etiketli bir kutu','Saklanan verileri döndüren bir fonksiyon','Python’da ayrılmış bir anahtar kelime','Sayıları hatırlayan bir döngü'], c:0, fb:'"Etiketli kutu" benzetmesi somuttur ve ayrıca yeniden atamayı da net şekilde açıklar.'},
      {q:'"=" sembolünü başlangıç seviyesindekilere "eşittir" olarak yüksek sesle okumak neden risklidir?', opts:['Aslında "eşittir mi" anlamına gelen == ile karışıklığı teşvik eder','"Eşittir" dilbilgisi açısından yanlıştır','Python = sembolünü kullanmaz','Dersi uzatır'], c:0, fb:'"Olur" veya "olsun" demek, atamayı (=) karşılaştırmadan (==) ayrı tutar ve çok yaygın bir sonraki karışıklığı önler.'},
      {q:'Bir çocuk programını çalıştırıyor ve bir değişkende bir değer saklamış olmasına rağmen "hiçbir şey görünmüyor". En olası neden?', opts:['Değeri sakladılar ama onu görüntülemek için hiç print() çağırmadılar','Değişken adı çok uzun','Python yalnızca sayıları yazdırır','Bir görüntüleme modülünü içe aktarmaları gerekiyor'], c:0, fb:'Bir değeri saklamak sessizdir; yalnızca print() ekrana bir şey koyar. "Saklamak sessizdir, yalnızca print gösterir."'},
      {q:'print("5" + "3") ne çıktı verir ve canlı olarak göstermek neden iyi bir şeydir?', opts:['"53" — + dizeleri birleştirir, tür farkındalığını motive eden akılda kalıcı bir sürpriz','8 — Python sayıları toplar','Bir hata — dizelerde + kullanamazsınız','"5 3" — Python bir boşluk ekler'], c:0, fb:'Her iki işlenen de dizedir, bu yüzden + "53" olarak birleştirir. Sürpriz, kuralı sadece belirtmekten daha iyi akılda kalır.'},
      {q:'Bir öğrenci NameError: name ‘naem’ is not defined hatasıyla karşılaşıyor. En iyi öğretim tepkisi:', opts:['Hata satırını birlikte okumak ve yazım hatasını onların bulmasına izin vermek','Ders akışını sürdürmek için sessizce düzeltmek','Onlara değişkenlerin güvenilmez olduğunu söylemek','Farklı bir örneğe geçmek'], c:0, fb:'Öğrencilere geri izlemeleri okumayı öğretmek, hata ayıklama bağımsızlığı oluşturur — temel bir uzun vadeli hedef.'}
    ]
  },
  {
    id:2, emoji:'🔀', color:'#F03D9E',
    title:'Kontrol Akışı: Koşullar ve Döngüler',
    desc:'if / elif / else, karşılaştırma ve mantıksal operatörler, ayrıca while ve for döngüleri ve iç içe yerleştirme.',
    obj:'Programlara karar vermeyi ve tekrarlamayı öğretin. Girintiyi söz dizimi olarak açıklayabilmeli, anında for ve while arasında seçim yapabilmeli, bir döngüyü elle izleyebilmeli ve sonsuz döngü ile bir-eksik hatalarını olmadan önce teşhis edebilmelisiniz.',
    sections:[
      {t:'🗺️ Bunun kurstaki yeri', cards:[
        {type:'text', h:'Her programın iki motoru', b:'Şimdiye kadar programlar yukarıdan aşağıya, bir kez, düz çalıştı. Bu modül, kodu gerçekten ilginç bir şey <em>yapmaya</em> iten iki şeyi ekler: <strong>kararlar</strong> (<code>if/elif/else</code>) ile program dallanabilir ve <strong>tekrar</strong> (<code>while</code>, <code>for</code>) ile bir işi kopyala-yapıştır olmadan birçok kez yapabilir. Birleştiğinde, ilk gerçek "algoritmaları" üretirler — ve kursun ilerleyen bölümlerindeki her oyuna güç verirler.'},
        {type:'warn', txt:'Python’da girinti stil değil, söz dizimi<strong>dir</strong>. Bir <code>if</code> veya <code>for</code> altındaki boşluklar, Python’a "bu içeride yer alır" diyen şeydir. Bu modüldeki tüm başlangıç hatalarının yaklaşık yarısı eksik bir iki nokta üst üste veya yanlış girintidir — bunun için açıkça zaman ayırın.'}
      ]},
      {t:'🔁 Koşullar: if / elif / else', cards:[
        {type:'text', h:'Ne öğretmeli', b:'<code>if</code>, bir bloğu yalnızca koşulu <code>True</code> olduğunda çalıştırır. <code>elif</code> ("else if") <em>yalnızca</em> üstündeki her koşul False ise kontrol edilir. <code>else</code>, hiçbir şey eşleşmediğinde geçerli olan yakalayıcıdır. Python bunları yukarıdan aşağıya kontrol eder ve ilk eşleşmede durur — sıra önemlidir.'},
        {type:'code', lbl:'branching', code:`score = <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"Your score: "</span>))
<span class="ck">if</span> score <span class="ck">&gt;=</span> <span class="cn">90</span>:
    <span class="cf">print</span>(<span class="cs">"Excellent!"</span>)
<span class="ck">elif</span> score <span class="ck">&gt;=</span> <span class="cn">50</span>:
    <span class="cf">print</span>(<span class="cs">"You passed"</span>)
<span class="ck">else</span>:
    <span class="cf">print</span>(<span class="cs">"Try again"</span>)`},
        {type:'text', h:'Karşılaştırma ve mantıksal operatörler', b:'Karşılaştırmalar True/False döndürür: <code>==</code> (eşit), <code>!=</code> (eşit değil), <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>. Bunları <code>and</code> (ikisi de doğru olmalı) ve <code>or</code> (en az biri doğru) ile birleştirin: <code>if age &gt;= 6 and age &lt;= 12:</code>.'},
        {type:'tip', txt:'Sevilen bir tuzak: <code>elif</code> dallarını yanlış sıralamak. <code>score &gt;= 50</code>’yi <code>score &gt;= 90</code>’dan önce kontrol ederseniz, 95 önce "passed" ile eşleşir ve "Excellent"a hiç ulaşmaz. Öğrencilere koşulları en özelden en genele sıralamayı öğretin.'}
      ]},
      {t:'➰ for döngüleri ve range()', cards:[
        {type:'text', h:'Ne öğretmeli', b:'Bir <code>for</code> döngüsü bilinen sayıda tekrar eder. <code>range(n)</code>, <strong>0’dan n’e kadar ama n dahil değil</strong> sayıları üretir — yani <code>range(5)</code> 0,1,2,3,4 verir (sıfırdan başlayan beş sayı). <code>range(1, 6)</code> 1–5 verir ve <code>range(0, 10, 2)</code> 2’şer adımlarla sayar.'},
        {type:'code', lbl:'for + range', code:`<span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">5</span>):
    <span class="cf">print</span>(<span class="cs">"Step"</span>, i)        <span class="cc"># 0,1,2,3,4</span>

<span class="ck">for</span> n <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">5</span>, <span class="cn">0</span>, <span class="ck">-</span><span class="cn">1</span>):
    <span class="cf">print</span>(<span class="cs">"Countdown:"</span>, n) <span class="cc"># 5,4,3,2,1</span>`},
        {type:'warn', txt:'Bir-eksik karışıklığı evrenseldir: öğrenciler <code>range(5)</code>’in 1–5 yazdırmasını bekler. Bir kez, yavaşça gösterin ve üretilen sayıları tahtaya yazın: 0,1,2,3,4. "Sıfırdan başlar, sayıdan <em>önce</em> durur."'}
      ]},
      {t:'🔄 while döngüleri', cards:[
        {type:'text', h:'Ne öğretmeli', b:'Bir <code>while</code> döngüsü, koşulu True kaldığı <em>sürece</em> tekrar eder — sayıyı önceden bilmediğinizde kullanın ("parola doğru olana kadar sormaya devam et"). Döngü içindeki bir şey <strong>sonunda koşulu False yapmalıdır</strong>, yoksa sonsuza kadar çalışır.'},
        {type:'code', lbl:'while + a stop condition', code:`lives = <span class="cn">3</span>
<span class="ck">while</span> lives <span class="ck">&gt;</span> <span class="cn">0</span>:
    <span class="cf">print</span>(<span class="cs">"Lives:"</span>, lives)
    lives <span class="ck">-=</span> <span class="cn">1</span>      <span class="cc"># döngüyü bitiren şey budur</span>
<span class="cf">print</span>(<span class="cs">"Game over"</span>)`},
        {type:'warn', txt:'Sonsuz döngü, tipik <code>while</code> hatasıdır. <code>lives -= 1</code>’i unutursanız, program sonsuza kadar donar. Öğrencilere gövdeyi yazmadan <strong>önce</strong> sormayı öğretin: "buradaki hangi satır bu döngünün sonunda durmasını sağlıyor?"'}
      ]},
      {t:'🪆 İç içe yerleştirme', cards:[
        {type:'text', h:'Ne öğretmeli', b:'Koşullar ve döngüler birbirinin içinde yer alabilir. İçinde bir <code>if</code> olan bir döngü, her geçişte farklı davranmanıza olanak tanır; bir döngü içindeki bir döngü ızgaraları ve tabloları işler. Her iç içe yerleştirme seviyesi başka bir girinti seviyesidir — girintileri düzenli tutmak, iç içe kodu okunabilir tutan şeydir.'},
        {type:'code', lbl:'a loop with a decision inside', code:`<span class="ck">for</span> n <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">1</span>, <span class="cn">6</span>):
    <span class="ck">if</span> n <span class="ck">%</span> <span class="cn">2</span> == <span class="cn">0</span>:
        <span class="cf">print</span>(n, <span class="cs">"is even"</span>)
    <span class="ck">else</span>:
        <span class="cf">print</span>(n, <span class="cs">"is odd"</span>)`}
      ]},
      {t:'🧒 Karşılaşacağınız yanlış anlamalar', cards:[
        {type:'twocol', left:{h:'Başlangıç seviyesindekilerin yanlış yaptıkları', items:['Bir koşulda <code>==</code> yerine <code>=</code>','İki nokta üst üste <code>:</code>’yi unutmak','Tutarsız / eksik girinti','<code>range(5)</code> "1–5 olmalı"','Sonsuz <code>while</code> döngüleri','Döngüden sonra kod koymak ama onun içine girintili şekilde']}, right:{h:'Önleyici hamleleriniz', items:['"tek = saklar, çift == sorar"','İki nokta üst üsteyi bir refleks hâline getirin','Her zaman 4 boşluk; bloğu görsel olarak gösterin','Sayıları yazın: 0,1,2,3,4','"Bu döngüyü ne durduruyor?"','"Girinti ver = içeride; hizala = sonra"']}},
        {type:'tip', txt:'Bir döngü yanlış davrandığında, onu bir beyaz tahtada elle izleyin: i = 0, sonra 1, sonra 2 yazın ve her seferinde ne yazdırıldığını yazın. Döngüyü "açmak" büyüyü ortadan kaldırır ve modelleyebileceğiniz en iyi hata ayıklama alışkanlığıdır.'}
      ]},
      {t:'🎯 Nasıl öğretmeli', cards:[
        {type:'hi', h:'for vs while — onlara tek bir cümle verin', b:'"Kaç kez olduğunu bildiğinizde <strong>for</strong> kullanın (bunu 10 kez yap). Bir şey olana kadar tekrarladığınızda <strong>while</strong> kullanın (doğru tahmin edene kadar devam et)." Bu tek kural, neredeyse her "hangi döngü?" sorusunu çözer.'},
        {type:'good', txt:'Bir sayı tahmin oyunu buradaki mükemmel bir doruk noktasıdır: bir <code>while</code> döngüsü, "çok yüksek / çok düşük / doğru" için bir <code>if/elif/else</code> ve 1. modülden <code>input()</code>. Gerçek bir oyun gibi hissettirir ve her şeyi aynı anda çalıştırır.'}
      ]}
    ],
    quiz:[
      {q:'Bir öğrencinin if ifadesi, girdiden bağımsız olarak her zaman ilk dalı çalıştırıyor. Önce neyi kontrol edersiniz ve neden?', opts:['== yerine = yazıp yazmadıklarını — = atar, == karşılaştırır','Python’ın yeniden kurulması gerekip gerekmediğini','Yeterince elif dalları olup olmadığını','Dosyanın kaydedilip kaydedilmediğini'], c:0, fb:'Tek = bir değer atar (burada her zaman doğru sonucu verir); == karşılaştırmadır. "Tek = saklar, çift == sorar."'},
      {q:'for ve while arasında seçim yapmak için en iyi tek cümlelik kural nedir?', opts:['Tekrar sayısını bildiğinizde for; bir koşul değişene kadar tekrarladığınızda while','Her zaman while’ı tercih edin; for eskidir','for sayılar için, while metin içindir','Her durumda birbirinin yerine kullanılabilirler'], c:0, fb:'Bilinen sayı → for. Bir-şey-olana-kadar-tekrarla → while.'},
      {q:'Bir çocuğun programı donuyor ve asla bitmiyor. Onlara ne aramayı öğretirsiniz?', opts:['while döngüsü içinde koşulunu sonunda False yapması gereken satırı','Eksik bir print ifadesini','Onu yavaşlatan çok fazla yorumu','Bir dize içindeki yazım hatasını'], c:0, fb:'Donmuş bir program genellikle kontrol değişkeni hiç değişmeyen sonsuz bir while döngüsüdür.'},
      {q:'range(5) ne üretir ve hangi yanlış anlamayı önceden engellemelisiniz?', opts:['0,1,2,3,4 — öğrenciler 1–5 bekler, bu yüzden "sıfırdan başlar, sayıdan önce durur"','1,2,3,4,5 — doğal olarak sayar','Sadece 5 sayısı','5’in altında rastgele bir sayı'], c:0, fb:'range(5) sıfır tabanlıdır ve 5’ten önce durur. Sayıları yazmak bir-eksik hatasını önler.'},
      {q:'if score >= 50 ... elif score >= 90 içinde elif dallarının SIRASI neden önemlidir?', opts:['Python ilk doğru koşulda durur, bu yüzden 95 yanlışlıkla önce >= 50 ile eşleşir','elif dalları rastgele sırada çalışır','Sonraki dallar öncekilerin üzerine yazar','Koşullularda sıra hiç önemli değildir'], c:0, fb:'Koşullar yukarıdan aşağıya kontrol edilir ve ilk eşleşmede durur — en özelden en genele sıralayın.'},
      {q:'Bir döngünün "sonrasındaki" iç içe bir blok yanlışlıkla onun içinde çalışıyor. Altta yatan neden ve öğretim noktası nedir?', opts:['Girinti: girintili satırlar döngünün içindedir; onları geri hizalamak onları sonrasına koyar','İki nokta üst üste yanlış yerleştirilmiş','range() yanlış kullanılmış','while, for olmalıydı'], c:0, fb:'Girinti, Python’da blokları tanımlar. "Girinti ver = içeride; geri hizala = sonra."'}
    ]
  },
  {
    id:3, emoji:'📦', color:'#2B8EF0',
    title:'Veri: Listeler, Sözlükler ve Random',
    desc:'Birçok değeri saklama: liste oluşturma ve metotlar, indeksleme, sözlükler (anahtar→değer) ve random modülü.',
    obj:'Öğrencileri tek değişkenlerden koleksiyonlara taşıyın. Sıfır tabanlı indekslemeyi kafa karışıklığı olmadan öğretebilmeli, erişim desenine göre liste ile sözlük arasında seçim yapabilmeli, temel liste metotlarını gösterebilmeli ve programları canlandırmak için random’ı kullanabilmelisiniz.',
    sections:[
      {t:'🗺️ Bunun kurstaki yeri', cards:[
        {type:'text', h:'Bir değerden çoğuna', b:'Bir değişken tek bir şey tutar; gerçek programların koleksiyonlara ihtiyacı vardır. Bu modül <strong>listeleri</strong> (sıralı, konuma göre erişilen) ve <strong>sözlükleri</strong> (bir anahtara/ada göre erişilen), ayrıca şans için <strong>random</strong> modülünü tanıtır. Bu yapılar, ilerleyen oyun modüllerinde her yerdedir — düşman listeleri, puan tabloları, envanterler, döşeme haritaları — bu yüzden buradaki sağlam bir kavrayış defalarca kendini geri öder.'},
        {type:'tip', txt:'Öğrettiğiniz temel karar: "bunu <em>konumuna</em> göre mi yoksa <em>adına</em> göre mi buluyorum?" Konum → liste. Ad → sözlük. Her örneği bu soru etrafında çerçeveleyin.'}
      ]},
      {t:'📋 Listeler ve indeksleme', cards:[
        {type:'text', h:'Ne öğretmeli', b:'Bir liste, köşeli parantez içinde yazılmış, sırayla birçok değer tutar. Bir öğeyi <strong>indeksine</strong> göre okursunuz ve indeksler <strong>0</strong>’dan başlar — ilk öğe <code>pets[0]</code>, ikincisi <code>pets[1]</code>’dir. <code>len(pets)</code> sayıyı verir, dolayısıyla son öğe <code>pets[len(pets)-1]</code>’dir.'},
        {type:'code', lbl:'lists & indexing', code:`pets = [<span class="cs">"cat"</span>, <span class="cs">"dog"</span>, <span class="cs">"fish"</span>]
<span class="cf">print</span>(pets[<span class="cn">0</span>])      <span class="cc"># cat (İLK öğe)</span>
<span class="cf">print</span>(pets[<span class="cn">2</span>])      <span class="cc"># fish</span>
<span class="cf">print</span>(<span class="cf">len</span>(pets))   <span class="cc"># 3</span>

<span class="ck">for</span> pet <span class="ck">in</span> pets:    <span class="cc"># her öğe üzerinde döngü</span>
    <span class="cf">print</span>(pet)`},
        {type:'warn', txt:'Sıfır tabanlı indeksleme gerçek bir kavramsal engeldir. "<strong>İlk öğe, öğe sıfırdır</strong>" ifadesini defalarca söyleyin ve 3 öğeli bir listede <code>pets[3]</code>’in <code>IndexError: list index out of range</code> verdiğini gösterin — çünkü geçerli indeksler 0, 1, 2’dir.'}
      ]},
      {t:'🛠️ Liste metotları', cards:[
        {type:'text', h:'Ne öğretmeli', b:'Listeler değişebilir. Temel metotlar: <code>append(x)</code> sona ekler, <code>insert(i, x)</code> bir konuma ekler, <code>remove(x)</code> ilk eşleşen değeri siler, <code>pop(i)</code> i indeksindeki öğeyi kaldırır ve döndürür ve <code>clear()</code> listeyi boşaltır.'},
        {type:'code', lbl:'mutating a list', code:`pets = [<span class="cs">"cat"</span>, <span class="cs">"dog"</span>]
pets.<span class="cf">append</span>(<span class="cs">"fish"</span>)    <span class="cc"># ["cat","dog","fish"]</span>
pets.<span class="cf">insert</span>(<span class="cn">0</span>, <span class="cs">"bird"</span>) <span class="cc"># ["bird","cat","dog","fish"]</span>
pets.<span class="cf">remove</span>(<span class="cs">"dog"</span>)     <span class="cc"># ["bird","cat","fish"]</span>
last = pets.<span class="cf">pop</span>()        <span class="cc"># "fish" öğesini kaldırır ve döndürür</span>`},
        {type:'twocol', left:{h:'append vs insert vs remove', items:['<code>append</code>: sona ekle','<code>insert(i,x)</code>: i indeksine ekle','<code>remove(x)</code>: değere göre sil','<code>pop(i)</code>: indekse göre sil, döndürür']}, right:{h:'Yaygın karışıklıklar', items:['<code>remove</code> bir indeks değil, bir değer alır','<code>pop</code> bir değer değil, bir indeks alır','<code>remove</code> yalnızca İLK eşleşmeyi siler','<code>append</code> tam olarak bir argüman alır']}}
      ]},
      {t:'🗂️ Sözlükler', cards:[
        {type:'text', h:'Ne öğretmeli', b:'Bir sözlük, süslü parantez içinde <strong>anahtar → değer</strong> çiftlerini saklar. Sayısal bir konum yerine, anlamlı bir anahtara göre arama yaparsınız: <code>scores["Ann"]</code>, "Ann altında saklanan değeri ver" anlamına gelir. <code>scores["Leo"] = 12</code> ile ekleyebilir veya güncelleyebilirsiniz.'},
        {type:'code', lbl:'dictionaries', code:`scores = {<span class="cs">"Ann"</span>: <span class="cn">15</span>, <span class="cs">"Leo"</span>: <span class="cn">9</span>}
<span class="cf">print</span>(scores[<span class="cs">"Ann"</span>])   <span class="cc"># 15 — anahtara göre ara</span>
scores[<span class="cs">"Mia"</span>] = <span class="cn">20</span>      <span class="cc"># yeni bir çift ekle</span>
scores[<span class="cs">"Leo"</span>] = <span class="cn">11</span>      <span class="cc"># mevcut olanı güncelle</span>`},
        {type:'warn', txt:'Öğrenciler anahtarı değerle karıştırır ve yön önemlidir: <code>scores["Ann"]</code>, "Ann’ın puanı nedir?" diye sorar, "Ann 15 mi?" diye sormaz. Ayrıca, var olmayan bir anahtarı aramak <code>KeyError</code> verir — yararlı, öğretici bir hata.'}
      ]},
      {t:'🎲 random modülü', cards:[
        {type:'text', h:'Ne öğretmeli', b:'<code>random</code>’ı içe aktarmak şansın kilidini açar. <code>random.randint(1, 6)</code> 1’den 6’ya kadar (her iki uç da dahil) bir tam sayı verir ve <code>random.choice(my_list)</code> bir listeden rastgele bir öğe seçer. Bu, ilerleyen bölümlerde zarların, sınavların ve düşman davranışının arkasındaki kıvılcımdır.'},
        {type:'code', lbl:'random', code:`<span class="ck">import</span> random

dice = random.<span class="cf">randint</span>(<span class="cn">1</span>, <span class="cn">6</span>)
<span class="cf">print</span>(<span class="cs">"You rolled"</span>, dice)

pets = [<span class="cs">"cat"</span>, <span class="cs">"dog"</span>, <span class="cs">"fish"</span>]
<span class="cf">print</span>(random.<span class="cf">choice</span>(pets))`},
        {type:'warn', txt:'<code>import random</code>’ı unutmak <code>NameError: name ‘random’ is not defined</code> verir. İçe aktarmalar bir kez, dosyanın en üstünde yapılır. <code>randint</code>’in her iki ucu da içerdiğine dikkat edin — üst sınırı hariç tutan <code>range</code>’in aksine.'}
      ]},
      {t:'🎯 Nasıl öğretmeli', cards:[
        {type:'hi', h:'İşe yarayan iki benzetme', b:'Bir liste "<strong>numaralı bir raftır</strong> — yuva 0, yuva 1, yuva 2." Bir sözlük "<strong>bir rehber uygulamasıdır</strong> — bir ad ararsınız ve bir numara alırsınız." Bunlar tam olarak indeks-vs-anahtar üzerine oturur ve çoğu "hangisi?" sorusunu anında çözer.'},
        {type:'good', txt:'Sayı tahmin oyunu burada mükemmel bir yükseltme alır: <code>random.randint</code> gizli sayıyı seçer, bir liste geçmiş tahminleri saklar. random + listeler + 2. modülden döngüleri birleştirmek, öğrencilere kavramların nasıl gerçekten eğlenceli bir şeye dönüştüğünü gösterir.'}
      ]}
    ],
    quiz:[
      {q:'Bir öğrenci ilk hayvanı beklerken pets[1] yazıyor ama ikincisini alıyor. Ne öğretirsiniz ve hangi hata bunu kanıtlar?', opts:['İndeksleme 0’dan başlar, yani pets[0] ilktir; 3 öğeli bir listede pets[3] IndexError verir','Listeler güvenilmezdir ve kaçınılmalıdır','Listeyi bir sözlüğe dönüştürmeleri gerekir','Bundan sonra her indekse 1 ekleyin'], c:0, fb:'Sıfır tabanlı indeksleme: ilk öğe indeks 0’dır, geçerli indeksler 0..len-1’dir ve ötesine geçmek IndexError verir.'},
      {q:'Bir öğrenci bir liste yerine ne zaman bir sözlüğe yönelmelidir?', opts:['Değerlere konuma göre değil, anlamlı bir ada/anahtara göre eriştiğinde','Öğelerin sırası en çok önemli olduğunda','On’dan fazla öğe olduğunda','Sözlükler her zaman daha iyi seçimdir'], c:0, fb:'Listelere konuma göre erişilir; sözlükler anahtarları değerlere eşler — ad→puan aramaları için idealdir.'},
      {q:'list.remove() ile list.pop() arasındaki fark nedir?', opts:['remove(değer) değere göre siler; pop(indeks) konuma göre siler ve öğeyi döndürür','Aynıdırlar','remove bir indeks alır; pop bir değer alır','pop tüm listeyi boşaltır'], c:0, fb:'remove değere göre çalışır (ilk eşleşme); pop indekse göre çalışır ve kaldırılan öğeyi geri verir.'},
      {q:'random.randint kullanan bir oyun "random is not defined" hatası veriyor. Çözüm ve kural nedir?', opts:['En üste import random ekleyin — içe aktarmalar bir kez, kullanımdan önce yapılır','Zar değişkenini yeniden adlandırın','random yerine bir liste kullanın','Python’ı yeniden kurun'], c:0, fb:'random modülü, fonksiyonlarından herhangi biri kullanılmadan önce (bir kez, en üstte) içe aktarılmalıdır.'},
      {q:'Çocuklara öğretirken bir sözlük için en etkili somut benzetme hangisidir?', opts:['Bir rehber uygulaması: bir ad ara, bir numara al','0,1,2 yuvalı numaralı bir raf','Bir geri sayım sayacı','Tek bir etiketli kutu'], c:0, fb:'Rehber uygulaması modeli anahtar→değer aramasını yakalar; numaralı raf modeli listeler içindir.'},
      {q:'random.randint(1, 6), range(1, 6)’dan nasıl farklıdır ve neden bahsedilmeli?', opts:['randint 6’yı DAHİL EDER; range 6’dan ÖNCE durur — öğrenciler iki sınırı karıştırır','Aynıdırlar','randint her iki ucu da hariç tutar','range her iki ucu da dahil eder'], c:0, fb:'randint(1,6) 6 döndürebilir; range(1,6) 1–5 verir. Sınır farkını vurgulamak hataları önler.'}
    ]
  },
  {
    id:4, emoji:'⚙️', color:'#7C5CFC',
    title:'Fonksiyonlar',
    desc:'def, parametreler ve argümanlar, return vs print ve fonksiyonların büyük programları neden düzenli tuttuğu.',
    obj:'Öğrencilere kodu yeniden kullanılabilir fonksiyonlar hâlinde paketlemeyi öğretin. Tanımla-vs-çağır ve print-vs-return ayrımlarını kristal berraklığında yapabilmeli, parametreleri bir benzetmeyle açıklayabilmeli ve önce öğrencilere tekrarın acısını hissettirerek fonksiyonları motive edebilmelisiniz.',
    sections:[
      {t:'🗺️ Bunun kurstaki yeri', cards:[
        {type:'text', h:'Yapının ilk tadı', b:'Şimdiye kadar programlar düz talimat listeleridir. Fonksiyonlar, öğrencilerin <strong>bir iş parçasını adlandırıp yeniden kullanmasına</strong> olanak tanır. Bu, sonraki her şeye açılan köprüdür: Turtle çizimleri fonksiyonlar çağırır ve PyGame Zero tamamen sizin yazdığınız fonksiyonlar (<code>draw</code>, <code>update</code>, <code>on_key_down</code>) üzerine kuruludur. Fonksiyonlarda sallantıda olan bir öğrenci, oyunlar başladığı anda zorlanacaktır — bu yüzden bu modül gerçek bir kapı bekçisidir.'},
        {type:'tip', txt:'Gerçekten yer ayrılması gereken iki fikir: <strong>tanımla vs çağır</strong> (bir fonksiyon yazma vs onu çalıştırma) ve <strong>print vs return</strong> (bir değeri gösterme vs onu geri verme). Bir başlangıç seviyesindekinin karşılaştığı neredeyse her fonksiyon hatası bu ikisinden biridir.'}
      ]},
      {t:'✏️ def — tanımlama ve çağırma', cards:[
        {type:'text', h:'Ne öğretmeli', b:'<code>def name():</code> bir fonksiyonu <em>tanımlar</em> — tarifi yazar ama henüz hiçbir şey çalıştırmaz. Kod yalnızca onu adını parantezlerle yazarak <strong>çağırdığınızda</strong> çalışır: <code>greet()</code>. Bir kez tanımlayıp istediğiniz kadar çağırabilirsiniz.'},
        {type:'code', lbl:'define once, call many times', code:`<span class="ck">def</span> <span class="cf">greet</span>():
    <span class="cf">print</span>(<span class="cs">"Hello!"</span>)
    <span class="cf">print</span>(<span class="cs">"Welcome to the lesson."</span>)

<span class="cf">greet</span>()   <span class="cc"># şimdi çalışır</span>
<span class="cf">greet</span>()   <span class="cc"># ve tekrar</span>`},
        {type:'warn', txt:'Klasik "hiçbir şey olmadı" hatası: öğrenci bir fonksiyon tanımlar ama onu hiç çağırmaz. "<strong>tanımla = tarifi yaz; çağır = pişir</strong>" ifadesini öğretin. Bir kitaptaki tarif, biri onu takip edene kadar hiçbir yemek pişirmez.'}
      ]},
      {t:'📥 Parametreler ve argümanlar', cards:[
        {type:'text', h:'Ne öğretmeli', b:'Parametreler, bir fonksiyonun girdi almasını ve böylece her çağrıda farklı davranmasını sağlar. Tanımdaki ad (<code>name</code>) <strong>parametre</strong>dir; ilettiğiniz asıl değer (<code>"Mia"</code>) <strong>argüman</strong>dır. Soldan sağa eşleştirilirler, dolayısıyla sayı uyuşmalıdır.'},
        {type:'code', lbl:'passing information in', code:`<span class="ck">def</span> <span class="cf">greet</span>(name):
    <span class="cf">print</span>(<span class="cs">"Hello,"</span>, name)

<span class="cf">greet</span>(<span class="cs">"Mia"</span>)    <span class="cc"># Hello, Mia</span>
<span class="cf">greet</span>(<span class="cs">"Sam"</span>)    <span class="cc"># Hello, Sam</span>

<span class="ck">def</span> <span class="cf">add</span>(a, b):
    <span class="cf">print</span>(a <span class="ck">+</span> b)
<span class="cf">add</span>(<span class="cn">3</span>, <span class="cn">4</span>)        <span class="cc"># 7</span>`},
        {type:'warn', txt:'Yanlış sayıda argüman iletmek <code>TypeError: greet() missing 1 required positional argument</code> verir. Birlikte okuyun — hata, eksik olanın adını tam olarak söyler, bu da harika bir hata okuma alıştırmasıdır.'}
      ]},
      {t:'↩️ return vs print — büyük olan', cards:[
        {type:'text', h:'Ne öğretmeli', b:'<code>print</code> bir değeri bir insan için ekranda <strong>gösterir</strong>. <code>return</code> bir değeri programa <strong>geri verir</strong>, böylece kodun geri kalanı onu kullanabilir. Yazdıran ama döndürmeyen bir fonksiyon geri olarak <code>None</code> verir — dolayısıyla sonucuyla matematik yapamazsınız.'},
        {type:'code', lbl:'the difference made visible', code:`<span class="ck">def</span> <span class="cf">square_print</span>(n):
    <span class="cf">print</span>(n <span class="ck">*</span> n)        <span class="cc"># yalnızca görüntüler</span>

<span class="ck">def</span> <span class="cf">square_return</span>(n):
    <span class="ck">return</span> n <span class="ck">*</span> n       <span class="cc"># değeri geri verir</span>

x = <span class="cf">square_print</span>(<span class="cn">5</span>)   <span class="cc"># 25 yazdırır ama x None’dur</span>
y = <span class="cf">square_return</span>(<span class="cn">5</span>)  <span class="cc"># y 25’tir, matematikte kullanılabilir</span>
<span class="cf">print</span>(y <span class="ck">+</span> <span class="cn">1</span>)         <span class="cc"># 26</span>`},
        {type:'hi', h:'Öğrenciler bunu neden hissetmeli', b:'<code>x = square_print(5)</code>’in <code>x</code>’i <code>None</code> olarak bıraktığını, ardından <code>x + 1</code>’in çöktüğünü gösterin. Çöküş, dersin kendisidir: "print bir kişiyle konuşur; return programla konuşur." Bir öğrenci bu farkı hissedene kadar, fonksiyonlar belirsiz kalır.'}
      ]},
      {t:'🍳 Benzetme ve motivasyon', cards:[
        {type:'hi', h:'Tarif benzetmesi', b:'Bir fonksiyon bir <strong>tariftir</strong>. <code>def</code> tarifi yazar; <strong>argümanlar, teslim ettiğiniz malzemelerdir</strong>; <strong>onu çağırmak pişirmektir</strong>; ve <code>return</code>, geri verilen bitmiş yemektir. Print ise, sonucu mutfağın karşısına bağırmaktan başka bir şey değildir — sonrasında kimse onu kullanamaz.'},
        {type:'good', txt:'Önce tekrar dayatarak fonksiyonları motive edin: öğrencinin aynı 4 satırlık selamlamayı üç kez yazmasını, ardından onu tek bir <code>greet(name)</code> hâline getirmesini sağlayın. Sıkıcılığı hissetmek, "kendini tekrar etme"nin oturmasını sağlayan şeydir — onlara kuralı vermeyin, hak etmelerine izin verin.'},
        {type:'code', lbl:'before / after refactor', code:`<span class="cc"># önce: 3 kez tekrarlandı</span>
<span class="cf">print</span>(<span class="cs">"Hi Mia, ready to code?"</span>)
<span class="cf">print</span>(<span class="cs">"Hi Sam, ready to code?"</span>)

<span class="cc"># sonra: tek, yeniden kullanılabilir bir fonksiyon</span>
<span class="ck">def</span> <span class="cf">welcome</span>(name):
    <span class="cf">print</span>(<span class="cs">"Hi"</span>, name <span class="ck">+</span> <span class="cs">", ready to code?"</span>)
<span class="cf">welcome</span>(<span class="cs">"Mia"</span>)
<span class="cf">welcome</span>(<span class="cs">"Sam"</span>)`}
      ]},
      {t:'🧒 Karşılaşacağınız yanlış anlamalar', cards:[
        {type:'twocol', left:{h:'Başlangıç seviyesindekilerin yanlış yaptıkları', items:['Bir fonksiyon tanımlamak ama onu hiç çağırmamak','<code>print</code>’i <code>return</code> ile karıştırmak','Yanlış sayıda argüman','Yalnızca yazdıran bir fonksiyondan bir değer beklemek','Gövdeyi tutarsız girintilemek']}, right:{h:'Önleyici hamleleriniz', items:['"Tanımla = tarif; çağır = pişir"','İkisini yan yana gösterin; None’da çöktürün','TypeError’ı birlikte okuyun','"print insanlarla, return kodla konuşur"','Gövdeyi herhangi bir girintili blok gibi ele alın']}}
      ]}
    ],
    quiz:[
      {q:'Bir öğrenci bir fonksiyon tanımlıyor ama dosyayı çalıştırdığında "hiçbir şey olmuyor". Neden ve öğrettiğiniz ifade nedir?', opts:['Onu hiç çağırmadılar — "tanımla = tarifi yaz; çağır = pişir"','Python yeniden başlatılmalı','Fonksiyonlar her zaman bir değer döndürmelidir','def yanlış yazılmış'], c:0, fb:'Tanımlamak yalnızca tarifi yazar; fonksiyonun gerçekten çalışması için çağrılması gerekir.'},
      {q:'print’i return’den ayırmanın en net yolu nedir?', opts:['print bir değeri bir kişiye gösterir; return bir değeri programa geri verir','Aynı şeyi yaparlar','return sadece daha hızlı bir print’tir','print yalnızca fonksiyonların dışında çalışır'], c:0, fb:'return çağırana kullanılabilir bir değer verir; print yalnızca ekranda metin görüntüler.'},
      {q:'def square(number): return number*number içinde "number" tam olarak nedir?', opts:['Bir parametre — çağrıldığında fonksiyonun aldığı girdi','Yerleşik bir Python anahtar kelimesi','Fonksiyonun döndürdüğü değer','Başka bir yerde tanımlanmış global bir değişken'], c:0, fb:'number parametredir; argüman iletilen asıl değerdir, ör. square(5).'},
      {q:'x = greet("Mia"), burada greet yalnızca yazdırıyor — x’in değeri nedir ve bunu göstermek neden değerli?', opts:['None — yalnızca yazdıran bir fonksiyon hiçbir şey döndürmez, dolayısıyla x+1 çöker ve print ≠ return’ü kanıtlar','"Mia"','Yazdırılan metin','Hemen bir hata verir'], c:0, fb:'return’ü olmayan bir fonksiyon geri None verir. Sonraki çöküş, print vs return’ü öğretmenin en akılda kalıcı yoludur.'},
      {q:'Fonksiyonların NEDEN yararlı olduğunu motive etmenin en etkili yolu nedir?', opts:['Öğrencilerin aynı kodu birkaç kez tekrarlamasını, ardından onu tek bir fonksiyona dönüştürmesini sağlayın','Fonksiyonun resmi tanımıyla açın','Örneklerden kaçının ve teoriyi açıklayın','Yalnızca Python’ın yerleşik fonksiyonlarını kullanın'], c:0, fb:'Öğrencilerin tekrarın acısını hissetmesine izin vermek, yeniden kullanılabilir fonksiyonların değerinin kendiliğinden oturmasını sağlar.'},
      {q:'Bir çağrı "TypeError: greet() missing 1 required positional argument" veriyor. Bu ne anlama gelir ve pedagojik olarak nasıl kullanırsınız?', opts:['Argüman sayısı parametrelerle uyuşmuyor — hata okuma alıştırması olarak hatayı birlikte okuyun','greet gerçek bir fonksiyon değildir','Python’ın belleği bitti','Dönüş değeri yok sayıldı'], c:0, fb:'Argümanlar parametrelerle eşleşmelidir; hata eksik olanı tam olarak adlandırır, bu da onu hata okuma alıştırması için ideal kılar.'}
    ]
  },
  {
    id:5, emoji:'🐢', color:'#F59E0B',
    title:'Çizim ve PyGame Zero’ya Giriş',
    desc:'Turtle modülü, ardından grafiklere sıçrama: Actor’lar, pencere, draw() ve update() ve oyun döngüsü.',
    obj:'Metin programlarından görsellere sıçramayı yönlendirin. Oyun döngüsünü (kağıt animasyon modeli), çerçevenin fonksiyonlarınızı neden çağırdığını, draw() ile update() arasındaki farkı ve sprite’ları sessizce bozan varlık/adlandırma tuzaklarını açıklayabilmelisiniz.',
    sections:[
      {t:'🗺️ Bunun kurstaki yeri', cards:[
        {type:'text', h:'Motivasyon zirvesi', b:'Bu, kodlamanın <em>görsel</em> hâle geldiği modüldür ve birçok çocuk için ona âşık oldukları andır. Öğrenciler <strong>Turtle</strong> ile çizer (fonksiyonlar ve döngüler için tatmin edici bir ödül), ardından "Coddy’nin Maceraları"nın arkasındaki oyun çerçevesi olan <strong>PyGame Zero</strong> ile tanışır. Kalan oyun modüllerindeki her şey doğrudan burada tanıtılan kavramların üzerine kuruludur.'},
        {type:'warn', txt:'Burada gerçek bir kavramsal sıçrama var: yukarıdan aşağıya <em>bir kez</em> çalışan bir programdan, saniyede birçok kez yeniden çizen bir <strong>oyun döngüsüne</strong>. Bu değişimi yüksek sesle adlandırın — bunu fark etmeyen öğrenciler oyunları şaşırtıcı bulur.'}
      ]},
      {t:'🐢 Turtle — kodla çizim', cards:[
        {type:'text', h:'Ne öğretmeli', b:'Turtle bir "kalemi" ekranda dolaştırır: <code>forward(100)</code>, <code>right(90)</code>, <code>left(45)</code>. Sihir şu ki, bir şekil çizmek sadece bir döngüdür ve o döngüyü bir fonksiyona sarmak yeniden kullanılabilir bir araç oluşturur. Önceki iki modülün neden önemli olduğunun mümkün olan en net gösterimidir.'},
        {type:'code', lbl:'a function that draws (loops + functions!)', code:`<span class="ck">import</span> turtle

<span class="ck">def</span> <span class="cf">draw_square</span>(side):
    <span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">4</span>):
        turtle.<span class="cf">forward</span>(side)
        turtle.<span class="cf">right</span>(<span class="cn">90</span>)

<span class="cf">draw_square</span>(<span class="cn">100</span>)
<span class="cf">draw_square</span>(<span class="cn">50</span>)   <span class="cc"># farklı bir boyutla yeniden kullan</span>`},
        {type:'good', txt:'Turtle mükemmel "aha" anıdır: bir kare sadece "ileri, dön, dört kez"dir. Öğrencilerin bir üçgen elde etmek için açıyı 120’ye ve sayıyı 3’e değiştirmesine izin verin — dönüş açısı ile şekil arasındaki bağlantıyı kendilerinin keşfetmesi, söylenmekten çok daha güçlüdür.'}
      ]},
      {t:'🎮 PyGame Zero — kurulum', cards:[
        {type:'text', h:'Ne öğretmeli', b:'Bir PyGame Zero programı <code>#pgzero</code> ile başlar (veya <code>pgzrun</code> ile çalıştırılır). Pencereyi <code>WIDTH</code> ve <code>HEIGHT</code> ile ayarlar, ardından sprite’ları <strong>Actor</strong> olarak oluşturursunuz. Bir <code>Actor("coddy")</code> otomatik olarak <code>images/coddy.png</code>’yi yükler — ad, küçük harfli, uzantısız dosya adıdır. Onu <code>.pos</code>, <code>.x</code>, <code>.y</code> ile konumlandırın.'},
        {type:'code', lbl:'window + actor', code:`<span class="cc">#pgzero</span>
WIDTH = <span class="cn">600</span>
HEIGHT = <span class="cn">400</span>

coddy = <span class="cf">Actor</span>(<span class="cs">"coddy"</span>)   <span class="cc"># images/coddy.png dosyasını yükler</span>
coddy.pos = <span class="cn">300</span>, <span class="cn">200</span>      <span class="cc"># pencerenin merkezi</span>`},
        {type:'warn', txt:'Sessiz katil: görüntü dosya adı Actor adıyla tam olarak eşleşmelidir — küçük harfli, doğru yazımlı, kodda <code>.png</code> olmadan ve dosya bir <code>images</code> klasöründe bulunmalıdır. Bir uyuşmazlık, belirgin bir ipucu olmadan başarısız olur, bu yüzden "sprite görünmüyor" durumunda kontrol edilecek ilk şey budur.'}
      ]},
      {t:'🔁 draw(), update() ve oyun döngüsü', cards:[
        {type:'text', h:'Ne öğretmeli', b:'İki özel fonksiyon yazarsınız ve PyGame Zero <strong>onları sizin için, otomatik olarak, saniyede ~60 kez çağırır</strong>. <code>draw()</code> mevcut kareyi boyar; <code>update()</code> bir sonraki kare için bir şeyleri değiştirir (konumlar, puanlar, mantık). Öğrenci bunları asla çağırmaz — yeni ve şaşırtıcı olan kısım budur.'},
        {type:'code', lbl:'the loop in action', code:`<span class="ck">def</span> <span class="cf">draw</span>():
    screen.<span class="cf">clear</span>()    <span class="cc"># önceki kareyi sil</span>
    coddy.<span class="cf">draw</span>()      <span class="cc"># sprite’ı boya</span>

<span class="ck">def</span> <span class="cf">update</span>():
    coddy.x <span class="ck">+=</span> <span class="cn">1</span>     <span class="cc"># her karede küçük bir değişiklik = hareket</span>`},
        {type:'hi', h:'Kağıt animasyon modeli', b:'Bir oyun, kağıt animasyondur. <code>update()</code> bir sonraki sayfada neyin değişeceğine karar verir; <code>draw()</code> o sayfayı boyar; PyGame Zero saniyede 60 kez sayfaları çevirir. Bu yüzden hareketin her karede <em>küçük</em> bir değişikliğe (<code>x += 1</code>) ihtiyacı vardır — büyük bir sıçramaya değil. Ayrıca neden <code>screen.clear()</code> yapmanız gerektiğini açıklar: sayfayı silmeden, her kare bir öncekinin üzerine bulaşır.'}
      ]},
      {t:'🧒 Karşılaşacağınız yanlış anlamalar', cards:[
        {type:'twocol', left:{h:'Başlangıç seviyesindekilerin yanlış yaptıkları', items:['draw()/update()’i kendileri çağırmak','Görüntü adının dosyayla eşleşmemesi','<code>screen.clear()</code>’ı unutmak → bulaşma','Oyun mantığını update() dışına koymak','Küçük adımlar yerine büyük bir sıçrama','draw (göster) ile update (değiştir)’i karıştırmak']}, right:{h:'Önleyici hamleleriniz', items:['"Onları çerçeve çağırır, siz değil"','Adlar: küçük harf, uzantısız, images/','Sayfayı her karede sil','Tekrarlayan mantık update() içinde yaşar','"Her karede küçük değişiklik = akıcı hareket"','"draw = boya, update = düşün"']}},
        {type:'warn', txt:'"Çerçeve fonksiyonlarınızı çağırır" yepyeni bir fikirdir (kontrolün tersine çevrilmesi). Acele etmeyin. Bunu öncesindeki her şeyle açıkça karşılaştırın: "şimdiye kadar kodunuz sizin satırlarınızı çalıştırdı. Şimdi fonksiyonlar yazıyorsunuz ve oyun motoru onları sizin için çalıştırıyor."'}
      ]},
      {t:'🎯 Nasıl öğretmeli', cards:[
        {type:'good', txt:'İlk hareket eden sprite’ı yüksek sesle kutlayın — gerçek bir dönüm noktası ve tüm kursun duygusal bir zirve noktasıdır. Ardından hemen hızı (<code>x += 5</code>) ve yönü ayarlamalarına izin verin. Oyun döngüsünü sağlamlaştıran şey, açıklama değil, denemedir.'},
        {type:'tip', txt:'Bir öğrenci bunaldıysa, onu çalıştırılabilir en küçük programa indirin: bir pencere, bir Actor, boş bir <code>update()</code>. Her seferinde bir satır ekleyin. Oyunlar devasa hissettirir; onları her seferinde kareyi değiştiren bir satırla inşa etmek onları öğrenilebilir tutar.'}
      ]}
    ],
    quiz:[
      {q:'PyGame Zero’da draw() ve update()’i kim çağırır ve bu pedagojik olarak neden önemlidir?', opts:['Çerçeve onları otomatik olarak saniyede ~60 kez çağırır — yavaş öğretilecek yeni bir "kontrolün tersine çevrilmesi" fikri','Öğrenci onları her karede elle çağırır','İşletim sistemi başlangıçta bir kez çağırır','Yalnızca bir while döngüsüne yerleştirilirlerse çalışırlar'], c:0, fb:'PyGame Zero draw()/update()’inizi sizin için her karede çalıştırır — öğrenciler onları çağırMAMALIdır ve bu gerçekten yenidir.'},
      {q:'Bir çocuğa draw() vs update()’i açıklamanın en net yolu nedir?', opts:['update() bir sonraki kare için neyin değişeceğine karar verir; draw() kareyi boyar ("düşün vs boya")','Aynıdırlar','draw() bir kez çalışır, update() hiç çalışmaz','update() yalnızca sesi işler'], c:0, fb:'"update = düşün/değiştir, draw = boya" doğrudan oyun döngüsünün üzerine oturur.'},
      {q:'Bir sprite görünmüyor ve belirgin bir hata yok. Önce neyi kontrol edersiniz?', opts:['Görüntü dosya adının Actor adıyla tam eşleştiğini (küçük harf, uzantısız, images/ içinde)','Mevcut RAM miktarını','Python’ın 32 mi yoksa 64 bit mi olduğunu','Monitör parlaklığını'], c:0, fb:'Actor("coddy") tam ad eşleşmesiyle images/coddy.png’ye ihtiyaç duyar — en yaygın sessiz hata.'},
      {q:'update() içindeki coddy.x += 1 neden bir ışınlanma değil de akıcı hareket oluşturur?', opts:['update() her karede çalışır, dolayısıyla küçük bir değişiklik saniyede ~60 kez birikerek akıcı harekete dönüşür','Bir kez ışınlanır ve durur','Yalnızca bir while döngüsü içinde çalışır','Pencereyi yeniden boyutlandırır'], c:0, fb:'Hareket, oyun döngüsü tarafından her karede uygulanan küçük bir değişikliktir — kağıt animasyon modeli.'},
      {q:'Bir öğrencinin sprite’ı ekranda bir bulaşma izi bırakıyor. Ne eksik ve neden?', opts:['draw()’ın başında screen.clear() — silmeden, her kare bir öncekinin üzerine boyar','Bir import ifadesi','İkinci bir Actor','Daha hızlı bir bilgisayar'], c:0, fb:'Her kare bir öncekini silmelidir; aksi takdirde eski konumlar boyanmış kalır ve bir bulaşma oluşur.'},
      {q:'Oyunlardan hemen önce Turtle ile bir kare çizmek neden güçlü bir derstir?', opts:['Fonksiyonları + döngüleri birlikte yeniden kullanır, önceki modüllerin karşılığını verdiğini kanıtlar ve "kod resim yapar"a geçişi kolaylaştırır','Sözlükleri öğretir','Dosya işlemeyi tanıtır','Özyinelemeyi gösterir'], c:0, fb:'draw_square, bir döngüyü saran bir fonksiyondur — tatmin edici bir karşılık ve grafiklere nazik bir giriş rampası.'}
    ]
  },
  {
    id:6, emoji:'🎮', color:'#10B981',
    title:'PyGame Zero ile Oyun Geliştirme',
    desc:'Klavye ve fare girdisi, sprite animasyonu, çarpışma algılama ve oyun puanlaması.',
    obj:'Oyun yapımının etkileşimli çekirdeğini öğretin: klavye ve fareye yanıt verme, sprite’ları canlandırma ve çarpışmaları algılama. global’ı temiz bir şekilde açıklayabilmeli, collidepoint’i colliderect’ten ayırabilmeli ve hızlı yinelemeyi bir öğretim alışkanlığı olarak modelleyebilmelisiniz.',
    sections:[
      {t:'🗺️ Bunun kurstaki yeri', cards:[
        {type:'text', h:'Oyuncuya yanıt veren oyunlar', b:'5. modül ekrana bir sprite koydu ve onu kendi başına hareket ettirdi. Şimdi oyun <strong>oyuncuya tepki veriyor</strong>: klavye hareketi, fare tıklamaları, animasyon ve — büyük olan — puanlamayı, hasarı ve toplamayı yöneten çarpışmalar. Buradaki projeler Coddy’nin Maceraları, Minecraft tarzı bir oyun, bir uzay nişancısı ve "Clicker Heroes"u içerir.'},
        {type:'tip', txt:'Çarpışma algılama, "hareket eden bir resmi" bir "oyuna" dönüştüren kavramdır. Bunun için fazladan zaman ayırın — göründüğünden kavramsal olarak daha zengindir ve puanlamayı, dövüşü ve toplamayı aynı anda açar.'}
      ]},
      {t:'⌨️ Klavye girdisi', cards:[
        {type:'text', h:'Öğretilecek iki stil', b:'<strong>Sürekli</strong>: <code>update()</code> içinde <code>keyboard.right</code>, <code>keyboard.left</code> vb.’ni kontrol edin — tuş basılı tutulduğu sürece doğrudur, akıcı hareket için mükemmeldir. <strong>Tek seferlik</strong>: çerçeve, basış başına bir kez <code>on_key_down(key)</code>’ı çağırır, zıplamak veya ateş etmek için idealdir. Hareket ederken sprite’ın görüntüsünü değiştirmek, oyuncuya yönlü geri bildirim verir.'},
        {type:'code', lbl:'continuous movement', code:`<span class="ck">def</span> <span class="cf">update</span>():
    <span class="ck">if</span> keyboard.right:
        coddy.x <span class="ck">+=</span> <span class="cn">5</span>
        coddy.image = <span class="cs">"coddy_right"</span>
    <span class="ck">elif</span> keyboard.left:
        coddy.x <span class="ck">-=</span> <span class="cn">5</span>
        coddy.image = <span class="cs">"coddy_left"</span>`},
        {type:'tip', txt:'Hareket için <code>update()</code>’teki basılı-tuş kontrolünü ve eylemler için <code>on_key_down</code> olayını kullanın. Bunları karıştırmak — ör. <code>on_key_down</code>’da akıcı hareket yapmaya çalışmak — sarsıntılı, basış başına bir adımlık hareket üretir. Aracı istediğiniz hisse göre eşleştirin.'}
      ]},
      {t:'🖱️ Fare girdisi', cards:[
        {type:'text', h:'Ne öğretmeli', b:'Çerçeve, oyuncu tıkladığında <code>on_mouse_down(pos)</code>’ı çağırır ve tıklama konumunu size <code>pos</code> olarak verir. Her zamanki soru "bu nesneye mi tıkladılar?"dır — <code>actor.collidepoint(pos)</code> ile yanıtlanır. Bu, clicker oyunlarına ve "düşmanı vur" mekaniklerine güç verir.'},
        {type:'code', lbl:'click to score', code:`score = <span class="cn">0</span>

<span class="ck">def</span> <span class="cf">on_mouse_down</span>(pos):
    <span class="ck">global</span> score
    <span class="ck">if</span> enemy.<span class="cf">collidepoint</span>(pos):
        score <span class="ck">+=</span> <span class="cn">1</span>
        <span class="cf">animate</span>(enemy, tween=<span class="cs">"bounce_end"</span>, duration=<span class="cn">0.3</span>)`}
      ]},
      {t:'🌍 global anahtar kelimesi', cards:[
        {type:'text', h:'Ne öğretmeli', b:'Bir fonksiyon dışında tanımlanan bir değişkeni <em>okuyabilir</em>, ancak birini <strong>değiştirmek</strong> için önce <code>global score</code> bildirmelidir. Onsuz Python bunun yerine yeni bir yerel değişken oluşturur ve gerçek puan asla güncellenmez — kafa karıştırıcı, hatasız bir başarısızlık.'},
        {type:'warn', txt:'Açıklamayı yaşa uygun tutun: "bir fonksiyon dıştaki değişkenlere bakabilir, ancak birini <strong>değiştirmek</strong> için önce <code>global</code> demesi gerekir." Kapsam üzerine tam bir konferansa direnin — bu derinlik burada gerekli değildir ve başlangıç seviyesindekileri bunaltır. Sadece kural ve çalışan bir örnek.'}
      ]},
      {t:'💥 Çarpışma algılama', cards:[
        {type:'text', h:'Ne öğretmeli', b:'Her sprite’ın etrafında görünmez bir dikdörtgen vardır. <code>a.colliderect(b)</code>, "bu iki dikdörtgen örtüşüyor mu?" diye sorar (sprite vs sprite — vuruşlar, toplamalar). <code>a.collidepoint(pos)</code>, "bu nokta bu dikdörtgenin içinde mi?" diye sorar (bir tıklama veya tek nokta). Bu tek ayrım, neredeyse tüm 2B oyun etkileşimlerini kapsar.'},
        {type:'code', lbl:'sprite-vs-sprite collision', code:`<span class="ck">def</span> <span class="cf">update</span>():
    <span class="ck">if</span> player.<span class="cf">colliderect</span>(coin):
        <span class="ck">global</span> score
        score <span class="ck">+=</span> <span class="cn">1</span>
        coin.x = random.<span class="cf">randint</span>(<span class="cn">0</span>, WIDTH)  <span class="cc"># yeniden oluştur</span>`},
        {type:'hi', h:'Zihinsel model', b:'"Her nesne görünmez bir kutunun içinde yaşar. Bir çarpışma sadece <em>iki kutunun örtüşmesidir</em>." Öğrenciler bu resmi bir kez tuttuğunda, vuruşlar, bozuk para toplamaları ve fare tıklamaları hepsi aynı basit soru hâline gelir, sadece <code>colliderect</code> (kutu vs kutu) veya <code>collidepoint</code> (kutudaki nokta) ile sorulur.'}
      ]},
      {t:'🧒 Karşılaşacağınız yanlış anlamalar', cards:[
        {type:'twocol', left:{h:'Başlangıç seviyesindekilerin yanlış yaptıkları', items:['Bir fonksiyonda <code>global</code> olmadan score’u değiştirmek','<code>collidepoint</code> vs <code>colliderect</code>’i karıştırmak','Hareket çok hızlı veya çok yavaş','Sprite görüntüsünü değiştirmeyi unutmak','<code>on_key_down</code>’da akıcı hareket denemek']}, right:{h:'Önleyici hamleleriniz', items:['"Dıştaki bir değişkeni değiştirmek için global de"','"point = bir tıklama, rect = nesne vs nesne"','+= / -= adımını birlikte ayarlayın','Görüntü değişimi = görünür bakış yönü','Basılı-tuş update()’te; eylemler için olaylar']}}
      ]},
      {t:'🎯 Nasıl öğretmeli', cards:[
        {type:'good', txt:'Hızlı yinelemeyi durmadan modelleyin: bir sayıyı değiştirin, çalıştırın, izleyin, ayarlayın. Oyun geliştirme "hadi sadece deneyelim"i her şeyi önceden planlamaktan çok daha fazla ödüllendirir ve bu tavrı göstermek öğrencilere hatalardan korkmak yerine denemeye izin verir.'},
        {type:'tip', txt:'Bir çarpışma "çalışmadığında", görsel olarak hata ayıklayın: puanı geçici olarak ekranda yazdırın veya <code>if</code> içinde konsola yazdırın. Dalın hiç çalışıp çalışmadığını görmek, "çarpışma algılanmıyor"u "puan güncellenmiyor"dan ayırır — iki çok farklı düzeltme.'}
      ]}
    ],
    quiz:[
      {q:'Bir öğrenci on_mouse_down içinde score’u artırıyor ama hiç değişmiyor, hata da yok. Çözüm ve kural nedir?', opts:['Fonksiyon içinde global score bildirin — onsuz Python yeni bir yerel değişken oluşturur','Puan güncellemesini bir while döngüsüne sarın','score’u benzersiz bir şeyle yeniden adlandırın','score’u Actor’ın içinde saklayın'], c:0, fb:'Bir fonksiyon içinde modül düzeyinde bir değişkeni değiştirmek için Python global bildirimini gerektirir; aksi takdirde sessizce bir yerel oluşturur.'},
      {q:'Hangi metot, belirli bir sprite’a inen bir fare tıklamasını algılar?', opts:['collidepoint(pos) — tek bir noktanın sprite’ın kutusunda olup olmadığını kontrol eder','colliderect(other_sprite)','keyboard.click','on_draw()'], c:0, fb:'collidepoint bir noktayı (tıklamayı) kontrol eder; colliderect iki dikdörtgenin örtüşüp örtüşmediğini kontrol eder.'},
      {q:'Çarpışma algılama için en basit doğru zihinsel model nedir?', opts:['Her nesnenin görünmez bir kutusu vardır; bir çarpışma iki kutunun örtüşmesidir','Python şeylerin dokunuyormuş gibi görünüp görünmediğini tahmin eder','Sprite’lar birbirini manyetik olarak iter','Her sprite’ın piksel renklerini karşılaştırır'], c:0, fb:'Dikdörtgen tabanlı çarpışma tam anlamıyla "bu iki dikdörtgen örtüşüyor mu?"dur — görünmez-kutu modeli tamdır.'},
      {q:'Karakter hareket ettiğinde coddy.image’ı neden bir sol/sağ varyantına değiştirirsiniz?', opts:['Görsel geri bildirim — sprite gittiği yöne bakar','Gereklidir, yoksa oyun çöker','Kodu daha hızlı çalıştırır','Bellek kullanımını azaltır'], c:0, fb:'Sprite görüntüsünü değiştirmek oyuncuya net yönlü geri bildirim verir; bu bir gereklilik değil, bir cila/his kararıdır.'},
      {q:'keyboard.right’ı update() içinde ne zaman, on_key_down(key)’a karşı ne zaman kullanmalısınız?', opts:['Akıcı hareket için update()’te basılı-tuş kontrolleri; zıpla/ateş gibi tek seferlik eylemler için on_key_down','Her zaman on_key_down kullanın; update() klavyeyi okuyamaz','Birbirlerinin yerine kullanılabilirler','keyboard.right yalnızca draw()’da çalışır'], c:0, fb:'Sürekli hareket = update()’te basılı-tuş kontrolü; ayrık eylemler = on_key_down olayı. Bunları karıştırmak yanlış hissettirir.'},
      {q:'Bir çarpışma "çalışmıyor." Öğretilecek en etkili hata ayıklama hamlesi nedir?', opts:['Dalın hiç çalışıp çalışmadığını görmek için if içinde yazdırın (veya puanı ekranda gösterin)','Tüm oyunu yeniden yazın','Daha fazla sprite ekleyin','Pencere boyutunu artırın'], c:0, fb:'Hızlı bir print, "çarpışma algılanmadı"yı "puan güncellenmedi"den ayırır — farklı düzeltmelerle iki farklı sorun.'}
    ]
  },
  {
    id:7, emoji:'🏆', color:'#EF4444',
    title:'Bitirme Projesi: Bir Oyun Oluşturma ve Yayımlama',
    desc:'Izgara haritalar, öznitelikli düşmanlar, collidelist, bonuslar, seviyeler, kazanma/kaybetme durumları, menüler ve yayımlama.',
    obj:'Öğrencilere son projelerinde rehberlik etmeye hazırlanın. Buradaki beceri değişimi, özellikler öğretmekten daha büyük bir yapımı yönetmeye geçiştir — gerçekçi kapsam belirleme, oyun durumunu düzenleme, birçok nesneyi işleme ve öğrencilere bitmiş, yayımlanmış, sunulmuş bir oyuna kadar rehberlik etme.',
    sections:[
      {t:'🗺️ Bunun kurstaki yeri', cards:[
        {type:'text', h:'Her şey bir araya geliyor', b:'Son modüller tam bir RPG ("WeCode and Dragons") ve bir mezuniyet projesi oluşturur. Burada neredeyse <strong>hiç yeni söz dizimi yoktur</strong> — bunun yerine, 1–6. modüllerden her kavram tek bir büyük programın içinde aynı anda yeniden ortaya çıkar. Rolünüz buna göre değişir: daha az "işte yeni bir özellik", daha çok "bu projeyi düzenli ve bitirilebilir tutalım".'},
        {type:'tip', txt:'Bu modül için kendi işinizi yeniden çerçeveleyin. Artık bir kodlama öğretmeni olduğunuz kadar bir proje mentorusunuz: öğrencilerin mantıklı kapsam belirlemesine, düzenli kalmasına, daha büyük bir kod tabanında hata ayıklamasına ve — en önemlisi — gerçekten bitirip yayımlamasına yardım ediyorsunuz.'}
      ]},
      {t:'🗺️ Izgara haritalar (listelerin listeleri)', cards:[
        {type:'text', h:'Ne öğretmeli', b:'Oyun seviyeleri bir <strong>2B ızgara</strong> olarak saklanır — her sayının bir döşeme türünü kodladığı bir listeler listesi (0 = zemin, 1 = duvar, 2 = kemikler vb.). İç içe döngüler, satırlar ve sütunlar boyunca yürüyerek her döşemeyi <code>column * cell_width</code>, <code>row * cell_height</code>’te çizer. Bu, 2. modüldeki iç içe döngülerin karşılığıdır.'},
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
      {t:'👾 Öznitelikli birçok düşman', cards:[
        {type:'text', h:'Ne öğretmeli', b:'Düşmanlar bir döngüde üretilir ve bir listede saklanır, her biri Actor üzerinde özellikler olarak ayarlanan kendi öznitelikleriyle (sağlık, saldırı). Oyuncuyu hepsine <em>aynı anda</em> karşı kontrol etmek için, <code>collidelist(enemies)</code> vurulan ilkinin indeksini, hiçbiri yoksa <code>-1</code> döndürür — manuel bir <code>colliderect</code> kontrolleri döngüsünden çok daha temiz.'},
        {type:'code', lbl:'generate + collide with a list', code:`enemies = []
<span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">5</span>):
    e = <span class="cf">Actor</span>(<span class="cs">"enemy"</span>)
    e.health = random.<span class="cf">randint</span>(<span class="cn">10</span>, <span class="cn">20</span>)
    e.attack = random.<span class="cf">randint</span>(<span class="cn">5</span>, <span class="cn">10</span>)
    enemies.<span class="cf">append</span>(e)

idx = char.<span class="cf">collidelist</span>(enemies)
<span class="ck">if</span> idx <span class="ck">!=</span> <span class="ck">-</span><span class="cn">1</span>:               <span class="cc"># -1, "vuruş yok" anlamına gelir</span>
    char.health <span class="ck">-=</span> enemies[idx].attack`},
        {type:'warn', txt:'Dikkat edilmesi gereken ince bir hata: bir listeden <em>üzerinde döngü yaparken</em> öğe kaldırmak öğeleri atlar. Öğrenciler yenilen düşmanları döngü ortasında silerse, bazıları atlanır. Güvenli deseni öğretin — neyin kaldırılacağını toplayın veya bir kopya üzerinde döngü yapın.'}
      ]},
      {t:'🚦 Oyun durumu ve menüler', cards:[
        {type:'text', h:'Ne öğretmeli', b:'Tek bir <code>mode</code> değişkeni ("menu" / "game" / "end"), hem <code>draw()</code>’a hem de <code>update()</code>’a şu anda ne yapacağını söyleyen bir işaret levhası görevi görür. Her şeyi tek bir durum değişkeni üzerinden yönlendirmek, daha büyük bir oyunun spagettiye dönüşmesini engelleyen şeydir — bitirme projesindeki en önemli düzenleme fikridir.'},
        {type:'code', lbl:'one state variable drives everything', code:`mode = <span class="cs">"menu"</span>

<span class="ck">def</span> <span class="cf">draw</span>():
    screen.<span class="cf">clear</span>()
    <span class="ck">if</span> mode == <span class="cs">"menu"</span>:
        screen.<span class="cf">draw</span>.<span class="cf">text</span>(<span class="cs">"Press SPACE to start"</span>, center=(<span class="cn">300</span>,<span class="cn">200</span>))
    <span class="ck">elif</span> mode == <span class="cs">"game"</span>:
        char.<span class="cf">draw</span>()
    <span class="ck">elif</span> mode == <span class="cs">"end"</span>:
        screen.<span class="cf">draw</span>.<span class="cf">text</span>(<span class="cs">"GAME OVER"</span>, center=(<span class="cn">300</span>,<span class="cn">200</span>))`},
        {type:'hi', h:'Kazanma/kaybetme sadece bir durum değişikliğidir', b:'Zafer ve yenilgi özel bir mekanizma değildir — bir koşul karşılandığında (tüm düşmanlar temizlendi veya <code>char.health &lt;= 0</code>) sadece <code>mode = "end"</code> ayarlamaktır. Bunu bu şekilde çerçevelemek, öğrencileri aşırı mühendislikten uzak tutar ve doğrudan 2. modüldeki koşullara bağlanır.'}
      ]},
      {t:'🧒 Asıl zorluk: kapsam ve bitirme', cards:[
        {type:'twocol', left:{h:'Bitirme projeleri nerede yanlış gider', items:['Fazla iddialı kapsam — bitirmek için çok büyük','Oyun durumunu kaybetmek','Bir listeyi üzerinde döngü yaparken düzenlemek','Yayımlamadan önce zamanın bitmesi','Sonsuza kadar cila yapmak, hiç yayımlamamak']}, right:{h:'Koçluk hamleleriniz', items:['"Küçük bitir, sonra daha fazlasını ekle"','Tek bir <code>mode</code> değişkeni oyunu yönetir','Kaldırırken bir kopya üzerinde döngü yapın','Yayımlamak + sunmak için zaman ayırın','"Bitmiş ve paylaşılmış, mükemmelden iyidir"']}},
        {type:'warn', txt:'Bitirme projesindeki en büyük risk söz dizimi değil, <strong>hırs</strong>tır. Eksiksiz, basit, yayımlanmış bir oyun her zaman bitmemiş bir destandan iyidir. Öğrencilere önce küçük bir kapsam belirlemelerini ve yalnızca çekirdek döngü baştan sona çalıştığında ekstralar eklemelerini öğretin.'}
      ]},
      {t:'🎯 Yayımlama ve sunma', cards:[
        {type:'good', txt:'Mezuniyet dersi, yeni kodla değil, gurur ve sunumla ilgilidir. Öğrencilere oyunlarını Kodland HUB’a yayımlamalarını ve onu göstermelerini öğretin. Bitirmek ve paylaşmak başlı başına bir beceridir — tamamlamayı zekice koddan daha yüksek sesle övün, çünkü gerçek bir şey yayımlamak öğrencilerin hatırladığı şeydir.'},
        {type:'tip', txt:'Her öğrencinin 1 dakikalık bir gösterim hazırlamasına yardım edin: oyunun ne olduğu, nasıl oynanacağı ve gurur duydukları bir şey. Kendi çalışmalarını sunmak özgüven oluşturur ve tüm kursa temiz, motive edici bir son verir.'}
      ]}
    ],
    quiz:[
      {q:'Bir öğrenci için bitirme projesindeki en büyük tek risk nedir ve buna nasıl koçluk yaparsınız?', opts:['Fazla iddialı kapsam — önce küçük, bitirilebilir bir oyun belirleyin, sonra ekstralar ekleyin','Yeterince söz dizimi bilmemek — daha fazla teori çalıştırın','Çok yavaş yazmak — hız için zorlayın','Çok fazla yorum kullanmak'], c:0, fb:'Kapsam yönetimi anahtar öğretim odağıdır; bitmiş küçük bir oyun bitmemiş büyük bir oyundan iyidir.'},
      {q:'Bir oyunun durumu (menü / oynanıyor / oyun bitti) genellikle nasıl yönetilir ve bu neden önemlidir?', opts:['draw() ve update()’in kontrol ettiği tek bir mode değişkeni — büyük bir oyunu düzenli tutar','Üç ayrı program dosyası','Ekranlar arasında Python’ı yeniden başlatarak','Rastgele sayılarla'], c:0, fb:'Tek bir durum değişkeni oyunun neyi gösterdiğini ve yaptığını yönlendirir, büyük bir projenin spagettiye dönüşmesini önler.'},
      {q:'char.collidelist(enemies) -1 döndürüyor. Bu ne anlama gelir?', opts:['Karakter listedeki hiçbir düşmanla çarpışmıyor','Bir hata oluştu','İndeks 1’deki düşmanla çarpıştı','enemies listesi boş'], c:0, fb:'collidelist vurulan ilk sprite’ın indeksini, hiç çarpışma olmadığında -1 döndürür.'},
      {q:'Bu projelerde bir 2B ızgara harita nasıl temsil edilir ve onu çizmek hangi önceki kavramı pekiştirir?', opts:['Bir listeler listesi (sayı satırları); onu çizmek iç içe döngüler kullanır','Tek bir uzun dize; dize dilimleme kullanır','Bir renk sözlüğü; anahtar aramaları kullanır','Bir fonksiyon; özyineleme kullanır'], c:0, fb:'Bir listeler listesi satırları ve sütunları modeller ve iç içe döngüler üzerinde yürür — 2. modüldeki iç içe döngülerin karşılığı.'},
      {q:'Bir öğrenci yenilen düşmanları listeden üzerinde döngü yaparken siliyor ve bazı düşmanlar atlanıyor. Neden nedir?', opts:['Döngü ortasında öğe kaldırmak kalan indeksleri kaydırır — bir kopya üzerinde döngü yapın veya topla-sonra-kaldır','collidelist bozuk','Düşmanların daha fazla sağlığa ihtiyacı var','pop yerine append kullanıldı'], c:0, fb:'Yineleme sırasında bir listeyi değiştirmek öğeleri atlar; güvenli desenler bir kopya üzerinde döngü yapmak veya kaldırmayı ertelemektir.'},
      {q:'Mezuniyet dersi sırasında bir eğitmen en çok neyi vurgulamalıdır?', opts:['Öğrencilerin bitirmesine, HUB’a yayımlamasına ve oyunlarını sunmasına yardım etmek','Mümkün olduğunca çok özellik sıkıştırmak','Kalite için oyunu sıfırdan yeniden yazmak','Zaman kazanmak için sunumu atlamak'], c:0, fb:'Tamamlama, yayımlama ve sunma temel mezuniyet çıktılarıdır — yalnızca zekice kodu değil, yayımlamayı övün.'}
    ]
  },
  {
    id:8, emoji:'🧑‍🏫', color:'#6366F1',
    title:'Harika Bir Ders Nasıl Yürütülür',
    desc:'Ayna/döngüsel ders yapısı, neden işe yaradığı ve her öğrenciyi nasıl aktif olarak dahil edeceğiniz.',
    obj:'Güçlü bir Kodland dersinin şeklinde ustalaşın: ısınmadan kapanışa sekiz aşamalı "ayna" yapısı, işe yaramasının bilişsel nedenleri ve her aşamada çocukları meşgul tutmak için somut teknikler. Bu, konudan bağımsız olarak NASIL öğrettiğinizle ilgilidir.',
    sections:[
      {t:'🗺️ Yapı neden içerik kadar önemlidir', cards:[
        {type:'text', h:'Harika bir dersin bir şekli vardır', b:'Python’ı mükemmel bilebilir ve yine de yapısı yoksa zayıf bir ders yürütebilirsiniz. Çocuklar <strong>öngörülebilir bir ritim</strong> içinde en iyi öğrenirler — her ders aynı tanıdık akışı izlediğinde daha hızlı yerleşir, daha fazlasını akılda tutar ve motive kalırlar. Kodland dersleri, "ayna" tasarımıyla kasıtlı bir sekiz aşamalı yapı kullanır: bir dersin <em>bittiği</em> şekil, <em>başladığı</em> şekli yansıtır.'},
        {type:'text', h:'Bu modülün eğittiği şey', b:'Kodlama modüllerinin aksine, bu modül materyalle değil, <strong>sunumunuzla</strong> ilgilidir. Sekiz aşamayı, her birinin neden var olduğunu ve — en önemlisi — öğrencileri pasif izlemek yerine nasıl aktif olarak katılımcı tutacağınızı öğreneceksiniz. Bu alışkanlıklar, konudan bağımsız olarak öğreteceğiniz her derse uygulanır.'},
        {type:'tip', txt:'Tutarlılık asıl meseledir. Öğrenciler ritminizi bir kez öğrendiklerinde, "şimdi ne oluyor?" sorusunu çözmek için enerji harcamayı bırakır ve bunun yerine öğrenmeye harcarlar. Sizin ve onlar için ikinci doğa hâline gelene kadar her seferinde aynı yapıyı yürütün.'}
      ]},
      {t:'🌅 Başlangıç: dört aşama', cards:[
        {type:'text', h:'1 · Isınma — enerji ve odağı harekete geçir', b:'Öğrencinin beynini "ders moduna" geçiren hafif bir şeyle açın: hızlı bir soru, küçük bir zorluk, eğlenceli bir şeye bakış. Amaç değerlendirme değil, enerji ve dikkattir. "Şimdi başlıyoruz" sinyali verir ve dikkati dağılmış bir çocuğu oturuma çeker.'},
        {type:'text', h:'2 · Önceki Ders Tekrarı — hatırla ve pekiştir', b:'Geçen sefer öğrenilenleri kısaca gözden geçirin. Geri getirme — öğrencinin yeniden dinlemek yerine <em>hatırlamasını</em> sağlamak — var olan en güçlü bellek araçlarından biridir. İki dakikalık bir "döngüler hakkında ne hatırlıyorsun?" yeniden açıklamanın yapabileceğinden daha fazlasını yapar.'},
        {type:'text', h:'3 · Ödev Kontrolü — ödevi birlikte gözden geçir', b:'Ödevi öğrenciyle <em>birlikte</em> inceleyin. Burası yanlış anlamaları yakaladığınız, çabayı övdüğünüz ve ödevin gerçekten önemli olduğunu gösterdiğiniz yerdir. Onu atlamak çocuklara ödevin isteğe bağlı olduğunu öğretir.'},
        {type:'text', h:'4 · Ders Hedefi — net amaçlar belirle', b:'Bugünün ne hakkında olduğunu açıkça belirtin: "bugün ok tuşlarına bastığınızda sprite’ımızı hareket ettireceğiz." Net bir hedef derse yön verir ve öğrenciye hedefleyeceği somut bir şey verir.'}
      ]},
      {t:'🏁 Son: ayna', cards:[
        {type:'hi', h:'Son, başlangıcı tersten yansıtır', b:'Kapanış dört aşaması, açılış aşamalarını tersten yankılar — ders başladığı gibi biter ve öğrencilere tatmin edici bir <strong>kapanış ve ritim</strong> hissi verir. Bu "döngüsel" şekil, bir dersin zaman dolduğunda sadece durmak yerine tamamlanmış gibi hissettiren şeydir.'},
        {type:'text', h:'1 · Ders Özeti — eğitmen + öğrenci temelli', b:'Ele alınanları özetleyin — ama sadece onlara söylemeyin. <em>Öğrencinin</em> de kendi kelimeleriyle özetlemesini sağlayın. Onların özeti gerçekten neyin oturduğunu ortaya çıkarır ve ikinci bir geri getirme anı işlevi görür.'},
        {type:'text', h:'2 · Ödev Verme — net talimatlar', b:'Ne yapılacağı ve nasıl yapılacağı konusunda kristal berraklığında talimatlarla ödev verin. Belirsiz ödev, yapılmayacak ödevdir. Bu, dersi açan Ödev Kontrolü ile eşleşir.'},
        {type:'text', h:'3 · Sonraki Ders Önizlemesi — merak uyandır', b:'Sıradakini önizleyin: "bir dahaki sefere, düşmanların seni kovalamasını sağlayacağız!" Bir kanca, oturumlar boyunca beklenti ve ileri momentum oluşturur — başlangıçtaki Ders Hedefi ile eşleşir.'},
        {type:'text', h:'4 · Kapanış — enerjiyle kapat', b:'Yüksek bir notla bitirin: öğrencinin bugün oluşturduğunu kutlayın, çabalarını takdir edin ve onları iyi hissederek gönderin. Son 30 saniye, tüm dersi nasıl hatırladıklarını şekillendirir.'}
      ]},
      {t:'💡 Bu yapı neden işe yarar', cards:[
        {type:'twocol', left:{h:'🧠 Bilişsel Kolaylık', items:['Öngörülebilir bir biçim zihinsel yükü azaltır','Öğrenciler ne bekleyeceklerini bilir','Odak, ders şeklini çözmeye değil, öğrenmeye gider']}, right:{h:'🔁 Akılda Tutma Artışı', items:['BAŞTA tekrar geçen seferi pekiştirir','SONDA özet bugünü pekiştirir','İki bellek kontrol noktası → çok daha iyi hatırlama']}},
        {type:'twocol', left:{h:'🎯 Net Amaç', items:['Hedefi önceden belirtmek motivasyon oluşturur','Sonraki dersi önizlemek momentum yaratır','Öğrenci neden burada olduğunu her zaman bilir']}, right:{h:'✅ Hesap Verebilirlik Döngüsü', items:['Başta ödev kontrolü...','...sonda ödev verme ile eşleşir','Öğrenciler dersler arası sürekliliği hisseder']}},
        {type:'good', txt:'Eşleşmeye dikkat edin: ısınma ↔ kapanış, tekrar ↔ özet, ödev kontrolü ↔ ödev verme, ders hedefi ↔ sonraki ders önizlemesi. Her açılış aşamasının bir kapanış partneri vardır. Bu simetri, yapıyı "döngüsel" ve akılda kalıcı yapan şeydir.'}
      ]},
      {t:'🙋 Her çocuğu dahil tutma', cards:[
        {type:'text', h:'Altın kural', b:'Eğitmenin konuştuğu ve öğrencinin dinlediği bir ders zayıf bir derstir. Göreviniz öğrenciye mümkün olduğunca çok <strong>yaptırmak, söyletmek ve düşündürmektir</strong>. Bu dört tekniği her aşamada sürekli kullanın.'},
        {type:'twocol', left:{h:'❓ Açık Uçlu Sorular', items:['"…olursa ne olacağını düşünüyorsun?" diye sorun','Akıl yürütmeyi tetiklemek için "Bunu nasıl çözerdin?" kullanın','Evet/hayır sorularından kaçının — gerçek düşünmeyi davet edin']}, right:{h:'🖥️ Ekran Paylaşımı', items:['Öğrencinin ekranını paylaşmasını sağlayın','Kendi çalışmasını size anlatmasına izin verin','Ödev kontrolü ve ısınmada harika — sahiplenme oluşturur']}},
        {type:'twocol', left:{h:'📖 Slayt Okuma', items:['Öğrencileri slayt metnini yüksek sesle okumaya davet edin','Kendi kelimeleriyle açıklamalarını isteyin','Anlamayı artırır ve onları aktif tutar']}, right:{h:'🌟 Övgü ve Teşvik', items:['Belirli olun: "O adımı açıklaman harikaydı!"','Yalnızca doğru cevapları değil, çabayı övün','Momentumu boyunca yüksek tutmak için enerji kullanın']}},
        {type:'warn', txt:'Pasif ders tuzağına dikkat: sürtünme olmadığı için akıcı hissettirir, ama öğrenci pek bir şey öğrenmiyordur. Öğrenci bir şey yapmadan veya söylemeden bir iki dakikadan fazla konuşuyorsanız, sözü ona geri verin.'}
      ]},
      {t:'🎯 Uygulamaya geçirme', cards:[
        {type:'hi', h:'Yapı sizi kısıtlamaz, özgürleştirir', b:'Yeni eğitmenler bazen sabit bir yapının dersleri robotik yapmasından korkar. Tam tersi doğrudur: aşamalar otomatik hâle geldiğinde "sıradaki ne?" konusunda endişelenmeyi bırakır ve tüm dikkatinizi öğrenciye — sorularına, hatalarına, enerjisine — ayırırsınız. Yapı, orada olmanızı sağlayan iskeledir.'},
        {type:'tip', txt:'İlk dersleriniz için sekiz aşamanın zihinsel (veya gerçek) bir kontrol listesini tutun. Birkaç hafta sonra ritim otomatik hâle gelir. Sonraki modülde, gerçek bir ders izleyecek ve bu aşamaların ve tekniklerin her birini iş başında göreceksiniz.'}
      ]}
    ],
    quiz:[
      {q:'Kodland ders yapısı neden bir "ayna" veya "döngüsel" biçim olarak tanımlanır?', opts:['Kapanış aşamaları açılış aşamalarını tersten yankılar, böylece ders başladığı gibi biter','Eğitmen ve öğrenci yarı yolda rolleri değiştirir','Slaytlar iki kez, önce ileri sonra geri gösterilir','Her ders önceki dersi tam olarak tekrarlar'], c:0, fb:'Son, başlangıcı tersten yansıtır (ısınma↔kapanış, tekrar↔özet vb.), kapanış ve ritim verir.'},
      {q:'Bir eğitmen zaman kazanmak için Önceki Ders Tekrarını atlıyor. Pedagojik olarak asıl bedel nedir?', opts:['Bir geri getirme anı kaybederler — öğrencilerin önceki öğrenmeyi hatırlamasını sağlamak onu pekiştirmenin en güçlü yollarından biridir','Hiçbir şey, hedef belirtildiği sürece','Ödev daha sonra verilemez','Ders zamanı aşacak'], c:0, fb:'Tekrar, güçlü bir bellek aracı olan geri getirmeyi zorlar. Yapının iki pekiştirme kontrol noktasından biridir.'},
      {q:'Hangi aşama çifti bir ders boyunca "hesap verebilirlik döngüsünü" oluşturur?', opts:['Başta Ödev Kontrolü ve sonda Ödev Verme','Isınma ve Ders Hedefi','Slayt Okuma ve Övgü','Ders Özeti ve Kapanış'], c:0, fb:'Başta ödevi kontrol etmek ve sonda vermek döngüyü kapatır ve dersler arası süreklilik oluşturur.'},
      {q:'Bir öğrenci bir evet/hayır sorusunu doğru cevaplıyor ama ilgisiz görünüyor. Daha iyi soru sorma hamlesi nedir?', opts:['"Bunu nasıl çözerdin?" veya "…olursa ne olur düşünüyorsun?" gibi açık uçlu bir soru sorun','Daha fazla evet/hayır sorusunu daha hızlı sorun','Tempoyu korumak için soruyu kendiniz cevaplayın','Hemen sonraki slayta geçin'], c:0, fb:'Açık uçlu sorular akıl yürütmeyi ve aktif düşünmeyi davet eder; evet/hayır soruları öğrencilerin savuşturmasına izin verir.'},
      {q:'Katılım ilkelerine göre en güçlü övgü biçimi nedir?', opts:['Çabayı ve süreci takdir eden belirli övgü, ör. "O adımı açıklaman harikaydı!"','Her cevaptan sonra genel bir "aferin"','Yalnızca kusursuz doğru cevapları övmek','Tüm övgüyü kapanışa saklamak'], c:0, fb:'Çabaya ve sürece bağlı belirli övgü, genel veya yalnızca sonuç odaklı övgüden daha motive edici ve inandırıcıdır.'},
      {q:'Bir eğitmen akıcı bir ders veriyor ama öğrenci izlerken konuşmanın çoğunu kendisi yaptı. Bu neden bir uyarı işaretidir?', opts:['Pasif bir ders sürtünmesiz hissettirir ama öğrenci pek bir şey öğrenmez — boyunca yapıyor, söylüyor ve düşünüyor olmalıdırlar','Materyal ele alındıysa sorun değildir','Yapının doğru izlendiği anlamına gelir','Akıcılık her zaman harika bir dersi gösterir'], c:0, fb:'Katılım amaçtır. Eğitmen öğrenci eylemi olmadan uzun süre konuşursa, öğrenme düşer — sözü öğrenciye geri verin.'}
    ]
  },
  {
    id:9, emoji:'🎥', color:'#0EA5E9', lesson:true,
    title:'Harika Bir Ders Örneği',
    desc:'Örnek bir Kodland Python dersini baştan sona, tam bir transkript ve öğretim notlarıyla izleyin.',
    obj:'Önceki modüldeki sekiz aşamalı ders yapısını ve katılım tekniklerini deneyimli bir eğitmen tarafından uygulanırken görün: tempo, soru sorma, modelleme, geri bildirim, teşvik ve sınıf akışı — tek bir gerçek, kaydedilmiş Kodland Python dersinde.',
    completeH:'Örnek dersi izlediniz mi?',
    completeBody:'Kaydı izledikten ve değerlendirme notlarını okuduktan sonra, eğitiminizi bitirmek ve Dijital Beceri Testinin kilidini açmak için bu modülü tamamlandı olarak işaretleyin.',
    completeBtn:'✓ İzlendi Olarak İşaretle',
    sections:[
      {t:'🎬 Kayıt', cards:[
        {type:'video', src:'https://www.youtube-nocookie.com/embed/eNZ6h1oycJI?rel=0', cap:'Gerçek bir Kodland Python dersi, baştan sona kaydedilmiş. Senkronize transkripti takip etmek için altyazıları (CC) açın.'},
        {type:'warn', txt:'Kayıt gerçek bir derstir ve yaklaşık 1 saat 48 dakika sürer. Dikkatinizi verebildiğinizde onu baştan sona izleyin — bu eğitimin ele aldığı her şey için en iyi tek referanstır.'}
      ]},
      {t:'🧭 Bu ders hakkında', cards:[
        {type:'text', h:'İzlediğiniz şey', b:'Bu, deneyimli bir eğitmen tarafından küçük bir öğrenci grubuyla yürütülen, gerçek, senaryosuz bir Kodland Python dersidir. Sınıf, önceki becerileri birleştiren bir proje üzerinde çalışır — <strong>fonksiyonlar ve sözlükler/listeler</strong> (bir film listesi projesi ve bir parola yöneticisi üzerine kurulu) — Veri ve Fonksiyonlar modüllerinde karşılaştığınız türden bir pekiştirme projesi.'},
        {type:'hi', h:'Az önce öğrendiğiniz yapıya dikkat edin', b:'İzlerken, <strong>Modül 8</strong>’den sekiz aşamayı iş başında yakalayın: karşılama ve ısınma, önceki derse köprü, ödev kontrolü ve başta net hedef — sonra, sonda, özet, bir dahaki sefere ödev ve sonraki dersin önizlemesi. Açılış ve kapanış, tam olarak "döngüsel" yapının anlattığı gibi birbirini yansıtır.'}
      ]},
      {t:'✅ Bu neden harika bir ders — KG değerlendirmesi', cards:[
        {type:'text', h:'KG kriterlerimize göre değerlendirildi', b:'Her Kodland dersi bir dizi KG kalite kriterine göre değerlendirilebilir. Bu ders <strong>hepsini geçti</strong>. Aşağıda, Modül 8’deki ders aşamalarına göre gruplanmış kanıtlar var — bunu, uygulamada "harika"nın neye benzediğinin bir kontrol listesi olarak kullanın.'},
        {type:'qa', h:'🌅 Dersi açma', items:[
          {k:'Isınma ve Karşılama', v:'Eğitmen öğrencileri selamladı ve Marvel’a nasıl olduğunu sordu.'},
          {k:'Ders Amacı', v:'Hedefi belirtti — önceki bilgilerini birleştiren bir proje üzerinde çalışmak.'},
          {k:'Önceki Ders Köprüsü', v:'Öğrencilerin daha önce bir parola yöneticisi oluşturup oluşturmadığını sordu; Marvel daha önceki bir film listesi projesini hatırladı.'},
          {k:'Ev Ödevi İncelemesi', v:'Önceki ödevi inceledi ve öğrencilerle tartıştı.'}
        ]},
        {type:'qa', h:'🧑‍🏫 Öğretim ve pratik', items:[
          {k:'Net Talimat Parçalama', v:'Talimatları küçük adımlarla verdi — ör. proje yapısını ve bireysel görevleri açıklamak.'},
          {k:'Bağımsız Çalışmadan Önce Modelleme', v:'Öğrencilerin kendi başlarına çalışmasına izin vermeden önce sözlük öğelerinin nasıl yazdırılacağını gösterdi.'},
          {k:'Pratik Aşaması Mevcut', v:'Öğrenciler net bir pratik aşamasında, kodlama projeleri üzerinde çalışarak yer aldı.'}
        ]},
        {type:'qa', h:'🙋 Katılım ve dahil olma', items:[
          {k:'Geniş Katılım', v:'Tek bir öğrenciye güvenmek yerine birden fazla öğrenciyi — Marvel, Gabriel ve Shriyansh’ı — dahil etti.'},
          {k:'Öğrenciye Doğrudan Hitap', v:'Öğrenme etkileşimleri sırasında öğrencilere adlarıyla hitap etti.'},
          {k:'Çoklu Öğrenci Öğrenme Katılımı', v:'Marvel, Gabriel ve Shriyansh’ın hepsi öğrenme etkileşimlerine katıldı.'},
          {k:'Tekrarlanan Öğrenci Etkileşimi', v:'Baştan sona farklı öğrencilerle tekrarlanan öğrenme etkileşimleri oluşturdu.'},
          {k:'Öğretimsel Açıdan Yararlı Geri Bildirim', v:'Öğrencilerin koduna geri bildirim vererek hatalarını düzeltmelerine yardım etti.'},
          {k:'Öğrenci Akıl Yürütmesi Ortaya Çıkarıldı', v:'Öğrencilerden fonksiyonlar ve listeler hakkındaki anlayışlarını açıklamalarını istedi ve ilgili yanıtlar aldı.'}
        ]},
        {type:'qa', h:'😊 Olumlu öğrenme iklimi', items:[
          {k:'Düşük Tekrarlanan Kafa Karışıklığı', v:'Tüm ders boyunca üçten az açık öğrenci kafa karışıklığı ifadesi.'},
          {k:'Açık Reddetme veya Sıkılma Yok', v:'Öğrencilerden açık reddetme, sıkılma veya memnuniyetsizlik yok.'}
        ]},
        {type:'qa', h:'🏁 Dersi kapatma (ayna)', items:[
          {k:'Kapanış Özeti veya İncelemesi', v:'Modül boyunca öğrenilen becerileri özetledi ve sonraki adımları tartıştı.'},
          {k:'Sonraki Ders için Ödev', v:'Ödev verdi — sınıfta başlanan projeyi bitirmek.'},
          {k:'Sonraki Ders Sürekliliği', v:'Öğrencilere sonraki dersin doğrusal algoritmaları ele alacağını söyledi.'}
        ]},
        {type:'good', txt:'Simetriye dikkat edin: ders bir karşılama, geçen sefere köprü, bir ödev kontrolü ve net bir hedefle açılır — ve bir özet, bir dahaki sefere ödev ve sıradakinin önizlemesiyle kapanır. Bu ayna, tam olarak Modül 8’deki yapıdır ve bu dersin bu kadar iyi puan almasının büyük bir nedenidir.'}
      ]}
    ]
  }
]
};
