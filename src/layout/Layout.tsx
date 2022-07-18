import React from 'react';
import {ReactNode} from "react";
import Header from "../components/Header/Header";
import {Box} from "@chakra-ui/react";
import SideMenu from "../components/SideMenu/SideMenu";

type LayoutProps = {
	children: ReactNode,
}

const Layout: React.FC<LayoutProps> = ({children}) =>
	<>
		<SideMenu/>
		<Header/>
		<Box as="main" py="35px" pl="172px">
			{children}
		</Box>
	</>

export default Layout;