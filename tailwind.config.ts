module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        primary: "var(--color-primary)",
        title: "var(--title-color)",
        text: "var(--text-color)",
        border:"var(--border-color)",
      },
      fontFamily: {
        sans: ["var(--font-raleway)", "sans-serif"],
      },
      screens: {
        sm: "640px", // Small devices (phones)
        md: "768px", // Medium devices (tablets)
        lg: "1024px", // Large devices (laptops)
        xl: "1280px", // Extra large devices (desktops)
        "2xl": "1536px", // 2X large devices (large desktops)
      },
    },
  },
  plugins: [],
};
