import React from 'react';
import {ReactNode} from "react";
import Header from "../components/Header/Header";
import {Box} from "@chakra-ui/react";

type LayoutProps = {
	children: ReactNode,
}

const Layout: React.FC<LayoutProps> = ({children}) =>
	<>
		<Header/>
		<Box as="main" my="35px" pl={{"2lg": "172px", base: "20px"}} pr={{"2lg": "31px", base: "20px"}} pb="35px">
			{children}
		</Box>
	</>

export default Layout;