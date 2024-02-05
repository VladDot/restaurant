import { useState } from "react";

export const useDelayAnimation = (delay: number) => {
    const [isOpen, setIsOpen] = useState(false);

    const [isAnimation, setIsAnimation] = useState(false);

    const setOpen = (open?: boolean) => {
        open = open === undefined ? !isOpen : open;

        if (open) {
            setIsOpen(true);
            setIsAnimation(false);
        }

        if (!open) {
            setIsAnimation(true);
            setTimeout(() => setIsOpen(false), delay);
        }
    };

    return { isOpen, isAnimation, setOpen };
};
