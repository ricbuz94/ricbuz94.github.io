import { getLocaleFromNavigator, init, register } from 'svelte-i18n';

register('it-IT', () => import('./locales/it-IT.json'));
register('en-US', () => import('./locales/en-US.json'));

init({
  fallbackLocale: 'it-IT',
  initialLocale: ["it", "it-IT"].includes(getLocaleFromNavigator() ?? "") ? "it-IT" : "en-US"
});