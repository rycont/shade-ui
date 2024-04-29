import { DefineOnce } from '../../util'
import { container } from './style.css'

class ShadeContainerNarrow extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		this.classList.add(container)
	}
}

DefineOnce.define('sh-container-narrow', ShadeContainerNarrow)
