<script lang="ts">
  import "../../app.css";
  import "$lib/i18n";
  import { _, isLoading } from "svelte-i18n";
  import { page } from "$app/stores";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { Theme } from "$lib/helpers/interfaces";
  import Loader from "$lib/components/Loader.svelte";
  import Footer from "$lib/components/Footer/Footer.svelte";
  import Header from "$lib/components/Header/Header.svelte";
  import type { LayoutData } from "../../routes/$types";
  import { useMediaQuery } from "$lib/hooks/useMediaQuery";
  import type { Readable } from "svelte/store";
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
  $: addressBarColor = currentTheme === Theme.light ? "#f6f9fc" : "#202023";

  const header = browser && document.getElementById("header");
  const mq: Readable<boolean> = useMediaQuery(
    "only screen and (max-width: 720px)"
  );
  const isMediaThemeDark =
    browser && window.matchMedia(DARK_PREFERENCE).matches;

  mq.subscribe((value) => (isMobile = value));

  function onScrollHandler() {
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
    {#key (refresh = $page.url.pathname)}
      <div class="loading" in:fly={{ y: -15, duration: 300 }}>
        <Loader />
        <div />
      </div>
    {/key}
  {:else}
    <Header language={data?.language} {currentTheme} {toggleTheme} />
    {#key (refresh = $page.url.pathname)}
      <main in:fly={{ y: 30, duration: 600, delay: 150 }}>
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
  @font-face {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 200;
    src: url("/fonts/Nunito/static/Nunito-ExtraLight.ttf") format("truetype");
    font-display: swap;
  }
  @font-face {
    font-family: "Nunito";
    font-style: italic;
    font-weight: 200;
    src: url("/fonts/Nunito/static/Nunito-ExtraLightItalic.ttf")
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
    src: url("/fonts/Nunito/static/Nunito-SemiBold.ttf") format("truetype");
    font-display: swap;
  }
  @font-face {
    font-family: "Nunito";
    font-style: italic;
    font-weight: 600;
    src: url("/fonts/Nunito/static/Nunito-SemiBoldItalic.ttf")
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
    src: url("/fonts/Nunito/static/Nunito-ExtraBold.ttf") format("truetype");
    font-display: swap;
  }
  @font-face {
    font-family: "Nunito";
    font-style: italic;
    font-weight: 800;
    src: url("/fonts/Nunito/static/Nunito-ExtraBoldItalic.ttf")
      format("truetype");
    font-display: swap;
  }
  @font-face {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 900;
    src: url("/fonts/Nunito/static/Nunito-Black.ttf") format("truetype");
    font-display: swap;
  }
  @font-face {
    font-family: "Nunito";
    font-style: italic;
    font-weight: 900;
    src: url("/fonts/Nunito/static/Nunito-BlackItalic.ttf") format("truetype");
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
    --transition: 120ms cubic-bezier(0.4, 0, 0.2, 1);
    --activeInputShadow: 0 0 0 3px rgba(66, 153, 225, 0.6);
  }

  #theme {
    min-height: 100vh;
    color: var(--textColor);
    margin: 0 auto;
    font-family: "Nunito", -apple-system, BlinkMacSystemFont, Arial, sans-serif;
    font-size: var(--fontSize);
    background-color: var(--backgroundColor);
    transition: color var(--transition), background-color var(--transition);
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
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
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
