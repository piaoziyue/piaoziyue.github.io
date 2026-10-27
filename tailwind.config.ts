import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
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
        charcoal: {
          DEFAULT: "#191816",
          card: "#211f1b",
          nested: "#272420",
          border: "#343028",
          divider: "#2c2923",
        },
        ivory: {
          DEFAULT: "#EDE6D8",
          heading: "#F5EFE6",
          body: "#D3CCC0",
          muted: "#9E9688",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
