import { Tag } from "$lib/helpers/interfaces";
import type { Section } from "$lib/helpers/interfaces";
import beacharound from "$lib/assets/images/beacharound.webp";
import beacharoundBusiness from "$lib/assets/images/beacharound-business.webp";
import picWix from "$lib/assets/images/pic-wix.webp";
import drinktool from "$lib/assets/images/drinktool.webp";
import howMuchCanIDrink from "$lib/assets/images/howmuchcanidrink.webp";

const data: Array<Section> = [
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
		],
	},
	{
		id: "000002",
		title: "Old projects",
		posts: [
			{
				id: "000004",
				url: `${import.meta.env.VITE_APP_HMCID_URL}` || "#",
				image: howMuchCanIDrink,
				title: "Howmuchcanidrink",
				tags: [Tag.web],
				description: "How much can i drink? How long shuld i wait?",
			},
		],
	},
];

export default data;