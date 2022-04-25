<script context="module">
	import { base } from "$app/paths";
	import { _ } from "svelte-i18n";
	import NavLink from "./NavLink.svelte";
	import { fly } from "svelte/transition";
</script>

<script lang="ts">
	let open: boolean = false;
	$: menu = open ? "x" : "menu";

	function toggleMenu() {
		open = !open;
	}
</script>

{#if open}
	<div in:fly={{ x: 30, y: -15, duration: 200 }}>
		<ul>
			<li>
				<NavLink href={`${base}/works`}>{$_("layout.nav.works")}</NavLink>
			</li>
			<li>
				<NavLink href={`${base}/about`}>{$_("layout.nav.about")}</NavLink>
			</li>
		</ul>
	</div>
{/if}
<button on:click={toggleMenu}>
	<svg class="icon">
		<use href="/feather-sprite.svg#{menu}" />
	</svg>
</button>

<style>
	ul {
		height: 100%;
		list-style: none;
		margin: 0px;
		padding: 1rem 0px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	li {
		display: contents;
	}

	div {
		height: fit-content;
		width: 120px;
		position: absolute;
		top: 55px;
		right: 1rem;
		background-color: var(--cardBackgroundColor);
		border-radius: 0.5rem;
		box-shadow: var(--cardShadow);
		transition: background-color var(--transition);
	}

	button {
		background-color: transparent !important;
		width: 40px;
		height: 40px;
		outline: none;
		display: flex;
		align-items: center;
		justify-content: center;
		-webkit-tap-highlight-color: transparent;
		background-color: var(--backgroundColor);
		border: 1px solid var(--borderColor);
		border-radius: var(--borderRadius);
		margin: 0px;
		margin-left: 0.5rem;
		padding: 0.5rem 0.65rem;
		cursor: pointer;
		transition: all var(--transition);
	}

	button:active {
		box-shadow: var(--activeInputShadow) !important;
	}

	.icon {
		width: 26px;
		height: 26px;
		stroke: var(--textColor);
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
		fill: none;
		transition: stroke var(--transition);
	}
</style>
