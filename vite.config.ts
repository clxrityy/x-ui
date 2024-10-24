import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vitest/config'
import dts from 'vite-plugin-dts'
import tailwindcss from 'tailwindcss'
import { UserConfigExport } from 'vite'

const app = async (): Promise<UserConfigExport> => {
  /**
   * Removes everything before the last
   * @octocat/library-repo -> library-repo
   * vite-component-library-template -> vite-component-library-template
   */

  return defineConfig({
    plugins: [
      react(),
      dts({
        insertTypesEntry: true,
        outDir: 'dist',
      }),
    ],
    css: {
      postcss: {
        plugins: [tailwindcss({
          config: path.resolve(__dirname, 'tailwind.config.js'),
        })],
      },
      modules: {
        exportGlobals: true,
      }
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react/jsx-runtime', 'tailwindcss'],
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/lib/index.ts'),
        name: "index",
        fileName: (format) => `index.${format}.js`,
      },
      sourcemap: true,
      rollupOptions: {
        external: ['react', 'react/jsx-runtime', 'react-dom', 'tailwindcss'],
        output: [
          {
            globals: {
              react: 'React',
              'react/jsx-runtime': 'react/jsx-runtime',
              'react-dom': 'ReactDOM',
              tailwindcss: 'tailwindcss',
            },
            entryFileNames: `index.d.ts`,
            format: "module",
          },
          {
            entryFileNames: `index.es.js`,
            format: 'es',
          },
          {
            entryFileNames: `index.cjs`,
            format: 'cjs',
          },
        ],
        input: "src/lib/index.ts",
        plugins: [dts(), react()],
      },
      outDir: 'dist',
    },
    test: {
      globals: true,
      environment: 'jsdom',
    },
  })
}
// https://vitejs.dev/config/
export default app
