import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const Box = (props: any) => {
    // This reference will give us direct access to the mesh
    const meshRef = useRef<any>();

    // Set up state for the hovered and active state
    const [ hovered, setHover ] = useState(false);
    const [ active, setActive ] = useState(false);

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01
    });
    
    return (
        <mesh
            {...props}
            ref={meshRef}
            scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onClick={(e) => setActive(!active)}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}
        >
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
};

export default Box;
