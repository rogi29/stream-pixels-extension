import { SWRConfig } from 'swr';
import CharacterScene from './components/scenes/CharacterScene';

const swrConfig = {
    revalidateOnFocus: false
};

const App = () => (
    <SWRConfig value={swrConfig}>
        <div className="App" style={{ height: '100vh', background: '#aaa' }}>
            <CharacterScene />
        </div>
    </SWRConfig>
);

export default App;
