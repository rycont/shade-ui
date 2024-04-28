import { title } from './style.css'

class ShadeTitle extends HTMLElement {
	constructor() {
		super()
		this.classList.add(title)
	}
}

const TITLE = 'sh-title'

customElements.define(TITLE, ShadeTitle)

class ShadeSmallText extends HTMLElement {
	constructor() {
		super()
		this.classList.add(title)
	}
}

const SMALL_TEXT = 'sh-small-text'

customElements.define(SMALL_TEXT, ShadeSmallText)

export { TITLE, SMALL_TEXT }
