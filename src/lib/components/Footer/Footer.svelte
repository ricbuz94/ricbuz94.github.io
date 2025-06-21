<script lang="ts">
    import JSConfetti from "js-confetti";
    import ContactLink from "./ContactLink.svelte";
    import FooterWave from "$lib/assets/icons/footer-wave.svelte";
    import { Github, Instagram, Linkedin, Mail } from "lucide-svelte";

    let jsConfetti: JSConfetti | undefined = $state(undefined);
    let year: number = $state(new Date().getFullYear());

    const emojis = [
        "🔥",
        "⚡️",
        "💥",
        "✨",
        "💫",
        "🌸",
        "💦",
        "🚀",
        "🍆",
        "🍑",
        "💪",
        "🍺",
        "🌮",
        "🐈",
        "🍄",
        "🎱",
        "💘",
        "🎉",
        "💎",
        "👌",
        "🤙",
        "👍",
        "🤘",
        "👅",
        "🎈",
        "💵",
        "💸",
    ];

    function setCanvas() {
        if (!jsConfetti) {
            jsConfetti = new JSConfetti();
        }
    }

    function makeItRain() {
        if (!!jsConfetti) {
            const rand = (arr: Array<string>) => arr[Math.floor(Math.random() * arr.length)];
            jsConfetti.addConfetti({
                emojis: [rand(emojis), rand(emojis)],
            });
        }
    }
</script>

<footer>
    <FooterWave />
    <div class="contacts-container">
        <ContactLink
            href={import.meta.env.VITE_APP_MAILTO}
            icon={Mail}
            title="Gmail"
            text="riccardo.buzzolo@gmail.com"
        />
        <ContactLink
            href={import.meta.env.VITE_APP_INSTAGRAM_PROFILE_URL}
            icon={Instagram}
            title="Instagram"
            text="@riccardo_buzzolo"
        />
        <ContactLink
            href={import.meta.env.VITE_APP_LINKEDIN_PROFILE_URL}
            icon={Linkedin}
            title="LinedIn"
            text="@riccardo-buzzolo"
        />
        <ContactLink href={import.meta.env.VITE_APP_X_PROFILE_URL} icon="Twitter" title="X" text="@riccardobuzzolo" />
        <ContactLink href={import.meta.env.VITE_APP_GITHUB_PROFILE_URL} icon={Github} title="GitHub" text="@ricbuz94" />
    </div>
    <p class="bottom-text">
        Powered by
        <a class="footer-link" href={`${import.meta.env.VITE_APP_SVELTEKIT_URL}`} target="_blank" rel="noreferrer"
            >SvelteKit</a
        >
        and
        <a class="footer-link" href={`${import.meta.env.VITE_APP_GITHUB_PAGES_URL}`} target="_blank" rel="noreferrer"
            >GitHub Pages</a
        >
    </p>
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <p class="sub-text bottom-text" onmouseenter={setCanvas} onmousedown={makeItRain}>
        © {year} Riccardo Buzzolo. All Rights Reserved.
    </p>
</footer>

<style>
    footer {
        /* width: 650px; */
        width: 100%;
        font-size: 80%;
        /* padding-top: 3rem; */
        padding-bottom: 6rem;
        margin-left: auto;
        margin-right: auto;
        background-image: linear-gradient(var(--accentColorTransparent));
        transition: opacity 300ms ease;
    }

    .contacts-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin-top: 4rem;
        margin-bottom: 7rem;
    }

    .footer-link {
        color: var(--accentColor);
        font-weight: bold;
        text-decoration: none;
        transition: color var(--transition);
    }

    .footer-link:hover {
        color: var(--accentColorHover);
    }

    p {
        line-height: 1.2;
        text-align: center;
    }

    p.sub-text {
        cursor: pointer;
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
        color: var(--subTextColor);
    }

    /* schermo piccolo */
    @media only screen and (max-width: 720px) {
        footer {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            /* padding-top: 1rem; */
            padding-bottom: 5rem;
            /* padding-left: 1.5rem;
            padding-right: 1.5rem; */
        }

        footer a {
            width: 100%;
            text-align: center;
        }

        .contacts-container {
            flex-direction: column;
            align-items: flex-start;
        }
    }

    /* schermo grande */
    @media only screen and (min-width: 1400px) {
        .contacts-container {
            margin-top: 7rem;
        }
    }
</style>
