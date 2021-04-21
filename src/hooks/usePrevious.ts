import { useEffect, useRef } from "react";

export const usePrevious = <T = any>(data: T) => {
    const ref = useRef<T>();

    useEffect(() => {
        ref.current = data;
    }, [data]);

    return ref.current
};