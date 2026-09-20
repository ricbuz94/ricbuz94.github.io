<script lang="ts">
    import type {Snippet} from "svelte";

    let {children}: { children: Snippet } = $props();
</script>

<svelte:head>
    <link rel="icon" href="/shrinkpic/favicon/favicon.ico"/>
    <title>shrinkpic — Shrink images for the web</title>
    <meta name="description"
          content="Multi-threaded Zig 0.16 tool that downscales and compresses images to a target size without sacrificing photographic quality."/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""/>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"/>
</svelte:head>

{@render children()}
