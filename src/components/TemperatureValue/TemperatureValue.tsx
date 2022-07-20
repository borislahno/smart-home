import React from "react";
import {chakra, Text} from "@chakra-ui/react";

type TemperatureValueProps = {
	value: string,
	color?: string,
	className?: string,
}

const TemperatureValue: React.FC<TemperatureValueProps> = ({value, color = "black.800",className}) =>
	<Text className={className} fontFamily="Lato" fontWeight="600" fontSize="0.93rem" lineHeight="1.125rem" color={color}>
		{value}&#176;C
	</Text>

export default chakra(TemperatureValue);