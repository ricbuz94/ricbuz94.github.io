<script module lang="ts">
    import type { T_Section } from "$lib/helpers/interfaces";
    import { CornerDownRight } from "lucide-svelte";
    import Icon from "../Icon.svelte";
    import Post from "./Post.svelte";
</script>

<script lang="ts">
    let { section }: { section: T_Section } = $props();
</script>

<li>
    <div class="section-header">
        <Icon component={CornerDownRight} strokeWidth={3} size={16} />
        <h5>{section?.title}</h5>
    </div>
    <ul>
        {#each section?.posts as post}
            <Post {post} />
        {/each}
    </ul>
</li>

<style>
    li {
        margin: 0px;
        padding: 0px;
    }

    li:first-child div {
        padding-top: 0px;
    }

    div {
        display: flex;
        justify-content: start;
        align-items: center;
        padding-top: 2rem;
        padding-left: 0.5rem;
        padding-bottom: 1rem;
    }

    :global(div.section-header > .lucide) {
        stroke: var(--accentColor);
        fill: none;
    }

    h5 {
        font-size: 80%;
        margin-left: 0.5rem;
        margin-top: 3px;
    }

    ul {
        padding: 0px;
        margin: 0px;
        display: grid;
        gap: 3rem;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }

    /* schermo piccolo */
    @media only screen and (max-width: 720px) {
        h5 {
            font-size: 100%;
        }

        ul {
            gap: 0px;
            grid-template-columns: auto;
        }
    }

    /* schermo grande */
    @media only screen and (min-width: 1400px) {
        ul {
            grid-template-columns: repeat(auto-fill, minmax(375, 1fr));
        }
    }
</style>
