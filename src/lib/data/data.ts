import { Tag } from "$lib/helpers/interfaces";
import type { Section } from "$lib/helpers/interfaces";

const data: Array<Section> = [
	{
		title: "Works",
		links: [
			{
				url: `${import.meta.env.VITE_APP_BEACHAROUND_URL}` ?? "#",
				image: "/images/beacharound.webp",
				title: "Beacharound",
				tags: [Tag.web],
				description: "The portal for booking beaches throughout Italy.",
			},
			{
				url: `${import.meta.env.VITE_APP_BEACHAROUND_BUSINESS_URL}` ?? "#",
				image: "/images/beacharound-business.webp",
				title: "Beacharound Business",
				tags: [Tag.web],
				description: "Management system for bathing establishments and online reservations.",
			},
			{
				url: `${import.meta.env.VITE_APP_MANGO_URL}` ?? "#",
				image: "/images/pic-wix.webp",
				title: "PicWix for Mango Mobile",
				tags: [Tag.ios, Tag.android],
				description: "Choose a contest, share your photo and video and invite your friends to put \"like\" on your media to win the contest and win the prize!",
			},
		],
	},
	{
		title: "Projects",
		links: [
			{
				url: `${import.meta.env.VITE_APP_DRINKTOOL_URL}` ?? "#",
				image: "/images/drinktool.webp",
				title: "Drink Tool app",
				tags: [Tag.android],
				description: "Real-time BAC (Blood Alcohol Content) calculator.",
			},
		],
	},
	{
		title: "Old projects",
		links: [
			{
				url: `${import.meta.env.VITE_APP_HMCID_URL}` ?? "#",
				image: "/images/howmuchcanidrink.webp",
				title: "Howmuchcanidrink",
				tags: [Tag.web],
				description: "How much can i drink? How long shuld i wait?",
			},
		],
	},
];

export default data;