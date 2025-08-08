<script>
    import { _ } from "svelte-i18n";
    import Article from "$lib/components/article/Article.svelte";
    import ArticleLink from "$lib/components/article/ArticleLink.svelte";
    import Banner from "$lib/components/Banner.svelte";
    import Divider from "$lib/components/Divider.svelte";
    import me from "$lib/assets/images/me.webp";
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Homepage of Riccardo Buzzolo. See my works and bio." />
</svelte:head>

<Banner text={$_("home.greatings")} />
<Divider />
<div class="me">
    <div class="title-container">
        <h1 class="title">Riccardo Buzzolo</h1>
        <p class="subtitle">{$_("home.developer")} (Web / Mobile / IT)</p>
    </div>
    <img
        src={me}
        alt="Riccardo Buzzolo"
        title="Riccardo Buzzolo"
        draggable="false"
        oncontextmenu={(e) => e.preventDefault()}
    />
</div>
<Divider />
<Article title={$_("home.works.title")} link="works" linkText={$_("home.works.callToAction")}>
    <p style="text-align: justify;">
        {$_("home.works.content.1")}
        <ArticleLink title="Quadra S.r.l." href={`${import.meta.env.VITE_APP_QUADRA_URL}`} />{$_(
            "home.works.content.2",
        )}
        <ArticleLink title="Beacharound S.r.l." href={`${import.meta.env.VITE_APP_BEACHAROUND_URL}`} />{$_(
            "home.works.content.3",
        )}
        <ArticleLink title="Mango Mobile S.r.l." href={`${import.meta.env.VITE_APP_MANGO_URL}`} />{$_(
            "home.works.content.4",
        )}
        <ArticleLink title="Drink Tool" href="/drinktool/download" />{$_("home.works.content.5")}
    </p>
</Article>
<Divider />
<Article title={$_("home.bio.title")} link="about" linkText={$_("home.bio.callToAction")}>
    <div class="row">
        <p>1994</p>
        <span class="line-separator">-</span>
        <p>{$_("home.bio.content.1")}</p>
    </div>
    <div class="row">
        <p>2004</p>
        <span class="line-separator">-</span>
        <p>{$_("home.bio.content.2")}</p>
    </div>
    <div class="row">
        <p>2013</p>
        <span class="line-separator">-</span>
        <p>
            {$_("home.bio.content.3")}<ArticleLink
                title="ITTS O. Belluzzi, RN"
                href={`${import.meta.env.VITE_APP_ITG_URL}`}
            />.
        </p>
    </div>
    <div class="row">
        <p>2017</p>
        <span class="line-separator">-</span>
        <p>
            {$_("home.bio.content.4")}<ArticleLink
                title="Unibo Alma Mater Studiorum, Cesena"
                href={`${import.meta.env.VITE_APP_UNIBO_URL}`}
            />.
        </p>
    </div>
    <div class="row">
        <p>2018</p>
        <span class="line-separator">-</span>
        <p>
            {$_("home.bio.content.5")}<ArticleLink
                title="Teddy S.p.A."
                href={`${import.meta.env.VITE_APP_TEDDY_URL}`}
            />{$_("home.bio.content.6")}
        </p>
    </div>
    <div class="row">
        <p>2019</p>
        <span class="line-separator">-</span>
        <p>
            {$_("home.bio.content.7")}<ArticleLink
                title="Mango Mobile S.r.l."
                href={`${import.meta.env.VITE_APP_MANGO_URL}`}
            />{$_("home.bio.content.8")}
        </p>
    </div>
    <div class="row">
        <p>2021</p>
        <span class="line-separator">-</span>
        <p>
            {$_("home.bio.content.9")}<ArticleLink
                title="Beacharound S.r.l."
                href={`${import.meta.env.VITE_APP_BEACHAROUND_URL}`}
            />{$_("home.bio.content.10")}
        </p>
    </div>
    <div class="row">
        <p>2025</p>
        <span class="line-separator">-</span>
        <p>
            {$_("home.bio.content.11")}<ArticleLink
                title="Quadra S.r.l."
                href={`${import.meta.env.VITE_APP_QUADRA_URL}`}
            />{$_("home.bio.content.12")}
        </p>
    </div>
</Article>

<style>
    .me {
        display: grid;
        gap: 3rem;
        font-size: 120%;
        grid-template-columns: auto auto;
        align-items: center;
        justify-items: center;
        user-select: none;
        z-index: 1;
    }

    h1.title {
        font-size: 140%;
    }

    p.subtitle {
        font-size: 120%;
    }

    h1.title,
    p.subtitle {
        font-weight: 700;
    }

    p.subtitle {
        font-size: 90%;
    }

    img {
        width: 120px;
        height: 120px;
        padding: 3px;
        border-radius: 50%;
        background-color: var(--subTextColor);
        transition: background-color var(--transition);
        box-shadow: var(--tocShadow);
        user-select: none;
    }

    img:hover {
        background-color: var(--accentColor);
    }

    .row {
        display: flex;
        column-gap: 0.5rem;
        margin-bottom: 0.5rem;
    }

    .row > p:first-child {
        min-width: 50px;
    }

    .line-separator {
        font-weight: bold;
        color: var(--accentColor);
    }

    /* schermo piccolo */
    @media only screen and (max-width: 720px) {
        .title-container {
            text-align: center;
        }

        div p {
            font-weight: 500;
        }

        .me {
            gap: 1.5rem;
            grid-template-columns: auto;
        }
    }

    /* schermo grande */
    @media only screen and (min-width: 1400px) {
        img {
            width: 140px;
            height: 140px;
        }
    }
</style>
