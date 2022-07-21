import {extendTheme} from "@chakra-ui/react";
import {colors} from './colors';
import {styles} from './global';
import {components} from './components';
import {breakpoints} from './breakpoints';

export const theme = extendTheme({
	colors,
	styles,
	components,
	breakpoints
});