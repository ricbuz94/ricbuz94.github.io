<script lang="ts">
	import "../app.css";
	import { base } from "$app/paths";
	import { page } from "$app/stores";
	import Logo from "$lib/components/Logo.svelte";
	import Switch from "$lib/components/Switch.svelte";
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	import Menu from "$lib/components/Menu.svelte";
	import NavLink from "$lib/components/NavLink.svelte";
	import LocaleSwitch from "$lib/components/LocaleSwitch.svelte";
	import {
		_,
		register,
		init,
		locale,
		getLocaleFromNavigator,
		isLoading,
	} from "svelte-i18n";
	import { Locales } from "$lib/helpers/interfaces";
	import Loader from "$lib/components/Loader.svelte";

	register("it-IT", () => import("$lib/locales/it-IT.json"));
	register("en-US", () => import("$lib/locales/en-US.json"));

	init({
		fallbackLocale: "it-IT",
		initialLocale: "it-IT",
	});

	export let language: string = Locales.it;
	export let refresh: string = "";
	export const load = async ({ page }) => {
		const language =
			localStorage.getItem("language") || getLocaleFromNavigator();

		!!language && locale.set(language);

		return {
			props: {
				key: page.url.pathname,
				language,
			},
		};
	};

	let isSet: boolean;
	const setNavBottomBorder = () => {
		let header = document.getElementById("header");
		if (header) {
			if (!isSet && window.scrollY > 15) {
				header.style.boxShadow = "var(--navBorderBottom)";
			} else {
				header.style.boxShadow = "none";
			}
		}
	};

	let currentTheme = "light";
	const STORAGE_KEY = "theme";
	const year = new Date().getFullYear();
	const DARK_PREFERENCE = "(prefers-color-scheme: dark)";
	const THEMES = {
		LIGHT: "light",
		DARK: "dark",
	};
	$: favicon = currentTheme === "light" ? "/favicon.ico" : "/favicon-dark.ico";

	const prefersDarkThemes = () => window.matchMedia(DARK_PREFERENCE).matches;

	const applyTheme = () => {
		const preferredTheme = prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT;
		currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme;

		if (currentTheme === THEMES.DARK) {
			document.getElementById("theme").classList.remove(THEMES.LIGHT);
			document.getElementById("theme").classList.add(THEMES.DARK);
		} else {
			document.getElementById("theme").classList.remove(THEMES.DARK);
			document.getElementById("theme").classList.add(THEMES.LIGHT);
		}
	};

	const toggleTheme = () => {
		const stored = localStorage.getItem(STORAGE_KEY);

		if (stored) {
			localStorage.removeItem(STORAGE_KEY);
		} else {
			localStorage.setItem(
				STORAGE_KEY,
				prefersDarkThemes() ? THEMES.LIGHT : THEMES.DARK
			);
		}

		applyTheme();
	};

	onMount(() => {
		language = localStorage.getItem("language") || getLocaleFromNavigator();

		console.log("Language: " + language);
		locale.set(language);

		window.addEventListener("scroll", setNavBottomBorder, {
			passive: true,
		});
		applyTheme();
		window.matchMedia(DARK_PREFERENCE).addEventListener("change", applyTheme);

		return () => {
			window.removeEventListener("scroll", setNavBottomBorder);
			window
				.matchMedia(DARK_PREFERENCE)
				.removeEventListener("change", applyTheme);
		};
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div id="theme" class="light">
	{#if $isLoading}
		{#key (refresh = $page.url.pathname)}
			<div class="loading" in:fly={{ y: -15, duration: 300 }}>
				<Loader />
				<div />
			</div>
		{/key}
	{:else}
		<header id="header">
			<nav>
				<Logo />
				<ul class="menu-off">
					<li>
						<NavLink href={`${base}/works`}>{$_("layout.nav.works")}</NavLink>
					</li>
					<li>
						<NavLink href={`${base}/about`}>{$_("layout.nav.about")}</NavLink>
					</li>
				</ul>
				<Switch {currentTheme} {toggleTheme} />
				<LocaleSwitch {language} />
				<div class="menu-on">
					<Menu />
				</div>
			</nav>
		</header>
		{#key (refresh = $page.url.pathname)}
			<main in:fly={{ y: 15, duration: 600, delay: 150 }}>
				<slot />
			</main>
		{/key}
		<footer>
			<div class="contacts-container">
				<a
					href={`${import.meta.env.VITE_APP_MAILTO}`}
					target="_blank"
					rel="nonreferrer"
				>
					<svg class="icon">
						<use href="/feather-sprite.svg#mail" />
					</svg>
					<p>riccardo.buzzolo@gmail.com</p>
				</a>
				<a
					href={`${import.meta.env.VITE_APP_INSTAGRAM_PROFILE_URL}`}
					target="_blank"
					rel="nonreferrer"
				>
					<svg class="icon">
						<use href="/feather-sprite.svg#instagram" />
					</svg>
					<p>@riccardo_buzzolo</p>
				</a>
				<a
					href={`${import.meta.env.VITE_APP_GITHUB_PROFILE_URL}`}
					target="_blank"
					rel="nonreferrer"
				>
					<svg class="icon">
						<use href="/feather-sprite.svg#github" />
					</svg>
					<p>@ricbuz94</p>
				</a>
				<a
					href={`${import.meta.env.VITE_APP_TWITTER_PROFILE_URL}`}
					target="_blank"
					rel="nonreferrer"
				>
					<svg class="icon">
						<use href="/feather-sprite.svg#twitter" />
					</svg>
					<p>@riccardobuzzolo</p>
				</a>
			</div>
			<p>
				Made with <span
					><a
						class="footer-link"
						href={`${import.meta.env.VITE_APP_SVELTEKIT_URL}`}
						target="_blank"
						rel="nonreferrer">SvelteKit</a
					><span /> and
					<span
						><a
							class="footer-link"
							href={`${import.meta.env.VITE_APP_GITHUB_PAGES_URL}`}
							target="_blank"
							rel="nonreferrer">GitHub Pages</a
						></span
					>
				</span>
			</p>
			<p class="sub-text">
				© {year} Riccardo Buzzolo. All Rights Reserved.
			</p>
		</footer>
	{/if}
</div>

<style>
	@font-face {
		font-family: "Nunito";
		font-style: normal;
		src: local("Nunito"), local("Nunito"),
			url("/fonts/Nunito/Nunito.ttf") format("truetype");
		font-display: swap;
	}

	@font-face {
		font-family: "Nunito";
		font-style: italic;
		src: local("Nunito"), local("Nunito"),
			url("/fonts/Nunito/Nunito-Italic.ttf") format("truetype");
		font-display: swap;
	}

	:root {
		--gray0: #f6f9fc;
		--gray1: #dbe1e8;
		--gray2: #b2becd;
		--gray3: #6c7983;
		--gray4: #454e56;
		--gray5: #2a2e35;
		--gray6: #202023;
		--red: #ff414e;
		--redDark: #e13b47;
		--purple: #9166cc;
		--purpleLight: #a372e7;
		--borderRadius: 0.5rem;
		--transition: 0.15s ease;
		--activeInputShadow: 0 0 0 2px rgba(66, 153, 225, 0.6);
	}

	#theme {
		min-height: 100vh;
		background-color: var(--backgroundColor);
		font-family: "Nunito", sans-serif;
		font-size: max(1vmax, var(--fontSize));
		color: var(--textColor);
		word-spacing: 2px;
		transition: color var(--transition), background-color var(--transition);
	}

	:global(p) {
		margin: 0;
	}

	:global(a) {
		outline: none;
		text-decoration: none;
		-webkit-tap-highlight-color: transparent;
	}

	header {
		height: 80px;
		width: 100%;
		z-index: 1;
		box-shadow: none;
		position: fixed;
		background-color: var(--navBackgroundColor);
		-webkit-backdrop-filter: saturate(180%) blur(5px);
		backdrop-filter: saturate(180%) blur(5px);
		transition: background-color var(--transition), box-shadow var(--transition),
			opacity 500ms ease;
	}

	.loading {
		height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}

	nav {
		height: inherit;
		max-width: 70vw;
		display: flex;
		margin-left: auto;
		margin-right: auto;
		padding-left: 20%;
		padding-right: 20%;
		justify-content: start;
		align-items: center;
	}

	.menu-on {
		display: none;
	}

	.menu-off {
		list-style: none;
		padding: 0px;
		margin-right: 5px;
	}

	li {
		display: inline;
	}

	main {
		margin-left: auto;
		margin-right: auto;
		max-width: 60vw;
		padding-top: 80px;
		padding-bottom: 1rem;
		padding-left: 20%;
		padding-right: 20%;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		transition: opacity 500ms ease;
	}

	footer {
		margin-left: auto;
		margin-right: auto;
		max-width: 70vw;
		font-size: 80%;
		min-width: 45vmin;
		padding-top: 2rem;
		padding-bottom: 4rem;
		padding-left: 20%;
		padding-right: 20%;
		transition: opacity 500ms ease;
	}

	.contacts-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
		margin-bottom: 3rem;
	}

	a:hover .icon {
		stroke: var(--accentColor);
	}

	.icon {
		width: 26px;
		height: 26px;
		stroke: var(--textColor);
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
		fill: none;
		padding-top: 3px;
		transition: stroke var(--transition);
	}

	.footer-link {
		color: var(--accentColor);
		font-weight: bold;
		text-decoration: none;
	}

	.footer-link:hover {
		color: var(--accentColorHover);
	}

	footer p {
		line-height: 1.2;
		text-align: center;
		transition: color var(--transition);
	}

	footer a p {
		display: none;
	}

	p.sub-text {
		color: var(--subTextColor);
	}

	/* schermo piccolo */
	@media only screen and (max-width: 720px) {
		:root {
			--transition: 0.3s ease;
		}

		#theme {
			font-size: var(--fontSize);
		}

		header {
			height: 60px;
		}

		nav {
			height: inherit;
			max-width: 100vw;
			padding-left: 1rem;
			padding-right: 1rem;
		}

		.menu-off {
			display: none;
		}

		.menu-on {
			display: block;
		}

		main {
			display: block;
			max-width: 100vw;
			padding-top: 60px;
			padding-left: 1.5rem;
			padding-right: 1.5rem;
		}

		footer {
			max-width: 100vw;
			padding-bottom: 3rem;
			padding-left: 1.5rem;
			padding-right: 1.5rem;
		}

		footer a {
			width: 100%;
			text-align: center;
		}

		footer .icon {
			height: 22px;
			width: 22px;
		}
	}

	/* schermo grande */
	@media only screen and (min-width: 1400px) {
		.contacts-container {
			margin-bottom: 5rem;
		}

		footer a p {
			display: inline;
			line-height: 2;
			padding-left: 5px;
			font-size: 1rem;
			vertical-align: top;
			color: var(--textColor);
		}

		footer a:hover p {
			color: var(--accentColor);
		}
	}
</style>
