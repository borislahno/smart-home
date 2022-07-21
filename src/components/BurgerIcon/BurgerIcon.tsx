import React from "react";
import {Box} from "@chakra-ui/react";

type BurgerIconProps = {
	active: boolean,
	onClick: () => void,
}

const BurgerIcon: React.FC<BurgerIconProps> = ({active, onClick}) => {
	return (
		<Box onClick={onClick} display={{"2lg": "none", base: "block"}} position="relative" minWidth="50px" height="28px"
				 cursor="pointer" _after={{top: "0"}} _before={{bottom: "0"}} sx={{
			"::before, ::after": {
				content: '""',
				position: "absolute",
				left: "0",
				width: "100%",
				height: "3px",
				bgColor: "purple",
				transition: "all 0.3s ease 0s"
			}
		}}>
			<Box as="span" position="absolute" top="13px" width="100%" height="3px" bgColor="purple"
					 transition="all 0.3s ease 0s"/>
		</Box>);
}

export default BurgerIcon;