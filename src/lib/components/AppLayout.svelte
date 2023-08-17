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

  export let data: LayoutData;
  export let refresh: string = "";

  let isMobile = false;
  let isTopButtonVisible = false;
  let currentTheme = data?.currentTheme;
  const THEME_KEY = "theme";
  const DARK_PREFERENCE = "(prefers-color-scheme: dark)";

  $: favicon =
    currentTheme === Theme.light ? "/favicon.ico" : "/favicon-dark.ico";
  $: addressBarColor = currentTheme === Theme.light ? "#faf9fc" : "#0f0f0f";

  const mq: Readable<boolean> = useMediaQuery(
    "only screen and (max-width: 720px)"
  );
  const isMediaThemeDark =
    browser && window.matchMedia(DARK_PREFERENCE).matches;

  mq.subscribe((value) => (isMobile = value));

  function onScrollHandler() {
    const header = browser && document.getElementById("header");
    if (browser && window.scrollY > 15) {
      isTopButtonVisible = true;
      if (!!header && !isMobile) {
        header.style.height = "60px";
        header.style.boxShadow = "var(--navBorderBottom)";
      }
    } else {
      isTopButtonVisible = false;
      if (!!header && !isMobile) {
        header.style.height = "80px";
        header.style.boxShadow = "none";
      }
    }
  }

  function applyTheme(theme?: string) {
    if (browser) {
      const preferredTheme: Theme = isMediaThemeDark ? Theme.dark : Theme.light;
      const storedTheme = localStorage.getItem(THEME_KEY);
      currentTheme = !!theme ? theme : storedTheme || preferredTheme;
      localStorage.setItem(THEME_KEY, currentTheme);

      if (currentTheme === Theme.dark) {
        document.body?.classList.remove(Theme.light);
        document.body?.classList.add(Theme.dark);
        document.getElementById("theme")?.classList.remove(Theme.light);
        document.getElementById("theme")?.classList.add(Theme.dark);
      } else {
        document.body?.classList.remove(Theme.dark);
        document.body?.classList.add(Theme.light);
        document.getElementById("theme")?.classList.remove(Theme.dark);
        document.getElementById("theme")?.classList.add(Theme.light);
      }
    }
  }

  function toggleTheme() {
    applyTheme(currentTheme === Theme.light ? Theme.dark : Theme.light);
  }

  onMount(async () => {
    applyTheme();
    onScrollHandler();
    window
      .matchMedia(DARK_PREFERENCE)
      .addEventListener("change", () => applyTheme());

    window.addEventListener("scroll", onScrollHandler, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScrollHandler);
      window
        .matchMedia(DARK_PREFERENCE)
        .removeEventListener("change", () => applyTheme());
    };
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <meta name="theme-color" content={addressBarColor} />
</svelte:head>

<div id="theme" class="light">
  {#if $isLoading}
    <div class="loading">
      <Loader />
    </div>
  {:else}
    <Header language={data?.language} {currentTheme} {toggleTheme} />
    {#key (refresh = $page.url.pathname)}
      <main in:fly={{ y: 30, duration: 200, delay: 100 }}>
        <slot />
      </main>
    {/key}
    <Footer />
  {/if}
  {#if isTopButtonVisible}
    <TopButton />
  {/if}
</div>

<style>
  :root {
    --gray0: #f6f9fc;
    --gray1: #dbe1e8;
    --gray2: #b2becd;
    --gray3: #6c7983;
    --gray4: #454e56;
    --gray5: #2a2e35;
    --gray6: #202023;
    --gray7: #0f0f0f;
    --red: #ff414e;
    --redDark: #e13b47;
    --orange: #ff7a00;
    --orangeDark: #e66e00;
    /* --purple: #9166cc; */
    /* --purpleLight: #a372e7; */
    --borderRadius: 0.75rem;
    --transition: 120ms cubic-bezier(0.4, 0, 0.2, 1);
    --activeInputShadow: 0 0 0 3px rgba(66, 153, 225, 0.6);
  }

  #theme {
    margin: 0 auto;
    min-height: 100vh;
    color: var(--textColor);
    font-size: var(--fontSize);
    background-color: var(--backgroundColor);
    transition: color var(--transition), background-color var(--transition);
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, Arial, sans-serif;
  }

  :global(p) {
    margin: 0px;
  }

  :global(a) {
    outline: none;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
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
