<script lang="ts">
	import MenuButton from "./MenuButton.svelte";

	export let currentTheme: string;
	export let toggleTheme: () => void;
	const THEMES = {
		LIGHT: "light",
		DARK: "dark",
	};

	$: icon = currentTheme !== THEMES.DARK ? "moon" : "sun";
</script>

<MenuButton {icon} onclick={toggleTheme} />
