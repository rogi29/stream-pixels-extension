import { CHIN, EARS, GLASSES, HAIR_COLOR, HAIR_STYLE, HAND, HAT, NECKLACE, OUTFIT, RING, TAIL } from "./Item";

/**
 * 12 slots
 */
export interface EquippedItems {
    hairStyle: HAIR_STYLE;
    hairColor: HAIR_COLOR;
    outfit: OUTFIT;
    leftHand: HAND;
    rightHand: HAND;
    glasses: GLASSES;
    hat: HAT;
    chin: CHIN;
    ears: EARS;
    tail: TAIL;
    necklace: NECKLACE;
    ring: RING;
}