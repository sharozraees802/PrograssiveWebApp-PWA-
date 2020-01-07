// version
var appVersion = "v1.00";

// File To Cache
var files = [
  "./",
  "./index.html",
  "./index.css",
  "./index.js",
  "./message.html",
  "./back.jpg"
];
// Inistall
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(appVersion).then(cache => {
      return cache.addAll(files).catch(err => {
        console.error("Error adding file in cache", err);
      });
    })
  );
  console.info("sw installed");
  self.skipWaiting();
});

// Active
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== appVersion) {
            console.info("Deleting old cache", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  return self.clients.claim();
});
// Fetch
self.addEventListener("fetch", event => {
  console.info("sw fetch", event.request.url);
  event.respondWith(
    caches.match(event.request).then(res => {
      return res || fetch(event.request);
    })
  );
});
