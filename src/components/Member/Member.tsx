import React from 'react';
import {Avatar, Flex, Text} from "@chakra-ui/react";

type MemberProps = {
	avatarUrl: string,
	name: string,
	role: string,
}

const Member: React.FC<MemberProps> = ({avatarUrl, name, role}) =>
	<Flex direction="column" align="center" flex="0 0 58px">
		<Avatar boxSize="40px" name={name} src={avatarUrl} mb="7px" bgColor="transparent"/>
		<Text fontWeight="semibold" fontSize="0.81rem" lineHeight="1.125rem" color="black.900" mb="2px">{name}</Text>
		<Text align="center" fontWeight="semibold" fontSize="0.68rem" lineHeight="1.125rem" color="gray.400">{role}</Text>
	</Flex>

export default Member;