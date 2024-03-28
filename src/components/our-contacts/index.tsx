import { Link } from 'react-router-dom';

import { SubTitle, Title } from '../../components';
import { WaveBg } from '../../assets/svg';

export const OurContacts = () => {
  return (
    <section className='py-8 flex flex-col items-center justify-center gap-8'>
      <WaveBg />
      <Title text='greetings' className='sectionTitle' />
      <SubTitle className='sectionSubTitle' text='We are open for you again' />
      <div className='flex flex-wrap md:flex-nowrap container items-stretch justify-around gap-10'>
        <div className='w-full min-w[310px] max-w-[430px] border-2 relative border-secondTextHover'>
          <h3 className='w-[80%] mx-auto text-center absolute top-[calc(0px_+_7px)] -translate-y-1/2 left-1/2 -translate-x-1/2 z-30 bg-white font-secondFont'>
            WE WORK
          </h3>

          <div className='w-[calc(100%_+_30px)] h-[calc(100%_-_20px)] border-2 border-secondTextHover relative top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center py-8 '>
            <div className='w-full max-w-[386px] text-center flex flex-col items-center justify-center gap-8 '>
              <p className='text-md'>Every day from 10.00 to 22.00</p>

              <p className='font-secondFont text-lg'>
                15A, Nadiia Alekseenko Street, Dnipro, Dnipropetrovska oblast, 49000
              </p>

              <p>Weekends and holidays</p>

              <p className='font-thirdFont '>We will inform you additionally</p>
            </div>
          </div>
        </div>

        <div className='w-full min-w[310px] max-w-[430px] border-2 relative border-secondTextHover'>
          <h3 className='w-[80%] mx-auto text-center absolute top-[calc(0px_+_7px)] -translate-y-1/2 left-1/2 -translate-x-1/2 z-30 bg-white font-secondFont'>
            OUR CONTACTS
          </h3>
          <div className='w-[calc(100%_+_30px)] h-[calc(100%_-_20px)] border-2 border-secondTextHover relative top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center py-8 '>
            <div className='w-full max-w-[386px] text-center flex flex-col items-center justify-center gap-8 '>
              <Link
                className='hover:text-secondTextHover hover:font-bold duration-150'
                to='tel:+38 (068) 118-15-15'
              >
                +38 (068) 118-15-15
              </Link>

              <p className='font-secondFont text-lg'>Administrator number</p>

              <span className='flex gap-6'>
                <Link
                  className='hover:text-secondTextHover font-semibold text-lg duration-150 text-fourth messenger'
                  to='#'
                >
                  WhatsApp
                </Link>

                <Link
                  className='hover:text-secondTextHover font-semibold text-lg duration-150 text-fourth messenger'
                  to='#'
                >
                  Viber
                </Link>
              </span>

              <p className='font-thirdFont '>Contact via social networks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
