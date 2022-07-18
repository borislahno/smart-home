import React from 'react';
import {createIcon} from "@chakra-ui/react";


export const Calendar = createIcon({
	displayName: 'Calendar',
	viewBox: '0 0 16 16',
	path: ([
			<path fillRule="evenodd" clipRule="evenodd"
						d="M4.71156 1.00026C4.54946 1.01806 4.42784 1.15675 4.43136 1.31978V2.23902H2.76001C1.79556 2.23902 1.00018 3.03259 1.00018 3.99885V5.84717V5.8865C0.99986 5.89468 0.99986 5.90288 1.00018 5.91107V13.088C1.00018 14.0543 1.79514 14.8479 2.76001 14.8479H13.088C14.0528 14.8479 14.8429 14.0543 14.8429 13.088V5.93073C14.8431 5.92418 14.8431 5.91762 14.8429 5.91107C14.8435 5.89961 14.8435 5.88812 14.8429 5.87667V3.99885C14.8429 3.03259 14.0524 2.23902 13.088 2.23902H11.3625V1.31978C11.3639 1.23464 11.3306 1.15258 11.2704 1.09237C11.2102 1.03215 11.1282 0.998918 11.043 1.00026C10.9596 1.00155 10.8801 1.03595 10.822 1.09587C10.7639 1.15579 10.732 1.23634 10.7333 1.31978V2.23902H5.06057V1.31978C5.06191 1.23464 5.02868 1.15258 4.96847 1.09237C4.90825 1.03215 4.8262 0.998918 4.74105 1.00026C4.73122 0.999798 4.72138 0.999798 4.71156 1.00026ZM2.76001 2.86824H4.43136V3.78748C4.43111 3.90004 4.49102 4.00416 4.58846 4.06051C4.6859 4.11686 4.80603 4.11686 4.90347 4.06051C5.00091 4.00416 5.06082 3.90004 5.06057 3.78748V2.86824H10.7333V3.78748C10.7331 3.90004 10.793 4.00416 10.8904 4.06051C10.9879 4.11686 11.108 4.11686 11.2054 4.06051C11.3029 4.00416 11.3628 3.90004 11.3625 3.78748V2.86824H13.088C13.7086 2.86824 14.2137 3.37507 14.2137 3.99885V5.59646H1.62939V3.99885C1.62939 3.37507 2.13934 2.86824 2.76001 2.86824ZM1.62939 6.22567H14.2137V13.088C14.2137 13.7118 13.7082 14.2187 13.088 14.2187H2.76001C2.13976 14.2187 1.62939 13.7118 1.62939 13.088V6.22567Z"
						fill="currentColor"/>,
			<path
				d="M4.43136 1.31978H4.68142L4.6813 1.31438L4.43136 1.31978ZM4.43136 2.23902V2.48902H4.68136V2.23902H4.43136ZM1.00018 5.8865L1.25018 5.89627V5.8865H1.00018ZM1.00018 5.91107H1.25037L1.24999 5.90131L1.00018 5.91107ZM14.8429 5.93073L14.5929 5.92291V5.93073H14.8429ZM14.8429 5.91107L14.5933 5.8974L14.5927 5.90813L14.593 5.91888L14.8429 5.91107ZM14.8429 5.87667H14.5925L14.5933 5.89033L14.8429 5.87667ZM11.3625 2.23902H11.1125V2.48902H11.3625V2.23902ZM11.3625 1.31978L11.1125 1.31584V1.31978H11.3625ZM11.043 1.00026L11.0469 1.25023L11.047 1.25023L11.043 1.00026ZM10.7333 1.31978H10.9834L10.9833 1.31585L10.7333 1.31978ZM10.7333 2.23902V2.48902H10.9833V2.23902H10.7333ZM5.06057 2.23902H4.81057V2.48902H5.06057V2.23902ZM5.06057 1.31978L4.81057 1.31584V1.31978H5.06057ZM4.74105 1.00026L4.72933 1.24998L4.73716 1.25035L4.74499 1.25023L4.74105 1.00026ZM4.43136 2.86824H4.68136V2.61824H4.43136V2.86824ZM4.43136 3.78748L4.68136 3.78803V3.78748H4.43136ZM5.06057 3.78748H4.81057L4.81057 3.78803L5.06057 3.78748ZM5.06057 2.86824V2.61824H4.81057V2.86824H5.06057ZM10.7333 2.86824H10.9833V2.61824H10.7333V2.86824ZM10.7333 3.78748L10.9833 3.78803V3.78748H10.7333ZM11.3625 3.78748H11.1125L11.1125 3.78803L11.3625 3.78748ZM11.3625 2.86824V2.61824H11.1125V2.86824H11.3625ZM14.2137 5.59646V5.84646H14.4637V5.59646H14.2137ZM1.62939 5.59646H1.37939V5.84646H1.62939V5.59646ZM1.62939 6.22567V5.97567H1.37939V6.22567H1.62939ZM14.2137 6.22567H14.4637V5.97567H14.2137V6.22567ZM4.68427 0.751753C4.39337 0.783693 4.1751 1.03261 4.18142 1.32518L4.6813 1.31438C4.68058 1.2809 4.70556 1.25242 4.73884 1.24877L4.68427 0.751753ZM4.18136 1.31978V2.23902H4.68136V1.31978H4.18136ZM4.43136 1.98902H2.76001V2.48902H4.43136V1.98902ZM2.76001 1.98902C1.65765 1.98902 0.75018 2.89435 0.75018 3.99885H1.25018C1.25018 3.17082 1.93346 2.48902 2.76001 2.48902V1.98902ZM0.75018 3.99885V5.84717H1.25018V3.99885H0.75018ZM0.75018 5.84717V5.8865H1.25018V5.84717H0.75018ZM0.750371 5.87673C0.749796 5.89143 0.749796 5.90614 0.750371 5.92083L1.24999 5.90131C1.24992 5.89962 1.24992 5.89794 1.24999 5.89626L0.750371 5.87673ZM0.75018 5.91107V13.088H1.25018V5.91107H0.75018ZM0.75018 13.088C0.75018 14.1925 1.6572 15.0979 2.76001 15.0979V14.5979C1.93308 14.5979 1.25018 13.9161 1.25018 13.088H0.75018ZM2.76001 15.0979H13.088V14.5979H2.76001V15.0979ZM13.088 15.0979C14.1917 15.0979 15.0929 14.1916 15.0929 13.088H14.5929C14.5929 13.917 13.914 14.5979 13.088 14.5979V15.0979ZM15.0929 13.088V5.93073H14.5929V13.088H15.0929ZM15.0928 5.93854C15.0931 5.92678 15.0931 5.91502 15.0928 5.90326L14.593 5.91888C14.593 5.92023 14.593 5.92157 14.593 5.92292L15.0928 5.93854ZM15.0925 5.92474C15.0936 5.90417 15.0936 5.88356 15.0925 5.863L14.5933 5.89033C14.5934 5.89269 14.5934 5.89505 14.5933 5.8974L15.0925 5.92474ZM15.0929 5.87667V3.99885H14.5929V5.87667H15.0929ZM15.0929 3.99885C15.0929 2.89526 14.1912 1.98902 13.088 1.98902V2.48902C13.9136 2.48902 14.5929 3.16992 14.5929 3.99885H15.0929ZM13.088 1.98902H11.3625V2.48902H13.088V1.98902ZM11.6125 2.23902V1.31978H11.1125V2.23902H11.6125ZM11.6125 1.32372C11.6149 1.17091 11.5553 1.02365 11.4472 0.91559L11.0937 1.26914C11.106 1.28151 11.1128 1.29836 11.1126 1.31585L11.6125 1.32372ZM11.4472 0.91559C11.3391 0.807525 11.1919 0.747884 11.0391 0.75029L11.047 1.25023C11.0644 1.24995 11.0813 1.25678 11.0937 1.26914L11.4472 0.91559ZM11.0391 0.750289C10.8894 0.752611 10.7467 0.814335 10.6425 0.921877L11.0015 1.26986C11.0134 1.25756 11.0298 1.2505 11.0469 1.25023L11.0391 0.750289ZM10.6425 0.921877C10.5382 1.02942 10.481 1.17397 10.4834 1.32372L10.9833 1.31585C10.983 1.29871 10.9896 1.28217 11.0015 1.26986L10.6425 0.921877ZM10.4833 1.31978V2.23902H10.9833V1.31978H10.4833ZM10.7333 1.98902H5.06057V2.48902H10.7333V1.98902ZM5.31057 2.23902V1.31978H4.81057V2.23902H5.31057ZM5.31054 1.32372C5.31295 1.17091 5.25331 1.02365 5.14524 0.91559L4.79169 1.26914C4.80405 1.28151 4.81088 1.29836 4.8106 1.31585L5.31054 1.32372ZM5.14524 0.91559C5.03718 0.807525 4.88992 0.747884 4.73711 0.75029L4.74499 1.25023C4.76247 1.24995 4.77932 1.25678 4.79169 1.26914L5.14524 0.91559ZM4.75277 0.750534C4.73514 0.749707 4.71747 0.749707 4.69984 0.750534L4.72327 1.24998C4.72529 1.24989 4.72731 1.24989 4.72933 1.24998L4.75277 0.750534ZM2.76001 3.11824H4.43136V2.61824H2.76001V3.11824ZM4.18136 2.86824V3.78748H4.68136V2.86824H4.18136ZM4.18136 3.78693C4.18092 3.98894 4.28843 4.17579 4.46331 4.27693L4.71362 3.8441C4.69361 3.83252 4.68131 3.81114 4.68136 3.78803L4.18136 3.78693ZM4.46331 4.27693C4.63818 4.37806 4.85376 4.37806 5.02863 4.27693L4.77831 3.8441C4.7583 3.85567 4.73363 3.85567 4.71362 3.8441L4.46331 4.27693ZM5.02863 4.27693C5.2035 4.17579 5.31102 3.98894 5.31057 3.78693L4.81057 3.78803C4.81062 3.81114 4.79832 3.83252 4.77831 3.8441L5.02863 4.27693ZM5.31057 3.78748V2.86824H4.81057V3.78748H5.31057ZM5.06057 3.11824H10.7333V2.61824H5.06057V3.11824ZM10.4833 2.86824V3.78748H10.9833V2.86824H10.4833ZM10.4833 3.78693C10.4829 3.98894 10.5904 4.17579 10.7653 4.27693L11.0156 3.8441C10.9956 3.83252 10.9833 3.81114 10.9833 3.78803L10.4833 3.78693ZM10.7653 4.27693C10.9401 4.37806 11.1557 4.37806 11.3306 4.27693L11.0803 3.8441C11.0603 3.85567 11.0356 3.85567 11.0156 3.8441L10.7653 4.27693ZM11.3306 4.27693C11.5055 4.17579 11.613 3.98894 11.6125 3.78693L11.1125 3.78803C11.1126 3.81114 11.1003 3.83252 11.0803 3.8441L11.3306 4.27693ZM11.6125 3.78748V2.86824H11.1125V3.78748H11.6125ZM11.3625 3.11824H13.088V2.61824H11.3625V3.11824ZM13.088 3.11824C13.5696 3.11824 13.9637 3.51217 13.9637 3.99885H14.4637C14.4637 3.23797 13.8477 2.61824 13.088 2.61824V3.11824ZM13.9637 3.99885V5.59646H14.4637V3.99885H13.9637ZM14.2137 5.34646H1.62939V5.84646H14.2137V5.34646ZM1.87939 5.59646V3.99885H1.37939V5.59646H1.87939ZM1.87939 3.99885C1.87939 3.51359 2.27697 3.11824 2.76001 3.11824V2.61824C2.00172 2.61824 1.37939 3.23655 1.37939 3.99885H1.87939ZM1.62939 6.47567H14.2137V5.97567H1.62939V6.47567ZM13.9637 6.22567V13.088H14.4637V6.22567H13.9637ZM13.9637 13.088C13.9637 13.5747 13.5692 13.9687 13.088 13.9687V14.4687C13.8472 14.4687 14.4637 13.849 14.4637 13.088H13.9637ZM13.088 13.9687H2.76001V14.4687H13.088V13.9687ZM2.76001 13.9687C2.27732 13.9687 1.87939 13.5732 1.87939 13.088H1.37939C1.37939 13.8504 2.0022 14.4687 2.76001 14.4687V13.9687ZM1.87939 13.088V6.22567H1.37939V13.088H1.87939Z"
				fill="currentColor"/>,
			<circle cx="5.27775" cy="9.94444" r="1.16667" fill="currentColor"/>,
			<circle cx="10.7222" cy="9.94444" r="1.16667" fill="currentColor"/>

		]
	),
})