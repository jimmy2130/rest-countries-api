export const COLORS = {
	light: {
		elements: 'hsl(0deg 0% 100%)',
		background: 'hsl(0deg 0% 98%)',
		text: 'hsl(200deg 15% 8%)',
		input: 'hsl(0deg 0% 52%)',
	},
	dark: {
		elements: 'hsl(209deg 23% 22%)',
		background: 'hsl(207deg 26% 17%)',
		text: 'hsl(0deg 0% 100%)',
		input: 'hsl(0deg 0% 100%)',
	}
};

export const BREAKPOINTS = {
	tabletMax: 1000,
  phoneMax: 600,
};

export const QUERIES = {
	'tabletAndDown': `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  'phoneAndDown': `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`,
};

export const FAMILIES = {
	sansSerif: '"Nunito Sans", sans-serif',
};