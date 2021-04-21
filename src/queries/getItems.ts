/**
 * getItems dummy Query
 */

import useSWR from 'swr';
import { useUserDataContext } from 'components/contexts/UserDataContext';
import { Item } from 'modals/Item';
import { API_BASE_URL, API_TOKEN } from 'globals';
import { useDummyQuery } from 'hooks/useDummyQuery';

const defaultConfig = {
    method: 'GET',
    headers: {
        'X-TOKEN': API_TOKEN
    }
};

export const useGetItems = () => useSWR<Item[], Error>(useUserDataContext().id, getItems);

export const useDummyGetItems = () => useDummyQuery<Item[], Error | null>({
    error: null,
    data: [
        {
            id: '0',
            name: 'witchHat',
            type: 'HAT',
            quantity: 1,
            imageSrc: 'stream-pixels-extension/icons/WitchCraftIcons_76_t.png'
        },
        {
            id: '1',
            name: 'fancySword',
            type: 'HAND',
            quantity: 2,
            imageSrc: 'stream-pixels-extension/icons/WitchCraftIcons_34_t.PNG'
        }
    ]
});

export const getURL = (id: string): URL => new URL(`getItemsExampleUrl?userId=${id}`, API_BASE_URL);

export const getItems = (id: string, init: RequestInit = {}): Promise<Item[]> => (
    fetch(
        getURL(id).toString(),
        { ...defaultConfig, ...init }
    )
    .then(res => res.json())
    .then(json => json.data)
);