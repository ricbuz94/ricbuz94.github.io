import 'styled-components';

declare module 'styled-components' {
	export interface Theme {
		name: string;
		borderRadius: string;
		foregroundColorTransition: string;
		backgroundColorTransition: string;
		mainTransition: string
		colors: {
			accent: string,
			cardBackground: string,
			background: string,
			text: string,
			subText: string,
			scrollbarBackground: string,
			cardShadow: string,
			cardShadowHover: string
		};
		fontFamily: string
	}
}

export { default as light } from "./light";
export { default as dark } from "./dark";