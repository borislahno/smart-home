import {ComponentStyleConfig, theme} from "@chakra-ui/react";

export const Switch: ComponentStyleConfig = {
	baseStyle: {
		thumb: {
			transition: "all .5s",
			width: '14.6px',
			height: '14.6px',
			_checked: {
				transform: 'translateX(85%)'
			}
		},
		track: {
			alignItems: 'center',
			padding: '0',
			width: '28px',
			height: '16px',
			borderRadius: '28px',
		}
	},
	variants: {
		ordinary: {
			thumb: {
				boxShadow: '0px 1px 2px rgba(101, 101, 101, 0.332195)',
			},
			track: {
				border: '1px solid rgba(230, 229, 242, 0.811762)',
				bg: 'gray.100',
				_checked: {
					bg: 'purple'
				},
			}
		},
		purple: {
			thumb: {
				boxShadow: '0px 1px 2px rgba(72, 72, 72, 0.422203)',
				_checked: {
					bgColor: "purple"
				}
			},
			track: {
				boxShadow: "0px 1px 5px rgba(58, 33, 217, 0.499508)",
				_checked: {
					bgColor: "white",
				}
			}
		},
		yellow: {
			thumb: {
				boxShadow: '0px 1px 2px rgba(72, 72, 72, 0.422203)',
				_checked: {
					bgColor: "yellow.500"
				}
			},
			track: {
				boxShadow: "0px 1px 5px rgba(58, 33, 217, 0.499508)",
				_checked: {
					bgColor: "white",
				}
			}
		},
		orange: {
			thumb: {
				boxShadow: '0px 1px 2px rgba(72, 72, 72, 0.422203)',
				_checked: {
					bgColor: "orange.500"
				}
			},
			track: {
				boxShadow: "0px 1px 5px rgba(239, 104, 48, 0.558785)",
				_checked: {
					bgColor: "white",
				}
			}
		},
		turquoise: {
			thumb: {
				boxShadow: '0px 1px 2px rgba(72, 72, 72, 0.422203)',
				_checked: {
					bgColor: "turquoise.500"
				}
			},
			track: {
				boxShadow: "0px 1px 5px rgba(2, 137, 172, 0.554278)",
				_checked: {
					bgColor: "white",
				}
			}
		},
	},
	defaultProps: {
		variant: "ordinary",
	}
}