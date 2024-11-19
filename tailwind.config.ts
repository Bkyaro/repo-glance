import type { Config } from "tailwindcss";

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				card: {
					background: "var(--card-background)",
					foreground: "var(--card-foreground)",
				},
			},
		},
	},
	plugins: [],
}) satisfies Config;
