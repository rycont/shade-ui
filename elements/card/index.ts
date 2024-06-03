import { popAppearProgressiveStyle } from '../../theme.css'
import { DefineOnce } from '../../util'
import { cardStyle } from './style.css'

class ShadeCard extends HTMLElement {
	static observedAttributes = ['p', 'g']

	constructor() {
		super()
	}

	connectedCallback() {
		this.setAttribute('role', 'card')
		this.classList.add(cardStyle, popAppearProgressiveStyle)
	}

	attributeChangedCallback(
		name: string,
		oldValue: string | null,
		newValue: string | null,
	) {
		if (oldValue === newValue) return

		const value = newValue === null ? '0rem' : +newValue + 'rem'

		if (name === 'p') {
			this.style.setProperty('padding', value)
		}
		if (name === 'g') {
			this.style.setProperty('gap', value)
		}
	}
}

const NAME = 'sh-card' as const
DefineOnce.define(NAME, ShadeCard)
export default NAME

export interface ShadeCardProps {
	p?: number
	g?: number
	children?: any
}
