<script module lang="ts">
    import { _, json, locale } from "svelte-i18n";
    import type { PageData } from "./$types";
    import type { T_Section } from "$lib/helpers/interfaces";
    import Section from "$lib/components/Works/Section.svelte";
</script>

<script lang="ts">
    let { data }: { data: PageData } = $props();

    const jsonWorks = $derived(
        $json("works", $locale as string | undefined) as Array<{
            header: string;
            list: Array<{ title: string; description: string }>;
        }>,
    );
    const sections = $derived(
        (data?.sections as Array<T_Section>).map(({ id, posts }, i) => ({
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
    <title>{$_("layout.nav.works")}</title>
    <meta name="description" content="Works page of Riccardo Buzzolo. Browse my old and current projects and works." />
</svelte:head>

<ul id="sections">
    {#key $locale}
        {#each sections as section, i (section?.id)}
            <Section {section} />
            {#if i !== sections?.length - 1}
                <div id="marker">
                    <p>{"~"}</p>
                </div>
            {/if}
        {/each}
    {/key}
</ul>

<style>
    #sections {
        margin: 0px;
        padding: 0px;
        width: 100%;
        list-style: none;
        box-sizing: border-box;
        z-index: 1;
    }

    #marker {
        padding-top: 3rem;
        text-align: center;
    }

    #marker p {
        font-size: 2rem;
        user-select: none;
    }

    /* schermo piccolo */
    @media only screen and (max-width: 720px) {
        #sections {
            padding: 0px;
        }

        #marker {
            padding-top: 2rem;
            padding-bottom: 1rem;
        }
    }
</style>
