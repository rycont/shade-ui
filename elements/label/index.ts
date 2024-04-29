import '../typo/index'
import { SUBTITLE } from '../typo/index'
import { DefineOnce } from '../../util'
import { labelTitle, labelWrapper } from './style.css'

class ShadeLabel extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		const labelElement = document.createElement('label')
		const labelTextElement = document.createElement(SUBTITLE)

		const titleText = this.getAttribute('title') || 'Set "title" attribute'
		const description = this.getAttribute('description')

		labelTextElement.appendChild(document.createTextNode(titleText))
		labelTextElement.classList.add(labelTitle)

		// if(description) {
		// 	// const descriptionElement = document.createElement()
		// }

		labelElement.appendChild(labelTextElement)
		labelElement.classList.add(labelWrapper)

		this.insertBefore(labelElement, this.firstChild)
	}
}

DefineOnce.define('sh-label', ShadeLabel)
