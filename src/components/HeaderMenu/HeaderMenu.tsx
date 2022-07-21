import React from 'react';
import {Avatar, Flex, Link, Menu, MenuButton, MenuItem, MenuList, Text} from "@chakra-ui/react";
import userLogo from "../../assets/images/members/scarlett.webp";
import {Arrow} from "../../icons/Arrow";
import {Settings} from "../../icons/Settings";
import {Bell} from "../../icons/Bell";

const HeaderMenu:React.FC = () =>
	<Menu>
		<MenuButton _hover={{opacity: .8}}>
			<Flex gap="11px" align="center" fontWeight="600" lineHeight="1.5rem" letterSpacing="0.7px">
				<Avatar name="Scarlett" src={userLogo} backgroundColor="transparent" boxSize="38px"/>
				<Text display={{md: "block", base: "none"}}>Scarlett</Text>
				<Arrow color="black.800"/>
			</Flex>
		</MenuButton>
		<MenuList color="gray.400" display={{"3sm": "none", base: "block"}}>
			<MenuItem>
				<Link href="#" display="flex" alignItems="center" gap="10px">
					<Settings fontSize="2xl" focusable/>
					<Text>Settings</Text>
				</Link>
			</MenuItem>
			<MenuItem>
				<Link href="#" display="flex" alignItems="center" gap="10px">
					<Bell fontSize="2xl" focusable cursor="pointer"/>
					<Text>Notification</Text>
				</Link>
			</MenuItem>
		</MenuList>
	</Menu>

export default HeaderMenu;