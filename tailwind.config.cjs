/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"theme-100": "#FCF7F0",
				"theme-200": "#F9EFE2",
				"theme-500": "#D5933A"
			}
		},
	},
	plugins: [],
}
