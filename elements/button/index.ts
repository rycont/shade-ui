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

const TYPE_CLASS_MAP = {
	accent: accentButton,
	secondary: secondaryButton,
	ghost: ghostButton,
}

class ShadeButton extends HTMLElement {
	static observedAttributes = ['disabled', 'type']
	static defaultType = 'primary'
	private typeClass: string | null = null

	constructor() {
		super()
	}

	connectedCallback() {
		this.classList.add(buttonStyle, token)
		this.drawIcon()

		this.setInitialAttributes()
	}

	async drawIcon() {
		const iconSrc = this.getAttribute('icon')

		if (!iconSrc) {
			return
		}

		const icon = await (await fetch(iconSrc)).text()
		const iconWrapper = document.createElement('span')
		iconWrapper.innerHTML = icon

		iconWrapper.classList.add(iconWrapperStyle)

		this.insertBefore(iconWrapper, this.firstChild)
	}

	setInitialAttributes() {
		const type = this.getAttribute('type') || ShadeButton.defaultType
		this.setTypeClass(type)

		const disabled = this.getAttribute('disabled') !== null
		this.setDisability(disabled)
	}

	attributeChangedCallback(name: string, oldValue: string, newValue: string) {
		if (name === 'disabled') {
			this.setDisability(newValue !== null)
		}

		if (name === 'type') {
			this.setTypeClass(newValue)
		}
	}

	setTypeClass(type: string) {
		if (!type) return

		if (this.typeClass) {
			this.classList.remove(this.typeClass)
		}

		const newTypeClass = TYPE_CLASS_MAP[type]
		if (!newTypeClass) return

		this.classList.add(newTypeClass)
		this.typeClass = newTypeClass
	}

	setDisability(disabled: boolean) {
		if (disabled) {
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

DefineOnce.define('sh-button', ShadeButton)
