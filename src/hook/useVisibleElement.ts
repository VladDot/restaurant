import { useEffect, useState } from "react";

interface UseVisibleElementProps {
    elementRef: React.RefObject<HTMLDivElement>;
}

export const useVisibleElement = ({ elementRef }: UseVisibleElementProps) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            console.log(entries);
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                  
                } else {
                    setIsVisible(false);
                }
            });
        });

        const element = elementRef.current;

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [elementRef, setIsVisible]);

    return { isVisible: isVisible };
};
