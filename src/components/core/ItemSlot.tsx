import './ItemSlot.css';
import ItemIcon from './ItemIcon';
import Slot, { SlotProps } from './Slot';
import classNames from 'classnames';

const CLASS_NAME = 'ItemSlot';

export interface ItemSlotProps extends SlotProps {}

const ItemSlot = ({ className, ...props }: ItemSlotProps) => (
    <Slot {...props} className={classNames(CLASS_NAME, className)}>
        <ItemIcon itemType="HAT" />
    </Slot>
);

export default ItemSlot;