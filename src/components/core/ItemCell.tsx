import './ItemCell.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useDoubleClick from 'use-double-click';
import { Item } from 'modals/Item';
import { useRef } from 'react';

const CLASS_NAME = 'ItemCell';

export interface ItemCellProps extends Partial<Item> {
    onClick?: (e: any) => void;
    onDoubleClick?: (e: any) => void;
}

const ItemCell = ({
    name,
    quantity,
    imageSrc,
    onClick: onSingleClick = () => {},
    onDoubleClick = () => {}
}: ItemCellProps) => {
    const ref = useRef<HTMLDivElement>(null);
    
    useDoubleClick<HTMLDivElement>({
        ref,
        latency: 250,
        onSingleClick,
        onDoubleClick,
    });

    return (
        <div ref={ref} className={CLASS_NAME} title={name}>
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
};

export default ItemCell;