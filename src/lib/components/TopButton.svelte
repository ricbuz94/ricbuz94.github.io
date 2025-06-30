<script lang="ts">
    import { fly } from "svelte/transition";
    import { browser } from "$app/environment";
    import { _ } from "svelte-i18n";

    import Icon from "./Icon.svelte";
    import { ArrowUp } from "lucide-svelte";

    let { isHover = false } = $props();

    function onHover() {
        isHover = !isHover;
    }

    function scrollTop() {
        if (browser) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }
</script>

<button
    id="to-top"
    title={$_("generic.goUp")}
    onmouseenter={onHover}
    onmouseleave={onHover}
    onmousedown={scrollTop}
    ontouchstart={scrollTop}
    in:fly={{ x: 0, y: 60, duration: 300, delay: 0 }}
    out:fly={{ x: 0, y: 60, duration: 300, delay: 0 }}
>
    <Icon component={ArrowUp} />
</button>

<style>
    #to-top {
        border: var(--navBorder);
        width: 36px;
        height: 36px;
        border-radius: 50%;
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        z-index: 10;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: var(--cardShadow);
        background-color: var(--navBackgroundColor);
        -webkit-backdrop-filter: saturate(180%) blur(15px);
        backdrop-filter: saturate(180%) blur(15px);
        -webkit-tap-highlight-color: transparent;
        transition: all var(--transition);
    }

    #to-top:active {
        box-shadow: var(--activeInputShadow) !important;
    }

    :global(#to-top:hover > .lucide) {
        stroke: var(--accentColor);
        fill: none;
    }

    @media only screen and (max-width: 720px) {
        #to-top {
            bottom: 1.5rem;
            right: 1rem;
        }
    }
</style>
