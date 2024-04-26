export function defineCSS(rules) {
	const styles = Object.entries(rules).map(([selector, body]) => {
		return `${selector} {
${ruleBodyToString(body)}
}`
	})

	const stylesheet = new CSSStyleSheet()
	
	for(const style of styles) {
		stylesheet.insertRule(style)
	}

	document.adoptedStyleSheets.push(stylesheet)
}

function ruleBodyToString(body) {
	return Object.entries(body)
		.map(row => bodyRowToString(...row))
		.join('\n')
}

function bodyRowToString(property, value) {
return `	${camelToSnake(property)}: ${value};`
}

function camelToSnake(value) {
	return value.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}
