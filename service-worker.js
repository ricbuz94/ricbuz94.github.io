const timestamp = 1651966190307;
const build = [
  "/_app/start-12604e75.js",
  "/_app/pages/__layout.svelte-aa268c41.js",
  "/_app/assets/pages/__layout.svelte-d68ef389.css",
  "/_app/pages/__error.svelte-1c9e5329.js",
  "/_app/pages/index.svelte-0ac344fa.js",
  "/_app/assets/pages/index.svelte-d1b6e6e4.css",
  "/_app/pages/drinktool/__layout.reset.svelte-17deadf3.js",
  "/_app/pages/drinktool/index.svelte-23cb0e7f.js",
  "/_app/pages/drinktool/privacy-policy.svelte-cc0ab019.js",
  "/_app/assets/pages/drinktool/privacy-policy.svelte-16bf39b3.css",
  "/_app/pages/drinktool/_fallthough_.svelte-ab8e80cc.js",
  "/_app/assets/pages/drinktool/_fallthough_.svelte-a96e7ee9.css",
  "/_app/pages/about.svelte-3c41d2e2.js",
  "/_app/assets/pages/about.svelte-0d1dbbb8.css",
  "/_app/pages/works.svelte-ae64b92c.js",
  "/_app/assets/pages/works.svelte-83eb4d87.css",
  "/_app/pages/_fallthough_.svelte-298a0d01.js",
  "/_app/assets/pages/_fallthough_.svelte-b56e2645.css",
  "/_app/chunks/vendor-5feba920.js",
  "/_app/chunks/paths-4b3c6e7e.js",
  "/_app/chunks/singletons-a6a7384f.js",
  "/_app/chunks/preload-helper-ec9aa979.js",
  "/_app/chunks/interfaces-9e1fa7b7.js",
  "/_app/chunks/Divider-90e11f75.js",
  "/_app/assets/Divider-9ce30687.css",
  "/_app/chunks/Article-2120177c.js",
  "/_app/assets/Article-905f5d9c.css",
  "/_app/chunks/navigation-bd39ff07.js",
  "/_app/chunks/it-IT-bc392e95.js",
  "/_app/chunks/en-US-ebe13386.js"
];
const files = [
  "/drinktool.ico",
  "/favicon-dark.ico",
  "/favicon.ico",
  "/feather-sprite.svg",
  "/fonts/Nunito/Nunito-Italic.ttf",
  "/fonts/Nunito/Nunito.ttf",
  "/fonts/Nunito/OFL.txt",
  "/fonts/RobotoMono-Variable.ttf",
  "/images/beach.jpg",
  "/images/beacharound-business.png",
  "/images/beacharound.png",
  "/images/drinktool.png",
  "/images/howmuchcanidrink.png",
  "/images/me.png",
  "/logo-dark.png",
  "/logo-light.png",
  "/manifest.json",
  "/robots.txt"
];
const worker = self;
const FILES = `cache${timestamp}`;
const to_cache = build.concat(files);
const staticAssets = new Set(to_cache);
worker.addEventListener("install", (event) => {
  event.waitUntil(caches.open(FILES).then((cache) => cache.addAll(to_cache)).then(() => {
    worker.skipWaiting();
  }));
});
worker.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then(async (keys) => {
    for (const key of keys) {
      if (key !== FILES)
        await caches.delete(key);
    }
    worker.clients.claim();
  }));
});
async function fetchAndCache(request) {
  const cache = await caches.open(`offline${timestamp}`);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (err) {
    const response = await cache.match(request);
    if (response)
      return response;
    throw err;
  }
}
worker.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || event.request.headers.has("range"))
    return;
  const url = new URL(event.request.url);
  const isHttp = url.protocol.startsWith("http");
  const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
  const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
  const skipBecauseUncached = event.request.cache === "only-if-cached" && !isStaticAsset;
  if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
    event.respondWith((async () => {
      const cachedAsset = isStaticAsset && await caches.match(event.request);
      return cachedAsset || fetchAndCache(event.request);
    })());
  }
});
