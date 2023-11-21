import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        text: "#000000",
        "text-100": "#6C7181C2",
        primary: "#718DF0",
        "primary-100": "#859fff",
        secondary: "#FAFBFD",
        "secondary-100": "#f5f7ff",
        "secondary-200": "#C5D2FFEB",
        page: "#FFFFFF",
        "page-100": "#D9D9D942",
        action: "#FF7373",
        "action-100": "#DD0202",
      },
      fontFamily: {
        geo: "var(--font-geo)",
        bold: "var(-font-bold)",
        medium: "var(--font-medium)",
      },
    },
    plugins: [],
  },
};
export default config;