<script lang="ts">
    import Icon from "./Icon.svelte";
    import Loader from "./Loader.svelte";
    import {Circle} from "lucide-svelte";

    let { label = "", icon = null, isLoading = false, text = "", onclick } = $props();
</script>

<button id="button" title={label} {onclick}>
    {#if isLoading}
        <Loader small />
    {:else if !!icon}
        <Icon component={icon} size={18} />
    {:else}
        <p id="text">{text}</p>
    {/if}
</button>

<style>
    #button {
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

    #button:active {
        box-shadow: var(--activeInputShadow) !important;
    }

    #text {
        font-family: inherit;
        letter-spacing: 1px;
        font-weight: 700;
        font-size: 14px;
        user-select: none;
        padding-top: 1px;
        color: var(--textColor);
        transition: color var(--transition);
    }

    /* schermo piccolo */
    @media only screen and (max-width: 720px) {
        #button:active {
            box-shadow: none !important;
        }
    }
</style>
