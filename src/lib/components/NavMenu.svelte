<script lang="ts">
    import isMobile from "$lib/stores/isMobileStore";

    import Icon from "./Icon.svelte";
    import {page} from "$app/state";

    let {
        isMenuOpen = false,
        navList = [],
    }: {
        isMenuOpen: boolean;
        navList: Array<{
            title: string;
            icon: any;
            href: string;
        }>;
    } = $props();
</script>

<ul class="nav-list" class:active={isMenuOpen}>
    {#each navList as navItem (navItem.title)}
        <li>
            <a
                    class:active={page.url.pathname === navItem.href}
                    href={navItem.href}
                    draggable="false"
            >
                {#if $isMobile}
                    <Icon component={navItem.icon} size={20}/>
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

    .nav-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
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
        transform-origin: top right;
        transform: scale(0.8);
        transition: opacity 0.18s cubic-bezier(0.4, 0, 0.2, 1),
        transform 0.18s cubic-bezier(0.4, 0, 0.2, 1),
        visibility 0.18s cubic-bezier(0.4, 0, 0.2, 1),
        max-height 0.18s cubic-bezier(0.4, 0, 0.2, 1),
        background-color var(--transition);
        visibility: hidden;
        max-height: 0;
        pointer-events: none;
        z-index: 10;
    }

    .nav-list li {
        display: contents;
    }

    .nav-list.active {
        opacity: 1;
        visibility: visible;
        max-height: 500px;
        pointer-events: auto;
        transform: scale(1);
    }

    a {
        color: var(--textColor);
        margin: 0;
        font-size: var(--fontSizeSmall);
        position: relative;
        font-weight: 600;
        text-transform: uppercase;
        line-height: 1.4;

        text-align: center;
        padding: 0.75rem 1.5rem;
        background: none;
        border-radius: var(--borderRadius);
        transition: transform 0.18s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        gap: 1rem;
        align-items: center;

        &.active {
            margin: 0 0.5rem;
            padding: 0.75rem 1rem;
            background-color: var(--accentColorTransparent);
        }

        &:hover {
            transform: scale(0.9);
            background-color: rgba(112, 117, 121, 0.08);
            color: var(--textColor);
        }
    }
</style>
