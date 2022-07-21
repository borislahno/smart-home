import React, {ReactNode} from "react";
import {chakra, Link, ListItem} from "@chakra-ui/react";

type LinkItemProps = {
	link: string,
	icon: ReactNode,
	className?: string,
}

const LinkItem: React.FC<LinkItemProps> = ({link, icon, className}) =>
	<ListItem className={className} width={{"2lg": "full", base: "none"}} height="55px"
						_hover={{
							"2lg": {
								':not(:first-of-type)': {
									position: "relative",
									color: "purple",
									backgroundColor: 'gray.50',
									borderTopLeftRadius: '30px',
									borderBottomLeftRadius: '30px',
									'::before': {
										content: '""',
										position: 'absolute',
										top: '-20px',
										right: '0',
										width: '20px',
										height: '20px',
										borderBottomRightRadius: '20px',
										boxShadow: '7.5px 7.5px 0 7.5px #F9F9F9',
									},
									'::after': {
										content: '""',
										position: 'absolute',
										bottom: '-20px',
										right: '0',
										width: '20px',
										height: '20px',
										borderTopRightRadius: '20px',
										boxShadow: '7.5px -7.5px 0 7.5px #F9F9F9',
									}
								}
							}, base: {}
						}}>
		<Link href={link} display="flex" justifyContent="center" alignItems="center" boxSize="14">
			{icon}
		</Link>
	</ListItem>;

export default chakra(LinkItem);