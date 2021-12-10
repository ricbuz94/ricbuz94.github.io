const timestamp = 1639179776274;
const build = [
  "/me/app/start-b9473122.js",
  "/me/app/assets/start-61d1577b.css",
  "/me/app/pages/__layout.svelte-f962bdb8.js",
  "/me/app/assets/pages/__layout.svelte-ab021dd4.css",
  "/me/app/pages/__error.svelte-48e92e36.js",
  "/me/app/pages/index.svelte-e71f4f6e.js",
  "/me/app/assets/pages/index.svelte-4f3c9d4b.css",
  "/me/app/pages/drinktool-policy.svelte-7224cf2e.js",
  "/me/app/assets/pages/drinktool-policy.svelte-f584f4d3.css",
  "/me/app/pages/_fallthough_/_fallthough_.svelte-494930e3.js",
  "/me/app/assets/pages/_fallthough_.svelte-2af5e13b.css",
  "/me/app/pages/_fallthough_.svelte-9cfb5b42.js",
  "/me/app/chunks/vendor-8b76c6b9.js",
  "/me/app/chunks/paths-c3a241ee.js",
  "/me/app/chunks/navigation-d8ceaada.js"
];
const files = [
  "/me/drink-tool.ico",
  "/me/favicon.ico",
  "/me/feather-sprite.svg",
  "/me/fonts/RobotoMono-Variable.ttf",
  "/me/fonts/Ubuntu/UFL.txt",
  "/me/fonts/Ubuntu/Ubuntu-Bold.ttf",
  "/me/fonts/Ubuntu/Ubuntu-Light.ttf",
  "/me/fonts/Ubuntu/Ubuntu-Medium.ttf",
  "/me/fonts/Ubuntu/Ubuntu-Regular.ttf",
  "/me/logo-dark.png",
  "/me/logo-light.png",
  "/me/manifest.json",
  "/me/robots.txt"
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
