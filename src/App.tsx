import './icons.css';
import './App.css';
import { SWRConfig } from 'swr';
import { UserDataProvider } from 'components/contexts/UserDataContext';
import { RoutingProvider } from 'components/contexts/RoutingContext';

const swrConfig = {
    revalidateOnFocus: false
};

const App = () => (
    <SWRConfig value={swrConfig}>
        <UserDataProvider id="0">
            <RoutingProvider>
                {({ renderRoute }) => (
                    <>
                        <div className="App">
                            {renderRoute()}
                        </div>
                    </>
                )}
            </RoutingProvider>
        </UserDataProvider>
    </SWRConfig>
);

export default App;
