import { globalStyle, style } from '@vanilla-extract/css'
import { shakeMiddle, vars } from '../../theme.css'
import { textContentStyle } from '../typo/style.css'

const BACKGROUND_COLOR = `var(--sh-floating-button-background-color, ${vars.color.orange})`
const TEXT_COLOR = `var(--sh-floating-button-text-color, ${vars.color.L1})`

export const floatButtonStyle = style({
	boxShadow: vars.shadow.elevated,
	backgroundColor: BACKGROUND_COLOR,
	color: TEXT_COLOR,
	padding: '3rem 5rem',
	borderRadius: '7rem',
	cursor: 'pointer',
	position: 'fixed',
	bottom: 'calc(env(safe-area-inset-bottom) + 5rem)',
	left: '50%',
	transform: 'translateX(-50%)',
	border: `0.5rem solid ${vars.color.L3}`,
	display: 'flex',
	alignItems: 'center',
	gap: '2rem',
	transition: vars.timing.ease,
	...textContentStyle,
})

const ICON_WIDTH = `var(--sh-floating-button-icon-width, 4rem)`
const ICON_HEIGHT = `var(--sh-floating-button-icon-height, 4rem)`

export const iconWrapperStyle = style({
	width: ICON_WIDTH,
	height: ICON_HEIGHT,
})

globalStyle(`.${iconWrapperStyle} > *`, {
	width: '100%',
	height: '100%',
})

globalStyle(`.${floatButtonStyle}:hover .${iconWrapperStyle} > *`, {
	animation: `${shakeMiddle} 1s infinite`,
})
