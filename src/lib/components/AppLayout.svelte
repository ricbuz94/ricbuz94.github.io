<script lang="ts">
  import "../../app.css";
  import "$lib/i18n";
  import { _, isLoading } from "svelte-i18n";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { fly } from "svelte/transition";
  import type { Readable } from "svelte/store";
  import type { LayoutData } from "../../routes/$types";
  import { useMediaQuery } from "../hooks/useMediaQuery";
  import { Theme } from "../helpers/interfaces";
  import Loader from "./Loader.svelte";
  import Footer from "./Footer/Footer.svelte";
  import Header from "./Header/Header.svelte";
  import TopButton from "./TopButton.svelte";
  import Divider from "./Divider.svelte";

  const DARK_PREFERENCE = "(prefers-color-scheme: dark)";

  let { data, children }: { data: LayoutData; children: any } = $props();

  let theme = $state(data?.theme);
  let isSmallScreen = $state(false);
  let hideTopButton = $state(true);

  const mq: Readable<boolean> = useMediaQuery(
    "only screen and (max-width: 720px)",
  );

  mq.subscribe((value) => (isSmallScreen = value));

  function onScrollHandler() {
    if (browser) {
      const header = document.getElementById("header");
      if (window.scrollY > 15) {
        hideTopButton = false;
        if (!!header && !isSmallScreen) {
          header.style.height = "60px";
          header.style.boxShadow = "var(--navBorderBottom)";
        }
      } else {
        hideTopButton = true;
        if (!!header && !isSmallScreen) {
          header.style.height = "80px";
          header.style.boxShadow = "none";
        }
      }
    }
  }

  function applyTheme(t?: string) {
    if (browser) {
      const THEME_KEY = "theme";
      const isMediaThemeDark = window.matchMedia(DARK_PREFERENCE).matches;
      const preferredTheme: Theme = isMediaThemeDark ? Theme.dark : Theme.light;
      const storedTheme = localStorage.getItem(THEME_KEY);
      theme = !!t ? t : storedTheme || preferredTheme;
      localStorage.setItem(THEME_KEY, theme);

      const favicon = document.getElementsByTagName("link")[0];
      const metaThemeColor: any = document.getElementsByName("theme-color")[0];

      if (theme === Theme.dark) {
        document.body?.classList.remove(Theme.light);
        document.body?.classList.add(Theme.dark);
        document.getElementById("theme")?.classList.remove(Theme.light);
        document.getElementById("theme")?.classList.add(Theme.dark);
        favicon.href = "/favicon-dark.ico";
        metaThemeColor.content = "#0f0f0f";
      } else {
        document.body?.classList.remove(Theme.dark);
        document.body?.classList.add(Theme.light);
        document.getElementById("theme")?.classList.remove(Theme.dark);
        document.getElementById("theme")?.classList.add(Theme.light);
        favicon.href = "/favicon.ico";
        metaThemeColor.content = "#faf9fc";
      }
    }
  }

  function toggleTheme() {
    applyTheme(theme === Theme.light ? Theme.dark : Theme.light);
  }

  onMount(() => {
    applyTheme();
    onScrollHandler();

    window.addEventListener("scroll", onScrollHandler, { passive: true });
    window
      .matchMedia(DARK_PREFERENCE)
      .addEventListener("change", () => applyTheme());

    return () => {
      window.removeEventListener("scroll", onScrollHandler);
      window
        .matchMedia(DARK_PREFERENCE)
        .removeEventListener("change", () => applyTheme());
    };
  });
</script>

<svelte:head>
  <!-- <link rel="icon" href={favicon} />
  <meta name="theme-color" content={addressBarColor} /> -->
</svelte:head>

<div id="theme">
  {#if $isLoading}
    <div class="loading">
      <Loader />
    </div>
  {:else}
    <Header themeIcon={theme !== Theme.dark ? "moon" : "sun"} {toggleTheme} />
    {#key $page.url.pathname}
      <main in:fly={{ y: 30, duration: isSmallScreen ? 400 : 200, delay: 100 }}>
        <Divider />
        {@render children()}
        <Divider />
      </main>
    {/key}
    <Footer />
    {#if !hideTopButton}
      <TopButton />
    {/if}
  {/if}
</div>

<style>
  #theme {
    margin: 0 auto;
    min-height: 100vh;
    color: var(--textColor);
    font-size: var(--fontSize);
    background-color: var(--backgroundColor);
    transition:
      color var(--transition),
      background-color var(--transition);
    font-family:
      "Poppins",
      -apple-system,
      BlinkMacSystemFont,
      Arial,
      sans-serif;
  }

  :global(a) {
    outline: none;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }
  :global(p) {
    margin: 0px;
  }

  .loading {
    position: absolute;
    top: 40%;
    left: 50%;
    padding: 3px;
    transform: translate(-50%, -60%);
  }

  main {
    width: 650px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 80px;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    transition: opacity 300ms ease;
  }

  /* schermo piccolo */
  @media only screen and (max-width: 720px) {
    :root {
      --transition: 300ms ease;
    }

    main {
      width: 100%;
      display: block;
      padding-top: 0px;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
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
  }
</style>
