<script>
	export let toggleTheme, currentTheme;
	const THEMES = {
		LIGHT: "light",
		DARK: "dark",
	};
</script>

<div on:click={toggleTheme}>
	<svg class="icon">
		<use
			href={`/feather-sprite.svg#${
				currentTheme !== THEMES.DARK ? "moon" : "sun"
			}`}
		/>
	</svg>
</div>

<style>
	div {
		padding: 5px;
		cursor: pointer;
		outline: none;
		-webkit-tap-highlight-color: transparent;
	}

	div:hover > .icon {
		stroke: var(--accentColor);
	}

	.icon {
		width: 30px;
		height: 30px;
		stroke: var(--textColor);
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
		fill: none;
		margin-top: 3px;
		transition: stroke var(--transition);
	}
</style>
