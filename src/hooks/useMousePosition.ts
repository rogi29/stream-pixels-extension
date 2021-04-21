import { useEffect, useState } from 'react';

export const useMousePosition = (target: HTMLElement | Window | null = window) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (!target) {
            return;
        }

        const mouseMoveFunction = (e: any) => setPosition({ x: e.clientX, y: e.clientY });

        target.addEventListener("mousedown", (e) => {
            window.addEventListener("mousemove", mouseMoveFunction);
        });
        
        target.addEventListener("mouseup", (e) => {
            window.removeEventListener("mousemove", mouseMoveFunction);
        });
        
        return () => {
            window.removeEventListener("mousemove", mouseMoveFunction);
        };
    }, [ target ]);

    return position;
};