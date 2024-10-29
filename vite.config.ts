import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vitest/config'
import dts from 'vite-plugin-dts'
import tailwindcss from 'tailwindcss'
import { UserConfigExport } from 'vite'


const app = async (): Promise<UserConfigExport> => {
  return defineConfig({
    plugins: [
      react(),
      dts({
        insertTypesEntry: true,
        outDir: 'dist',
      })
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
      include: ['react', 'react-dom', 'tailwindcss', 'react/jsx-runtime'],
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
            preserveModules: true,
          },
          {
             entryFileNames: `index.cjs`,
             format: 'cjs',
          },
        ],
        input: "src/lib/index.ts",
      },
      outDir: 'dist'
    },
    test: {
      globals: true,
      environment: 'jsdom',
    },
  })
}
// https://vitejs.dev/config/
export default app
