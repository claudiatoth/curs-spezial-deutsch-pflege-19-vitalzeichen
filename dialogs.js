// ============================================
// DIALOGS.JS — Pflege 19: Vitalzeichen
// 2 dialoguri (Blutdruck messen am Morgen + Anruf in der Praxis)
// Personaje: Andreea + Frau Müller + Sprechstundenhilfe (recap L8/L16 — portocaliu #ea580c, FĂRĂ personaj nou)
// Claudia Toth · Annettes Deutschkurs · A2.1
// ============================================

// ============================================
// DIALOG 1: „Blutdruck messen am Morgen" — Andreea + Frau Müller
// 10 replici, ~75 sec
// ============================================
const dialog1Data = {
    id: 'dialog1',
    title: 'Blutdruck messen am Morgen',
    context: 'Dimineața, măsurarea de rutină. Andreea îi măsoară lui Frau Müller tensiunea — care iese un pic ridicată (145/90). Observă cum o liniștește, măsoară corect (ruhig sitzen, nicht sprechen) și folosește comparativul: „höher als gestern".',
    audioFile: 'audio/dialog-01.mp3',
    totalDuration: 75,
    replici: [
        { id: 1, speaker: 'andreea',     start: 0,  duration: 8, de: 'Guten Morgen, Frau Müller. Ich möchte Ihren Blutdruck messen.', ro: 'Bună dimineața, Doamnă Müller. Vreau să vă măsor tensiunea.' },
        { id: 2, speaker: 'frau-muller', start: 8,  duration: 6, de: 'Gut. Ist etwas nicht in Ordnung?', ro: 'Bine. E ceva în neregulă?' },
        { id: 3, speaker: 'andreea',     start: 14, duration: 7, de: 'Nein, das ist Routine. Bitte sitzen Sie ruhig.', ro: 'Nu, e rutină. Stați liniștită, vă rog.' },
        { id: 4, speaker: 'andreea',     start: 21, duration: 9, de: 'Halten Sie den Arm locker. Ich lege die Manschette an.', ro: 'Țineți brațul relaxat. Pun manșeta.' },
        { id: 5, speaker: 'frau-muller', start: 30, duration: 4, de: 'So?', ro: 'Așa?' },
        { id: 6, speaker: 'andreea',     start: 34, duration: 11, de: 'Genau. Bitte nicht sprechen. ... Hundertfünfundvierzig zu neunzig.', ro: 'Exact. Nu vorbiți, vă rog. ... 145 cu 90.' },
        { id: 7, speaker: 'frau-muller', start: 45, duration: 5, de: 'Ist das hoch?', ro: 'E mare?' },
        { id: 8, speaker: 'andreea',     start: 50, duration: 10, de: 'Ein bisschen höher als gestern. Aber kein Grund zur Sorge.', ro: 'Un pic mai mare ca ieri. Dar fără motiv de îngrijorare.' },
        { id: 9, speaker: 'andreea',     start: 60, duration: 8, de: 'Ich messe in einer Stunde noch einmal.', ro: 'Mai măsor o dată într-o oră.' },
        { id: 10, speaker: 'frau-muller', start: 68, duration: 7, de: 'Danke, dass Sie so vorsichtig sind.', ro: 'Mulțumesc că ești atât de atentă.' }
    ]
};

// ============================================
// DIALOG 2: „Anruf in der Praxis" — Andreea + Sprechstundenhilfe
// 10 replici, ~78 sec — raportarea valorilor cu comparativ
// ============================================
const dialog2Data = {
    id: 'dialog2',
    title: 'Anruf in der Praxis',
    context: 'Andreea sună la cabinetul Dr. Schmidt (recap L16) ca să raporteze tensiunea ridicată a Frauei Müller. Vorbește cu Sprechstundenhilfe (asistenta — recap L8). Observă raportarea profesională: valorile + comparativul „höher als sonst" + ce a făcut deja (de două ori măsurat) + ce să urmărească.',
    audioFile: 'audio/dialog-02.mp3',
    totalDuration: 78,
    replici: [
        { id: 1, speaker: 'andreea',           start: 0,  duration: 9, de: 'Praxis Dr. Schmidt? Hier ist Andreea, die Pflegerin von Frau Müller.', ro: 'Cabinetul Dr. Schmidt? Sunt Andreea, îngrijitoarea Doamnei Müller.' },
        { id: 2, speaker: 'sprechstundenhilfe', start: 9,  duration: 6, de: 'Guten Tag, Andreea. Was gibt es?', ro: 'Bună ziua, Andreea. Ce este?' },
        { id: 3, speaker: 'andreea',           start: 15, duration: 11, de: 'Der Blutdruck ist heute höher als sonst. Hundertfünfundvierzig zu neunzig.', ro: 'Tensiunea e azi mai mare ca de obicei. 145 cu 90.' },
        { id: 4, speaker: 'sprechstundenhilfe', start: 26, duration: 8, de: 'Hat sie Beschwerden? Kopfschmerzen, Schwindel?', ro: 'Are simptome? Dureri de cap, amețeli?' },
        { id: 5, speaker: 'andreea',           start: 34, duration: 7, de: 'Nein, keine. Aber ich habe zweimal gemessen.', ro: 'Nu, niciuna. Dar am măsurat de două ori.' },
        { id: 6, speaker: 'sprechstundenhilfe', start: 41, duration: 7, de: 'Gut gemacht. Und der Puls?', ro: 'Bravo. Și pulsul?' },
        { id: 7, speaker: 'andreea',           start: 48, duration: 6, de: 'Zweiundsiebzig, ganz normal.', ro: '72, complet normal.' },
        { id: 8, speaker: 'sprechstundenhilfe', start: 54, duration: 10, de: 'In Ordnung. Messen Sie heute noch zweimal und notieren Sie alles.', ro: 'În regulă. Mai măsurați azi de două ori și notați tot.' },
        { id: 9, speaker: 'andreea',           start: 64, duration: 7, de: 'Mache ich. Soll ich morgen zurückrufen?', ro: 'Așa fac. Să sun mâine înapoi?' },
        { id: 10, speaker: 'sprechstundenhilfe', start: 71, duration: 7, de: 'Ja, bitte. Bei Schwindel sofort anrufen.', ro: 'Da, vă rog. La amețeli sunați imediat.' }
    ]
};

