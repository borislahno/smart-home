import React from 'react';
import {Box, chakra, Flex, Text} from "@chakra-ui/react";
import {Minus} from "../../icons/Minus";
import ControlButton from "../ControlButton/ControlButton";
import {Plus} from "../../icons/Plus";
import TemperatureValue from "../TemperatureValue/TemperatureValue";
import {useMediaQuery} from 'react-responsive';
import {Pointer} from "../../icons/Pointer";

const TemperatureIndicator: React.FC = () => {
	const isSmall = useMediaQuery({query: '(max-width: 1032px)'});

	return (
			<Flex justify="center" align="center">
				<Box position="relative">

					<ControlButton icon={<Plus/>} position="absolute" right={{lg: "-30%", base: "-15%"}}
												 top={{lg: "50%", base: "85%"}} transform="translateY(-50%)"/>
					<ControlButton icon={<Minus/>} position="absolute" left={{lg: "-30%", base: "-15%"}}
												 top={{lg: "50%", base: "85%"}} transform="translateY(-50%)"/>
					<TemperatureValue value="05" position="absolute" left="-5%"
														top={{lg: "51.5%", base: "47%"}} transform="translateY(-50%)"/>
					<TemperatureValue value="15" color="purple" position="absolute" left="51%" top="0"
														transform="translateX(-50%)"/>
					<TemperatureValue value="25" color="orange.400" position="absolute" right="-5%"
														top={{lg: "51%", base: "47%"}} transform="translateY(-50%)"/>

					<chakra.svg width={{lg: "326px", base: "218px"}} height={{lg: "326px", base: "218px"}}
											transform={{lg: "rotate(-1.5deg)", base: "rotate(-4deg)"}} opacity="0.4">
						<chakra.circle stroke="gray.400" strokeWidth="15" cx={`${isSmall ? '109' : '163'}`}
													 cy={`${isSmall ? '109' : '163'}`} r={`${isSmall ? '79' : '133'}`}
													 fill="transparent" strokeDasharray={`${isSmall ? "1 12" : '1 23'}`}
													 strokeDashoffset="40"/>
					</chakra.svg>

					<Box position="absolute" top="50%" left="50%" transform="translate(-50%,-50%)">
						<chakra.svg width={{lg: "252px", base: "160px"}} height={{lg: "252px", base: "160px"}}
												transform="rotate(12deg)">
							<chakra.defs>
								<chakra.linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
									<chakra.stop offset="30%" stopColor="#6F5CEA"/>
									<chakra.stop offset="60%" stopColor="#AE5BFF"/>
									<chakra.stop offset="100%" stopColor="#F2946D"/>
								</chakra.linearGradient>
							</chakra.defs>
							<chakra.circle stroke="transparent" strokeWidth="8" cx={`${isSmall ? '80' : '126'}`}
														 cy={`${isSmall ? '80' : '126'}`} r={`${isSmall ? '64' : '110'}`}
														 fill="url(#linear)"/>
						</chakra.svg>
					</Box>

					<Box position="absolute" top="50%" left="50%" transform="translate(-50%,-50%) rotate(-90deg)">
						<chakra.svg width={{lg: "248px", base: "156px"}} height={{lg: "248px", base: "156px"}}>
							<chakra.circle stroke="white" fill="transparent" strokeWidth="8" cx={`${isSmall ? '78' : '124'}`}
														 cy={`${isSmall ? '78' : '124'}`} r={`${isSmall ? '62' : '108'}`}
														 strokeDashoffset={`${isSmall ? -94 : -180}`} strokeDasharray="678.24 678.24"/>
						</chakra.svg>
					</Box>

					<Box position="absolute" zIndex="100" top="50%" left="50%"
							 transform={`translate(-50%,-50%) rotate(${isSmall ? 83 : 91.8}deg)`}
							 boxSize={{lg: "230px", base: "138px"}} borderRadius="full">
						<Pointer position="absolute" top={{lg: "-7px", base: "-5px"}} left="45%" color="white"
										 fontSize={{lg: "1.4rem", base: "1.1rem"}}
										 transform="rotate(180deg)" filter="drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.2))"/>
						<chakra.svg position="absolute" top={{lg: "46%", base: "35%"}} left="-2px"
												width={{lg: "20px", base: "20px"}} height={{lg: "20px", base: "20px"}}
												filter="drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.2))">
							<chakra.circle stroke="white" fill="transparent" strokeWidth="3" cx={`${isSmall ? '10' : '10'}`}
														 cy={`${isSmall ? '10' : '10'}`} r={`${isSmall ? '4' : '4'}`}/>
						</chakra.svg>
					</Box>

					<Box position="absolute" zIndex="1" top="50%" left="50%" transform="translate(-50%,-50%)"
							 boxSize={{lg: "210px", base: "120px"}}
							 borderRadius="full" bgColor="gray.200" boxShadow="inset 0px 1px 5px rgba(130, 130, 130, 0.584271)"/>

					<Box position="absolute" zIndex="2" top="50%" left="50%" transform="translate(-50%,-50%)"
							 boxSize={{lg: "175px", base: "100px"}} borderRadius="full" bgColor="white"/>

					<Box position="absolute" zIndex="3" top="50%" left="50%" transform="translate(-50%,-50%)"
							 boxSize={{lg: "152px", base: "85px"}} borderRadius="full" border="1px solid #ECEBF2"
							 bgColor="transparent"/>

					<Box position="absolute" zIndex="4" top="50%" left="50%" transform="translate(-50%,-50%)" textAlign="center"
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
	);
}

export default TemperatureIndicator;