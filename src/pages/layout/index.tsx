import clsx from 'clsx';
import { Outlet } from 'react-router-dom';

import ImgBanner from '../../assets/img/house.jpg';

import { Up } from '../../assets/svg';
import { useScroll } from '../../hook';
import { scrollToTop } from '../../helpers';
import {
  Banner,
  Button,
  Footer,
  FormBooking,
  FormLogin,
  GoogleMaps,
  Header,
} from '../../components';

export const Layout = () => {
  const { scrollY } = useScroll();
  const isBtn = scrollY > 100;

  return (
    <>
      <Header />
      <Banner src={ImgBanner} content='asdasdasd' title='ALSDasdas' className='mb-[200px]' />
      <FormLogin />
      <FormBooking />
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
      <div className='w-full h-[40vh] my-10 bg-black flex gap-1 flex-col flex-wrap justify-center items-center'>
        <div className='w-[47%] h-[calc(100%*0.3)] bg-red'></div>
        <div className='w-[47%] h-[calc(100%*0.1)] bg-red'></div>
        <div className='w-[47%] h-[calc(100%*0.34)] bg-red'></div>
        <div className='w-[47%] h-[calc(100%*0.2)] bg-red'></div>
        <div className='w-[47%] h-[calc(100%*0.2)] bg-red'></div>
        <div className='w-[47%] h-[calc(100%*0.34)] bg-red'></div>
        <div className='w-[47%] h-[calc(100%*0.1)] bg-red'></div>
        <div className='w-[47%] h-[calc(100%*0.3)] bg-red'></div>
      </div>
      <Button textContent='text' type='submit' disabled className='max-w-[260px]' />
      <div className='photo-gallery'></div>
      <GoogleMaps />
      <Footer />
    </>
  );
};