// ============================================
// BUILD DIALOG FUNCTION
// ============================================
function buildDialog(dialogData, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `
        <div class="dialog-container">
            <div class="dialog-context">${dialogData.context}</div>

            <div class="dialog-audio-player">
                <button class="audio-btn dialog-play-btn" id="btn-${dialogData.id}-audio" onclick="toggleDialogAudio('${dialogData.id}')">▶</button>
                <audio id="${dialogData.id}-audio" preload="metadata"><source src="${dialogData.audioFile}" type="audio/mpeg"></audio>
                <span class="dialog-time" id="${dialogData.id}-time">0:00 / ${formatDialogTime(dialogData.totalDuration)}</span>
                <span class="dialog-hint">▶ Ascultă tot dialogul (${dialogData.totalDuration}s)</span>
            </div>

            <div class="dialog-replici">`;

    dialogData.replici.forEach((r, i) => {
        let speakerClass, speakerName, avatarContent, speechClass;

        if (r.speaker === 'andreea') {
            speakerClass = 'character-andreea';
            speakerName = 'Andreea';
            avatarContent = '<img src="images/andreea.png" alt="Andreea">';
            speechClass = 'speech-andreea';
        } else if (r.speaker === 'frau-muller') {
            speakerClass = 'character-frau-mueller';
            speakerName = 'Frau Müller';
            avatarContent = '<span class="face">👵</span>';
            speechClass = 'speech-frau-mueller';
        } else if (r.speaker === 'sprechstundenhilfe') {
            speakerClass = 'character-sprechstundenhilfe';
            speakerName = 'Sprechstundenhilfe';
            avatarContent = '<span class="face">👩‍⚕️</span>';
            speechClass = 'speech-sprechstundenhilfe';
        }

        const isEmojiAvatar = ['frau-muller', 'sprechstundenhilfe'].includes(r.speaker);

        html += `
            <div class="dialog-reply ${speakerClass}" id="${dialogData.id}-reply-${r.id}" data-start="${r.start}" data-duration="${r.duration}">
                <div class="character-avatar ${isEmojiAvatar ? r.speaker + '-avatar' : ''}">${avatarContent}</div>
                <div class="speech-bubble ${speechClass}">
                    <div class="speaker-name speaker-${r.speaker}">${i + 1}. ${speakerName}</div>
                    <div class="speech-de">🇩🇪 ${r.de}</div>
                    <div class="speech-ro">🇷🇴 ${r.ro}</div>
                </div>
            </div>`;
    });

    html += `
            </div>
        </div>`;

    container.innerHTML = html;
}

function formatDialogTime(s) {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
}

function toggleDialogAudio(dialogId) {
    const audio = document.getElementById(`${dialogId}-audio`);
    const btn = document.getElementById(`btn-${dialogId}-audio`);
    if (!audio || !btn) return;

    ['dialog1', 'dialog2'].forEach(other => {
        if (other !== dialogId) {
            const otherAudio = document.getElementById(`${other}-audio`);
            const otherBtn = document.getElementById(`btn-${other}-audio`);
            if (otherAudio && !otherAudio.paused) {
                otherAudio.pause();
                if (otherBtn) otherBtn.textContent = '▶';
            }
        }
    });

    if (audio.paused) {
        audio.play().then(() => { btn.textContent = '⏸'; }).catch(() => {});
    } else {
        audio.pause();
        btn.textContent = '▶';
    }
}

function initDialogSync(dialogData) {
    const audio = document.getElementById(`${dialogData.id}-audio`);
    if (!audio) return;

    const timeEl = document.getElementById(`${dialogData.id}-time`);

    audio.addEventListener('timeupdate', () => {
        const t = audio.currentTime;
        if (timeEl) timeEl.textContent = `${formatDialogTime(t)} / ${formatDialogTime(audio.duration || dialogData.totalDuration)}`;

        dialogData.replici.forEach(r => {
            const el = document.getElementById(`${dialogData.id}-reply-${r.id}`);
            if (!el) return;
            const isActive = t >= r.start && t < r.start + r.duration;
            el.classList.toggle('active-reply', isActive);
        });
    });

    audio.addEventListener('ended', () => {
        const btn = document.getElementById(`btn-${dialogData.id}-audio`);
        if (btn) btn.textContent = '▶';
        dialogData.replici.forEach(r => {
            const el = document.getElementById(`${dialogData.id}-reply-${r.id}`);
            if (el) el.classList.remove('active-reply');
        });
    });
}

buildDialog(dialog1Data, 'dialog1-container');
buildDialog(dialog2Data, 'dialog2-container');

if (document.readyState !== 'loading') {
    initDialogSync(dialog1Data);
    initDialogSync(dialog2Data);
} else {
    document.addEventListener('DOMContentLoaded', () => {
        initDialogSync(dialog1Data);
        initDialogSync(dialog2Data);
    });
}
