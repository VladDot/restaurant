import { Link } from 'react-router-dom';

import { FormCallback } from '../../components';

export const RequestCallback = () => {
  return (
    <section className='w-full bg-bgFormRequestCallback'>
      <div className='px-2 gap-7 py-4 flex flex-col items-center justify-center lg:flex-row lg:items-stretch container'>
        <div className='max-w-[600px] w-full flex justify-end lg:items-center lg:w-auto'>
          <div className='w-[50px] h-[50px] rounded-full bg-secondText'></div>
        </div>
        <div className='max-w-[400px] text-center text-white flex flex-col items-center gap-5'>
          <h2 className='select-none font-secondFont'>PHONE NUMBER FOR ORDERING:</h2>
          <Link to='tel:9876543210' className='hover:text-secondText duration-300'>
            +38 (068) 118-15-15
          </Link>
          <p className='select-none'>Зателефонуйте нам! Або замовте зворотний дзвінок.</p>
        </div>
        <FormCallback />
      </div>
    </section>
  );
};
