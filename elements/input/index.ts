import TextIcon from '../../icons/Text.svg?raw'
import CaneldarIcon from '../../icons/Calendar.svg?raw'
import PasswordIcon from '../../icons/Password.svg?raw'
import EmailIcon from '../../icons/Email.svg?raw'
import OneIcon from '../../icons/One.svg?raw'
import BlockedIcon from '../../icons/Blocked.svg?raw'
import { DefineOnce, passAttributes } from '../../util'

import { smallText } from '../typo/style.css'
import {
	inputStyle,
	inputTypeIconStyle,
	inputTypeWrapperStyle,
	wrapperStyle,
} from './style.css'

const DEFAULT_INPUT_TYPE = 'text'

const ICONS_BY_TYPE = {
	text: TextIcon,
	password: PasswordIcon,
	date: CaneldarIcon,
	'datetime-local': CaneldarIcon,
	email: EmailIcon,
	number: OneIcon,
	disabled: BlockedIcon,
}

class ShadeInput extends HTMLElement {
	input = this.buildInput()

	constructor() {
		super()
	}

	connectedCallback() {
		this.classList.add(wrapperStyle)

		const inputTypeWrapper = this.buildIcon()

		this.appendChild(inputTypeWrapper)

		const type = this.getAttribute('type')

		if (type && ['datetime-local', 'date'].includes(type)) {
			this.input.addEventListener('focus', () => {
				this.input.showPicker()
			})
		}

		passAttributes(this.input, this, [
			'placeholder',
			'type',
			'value',
			'autofocus',
			'disabled',
			'max',
			'min',
			'list',
			'readonly',
			'step',
			'pattern',
			'inputmode',
			'name',
		])
	}

	buildInput() {
		const input = document.createElement('input')

		input.classList.add(inputStyle, smallText)
		this.appendChild(input)

		return input
	}

	buildIcon() {
		const inputTypeWrapper = document.createElement('span')

		const type = this.getIconType()
		const icon = ICONS_BY_TYPE[type] || ICONS_BY_TYPE[DEFAULT_INPUT_TYPE]

		inputTypeWrapper.innerHTML = icon
		inputTypeWrapper.classList.add(inputTypeWrapperStyle)

		const inputTypeIcon = inputTypeWrapper.firstElementChild
		inputTypeIcon?.classList.add(inputTypeIconStyle)

		return inputTypeWrapper
	}

	getIconType() {
		const disabled = this.getAttribute('disabled') !== null

		if (disabled) {
			return 'disabled'
		}

		return this.getAttribute('type') || DEFAULT_INPUT_TYPE
	}
}

DefineOnce.define('sh-input', ShadeInput)
