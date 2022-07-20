import {extendTheme} from "@chakra-ui/react";
import {colors} from './colors';
import {styles} from './global';
import {components} from './components';

export const theme = extendTheme({
	colors,
	styles,
	components,
});