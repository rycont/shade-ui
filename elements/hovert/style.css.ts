import { style } from '@vanilla-extract/css'

export const horz = style({
	display: 'flex',
	alignItems: 'stretch',
	justifyContent: 'flex-start',
	'& > [data-fillx]': {
		flexGrow: 1,
	},
	'& > [data-filly]': {
		alignSelf: 'stretch',
	},
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
})

export const vert = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'stretch',
	justifyContent: 'flex-start',

	'& > [data-fillx]': {
		alignSelf: 'stretch',
	},
	'& > [data-filly]': {
		flexGrow: 1,
	},
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
})
