import React, {ReactNode} from "react";
import {Box, chakra} from "@chakra-ui/react";
import {useDeviceCard} from "./hooks/useDeviceCard";

export type DeviceProps = {
	icon: ReactNode,
	name: string,
	switchVariant?: string,
	className?: string,
	variant?: string,
	size?: string,
	type?: 'switchHead' | 'ordinary',
}

const Device: React.FC<DeviceProps> = ({
																				 size,
																				 type = 'ordinary',
																				 variant,
																				 icon,
																				 name,
																				 switchVariant,
																				 className,
																			 }) => {

	const [styles, content] = useDeviceCard(icon, variant, switchVariant, type, size);

	return (
		<Box __css={styles.device} className={className} display="flex" flexDirection="column">
			{content}
			<Box __css={styles.footer} as="p">{name}</Box>
		</Box>
	);
}

export default chakra(Device);