import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// @ts-ignore
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin()
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
