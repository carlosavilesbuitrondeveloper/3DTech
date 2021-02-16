import styled from "styled-components";

const Header = styled.header`
	height: 70px;
	display:flex;
	align-items:center;
	justify-content: space-between;
	padding: 0 20px;
	background-color: ${props=>props.theme.colors.main};
	font-size: 18px;
	font-weight: bold;
`;

export default Header;