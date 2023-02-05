import type { LayoutData } from './$types';
import data from '$lib/data/data';
import { browser } from '$app/environment';
import { Theme } from '$lib/helpers/interfaces';

import { getLocaleFromNavigator, locale, waitLocale } from 'svelte-i18n';

export const prerender = true;

export const load = (async () => {

  let currentTheme = "light";
  let language: string | null = "it-IT";

  if (browser) {

    // Locale
    language = localStorage.getItem("language") || getLocaleFromNavigator();
    locale.set(language);

    // Theme
    const THEME_KEY = "theme";
    const DARK_PREFERENCE = "(prefers-color-scheme: dark)";
    const isMediaThemeDark =
      window.matchMedia(DARK_PREFERENCE).matches;
    const preferredTheme = isMediaThemeDark ? Theme.dark : Theme.light;
    currentTheme = localStorage.getItem(THEME_KEY) || preferredTheme;

    if (currentTheme === Theme.dark) {
      document.getElementById("theme")?.classList.remove(Theme.light);
      document.getElementById("theme")?.classList.add(Theme.dark);
    } else {
      document.getElementById("theme")?.classList.remove(Theme.dark);
      document.getElementById("theme")?.classList.add(Theme.light);
    }
  }

  await waitLocale();

  return {
    currentTheme,
    sections: data,
    language
  };
}) satisfies LayoutData;