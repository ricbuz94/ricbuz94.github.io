<script lang="ts">
	import { Locale } from "$lib/helpers/interfaces";
	import { browser } from "$app/environment";
	import "$lib/i18n";
	import {
		_,
		locale,
		getLocaleFromNavigator,
		waitLocale,
		isLoading,
	} from "svelte-i18n";
	import { base } from "$app/paths";
	import { page } from "$app/stores";
	import Logo from "$lib/components/Logo.svelte";
	import Switch from "$lib/components/Switch.svelte";
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	import Menu from "$lib/components/Menu.svelte";
	import NavLink from "$lib/components/NavLink.svelte";
	import LocaleSwitch from "$lib/components/LocaleSwitch.svelte";
	import Loader from "$lib/components/Loader.svelte";

	export let language: string | null = Locale.it;
	export let refresh: string = "";

	export const load = async ({ page }: any) => {
		const language =
			localStorage.getItem("language") || getLocaleFromNavigator();

		if (browser) {
			locale.set(language);
		}

		await waitLocale();

		return {
			props: {
				key: page.url.pathname,
				language,
			},
		};
	};

	const setNavBottomBorder = () => {
		let header = document.getElementById("header");
		if (header) {
			if (!!window && window.scrollY > 15) {
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
	$: addressBarColor = currentTheme === "light" ? "#f6f9fc" : "#202023";

	const prefersDarkThemes = () => window.matchMedia(DARK_PREFERENCE).matches;

	const applyTheme = () => {
		const preferredTheme = prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT;
		currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme;

		if (!!document && currentTheme === THEMES.DARK) {
			document.getElementById("theme")?.classList.remove(THEMES.LIGHT);
			document.getElementById("theme")?.classList.add(THEMES.DARK);
		} else {
			document.getElementById("theme")?.classList.remove(THEMES.DARK);
			document.getElementById("theme")?.classList.add(THEMES.LIGHT);
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

	onMount(async () => {
		language = localStorage.getItem("language") || getLocaleFromNavigator();
		if (browser) {
			locale.set(language);
		}

		await waitLocale();

		window.addEventListener("scroll", setNavBottomBorder, {
			passive: true,
		});

		window.matchMedia(DARK_PREFERENCE).addEventListener("change", applyTheme);
		applyTheme();

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
	<meta name="theme-color" content={addressBarColor} />
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
						<NavLink href="{base}/works/">{$_("layout.nav.works")}</NavLink>
					</li>
					<li>
						<NavLink href="{base}/about/">{$_("layout.nav.about")}</NavLink>
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
			<main in:fly={{ y: 30, duration: 600, delay: 150 }}>
				<slot />
			</main>
		{/key}
		<footer>
			<div class="contacts-container">
				<a
					href={`${import.meta.env.VITE_APP_MAILTO}`}
					target="_blank"
					rel="noreferrer"
				>
					<svg class="icon">
						<use href="/feather-sprite.svg#mail" />
					</svg>
					<p>riccardo.buzzolo@gmail.com</p>
				</a>
				<a
					href={`${import.meta.env.VITE_APP_INSTAGRAM_PROFILE_URL}`}
					target="_blank"
					rel="noreferrer"
				>
					<svg class="icon">
						<use href="/feather-sprite.svg#instagram" />
					</svg>
					<p>@riccardo_buzzolo</p>
				</a>
				<a
					href={`${import.meta.env.VITE_APP_GITHUB_PROFILE_URL}`}
					target="_blank"
					rel="noreferrer"
				>
					<svg class="icon">
						<use href="/feather-sprite.svg#github" />
					</svg>
					<p>@ricbuz94</p>
				</a>
				<a
					href={`${import.meta.env.VITE_APP_TWITTER_PROFILE_URL}`}
					target="_blank"
					rel="noreferrer"
				>
					<svg class="icon">
						<use href="/feather-sprite.svg#twitter" />
					</svg>
					<p>@riccardobuzzolo</p>
				</a>
			</div>
			<p class="bottom-text">
				Made with <span
					><a
						class="footer-link"
						href={`${import.meta.env.VITE_APP_SVELTEKIT_URL}`}
						target="_blank"
						rel="noreferrer">SvelteKit</a
					><span /> and
					<span
						><a
							class="footer-link"
							href={`${import.meta.env.VITE_APP_GITHUB_PAGES_URL}`}
							target="_blank"
							rel="noreferrer">GitHub Pages</a
						></span
					>
				</span>
			</p>
			<p class="sub-text bottom-text">
				© {year} Riccardo Buzzolo. All Rights Reserved.
			</p>
		</footer>
	{/if}
</div>

<style>
	@font-face {
		font-family: "Nunito";
		font-style: normal;
		font-weight: 200;
		src: url("..//fonts/Nunito/static/Nunito-ExtraLight.ttf") format("truetype");
		font-display: swap;
	}
	@font-face {
		font-family: "Nunito";
		font-style: italic;
		font-weight: 200;
		src: url("..//fonts/Nunito/static/Nunito-ExtraLightItalic.ttf")
			format("truetype");
		font-display: swap;
	}
	@font-face {
		font-family: "Nunito";
		font-style: normal;
		font-weight: 300;
		src: url("/fonts/Nunito/static/Nunito-Light.ttf") format("truetype");
		font-display: swap;
	}
	@font-face {
		font-family: "Nunito";
		font-style: italic;
		font-weight: 300;
		src: url("/fonts/Nunito/static/Nunito-LightItalic.ttf") format("truetype");
		font-display: swap;
	}
	@font-face {
		font-family: "Nunito";
		font-style: normal;
		font-weight: 400;
		src: url("/fonts/Nunito/static/Nunito-Regular.ttf") format("truetype");
		font-display: swap;
	}
	@font-face {
		font-family: "Nunito";
		font-style: italic;
		font-weight: 400;
		src: url("/fonts/Nunito/static/Nunito-Italic.ttf") format("truetype");
		font-display: swap;
	}
	@font-face {
		font-family: "Nunito";
		font-style: normal;
		font-weight: 500;
		src: url("/fonts/Nunito/static/Nunito-Medium.ttf") format("truetype");
		font-display: swap;
	}
	@font-face {
		font-family: "Nunito";
		font-style: italic;
		font-weight: 500;
		src: url("/fonts/Nunito/static/Nunito-MediumItalic.ttf") format("truetype");
		font-display: swap;
	}
	@font-face {
		font-family: "Nunito";
		font-style: normal;
		font-weight: 600;
		src: url("..//fonts/Nunito/static/Nunito-SemiBold.ttf") format("truetype");
		font-display: swap;
	}
	@font-face {
		font-family: "Nunito";
		font-style: italic;
		font-weight: 600;
		src: url("..//fonts/Nunito/static/Nunito-SemiBoldItalic.ttf")
			format("truetype");
		font-display: swap;
	}
	@font-face {
		font-family: "Nunito";
		font-style: normal;
		font-weight: 700;
		src: url("/fonts/Nunito/static/Nunito-Bold.ttf") format("truetype");
		font-display: swap;
	}
	@font-face {
		font-family: "Nunito";
		font-style: italic;
		font-weight: 700;
		src: url("/fonts/Nunito/static/Nunito-BoldItalic.ttf") format("truetype");
		font-display: swap;
	}
	@font-face {
		font-family: "Nunito";
		font-style: normal;
		font-weight: 800;
		src: url("..//fonts/Nunito/static/Nunito-ExtraBold.ttf") format("truetype");
		font-display: swap;
	}
	@font-face {
		font-family: "Nunito";
		font-style: italic;
		font-weight: 800;
		src: url("..//fonts/Nunito/static/Nunito-ExtraBoldItalic.ttf")
			format("truetype");
		font-display: swap;
	}
	@font-face {
		font-family: "Nunito";
		font-style: normal;
		font-weight: 900;
		src: url("..//fonts/Nunito/static/Nunito-Black.ttf") format("truetype");
		font-display: swap;
	}
	@font-face {
		font-family: "Nunito";
		font-style: italic;
		font-weight: 900;
		src: url("..//fonts/Nunito/static/Nunito-BlackItalic.ttf")
			format("truetype");
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
		--borderRadius: 0.75rem;
		--transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
		--activeInputShadow: 0 0 0 3px rgba(66, 153, 225, 0.6);
	}

	#theme {
		min-height: 100vh;
		color: var(--textColor);
		margin: 0 auto;
		font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu,
			"Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
		font-size: var(--fontSize);
		background-color: var(--backgroundColor);
		transition: color var(--transition), background-color var(--transition),
			width var(--transition);
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
		z-index: 1;
		height: 80px;
		width: 100%;
		position: fixed;
		box-shadow: none;
		background-color: var(--navBackgroundColor);
		-webkit-backdrop-filter: saturate(180%) blur(15px);
		backdrop-filter: saturate(180%) blur(15px);
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
		max-width: 650px;
		height: inherit;
		display: flex;
		margin-left: auto;
		margin-right: auto;
		justify-content: start;
		align-items: center;
	}

	.menu-on {
		display: none;
	}

	.menu-off {
		list-style: none;
		padding: 0px;
		margin-right: 10px;
	}

	li {
		display: inline;
	}

	main {
		width: 650px;
		padding-left: 25px;
		padding-right: 25px;
		margin-left: auto;
		margin-right: auto;
		box-sizing: border-box;
		padding-top: 80px;
		padding-bottom: 1rem;
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
		padding-bottom: 6rem;
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
			--transition: 360ms ease;
		}

		header {
			height: 60px;
		}

		nav {
			height: inherit;
			min-width: inherit;
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
		#theme {
			font-size: var(--fontSizeLarge);
		}

		main {
			width: 850px;
		}

		nav {
			max-width: 850px;
		}

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
