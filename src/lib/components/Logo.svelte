<script lang="ts">
    import type {Readable} from "svelte/store";
    import {useMediaQuery} from "$lib/hooks/useMediaQuery";

    import Icon from "./Icon.svelte";
    import Atom from "@lucide/svelte/icons/atom";

    const mq: Readable<boolean> = useMediaQuery("only screen and (max-width: 720px)");

    let isShort: boolean = $state(false);
    mq.subscribe((value) => (isShort = value));
    const size = $derived(isShort ? 34 : 24);
</script>

<a class="logo nav-link" href="/" title="Homepage" draggable="false">
    <Icon component={Atom} {size} color="var(--accentColor)"/>
    <h3 class="logo-text">RB</h3>
</a>

<style>
    .logo {
        display: inline-flex;
        align-items: center;
        margin-right: auto;
        user-select: none;
        color: var(--textColor);
        transition: background-color var(--transition), opacity var(--transition);
    }

    :global(a.logo svg) {
        transition: transform 1s ease-in-out, stroke 1s ease-in-out !important;
    }

    :global(a.logo:hover svg) {
        animation: coolRotation 1s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
    }

    .logo-text {
        font-size: 20px;
        font-weight: 700;
        user-select: none;
        max-width: 160px;
        transition: background-color var(--transition), opacity var(--transition), max-width var(--transition);
    }

    /* schermo piccolo */
    @media only screen and (max-width: 720px) {
        :global(a.logo:hover svg) {
            animation: none;
        }

        :global(a.logo:hover svg) {
            animation: coolRotation 1s cubic-bezier(0.4, 0, 0.2, 1) alternate;
            animation-iteration-count: 2;
        }
    }

    @keyframes coolRotation {
        0% {
            stroke: var(--accentColor);
            transform: rotate(0deg) scale(1);
        }
        50% {
            stroke: var(--textColor);
        }
        100% {
            stroke: var(--accentColor);
            transform: rotate(360deg) scale(1.6);
        }
    }
</style>
