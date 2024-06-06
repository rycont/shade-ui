import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../theme.css'

const BACKGROUND_COLOR = `var(--sh-container-background-color, ${vars.color.L1})`
const BACKDROP_COLOR = `var(--sh-container-backdrop-color, ${vars.color.L2})`

export const NARROW_CONTAINER_WIDTH = '--sh-narrow-container-width'

export const container = style({
	backgroundColor: BACKGROUND_COLOR,
	minHeight: '100vh',
	display: 'flex',
	flexDirection: 'column',
	gap: '6rem',
	maxWidth: `var(${NARROW_CONTAINER_WIDTH})`,
	margin: '0px auto',
	padding: '6rem',
	boxSizing: 'border-box',
	overflowX: 'visible',
	selectors: {
		'&[fit-vh]': {
			height: '100dvh',
		},
	},
})

globalStyle('body', {
	backgroundColor: BACKDROP_COLOR,
})

globalStyle(`body:has(.${container}[fit-vh])`, {
	overflow: 'hidden',
})

globalStyle(':root', {
	vars: {
		[NARROW_CONTAINER_WIDTH]: '540px',
	},
})

globalStyle(`.${container} > [data-filly]`, {
	flex: 1,
})
