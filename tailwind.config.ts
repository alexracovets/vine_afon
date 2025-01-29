import tailwindcssAnimate from "tailwindcss-animate";
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/ui/components/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			screens: {
				tablet: '1025px',
				mobile: '768px'
			},
			fontFamily: {
				montserrat: [
					'var(--font-montserrat)'
				],
			},
			colors: {
				regalWhite: '#FFFFFF',
				regalBlack: '#171717',
				regalMain: '#6a2841',
				bgDialog: 'rgba(55,65,81,.3)',
				tubes: {
					normal: 'rgb(45, 91, 157)',
					stroke: 'rgb(9, 20, 40)'
				},
				blocks: {
					stroke: '#9E818C',
				}
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
				'svg': '3px 4px 4px #00000040',
				'leaf': "2px 4px 0 #00000040",
				'leaf-active': "2px 4px 0 #00000000"
			},
			backgroundImage: {
				'dash-tube': 'linear-gradient(0deg, rgb(0 60 100) 0%, rgb(45, 91, 157) 30%, rgb(45, 91, 157) 70%, rgb(0 60 100) 100%)',
			},
		}
	},
	plugins: [tailwindcssAnimate],
};
export default config;