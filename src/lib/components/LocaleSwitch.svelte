<script context="module">
	import { locale } from "svelte-i18n";
	import { Locale } from "$lib/helpers/interfaces";
</script>

<script lang="ts">
	import MenuButton from "./MenuButton.svelte";

	export let language: string | null;

	let isLoading: boolean = false;
	$: localeText = language === Locale.it ? "IT" : "EN";

	async function handleLocaleChange() {
		isLoading = true;
		let header = document.getElementsByTagName("header")[0];
		let main = document.getElementsByTagName("main")[0];
		let footer = document.getElementsByTagName("footer")[0];

		header.style.opacity = "0";
		main.style.opacity = "0";
		footer.style.opacity = "0";

		setTimeout(() => {
			if (language === Locale.it) {
				locale.set(Locale.en);
				localStorage.setItem("language", Locale.en);
				language = Locale.en;
			} else {
				locale.set(Locale.it);
				localStorage.setItem("language", Locale.it);
				language = Locale.it;
			}
			isLoading = false;

			setTimeout(() => {
				header.style.opacity = "1";
				main.style.opacity = "1";
				footer.style.opacity = "1";
			}, 300);
		}, 300);
	}
</script>

<MenuButton {isLoading} text={localeText} onclick={handleLocaleChange} />
