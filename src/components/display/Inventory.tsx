import './Inventory.css';
import ScrollContainer from 'react-indiana-drag-scroll';
import ItemGrid from 'components/layouts/ItemGrid';
import { Item, ItemType, itemTypeList } from 'modals/Item';
import ItemIcon from 'components/core/ItemIcon';
import { ItemManagementContextType } from 'components/contexts/ItemManagementContext';

const CLASS_NAME = 'Inventory';

export interface InventoryProps {
    items: Item[];
    currentItemType: ItemType;
    filterByType: ItemManagementContextType['filterByType'];
    equip: ItemManagementContextType['equip'];
}

const ITEM_SIZE = 72;
const COLUMNS = 5;
const ITEM_GAP = 10;
const width = COLUMNS * ITEM_SIZE + (ITEM_GAP * (COLUMNS - 1));

const Inventory = ({ items, currentItemType, filterByType, equip }: InventoryProps) => {
    return (
        <div className={CLASS_NAME}>
            <ScrollContainer vertical={false} className={`${CLASS_NAME}__tabs`} style={{ width: `${width}px` }}>
                <button
                    title="All items"
                    className={`${CLASS_NAME}__tabControl`}
                    onClick={() => filterByType('ALL')}
                    disabled={currentItemType === 'ALL'}
                    children={<i className="icon icon-menu" />}
                />
                {itemTypeList.map(itemType => (
                    <button
                        key={itemType}
                        title={itemType.replace('_', ' ').toLowerCase()}
                        className={`${CLASS_NAME}__tabControl`}
                        onClick={() => filterByType(itemType)}
                        disabled={currentItemType === itemType}
                        children={<ItemIcon itemType={itemType} />}
                    />
                ))}
            </ScrollContainer>
            <ItemGrid
                items={items}
                columns={COLUMNS}
                itemSize={ITEM_SIZE}
                gap={ITEM_GAP}
                width={width}
                handleItemDoubleClick={equip}
            />
        </div>
    );
};

export default Inventory;