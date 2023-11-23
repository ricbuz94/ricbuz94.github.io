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

{#if isMobile()}
	<a {...$$props} class="mobile" {href}>
		<Icon name={mobileIcon} />
		<slot />
	</a>
{:else}
	<a {...$$props} class:active={isActive} {href}>
		<slot />
	</a>
{/if}

<style>
	a {
		display: inline-block;
		color: var(--textColor);
		margin: 0px 0.5rem;
		font-size: 12px;
		letter-spacing: 1px;
		position: relative;
		font-weight: 600;
		text-transform: uppercase;
		line-height: 1.4;
	}

	a::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: var(--accentColor);
		-webkit-transform: scaleX(0);
		transform: scaleX(0);
		-webkit-transform-origin: right bottom;
		transform-origin: right bottom;
		-webkit-transition: -webkit-transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
		transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
	}

	a.active::after {
		height: 1px;
	}

	a:hover::after,
	a.active::after {
		background-color: var(--accentColor);
		-webkit-transition-duration: 0.4s;
		transition-duration: 0.4s;
		-webkit-transform: scaleX(1);
		transform: scaleX(1);
		-webkit-transform-origin: left bottom;
		transform-origin: left bottom;
	}

	a.mobile {
		text-align: center;
		padding: 0.75rem 1rem;
		background: none;
		font-size: 14px;
		border-radius: var(--borderRadius);
		transition: transform 0.18s cubic-bezier(0.4, 0, 0.2, 1);
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	a.mobile::after {
		display: none;
	}

	a.mobile:hover {
		transform: scale(0.9);
		background-color: rgba(112, 117, 121, 0.08);
		color: var(--textColor);
	}

	/* schermo piccolo */
	@media only screen and (max-width: 1200px) {
	}
</style>
