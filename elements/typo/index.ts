import { title } from './style.css'

class ShadeTitle extends HTMLElement {
	constructor() {
		super()
		this.classList.add(title)
	}
}

customElements.define('sh-title', ShadeTitle)

class ShadeSmallText extends HTMLElement {
	constructor() {
		super()
		this.classList.add(title)
	}
}

customElements.define('sh-small-text', ShadeSmallText)
