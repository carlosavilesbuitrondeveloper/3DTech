import styled from 'styled-components';

const Line = styled.div`
	width: 100%;
	max-width: ${props=> props.width ? props.width : props.theme.size.width};
	height: ${props=> props.height ? props.height : '6px'};
	background-color: ${props=> props.bgcolor ? props.bgcolor : props.theme.colors.darkest};
	margin: 0 auto 20px;
`;

export default Line;