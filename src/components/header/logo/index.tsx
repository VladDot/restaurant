import { Link } from 'react-router-dom';

import { scrollToTop } from '../../../helpers';

import logoMain from '../../../assets/img/logo-seti-gold.png';

export const Logo = () => {
  return (
    <Link
      to='/'
      onClick={() => scrollToTop('auto')}
      className='max-w-[140px] md:max-w-[210px] lg:max-w-[210px] xl:max-w-[300px]'
    >
      <img alt='Logo' src={logoMain} className='w-full' />
    </Link>
  );
};
