import React from "react";
import {Box} from "@chakra-ui/react";
import Welcome from "../../components/Welcome/Welcome";
import HomeControl from "../../components/HomeControl/HomeControl";

const Home: React.FC = () =>
	<Box maxWidth="743px">
		<Welcome/>
		<HomeControl/>
	</Box>

export default Home;