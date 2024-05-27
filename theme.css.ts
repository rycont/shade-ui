import {
	createGlobalTheme,
	globalStyle,
	keyframes,
	style,
} from '@vanilla-extract/css'
import { COLORS } from './colors'

export const THEME_COLOR = `var(--theme-color, ${COLORS.orange})`
const BASE_SIZE = `var(--sh-base-size, 4px)`

export const vars = createGlobalTheme(':root', {
	color: COLORS,
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
	selectors: {
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
	},
})
