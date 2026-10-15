# Taupunkt-Anzeige (Bluetooth)

Anzeige der Taupunktlüftung auf Smartphone/Tablet über Bluetooth LE – **nur lesen**,
ohne ins WLAN „TaupunktNetz“ zu wechseln. Einstellungen nur über die Web-App der Zentrale.
Passend zur Zentrale ab V0.9. Entwickler: @christian singerl

## Hochladen auf GitHub Pages

1. Auf github.com (Benutzer **singchr**) ein Repository **taupunkt-anzeige** anlegen (öffentlich).
2. Alle Dateien aus diesem Ordner hochladen: `index.html`, `manifest.webmanifest`,
   `sw.js`, `icon-192.png`, `icon-512.png` (README optional).
3. Repository → Settings → Pages → Source „Deploy from a branch“, Branch `main`, Ordner `/ (root)`.
4. Nach 1–2 Minuten erreichbar: https://singchr.github.io/taupunkt-anzeige/

## Benutzen

- **Android:** Seite in **Chrome** öffnen → „Mit Zentrale verbinden“ → „Taupunkt-Zentrale“ wählen.
  Menü → „Zum Startbildschirm hinzufügen“ → danach als App-Symbol, auch ohne Internet.
- **iPhone/iPad:** Safari kann kein Bluetooth → kostenlose App **„Bluefy – Web BLE Browser“**
  installieren, Seite darin öffnen, verbinden.
- Reichweite Bluetooth ca. 10 m (durch Wände weniger).
- Die Werte werden alle 5 s gelesen. Bei Verbindungsabbruch versucht die Seite es nach 3 s erneut.

## Neue Version der Seite

In `sw.js` die Nummer bei `CACHE = 'taupunkt-anzeige-v1'` erhöhen und neu hochladen,
damit die Geräte die neue Fassung übernehmen.
