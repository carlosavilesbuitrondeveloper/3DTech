import styled from "styled-components";

const Container =  styled.div`
	width: 100%;
	padding: ${props=> props.padding ? props.padding : '0'};
	margin: ${props=> props.margin ? props.margin : '0 auto'};
	max-width: ${props=> props.width ? props.width : props.theme.size.width};
`;

export default Container;