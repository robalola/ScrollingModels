import react from "@vitejs/plugin-react";
import { transformWithEsbuild } from "vite";
import restart from "vite-plugin-restart";
import tailwindcss from "@tailwindcss/vite";

export default {
  root: "src/",
  publicDir: "../public/",
  plugins: [
    tailwindcss(),
    // Restart server on static/public file change
    restart({ restart: ["../public/**"] }),

    // React support
    react(),

    // .js file support as if it was JSX
    {
      name: "load+transform-js-files-as-jsx",
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/)) return null;

        return transformWithEsbuild(code, id, {
          loader: "jsx",
          jsx: "automatic",
        });
      },
    },
  ],
  server: {
    host: true,
    port: 2222,
    strictPort: true,
    hmr: {
      clientPort: process.env.CODESANDBOX_SSE ? 443 : undefined,
      host: process.env.CODESANDBOX_SSE ? "0.0.0.0" : undefined,
    },
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    sourcemap: true,
  },
};
