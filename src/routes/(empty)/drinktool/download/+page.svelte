<script module lang="ts">
    import {onMount} from "svelte";
    import type {Readable} from "svelte/store";
    import Glide from "@glidejs/glide";
    import isMobile from "$lib/stores/isMobileStore";
    import {useMediaQuery} from "$lib/hooks/useMediaQuery";
    import Icon from "$lib/components/Icon.svelte";
</script>

<script lang="ts">
    import {browser} from "$app/environment";
    import logo from "$lib/assets/images/drinktool/logo.png";
    import {TriangleAlert, ArrowLeft, ArrowRight, Download, Share2} from "lucide-svelte";

    let debounce: NodeJS.Timeout | undefined = $state(undefined);
    let isSmallScreen = $state(false);
    let fileURL: string = $state("");

    const mq: Readable<boolean> = useMediaQuery("only screen and (max-width: 720px)");
    mq.subscribe((value) => (isSmallScreen = value));

    let glider: Glide | undefined = $state();

    const slides = Array.from({length: 14}, (_, i) => ({
        src: `${i + 1}.jpg`,
        title: "image-" + (i + 1),
    }));

    async function downloadApp() {
        try {
            if (browser && location?.protocol === "https:") {
                if (!!fileURL?.length) {
                    let link = document.createElement("a");
                    link.setAttribute("href", fileURL);
                    link.setAttribute("download", "drinktool.apk");
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
            } else {
                alert("Attenzione: connessione non sicura.");
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function shareApp() {
        try {
            if (browser && navigator?.share) {
                await navigator.share({
                    title: "DrinkTool",
                    text: "Hey, sto usando DrinkTool, il calcolatore in tempo reale del BAC (Blood Alcohol Content). Scaricalo anche tu!",
                    url: import.meta.env.VITE_APP_DRINKTOOL_URL || "#",
                });
            } else {
                alert("Dispositivo non supportato o connessione non sicura. Condividere manualmente.");
            }
        } catch (error) {
            console.log(error);
        }
    }

    onMount(async () => {
        glider = new Glide(".glide", {
            perView: isSmallScreen ? 1 : 3,
            peek: {before: 0, after: 60},
            startAt: 0,
            rewind: false,
            touchRatio: 1,
            touchAngle: 40,
            animationDuration: 120,
            bound: true,
        }).mount();

        if (!$isMobile) {
            window.addEventListener("resize", function () {
                clearTimeout(debounce);
                debounce = setTimeout(function () {
                    glider?.destroy();
                    glider = new Glide(".glide", {
                        perView: isSmallScreen ? 1 : 3,
                        peek: {before: 0, after: 60},
                        startAt: 0,
                        rewind: false,
                        touchRatio: 1,
                        touchAngle: 40,
                        animationDuration: 120,
                        bound: true,
                    }).mount();
                }, 100);
            });
        }

        const file = await fetch("/drinktool.apk");
        const fileBlob = await file.blob();
        fileURL = URL.createObjectURL(fileBlob);
    });
</script>

<svelte:head>
    <link rel="stylesheet" href="/glide.core.min.css"/>
    <title>DrinkTool | Download</title>

    <!-- MS, fb & Whatsapp -->
    <!-- MS Tile - for Microsoft apps-->
    <meta name="msapplication-TileImage" content="https://ricbuz94.github.io/drinktool/logo-small.png"/>

    <!-- fb & Whatsapp -->
    <!-- Site Name, Title, and Description to be displayed -->
    <meta property="og:site_name" content="DrinkTool"/>
    <meta property="og:title" content="DrinkTool - BAC calculator"/>
    <meta
            property="og:description"
            content="DrinkTool è il calcolatore in tempo reale di BAC (Blood Alcohol Conten) facile da usare!"
    />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:url" content={import.meta.env.VITE_APP_DRINKTOOL_URL || "#"}/>
    <meta property="twitter:title" content="DrinkTool"/>
    <meta
            property="twitter:description"
            content="DrinkTool è il calcolatore in tempo reale di BAC (Blood Alcohol Conten) facile da usare!"
    />
    <meta property="twitter:image" content="https://ricbuz94.github.io/drinktool/logo-small.png"/>

    <!-- Image to display -->
    <!-- Replace   «example.com/image01.jpg» with your own -->
    <meta property="og:image" content="https://ricbuz94.github.io/drinktool/logo-small.png"/>

    <!-- No need to change anything here -->
    <meta property="og:type" content="website"/>
    <meta property="og:image:type" content="image/png"/>

    <!-- Size of image. Any size up to 300. Anything above 300px will not work in WhatsApp -->
    <meta property="og:image:width" content="300"/>
    <meta property="og:image:height" content="300"/>

    <!-- Website to visit when clicked in fb or WhatsApp-->
    <meta property="og:url" content={import.meta.env.VITE_APP_DRINKTOOL_URL || "#"}/>
    <meta property="og:locale" content="it_IT"/>
</svelte:head>

<div id="container">
    <div id="download-header">
        <div id="header-text">
            <h1>DrinkTool</h1>
            <p style="margin-top: 0px;">BAC calculator</p>
            <ul id="actions">
                <li>
                    <button class="download-button" onclick={downloadApp}>
                        <Icon component={Download} strokeWidth={3} size={14}/>
                        Download (APK)
                    </button>
                </li>
                <li>
                    <button class="download-button light" onclick={shareApp}>
                        <Icon component={Share2} strokeWidth={3} size={14} color="currentColor"/>
                        Condividi
                    </button>
                </li>
            </ul>
            <span id="disclamer-text">
                <Icon component={TriangleAlert} size={14} color="#5f6368"/>
                Questa applicazione <ins>non</ins> viene installata tramite il Play Store di Google
            </span>
        </div>
        <enhanced:img src={logo} alt="DrinkTool" draggable={false}/>
    </div>

    <div id="download-body">
        <div class="glide">
            <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides">
                    {#each slides as slide (slide.src)}
                        <enhanced:img src={slide.src} draggable={false} alt={slide.title}/>
                    {/each}
                </ul>
            </div>

            <div class="glide__arrows" data-glide-el="controls">
                <button class="glide__arrow glide__arrow--left download-button light" data-glide-dir="<">
                    <Icon component={ArrowLeft} strokeWidth={3} size={20} color="#01875f"/>
                </button>
                <button class="glide__arrow glide__arrow--right download-button light" data-glide-dir=">">
                    <Icon component={ArrowRight} strokeWidth={3} size={20} color="#01875f"/>
                </button>
            </div>
        </div>
    </div>

    <div id="download-description">
        <h3>Informazioni</h3>
        <p>
            Drink Tool è destinato esclusivamente a scopi di intrattenimento e non deve essere inteso come strumento
            scientifico per la determinazione dell' effettivo contenuto di alcol nel sangue.
            <br/><br/>
            Tutti i dati relativi all'utente rimangono nella memoria del telefono e non vengono salvati altrove. I dati
            possono
            essere cancellati dall'utente in qualsiasi momento disinstallando l'applicazione o mediante l'apposita
            sezione
            nelle impostazioni del telefono.
            <br/><br/>
            <strong>Funzionalità:</strong>
            <br/>
        </p>

        <ul>
            <li>calcolo del tasso alcolemico stimato (EBAC)</li>
            <li>visualizzazione del tempo di smaltimento in tempo reale</li>
            <li>possibilità di aggiungere altre bevande durante lo smaltimento</li>
            <li>possibilita di creare ed aggiornare un profilo</li>
            <li>il risultato viene aggiornato alla modifica del profilo durante lo smaltimento</li>
            <li>scelta del tema tra "sistema", "chiaro" e "scuro"</li>
            <li>tre unità di misura per il volume</li>
        </ul>

        <p>
            <br/>
            <strong>Novità:</strong>
            <br/>
        </p>

        <ul>
            <li>grafica rinnovata</li>
            <li>aggiunta di un nuovo launchscreen</li>
            <li>informazioni aggiornate</li>
        </ul>
    </div>

    <footer id="download-footer">
        <p>© 2024 DrinkTool. All Rights Reserved.</p>
        <p>Made by <a href="/" target="_blank">RiccardoBuzzolo</a></p>
        <a href="/drinktool/privacy-policy">Privacy Policy</a>
    </footer>
</div>

<style>
    * {
        -webkit-tap-highlight-color: transparent;
    }

    ::selection {
        color: black;
        background-color: rgba(2, 173, 122, 0.4);
    }

    enhanced\:img {
        user-select: none;
    }

    a {
        color: #01875f;
        text-decoration: none;
    }

    a::selection {
        color: -webkit-link !important;
    }

    a:hover {
        color: #056449;
        text-decoration: underline;
    }

    .glide__arrows {
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    :global(.glide__arrow--disabled > svg) {
        cursor: not-allowed !important;
        stroke: #454e56 !important;
    }

    :global(.glide__arrow--disabled:hover) {
        cursor: not-allowed !important;
        background-color: transparent !important;
    }

    #container {
        background-color: white;
        font-family: "Roboto Mono", monospace;
        font-size: var(--fontSize, 16px);
        color: black;
        word-spacing: 0;
        padding: 2rem 15%;
    }

    #download-header {
        position: relative;
        padding-bottom: 2rem;
        padding-right: 2rem;
        display: flex;
        justify-content: space-between;
    }

    #header-text > h1 {
        font-size: 3rem;
        line-height: 1.2;
    }

    #download-description {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    #actions {
        list-style: none;
        padding: 0;
        display: flex;
        gap: 0.5rem;
    }

    #download-footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #454e56;
        font-size: 12px;
        padding-top: 3rem;
        padding-bottom: 3rem;
    }

    #download-footer > p {
        margin: 0.25rem 0;
    }

    .download-button {
        color: white;
        background-color: #01875f;
        border: none;
        border-radius: 8px;
        padding: 0.5rem 1.25rem;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        gap: 0.5rem;
        align-items: center;
        user-select: none;
    }

    .download-button:hover {
        background-color: #056449;
    }

    .download-button.light {
        border: none;
        color: #01875f;
        background-color: transparent;
    }

    .download-button.light:hover {
        color: #056449;
        background-color: rgba(5, 100, 73, 0.1);
    }

    #disclamer-text {
        color: #5f6368;
        font-size: 12px;
        display: flex;
        gap: 0.5rem;
        row-gap: 0;
        align-items: center;
        flex-wrap: wrap;
        user-select: none;
    }

    #download-header > enhanced\:img {
        user-select: none;
        width: 160px;
        min-width: 160px;
        height: 160px;
        border-radius: 2rem;
        overflow: hidden;
    }

    /* schermo medio */
    @media only screen and (max-width: 1200px) {
        #container {
            padding: 2rem;
        }
    }

    /* schermo piccolo */
    @media only screen and (max-width: 720px) {
        .glide__arrows {
            justify-content: center;
        }

        #container {
            padding: 1rem 0 0;
        }

        #header-text > h1 {
            font-size: 2rem;
        }

        #download-header {
            padding: 1rem;
            /* flex-wrap: wrap; */
            flex-direction: row;
            justify-content: space-between;
            gap: 1rem;
        }

        #download-description {
            padding: 1rem;
        }

        #download-footer {
            padding-top: 1rem;
        }

        #actions {
            flex-direction: column;
            align-items: flex-start;
        }

        #download-header > enhanced\:img {
            top: 1rem;
            right: 1rem;
            width: 80px;
            min-width: 80px;
            height: 80px;
            border-radius: 1rem;
        }

        .download-button.light:hover {
            color: #056449;
            background-color: transparent;
        }
    }
</style>
