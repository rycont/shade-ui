import { DefineOnce, passAttributes } from '../../util'
import linkIcon from '/Link.svg?raw'
import { iconWrapperStyle, linkStyle } from './style.css'

export class ShadeInlineLink extends HTMLElement {
	private anchorElement = document.createElement('a')
	private iconElement = document.createElement('span')

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

		const text =
			this.getAttribute('text') || this.getAttribute('href') || 'link'
		this.anchorElement.appendChild(document.createTextNode(text))

		this.appendChild(this.anchorElement)
	}
}

DefineOnce.define('sh-inline-link', ShadeInlineLink)
