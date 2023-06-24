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
    },
  },
  plugins: [],
});

export default config;