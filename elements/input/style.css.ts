import { style } from '@vanilla-extract/css'
import { vars } from '../../theme.css'

export const inputStyle = style({
	border: `1px solid ${vars.color.L3}`,
	padding: '3rem 4rem',
	borderRadius: '3rem',
	backgroundColor: vars.color.L1,
	outline: 'none',
	display: 'block',
	width: '100%',
	boxSizing: 'border-box',
	transition: vars.timing.ease,
	'::placeholder': {
		color: vars.color.L7,
	},
	':focus': {
		boxShadow: `inset 0 0 0 1px ${vars.color.L7}`,
	},
})
