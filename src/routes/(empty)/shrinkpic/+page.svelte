<script lang="ts">
    import Icon from "$lib/components/Icon.svelte";
</script>

<svelte:head>
    <title>shrinkpic — Shrink images for the web</title>
    <meta name="description"
          content="Multi-threaded Zig 0.16 tool that downscales and compresses images to a target size without sacrificing photographic quality."/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""/>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"/>
</svelte:head>

<header>
    <div class="container">
        <button class="logo" type="button" onclick={() => window.scrollTo({top: 0,behavior: 'smooth'})}>
            <Icon component="shrinkpic" fill="var(--text)" size={20} strokeWidth={0} strokeLinecap="butt" strokeLinejoin="miter"/>
            shrink<span>pic</span>
        </button>
        <nav>
            <a href="#features">Features</a>
            <a href="#install">Install</a>
            <a href="#usage">Usage</a>
        </nav>
    </div>
</header>

<section class="hero">
    <div class="container">
        <h1>Light images.<br/><em>Photo quality.</em></h1>
        <p class="subtitle">
            Multi-threaded Zig 0.16 tool that downscales and compresses photos to a target size without sacrificing
            detail.
        </p>
        <div class="cta-row">
            <a class="btn primary" href={import.meta.env.VITE_APP_SHRINKPIC_REPO_URL}>Clone on GitHub</a>
            <a class="btn ghost" href="#install">Install now</a>
        </div>
        <div class="badge">Zig 0.16 · WebP / JPEG · default 200 KB · up to 8 workers</div>
    </div>
</section>

<section class="features" id="features">
    <div class="container">
        <h2>Why use it</h2>
        <p class="section-sub">Everything you need to make photos web-ready in one shot.</p>
        <div class="grid">
            <div class="card">
                <div class="icon">🖼️</div>
                <h3>Universal input</h3>
                <p>JPEG, PNG, BMP, TGA, GIF and more. Powered by stb_image.</p>
            </div>
            <div class="card">
                <div class="icon">📐</div>
                <h3>Photo-grade resize</h3>
                <p>High-quality linear downscale to 1920px with stb_image_resize2.</p>
            </div>
            <div class="card">
                <div class="icon">⚡</div>
                <h3>WebP or JPEG</h3>
                <p>WebP by default, or progressive JPEG via libjpeg-turbo.</p>
            </div>
            <div class="card">
                <div class="icon">🧹</div>
                <h3>Metadata stripped</h3>
                <p>EXIF, GPS and IPTC removed — more bytes for pixels, less dead weight.</p>
            </div>
            <div class="card">
                <div class="icon">🧵</div>
                <h3>Smart multi-thread</h3>
                <p>Configurable worker pool (1–8) to process entire folders in parallel.</p>
            </div>
            <div class="card">
                <div class="icon">🎯</div>
                <h3>Precise target size</h3>
                <p>Adaptive quality until under the limit. If still over, writes anyway with a warning.</p>
            </div>
        </div>
    </div>
</section>

<section class="install" id="install">
    <div class="container">
        <h2>Install &amp; Build</h2>
        <pre><code># <strong>MacOS</strong>
brew install zig webp jpeg-turbo

# <strong>Ubuntu/Debian</strong>
sudo apt install zig libwebp-dev libturbojpeg0-dev

# <strong>Windows</strong>
winget install zig.zig
# or
choco install zig

# Windows dependencies (vcpkg)
vcpkg install libwebp libjpeg-turbo

# <strong>Build</strong>
git clone {import.meta.env.VITE_APP_SHRINKPIC_REPO_URL}
cd shrinkpic
zig build -Doptimize=ReleaseFast
# or
zig build -Doptimize=ReleaseSafe

# <strong>Binary (Executable)</strong>
zig-out/bin/shrinkpic (Windows: `zig-out\bin\shrinkpic.exe`)</code></pre>
    </div>
</section>

<section class="usage" id="usage">
    <div class="container">
        <h2>Usage</h2>
        <div class="cmd">shrinkpic &lt;input_dir&gt; [output_dir] [--size=200kb] [--jpeg] [--workers=4]</div>
        <div class="cmd">.\shrinkpic.exe "C:\Path\To\Source" "C:\Path\To\Destination" [--size=200kb] [--jpeg] [--workers=4]</div>
        <div class="opts">
            <div class="opt">
                <code>--size=150KB</code>
                <p>Max target size (MB/KB). Default 200kb.</p>
            </div>
            <div class="opt">
                <code>--jpeg</code>
                <p>Force progressive JPEG instead of WebP.</p>
            </div>
            <div class="opt">
                <code>--workers=8</code>
                <p>Parallel threads (1–8). Default 4.</p>
            </div>
        </div>
    </div>
</section>

<section class="final-cta">
    <div class="container">
        <h2>Photo folders → web-ready in seconds</h2>
        <p>No UI. Just speed and quality.</p>
        <a class="btn primary" href={import.meta.env.VITE_APP_SHRINKPIC_REPO_URL}>Get started on GitHub →</a>
    </div>
</section>

<footer>
    <div class="container">shrinkpic · Zig 0.16 · open source</div>
</footer>

