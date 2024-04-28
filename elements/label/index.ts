import '../typo/index'
import { SMALL_TEXT } from '../typo/index'

class ShadeLabel extends HTMLElement {
	constructor() {
		super()
		console.log('예?')

		const labelElement = document.createElement('label')
		const labelTextElement = document.createElement(SMALL_TEXT)
		
		const titleText = this.getAttribute('title') || 'Set "title" attribute'

		labelTextElement.appendChild(document.createTextNode(titleText))

		this.insertBefore(labelElement, this.firstChild)
	}
}

customElements.define('sh-label', ShadeLabel)
