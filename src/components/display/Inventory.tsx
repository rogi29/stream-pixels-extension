import './Inventory.css';
import ScrollContainer from 'react-indiana-drag-scroll';
import ItemGrid from 'components/layouts/ItemGrid';
import { Item, itemTypeList } from 'modals/Item';
import ItemIcon from 'components/core/ItemIcon';
import {  useItemManagementContext } from 'components/contexts/ItemManagementContext';

const CLASS_NAME = 'Inventory';
const ITEM_SIZE = '4.5rem';
const COLUMNS = 5;
const ITEM_GAP = '10px';
const width = `calc(${COLUMNS} * ${ITEM_SIZE} + (${ITEM_GAP} * (${COLUMNS} - 1)))`;

const Inventory = () => {
    const { storedItemList, currentItemType, filterByType, store } = useItemManagementContext();
    
    return (
        <div className={CLASS_NAME}>
            <ScrollContainer vertical={false} className={`${CLASS_NAME}__tabs`} style={{ width }}>
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
                items={storedItemList}
                columns={COLUMNS}
                itemSize={ITEM_SIZE}
                gap={ITEM_GAP}
                width={width}
                onDrop={store}
            />
        </div>
    );
};

export default Inventory;