import './ItemCell.css';
import { useDrag } from 'react-dnd';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Item } from 'modals/Item';

const CLASS_NAME = 'ItemCell';

export interface ItemCellProps extends Partial<Item> {
    onClick?: (e: any) => void;
    onDrag?: (e: any) => void;
}

const ItemCell = ({
    onClick = () => {},
    onDrag = () => {},
    ...item
}: ItemCellProps) => {
    const {
        name,
        quantity,
        type,
        imageSrc,
    } = item;
    
    const [ collected, dragRef, dragPreviewRef ] = useDrag(() => ({
        type: type || 'NONE',
        item: item,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    if ((collected as any)?.isDragging) {
        return (
            <div ref={dragPreviewRef} />
        );
    }

    return (
        <div ref={dragRef} className={CLASS_NAME} title={name} onClick={onClick} {...collected}>
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