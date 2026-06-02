import {Tag, Theme, type T_Section} from "$lib/helpers/interfaces";
import type {LayoutData} from "./$types";
import {browser} from "$app/environment";

import {locale, waitLocale} from "svelte-i18n";

export const prerender = true;

const sections: Array<T_Section> = [
    {
        id: "000000",
        title: "Works",
        posts: [
            {
                id: "000000",
                url: `${import.meta.env.VITE_APP_QUADRA_URL}` || "#",
                image: "/images/quadraweb.webp",
                title: "Quadra S.r.l.",
                tags: [Tag.web, Tag.php, Tag.flutter],
                description: "La soluzione completa per la tua comunicazione d’insieme.",
            },
            {
                id: "000001",
                url: `${import.meta.env.VITE_APP_BEACHAROUND_URL}` || "#",
                image: "/images/beacharound.webp",
                title: "Beacharound",
                tags: [Tag.web, Tag.react],
                description: "The portal for booking beaches throughout Italy.",
            },
            {
                id: "000002",
                url: `${import.meta.env.VITE_APP_BEACHAROUND_BUSINESS_URL}` || "#",
                image: "/images/beacharound-business.webp",
                title: "Beacharound Business",
                tags: [Tag.web, Tag.react],
                description: "Management system for bathing establishments and online reservations.",
            },
            {
                id: "000003",
                url: `${import.meta.env.VITE_APP_MANGO_URL}` || "#",
                image: "/images/pic-wix.webp",
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
                image: "/images/drinktool.webp",
                title: "Drink Tool app",
                tags: [Tag.flutter, Tag.android],
                description: "Real-time BAC (Blood Alcohol Content) calculator.",
            },
            {
                id: "000004",
                url: `${import.meta.env.VITE_APP_SIMPLE_QR_CODE_URL}` || "#",
                noBlank: true,
                image: "/images/simple_qr_code.webp",
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
                url: "/hmcid",
                image: "/images/howmuchcanidrink.webp",
                title: "Howmuchcanidrink",
                tags: [Tag.web],
                description: "How much can i drink? How long shuld i wait?",
            },
        ],
    },
];

const skillsSections = [
    {
        id: "000000",
        title: "Programming languages",
        description: "The solid foundations upon which I build logic and digital ecosystems.",
        items: [
            {
                title: "go",
                description: "An open-source programming language developed by Google, renowned for its efficiency, concurrency management, and fast execution speed."
            },
            {
                title: "html",
                description: "The fundamental markup language used to structure and format content for web pages."
            },
            {
                title: "javascript",
                description: "A vital client-side and server-side scripting language used to make websites interactive and dynamic."
            },
            {
                title: "php",
                description: "A widely-used server-side programming language designed for web development and creating dynamic web applications."
            },
            {
                title: "css",
                description: "The style sheet language used to define the formatting, design, and visual layout of HTML documents."
            },
            {
                title: "sass",
                description: "A CSS extension and preprocessor that introduces advanced features like variables, loops, and nesting to stylesheet authoring."
            },
        ]
    },
    {
        id: "000001",
        title: "Frameworks",
        description: "Advanced tools for developing fast and reactive interfaces.",
        items: [
            {
                title: "bootstrap",
                description: "One of the world's most popular CSS and JavaScript frameworks for building responsive and mobile-first web interfaces."
            },
            {
                title: "flutter",
                description: "Google's UI toolkit for crafting natively compiled applications for mobile, web, and desktop from a single codebase."
            },
            {
                title: "nextjs",
                description: "An advanced React framework that enables server-side rendering (SSR) and optimized static website generation."
            },
            {
                title: "react",
                description: "A JavaScript library for building component-based, highly reactive, and reusable user interfaces."
            },
            {
                title: "svelte",
                description: "An innovative JavaScript framework that shifts work to compile-time, producing ultra-lightweight native code."
            },
            {
                title: "symfony",
                description: "A high-performance, structured PHP framework ideal for building complex enterprise-level web applications."
            },
            {
                title: "tailwind",
                description: "A utility-first CSS framework that allows developers to design custom user interfaces directly within the HTML code."
            }
        ]
    },
    {
        id: "00002",
        title: "Backend & Databases",
        description: "Data management, secure APIs, and high-performance server architectures.",
        items: [
            {
                title: "gnu-bash",
                description: "A command processor and the standard scripting language for Unix and Linux operating systems."
            },
            {
                title: "jetbrains",
                description: "A software development environment and suite of professional IDEs tailored for developers."
            },
            {
                title: "linux",
                description: "An open-source operating system that provides the core infrastructure for servers and development environments."
            },
            {
                title: "mongodb",
                description: "A document-oriented NoSQL database that stores data in flexible, JSON-like formats."
            },
            {
                title: "mysql",
                description: "One of the most popular open-source relational database management systems (RDBMS) in the world."
            },
            {
                title: "phpmyadmin",
                description: "A graphical web-based administration tool for simplified management of MySQL and MariaDB databases."
            },
            {
                title: "plesk",
                description: "A web hosting platform and control panel for simplified server configuration and website management."
            },
            {
                title: "postgresql",
                description: "A powerful, open-source object-relational database system known for its reliability and extensibility."
            },
            {
                title: "sql-lite",
                description: "A software library providing a lightweight, self-contained, and serverless relational database engine."
            },
            {
                title: "wordpress",
                description: "The world's most popular content management system (CMS) used to build and manage websites and blogs."
            }
        ]
    }
];

export const load: () => Promise<{ theme: string; sections: T_Section[]; skillSections: Array<any> }> = (async () => {
    let theme;

    if (browser) {
        const language = localStorage.getItem("language");
        if (!!language) {
            await locale.set(language);
            await waitLocale();
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

    return {theme, sections, skillsSections};
}) satisfies LayoutData;
