import react from "@vitejs/plugin-react";

import * as path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      fileName: "index",
      formats: ["cjs", "es"],
    },

    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
        banner: '"use client";',
      },
    },

    commonjsOptions: {
      esmExternals: ["react"],
    },

    ssr: true,
  },

  plugins: [react(), dts()],
});
