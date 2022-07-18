import React from 'react';
import {Flex, Link} from "@chakra-ui/react";
import Navigation from "../Navigation/Navigation";

const SideMenu: React.FC = () =>
	<Flex as="nav" position="fixed" top="14px" width="118px" height="full" backgroundColor="purple" direction="column"
				color="white" fontSize="2xl" overflow="auto" borderTopLeftRadius="3xl"
				borderTopRightRadius="3xl" pt="60px" pb="30px" sx={{'::-webkit-scrollbar': {width: 0, height: 0}}}>
		<Navigation/>
	</Flex>

export default SideMenu