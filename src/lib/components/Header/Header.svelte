<script lang="ts">
  import { locale, _ } from "svelte-i18n";
  import { Locale } from "$lib/helpers/interfaces";
  import Logo from "../Logo.svelte";
  import MenuButton from "../Button.svelte";
  import { beforeNavigate } from "$app/navigation";
  import isMobile from "$lib/helpers/isMobile";
  import MenuButtonMobile from "../MenuButtonMobile.svelte";
  import NavMenu from "./NavMenu.svelte";

  export let isDark: boolean;
  export let toggleTheme: (save?: boolean) => void;

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
  $: themeIcon = isDark ? "sun" : "moon";

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

<header id="header" class:mobile={isMobile()}>
  <nav id="nav" class:mobile={isMobile()}>
    <Logo pushRight />
    {#if !isMobile()}
      <NavMenu isOpen={true} {navList} />
    {/if}
    <MenuButton
      icon={themeIcon}
      onclick={() => toggleTheme(true)}
      label={$_("generic.changeTheme")}
    />
    <MenuButton
      {isLoading}
      text={localeText}
      onclick={handleLocaleChange}
      label={$_("generic.changeLanguage")}
    />
    {#if isMobile()}
      <div class="relative">
        <MenuButtonMobile {isOpen} onclick={toggleMenu} label="Menù" />
        <NavMenu {isOpen} {navList} />
      </div>
    {/if}
  </nav>
</header>

<style lang="scss">
  #header {
    @apply w-full h-20 z-40 fixed shadow-none select-none bg-navBackground dark:bg-navBackgroundDark backdrop-saturate-150 backdrop-blur-md transition-all;

    &.mobile {
      @apply h-14;
      position: initial;
    }
  }

  #nav {
    @apply max-w-[650px] h-full px-2 flex gap-1 mx-auto justify-start items-center border;

    &.mobile {
      @apply px-4;
    }
  }

  /* schermo piccolo */
  // @media only screen and (max-width: 720px) {
  //   #header {
  //     @apply block h-14;
  //     position: initial;
  //   }

  //   #nav {
  //     height: inherit;
  //     min-width: inherit;
  //     padding-left: 1.25rem;
  //     padding-right: 1rem;
  //   }
  // }

  /* schermo grande */
  /* @media only screen and (min-width: 1400px) {
    #nav {
      max-width: 850px;
    }
  } */
</style>
