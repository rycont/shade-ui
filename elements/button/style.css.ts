import { style } from '@vanilla-extract/css'
import { vars } from '../../theme.css'

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
})

export const iconWrapperStyle = style({
	width: '4rem',
	height: '4rem',
})
