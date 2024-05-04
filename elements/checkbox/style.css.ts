import { style } from '@vanilla-extract/css'
import { OUTLINE_COLOR, THEME_COLOR, vars } from '../../theme.css'

export const checkboxStyle = style({
	width: '6rem',
	height: '6rem',
	borderRadius: '1rem',
	margin: '0',
	appearance: 'none',
	border: `0.5rem solid ${vars.color.L4}`,
	backgroundColor: vars.color.L1,
	display: 'block',
	transition: vars.timing.ease,
	position: 'relative',
	outlineColor: OUTLINE_COLOR,
	':active': {
		transform: 'scale(0.95) rotate(-5deg)',
	},
	'::after': {
		transition: vars.timing.ease,
		content: '""',
		width: '3rem',
		height: '3rem',
		margin: '1rem',
		borderRadius: '0.5rem',
		transform: 'scale(0.5) rotate(-15deg)',
		backgroundColor: THEME_COLOR,
		display: 'block',
		opacity: 0,
	},
	':checked': {
		borderColor: THEME_COLOR,
		'&::after': {
			transform: 'scale(1)',
			opacity: 1,
		},
	},
	'&[disabled]': {
		filter: 'grayscale(100%)',
	},
	'::before': {
		transition: vars.timing.ease,
		content: '수정할 수 없습니다',
		color: vars.color.L6,
		display: 'block',
		width: '30rem',
		position: 'absolute',
		backgroundColor: vars.color.L1,
		border: `1px solid ${vars.color.L4}`,
		borderRadius: '2rem',
		padding: '2rem 3rem',
		zIndex: 1,
		left: '8rem',
		top: '-2rem',
		boxShadow: vars.shadow.card,
		opacity: 0,
	},
	'&[disabled]:hover::before': {
		left: '9rem',
		opacity: 1,
	},
})
