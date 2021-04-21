import { useState } from "react";

export interface DummyQueryProps<Data, Error> {
    data?: Data;
    error?: Error;
}

export interface DummyQueryResponse<Data, Error> extends DummyQueryProps<Data, Error>{
    mutate: (data?: Data) => void;
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

    const mutate = async (data?: Data) => {
        setResponse({
            ...response,
            data
        });
    };
    
    return {
        ...response,
        mutate
    };
};