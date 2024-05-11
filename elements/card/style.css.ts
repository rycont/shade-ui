import { keyframes, style } from '@vanilla-extract/css'
import { vars } from '../../theme.css'

const appear = keyframes({
	from: {
		opacity: 0,
		transform: 'translateY(2rem)',
	},
	to: {
		opacity: 1,
		transform: 'translateY(0)',
	},
})

export const cardStyle = style({
	backgroundColor: vars.color.L1,
	border: `1px solid ${vars.color.L3}`,
	borderRadius: '3rem',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'stretch',
	overflow: 'hidden',
	padding: '5rem',
	gap: '4rem',
	animation: `${appear} cubic-bezier(0, 0.8, 0, 1) 3s forwards`,
})
