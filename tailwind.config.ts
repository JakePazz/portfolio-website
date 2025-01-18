import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				text: "rgba(var(--text))",
				textDim: "rgba(var(--text-dim))",
				
				background: "rgba(var(--background))",
				
				surfaceMain: "rgba(var(--surface-main))",
				surfaceSecondary: "rgba(var(--surface-secondary))",
	
				primary: "rgba(var(--primary))",
				secondary: "rgba(var(--secondary))",
				accent: "rgba(var(--accent))",
	
				border: "rgba(var(--border))",
			},			
			fontSize: {
				sm: '0.90rem',
				base: '1rem',
				xl: '1.25rem',
				'2xl': '1.563rem',
				'3xl': '1.938rem',
				'4xl': '2.438rem',
				'5xl': '3.063rem',
				'6xl': '3.813rem',
			},
			fontFamily: {
				'sans': ['poppins', "ui-sans-serif", "sans-serif"],
			},
			fontWeight: {
				normal: '400',
				bold: '700',
			},
			keyframes: {
				takeoff: {
					"100%": { transform: "translateX(2rem) translateY(-1rem)" },
					"80%, 100%": { opacity: "0"}
				}
			},
			animation: {
				takeoff: "takeoff 3s ease-out 1 forwards"
			}
		},

	},


	plugins: []
} satisfies Config;
