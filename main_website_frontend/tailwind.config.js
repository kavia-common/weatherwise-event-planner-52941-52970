/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#F59E0B",
        success: "#F59E0B",
        error: "#EF4444",
        background: "#f9fafb",
        surface: "#ffffff",
        text: "#111827"
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.1)"
      },
      borderRadius: {
        xl: "1rem"
      },
      gradientColorStops: {
        "ocean-start": "rgba(59,130,246,0.1)",
        "ocean-end": "rgba(249,250,251,1)"
      }
    }
  },
  plugins: []
};
