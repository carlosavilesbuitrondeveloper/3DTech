import styled from 'styled-components';

const Img = styled.img`
	width: 100%;
	max-width: ${props=> props.width ? props.width : '100%'};
`;

export default Img;