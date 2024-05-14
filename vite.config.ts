import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [{ ...react() }],
  build: {
    lib: {
      fileName: "water-mark",
      name: "waterMark",
      entry: "./src/utils/utils.ts", // 需要打包的入口文件
    },
  },
});
