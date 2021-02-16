import styled from "styled-components";

export const H1 = styled.h1`
	font-size: 52px;
	font-weight: bold;
	color: ${props=>props.hasColor ? props.theme.colors.main : props.theme.colors.darkest};
	margin: ${props=> props.margin ? props.margin : 'revert'};
`;

export const H2 = styled.h2`
	font-size: 42px;
	font-weight: bold;
	color: ${props=>props.hasColor ? props.theme.colors.main : props.theme.colors.darkest};
	margin: ${props=> props.margin ? props.margin : 'revert'};
`;

export const H3 = styled.h3`
	font-size: 36px;
	font-weight: bold;
	color: ${props=>props.hasColor ? props.theme.colors.main : props.theme.colors.darkest};
	margin: ${props=> props.margin ? props.margin : 'revert'};
`;

export const H4 = styled.h4`
	font-size: 24px;
	font-weight: bold;
	color: ${props=>props.hasColor ? props.theme.colors.main : props.theme.colors.darkest};
	margin: ${props=> props.margin ? props.margin : 'revert'};
`;

export const H5 = styled.h4`
	font-size: 18px;
	font-weight: normal;
	color: ${props=>props.hasColor ? props.theme.colors.main : props.theme.colors.darkest};
	margin: ${props=> props.margin ? props.margin : 'revert'};
`;