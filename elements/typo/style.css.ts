import { style } from '@vanilla-extract/css'
import { vars } from '../../theme.css'

const colorVariants = Object.fromEntries(
	Object.entries(vars.color).map(([key, value]) => [
		`&[${key.toLowerCase()}]`,
		{
			color: value,
		},
	]),
)

const alignVariants = {
	'&[center]': {
		textAlign: 'center',
	},
	'&[left]': {
		textAlign: 'left',
	},
	'&[right]': {
		textAlign: 'right',
	},
}

const decorateVariants = {
	'&[underline]': {
		textDecoration: 'underline',
	},
	'&[line-through]': {
		textDecoration: 'line-through',
	},
}

const variants = {
	...colorVariants,
	...alignVariants,
	...decorateVariants,
}

export const title = style({
	fontSize: '6rem',
	fontWeight: '700',
	...variants,
})

export const smallText = style({
	fontSize: '4rem',
	fontWeight: '500',
	...variants,
})

export const subtitle = style({
	fontSize: '4.5rem',
	fontWeight: '700',
	...variants,
})

export const textContent = style({
	fontSize: '4.5rem',
	fontWeight: '500',
	...variants,
})

export const token = style({
	fontSize: '4rem',
	fontWeight: '700',
	...variants,
})
