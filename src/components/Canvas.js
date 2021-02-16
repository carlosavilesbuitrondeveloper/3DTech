//packages
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { OrthographicCamera, OrbitControls, Stars, Sky } from '@react-three/drei';
import {useRef, useState, useEffect} from 'react';

const GRID_SIZE = 40;

const Camera = (props) => {
	
	const {
	  setDefaultCamera,
	  size: { width, height }
	} = useThree()
  
	const camera = useRef()
  
	// Aspect ratio depending on window size taller or wider
	const aspect = width > height ? height / width : width / height
	const [zoom, setZoom] = useState(aspect * 15)
  
	useEffect(() => {
	  void setDefaultCamera(camera.current)
	  camera.current.rotation.order = 'YXZ'
	  camera.current.translateZ(GRID_SIZE)
  
	  window.addEventListener('wheel', (e) => {
		// Limit zoom dimensions
		if (e.deltaY < 0 && camera.current.zoom <= aspect * 300) setZoom(camera.current.zoom - (e.deltaY / 120) * 10)
		if (e.deltaY > 0 && camera.current.zoom >= aspect * 50) setZoom(camera.current.zoom - (e.deltaY / 120) * 10)
	  })
	}, [setDefaultCamera])
  
	return (
	  <OrthographicCamera
		ref={camera}
		zoom={zoom}
		near={0}
		far={13500}
		rotation={[Math.atan(-1 / Math.sqrt(2)), -Math.PI / 4, 0]}
		onUpdate={(self) => self.updateProjectionMatrix()}
		{...props}
	  />
	)
};

const Controls = (props) => {
	return <OrbitControls {...props} />
};
  
const Canvas3D = (props)=>{

	return(
		<div id="test" className={props.className} style={{width: props.width, height: props.height}}>
			<Canvas>
				{props.ortho && (<Camera />)}
				{props.controls && (<Controls dampingFactor={0.2} />)}
				<hemisphereLight intensity={0.1} />
        		<directionalLight
					castShadow
					shadow-mapSize-height={144 * GRID_SIZE}
					shadow-mapSize-width={144 * GRID_SIZE}
					shadow-camera-top={-GRID_SIZE}
					shadow-camera-right={GRID_SIZE}
					shadow-camera-left={-GRID_SIZE}
					shadow-camera-bottom={GRID_SIZE}
					position={[10, 30, 10]}
					color="white"
					intensity={1.5}
				/>
				{props.children}
			</Canvas>
		</div>
	);
};

export default Canvas3D;