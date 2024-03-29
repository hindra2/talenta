import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homepageBGPhoto': "url('/homepageBGPhoto.png')",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"], // Set Montserrat as the default sans-serif font
      },
      fontWeight: {
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      fontSize: {
        xxxs: "0.6rem",
        xxs: "0.62rem",
        l: "0.93rem",
        sxl: "1.13rem",
        s2xl: "1.35rem",
      },
      colors: {
        background: "#FAFAFA",
        foreground: "#FFFFFF",
        headingRed: "#ff5c5c",
        subheadingRed: "#ff6d6d", // Corrected the missing '#' here
        headingBlack: "#3f3f3f",
        subheadingBlack: "#6d6d6d",
        captionBlack: "#909090",
        teacherContainer: "#efefef",
      },
    },
  },
  plugins: [],
};
export default config;
