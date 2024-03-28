import { Title } from '../title';
import { SubTitle } from '../subtitle';
import { ExpandingElement } from '../expanding-element';
import { IsvgBanquet, svgBanquet } from '../../pages/banquet/config';

export const BanquetBenefits = () => {
  return (
    <section className='w-full flex flex-col gap-6'>
      <Title className='sectionTitle' text='ЧОМУ САМЕ У РЕСТОРАНІ СЕТИ' />

      <SubTitle className='sectionSubTitle' text='Вигідно провести банкет' />

      <div className='lg:flex lg:flex-wrap w-full lg:[&>div:last-child>div>h2]:max-w-[350px] '>
        {svgBanquet.map(({ svg, text }: IsvgBanquet) => (
          <ExpandingElement Svg={svg} text={text} key={`ExpandingElement_${text}_1`} />
        ))}
      </div>
    </section>
  );
};
