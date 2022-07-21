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
	<List display="flex" flexDirection="column" alignItems={{"2lg": "flex-start", base: "center"}} gap="45px"
				ml={{"2lg": "30px", base: "0"}}>
		<LinkItem link="#" icon={<House fontSize="4xl"/>} mb="26px"/>
		<LinkItem link="#" icon={<Cube fontSize="5xl"/>}/>
		<LinkItem link="#" icon={<Lamp/>}/>
		<LinkItem link="#" icon={<Security/>}/>
		<LinkItem link="#" icon={<Location/>}/>
		<LinkItem link="#" icon={<Users/>}/>
		<LinkItem link="#" icon={<Statistic/>}/>
		<LinkItem link="#" icon={<Exit/>} mt="136px"/>
	</List>

export default Navigation;