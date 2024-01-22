import { useEffect, useState } from 'react';

export const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);

  const updatePosition = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', updatePosition, { passive: true });

    return;
  }, []);

  return { scrollY: scrollPosition };
};
