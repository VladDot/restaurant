import React, { useEffect, PropsWithChildren, useRef, useState } from "react";
import { Portal } from "./portal";
import { useOutsideClick } from "../../hook/useOutsideClick";
import clsx from "clsx";

interface ModalProps {
    isOpen: boolean;
    onClose: (closer: boolean) => void;
}

export const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
    isOpen,
    onClose,
    children,
}) => {
    const [isTouched, setIsTouched] = useState(false);
    const childRef = useRef<HTMLDivElement>(null);

    const setClose = () => {
        onClose(false);
    };

    useOutsideClick(childRef, () => {
        if (isTouched) {
            setClose();
        }
    });

    useEffect(() => {
        if (isOpen) {
            setIsTouched(true);
            document.body.style.overflow = "hidden";
        }
        return () => {
            setIsTouched(false);
            document.body.removeAttribute("style");
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const childrenWithRef = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement, {
                ref: childRef,
            });
        }
        return child;
    });

    return (
        <Portal>
            {isOpen && (
                <div
                    className={clsx(
                        "modal-class w-full h-screen fixed top-0 left-0 z-[99999] backdrop-blur-sm animate-fadeIn"
                    )}
                >
                    <div className="absolute w-full h-full bg-black opacity-50 "></div>
                    <button
                        className="absolute right-[25px] top-[25px] z-[10] text-white capitalize"
                        onClick={() => onClose(false)}
                    >
                        close
                    </button>

                    {childrenWithRef}
                </div>
            )}
        </Portal>
    );
};
