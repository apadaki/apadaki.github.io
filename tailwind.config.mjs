/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'sans': ['IBM Plex Sans', 'system-ui', 'sans-serif'],
			'mono': ['IBM Plex Mono', 'ui-monospace', 'monospace'],
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
