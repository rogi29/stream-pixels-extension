import './Equipment.css';
import ItemBox from "components/core/ItemBox";
import CharacterScene from "components/scenes/CharacterScene";
import { EquippedItems } from "modals/EquippedItems";

const CLASS_NAME = 'Equipment';

export interface EquipmentProps {
    equippedItems: Partial<EquippedItems>;
}

const Equipment = ({ equippedItems }: EquipmentProps) => {
    return (
        <div className={CLASS_NAME}>
            <div className={`${CLASS_NAME}__startSection`}>
                <ItemBox {...equippedItems.hairStyle || {}} isPlaceholder={!equippedItems.hairStyle} />
                <ItemBox {...equippedItems.hat || {}} isPlaceholder={!equippedItems.hat} />
                <ItemBox {...equippedItems.ears || {}} isPlaceholder={!equippedItems.ears} />
                <ItemBox {...equippedItems.outfit || {}} isPlaceholder={!equippedItems.outfit} />
                <ItemBox {...equippedItems.rightHand || {}} isPlaceholder={!equippedItems.rightHand} />
                <ItemBox {...equippedItems.ring || {}} isPlaceholder={!equippedItems.ring} />
            </div>

            <CharacterScene />

            <div className={`${CLASS_NAME}__endSection`}>
                <ItemBox {...equippedItems.hairColor || {}} isPlaceholder={!equippedItems.hairColor} />
                <ItemBox {...equippedItems.glasses || {}} isPlaceholder={!equippedItems.glasses} />
                <ItemBox {...equippedItems.chin || {}} isPlaceholder={!equippedItems.chin} />
                <ItemBox {...equippedItems.tail || {}} isPlaceholder={!equippedItems.tail} />
                <ItemBox {...equippedItems.leftHand || {}} isPlaceholder={!equippedItems.leftHand} />
                <ItemBox {...equippedItems.necklace || {}} isPlaceholder={!equippedItems.necklace} />
            </div>
        </div>
    );
};

export default Equipment;