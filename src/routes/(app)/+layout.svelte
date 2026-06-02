<script lang="ts">
    import "../../app.css";
    import "$lib/i18n";
    import {isLoading} from "svelte-i18n";
    import {browser} from "$app/environment";
    import {onMount, type Snippet} from "svelte";
    import {page} from "$app/state";
    import {fly} from "svelte/transition";
    import {type Readable} from "svelte/store";
    import {useMediaQuery} from "$lib/hooks/useMediaQuery";
    import {Theme, type T_Section} from "$lib/helpers/interfaces";
    import Moon from "@lucide/svelte/icons/moon";
    import Sun from "@lucide/svelte/icons/sun";

    import Loader from "$lib/components/Loader.svelte";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer/Footer.svelte";
    import TopButton from "$lib/components/TopButton.svelte";
    import Divider from "$lib/components/Divider.svelte";
    import Waves from "$lib/components/Waves.svelte";

    const DARK_PREFERENCE = "(prefers-color-scheme: dark)";

    let {children}: {
        data: { theme: string | undefined; sections: T_Section[]; skillsSections: Array<any> };
        children: Snippet
    } = $props();

    let theme = $state();
    let isSmallScreen = $state(false);
    let hideTopButton = $state(true);
    let isMenuOpen = $state(false);
    let themeIcon = $derived(theme === Theme.light ? Moon : Sun);

    const mq: Readable<boolean> = useMediaQuery("only screen and (max-width: 720px)");
    mq.subscribe((value) => (isSmallScreen = value));

    let lastScrollTop = $state(0);
    let ticking = $state(false);

    function onScrollHandler() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const threshold = 10;
                const currentScroll = window.scrollY || document.documentElement.scrollTop;
                const scrollDistance = lastScrollTop - currentScroll;
                const header = document.getElementById("header");

                if (!!header && header instanceof HTMLElement) {
                    if (currentScroll > threshold) {
                        header.classList.add("scrolled");
                        hideTopButton = false;

                        if (currentScroll > lastScrollTop) {
                            header.classList.add("scrolled-down");
                            isMenuOpen = false;
                        } else if (currentScroll < lastScrollTop && scrollDistance > threshold) {
                            header.classList.remove("scrolled-down");
                        }
                    } else {
                        header.classList.remove("scrolled", "scrolled-down");
                        hideTopButton = true;
                    }
                }

                lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
                ticking = false;
            });
            ticking = true;
        }
    }

    function applyTheme(newTheme?: string) {
        if (browser) {
            const THEME_KEY = "theme";
            const isMediaThemeDark = window.matchMedia(DARK_PREFERENCE).matches;
            const preferredTheme: Theme = isMediaThemeDark ? Theme.dark : Theme.light;
            const storedTheme = localStorage.getItem(THEME_KEY);
            theme = newTheme || storedTheme || preferredTheme;
            localStorage.setItem(THEME_KEY, theme as string);

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

        window.addEventListener("scroll", onScrollHandler, {passive: true});
        window.matchMedia(DARK_PREFERENCE).addEventListener("change", () => applyTheme());

        return () => {
            window.removeEventListener("scroll", onScrollHandler);
            window.matchMedia(DARK_PREFERENCE).removeEventListener("change", () => applyTheme());
        };
    });
</script>

<Waves/>
<div id="theme">
    {#if $isLoading}
        <div class="loading">
            <Loader/>
        </div>
    {:else}
        <Header {themeIcon} {toggleTheme} bind:isMenuOpen={isMenuOpen}/>
        {#key page.url.pathname}
            <main in:fly={{ y: 30, duration: isSmallScreen ? 400 : 200, delay: 100 }}>
                <Divider/>
                {@render children()}
                <Divider/>
            </main>
        {/key}
        <Footer/>
        {#if !hideTopButton}
            <TopButton/>
        {/if}
    {/if}
</div>
<Waves class="rotate"/>

<style>
    :global(body) {
        position: relative;
    }

    #theme {
        margin: 0 auto;
        color: var(--textColor);
        font-size: var(--fontSize);
        background-color: var(--backgroundColor);
        transition: color var(--transition),
        background-color var(--transition);
        font-family: "Inter",
        -apple-system,
        BlinkMacSystemFont,
        Arial,
        sans-serif;
    }

    :global(a) {
        outline: none;
        text-decoration: none;
    }

    :global(p) {
        margin: 0;
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
        padding: 80px 0.25rem 160px;
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

        #theme {
            display: grid;
            font-size: var(--fontSizeSmall);
        }

        main {
            width: 100%;
            padding-top: 3rem;
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
