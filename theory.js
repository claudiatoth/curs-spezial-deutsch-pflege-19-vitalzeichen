// ============================================
// THEORY.JS — Pflege 19: Vitalzeichen
// Cele 4 semne vitale (Blutdruck, Puls, Temperatur, Atmung) + Normalwerte + Comparativ + raportare + Alarm
// Claudia Toth · Annettes Deutschkurs · A2.1
// ============================================

const theoryHTML = `
<div class="theory-intro">
  <h4>📊 Die Vitalzeichen — tabloul de bord al corpului</h4>
  <p>Vitalzeichen (semnele vitale) sunt valorile care îți spun, în câteva secunde, <strong>cum funcționează corpul</strong> lui Frau Müller. Le măsori, le documentezi și — cel mai important — recunoști când o valoare cere medicul sau 112. Cele 4 principale: <strong>Blutdruck</strong> (tensiunea), <strong>Puls</strong>, <strong>Temperatur</strong>, <strong>Atmung</strong> (respirația). Plus, ca bonus modern, <strong>Sauerstoffsättigung</strong> (saturația de oxigen).</p>
  <p>Gramatică nouă: <strong>Comparativ</strong> (höher, niedriger, schneller) + cum <strong>raportezi valorile</strong> în germană (130 zu 85, 37 Grad, 72 Schläge pro Minute). Fără ele nu poți suna la cabinet și spune clar ce ai măsurat.</p>
</div>

<div class="theory-pillars">
  <h4>🏛️ Cei 6 piloni ai semnelor vitale</h4>
  <div class="pillars-grid">
    <div class="pillar-card">
      <div class="pillar-icon">🩸</div>
      <div class="pillar-title">Blutdruck</div>
      <div class="pillar-text">Tensiunea · systolisch/diastolisch.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">💓</div>
      <div class="pillar-title">Puls</div>
      <div class="pillar-text">60-100/min · Tachy/Brady.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🌡️</div>
      <div class="pillar-title">Temperatur</div>
      <div class="pillar-text">36.5-37.5 · Fieber >38.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🫁</div>
      <div class="pillar-title">Atmung</div>
      <div class="pillar-text">12-20/min · Atemnot = urgență.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">📈</div>
      <div class="pillar-title">Comparativ</div>
      <div class="pillar-text">höher · niedriger · zu hoch.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🚨</div>
      <div class="pillar-title">Alarm</div>
      <div class="pillar-text">Când suni medicul / 112.</div>
    </div>
  </div>
</div>

<!-- ============================================
     SUB 1 — Die Vitalzeichen + Geräte
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(0)">
    <h4>1️⃣ Cele 4 semne vitale + aparatele (Geräte)</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-0">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-1" onclick="toggleAudio(event, 'audio-1')">▶</button>
        <audio id="audio-1" preload="none"><source src="audio/01-vitalzeichen.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Înainte de a măsura, trebuie să știi <strong>CE</strong> măsori și <strong>CU CE</strong>. Cele 4 semne vitale clasice + saturația, fiecare cu aparatul lui.</p>

    <h5 style="color:#065f46; margin-top:18px;">📊 Cele 4 (+1) semne vitale</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Germană</th><th>Română</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>der Blutdruck</strong> (RR)</td><td>tensiunea arterială</td></tr>
          <tr><td><strong>der Puls</strong> · die Herzfrequenz</td><td>pulsul · frecvența cardiacă</td></tr>
          <tr><td><strong>die Temperatur</strong> · die Körpertemperatur</td><td>temperatura (corpului)</td></tr>
          <tr><td><strong>die Atmung</strong> · die Atemfrequenz</td><td>respirația · frecvența respiratorie</td></tr>
          <tr><td><strong>die Sauerstoffsättigung</strong> (SpO₂)</td><td>saturația de oxigen (bonus)</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">🩺 Aparatele (Geräte)</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Aparat</th><th>Pentru ce</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>das Blutdruckmessgerät</strong></td><td>tensiometrul (braț sau încheietură)</td></tr>
          <tr><td><strong>das Fieberthermometer</strong></td><td>termometrul (digital / ureche / frunte)</td></tr>
          <tr><td><strong>das Pulsoximeter</strong></td><td>pulsoximetrul (pe deget — puls + SpO₂)</td></tr>
          <tr><td><strong>die Uhr</strong> · die Armbanduhr</td><td>ceasul (pentru a număra puls / respirații)</td></tr>
          <tr><td><strong>die Manschette</strong></td><td>manșeta (a tensiometrului)</td></tr>
        </tbody>
      </table>
    </div>

    <div class="grammar-tip">
      <h5>💡 Sfat — când măsori</h5>
      <p>📌 <strong>Morgens</strong> (dimineața, înainte de cafea/medicamente) — valoare de referință.<br>
      📌 <strong>Bei Beschwerden</strong> (când acuză ceva: amețeli, dureri de cap, palpitații).<br>
      📌 <strong>Nach Arztanweisung</strong> (când doctorul cere — de ex. de 2× pe zi pentru Frau Müller cu Ramipril).<br>
      Mereu măsori <strong>calmă</strong>, pacienta odihnită 5 min — altfel valoarea e fals crescută.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 2 — Blutdruck
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(1)">
    <h4>2️⃣ Blutdruck — tensiunea (systolisch / diastolisch)</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-1">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-2" onclick="toggleAudio(event, 'audio-2')">▶</button>
        <audio id="audio-2" preload="none"><source src="audio/02-blutdruck.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Tensiunea are <strong>două numere</strong>: <strong>systolisch</strong> (cel de sus, când inima bate) și <strong>diastolisch</strong> (cel de jos, când inima se odihnește). Se scrie 120/80 și se citește <strong>„120 zu 80"</strong> (zu = pe / supra). Frau Müller ia Ramipril pentru tensiune, deci o măsori regulat.</p>

    <h5 style="color:#065f46; margin-top:18px;">🩸 Valori normale și anormale</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Valoare</th><th>Înseamnă</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>~120 zu 80</strong></td><td>Normalwert (valoare normală) ✅</td></tr>
          <tr><td><strong>über 140 zu 90</strong></td><td>Bluthochdruck · Hypertonie (tensiune mare) ⚠️</td></tr>
          <tr><td><strong>unter 90 zu 60</strong></td><td>niedriger Blutdruck · Hypotonie (tensiune mică) ⚠️</td></tr>
          <tr><td><strong>über 180 zu 120</strong></td><td>🚨 hipertensiv — sună medicul / 112</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">📏 Cum măsori corect Blutdruck</h5>
    <ul style="margin: 6px 0 0 22px;">
      <li>Pacienta <strong>stă liniștită</strong>, sprijinită, picioarele pe podea (nu picior peste picior)</li>
      <li>Manșeta pe <strong>braț gol</strong>, la nivelul inimii</li>
      <li>În timpul măsurării: <strong>nicht sprechen</strong> (nu vorbiți)</li>
      <li>Dacă valoarea e mare: <strong>aștepți 2-3 min și măsori din nou</strong></li>
      <li>Documentezi cu ora și brațul folosit</li>
    </ul>

    <div class="capcana-box">
      <h5>🚨 Capcana — o valoare mare ≠ panică</h5>
      <p>Tensiunea <strong>variază</strong> normal în timpul zilei (stres, mișcare, cafea). O singură valoare de 145/90 NU e urgență. Măsori de 2-3 ori, calmă, la câteva minute distanță. Doar dacă rămâne mare <strong>și</strong> apar simptome (dureri de cap puternice, amețeli, tulburări de vedere) — atunci suni. Tu raportezi <strong>tendința</strong>, nu un singur număr izolat.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 3 — Puls + Atmung
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(2)">
    <h4>3️⃣ Puls + Atmung — pulsul și respirația</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-2">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-3" onclick="toggleAudio(event, 'audio-3')">▶</button>
        <audio id="audio-3" preload="none"><source src="audio/03-puls-atmung.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para"><strong>Pulsul</strong> = de câte ori bate inima pe minut. <strong>Atmung</strong> = de câte ori respiră pe minut. Le poți măsura cu aparatul (Pulsoximeter) sau manual, cu ceasul.</p>

    <h5 style="color:#065f46; margin-top:18px;">💓 Puls (Herzfrequenz)</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Valoare (Schläge/min)</th><th>Înseamnă</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>60 – 100</strong></td><td>normal (Ruhepuls) ✅</td></tr>
          <tr><td><strong>über 100</strong></td><td>die Tachykardie (prea rapid) ⚠️</td></tr>
          <tr><td><strong>unter 60</strong></td><td>die Bradykardie (prea lent) ⚠️</td></tr>
        </tbody>
      </table>
    </div>
    <p style="margin-top:8px;">Cum măsori manual: 2 degete (<strong>NU degetul mare!</strong>) pe încheietură, numeri 15 secunde × 4. Observă și dacă e <strong>regelmäßig</strong> (regulat) sau <strong>unregelmäßig</strong> (neregulat).</p>

    <h5 style="color:#065f46; margin-top:18px;">🫁 Atmung (Atemfrequenz)</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Valoare (Atemzüge/min)</th><th>Înseamnă</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>12 – 20</strong></td><td>normal ✅</td></tr>
          <tr><td><strong>die Atemnot · die Dyspnoe</strong></td><td>🚨 dificultate de respirație — urgență</td></tr>
          <tr><td><strong>SpO₂ unter 90 %</strong></td><td>🚨 saturație scăzută — 112</td></tr>
        </tbody>
      </table>
    </div>

    <div class="capcana-box">
      <h5>🚨 2 capcane importante</h5>
      <p>1️⃣ La puls <strong>NU folosești degetul mare (der Daumen)</strong> — el are propriul puls și măsori greșit. Folosești arătătorul + mijlociul.<br>
      2️⃣ Respirația o numeri <strong>fără ca pacientul să observe</strong> (de ex. în timp ce „ții pulsul"). Dacă știe că e numărată, își schimbă inconștient ritmul.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 4 — Temperatur
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(3)">
    <h4>4️⃣ Temperatur — temperatura și febra</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-3">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-4" onclick="toggleAudio(event, 'audio-4')">▶</button>
        <audio id="audio-4" preload="none"><source src="audio/04-temperatur.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Temperatura corpului spune dacă există o infecție. Se măsoară în grade Celsius. La Frau Müller folosim de obicei <strong>Ohrthermometer</strong> (termometru de ureche) — rapid și igienic.</p>

    <h5 style="color:#065f46; margin-top:18px;">🌡️ Valorile temperaturii</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Temperatura</th><th>Înseamnă</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>36,5 – 37,5 °C</strong></td><td>normal ✅</td></tr>
          <tr><td><strong>37,5 – 38 °C</strong></td><td>erhöhte Temperatur (subfebrilitate)</td></tr>
          <tr><td><strong>über 38 °C</strong></td><td>das Fieber (febră) ⚠️</td></tr>
          <tr><td><strong>über 39 °C</strong></td><td>hohes Fieber (febră mare) 🚨</td></tr>
          <tr><td><strong>unter 36 °C</strong></td><td>die Untertemperatur (hipotermie) ⚠️</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">📍 Unde măsori + semne însoțitoare</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <tbody>
          <tr><td><strong>im Ohr</strong> (Ohrthermometer)</td><td>în ureche — rapid, ușor</td></tr>
          <tr><td><strong>unter der Achsel</strong> (axillar)</td><td>la subraț — adaugi ~0,5 °C</td></tr>
          <tr><td><strong>an der Stirn</strong></td><td>pe frunte — contactless</td></tr>
          <tr><td><strong>der Schüttelfrost</strong></td><td>frisonul (tremurat — semn de febră)</td></tr>
          <tr><td><strong>das Schwitzen</strong></td><td>transpirația</td></tr>
          <tr><td><strong>die heiße Stirn</strong></td><td>fruntea fierbinte</td></tr>
        </tbody>
      </table>
    </div>

    <div class="grammar-tip">
      <h5>💡 Sfat — la febră</h5>
      <p>📌 Multă apă (viel trinken), pătură subțire (nu o înveli prea gros), cameră aerisită.<br>
      📌 Recap L17: pentru Frau Müller (Ramipril) la febră dai <strong>Paracetamol, NU Ibuprofen</strong>.<br>
      📌 Febră >39 °C care nu scade, sau confuzie / Atemnot → suni Hausarzt. >40 °C → 112.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 5 — GRAMATICA STAR: Comparativ + raportare
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(4)">
    <h4>5️⃣ 🌟 Gramatică — Comparativ (höher als) + cum raportezi valorile</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-4">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-5" onclick="toggleAudio(event, 'audio-5')">▶</button>
        <audio id="audio-5" preload="none"><source src="audio/05-grammatik.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Ca să raportezi o valoare, compari: „tensiunea e <strong>mai mare</strong> ca ieri". Asta e <strong>Comparativ</strong>. Regula de bază: adjectiv + <strong>-er</strong> + <strong>als</strong>.</p>

    <div class="grammar-highlight" style="background:#ecfdf5; border:2px solid #047857; border-radius:10px; padding:14px 18px; margin:14px 0;">
      <p style="margin:0; font-size:1.05rem; color:#065f46; text-align:center;"><strong>Adjektiv + -er + als</strong></p>
      <p style="margin:6px 0 0; text-align:center; color:#047857;"><em>hoch → <strong>höher als</strong> · schnell → <strong>schneller als</strong></em></p>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">📈 Comparativul adjectivelor utile</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Adjectiv</th><th>Comparativ</th><th>Traducere RO</th></tr>
        </thead>
        <tbody>
          <tr><td>hoch (mare)</td><td><strong>höher</strong> (cu Umlaut!)</td><td>mai mare</td></tr>
          <tr><td>niedrig (mic)</td><td><strong>niedriger</strong></td><td>mai mic</td></tr>
          <tr><td>schnell (rapid)</td><td><strong>schneller</strong></td><td>mai rapid</td></tr>
          <tr><td>langsam (lent)</td><td><strong>langsamer</strong></td><td>mai lent</td></tr>
          <tr><td>warm (cald)</td><td><strong>wärmer</strong> (Umlaut!)</td><td>mai cald</td></tr>
          <tr><td>gut (bun)</td><td><strong>besser</strong> (NEREGULAT!)</td><td>mai bine</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">⚠️ „zu" + adjectiv = PREA mult (semnal de alarmă)</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <tbody>
          <tr><td><strong>zu hoch</strong></td><td>prea mare (tensiune, febră)</td></tr>
          <tr><td><strong>zu niedrig</strong></td><td>prea mic</td></tr>
          <tr><td><strong>zu schnell</strong></td><td>prea rapid (puls)</td></tr>
          <tr><td><strong>zu langsam</strong></td><td>prea lent</td></tr>
          <tr><td><strong>zu warm / zu kalt</strong></td><td>prea cald / prea rece</td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">🗣️ Cum CITEȘTI / raportezi valorile</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Scris</th><th>Cum spui în germană</th></tr>
        </thead>
        <tbody>
          <tr><td>Blutdruck 130/85</td><td><strong>hundertdreißig zu fünfundachtzig</strong> (130 zu 85)</td></tr>
          <tr><td>Temperatur 37,8 °C</td><td><strong>siebenunddreißig Grad acht</strong> (37 Grad 8)</td></tr>
          <tr><td>Puls 72</td><td><strong>zweiundsiebzig Schläge pro Minute</strong></td></tr>
          <tr><td>SpO₂ 96 %</td><td><strong>sechsundneunzig Prozent</strong></td></tr>
        </tbody>
      </table>
    </div>

    <h5 style="color:#065f46; margin-top:18px;">💬 Fraze model de raportare</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <tbody>
          <tr><td><strong>Der Blutdruck ist höher als gestern.</strong></td><td>Tensiunea e mai mare ca ieri.</td></tr>
          <tr><td><strong>Der Puls ist schneller als normal.</strong></td><td>Pulsul e mai rapid ca normal.</td></tr>
          <tr><td><strong>Die Temperatur ist zu hoch.</strong></td><td>Temperatura e prea mare.</td></tr>
          <tr><td><strong>Heute geht es ihr besser als gestern.</strong></td><td>Azi îi e mai bine ca ieri.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="final-note-box">
      <h5>🌟 De ce contează comparativul</h5>
      <p>Medicul nu vrea doar un număr — vrea <strong>tendința</strong>. „145 zu 90, <em>höher als gestern</em>" spune mult mai mult decât „145 zu 90". Comparativul te transformă din cineva care citește cifre în cineva care <strong>observă și gândește clinic</strong>. Asta te face de neînlocuit.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 6 — Dokumentation + Alarm
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(5)">
    <h4>6️⃣ Documentarea + când dai alarma</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-5">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-6" onclick="toggleAudio(event, 'audio-6')">▶</button>
        <audio id="audio-6" preload="none"><source src="audio/06-dokumentation.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">O valoare măsurată dar nedocumentată = o valoare pierdută. Tu ești <strong>ochii medicului</strong>: notezi tot, ca el să vadă tendința în timp.</p>

    <h5 style="color:#065f46; margin-top:18px;">📋 Ce documentezi (Vitalzeichen-Protokoll)</h5>
    <ul style="margin: 6px 0 0 22px;">
      <li><strong>Datum + Uhrzeit</strong> (data + ora)</li>
      <li><strong>Der Wert</strong> (valoarea — toate cele măsurate)</li>
      <li><strong>Auffälligkeiten</strong> (ce ai observat: amețeli, paloare, transpirație)</li>
      <li><strong>Was du getan hast</strong> (ce ai făcut: măsurat din nou, sunat medicul)</li>
    </ul>

    <h5 style="color:#065f46; margin-top:18px;">🚨 Când suni medicul / 112</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Situație</th><th>Acțiune</th></tr>
        </thead>
        <tbody>
          <tr><td>Blutdruck über 180 zu 120</td><td>🚨 sună Hausarzt; cu dureri cap/vedere → 112</td></tr>
          <tr><td>Blutdruck unter 90 zu 60 + Schwindel</td><td>📞 Hausarzt</td></tr>
          <tr><td>Fieber über 39 °C anhaltend</td><td>📞 Hausarzt; über 40 °C → 112</td></tr>
          <tr><td>Puls über 120 oder unter 40</td><td>📞 Hausarzt; cu Brustschmerzen → 🚑 112</td></tr>
          <tr><td><strong>Atemnot · SpO₂ unter 90 %</strong></td><td>🚑 <strong>112 sofort</strong></td></tr>
          <tr><td>Bewusstlosigkeit (leșin)</td><td>🚑 <strong>112 sofort</strong></td></tr>
        </tbody>
      </table>
    </div>

    <div class="final-note-box">
      <h5>🚨🚨 REGULA DE AUR — valoare extremă + simptom = 112</h5>
      <p>O valoare extremă SINGURĂ → măsori din nou, calmă, și suni Hausarzt. Dar o valoare extremă <strong>+ un simptom grav</strong> (Brustschmerzen / Atemnot / Bewusstlosigkeit / Verwirrtheit) = <strong>112 imediat</strong>, nu mai aștepți. <em>Im Zweifel: noch einmal messen + anrufen.</em> În dubiu: măsori din nou + suni. Tu nu pui diagnostic — tu observi, documentezi și escaladezi la timp. Asta e tot ce ți se cere și e enorm.</p>
    </div>

  </div>
</div>
`;

function buildTheory() {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
}

buildTheory();
