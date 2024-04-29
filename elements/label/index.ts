import '../typo/index'
import { SMALL_TEXT } from '../typo/index'
import { DefineOnce } from '../../util'

class ShadeLabel extends HTMLElement {
	constructor() {
		super()

		const labelElement = document.createElement('label')
		const labelTextElement = document.createElement(SMALL_TEXT)

		// const titleText = this.getAttribute('title') || 'Set "title" attribute'

		// labelTextElement.appendChild(document.createTextNode(titleText))

		// this.insertBefore(labelElement, this.firstChild)
	}
}

DefineOnce.define('sh-label', ShadeLabel)
