import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../theme.css'

const BACKGROUND_COLOR = `var(--container-background-color, ${vars.color.L1})`
const BACKDROP_COLOR = `var(--container-backdrop-color, ${vars.color.L2})`

export const container = style({
	backgroundColor: BACKGROUND_COLOR,
	minHeight: '100vh',
	display: 'flex',
	flexDirection: 'column',
	gap: '4rem',
	maxWidth: '540px',
	margin: '0px auto',
	padding: '6rem',
	boxSizing: 'border-box',
	overflowX: 'visible',
})

globalStyle('body', {
	backgroundColor: BACKDROP_COLOR,
})
