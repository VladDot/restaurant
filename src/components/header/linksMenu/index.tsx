import { Link } from 'react-router-dom';
import { NavBarLink } from '../../../mock';

interface ListMenuProps extends NavBarLink {
  idx: number;
}

export const ListMenu: React.FC<ListMenuProps> = ({ name, url, idx }) => {
  return (
    <Link className='flex flex-col' to={url}>
      {name}
    </Link>
  );
};
