import React from 'react';
import {Box, Button, chakra, Flex, Text} from "@chakra-ui/react";
import {Minus} from "../../icons/Minus";
import ControlButton from "../ControlButton/ControlButton";
import {Plus} from "../../icons/Plus";
import TemperatureValue from "../TemperatureValue/TemperatureValue";
import {useMediaQuery} from 'react-responsive';

const TemperatureIndicator: React.FC = () => {
	const isSmall = useMediaQuery({query: '(max-width: 1032px)'});

	return (
		<Box>
			<Flex justify="center" align="center">
				<Box position="relative">

					<ControlButton icon={<Plus/>} position="absolute" right={{lg: "-30%", base: "-15%"}}
												 top={{lg: "50%", base: "85%"}} transform="translateY(-50%)"/>
					<ControlButton icon={<Minus/>} position="absolute" left={{lg: "-30%", base: "-15%"}}
												 top={{lg: "50%", base: "85%"}} transform="translateY(-50%)"/>
					<TemperatureValue value="05" position="absolute" left="-5%"
														top={{lg: "50%", base: "47%"}} transform="translateY(-50%)"/>
					<TemperatureValue value="15" color="purple" position="absolute" left={{lg: "53%", base: "51%"}} top="0"
														transform="translateX(-50%)"/>
					<TemperatureValue value="25" color="orange.400" position="absolute" right="-5%"
														top={{lg: "50%", base: "47%"}} transform="translateY(-50%)"/>

					<chakra.svg width={{lg: "326px", base: "218px"}} height={{lg: "326px", base: "218px"}}
											transform={{lg: "rotate(-1deg)", base: "rotate(-4deg)"}} opacity="0.4">
						<chakra.circle stroke="gray.400" strokeWidth="15" cx={`${isSmall ? '109' : '163'}`}
													 cy={`${isSmall ? '109' : '163'}`} r={`${isSmall ? '79' : '133'}`}
													 fill="transparent" strokeDasharray={`${isSmall ? "1 12" : '1 21'}`}/>
					</chakra.svg>

					<Box position="absolute" top="50%" left="50%" transform="translate(-50%,-50%)">
						<chakra.svg width={{lg: "230px", base: "170px"}} height={{lg: "230px", base: "170px"}}
												transform="rotate(1deg)">
							<chakra.circle stroke="transparent" strokeWidth="4" cx={`${isSmall ? '85' : '115'}`}
														 cy={`${isSmall ? '85' : '115'}`} r={`${isSmall ? '77' : '107'}`}
														 fill="transparent"/>
						</chakra.svg>
					</Box>

					<Box position="absolute" top="50%" left="50%" transform="translate(-50%,-50%)"
							 boxSize={{lg: "210px", base: "120px"}}
							 borderRadius="full" bgColor="gray.200" boxShadow="inset 0px 1px 5px rgba(130, 130, 130, 0.584271)"/>

					<Box position="absolute" top="50%" left="50%" transform="translate(-50%,-50%)"
							 boxSize={{lg: "175px", base: "100px"}} borderRadius="full" bgColor="white"/>

					<Box position="absolute" top="50%" left="50%" transform="translate(-50%,-50%)"
							 boxSize={{lg: "152px", base: "85px"}} borderRadius="full" border="1px solid #ECEBF2"
							 bgColor="transparent"/>

					<Box position="absolute" top="50%" left="50%" transform="translate(-50%,-50%)" textAlign="center"
							 fontFamily="Lato" fontWeight="400">
						<Text fontSize={{lg: "2.3rem", base: "1.6rem"}} lineHeight={{lg: "2.187rem", base: "1.8rem"}} mb="5px">
							25&#176;C
						</Text>
						<Text fontSize="xs" lineHeight={{lg: "0.875rem", base: "0.6rem"}} color="gray.400">
							Celcious
						</Text>
					</Box>

				</Box>
			</Flex>
		</Box>
	);
}

export default TemperatureIndicator;