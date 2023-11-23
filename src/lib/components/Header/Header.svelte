<script lang="ts">
  import { locale, _ } from "svelte-i18n";
  import { Locale, Theme } from "$lib/helpers/interfaces";
  import Logo from "../Logo.svelte";
  import MenuButton from "../MenuButton.svelte";
  import { beforeNavigate } from "$app/navigation";
  import isMobile from "$lib/helpers/isMobile";
  import MenuButtonMobile from "../MenuButtonMobile.svelte";
  import NavMenu from "../NavMenu.svelte";

  export let currentTheme: string;
  export let toggleTheme: ((e: any) => void) | undefined;

  let menuButton: unknown;
  let isOpen: boolean = false;
  let isLoading: boolean = false;
  $: navList = [
    {
      title: "Home",
      icon: "home",
      href: "/",
    },
    {
      title: $_("layout.nav.works"),
      icon: "layers",
      href: "/works",
    },
    {
      title: $_("layout.nav.about"),
      icon: "user",
      href: "/about",
    },
  ];

  $: localeText = $locale === Locale.it ? "IT" : "EN";
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

    setTimeout(async () => {
      if ($locale === Locale.it) {
        await locale.set(Locale.en);
        $locale = Locale.en;
        localStorage.setItem("language", Locale.en);
      } else {
        await locale.set(Locale.it);
        $locale = Locale.it;
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
    {#if !isMobile()}
      <NavMenu isOpen={true} {navList} />
    {/if}
    <MenuButton icon={themeIcon} onclick={toggleTheme} label={$_("generic.changeTheme")} />
    <MenuButton
      {isLoading}
      text={localeText}
      onclick={handleLocaleChange}
      label={$_("generic.changeLanguage")}
    />
    {#if isMobile()}
      <div class="menu-area">
        <MenuButtonMobile
          bind:this={menuButton}
          {isOpen}
          onclick={toggleMenu}
          label="Menù"
        />
        <div class="menu-container">
          <NavMenu {isOpen} {navList} />
        </div>
      </div>
    {/if}
  </nav>
</header>

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

  .menu-area {
    position: relative;

  }
  .menu-container {
    position: absolute;
    top: 3rem;
    right: -0.5rem;

    /* border: 1px solid red; */
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
  }

  /* schermo grande */
  @media only screen and (min-width: 1400px) {
    #nav {
      max-width: 850px;
    }
  }
</style>
