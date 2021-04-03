import './App.css';
import { SWRConfig } from 'swr';
import { UserDataProvider } from 'components/contexts/UserDataContext';
import CharacterCustomizationScreen from 'components/screens/CharacterCustomizationScreen';

const swrConfig = {
    revalidateOnFocus: false
};

const App = () => (
    <SWRConfig value={swrConfig}>
        <UserDataProvider id="0">
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/388wUjNHSGE?controls=0&loop=1&autoplay=1&showinfo=0&loop=1&mute=1&amp;start=15"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute' }}
            ></iframe>
            <div className="App">
                <CharacterCustomizationScreen />
            </div>
        </UserDataProvider>
    </SWRConfig>
);

export default App;
