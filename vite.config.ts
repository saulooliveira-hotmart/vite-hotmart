// @ts-ignore
import react from '@vitejs/plugin-react'
import path from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import { defineConfig } from 'vite'
import { visualizer } from "rollup-plugin-visualizer";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
    visualizer({
      emitFile: true,
      filename: "stats.html",
    }),
  ],
  build: {
    lib: {
      name: '@hotmart/app-change-ownership',
      entry: path.resolve(__dirname, './src/index.ts'),
    },
    rollupOptions: {
      input: path.resolve(__dirname, './src/index.ts'),
      output: {
        format: 'umd',
        entryFileNames: '[name].bundle.js',
        chunkFileNames: '[name].[hash].js',
        sourcemap: true,
        name: '@hotmart/app-change-ownership',
      },
    },
    outDir: 'build',
  },
})
