import { Link } from 'react-router-dom';
import { navBar } from '../config';
import { ListMenu } from '../linksMenu';
import React from 'react';

export const NavBar = () => {
  return (
    <div className='flex gap-5'>
      {navBar.map((items, idx) => {
        return (
          <div key={`nav-bar-link-${idx}`}>
            <Link to={items.url}>{items.name}</Link>

            <ul>
              {items.category &&
                items.category?.map((item, idx) => (
                  <ListMenu {...item} idx={idx} key={`list_menu_${idx}_${item.name}-1`} />
                ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

// export interface NavBarLink {
//     name: string;
//     url: string;
//     category?: NavBarLink[];
// }

// interface ListMenuProps extends NavBarLink {
//     idx: number;
// }
