import { style } from '@vanilla-extract/css'
import { vars } from '../../theme.css'

export const labelTitle = style({
	color: vars.color.L9,
})

export const labelWrapper = style({
	paddingBottom: '3rem',
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem',
})
