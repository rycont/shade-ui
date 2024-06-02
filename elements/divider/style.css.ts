import { style } from '@vanilla-extract/css'
import { vars } from '../../theme.css'
import { COLORS } from '../../colors'

const colorSelectors = Object.fromEntries(
	Object.keys(COLORS).map((key) => [
		[`&[color="${key.toLowerCase()}"]`],
		{
			border: `1px solid ${vars.color[key as keyof typeof vars.color]}`,
		},
	]),
)

export const dividerStyle = style({
	border: '0.5px solid ' + vars.color.L3,
	selectors: colorSelectors,
})
