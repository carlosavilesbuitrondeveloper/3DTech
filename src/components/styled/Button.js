import styled from 'styled-components';

export const Button = styled.button`
	width: 100%;
	border-radius: 12px;
	border: ${props=> `3px solid ${props.theme.colors.main}`};
	background-color: ${props=> props.bgcolor ? props.bgcolor : props.theme.colors.main};
	border-color: ${props=> props.bgcolor ? props.bgcolor : props.theme.colors.main};
	color: ${props=> props.bgcolor ? props.theme.colors.main : 'inherit'};
	font-weight: bold;
	cursor: pointer;
	&:hover{
		background-color: ${props=> props.theme.colors.light};
		color:  ${props=> props.theme.colors.darkest};
	}
`;

export const MediumButton = styled(Button)`
	font-size: 18px;
	max-width: 140px;
	height: 40px;
`;

export const LargeButton = styled(Button)`
	font-size: 24px;
	max-width: 280px;
	height: 50px;
`;

