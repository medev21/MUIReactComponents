// CSS
import '../src/styles/styles.css'
// DEPENDENCIES
import React from 'react'
import type { Preview } from '@storybook/react'
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
// THEMES
import theme from '../src/theme/theme';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
			color: /(background|color)$/i,
			date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story) => (
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Story />
			</ThemeProvider>
		),
	],
};

export default preview;