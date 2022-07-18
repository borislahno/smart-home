import React from 'react';
import {Box, Flex, Heading, Image, Text} from "@chakra-ui/react";
import {Thermometer} from "../../icons/Thermometer";
import {Cloud} from "../../icons/Cloud";

import welcomeImg from '../../assets/images/welcome/welcome.webp';

const Welcome: React.FC = () =>
	<Flex pt="27px" pl="25px" bgColor="brown.50" borderRadius="28px" overflow="hidden" mb="35px">
		<Box flex="0 0 50%">
			<Heading as="h2" fontFamily="Poppins" fontSize="3xl" fontWeight="700" lineHeight="2rem" letterSpacing="0.1rem"
							 color="brown.200" mb="12px">
				Hello, Scarlett!
			</Heading>
			<Text fontSize="sm" lineHeight="1.375rem" letterSpacing="0.04rem" color="brown.100" mb="20px">
				Welcome Home! The air quality is good & fresh you can go out today.
			</Text>
			<Flex align="center" gap="9px" mb="22px">
				<Thermometer color="black.800" fontSize="1.4rem"/>
				<Text as="span" fontFamily="Lato" fontSize="2xl" fontWeight="500" lineHeight="7" color="black.800">
					+25&#176;C
				</Text>
				<Text as="span" fontSize="sm" fontWeight="600" lineHeight="1.125rem" letterSpacing="0.0375" color="black.800">
					Outdoor temperature
				</Text>
			</Flex>
			<Flex align="center" gap="8px" mb="27px">
				<Cloud color="black.800" fontSize="1.4rem"/>
				<Text as="span" fontSize="sm" fontWeight="600" lineHeight="1.125rem" letterSpacing="0.0375" color="black.800">
					Fuzzy cloudy weather
				</Text>
			</Flex>
		</Box>
		<Image objectFit="cover" flex="0 0 50%" maxHeight="217px" src={welcomeImg} alt="Woman with dog"/>
	</Flex>

export default Welcome;
