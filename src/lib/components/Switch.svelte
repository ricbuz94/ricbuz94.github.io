<script lang="ts">
	export let currentTheme: string;
	export let toggleTheme: () => void;
	const THEMES = {
		LIGHT: "light",
		DARK: "dark",
	};

	$: icon = currentTheme !== THEMES.DARK ? "moon" : "sun";
</script>



<button on:click={toggleTheme}>
	<svg class="icon">
		<use href="/feather-sprite.svg#{icon}" />
	</svg>
</button>

<style>
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
		cursor: pointer;
		transition: all var(--transition);
	}

	button:active {
		box-shadow: var(--activeInputShadow) !important;
	}

	.icon {
		width: 18px;
		height: 18px;
		stroke: var(--textColor);
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
		fill: none;
		transition: stroke var(--transition);
	}
</style>
