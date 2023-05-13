<script lang="ts">
  import { locale, _ } from "svelte-i18n";
  import { Locale, Theme } from "$lib/helpers/interfaces";
  import { base } from "$app/paths";
  import Logo from "../Logo.svelte";
  import NavLink from "../NavLink.svelte";
  import MenuButton from "../MenuButton.svelte";
  import { beforeNavigate } from "$app/navigation";
  import isMobile from "$lib/helpers/isMobile";

  export let currentTheme: string;
  export let toggleTheme: ((e: any) => void) | undefined;

  export let language: string | null;

  let isOpen: boolean = false;
  let isLoading: boolean = false;
  $: icon = isOpen ? "x" : "menu";
  $: localeText = language === Locale.it ? "IT" : "EN";
  $: themeIcon = currentTheme !== Theme.dark ? "moon" : "sun";

  function toggleMenu() {
    isOpen = !isOpen;
  }

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
        language = Locale.en;
        locale.set(Locale.en);
        localStorage.setItem("language", Locale.en);
      } else {
        language = Locale.it;
        locale.set(Locale.it);
        localStorage.setItem("language", Locale.it);
      }

      setTimeout(() => {
        header.style.opacity = "1";
        main.style.opacity = "1";
        footer.style.opacity = "1";
        isLoading = false;
      }, 300);
    }, 300);
  }

  beforeNavigate(() => (isOpen = false));
</script>

<header id="header">
  <nav id="nav">
    <Logo />
    <ul id="menu">
      <li>
        <NavLink href="{base}/works">
          {$_("layout.nav.works")}
        </NavLink>
      </li>
      <li>
        <NavLink href="{base}/about">
          {$_("layout.nav.about")}
        </NavLink>
      </li>
    </ul>
    <MenuButton icon={themeIcon} onclick={toggleTheme} label="Cambia tema" />
    <MenuButton
      {isLoading}
      text={localeText}
      onclick={handleLocaleChange}
      label="Cambia lingua"
    />
    <div id="mobile-menu-button">
      <MenuButton {icon} onclick={toggleMenu} label="Menù" />
    </div>
  </nav>
</header>
{#if isMobile()}
  <ul id="menu-mobile" class={isOpen ? "active" : ""}>
    <li>
      <NavLink href="/" mobileIcon="home">Home</NavLink>
    </li>
    <li>
      <NavLink href={`${base}/works`} mobileIcon="layers">
        {$_("layout.nav.works")}
      </NavLink>
    </li>
    <li>
      <NavLink href={`${base}/about`} mobileIcon="user">
        {$_("layout.nav.about")}
      </NavLink>
    </li>
  </ul>
{/if}

<style>
  #header {
    z-index: 101;
    height: 80px;
    width: 100%;
    position: fixed;
    box-shadow: none;
    user-select: none;
    backface-visibility: hidden;
    background-color: var(--navBackgroundColor);
    backdrop-filter: saturate(180%) blur(15px);
    -webkit-backdrop-filter: saturate(180%) blur(15px);
    transition: height 200ms ease 0s, box-shadow 200ms ease 0s,
      background-color var(--transition), opacity 300ms ease;
  }

  #nav {
    max-width: 650px;
    height: inherit;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: start;
    align-items: center;
  }

  #menu {
    display: initial;
  }

  #menu li {
    display: inline;
  }

  #mobile-menu-button {
    display: none;
  }

  /* schermo piccolo */
  @media only screen and (max-width: 720px) {
    #header {
      height: 60px;
      position: initial;
    }

    #nav {
      height: inherit;
      min-width: inherit;
      padding-left: 1.25rem;
      padding-right: 1rem;
    }

    #menu {
      display: none;
    }

    #mobile-menu-button {
      display: initial;
    }

    #menu-mobile.active {
      opacity: 1;
      visibility: visible;
      transform: scale(1);
    }

    #menu-mobile {
      position: absolute;
      height: max-content;
      width: 180px;
      top: 60px;
      right: 15px;
      -webkit-touch-callout: none;
      backdrop-filter: blur(50px);
      background-color: var(--navBackgroundColor);
      border-radius: var(--borderRadius);
      box-shadow: var(--cardShadow);
      border: var(--navBorder);
      opacity: 0;
      margin: 0px;
      padding: 0.5rem 0rem;
      list-style: none;
      display: flex;
      flex-direction: column;
      transform-origin: top right;
      transform: scale(0.8);
      transition: opacity 0.18s cubic-bezier(0.4, 0, 0.2, 1),
        transform 0.18s cubic-bezier(0.4, 0, 0.2, 1),
        visibility 0.18s cubic-bezier(0.4, 0, 0.2, 1),
        background-color var(--transition);
      visibility: hidden;
      z-index: 1000;
    }

    #menu-mobile li {
      display: contents;
    }
  }

  /* schermo grande */
  @media only screen and (min-width: 1400px) {
    #nav {
      max-width: 850px;
    }
  }
</style>
