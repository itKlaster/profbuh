/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

const config = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        container: "1200px",
      },
      colors: {
        bgColor: { 100: "#1e293b", 200: "#181C20", 300: "#004AA5" },
        textColor: { 100: "#ffffff", 200: "#d4d4d4" },
        main: "#42A5F5",
      },
    },
  },
  plugins: [],
});

export default config;
