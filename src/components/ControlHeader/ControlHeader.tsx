import React from "react";
import {Box, Button, Flex, Heading, Menu, MenuButton, MenuList, Text} from "@chakra-ui/react";
import {Humidity} from "../../icons/Humidity";
import {Thermometer} from "../../icons/Thermometer";
import {Arrow} from "../../icons/Arrow";

const ControlHeader: React.FC = () =>
	<Flex justify="space-between" align="center" gap='10px' wrap="wrap">
		<Heading as="h2" fontSize="2xl" fontWeight="700" lineHeight="1.875rem" letterSpacing="0.06rem" color="black.800">
			Scarlett’s Home
		</Heading>
		<Flex align="center" gap={{xl:"29px",base:"15px"}}>
			<Flex align="center" gap="5px">
				<Humidity fontSize="1rem"/>
				<Text as="span" fontFamily="Lato" fontSize="0.94rem" fontWeight="700" lineHeight="1.125rem" color="black.800">
					35%
				</Text>
			</Flex>
			<Flex align="center" gap={"3px"}>
				<Thermometer fontSize="1.2rem"/>
				<Text as="span" fontFamily="Lato" fontSize="0.94rem" fontWeight="700" lineHeight="1.125rem" color="black.800">
					15&#176;C
				</Text>
			</Flex>
			<Menu>
				<MenuButton as={Button} display="flex" justifyContent="space-between" bgColor="gray.300" width="190px"
										height="36px" borderRadius="11px" fontSize="sm" fontWeight="600" lineHeight="1.125rem"
										px="14px" color="black.800" sx={{'span': {flex: "0 0 auto"}}}
										rightIcon={<Arrow/>}>
					Living Room
				</MenuButton>
			</Menu>
		</Flex>
	</Flex>

export default ControlHeader;