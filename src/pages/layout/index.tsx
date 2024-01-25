import clsx from 'clsx';
import { Outlet } from 'react-router-dom';

import Fff from '../../assets/img/house.jpg';

import { Up } from '../../assets/svg';
import { useScroll } from '../../hook';
import { scrollToTop } from '../../helpers';
import { Button, Footer, GoogleMaps, Header } from '../../components';
import { Banner } from '../../components/banner/inedx';

export const Layout = () => {
  const { scrollY } = useScroll();

  console.log(Fff);

  const isBtn = scrollY > 100;

  return (
    <>
      <Header />

      <Banner src={Fff} />
      <Outlet />
      {isBtn && (
        <button
          onClick={scrollToTop}
          className={clsx(
            'fixed bg-gray-800 rounded w-[34px] h-[38px] z-[1000] right-[20px] bottom-[38px] animate-fadeIn delay-75'
          )}
        >
          <Up className='w-full' />
        </button>
      )}
      {/* <Button name='text' route='/asdasdasd' /> */}
      <div className='photo-gallery'></div>
      <GoogleMaps />
      <Footer />
    </>
  );
};
