import { useEffect, useState } from 'react';

import { BurgerIcon } from './burgerIcon';
import { BurgerMenuItems } from './burgerMenu';

import './style.scss';

export const BurgerMenu = () => {
  const [isActiveBurger, setActiveBurger] = useState<boolean>(false);

  useEffect(() => {
    if (isActiveBurger) {
      document.body.style.overflow = 'hidden';
    }

    if (!isActiveBurger) {
      document.body.removeAttribute('style');
    }
  }, [isActiveBurger]);

  return (
    <>
      <BurgerIcon isActive={isActiveBurger} setActive={setActiveBurger} />
      <BurgerMenuItems isActiveMenu={isActiveBurger} setIsActiveMenu={setActiveBurger} />
    </>
  );
};
