<script lang="ts">
    import { _ } from "svelte-i18n";
    import Article from "$lib/components/article/Article.svelte";
    import ArticleLink from "$lib/components/article/ArticleLink.svelte";
    import Divider from "$lib/components/Divider.svelte";
    import me from "$lib/assets/images/me.webp";
    import code from "$lib/assets/images/code.webp";
</script>

<svelte:head>
    <title>{$_("layout.nav.about")}</title>
    <meta name="description" content="About page for Riccardo Buzzolo. Know something about me." />
</svelte:head>

<div class="content">
    <enhanced:img
        src={me}
        alt="Riccardo Buzzolo"
        title="Riccardo Buzzolo"
        draggable={false}
        oncontextmenu={(e) => e.preventDefault()}
    />
    <div class="card-wide">
        <Article title={$_("about.aboutMe")}>
            <p style="text-align: justify;">
                {$_("about.aboutMeContent1")}
                <ArticleLink title={$_("about.aboutMeLink1")} href={`${import.meta.env.VITE_APP_ITG_URL}`} />{$_(
                    "about.aboutMeContent2",
                )}
                <ArticleLink title={$_("about.aboutMeLink2")} href={`${import.meta.env.VITE_APP_UNIBO_URL}`} />{$_(
                    "about.aboutMeContent3",
                )}
                <ArticleLink title="Beacharound S.r.l." href={`${import.meta.env.VITE_APP_BEACHAROUND_URL}`} />
            </p>
        </Article>
    </div>
</div>
<Divider height={4} />
<div class="content dense">
    <div class="card-wide">
        <Article title={$_("about.aboutMyWork")}>
            <p style="text-align: justify;">
                {$_("about.aboutMyWorkContent1")}
                <ArticleLink title="Quadra S.r.l." href={`${import.meta.env.VITE_APP_QUADRA_URL}`} />{$_(
                    "about.aboutMyWorkContent2",
                )}
            </p>
        </Article>
    </div>
    <enhanced:img src={code} alt="Lavoro" title="Lavoro" draggable={false} oncontextmenu={(e) => e.preventDefault()} />
</div>

<style>
    .card-wide {
        font-size: 90%;
        grid-column: span 2 / auto;
    }

    .content {
        display: grid;
        gap: 3rem;
        grid-template-columns: auto auto auto;
        grid-template-rows: auto;
        align-items: center;
        justify-content: space-between;
        z-index: 1;
    }

    img {
        width: 180px;
        height: 180px;
        padding: 3px;
        border-radius: 50%;
        background-color: var(--subTextColor);
        transition: all var(--transition);
        box-shadow: var(--tocShadow);
        user-select: none;
    }

    img:hover {
        background-color: var(--accentColor);
    }

    /* schermo piccolo */
    @media only screen and (max-width: 800px) {
        .content {
            display: grid;
            gap: 2rem;
            justify-items: center;
            grid-template-columns: auto;
            grid-template-rows: auto auto;
        }

        .dense {
            grid-auto-flow: dense;
        }

        .dense img {
            grid-row: 1;
        }

        .card-wide {
            font-size: 100%;
            grid-column: auto;
        }

        img {
            width: 150px;
            height: 150px;
        }

        p {
            text-align: justify;
        }
    }

    /* schermo grande */
    @media only screen and (min-width: 1400px) {
        .content {
            gap: 4rem;
            grid-template-columns: auto auto auto;
            grid-template-rows: auto;
        }

        .card-wide {
            font-size: 100%;
            grid-column: span 2 / auto;
        }

        img {
            width: 200px;
            height: 200px;
        }
    }
</style>
