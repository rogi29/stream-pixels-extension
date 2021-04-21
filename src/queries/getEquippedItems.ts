/**
 * getEquippedItems dummy Query
 */

import useSWR from 'swr';
import { useUserDataContext } from 'components/contexts/UserDataContext';
import { EquippedItems } from 'modals/EquippedItems';
import { API_BASE_URL, API_TOKEN } from 'globals';
import { useDummyQuery } from 'hooks/useDummyQuery';

const defaultConfig = {
    method: 'GET',
    headers: {
        'X-TOKEN': API_TOKEN
    }
};

export const useGetEquippedItems = () => useSWR<EquippedItems, Error>(useUserDataContext().id, getEquippedItems);

export const useDummyGetEquippedItems = () => useDummyQuery<Partial<EquippedItems>, Error | null>({
    error: null,
    data: {
        outfit: {
            id: '12515',
            name: 'witchOutfit',
            type: 'OUTFIT',
            quantity: 1,
            imageSrc: 'stream-pixels-extension/icons/WitchCraftIcons_31_t.png'
        },
        rightHand: {
            id: '346643',
            name: 'witchKnife',
            type: 'HAND',
            quantity: 1,
            imageSrc: 'stream-pixels-extension/icons/WitchCraftIcons_35_t.png'
        }
    }
});

export const getURL = (userId: string): URL => new URL(`getEquippedItemsExampleUrl?userId=${userId}`, API_BASE_URL);

export const getEquippedItems = (userId: string, init: RequestInit = {}): Promise<EquippedItems> => (
    fetch(
        getURL(userId).toString(),
        { ...defaultConfig, ...init }
    )
    .then(res => res.json())
    .then(json => json.data)
);