import React from 'react';

import ImgError from '../../assets/img/house.jpg';
import { Button } from '../../components';
interface IErrorsProps {
  text: string;
  url: string;
}

export const Errors: React.FC<IErrorsProps> = ({ text, url }) => {
  return (
    <section
      className='h-screen bg-cover bg-center flex flex-col justify-center items-center'
      style={{ backgroundImage: `url(${ImgError})` }}
    >
      <div className='w-full h-full absolute z-0 bg-black opacity-30 top-0' />

      <div
        className='container bg-green flex flex-col justify-center items-center gap-9 md:gap-20 
          overflow-y-hidden relative z-10'
      >
        <h1 className='font-secondFont mobile:max-w-[80%] md:max-w-[70%] xl:max-w-[inherit] text-subTitleClamp text-center text-secondText'>
          Oops! We can't find the page you're looking for
        </h1>
        <Button
          route={url}
          textContent={text}
          className='text-3xl max-w-[280px] m-auto hover:text-aqua transition duration-300 ease-in-out text-secondText font-semibold'
        />
      </div>
    </section>
  );
};

export default Errors;
