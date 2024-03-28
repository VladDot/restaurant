import { useState } from 'react';

import { useWindowWidth } from '../../hook';

import { getStyles } from './style';
import { AboutUsGallery } from './about-us-gallery';
import { CollapsibleWindow } from '../collapsible-window';

import { interiorGallery } from '../../mock';
import { textInfo } from '../../mock/textMock';

export const AboutUsInfo = () => {
  const { width } = useWindowWidth();
  const [isActive, setIsActive] = useState(false);

  const { continueText } = getStyles(isActive);

  return (
    <section className='container  py-8 md:flex gap-5'>
      <div className='relative pb-3 md:pr-[50px] md:pl-[18px] lg:pr-[80px] xl:pr-[100px] lg:pl-[50px] flex flex-col  justify-center'>
        <h2 className='mb-3  text-secondText text-[18px]'>ЗАТИШНИЙ СІМЕЙНИЙ ЗАКЛАД</h2>

        <h1 className='mb-5 text-subTitleClamp '>Ресторан "СЕТИ"</h1>
        <CollapsibleWindow
          closingHeight={0.5}
          isActive={isActive}
          className='relative'
          disabled={width > 767}
          onClick={() => setIsActive(!isActive)}
        >
          {textInfo.map(({ text }, idx) => (
            <p
              key={`info_about_${idx}`}
              className='text-[13px] md:text-[16px] lg:text-[20px] xl:text-[24px] text-fourth py-1 '
            >
              {text}
            </p>
          ))}
        </CollapsibleWindow>
        {!isActive && (
          <>
            <span className={continueText}></span>

            <span
              onClick={() => setIsActive(true)}
              className={`absolute top-[90%] right-0 text-[13px] w-fit transition-all duration-300 easy-in-out text-secondText  md:hidden cursor-pointer `}
            >
              Read more...
            </span>
          </>
        )}
      </div>
      <AboutUsGallery data={interiorGallery} />
    </section>
  );
};
