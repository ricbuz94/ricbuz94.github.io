import { init, register } from "svelte-i18n";
import { browser } from "$app/environment";

import { Locale } from "$lib/helpers/interfaces";

register("it", () => import("./locales/it-IT.json"));
register("en", () => import("./locales/en-US.json"));

let initialLocale = "it";

if (browser) {
    initialLocale = navigator.language === "it-IT" ? Locale.it : Locale.en;
}

init({
    fallbackLocale: "it",
    initialLocale,
});
