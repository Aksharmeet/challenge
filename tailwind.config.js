/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'landing-bg': "url('assets/svgs/bgGradient.svg')",
				'right-arrow': "url('assets/svgs/rightArrow.svg')",
			},
		},
	},
	plugins: [],
}
