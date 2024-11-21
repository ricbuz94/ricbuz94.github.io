import { browser } from '$app/environment';
import { locale, waitLocale } from 'svelte-i18n';

export const prerender = true;

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {

    if (browser) {
        const language = localStorage.getItem("language");
        if (!!language) {
            await locale.set(language);
        }
        await waitLocale();
    }
}