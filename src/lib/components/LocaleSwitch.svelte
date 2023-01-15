<script context="module">
	import { locale } from "svelte-i18n";
	import { Locale } from "$lib/helpers/interfaces";
</script>

<script lang="ts">
	import Loader from "./Loader.svelte";

	export let language: string | null;
	let isLoading: boolean = false;
	$: localeText = language === Locale.it ? "IT" : "EN";

	const handleLocaleChange = async (e: any) => {
		e.preventDefault();
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
			header.style.opacity = "1";
			main.style.opacity = "1";
			footer.style.opacity = "1";
		}, 700);
	};
</script>

<button id="localeSwitch" on:click={handleLocaleChange}>
	{#if isLoading}
		<Loader small />
	{:else}
		<p>{localeText}</p>
	{/if}
</button>

<style>
	button {
		width: 40px;
		height: 40px;
		outline: none;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: transparent !important;
		-webkit-tap-highlight-color: transparent;
		background-color: var(--backgroundColor);
		border: 1px solid var(--borderColor);
		border-radius: var(--borderRadius);
		margin: 0px;
		padding: 0px;
		margin-left: 0.5rem;
		cursor: pointer;
		transition: all var(--transition);
	}

	button:active {
		box-shadow: var(--activeInputShadow) !important;
	}

	p {
		letter-spacing: 1px;
		font-weight: 700;
		padding-top: 1px;
		font-size: 14px;
		font-family: "Nunito";
		color: var(--textColor);
		transition: color var(--transition);
	}
</style>
