import {
	createGlobalTheme,
	globalStyle,
	keyframes,
	style,
} from '@vanilla-extract/css'

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
	orange: '#E3714F',
}

export const THEME_COLOR = `var(--theme-color, ${color.orange})`
const BASE_SIZE = `var(--sh-base-size, 4px)`

export const vars = createGlobalTheme(':root', {
	color,
	bezier: {
		ease: 'cubic-bezier(0, 0.8, 0, 1)',
	},
	timing: {
		ease: '500ms cubic-bezier(0, 0.8, 0, 1)',
	},
	shadow: {
		elevated: '0rem 1rem 3rem rgba(0, 0, 0, 0.08)',
	},
})

export const OUTLINE_COLOR = vars.color.L7

export const FOCUS_OUTLINE = {
	default: {
		outline: 'none',
		transition: vars.timing.ease,
	},
	trigger: {
		boxShadow: `0 0 0 2px ${OUTLINE_COLOR}`,
	},
}

globalStyle(':root', {
	fontSize: BASE_SIZE,
	accentColor: THEME_COLOR,
})

globalStyle('body', {
	margin: 0,
	fontSize: '4rem',
	color: vars.color.L9,
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

export const shakeMiddle = keyframes({
	'0%': { transform: 'rotate(-10deg)' },
	'50%': { transform: 'rotate(10deg)' },
	'100%': { transform: 'rotate(-10deg)' },
})

export const popAppear = keyframes({
	from: {
		opacity: 0,
		transform: 'translateY(2rem)',
	},
	to: {
		opacity: 1,
		transform: 'translateY(0)',
	},
})

export const popAppearStyle = style({
	opacity: 0,
	animation: `${popAppear} ${vars.bezier.ease} 3s forwards`,
	'&+&': {
		animationDelay: '0.15s',
	},
	'&+&+&': {
		animationDelay: '0.3s',
	},
	'&+&+&+&': {
		animationDelay: '0.45s',
	},
	'&+&+&+&+&': {
		animationDelay: '0.6s',
	},
	'&+&+&+&+&+&': {
		animationDelay: '0.75s',
	},
})
