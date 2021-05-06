import { useState } from "react";

interface MutateCallback<Data> {
    (data: Data): Data
};

export interface DummyQueryProps<Data, Error> {
    data?: Data;
    error?: Error;
}

export interface DummyQueryResponse<Data, Error> extends DummyQueryProps<Data, Error>{
    mutate: (data: MutateCallback<Data | undefined>) => void;
}

/*
(data?: Data | Promise<Data> | mutateCallback<Data>, shouldRevalidate?: boolean) => Promise<Data | undefined>
*/
/**
 * 
 * @param id 
 * @param dummyResponse 
 * @returns 
 */
export const useDummyQuery = <Data = any, Error = any>(dummyResponse: DummyQueryProps<Data, Error>): DummyQueryResponse<Data, Error> => {
    const [ response, setResponse ] = useState<DummyQueryProps<Data, Error>>(dummyResponse);

    const mutate = async (data: MutateCallback<Data | undefined>) => {
        if (data) {
            setResponse(response => ({
                ...response,
                data: data(response.data)
            }));
        }
    };
    
    return {
        ...response,
        mutate
    };
};