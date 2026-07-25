<script lang="ts">
    import type {Snippet} from "svelte";

    let {children}: { children: Snippet } = $props();
</script>

<svelte:head>
    <link rel="icon" href="/shrinkpic/favicon/favicon.ico"/>
</svelte:head>

{@render children()}
