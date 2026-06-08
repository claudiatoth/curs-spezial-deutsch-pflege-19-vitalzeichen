// ============================================
// PDF BUILDER — Pflege L19: Vitalzeichen
// Claudia Toth · Annettes Deutschkurs · A2.1
// ============================================
(function () {
    if (typeof document === 'undefined') return;
    try { buildPDF(); } catch (e) {
        const r = document.getElementById('pdf-content');
        if (r) r.innerHTML = '<pre style="color:red">ERROR: ' + e.message + '\n' + e.stack + '</pre>';
    }

    function buildPDF() {
        const root = document.getElementById('pdf-content');
        if (!root) return;
        root.innerHTML = buildPflegeWarn() + buildCast() + buildTheory() + buildDialogs() + buildExercises() + buildFlashcards();
    }

    function buildPflegeWarn() {
        return `<div class="pflege-warn">
            <h4>⚠️ Notă importantă</h4>
            <p>Această lecție te pregătește <strong>LINGVISTIC</strong> pentru măsurarea și raportarea semnelor vitale (Blutdruck, Puls, Temperatur, Atmung). <strong>NU înlocuiește</strong> formarea profesională și NU îți dă dreptul să pui diagnostic sau să modifici medicația. Valorile-limită sunt orientative — urmează ÎNTOTDEAUNA indicațiile medicului. La o valoare extremă însoțită de simptome grave (Brustschmerzen, Atemnot, Bewusstlosigkeit) — suni 112. Im Zweifel: noch einmal messen + anrufen.</p>
        </div>`;
    }

    function buildCast() {
        return `<div class="cast-banner">
            <h4>👋 Cast „Annettes Deutschkurs" · Andreea măsoară și raportează semnele vitale</h4>
            <div class="cast-grid">
                <div class="cast-card"><img src="images/andreea.png" alt="Andreea"><div class="name">Andreea 🇷🇴</div><div class="detail">Pflegerin · măsoară</div></div>
                <div class="cast-card"><div class="frau-mueller-pdf-avatar">👵</div><div class="name">Frau Müller</div><div class="detail">Pacientă · Blutdruck</div></div>
                <div class="cast-card"><img src="images/annette.png" alt="Annette"><div class="name">Annette</div><div class="detail">Profesoara · Berlin</div></div>
                <div class="cast-card"><img src="images/mihai.png" alt="Mihai"><div class="name">Mihai</div><div class="detail">Bucătar · Potsdam</div></div>
                <div class="cast-card"><img src="images/florian.png" alt="Florian"><div class="name">Florian</div><div class="detail">Doctor · Berlin</div></div>
                <div class="cast-card"><img src="images/carolina.png" alt="Carolina"><div class="name">Carolina</div><div class="detail">Fotografă · Berlin</div></div>
            </div>
        </div>`;
    }

    function buildTheory() {
        if (typeof theoryHTML !== 'string') return '';
        let t = theoryHTML;
        t = t.replace(/<div class="lesson-audio">[\s\S]*?<\/span>\s*<\/div>/g, '');
        t = t.replace(/<button[^>]*onclick="[^"]*"[^>]*>[^<]*<\/button>/g, '');
        t = t.replace(/<audio[^>]*>[\s\S]*?<\/audio>/g, '');
        t = t.replace(/<div class="subsection-header"[^>]*>\s*<h4>([^<]+)<\/h4>\s*<span class="sub-arrow">[^<]*<\/span>\s*<\/div>/g, '<h2 class="sub-chapter">$1</h2>');
        t = t.replace(/<div class="subsection">/g, '<div class="theory-box">');
        t = t.replace(/<div class="sub-section-content"[^>]*>/g, '<div>');
        t = t.replace(/<div class="capcana-box">/g, '<div class="theory-box warn-box">');
        t = t.replace(/<div class="grammar-tip">/g, '<div class="theory-box info-box">');
        t = t.replace(/<div class="final-note-box">/g, '<div class="theory-box warn-box">');
        return `<h1 class="chapter new-section">📘 1. Teorie — Vitalzeichen + Normalwerte + Comparativ + Alarm</h1>` + t;
    }

    function buildDialogs() {
        let html = `<h1 class="chapter new-section">🎬 2. Dialoguri — Blutdruck messen + Anruf in der Praxis</h1>`;
        [dialog1Data, dialog2Data].forEach((d, idx) => {
            if (!d) return;
            html += `<div class="ex-block">
                <h3>${idx === 0 ? 'Dialog 1' : 'Dialog 2'}: „${d.title}"</h3>
                <div class="instruction">${d.context}</div>
                <div class="dialog-pdf-card">`;
            d.replici.forEach((r, ri) => {
                let spkrName;
                if (r.speaker === 'andreea') spkrName = '🧑‍⚕️ Andreea';
                else if (r.speaker === 'frau-muller') spkrName = '👵 Frau Müller';
                else if (r.speaker === 'sprechstundenhilfe') spkrName = '👩‍⚕️ Sprechstundenhilfe';
                html += `<div class="reply"><span class="spkr">${ri + 1}. ${spkrName}:</span> <span class="de"> ${r.de}</span><br><span class="ro">🇷🇴 ${r.ro}</span></div>`;
            });
            html += `</div></div>`;
        });
        return html;
    }

    function buildExercises() {
        let html = `<h1 class="chapter new-section">📝 3. Exerciții — cu rezolvări complete</h1>`;

        if (typeof ex1Data !== 'undefined') {
            html += `<div class="ex-block"><h3>Übung 1: Match — Vitalzeichen + Geräte</h3>
                <div class="instruction">Pentru fiecare semn vital / aparat, scrii traducerea în RO.</div>
                <div class="rezolvare-banner">✓ Rezolvare</div>
                <table><thead><tr><th style="width:42%">🇩🇪 Germană</th><th>🇷🇴 Română</th></tr></thead><tbody>`;
            ex1Data.forEach((it, i) => {
                html += `<tr><td class="verb">${i + 1}. ${it.de}</td><td class="ro-text">${it.correct}</td></tr>`;
            });
            html += `</tbody></table></div>`;
        }

        if (typeof ex2Data !== 'undefined') html += fillInBlock('Übung 2: Comparativ (höher als) + „zu" + adjektiv', 'Adjektiv + -er + als (höher, schneller). NEREGULAT: gut→besser. „zu + adj" = prea mult.', ex2Data);
        if (typeof ex4Data !== 'undefined') html += fillInBlock('Übung 4: Normalwerte + când dai alarma', '120 zu 80 · puls 60-100 · febră >38 · respirație 12-20 · NU degetul mare la puls · Atemnot → 112.', ex4Data);
        if (typeof ex5Data !== 'undefined') html += fillInBlock('Übung 5: Dialog Gap-Fill — Blutdruck messen', 'Completează replicile lipsă din Dialog 1.', ex5Data);

        if (typeof ex3Data !== 'undefined') {
            html += `<div class="ex-block"><h3>Übung 3: Audio Dictat — Vitalzeichen + Comparativ</h3>
                <div class="instruction">Ascultă și scrie ce auzi. (Audio disponibil online.)</div>
                <div class="rezolvare-banner">✓ Rezolvare</div>`;
            ex3Data.forEach((it, i) => {
                html += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-a">${it.correct}</div></div></div>`;
            });
            html += `</div>`;
        }

        if (typeof ex6Data !== 'undefined') {
            html += `<div class="ex-block"><h3>Übung 6: Traducere RO → DE</h3>
                <div class="instruction">Scrie propozițiile despre semnele vitale în germană. Punctul final e opțional.</div>
                <div class="rezolvare-banner">✓ Rezolvare</div>
                <table><thead><tr><th style="width:42%">🇷🇴 Română</th><th>🇩🇪 Germană</th></tr></thead><tbody>`;
            ex6Data.forEach((it, i) => {
                html += `<tr><td class="ro-text">${i + 1}. ${it.ro}</td><td class="verb">${it.correct}</td></tr>`;
            });
            html += `</tbody></table></div>`;
        }

        html += `<div class="ex-block"><h3>✍️ Übung 7: Schreiben — Raport vital pentru Petra</h3>
            <div class="instruction">Ai măsurat azi semnele vitale ale Frauei Müller. Scrie-i Petrei un raport (5-8 propoziții) cu valorile + comparativ (höher/niedriger als gestern) + ce ai făcut.</div>
            <div class="rezolvare-banner">📝 Model de răspuns</div>
            <p><em>Liebe Petra, ich möchte Ihnen die heutigen Werte berichten. Heute Morgen habe ich die Vitalzeichen Ihrer Mutter gemessen. Der Blutdruck war 145 zu 90 — ein bisschen höher als gestern. Der Puls war 72, ganz normal, und die Temperatur 37 Grad. Sie hatte keine Beschwerden, keinen Schwindel und keine Kopfschmerzen. Ich habe zweimal gemessen und in der Praxis angerufen. Die Sprechstundenhilfe sagt, ich soll heute noch zweimal messen. Alles ist unter Kontrolle. Liebe Grüße, Andreea.</em></p>
            <p class="ro-translation">🇷🇴 Dragă Petra, vreau să vă raportez valorile de azi. Azi dimineață am măsurat semnele vitale ale mamei dvs. Tensiunea a fost 145 cu 90 — un pic mai mare ca ieri. Pulsul a fost 72, complet normal, iar temperatura 37 grade. Nu a avut simptome, nici amețeli, nici dureri de cap. Am măsurat de două ori și am sunat la cabinet. Asistenta spune să mai măsor azi de două ori. Totul e sub control. Cu drag, Andreea.</p>
            </div>`;

        return html;
    }

    function fillInBlock(title, instruction, data) {
        let h = `<div class="ex-block"><h3>${title}</h3><div class="instruction">${instruction}</div><div class="rezolvare-banner">✓ Rezolvare</div>`;
        data.forEach((it, i) => {
            const filled = it.sentence.replace(/_{2,}/g, `<strong style="color:#047857">${it.correct}</strong>`);
            h += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-q">${filled}</div>${it.translation ? `<div class="ex-explanation">🇷🇴 ${it.translation}</div>` : ''}</div></div>`;
        });
        return h + `</div>`;
    }

    function buildFlashcards() {
        const count = (typeof flashcardsData !== 'undefined') ? flashcardsData.length : 0;
        let html = `<h1 class="chapter new-section">📇 4. Vocabular complet (Flashcards)</h1>
            <p style="margin-bottom:10px">Cele <strong>${count} carduri</strong> grupate pe 6 categorii: Vitalzeichen+Geräte · Blutdruck · Puls+Atmung · Temperatur · Comparativ+valori · Sätze+Alarm.</p>
            <div class="flashcards-grid">`;
        if (typeof flashcardsData !== 'undefined') {
            flashcardsData.forEach(card => {
                html += `<div class="fc-row"><span class="de">${card.de}</span><span class="ro">— ${card.ro}</span></div>`;
            });
        }
        html += `</div>`;
        return html;
    }
})();
