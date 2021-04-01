import { useEffect, useState } from 'react';

export const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMoveFunction = (e: any) => setPosition({ x: e.clientX, y: e.clientY });

        window.addEventListener("mousedown", (e) => {
            window.addEventListener("mousemove", mouseMoveFunction);
        });
        
        window.addEventListener("mouseup", (e) => {
            window.removeEventListener("mousemove", mouseMoveFunction);
        });
        
        return () => {
            window.removeEventListener("mousemove", mouseMoveFunction);
        };
    }, []);

    return position;
};