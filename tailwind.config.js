/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
			"2xl": "1536px",
		},
		extend: {
			fontSize: {
				"big-title": "calc(2vw + 0.8rem)",
			},
		},
	},
	plugins: [],
};
