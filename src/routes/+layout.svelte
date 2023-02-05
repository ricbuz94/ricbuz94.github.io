<script lang="ts">
	import { page } from "$app/stores";
	import type { LayoutData } from "./$types";
	import AppLayout from "$lib/components/AppLayout.svelte";

	export let data: LayoutData;
</script>

{#if $page?.url?.pathname?.includes("drinktool")}
	<slot />
{:else}
	<AppLayout {data}>
		<slot />
	</AppLayout>
{/if}
