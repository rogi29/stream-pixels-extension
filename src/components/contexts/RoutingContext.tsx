import { useContext, createContext, ReactNode, useState, ReactElement, useMemo } from "react";
import { Routes } from "modals/Route";
import routes from "config/routes";

interface RouteingProviderProps {
    children: (props: RoutingContextType) => ReactNode;
}

export interface RoutingContextType {
    currentRoute: Routes;
    goTo: (route: Routes) => void;
    renderRoute: () => ReactNode;
}

export const RoutingContext = createContext<RoutingContextType>({
    currentRoute: Routes.INVENTORY,
    goTo: () => {},
    renderRoute: () => null
});

export const useRoutingContext = () => {
    const context = useContext<RoutingContextType>(RoutingContext);

    if (!context) {
        throw new Error('RoutingContext is undefined, please verify you are calling useRoutingContext() as child of a <RoutingProvider> component.');
    }

    return context;
};

export const RoutingProvider: React.FunctionComponent<RouteingProviderProps> = ({ children }) => {
    const [ currentRoute, setCurrentRoute ] = useState<Routes>(Routes.INVENTORY);

    const goTo = (route: Routes) => {
        setCurrentRoute(route);
    };

    const renderRoute = () => (
        routes.find(({ route }) => route === currentRoute)?.render()
    );

    const value = useMemo(() => ({ currentRoute, goTo, renderRoute }), [ currentRoute ])
    
    return (
        <RoutingContext.Provider value={value}>
            {children(value)}
        </RoutingContext.Provider>
    );
};

export default RoutingContext;