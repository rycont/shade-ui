import { title } from './style.css'

class ShadeTitle extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		this.classList.add(title)
	}
}

customElements.define('sh-title', ShadeTitle)
