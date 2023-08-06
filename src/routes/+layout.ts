import type { LayoutData } from './$types';
import data from '$lib/data/data';
import { browser } from '$app/environment';
import { Theme } from '$lib/helpers/interfaces';

import { getLocaleFromNavigator, locale, waitLocale } from 'svelte-i18n';

export const prerender = true;

export const load: unknown = (async () => {

  let currentTheme = "light";
  let language: string | null = getLocaleFromNavigator();

  if (browser) {

    // Locale
    language = localStorage.getItem("language");
    await locale.set(language);

    // Theme
    const THEME_KEY = "theme";
    const DARK_PREFERENCE = "(prefers-color-scheme: dark)";
    const isMediaThemeDark =
      window.matchMedia(DARK_PREFERENCE).matches;
    const preferredTheme = isMediaThemeDark ? Theme.dark : Theme.light;
    currentTheme = localStorage.getItem(THEME_KEY) || preferredTheme;

    if (currentTheme === Theme.dark) {
      document.body?.classList.remove(Theme.light);
      document.body?.classList.add(Theme.dark);
      document.getElementById(THEME_KEY)?.classList.remove(Theme.light);
      document.getElementById(THEME_KEY)?.classList.add(Theme.dark);
    } else {
      document.body?.classList.remove(Theme.dark);
      document.body?.classList.add(Theme.light);
      document.getElementById(THEME_KEY)?.classList.remove(Theme.dark);
      document.getElementById(THEME_KEY)?.classList.add(Theme.light);
    }
  }

  await waitLocale();

  return {
    currentTheme,
    sections: data,
    language
  };
}) satisfies LayoutData;