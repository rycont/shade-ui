import Spinner from '../../icons/animated/spinner.svg?raw'
import { DefineOnce } from '../../util'
import { token } from '../typo/style.css'
import {
	accentButton,
	buttonStyle,
	disabledButton,
	ghostButton,
	loadingIcon,
	secondaryButton,
} from './style.css'

const TYPE_CLASS_MAP: Record<string, string> = {
	accent: accentButton,
	secondary: secondaryButton,
	ghost: ghostButton,
}

// TODO: Reimplement ShadeButton component

class ShadeButton extends HTMLElement {
	static observedAttributes = ['disabled', 'type', 'icon', 'loading']
	static defaultType = 'primary'

	private typeClass: string | null = null
	private loadingIcon = document.createElement('div')

	constructor() {
		super()
		this.loadingIcon.classList.add(loadingIcon)
		this.loadingIcon.innerHTML = Spinner
	}

	connectedCallback() {
		this.addEventListener('click', () => {
			if (this.getAttribute('type') === 'submit') {
				this.submit()
			}
		})

		this.addEventListener('keydown', (event) => {
			const isEnter = event.key === 'Enter'
			const isSpace = event.key === ' '

			if (!isEnter && !isSpace) {
				return
			}

			if (this.getAttribute('type') === 'submit') {
				this.submit()
			} else {
				this.click()
			}
		})

		this.setAttribute('aria-atomic', 'true')
		this.classList.add(buttonStyle, token)
		this.insertAdjacentElement('afterbegin', this.loadingIcon)

		this.setInitialAttributes()
	}

	submit() {
		const virtualSubmitButton = document.createElement('input')
		virtualSubmitButton.type = 'submit'
		virtualSubmitButton.style.display = 'none'

		this.parentElement?.appendChild(virtualSubmitButton)
		virtualSubmitButton.click()
		this.parentElement?.removeChild(virtualSubmitButton)
	}

	setInitialAttributes() {
		const type = this.getAttribute('type') || ShadeButton.defaultType

		this.setTypeClass(type)

		const disabled = this.getAttribute('disabled') !== null
		const isLoading = this.getAttribute('loading') !== null

		this.setDisability(disabled, isLoading)
	}

	attributeChangedCallback(
		name: string,
		_oldValue: string,
		newValue: string,
	) {
		if (name === 'disabled') {
			const isLoading = this.getAttribute('loading') !== null
			this.setDisability(newValue !== null, isLoading)

			return
		}

		if (name === 'type') {
			this.setTypeClass(newValue)

			return
		}

		if (name === 'loading') {
			this.setLoading(newValue !== null)

			const isDisabled = this.getAttribute('disabled') !== null
			this.setDisability(isDisabled, newValue !== null)
			console.log(isDisabled, newValue)

			return
		}
	}

	setTypeClass(type: string | null) {
		if (!type) return

		if (this.typeClass) {
			this.classList.remove(this.typeClass)
		}

		const newTypeClass = TYPE_CLASS_MAP[type]
		if (!newTypeClass) return

		this.classList.add(newTypeClass)
		this.typeClass = newTypeClass
	}

	setDisability(disabled: boolean, isLoading: boolean) {
		const isChildOfAnchor = this.parentElement instanceof HTMLAnchorElement
		const isBlocked = disabled || isLoading

		const tabindex = isChildOfAnchor || isBlocked ? '-1' : '0'

		if (isBlocked) {
			this.classList.add(disabledButton)
			this.setAttribute('aria-disabled', 'true')
		} else {
			this.classList.remove(disabledButton)
			this.removeAttribute('aria-disabled')
		}

		this.setAttribute('tabindex', tabindex)
	}

	setLoading(isLoading: boolean) {
		if (isLoading) {
			this.setAttribute('aria-live', 'polite')
			this.setAttribute('aria-busy', 'true')
			this.loadingIcon.style.setProperty('display', 'block')
		} else {
			this.removeAttribute('aria-live')
			this.removeAttribute('aria-busy')
			this.loadingIcon.style.setProperty('display', 'none')
		}
	}

	set textContent(value: string) {
		const textNodes = Array.from(this.childNodes).filter(
			(node) => node instanceof Text && node.textContent?.trim().length,
		)

		for (const node of textNodes) {
			this.removeChild(node)
		}

		this.appendChild(document.createTextNode(value))
	}
}

const NAME = 'sh-button'
DefineOnce.define('sh-button', ShadeButton)
export default NAME

export interface ShadeButtonProps {
	type?: 'accent' | 'secondary' | 'ghost'
	disabled?: boolean
	loading?: boolean
	icon?: string
	children?: any
	size?: 'default' | 'big' | 'bigger'
}
