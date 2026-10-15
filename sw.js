// Offline-Speicher für die Taupunkt-Anzeige: Seite einmal online laden, danach ohne Internet nutzbar.
// Bei einer neuen Version der Seite die Nummer erhöhen.
const CACHE = 'taupunkt-anzeige-v1';
const DATEIEN = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(DATEIEN)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n !== CACHE).map(n => caches.delete(n)))));
  self.clients.claim();
});

// Erst aus dem Netz (dann ist die Seite aktuell), ohne Netz aus dem Speicher
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request)
      .then(r => { const kopie = r.clone(); caches.open(CACHE).then(c => c.put(e.request, kopie)); return r; })
      .catch(() => caches.match(e.request).then(r => r || caches.match('index.html')))
  );
});
