import './Equipment.css';
import CharacterScene from "components/scenes/CharacterScene";
import { Item, ItemType } from 'modals/Item';
import Slot from 'components/core/Slot';
import ItemIcon from 'components/core/ItemIcon';
import ItemCell from 'components/core/ItemCell';
import { useItemManagementContext } from 'components/contexts/ItemManagementContext';

const CLASS_NAME = 'Equipment';

type DropHandlerArgs = [string, ItemType, Item | undefined];

const Equipment = () => {
    const { equippedItems, filterByType, equip = () => {} } = useItemManagementContext();

    const startSectionList: DropHandlerArgs[] = [
        [ 'hairStyle', 'HAIR_STYLE', equippedItems.hairStyle ],
        [ 'hat', 'HAT', equippedItems.hat ],
        [ 'ears', 'EARS', equippedItems.ears ],
        [ 'outfit', 'OUTFIT', equippedItems.outfit ],
        [ 'rightHand', 'HAND', equippedItems.rightHand ],
        [ 'ring', 'RING', equippedItems.ring ]
    ].filter(item => !!item) as DropHandlerArgs[];

    const lastSectionList: DropHandlerArgs[] = [
        [ 'hairColor', 'HAIR_COLOR', equippedItems.hairColor ],
        [ 'glasses', 'GLASSES', equippedItems.glasses ],
        [ 'chin', 'CHIN', equippedItems.chin ],
        [ 'chin', 'TAIL', equippedItems.tail ],
        [ 'leftHand', 'HAND', equippedItems.leftHand ],
        [ 'necklace', 'NECKLACE', equippedItems.necklace ]
    ].filter(item => !!item) as DropHandlerArgs[];

    return (
        <div className={CLASS_NAME}>
            <div className={`${CLASS_NAME}__startSection`}>
                {startSectionList.map(([name, type, item], index) => (
                    <Slot key={type} title={type.replace('_', ' ').toLowerCase()} type={type} onDrop={item => { equip(name, item) }}>
                        {item ? (
                            <ItemCell {...item} onClick={() => filterByType(type)} />
                        ) : (
                            <ItemIcon itemType={type} onClick={() => filterByType(type)} />
                        )}
                    </Slot>
                ))}
            </div>

            <CharacterScene />

            <div className={`${CLASS_NAME}__endSection`}>
                {lastSectionList.map(([name, type, item], index) => (
                    <Slot key={type} title={type.replace('_', ' ').toLowerCase()} type={type} onDrop={item => { equip(name, item) }}>
                        {item ? (
                            <ItemCell {...item} onClick={() => filterByType(type)} />
                        ) : (
                            <ItemIcon itemType={type} onClick={() => filterByType(type)} />
                        )}
                    </Slot>
                ))}
            </div>
        </div>
    );
};

export default Equipment;