import tailwindcssAnimate from "tailwindcss-animate";
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/ui/components/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			screens: {
				tablet: '1024px',
				mobile: '768px'
			},
			fontFamily: {
				dm: [
					'var(--font-dm)'
				],
				bebas: [
					'var(--font-bebas)'
				],
				brains: [
					'var(--font-brains)'
				]
			},
			colors: {
				regalWhite: '#FFFFFF',
				regalBlack: '#171717',
				regalMain: '#6a2841'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			dropShadow: {
				'svg': '2px 0px 5px black'
			}
		}
	},
	plugins: [tailwindcssAnimate],
};
export default config;