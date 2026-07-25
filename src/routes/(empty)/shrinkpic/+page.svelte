<script lang="ts">
import Icon from "$lib/components/Icon.svelte";
</script>

<svelte:head>
    <title>shrinkpic — Shrink images to 1 MB</title>
</svelte:head>

<div class="container">
    <header>
        <h1><Icon component="shrinkpic" size={28} /> shrinkpic</h1>
        <p class="tagline">Multi-threaded tool that shrinks JPEG/PNG images to ≤ 1 MB while preserving the best possible quality.</p>
        <a class="cta" href={import.meta.env.VITE_APP_SHRINKPIC_REPO_URL} target="_blank" rel="noopener">
            <Icon component="github" />
            View on GitHub
        </a>
    </header>

    <section>
        <h2>Requirements</h2>
        <ul>
            <li>Zig 0.16</li>
            <li>libpng</li>
            <li>libjpeg-turbo</li>
        </ul>
        <h3>macOS</h3>
        <pre><code>brew install zig libpng jpeg-turbo</code></pre>
        <h3>Ubuntu / Debian</h3>
        <pre><code>sudo apt install zig libpng-dev libturbojpeg0-dev</code></pre>
    </section>

    <section>
        <h2>Build</h2>
        <pre><code>git clone {import.meta.env.VITE_APP_SHRINKPIC_REPO_URL}
cd shrinkpic
zig build -Doptimize=ReleaseFast</code></pre>
        <p>Binary: <code>zig-out/bin/shrinkpic</code></p>
    </section>

    <section>
        <h2>Usage</h2>
        <pre><code>./zig-out/bin/shrinkpic &lt;input_dir&gt; [output_dir]</code></pre>
        <ul>
            <li>Processes all <code>.jpg</code> / <code>.jpeg</code> / <code>.png</code> in <code>input_dir</code></li>
            <li>Writes <code>*.shrunk.jpg</code> into <code>output_dir</code> (created if missing)</li>
            <li>If <code>output_dir</code> is omitted, files are written next to the originals</li>
        </ul>
        <h3>Example</h3>
        <pre><code>./zig-out/bin/shrinkpic ./photos ./photos_small</code></pre>
    </section>

    <footer>
        shrinkpic — fast image shrinking for the terminal
    </footer>
</div>

<style lang="scss">
  :root {
    --bg: #0f1117;
    --card: #1a1d27;
    --text: #e4e4e7;
    --muted: #a1a1aa;
    --accent: #3b82f6;
    --accent-hover: #2563eb;
    --border: #27272a;
    --code-bg: #18181b;
    --transition: 200ms cubic-bezier(0.2, 0, 0.2, 1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(html), :global(body) {
    overscroll-behavior: none;
  }

  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
    min-height: 100vh;
  }

  .container {
    max-width: 720px;
    margin: 0 auto;
    padding: 4rem 1.5rem;
  }

  header {
    text-align: center;
    margin-bottom: 3.5rem;

    h1 {
      font-size: 3rem;
      font-weight: 700;
      letter-spacing: -0.03em;
      margin-bottom: 0.75rem;
    }

    .tagline {
      font-size: 1.25rem;
      color: var(--muted);
      max-width: 480px;
      margin: 0 auto 2rem;
    }
  }

  .cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--accent);
    color: white;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.05rem;
    padding: 0.85rem 1.75rem;
    border-radius: 0.75rem;
    transition: background 0.2s;

    &:hover {
      background: var(--accent-hover);
    }
  }

  section {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 1rem;
    padding: 2rem;
    margin-bottom: 1.5rem;

    h2 {
      font-size: 1.35rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    h3 {
      font-size: 1.05rem;
      margin: 1.25rem 0 0.5rem;
      color: var(--muted);
      font-weight: 500;
    }

    p, li {
      color: var(--muted);
    }

    ul {
      padding-left: 1.25rem;
      margin: 0.5rem 0;

      li {
        margin-bottom: 0.35rem;
      }
    }

    pre {
      background: var(--code-bg);
      border: 1px solid var(--border);
      border-radius: 0.5rem;
      padding: 1rem 1.25rem;
      overflow-x: auto;
      font-size: 0.9rem;
      margin: 0.75rem 0;
    }

    code {
      font-family: "SF Mono", "Fira Code", "Cascadia Code", Menlo, monospace;
      color: #e4e4e7;
    }
  }

  footer {
    text-align: center;
    margin-top: 3rem;
    color: var(--muted);
    font-size: 0.875rem;
  }

  @media (max-width: 768px) {
    :global(html), :global(body) {
      overscroll-behavior: initial;
    }

  }
</style>