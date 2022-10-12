import { createGlobalStyle } from 'styled-components/macro';
import { COLORS, FAMILIES } from '../../constants';

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
  font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

#root {
  /*
    Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will
    float above the app.
  */
  isolation: isolate;
}

// html {  
//  Silence the warning about missing Reach Dialog styles  
//  --reach-dialog: 1;
// }

html {
	--color-dark-elements: ${COLORS.darkModeElements};
	--color-dark-background: ${COLORS.darkModeBackground};
	--color-dark-text: ${COLORS.darkModeText};
	--color-dark-input: ${COLORS.darkModeInput};
	--color-light-elements: ${COLORS.lightModeElements};
	--color-light-background: ${COLORS.lightModeBackground};
	--color-light-text: ${COLORS.lightModeText};
	--color-light-input: ${COLORS.lightModeInput};
}

body {
	font-family: ${FAMILIES.sansSerif};
}

html, body, #root {
  height: 100%;
}
`;

export default GlobalStyles;
