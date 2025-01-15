import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react({
      // Habilita el hot reload y mejora la experiencia de desarrollo
      plugins: [["@emotion/babel-plugin", {}]],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Optimizaciones para desarrollo
  define: {
    __DEV__: mode === "development",
  },
  build: {
    // Genera sourcemaps para mejor debugging
    sourcemap: true,
  },
}));