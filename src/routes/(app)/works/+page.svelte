<script module lang="ts">
    import {_, json, locale} from "svelte-i18n";
    import type {PageData} from "./$types";
    import type {T_Section} from "$lib/helpers/interfaces";
    import Section from "$lib/components/Works/Section.svelte";
</script>

<script lang="ts">
    import Divider from "$lib/components/Divider.svelte";

    let {data}: { data: PageData } = $props();

    const jsonWorks = $derived(
        $json("works", $locale as string | undefined) as Array<{
            header: string;
            list: Array<{ title: string; description: string }>;
        }>,
    );
    const sections = $derived(
        (data?.sections as Array<T_Section>).map(({id, posts}, i) => ({
            id,
            title: jsonWorks[i].header,
            posts: posts?.map((post, j) => ({
                ...post,
                title: jsonWorks[i].list[j].title,
                description: jsonWorks[i].list[j].description,
            })),
        })),
    );
</script>

<svelte:head>
    <title>RB ~ {$_("layout.nav.works")}</title>
    <meta name="description" content="Works page of Riccardo Buzzolo. Browse my old and current projects and works."/>
</svelte:head>

<ul id="sections">
    {#key $locale}
        {#each sections as section, i (section?.id)}
            <Section {section}/>
            {#if i !== sections?.length - 1}
                <Divider text="~"/>
            {/if}
        {/each}
    {/key}
</ul>

<style>
    #sections {
        margin: 0;
        padding: 0;
        width: 100%;
        list-style: none;
        box-sizing: border-box;
        z-index: 1;
    }

    /* schermo piccolo */
    @media only screen and (max-width: 720px) {
        #sections {
            padding: 0;
        }
    }
</style>
