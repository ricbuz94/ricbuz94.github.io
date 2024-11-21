<script lang="ts">
    import "../../app.css";
    import "$lib/i18n";
    import type { Snippet } from "svelte";
    import type { LayoutData } from "../$types";

    let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

{@render children()}
