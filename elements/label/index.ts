import '../typo/index'
import { SMALL_TEXT, SUBTITLE, TEXT_CONTENT } from '../typo/index'
import { DefineOnce } from '../../util'
import {
	descriptionStyle,
	labelTitle,
	labelWrapper,
	messageStyle,
} from './style.css'

class ShadeLabel extends HTMLElement {
	static observedAttributes = ['title', 'message', 'description']

	_labelElement: HTMLLabelElement | null = null
	_titleElement: HTMLElement | null = null
	_descriptionElement: HTMLElement | null = null
	_messageElement: HTMLElement | null = null

	constructor() {
		super()
	}

	connectedCallback() {
		this.insertBefore(this.labelElement, this.firstChild)

		const messageElement = this.messageElement
		if (messageElement) {
			this.append(this.messageElement)
		}
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === 'title') {
			this.titleElement.textContent = newValue
		} else if (name === 'description') {
			if (!newValue) {
				this._descriptionElement?.remove()
				this._descriptionElement = null
			} else {
				const descriptionElement = this.descriptionElement

				descriptionElement!.textContent = newValue
				this._labelElement?.appendChild?.(descriptionElement!)
			}
		} else if (name === 'message') {
			if (!newValue) {
				this._messageElement?.remove()
				this._messageElement = null
			} else {
				const messageElement = this.messageElement

				messageElement!.textContent = newValue
				this.append(messageElement!)
			}
		}
	}

	get labelElement() {
		if (this._labelElement) {
			return this._labelElement
		}

		const labelElement = document.createElement('label')
		labelElement.classList.add(labelWrapper)

		labelElement.append(this.titleElement)

		const descriptionElement = this.descriptionElement

		if (descriptionElement) {
			labelElement.append(descriptionElement)
		}

		this._labelElement = labelElement
		return labelElement
	}

	get titleElement() {
		if (this._titleElement) {
			return this._titleElement
		}

		const titleElement = document.createElement(SUBTITLE)

		titleElement.textContent = this.getAttribute('title') || 'NO TITLE'
		titleElement.classList.add(labelTitle)

		this._titleElement = titleElement

		return titleElement
	}

	get descriptionElement() {
		if (this._descriptionElement) {
			return this._descriptionElement
		}

		console.log('Building new desc')

		const descriptionElement = document.createElement(SMALL_TEXT)

		const description = this.getAttribute('description')
		if (!description) {
			return null
		}

		descriptionElement.textContent = description
		descriptionElement.classList.add(descriptionStyle)

		this._descriptionElement = descriptionElement

		return descriptionElement
	}

	get messageElement() {
		if (this._messageElement) {
			return this._messageElement
		}

		const message = this.getAttribute('message')

		if (!message) {
			return null
		}

		const messageElement = document.createElement(SMALL_TEXT)

		messageElement.textContent = message
		messageElement.classList.add(messageStyle)

		this._messageElement = messageElement

		return messageElement
	}
}

DefineOnce.define('sh-label', ShadeLabel)
