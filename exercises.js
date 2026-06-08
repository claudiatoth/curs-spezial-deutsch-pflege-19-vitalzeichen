// ============================================
// EXERCISES.JS — Pflege 19: Vitalzeichen
// 7 exerciții × 10 itemi = 70 itemi total
// Schreiben form: forms.gle/fj6neBbNGdYRRzjV8
// REGULĂ: la propoziții, răspunsul e valid CU sau FĂRĂ punct final
//   → normalizeAnswer elimină . ! ? ; : (deci punctul nu contează niciodată) + variante de topică în accept[]
// Claudia Toth · Annettes Deutschkurs · A2.1
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '');   // <- punctul final și toată punctuația sunt eliminate
}

function answerMatches(item, userInput) {
    const u = normalizeAnswer(userInput);
    if (!u) return false;
    if (item.accept.some(a => normalizeAnswer(a) === u)) return true;
    if (item.sentence) {
        const sentenceClean = item.sentence.replace(/\s*\([^)]*\)\s*/g, ' ');
        return item.accept.some(a => {
            const full = sentenceClean.replace(/____+/g, a);
            return normalizeAnswer(full) === u;
        });
    }
    return false;
}

// EX 1: Match Vitalzeichen + Geräte
const ex1Data = [
    { id: 'a', de: 'der Blutdruck', accept: ['tensiune', 'tensiunea', 'tensiunea arteriala'], correct: 'tensiunea arterială' },
    { id: 'b', de: 'der Puls', accept: ['puls', 'pulsul'], correct: 'pulsul' },
    { id: 'c', de: 'die Temperatur', accept: ['temperatura', 'temperatura corpului'], correct: 'temperatura' },
    { id: 'd', de: 'die Atmung', accept: ['respiratie', 'respiratia'], correct: 'respirația' },
    { id: 'e', de: 'das Blutdruckmessgerät', accept: ['tensiometru', 'tensiometrul', 'aparat de tensiune'], correct: 'tensiometrul' },
    { id: 'f', de: 'das Fieberthermometer', accept: ['termometru', 'termometrul'], correct: 'termometrul' },
    { id: 'g', de: 'das Pulsoximeter', accept: ['pulsoximetru', 'pulsoximetrul'], correct: 'pulsoximetrul (puls + SpO₂)' },
    { id: 'h', de: 'das Fieber', accept: ['febra'], correct: 'febra' },
    { id: 'i', de: 'der Schüttelfrost', accept: ['frison', 'frisonul', 'frisoane'], correct: 'frisonul' },
    { id: 'j', de: 'die Atemnot', accept: ['dificultate de respiratie', 'lipsa de aer', 'dispnee', 'greutate la respiratie'], correct: 'dificultatea de respirație (urgență)' }
];

