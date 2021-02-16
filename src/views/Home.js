//utils
import {storage} from '../utils/utils';

//packages
import { useHistory } from "react-router-dom";
import {Suspense} from 'react';

//components
import {H1} from '../components/styled/Headlines';
import Main from '../components/styled/Main';
import Container from '../components/styled/Container';
import Img from '../components/styled/Img';
import Centered from '../components/styled/Centered';
import Line from '../components/styled/Line';
import {LargeButton} from '../components/styled/Button';


//img
import img from "../img/svg/box.svg";

const content = {
	title_01: 'Containers',
	title_02: 'Clusters',
	main_img: 'ship-containers.svg',
	main_img_format: 'SVG'
};

function Home(){

	const history = useHistory();

	const play = ()=>{
		history.push("/game");
	};

	return(
		<Main id="view-home" className="flex-centered">
			<Container>
				<Centered>
					<Img src={`${storage}${content.main_img_format}/${content.main_img}`} width="280px" />
					<H1 margin="20px auto 10px" hasColor>
						{content.title_01} 
						<span style={{color: '#000'}}> &amp; </span>{content.title_02}
					</H1>
					<Line width="460px"/>
					<LargeButton onClick={play}>Play</LargeButton>
				</Centered>
			</Container>
		</Main>
	);
};

export default Home;