import clsx from 'clsx';
import ImgBanner from '../../assets/img/house.jpg';
import { SubTitle, Title } from '../../components';
interface IBannerProps {
  src?: string;
  title: string;
  content?: string;
  className?: string;
}
export const Banner = ({ src = ImgBanner, title, content, className }: IBannerProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${src})` }}
      className={clsx(
        `w-full h-full aspect-[1.11] mobile:bg-cover bg-[center] md:aspect-[2.42] relative flex items-center justify-center`,
        className
      )}
    >
      <div className='w-full h-full absolute z-0 bg-black opacity-30 top-0' />

      <div className='container relative z-10 mx-auto p-5p flex flex-col gap-[20px] md:gap-[35px] text-white translate-y-[80px]'>
        <Title className='select-none bannerTitle' text={content} />
        <SubTitle className='select-none bannerSubTitle' text={title} />
      </div>
    </div>
  );
};
