import React from "react";
import {Box} from "@chakra-ui/react";
import Devices from "../Devices/Devices";
import Members from "../Members/Members";
import PowerConsumed from "../PowerConsumed/PowerConsumed";

const Information: React.FC = () =>
	<Box flex="0 1 485px" bgColor="gray.500"
			 border="1px solid rgba(237, 237, 245, 0.602601)" borderRadius="30px" px={{"3sm": "30px", base: "10px"}}
			 py="28px">
		<Devices/>
		<Members/>
		<PowerConsumed/>
	</Box>

export default Information;