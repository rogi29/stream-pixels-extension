import { useEffect, useRef } from "react";

export const usePrevious = (data: any) => {
    const ref = useRef<any>();

    useEffect(() => {
        ref.current = data;
    }, [data]);

    return ref.current
};