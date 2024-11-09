<script context="module" lang="ts">
	import { page } from "$app/stores";
	import Icon from "../Icon.svelte";
	import isMobile from "$lib/helpers/isMobile";
</script>

<script lang="ts">
	export let href: string = "/";
	export let mobileIcon: string = "circle";

	$: isActive = $page.url.pathname === href;
</script>

<a
	class="nav-link"
	class:mobile={isMobile()}
	class:active={isActive}
	{...$$props}
	{href}
>
	{#if isMobile()}
		<Icon name={mobileIcon} className="icon sm" />
	{/if}
	<slot />
</a>
