import React from 'react';
import {List} from "@chakra-ui/react";
import {House} from "../../icons/House";
import {Cube} from "../../icons/Cube";
import {Lamp} from "../../icons/Lamp";
import {Security} from "../../icons/Security";
import {Location} from "../../icons/Location";
import {Users} from "../../icons/Users";
import {Statistic} from "../../icons/Statistic";
import {Exit} from "../../icons/Exit";
import LinkItem from "../LinkItem/LinkItem";


const Navigation: React.FC = () =>
	<List display="flex"
				width={{"2lg": "auto", base: "full"}}
				flexDirection={{"2lg": "column", base: "row"}}
				alignItems={{"2lg": "flex-start", base: "center"}}
				gap={{md: "45px", base: "20px"}}
				ml={{"2lg": "30px", base: "15px"}}>
		<LinkItem link="#" icon={<House fontSize="4xl"/>}
							mb={{"2lg": "26px", base: "0"}}
							mr={{"2lg": "0", "2sm": "30px", base: "10px"}}/>
		<LinkItem link="#" icon={<Cube fontSize="5xl"/>}/>
		<LinkItem link="#" icon={<Lamp/>}/>
		<LinkItem link="#" icon={<Security/>}/>
		<LinkItem link="#" icon={<Location/>}/>
		<LinkItem link="#" icon={<Users/>}/>
		<LinkItem link="#" icon={<Statistic/>} flex={{"2lg": "0 0 auto", base: "1 1 auto"}}/>
		<LinkItem link="#" icon={<Exit/>} mt={{"2lg": "136px", base: "0"}}/>
	</List>

export default Navigation;