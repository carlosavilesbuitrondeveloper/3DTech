import styled from "styled-components";

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	background-color: ${props => props.theme.colors.light};
	overflow: auto;
	display: flex;
	flex-direction:column;
	justify-content:space-between;
`;

export default Wrapper;