import React from 'react';
import {Flex} from "@chakra-ui/react";
import Navigation from "../Navigation/Navigation";

type SideMenuProps = {
	active: boolean,
}

const SideMenu: React.FC<SideMenuProps> = ({active}) =>
	<Flex as="nav" position="fixed" zIndex="1000" top={{"2lg": "14px", base: "100px"}}
				left={{"2lg": "0", base: `${active ? "0" : "-100%"}`}}
				width={{"2lg": "118px", base: "95%"}}
				height={{"2lg": "full", base: "80px"}}
				backgroundColor="purple"
				direction={{"2lg": "column", base: "row"}}
				color="white" fontSize="2xl"
				overflow="auto"
				borderTopLeftRadius={{"2lg": "3xl", base: "none"}}
				borderBottomRightRadius={{"2lg": "none", base: "3xl"}}
				borderTopRightRadius="3xl"
				pt={{"2lg": "60px", base: "0px"}} pb={{"2lg": "30px", base: "0px"}} pr={{"2lg": "0", base: "15px"}}
				transition="left 0.5s ease 0s" sx={{'::-webkit-scrollbar': {width: 0, height: 0}}}>
		<Navigation/>
	</Flex>

export default SideMenu