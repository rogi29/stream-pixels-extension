import { ReactElement } from 'react';
import { Item } from 'modals/Item';
import { useLocalStorage } from 'hooks/useLocalStorage';

const INVENTORY_GRID_KEY = 'INVENTORY_GRID_KEY';

interface InventoryContainerProps {
    children: (props: {}) => ReactElement;
}

const InventoryContainer = ({ children }: InventoryContainerProps) => {
    const [ inventoryGrid, setInventoryGrid ] = useLocalStorage<{ [key: string]: number }>(INVENTORY_GRID_KEY, {});

    const relocateItem = (item: Item, index: number) => {
        setInventoryGrid({
            ...inventoryGrid,
            [item.id]: index
        });
    };

    return (
        <>
            {children({ relocateItem })}
        </>
    );
};

export default InventoryContainer;