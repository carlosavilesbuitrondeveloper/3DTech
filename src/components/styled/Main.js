import styled from "styled-components";

const Main = styled.main`
	padding: 10px 20px;
	height: 100%;
	overflow: auto;
	background-color: ${props=> props.bgcolor ? props.bgcolor : props.theme.colors.light}
`;

export default Main;