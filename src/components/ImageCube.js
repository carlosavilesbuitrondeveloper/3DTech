//packages
import { useFrame, useLoader } from 'react-three-fiber';
import * as THREE from 'three';
import { useRef, useState } from 'react';

const Cube = (props)=>{

	const mesh = useRef();

	//initial settings
	const initialScale = props.scale ? props.scale : [1, 1, 1];
	const rotateSpeed = props.rotateSpeed ? props.rotateSpeed : 0.01; 

	//load
	const texture = useLoader(THREE.TextureLoader, props.img);

	const handleClick = (e)=>{
		if(props.handleClick) props.handleClick();
	};

	useFrame(() => {
		if(props.doesRotate){
			mesh.current.rotation.x = mesh.current.rotation.y += rotateSpeed;
		}
	});

	return (
		<mesh
		  {...props}
		  ref={mesh}
		  scale={initialScale}
		  onClick={handleClick}
		>
		  <boxBufferGeometry args={initialScale} />
		  <meshPhongMaterial transparent="false" attach="material" map={texture} color={'pink'} />
		  {props.children && (props.children)}
		</mesh>
	);

};

export default Cube;