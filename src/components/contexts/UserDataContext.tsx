import { useRef, useContext, createContext } from "react";

export interface UserDataContextType {
    id: string | null;
}

export const UserDataContext = createContext<UserDataContextType>({
    id: null
});

export const useUserDataContext = () => {
    const context = useContext<UserDataContextType>(UserDataContext);

    if (!context) {
        throw new Error('UserDataContext is undefined, please verify you are calling useUserDataContext() as child of a <UserDataProvider> component.');
    }

    return context;
};

export const UserDataProvider: React.FunctionComponent<{ id: string; }> = ({ id, children }) => {
    const idRef = useRef<string>(id);
    
    return (
        <UserDataContext.Provider value={{ id: idRef.current }}>
            {children}
        </UserDataContext.Provider>
    );
};

export default UserDataContext;