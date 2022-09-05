const build = [
  "/_app/immutable/start-08d28dc1.js",
  "/_app/immutable/pages/__layout.svelte-8c937cef.js",
  "/_app/immutable/assets/pages/__layout.svelte-5340aea1.css",
  "/_app/immutable/pages/__error.svelte-d970a5a7.js",
  "/_app/immutable/assets/pages/__error.svelte-7067f3c2.css",
  "/_app/immutable/pages/__layout-drinktool.svelte-abe718c7.js",
  "/_app/immutable/pages/drinktool/__error.svelte-a079aff0.js",
  "/_app/immutable/assets/pages/drinktool/__error.svelte-4578a161.css",
  "/_app/immutable/pages/_...path_.svelte-f5746525.js",
  "/_app/immutable/pages/about.svelte-e2709080.js",
  "/_app/immutable/assets/pages/about.svelte-5a0511d3.css",
  "/_app/immutable/pages/drinktool/_...path_@drinktool.svelte-851a9bc0.js",
  "/_app/immutable/pages/drinktool/index@drinktool.svelte-d39cd156.js",
  "/_app/immutable/pages/drinktool/privacy-policy@drinktool.svelte-e04cdccf.js",
  "/_app/immutable/assets/pages/drinktool/privacy-policy@drinktool.svelte-bc4081a2.css",
  "/_app/immutable/pages/index.svelte-77bc948f.js",
  "/_app/immutable/assets/pages/index.svelte-f4043fc0.css",
  "/_app/immutable/pages/works.svelte-43b7e7e4.js",
  "/_app/immutable/assets/pages/works.svelte-b4c3e941.css",
  "/_app/immutable/chunks/index-5d948a52.js",
  "/_app/immutable/chunks/index-06c1623c.js",
  "/_app/immutable/chunks/paths-396f020f.js",
  "/_app/immutable/chunks/singletons-d1fb5791.js",
  "/_app/immutable/chunks/preload-helper-60cab3ee.js",
  "/_app/immutable/chunks/runtime.esm-1e195e88.js",
  "/_app/immutable/chunks/interfaces-50a290f3.js",
  "/_app/immutable/chunks/navigation-3f1ea447.js",
  "/_app/immutable/chunks/Divider-e8897399.js",
  "/_app/immutable/assets/Divider-9ce30687.css",
  "/_app/immutable/chunks/Article-0f71abf0.js",
  "/_app/immutable/assets/Article-3d7cbaeb.css",
  "/_app/immutable/chunks/it-IT-c8fe5320.js",
  "/_app/immutable/chunks/en-US-2e74bbb3.js"
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
const version = "1662408198282";
const worker = self;
const FILES = `cache${version}`;
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
  const cache = await caches.open(`offline${version}`);
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
