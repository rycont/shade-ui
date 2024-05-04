import { DefineOnce } from '../../util'
import { token } from '../typo/style.css'
import { buttonStyle, iconWrapperStyle } from './style.css'

class ShadeButton extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		this.classList.add(buttonStyle, token)
		this.drawIcon()
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
}

DefineOnce.define('sh-button', ShadeButton)
