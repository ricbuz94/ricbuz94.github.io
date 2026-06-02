<script lang="ts">
    import {House, Layers, Cpu, User} from "@lucide/svelte/icons";
    import {locale, _} from "svelte-i18n";
    import {Locale} from "$lib/helpers/interfaces";
    import isMobile from "$lib/stores/isMobileStore";
    import {beforeNavigate} from "$app/navigation";

    import Logo from "./Logo.svelte";
    import {page} from "$app/state";
    import Icon from "$lib/components/Icon.svelte";
    import NavMenu from "$lib/components/NavMenu.svelte";
    import Loader from "$lib/components/Loader.svelte";

    let {themeIcon, toggleTheme, isMenuOpen = $bindable(false)} = $props();

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
            title: $_("layout.nav.skills"),
            icon: Cpu,
            href: "/skills",
        },
        {
            title: $_("layout.nav.about"),
            icon: User,
            href: "/about",
        },
    ]);

    const localeText = $derived($locale === Locale.it ? "EN" : "IT");

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    async function handleLocaleChange() {
        isMenuOpen = false;
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

                window.scrollTo({top: 0, behavior: "smooth"});
            }, 300);
        }, 300);
    }

    beforeNavigate(() => (isMenuOpen = false));
</script>

<header id="header">
    <nav id="nav">
        <Logo/>
        {#if !$isMobile}
            <ul id="nav-list">
                {#each navList as navItem (navItem.title)}
                    <li>
                        <a
                                class="nav-link"
                                class:active={page.url.pathname === navItem.href}
                                href={navItem.href}
                                draggable="false"
                        >
                            {navItem.title}
                        </a>
                    </li>
                {/each}
            </ul>
        {/if}
        <button class="nav-link nav-menu-btn" onclick="{handleLocaleChange}">
            {#if isLoading}
                <Loader small/>
            {:else}
                <span class="locale-text">{localeText}</span>
            {/if}
        </button>
        <button class="nav-link nav-menu-btn" onclick="{toggleTheme}">
            <Icon component={themeIcon} size={18}/>
        </button>
        {#if $isMobile}
            <button class="nav-link nav-menu-btn nav-collapse" onclick="{toggleMenu}" title="Menu">
                <svg
                        class:active={isMenuOpen}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                        width="20px"
                        height="20px"
                >
                    <line x1="2" y1="16" x2="22" y2="16" class="middle-down"/>
                    <line x1="2" y1="8" x2="22" y2="8" class="middle-up"/>
                </svg>
            </button>
            <div class="nav-menu-area">
                <div class="nav-menu-container">
                    <NavMenu {isMenuOpen} {navList}/>
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
        transition: height 200ms ease 0s,
        box-shadow 200ms ease 0s,
        background-color var(--transition),
        transform var(--transition),
        opacity 300ms ease;
    }

    :global(#header.scrolled-down) {
        transform: translateY(-100%);
    }

    :global(#header .nav-link) {
        display: inline-flex;
        align-items: center;
        position: relative;
        text-decoration: none;
        border: none;
        background-color: transparent;
        padding: 0.5rem 1rem;
        border-radius: 25px;
    }

    .nav-link:not(.logo) {
        min-width: 36px;
        min-height: 36px;
        height: 36px;
    }

    .nav-link:before {
        content: "";
        height: 6px;
        background-color: var(--accentColor);
        border-radius: 50%;

        width: 0;
        opacity: 0;
        visibility: hidden;
        transform: scale(0);
        transition: opacity var(--transition), transform var(--transition);
    }

    .nav-link.active:before {
        margin-right: 4px;
        width: 6px;
        opacity: 1;
        visibility: visible;
        transform: scale(1);
    }

    :global(#header .nav-link:not(.logo):not(.nav-collapse)) {
        width: initial;
        opacity: 1;
        visibility: visible;
        transition: background-color var(--transition), opacity var(--transition);
    }

    :global(#header .nav-collapse, #header .nav-menu-btn) {
        min-width: 36px;
        min-height: 36px;
        width: 36px;
        height: 36px;
        aspect-ratio: 1/1;
        border-radius: 50%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        padding: 0.5rem;
        transition: background-color var(--transition), opacity var(--transition);
        transform-origin: top right;
    }

    .nav-menu-btn span {
        min-width: 18px;
        min-height: 18px;
        width: 18px;
        height: 18px;
    }

    :global(#header.scrolled-down .nav-collapse) {
        width: 0;
        opacity: 0;
        visibility: hidden;
    }

    .nav-collapse svg {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke: var(--textColor);
        stroke-width: 2.5;
        transition: var(--transition);
        -webkit-transition: var(--transition);
        transform: scale(0.8);
    }

    .nav-collapse .middle-up,
    .nav-collapse .middle-down {
        transition: transform 0.2s;
        transform-origin: 8px 12px;
    }

    :global(.nav-collapse .active .middle-up) {
        transform: rotate(45deg) translate(-1px, 1px);
    }

    :global(.nav-collapse .active .middle-down) {
        transform: rotate(-45deg) translate(-1px, -1px);
    }

    :global(#header.scrolled .logo) {
        gap: 0;
    }

    :global(#header.scrolled .logo-text) {
        visibility: hidden;
        max-width: 0;
        opacity: 0;
    }

    :global(#header.scrolled .nav-link) {
        background-color: var(--backgroundColor);
        border: 1px solid var(--borderColor);
        box-shadow: var(--cardShadow);
    }

    :global(#header.scrolled .nav-link) {
        background-color: var(--backgroundColor);
    }

    :global(#header .nav-link:hover) {
        background-color: var(--cardBackgroundColor);
    }

    #nav {
        max-width: 650px;
        height: inherit;
        display: flex;
        gap: 0.5rem;
        margin-left: auto;
        margin-right: auto;
        justify-content: start;
        align-items: center;
        z-index: inherit;
    }

    #nav-list {
        list-style: none;
        display: flex;
        gap: 0.5rem;
        padding: 0;
    }

    a {
        display: inline-block;
        color: var(--textColor);
        margin: 0;
        font-size: var(--fontSizeVerySmall);
        position: relative;
        font-weight: 600;
        text-transform: uppercase;
        line-height: 1;
    }

    .locale-text {
        font-weight: 600;
        line-height: 1.4;
        color: var(--textColor);
        font-size: var(--fontSizeSmall);
    }

    .nav-menu-area {
        position: relative;

        .nav-menu-container {
            position: absolute;
            top: 1.5rem;
            right: -0.5rem;
            z-index: 10;
        }
    }

    /* schermo piccolo */
    @media only screen and (max-width: 720px) {
        #header {
            height: 60px;
        }

        #nav {
            height: inherit;
            min-width: inherit;
            padding-left: 0.5rem;
            padding-right: 1rem;
        }

        :global(#header.scrolled .nav-link) {
            background-color: var(--cardBackgroundColor);
        }

        :global(#header:not(.scrolled) .nav-link:hover) {
            background-color: transparent;
        }
    }

    /* schermo grande */
    @media only screen and (min-width: 1400px) {
        #nav {
            max-width: 850px;
        }
    }
</style>
