import { MAIN_URL } from "./defaults";

export const pages = {
	home: {
		url: `${MAIN_URL}/home`,
		title: "home",
	},
	drinktool: {
		url: `${MAIN_URL}/drinktool-policy`,
		title: "drinktool privacy policy",
	},
	pageNotFound: {
		url: `${MAIN_URL}/*`,
		title: "page not found"
	}
};