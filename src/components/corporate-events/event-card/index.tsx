interface IOrganizationСardProps {
  img: string;
  className: string;
}

export const OrganizationСard: React.FC<IOrganizationСardProps> = ({ img, className }) => {
  return (
    <div className=' relative w-full lg:w-[50%] h-[30vh] sm:h-[20vh] lg:h-[30vh] flex items-center justify-center'>
      <div
        className={`absolute w-full z-[100] flex items-center justify-center bg-opacityBg opacity-[0.65] overflow-hidden ${className}`}
      />

      <div
        className={`top-0 left-0 relative  max-w-[650px] w-full  bg-cover ${className}`}
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className='absolute top-1/2 -translate-y-1/2 p-2 text-left z-[200] text-white'>
          <h1 className='text-3xl mb-2 font-secondFont'>Корпоративні заходи</h1>

          <ul className='list-disc pl-8 text-md [&>*]:font-thirdFont'>
            <li>Корпоративні заходи "під ключ";</li>

            <li>
              Розважальні заходи (ювілей компанії, календарні, професійні та корпоративні свята);
            </li>

            <li>Офіційні заходи (конференція чи семінар, презентація, церемонія відкриття).</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
