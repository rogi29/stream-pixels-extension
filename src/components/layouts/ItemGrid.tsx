import Cell from "components/layouts/Cell";
import Grid from "components/layouts/Grid";
import { Item } from "modals/Item";
import Slot from 'components/core/Slot';
import ItemCell from 'components/core/ItemCell';

export interface ItemGridProps {
    rows?: number;
    columns?: number;
    itemSize?: string;
    gap?: string;
    width?: string;
    items: Item[];
    handleItemDoubleClick?: (item: Item) => void;
}

const ItemGrid = ({
    items,
    rows = 5,
    columns = 5,
    itemSize = '72px',
    gap = '10px',
    width = `calc(${columns} * ${itemSize} + (${gap} * (${columns} - 1)))`,
    handleItemDoubleClick = () => {}
}: ItemGridProps) => {
    const numOfEmptyItems = (rows * columns) - items.length;

    return (
        <Grid
            width={width}
            gap={gap}
            columnsWidth={itemSize}
            rowsHeight={itemSize}
            rows={rows}
            columns={columns}
        >
            {items.map((item, index) => (
                <Cell key={item.id}>
                    <Slot>
                        <ItemCell {...item} onDoubleClick={() => handleItemDoubleClick(item)} />
                    </Slot>
                </Cell>
            ))}
            {Array.from({ length: numOfEmptyItems }).map((_, i) => (
                <Cell key={i}>
                    <Slot />
                </Cell>
            ))}
        </Grid>
    );
};

export default ItemGrid;