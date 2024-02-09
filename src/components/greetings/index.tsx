import React from 'react';
import GreetingsImg from '../../assets/img/greetings-image.png';

export const Greetings = () => {
  return (
    <section className='w-full bg-secondBg sm:pt-8'>
      <div className='px-2 flex flex-col gap-16 py-7 text-center'>
        <div className='text-center w-full px-3 mobile:px-5 flex flex-col gap-4 sm:p-0 sm:max-w-[600px] sm:mx-auto sm:gap-8'>
          <h4 className='text-secondText text-xl sm:text-2xl select-none'>GREETINGS</h4>
          <h2 className='text-thirdText text-2xl sm:text-5xl select-none'>
            You in our restaurant SETI
          </h2>
          <p className='text-fourth text-lg sm:text-lg select-none'>
            SETI is a restaurant serving European cuisine for the whole family. Here you can enjoy
            delicious meat dishes, including those cooked on an open fire, a variety of fish dishes
            and fresh seafood, as well as exclusive salads and author's snacks from the chef. The
            menu also includes dishes that our children love.
          </p>
        </div>
        <div className='max-w-[1110px] mx-auto'>
          <img className='w-full' src={GreetingsImg} alt='Greetings Img' />
        </div>
      </div>
    </section>
  );
};
