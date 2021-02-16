//packages
import * as THREE from 'three';
import { useLoader, useFrame } from 'react-three-fiber';
import { useRef, useState } from 'react';


const ImagePlane = (props)=>{

	const mesh = useRef();
	const texture = useLoader(THREE.TextureLoader, props.img);

	useFrame(() => {
		if(props.isBack){
			mesh.current.rotation.x = 90;
		}
	});

	return(
		<mesh
			{...props}
			ref={mesh}
		>
			<planeBufferGeometry attach="geometry"/>
			<meshStandardMaterial color="white" transparent="false" attach="material" map={texture} />
		</mesh>
	);
};

export default ImagePlane;