import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '../../theme.css'
import { subtitleStyle } from '../typo/style.css'

export const tabStyle = style({
	display: 'flex',
})

globalStyle(`.${tabStyle} sh-tab-item`, {
	display: 'flex',
	alignItems: 'center',
	padding: '3rem',
	gap: '1rem',
	color: vars.color.L7,
	cursor: 'pointer',
	...subtitleStyle,
})

globalStyle(`.${tabStyle} sh-tab-item[active]`, {
	color: vars.color.L9,
	borderBottom: `0.5rem solid ${vars.color.L9}`,
})

globalStyle(`.${tabStyle} sh-tab-item[active] img`, {
	filter: `invert(0.2)`,
})

globalStyle(`.${tabStyle} sh-tab-item img`, {
	filter: `invert(0.5)`,
})

globalStyle(`.${tabStyle} a:has(sh-tab-item)`, {
	textDecoration: 'none',
	color: 'inherit',
})
