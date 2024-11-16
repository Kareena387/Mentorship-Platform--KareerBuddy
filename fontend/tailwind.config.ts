
import type { Config } from "tailwindcss";

export default {
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
        'light-green': '#90EE90', // Custom light green color
        'dark-green': '#006400', // Custom dark green color
      },
      animation: {
        'scroll': 'scroll 20s linear infinite', // Scroll animation
      },
      keyframes: {
        scroll: {
          '0%': {
            transform: 'translateX(0)', // Starting point
          },
          '100%': {
            transform: 'translateX(-100%)', // Ending point (scrolling off screen)
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
