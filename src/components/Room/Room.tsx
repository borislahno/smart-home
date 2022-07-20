import React, {useState} from 'react';
import {Box, Circle, Flex, Switch, Text} from "@chakra-ui/react";
import {Lightning} from "../../icons/Lightning";
import TemperatureIndicator from "../TemperatureIndicator/TemperatureIndicator";

const Room: React.FC = () => {

	const [check, setCheck] = useState<boolean>(false);

	const onCheckChange = () => setCheck(!check);

	return (
		<Box mt="25px" bgColor='white' borderRadius="28px" border="1px solid gray.300" px="30px" py="20px">
			<Flex justify="space-between" mb="4px">
				<Flex color="purple" align="center" gap="12px">
					<Circle size="36px" bgColor="purpleAlpha">
						<Lightning width="10px" height="21px"/>
					</Circle>
					<Text lineHeight="1.375rem">Living Room Temperature</Text>
				</Flex>
				<Flex align="center" gap="15px">
					<Text>
						{check ? 'ON' : 'OFF'}
					</Text>
					<Switch checked={check} onChange={onCheckChange}/>
				</Flex>
			</Flex>
			<TemperatureIndicator/>
		</Box>
	);
}

export default Room;