/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'main': ['Noto Sans','Roboto','Helvetica','Arial','sans-serif'],
			'title': ['Noto Sans','Roboto','Helvetica','Arial','sans-serif'],
		},
		extend: {},
		fontSize: {
			sm: ['0.87rem', '18pt'],
			base: ['0.97rem', '18pt'],
			xl: ['1.333rem', '24pt'],
			'2xl': ['1.667rem', '24pt'],
			'3xl': '2rem'
		}
	},
	plugins: [],
}
