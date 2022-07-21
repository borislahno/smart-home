import React from "react";
import {Box} from "@chakra-ui/react";

type BurgerIconProps = {
	active: boolean,
	onClick: () => void,
}

const BurgerIcon: React.FC<BurgerIconProps> = ({active, onClick}) => {

	let activeStyle = {};

	if (active) {
		activeStyle = {
			"::before": {
				transform: "rotate(-45deg)",
				bottom: "13px",
			},
			"::after": {
				transform: "rotate(45deg)",
				top: "13px",
			}
		}
	}

	return (
		<Box onClick={onClick} display={{"2lg": "none", base: "block"}} position="relative" minWidth="40px" height="28px"
				 cursor="pointer" transition="all 0.5s ease 0s" _after={{top: "0"}} _before={{bottom: "0"}}
				 sx={{
					 "::before, ::after": {
						 content: '""',
						 position: "absolute",
						 left: "0",
						 width: "100%",
						 height: "3px",
						 bgColor: "purple",
						 transition: "all 0.3s ease 0s"
					 },
					 ...activeStyle
				 }}>
			<Box as="span" display={`${active ? "none" : "inline"}`} position="absolute" top="13px" width="100%" height="3px"
					 bgColor="purple"
					 transition="all 0.3s ease 0s"/>
		</Box>);
}

export default BurgerIcon;