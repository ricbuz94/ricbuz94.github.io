import { Tag } from "$lib/helpers/interfaces";
import type { Section } from "$lib/helpers/interfaces";

const data: Array<Section> = [
	{
		title: "Lavoro",
		links: [
			{
				url: `${import.meta.env.VITE_APP_BEACHAROUND_URL}` ?? "#",
				title: "Beacharound",
				tag: Tag.web,
				description: "Portale per spiagge di tutta Italia.",
			},
			{
				url: `${import.meta.env.VITE_APP_BEACHAROUND_BUSINESS_URL}` ?? "#",
				title: "Beacharound Business",
				tag: Tag.web,
				description: "Gestionale spiaggia e prenotazioni online.",
			},
		],
	},
	{
		title: "Progetti",
		links: [
			{
				url: `${import.meta.env.VITE_APP_DRINKTOOL_URL}` ?? "#",
				title: "Drink Tool app",
				tag: Tag.android,
				description: "Calcolo del tasso alcolemico.",
			},
			{
				url: `${import.meta.env.VITE_APP_HMCID_URL}` ?? "#",
				title: "Howmuchcanidrink",
				tag: Tag.web,
				description: "Quanto posso bere? Quanto devo aspettare?",
			},
		],
	},
];

export default data;