import { createGlobalTheme, globalStyle } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
	color: {
		L10: '#202128',
		L9: '#3d3f4a',
		L8: '#555869',
		L7: '#73768a',
		L6: '#8d90a0',
		L5: '#adb0c2',
		L4: '#d8dae5',
		L3: '#ebecf5',
		L2: '#f6f7fa',
		L1: '#fcfcfd',
	},
	font: {
		body: 'arial',
	},
})

globalStyle(':root', {
	fontSize: '4px',
})

globalStyle('body', {
	margin: 0,
	fontSize: '4rem',
})
