import { useEffect, useState } from "react";

export const useWindowWidth = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const changeWidth = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", changeWidth);

        return () => window.removeEventListener("resize", changeWidth);
    }, [width]);

    return { width };
};
