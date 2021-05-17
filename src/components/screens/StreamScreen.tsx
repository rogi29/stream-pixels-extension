import './StreamScreen.css';
import { useRoutingContext } from 'components/contexts/RoutingContext';
import { Routes } from 'modals/Route';

const StreamScreen = () => {
    const { goTo } = useRoutingContext();

    return (
        <button className="OpenStreamPixelsButton" onClick={() => goTo(Routes.INVENTORY)}>STREAM PIXELS</button>
    );
};

export default StreamScreen;