import { DefineOnce } from '../../util'
import { horz, vert } from './style.css'

class Horz extends HTMLElement {
	static observedAttributes = ['gap', 'p', 'px', 'py']

	connectedCallback() {
		this.classList.add(horz)
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

DefineOnce.define('sh-horz', Horz)

class Vert extends HTMLElement {
	static observedAttributes = ['gap', 'p', 'px', 'py']

	connectedCallback() {
		this.classList.add(vert)
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

DefineOnce.define('sh-vert', Vert)
