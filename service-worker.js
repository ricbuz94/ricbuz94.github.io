const timestamp = 1639253301601;
const build = [
  "/_app/start-cec03232.js",
  "/_app/assets/start-61d1577b.css",
  "/_app/pages/__layout.svelte-f962bdb8.js",
  "/_app/assets/pages/__layout.svelte-ab021dd4.css",
  "/_app/pages/__error.svelte-48e92e36.js",
  "/_app/pages/index.svelte-e98a807a.js",
  "/_app/assets/pages/index.svelte-31552941.css",
  "/_app/pages/drinktool/privacy-policy.svelte-4730b02a.js",
  "/_app/assets/pages/drinktool/privacy-policy.svelte-d9feeae6.css",
  "/_app/pages/_fallthough_/_fallthough_.svelte-494930e3.js",
  "/_app/assets/pages/_fallthough_/_fallthough_.svelte-5a50b112.css",
  "/_app/pages/_fallthough_.svelte-9cfb5b42.js",
  "/_app/chunks/vendor-8b76c6b9.js",
  "/_app/chunks/paths-c3a241ee.js",
  "/_app/chunks/navigation-d8ceaada.js"
];
const files = [
  "/.nojekyll",
  "/drinktool.ico",
  "/favicon.ico",
  "/feather-sprite.svg",
  "/fonts/RobotoMono-Variable.ttf",
  "/fonts/Ubuntu/UFL.txt",
  "/fonts/Ubuntu/Ubuntu-Bold.ttf",
  "/fonts/Ubuntu/Ubuntu-Light.ttf",
  "/fonts/Ubuntu/Ubuntu-Medium.ttf",
  "/fonts/Ubuntu/Ubuntu-Regular.ttf",
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