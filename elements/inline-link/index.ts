import { DefineOnce, passAttributes } from '../../util'
import linkIcon from '../../icons/Link.svg?raw'
import { iconWrapperStyle, linkStyle } from './style.css'

export class ShadeInlineLink extends HTMLElement {
	private anchorElement = document.createElement('a')
	private iconElement = document.createElement('span')

	static observedAttributes = ['text', 'href']

	constructor() {
		super()

		this.anchorElement.classList.add(linkStyle)
		this.iconElement.classList.add(iconWrapperStyle)
		passAttributes(this.anchorElement, this, [
			'href',
			'target',
			'rel',
			'download',
			'hreflang',
			'type',
			'referrerpolicy',
			'as',
			'crossorigin',
			'integrity',
			'media',
			'nonce',
			'referrerpolicy',
			'sizes',
			'title',
		])
	}

	connectedCallback() {
		this.iconElement.innerHTML = linkIcon

		this.appendChild(this.iconElement)
		this.appendChild(this.anchorElement)
	}

	attributeChangedCallback(
		name: string,
		oldValue: string | null,
		newValue: string | null,
	) {
		if (oldValue === newValue) return

		if (name === 'text') {
			this.anchorElement.textContent = newValue
		}

		if (name === 'href') {
			this.anchorElement.href = newValue || ''
		}
	}

	appendChild<T extends Node>(node: T): T {
		// console.log(node)
		if ([this, this.anchorElement, this.iconElement].includes(node)) {
			return super.appendChild(node)
		}

		return this.anchorElement.appendChild(node)
	}
}

const INLINE_LINK = 'sh-inline-link'
DefineOnce.define(INLINE_LINK, ShadeInlineLink)

export default INLINE_LINK
