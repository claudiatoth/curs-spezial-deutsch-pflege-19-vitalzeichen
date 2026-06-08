# Generare WAV-uri Hedda pentru Pflege L19 - Vitalzeichen
# 10 dictat + 48 flashcards = 58 fisiere

$lessonPath = $PSScriptRoot
$audioDir = "$lessonPath\audio"
$lettersDir = "$audioDir\letters"

if (-not (Test-Path $audioDir)) { New-Item -ItemType Directory -Force -Path $audioDir | Out-Null }
if (-not (Test-Path $lettersDir)) { New-Item -ItemType Directory -Force -Path $lettersDir | Out-Null }

Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$synth.SelectVoice('Microsoft Hedda Desktop')
$synth.Rate = -1

# DICTAT (10)
$dictat = @(
    @{ file='dictat-01.wav'; text='der Blutdruck.' },
    @{ file='dictat-02.wav'; text='der Puls.' },
    @{ file='dictat-03.wav'; text='die Temperatur.' },
    @{ file='dictat-04.wav'; text='die Atmung.' },
    @{ file='dictat-05.wav'; text='das Fieber.' },
    @{ file='dictat-06.wav'; text='hoher.' },
    @{ file='dictat-07.wav'; text='niedriger.' },
    @{ file='dictat-08.wav'; text='zu hoch.' },
    @{ file='dictat-09.wav'; text='die Manschette.' },
    @{ file='dictat-10.wav'; text='messen.' }
)

# FLASHCARDS (48)
$flashcards = @(
    # Vitalzeichen + Gerate (8)
    @{ file='blutdruck.wav';             text='der Blutdruck.' },
    @{ file='puls.wav';                  text='der Puls.' },
    @{ file='temperatur.wav';            text='die Temperatur.' },
    @{ file='atmung.wav';                text='die Atmung.' },
    @{ file='blutdruckmessgeraet.wav';   text='das Blutdruckmessgerat.' },
    @{ file='fieberthermometer.wav';     text='das Fieberthermometer.' },
    @{ file='pulsoximeter.wav';          text='das Pulsoximeter.' },
    @{ file='sauerstoffsaettigung.wav';  text='die Sauerstoffsattigung.' },

    # Blutdruck (8)
    @{ file='systolisch.wav';            text='systolisch.' },
    @{ file='diastolisch.wav';           text='diastolisch.' },
    @{ file='normalwert.wav';            text='der Normalwert.' },
    @{ file='bluthochdruck.wav';         text='der Bluthochdruck.' },
    @{ file='niedriger-blutdruck.wav';   text='niedriger Blutdruck.' },
    @{ file='manschette.wav';            text='die Manschette.' },
    @{ file='130-zu-85.wav';             text='hundertdreissig zu funfundachtzig.' },
    @{ file='blutdruck-messen.wav';      text='den Blutdruck messen.' },

    # Puls + Atmung (8)
    @{ file='herzfrequenz.wav';          text='die Herzfrequenz.' },
    @{ file='ruhepuls.wav';              text='der Ruhepuls.' },
    @{ file='tachykardie.wav';           text='die Tachykardie.' },
    @{ file='bradykardie.wav';           text='die Bradykardie.' },
    @{ file='atemfrequenz.wav';          text='die Atemfrequenz.' },
    @{ file='atemnot.wav';               text='die Atemnot.' },
    @{ file='regelmaessig.wav';          text='regelmassig.' },
    @{ file='unregelmaessig.wav';        text='unregelmassig.' },

    # Temperatur (8)
    @{ file='fieber.wav';                text='das Fieber.' },
    @{ file='erhoehte-temperatur.wav';   text='erhohte Temperatur.' },
    @{ file='hohes-fieber.wav';          text='hohes Fieber.' },
    @{ file='untertemperatur.wav';       text='die Untertemperatur.' },
    @{ file='schuettelfrost.wav';        text='der Schuttelfrost.' },
    @{ file='ohrthermometer.wav';        text='das Ohrthermometer.' },
    @{ file='grad-celsius.wav';          text='Grad Celsius.' },
    @{ file='viel-trinken.wav';          text='viel trinken.' },

    # Comparativ + valori (8)
    @{ file='hoeher.wav';                text='hoher.' },
    @{ file='niedriger.wav';             text='niedriger.' },
    @{ file='schneller.wav';             text='schneller.' },
    @{ file='langsamer.wav';             text='langsamer.' },
    @{ file='zu-hoch.wav';               text='zu hoch.' },
    @{ file='zu-niedrig.wav';            text='zu niedrig.' },
    @{ file='schlaege.wav';              text='Schlage pro Minute.' },
    @{ file='prozent.wav';               text='Prozent.' },

    # Satze + Alarm (8)
    @{ file='ich-messe-blutdruck.wav';   text='Ich messe den Blutdruck.' },
    @{ file='wert-zu-hoch.wav';          text='Der Wert ist zu hoch.' },
    @{ file='hat-fieber.wav';            text='Sie hat Fieber.' },
    @{ file='haben-schwindel.wav';       text='Haben Sie Schwindel?' },
    @{ file='arzt-anrufen.wav';          text='den Arzt anrufen.' },
    @{ file='dokumentieren.wav';         text='dokumentieren.' },
    @{ file='atemnot-112.wav';           text='Bei Atemnot, hundertzwolf!' },
    @{ file='alles-normal.wav';          text='Alles ist normal.' }
)

$total = $dictat.Count + $flashcards.Count
$ok = 0; $fail = 0; $idx = 0

Write-Host "=== DICTAT ($($dictat.Count)) ===" -ForegroundColor Cyan
foreach ($w in $dictat) {
    $idx++; $wavPath = Join-Path $audioDir $w.file
    try {
        $synth.SetOutputToWaveFile($wavPath); $synth.Speak($w.text); $synth.SetOutputToNull()
        $ok++; Write-Host "  [$idx/$total] OK: $($w.file)" -ForegroundColor Green
    } catch { $fail++; Write-Host "  [$idx/$total] FAIL: $($w.file)" -ForegroundColor Red }
}

Write-Host "=== FLASHCARDS ($($flashcards.Count)) ===" -ForegroundColor Cyan
foreach ($w in $flashcards) {
    $idx++; $wavPath = Join-Path $lettersDir $w.file
    try {
        $synth.SetOutputToWaveFile($wavPath); $synth.Speak($w.text); $synth.SetOutputToNull()
        $ok++; Write-Host "  [$idx/$total] OK: letters/$($w.file)" -ForegroundColor Green
    } catch { $fail++; Write-Host "  [$idx/$total] FAIL: letters/$($w.file)" -ForegroundColor Red }
}

$synth.Dispose()
Write-Host ""
Write-Host "TOTAL: $ok OK, $fail FAIL din $total" -ForegroundColor $(if ($fail -eq 0) { 'Green' } else { 'Yellow' })
