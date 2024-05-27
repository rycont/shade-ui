import { globalStyle, style } from '@vanilla-extract/css'

export const linkStyle = style({
	color: 'inherit',
	textDecoration: 'underline',
})

export const iconWrapperStyle = style({
	width: '4rem',
	height: '4rem',
	display: 'inline-block',
	verticalAlign: 'middle',
})

globalStyle(`.${iconWrapperStyle} svg`, {
	width: '100%',
	height: '100%',
	verticalAlign: 'super',
})
