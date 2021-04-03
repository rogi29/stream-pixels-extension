import { ReactElement } from 'react';
import { EquipmentProps } from 'components/display/Equipment';
import { useDummyGetEquippedItems, useGetEquippedItems } from 'queries/getEquippedItems';

interface EquippedItemsContainerProps {
    children: (props: EquipmentProps) => ReactElement;
}

const EquippedItemsContainer = ({ children }: EquippedItemsContainerProps) => {
    const { error, data: equippedItems = {} } = useDummyGetEquippedItems();

    if (!error && !equippedItems) {
        return (
            <span>loading...</span>
        );
    }

    if (!!error) {
        return (
            <span>Error Occurred</span>
        );
    }

    return (
        <>
            {children({ equippedItems })}
        </>
    );
};

export default EquippedItemsContainer;