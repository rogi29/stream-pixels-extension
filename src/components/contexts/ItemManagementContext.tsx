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
    equip?: (name: string, item: Item) => void;
    store?: (item: Item) => void;
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

export const ItemManagementProvider: React.FunctionComponent<{}> = ({ children }) => {
    const { mutate: mutateItems, error: itemsError, data: items } = useDummyGetItems();
    const { mutate: mutateEquippedItems, error: equippedItemsError, data: equippedItems = {} } = useDummyGetEquippedItems();
    const [ currentItemType, setCurrentItemType ] = useState<ItemFilterType>('ALL');
    const [ storedItemList, setFilteredItems ] = useState<Item[]>(items || []);
    
    const filterByType = (itemType: ItemFilterType) => {
        setCurrentItemType(itemType);
    };

    const store = (item: Item) => {
        removeFromEquipment(item, () => {
            window.setTimeout(() => {
                addToStore(item);
            });
        });
    };

    const equip = (name: string, item: Item) => {
        addToEquipment(name, item, () => {
            window.setTimeout(() => {
                removeFromStore(item);
            });
        });
    };

    const addToEquipment = (name: string, item: Item, callback: () => void) => {
        mutateEquippedItems((equippedItems = {}) => {
            const values: (Item | undefined)[] = Object.values(equippedItems);
            const isEquipped = values.some((currItem) => currItem && currItem.id === item.id);
    
            if (name && !isEquipped) {
                equippedItems = {
                    ...equippedItems,
                    [name]: {
                        ...item,
                        quantity: 1
                    }
                };

                callback();
            }

            return equippedItems;
        });
    };

    const removeFromEquipment = (item: Item, callback: () => void) => {
        mutateEquippedItems(({ ...cloned }) => {
            const keys = Object.keys(cloned);
            const items: (Item | undefined)[] = Object.values(cloned);
            const index = items.findIndex((currItem) => currItem && currItem.id === item.id);
            
            if (index > -1) {
                const name = keys[index] as keyof EquippedItems;
                delete cloned[name];
                callback();
            }

            return cloned;
        });
    };

    const addToStore = (item: Item) => {
        mutateItems(([ ...cloned ] = []) => {
            const index = cloned.findIndex(currItem => item.id === currItem.id);

            if (index > -1) {
                cloned[index] = {
                    ...item,
                    quantity: item.quantity + 1
                };
            } else {
                cloned.push(item);
            }

            return cloned;
        });
    };

    const removeFromStore = (item: Item) => {
        mutateItems(([ ...cloned ] = []) => {
            const index = cloned?.findIndex(({ id }) => id === item.id);

            if (index > -1 && cloned) {
                if (cloned[index].quantity > 0) {
                    cloned[index] = {
                        ...item,
                        quantity: item.quantity - 1
                    };
                }
        
                if (cloned[index].quantity < 1) {
                    cloned = cloned.filter((_, currIndex) => currIndex !== index);
                }
            }

            return cloned;
        });
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
            {children}
        </ItemManagementContext.Provider>
    );
};

export default ItemManagementContext;