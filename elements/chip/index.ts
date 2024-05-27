import { DefineOnce } from '../../util'
import { smallText } from '../typo/style.css'
import { chipStyle } from './style.css'

export class ShadeChip extends HTMLElement {
	connectedCallback() {
		this.classList.add(chipStyle, smallText)
	}
}

const name = 'sh-chip'
export default name
DefineOnce.define(name, ShadeChip)

export interface ShadeChipProps {
	children?: any
}
