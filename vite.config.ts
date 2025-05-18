import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'src': path.resolve(__dirname, 'src'),
		},
	},
	plugins: [react()],
	build: {
		// library mode
		lib: {
			entry: 'src/index.tsx',
			name: 'ComponentLibrary',
			fileName: (format) => `component-library.${format}.js`,
		},
		rollupOptions: {
			// don't bundle these (they're peers)
			external: ['react', 'react-dom', '@mui/material'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
					'@mui/material': 'MaterialUI',
				},
			},
		},
	},
});
  