import React from 'react';
import {createIcon} from "@chakra-ui/react";


export const Arrow = createIcon({
	displayName: 'Arrow',
	viewBox: '0 0 15 10',
	path: (
		<path fillRule="evenodd" clipRule="evenodd"
					d="M14.215 2.34715L7.97518 9.28089C7.71252 9.57304 7.28816 9.57304 7.02482 9.28089L0.785008 2.34715C0.404997 1.9254 0.404997 1.23922 0.785008 0.816723C1.16502 0.394976 1.78177 0.394976 2.16178 0.816723L7.50034 6.74815L12.8375 0.816723C13.2182 0.394976 13.835 0.394976 14.215 0.816723C14.595 1.23922 14.595 1.9254 14.215 2.34715Z"
					fill="currentColor"/>
	),
})