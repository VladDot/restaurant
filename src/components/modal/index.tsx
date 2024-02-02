import { PropsWithChildren, useEffect } from "react";
import { Portal } from "./portal";

interface ModalProps {
    isOpen: boolean;
    onClose: (closer: boolean) => void;
}

export const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
    isOpen,
    onClose,
    children,
}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        }
        return () => document.body.removeAttribute("style");
    }, [isOpen]);

    if (!isOpen) return null;
    return (
        <Portal>
            <div className="w-full h-screen fixed top-0 left-0 z-[99999] backdrop-blur-sm flex justify-center items-center animate-fadeIn">
                <div className="absolute w-full h-full bg-black opacity-50 z-2"></div>
                <button
                    className="absolute right-[25px] top-[25px] z-[10] text-white capitalize"
                    onClick={() => onClose(false)}
                >
                    close
                </button>

                <div className="relative z-[4] drop-shadow-lg translate-z-[50]">
                    {children}
                </div>
            </div>
        </Portal>
    );
};
