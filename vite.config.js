import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

console.log(process.env);

export default defineConfig({
  plugins: [react()],
  base: "/assignment/",
  define: {
    "process.env": process.env,
  },
});
