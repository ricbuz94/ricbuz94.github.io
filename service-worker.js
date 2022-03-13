const timestamp = 1647203966834;
const build = [
  "/_app/start-82a2dfb9.js",
  "/_app/pages/__layout.svelte-a5b12c43.js",
  "/_app/assets/pages/__layout.svelte-5e4e0004.css",
  "/_app/pages/__error.svelte-5328f37c.js",
  "/_app/pages/index.svelte-f7c8f228.js",
  "/_app/assets/pages/index.svelte-d1b6e6e4.css",
  "/_app/pages/drinktool/__layout.reset.svelte-1fdcfe7c.js",
  "/_app/pages/drinktool/index.svelte-615ac036.js",
  "/_app/pages/drinktool/privacy-policy.svelte-09adf826.js",
  "/_app/assets/pages/drinktool/privacy-policy.svelte-16bf39b3.css",
  "/_app/pages/drinktool/_fallthough_.svelte-83d25e43.js",
  "/_app/assets/pages/drinktool/_fallthough_.svelte-a4532598.css",
  "/_app/pages/about.svelte-09b3aaa6.js",
  "/_app/assets/pages/about.svelte-0d1dbbb8.css",
  "/_app/pages/works.svelte-e1af7066.js",
  "/_app/assets/pages/works.svelte-d69bfe9c.css",
  "/_app/pages/_fallthough_.svelte-b98f36f1.js",
  "/_app/assets/pages/_fallthough_.svelte-fff7dc47.css",
  "/_app/chunks/vendor-dea0256b.js",
  "/_app/chunks/paths-4b3c6e7e.js",
  "/_app/chunks/singletons-a6a7384f.js",
  "/_app/chunks/Divider-1bfb887c.js",
  "/_app/assets/Divider-9ce30687.css",
  "/_app/chunks/Article-88daeac5.js",
  "/_app/assets/Article-6f082d54.css",
  "/_app/chunks/navigation-bd39ff07.js"
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
  "/images/beach.png",
  "/images/beacharound-business.png",
  "/images/beacharound.png",
  "/images/drinktool.png",
  "/images/howmuchcanidrink.png",
  "/images/me.jpg",
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
