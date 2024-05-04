import { createGlobalTheme, globalStyle, keyframes } from '@vanilla-extract/css'

const color = {
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
	skyblue: '#8099FF',
}

export const vars = createGlobalTheme(':root', {
	color,
	timing: {
		ease: '500ms cubic-bezier(0, 0.8, 0, 1)',
	},
	shadow: {
		card: '0rem 1rem 6rem rgba(0, 0, 0, 0.06)',
	},
})

export const FOCUS_OUTLINE = {
	default: {
		outline: 'none',
		transition: vars.timing.ease,
	},
	trigger: {
		boxShadow: `0 0 0 2px ${color.L7}`,
	},
}

globalStyle(':root', {
	fontSize: '4px',
})

globalStyle('body', {
	margin: 0,
	fontSize: '4rem',
})

export const shake = keyframes({
	'0%': { transform: 'rotate(-20deg)' },
	'50%': { transform: 'rotate(20deg)' },
	'100%': { transform: 'rotate(-20deg)' },
})

export const shakeSmall = keyframes({
	'0%': { transform: 'rotate(-2deg)' },
	'50%': { transform: 'rotate(2deg)' },
	'100%': { transform: 'rotate(-2deg)' },
})
