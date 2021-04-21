import './ItemCell.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Item } from 'modals/Item';

const CLASS_NAME = 'ItemCell';

export interface ItemCellProps extends Partial<Item> {
    onDoubleClick?: (...args: any) => any;
}

const ItemCell = ({ name, quantity, imageSrc, onDoubleClick }: ItemCellProps) => (
    <div className={CLASS_NAME} title={name} onDoubleClick={onDoubleClick}>
        <div className={`${CLASS_NAME}__inner`}>
            <LazyLoadImage
                className={`${CLASS_NAME}__img`}
                alt={name}
                src={imageSrc}
            />
            {quantity && quantity > 1 && (
                <span className={`${CLASS_NAME}__quantity`}>{quantity}</span>
            )}
        </div>
    </div>
);

export default ItemCell;