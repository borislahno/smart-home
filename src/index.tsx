import React from 'react';
import ReactDOM from 'react-dom/client';
import {ChakraProvider} from '@chakra-ui/react'
import Home from "./pages/Home/Home";
import Fonts from "./components/Fonts/Fonts";
import {theme} from "./theme";
import Layout from "./layout/Layout";

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<Fonts/>
			<Layout>
				<Home/>
			</Layout>
		</ChakraProvider>
	</React.StrictMode>
);
