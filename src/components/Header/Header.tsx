import React, {useEffect, useState} from "react";
import {
	Flex,
	Input,
	InputGroup,
	InputLeftElement,
	Menu,
	MenuButton,
	MenuList,
	Avatar,
	Link,
	Box
} from "@chakra-ui/react";
import {Search} from "../../icons/Search";
import {Settings} from "../../icons/Settings";
import {Bell} from "../../icons/Bell";
import {Arrow} from "../../icons/Arrow";

import userLogo from '../../assets/images/members/scarlett.webp';
import SideMenu from "../SideMenu/SideMenu";
import BurgerIcon from "../BurgerIcon/BurgerIcon";

const Header: React.FC = () => {
	const [active, setActive] = useState<boolean>(false);

	const onBurgerMenuClick = () => {
		setActive(!active);
		document.body.classList.toggle('lock');
	}

	return (
		<>
			<SideMenu active={active}/>
			<Flex as="header" pt="36px" pl={{"2lg": "172px", base: "20px"}} pr={{"2lg": "31px", base: "20px"}}
						justify="space-between" align="center" gap="5">
				<Flex align="center" gap="30px" ml={"15px"}>
					<BurgerIcon active={active} onClick={onBurgerMenuClick}/>
					<InputGroup maxWidth={{"2lg": "542px", md: "400px", sm: "200px"}}>
						<InputLeftElement pointerEvents="none" children={<Search boxSize={'14px'}/>} height="100%" width="auto"
															left="23px"
						/>
						<Input placeholder="Search" backgroundColor="gray.300" border="none" borderRadius="15px" height="50px"
									 pl="52px" fontSize="sm" lineHeight="4" letterSpacing="0.14px" _placeholder={{}}
						/>
					</InputGroup>
				</Flex>
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
		</>
	);
}

export default Header;