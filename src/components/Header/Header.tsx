import React from "react";
import {
	Box,
	Flex,
	Input,
	InputGroup,
	InputLeftElement,
	Menu,
	MenuButton,
	MenuList,
	Avatar,
	Link,
} from "@chakra-ui/react";
import {Search} from "../../icons/Search";
import {Settings} from "../../icons/Settings";
import {Bell} from "../../icons/Bell";
import {Arrow} from "../../icons/Arrow";

import userLogo from '../../assets/images/members/scarlett.webp';

const Header: React.FC = () =>
	<Flex as="header" pt="36px" pl="172px" pr="31px" justify="space-between" align="center" gap="5">
		<InputGroup maxWidth="542px">
			<InputLeftElement pointerEvents="none" children={<Search boxSize={'14px'}/>} height="100%" width="auto"
				left="23px"
			/>
			<Input placeholder="Search" backgroundColor="gray.300" border="none" borderRadius="15px" height="50px"
				pl="52px" fontSize="sm" lineHeight="4" letterSpacing="0.14px" _placeholder={{}}
			/>
		</InputGroup>
		<Flex color="black.800" gap="8" align="center">
			<Link href="#" _hover={{color: "purple"}}>
				<Settings fontSize="2xl" focusable/>
			</Link>
			<Link href="#" _hover={{color: "purple"}}>
				<Bell fontSize="2xl" focusable cursor="pointer"/>
			</Link>
			<Menu>
				<MenuButton _hover={{opacity: .8}}>
					<Flex gap="11px" align="center" fontWeight="600" lineHeight="1.5rem" letterSpacing="0.7px">
						<Avatar name="Scarlett" src={userLogo} backgroundColor="transparent" boxSize="38px"/>
						Scarlett
						<Arrow color="black.800"/>
					</Flex>
				</MenuButton>
				<MenuList></MenuList>
			</Menu>
		</Flex>
	</Flex>

export default Header;