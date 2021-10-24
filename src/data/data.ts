import { Links, Tag } from "../common/interfaces";

export const links: Array<Links> = [
	{
		title: "Lavoro",
		links: [
			{
				url: process.env.REACT_APP_BEACHAROUND_BUSINESS_URL ?? "#",
				title: "Beacharound Business",
				tag: Tag.web,
				description: "Gestionale spiaggia e prenotazioni online.",
			},
			{
				url: process.env.REACT_APP_BEACHAROUND_URL ?? "#",
				title: "Beacharound",
				tag: Tag.web,
				description: "Portale per spiagge di tutta Italia.",
			},
		],
	},
	{
		title: "Progetti",
		links: [
			{
				url: process.env.REACT_APP_HMCID_URL ?? "#",
				title: "Howmuchcanidrink",
				tag: Tag.web,
				description: "Quanto posso bere? Quanto devo aspettare?",
			},
			{
				url: process.env.REACT_APP_DRINKTOOL_URL ?? "#",
				title: "Drink Tool app",
				tag: Tag.android,
				description: "Calcolo del tasso alcolemico.",
			},

		],
	},
];