// ============================================
// FLASHCARDS — Pflege 19: Vitalzeichen
// 48 carduri în 6 categorii (8 fiecare)
// Claudia Toth · Annettes Deutschkurs · A2.1
// ============================================

const flashcardsData = [
    // === 1. VITALZEICHEN + GERÄTE (8) ===
    { de: "der Blutdruck", ro: "🩸 tensiunea arterială · systolisch/diastolisch", audio: "audio/letters/blutdruck.wav" },
    { de: "der Puls", ro: "💓 pulsul · 60-100 pe minut normal", audio: "audio/letters/puls.wav" },
    { de: "die Temperatur", ro: "🌡️ temperatura · 36,5-37,5 °C normal", audio: "audio/letters/temperatur.wav" },
    { de: "die Atmung", ro: "🫁 respirația · 12-20 pe minut normal", audio: "audio/letters/atmung.wav" },
    { de: "das Blutdruckmessgerät", ro: "🩺 tensiometrul · braț sau încheietură", audio: "audio/letters/blutdruckmessgeraet.wav" },
    { de: "das Fieberthermometer", ro: "🌡️ termometrul · ureche/frunte/digital", audio: "audio/letters/fieberthermometer.wav" },
    { de: "das Pulsoximeter", ro: "📟 pulsoximetrul · pe deget (puls + SpO₂)", audio: "audio/letters/pulsoximeter.wav" },
    { de: "die Sauerstoffsättigung", ro: "🫁 saturația de oxigen (SpO₂) · >95% normal", audio: "audio/letters/sauerstoffsaettigung.wav" },

    // === 2. BLUTDRUCK (8) ===
    { de: "systolisch", ro: "⬆️ sistolic · numărul de SUS (inima bate)", audio: "audio/letters/systolisch.wav" },
    { de: "diastolisch", ro: "⬇️ diastolic · numărul de JOS (inima se odihnește)", audio: "audio/letters/diastolisch.wav" },
    { de: "der Normalwert", ro: "✅ valoarea normală · ~120 zu 80", audio: "audio/letters/normalwert.wav" },
    { de: "der Bluthochdruck", ro: "⚠️ tensiune mare · Hypertonie · >140/90", audio: "audio/letters/bluthochdruck.wav" },
    { de: "niedriger Blutdruck", ro: "⚠️ tensiune mică · Hypotonie · <90/60", audio: "audio/letters/niedriger-blutdruck.wav" },
    { de: "die Manschette", ro: "🎗️ manșeta · pe braț, la nivelul inimii", audio: "audio/letters/manschette.wav" },
    { de: "130 zu 85", ro: "🗣️ cum citești 130/85 (zu = pe/supra)", audio: "audio/letters/130-zu-85.wav" },
    { de: "den Blutdruck messen", ro: "📏 a măsura tensiunea", audio: "audio/letters/blutdruck-messen.wav" },

    // === 3. PULS + ATMUNG (8) ===
    { de: "die Herzfrequenz", ro: "💓 frecvența cardiacă (= pulsul)", audio: "audio/letters/herzfrequenz.wav" },
    { de: "der Ruhepuls", ro: "😌 pulsul de repaus", audio: "audio/letters/ruhepuls.wav" },
    { de: "die Tachykardie", ro: "⚡ puls prea rapid · >100/min", audio: "audio/letters/tachykardie.wav" },
    { de: "die Bradykardie", ro: "🐢 puls prea lent · <60/min", audio: "audio/letters/bradykardie.wav" },
    { de: "die Atemfrequenz", ro: "🫁 frecvența respiratorie", audio: "audio/letters/atemfrequenz.wav" },
    { de: "die Atemnot", ro: "🚨 dificultate de respirație · URGENȚĂ → 112", audio: "audio/letters/atemnot.wav" },
    { de: "regelmäßig", ro: "✅ regulat (ritmul pulsului)", audio: "audio/letters/regelmaessig.wav" },
    { de: "unregelmäßig", ro: "⚠️ neregulat (ritmul pulsului)", audio: "audio/letters/unregelmaessig.wav" },

    // === 4. TEMPERATUR (8) ===
    { de: "das Fieber", ro: "🌡️ febra · peste 38 °C", audio: "audio/letters/fieber.wav" },
    { de: "erhöhte Temperatur", ro: "🌡️ subfebrilitate · 37,5-38 °C", audio: "audio/letters/erhoehte-temperatur.wav" },
    { de: "hohes Fieber", ro: "🔥 febră mare · peste 39 °C", audio: "audio/letters/hohes-fieber.wav" },
    { de: "die Untertemperatur", ro: "❄️ hipotermie · sub 36 °C", audio: "audio/letters/untertemperatur.wav" },
    { de: "der Schüttelfrost", ro: "🥶 frisonul · tremurat de febră", audio: "audio/letters/schuettelfrost.wav" },
    { de: "das Ohrthermometer", ro: "👂 termometrul de ureche · rapid + igienic", audio: "audio/letters/ohrthermometer.wav" },
    { de: "Grad Celsius", ro: "🌡️ grade Celsius · °C", audio: "audio/letters/grad-celsius.wav" },
    { de: "viel trinken", ro: "💧 multă apă · la febră", audio: "audio/letters/viel-trinken.wav" },

    // === 5. COMPARATIV + VALORI (8) ===
    { de: "höher", ro: "📈 mai mare (hoch → höher · cu Umlaut!)", audio: "audio/letters/hoeher.wav" },
    { de: "niedriger", ro: "📉 mai mic (niedrig → niedriger)", audio: "audio/letters/niedriger.wav" },
    { de: "schneller", ro: "⚡ mai rapid (schnell → schneller)", audio: "audio/letters/schneller.wav" },
    { de: "langsamer", ro: "🐢 mai lent (langsam → langsamer)", audio: "audio/letters/langsamer.wav" },
    { de: "zu hoch", ro: "🚨 prea mare (semnal de alarmă)", audio: "audio/letters/zu-hoch.wav" },
    { de: "zu niedrig", ro: "🚨 prea mic", audio: "audio/letters/zu-niedrig.wav" },
    { de: "Schläge pro Minute", ro: "💓 bătăi pe minut (pentru puls)", audio: "audio/letters/schlaege.wav" },
    { de: "Prozent", ro: "📊 procent (pentru SpO₂: 96 Prozent)", audio: "audio/letters/prozent.wav" },

    // === 6. SÄTZE + ALARM (8) ===
    { de: "Ich messe den Blutdruck.", ro: "📏 Măsor tensiunea.", audio: "audio/letters/ich-messe-blutdruck.wav" },
    { de: "Der Wert ist zu hoch.", ro: "🚨 Valoarea e prea mare.", audio: "audio/letters/wert-zu-hoch.wav" },
    { de: "Sie hat Fieber.", ro: "🌡️ Are febră.", audio: "audio/letters/hat-fieber.wav" },
    { de: "Haben Sie Schwindel?", ro: "❓ Aveți amețeli?", audio: "audio/letters/haben-schwindel.wav" },
    { de: "den Arzt anrufen", ro: "📞 a suna medicul", audio: "audio/letters/arzt-anrufen.wav" },
    { de: "dokumentieren", ro: "📋 a documenta (notezi valorile)", audio: "audio/letters/dokumentieren.wav" },
    { de: "Bei Atemnot 112!", ro: "🚑 La dificultate de respirație — 112!", audio: "audio/letters/atemnot-112.wav" },
    { de: "Alles ist normal.", ro: "✅ Totul e normal.", audio: "audio/letters/alles-normal.wav" }
];

