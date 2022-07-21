import React from "react";
import {Box, Flex} from "@chakra-ui/react";
import ControlHeader from "../ControlHeader/ControlHeader";
import {Refridgerator} from "../../icons/Refridgerator";
import {Light} from "../../icons/Light";
import {Lightning} from "../../icons/Lightning";
import {Conditioner} from "../../icons/Conditioner";
import Device from "../Device/Device";


const HomeControl: React.FC = () =>
	<Box>
		<ControlHeader/>
		<Flex mt="24px" wrap={{xl: "nowrap", base: "wrap"}} justify="space-between" gap="10px">
			<Device name="Refridgerator" icon={<Refridgerator width="18px" height="29px"/>}
							flex={{xl: "1 1 163px", md: "0 1 48%", base: "0 1 48%"}}/>
			<Device name="Temperature" icon={<Lightning width="15px" height="29px"/>}
							flex={{xl: "1 1 163px", md: "0 1 48%", base: "0 1 48%"}} variant="active"/>
			<Device name="Air Conditioner" icon={<Conditioner width="28px" height="18px"/>}
							flex={{xl: "1 1 163px", md: "0 1 48%", base: "0 1 48%"}}/>
			<Device name="Lights" icon={<Light width="23px" height="27px"/>}
							flex={{xl: "1 1 163px", md: "0 1 48%", base: "0 1 48%"}}/>
		</Flex>
	</Box>

export default HomeControl;