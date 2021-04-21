import './Equipment.css';
import CharacterScene from "components/scenes/CharacterScene";
import { EquippedItems, EquippedSlots } from "modals/EquippedItems";
import { Item, ItemType } from 'modals/Item';
import Slot from 'components/core/Slot';
import ItemIcon from 'components/core/ItemIcon';
import ItemCell from 'components/core/ItemCell';
import { ItemManagementContextType } from 'components/contexts/ItemManagementContext';

const CLASS_NAME = 'Equipment';

type DropHandlerArgs = [string, ItemType, Item | undefined];

export interface EquipmentProps {
    equippedItems: Partial<EquippedItems>;
    store: ItemManagementContextType['store'];
}

const Equipment = ({ equippedItems, store = () => {} }: EquipmentProps) => {
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
                    <Slot key={type} title={type.replace('_', ' ').toLowerCase()}>
                        {item ? (
                            <ItemCell {...item} onDoubleClick={() => store(name as EquippedSlots, item)} />
                        ) : (
                            <ItemIcon itemType={type} />
                        )}
                    </Slot>
                ))}
            </div>

            <CharacterScene />

            <div className={`${CLASS_NAME}__endSection`}>
                {lastSectionList.map(([name, type, item], index) => (
                    <Slot key={type} title={type.replace('_', ' ').toLowerCase()}>
                        {item ? (
                            <ItemCell {...item} onDoubleClick={() => store(name as EquippedSlots, item)} />
                        ) : (
                            <ItemIcon itemType={type} />
                        )}
                    </Slot>
                ))}
            </div>
        </div>
    );
};

export default Equipment;