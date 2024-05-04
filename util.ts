export function passAttributes(
	target: HTMLElement,
	origin: HTMLElement,
	attributes: string[],
) {
	for (const attribute of attributes) {
		const value = origin.getAttribute(attribute)

		if (value !== null) {
			target.setAttribute(attribute, value)
		}
	}
}

export class DefineOnce {
	private static defined = new Set<string>()

	static define(tagName: string, element: CustomElementConstructor) {
		if (!this.defined.has(tagName)) {
			customElements.define(tagName, element)
			this.defined.add(tagName)
		}
	}
}

export function defaultProps(
	element: HTMLElement,
	attributes: Record<string, string>,
) {
	for (const key in attributes) {
		const value = attributes[key]

		if (!element.hasAttribute(key)) {
			element.setAttribute(key, value)
		}
	}
}
