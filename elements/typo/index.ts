import { DefineOnce } from '../../util'
import { smallText, subtitle, textContent, title, token } from './style.css'

export const TITLE = createClassedComponent('sh-title', title)
export const SMALL_TEXT = createClassedComponent('sh-small-text', smallText)
export const SUBTITLE = createClassedComponent('sh-subtitle', subtitle)
export const TEXT_CONTENT = createClassedComponent('sh-text', textContent)
export const TOKEN = createClassedComponent('sh-token', token)

function createClassedComponent(name: string, className: string) {
	DefineOnce.define(
		name,
		class extends HTMLElement {
			constructor() {
				super()
			}

			connectedCallback() {
				this.classList.add(className)
			}
		},
	)

	return name
}

export interface ShadeTypoProps {
	center?: boolean
	left?: boolean
	right?: boolean
	underline?: boolean
	'line-through'?: boolean
	L10?: boolean
	L9?: boolean
	L8?: boolean
	L7?: boolean
	L6?: boolean
	L5?: boolean
	L4?: boolean
	L3?: boolean
	L2?: boolean
	L1?: boolean
	skyblue?: boolean
	orange?: boolean
	children?: any
}
