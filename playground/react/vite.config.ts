import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createStyleImportPlugin } from 'vite-plugin-style-import'

export default defineConfig({
  mode: 'development',
  plugins: [
    react(),
    createStyleImportPlugin({
      libs: [
        // If you don’t have the resolve you need, you can write it directly in the lib, or you can provide us with PR
        {
          libraryName: '@sreworks-starter/components',
          resolveStyle: (name) => {
            return `@sreworks-starter/components/lib/${name}/style/index.less`
          },
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  build: {
    // to make tests faster
    minify: false,
  },
})
