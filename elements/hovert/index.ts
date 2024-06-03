import { DefineOnce } from '../../util'
import { horzStyle, vertStyle } from './style.css'

class ShadeHorz extends HTMLElement {
	static observedAttributes = ['gap', 'p', 'px', 'py']

	connectedCallback() {
		this.classList.add(horzStyle)
	}

	attributeChangedCallback(name: string, oldValue: string, newValue: string) {
		if (name === 'gap') {
			this.style.gap = newValue + 'rem'
		} else if (name === 'p') {
			this.style.padding = newValue + 'rem'
		} else if (name === 'px') {
			this.style.paddingInline = newValue + 'rem'
		} else if (name === 'py') {
			this.style.paddingBlock = newValue + 'rem'
		}
	}
}

export const horz = 'sh-horz'
DefineOnce.define(horz, ShadeHorz)

class ShadeVert extends HTMLElement {
	static observedAttributes = ['gap', 'p', 'px', 'py']

	connectedCallback() {
		this.classList.add(vertStyle)
	}

	attributeChangedCallback(name: string, oldValue: string, newValue: string) {
		if (name === 'gap') {
			this.style.gap = newValue + 'rem'
		} else if (name === 'p') {
			this.style.padding = newValue + 'rem'
		} else if (name === 'px') {
			this.style.paddingInline = newValue + 'rem'
		} else if (name === 'py') {
			this.style.paddingBlock = newValue + 'rem'
		}
	}
}

export const vert = 'sh-vert'
DefineOnce.define(vert, ShadeVert)

export interface ShadeHovertProps {
	gap?: string | number
	p?: string | number
	px?: string | number
	py?: string | number
	children?: any
	linebreak?: boolean
	x?: 'left' | 'center' | 'right' | 'stretch' | 'space'
	y?: 'top' | 'center' | 'bottom' | 'stretch' | 'space'
	scroll?: boolean
}
