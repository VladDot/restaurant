import React from 'react';

import { Button } from '../../components';
import ImgError from '../../assets/img/house.jpg';
interface IErrorsProps {
  url: string;
  text: string;
}

export const Errors: React.FC<IErrorsProps> = ({ text, url }) => {
  return (
    <section
      style={{ backgroundImage: `url(${ImgError})` }}
      className='h-screen bg-cover bg-center flex flex-col justify-center items-center'
    >
      <div className='w-full h-full absolute z-0 bg-black opacity-30 top-0' />

      <div
        className='container bg-green flex flex-col justify-center items-center gap-9 md:gap-20 
          overflow-y-hidden relative z-10'
      >
        <h1 className='font-secondFont text-secondText text-subTitleClamp text-center select-none mobile:max-w-[80%] md:max-w-[70%] xl:max-w-[inherit] '>
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
