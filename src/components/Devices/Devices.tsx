import React from "react";
import {Box, Flex, Text, Menu, MenuButton, MenuList, Button} from "@chakra-ui/react";
import {Refridgerator} from "../../icons/Refridgerator";
import Device from "../Device/Device";
import {Router} from "../../icons/Router";
import {MusicSystem} from "../../icons/MusicSystem";
import {Lamp} from "../../icons/Lamp";
import InformationHead from "../InformationHead/InformationHead";
import {Arrow} from "../../icons/Arrow";

const Devices: React.FC = () =>
	<Box>
		<InformationHead title="My Devices" menu={
			<Menu matchWidth={true}>
				<MenuButton as={Button} rightIcon={<Arrow/>} display="inline-flex" justifyContent="space-between" width="82px"
										height="36px" borderRadius="10px"
										bgColor="gray.300" fontWeight="semibold" fontSize="sm" lineHeight="1.125rem" px="14px" py="9px"
										mr="20px" sx={{'span': {flex: "0 0 auto"}}}>
					ON
				</MenuButton>
			</Menu>
		}/>
		<Flex wrap="wrap" gap="15px" justify="center">
			<Device name="Refridgerator" icon={<Refridgerator width="18px" height="29px"/>}
							flex={{lg: '0 1 47%', md: "0 1 100%", "2sm": '0 1 48%', base: "0 1 70%"}} type="switchHead" size="md"
							variant="purple"
							switchVariant="purple"/>
			<Device name="Router" icon={<Router width="26px" height="23px"/>}
							flex={{lg: '0 1 47%', md: "0 1 100%", "2sm": '0 1 48%', base: "0 1 70%"}} type="switchHead" size="md"
							variant="yellow"
							switchVariant="yellow"/>
			<Device name="Music System" icon={<MusicSystem boxSize="25px"/>}
							flex={{lg: '0 1 47%', md: "0 1 100%", "2sm": '0 1 48%', base: "0 1 70%"}} type="switchHead" size="md"
							variant="orange"
							switchVariant="orange"/>
			<Device name="Lamps" icon={<Lamp width="23px" height="25px"/>}
							flex={{lg: '0 1 47%', md: "0 1 100%", "2sm": '0 1 48%', base: "0 1 70%"}} type="switchHead" size="md"
							variant="turquoise"
							switchVariant="turquoise"/>
		</Flex>
	</Box>

export default Devices;