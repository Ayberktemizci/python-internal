/* ============================================================================
   Kodland Python Tutor Training — CONTENT (English, source of truth)
   To create another language: copy this file to content-XX.js and translate
   every STRING VALUE below. Do NOT change keys, structure, HTML tags, CSS
   classes, or Python code — inside code blocks translate ONLY the # comments.
   Set code/htmlLang/title, set dst.formUrl:'' and translate dst.placeholderNote.
   ============================================================================ */
window.CONTENT = {
code: 'id',
htmlLang: 'id',
title: 'Pelatihan Tutor Python — Kodland',
ui: {
  logoSub: 'Pelatihan Python',
  changeRegion: '🌐 Wilayah',
  heroEyebrow: '🐍 Program Pelatihan Tutor',
  heroTitle: 'Bersiaplah untuk mengajar<br><span class="h-pill">Python</span><br>kepada anak-anak',
  heroSub: "Kerjakan setiap modul dan lulus setiap kuis untuk menyelesaikan persiapan tutor Anda. Raih 70%+ pada kuis modul untuk membuka modul berikutnya — tidak ada cara untuk melewati.",
  progLabel: 'modul selesai',
  modulesLabel: 'Modul Anda',
  allDone: '🏆 Semua selesai!',
  completeWord: 'selesai',
  backModules: '← Modul',
  exitQuiz: '← Keluar Kuis',
  backDashboard: '← Dasbor',
  moduleWord: 'Modul',
  ofWord: 'dari',
  objectiveWord: 'Tujuan',
  badgePassed: '✓ Lulus',
  badgeLocked: '🔒 Terkunci',
  badgeStart: 'Mulai →',
  badgeWatched: '✓ Ditonton',
  badgeWatch: '▶ Tonton',
  tagCompleted: 'Selesai',
  tagExampleLesson: 'Contoh pelajaran',
  completeModuleWord: 'Selesaikan modul',
  scoreWord: 'Skor',
  questionsWord: 'pertanyaan',
  takeQuiz: '📝 Kerjakan Kuis →',
  retakeQuiz: '🔄 Ulangi Kuis',
  markComplete: 'Tandai Selesai',
  doneCompleted: '✓ Selesai',
  moduleComplete: 'Modul Selesai',
  questionWord: 'Pertanyaan',
  correctPrefix: '✅ Benar! ',
  notQuitePrefix: '❌ Belum tepat. ',
  seeResults: 'Lihat Hasil →',
  nextBtn: 'Berikutnya →',
  modulePassed: 'Modul Lulus!',
  keepReviewing: 'Terus Tinjau',
  scoreLine: 'Anda menjawab benar {s}/{t}.',
  passMsg: ' Modul berikutnya terbuka!',
  failMsg: ' Anda perlu 70% untuk lulus. Tinjau dan coba lagi!',
  reviewModuleWord: '📖 Tinjau Modul',
  startModuleWord: 'Mulai Modul',
  watchModuleWord: '▶ Tonton Modul',
  viewCertificate: '🏆 Lihat Sertifikat',
  trainingComplete: 'Pelatihan Selesai!',
  completeSub: "Anda telah menyelesaikan setiap modul — selamat! Anda siap untuk Digital Skill Test.",
  certLabel: 'Sertifikat Penyelesaian',
  certTitle: 'Pelatihan Tutor Python',
  certLine: 'Kodland · Seluruh {n} modul · Rata-rata skor kuis: {avg}%',
  takeDST: '🎯 Kerjakan Digital Skill Test →',
  backDashboard2: '← Kembali ke Dasbor',
  dstCardStage: 'Tahap Akhir',
  dstCardTitle: 'Digital Skill Test',
  dstCardDesc: 'Penilaian praktik akhir, diselesaikan setelah setiap modul.',
  dstReady: 'Siap',
  dstCardTag: 'Penilaian praktik',
  videoFallback: 'Peramban Anda tidak dapat memutar video ini.',
  videoDownload: 'Unduh video',
  videoPhTitle: 'Rekaman segera hadir',
  videoPhBody: 'Video pelajaran model akan muncul di sini.'
},
dst: {
  formUrl: '',
  placeholderNote: 'Formulir pengiriman untuk wilayah Anda akan segera ditambahkan.',
  html: `<div class="dst-body">
    <div class="dst-intro">
      <div class="dst-badge">🏆 Digital Skill Test · 2025</div>
      <div class="dst-h1">Tes untuk Tutor Python</div>
      <p class="dst-sub">Dalam tugas ini, Anda dapat menunjukkan pengetahuan Python Anda dan kemampuan Anda untuk membantu siswa saat menulis proyek — serta ketekunan, kejujuran, dan kesediaan Anda untuk mengikuti panduan yang telah ditetapkan. Tugas Anda adalah membuat sebuah game yang memenuhi persyaratan di bawah ini. Anda tidak perlu proyek pihak ketiga yang super keren — Anda perlu proyek yang cocok untuk tugas spesifik ini!</p>
    </div>

    <div class="dst-stage-header">
      <span class="dst-stage-pill">Tugas</span>
      <span class="dst-stage-title">🎮 Buat sebuah game</span>
    </div>

    <div class="dst-task">
      <div class="dst-task-num">1</div>
      <div class="dst-task-body"><p>Folder proyek harus menyertakan <code>readme.txt</code> yang mencantumkan pustaka yang digunakan dan petunjuk cara menjalankan proyek.</p></div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">2</div>
      <div class="dst-task-body"><p>Kode harus <strong>sepenuhnya orisinal dan ditulis secara mandiri.</strong> (Visual tidak perlu orisinal.)</p></div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">3</div>
      <div class="dst-task-body"><p>Hanya modul berikut yang boleh digunakan:</p>
        <ul>
          <li><strong>Pygame Zero</strong></li>
          <li><strong>math</strong></li>
          <li><strong>random</strong></li>
          <li>Pustaka lain <strong>TIDAK DIPERBOLEHKAN!</strong></li>
          <li>Pustaka <strong>Pygame</strong> <strong>TIDAK BOLEH</strong> digunakan.</li>
          <li><em>Pengecualian:</em> Anda boleh mengimpor kelas <code>Rect</code> dari Pygame.</li>
        </ul>
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">4</div>
      <div class="dst-task-body"><p>Anda hanya boleh membuat game dari salah satu jenis berikut:</p>
        <ul>
          <li><strong>Roguelike</strong> (mis. The Binding of Isaac, Hades, Slay the Spire)</li>
          <li><strong>Platformer</strong> (mis. Super Mario Bros., Sonic the Hedgehog)</li>
          <li><strong>Runner</strong> (mis. Subway Surfers, Temple Run)</li>
        </ul>
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">5</div>
      <div class="dst-task-body"><p>Game harus memiliki <strong>menu utama dengan tombol yang dapat diklik:</strong></p>
        <ul>
          <li>Mulai Game</li>
          <li>Nyalakan/Matikan Musik dan Suara</li>
          <li>Keluar</li>
        </ul>
        <img class="dst-img" src="assets/dst/image1.png" alt="Contoh layar game dengan tombol menu yang dapat diklik" loading="lazy">
        <img class="dst-img" src="assets/dst/image5.png" alt="Contoh menu utama: Play, Sound On/Off, Exit" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">6</div>
      <div class="dst-task-body"><p>Game harus memiliki setidaknya <strong>dua musuh berbeda</strong> yang berbahaya bagi sang pahlawan.</p>
        <img class="dst-img" src="assets/dst/image3.gif" alt="Peta roguelike dengan beberapa musuh berbeda" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">7</div>
      <div class="dst-task-body"><p>Musuh harus <strong>bergerak di dalam area mereka sendiri.</strong></p>
        <img class="dst-img" src="assets/dst/image4.gif" alt="Musuh bergerak, masing-masing terbatas di ruangannya sendiri" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">8</div>
      <div class="dst-task-body"><p>Game harus memiliki <strong>mekanik penyelesaian game yang logis tanpa bug</strong> — baik untuk menang maupun kalah.</p>
        <img class="dst-img" src="assets/dst/image7.gif" alt="Contoh gameplay yang berujung pada hasil menang/kalah" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">9</div>
      <div class="dst-task-body"><p>Baik karakter pemain maupun musuh harus memiliki <strong>animasi sprite untuk bergerak</strong> (misalnya, gerakan kaki saat berjalan).</p>
        <img class="dst-img" src="assets/dst/image10.gif" alt="Karakter berlari dengan animasi gerakan kaki" loading="lazy">
        <div class="dst-imgrow"><img class="dst-img pix" src="assets/dst/image11.gif" alt="Karakter beranimasi bergerak melintasi rumput"></div>
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">10</div>
      <div class="dst-task-body"><p>Game harus memiliki <strong>musik latar dan suara game</strong> (suara ketika karakter menyerang atau bertabrakan dengan musuh, suara koin saat mengumpulkan hadiah, dll.).</p><p style="margin-top:6px">Contoh sumber suara: <a class="dst-inline-link" href="https://mixkit.co" target="_blank" rel="noopener noreferrer">mixkit.co</a></p></div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">11</div>
      <div class="dst-task-body"><p>Baik karakter pemain maupun musuh harus memiliki <strong>animasi diam</strong> (misalnya: bernapas, melihat sekeliling, menggerakkan sirip, mengibaskan ekor, dll.).</p><p style="margin-top:6px">Contoh sumber visual: <a class="dst-inline-link" href="https://kenney.nl" target="_blank" rel="noopener noreferrer">Kenney.nl</a></p>
        <div class="dst-imgrow">
          <img class="dst-img pix" src="assets/dst/image9.gif" alt="Animasi karakter diam">
          <img class="dst-img pix" src="assets/dst/image6.gif" alt="Animasi karakter diam di rumput">
          <img class="dst-img pix" src="assets/dst/image2.gif" alt="Adegan diam dengan musuh">
        </div>
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">12</div>
      <div class="dst-task-body"><p>Anda harus menulis <strong>kelas Anda sendiri</strong> untuk mengimplementasikan gerakan karakter dan animasi sprite. <strong>(Pemrograman Berorientasi Objek)</strong></p>
        <img class="dst-img" src="assets/dst/image8.png" alt="Contoh kelas buatan sendiri yang mengimplementasikan gerakan" loading="lazy">
      </div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">13</div>
      <div class="dst-task-body"><p>Anda harus menggunakan <strong>nama bahasa Inggris yang jelas dan bermakna</strong> untuk variabel, kelas, dan fungsi — ikuti aturan <strong>PEP 8</strong>.</p></div>
    </div>

    <div class="dst-stage-header">
      <span class="dst-stage-pill">Catatan</span>
      <span class="dst-stage-title">📌 Definisi & panduan</span>
    </div>
    <div class="card">
      <ul style="padding-left:17px">
        <li style="margin-bottom:6px">Game <strong>roguelike</strong> adalah game tampilan atas (top-down) di mana semua objek dan karakter ditempatkan pada kisi dunia game. Perpindahan antar sel harus halus dan beranimasi.</li>
        <li style="margin-bottom:6px">Game <strong>point-and-click adventure</strong> menawarkan perspektif atas (top-down) yang serupa dengan game roguelike, tetapi gerakan karakter tidak dibatasi pada kisi.</li>
        <li style="margin-bottom:6px">Sebuah <strong>platformer</strong> adalah game tampilan samping di mana karakter dapat melompat melintasi platform.</li>
        <li><strong>Animasi sprite</strong> berarti menggunakan urutan gambar yang berubah secara terus-menerus dan siklis untuk menganimasikan karakter. Hanya berganti antara gambar menghadap kiri dan gambar menghadap kanan <strong>BUKAN</strong> animasi sprite. 🧐</li>
      </ul>
    </div>
    <div class="callout ct"><span class="ci">💡</span><span>Anda tidak perlu kode yang terlalu rumit atau panjang — biasanya <strong>100–200 baris bermakna</strong> sudah cukup untuk menyelesaikan tugas dengan baik.</span></div>
    <div class="callout cg"><span class="ci">✅</span><span>Kompleksitas proyek ini hanya sekitar <strong>30% lebih tinggi</strong> daripada proyek akhir siswa kami. Jika seorang tutor dapat membimbing siswa melalui proyek mereka, tingkat ini sangat dapat dicapai — kami berharap Anda menyelesaikannya dengan sukses! 👍</span></div>

    <div class="dst-stage-header">
      <span class="dst-stage-pill">Penting</span>
      <span class="dst-stage-title">⚠️ Harap baca dengan saksama</span>
    </div>
    <div class="callout cw"><span class="ci">⚠️</span><span>Jika Anda melanggar beberapa persyaratan utama sekaligus, mungkin <strong>tidak ada kesempatan untuk merevisi</strong> proyek.</span></div>
    <div class="callout cw"><span class="ci">⚠️</span><span>Proyek <strong>TIDAK BOLEH</strong> disalin sepenuhnya atau sebagian dari internet — melakukannya akan langsung menimbulkan keraguan tentang kejujuran dan profesionalisme Anda.</span></div>
    <div class="callout cw"><span class="ci">🚫</span><span>Penggunaan <strong>AI merupakan alasan penolakan langsung.</strong></span></div>

    <div class="dst-stage-header">
      <span class="dst-stage-pill">Pengiriman</span>
      <span class="dst-stage-title">📤 Cara mengirim</span>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">1</div>
      <div class="dst-task-body"><p>Unggah proyek yang sudah selesai ke platform penyimpanan cloud (<strong>Google Drive atau GitHub</strong>) dan pastikan untuk <strong>memberikan akses</strong> ke folder proyek. Harap <strong>JANGAN</strong> menggunakan format file terkompresi!</p></div>
    </div>
    <div class="dst-task">
      <div class="dst-task-num">2</div>
      <div class="dst-task-body"><p>Selesaikan skill test di bawah ini dan <strong>tempelkan tautan proyek Anda</strong> sebagai jawaban untuk pertanyaan terakhir.</p></div>
    </div>
    <div class="dst-submit-card">
      <h3>🔗 Siap mengirim?</h3>
      <p>Buka formulir skill test, selesaikan, dan tempelkan tautan proyek Anda sebagai jawaban terakhir.</p>
      <a class="dst-link-btn" id="dst-form-btn" href="#">Buka Formulir Skill Test →</a>
    </div>

    <p style="text-align:center;color:var(--text-muted);font-size:14px;margin-top:28px">Semoga berhasil! 🍀</p>
</div>`
},
modules: [
  {
    id:1, emoji:'🐍', color:'#AEDD2E',
    title:'Dasar-Dasar Python',
    desc:'print, variabel, input, tipe data, dan konversi tipe — program pertama seorang anak.',
    obj:'Bangun pemahaman tingkat pengajaran tentang dasar-dasar paling mendasar: keluaran, variabel, input, tipe data inti, dan konversi di antaranya. Pada akhirnya Anda harus mampu menjelaskan masing-masing dengan tiga cara berbeda dan memprediksi persis kesalahan apa yang akan dihadapi pemula.',
    sections:[
      {t:'🗺️ Di mana ini berada dalam kursus', cards:[
        {type:'text', h:'Kontak pertama dengan kode', b:'Ini adalah modul di mana seorang anak menjalankan program pertamanya. Tidak ada yang sulit bagi Anda di sini — tantangannya sepenuhnya bersifat pedagogis. Alur kursus disengaja: <strong>keluaran</strong> (<code>print</code>) agar mereka langsung melihat hasil → <strong>variabel</strong> agar program dapat mengingat sesuatu → <strong>input</strong> agar program dapat merespons → <strong>tipe data</strong> agar mereka memahami jenis nilai yang mereka pegang → <strong>konversi</strong> agar input dapat digunakan dalam matematika. Setiap modul berikutnya — perulangan, list, fungsi, bahkan game — berdiri di atas kelima ide ini.'},
        {type:'text', h:'Tugas nyata Anda di pelajaran 1', b:'Tampilkan program yang berfungsi dan dipersonalisasi di layar anak dalam beberapa menit pertama. Keberhasilan awal yang terlihat itulah yang membuat anak berusia 9 tahun ingin kembali. Teori datang <em>setelah</em> kesenangan melihat nama mereka sendiri tercetak, tidak pernah sebelumnya.'},
        {type:'tip', txt:'Aturan tempo: satu ide baru, lalu segera jalankan sesuatu. Pemula tidak dapat memegang tiga konsep abstrak di kepala mereka sebelum melihat satu pun berfungsi. Kode → jalankan → reaksi → ide berikutnya.'}
      ]},
      {t:'🖨️ print() — keluaran', cards:[
        {type:'text', h:'Apa yang diajarkan', b:'<code>print()</code> menampilkan apa pun yang ada di dalam tanda kurung. Teks membutuhkan tanda kutip; angka tidak. Anda dapat mencetak beberapa hal sekaligus dengan memisahkannya dengan koma, dan Python secara otomatis menambahkan spasi di antaranya.'},
        {type:'code', lbl:'print basics', code:`<span class="cf">print</span>(<span class="cs">"Hello, world!"</span>)
<span class="cf">print</span>(<span class="cn">2024</span>)
<span class="cf">print</span>(<span class="cs">"You are"</span>, <span class="cn">9</span>, <span class="cs">"years old"</span>)
<span class="cc"># Keluaran: You are 9 years old</span>`},
        {type:'warn', txt:'Kesalahan pertama nomor 1 adalah lupa tanda kutip: <code>print(Hello)</code> membuat Python mencari <em>variabel</em> bernama Hello dan melempar <code>NameError</code>. Ajarkan aturannya dengan lantang: <strong>"teks selalu memakai tanda kutip."</strong>'}
      ]},
      {t:'📦 Variabel — memori', cards:[
        {type:'text', h:'Apa yang diajarkan', b:'Sebuah variabel menyimpan satu nilai di bawah sebuah nama sehingga Anda dapat menggunakannya kembali nanti. Nama berada di sebelah kiri <code>=</code>, nilai di sebelah kanan. Membaca baris dari kanan ke kiri membantu: "ambil nilai 9, dan masukkan ke dalam kotak bernama age."'},
        {type:'code', lbl:'variables', code:`name = <span class="cs">"Mia"</span>
age = <span class="cn">9</span>
<span class="cf">print</span>(<span class="cs">"Hi"</span>, name)
age = age <span class="ck">+</span> <span class="cn">1</span>   <span class="cc"># kotak dapat diperbarui</span>
<span class="cf">print</span>(<span class="cs">"Next year:"</span>, age)`},
        {type:'hi', h:'Metafora yang berhasil', b:'"Sebuah variabel adalah kotak berlabel yang menyimpan satu hal. Masukkan sesuatu yang baru dan hal yang lama hilang." Ini menjelaskan penetapan ulang dengan sempurna — anak-anak langsung memahami bahwa <code>age = age + 1</code> mengosongkan kotak dan mengisinya kembali.'},
        {type:'warn', txt:'<code>=</code> bukanlah "sama dengan" dalam arti matematika — artinya "masukkan sisi kanan ke sisi kiri." Mengatakan "sama dengan" dengan lantang menyebabkan kebingungan nyata nanti dengan <code>==</code>. Katakan "<strong>menjadi</strong>" atau "<strong>diisi</strong>": "age menjadi 10."'}
      ]},
      {t:'⌨️ input() — dan mengapa semuanya adalah string', cards:[
        {type:'text', h:'Ide paling penting dalam modul ini', b:'<code>input()</code> menjeda program, menunggu pengguna mengetik, dan mengembalikan apa yang mereka ketik <strong>sebagai string — selalu, bahkan jika mereka mengetik angka.</strong> Fakta ini adalah sumber bug pemula yang lebih banyak daripada hal lain mana pun di seluruh kursus, jadi ini layak mendapat waktu yang cukup.'},
        {type:'code', lbl:'the classic bug, then the fix', code:`age = <span class="cf">input</span>(<span class="cs">"How old are you? "</span>)
<span class="cf">print</span>(age <span class="ck">+</span> <span class="cn">1</span>)
<span class="cc"># TypeError: can only concatenate str ... not int</span>

<span class="cc"># Perbaikan: ubah teks menjadi angka</span>
age = <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"How old are you? "</span>))
<span class="cf">print</span>(<span class="cs">"Next year you’ll be"</span>, age <span class="ck">+</span> <span class="cn">1</span>)`},
        {type:'good', txt:'Ajarkan sebagai sebuah cerita: "input selalu memberi Anda kata-kata, tidak pernah angka. Jika Anda ingin melakukan matematika, Anda harus terlebih dahulu mengubah kata-kata menjadi angka dengan <code>int()</code>." Tunjukkan kerusakannya dengan sengaja, baca kesalahannya bersama-sama, lalu perbaiki. Urutan bug-lalu-perbaikan lebih mudah diingat daripada aturan yang diberikan di awal.'}
      ]},
      {t:'🔢 Tipe data & konversi', cards:[
        {type:'text', h:'Tiga tipe yang pertama ditemui anak-anak', b:'<strong>str</strong> (teks dalam tanda kutip), <strong>int</strong> (bilangan bulat), dan <strong>float</strong> (desimal). <code>type(x)</code> mengungkap tipe mana sebuah nilai — buka terus dalam demo dan periksa secara langsung. Fungsi konversi berpindah di antaranya: <code>int("5")</code> → 5, <code>str(5)</code> → "5", <code>float("3.2")</code> → 3.2.'},
        {type:'code', lbl:'type() and conversions', code:`<span class="cf">print</span>(<span class="cf">type</span>(<span class="cs">"hi"</span>))    <span class="cc"># &lt;class 'str'&gt;</span>
<span class="cf">print</span>(<span class="cf">type</span>(<span class="cn">7</span>))       <span class="cc"># &lt;class 'int'&gt;</span>
<span class="cf">print</span>(<span class="cf">type</span>(<span class="cn">3.5</span>))     <span class="cc"># &lt;class 'float'&gt;</span>

score = <span class="cf">int</span>(<span class="cs">"10"</span>)        <span class="cc"># "10" -&gt; 10</span>
label = <span class="cs">"Score: "</span> <span class="ck">+</span> <span class="cf">str</span>(score)  <span class="cc"># angka -&gt; teks untuk digabung</span>`},
        {type:'twocol', left:{h:'String + Angka = masalah', items:['<code>"5" + 3</code> &rarr; <code>TypeError</code>','<code>"5" + "3"</code> &rarr; <code>"53"</code> (tergabung!)','<code>5 + 3</code> &rarr; <code>8</code> (matematika sungguhan)']}, right:{h:'Cara mengajarkan perbedaannya', items:['Jalankan ketiganya langsung — biarkan mereka menebak','"+ pada teks merekatkan; + pada angka menjumlahkan"','Gunakan <code>type()</code> untuk mengungkap alasannya']}}
      ]},
      {t:'🧒 Kesalahpahaman yang akan Anda temui', cards:[
        {type:'twocol', left:{h:'Apa yang salah dipahami pemula', items:['Lupa tanda kutip di sekitar teks','Memperlakukan <code>input()</code> sebagai angka','Mencampur <code>=</code> dan <code>==</code>','Salah ketik pada nama variabel (<code>naem</code>)','Mengira sebuah variabel "menampilkan" dirinya tanpa <code>print</code>']}, right:{h:'Langkah antisipatif Anda', items:['"Teks memakai tanda kutip"','"input selalu memberi kata-kata"','"satu = menyimpan, dua == bertanya"','Baca <code>NameError</code> bersama-sama','"Menyimpan itu senyap; hanya print yang menampilkan"']}},
        {type:'warn', txt:'Ketika muncul kesalahan, tahan diri untuk memperbaikinya sendiri. Baca baris terakhir traceback <em>bersama</em> siswa dan biarkan mereka menemukan penyebabnya. Membangun kemandirian membaca kesalahan sejak dini adalah salah satu hal yang paling berdampak yang dilakukan seorang tutor.'}
      ]},
      {t:'🎯 Menyatukannya', cards:[
        {type:'hi', h:'Proyek pertama yang mereka banggakan', b:'Kalkulator kecil "About Me" atau usia-di-2050 menggunakan setiap ide dalam modul ini: input, konversi, sebuah variabel, aritmetika, dan print. Biarkan mereka mempersonalisasinya (nama mereka, game favorit mereka). Kepemilikan mengubah latihan menjadi sesuatu yang mereka tangkap layarnya dan tunjukkan ke orang tua.'},
        {type:'code', lbl:'mini-project: age in 2050', code:`name = <span class="cf">input</span>(<span class="cs">"Your name? "</span>)
age = <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"Your age? "</span>))
future = age <span class="ck">+</span> (<span class="cn">2050</span> <span class="ck">-</span> <span class="cn">2024</span>)
<span class="cf">print</span>(name <span class="ck">+</span> <span class="cs">", in 2050 you’ll be "</span> <span class="ck">+</span> <span class="cf">str</span>(future))`},
        {type:'good', txt:'Perhatikan bahwa mini-proyek ini membutuhkan <code>int()</code> saat masuk dan <code>str()</code> saat keluar — alasan yang sempurna dan alami untuk keberadaan konversi. Pilih contoh di mana konsepnya benar-benar dibutuhkan daripada didemonstrasikan secara terpisah.'}
      ]}
    ],
    quiz:[
      {q:'Seorang siswa menulis age = input("Age: ") lalu age + 1 dan mendapatkan TypeError. Apa perbaikan paling bersih dan ide di baliknya?', opts:['Bungkus input dengan int(): age = int(input(...)) — input selalu mengembalikan string','Mulai ulang Python; interpreter menjadi bingung','Ganti nama variabel untuk menghindari bentrok','Hapus + 1 karena Anda tidak bisa menambah input'], c:0, fb:'input() selalu mengembalikan string, jadi harus dikonversi dengan int() sebelum aritmetika. Ini adalah ide inti modul.'},
      {q:'Penjelasan "variabel" mana yang terbaik untuk anak berusia 9 tahun?', opts:['Kotak berlabel yang menyimpan satu nilai yang dapat Anda gunakan kembali dan timpa','Fungsi yang mengembalikan data tersimpan','Kata kunci cadangan di Python','Perulangan yang mengingat angka'], c:0, fb:'Metafora "kotak berlabel" bersifat konkret dan juga menjelaskan penetapan ulang dengan rapi.'},
      {q:'Mengapa berisiko membaca simbol "=" dengan lantang sebagai "sama dengan" kepada pemula?', opts:['Ini mendorong kebingungan dengan ==, yang sebenarnya berarti "sama dengan"','"Sama dengan" secara tata bahasa salah','Python tidak menggunakan simbol =','Ini membuat pelajaran lebih panjang'], c:0, fb:'Mengatakan "menjadi" atau "diisi" membuat penetapan (=) tetap berbeda dari perbandingan (==), mencegah kekeliruan umum di kemudian hari.'},
      {q:'Seorang anak menjalankan programnya dan "tidak ada yang muncul", meskipun mereka menyimpan nilai dalam variabel. Penyebab paling mungkin?', opts:['Mereka menyimpan nilai tetapi tidak pernah memanggil print() untuk menampilkannya','Nama variabel terlalu panjang','Python hanya mencetak angka','Mereka perlu mengimpor modul tampilan'], c:0, fb:'Menyimpan nilai itu senyap; hanya print() yang menampilkan sesuatu di layar. "Menyimpan itu senyap, hanya print yang menampilkan."'},
      {q:'Apa keluaran dari print("5" + "3"), dan mengapa hal ini baik untuk didemonstrasikan secara langsung?', opts:['"53" — + menggabungkan string, kejutan yang berkesan yang mendorong kesadaran tipe','8 — Python menjumlahkan angka','Kesalahan — Anda tidak bisa menggunakan + pada string','"5 3" — Python menambahkan spasi'], c:0, fb:'Kedua operan adalah string, jadi + menggabungkan menjadi "53". Kejutannya lebih melekat daripada sekadar menyatakan aturannya.'},
      {q:'Seorang siswa mengalami NameError: name ‘naem’ is not defined. Respons pengajaran terbaik adalah:', opts:['Baca baris kesalahan bersama-sama dan biarkan mereka menemukan salah ketiknya','Perbaiki secara diam-diam agar pelajaran terus berjalan','Katakan pada mereka bahwa variabel tidak dapat diandalkan','Beralih ke contoh lain'], c:0, fb:'Melatih siswa membaca traceback membangun kemandirian debugging — tujuan jangka panjang yang inti.'}
    ]
  },
  {
    id:2, emoji:'🔀', color:'#F03D9E',
    title:'Alur Kontrol: Kondisi & Perulangan',
    desc:'if / elif / else, operator perbandingan dan logika, ditambah perulangan while dan for serta penyarangan.',
    obj:'Ajarkan program untuk membuat keputusan dan mengulang. Anda harus mampu menjelaskan indentasi sebagai sintaks, memilih for vs while secara spontan, menelusuri perulangan secara manual, dan mendiagnosis kesalahan perulangan tak berujung serta off-by-one sebelum terjadi.',
    sections:[
      {t:'🗺️ Di mana ini berada dalam kursus', cards:[
        {type:'text', h:'Dua mesin dari setiap program', b:'Sampai sekarang program berjalan lurus ke bawah, dari atas ke bawah, sekali. Modul ini menambahkan dua hal yang membuat kode benar-benar <em>melakukan</em> sesuatu yang menarik: <strong>keputusan</strong> (<code>if/elif/else</code>) agar program dapat bercabang, dan <strong>pengulangan</strong> (<code>while</code>, <code>for</code>) agar dapat melakukan pekerjaan berkali-kali tanpa salin-tempel. Digabungkan, keduanya menghasilkan "algoritma" nyata pertama — dan keduanya menggerakkan setiap game berikutnya dalam kursus.'},
        {type:'warn', txt:'Di Python, indentasi <strong>adalah</strong> sintaks, bukan penataan. Spasi di bawah <code>if</code> atau <code>for</code> itulah yang memberi tahu Python "ini termasuk di dalam." Kira-kira setengah dari semua bug pemula dalam modul ini adalah tanda titik dua yang hilang atau indentasi yang salah — sediakan waktu untuk itu secara eksplisit.'}
      ]},
      {t:'🔁 Kondisi: if / elif / else', cards:[
        {type:'text', h:'Apa yang diajarkan', b:'<code>if</code> menjalankan blok hanya ketika kondisinya <code>True</code>. <code>elif</code> ("else if") diperiksa <em>hanya</em> jika setiap kondisi di atasnya bernilai False. <code>else</code> adalah penangkap semua ketika tidak ada yang cocok. Python memeriksanya dari atas ke bawah dan berhenti pada kecocokan pertama — urutan penting.'},
        {type:'code', lbl:'branching', code:`score = <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"Your score: "</span>))
<span class="ck">if</span> score <span class="ck">&gt;=</span> <span class="cn">90</span>:
    <span class="cf">print</span>(<span class="cs">"Excellent!"</span>)
<span class="ck">elif</span> score <span class="ck">&gt;=</span> <span class="cn">50</span>:
    <span class="cf">print</span>(<span class="cs">"You passed"</span>)
<span class="ck">else</span>:
    <span class="cf">print</span>(<span class="cs">"Try again"</span>)`},
        {type:'text', h:'Operator perbandingan & logika', b:'Perbandingan mengembalikan True/False: <code>==</code> (sama), <code>!=</code> (tidak sama), <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>. Gabungkan dengan <code>and</code> (keduanya harus benar) dan <code>or</code> (setidaknya satu benar): <code>if age &gt;= 6 and age &lt;= 12:</code>.'},
        {type:'tip', txt:'Jebakan favorit: mengurutkan cabang <code>elif</code> dengan salah. Jika Anda memeriksa <code>score &gt;= 50</code> sebelum <code>score &gt;= 90</code>, nilai 95 cocok dengan "passed" terlebih dahulu dan tidak pernah mencapai "Excellent." Ajarkan siswa untuk mengurutkan kondisi dari yang paling spesifik ke yang paling umum.'}
      ]},
      {t:'➰ Perulangan for & range()', cards:[
        {type:'text', h:'Apa yang diajarkan', b:'Perulangan <code>for</code> mengulang sejumlah kali yang diketahui. <code>range(n)</code> menghasilkan angka <strong>0 hingga tetapi tidak termasuk n</strong> — jadi <code>range(5)</code> memberi 0,1,2,3,4 (lima angka, mulai dari nol). <code>range(1, 6)</code> memberi 1–5, dan <code>range(0, 10, 2)</code> menghitung dalam langkah 2.'},
        {type:'code', lbl:'for + range', code:`<span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">5</span>):
    <span class="cf">print</span>(<span class="cs">"Step"</span>, i)        <span class="cc"># 0,1,2,3,4</span>

<span class="ck">for</span> n <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">5</span>, <span class="cn">0</span>, <span class="ck">-</span><span class="cn">1</span>):
    <span class="cf">print</span>(<span class="cs">"Countdown:"</span>, n) <span class="cc"># 5,4,3,2,1</span>`},
        {type:'warn', txt:'Kebingungan off-by-one bersifat universal: siswa mengharapkan <code>range(5)</code> mencetak 1–5. Tunjukkan sekali, perlahan, dan tuliskan angka yang dihasilkan di papan: 0,1,2,3,4. "Mulai dari nol, berhenti <em>sebelum</em> angkanya."'}
      ]},
      {t:'🔄 Perulangan while', cards:[
        {type:'text', h:'Apa yang diajarkan', b:'Perulangan <code>while</code> mengulang <em>selama</em> kondisinya tetap True — gunakan ketika Anda tidak tahu jumlahnya terlebih dahulu ("terus bertanya sampai kata sandinya benar"). Sesuatu di dalam perulangan <strong>harus akhirnya membuat kondisinya menjadi False</strong>, atau ia berjalan selamanya.'},
        {type:'code', lbl:'while + a stop condition', code:`lives = <span class="cn">3</span>
<span class="ck">while</span> lives <span class="ck">&gt;</span> <span class="cn">0</span>:
    <span class="cf">print</span>(<span class="cs">"Lives:"</span>, lives)
    lives <span class="ck">-=</span> <span class="cn">1</span>      <span class="cc"># inilah yang mengakhiri perulangan</span>
<span class="cf">print</span>(<span class="cs">"Game over"</span>)`},
        {type:'warn', txt:'Perulangan tak berujung adalah bug khas <code>while</code>. Jika Anda lupa <code>lives -= 1</code>, program membeku selamanya. Ajarkan siswa untuk bertanya <strong>sebelum</strong> menulis isi perulangan: "baris mana di sini yang membuat perulangan ini akhirnya berhenti?"'}
      ]},
      {t:'🪆 Penyarangan', cards:[
        {type:'text', h:'Apa yang diajarkan', b:'Kondisi dan perulangan dapat berada di dalam satu sama lain. Perulangan dengan <code>if</code> di dalamnya memungkinkan Anda bertindak berbeda pada setiap iterasi; perulangan di dalam perulangan menangani kisi dan tabel. Setiap tingkat penyarangan adalah satu tingkat indentasi lagi — menjaga indentasi tetap rapi itulah yang menjaga kode bersarang tetap mudah dibaca.'},
        {type:'code', lbl:'a loop with a decision inside', code:`<span class="ck">for</span> n <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">1</span>, <span class="cn">6</span>):
    <span class="ck">if</span> n <span class="ck">%</span> <span class="cn">2</span> == <span class="cn">0</span>:
        <span class="cf">print</span>(n, <span class="cs">"is even"</span>)
    <span class="ck">else</span>:
        <span class="cf">print</span>(n, <span class="cs">"is odd"</span>)`}
      ]},
      {t:'🧒 Kesalahpahaman yang akan Anda temui', cards:[
        {type:'twocol', left:{h:'Apa yang salah dipahami pemula', items:['<code>=</code> alih-alih <code>==</code> dalam kondisi','Lupa titik dua <code>:</code>','Indentasi tidak konsisten / hilang','<code>range(5)</code> "seharusnya" 1–5','Perulangan <code>while</code> tak berujung','Menaruh kode setelah perulangan, tetapi terindentasi ke dalamnya']}, right:{h:'Langkah antisipatif Anda', items:['"satu = menyimpan, dua == bertanya"','Jadikan titik dua sebagai refleks','Selalu 4 spasi; tampilkan blok secara visual','Tuliskan angkanya: 0,1,2,3,4','"Apa yang membuat perulangan ini berhenti?"','"Indentasi masuk = di dalam; sejajarkan = setelah"']}},
        {type:'tip', txt:'Ketika perulangan berperilaku salah, telusuri secara manual di papan tulis: tulis i = 0, lalu 1, lalu 2, dan apa yang tercetak setiap kali. "Membuka gulungan" perulangan menghilangkan misterinya dan merupakan kebiasaan debugging terbaik yang dapat Anda contohkan.'}
      ]},
      {t:'🎯 Cara mengajarkannya', cards:[
        {type:'hi', h:'for vs while — beri mereka satu kalimat', b:'"Gunakan <strong>for</strong> ketika Anda tahu berapa kali (lakukan ini 10 kali). Gunakan <strong>while</strong> ketika Anda mengulang sampai sesuatu terjadi (terus lakukan sampai mereka menebak dengan benar)." Satu aturan itu menyelesaikan hampir setiap pertanyaan "perulangan yang mana?".'},
        {type:'good', txt:'Game tebak-angka adalah puncak yang sempurna di sini: sebuah perulangan <code>while</code>, sebuah <code>if/elif/else</code> untuk "terlalu tinggi / terlalu rendah / benar", dan <code>input()</code> dari modul 1. Terasa seperti game sungguhan dan melatih semuanya sekaligus.'}
      ]}
    ],
    quiz:[
      {q:'Pernyataan if seorang siswa selalu menjalankan cabang pertama terlepas dari input. Apa yang Anda periksa terlebih dahulu, dan mengapa?', opts:['Apakah mereka menulis = alih-alih == — = menetapkan, == membandingkan','Apakah Python perlu diinstal ulang','Apakah mereka memiliki cukup cabang elif','Apakah file telah disimpan'], c:0, fb:'Satu = menetapkan sebuah nilai (di sini selalu truthy); == adalah perbandingan. "Satu = menyimpan, dua == bertanya."'},
      {q:'Apa aturan satu kalimat terbaik untuk memilih antara for dan while?', opts:['for ketika Anda tahu jumlah pengulangan; while ketika Anda mengulang sampai sebuah kondisi berubah','Selalu utamakan while; for sudah usang','for untuk angka, while untuk teks','Keduanya dapat dipertukarkan dalam setiap kasus'], c:0, fb:'Jumlah diketahui → for. Ulang-sampai-sesuatu-terjadi → while.'},
      {q:'Program seorang anak membeku dan tidak pernah selesai. Apa yang Anda ajarkan untuk mereka cari?', opts:['Baris di dalam perulangan while yang seharusnya akhirnya membuat kondisinya menjadi False','Pernyataan print yang hilang','Terlalu banyak komentar yang memperlambatnya','Salah ketik di dalam string'], c:0, fb:'Program yang membeku biasanya adalah perulangan while tak berujung yang variabel pengendalinya tidak pernah berubah.'},
      {q:'Apa yang dihasilkan range(5), dan kesalahpahaman apa yang harus Anda antisipasi?', opts:['0,1,2,3,4 — siswa mengharapkan 1–5, jadi "mulai dari nol, berhenti sebelum angkanya"','1,2,3,4,5 — ia menghitung secara alami','Hanya angka 5','Angka acak di bawah 5'], c:0, fb:'range(5) berbasis nol dan berhenti sebelum 5. Menuliskan angkanya mencegah kesalahan off-by-one.'},
      {q:'Mengapa URUTAN cabang elif penting dalam if score >= 50 ... elif score >= 90?', opts:['Python berhenti pada kondisi benar pertama, jadi 95 akan salah cocok dengan >= 50 lebih dulu','Cabang elif berjalan dalam urutan acak','Cabang berikutnya menimpa yang sebelumnya','Urutan tidak pernah penting dalam kondisional'], c:0, fb:'Kondisi diperiksa dari atas ke bawah dan berhenti pada kecocokan pertama — urutkan dari paling spesifik ke paling umum.'},
      {q:'Sebuah blok bersarang "setelah" perulangan secara tidak sengaja berjalan di dalamnya. Apa penyebab mendasarnya, dan poin pengajarannya?', opts:['Indentasi: baris terindentasi berada di dalam perulangan; menyejajarkannya kembali menempatkannya setelahnya','Titik dua ditempatkan salah','range() disalahgunakan','while seharusnya for'], c:0, fb:'Indentasi mendefinisikan blok di Python. "Indentasi masuk = di dalam; sejajarkan kembali = setelah."'}
    ]
  },
  {
    id:3, emoji:'📦', color:'#2B8EF0',
    title:'Data: List, Dictionary & Random',
    desc:'Menyimpan banyak nilai: pembuatan list dan metodenya, pengindeksan, dictionary (key→value), dan modul random.',
    obj:'Pindahkan siswa dari variabel tunggal ke koleksi. Anda harus mampu mengajarkan pengindeksan berbasis nol tanpa kebingungan, memilih list vs dictionary berdasarkan pola akses, mendemonstrasikan metode list inti, dan menggunakan random untuk menghidupkan program.',
    sections:[
      {t:'🗺️ Di mana ini berada dalam kursus', cards:[
        {type:'text', h:'Dari satu nilai ke banyak', b:'Sebuah variabel menyimpan satu hal; program nyata membutuhkan koleksi. Modul ini memperkenalkan <strong>list</strong> (terurut, diakses berdasarkan posisi) dan <strong>dictionary</strong> (diakses berdasarkan key/nama), ditambah modul <strong>random</strong> untuk peluang. Struktur ini ada di mana-mana dalam modul game nanti — list musuh, tabel skor, inventaris, peta ubin — jadi pemahaman yang kuat di sini terbayar berulang kali.'},
        {type:'tip', txt:'Keputusan utama yang Anda ajarkan: "apakah saya menemukan ini berdasarkan <em>posisi</em>nya atau berdasarkan <em>nama</em>nya?" Posisi → list. Nama → dictionary. Bingkai setiap contoh di seputar pertanyaan itu.'}
      ]},
      {t:'📋 List & pengindeksan', cards:[
        {type:'text', h:'Apa yang diajarkan', b:'Sebuah list menyimpan banyak nilai secara berurutan, ditulis dalam tanda kurung siku. Anda membaca item berdasarkan <strong>indeks</strong>nya, dan indeks dimulai dari <strong>0</strong> — item pertama adalah <code>pets[0]</code>, yang kedua adalah <code>pets[1]</code>. <code>len(pets)</code> memberi jumlahnya, jadi item terakhir adalah <code>pets[len(pets)-1]</code>.'},
        {type:'code', lbl:'lists & indexing', code:`pets = [<span class="cs">"cat"</span>, <span class="cs">"dog"</span>, <span class="cs">"fish"</span>]
<span class="cf">print</span>(pets[<span class="cn">0</span>])      <span class="cc"># cat (item PERTAMA)</span>
<span class="cf">print</span>(pets[<span class="cn">2</span>])      <span class="cc"># fish</span>
<span class="cf">print</span>(<span class="cf">len</span>(pets))   <span class="cc"># 3</span>

<span class="ck">for</span> pet <span class="ck">in</span> pets:    <span class="cc"># perulangan atas setiap item</span>
    <span class="cf">print</span>(pet)`},
        {type:'warn', txt:'Pengindeksan berbasis nol adalah rintangan konseptual yang sesungguhnya. Katakan "<strong>item pertama adalah item nol</strong>" berulang kali, dan tunjukkan bahwa <code>pets[3]</code> pada list 3 item melempar <code>IndexError: list index out of range</code> — karena indeks yang valid adalah 0, 1, 2.'}
      ]},
      {t:'🛠️ Metode list', cards:[
        {type:'text', h:'Apa yang diajarkan', b:'List dapat berubah. Metode intinya: <code>append(x)</code> menambah di akhir, <code>insert(i, x)</code> menambah pada posisi, <code>remove(x)</code> menghapus nilai pertama yang cocok, <code>pop(i)</code> menghapus dan mengembalikan item pada indeks i, dan <code>clear()</code> mengosongkan list.'},
        {type:'code', lbl:'mutating a list', code:`pets = [<span class="cs">"cat"</span>, <span class="cs">"dog"</span>]
pets.<span class="cf">append</span>(<span class="cs">"fish"</span>)    <span class="cc"># ["cat","dog","fish"]</span>
pets.<span class="cf">insert</span>(<span class="cn">0</span>, <span class="cs">"bird"</span>) <span class="cc"># ["bird","cat","dog","fish"]</span>
pets.<span class="cf">remove</span>(<span class="cs">"dog"</span>)     <span class="cc"># ["bird","cat","fish"]</span>
last = pets.<span class="cf">pop</span>()        <span class="cc"># menghapus & mengembalikan "fish"</span>`},
        {type:'twocol', left:{h:'append vs insert vs remove', items:['<code>append</code>: menambah di akhir','<code>insert(i,x)</code>: menambah pada indeks i','<code>remove(x)</code>: menghapus berdasarkan nilai','<code>pop(i)</code>: menghapus berdasarkan indeks, mengembalikannya']}, right:{h:'Kebingungan umum', items:['<code>remove</code> menerima nilai, bukan indeks','<code>pop</code> menerima indeks, bukan nilai','<code>remove</code> hanya menghapus kecocokan PERTAMA','<code>append</code> menerima tepat satu argumen']}}
      ]},
      {t:'🗂️ Dictionary', cards:[
        {type:'text', h:'Apa yang diajarkan', b:'Sebuah dictionary menyimpan pasangan <strong>key → value</strong> dalam kurung kurawal. Alih-alih posisi numerik, Anda mencari sesuatu berdasarkan key yang bermakna: <code>scores["Ann"]</code> berarti "beri saya nilai yang tersimpan di bawah Ann." Anda dapat menambah atau memperbarui dengan <code>scores["Leo"] = 12</code>.'},
        {type:'code', lbl:'dictionaries', code:`scores = {<span class="cs">"Ann"</span>: <span class="cn">15</span>, <span class="cs">"Leo"</span>: <span class="cn">9</span>}
<span class="cf">print</span>(scores[<span class="cs">"Ann"</span>])   <span class="cc"># 15 — cari berdasarkan key</span>
scores[<span class="cs">"Mia"</span>] = <span class="cn">20</span>      <span class="cc"># menambah pasangan baru</span>
scores[<span class="cs">"Leo"</span>] = <span class="cn">11</span>      <span class="cc"># memperbarui yang ada</span>`},
        {type:'warn', txt:'Siswa membingungkan key dengan value, dan arah penting: <code>scores["Ann"]</code> bertanya "berapa skor Ann?", bukan bertanya "apakah Ann 15?". Selain itu, mencari key yang tidak ada melempar <code>KeyError</code> — kesalahan yang berguna dan dapat diajarkan.'}
      ]},
      {t:'🎲 Modul random', cards:[
        {type:'text', h:'Apa yang diajarkan', b:'Mengimpor <code>random</code> membuka peluang. <code>random.randint(1, 6)</code> memberi bilangan bulat dari 1 hingga 6 (kedua ujung termasuk), dan <code>random.choice(my_list)</code> memilih item acak dari sebuah list. Inilah percikan di balik dadu, kuis, dan perilaku musuh nanti.'},
        {type:'code', lbl:'random', code:`<span class="ck">import</span> random

dice = random.<span class="cf">randint</span>(<span class="cn">1</span>, <span class="cn">6</span>)
<span class="cf">print</span>(<span class="cs">"You rolled"</span>, dice)

pets = [<span class="cs">"cat"</span>, <span class="cs">"dog"</span>, <span class="cs">"fish"</span>]
<span class="cf">print</span>(random.<span class="cf">choice</span>(pets))`},
        {type:'warn', txt:'Lupa <code>import random</code> memberi <code>NameError: name ‘random’ is not defined</code>. Impor dilakukan sekali, di bagian paling atas file. Perhatikan <code>randint</code> menyertakan kedua ujung — tidak seperti <code>range</code>, yang mengecualikan bagian atas.'}
      ]},
      {t:'🎯 Cara mengajarkannya', cards:[
        {type:'hi', h:'Dua metafora yang mengena', b:'Sebuah list adalah "<strong>rak bernomor</strong> — slot 0, slot 1, slot 2." Sebuah dictionary adalah "<strong>aplikasi kontak</strong> — Anda mencari sebuah nama dan mendapat sebuah nomor." Keduanya memetakan persis pada indeks-vs-key dan segera menyelesaikan sebagian besar pertanyaan "yang mana?".'},
        {type:'good', txt:'Game tebak-angka mendapat peningkatan yang sempurna di sini: <code>random.randint</code> memilih angka rahasia, sebuah list menyimpan tebakan sebelumnya. Menggabungkan random + list + perulangan dari modul 2 menunjukkan kepada siswa bagaimana konsep-konsep bergabung menjadi sesuatu yang benar-benar menyenangkan.'}
      ]}
    ],
    quiz:[
      {q:'Seorang siswa menulis pets[1] mengharapkan pet pertama tetapi mendapat yang kedua. Apa yang Anda ajarkan, dan kesalahan apa yang membuktikan poin tersebut?', opts:['Pengindeksan mulai dari 0, jadi pets[0] adalah yang pertama; pets[3] pada list 3 item melempar IndexError','List tidak dapat diandalkan dan harus dihindari','Mereka harus mengubah list menjadi dictionary','Tambahkan 1 ke setiap indeks mulai sekarang'], c:0, fb:'Pengindeksan berbasis nol: item pertama adalah indeks 0, indeks valid adalah 0..len-1, dan melampauinya melempar IndexError.'},
      {q:'Kapan seorang siswa harus memilih dictionary alih-alih list?', opts:['Ketika mereka mengakses nilai berdasarkan nama/key yang bermakna daripada berdasarkan posisi','Setiap kali urutan item paling penting','Setiap kali ada lebih dari sepuluh item','Dictionary selalu pilihan yang lebih baik'], c:0, fb:'List diakses berdasarkan posisi; dictionary memetakan key ke value — ideal untuk pencarian nama→skor.'},
      {q:'Apa perbedaan antara list.remove() dan list.pop()?', opts:['remove(value) menghapus berdasarkan nilai; pop(index) menghapus berdasarkan posisi dan mengembalikan item','Keduanya identik','remove menerima indeks; pop menerima nilai','pop mengosongkan seluruh list'], c:0, fb:'remove bekerja berdasarkan nilai (kecocokan pertama); pop bekerja berdasarkan indeks dan mengembalikan item yang dihapus.'},
      {q:'Sebuah game yang menggunakan random.randint error dengan "random is not defined". Apa perbaikan dan aturannya?', opts:['Tambahkan import random di bagian atas — impor terjadi sekali, sebelum digunakan','Ganti nama variabel dadu','Gunakan list alih-alih random','Instal ulang Python'], c:0, fb:'Modul random harus diimpor (sekali, di bagian atas) sebelum fungsi apa pun darinya digunakan.'},
      {q:'Manakah metafora konkret yang paling efektif untuk dictionary saat mengajar anak-anak?', opts:['Aplikasi kontak: cari sebuah nama, dapatkan kembali sebuah nomor','Rak bernomor dengan slot 0,1,2','Timer hitung mundur','Satu kotak berlabel'], c:0, fb:'Model aplikasi kontak menangkap pencarian key→value; model rak bernomor untuk list.'},
      {q:'Bagaimana random.randint(1, 6) berbeda dari range(1, 6), dan mengapa menyebutkannya?', opts:['randint MENYERTAKAN 6; range berhenti SEBELUM 6 — siswa mencampur kedua batas ini','Keduanya identik','randint mengecualikan kedua ujung','range menyertakan kedua ujung'], c:0, fb:'randint(1,6) dapat mengembalikan 6; range(1,6) menghasilkan 1–5. Menyoroti perbedaan batas mencegah bug.'}
    ]
  },
  {
    id:4, emoji:'⚙️', color:'#7C5CFC',
    title:'Fungsi',
    desc:'def, parameter dan argumen, return vs print, dan mengapa fungsi menjaga program besar tetap masuk akal.',
    obj:'Ajarkan siswa untuk mengemas kode menjadi fungsi yang dapat digunakan kembali. Anda harus mampu membuat perbedaan mendefinisikan-vs-memanggil dan print-vs-return sangat jelas, menjelaskan parameter dengan metafora, dan memotivasi fungsi dengan membiarkan siswa merasakan derita duplikasi terlebih dahulu.',
    sections:[
      {t:'🗺️ Di mana ini berada dalam kursus', cards:[
        {type:'text', h:'Cita rasa struktur pertama', b:'Sejauh ini program adalah daftar instruksi yang datar. Fungsi memungkinkan siswa <strong>menamai sepotong pekerjaan dan menggunakannya kembali</strong>. Ini adalah jembatan ke segala hal yang mengikuti: gambar Turtle memanggil fungsi, dan PyGame Zero seluruhnya dibangun di atas fungsi yang Anda tulis (<code>draw</code>, <code>update</code>, <code>on_key_down</code>). Seorang siswa yang goyah pada fungsi akan kesulitan begitu game dimulai — jadi modul ini adalah penjaga gerbang yang sesungguhnya.'},
        {type:'tip', txt:'Dua ide yang perlu waktu nyata: <strong>mendefinisikan vs memanggil</strong> (menulis fungsi vs menjalankannya) dan <strong>print vs return</strong> (menampilkan nilai vs mengembalikannya). Hampir setiap bug fungsi yang dihadapi pemula adalah salah satu dari kedua hal ini.'}
      ]},
      {t:'✏️ def — mendefinisikan & memanggil', cards:[
        {type:'text', h:'Apa yang diajarkan', b:'<code>def name():</code> <em>mendefinisikan</em> sebuah fungsi — ini menuliskan resepnya tetapi belum menjalankan apa pun. Kode hanya berjalan ketika Anda <strong>memanggil</strong>nya dengan menulis namanya dengan tanda kurung: <code>greet()</code>. Anda dapat mendefinisikan sekali dan memanggil sebanyak yang Anda inginkan.'},
        {type:'code', lbl:'define once, call many times', code:`<span class="ck">def</span> <span class="cf">greet</span>():
    <span class="cf">print</span>(<span class="cs">"Hello!"</span>)
    <span class="cf">print</span>(<span class="cs">"Welcome to the lesson."</span>)

<span class="cf">greet</span>()   <span class="cc"># sekarang ia berjalan</span>
<span class="cf">greet</span>()   <span class="cc"># dan lagi</span>`},
        {type:'warn', txt:'Bug klasik "tidak terjadi apa-apa": siswa mendefinisikan fungsi tetapi tidak pernah memanggilnya. Ajarkan frasa "<strong>mendefinisikan = menulis resep; memanggil = memasaknya</strong>." Sebuah resep dalam buku tidak memasak makan malam sampai seseorang mengikutinya.'}
      ]},
      {t:'📥 Parameter & argumen', cards:[
        {type:'text', h:'Apa yang diajarkan', b:'Parameter memungkinkan fungsi menerima input sehingga dapat berperilaku berbeda setiap kali dipanggil. Nama dalam definisi (<code>name</code>) adalah <strong>parameter</strong>; nilai aktual yang Anda berikan (<code>"Mia"</code>) adalah <strong>argumen</strong>. Keduanya dicocokkan dari kiri ke kanan, jadi jumlahnya harus sesuai.'},
        {type:'code', lbl:'passing information in', code:`<span class="ck">def</span> <span class="cf">greet</span>(name):
    <span class="cf">print</span>(<span class="cs">"Hello,"</span>, name)

<span class="cf">greet</span>(<span class="cs">"Mia"</span>)    <span class="cc"># Hello, Mia</span>
<span class="cf">greet</span>(<span class="cs">"Sam"</span>)    <span class="cc"># Hello, Sam</span>

<span class="ck">def</span> <span class="cf">add</span>(a, b):
    <span class="cf">print</span>(a <span class="ck">+</span> b)
<span class="cf">add</span>(<span class="cn">3</span>, <span class="cn">4</span>)        <span class="cc"># 7</span>`},
        {type:'warn', txt:'Memberikan jumlah argumen yang salah melempar <code>TypeError: greet() missing 1 required positional argument</code>. Baca bersama-sama — kesalahan itu secara harfiah menyebutkan apa yang hilang, yang merupakan latihan membaca kesalahan yang bagus.'}
      ]},
      {t:'↩️ return vs print — yang besar', cards:[
        {type:'text', h:'Apa yang diajarkan', b:'<code>print</code> <strong>menampilkan</strong> sebuah nilai di layar untuk manusia. <code>return</code> <strong>mengembalikan sebuah nilai</strong> ke program sehingga sisa kode dapat menggunakannya. Fungsi yang mencetak tetapi tidak me-return mengembalikan <code>None</code> — jadi Anda tidak dapat melakukan matematika dengan hasilnya.'},
        {type:'code', lbl:'the difference made visible', code:`<span class="ck">def</span> <span class="cf">square_print</span>(n):
    <span class="cf">print</span>(n <span class="ck">*</span> n)        <span class="cc"># hanya menampilkan</span>

<span class="ck">def</span> <span class="cf">square_return</span>(n):
    <span class="ck">return</span> n <span class="ck">*</span> n       <span class="cc"># mengembalikan nilainya</span>

x = <span class="cf">square_print</span>(<span class="cn">5</span>)   <span class="cc"># mencetak 25, tetapi x adalah None</span>
y = <span class="cf">square_return</span>(<span class="cn">5</span>)  <span class="cc"># y adalah 25, dapat dipakai dalam matematika</span>
<span class="cf">print</span>(y <span class="ck">+</span> <span class="cn">1</span>)         <span class="cc"># 26</span>`},
        {type:'hi', h:'Mengapa siswa harus merasakan ini', b:'Tunjukkan bahwa <code>x = square_print(5)</code> membuat <code>x</code> menjadi <code>None</code>, lalu <code>x + 1</code> mengalami kerusakan. Kerusakan itulah pelajarannya: "print berbicara kepada seseorang manusia; return berbicara kepada program." Sampai seorang siswa merasakan perbedaan ini, fungsi tetap kabur.'}
      ]},
      {t:'🍳 Metafora & motivasi', cards:[
        {type:'hi', h:'Metafora resep', b:'Sebuah fungsi adalah <strong>resep</strong>. <code>def</code> menuliskan resep; <strong>argumen adalah bahan-bahan</strong> yang Anda serahkan; <strong>memanggilnya adalah memasak</strong>; dan <code>return</code> adalah hidangan jadi yang diserahkan kembali. Print, sebaliknya, hanyalah meneriakkan hasilnya melintasi dapur — tidak ada yang dapat menggunakannya sesudahnya.'},
        {type:'good', txt:'Motivasi fungsi dengan menimbulkan duplikasi terlebih dahulu: minta siswa menulis salam 4 baris yang sama tiga kali, lalu refaktor menjadi satu <code>greet(name)</code>. Merasakan kejenuhan itulah yang membuat "jangan mengulang diri sendiri" mengena — jangan berikan aturannya, biarkan mereka mendapatkannya.'},
        {type:'code', lbl:'before / after refactor', code:`<span class="cc"># sebelum: diulang 3 kali</span>
<span class="cf">print</span>(<span class="cs">"Hi Mia, ready to code?"</span>)
<span class="cf">print</span>(<span class="cs">"Hi Sam, ready to code?"</span>)

<span class="cc"># sesudah: satu fungsi yang dapat digunakan kembali</span>
<span class="ck">def</span> <span class="cf">welcome</span>(name):
    <span class="cf">print</span>(<span class="cs">"Hi"</span>, name <span class="ck">+</span> <span class="cs">", ready to code?"</span>)
<span class="cf">welcome</span>(<span class="cs">"Mia"</span>)
<span class="cf">welcome</span>(<span class="cs">"Sam"</span>)`}
      ]},
      {t:'🧒 Kesalahpahaman yang akan Anda temui', cards:[
        {type:'twocol', left:{h:'Apa yang salah dipahami pemula', items:['Mendefinisikan fungsi tetapi tidak pernah memanggilnya','Membingungkan <code>print</code> dengan <code>return</code>','Jumlah argumen yang salah','Mengharapkan nilai dari fungsi yang hanya print','Mengindentasi isi secara tidak konsisten']}, right:{h:'Langkah antisipatif Anda', items:['"Mendefinisikan = resep; memanggil = memasak"','Tunjukkan keduanya berdampingan; kerusakan pada None','Baca TypeError bersama-sama','"print berbicara ke orang, return ke kode"','Perlakukan isinya seperti blok terindentasi lainnya']}}
      ]}
    ],
    quiz:[
      {q:'Seorang siswa mendefinisikan sebuah fungsi tetapi "tidak terjadi apa-apa" saat mereka menjalankan file. Apa penyebabnya dan frasa yang Anda ajarkan?', opts:['Mereka tidak pernah memanggilnya — "mendefinisikan = menulis resep; memanggil = memasaknya"','Python harus dimulai ulang','Fungsi harus selalu mengembalikan sebuah nilai','def salah eja'], c:0, fb:'Mendefinisikan hanya menuliskan resep; fungsi harus dipanggil agar benar-benar berjalan.'},
      {q:'Apa cara paling jelas untuk membedakan print dari return?', opts:['print menampilkan nilai kepada seseorang; return mengembalikan nilai ke program','Keduanya melakukan hal yang sama','return hanyalah print yang lebih cepat','print hanya bekerja di luar fungsi'], c:0, fb:'return memberikan nilai yang dapat dipakai ke pemanggil; print hanya menampilkan teks di layar.'},
      {q:'Dalam def square(number): return number*number, apa sebenarnya "number"?', opts:['Sebuah parameter — input yang diterima fungsi saat dipanggil','Kata kunci bawaan Python','Nilai yang dikembalikan fungsi','Variabel global yang didefinisikan di tempat lain'], c:0, fb:'number adalah parameter; argumen adalah nilai aktual yang diberikan, mis. square(5).'},
      {q:'x = greet("Mia") di mana greet hanya print — apa nilai x, dan mengapa ini layak ditunjukkan?', opts:['None — fungsi yang hanya print tidak mengembalikan apa-apa, jadi x+1 akan rusak dan membuktikan print ≠ return','"Mia"','Teks yang dicetak','Ia langsung memunculkan kesalahan'], c:0, fb:'Fungsi tanpa return mengembalikan None. Kerusakan lanjutannya adalah cara paling berkesan untuk mengajarkan print vs return.'},
      {q:'Apa cara paling efektif untuk memotivasi MENGAPA fungsi berguna?', opts:['Minta siswa mengulang kode yang sama beberapa kali, lalu refaktor menjadi satu fungsi','Buka dengan definisi formal sebuah fungsi','Hindari contoh dan jelaskan teorinya','Selalu gunakan hanya fungsi bawaan Python'], c:0, fb:'Membiarkan siswa merasakan derita duplikasi membuat nilai fungsi yang dapat digunakan kembali mengena dengan sendirinya.'},
      {q:'Sebuah pemanggilan melempar "TypeError: greet() missing 1 required positional argument". Apa artinya dan bagaimana Anda menggunakannya secara pedagogis?', opts:['Jumlah argumen tidak cocok dengan parameter — baca kesalahan bersama-sama sebagai latihan debugging','greet bukan fungsi yang sungguhan','Python kehabisan memori','Nilai return diabaikan'], c:0, fb:'Argumen harus cocok dengan parameter; kesalahan menyebutkan persis apa yang hilang, menjadikannya ideal untuk latihan membaca kesalahan.'}
    ]
  },
  {
    id:5, emoji:'🐢', color:'#F59E0B',
    title:'Menggambar & Pengantar PyGame Zero',
    desc:'Modul Turtle, lalu lompatan ke grafik: Actor, jendela, draw() dan update(), serta perulangan game.',
    obj:'Pandu lompatan dari program teks ke visual. Anda harus mampu menjelaskan perulangan game (model buku bolak-balik), mengapa framework memanggil fungsi Anda, perbedaan antara draw() dan update(), dan jebakan aset/penamaan yang secara diam-diam merusak sprite.',
    sections:[
      {t:'🗺️ Di mana ini berada dalam kursus', cards:[
        {type:'text', h:'Lonjakan motivasi', b:'Ini adalah modul di mana pemrograman menjadi <em>visual</em>, dan bagi banyak anak inilah saat mereka jatuh cinta padanya. Siswa menggambar dengan <strong>Turtle</strong> (imbalan yang memuaskan untuk fungsi dan perulangan), lalu bertemu <strong>PyGame Zero</strong> — framework game di balik "Coddy’s Adventures". Segala hal dalam modul game yang tersisa dibangun langsung di atas konsep yang diperkenalkan di sini.'},
        {type:'warn', txt:'Ada lompatan konseptual nyata di sini: dari program yang berjalan dari atas ke bawah <em>sekali</em>, menjadi <strong>perulangan game</strong> yang menggambar ulang berkali-kali per detik. Sebutkan pergeseran itu dengan lantang — siswa yang tidak menyadarinya akan menemukan game membingungkan.'}
      ]},
      {t:'🐢 Turtle — menggambar dengan kode', cards:[
        {type:'text', h:'Apa yang diajarkan', b:'Turtle menggerakkan "pena" di sekitar layar: <code>forward(100)</code>, <code>right(90)</code>, <code>left(45)</code>. Keajaibannya adalah menggambar sebuah bentuk hanyalah sebuah perulangan, dan membungkus perulangan itu dalam sebuah fungsi membuat alat yang dapat digunakan kembali. Ini adalah demonstrasi paling jelas mengapa dua modul sebelumnya penting.'},
        {type:'code', lbl:'a function that draws (loops + functions!)', code:`<span class="ck">import</span> turtle

<span class="ck">def</span> <span class="cf">draw_square</span>(side):
    <span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">4</span>):
        turtle.<span class="cf">forward</span>(side)
        turtle.<span class="cf">right</span>(<span class="cn">90</span>)

<span class="cf">draw_square</span>(<span class="cn">100</span>)
<span class="cf">draw_square</span>(<span class="cn">50</span>)   <span class="cc"># gunakan kembali dengan ukuran berbeda</span>`},
        {type:'good', txt:'Turtle adalah "aha" yang sempurna: sebuah persegi hanyalah "maju, belok, empat kali." Biarkan siswa mengubah sudut menjadi 120 dan jumlahnya menjadi 3 untuk mendapatkan segitiga — menemukan sendiri hubungan antara sudut belok dan bentuknya jauh lebih kuat daripada diberitahu.'}
      ]},
      {t:'🎮 PyGame Zero — penyiapan', cards:[
        {type:'text', h:'Apa yang diajarkan', b:'Program PyGame Zero dimulai dengan <code>#pgzero</code> (atau dijalankan dengan <code>pgzrun</code>). Anda mengatur jendela dengan <code>WIDTH</code> dan <code>HEIGHT</code>, lalu membuat sprite sebagai <strong>Actor</strong>. Sebuah <code>Actor("coddy")</code> secara otomatis memuat <code>images/coddy.png</code> — namanya adalah nama file, huruf kecil, tanpa ekstensi. Posisikan dengan <code>.pos</code>, <code>.x</code>, <code>.y</code>.'},
        {type:'code', lbl:'window + actor', code:`<span class="cc">#pgzero</span>
WIDTH = <span class="cn">600</span>
HEIGHT = <span class="cn">400</span>

coddy = <span class="cf">Actor</span>(<span class="cs">"coddy"</span>)   <span class="cc"># memuat images/coddy.png</span>
coddy.pos = <span class="cn">300</span>, <span class="cn">200</span>      <span class="cc"># tengah jendela</span>`},
        {type:'warn', txt:'Pembunuh senyap: nama file gambar harus sama persis dengan nama Actor — huruf kecil, ejaan benar, tanpa <code>.png</code> dalam kode, dan file harus berada di folder <code>images</code>. Ketidakcocokan gagal tanpa petunjuk yang jelas, jadi inilah hal pertama yang harus diperiksa ketika "sprite tidak muncul."'}
      ]},
      {t:'🔁 draw(), update() & perulangan game', cards:[
        {type:'text', h:'Apa yang diajarkan', b:'Anda menulis dua fungsi khusus dan PyGame Zero <strong>memanggilnya untuk Anda, secara otomatis, ~60 kali per detik</strong>. <code>draw()</code> melukis frame saat ini; <code>update()</code> mengubah hal-hal untuk frame berikutnya (posisi, skor, logika). Siswa tidak pernah memanggil keduanya — itulah bagian yang baru dan mengejutkan.'},
        {type:'code', lbl:'the loop in action', code:`<span class="ck">def</span> <span class="cf">draw</span>():
    screen.<span class="cf">clear</span>()    <span class="cc"># hapus frame sebelumnya</span>
    coddy.<span class="cf">draw</span>()      <span class="cc"># lukis sprite</span>

<span class="ck">def</span> <span class="cf">update</span>():
    coddy.x <span class="ck">+=</span> <span class="cn">1</span>     <span class="cc"># perubahan kecil tiap frame = gerakan</span>`},
        {type:'hi', h:'Model buku bolak-balik', b:'Sebuah game adalah buku bolak-balik (flipbook). <code>update()</code> memutuskan apa yang berubah di halaman berikutnya; <code>draw()</code> melukis halaman itu; PyGame Zero membalik halaman 60×/detik. Inilah mengapa gerakan membutuhkan perubahan <em>kecil</em> setiap frame (<code>x += 1</code>) — bukan satu lompatan besar. Ini juga menjelaskan mengapa Anda harus <code>screen.clear()</code>: tanpa menghapus halaman, setiap frame melumur di atas yang sebelumnya.'}
      ]},
      {t:'🧒 Kesalahpahaman yang akan Anda temui', cards:[
        {type:'twocol', left:{h:'Apa yang salah dipahami pemula', items:['Memanggil draw()/update() sendiri','Nama gambar tidak cocok dengan file','Lupa <code>screen.clear()</code> → lumuran','Menaruh logika game di luar update()','Satu lompatan besar alih-alih langkah kecil','Membingungkan draw (menampilkan) dengan update (mengubah)']}, right:{h:'Langkah antisipatif Anda', items:['"Framework yang memanggilnya, bukan Anda"','Nama: huruf kecil, tanpa ekstensi, images/','Hapus halaman setiap frame','Logika berulang berada di update()','"Perubahan kecil tiap frame = gerakan halus"','"draw = melukis, update = berpikir"']}},
        {type:'warn', txt:'"Framework memanggil fungsi Anda" adalah ide yang sama sekali baru (inversion of control). Jangan terburu-buru. Bandingkan secara eksplisit dengan semua yang sebelumnya: "sampai sekarang, kode Anda menjalankan baris-baris Anda. Sekarang Anda menulis fungsi dan mesin game menjalankannya untuk Anda."'}
      ]},
      {t:'🎯 Cara mengajarkannya', cards:[
        {type:'good', txt:'Rayakan sprite bergerak pertama dengan lantang — itu adalah tonggak sejati dan puncak emosional dari seluruh kursus. Lalu segera biarkan mereka mengubah kecepatan (<code>x += 5</code>) dan arah. Eksperimen, bukan penjelasan, itulah yang menyematkan perulangan game.'},
        {type:'tip', txt:'Jika seorang siswa kewalahan, kupas kembali ke program terkecil yang dapat dijalankan: sebuah jendela, satu Actor, sebuah <code>update()</code> kosong. Tambahkan satu baris pada satu waktu. Game terasa besar; membangunnya satu baris-pengubah-frame pada satu waktu membuatnya tetap dapat dipelajari.'}
      ]}
    ],
    quiz:[
      {q:'Di PyGame Zero, siapa yang memanggil draw() dan update(), dan mengapa hal itu penting secara pedagogis?', opts:['Framework memanggilnya ~60×/detik secara otomatis — ide "inversion of control" baru yang harus diajarkan perlahan','Siswa memanggilnya secara manual setiap frame','OS memanggilnya sekali saat startup','Keduanya hanya berjalan jika ditempatkan dalam perulangan while'], c:0, fb:'PyGame Zero menjalankan draw()/update() Anda untuk Anda setiap frame — siswa TIDAK boleh memanggilnya, dan ini benar-benar baru.'},
      {q:'Apa cara paling jelas untuk menjelaskan draw() vs update() kepada seorang anak?', opts:['update() memutuskan apa yang berubah untuk frame berikutnya; draw() melukis frame ("berpikir vs melukis")','Keduanya identik','draw() berjalan sekali, update() tidak pernah berjalan','update() hanya menangani suara'], c:0, fb:'"update = berpikir/mengubah, draw = melukis" memetakan langsung pada perulangan game.'},
      {q:'Sebuah sprite tidak muncul dan tidak ada kesalahan yang jelas. Apa yang Anda periksa terlebih dahulu?', opts:['Nama file gambar cocok persis dengan nama Actor (huruf kecil, tanpa ekstensi, di images/)','Jumlah RAM yang tersedia','Apakah Python 32- atau 64-bit','Kecerahan monitor'], c:0, fb:'Actor("coddy") membutuhkan images/coddy.png dengan nama yang cocok persis — kegagalan senyap yang paling umum.'},
      {q:'Mengapa coddy.x += 1 di dalam update() menciptakan gerakan halus alih-alih teleportasi?', opts:['update() berjalan setiap frame, jadi perubahan kecil terakumulasi ~60×/detik menjadi gerakan halus','Ia berteleportasi sekali dan berhenti','Ia hanya bekerja di dalam perulangan while','Ia mengubah ukuran jendela'], c:0, fb:'Gerakan adalah perubahan kecil yang diterapkan setiap frame oleh perulangan game — model buku bolak-balik.'},
      {q:'Sprite seorang siswa meninggalkan jejak lumuran di layar. Apa yang hilang dan mengapa?', opts:['screen.clear() di awal draw() — tanpa menghapus, setiap frame melukis di atas yang sebelumnya','Sebuah pernyataan impor','Actor kedua','Komputer yang lebih cepat'], c:0, fb:'Setiap frame harus menghapus yang sebelumnya; jika tidak, posisi lama tetap terlukis, menciptakan lumuran.'},
      {q:'Mengapa menggambar persegi dengan Turtle adalah pelajaran yang kuat tepat sebelum game?', opts:['Ia menggunakan kembali fungsi + perulangan bersamaan, membuktikan modul sebelumnya terbayar, dan memudahkan masuk ke "kode membuat gambar"','Ia mengajarkan dictionary','Ia memperkenalkan penanganan file','Ia mendemonstrasikan rekursi'], c:0, fb:'draw_square adalah fungsi yang membungkus perulangan — imbalan yang memuaskan dan jalan masuk yang lembut menuju grafik.'}
    ]
  },
  {
    id:6, emoji:'🎮', color:'#10B981',
    title:'Pengembangan Game dengan PyGame Zero',
    desc:'Input keyboard dan mouse, animasi sprite, deteksi tabrakan, dan penilaian skor game.',
    obj:'Ajarkan inti interaktif pembuatan game: merespons keyboard dan mouse, menganimasikan sprite, dan mendeteksi tabrakan. Anda harus mampu menjelaskan global dengan bersih, membedakan collidepoint dari colliderect, dan menjadikan iterasi cepat sebagai kebiasaan mengajar.',
    sections:[
      {t:'🗺️ Di mana ini berada dalam kursus', cards:[
        {type:'text', h:'Game yang merespons pemain', b:'Modul 5 menaruh sprite di layar dan menggerakkannya sendiri. Sekarang game <strong>bereaksi terhadap pemain</strong>: gerakan keyboard, klik mouse, animasi, dan — yang besar — tabrakan yang menggerakkan penilaian, kerusakan, dan pengumpulan. Proyek di sini termasuk Coddy’s Adventures, game bergaya Minecraft, space shooter, dan "Clicker Heroes."'},
        {type:'tip', txt:'Deteksi tabrakan adalah konsep yang mengubah "gambar bergerak" menjadi "game." Sediakan waktu ekstra untuknya — ia secara konseptual lebih kaya daripada yang terlihat dan membuka penilaian, pertarungan, dan pengumpulan sekaligus.'}
      ]},
      {t:'⌨️ Input keyboard', cards:[
        {type:'text', h:'Dua gaya untuk diajarkan', b:'<strong>Kontinu</strong>: di dalam <code>update()</code>, periksa <code>keyboard.right</code>, <code>keyboard.left</code>, dll. — benar selama tombol ditahan, sempurna untuk gerakan halus. <strong>Sekali-tekan</strong>: framework memanggil <code>on_key_down(key)</code> sekali per tekanan, ideal untuk melompat atau menembak. Mengganti gambar sprite saat bergerak memberi pemain umpan balik arah.'},
        {type:'code', lbl:'continuous movement', code:`<span class="ck">def</span> <span class="cf">update</span>():
    <span class="ck">if</span> keyboard.right:
        coddy.x <span class="ck">+=</span> <span class="cn">5</span>
        coddy.image = <span class="cs">"coddy_right"</span>
    <span class="ck">elif</span> keyboard.left:
        coddy.x <span class="ck">-=</span> <span class="cn">5</span>
        coddy.image = <span class="cs">"coddy_left"</span>`},
        {type:'tip', txt:'Gunakan pemeriksaan tombol-ditahan di <code>update()</code> untuk gerakan dan event <code>on_key_down</code> untuk aksi. Salah mencampur keduanya — mis. mencoba melakukan gerakan halus di <code>on_key_down</code> — menghasilkan gerakan tersendat, satu-langkah-per-tekanan. Cocokkan alat dengan rasa yang Anda inginkan.'}
      ]},
      {t:'🖱️ Input mouse', cards:[
        {type:'text', h:'Apa yang diajarkan', b:'Framework memanggil <code>on_mouse_down(pos)</code> ketika pemain mengklik, memberi Anda lokasi klik sebagai <code>pos</code>. Pertanyaan yang biasa adalah "apakah mereka mengklik objek ini?" — dijawab dengan <code>actor.collidepoint(pos)</code>. Ini menggerakkan game clicker dan mekanik "tembak musuh."'},
        {type:'code', lbl:'click to score', code:`score = <span class="cn">0</span>

<span class="ck">def</span> <span class="cf">on_mouse_down</span>(pos):
    <span class="ck">global</span> score
    <span class="ck">if</span> enemy.<span class="cf">collidepoint</span>(pos):
        score <span class="ck">+=</span> <span class="cn">1</span>
        <span class="cf">animate</span>(enemy, tween=<span class="cs">"bounce_end"</span>, duration=<span class="cn">0.3</span>)`}
      ]},
      {t:'🌍 Kata kunci global', cards:[
        {type:'text', h:'Apa yang diajarkan', b:'Sebuah fungsi dapat <em>membaca</em> variabel yang didefinisikan di luarnya, tetapi untuk <strong>mengubah</strong>nya ia harus terlebih dahulu mendeklarasikan <code>global score</code>. Tanpa itu, Python membuat variabel lokal baru dan skor yang sebenarnya tidak pernah diperbarui — kegagalan yang membingungkan dan tanpa kesalahan.'},
        {type:'warn', txt:'Jaga penjelasan tetap sesuai usia: "sebuah fungsi dapat melihat variabel luar, tetapi untuk <strong>mengubah</strong>nya ia harus mengatakan <code>global</code> terlebih dahulu." Tahan diri dari kuliah penuh tentang scope — kedalaman itu tidak diperlukan di sini dan membuat pemula kewalahan. Cukup aturannya dan sebuah contoh yang berfungsi.'}
      ]},
      {t:'💥 Deteksi tabrakan', cards:[
        {type:'text', h:'Apa yang diajarkan', b:'Setiap sprite memiliki persegi panjang tak terlihat di sekelilingnya. <code>a.colliderect(b)</code> bertanya "apakah kedua persegi panjang ini tumpang tindih?" (sprite vs sprite — pukulan, pengambilan). <code>a.collidepoint(pos)</code> bertanya "apakah titik ini di dalam persegi panjang ini?" (sebuah klik atau titik tunggal). Satu perbedaan itu mencakup hampir semua interaksi game 2D.'},
        {type:'code', lbl:'sprite-vs-sprite collision', code:`<span class="ck">def</span> <span class="cf">update</span>():
    <span class="ck">if</span> player.<span class="cf">colliderect</span>(coin):
        <span class="ck">global</span> score
        score <span class="ck">+=</span> <span class="cn">1</span>
        coin.x = random.<span class="cf">randint</span>(<span class="cn">0</span>, WIDTH)  <span class="cc"># muncul kembali</span>`},
        {type:'hi', h:'Model mental', b:'"Setiap objek berada di dalam kotak tak terlihat. Sebuah tabrakan hanyalah <em>dua kotak yang tumpang tindih</em>." Setelah siswa memegang gambaran itu, pukulan, pengambilan koin, dan klik mouse semuanya menjadi pertanyaan sederhana yang sama, hanya ditanyakan dengan <code>colliderect</code> (kotak vs kotak) atau <code>collidepoint</code> (titik dalam kotak).'}
      ]},
      {t:'🧒 Kesalahpahaman yang akan Anda temui', cards:[
        {type:'twocol', left:{h:'Apa yang salah dipahami pemula', items:['Mengubah score dalam fungsi tanpa <code>global</code>','<code>collidepoint</code> vs <code>colliderect</code> tertukar','Gerakan terlalu cepat atau terlalu lambat','Lupa mengganti gambar sprite','Gerakan halus dicoba di <code>on_key_down</code>']}, right:{h:'Langkah antisipatif Anda', items:['"Untuk mengubah variabel luar, katakan global"','"point = sebuah klik, rect = objek vs objek"','Sesuaikan langkah += / -= bersama-sama','Ganti gambar = arah hadap yang terlihat','Tombol-ditahan di update(); event untuk aksi']}}
      ]},
      {t:'🎯 Cara mengajarkannya', cards:[
        {type:'good', txt:'Contohkan iterasi cepat tanpa henti: ubah satu angka, jalankan, amati, sesuaikan. Pengembangan game menghargai "ayo coba saja" jauh lebih daripada merencanakan semuanya di awal, dan menunjukkan sikap itu memberi siswa izin untuk bereksperimen alih-alih takut membuat kesalahan.'},
        {type:'tip', txt:'Ketika sebuah tabrakan "tidak berfungsi," debug secara visual: sementara cetak skor di layar atau cetak ke konsol di dalam <code>if</code>. Melihat apakah cabang itu berjalan sama sekali memisahkan "tabrakan tidak terdeteksi" dari "skor tidak diperbarui" — dua perbaikan yang sangat berbeda.'}
      ]}
    ],
    quiz:[
      {q:'Seorang siswa menaikkan score di dalam on_mouse_down tetapi tidak pernah berubah, tanpa kesalahan. Apa perbaikan dan aturannya?', opts:['Deklarasikan global score di dalam fungsi — tanpa itu Python membuat variabel lokal baru','Bungkus pembaruan skor dalam perulangan while','Ganti nama score menjadi sesuatu yang unik','Simpan skor di dalam Actor'], c:0, fb:'Untuk memodifikasi variabel tingkat modul di dalam fungsi, Python memerlukan deklarasi global; jika tidak, ia secara diam-diam membuat variabel lokal.'},
      {q:'Metode mana yang mendeteksi klik mouse yang mendarat pada sprite tertentu?', opts:['collidepoint(pos) — memeriksa apakah satu titik ada di dalam kotak sprite','colliderect(other_sprite)','keyboard.click','on_draw()'], c:0, fb:'collidepoint memeriksa sebuah titik (klik); colliderect memeriksa apakah dua persegi panjang tumpang tindih.'},
      {q:'Apa model mental yang paling sederhana dan akurat untuk deteksi tabrakan?', opts:['Setiap objek memiliki kotak tak terlihat; sebuah tabrakan adalah dua kotak yang tumpang tindih','Python menebak apakah benda-benda terlihat bersentuhan','Sprite saling menolak secara magnetis','Ia membandingkan warna piksel setiap sprite'], c:0, fb:'Tabrakan berbasis persegi secara harfiah adalah "apakah kedua persegi panjang ini tumpang tindih?" — model kotak tak terlihat itu tepat.'},
      {q:'Mengapa mengganti coddy.image ke varian kiri/kanan ketika karakter bergerak?', opts:['Umpan balik visual — sprite menghadap arah yang ia tuju','Diharuskan atau game akan rusak','Ini membuat kode berjalan lebih cepat','Ini mengurangi penggunaan memori'], c:0, fb:'Mengubah gambar sprite memberi pemain umpan balik arah yang jelas; ini keputusan poles/rasa, bukan keharusan.'},
      {q:'Kapan Anda harus menggunakan keyboard.right di dalam update() versus on_key_down(key)?', opts:['Pemeriksaan tombol-ditahan di update() untuk gerakan halus; on_key_down untuk aksi sekali-tekan seperti lompat/tembak','Selalu gunakan on_key_down; update() tidak bisa membaca keyboard','Keduanya dapat dipertukarkan','keyboard.right hanya bekerja di draw()'], c:0, fb:'Gerakan kontinu = pemeriksaan tombol-ditahan di update(); aksi diskret = event on_key_down. Mencampurnya terasa salah.'},
      {q:'Sebuah tabrakan "tidak berfungsi." Apa langkah debugging paling efektif untuk diajarkan?', opts:['Cetak di dalam if (atau tampilkan skor di layar) untuk melihat apakah cabang itu berjalan sama sekali','Tulis ulang seluruh game','Tambahkan lebih banyak sprite','Perbesar ukuran jendela'], c:0, fb:'Print cepat memisahkan "tabrakan tidak terdeteksi" dari "skor tidak diperbarui" — dua masalah berbeda dengan perbaikan berbeda.'}
    ]
  },
  {
    id:7, emoji:'🏆', color:'#EF4444',
    title:'Proyek Puncak: Membangun & Menerbitkan Game',
    desc:'Peta kisi, musuh dengan atribut, collidelist, bonus, level, keadaan menang/kalah, menu, dan penerbitan.',
    obj:'Bersiaplah untuk membimbing siswa melalui proyek akhir mereka. Pergeseran keterampilan di sini adalah dari mengajarkan fitur menjadi mengelola pembangunan yang lebih besar — menentukan cakupan secara realistis, mengorganisasi keadaan game, menangani banyak objek, dan membimbing siswa sampai ke game yang selesai, diterbitkan, dan dipresentasikan.',
    sections:[
      {t:'🗺️ Di mana ini berada dalam kursus', cards:[
        {type:'text', h:'Semuanya menyatu', b:'Modul-modul akhir membangun RPG lengkap ("WeCode and Dragons") dan proyek kelulusan. Hampir <strong>tidak ada sintaks baru</strong> di sini — sebaliknya, setiap konsep dari modul 1–6 muncul kembali sekaligus di dalam satu program yang lebih besar. Peran Anda bergeser sesuai: kurang "ini fitur baru," lebih "mari jaga proyek ini tetap terorganisasi dan dapat diselesaikan."'},
        {type:'tip', txt:'Bingkai ulang tugas Anda sendiri untuk modul ini. Anda sekarang adalah mentor proyek sekaligus guru pemrograman: membantu siswa menentukan cakupan secara masuk akal, tetap terorganisasi, men-debug basis kode yang lebih besar, dan — yang krusial — benar-benar menyelesaikan dan merilis.'}
      ]},
      {t:'🗺️ Peta kisi (list dari list)', cards:[
        {type:'text', h:'Apa yang diajarkan', b:'Level game disimpan sebagai <strong>kisi 2D</strong> — sebuah list dari list, di mana setiap angka mengodekan tipe ubin (0 = lantai, 1 = dinding, 2 = tulang, dll.). Perulangan bersarang menelusuri baris dan kolom untuk menggambar setiap ubin di <code>column * cell_width</code>, <code>row * cell_height</code>. Ini adalah imbalan untuk perulangan bersarang dari modul 2.'},
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
      {t:'👾 Banyak musuh dengan atribut', cards:[
        {type:'text', h:'Apa yang diajarkan', b:'Musuh dihasilkan dalam perulangan dan disimpan dalam list, masing-masing dengan atributnya sendiri (health, attack) yang ditetapkan sebagai properti pada Actor. Untuk memeriksa pemain terhadap <em>semua</em> musuh sekaligus, <code>collidelist(enemies)</code> mengembalikan indeks musuh pertama yang terkena, atau <code>-1</code> jika tidak ada — jauh lebih bersih daripada perulangan manual pemeriksaan <code>colliderect</code>.'},
        {type:'code', lbl:'generate + collide with a list', code:`enemies = []
<span class="ck">for</span> i <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">5</span>):
    e = <span class="cf">Actor</span>(<span class="cs">"enemy"</span>)
    e.health = random.<span class="cf">randint</span>(<span class="cn">10</span>, <span class="cn">20</span>)
    e.attack = random.<span class="cf">randint</span>(<span class="cn">5</span>, <span class="cn">10</span>)
    enemies.<span class="cf">append</span>(e)

idx = char.<span class="cf">collidelist</span>(enemies)
<span class="ck">if</span> idx <span class="ck">!=</span> <span class="ck">-</span><span class="cn">1</span>:               <span class="cc"># -1 berarti "tidak ada yang terkena"</span>
    char.health <span class="ck">-=</span> enemies[idx].attack`},
        {type:'warn', txt:'Bug halus yang harus diwaspadai: menghapus item dari list <em>saat melakukan perulangan atasnya</em> melewati elemen. Jika siswa menghapus musuh yang dikalahkan di tengah perulangan, beberapa terlewati. Ajarkan pola yang aman — kumpulkan apa yang akan dihapus, atau lakukan perulangan atas salinan.'}
      ]},
      {t:'🚦 Keadaan game & menu', cards:[
        {type:'text', h:'Apa yang diajarkan', b:'Satu variabel <code>mode</code> ("menu" / "game" / "end") bertindak sebagai penunjuk arah yang memberi tahu baik <code>draw()</code> maupun <code>update()</code> apa yang harus dilakukan sekarang. Mengarahkan semuanya melalui satu variabel keadaan itulah yang menjaga game yang lebih besar agar tidak runtuh menjadi kekacauan — ini adalah ide organisasi paling penting dalam proyek puncak.'},
        {type:'code', lbl:'one state variable drives everything', code:`mode = <span class="cs">"menu"</span>

<span class="ck">def</span> <span class="cf">draw</span>():
    screen.<span class="cf">clear</span>()
    <span class="ck">if</span> mode == <span class="cs">"menu"</span>:
        screen.<span class="cf">draw</span>.<span class="cf">text</span>(<span class="cs">"Press SPACE to start"</span>, center=(<span class="cn">300</span>,<span class="cn">200</span>))
    <span class="ck">elif</span> mode == <span class="cs">"game"</span>:
        char.<span class="cf">draw</span>()
    <span class="ck">elif</span> mode == <span class="cs">"end"</span>:
        screen.<span class="cf">draw</span>.<span class="cf">text</span>(<span class="cs">"GAME OVER"</span>, center=(<span class="cn">300</span>,<span class="cn">200</span>))`},
        {type:'hi', h:'Menang/kalah hanyalah perubahan keadaan', b:'Kemenangan dan kekalahan bukanlah mesin khusus — keduanya hanyalah menetapkan <code>mode = "end"</code> ketika sebuah kondisi terpenuhi (semua musuh dibersihkan, atau <code>char.health &lt;= 0</code>). Membingkainya dengan cara ini menjaga siswa dari rekayasa berlebihan dan terhubung langsung kembali ke kondisi dari modul 2.'}
      ]},
      {t:'🧒 Tantangan sebenarnya: cakupan & penyelesaian', cards:[
        {type:'twocol', left:{h:'Di mana proyek puncak gagal', items:['Cakupan terlalu ambisius — terlalu besar untuk diselesaikan','Kehilangan jejak keadaan game','Mengedit list saat melakukan perulangan atasnya','Kehabisan waktu sebelum penerbitan','Terus memoles, tidak pernah merilis']}, right:{h:'Langkah pembinaan Anda', items:['"Selesaikan yang kecil, lalu tambahkan lebih banyak"','Satu variabel <code>mode</code> menggerakkan game','Lakukan perulangan atas salinan saat menghapus','Sisakan waktu untuk menerbitkan + mempresentasikan','"Selesai dan dibagikan mengalahkan sempurna"']}},
        {type:'warn', txt:'Risiko terbesar dalam proyek puncak adalah <strong>ambisi, bukan sintaks</strong>. Game yang lengkap, sederhana, dan diterbitkan mengalahkan epik yang belum selesai setiap saat. Bimbing siswa untuk mengunci cakupan yang kecil terlebih dahulu dan hanya menambahkan tambahan setelah perulangan inti berfungsi dari ujung ke ujung.'}
      ]},
      {t:'🎯 Menerbitkan & mempresentasikan', cards:[
        {type:'good', txt:'Pelajaran kelulusan adalah tentang kebanggaan dan presentasi, bukan kode baru. Bimbing siswa untuk menerbitkan game mereka ke Kodland HUB dan mendemonstrasikannya. Menyelesaikan dan berbagi adalah keterampilan tersendiri — pujilah penyelesaian selantang kode yang pintar, karena merilis sesuatu yang nyata itulah yang diingat siswa.'},
        {type:'tip', txt:'Bantu setiap siswa menyiapkan demo 1 menit: apa game-nya, cara memainkannya, dan satu hal yang mereka banggakan. Mempresentasikan karya mereka sendiri membangun kepercayaan diri dan memberikan akhir yang rapi dan memotivasi untuk seluruh kursus.'}
      ]}
    ],
    quiz:[
      {q:'Apa risiko tunggal terbesar bagi seorang siswa dalam proyek puncak, dan bagaimana Anda membinanya?', opts:['Cakupan terlalu ambisius — kunci game yang kecil dan dapat diselesaikan terlebih dahulu, lalu tambahkan tambahan','Tidak cukup tahu sintaks — latih lebih banyak teori','Mengetik terlalu lambat — dorong kecepatan','Menggunakan terlalu banyak komentar'], c:0, fb:'Pengelolaan cakupan adalah fokus pembinaan kunci; game kecil yang selesai mengalahkan game besar yang belum selesai.'},
      {q:'Bagaimana keadaan game (menu / bermain / game over) biasanya dikelola, dan mengapa itu penting?', opts:['Satu variabel mode yang diperiksa draw() dan update() — ini menjaga game besar tetap terorganisasi','Tiga file program terpisah','Dengan memulai ulang Python di antara layar','Dengan angka acak'], c:0, fb:'Satu variabel keadaan mengarahkan apa yang game tampilkan dan lakukan, mencegah proyek besar menjadi kekacauan.'},
      {q:'char.collidelist(enemies) mengembalikan -1. Apa artinya itu?', opts:['Karakter tidak bertabrakan dengan musuh mana pun dalam list','Terjadi kesalahan','Ia bertabrakan dengan musuh di indeks 1','List enemies kosong'], c:0, fb:'collidelist mengembalikan indeks sprite pertama yang terkena, atau -1 ketika tidak ada tabrakan sama sekali.'},
      {q:'Bagaimana peta kisi 2D direpresentasikan dalam proyek-proyek ini, dan konsep sebelumnya mana yang diperkuat oleh penggambarannya?', opts:['Sebuah list dari list (baris-baris angka); menggambarnya menggunakan perulangan bersarang','Satu string panjang; ia menggunakan pemotongan string','Sebuah dictionary warna; ia menggunakan pencarian key','Sebuah fungsi; ia menggunakan rekursi'], c:0, fb:'List dari list memodelkan baris dan kolom, dan perulangan bersarang menelusurinya — imbalan untuk perulangan bersarang dari modul 2.'},
      {q:'Seorang siswa menghapus musuh yang dikalahkan dari list saat melakukan perulangan atasnya dan beberapa musuh terlewati. Apa penyebabnya?', opts:['Menghapus item di tengah perulangan menggeser indeks yang tersisa — lakukan perulangan atas salinan atau kumpulkan-lalu-hapus','collidelist rusak','Musuh membutuhkan lebih banyak health','append digunakan alih-alih pop'], c:0, fb:'Mengubah list selama iterasi melewati elemen; pola yang aman adalah perulangan atas salinan atau menunda penghapusan.'},
      {q:'Selama pelajaran kelulusan, apa yang paling harus ditekankan oleh seorang tutor?', opts:['Membantu siswa menyelesaikan, menerbitkan ke HUB, dan mempresentasikan game mereka','Menjejalkan sebanyak mungkin fitur','Menulis ulang game dari awal demi kualitas','Melewati presentasi untuk menghemat waktu'], c:0, fb:'Penyelesaian, penerbitan, dan presentasi adalah hasil kelulusan inti — pujilah perilisan, bukan hanya kode yang pintar.'}
    ]
  },
  {
    id:8, emoji:'🧑‍🏫', color:'#6366F1',
    title:'Cara Menjalankan Pelajaran yang Hebat',
    desc:'Struktur pelajaran cermin/melingkar, mengapa ia berhasil, dan cara menjaga setiap siswa tetap terlibat aktif.',
    obj:'Kuasai bentuk pelajaran Kodland yang kuat: struktur "cermin" delapan fase dari pemanasan hingga penutup, alasan kognitif mengapa ia berhasil, dan teknik konkret untuk menjaga anak-anak tetap terlibat di setiap fase. Ini tentang BAGAIMANA Anda mengajar, terlepas dari topiknya.',
    sections:[
      {t:'🗺️ Mengapa struktur sama pentingnya dengan konten', cards:[
        {type:'text', h:'Pelajaran yang hebat memiliki bentuk', b:'Anda bisa mengetahui Python dengan sempurna dan tetap menjalankan pelajaran yang lemah jika tidak memiliki struktur. Anak-anak belajar paling baik di dalam <strong>ritme yang dapat diprediksi</strong> — mereka menetap lebih cepat, mengingat lebih banyak, dan tetap termotivasi ketika setiap pelajaran mengikuti alur yang sama dan familiar. Pelajaran Kodland menggunakan struktur delapan fase yang disengaja dengan desain "cermin": cara sebuah pelajaran <em>berakhir</em> mencerminkan cara ia <em>dimulai</em>.'},
        {type:'text', h:'Apa yang dilatih modul ini', b:'Tidak seperti modul pemrograman, modul ini adalah tentang <strong>penyampaian Anda</strong>, bukan materinya. Anda akan mempelajari delapan fase, mengapa masing-masing ada, dan — yang terpenting — cara menjaga siswa tetap berpartisipasi aktif alih-alih menonton secara pasif. Kebiasaan ini berlaku untuk setiap pelajaran yang akan Anda ajarkan, terlepas dari topiknya.'},
        {type:'tip', txt:'Konsistensi adalah intinya. Setelah siswa mempelajari ritme Anda, mereka berhenti menghabiskan energi untuk mencari tahu "apa yang terjadi sekarang?" dan menghabiskannya untuk belajar. Jalankan struktur yang sama setiap kali sampai menjadi sifat kedua — bagi Anda dan bagi mereka.'}
      ]},
      {t:'🌅 Awal: empat fase', cards:[
        {type:'text', h:'1 · Pemanasan — aktifkan energi & fokus', b:'Buka dengan sesuatu yang ringan yang mengalihkan otak siswa ke "mode pelajaran": pertanyaan cepat, tantangan kecil, melihat sesuatu yang menyenangkan. Tujuannya adalah energi dan perhatian, bukan penilaian. Ini menandakan "kita mulai sekarang" dan menarik anak yang teralihkan ke dalam sesi.'},
        {type:'text', h:'2 · Peninjauan Pelajaran Sebelumnya — mengingat & mengonsolidasi', b:'Tinjau secara singkat apa yang dipelajari sebelumnya. Pengambilan kembali (retrieval) — membuat siswa <em>mengingat</em> alih-alih mendengar ulang — adalah salah satu alat memori terkuat yang ada. "Apa yang kamu ingat tentang perulangan?" selama dua menit lebih berguna daripada menjelaskan ulang.'},
        {type:'text', h:'3 · Pemeriksaan PR — tinjau pekerjaan rumah bersama', b:'Bahas pekerjaan rumah <em>bersama</em> siswa. Di sinilah Anda menangkap kesalahpahaman, memuji usaha, dan menunjukkan bahwa pekerjaan rumah benar-benar penting. Melewatkannya mengajarkan anak-anak bahwa pekerjaan rumah bersifat opsional.'},
        {type:'text', h:'4 · Tujuan Pelajaran — tetapkan sasaran yang jelas', b:'Nyatakan dengan jelas tentang apa hari ini: "hari ini kita akan membuat sprite kita bergerak ketika kamu menekan tombol panah." Tujuan yang jelas memberi pelajaran arah dan memberi siswa sesuatu yang konkret untuk dituju.'}
      ]},
      {t:'🏁 Akhir: cermin', cards:[
        {type:'hi', h:'Akhir mencerminkan awal, terbalik', b:'Empat fase penutup menggemakan fase pembuka secara terbalik — pelajaran berakhir dengan cara ia dimulai, memberi siswa perasaan <strong>penutupan dan ritme</strong> yang memuaskan. Bentuk "melingkar" inilah yang membuat sebuah pelajaran terasa lengkap alih-alih hanya berhenti ketika waktu habis.'},
        {type:'text', h:'1 · Ringkasan Pelajaran — berbasis tutor + siswa', b:'Rekap apa yang telah dibahas — tetapi jangan hanya memberitahu mereka. Minta <em>siswa</em> juga meringkas dengan kata-kata mereka sendiri. Ringkasan mereka mengungkap apa yang benar-benar mengena dan sekaligus menjadi momen pengambilan kembali kedua.'},
        {type:'text', h:'2 · Pemberian PR — instruksi yang jelas', b:'Berikan pekerjaan rumah dengan instruksi yang sangat jelas tentang apa yang harus dilakukan dan bagaimana. Pekerjaan rumah yang samar adalah pekerjaan rumah yang tidak akan dikerjakan. Ini berpasangan dengan Pemeriksaan PR yang membuka pelajaran.'},
        {type:'text', h:'3 · Pratinjau Pelajaran Berikutnya — bangun rasa ingin tahu', b:'Beri gambaran tentang apa yang akan datang: "lain kali, kita akan membuat musuh mengejarmu!" Sebuah kail membangun antisipasi dan momentum ke depan di antara sesi — ini berpasangan dengan Tujuan Pelajaran dari awal.'},
        {type:'text', h:'4 · Penutup — tutup dengan energi', b:'Akhiri dengan puncak: rayakan apa yang dibangun siswa hari ini, hargai usaha mereka, dan lepas mereka dengan perasaan senang. 30 detik terakhir membentuk cara mereka mengingat seluruh pelajaran.'}
      ]},
      {t:'💡 Mengapa struktur ini berhasil', cards:[
        {type:'twocol', left:{h:'🧠 Kemudahan Kognitif', items:['Format yang dapat diprediksi menurunkan beban mental','Siswa tahu apa yang diharapkan','Fokus tertuju pada belajar, bukan menguraikan bentuk pelajaran']}, right:{h:'🔁 Peningkatan Retensi', items:['Peninjauan di AWAL mengonsolidasi materi sebelumnya','Ringkasan di AKHIR mengonsolidasi hari ini','Dua titik cek memori → daya ingat jauh lebih baik']}},
        {type:'twocol', left:{h:'🎯 Tujuan yang Jelas', items:['Menyatakan tujuan di awal membangun motivasi','Meninjau pelajaran berikutnya menciptakan momentum','Siswa selalu tahu mengapa mereka di sini']}, right:{h:'✅ Lingkar Akuntabilitas', items:['Pemeriksaan PR di awal...','...berpasangan dengan pemberian PR di akhir','Siswa merasakan kesinambungan antar pelajaran']}},
        {type:'good', txt:'Perhatikan pasangannya: pemanasan ↔ penutup, peninjauan ↔ ringkasan, pemeriksaan PR ↔ pemberian PR, tujuan pelajaran ↔ pratinjau pelajaran berikutnya. Setiap fase pembuka memiliki pasangan penutupnya. Simetri itulah yang membuat struktur ini "melingkar" dan mudah diingat.'}
      ]},
      {t:'🙋 Menjaga setiap anak terlibat', cards:[
        {type:'text', h:'Aturan emas', b:'Pelajaran di mana tutor berbicara dan siswa mendengarkan adalah pelajaran yang lemah. Tugas Anda adalah membuat siswa <strong>melakukan, mengatakan, dan berpikir</strong> sebanyak mungkin. Gunakan keempat teknik ini secara konstan, di setiap fase.'},
        {type:'twocol', left:{h:'❓ Pertanyaan Terbuka', items:['Tanyakan "Menurutmu apa yang akan terjadi jika…?"','Gunakan "Bagaimana kamu akan menyelesaikan…?" untuk memancing penalaran','Hindari pertanyaan ya/tidak — undang pemikiran nyata']}, right:{h:'🖥️ Berbagi Layar', items:['Minta siswa berbagi layar mereka','Biarkan mereka memandu Anda melalui karya mereka sendiri','Bagus saat pemeriksaan PR & pemanasan — membangun kepemilikan']}},
        {type:'twocol', left:{h:'📖 Membaca Slide', items:['Undang siswa membaca teks slide dengan lantang','Minta mereka menjelaskannya dengan kata-kata mereka sendiri','Meningkatkan pemahaman dan menjaga mereka tetap aktif']}, right:{h:'🌟 Pujian & Dorongan', items:['Spesifik: "Kerja bagus menjelaskan langkah itu!"','Pujilah usaha, bukan hanya jawaban yang benar','Gunakan energi untuk menjaga momentum sepanjang waktu']}},
        {type:'warn', txt:'Waspadai jebakan pelajaran pasif: terasa mulus karena tidak ada gesekan, tetapi siswa tidak banyak belajar. Jika Anda telah berbicara lebih dari satu atau dua menit tanpa siswa melakukan atau mengatakan sesuatu, kembalikan kepada mereka.'}
      ]},
      {t:'🎯 Menerapkannya dalam praktik', cards:[
        {type:'hi', h:'Struktur membebaskan Anda, bukan membatasi', b:'Tutor baru terkadang takut struktur yang tetap akan membuat pelajaran menjadi robotik. Sebaliknya justru benar: setelah fase menjadi otomatis, Anda berhenti khawatir tentang "apa selanjutnya?" dan memiliki semua perhatian Anda bebas untuk siswa — pertanyaan mereka, kesalahan mereka, energi mereka. Struktur adalah penopang yang memungkinkan Anda hadir sepenuhnya.'},
        {type:'tip', txt:'Simpan daftar periksa mental (atau harfiah) dari delapan fase untuk pelajaran pertama Anda. Setelah beberapa minggu ritmenya menjadi otomatis. Dalam modul berikutnya, Anda akan menonton pelajaran nyata dan melihat setiap fase dan teknik ini beraksi.'}
      ]}
    ],
    quiz:[
      {q:'Mengapa struktur pelajaran Kodland digambarkan sebagai format "cermin" atau "melingkar"?', opts:['Fase penutup menggemakan fase pembuka secara terbalik, sehingga pelajaran berakhir dengan cara ia dimulai','Tutor dan siswa bertukar peran di tengah','Slide ditampilkan dua kali, maju lalu mundur','Setiap pelajaran mengulang pelajaran sebelumnya persis'], c:0, fb:'Akhir mencerminkan awal secara terbalik (pemanasan↔penutup, peninjauan↔ringkasan, dll.), memberi penutupan dan ritme.'},
      {q:'Seorang tutor melewatkan Peninjauan Pelajaran Sebelumnya untuk menghemat waktu. Apa biaya utamanya, secara pedagogis?', opts:['Mereka kehilangan momen pengambilan kembali — membuat siswa mengingat pembelajaran sebelumnya adalah salah satu cara terkuat untuk mengonsolidasikannya','Tidak ada, selama tujuannya dinyatakan','Pekerjaan rumah tidak bisa diberikan nanti','Pelajaran akan melebihi waktu'], c:0, fb:'Peninjauan memaksa pengambilan kembali, alat memori yang kuat. Ini adalah salah satu dari dua titik cek konsolidasi struktur.'},
      {q:'Pasangan fase mana yang membentuk "lingkar akuntabilitas" sepanjang pelajaran?', opts:['Pemeriksaan PR di awal dan Pemberian PR di akhir','Pemanasan dan Tujuan Pelajaran','Membaca Slide dan Pujian','Ringkasan Pelajaran dan Penutup'], c:0, fb:'Memeriksa pekerjaan rumah di awal dan memberikannya di akhir menutup lingkar dan membangun kesinambungan antar pelajaran.'},
      {q:'Seorang siswa menjawab pertanyaan ya/tidak dengan benar tetapi tampak tidak terlibat. Apa langkah bertanya yang lebih baik?', opts:['Ajukan pertanyaan terbuka seperti "Bagaimana kamu akan menyelesaikan ini?" atau "Menurutmu apa yang terjadi jika…?"','Ajukan lebih banyak pertanyaan ya/tidak lebih cepat','Jawab pertanyaannya sendiri untuk menjaga tempo','Langsung lanjut ke slide berikutnya'], c:0, fb:'Pertanyaan terbuka mengundang penalaran dan pemikiran aktif; pertanyaan ya/tidak membuat siswa santai.'},
      {q:'Apa bentuk pujian terkuat menurut prinsip keterlibatan?', opts:['Pujian spesifik yang mengakui usaha dan proses, mis. "Kerja bagus menjelaskan langkah itu!"','"Bagus" generik setelah setiap jawaban','Memuji hanya jawaban yang benar-benar tepat','Menyimpan semua pujian untuk penutup'], c:0, fb:'Pujian spesifik yang terkait dengan usaha dan proses lebih memotivasi dan kredibel daripada yang generik atau hanya berbasis hasil.'},
      {q:'Seorang tutor menyampaikan pelajaran yang mulus tetapi berbicara paling banyak sementara siswa menonton. Mengapa ini pertanda peringatan?', opts:['Pelajaran pasif terasa tanpa gesekan tetapi siswa belajar sedikit — mereka harus melakukan, mengatakan, dan berpikir sepanjang waktu','Itu bukan masalah jika materinya tercakup','Itu berarti struktur diikuti dengan benar','Kemulusan selalu menandakan pelajaran yang hebat'], c:0, fb:'Keterlibatan adalah tujuannya. Jika tutor berbicara panjang tanpa aksi siswa, pembelajaran menurun — kembalikan kepada siswa.'}
    ]
  },
  {
    id:9, emoji:'🎥', color:'#0EA5E9', lesson:true,
    title:'Contoh Pelajaran yang Hebat',
    desc:'Tonton pelajaran Python Kodland model dari ujung ke ujung, dengan transkrip lengkap dan catatan pengajaran.',
    obj:'Lihat struktur pelajaran delapan fase dan teknik keterlibatan dari modul sebelumnya diterapkan oleh seorang tutor berpengalaman: tempo, bertanya, mencontohkan, umpan balik, dorongan, dan alur kelas — dalam satu pelajaran Python Kodland nyata yang direkam.',
    completeH:'Sudah menonton pelajaran model?',
    completeBody:'Setelah Anda menonton rekaman dan membaca catatan evaluasi, tandai modul ini selesai untuk menyelesaikan pelatihan Anda dan membuka Digital Skill Test.',
    completeBtn:'✓ Tandai sebagai Ditonton',
    sections:[
      {t:'🎬 Rekaman', cards:[
        {type:'video', src:'https://www.youtube-nocookie.com/embed/eNZ6h1oycJI?rel=0', cap:'Pelajaran Python Kodland nyata, direkam secara penuh. Nyalakan teks (CC) untuk mengikuti transkrip yang tersinkron.'},
        {type:'warn', txt:'Rekaman ini adalah pelajaran nyata dan berdurasi sekitar 1 jam 48 menit. Tonton secara penuh ketika Anda dapat memberikan perhatian penuh — ini adalah referensi terbaik untuk semua yang telah dibahas pelatihan ini.'}
      ]},
      {t:'🧭 Tentang pelajaran ini', cards:[
        {type:'text', h:'Apa yang Anda tonton', b:'Ini adalah pelajaran Python Kodland yang asli dan tidak dinaskahkan, dipimpin oleh seorang tutor berpengalaman dengan sekelompok kecil siswa. Kelas ini mengerjakan proyek yang menggabungkan keterampilan sebelumnya — <strong>fungsi dan dictionary/list</strong> (membangun di atas proyek daftar film dan pengelola kata sandi) — jenis proyek konsolidasi yang Anda temui di modul Data dan Fungsi.'},
        {type:'hi', h:'Perhatikan struktur yang baru saja Anda pelajari', b:'Saat Anda menonton, temukan delapan fase dari <strong>Modul 8</strong> beraksi: sapaan dan pemanasan, jembatan ke pelajaran sebelumnya, pemeriksaan pekerjaan rumah, dan tujuan yang jelas di awal — lalu, di akhir, rekap, pekerjaan rumah untuk lain kali, dan pratinjau pelajaran berikutnya. Pembukaan dan penutup saling mencerminkan, persis seperti yang digambarkan struktur "melingkar".'}
      ]},
      {t:'✅ Mengapa ini adalah pelajaran yang hebat — evaluasi QA', cards:[
        {type:'text', h:'Dinilai terhadap kriteria QA kami', b:'Setiap pelajaran Kodland dapat dievaluasi terhadap seperangkat kriteria kualitas QA. Pelajaran ini <strong>lulus semuanya</strong>. Di bawah ini adalah buktinya, dikelompokkan berdasarkan fase pelajaran dari Modul 8 — gunakan sebagai daftar periksa tentang seperti apa "hebat" itu dalam praktik.'},
        {type:'qa', h:'🌅 Membuka pelajaran', items:[
          {k:'Pemanasan & Sapaan', v:'Tutor menyapa siswa dan menanyakan kabar Marvel.'},
          {k:'Tujuan Pelajaran', v:'Menyatakan tujuan — mengerjakan proyek yang menggabungkan pengetahuan mereka sebelumnya.'},
          {k:'Jembatan Pelajaran Sebelumnya', v:'Menanyakan apakah siswa pernah membangun pengelola kata sandi sebelumnya; Marvel mengingat proyek daftar film sebelumnya.'},
          {k:'Peninjauan Tugas Rumah', v:'Meninjau pekerjaan rumah sebelumnya dan membahasnya dengan siswa.'}
        ]},
        {type:'qa', h:'🧑‍🏫 Instruksi & praktik', items:[
          {k:'Pemenggalan Instruksi yang Jelas', v:'Memberikan instruksi dalam langkah-langkah kecil — mis. menjelaskan struktur proyek dan tugas-tugas individual.'},
          {k:'Mencontohkan Sebelum Kerja Mandiri', v:'Mendemonstrasikan cara mencetak elemen dictionary sebelum membiarkan siswa bekerja sendiri.'},
          {k:'Tahap Praktik Ada', v:'Siswa terlibat dalam tahap praktik yang jelas, mengerjakan proyek pemrograman mereka.'}
        ]},
        {type:'qa', h:'🙋 Keterlibatan & partisipasi', items:[
          {k:'Partisipasi Luas', v:'Melibatkan beberapa siswa — Marvel, Gabriel, dan Shriyansh — alih-alih mengandalkan satu orang.'},
          {k:'Menyapa Siswa Secara Langsung', v:'Menyapa siswa dengan nama selama interaksi belajar.'},
          {k:'Partisipasi Belajar Beberapa Siswa', v:'Marvel, Gabriel, dan Shriyansh semuanya ikut serta dalam interaksi belajar.'},
          {k:'Interaksi Siswa Berulang', v:'Menciptakan interaksi belajar berulang dengan siswa yang berbeda sepanjang waktu.'},
          {k:'Umpan Balik yang Berguna Secara Instruksional', v:'Memberi umpan balik pada kode siswa, membantu mereka memperbaiki kesalahan.'},
          {k:'Penalaran Siswa Dipancing', v:'Meminta siswa menjelaskan pemahaman mereka tentang fungsi dan list, dan mendapat respons yang relevan.'}
        ]},
        {type:'qa', h:'😊 Iklim belajar yang positif', items:[
          {k:'Kebingungan Berulang Rendah', v:'Kurang dari tiga pernyataan eksplisit tentang kebingungan siswa di sepanjang pelajaran.'},
          {k:'Tanpa Penolakan atau Kebosanan Eksplisit', v:'Tidak ada penolakan, kebosanan, atau ketidakpuasan eksplisit dari siswa.'}
        ]},
        {type:'qa', h:'🏁 Menutup pelajaran (cermin)', items:[
          {k:'Rekap atau Peninjauan Penutup', v:'Merekap keterampilan yang dipelajari selama modul dan membahas langkah berikutnya.'},
          {k:'Pekerjaan Rumah untuk Kelas Berikutnya', v:'Memberikan pekerjaan rumah — selesaikan proyek yang dimulai di kelas.'},
          {k:'Kesinambungan Pelajaran Berikutnya', v:'Memberi tahu siswa bahwa pelajaran berikutnya akan membahas algoritma linear.'}
        ]},
        {type:'good', txt:'Perhatikan simetrinya: pelajaran dibuka dengan sapaan, jembatan ke waktu sebelumnya, pemeriksaan pekerjaan rumah, dan tujuan yang jelas — dan ditutup dengan rekap, pekerjaan rumah untuk lain kali, dan pratinjau apa yang berikutnya. Cermin itu persis struktur dari Modul 8, dan itu adalah sebagian besar alasan mengapa pelajaran ini mendapat skor sangat baik.'}
      ]}
    ]
  }
]
};