function buildEx1() {
    const c = document.getElementById('ex1-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>📊 Scrie traducerea</strong> pentru semnele vitale + aparate.</div>';
    ex1Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>🇩🇪 ${it.de}</label><input type="text" id="ex1-${it.id}" placeholder="Scrie traducerea..."></div><div class="feedback" id="ex1-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx1() {
    let correct = 0; const total = ex1Data.length;
    ex1Data.forEach(it => {
        const inp = document.getElementById(`ex1-${it.id}`); const fb = document.getElementById(`ex1-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx1() { ex1Data.forEach(it => { const i = document.getElementById(`ex1-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex1-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 2: Comparativ + „zu" + adjektiv
const ex2Data = [
    { id: 'a', sentence: 'hoch → ____ (mai mare — atenție la Umlaut!)', translation: 'MAI MARE.', correct: 'höher', accept: ['höher', 'hoeher'] },
    { id: 'b', sentence: 'niedrig → ____ (mai mic)', translation: 'MAI MIC.', correct: 'niedriger', accept: ['niedriger'] },
    { id: 'c', sentence: 'schnell → ____ (mai rapid)', translation: 'MAI RAPID.', correct: 'schneller', accept: ['schneller'] },
    { id: 'd', sentence: 'langsam → ____ (mai lent)', translation: 'MAI LENT.', correct: 'langsamer', accept: ['langsamer'] },
    { id: 'e', sentence: 'gut → ____ (mai bine — NEREGULAT!)', translation: 'MAI BINE.', correct: 'besser', accept: ['besser'] },
    { id: 'f', sentence: 'Der Puls ist ____ als normal. (mai rapid — schnell)', translation: 'Pulsul e MAI RAPID ca normal.', correct: 'schneller', accept: ['schneller'] },
    { id: 'g', sentence: 'Die Temperatur ist ____ als gestern. (mai mare — hoch)', translation: 'Temperatura e MAI MARE ca ieri.', correct: 'höher', accept: ['höher', 'hoeher'] },
    { id: 'h', sentence: 'Der Blutdruck ist zu ____. (prea mare)', translation: 'Tensiunea e PREA MARE.', correct: 'hoch', accept: ['hoch'] },
    { id: 'i', sentence: 'Der Puls ist zu ____. (prea rapid)', translation: 'Pulsul e PREA RAPID.', correct: 'schnell', accept: ['schnell'] },
    { id: 'j', sentence: 'warm → ____ (mai cald — Umlaut!)', translation: 'MAI CALD.', correct: 'wärmer', accept: ['wärmer', 'waermer'] }
];

function buildEx2() {
    const c = document.getElementById('ex2-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🌟 Comparativ + „zu".</strong> Regula: adjectiv + <strong>-er</strong> + als (hoch→höher, schnell→schneller). NEREGULAT: gut→besser. „<strong>zu</strong> + adjectiv" = PREA mult (zu hoch = semnal de alarmă).</div>';
    ex2Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex2-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex2-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx2() {
    let correct = 0; const total = ex2Data.length;
    ex2Data.forEach(it => {
        const inp = document.getElementById(`ex2-${it.id}`); const fb = document.getElementById(`ex2-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx2() { ex2Data.forEach(it => { const i = document.getElementById(`ex2-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex2-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 3: Audio dictat
const ex3Data = [
    { id: 'a', audio: 'audio/dictat-01.wav', correct: 'der Blutdruck', accept: ['der blutdruck', 'blutdruck'] },
    { id: 'b', audio: 'audio/dictat-02.wav', correct: 'der Puls', accept: ['der puls', 'puls'] },
    { id: 'c', audio: 'audio/dictat-03.wav', correct: 'die Temperatur', accept: ['die temperatur', 'temperatur'] },
    { id: 'd', audio: 'audio/dictat-04.wav', correct: 'die Atmung', accept: ['die atmung', 'atmung'] },
    { id: 'e', audio: 'audio/dictat-05.wav', correct: 'das Fieber', accept: ['das fieber', 'fieber'] },
    { id: 'f', audio: 'audio/dictat-06.wav', correct: 'höher', accept: ['höher', 'hoeher'] },
    { id: 'g', audio: 'audio/dictat-07.wav', correct: 'niedriger', accept: ['niedriger'] },
    { id: 'h', audio: 'audio/dictat-08.wav', correct: 'zu hoch', accept: ['zu hoch'] },
    { id: 'i', audio: 'audio/dictat-09.wav', correct: 'die Manschette', accept: ['die manschette', 'manschette'] },
    { id: 'j', audio: 'audio/dictat-10.wav', correct: 'messen', accept: ['messen'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🎙️ Audio dictat — Vitalzeichen + Comparativ.</strong></div>';
    ex3Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><div class="audio-dictat-row"><button class="audio-btn-mini" id="btn-${it.audio}" onclick="toggleAudio(event, 'audio-dictat-${it.id}')">▶</button><audio id="audio-dictat-${it.id}" preload="none"><source src="${it.audio}" type="audio/wav"></audio><span style="color:#6b7280; font-size:0.9rem;">Ascultă și scrie:</span></div><input type="text" id="ex3-${it.id}" placeholder="Scrie cuvântul..."></div><div class="feedback" id="ex3-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx3() {
    let correct = 0; const total = ex3Data.length;
    ex3Data.forEach(it => {
        const inp = document.getElementById(`ex3-${it.id}`); const fb = document.getElementById(`ex3-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx3() { ex3Data.forEach(it => { const i = document.getElementById(`ex3-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex3-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 4: Normalwerte + Alarm
const ex4Data = [
    { id: 'a', sentence: 'Blutdruck normal: ____ zu 80. (numărul de sus)', translation: '120.', correct: '120', accept: ['120', 'hundertzwanzig'] },
    { id: 'b', sentence: 'Puls normal: ____ bis 100 pe minut. (limita de jos)', translation: '60.', correct: '60', accept: ['60', 'sechzig'] },
    { id: 'c', sentence: 'Fieber = peste ____ grade Celsius.', translation: '38.', correct: '38', accept: ['38', 'achtunddreißig', 'achtunddreissig'] },
    { id: 'd', sentence: 'Atmung normală: 12 bis ____ pe minut.', translation: '20.', correct: '20', accept: ['20', 'zwanzig'] },
    { id: 'e', sentence: 'Puls peste 100 = die ____. (termen medical)', translation: 'TACHYKARDIE.', correct: 'Tachykardie', accept: ['tachykardie', 'die tachykardie'] },
    { id: 'f', sentence: 'Puls sub 60 = die ____. (termen medical)', translation: 'BRADYKARDIE.', correct: 'Bradykardie', accept: ['bradykardie', 'die bradykardie'] },
    { id: 'g', sentence: 'La puls NU folosești degetul ____. (mare)', translation: 'MARE (der Daumen).', correct: 'Daumen', accept: ['daumen', 'der daumen', 'dem daumen'] },
    { id: 'h', sentence: '🚨 Atemnot sau SpO₂ sub 90% → suni ____. (numărul de urgență)', translation: '112.', correct: '112', accept: ['112'] },
    { id: 'i', sentence: 'Tensiunea „130/85" se citește „130 ____ 85".', translation: 'ZU.', correct: 'zu', accept: ['zu'] },
    { id: 'j', sentence: 'Valorile măsurate le notezi într-un ____. (proces-verbal)', translation: 'PROTOKOLL.', correct: 'Protokoll', accept: ['protokoll', 'das protokoll', 'vitalzeichenprotokoll'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>📈 Normalwerte + alarm.</strong> 120 zu 80 · puls 60-100 · febră >38 · respirație 12-20 · NU degetul mare la puls · Atemnot → 112 · documentezi tot.</div>';
    ex4Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex4-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex4-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx4() {
    let correct = 0; const total = ex4Data.length;
    ex4Data.forEach(it => {
        const inp = document.getElementById(`ex4-${it.id}`); const fb = document.getElementById(`ex4-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx4() { ex4Data.forEach(it => { const i = document.getElementById(`ex4-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex4-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 5: Dialog Gap-Fill (Dialog 1 — Blutdruck messen)
const ex5Data = [
    { id: 'a', sentence: 'Andreea: „Ich möchte Ihren ____ messen." (TENSIUNEA)', translation: 'Vreau să vă măsor TENSIUNEA.', correct: 'Blutdruck', accept: ['blutdruck', 'den blutdruck'] },
    { id: 'b', sentence: 'Andreea: „Bitte sitzen Sie ____." (LINIȘTITĂ)', translation: 'Stați LINIȘTITĂ.', correct: 'ruhig', accept: ['ruhig'] },
    { id: 'c', sentence: 'Andreea: „Ich lege die ____ an." (MANȘETA)', translation: 'Pun MANȘETA.', correct: 'Manschette', accept: ['manschette', 'die manschette'] },
    { id: 'd', sentence: 'Andreea: „Bitte nicht ____." (a VORBI)', translation: 'Nu VORBIȚI.', correct: 'sprechen', accept: ['sprechen'] },
    { id: 'e', sentence: 'Andreea: „Hundertfünfundvierzig ____ neunzig." (cum citești /)', translation: '145 ZU 90.', correct: 'zu', accept: ['zu'] },
    { id: 'f', sentence: 'Frau Müller: „Ist das ____?" (MARE)', translation: 'E MARE?', correct: 'hoch', accept: ['hoch'] },
    { id: 'g', sentence: 'Andreea: „Ein bisschen ____ als gestern." (MAI MARE — comparativ)', translation: 'MAI MARE ca ieri.', correct: 'höher', accept: ['höher', 'hoeher'] },
    { id: 'h', sentence: 'Andreea: „Aber kein Grund zur ____." (ÎNGRIJORARE)', translation: 'Fără motiv de ÎNGRIJORARE.', correct: 'Sorge', accept: ['sorge'] },
    { id: 'i', sentence: 'Andreea: „Ich messe in einer Stunde noch ____." (O DATĂ)', translation: 'Mai măsor O DATĂ.', correct: 'einmal', accept: ['einmal'] },
    { id: 'j', sentence: 'Frau Müller: „Danke, dass Sie so ____ sind." (ATENTĂ/GRIJULIE)', translation: 'Mulțumesc că ești atât de ATENTĂ.', correct: 'vorsichtig', accept: ['vorsichtig'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🩸 Dialog gap-fill — Blutdruck messen am Morgen (Dialog 1).</strong></div>';
    ex5Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex5-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex5-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx5() {
    let correct = 0; const total = ex5Data.length;
    ex5Data.forEach(it => {
        const inp = document.getElementById(`ex5-${it.id}`); const fb = document.getElementById(`ex5-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx5() { ex5Data.forEach(it => { const i = document.getElementById(`ex5-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex5-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 6: Traducere RO → DE (PROPOZIȚII — punctul final NU contează; mai multe variante valide)
const ex6Data = [
    { id: 'a', ro: 'Vreau să vă măsor tensiunea.', correct: 'Ich möchte Ihren Blutdruck messen.', accept: ['ich möchte ihren blutdruck messen', 'ich moechte ihren blutdruck messen', 'ich will ihren blutdruck messen'] },
    { id: 'b', ro: 'Tensiunea e 145 cu 90.', correct: 'Der Blutdruck ist 145 zu 90.', accept: ['der blutdruck ist 145 zu 90', 'der blutdruck ist hundertfünfundvierzig zu neunzig', 'der blutdruck ist hundertfuenfundvierzig zu neunzig'] },
    { id: 'c', ro: 'Pulsul e 72.', correct: 'Der Puls ist 72.', accept: ['der puls ist 72', 'der puls ist zweiundsiebzig'] },
    { id: 'd', ro: 'E un pic mai mare ca ieri.', correct: 'Es ist ein bisschen höher als gestern.', accept: ['es ist ein bisschen höher als gestern', 'es ist ein bisschen hoeher als gestern', 'es ist etwas höher als gestern', 'es ist höher als gestern'] },
    { id: 'e', ro: 'Stați liniștită, vă rog.', correct: 'Bitte sitzen Sie ruhig.', accept: ['bitte sitzen sie ruhig', 'sitzen sie bitte ruhig', 'sitzen sie ruhig'] },
    { id: 'f', ro: 'Are febră.', correct: 'Sie hat Fieber.', accept: ['sie hat fieber'] },
    { id: 'g', ro: 'Temperatura e 38 de grade.', correct: 'Die Temperatur ist 38 Grad.', accept: ['die temperatur ist 38 grad', 'die temperatur ist achtunddreißig grad', 'die temperatur ist achtunddreissig grad'] },
    { id: 'h', ro: 'Tensiunea e prea mare.', correct: 'Der Blutdruck ist zu hoch.', accept: ['der blutdruck ist zu hoch'] },
    { id: 'i', ro: 'Măsor încă o dată.', correct: 'Ich messe noch einmal.', accept: ['ich messe noch einmal', 'ich messe noch mal', 'ich messe es noch einmal'] },
    { id: 'j', ro: 'Notez toate valorile.', correct: 'Ich notiere alle Werte.', accept: ['ich notiere alle werte', 'ich schreibe alle werte auf', 'ich dokumentiere alle werte'] }
];

function buildEx6() {
    const c = document.getElementById('ex6-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🌍 Traducere RO → DE.</strong> 💡 Punctul de la final e <strong>opțional</strong> — răspunsul e corect cu sau fără el. Acceptăm și variante de topică.</div>';
    ex6Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>🇷🇴 ${it.ro}</label><input type="text" id="ex6-${it.id}" placeholder="Scrie în germană..."></div><div class="feedback" id="ex6-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx6() {
    let correct = 0; const total = ex6Data.length;
    ex6Data.forEach(it => {
        const inp = document.getElementById(`ex6-${it.id}`); const fb = document.getElementById(`ex6-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}
function resetEx6() { ex6Data.forEach(it => { const i = document.getElementById(`ex6-${it.id}`); if (i) i.value=''; const f=document.getElementById(`ex6-f${it.id}`); if (f) { f.className='feedback'; f.textContent='';} }); }

// EX 7: Schreiben — Raport vital pentru Petra
function buildEx7() {
    const c = document.getElementById('ex7-container'); if (!c) return;
    c.innerHTML = `
        <div class="schreiben-wrapper">
            <div class="schreiben-prompt">
                <h4>✍️ Tema ta de scriere — Raport vital pentru Petra</h4>
                <p>Ai măsurat azi semnele vitale ale Frauei Müller. Scrie-i Petrei (fiica) un raport scurt cu valorile + ce ai observat + ce ai făcut.</p>
                <p><strong>Scrie un raport (5-8 propoziții)</strong>: salut, valorile măsurate (Blutdruck, Puls, Temperatur), compară cu ieri (höher/niedriger als gestern), spune dacă a avut simptome, ce ai făcut (măsurat din nou, sunat la cabinet), liniștește-o.</p>

                <div class="schreiben-hints">
                    <h5>💡 Structuri utile</h5>
                    <p>Liebe Petra · ich habe heute die Vitalzeichen gemessen · der Blutdruck war 145 zu 90 · ein bisschen höher als gestern · der Puls war 72, ganz normal · die Temperatur war 37 Grad · sie hatte keine Beschwerden · ich habe zweimal gemessen · ich habe in der Praxis angerufen · alles ist unter Kontrolle · Liebe Grüße, Andreea.</p>
                </div>
            </div>

            <textarea id="ex7-text" class="schreiben-textarea" placeholder="Schreib hier den Bericht auf Deutsch...
Beispiel:
Liebe Petra, ich habe heute..."></textarea>

            <details class="schreiben-model">
                <summary>📝 Vezi un model de răspuns</summary>
                <div class="model-text">
                    <p><em>Beispiel-Antwort:</em></p>
                    <p>Liebe Petra, ich möchte Ihnen die heutigen Werte berichten. Heute Morgen habe ich die Vitalzeichen Ihrer Mutter gemessen. Der Blutdruck war 145 zu 90 — ein bisschen höher als gestern. Der Puls war 72, ganz normal, und die Temperatur 37 Grad. Sie hatte keine Beschwerden, keinen Schwindel und keine Kopfschmerzen. Ich habe zweimal gemessen und in der Praxis angerufen. Die Sprechstundenhilfe sagt, ich soll heute noch zweimal messen. Alles ist unter Kontrolle. Liebe Grüße, Andreea.</p>
                    <p class="model-translation"><em>Traducere:</em> Dragă Petra, vreau să vă raportez valorile de azi. Azi dimineață am măsurat semnele vitale ale mamei dvs. Tensiunea a fost 145 cu 90 — un pic mai mare ca ieri. Pulsul a fost 72, complet normal, iar temperatura 37 grade. Nu a avut simptome, nici amețeli, nici dureri de cap. Am măsurat de două ori și am sunat la cabinet. Asistenta spune să mai măsor azi de două ori. Totul e sub control. Cu drag, Andreea.</p>
                </div>
            </details>

            <div class="schreiben-cta">
                <a href="https://forms.gle/fj6neBbNGdYRRzjV8" target="_blank" class="btn-google-form-big">
                    ✍️ Vrei feedback PERSONAL de la Annette? Trimite raportul aici
                </a>
                <p class="schreiben-promise">📩 Răspunde Annette personal în 24-48 ore — corectare + sfaturi.</p>
            </div>
        </div>
    `;
}

function checkExercise(n) {
    const checkers = { 1: checkEx1, 2: checkEx2, 3: checkEx3, 4: checkEx4, 5: checkEx5, 6: checkEx6 };
    if (!checkers[n]) return;
    const result = checkers[n]();
    const scoreEl = document.getElementById(`score-${n}`);
    if (!scoreEl) return;
    const pct = Math.round((result.correct / result.total) * 100);
    let emoji = '💪', msg = 'Mai exersează!';
    if (pct === 100) { emoji = '🏆'; msg = 'Perfect!'; }
    else if (pct >= 80) { emoji = '⭐'; msg = 'Foarte bine!'; }
    else if (pct >= 60) { emoji = '👍'; msg = 'Bine!'; }
    else if (pct >= 40) { emoji = '📚'; msg = 'Continuă!'; }
    scoreEl.className = 'score show';
    scoreEl.innerHTML = `<div class="score-value">${emoji} ${result.correct}/${result.total} (${pct}%)</div><div class="score-message">${msg}</div>`;
}

function resetExercise(n) {
    const resetters = { 1: resetEx1, 2: resetEx2, 3: resetEx3, 4: resetEx4, 5: resetEx5, 6: resetEx6 };
    if (resetters[n]) resetters[n]();
    const scoreEl = document.getElementById(`score-${n}`);
    if (scoreEl) { scoreEl.className = 'score'; scoreEl.innerHTML = ''; }
}

function toggleAudio(event, audioId) {
    event.stopPropagation();
    const audio = document.getElementById(audioId);
    const btn = event.currentTarget;
    if (!audio || !btn) return;
    if (audio.paused) {
        audio.play().then(() => { btn.textContent = '⏸'; }).catch(() => {});
        audio.onended = () => { btn.textContent = '▶'; };
    } else {
        audio.pause(); btn.textContent = '▶';
    }
}

buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5(); buildEx6(); buildEx7();
