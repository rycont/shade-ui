import CaneldarIcon from '../../icons/Calendar.svg?raw'
import PasswordIcon from '../../icons/Password.svg?raw'
import BlockedIcon from '../../icons/Blocked.svg?raw'
import SearchIcon from '../../icons/Search.svg?raw'
import EmailIcon from '../../icons/Email.svg?raw'
import TextIcon from '../../icons/Text.svg?raw'
import LinkIcon from '../../icons/Link.svg?raw'
import OneIcon from '../../icons/One.svg?raw'

import { DefineOnce, passAttributes } from '../../util'

import { smallText } from '../typo/style.css'
import {
	inputStyle,
	inputTypeIconStyle,
	inputTypeWrapperStyle,
	wrapperStyle,
} from './style.css'

const DEFAULT_INPUT_TYPE = 'text'

const ICONS_BY_TYPE: Record<string, string> = {
	text: TextIcon,
	password: PasswordIcon,
	date: CaneldarIcon,
	'datetime-local': CaneldarIcon,
	email: EmailIcon,
	number: OneIcon,
	disabled: BlockedIcon,
	search: SearchIcon,
	url: LinkIcon,
}

class ShadeInput extends HTMLElement {
	static passingProps = [
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
		'required',
		'maxlength',
		'minlength',
		'multiple',
		'size',
		'accept',
		'autocomplete',
		'checked',
		'form',
		'formaction',
		'formenctype',
		'formmethod',
		'formnovalidate',
		'formtarget',
		'height',
		'width',
	]
	static observedAttributes = ShadeInput.passingProps

	input?: HTMLInputElement
	inputTypeWrapper?: HTMLSpanElement

	constructor() {
		super()
	}

	connectedCallback() {
		this.input = this.buildInput()
		this.classList.add(wrapperStyle)

		const inputTypeWrapper = this.buildIcon()
		this.inputTypeWrapper = inputTypeWrapper

		passAttributes(this.input, this, ShadeInput.passingProps)

		this.appendChild(inputTypeWrapper)

		if (this.getAttribute('autofocus') !== null) {
			this.input.focus()
		}
	}

	buildInput() {
		if (this.input) {
			return this.input
		}

		const input = document.createElement('input')

		input.classList.add(inputStyle, smallText)
		this.appendChild(input)

		return input
	}

	buildIcon() {
		if (this.inputTypeWrapper) {
			return this.inputTypeWrapper
		}

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

	attributeChangedCallback(
		name: string,
		_oldValue: string,
		newValue: string,
	) {
		if (this.input && ShadeInput.passingProps.includes(name)) {
			this.input.setAttribute(name, newValue)
		}
	}
}

const name = 'sh-input'
DefineOnce.define(name, ShadeInput)

export default name
export interface ShadeInputProps {
	placeholder?: string
	type?: string
	value?: string
	autofocus?: boolean
	disabled?: boolean
	max?: string
	min?: string
	list?: string
	readonly?: boolean
	step?: string
	pattern?: string
	inputmode?: string
	name?: string
	icon?: string
	children?: any
	required?: boolean
	maxlength?: number
	minlength?: number
	multiple?: boolean
	size?: number
	accept?: string
	autocomplete?: string
	checked?: boolean
	form?: string
	formaction?: string
	formenctype?: string
	formmethod?: string
	formnovalidate?: boolean
	formtarget?: string
	height?: number
	width?: number
}
