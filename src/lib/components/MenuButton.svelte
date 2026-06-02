<script lang="ts">
    import Icon from "./Icon.svelte";
    import Loader from "./Loader.svelte";
    import isMobile from "$lib/stores/isMobileStore";

    let {label = "", icon = null, isLoading = false, text = "", onclick} = $props();
</script>

<button class={[!$isMobile ? "nav-link" : "menu-button"]} title={label} {onclick}>
    {#if isLoading}
        <Loader small/>
    {:else if !!icon}
        <Icon component={icon} size={18}/>
    {:else}
        <p>{text}</p>
    {/if}
</button>

<style>
    button {
        font-size: var(--fontSizeSmall);
        font-weight: 600;
    }

    button:not(.menu-button) {
        cursor: pointer;
        border: none;
        background: none;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1.4;
    }

    .menu-button {
        background-color: transparent !important;
        width: 40px;
        height: 40px;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        -webkit-tap-highlight-color: transparent;
        border: 1px solid var(--borderColor);
        border-radius: var(--borderRadius);
        margin: 0 0 0 0.5rem;
        cursor: pointer;
        transition: all var(--transition);
    }

    .menu-button:active {
        box-shadow: var(--activeInputShadow) !important;
    }

    /* schermo piccolo */
    @media only screen and (max-width: 720px) {
        .menu-button:active {
            box-shadow: none !important;
        }
    }
</style>
