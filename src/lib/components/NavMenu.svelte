<script lang="ts">
    import { page } from "$app/state";
    import isMobile from "$lib/stores/isMobileStore";

    import Icon from "./Icon.svelte";

    let {
        isOpen = false,
        navList = [],
    }: {
        isOpen: boolean;
        navList: Array<{
            title: string;
            icon: any;
            href: string;
        }>;
    } = $props();

    const menuClass = $derived($isMobile ? "menu-mobile" : "menu");
</script>

<ul class={menuClass} class:active={isOpen}>
    {#each navList as navItem (navItem.title)}
        <li>
            <a
                draggable="false"
                class:mobile={$isMobile}
                class:active={!$isMobile && page.url.pathname === navItem.href}
                href={navItem.href}
            >
                {#if $isMobile}
                    <Icon component={navItem.icon} size={20} />
                {/if}
                {navItem.title}
            </a>
        </li>
    {/each}
</ul>

<style>
    ul {
        padding: 0;
    }

    .menu li {
        display: inline;
    }

    .menu-mobile.active {
        opacity: 1;
        visibility: visible;
        transform: scale(1);
    }

    .menu-mobile {
        height: max-content;
        min-width: 180px;
        -webkit-touch-callout: none;
        backdrop-filter: blur(50px);
        -webkit-backdrop-filter: blur(50px);
        background-color: var(--cardBackgroundColor);
        border-radius: var(--borderRadius);
        box-shadow: var(--cardShadow);
        border: var(--navBorder);
        opacity: 0;
        margin: 0;
        padding: 0.5rem 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        transform-origin: top right;
        transform: scale(0.8);
        transition:
            opacity 0.18s cubic-bezier(0.4, 0, 0.2, 1),
            transform 0.18s cubic-bezier(0.4, 0, 0.2, 1),
            visibility 0.18s cubic-bezier(0.4, 0, 0.2, 1),
            background-color var(--transition);
        visibility: hidden;
        z-index: 10;
    }

    .menu-mobile li {
        display: contents;
    }

    a {
        display: inline-block;
        color: var(--textColor);
        margin: 0 0.5rem;
        font-size: 12px;
        letter-spacing: 1px;
        position: relative;
        font-weight: 600;
        text-transform: uppercase;
        line-height: 1.4;
    }

    a::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: var(--accentColor);
        transform: scaleX(0);
        -webkit-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transition: -webkit-transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
        transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
    }

    a.active::after {
        height: 1px;
    }

    a:hover::after,
    a.active::after {
        background-color: var(--accentColor);
        -webkit-transition-duration: 0.4s;
        transition-duration: 0.4s;
        transform: scaleX(1);
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
    }

    a.mobile {
        text-align: center;
        padding: 0.75rem 1rem;
        background: none;
        font-size: 14px;
        border-radius: var(--borderRadius);
        transition: transform 0.18s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        gap: 1rem;
        align-items: center;
    }

    a.mobile::after {
        display: none;
    }

    a.mobile:hover {
        transform: scale(0.9);
        background-color: rgba(112, 117, 121, 0.08);
        color: var(--textColor);
    }
</style>
