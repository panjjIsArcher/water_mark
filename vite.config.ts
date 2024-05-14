import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteRestart from "vite-plugin-restart";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    { ...react() },
    ViteRestart({
      restart: ["vite.config.ts"],
    }),
  ],
  build: {
    lib: {
      fileName: "water-mark",
      name: "waterMark",
      entry: "./src/utils/utils.ts", // 需要打包的入口文件
    },
  },
});
