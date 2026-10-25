import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/hazardwatch/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Lets us write imports like "@/components/NavBar"
      "@": path.resolve(__dirname, "./src"),
    },
  },
});