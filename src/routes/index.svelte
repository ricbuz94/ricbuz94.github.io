<script context="module">
  export const prerender = true;
  import List from "$lib/components/List.svelte";
  import Switch from "$lib/components/Switch.svelte";
  // import isMobile from "$lib/helpers/isMobile";
  import data from "../lib/data/data";

  // console.log(isMobile());
</script>

<script>
  import { onMount } from "svelte";
  const STORAGE_KEY = "theme";
  const DARK_PREFERENCE = "(prefers-color-scheme: dark)";
  const THEMES = {
    LIGHT: "light",
    DARK: "dark",
  };

  let currentTheme = "light";

  const prefersDarkThemes = () => window.matchMedia(DARK_PREFERENCE).matches;

  const applyTheme = () => {
    const preferredTheme = prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT;
    currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme;

    if (currentTheme === THEMES.DARK) {
      document.body.classList.remove(THEMES.LIGHT);
      document.body.classList.add(THEMES.DARK);
    } else {
      document.body.classList.remove(THEMES.DARK);
      document.body.classList.add(THEMES.LIGHT);
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

<svelte:head>
  <link rel="icon" href="/favicon.ico" />
  <title>Home · RiccardoBuzzolo</title>
</svelte:head>

<header>
  <nav>
    <img
      class="logo"
      src={currentTheme !== THEMES.DARK ? "/logo-light.png" : "/logo-dark.png"}
      alt="Logo"
    />
    <Switch {currentTheme} {toggleTheme} />
  </nav>
</header>
<main>
  <ul>
    {#each data as item}
      <List {item} />
    {/each}
  </ul>
</main>
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

<style>
  :global(p) {
    margin: 0;
  }

  :global(a) {
    text-decoration: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  header {
    min-width: 60vmin;
  }

  nav {
    display: flex;
    padding-top: 4rem;
    padding-bottom: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    width: 50px;
    height: 50px;
  }

  main {
    width: 100%;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    overflow-y: auto;
    /* max-height: 60vh; */
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

  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
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
