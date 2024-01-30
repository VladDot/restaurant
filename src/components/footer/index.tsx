import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='w-full py-4 bg-[#05090E] '>
      <div className='m-auto px-2 flex flex-col text-center justify-between gap-4 mobile:px-8 sm:flex-row sm:px-16 md:px-20 xl:max-w-[1200px] xl:px-0 desktop:max-w-[1360px]'>
        <p className='text-gray-400'>© 2021 ресторан СЕТИ</p>
        <div className='flex justify-between gap-5'>
          <Link className='text-gray-400' to='/'>
            Умови сайту
          </Link>
          <Link className='text-gray-400' to='/'>
            Конфіденційність
          </Link>
        </div>
      </div>
    </footer>
  );
};
