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
			href="/feather-sprite.svg#{currentTheme !== THEMES.DARK ? 'moon' : 'sun'}"
		/>
	</svg>
</div>

<style>
	div {
		width: 40px;
		height: 40px;
		cursor: pointer;
		outline: none;
		display: flex;
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
