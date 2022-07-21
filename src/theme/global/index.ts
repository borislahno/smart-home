export const styles = {
	global: {
		'*': {
			margin: 0,
			padding: 0,
			border: 0,
		},

		'*, *::before, *::after': {
			MozBoxSizing: 'border-box',
			WebkitBoxSizing: 'border-box',
			boxSizing: 'border-box',
		},
		':focus, :active': {
			outline: 'none',
		},
		'a:focus, a:active': {
			outline: 'none',
		},
		'nav, header, footer, aside': {
			display: 'block',
		},
		'html, body': {
			height: '100vh',
			width: '100%',
			minWidth: '375px',
			fontFamily: `Mulish`,
			backgroundColor: 'gray.50',
			color: 'black.800',
			'@media(max-width: 769px)': {
				fontSize: '14px',
			}
		},
		'.lock': {
			overflow: "hidden",
			'@media(min-width: 1200px)': {
				overflow: "auto",
			}
		},
		'input, button, textarea': {
			fontFamily: 'inherit'
		},
		'input::-ms-clear': {
			display: 'none'
		},
		'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
			WebkitAppearance: 'none',
			margin: 0
		},
		'input[type=number]': {
			MozAppearance: 'textfield',
		},
		button: {
			cursor: 'pointer',
		},
		'button::-moz-focus-inner': {
			padding: 0,
			border: 0
		},
		'a, a:visited, a:hover': {
			textDecoration: 'none'
		},
		img: {
			verticalAlign: 'top',
		},
		'ul li': {
			listStyle: 'none'
		},
		'h1, h2, h3, h4, h5, h6': {
			fontSize: 'inherit'
		}
	}
}