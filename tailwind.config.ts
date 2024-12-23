import tailwindcssAnimate from "tailwindcss-animate";
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/ui/components/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				dm: ["var(--font-dm)"],
				bebas: ["var(--font-bebas)"],
				brains: ["var(--font-brains)"]
			},
			colors: {
				regalWhite: "#FFFFFF",
				regalBlack: "#292929"
			},
		}
	},
	plugins: [tailwindcssAnimate],
};
export default config;
