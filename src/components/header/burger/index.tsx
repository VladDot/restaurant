import { useState } from 'react';

import { BurgerIcon } from './burgerIcon';
import { BurgerMenuItems } from './burgerMenu';

import './style.scss';

export const BurgerMenu = () => {
  const [isActiveBurger, setActiveBurger] = useState<boolean>(false);

  return (
    <>
      <BurgerIcon isActive={isActiveBurger} setActive={setActiveBurger} />
      <BurgerMenuItems isActiveMenu={isActiveBurger} setIsActiveMenu={setActiveBurger} />
    </>
  );
};
