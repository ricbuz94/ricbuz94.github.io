<script context="module">
	import { fly } from "svelte/transition";

	export const load = async ({ page }) => ({
		props: {
			key: page.path,
		},
	});
</script>

<script>
	import "../app.css";
	import { base } from "$app/paths";
	import { page } from "$app/stores";
	import Logo from "$lib/components/Logo.svelte";
	import Switch from "$lib/components/Switch.svelte";
	import { onMount } from "svelte";

	// import isMobile from "$lib/helpers/isMobile";
	// console.log(isMobile());

	export let refresh = "";
	let currentTheme = "light";
	const STORAGE_KEY = "theme";
	const DARK_PREFERENCE = "(prefers-color-scheme: dark)";
	const THEMES = {
		LIGHT: "light",
		DARK: "dark",
	};

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
		applyTheme();
		window.matchMedia(DARK_PREFERENCE).addEventListener("change", applyTheme);

		return () =>
			window
				.matchMedia(DARK_PREFERENCE)
				.removeEventListener("change", applyTheme);
	});
</script>

<div id="theme" class="light">
	<header>
		<nav>
			<Logo />
			<ul>
				<li>
					<a class="nav-link" href={`${base}/about`}>About</a>
				</li>
			</ul>
			<Switch {currentTheme} {toggleTheme} />
		</nav>
	</header>
	{#key (refresh = $page.path)}
		<main in:fly={{ x: -10, duration: 200, delay: 300 }}>
			<slot />
		</main>
	{/key}
	<footer>
		<div>
			<a
				href={`${import.meta.env.VITE_APP_MAILTO}`}
				target="_blank"
				rel="nonreferrer"
			>
				<svg class="icon">
					<use href="/feather-sprite.svg#mail" />
				</svg>
			</a>
			<a
				href={`${import.meta.env.VITE_APP_INSTAGRAM_PROFILE_URL}`}
				target="_blank"
				rel="nonreferrer"
			>
				<svg class="icon">
					<use href="/feather-sprite.svg#instagram" />
				</svg>
			</a>
			<a
				href={`${import.meta.env.VITE_APP_GITHUB_PROFILE_URL}`}
				target="_blank"
				rel="nonreferrer"
			>
				<svg class="icon">
					<use href="/feather-sprite.svg#github" />
				</svg>
			</a>
			<a
				href={`${import.meta.env.VITE_APP_TWITTER_PROFILE_URL}`}
				target="_blank"
				rel="nonreferrer"
			>
				<svg class="icon">
					<use href="/feather-sprite.svg#twitter" />
				</svg>
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
		<p>RiccardoBuzzolo © {new Date().getFullYear()}</p>
	</footer>
</div>

<style>
	@font-face {
		font-family: "Ubuntu";
		font-style: normal;
		font-weight: 300;
		src: local("Ubuntu"), local("Ubuntu"),
			url("/fonts/Ubuntu/Ubuntu-Light.ttf") format("truetype");
		font-display: swap;
	}

	@font-face {
		font-family: "Ubuntu";
		font-style: normal;
		font-weight: 400;
		src: local("Ubuntu"), local("Ubuntu"),
			url("/fonts/Ubuntu/Ubuntu-Regular.ttf") format("truetype");
		font-display: swap;
	}

	@font-face {
		font-family: "Ubuntu";
		font-style: normal;
		font-weight: 500;
		src: local("Ubuntu"), local("Ubuntu"),
			url("/fonts/Ubuntu/Ubuntu-Medium.ttf") format("truetype");
		font-display: swap;
	}

	:root {
		--gray0: #f6f9fc;
		--gray1: #dbe1e8;
		--gray2: #b2becd;
		--gray3: #6c7983;
		--gray4: #454e56;
		--gray5: #2a2e35;
		--gray6: #12181b;
		--red: #ff414e;
		--redDark: #e13b47;
		--purple: #9166cc;
		--purpleLight: #a372e7;
		--borderRadius: 0.4rem;
		--transition: 0.2s ease;
	}

	#theme {
		height: inherit;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		background-color: var(--backgroundColor);
		font-family: "Ubuntu", sans-serif;
		font-size: max(2vmin, var(--fontSize));
		color: var(--textColor);
		word-spacing: 2px;
		transition: background-color var(--transition);
	}

	:global(p) {
		margin: 0;
	}

	:global(a) {
		text-decoration: none;
		outline: none;
		-webkit-tap-highlight-color: transparent;
	}

	header {
		min-width: 70vmin;
	}

	nav {
		display: flex;
		padding-top: 3rem;
		padding-bottom: 2rem;
		padding-right: 1rem;
		justify-content: start;
		align-items: center;
	}

	ul {
		margin-left: auto;
		list-style: none;
		padding: 0px;
		margin-right: 5px;
	}

	li {
		display: inline;
	}

	main {
		width: 100%;
		padding-bottom: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		overflow-y: auto;
		scroll-behavior: smooth;
	}

	main::-webkit-scrollbar {
		width: 0.25rem;
	}

	main::-webkit-scrollbar-track {
		background-color: var(--gray1);
		-webkit-transition: background-color var(--transition);
		transition: background-color var(--transition);
	}

	main::-webkit-scrollbar-thumb {
		background-color: var(--accentColor);
		-webkit-transition: background-color var(--transition);
		transition: background-color var(--transition);
	}

	footer {
		font-size: 80%;
		min-width: 45vmin;
		padding-top: 2rem;
		padding-bottom: 4rem;
	}

	footer div {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
		margin-bottom: 2rem;
	}

	a {
		width: 100%;
		text-align: center;
	}

	a:hover .icon {
		stroke: var(--accentColor);
	}

	.nav-link {
		color: var(--textColor);
		padding-left: 5px;
		padding-right: 5px;
		transition: color var(--transition);
	}

	.nav-link:hover {
		color: var(--accentColor);
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
</style>
