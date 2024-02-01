import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        medium: ["proxima-nova", "sans-serif"], // 'Medium' font style
        semibold: ["proxima-nova", "sans-serif"], // 'Semibold' font style
        bold: ["proxima-nova", "sans-serif"], // 'Bold' font style
      },
      fontWeight: {
        medium: "500",
        semibold: "550",
        bold: "700",
      },
      fontSize: {
        xxs: "0.62rem",
        l: "0.93rem",
      },
      colors: {
        background: "#FAFAFA",
        foreground: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
