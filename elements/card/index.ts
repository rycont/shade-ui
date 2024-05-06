import { DefineOnce } from '../../util'
import { cardStyle } from './style.css'

class ShadeCard extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		this.setAttribute('role', 'card')
		this.classList.add(cardStyle)
	}
}

const NAME = 'sh-card'
DefineOnce.define(NAME, ShadeCard)
export default NAME
