//packages
import { useHistory } from "react-router-dom";
import {Suspense} from 'react';

//components
import Main from '../components/styled/Main';
import Container from '../components/styled/Container';
import Img from '../components/styled/Img';
import Centered from '../components/styled/Centered';
import Canvas3D from '../components/Canvas';
import Cube from '../components/Cube';
import ImageCube from '../components/ImageCube';

//img
import box from "../img/svg/box.svg";
import gears from "../img/svg/gears.svg";
import laptop from "../img/svg/laptop.svg";
import ship from "../img/svg/ship-containers.svg";

function Game(){
	const history = useHistory();

	return(
		<Main id="view-game" className="flex-centered">
			<Container>
				<Centered>
					<Canvas3D width="900px" height="600px" className="center game_area" controls ortho>

						{/*grid*/}
						<Cube 
							doesRotate={false} 
							scale={[3,1,3]}
							rotateSpeed={0.01}
							position={[20, 0, 20]}
							rotation={[0,0,0]}
							color="blue"
						/>

						<Cube 
							doesRotate={false} 
							scale={[3,1,3]}
							rotateSpeed={0.01}
							position={[10, 0, 20]}
							rotation={[0,0,0]}
							color="skyblue"
						/>

						<Cube 
							doesRotate={false} 
							scale={[3,1,3]}
							rotateSpeed={0.01}
							position={[0, 0, 20]}
							rotation={[0,0,0]}
							color="skyblue"
						/>	

						<Cube 
							doesRotate={false} 
							scale={[3,1,3]}
							rotateSpeed={0.01}
							position={[-10, 0, 20]}
							rotation={[0,0,0]}
							color="skyblue"
						/>		

						<Cube 
							doesRotate={false} 
							scale={[3,1,3]}
							rotateSpeed={0.01}
							position={[-20, 0, 20]}
							rotation={[0,0,0]}
							color="skyblue"
						/>
						
						<Cube 
							doesRotate={false} 
							scale={[3,1,3]}
							rotateSpeed={0.01}
							position={[-20, 0, 10]}
							rotation={[0,0,0]}
							color="skyblue"
						/>	

						<Cube 
							doesRotate={false} 
							scale={[3,1,3]}
							rotateSpeed={0.01}
							position={[-20, 0, 0]}
							rotation={[0,0,0]}
							color="skyblue"
						/>	

						<Cube 
							doesRotate={false} 
							scale={[3,1,3]}
							rotateSpeed={0.01}
							position={[-20, 0, -10]}
							rotation={[0,0,0]}
							color="skyblue"
						/>

						<Cube 
							doesRotate={false} 
							scale={[3,1,3]}
							rotateSpeed={0.01}
							position={[-20, 0, -20]}
							rotation={[0,0,0]}
							color="red"
						/>

						<Cube 
							doesRotate={false} 
							scale={[3,1,3]}
							rotateSpeed={0.01}
							position={[-10, 0, -20]}
							rotation={[0,0,0]}
							color="skyblue"
						/>

						<Cube 
							doesRotate={false} 
							scale={[3,1,3]}
							rotateSpeed={0.01}
							position={[0, 0, -20]}
							rotation={[0,0,0]}
							color="skyblue"
						/>

						<Cube 
							doesRotate={false} 
							scale={[3,1,3]}
							rotateSpeed={0.01}
							position={[10, 0, -20]}
							rotation={[0,0,0]}
							color="skyblue"
						/>

						<Cube 
							doesRotate={false} 
							scale={[3,1,3]}
							rotateSpeed={0.01}
							position={[20, 0, -20]}
							rotation={[0,0,0]}
							color="skyblue"
						/>

						<Cube 
							doesRotate={false} 
							scale={[3,1,3]}
							rotateSpeed={0.01}
							position={[20, 0, -10]}
							rotation={[0,0,0]}
							color="skyblue"
						/>

						<Cube 
							doesRotate={false} 
							scale={[3,1,3]}
							rotateSpeed={0.01}
							position={[20, 0, 0]}
							rotation={[0,0,0]}
							color="skyblue"
						/>

						<Cube 
							doesRotate={false} 
							scale={[3,1,3]}
							rotateSpeed={0.01}
							position={[20, 0, 10]}
							rotation={[0,0,0]}
							color="skyblue"
						/>

						<Cube 
							doesRotate={false} 
							scale={[3,1,3]}
							rotateSpeed={0.01}
							position={[10, 0, 10]}
							rotation={[0,0,0]}
							color="skyblue"
						/>

						<Cube 
							doesRotate={false} 
							scale={[3,1,3]}
							rotateSpeed={0.01}
							position={[10, 0, 0]}
							rotation={[0,0,0]}
							color="skyblue"
						/>

						<Cube 
							doesRotate={false} 
							scale={[3,1,3]}
							rotateSpeed={0.01}
							position={[10, 0, -10]}
							rotation={[0,0,0]}
							color="skyblue"
						/>

						<Cube 
							doesRotate={false} 
							scale={[3,1,3]}
							rotateSpeed={0.01}
							position={[0, 0, 10]}
							rotation={[0,0,0]}
							color="skyblue"
						/>

						<Cube 
							doesRotate={false} 
							scale={[3,1,3]}
							rotateSpeed={0.01}
							position={[0, 0, 0]}
							rotation={[0,0,0]}
							color="skyblue"
						/>

						<Cube 
							doesRotate={false} 
							scale={[3,1,3]}
							rotateSpeed={0.01}
							position={[0, 0, -10]}
							rotation={[0,0,0]}
							color="skyblue"
						/>

						<Cube 
							doesRotate={false} 
							scale={[3,1,3]}
							rotateSpeed={0.01}
							position={[-10, 0, -10]}
							rotation={[0,0,0]}
							color="skyblue"
						/>

						<Cube 
							doesRotate={false} 
							scale={[3,1,3]}
							rotateSpeed={0.01}
							position={[-10, 0, 0]}
							rotation={[0,0,0]}
							color="skyblue"
						/>

						<Cube 
							doesRotate={false} 
							scale={[3,1,3]}
							rotateSpeed={0.01}
							position={[-10, 0, 10]}
							rotation={[0,0,0]}
							color="skyblue"
						/>
						{/*close grid*/}

						<Suspense fallback={null}>
							<ImageCube 
								doesRotate={true} 
								scale={[2.5,2.5,2.5]}
								position={[0, 5, 0]}
								rotateSpeed={0.01}
								rotation={[0,0,0]}
								img={box}
							>
								<Cube scale={[1.5,1.5,1.5]} doesRotate={false} />
							</ImageCube>

							<ImageCube 
								doesRotate={false} 
								scale={[2.5,2.5,2.5]}
								position={[20, 5, 20]}
								rotateSpeed={0.01}
								rotation={[0,0,0]}
								img={ship}
							>
								<Cube scale={[1.5,1.5,1.5]} doesRotate={false} color="blue" />
							</ImageCube>

							<ImageCube 
								doesRotate={false} 
								scale={[2.5,2.5,2.5]}
								position={[-20, 5, -20]}
								rotateSpeed={0.01}
								rotation={[0,0,0]}
								img={gears}
							>
								<Cube scale={[1.5,1.5,1.5]} doesRotate={false} color="red" />
							</ImageCube>

							<ImageCube 
								doesRotate={true} 
								scale={[2.5,2.5,2.5]}
								position={[20, 5, -20]}
								rotateSpeed={0.01}
								rotation={[0,0,0]}
								img={laptop}
							>
								<Cube scale={[1.5,1.5,1.5]} doesRotate={false} />
							</ImageCube>
						</Suspense>

						{/*floor*/}
						<Cube 
							doesRotate={false} 
							scale={[7,1,7]}
							position={[0,-1,0]}
							rotateSpeed={0.01}
							rotation={[0,0,0]}
						/>
					</Canvas3D>
				</Centered>
			</Container>
		</Main>
	);
};

export default Game;