<style lang="scss">
  :root {
    --bg: #0b0d10;
    --surface: #14181f;
    --surface-2: #1c222c;
    --border: #2a3340;
    --text: #e8edf5;
    --muted: #8b97a8;
    --accent: #5eead4;
    --accent-dim: #2dd4bf;
    --warn: #fbbf24;
    --radius: 12px;
    --font: "Inter", system-ui, -apple-system, sans-serif;
    --mono: "JetBrains Mono", "Fira Code", ui-monospace, monospace;
    --transition: 200ms cubic-bezier(0.2, 0, 0.2, 1);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :global(html) {
    scroll-behavior: smooth;
  }

  :global(body) {
    font-family: var(--font), sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
    min-height: 100vh;
    overflow-x: hidden;
  }

  :global(body::before) {
    content: "";
    position: fixed;
    inset: 0;
    background-image: linear-gradient(rgba(94, 234, 212, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(94, 234, 212, 0.03) 1px, transparent 1px);
    background-size: 48px 48px;
    pointer-events: none;
    z-index: -1;
  }

  a {
    color: var(--accent);
    text-decoration: none;
    transition: color var(--transition);

    &:hover {
      color: var(--accent-dim);
    }
  }

  .container {
    width: min(1100px, 92%);
    margin-inline: auto;
  }

  // ——— Header ———
  header {
    position: sticky;
    top: 0;
    z-index: 50;
    backdrop-filter: blur(12px);
    background: rgba(11, 13, 16, 0.8);
    border-bottom: 1px solid var(--border);
    padding: 1rem 0;

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      color: var(--text);
      background: none;
      border: none;
      cursor: pointer;
      font-weight: 700;
      font-size: 1.25rem;
      letter-spacing: -0.02em;
      display: flex;
      align-items: center;
      gap: 1px;

      span {
        color: var(--accent);
      }
    }

    nav {
      display: flex;
      gap: 1.5rem;
      font-size: 0.9rem;

      a {
        color: var(--muted);

        &:hover {
          color: var(--text);
        }
      }
    }
  }

  // ——— Hero ———
  .hero {
    padding: 5rem 0 4rem;
    text-align: center;

    h1 {
      font-size: clamp(2.2rem, 5vw, 3.4rem);
      font-weight: 800;
      letter-spacing: -0.03em;
      line-height: 1.15;
      margin-bottom: 1.25rem;

      em {
        font-style: normal;
        background: linear-gradient(135deg, var(--accent), #67e8f9);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }

    .subtitle {
      font-size: 1.15rem;
      color: var(--muted);
      max-width: 540px;
      margin: 0 auto 2rem;
    }

    .cta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      justify-content: center;
      margin-bottom: 2.5rem;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.8rem;
      color: var(--muted);
      background: var(--surface);
      border: 1px solid var(--border);
      padding: 0.35rem 0.75rem;
      border-radius: 999px;
    }
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.75rem 1.4rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.95rem;
    border: none;
    cursor: pointer;
    transition: transform var(--transition), box-shadow var(--transition), background var(--transition);

    &.primary {
      background: var(--accent);
      color: #0b0d10;

      &:hover {
        background: var(--accent-dim);
        transform: translateY(-1px);
        box-shadow: 0 8px 24px rgba(94, 234, 212, 0.25);
      }
    }

    &.ghost {
      background: transparent;
      color: var(--text);
      border: 1px solid var(--border);

      &:hover {
        border-color: var(--muted);
        background: var(--surface);
      }
    }
  }

  // ——— Features ———
  .features {
    padding: 3rem 0 4rem;

    h2 {
      text-align: center;
      font-size: 1.75rem;
      margin-bottom: 0.5rem;
    }

    .section-sub {
      text-align: center;
      color: var(--muted);
      margin-bottom: 2.5rem;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1.25rem;
    }
  }

  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.5rem;
    transition: border-color var(--transition), transform var(--transition);

    &:hover {
      border-color: rgba(94, 234, 212, 0.35);
      transform: translateY(-2px);
    }

    .icon {
      font-size: 1.5rem;
      margin-bottom: 0.75rem;
    }

    h3 {
      font-size: 1.05rem;
      margin-bottom: 0.4rem;
    }

    p {
      font-size: 0.9rem;
      color: var(--muted);
    }
  }

  // ——— Code / Install ———
  .install {
    padding: 3rem 0 4rem;

    h2 {
      text-align: center;
      margin-bottom: 1.5rem;
    }

    pre {
      background: var(--surface-2);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1.25rem 1.5rem;
      overflow-x: auto;
      font-family: var(--mono), sans-serif;
      font-size: 0.85rem;
      line-height: 1.55;
      color: #a5f3fc;
    }

    code {
      font-family: var(--mono), sans-serif;
    }
  }

  // ——— Usage ———
  .usage {
    padding: 2rem 0 4rem;

    h2 {
      text-align: center;
      margin-bottom: 1.5rem;
    }

    .cmd {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1.5rem;
      font-family: var(--mono), sans-serif;
      font-size: 0.9rem;
      text-align: center;
      margin-bottom: 2rem;
      color: var(--accent);
    }

    .opts {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1rem;
    }

    .opt {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1rem 1.25rem;

      code {
        color: var(--accent);
        font-size: 0.9rem;
      }

      p {
        font-size: 0.85rem;
        color: var(--muted);
        margin-top: 0.35rem;
      }
    }
  }

  // ——— CTA final ———
  .final-cta {
    text-align: center;
    padding: 3rem 0 5rem;

    h2 {
      font-size: 1.75rem;
      margin-bottom: 0.75rem;
    }

    p {
      color: var(--muted);
      margin-bottom: 1.5rem;
    }
  }

  // ——— Footer ———
  footer {
    border-top: 1px solid var(--border);
    padding: 1.5rem 0;
    text-align: center;
    font-size: 0.85rem;
    color: var(--muted);
  }

  @media (max-width: 640px) {
    header nav {
      display: none;
    }

    .hero {
      padding-top: 3rem;
    }
  }

  @media (max-width: 768px) {
    :global(html), :global(body) {
      overscroll-behavior: initial;
    }

  }
</style>