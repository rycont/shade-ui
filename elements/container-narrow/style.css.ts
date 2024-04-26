import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../theme.css'

export const container = style({
	backgroundColor: vars.color.L2,
	minHeight: '100vh',
	display: 'flex',
	flexDirection: 'column',
	gap: '4rem',
	maxWidth: '540px',
	margin: '0px auto',
	padding: '6rem',
	boxSizing: 'border-box',
	overflowY: 'auto',
})

globalStyle('body', {
	backgroundColor: vars.color.L2,
})
