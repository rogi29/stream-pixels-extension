import { Canvas } from '@react-three/fiber';
import { Euler } from 'three';

import { useMousePosition } from 'hooks/useMousePosition';
import Box from 'components/objects/Box';
import Character from 'components/objects/Character';

const CharacterScene = () => {
    const mousePosition = useMousePosition();
    const posX = mousePosition.x / 100;

    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Character position={[0, -2.5, 0]} scale={[0.03, 0.03, 0.03]} rotation={new Euler(0, parseFloat(posX.toFixed(2)), 0)} />
        </Canvas>
    );
};

export default CharacterScene;
