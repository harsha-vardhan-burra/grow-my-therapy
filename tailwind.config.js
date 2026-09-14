/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Redesign Semantic Tokens (Dr. Maya Reynolds)
        primary: {
          DEFAULT: "#283E34", // Deep Cypress
          hover: "#1D2F27",
          light: "#3A5548",
          subtle: "#EBF0ED",
        },
        secondary: {
          DEFAULT: "#A3654E", // Terracotta Clay
          hover: "#8C5541",
          light: "#C6856D",
          subtle: "#F9EFEA",
        },
        accent: {
          DEFAULT: "#D29C6B", // Sandstone Ochre
          hover: "#BF8754",
          light: "#E3B78D",
          subtle: "#FAF3EB",
        },
        linen: "#FAF8F5", // Alabaster Linen Base
        studio: "#FFFFFF",
        sand: "#F2ECE4",
        nocturne: "#18241F",
        charcoal: "#1C2420",
        sage: {
          DEFAULT: "#56625C",
          light: "#829089",
          muted: "#A2ABA6",
        },
        borderLinen: "#E6DFD5",

        // Clone Colors (Conejo Valley Counseling)
        conejo: {
          cream: "#F5F3ED",
          accent: "#E3D9CA",
          dark: "#2A2A2A",
          muted: "#666666",
          border: "#E2DCD3",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Infant", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        mulish: ["var(--font-mulish)", "Mulish", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px -4px rgba(40, 62, 52, 0.06)",
        "card-hover": "0 12px 30px -6px rgba(40, 62, 52, 0.12)",
        subtle: "0 2px 10px rgba(0, 0, 0, 0.04)",
      },
      borderRadius: {
        arch: "120px 120px 0 0",
        "arch-full": "9999px 9999px 0 0",
      },
    },
  },
  plugins: [],
};
