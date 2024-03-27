import { useEffect, useState } from "react";
import { useWindowHeight, useWindowWidth } from ".";

export const useAspectRatio = () => {
    const [isToggler, setIsToggler] = useState(true);

    const { width } = useWindowWidth();
    const { height } = useWindowHeight();

    const reverseAspect = height / width;

    useEffect(() => {
        const aspect = width / height;

        setIsToggler(aspect > 1);
    }, [width, height]);

    return { isToggler, reverseAspect };
};
