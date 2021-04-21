import { CHIN, EARS, GLASSES, HAIR_COLOR, HAIR_STYLE, HAND, HAT, NECKLACE, OUTFIT, RING, TAIL } from "./Item";

export enum EquippedSlots {
    hairStyle = 'hairStyle',
    hairColor = 'hairColor',
    outfit = 'outfit',
    leftHand = 'leftHand',
    rightHand = 'rightHand',
    glasses = 'glasses',
    hat = 'hat',
    chin = 'chin',
    ears = 'ears',
    tail = 'tail',
    necklace = 'necklace',
    ring = 'ring'
}

export const equipmentSlotTypeMap = {
    [EquippedSlots.hairStyle]: 'HAIR_STYLE',
    [EquippedSlots.hairColor]: 'HAIR_COLOR',
    [EquippedSlots.outfit]: 'OUTFIT',
    [EquippedSlots.leftHand]: 'HAND',
    [EquippedSlots.rightHand]: 'HAND',
    [EquippedSlots.glasses]: 'GLASSES',
    [EquippedSlots.hat]: 'HAT',
    [EquippedSlots.chin]: 'CHIN',
    [EquippedSlots.ears]: 'EARS',
    [EquippedSlots.tail]: 'TAIL',
    [EquippedSlots.necklace]: 'NECKLACE',
    [EquippedSlots.ring]: 'RING'
};

/**
 * 12 slots
 */
export interface EquippedItems {
    [EquippedSlots.hairStyle]: HAIR_STYLE;
    [EquippedSlots.hairColor]: HAIR_COLOR;
    [EquippedSlots.outfit]: OUTFIT;
    [EquippedSlots.leftHand]: HAND;
    [EquippedSlots.rightHand]: HAND;
    [EquippedSlots.glasses]: GLASSES;
    [EquippedSlots.hat]: HAT;
    [EquippedSlots.chin]: CHIN;
    [EquippedSlots.ears]: EARS;
    [EquippedSlots.tail]: TAIL;
    [EquippedSlots.necklace]: NECKLACE;
    [EquippedSlots.ring]: RING;
}