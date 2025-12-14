const cache_name = "calculator-v1"

const ASSETS = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/sounds/",
  "/manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cache_name).then (cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});