import React from "react";
import {Box, Flex} from "@chakra-ui/react";
import Welcome from "../../components/Welcome/Welcome";
import HomeControl from "../../components/HomeControl/HomeControl";
import Information from "../../components/Infromation/Information";
import Room from "../../components/Room/Room";

const Home: React.FC = () =>
	<Flex gap={{lg: "40px", base: "20px"}} direction={{md: "row", base: "column"}}>
		<Box flex="0 1 743px">
			<Welcome/>
			<HomeControl/>
			<Room/>
		</Box>
		<Information/>
	</Flex>

export default Home;