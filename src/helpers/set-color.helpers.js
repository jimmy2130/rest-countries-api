import { COLORS } from '../constants'

export function setColor() {
	const root = window.document.documentElement
	const stickyValue = window.localStorage.getItem("colorMode")
	const colorMode = stickyValue === null ? 'light' : stickyValue
	root.style.setProperty(
		'--color-elements',
		colorMode === 'light' ? COLORS.light.elements : COLORS.dark.elements
	)
	root.style.setProperty(
		'--color-background',
		colorMode === 'light' ? COLORS.light.background : COLORS.dark.background
	)
	root.style.setProperty(
		'--color-text',
		colorMode === 'light' ? COLORS.light.text : COLORS.dark.text
	)
	root.style.setProperty(
		'--color-input',
		colorMode === 'light' ? COLORS.light.input : COLORS.dark.input
	)
}