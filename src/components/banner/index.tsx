export const Banner = ({ src }: { src: string }) => {
  return (
    <div
      className={`w-full aspect-[2.42] bg-cover relative `}
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className='w-full h-full absolute z-0 bg-black opacity-30'></div>
      <div className=' text-white  '>
        <p>asdadssad</p>
        <h2 className=''> UADILFYAT</h2>
      </div>
    </div>
  );
};
