import React, {ReactNode} from 'react';
import {Box, Button, Flex, Text} from "@chakra-ui/react";
import {Arrow} from "../../icons/Arrow";

type InformationHeadProps = {
	title: string,
	menu?: ReactNode,
}

const InformationHead: React.FC<InformationHeadProps> = ({title, menu}) =>
	<Flex justify="space-between" align="center" wrap="wrap" gap={{"3sm": "10px", base: "5px"}} mb="20px">
		<Text as="h2" fontWeight="semibold" fontSize="lg" lineHeight="1.875rem" letterSpacing="0.05rem">
			{title}
		</Text>
		<Box>
			{menu}
			<Button display="inline-flex" justifyContent="center" alignItems="center" boxSize="36px" borderRadius="10px"
							bgColor="gray.300" fontSize="sm">
				<Arrow transform="rotate(-90deg)"/>
			</Button>
		</Box>
	</Flex>

export default InformationHead;