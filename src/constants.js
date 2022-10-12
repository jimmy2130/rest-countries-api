export const COLORS = {
	darkModeElements: 'hsl(209deg 23% 22%)',
	darkModeBackground: 'hsl(207deg 26% 17%)',
	darkModeText: 'hsl(0deg 0% 100%)',
	darkModeInput: 'hsl(0deg 0% 100%)',
	lightModeElements: 'hsl(0deg 0% 100%)',
	lightModeBackground: 'hsl(0deg 0% 98%)',
	lightModeText: 'hsl(200deg 15% 8%)',
	lightModeInput: 'hsl(0deg 0% 52%)',
};

export const BREAKPOINTS = {
	tabletMax: 768,
  phoneMax: 587,
};

export const QUERIES = {
	'tabletAndDown': `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  'phoneAndDown': `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`,
};

export const FAMILIES = {
	sansSerif: '"Nunito Sans", sans-serif',
};