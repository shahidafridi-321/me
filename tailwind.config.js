/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
	theme: {
		extend: {
			colors: {
				redForBody: "#000000",
			},
			fontSize: {
				"big-title": "calc(2vw + 0.8rem)",
			},
		},
	},
	plugins: [],
};
