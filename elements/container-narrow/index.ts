// import { defineCSS } from './util.js'
import { container } from './style.css'

class ShadeContainerNarrow extends HTMLElement {
	constructor() {
		super()
		this.classList.add(container)
	}

	connectedCallback() {
		// defineCSS(window.document.body.style, {
		// })
		// const containerBackgroundColor =
		// 	this.getAttribute('color') ?? 'var(--L1)'
		// defineCSS(this.style, {
		// })
	}
}

customElements.define('sh-container-narrow', ShadeContainerNarrow)

// defineCSS({
// 	'sh-container-narrow': {
// 	},
// 	body: {
// 	},
// })
