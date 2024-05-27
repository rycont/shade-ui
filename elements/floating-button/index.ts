import { DefineOnce } from '../../util'
import { floatButtonStyle, iconWrapperStyle } from './style.css'

export class ShadeFloatingButton extends HTMLElement {
	private iconWrapper = document.createElement('span')

	constructor() {
		super()
		this.iconWrapper.classList.add(iconWrapperStyle)
	}

	connectedCallback() {
		this.classList.add(floatButtonStyle)

		if (this.hasAttribute('icon')) {
			this.drawIcon()
		}

		if (this.hasAttribute('text-color')) {
			this.setTextColor()
		}

		if (this.hasAttribute('background-color')) {
			this.setBackgroundColor()
		}
	}

	async drawIcon() {
		const iconHref = this.getAttribute('icon')
		if (!iconHref) return

		const iconFetch = await fetch(iconHref)
		const iconSource = await iconFetch.text()

		this.iconWrapper.innerHTML = iconSource
		this.insertBefore(this.iconWrapper, this.firstChild)

		this.setIconSize()
	}

	setIconSize() {
		const iconWrapper = this.iconWrapper
		if (!iconWrapper) return

		const iconWidth = this.getAttribute('icon-width')
		const iconHeight = this.getAttribute('icon-height')

		if (iconWidth) {
			iconWrapper.style.setProperty(
				'--sh-floating-button-icon-width',
				iconWidth,
			)
		}

		if (iconHeight) {
			iconWrapper.style.setProperty(
				'--sh-floating-button-icon-height',
				iconHeight,
			)
		}
	}

	setTextColor() {
		const textColor = this.getAttribute('text-color')
		if (!textColor) return

		this.style.setProperty('--sh-floating-button-text-color', textColor)
	}

	setBackgroundColor() {
		const backgroundColor = this.getAttribute('background-color')
		if (!backgroundColor) return

		this.style.setProperty(
			'--sh-floating-button-background-color',
			backgroundColor,
		)
	}
}

const name = 'sh-floating-button'
DefineOnce.define(name, ShadeFloatingButton)

export default name

export interface ShadeFloatingButtonProps {
	icon?: string
	'icon-width'?: string
	'icon-height'?: string
	'text-color'?: string
	'background-color'?: string
	children?: any
}
