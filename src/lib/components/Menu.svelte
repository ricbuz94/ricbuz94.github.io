<script context="module">
	import { base } from "$app/paths";
	import { beforeNavigate } from "$app/navigation";
	import { _ } from "svelte-i18n";
	import NavLink from "./NavLink.svelte";
	import { fly } from "svelte/transition";
</script>

<script lang="ts">
	import MenuButton from "./MenuButton.svelte";

	let isOpen: boolean = false;
	$: icon = isOpen ? "x" : "menu";

	function toggleMenu() {
		isOpen = !isOpen;
	}

	beforeNavigate(() => {
		isOpen = false;
	});
</script>

{#if isOpen}
	<div in:fly={{ x: 30, y: -15, duration: 180 }}>
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
<MenuButton {icon} onclick={toggleMenu} />

<style>
	ul {
		list-style: none;
		margin: 0px;
		padding: 0.75rem 0.25rem;
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
		border-radius: var(--borderRadius);
		box-shadow: var(--cardShadow);
		transition: background-color var(--transition);
	}
</style>
