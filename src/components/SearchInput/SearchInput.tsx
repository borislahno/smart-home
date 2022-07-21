import React from "react";
import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {Search} from "../../icons/Search";

const SearchInput: React.FC = () =>
	<InputGroup flex={{"2lg": " 1 0 542px", md: "1 0 350px"}} display={{"2sm": "block", base: "none"}}>
		<InputLeftElement children={<Search boxSize={'14px'}/>} pointerEvents="none" height="100%" width="auto"
											left="23px"/>
		<Input placeholder="Search" backgroundColor="gray.300" border="none" borderRadius="15px" height="50px"
					 pl="52px" fontSize="sm" lineHeight="4" letterSpacing="0.14px" _placeholder={{color: 'gray.600'}}/>
	</InputGroup>

export default SearchInput;