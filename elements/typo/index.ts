import { DefineOnce } from '../../util'
import { smallText, subtitle, textContent, title } from './style.css'

export const TITLE = createClassedComponent('sh-title', title)
export const SMALL_TEXT = createClassedComponent('sh-small-text', smallText)
export const SUBTITLE = createClassedComponent('sh-subtitle', subtitle)
export const TEXT_CONTENT = createClassedComponent(
	'sh-text_content',
	textContent,
)

function createClassedComponent(name: string, className: string) {
	DefineOnce.define(
		name,
		class extends HTMLElement {
			constructor() {
				super()
			}

			connectedCallback() {
				this.classList.add(className)
			}
		},
	)

	return name
}
