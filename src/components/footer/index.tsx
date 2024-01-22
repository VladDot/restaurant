import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='w-full p-4 bg-[#05090E] '>
      <div className='m-auto'>
        <p className='text-white'>© 2021 ресторан СЕТИ</p>

        <div>
          <Link className='text-white' to='/'>
            Умови сайту
          </Link>
          <Link className='text-white' to='/'>
            Конфіденційність
          </Link>
        </div>
      </div>
    </footer>
  );
};
