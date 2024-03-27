import { useEffect, useState } from "react";

export const useWindowHeight = () => {
    const [height, setHeight] = useState<number>(window.innerHeight);

    useEffect(() => {
        const changeHeight = () => {
            setHeight(window.innerHeight);
        };

        window.addEventListener("resize", changeHeight);

        return () => window.removeEventListener("resize", changeHeight);
    }, [height]);

    return { height };
};
