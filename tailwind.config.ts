import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				text: "rgba(var(--text)))",
				textDim: "rgba(var(--text-dim)))",
				
				background: "rgba(var(--background)))",
				
				surfaceMain: "rgba(var(--surface-main)))",
				surfaceSecondary: "rgba(var(--surface-secondary)))",
	
				primary: "rgba(var(--primary)))",
				secondary: "rgba(var(--secondary)))",
				accent: "rgba(var(--accent)))",
	
				border: "rgba(var(--border)))",
			},			
			fontSize: {
				sm: '0.750rem',
				base: '1rem',
				xl: '1.333rem',
				'2xl': '1.777rem',
				'3xl': '2.369rem',
				'4xl': '3.158rem',
				'5xl': '4.210rem',
			},
			fontFamily: {
				'sans': ['poppins', "ui-sans-serif", "sans-serif"],
			},
			fontWeight: {
				normal: '400',
				bold: '700',
			},
		},

	},


	plugins: []
} satisfies Config;
