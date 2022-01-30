<script context="module">
	import { base } from "$app/paths";
</script>

<script lang="ts">
	import NavLink from "./NavLink.svelte";

	let open: boolean = false;

	function closeMenu() {
		open = false;
	}

	function toggleMenu() {
		open = !open;
	}

	$: menu = open ? "x" : "menu";
</script>

<div class={menu}>
	<ul>
		<li>
			<NavLink href={`${base}/works`}>Works</NavLink>
		</li>
		<li>
			<NavLink href={`${base}/about`}>About</NavLink>
		</li>
	</ul>
</div>
<div class="container" on:click={toggleMenu}>
	<svg class="icon">
		<use href="/feather-sprite.svg#{menu}" />
	</svg>
</div>

<style>
	ul {
		height: 100%;
		list-style: none;
		margin: 0px;
		padding: 0px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	li {
		display: contents;
	}

	.menu {
		height: 0px;
		width: 0px;
		background-color: var(--cardBackgroundColor);
		position: absolute;
		top: 50px;
		right: 1rem;
		border-radius: 0.5rem;
		transition: background-color var(--transition), height 0.2s ease,
			width 0.2s ease;
	}

	.menu ul {
		display: none;
	}

	.x {
		height: 120px;
		width: 120px;
		position: absolute;
		top: 50px;
		right: 1rem;
		background-color: var(--cardBackgroundColor);
		border-radius: 0.5rem;
		box-shadow: var(--cardShadow);
		transition: background-color var(--transition), height 0.2s ease,
			width 0.2s ease;
	}

	.container {
		width: 40px;
		height: 40px;
		cursor: pointer;
		outline: none;
		display: flex;
		margin-left: 0.5rem;
		align-items: center;
		justify-content: center;
		-webkit-tap-highlight-color: transparent;
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
