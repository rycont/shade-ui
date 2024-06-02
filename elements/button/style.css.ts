import { globalStyle, style } from '@vanilla-extract/css'
import { FOCUS_OUTLINE, THEME_COLOR, shakeMiddle, vars } from '../../theme.css'

export const buttonStyle = style({
	backgroundColor: `var(--button-color-bg, ${vars.color.L9})`,
	color: `var(--button-color-text, ${vars.color.L1})`,
	padding: 'var(--button-padding, 2rem 5rem)',
	borderRadius: '2rem',
	display: 'flex',
	cursor: 'var(--button-pointer, pointer)',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '1rem',
	...FOCUS_OUTLINE.default,
	selectors: {
		'&:focus:not([disabled])': FOCUS_OUTLINE.trigger,
	},
})

export const accentButton = style({
	vars: {
		'--button-color-bg': THEME_COLOR,
		'--button-color-text': vars.color.L1,
	},
})

export const secondaryButton = style({
	vars: {
		'--button-color-bg': vars.color.L7,
		'--button-color-text': vars.color.L1,
	},
})

export const ghostButton = style({
	vars: {
		'--button-color-bg': vars.color.L3,
		'--button-color-text': vars.color.L9,
	},
})

export const disabledButton = style({
	vars: {
		'--button-color-bg': vars.color.L3,
		'--button-color-text': vars.color.L7,
		'--button-pointer': 'not-allowed',
	},
})

export const iconWrapperStyle = style({
	width: '4rem',
	height: '4rem',

	[`.${buttonStyle}:not(.${disabledButton}):hover &`]: {
		animation: `${shakeMiddle} 1s infinite`,
	},
})

globalStyle(`.${iconWrapperStyle} > svg`, {
	width: '100%',
	height: '100%',
})

globalStyle(`a:has(> .${buttonStyle})`, {
	textDecoration: 'none',
})
