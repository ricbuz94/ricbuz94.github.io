import type { LayoutData, LayoutLoad } from './$types';
import type { Section } from "$lib/helpers/interfaces";
import { browser } from '$app/environment';

import { Tag, Theme } from "$lib/helpers/interfaces";
import beacharound from "$lib/assets/images/beacharound.webp";
import beacharoundBusiness from "$lib/assets/images/beacharound-business.webp";
import picWix from "$lib/assets/images/pic-wix.webp";
import drinktool from "$lib/assets/images/drinktool.webp";
import simpleQrCode from "$lib/assets/images/simple_qr_code.webp";
import howMuchCanIDrink from "$lib/assets/images/howmuchcanidrink.webp";

import { locale, waitLocale } from 'svelte-i18n';

export const prerender = true;

const sections: Array<Section> = [
  {
    id: "000000",
    title: "Works",
    posts: [
      {
        id: "000000",
        url: `${import.meta.env.VITE_APP_BEACHAROUND_URL}` || "#",
        image: beacharound,
        title: "Beacharound",
        tags: [Tag.web],
        description: "The portal for booking beaches throughout Italy.",
      },
      {
        id: "000001",
        url: `${import.meta.env.VITE_APP_BEACHAROUND_BUSINESS_URL}` || "#",
        image: beacharoundBusiness,
        title: "Beacharound Business",
        tags: [Tag.web],
        description: "Management system for bathing establishments and online reservations.",
      },
      {
        id: "000002",
        url: `${import.meta.env.VITE_APP_MANGO_URL}` || "#",
        image: picWix,
        title: "PicWix for Mango Mobile",
        tags: [Tag.ios, Tag.android],
        description: "Choose a contest, share your photo and video and invite your friends to put \"like\" on your media to win the contest and win the prize!",
      },
    ],
  },
  {
    id: "000001",
    title: "Projects",
    posts: [
      {
        id: "000003",
        url: `${import.meta.env.VITE_APP_DRINKTOOL_URL}` || "#",
        image: drinktool,
        title: "Drink Tool app",
        tags: [Tag.android],
        description: "Real-time BAC (Blood Alcohol Content) calculator.",
      },
      {
        id: "000004",
        url: `${import.meta.env.VITE_APP_SIMPLE_QR_CODE_URL}` || "#",
        noBlank: true,
        image: simpleQrCode,
        title: "Simple QR Code",
        tags: [Tag.web],
        description: "A simple QR code generator that lets you download the image (.png) of the code with a title.",
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

export const load: LayoutLoad = (async () => {

  let isDark;

  if (browser) {

    // Language
    const language = localStorage.getItem("language");
    if (language) await locale.set(language);

    // Theme
    const THEME_KEY = "theme";
    const isMediaDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const storageTheme = localStorage.getItem(THEME_KEY);
    isDark = storageTheme === Theme.dark || (!('theme' in localStorage) && isMediaDark);

    if (isDark) {
      document.documentElement.classList.add(Theme.dark);
    } else {
      document.documentElement.classList.remove(Theme.dark);
    }
  }

  await waitLocale();

  return {
    isDark,
    sections
  };
}) satisfies LayoutData;