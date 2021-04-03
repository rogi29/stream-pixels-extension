import './ItemBox.css';
import { Item } from "modals/Item";
import classnames from 'classnames';

const CLASS_NAME = 'ItemBox';

interface ItemBoxProps extends Partial<Item> {
    isPlaceholder?: boolean;
}

const ItemBox = ({
    name,
    imageSrc,
    isPlaceholder = false
}: ItemBoxProps) => (
    <div
        title={name}
        className={classnames(
            CLASS_NAME,
            isPlaceholder && `${CLASS_NAME}--placeholder`
        )}
    >
        <div className={`${CLASS_NAME}__inner`}>
            {imageSrc && (
                <img
                    className={`${CLASS_NAME}__img`}
                    src={imageSrc}
                    alt={name}
                />
            )}
        </div>
    </div>
);

export default ItemBox;