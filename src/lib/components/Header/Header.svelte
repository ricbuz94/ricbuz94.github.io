<script lang="ts">
  import { locale, _ } from "svelte-i18n";
  import { Locale, Theme } from "$lib/helpers/interfaces";
  import { base } from "$app/paths";
  import Logo from "../Logo.svelte";
  import Menu from "../Menu.svelte";
  import NavLink from "../NavLink.svelte";
  import MenuButton from "../MenuButton.svelte";

  export let currentTheme: string;
  export let toggleTheme: ((e: any) => void) | undefined;

  export let language: string | null;

  let isLoading: boolean = false;
  $: localeText = language === Locale.it ? "IT" : "EN";
  $: themeIcon = currentTheme !== Theme.dark ? "moon" : "sun";

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
        locale.set(Locale.en);
        localStorage.setItem("language", Locale.en);
        language = Locale.en;
      } else {
        locale.set(Locale.it);
        localStorage.setItem("language", Locale.it);
        language = Locale.it;
      }
      isLoading = false;

      setTimeout(() => {
        header.style.opacity = "1";
        main.style.opacity = "1";
        footer.style.opacity = "1";
      }, 300);
    }, 300);
  }
</script>

<header id="header">
  <nav id="nav">
    <Logo />
    <ul class="menu-off">
      <li>
        <NavLink href="{base}/works">{$_("layout.nav.works")}</NavLink>
      </li>
      <li>
        <NavLink href="{base}/about">{$_("layout.nav.about")}</NavLink>
      </li>
    </ul>
    <MenuButton icon={themeIcon} onclick={toggleTheme} />
    <MenuButton {isLoading} text={localeText} onclick={handleLocaleChange} />
    <div class="menu-on">
      <Menu />
    </div>
  </nav>
</header>

<style>
  #header {
    z-index: 1;
    height: 80px;
    width: 100%;
    position: fixed;
    box-shadow: none;
    background-color: var(--navBackgroundColor);
    -webkit-backdrop-filter: saturate(180%) blur(15px);
    backdrop-filter: saturate(180%) blur(15px);
    transition: background-color var(--transition), box-shadow var(--transition),
      opacity 300ms ease;
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

  li {
    display: inline;
  }

  .menu-on {
    display: none;
  }

  .menu-off {
    padding: 0px;
    list-style: none;
    margin-right: 10px;
  }

  /* schermo piccolo */
  @media only screen and (max-width: 720px) {
    #header {
      height: 60px;
    }

    #nav {
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
  }

  /* schermo grande */
  @media only screen and (min-width: 1400px) {
    #nav {
      max-width: 850px;
    }
  }
</style>
