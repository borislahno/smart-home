import React, {ReactNode} from "react";
import {Button, chakra} from "@chakra-ui/react";

type ControlButtonProps = {
	icon: ReactNode,
	className?: string,
}

const ControlButton: React.FC<ControlButtonProps> = ({icon,className}) =>
	<Button className={className} boxSize="54px" borderRadius="12px" bgColor="gray.200" color="gray.400"
					_hover={{
						backgroundColor: 'purple',
						color: 'white',
						filter: 'drop-shadow(0px 2px 13px rgba(22, 1, 162, 0.325694))'
					}}>
		{icon}
	</Button>

export default chakra(ControlButton);