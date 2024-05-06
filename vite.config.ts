import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { defineConfig } from 'vite'
import { resolve } from 'path'

import { glob } from 'glob'

const elements = await glob('./elements/*/index.ts')

const elementEntries = Object.fromEntries(
	elements.map((path) => [path.slice(9, -9), resolve(path)]),
)

export default defineConfig({
	plugins: [
		vanillaExtractPlugin({
			unstable_mode: 'emitCss',
			identifiers(props) {
				return 'sh-ui-' + props.hash
			},
		}),
	],
	publicDir: './icons',
	build: {
		lib: {
			entry: elementEntries,
			name: 'shade-ui',
			formats: ['es'],
		},
		sourcemap: true,
		copyPublicDir: true,
	},
})
