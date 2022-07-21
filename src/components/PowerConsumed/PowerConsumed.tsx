import React from "react";
import {Box, Button, Image, Menu, MenuButton} from "@chakra-ui/react";
import InformationHead from "../InformationHead/InformationHead";
import {Arrow} from "../../icons/Arrow";
import {Calendar} from "../../icons/Calendar";

import consumedPower from "../../assets/images/power/consumedPower.webp";

const PowerConsumed: React.FC = () =>
	<Box>
		<InformationHead title="Power Consumed" menu={
			<Menu matchWidth={true} flip={true}>
				<MenuButton as={Button} rightIcon={<Arrow/>} display="inline-flex" justifyContent="space-between" width="123px"
										height="36px" borderRadius="10px" bgColor="gray.300" fontWeight="semibold" fontSize="sm"
										lineHeight="1.125rem" px="14px" py="9px" mr={{"3sm": "20px", base: "8px"}}
										sx={{'span': {flex: "0 0 auto", display: 'flex', alignItems: 'center', gap: '8px'}}}>
					<Calendar boxSize="14px" color="purple"/>
					Month
				</MenuButton>
			</Menu>
		}/>
		<Image src={consumedPower} alt="Electricity Consumed schedule" width="full" objectFit="cover" borderRadius="28px"
					 border="1px solid rgba(230, 229, 242, 0.811762)"/>
	</Box>

export default PowerConsumed;