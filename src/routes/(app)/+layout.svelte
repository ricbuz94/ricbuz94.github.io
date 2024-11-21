<script lang="ts">
	import type { Snippet } from "svelte";
	import AppLayout from "$lib/components/AppLayout.svelte";
	import type { LayoutData } from "../$types";

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<AppLayout {data}>
	{@render children()}
</AppLayout>
