import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        px: {
          // ProjectX palette - molten-orange primary
          orange: {
            DEFAULT: "#FF6A00", // molten orange
            50: "#FFF1E6",
            100: "#FFE3CC",
            200: "#FFC099",
            300: "#FF9C66",
            400: "#FF7A33",
            500: "#FF6A00",
            600: "#CC5400",
            700: "#993F00",
            800: "#662A00",
            900: "#331500",
          },
          // Ink (dark charcoal)
          ink: "#0A0A0B",
          // Stone (card backgrounds)
          stone: "#111114",
          // Paper (off-white for text/backgrounds)
          paper: "#F5F5F5",
          // Accent (electric blue)
          accent: "#0EA5E9",
        },
        // Semantic alias for shadcn/ui compatibility
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
        display: ["ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(255,106,0,0.15)",
        card: "0 4px 12px rgba(0,0,0,0.3)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
