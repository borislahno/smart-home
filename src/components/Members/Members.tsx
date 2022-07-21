import React from "react";
import {Avatar, Box, Flex} from "@chakra-ui/react";
import InformationHead from "../InformationHead/InformationHead";
import Member from "../Member/Member";

import scralettAvatar from "../../assets/images/members/scarlett.webp";
import nariyaAvatar from "../../assets/images/members/nariya.webp";
import riyaAvatar from "../../assets/images/members/riya.webp";
import dadAvatar from "../../assets/images/members/dad.webp";
import momAvatar from "../../assets/images/members/mom.webp";


const Members = () =>
	<Box mt="26px" mb="28px">
		<InformationHead title="Members"/>
			<Flex gap="22px" wrap="wrap" justify="center" pb="14px" px="21px" pt="24px" bgColor="white"
						border="1px solid rgba(230, 229, 242, 0.811762)" borderRadius="28px"
						sx={{'::-webkit-scrollbar': {width: 0, height: 0}}}>
				<Member avatarUrl={scralettAvatar} name="Scarlett" role="Admin"/>
				<Member avatarUrl={nariyaAvatar} name="Nariya" role="Full Access"/>
				<Member avatarUrl={riyaAvatar} name="Riya" role="Full Access"/>
				<Member avatarUrl={dadAvatar} name="Dad" role="Full Access"/>
				<Member avatarUrl={momAvatar} name="Mom" role="Full Access"/>
			</Flex>
	</Box>

export default Members;