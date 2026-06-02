<script lang="ts">
    import {_, json, locale} from "svelte-i18n";
    import type {PageData} from "./$types";
    import Divider from "$lib/components/Divider.svelte";
    import Icon from "$lib/components/Icon.svelte";
    import CornerDownRight from "@lucide/svelte/icons/corner-down-right";

    let {data}: { data: PageData } = $props();

    const jsonSkills = $derived(
        $json("skills.sections", $locale as string | undefined) as Array<{
            title: string;
            description: string;
            items: Array<{ title: string; description: string; }>;
        }>,
    );

    const skillsSections = $derived(
        (data?.skillsSections as Array<any>).map(({id, items}, i) => ({
            id,
            title: jsonSkills[i].title,
            description: jsonSkills[i].description,
            items: items?.map((item: any, j: number) => ({
                ...item,
                title: jsonSkills[i].items[j].title,
                description: jsonSkills[i].items[j].description,
            })),
        })),
    );
</script>


<svelte:head>
    <title>RB ~ {$_("layout.nav.skills")}</title>
    <meta name="description" content="Works page of Riccardo Buzzolo. Browse my old and current projects and works."/>
</svelte:head>

<div class="content">
    <section class="page-intro">
        <h1>{$_("skills.title")}</h1>
        <p>{$_("skills.description")}</p>
    </section>

    {#each skillsSections as section}
        <Divider/>

        <div class="section-info">
            <div class="section-header">
                <Icon component={CornerDownRight} strokeWidth={3} size={16}/>
                <h5>{section.title}</h5>
            </div>
            <p>{section.description}</p>
        </div>

        <section class="tech-section">
            {#each section.items as item}
                <article class="tech-card">
                    <div class="icon-wrapper">
                        <img src="/icons/{item.title}.svg" alt="Logo {item.title}" loading="lazy"/>
                    </div>
                    <div class="card-content">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </article>
            {/each}
        </section>
    {/each}
</div>

<style>
    .content {
        z-index: 1;
    }

    .page-intro h1 {
        line-height: initial;
        font-size: 2.5rem;
        font-weight: 700;
        letter-spacing: -0.03em;
    }

    .page-intro p {
        font-size: 1.15rem;
        color: var(--subTextColor);
        line-height: 1.5;
    }

    .tech-section {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1rem;
    }

    .tech-section:not(:last-child) {
        margin-bottom: 1rem;
    }

    .section-info {
        width: 100%;
        margin-bottom: 1.5rem;
    }

    .section-header {
        display: flex;
        gap: 0.25rem;
        justify-content: start;
        align-items: center;
    }

    :global(div.section-header > .lucide) {
        stroke: var(--accentColor);
        fill: none;
    }

    .section-header h5 {
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: -0.02em;
        margin-top: 0;
    }

    .section-info p {
        margin-left: 1.25rem;
        font-size: 0.95rem;
        color: var(--subTextColor);
        line-height: 1.5;
    }

    .section-info h5, .section-info p, .tech-section h3, .tech-section p {
        transition: color var(--transition);
        -webkit-transition: color var(--transition);
    }

    .tech-card {
        cursor: default;
        display: flex;
        align-items: flex-start;
        gap: 20px;
        padding: 24px;
        background-color: var(--cardBackgroundColor);
        border: 1px solid var(--navBorder);
        border-radius: 12px;
        transition: transform var(--transition),
        background-color var(--transition),
        box-shadow var(--transition),
        border-color var(--transition);
    }

    .tech-card:hover {
        transform: translateY(-2px);
        border-color: var(--navBorderBottom);
        box-shadow: var(--cardShadow);
    }

    .icon-wrapper {
        width: 44px;
        height: 44px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .icon-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: grayscale(15%) opacity(90%);
        transition: filter 0.2s ease;
    }

    .tech-card:hover .icon-wrapper img {
        filter: grayscale(0%) opacity(100%);
    }

    .card-content h3 {
        font-size: 1.1rem;
        font-weight: 600;
        margin: 0 0 6px 0;
        text-transform: capitalize;
    }

    .card-content p {
        font-size: 0.9rem;
        color: var(--subTextColor);
        line-height: 1.45;
        margin: 0;
    }

    /* schermo piccolo */
    @media only screen and (max-width: 720px) {
        .tech-section {
            grid-template-columns: 1fr;
            gap: 32px;
        }

        .page-intro h1 {
            font-size: 1.5rem;
        }

        .section-header h5 {
            font-size: 1rem;
        }
    }
</style>
