import React from 'react';
import {Flex} from "@chakra-ui/react";
import Navigation from "../Navigation/Navigation";

type SideMenuProps = {
	active: boolean,
}

const SideMenu: React.FC<SideMenuProps> = ({active}) =>
	<Flex as="nav" position="fixed" top={{"2lg": "14px", base: "100px"}}
				left={{"2lg": "0", base: `${active ? "0" : "-30%"}`}}
				width="118px" height="full" backgroundColor="purple" direction="column" color="white" fontSize="2xl"
				overflow="auto" borderTopLeftRadius="3xl" borderTopRightRadius="3xl" pt="60px" pb="30px"
				transition="left 0.5s ease 0s"
				sx={{'::-webkit-scrollbar': {width: 0, height: 0}}}>
		<Navigation/>
	</Flex>

export default SideMenu