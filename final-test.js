// ============================================
// FINAL TEST — Pflege 19: Vitalzeichen
// 25 întrebări × 5 categorii
// normalizeAnswerFT elimină . ! ? ; : → la propoziții punctul final NU contează
// Claudia Toth · Annettes Deutschkurs · A2.1
// ============================================

function normalizeAnswerFT(str) {
    return (str || '')
        .toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '');
}

const finalTestData = [
    // === 1. VITALZEICHEN + GERÄTE (5) ===
    { id: 1, category: 'Vitalzeichen + Geräte', type: 'mc', question: 'Cele 4 semne vitale (Vitalzeichen) principale sunt:', options: ['Greutate, înălțime, vârstă, somn', 'Blutdruck, Puls, Temperatur, Atmung', 'Apetit, dispoziție, vedere, auz', 'Doar tensiunea'], correctIndex: 1, correct: 'Blutdruck, Puls, Temperatur, Atmung' },
    { id: 2, category: 'Vitalzeichen + Geräte', type: 'fill', question: 'Tensiunea arterială (cu articol): „der ____"', correct: 'Blutdruck', accept: ['blutdruck'] },
    { id: 3, category: 'Vitalzeichen + Geräte', type: 'mc', question: 'das Pulsoximeter (pe deget) măsoară:', options: ['Doar temperatura', 'Pulsul + saturația de oxigen (SpO₂)', 'Tensiunea', 'Greutatea'], correctIndex: 1, correct: 'Pulsul + SpO₂ (saturația de oxigen)' },
    { id: 4, category: 'Vitalzeichen + Geräte', type: 'fill', question: 'Termometrul: „das ____thermometer" (completează prima parte)', correct: 'Fieber', accept: ['fieber'] },
    { id: 5, category: 'Vitalzeichen + Geräte', type: 'mc', question: 'Pentru o valoare de referință corectă, măsori:', options: ['După cafea și mișcare', 'Morgens, cu pacienta odihnită 5 min, calmă', 'În timp ce vorbește', 'Imediat după ce s-a ridicat'], correctIndex: 1, correct: 'Dimineața, odihnită, calmă (altfel valoarea e fals crescută)' },

    // === 2. BLUTDRUCK + NORMALWERTE (5) ===
    { id: 6, category: 'Blutdruck + Normalwerte', type: 'mc', question: 'Valoarea normală a tensiunii (Normalwert) este aproximativ:', options: ['200 zu 120', '120 zu 80', '60 zu 40', '90 zu 200'], correctIndex: 1, correct: '~120 zu 80' },
    { id: 7, category: 'Blutdruck + Normalwerte', type: 'fill', question: 'Numărul de SUS (când inima bate): „____" (termen DE)', correct: 'systolisch', accept: ['systolisch'] },
    { id: 8, category: 'Blutdruck + Normalwerte', type: 'mc', question: 'Tensiune peste 140 zu 90 se numește:', options: ['Hypotonie (tensiune mică)', 'Bluthochdruck / Hypertonie (tensiune mare)', 'Normalwert', 'Bradykardie'], correctIndex: 1, correct: 'Bluthochdruck · Hypertonie (tensiune mare)' },
    { id: 9, category: 'Blutdruck + Normalwerte', type: 'fill', question: '„130/85" se citește în germană „130 ____ 85"', correct: 'zu', accept: ['zu'] },
    { id: 10, category: 'Blutdruck + Normalwerte', type: 'mc', question: 'O singură măsurare arată 145 zu 90. Ce faci?', options: ['Panică + suni 112', 'Măsori din nou calmă după câteva minute; alertezi doar dacă rămâne mare + simptome', 'Îi dai o pastilă în plus', 'Ignori complet'], correctIndex: 1, correct: 'Măsori din nou calmă · raportezi tendința, nu un număr izolat' },

    // === 3. PULS + ATMUNG + TEMPERATUR (5) ===
    { id: 11, category: 'Puls + Atmung + Temperatur', type: 'mc', question: 'Pulsul normal (Ruhepuls) este:', options: ['20-40/min', '60-100/min', '120-160/min', '200/min'], correctIndex: 1, correct: '60-100 bătăi pe minut' },
    { id: 12, category: 'Puls + Atmung + Temperatur', type: 'fill', question: 'Puls peste 100/min = „die ____" (termen medical)', correct: 'Tachykardie', accept: ['tachykardie'] },
    { id: 13, category: 'Puls + Atmung + Temperatur', type: 'mc', question: 'Când iei pulsul manual, NU folosești:', options: ['Arătătorul', 'Degetul mare (der Daumen) — are propriul puls!', 'Degetul mijlociu', 'Încheietura'], correctIndex: 1, correct: 'NU degetul mare (der Daumen) — măsori greșit' },
    { id: 14, category: 'Puls + Atmung + Temperatur', type: 'fill', question: 'Febră (Fieber) = peste ____ grade Celsius', correct: '38', accept: ['38', 'achtunddreißig', 'achtunddreissig'] },
    { id: 15, category: 'Puls + Atmung + Temperatur', type: 'mc', question: 'Respirația normală + semnalul de urgență:', options: ['5-8/min · totul normal', '12-20/min normal · Atemnot (dificultate de respirație) = urgență', '40-60/min normal', 'Nu se măsoară'], correctIndex: 1, correct: '12-20/min normal · Atemnot = 🚨 urgență' },

    // === 4. COMPARATIV (5) ===
    { id: 16, category: 'Comparativ', type: 'mc', question: 'Regula comparativului în germană:', options: ['Adjektiv + -ste', 'Adjektiv + -er + als (höher als)', 'mehr + Adjektiv', 'Adjektiv neschimbat'], correctIndex: 1, correct: 'Adjektiv + -er + als: höher als, schneller als' },
    { id: 17, category: 'Comparativ', type: 'fill', question: 'hoch → „____" (mai mare — atenție la Umlaut!)', correct: 'höher', accept: ['höher', 'hoeher'] },
    { id: 18, category: 'Comparativ', type: 'fill', question: 'schnell → „____" (mai rapid)', correct: 'schneller', accept: ['schneller'] },
    { id: 19, category: 'Comparativ', type: 'mc', question: 'Comparativul lui „gut" (bun) este:', options: ['guter', 'gutter', 'besser (NEREGULAT)', 'mehr gut'], correctIndex: 2, correct: 'besser (neregulat)' },
    { id: 20, category: 'Comparativ', type: 'fill', question: '„prea mare" (semnal de alarmă) = „zu ____"', correct: 'hoch', accept: ['hoch'] },

    // === 5. TRADUCERE + ALARM (5) ===
    { id: 21, category: 'Traducere + Alarm', type: 'fill', question: '🇷🇴 „Tensiunea e prea mare." → 🇩🇪 ? (punctul e opțional)', correct: 'Der Blutdruck ist zu hoch.', accept: ['der blutdruck ist zu hoch'] },
    { id: 22, category: 'Traducere + Alarm', type: 'fill', question: '🇷🇴 „Are febră." → 🇩🇪 ?', correct: 'Sie hat Fieber.', accept: ['sie hat fieber'] },
    { id: 23, category: 'Traducere + Alarm', type: 'mc', question: '🚨 Frau Müller are Atemnot și SpO₂ 88%. Faci:', options: ['Aștepți până dimineață', 'Suni 112 imediat', 'Îi dai apă și aștepți', 'Notezi și gata'], correctIndex: 1, correct: 'Atemnot + SpO₂ <90% = 🚑 112 imediat' },
    { id: 24, category: 'Traducere + Alarm', type: 'fill', question: '🇷🇴 „Pulsul e mai rapid ca normal." → 🇩🇪 ? (comparativ)', correct: 'Der Puls ist schneller als normal.', accept: ['der puls ist schneller als normal'] },
    { id: 25, category: 'Traducere + Alarm', type: 'mc', question: 'Regula de aur la o valoare extremă:', options: ['Pui diagnostic singură', 'Valoare extremă + simptom grav (Brustschmerzen/Atemnot/Bewusstlosigkeit) = 112 imediat; documentezi mereu', 'Schimbi medicația', 'Aștepți să treacă'], correctIndex: 1, correct: 'Valoare extremă + simptom grav = 112 · tu observi, documentezi, escaladezi' }
];

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    let html = `
        <div class="final-test-intro">
            <h4>🎯 Test Final — 25 întrebări</h4>
            <p>5 categorii × 5 întrebări: <strong>Vitalzeichen+Geräte · Blutdruck+Normalwerte · Puls+Atmung+Temperatur · Comparativ · Traducere+Alarm</strong></p>
        </div>
        <div id="ft-questions">`;
    finalTestData.forEach((q, i) => {
        html += `<div class="ft-question" data-q-id="${q.id}">
            <div class="ft-q-header">
                <span class="ft-q-num">Întrebarea ${i + 1} / 25</span>
                <span class="ft-q-category">${q.category}</span>
            </div>
            <div class="ft-q-text">${q.question}</div>`;
        if (q.type === 'mc') {
            q.options.forEach((opt, idx) => {
                html += `<label class="ft-option"><input type="radio" name="ft-${q.id}" value="${idx}"> <span>${opt}</span></label>`;
            });
        } else if (q.type === 'fill') {
            html += `<input type="text" class="ft-input" id="ft-input-${q.id}" placeholder="Scrie răspunsul...">`;
        }
        html += `<div class="ft-feedback" id="ft-fb-${q.id}"></div></div>`;
    });
    html += `</div>
        <div class="ft-controls">
            <button class="btn btn-check" onclick="checkFinalTest()">🎯 Verifică TOT testul</button>
            <button class="btn btn-reset" onclick="resetFinalTest()">↻ Reia testul</button>
        </div>
        <div class="ft-score" id="ft-score"></div>`;
    container.innerHTML = html;
}

