<script module lang="ts">
    import { base } from "$app/paths";
    import ButtonLink from "../ButtonLink.svelte";
</script>

<script lang="ts">
    let { title = "Titolo", link = undefined, linkText = "", children = undefined } = $props();
</script>

<article>
    <h3>{title}</h3>
    {#if children}
        {@render children?.()}
    {/if}
    {#if !!link}
        <hr />
        <ButtonLink to={`${base}/${link}`} text={linkText} shadow />
    {/if}
</article>

<style>
    article {
        padding: 2rem 0px;
        position: relative;
        z-index: 1;
    }

    h3 {
        margin-bottom: 1rem;
        text-decoration: underline;
        text-underline-offset: 6px;
        text-decoration-thickness: 3px;
        text-decoration-color: var(--accentColor);
    }

    hr {
        height: 1.5rem;
        background: none;
    }

    /* schermo piccolo */
    @media only screen and (max-width: 720px) {
        article {
            font-size: 120%;
        }
    }
</style>
