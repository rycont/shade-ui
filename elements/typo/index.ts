import { DefineOnce } from '../../util'
import { smallText, subtitle, title } from './style.css'

class ShadeTitle extends HTMLElement {
	constructor() {
		super()
		this.classList.add(title)
	}
}
export const TITLE = 'sh-title'
DefineOnce.define(TITLE, ShadeTitle)

class ShadeSmallText extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		this.classList.add(smallText)
	}
}
export const SMALL_TEXT = 'sh-small-text'
DefineOnce.define(SMALL_TEXT, ShadeSmallText)

class ShadeSubtitle extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		this.classList.add(subtitle)
	}
}
export const SUBTITLE = 'sh-subtitle'
DefineOnce.define(SUBTITLE, ShadeSubtitle)
