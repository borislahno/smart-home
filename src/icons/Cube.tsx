import React from 'react';
import {createIcon} from "@chakra-ui/react";


export const Cube = createIcon({
	displayName: 'Cube',
	viewBox: '0 0 51 51',
	path: ([
			<mask id="path-1-inside-1_0_403" fill="white">
				<rect x="14" y="23.4091" width="10.4545" height="13.5909" rx="1.56818"/>
			</mask>,
			<rect x="14" y="23.4091" width="10.4545" height="13.5909" rx="1.56818" stroke="currentColor" strokeWidth="3.34545"
						mask="url(#path-1-inside-1_0_403)" fill='none'/>,
			<mask id="path-2-inside-2_0_403" fill="white">
				<rect x="26.4293" y="14" width="10.4545" height="13.5909" rx="1.56818"/>
			</mask>,
			<rect x="26.4293" y="14" width="10.4545" height="13.5909" rx="1.56818" stroke="currentColor" strokeWidth="3.34545"
						mask="url(#path-2-inside-2_0_403)" fill='none'/>,
			<rect x="14" y="14" width="10.4545" height="7.31818" rx="1.56818" fill="currentColor"/>,
			<rect x="26.4293" y="29.6818" width="10.4545" height="7.31818" rx="1.56818" fill="currentColor"/>
		]
	),
})