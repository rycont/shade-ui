export function passAttributes(
	target: HTMLElement,
	origin: HTMLElement,
	attributes: string[],
) {
	for (const attribute of attributes) {
		const value = origin.getAttribute(attribute)
		if (value) {
			target.setAttribute(attribute, value)
		}
	}
}
