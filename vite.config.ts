import { defineConfig, type AliasOptions } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

//@ts-expect-error
import path from "path";

//@ts-expect-error
const root = path.resolve(__dirname, "src");

// https://vite.dev/config/
export default defineConfig({
  plugins: [svgr({ include: "**/*.svg?react" }), react()],
  resolve: {
    alias: {
      "@": root,
    } as AliasOptions,
  },
});
