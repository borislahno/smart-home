export const Device = {
	parts: ['device', 'head', 'footer'],
	baseStyle: {
		device: {
			bgColor: "white",
			borderRadius: "25px",
			border: "1px solid rgba(230, 229, 242, 0.811762)",
			px: "20px",
			py: "22px",
			color: "gray.400",
			transition: "all 0.3s",
			cursor: "pointer",
			_hover: {
				boxShadow: "0px 6px 18px rgba(126, 119, 239, 0.808239)",
			}
		},
		head: {
			fontWeight: "bold",
			fontSize: "xs",
			lineHeight: "1.125rem",
			color: "black.800",
			mb: "15px",
		},
		footer: {
			fontWeight: "bold",
			fontSize: "sm",
			lineHeight: "1.125rem",
			mt: "12px",
		}
	},
	sizes: {
		md: {
			device: {
				pl: "20px",
				pr: "14px",
				pt: "28px",
				pb: "19px",
			},
			head: {
				fontWeight: "semibold",
				fontSize: "xs",
				lineHeight: "4",
			},
			footer: {
				fontWeight: "bold",
				fontSize: "md",
				lineHeight: "1.125rem",
				mt: "18px",
			}
		}
	},
	variants: {
		checked: {
			device: {
				color: 'purple',
			}
		},
		active: {
			device: {
				bgColor: "purple",
				color: 'white',
				boxShadow: "0px 6px 18px rgba(126, 119, 239, 0.808239)",
			},
			head: {
				color: 'white',
			},
		},
		purple: {
			device: {
				bgColor: "purple",
				color: "white",
			},
			head: {
				color: "white",
			}
		},
		yellow: {
			device: {
				bgColor: "yellow.500",
				color: "white",
			},
			head: {
				color: "white",
			}
		},
		orange: {
			device: {
				bgColor: "orange.500",
				color: "white",
			},
			head: {
				color: "white",
			}
		},
		turquoise: {
			device: {
				bgColor: "turquoise.500",
				color: "white",
			},
			head: {
				color: "white",
			}
		}
	},
	defaultProps: {
	}
}