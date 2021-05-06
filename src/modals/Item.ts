export const itemTypeList = [ 'NONE', 'HAIR_STYLE', 'HAIR_COLOR', 'HAND', 'OUTFIT', 'GLASSES', 'HAT', 'CHIN', 'EARS', 'TAIL', 'NECKLACE', 'RING' ] as const;

export type ItemType = typeof itemTypeList[number];

/**
 * Temporary Interface
 * @todo Must be changed according to the Rest API response
 */
export interface Item {
    id: string;
    name: string;
    quantity: number;
    type: ItemType;
    imageSrc: string;
}

export interface HAIR_STYLE extends Item { type: 'HAIR_STYLE' }

export interface HAIR_COLOR extends Item { type: 'HAIR_COLOR' }

export interface HAND extends Item { type: 'HAND' }

export interface OUTFIT extends Item { type: 'OUTFIT' }

export interface GLASSES extends Item { type: 'GLASSES' }

export interface HAT extends Item { type: 'HAT' }

export interface CHIN extends Item { type: 'CHIN' }

export interface EARS extends Item { type: 'EARS' }

export interface TAIL extends Item { type: 'TAIL' }

export interface NECKLACE extends Item { type: 'NECKLACE' }

export interface RING extends Item { type: 'RING' }