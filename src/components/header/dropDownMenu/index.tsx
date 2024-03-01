import { Link } from 'react-router-dom';

import { NavBarLink } from '../../../mock';
import { getMenuStyles } from '../burger/style';
import { scrollToTop } from '../../../helpers';

interface ListMenuProps {
  url: string;
  idx: number;
  name: string;
  title: string;
  height?: string;
  activeIdx: number;
  categories?: NavBarLink[];
  setActiveIdx: React.Dispatch<React.SetStateAction<number>>;
  setIsActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DropDownMenu = ({
  url,
  idx,
  title,
  activeIdx,
  categories,
  setActiveIdx,
  setIsActiveMenu,
}: ListMenuProps) => {
  const isActive = idx === activeIdx;

  const { dropdown, btn, link } = getMenuStyles(isActive);

  const heightUl = isActive ? `${categories && categories?.length * 28}px` : '0';

  const handlerClick = () => {
    if (isActive) {
      setActiveIdx(-1);
      return;
    }
    setActiveIdx(idx);
  };
//TODO change scrollToTop('auto')
  return (
    <li className='list-none w-full flex flex-col gap-2'>
      <div className='flex w-full justify-between'>
        <Link to={url} className={link} onClick={() =>{ setIsActiveMenu(false); scrollToTop()}} >
          {title}
        </Link>
        {categories && (
          <div
            className='w-full flex justify-end cursor-pointer hover:bg-gray-200 rounded-full'
            onClick={() => handlerClick()}
          >
            <span className={btn}>{isActive ? '-' : '+'}</span>
          </div>
        )}
      </div>

      {categories && (
        <ul
          className={dropdown}
          style={{
            height: heightUl,
          }}
        >
          {categories?.map((category, idx) => (
            <li className='w-full' key={`drop_down_${category.name}_${idx}`}>
              <Link 
                to={category.url}
                onClick={() => {setIsActiveMenu(false) ; scrollToTop()}}
                className='w-full block hover:text-secondTextHover  duration-150'
              >
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
