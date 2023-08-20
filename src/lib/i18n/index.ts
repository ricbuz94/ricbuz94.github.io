import { browser } from '$app/environment';
import { Locale } from '$lib/helpers/interfaces';
import { init, register } from 'svelte-i18n';

const fallbackLocale = "it-IT";

register('it-IT', () => import('./locales/it-IT.json'));
register('en-US', () => import('./locales/en-US.json'));

let lang = browser && window.navigator.language;
if (lang === "it") {
  lang = Locale.it;
} else if (lang === "en") {
  lang = Locale.en;
}

init({
  fallbackLocale,
  initialLocale: lang || fallbackLocale,
});