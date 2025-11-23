<script lang="ts">
    import type {Readable} from "svelte/store";
    import {useMediaQuery} from "$lib/hooks/useMediaQuery";

    import Icon from "./Icon.svelte";
    import {Atom as Logo} from "lucide-svelte";

    const mq: Readable<boolean> = useMediaQuery("only screen and (max-width: 720px)");

    let isShort: boolean = $state(false);
    mq.subscribe((value) => (isShort = value));
    const text = $derived(isShort ? "RB" : "RiccardoBuzzolo");
    const size = $derived(isShort ? 34 : 24);
</script>

<a class="logo" href="/" title="Homepage" draggable="false">
    <Icon component={Logo} {size} color="var(--accentColor)"/>
    <h3>{text}</h3>
</a>

<style>
    a {
        display: flex;
        align-items: center;
        margin-right: auto;
        color: var(--textColor);
        user-select: none;
    }

    :global(a.logo svg) {
        transition: transform 1s ease-in-out, stroke 1s ease-in-out !important;
    }

    :global(a.logo:hover svg) {
        animation: coolRotation 1s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
    }

    h3 {
        padding-left: 3px;
        font-size: 20px;
        font-weight: 700;
        user-select: none;
        transition: color var(--transition);
    }

    @media only screen and (max-width: 720px) {
        h3 {
            font-size: 24px;
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
