import { DefineOnce, passAttributes } from '../../util'
import { checkboxStyle } from './style.css'

class ShadeCheckbox extends HTMLElement {
	static observedAttributes = ['checked', 'disabled']

	constructor() {
		super()
	}

	private inputElement = this.buildInput()

	buildInput() {
		const input = document.createElement('input')
		input.setAttribute('type', 'checkbox')
		input.classList.add(checkboxStyle)

		return input
	}

	connectedCallback() {
		this.appendChild(this.inputElement)
		this.setAttribute('role', 'checkbox')

		passAttributes(this.inputElement, this, ['checked', 'disabled'])
	}
}

DefineOnce.define('sh-checkbox', ShadeCheckbox)

const name = 'sh-checkbox'
export default name

export interface ShadeCheckboxProps {
	checked?: boolean
	disabled?: boolean
	children?: any
}
