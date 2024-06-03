import { DefineOnce } from '../../util'
import { container } from './style.css'

export class ShadeContainerNarrow extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		this.classList.add(container)
	}
}

const name = 'sh-container-narrow'
DefineOnce.define(name, ShadeContainerNarrow)

export default name

export interface ShadeContainerNarrowProps {
	'fit-vh'?: boolean
}