let currentFlashcardIndex = 0;
let isFlipped = false;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="flashcard-intro">
            <p>🎯 <strong>48 flashcards în 6 categorii</strong> — Vitalzeichen+Geräte · Blutdruck · Puls+Atmung · Temperatur · Comparativ+valori · Sätze+Alarm.</p>
        </div>
        <div class="flashcard-wrapper">
            <div class="flashcard" id="flashcard" onclick="flipFlashcard()">
                <button class="flashcard-audio-btn" id="flashcard-audio-btn" onclick="event.stopPropagation(); playFlashcardAudio()" aria-label="Asculta pronunția">🔊</button>
                <div class="flashcard-content">
                    <div class="de" id="flashcard-de"></div>
                    <div class="ro" id="flashcard-ro"></div>
                </div>
                <div class="flashcard-hint">👆 Apasă cardul pentru traducere · 🔊 pentru pronunție</div>
                <audio id="flashcard-audio" preload="none"></audio>
            </div>
            <div class="flashcard-controls">
                <button class="flashcard-btn" onclick="prevFlashcard()">← Înapoi</button>
                <span class="flashcard-counter" id="flashcard-counter">1 / 48</span>
                <button class="flashcard-btn" onclick="nextFlashcard()">Înainte →</button>
            </div>
            <div class="flashcard-progress">
                <div class="flashcard-progress-fill" id="flashcard-progress-fill"></div>
            </div>
        </div>
    `;
    showFlashcard(0);
}

function showFlashcard(index) {
    const card = flashcardsData[index];
    if (!card) return;
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const progress = document.getElementById('flashcard-progress-fill');
    const audio = document.getElementById('flashcard-audio');
    if (de) de.textContent = card.de;
    if (ro) ro.textContent = card.ro;
    if (audio && card.audio) { audio.pause(); audio.src = card.audio; audio.load(); }
    if (counter) counter.textContent = `${index + 1} / ${flashcardsData.length}`;
    if (progress) progress.style.width = ((index + 1) / flashcardsData.length * 100) + '%';
    isFlipped = false;
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.remove('flipped');
}

function playFlashcardAudio() {
    const audio = document.getElementById('flashcard-audio');
    if (!audio || !audio.src) return;
    audio.currentTime = 0;
    audio.play().catch(() => {});
}

function flipFlashcard() {
    isFlipped = !isFlipped;
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.toggle('flipped');
}

function nextFlashcard() {
    currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcardsData.length;
    showFlashcard(currentFlashcardIndex);
}

function prevFlashcard() {
    currentFlashcardIndex = (currentFlashcardIndex - 1 + flashcardsData.length) % flashcardsData.length;
    showFlashcard(currentFlashcardIndex);
}

buildFlashcards();
