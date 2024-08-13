import { DefineOnce } from '../../util'
import { tabStyle } from './style.css'

class ShadeTab extends HTMLElement {
	connectedCallback() {
		this.classList.add(tabStyle)
	}
}

const NAME = 'sh-tab'

export default NAME
DefineOnce.define(NAME, ShadeTab)
