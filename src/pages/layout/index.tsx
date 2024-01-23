import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../../components';

import { Up } from '../../assets/svg';
import { scrollToTop } from '../../helpers';
import { useScroll } from '../../hook';
import { GoogleMaps } from '../../components/googleMaps';

export const Layout = () => {
  const { scrollY } = useScroll();
  const isBtn = scrollY > 100;
  return (
    <>
      <Header />
      <Outlet />
      {isBtn && (
        <button
          onClick={scrollToTop}
          className='fixed bg-rose-500 z-[1000] right-[20px] bottom-[30px] '
        >
          <Up className='w-[60px]' />
        </button>
      )}
      <div className='photo-gallery'></div>
      <GoogleMaps />
      <Footer />
    </>
  );
};
//
