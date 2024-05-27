import { DefineOnce } from '../../util'
import { token } from '../typo/style.css'
import {
	accentButton,
	buttonStyle,
	disabledButton,
	ghostButton,
	iconWrapperStyle,
	secondaryButton,
} from './style.css'
import spinnerIcon from '../../icons/animated/spinner.svg?raw'

const TYPE_CLASS_MAP: Record<string, string> = {
	accent: accentButton,
	secondary: secondaryButton,
	ghost: ghostButton,
}

class ShadeButton extends HTMLElement {
	static observedAttributes = ['disabled', 'type', 'loading', 'icon']
	static defaultType = 'primary'

	private typeClass: string | null = null
	private iconWrapper = document.createElement('span')

	constructor() {
		super()
	}

	connectedCallback() {
		this.classList.add(buttonStyle, token)
		this.initializeIcon()
		this.setInitialAttributes()
	}

	initializeIcon() {
		this.drawIcon()
		this.insertBefore(this.iconWrapper, this.firstChild)

		this.iconWrapper.classList.add(iconWrapperStyle)
	}

	async drawIcon() {
		const icon = await this.getIcon()
		if (!icon) return

		this.iconWrapper.innerHTML = icon
	}

	async getIcon() {
		const isLoading = this.getAttribute('loading') !== null

		if (isLoading) {
			return spinnerIcon
		}

		const iconSrc = this.getAttribute('icon')

		if (!iconSrc) {
			return
		}

		const icon = await (await fetch(iconSrc)).text()
		return icon
	}

	setInitialAttributes() {
		const type = this.getAttribute('type') || ShadeButton.defaultType

		this.setTypeClass(type)

		const disabled = this.getAttribute('disabled') !== null
		const isLoading = this.getAttribute('loading') !== null

		this.setDisability(disabled, isLoading)
	}

	attributeChangedCallback(name: string, oldValue: string, newValue: string) {
		if (name === 'disabled') {
			const isLoading = this.getAttribute('loading') !== null
			this.setDisability(newValue !== null, isLoading)

			return
		}

		if (name === 'loading') {
			const disabled = this.getAttribute('disabled') !== null
			this.setDisability(disabled, newValue !== null)
			this.drawIcon()

			return
		}

		if (name === 'type') {
			this.setTypeClass(newValue)

			return
		}

		if (name === 'icon') {
			this.drawIcon()

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
		if (disabled || isLoading) {
			this.classList.add(disabledButton)
			this.setAttribute('aria-disabled', 'true')
			this.setAttribute('tabindex', '-1')
		} else {
			this.classList.remove(disabledButton)
			this.removeAttribute('aria-disabled')
			this.setAttribute('tabindex', '0')
		}
	}
}

const NAME = 'sh-button'
DefineOnce.define('sh-button', ShadeButton)
export default NAME

export interface ShadeButtonProps {
	type?: string
	disabled?: boolean
	loading?: boolean
	icon?: string
	children?: any
}
