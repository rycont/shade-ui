import { passAttributes } from '../../util'
import { inputStyle } from './style.css'
import { smallText } from '../typo/style.css'

class ShadeInput extends HTMLElement {
	input = document.createElement('input')

	constructor() {
		super()
		this.input.classList.add(inputStyle, smallText)
		this.appendChild(this.input)

		passAttributes(this.input, this, ['placeholder', 'type', 'value'])
	}

	connectedCallback() {}
}

customElements.define('sh-input', ShadeInput)
