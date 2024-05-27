import { globalStyle, style } from '@vanilla-extract/css'

export const horzStyle = style({
	display: 'flex',
	alignItems: 'stretch',
	justifyContent: 'flex-start',
	selectors: {
		'&[x=center]': {
			justifyContent: 'center',
		},
		'&[x=right]': {
			justifyContent: 'flex-end',
		},
		'&[x=stretch]': {
			justifyContent: 'space-between',
		},
		'&[x=space]': {
			justifyContent: 'space-around',
		},
		'&[y=top]': {
			alignItems: 'flex-start',
		},
		'&[y=center]': {
			alignItems: 'center',
		},
		'&[y=bottom]': {
			alignItems: 'flex-end',
		},
		'&[linebreak]': {
			flexWrap: 'wrap',
		},
	},
})

globalStyle(`.${horzStyle} > [data-fillx]`, {
	flexGrow: 1,
})

globalStyle(`.${horzStyle} > [data-filly]`, {
	alignSelf: 'stretch',
})

export const vertStyle = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'stretch',
	justifyContent: 'flex-start',
	selectors: {
		'&[x=left]': {
			alignItems: 'flex-start',
		},
		'&[x=center]': {
			alignItems: 'center',
		},
		'&[x=right]': {
			alignItems: 'flex-end',
		},
		'&[y=center]': {
			justifyContent: 'center',
		},
		'&[y=bottom]': {
			justifyContent: 'flex-end',
		},
		'&[y=space]': {
			justifyContent: 'space-between',
		},
		'&[y=stretch]': {
			justifyContent: 'stretch',
		},
		'&[linebreak]': {
			flexWrap: 'wrap',
		},
	},
})

globalStyle(`.${vertStyle} > [data-fillx]`, {
	alignSelf: 'stretch',
})

globalStyle(`.${vertStyle} > [data-filly]`, {
	flexGrow: 1,
})
