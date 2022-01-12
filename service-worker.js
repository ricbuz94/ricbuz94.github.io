const timestamp = 1642025443809;
const build = [
  "/_app/start-9add0f6b.js",
  "/_app/assets/start-61d1577b.css",
  "/_app/pages/__layout.svelte-1913c623.js",
  "/_app/assets/pages/__layout.svelte-bac1300e.css",
  "/_app/pages/__error.svelte-bda3f72f.js",
  "/_app/pages/index.svelte-2e274726.js",
  "/_app/assets/pages/index.svelte-3d06cadd.css",
  "/_app/pages/drinktool/__layout.reset.svelte-79c2efb9.js",
  "/_app/pages/drinktool/index.svelte-49dffede.js",
  "/_app/pages/drinktool/privacy-policy.svelte-8b2c7031.js",
  "/_app/assets/pages/drinktool/privacy-policy.svelte-16bf39b3.css",
  "/_app/pages/drinktool/_fallthough_.svelte-64a1cc04.js",
  "/_app/assets/pages/drinktool/_fallthough_.svelte-a4532598.css",
  "/_app/pages/about.svelte-0729ead1.js",
  "/_app/assets/pages/about.svelte-4bfa9adf.css",
  "/_app/pages/_fallthough_.svelte-7cbf13b2.js",
  "/_app/assets/pages/_fallthough_.svelte-bfcfa6dd.css",
  "/_app/chunks/vendor-6657840f.js",
  "/_app/chunks/singletons-12a22614.js",
  "/_app/chunks/paths-28a87002.js",
  "/_app/chunks/navigation-51f4a605.js"
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
  "/logo-light.png",
  "/manifest.json",
  "/me.jpg",
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
