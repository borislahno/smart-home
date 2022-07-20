import {ReactNode, useState} from "react";
import {
	Box,
	Flex,
	Switch,
	Text,
	useMultiStyleConfig
} from "@chakra-ui/react";

type DeviceCardType =
	(icon: ReactNode, variant?: string, switchVariant?: string, type?: string, size?: string) => [any, ReactNode];


export const useDeviceCard: DeviceCardType = (icon, variant, switchVariant, type, size) => {
	const [check, setCheck] = useState<boolean>(false);

	const onCheckChange = () => setCheck(!check);

	if (check && !variant) {
		variant = 'checked';
	}

	if (variant === 'active') {
		switchVariant = 'purple';
	}

	const styles = useMultiStyleConfig('Device', {size, variant});

	let content = <>
		<Box __css={styles.head} display="flex" justifyContent="space-between" alignItems="center" gap="9px">
			<Text>
				{check ? 'ON' : 'OFF'}
			</Text>
			<Switch variant={switchVariant} checked={check} onChange={onCheckChange}/>
		</Box>
		<Box flex="1 1 auto">
			{icon}
		</Box>
	</>;

	if (type === 'switchHead') {
		content = <Flex justify="space-between" align="center" flex="1 1 auto">
			<Box>
				{icon}
			</Box>
			<Box __css={styles.head} display="flex" justifyContent="space-between" alignItems="center" gap="9px">
				<Text>
					{check ? 'ON' : 'OFF'}
				</Text>
				<Switch variant={switchVariant} checked={check} onChange={onCheckChange}/>
			</Box>
		</Flex>;
	}

	return [styles, content];
}