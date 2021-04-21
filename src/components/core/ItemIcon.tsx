import './ItemIcon.css';
import classNames from 'classnames';
import { ItemType } from 'modals/Item';

export interface ItemIconProps {
    itemType: ItemType;
}

const ItemIcon = ({
    itemType
}: ItemIconProps) => (
    <i
        className={classNames(
            'ItemIcon',
            `icon-item-type-${itemType.toLowerCase()}`
        )}
    />
);

export default ItemIcon;