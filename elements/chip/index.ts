import { DefineOnce } from '../../util'
import { smallText } from '../typo/style.css'
import { chipStyle } from './style.css'

export class ShadeChip extends HTMLElement {
	connectedCallback() {
		this.classList.add(chipStyle, smallText)
	}
}

DefineOnce.define('sh-chip', ShadeChip)
