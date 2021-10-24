import colors from "../helpers/colors";
import { Theme } from "styled-components";

const theme: Theme = {
	name: "light",
	borderRadius: '0.5rem',
	foregroundColorTransition: 'color 0.3s ease',
	backgroundColorTransition: 'background 0.3s ease',
	mainTransition: 'all 0.3s ease',
	colors: {
		accent: colors.red,
		cardBackground: colors.white,
		background: colors.gray0,
		text: colors.gray6,
		subText: colors.gray4,
		scrollbarBackground: colors.gray2,
		cardShadow: "0 2px 4px rgba(0, 30, 84, 0.12)",
		cardShadowHover: "0 4px 8px rgba(0, 30, 84, 0.12)"
	},
	fontFamily: "'Quando'"
};

export default theme;