import { style } from '@vanilla-extract/css'
import { vars } from '../../theme.css'

export const inputStyle = style({
	border: `1px solid ${vars.color.L3}`,
	padding: '3rem 4rem',
	borderRadius: '3rem',
	outlineColor: vars.color.L7,
	'::placeholder': {
		color: vars.color.L7,
	},
})
