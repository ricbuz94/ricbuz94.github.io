const timestamp = 1643569161650;
const build = [
  "/_app/start-812cece1.js",
  "/_app/assets/start-61d1577b.css",
  "/_app/pages/__layout.svelte-b5bf76f3.js",
  "/_app/assets/pages/__layout.svelte-d5804a55.css",
  "/_app/pages/__error.svelte-4653c4fc.js",
  "/_app/pages/index.svelte-b6b52ec8.js",
  "/_app/assets/pages/index.svelte-d1b6e6e4.css",
  "/_app/pages/drinktool/__layout.reset.svelte-d3fe02ca.js",
  "/_app/pages/drinktool/index.svelte-c6285251.js",
  "/_app/pages/drinktool/privacy-policy.svelte-2dfb1614.js",
  "/_app/assets/pages/drinktool/privacy-policy.svelte-16bf39b3.css",
  "/_app/pages/drinktool/_fallthough_.svelte-5c2e0a22.js",
  "/_app/assets/pages/drinktool/_fallthough_.svelte-a4532598.css",
  "/_app/pages/about.svelte-841bc2f6.js",
  "/_app/assets/pages/about.svelte-0d1dbbb8.css",
  "/_app/pages/works.svelte-03e66321.js",
  "/_app/assets/pages/works.svelte-b14bdec1.css",
  "/_app/pages/_fallthough_.svelte-2c670498.js",
  "/_app/assets/pages/_fallthough_.svelte-fff7dc47.css",
  "/_app/chunks/vendor-8c17374b.js",
  "/_app/chunks/singletons-12a22614.js",
  "/_app/chunks/paths-28a87002.js",
  "/_app/chunks/Divider-e07c07ff.js",
  "/_app/assets/Divider-9ce30687.css",
  "/_app/chunks/Article-d0dc9fea.js",
  "/_app/assets/Article-2857ae5e.css",
  "/_app/chunks/navigation-51f4a605.js"
];
const files = [
  "/.nojekyll",
  "/drinktool.ico",
  "/favicon-dark.ico",
  "/favicon.ico",
  "/feather-sprite.svg",
  "/fonts/Nunito/Nunito-Italic.ttf",
  "/fonts/Nunito/Nunito.ttf",
  "/fonts/Nunito/OFL.txt",
  "/fonts/RobotoMono-Variable.ttf",
  "/images/beacharound.jpg",
  "/images/beacharound_business.png",
  "/images/beacharound_business_info.png",
  "/images/drinktool.png",
  "/images/howmuchcanidrink.png",
  "/images/me.jpg",
  "/images/test_img.jpg",
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
