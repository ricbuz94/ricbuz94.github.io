<script lang="ts">
    import {_} from "svelte-i18n";
    import {page} from '$app/state';
    import {resolve} from '$app/paths';
    import {goto} from "$app/navigation";
    import Icon from "$lib/components/Icon.svelte";
    import ArrowLeft from "@lucide/svelte/icons/arrow-left";
    import File from "@lucide/svelte/icons/file";

    function goToHome() {
        if (page.url.pathname.includes("/drinktool")) {
            return goto(resolve('/drinktool'));
        }
        goto(resolve('/'));
    }
</script>

<svelte:head>
    <title>404</title>
</svelte:head>

<div id="container">
    <Icon component={File} size={80} strokeWidth={1}/>
    <h2 id="title">404 ~ {$_("generic.notFound")}</h2>
    <button id="back-button" onclick={goToHome}>
        <Icon component={ArrowLeft} size={16}/>
        <span>{$_("generic.back")}</span>
    </button>
</div>

<style>
    #container {
        height: 600px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: "Roboto Mono", monospace;
        font-size: var(--fontSize, 16px);
        color: black;
    }

    #title {
        text-align: center;
        margin-top: 2rem;
        margin-bottom: 4rem;
        color: var(--textColor, currentColor);
    }

    #back-button {
        display: flex;
        font-family: inherit;
        justify-content: space-between;
        align-items: center;
        outline: none;
        cursor: pointer;
        text-decoration: none;
        color: var(--textColor, currentColor);
        font-weight: 700;
        font-size: 0.75rem;
        padding: 0.5rem 0.8rem;
        border: 2px solid #6c7983;
        border-radius: 10px;
        user-select: none;
        background-color: transparent;
        -webkit-tap-highlight-color: transparent;
    }

    #back-button:hover {
        border-color: var(--textColor, currentColor);
    }

    #back-button span {
        margin: 0 0 0 5px;
        color: var(--textColor, currentColor);
        text-transform: uppercase;
    }
</style>
