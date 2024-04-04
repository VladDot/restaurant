import { useEffect, useState } from "react";

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<{
        width: number;
        height: number;
    }>({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const changeWidth = () => {
            const newSize = {
                width: window.innerWidth,
                height: window.innerHeight,
            };
            setWindowSize(newSize);
        };

        window.addEventListener("resize", changeWidth);

        return () => window.removeEventListener("resize", changeWidth);
    }, [windowSize]);

    return windowSize;
};
