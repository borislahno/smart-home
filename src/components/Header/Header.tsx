import React, {useState} from "react";
import {Circle, Flex, Link} from "@chakra-ui/react";
import {Settings} from "../../icons/Settings";
import {Bell} from "../../icons/Bell";
import SideMenu from "../SideMenu/SideMenu";
import BurgerIcon from "../BurgerIcon/BurgerIcon";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import SearchInput from "../SearchInput/SearchInput";

const Header: React.FC = () => {
	const [active, setActive] = useState<boolean>(false);

	const onBurgerMenuClick = () => {
		setActive(!active);
		document.body.classList.toggle('lock');
	}

	return (
		<>
			<SideMenu active={active}/>
			<Flex as="header" maxWidth="1268px" pt="36px" ml={{"2lg": "172px", base: "20px"}}
						pr={{"2lg": "31px", base: "20px"}} justify="space-between" align="center" gap="10px">
				<Flex align="center" gap={{"2sm": "30px", base: "15px"}}>
					<BurgerIcon active={active} onClick={onBurgerMenuClick}/>
					<SearchInput/>
				</Flex>
				<Flex color="black.800" gap="8" align="center">
					<Link href="#" display={{"3sm": "block", base: "none"}} _hover={{color: "purple"}}>
						<Settings fontSize="2xl" focusable/>
					</Link>
					<Link href="#" position="relative" display={{"3sm": "block", base: "none"}} _hover={{color: "purple"}}>
						<Bell fontSize="2xl" focusable cursor="pointer"/>
						<Circle position="absolute" right="3px" top="3px" size="7px" bgColor="purple" border="1px solid white"/>
					</Link>
					<HeaderMenu/>
				</Flex>
			</Flex>
		</>
	);
}

export default Header;