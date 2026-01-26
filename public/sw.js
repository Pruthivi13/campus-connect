// Service Worker for Campus Connect
const CACHE_NAME = 'campus-connect-v1';
const urlsToCache = [
  '/',
  '/index.html'
];

self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'New Notice';
  const options = {
    body: data.body || 'New content available on Campus Connect.',
    icon: '/app logo.png',
    badge: '/app logo.png'
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});
