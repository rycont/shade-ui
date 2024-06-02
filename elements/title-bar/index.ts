import { DefineOnce } from '../../util'
import { TITLE } from '../typo'
import { titleBarStyle } from './style.css'

class ShadeTitleBar extends HTMLElement {
	static observedAttributes = ['title', 'back']

	private titleElement = document.createElement(TITLE)

	constructor() {
		super()
	}

	connectedCallback() {
		this.classList.add(titleBarStyle)
		this.insertAdjacentElement('afterbegin', this.titleElement)
	}

	attributeChangedCallback(
		name: string,
		_oldValue: string | null,
		newValue: string | null,
	) {
		if (name === 'title') {
			this.titleElement.textContent = newValue
			return
		}

		if (name === 'back') {
			const useBack = newValue !== null
			const title = this.titleElement.textContent

			this.titleElement.textContent = (useBack ? '←' : '') + title
			this.titleElement.style.cursor = useBack ? 'pointer' : 'default'

			if (useBack) {
				this.titleElement.addEventListener(
					'click',
					ShadeTitleBar.onTitleClicked,
				)
			} else {
				this.titleElement.removeEventListener(
					'click',
					ShadeTitleBar.onTitleClicked,
				)
			}

			return
		}
	}

	static onTitleClicked() {
		history.back()
	}
}

const NAME = 'sh-title-bar'
export default NAME
DefineOnce.define(NAME, ShadeTitleBar)

export interface ShadeTitleBarProps {
	title?: string
	back?: boolean
}
