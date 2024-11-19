<script lang="ts">
	import { page } from "$app/stores";
	import type { LayoutData } from "./$types";
	import AppLayout from "$lib/components/AppLayout.svelte";

	let { data, children }: { data: LayoutData; children: any } = $props();
</script>

{#if $page?.url?.pathname?.includes("/drinktool") || $page?.url?.pathname?.includes("/test")}
	{@render children()}
{:else}
	<AppLayout {data}>
		{@render children()}
	</AppLayout>
{/if}
