import React, {ReactNode} from "react";
import {Global} from "@emotion/react";

import poppinsBold from "../../assets/fonts/Poppins-Bold.woff";
import lato from "../../assets/fonts/Lato-Regular.woff";
import latoMedium from "../../assets/fonts/Lato-Medium.woff";
import latoBold from "../../assets/fonts/Lato-Bold.woff";
import mulish from "../../assets/fonts/Mulish-Regular.woff";
import mulishSemiBold from "../../assets/fonts/Mulish-SemiBold.woff";
import mulishBold from "../../assets/fonts/Mulish-Bold.woff";

const Fonts: React.FC = () =>
	<Global styles={
		`
		@font-face {
  		font-family: 'Poppins';
			font-display: swap;
			src: url(${poppinsBold}) format('woff');
			font-weight: 700;
			font-style: normal;
		}
		
		@font-face {
  		font-family: 'Lato';
			font-display: swap;
			src: url('${latoMedium}') format('woff');
			font-weight: 500;
			font-style: normal;
		}
		
		@font-face {
  		font-family: 'Lato';
			font-display: swap;
			src: url('${latoBold}') format('woff');
			font-weight: 700;
			font-style: normal;
		}
		@font-face {
  		font-family: 'Lato';
			font-display: swap;
			src: url('${lato}') format('woff');
			font-weight: 400;
			font-style: normal;
		}
		
		@font-face {
  		font-family: 'Mulish';
			font-display: swap;
			src: url('${mulish}') format('woff');
			font-weight: 400;
			font-style: normal;
		}
		
		@font-face {
  		font-family: 'Mulish';
			font-display: swap;
			src: url('${mulishSemiBold}') format('woff');
			font-weight: 600;
			font-style: normal;
		}
		
		@font-face {
  		font-family: 'Mulish';
			font-display: swap;
			src: url('${mulishBold}') format('woff');
			font-weight: 700;
			font-style: normal;
		}
		`
	}/>

export default Fonts;