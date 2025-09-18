import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      react(),
      tailwindcss()
    ],
    server: {
      port: env?.VITE_PORT ? Number.parseInt(env.VITE_PORT) : 5169,
      // host: true
    },
  };
});
