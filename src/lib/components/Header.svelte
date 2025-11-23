<script lang="ts">
    import { House, Layers, User } from "lucide-svelte";
    import { locale, _ } from "svelte-i18n";
    import { Locale } from "$lib/helpers/interfaces";
    import isMobile from "$lib/stores/isMobileStore";
    import { beforeNavigate } from "$app/navigation";

    import MenuButtonMobile from "./MenuButtonMobile.svelte";
    import MenuButton from "./MenuButton.svelte";
    import NavMenu from "./NavMenu.svelte";
    import Logo from "./Logo.svelte";

    let { themeIcon, toggleTheme } = $props();

    let isOpen: boolean = $state(false);
    let isLoading: boolean = $state(false);

    const navList = $derived([
        {
            title: "Home",
            icon: House,
            href: "/",
        },
        {
            title: $_("layout.nav.works"),
            icon: Layers,
            href: "/works",
        },
        {
            title: $_("layout.nav.about"),
            icon: User,
            href: "/about",
        },
    ]);

    const localeText = $derived($locale === Locale.it ? "IT" : "EN");

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
        {#if !$isMobile}
            <NavMenu {isOpen} {navList} />
        {/if}
        <MenuButton icon={themeIcon} onclick={toggleTheme} label={$_("generic.changeTheme")} />
        <MenuButton
            {isLoading}
            text={localeText}
            onclick={handleLocaleChange}
            label={$_("generic.changeLanguage")}
        />
        {#if $isMobile}
            <div class="menu-area">
                <MenuButtonMobile label="Menù" {isOpen} onclick={toggleMenu} />
                <div class="menu-container">
                    <NavMenu {isOpen} {navList} />
                </div>
            </div>
        {/if}
    </nav>
</header>

<style>
    #header {
        z-index: 10;
        height: 80px;
        width: 100%;
        position: fixed;
        top: 0;
        box-shadow: none;
        user-select: none;
        backface-visibility: hidden;
        background-color: transparent;
        transition:
            height 200ms ease 0s,
            box-shadow 200ms ease 0s,
            background-color var(--transition),
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
        z-index: inherit;
    }

    .menu-area {
        position: relative;
    }
    .menu-container {
        position: absolute;
        top: 3rem;
        right: -0.5rem;
        z-index: 10;
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
