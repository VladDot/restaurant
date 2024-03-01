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

export const useWidthResize = () => {
  const [windowResize, setWindowResize] = useState(window.innerWidth);

  const updateResize = () => {
    setWindowResize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateResize, { passive: true });

    return;
  }, []);

  return { innerWidth: windowResize };
};
