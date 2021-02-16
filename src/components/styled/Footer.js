import styled from "styled-components";

const Footer = styled.footer`
	height: 60px;
	display:flex;
	align-items:center;
	padding: 0 20px;
	justify-content: space-between;
	font-size: 12px;
	background-color: ${props=> props.theme.colors.darkest};
	color: ${props=> props.theme.colors.light};
`;

export default Footer;