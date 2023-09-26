import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#970016",
        accent: "#eb872e",
        dark: "#210005",
        light: "#f5e8dc",
      },
    },
    container: {
      padding: {
        DEFAULT: "0.3rem",
        sm: "0.3rem",
        lg: "0.3rem",
        xl: "0.3rem",
        "2xl": "0.3rem",
      },
    },
  },
  plugins: [],
});
