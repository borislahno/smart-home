import React from 'react';
import {Box, Button, chakra, Flex, Text} from "@chakra-ui/react";
import {Minus} from "../../icons/Minus";
import ControlButton from "../ControlButton/ControlButton";
import {Plus} from "../../icons/Plus";
import TemperatureValue from "../TemperatureValue/TemperatureValue";

const TemperatureIndicator: React.FC = () =>
	<Box>
		<Flex justify="center" align="center">
			<ControlButton icon={<Minus/>} mr="35px"/>
			<Box position="relative">
				<TemperatureValue value="05" position="absolute" left="-5%" top="50%" transform="translateY(-50%)"/>
				<TemperatureValue value="15" color="purple" position="absolute" left="53%" top="0"
													transform="translateX(-50%)"/>
				<chakra.svg width="326px" height="326px" transform="rotate(-1deg)" opacity="0.4">
					<chakra.circle stroke="gray.400" strokeWidth="15" cx='163' cy="163" r="133" fill="transparent"
												 strokeDasharray="1 21"/>
				</chakra.svg>
				<Box position="absolute" top="50%" left="50%" transform="translate(-50%,-50%)">
					<chakra.svg width="230px" height="230px" transform="rotate(1deg)">
						<chakra.circle stroke="transparent" strokeWidth="4" cx='115' cy="115" r="107" fill="transparent"/>
					</chakra.svg>
				</Box>
				<Box position="absolute" top="50%" left="50%" transform="translate(-50%,-50%)" boxSize="210px"
						 borderRadius="full" bgColor="gray.200" boxShadow="inset 0px 1px 5px rgba(130, 130, 130, 0.584271)"/>
				<Box position="absolute" top="50%" left="50%" transform="translate(-50%,-50%)" boxSize="175px"
						 borderRadius="full" bgColor="white"/>
				<Box position="absolute" top="50%" left="50%" transform="translate(-50%,-50%)" boxSize="152px"
						 borderRadius="full" border="1px solid #ECEBF2" bgColor="transparent"/>
				<Box position="absolute" top="50%" left="50%" transform="translate(-50%,-50%)" textAlign="center"
						 fontFamily="Lato" fontWeight="400">
					<Text fontSize="2.3rem" lineHeight="2.187rem" mb="5px">
						25&#176;C
					</Text>
					<Text fontSize="xs" lineHeight="0.875rem" color="gray.400">
						Celcious
					</Text>
				</Box>
				<TemperatureValue value="25" color="orange.400" position="absolute" right="-5%" top="49%"
													transform="translateY(-50%)"/>
			</Box>
			<ControlButton icon={<Plus/>} ml="35px"/>
		</Flex>
	</Box>

export default TemperatureIndicator;