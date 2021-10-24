import colors from "../helpers/colors";
import { Theme } from "styled-components";

const dark: Theme = {
	name: "dark",
	borderRadius: '0.5rem',
	foregroundColorTransition: 'color 0.3s ease',
	backgroundColorTransition: 'background 0.3s ease',
	mainTransition: 'all 0.3s ease',
	colors: {
		accent: colors.purple,
		cardBackground: colors.gray5,
		background: colors.gray6,
		text: colors.white,
		subText: colors.gray2,
		scrollbarBackground: colors.gray2,
		cardShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
		cardShadowHover: "0 4px 8px rgba(0, 0, 0, 0.5)"
	},
	fontFamily: "Quando"
}

export default dark;