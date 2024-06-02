import { COLORS } from '../../colors'
import { DefineOnce } from '../../util'
import { dividerStyle } from './style.css'

class ShadeDivider extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		this.classList.add(dividerStyle)
	}
}

const NAME = 'sh-divider'
DefineOnce.define(NAME, ShadeDivider)
export default NAME

export interface ShadeDividerProps {
	color?: keyof typeof COLORS
}
