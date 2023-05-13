<script context="module" lang="ts">
	import { page } from "$app/stores";
	import Icon from "./Icon.svelte";
	import isMobile from "$lib/helpers/isMobile";
</script>

<script lang="ts">
	export let href: string = "/";
	export let mobileIcon: string = "circle";

	$: isActive = $page.url.pathname === href;
</script>

<a {...$$props} class:active={isActive} {href}>
	{#if isMobile()}
		<Icon name={mobileIcon} />
	{/if}
	<slot />
</a>

<style>
	a {
		display: inline-block;
		color: var(--textColor);
		margin: 0px 0.5rem;
		font-size: 0.9rem;
		letter-spacing: 1px;
		font-weight: 700;
		background-image: linear-gradient(currentColor 0 0);
		background-position: 0 100%; /*OR bottom left*/
		background-size: 0% 2px;
		background-repeat: no-repeat;
		transition: color var(--transition), background-size 0.3s,
			background-position 0s 0.3s;
	}

	a:hover {
		color: var(--accentColor);
		background-position: 100% 100%; /*OR bottom right*/
		background-size: 100% 2px;
	}

	a.active {
		background-position: 100% 100%; /*OR bottom right*/
		background-size: 100% 2px;
	}

	/* schermo piccolo */
	@media only screen and (max-width: 720px) {
		a {
			text-align: center;
			padding: 0.75rem 1rem;
			background: none;
			font-size: 1rem;
			border-radius: var(--borderRadius);
			transition: transform 0.18s cubic-bezier(0.4, 0, 0.2, 1);
			display: flex;
			gap: 1rem;
			align-items: center;
		}

		a:hover {
			transform: scale(0.9);
			background-color: rgba(112, 117, 121, 0.08);
			color: var(--textColor);
		}
	}
</style>
