import { ReactElement } from 'react';
import { useDummyGetItems, useGetItems } from 'queries/getItems';

interface ItemsContainerProps {
    children: (props: any) => ReactElement;
}

const ItemsContainer = ({ children }: ItemsContainerProps) => {
    const { error, data: items } = useDummyGetItems();

    if (!error && !items) {
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
            {children({ items })}
        </>
    );
};

export default ItemsContainer;