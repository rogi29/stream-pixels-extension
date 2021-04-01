import { Canvas } from '@react-three/fiber';
import PageLayout from 'components/layouts/PageLayout';
import Box from '../objects/Box';
import Character from '../objects/Character';

const CharacterScene = () => (
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Character position={[0, -2.5, 0]} scale={[0.03, 0.03, 0.03]} />
  </Canvas>
);

export default CharacterScene;