function checkFinalTest() {
    let correct = 0;
    finalTestData.forEach(q => {
        const fb = document.getElementById(`ft-fb-${q.id}`);
        if (!fb) return;
        let userOk = false;
        if (q.type === 'mc') {
            const checked = document.querySelector(`input[name="ft-${q.id}"]:checked`);
            if (checked && parseInt(checked.value) === q.correctIndex) userOk = true;
        } else if (q.type === 'fill') {
            const inp = document.getElementById(`ft-input-${q.id}`);
            if (inp && q.accept.some(a => normalizeAnswerFT(a) === normalizeAnswerFT(inp.value))) userOk = true;
        }
        fb.className = userOk ? 'ft-feedback correct' : 'ft-feedback incorrect';
        fb.innerHTML = userOk ? `✓ Corect!` : `✗ Răspuns corect: <strong>${q.correct}</strong>`;
        if (userOk) correct++;
    });
    const pct = Math.round((correct / finalTestData.length) * 100);
    const scoreEl = document.getElementById('ft-score');
    if (!scoreEl) return;
    let msg = '';
    if (pct === 100) msg = `🏆 ${correct}/25 (100%) — PERFECT! Semnele vitale sunt ale tale!`;
    else if (pct >= 80) msg = `🎉 ${correct}/25 (${pct}%) — Foarte bine!`;
    else if (pct >= 60) msg = `💪 ${correct}/25 (${pct}%) — Bine.`;
    else msg = `📚 ${correct}/25 (${pct}%) — Mai exersează.`;
    scoreEl.textContent = msg;
    scoreEl.className = 'ft-score ' + (pct >= 80 ? 'score-high' : pct >= 60 ? 'score-mid' : 'score-low');
}

function resetFinalTest() {
    finalTestData.forEach(q => {
        const fb = document.getElementById(`ft-fb-${q.id}`);
        if (fb) { fb.className = 'ft-feedback'; fb.innerHTML = ''; }
        if (q.type === 'mc') {
            document.querySelectorAll(`input[name="ft-${q.id}"]`).forEach(r => r.checked = false);
        } else {
            const inp = document.getElementById(`ft-input-${q.id}`);
            if (inp) inp.value = '';
        }
    });
    const scoreEl = document.getElementById('ft-score');
    if (scoreEl) { scoreEl.textContent = ''; scoreEl.className = 'ft-score'; }
}

buildFinalTest();
