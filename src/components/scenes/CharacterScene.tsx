import './CharacterScene.css';

import { Canvas } from '@react-three/fiber';
import { Euler } from 'three';

import { useMousePosition } from 'hooks/useMousePosition';
import Character from 'components/objects/Character';
import { useEffect, useState } from 'react';

const CharacterScene = () => {
    const [ canvasElement, setCanvasElement ] = useState<HTMLCanvasElement | null>(null);
    const mousePosition = useMousePosition(canvasElement);
    const posX = mousePosition.x / 100;

    useEffect(() => {
        const element = document.querySelector('.CharacterScene canvas');

        if (!canvasElement || (element && element.isSameNode(canvasElement))) {
            setCanvasElement(element as HTMLCanvasElement);
        }
    }, [ canvasElement ]);

    return (
        <Canvas className="CharacterScene">
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Character position={[0, -2.5, 0]} scale={[0.03, 0.03, 0.03]} rotation={new Euler(0, parseFloat(posX.toFixed(2)), 0)} />
        </Canvas>
    );
};

export default CharacterScene;
