/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'main': ['Geneva', 'Open Sans', 'sans-serif'],
			'title': ['Geneva','Open Sans', 'sans-serif'],
			'mono': ['JetBrains Mono', 'monospace'],
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
