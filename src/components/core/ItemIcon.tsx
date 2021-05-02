import './ItemIcon.css';
import classNames from 'classnames';
import { ItemType } from 'modals/Item';

export interface ItemIconProps {
    itemType: ItemType;
    onClick?: (...args: any) => void;
}

const ItemIcon = ({
    itemType,
    onClick
}: ItemIconProps) => (
    <i
        onClick={onClick}
        className={classNames(
            'ItemIcon',
            `icon-item-type-${itemType.toLowerCase()}`
        )}
    />
);

export default ItemIcon;