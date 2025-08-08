import { Tag, Theme, type T_Section } from "$lib/helpers/interfaces";
import type { LayoutData } from "./$types";
import { browser } from "$app/environment";

import quadraweb from "$lib/assets/images/quadraweb.webp";
import beacharound from "$lib/assets/images/beacharound.webp";
import beacharoundBusiness from "$lib/assets/images/beacharound-business.webp";
import picWix from "$lib/assets/images/pic-wix.webp";
import drinktool from "$lib/assets/images/drinktool.webp";
import simpleQrCode from "$lib/assets/images/simple_qr_code.webp";
import howMuchCanIDrink from "$lib/assets/images/howmuchcanidrink.webp";

import { locale, waitLocale } from "svelte-i18n";

export const prerender = true;

const sections: Array<T_Section> = [
    {
        id: "000000",
        title: "Works",
        posts: [
            {
                id: "000000",
                url: `${import.meta.env.VITE_APP_QUADRA_URL}` || "#",
                image: quadraweb,
                title: "Quadra S.r.l.",
                tags: [Tag.web, Tag.php, Tag.flutter],
                description: "La soluzione completa per la tua comunicazione d’insieme.",
            },
            {
                id: "000001",
                url: `${import.meta.env.VITE_APP_BEACHAROUND_URL}` || "#",
                image: beacharound,
                title: "Beacharound",
                tags: [Tag.web, Tag.react],
                description: "The portal for booking beaches throughout Italy.",
            },
            {
                id: "000002",
                url: `${import.meta.env.VITE_APP_BEACHAROUND_BUSINESS_URL}` || "#",
                image: beacharoundBusiness,
                title: "Beacharound Business",
                tags: [Tag.web, Tag.react],
                description: "Management system for bathing establishments and online reservations.",
            },
            {
                id: "000003",
                url: `${import.meta.env.VITE_APP_MANGO_URL}` || "#",
                image: picWix,
                title: "PicWix for Mango Mobile",
                tags: [Tag.reactNative, Tag.ios, Tag.android],
                description:
                    'Choose a contest, share your photo and video and invite your friends to put "like" on your media to win the contest and win the prize!',
            },
        ],
    },
    {
        id: "000001",
        title: "Projects",
        posts: [
            {
                id: "000003",
                url: "/drinktool/download",
                image: drinktool,
                title: "Drink Tool app",
                tags: [Tag.flutter, Tag.android],
                description: "Real-time BAC (Blood Alcohol Content) calculator.",
            },
            {
                id: "000004",
                url: `${import.meta.env.VITE_APP_SIMPLE_QR_CODE_URL}` || "#",
                noBlank: true,
                image: simpleQrCode,
                title: "Simple QR Code",
                tags: [Tag.web, Tag.jquery],
                description:
                    "A simple QR code generator that lets you download the image (.png) of the code with a title.",
            },
        ],
    },
    {
        id: "000002",
        title: "Old projects",
        posts: [
            {
                id: "000005",
                url: `${import.meta.env.VITE_APP_HMCID_URL}` || "#",
                image: howMuchCanIDrink,
                title: "Howmuchcanidrink",
                tags: [Tag.web],
                description: "How much can i drink? How long shuld i wait?",
            },
        ],
    },
];

export const load: () => Promise<{ theme: string; sections: T_Section[] }> = (async () => {
    let theme;

    if (browser) {
        const language = localStorage.getItem("language");
        if (!!language) {
            await locale.set(language);
        }

        const isMediaThemeDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const preferredTheme = isMediaThemeDark ? Theme.dark : Theme.light;
        theme = localStorage.getItem("theme") || preferredTheme;

        const favicon = document.getElementsByTagName("link")[0];
        const metaThemeColor: any = document.getElementsByName("theme-color")[0];

        if (theme === Theme.dark) {
            document.body?.classList.remove(Theme.light);
            document.body?.classList.add(Theme.dark);
            document.getElementById("theme")?.classList.remove(Theme.light);
            document.getElementById("theme")?.classList.add(Theme.dark);
            favicon.href = "/favicon-dark.ico";
            metaThemeColor.content = "#0f0f0f";
        } else {
            document.body?.classList.remove(Theme.dark);
            document.body?.classList.add(Theme.light);
            document.getElementById("theme")?.classList.remove(Theme.dark);
            document.getElementById("theme")?.classList.add(Theme.light);
            favicon.href = "/favicon.ico";
            metaThemeColor.content = "#faf9fc";
        }
    }

    await waitLocale();
    return { theme, sections };
}) satisfies LayoutData;
