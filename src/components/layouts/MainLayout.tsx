import './MainLayout.css';
import { ReactNode } from 'react';
import { useRoutingContext } from 'components/contexts/RoutingContext';
import { Routes } from 'modals/Route';
import routes from 'config/routes';

const CLASS_NAME = 'MainLayout';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => (
    <div className={CLASS_NAME}>
        <Header />
        <main className={`${CLASS_NAME}__main`}>
            {children}
        </main>
    </div>
);

const Header = () => {
    const { currentRoute, goTo } = useRoutingContext();

    return (
        <header className={`${CLASS_NAME}__header`}>
            <div className={`${CLASS_NAME}__headerInner`}>
                <div className={`${CLASS_NAME}__logo`}>
                    <img src="StreamPixelsLogo.png" />
                </div>
                <div className={`${CLASS_NAME}__tabs`}>
                    {routes.map(({ route, hide }, index) => !hide && (
                        <button
                            key={index}
                            className={currentRoute === route ? 'active' : ''}
                            children={Routes[route].replace('_', ' ')}
                            onClick={() => goTo(route)}
                        />
                    ))}
                </div>
            </div>
        </header>
    );
};

export default MainLayout;