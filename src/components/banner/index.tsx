import clsx from 'clsx';

interface IBannerProps {
  src: string;
  title: string;
  content: string;
  className?: string;
}
export const Banner = ({ src, title, content, className }: IBannerProps) => {
  return (
    <section
      style={{ backgroundImage: `url(${src})` }}
      className={clsx(
        `w-full h-[65vh] mobile: bg-cover bg-[center] md:aspect-[2.42] relative flex items-center justify-center`,
        className
      )}
    >
      <div className='w-full h-full absolute z-0 bg-black opacity-30 top-0'></div>

      <div className='container relative z-10 mx-auto p-5p flex flex-col gap-[20px] md:gap-[45px] text-white translate-y-[80px]'>
        <p className='text-xl text-bannerContent text-[16px] md:text-2xl'>{content}</p>
        <h2 className='text-4xl md:text-7xl'>{title}</h2>
      </div>
    </section>
  );
};
