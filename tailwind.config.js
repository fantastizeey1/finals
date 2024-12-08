import { defineConfig } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default defineConfig({
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [typography],
});
