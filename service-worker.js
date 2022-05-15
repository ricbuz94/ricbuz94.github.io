const timestamp = 1652626289656;
const build = [
  "/_app/start-67756d3a.js",
  "/_app/pages/__layout.svelte-8aa097e8.js",
  "/_app/assets/pages/__layout.svelte-35077544.css",
  "/_app/pages/__error.svelte-1c9e5329.js",
  "/_app/pages/index.svelte-2b6adb6a.js",
  "/_app/assets/pages/index.svelte-f4043fc0.css",
  "/_app/pages/drinktool/__layout.reset.svelte-17deadf3.js",
  "/_app/pages/drinktool/index.svelte-23cb0e7f.js",
  "/_app/pages/drinktool/privacy-policy.svelte-35c7f324.js",
  "/_app/assets/pages/drinktool/privacy-policy.svelte-16bf39b3.css",
  "/_app/pages/drinktool/_fallthough_.svelte-ab8e80cc.js",
  "/_app/assets/pages/drinktool/_fallthough_.svelte-a96e7ee9.css",
  "/_app/pages/about.svelte-4a88ee75.js",
  "/_app/assets/pages/about.svelte-5a0511d3.css",
  "/_app/pages/works.svelte-5e194ee6.js",
  "/_app/assets/pages/works.svelte-b4c3e941.css",
  "/_app/pages/_fallthough_.svelte-298a0d01.js",
  "/_app/assets/pages/_fallthough_.svelte-b56e2645.css",
  "/_app/chunks/vendor-5feba920.js",
  "/_app/chunks/paths-4b3c6e7e.js",
  "/_app/chunks/singletons-a6a7384f.js",
  "/_app/chunks/preload-helper-ec9aa979.js",
  "/_app/chunks/interfaces-9e1fa7b7.js",
  "/_app/chunks/Divider-90e11f75.js",
  "/_app/assets/Divider-9ce30687.css",
  "/_app/chunks/Article-9de4ddfd.js",
  "/_app/assets/Article-3d7cbaeb.css",
  "/_app/chunks/navigation-bd39ff07.js",
  "/_app/chunks/it-IT-3ae5d62e.js",
  "/_app/chunks/en-US-2e74bbb3.js"
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
