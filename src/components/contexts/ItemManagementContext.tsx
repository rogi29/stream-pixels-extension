import { useContext, createContext, useState, useEffect, useMemo, ReactNode } from "react";
import { Item, ItemType, itemTypeList } from "modals/Item";
import { equipmentSlotTypeMap, EquippedItems, EquippedSlots } from "modals/EquippedItems";
import { useDummyGetItems } from "queries/getItems";
import { useDummyGetEquippedItems } from "queries/getEquippedItems";

export type ItemFilterType = ItemType | 'ALL';

export interface ItemManagementContextType {
    storedItemList: Item[];
    currentItemType: ItemFilterType;
    equippedItems: Partial<EquippedItems>;
    filterByType: ( itemType: ItemFilterType ) => void;
    equip?: (item: Item) => void;
    store?: (name: EquippedSlots, item: Item) => void;
}

export interface ItemManagementProviderProps {
    children: (props: ItemManagementContextType) => ReactNode;
}

export const ItemManagementContext = createContext<ItemManagementContextType>({
    storedItemList: [],
    currentItemType: 'ALL',
    equippedItems: {},
    filterByType: () => {},
    equip: () => {},
    store: () => {}
});

export const useItemManagementContext = () => {
    const context = useContext<ItemManagementContextType>(ItemManagementContext);

    if (!context) {
        throw new Error('ItemManagementContext is undefined, please verify you are calling useItemManagementContext() as child of a <ItemManagementProvider> component.');
    }

    return context;
};

export const ItemManagementProvider: React.FunctionComponent<ItemManagementProviderProps> = ({ children }) => {
    const { mutate: mutateItems, error: itemsError, data: items } = useDummyGetItems();
    const { mutate: mutateEquippedItems, error: equippedItemsError, data: equippedItems = {} } = useDummyGetEquippedItems();
    const [ currentItemType, setCurrentItemType ] = useState<ItemFilterType>('ALL');
    const [ storedItemList, setFilteredItems ] = useState<Item[]>(items || []);
    
    const filterByType = (itemType: ItemFilterType) => {
        setCurrentItemType(itemType);
    };

    const store = (name: EquippedSlots, item: Item) => {
        if (equippedItems.hasOwnProperty(name)) {
            removeFromEquipment(name);
            addToStore(item);
        }
    };

    const equip = (item: Item) => {
        if (addToEquipment(item)) {
            removeFromStore(item);
        }
    };

    const addToEquipment = (item: Item): boolean => {
        const name = Object.values(EquippedSlots).find(name => equipmentSlotTypeMap[name] === item.type && !equippedItems[name]);

        if (name) {
            mutateEquippedItems({
                ...equippedItems,
                [name]: {
                    ...item,
                    quantity: 1
                }
            });
            return true;
        }

        return false;
    };

    const removeFromEquipment = (name: keyof EquippedItems) => {
        const cloned = {...equippedItems};
        delete cloned[name];
        mutateEquippedItems(cloned);
    };

    const addToStore = (item: Item) => {
        if (items && item) {
            let cloned = [ ...items ];
            const index = cloned.findIndex(currItem => item.id === currItem.id);

            if (index > -1) {
                cloned[index] = {
                    ...item,
                    quantity: item.quantity + 1
                };
            } else {
                cloned.push(item);
            }

            mutateItems(cloned);
        }
    };

    const removeFromStore = (item: Item) => {
        const index = items?.findIndex(({ id }) => id === item.id);

        if (typeof index === 'number' && items) {
            let cloned = [ ...items ];

            if (cloned[index].quantity > 0) {
                cloned[index] = {
                    ...item,
                    quantity: item.quantity - 1
                };
            }
    
            if (cloned[index].quantity < 1) {
                cloned = cloned.filter((_, currIndex) => currIndex !== index);
            }
    
            mutateItems(cloned);
        }
    };

    useEffect(() => {
        if (currentItemType && items) {
            setFilteredItems(items?.filter(({ type }) => currentItemType === 'ALL' || type === currentItemType));
        }
    }, [ currentItemType, items ]);

    const contextValue = useMemo(() => ({
        storedItemList,
        currentItemType,
        equippedItems,
        filterByType,
        store,
        equip
    }), [
        storedItemList,
        currentItemType,
        equippedItems
    ]);

    return (
        <ItemManagementContext.Provider value={contextValue}>
            {children(contextValue)}
        </ItemManagementContext.Provider>
    );
};

export default ItemManagementContext;