import './Inventory.css';
import ItemBox from "components/core/ItemBox";
import Cell from "components/layouts/Cell";
import Grid from "components/layouts/Grid";
import { Item } from "modals/Item";

const CLASS_NAME = 'Inventory';
const ROWS = 4;
const COLUMNS = 3;
const ITEM_SIZE = 72;
const ITEM_GAP = 6;
const GRID_WIDTH = COLUMNS * ITEM_SIZE + (ITEM_GAP * (COLUMNS - 1));

export interface InventoryProps {
    items: Item[];
}

const Inventory = ({ items }: InventoryProps) => {
    const emptyItemsLen = (ROWS * COLUMNS) - items.length;

    return (
        <div className={CLASS_NAME}>
            <Grid
                width={`${GRID_WIDTH}px`}
                gap={`${ITEM_GAP}px`}
                columnsWidth={`${ITEM_SIZE}px`}
                rowsHeight={`${ITEM_SIZE}px`}
                rows={ROWS}
                columns={COLUMNS}
            >
                {(items || []).map(item => (
                    <Cell>
                        <ItemBox {...item} />
                    </Cell>
                ))}
                {Array.from({ length: emptyItemsLen }).map(() => (
                    <Cell>
                        <ItemBox isPlaceholder={true} />
                    </Cell>
                ))}
            </Grid>
        </div>
    );
};

export default Inventory;