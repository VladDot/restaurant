import { useEffect, useRef } from 'react';

import { BurgerIcon } from './burgerIcon';
import { BurgerMenuItems } from './burgerMenu';

import './style.scss';
import { useOutsideClick } from '../../../hook';

interface IBurgerMenuProps {
  isActiveMenu: boolean;
  setIsActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenu: React.FC<IBurgerMenuProps> = ({ isActiveMenu, setIsActiveMenu }) => {
  const childRef = useRef<HTMLDivElement>(null);

  useOutsideClick(childRef, () => {
    if (isActiveMenu === true) {
      setIsActiveMenu(false);
    }
  });

  useEffect(() => {
    if (isActiveMenu) {
      document.body.style.overflow = 'hidden';
    }

    if (!isActiveMenu) {
      document.body.removeAttribute('style');
    }
  }, [isActiveMenu]);

  return (
    <>
      <BurgerIcon isActive={isActiveMenu} setActive={setIsActiveMenu} />
      <BurgerMenuItems isActiveMenu={isActiveMenu} setIsActiveMenu={setIsActiveMenu} />
    </>
  );
};
