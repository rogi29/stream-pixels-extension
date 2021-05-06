import Cell from "components/layouts/Cell";
import Grid from "components/layouts/Grid";
import Slot from 'components/core/Slot';
import ItemCell from 'components/core/ItemCell';
import { useItemManagementContext } from "components/contexts/ItemManagementContext";
import { Item, ItemType, itemTypeList } from "modals/Item";

export interface ItemGridProps {
    rows?: number;
    columns?: number;
    itemSize?: string;
    gap?: string;
    width?: string;
    items: Item[];
    onDrop?: (...props: any) => any;
    onDrag?: (...props: any) => any;
}

const ItemGrid = ({
    items,
    rows = 5,
    columns = 5,
    itemSize = '72px',
    gap = '10px',
    width = `calc(${columns} * ${itemSize} + (${gap} * (${columns} - 1)))`,
    onDrop = () => {},
    onDrag = () => {}
}: ItemGridProps) => {
    const numOfEmptyItems = (rows * columns) - items.length;
    const { currentItemType } = useItemManagementContext();
    const type = currentItemType === 'ALL' ? [ ...itemTypeList ] : currentItemType;

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
                        <ItemCell {...item} onDrag={onDrag} />
                    </Slot>
                </Cell>
            ))}
            {Array.from({ length: numOfEmptyItems }).map((_, i) => (
                <Cell key={`${type}_${i}`}>
                    <Slot type={type} onDrop={onDrop} />
                </Cell>
            ))}
        </Grid>
    );
};

export default ItemGrid;